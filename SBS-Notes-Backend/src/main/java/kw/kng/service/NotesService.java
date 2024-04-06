package kw.kng.service;

import java.util.List;

import kw.kng.entity.Note;

public interface NotesService 
{
	public List<Note> findAllNotes();
	public Note saveNote(Note note);
	public Note findNoteById(Long id);
	public void deleteNoteById(Long id);
	

}
