package com.springauth.system.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springauth.system.entities.User;

public interface UserRepository extends JpaRepository<User,Long>{
   
}
