package com.archiveMyDoc.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller{
	@RequestMapping("/")
	public String HelloWorld() {
		return "Hello World !!";
	}
}