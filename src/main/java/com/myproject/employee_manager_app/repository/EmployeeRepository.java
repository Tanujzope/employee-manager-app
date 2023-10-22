package com.myproject.employee_manager_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myproject.employee_manager_app.pojo.EmployeePojo;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeePojo, Integer> {

}
