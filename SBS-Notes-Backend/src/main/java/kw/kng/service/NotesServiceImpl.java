package kw.kng.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kw.kng.entity.Note;
import kw.kng.repo.NotesRepository;

@Service
public class NotesServiceImpl implements NotesService
{
	@Autowired
	NotesRepository nrepo;
	
	@Override
	public List<Note> findAllNotes()
	{
		return nrepo.findAll();
		
	}
	
	@Override
	public Note saveNote(Note note)
	{
		return nrepo.save(note);
		
	}

	@Override
	public Note findNoteById(Long id)
	{
		Optional<Note> n= nrepo.findById(id);
		
		if(!n.isPresent())
		{
			throw new EntityNotFoundException("Note not found with id value= " + id);
		}
		return n.get();
		
	}
	
	@Override
	public void deleteNoteById(Long id) 
	{
	     if (!nrepo.existsById(id))
	     {
	            throw new EntityNotFoundException("Note not found with id " + id);
	      }
	    nrepo.deleteById(id);
	}
	
	
	
}
