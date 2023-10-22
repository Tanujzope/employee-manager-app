package com.myproject.employee_manager_app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myproject.employee_manager_app.exception.EmployeeNotFoundException;
import com.myproject.employee_manager_app.pojo.EmployeePojo;
import com.myproject.employee_manager_app.repository.EmployeeRepository;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepository repository;

	public List<EmployeePojo> getAllEmployees() {
		List<EmployeePojo> employees = repository.findAll();
		if (employees != null) {
			return employees;
		}
		return null;
	}

	public EmployeePojo addEmployee(EmployeePojo pojo) {
		EmployeePojo employee = repository.save(pojo);
		if (employee != null) {
			return employee;
		}
		return null;
	}

	public EmployeePojo getEmployee(int id) throws EmployeeNotFoundException {
		EmployeePojo pojo = repository.findById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee Not Found"));
		if (pojo !=null) {
			return pojo;
		}
		return null;
	}

	public EmployeePojo updateEmployee(int id, EmployeePojo emp) throws EmployeeNotFoundException {
		EmployeePojo employee = repository.findById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee Not Found"));
		if (employee != null) {
			employee.setFirstName(emp.getFirstName());
			employee.setLastName(emp.getLastName());
			employee.setEmail(emp.getEmail());
			employee.setContact(emp.getContact());
			employee.setAddress(emp.getAddress());
			
			EmployeePojo updatedEmployee = repository.save(employee);
			return updatedEmployee;
		}
		
		return employee;
	
	}

	public EmployeePojo deleteEmployee(int id) throws EmployeeNotFoundException {
	    EmployeePojo pojo = repository.findById(id).orElse(null);

	    if (pojo != null) {
	        return pojo;
	    }

	    throw new EmployeeNotFoundException("Employee Doesn't Exist");
	}

	
	
}
