package com.archiveMyDoc.Models;

import org.springframework.data.annotation.Id;

public class Folder{
	
	@Id
	public String id;
	public String folderName;
	public String parentId;
	
	public Folder() {}
	public Folder(String folderName) {
		this.folderName = folderName;
	}
	
	public Folder(String folderName, String parentFolderId) {
		this.folderName = folderName;
		this.parentId = parentFolderId;
	}
	
	@Override
	public String toString() {
		return "{Id: "+id+", folderName: "+folderName+", parentFolderId: "+parentId+"}";
	}
}