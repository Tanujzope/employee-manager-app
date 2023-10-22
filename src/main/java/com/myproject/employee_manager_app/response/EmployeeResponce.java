package com.myproject.employee_manager_app.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.myproject.employee_manager_app.pojo.EmployeePojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(content = JsonInclude.Include.NON_NULL)
public class EmployeeResponce {
	private String msg;
	private EmployeePojo pojo;
	private List<EmployeePojo> employees;
}
