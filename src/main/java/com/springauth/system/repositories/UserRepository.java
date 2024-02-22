package com.springauth.system.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.springauth.system.entities.User;

@Repository
public interface UserRepository extends MongoRepository<User,String>{
   UserDetails findByLogin(String fullname);
   User findByDocument(String document);
   Optional<User> findById(String id);

}
