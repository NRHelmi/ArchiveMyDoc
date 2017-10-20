package com.archiveMyDoc.Models;

import org.springframework.data.annotation.Id;

public class Document{
	
	@Id
	public String id;
	public String title;
	public String type;
	
	public Document(){}
	public Document(String title, String type){
		this.title = title;
		this.type  = type;
	}
		
}