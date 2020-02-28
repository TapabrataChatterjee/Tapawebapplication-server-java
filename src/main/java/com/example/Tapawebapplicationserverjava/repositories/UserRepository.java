package com.example.Tapawebapplicationserverjava.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.Tapawebapplicationserverjava.models.User;

public interface UserRepository extends CrudRepository<User,Integer> {

//	StringBuffer findAll(String username);

}
