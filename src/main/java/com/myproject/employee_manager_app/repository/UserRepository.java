package com.myproject.employee_manager_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myproject.employee_manager_app.pojo.UserPojo;

@Repository
public interface UserRepository extends JpaRepository<UserPojo, String>{
	
	UserPojo findByUsername(String username);
	
	
}
