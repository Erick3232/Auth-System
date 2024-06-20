package com.springauth.system.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.springauth.system.entities.User;

@Repository
public interface UserRepository extends MongoRepository<User,String>{
   
   Optional<User> findByDocument(String document);
   Optional<User> findById(String id); 
   User findByLogin(String login);
   
}
