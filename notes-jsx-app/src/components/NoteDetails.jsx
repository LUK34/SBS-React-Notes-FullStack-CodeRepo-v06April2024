import { useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router";
import NotesService from "../services/NotesService";
import Moment from "react-moment";

const NoteDetails =()=>
{
    const {id}=useParams();
    const[currentNote, setCurrentNote]=useState('');
    const navigate=useNavigate();
    
    /* --------------------------- Finding a note by id  ---> START --------------------------- */
    useEffect(()=>{
        NotesService.getById(id)
            .then(n=>{
                setCurrentNote(n.data);
            })
            .catch(error=>{
                console.log('Something went wrong',error);
            })
    },[id]);
    /* --------------------------- Finding a note by id ---> END  --------------------------- */

    /* --------------------------- Delete note by id  ---> START --------------------------- */
    const handleDelete=()=>
    {
        NotesService.deleteNoteById(id)
            .then(response=>{
                navigate("/");
            })
            .catch(error=>{
                console.log("Something went wrong!!!");
            });
    };
     /* --------------------------- Delete note by id  ---> END --------------------------- */

    /* ---------------------------------- Edit note ---> START ---------------------------------- */
    const handleEdit=()=>
    {
       navigate(`/notes/edit/${id}`);
    }
     /* ---------------------------------- Edit note ---> END ---------------------------------- */

    return (
        <div className="note-details main-content">
          {
            currentNote &&  
            <div>
                <article>
                    <h5 className="text-capitalize primary-color">{currentNote.title}</h5>
                    <div className="mb-3 font-italic metadata">
                        Updated At: <Moment fromNow>{currentNote.updatedAt}</Moment>
                        <span className="text-capitalize">, Category: {currentNote.category}</span>
                    </div>
                    <div className="mb-3">{currentNote.body}</div>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete} className="ml-2">Delete</button>
                </article>
            </div>
          }
        </div>
    );
}

export default NoteDetails;