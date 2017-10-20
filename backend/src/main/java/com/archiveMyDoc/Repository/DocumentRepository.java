package com.archiveMyDoc.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.archiveMyDoc.Models.Document;

public interface DocumentRepository extends MongoRepository<Document, String>{
	
	public Document findById(String id);
	public List<Document> findAll();
}