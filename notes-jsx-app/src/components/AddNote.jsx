import { useState, useEffect} from 'react';
import React from 'react'
import NotesService from '../services/NotesService';
import { useNavigate, useParams } from 'react-router-dom';

const AddNote = () => {

    const [title,setTitle] = useState('');
    const[body,setBody] = useState('');
    const[category,setCategory] = useState('programming');
    const navigate = useNavigate();
    const {id} = useParams(); //When the user clicks on the handleEdit button. It will go to addNote page and fetch the id from useParam.
    const [errors, setErrors]=useState(false); //Used for form validation.
    
    /* ---------------------------------- Save the note details after adding ---> START ---------------------------------- */
    const saveNote= (e) => 
    {
        e.preventDefault();
        if(!title || !body)
        {
            /* If the user is keeping the fields as empty without entering the details the form validation will kick in from here */
            setErrors(true);
            return;
        }
        const note={title,body,category,id}
        console.log('printing note',note);
        if(id) //If the id is present then we must update the details of that specific id logic start
        {
            //call the service update method
            NotesService.updateNote(note)
            .then(response=>{
                console.log("Note updated successfully",response.data);
                navigate("/");//return to Home page
            })
            .catch(error=>{
                console.error('Something went wrong',error);
            })
        }
        else
        {
            //Call the service create method
            NotesService.createNote(note)
            .then(response=>{
                console.log("Note added successfully",response.data);
                navigate("/");//return to Home page
            })
            .catch(error=>{
                console.error('Something went wrong',error);
            })
        }
    
    }
    /* ---------------------------------- Save the note details after adding ---> END ---------------------------------- */

    /* ---------------------------------- Updating the note Details using useEffect Hook ---> START ---------------------------------- */
    useEffect(()=>
    {   //The updated value will be from useState. We will use useEffect for loading the data.
        if(id)
        {
            NotesService.getById(id)
                .then(n=>{
                    setTitle(n.data.title);
                    setBody(n.data.body);
                    setCategory(n.data.category);
                })
                .catch(error=>{
                    console.error('Something went wrong',error);
                })
        }
    },[id])
    /* ---------------------------------- Updating the note Details using useEffect Hook ---> END ---------------------------------- */

    return (
    <div className="create">
        <h5>{id?"Update Note": "Add a New Note"}</h5>
        {errors && <span style={{color:`red`,fontStyle:`italic`}}>Please enter the mandatory fields</span>}
        <form>

            <div className='form-group'>
                <label htmlFor='title'>Note Title: <sup>*</sup></label>
                <input id="title" 
                className="form-control"
                value={title}
                type="text" 
                onChange={(e) => setTitle(e.target.value)}
                ></input>
            </div>

            <div className='form-group'>
                <label htmlFor='body'>Note Description: <sup>*</sup></label>
                <textarea id="body" 
                className="form-control"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
            </div>


            <div className='form-group'>
                <label htmlFor='category'>Note Category: <sup>*</sup></label>
                <select id="category" 
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                > 
                    <option value="programming">Programming</option>
                    <option value="vacation">Vacation</option>
                    <option value="meeting">Meeting</option>
                    <option value="blogging">Blogging</option>
                </select>
            </div>

            <div className="text-center">
                <button onClick={(e)=>saveNote(e)}>{id?"Update Note": "Add a New Note"}</button>
            </div>
                    
        </form>
    </div>
  )
}

export default AddNote
