package com.archiveMyDoc.Repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.archiveMyDoc.Models.Folder;

public interface FolderRepository extends MongoRepository<Folder, Serializable>{
	
	public Folder findById(String id);
	public List<Folder> findAll();
	public List<Folder> findByParentId(String parendId);
	public void deleteById(String folderId);
}