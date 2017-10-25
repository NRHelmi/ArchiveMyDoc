package com.archiveMyDoc.DAOs;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.mongodb.gridfs.GridFSDBFile;


@Component
public class GridFsDAO{
	
	@Autowired
	private GridFsOperations gridFsOperation;
	
	public GridFsDAO() {}
	
	public ResponseEntity<String> SaveFile(MultipartFile file) throws IOException{	
		gridFsOperation.store(file.getInputStream(), file.getOriginalFilename(), file.getContentType());
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	public String getAllFiles() {
		return gridFsOperation.find(null).toString();
	}
	
	public ResponseEntity<InputStreamResource> downloadFile(String fileId) throws IOException {
		System.out.println(fileId);
		
		GridFSDBFile file = gridFsOperation.find(new Query(Criteria.where("_id").is(fileId))).get(0);
		return ResponseEntity.ok()
				.contentLength(file.getLength())
				.contentType(MediaType.parseMediaType(file.getContentType()))
				.body( new InputStreamResource(file.getInputStream()));
	}
	
	public ResponseEntity<String> deleteAllFiles(){
		gridFsOperation.delete(null);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
}