package com.myproject.employee_manager_app.pojo;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class UserPojo {
	@Id
	private String username;
	private String password;
	
	@OneToMany
	List<EmployeePojo> employees;
}
