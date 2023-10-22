package com.myproject.employee_manager_app.response;

import com.myproject.employee_manager_app.pojo.UserPojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserResponce {
	private String message;
	private UserPojo user;
	
}
