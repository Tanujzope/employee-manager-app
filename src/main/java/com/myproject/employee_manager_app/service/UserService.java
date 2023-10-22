package com.myproject.employee_manager_app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myproject.employee_manager_app.exception.AccountNotExistException;
import com.myproject.employee_manager_app.pojo.UserPojo;
import com.myproject.employee_manager_app.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;

	public UserPojo createUser(UserPojo user) {
		UserPojo pojo = repository.save(user);
		if (pojo != null) {
			return pojo;
		}
		return null;
	}



	public UserPojo login(UserPojo pojo) throws AccountNotExistException {
		
		UserPojo user = repository.findByUsername(pojo.getUsername());
		
		if (user !=null ) {
			if (user.getPassword().equals(pojo.getPassword())) {
				return user;
			}
			else {
				throw new AccountNotExistException("Wrong Password, Please Try Again...");
			}
			
		}
		throw new AccountNotExistException("Account Not Exist, Please Create The Account First");
		
	}

	

}
