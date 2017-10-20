package com.archiveMyDoc.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.archiveMyDoc.Models.Document;
import com.archiveMyDoc.Repository.DocumentRepository;

@CrossOrigin(origins="*")
@RestController
public class Controller{
	
	@Autowired
	private DocumentRepository documentRepo;
	
	@Autowired
	private GridFsOperations gridOperation;
	
	@RequestMapping("/")
	public String HelloWorld() {
		return "Hello World !!";
	}
	
	@RequestMapping("/getAllDocuments")
	public List<Document> getAllDocuments(){
		return documentRepo.findAll();
	}
	
	@RequestMapping(value="/insertDocument", method=RequestMethod.POST)
	public String SaveDocument(@RequestBody Document document){
		System.out.println(document.id);
		documentRepo.save(document);
		return "{response: 200}";
	}
	
	@RequestMapping(value="/uploadFile", method=RequestMethod.POST)
	public String SaveFile(@RequestParam(value="file", required=true) MultipartFile file,
										RedirectAttributes redirectAttributes){
		
		System.out.println(file.getName());
		
		return "{response: 200}";
	}
}