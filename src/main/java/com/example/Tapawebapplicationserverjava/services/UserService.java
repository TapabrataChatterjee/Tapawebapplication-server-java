package com.example.Tapawebapplicationserverjava.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Tapawebapplicationserverjava.models.User;
import com.example.Tapawebapplicationserverjava.repositories.UserRepository;



@RestController



public class UserService {
	@Autowired
	UserRepository userRepository;

	@PostMapping("/register")
	
	
	public User UserService (@RequestBody User user) {
	//	user.setFirstName("First Name");
	//	user.setLastName("Last Name");
		
		return userRepository.save(user);}

	


    @GetMapping("/api/getuser")
    
    public Iterable<User> findAllUser(){
    	Iterable<User> user = userRepository.findAll();
    	return user;
    }
    
} 
    
    
    
