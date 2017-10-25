package com.archiveMyDoc.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.archiveMyDoc.DAOs.DocumentDAO;
import com.archiveMyDoc.DAOs.GridFsDAO;
import com.archiveMyDoc.Models.Document;


@CrossOrigin(origins="*")
@RestController
public class Controller{
	
	@Autowired
	private DocumentDAO documentDAO;
	
	@Autowired
	private GridFsDAO gridFsDAO;
	
	
	@GetMapping("/")
	public String HelloWorld() {
		return "Hello World !!";
	}
	
	@GetMapping("/getAllDocuments")
	public List<Document> getAllDocuments(){
		return documentDAO.getAllDocuments();
	}
	
	@PostMapping("/saveDocument")
	public ResponseEntity<String> saveDocument(@RequestBody Document document){
		
		System.out.println(document);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	@PostMapping("/uploadFile")
	public ResponseEntity<String> SaveFile(@RequestParam(value="file", required=true) MultipartFile file,
										RedirectAttributes redirectAttributes) throws IOException{
		return gridFsDAO.SaveFile(file);
		
	}
	
	@GetMapping("/getAllFiles")
	public String getAllFiles() {
		return gridFsDAO.getAllFiles();
	}
	
	@GetMapping("/downloadFile/{fileId}")
	public  ResponseEntity<InputStreamResource> downloadFile(@PathVariable("fileId")String fileId) throws IOException {
		return gridFsDAO.downloadFile(fileId);
	}
	
	@GetMapping("/deleteAllFiles")
	public ResponseEntity<String> deleteAllFiles(){
		return gridFsDAO.deleteAllFiles();
	}
}