package com.archiveMyDoc.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.archiveMyDoc.Models.Folder;
import com.archiveMyDoc.Repository.FolderRepository;

@Component
public class FolderService{
	
	@Autowired
	private FolderRepository folderRepo;
	
	public FolderService(){}

	public List<Folder> getAllFolders(){
		return folderRepo.findAll();
	}
	
	public Folder getFolder(String folderId) {
		return folderRepo.findById(folderId);
	}
	
	public List<Folder> getFolderByParentId(String parentId){
		return folderRepo.findByParentId(parentId);
	}
	
	public ResponseEntity<String> save(Folder folder){
		folderRepo.save(folder);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	public ResponseEntity<String> deleteById(String folderId){
		//TODO delete files within this folder
		List<Folder> folders = folderRepo.findByParentId(folderId);
		for(Folder folder: folders) {
			deleteById(folder.id);
		}
		folderRepo.deleteById(folderId);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
}