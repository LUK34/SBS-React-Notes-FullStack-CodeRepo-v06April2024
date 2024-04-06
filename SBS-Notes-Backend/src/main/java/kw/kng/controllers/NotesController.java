package kw.kng.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kw.kng.entity.Note;
import kw.kng.service.NotesService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class NotesController 
{
	@Autowired
	NotesService ns;
	
	@GetMapping("/notes")
	public ResponseEntity<List<Note>> readNotes()
	{
		return new ResponseEntity<List<Note>>(ns.findAllNotes(), HttpStatus.OK);
	}
	
	@PostMapping("/notes")
	public ResponseEntity<Note> createNote(@RequestBody Note note)
	{
		return new ResponseEntity<Note>(ns.saveNote(note), HttpStatus.CREATED);
	}

	@GetMapping("/notes/{id}")
	public ResponseEntity<Note> readNote(@PathVariable Long id)
	{
		return new ResponseEntity<Note>(ns.findNoteById(id), HttpStatus.OK);
	}
	
	@DeleteMapping("/notes/{id}")
	public ResponseEntity<HttpStatus> deleteNote(@PathVariable Long id)
	{
		ns.deleteNoteById(id);
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
	
	@PutMapping("/notes")
	public ResponseEntity<Note> updateNote(@RequestBody Note note)
	{
		return new ResponseEntity<Note>(ns.saveNote(note), HttpStatus.OK);
	}
	
}


/*
1. What does @CrossOrigin annotation logic stand for in SpringBoot Application??
 
Ans:
The @CrossOrigin annotation in a Spring Boot application is used to enable Cross-Origin Resource Sharing (CORS) on the server.
CORS is a security feature that restricts web applications from making requests to a domain different from the domain that served the web application. 
However, there are many cases where a web application may need to make requests to a server hosted on a different domain, protocol, or port from its own.

When you annotate a controller or a specific route handler method in your Spring Boot application with @CrossOrigin, 
you are instructing Spring to allow web applications from different origins to make requests to your server.

The @CrossOrigin("*") specifically means that your Spring Boot application's server will accept requests from any origin. 
This is done by adding specific HTTP headers to the response that inform the browser it is permitted to share resources with the requesting code, regardless of its origin.

Here's what it signifies:

"*": 
This is a wildcard value that means any domain can access your resources.
It's useful for APIs intended to be publicly accessible from any frontend domain.
 However, using a wildcard is not recommended for production environments due to security concerns;
 it's better to specify the exact origins that should be allowed access.
By default, without specifying the @CrossOrigin annotation, Spring Boot applications do not accept cross-origin requests, adhering to the same-origin policy for web security. This annotation is a simple and declarative way to control and allow cross-origin requests to your application.


2. How to create enviroment variable in POSTMAN??

Ans:
You need to create an enviroment variable in POSTMAN.
2.1 Open the postman . You will see "No Enviroment" next to that you will see a small tablet with eye.
2.2 Click on that small table with eye and enter the details of the enviroment variable . Give it some name and the url which you want to use in postman.



3. How to use the enviroment variable in POSTMAN??

Ans: 
3.1 After creating the enviroment variable. Select the required enviroment varaiable from the dropdown option.
3.2 To access the enviroment variable use {{url}}. this will fetch the url link specified as the enviroment variable selected
from the dropdown option.

CODE:
{{url}}

3.3 Hover the mouse on the url and you will see the link that you stored in the enviroment variable.





 */