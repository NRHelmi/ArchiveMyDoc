package com.archiveMyDoc.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.archiveMyDoc.Models.Folder;
import com.archiveMyDoc.Repository.FolderRepository;

public class FolderService{
	
	@Autowired
	private FolderRepository folderRepo;
	
	public FolderService(){}

	public List<Folder> getAllDocuments(){
		return folderRepo.findAll();
	}
	
	public ResponseEntity<String> SaveDocument(Folder folder){
		System.out.println(folder.id);
		folderRepo.save(folder);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
}