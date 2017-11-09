package com.archiveMyDoc.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.archiveMyDoc.Services.FolderService;
import com.archiveMyDoc.Services.GridFsService;
import com.archiveMyDoc.Models.Folder;


@RestController
@CrossOrigin(origins="*")
public class Controller{
	
	@Autowired
	private FolderService folderService;
	
	@Autowired
	private GridFsService gridFsService;
	
	
	@GetMapping("/")
	public String HelloWorld() {
		return "Hello World, Backend is working !!";
	}
	/**
	 * @ File Controller
	 */
	@PostMapping("/file")
	public ResponseEntity<String> SaveFile(@RequestParam(value="file", required=true) MultipartFile file,
											@RequestParam(value="parent", required=true) String parent,
										RedirectAttributes redirectAttributes) throws IOException{
		return gridFsService.SaveFile(file, parent);
		
	}
	
	@GetMapping("/files")
	public String getAllFiles() {
		return gridFsService.getAllFiles();
	}
	
	@GetMapping("/file/{fileId}")
	public  ResponseEntity<InputStreamResource> downloadFile(@PathVariable("fileId")String fileId) throws IOException {
		return gridFsService.downloadFile(fileId);
	}
	
	@DeleteMapping("/files")
	public ResponseEntity<String> deleteAllFiles(){
		return gridFsService.deleteAllFiles();
	}
	/**
	 * @ Folder Controller
	 */
	@GetMapping("/folders")
	public List<Folder> getFolders() {
		return folderService.getAllFolders();
	}
	
	@GetMapping("/folder/{folderId}")
	public Folder getFolder(@PathVariable("folderId")String folderId) {
		return folderService.getFolder(folderId);
	}
	
	@GetMapping("/folder/parent/{parentId}")
	public List<Folder> getFolderByParentId(@PathVariable("parentId")String parentId){
		return folderService.getFolderByParentId(parentId);
	}
	
	@PostMapping("/folder")
	public  ResponseEntity<String> saveFolder(@RequestBody Folder folder){
		System.out.println(folder);
		return folderService.save(folder);
	}
	
	@DeleteMapping("/folder/{folderId}")
	public ResponseEntity<String> deleteFolder(@PathVariable("folderId")String folderId){
		return folderService.deleteById(folderId);
	}
	
}