package com.springauth.system.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.springauth.system.entities.User;

public interface UserRepository extends JpaRepository<User,Long>{
   UserDetails findByLogin(String fullname);
}
