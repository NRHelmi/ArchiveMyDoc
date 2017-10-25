package com.archiveMyDoc.DAOs;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.archiveMyDoc.Models.Document;
import com.archiveMyDoc.Repository.DocumentRepository;

@Component
public class DocumentDAO{
	
	@Autowired
	private DocumentRepository documentRepo;
	
	public DocumentDAO(){}

	public List<Document> getAllDocuments(){
		return documentRepo.findAll();
	}
	
	public ResponseEntity<String> SaveDocument(Document document){
		System.out.println(document.id);
		documentRepo.save(document);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
}