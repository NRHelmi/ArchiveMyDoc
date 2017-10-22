package com.archiveMyDoc.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.archiveMyDoc.Models.Document;
import com.archiveMyDoc.Repository.DocumentRepository;
import com.mongodb.gridfs.GridFSDBFile;

@CrossOrigin(origins="*")
@RestController
public class Controller{
	
	@Autowired
	private DocumentRepository documentRepo;
	
	@Autowired
	private GridFsOperations gridFsOperation;
	
	@GetMapping("/")
	public String HelloWorld() {
		return "Hello World !!";
	}
	
	@GetMapping("/getAllDocuments")
	public List<Document> getAllDocuments(){
		return documentRepo.findAll();
	}
	
	@PostMapping("/insertDocument")
	public String SaveDocument(@RequestBody Document document){
		System.out.println(document.id);
		documentRepo.save(document);
		return "{response: 200}";
	}
	
	@PostMapping("/uploadFile")
	public String SaveFile(@RequestParam(value="file", required=true) MultipartFile file,
										RedirectAttributes redirectAttributes) throws IOException{
		
		System.out.println(file.getName());
		gridFsOperation.store(file.getInputStream(),file.getOriginalFilename());
		
		return "{response: 200}";
	}
	
	@GetMapping("/getAllFiles")
	public String getAllFiles() {
		return gridFsOperation.find(null).toString();
	}
}