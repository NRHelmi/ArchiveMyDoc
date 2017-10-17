package com.archiveMyDoc.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class Controller{
	@RequestMapping("/")
	public String HelloWorld() {
		return "Hello World !!";
	}
}