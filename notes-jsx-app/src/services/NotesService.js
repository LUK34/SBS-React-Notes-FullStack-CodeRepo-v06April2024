import httpClient from '../http-common';

const getAll = () =>
{
   return httpClient.get("/notes"); 
}
const createNote= data=>
{
   return httpClient.post("/notes", data);
}

const getById=(id)=>
{
   return httpClient.get(`/notes/${id}`);
}

const deleteNoteById=(id)=>
{
   return httpClient.delete(`/notes/${id}`); 
}

const updateNote=data=>
{
   return httpClient.put("/notes", data); 
}


export default {getAll, createNote, getById, deleteNoteById, updateNote};
