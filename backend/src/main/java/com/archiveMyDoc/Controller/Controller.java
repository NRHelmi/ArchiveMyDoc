package com.archiveMyDoc.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.archiveMyDoc.Models.Document;
import com.archiveMyDoc.Repository.DocumentRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class Controller{
	
	@Autowired
	private DocumentRepository documentRepo;
	
	@RequestMapping("/")
	public String HelloWorld() {
		return "Hello World !!";
	}
	
	@RequestMapping("/getAllDocuments")
	public List<Document> getAllDocuments(){
		return documentRepo.findAll();
	}
	
	@RequestMapping(value = "/insertDocument", method = RequestMethod.POST)
	public String SaveDocument(@RequestBody Document document){
		System.out.println(document.id);
		documentRepo.save(document);
		return "{response: 200}";
	}
}