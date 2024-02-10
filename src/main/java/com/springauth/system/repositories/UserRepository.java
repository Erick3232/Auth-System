package com.springauth.system.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.springauth.system.entities.User;

public interface UserRepository extends JpaRepository<User,Long>{
   UserDetails findByLogin(String fullname);
   Optional<User> findByDocumentOrEmail(String document, String email);
}
