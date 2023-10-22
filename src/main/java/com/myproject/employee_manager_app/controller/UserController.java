package com.myproject.employee_manager_app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.myproject.employee_manager_app.exception.AccountNotExistException;
import com.myproject.employee_manager_app.pojo.EmployeePojo;
import com.myproject.employee_manager_app.pojo.UserPojo;
import com.myproject.employee_manager_app.response.UserResponce;
import com.myproject.employee_manager_app.service.UserService;

import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
	@Autowired
	private UserService service;
	
	
	//Create Account And Set Session
	@PostMapping("createAccount")
	public ResponseEntity<UserResponce> createAccount(@RequestBody UserPojo user){
		UserPojo pojo = service.createUser(user);
		
		if (pojo != null) {
			return new ResponseEntity<UserResponce>(new UserResponce("Account Created Successfully...Login TO Proceed", pojo), HttpStatus.OK);
		}
		return new ResponseEntity<UserResponce>(new UserResponce("Account Not Created!!!", null), HttpStatus.NOT_ACCEPTABLE);
	}
	
	
	@PostMapping("login")
	public ResponseEntity<UserResponce> login(@RequestBody UserPojo pojo, HttpSession session){
		UserPojo user;
		try {
			user = service.login(pojo);
			if (user != null) {
				session.setAttribute("login", user);
				return new ResponseEntity<UserResponce>(new UserResponce("Login Successfully", user),HttpStatus.ACCEPTED );
			}
			return new ResponseEntity<UserResponce>(new UserResponce("Invalid Data, Login Failed!!!", null), HttpStatus.NOT_ACCEPTABLE);
			
		} catch (AccountNotExistException e) {
			
			return new ResponseEntity<UserResponce>(new UserResponce(e.getMessage(), null), HttpStatus.NOT_ACCEPTABLE);
		}
		
	}
}
