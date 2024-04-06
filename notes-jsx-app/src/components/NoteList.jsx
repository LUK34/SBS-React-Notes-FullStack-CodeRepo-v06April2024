import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import NotesService from "../services/NotesService";
import React from 'react';
import Moment from "react-moment";


const NoteList = () =>
{
    
    const [notes,setNotes] = useState([]);

    useEffect(() => {
      NotesService.getAll()
          .then(response => {
              console.log('printing response', response.data);
              setNotes(response.data);
          })
          .catch(error => {
              console.log('something went wrong', error);
          })
  }, []);


  return (
    <div className="main-content">
      <h4>List of Notes</h4>
        <div className="notes-list mt-4">
            {
            notes.length > 0 ? notes.map(n=>(
                    <div key={n.id} className="notes-preview mt-3">
                      <Link to={`/notes/${n.id}`}>
                        <h5 className='primary-color text-capitalize'>{n.title}</h5>
                        <p>{n.body}</p>
                        <p>{n.category}</p>
                        <Moment fromNow className="text-italic">{n.updatedAt}</Moment>
                      </Link>
                    </div>  
                )):<div>No data is available</div>
        }
        </div>
    </div>
  )
}

export default NoteList





/*
rafc

NoteService.getAll will return a promise. The call is done asynchronously so we need to use then method.

*/