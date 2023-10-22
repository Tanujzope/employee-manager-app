package com.myproject.employee_manager_app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.myproject.employee_manager_app.exception.EmployeeNotFoundException;
import com.myproject.employee_manager_app.pojo.EmployeePojo;
import com.myproject.employee_manager_app.pojo.UserPojo;
import com.myproject.employee_manager_app.response.EmployeeResponce;
import com.myproject.employee_manager_app.service.EmployeeService;


@CrossOrigin("http://localhost:3000")
@RestController
public class EmployeeController {
	@Autowired
	private EmployeeService service;
	
	@GetMapping("/employees")
	public List<EmployeePojo> getAllEmployees(@SessionAttribute(name = "login", required = false)UserPojo user){
		List<EmployeePojo> employees = service.getAllEmployees();
		
		if (!employees.isEmpty()) {
			return employees;
		}
		return null;
	}
	
	
	@PostMapping("addEmployees")
	public EmployeePojo addEmployee(@SessionAttribute(name = "login", required = true)UserPojo user,@RequestBody EmployeePojo pojo) {
		EmployeePojo employee = service.addEmployee(pojo);
		
		if (employee != null) {
			return employee;
		}
		return null;
	}
	
	@GetMapping("getEmployee/{id}")
	public ResponseEntity<EmployeeResponce> getEmployee(@SessionAttribute(name = "login", required = true)UserPojo user,@PathVariable int id){
		EmployeePojo employee;
		try {
			employee = service.getEmployee(id);
			if (employee!= null) {
				return new ResponseEntity<EmployeeResponce>(new EmployeeResponce("Employee Fetched Successfully", employee, null), HttpStatus.FOUND);
			}
			throw new EmployeeNotFoundException("Employee Not Found");
			
		} catch (EmployeeNotFoundException e) {
			return new ResponseEntity<EmployeeResponce>(new EmployeeResponce(e.getMessage(), null, null), HttpStatus.NOT_FOUND);
		}
		
		
	}
	
	
	@PutMapping("update/{id}")
	public ResponseEntity<EmployeeResponce> updateEmployee(@SessionAttribute(name = "login", required = true)UserPojo user,@PathVariable int id, @RequestBody EmployeePojo emp) {
		EmployeePojo employee;
		try {
			employee = service.updateEmployee(id, emp);
			if (employee != null) {
				return new ResponseEntity<EmployeeResponce>(new EmployeeResponce("Updated Successfully", employee, null), HttpStatus.OK);
			}
			return new ResponseEntity<EmployeeResponce>(new EmployeeResponce("Not Updated", employee , null), HttpStatus.NOT_ACCEPTABLE);
		} catch (EmployeeNotFoundException e) {
			return new ResponseEntity<EmployeeResponce>(new EmployeeResponce(e.getMessage(), null, null), HttpStatus.BAD_GATEWAY);
		}
		
	}
	
	@DeleteMapping("delete/{id}")
	public ResponseEntity<EmployeeResponce> deleteEmployee(@SessionAttribute(name = "login", required = true)UserPojo user,@PathVariable int id){
		EmployeePojo employee;
		try {
			employee = service.deleteEmployee(id);
			if (employee != null) {
				return new ResponseEntity<EmployeeResponce>(new EmployeeResponce("Deleated", employee, null), HttpStatus.ACCEPTED);
			}
			return new ResponseEntity<EmployeeResponce>(new EmployeeResponce("not deleted", null, null), HttpStatus.BAD_REQUEST);
		} catch (EmployeeNotFoundException e) {
			return new ResponseEntity<EmployeeResponce>(new EmployeeResponce(e.getMessage(), null, null), HttpStatus.NOT_FOUND);
		}
		
	}
}
