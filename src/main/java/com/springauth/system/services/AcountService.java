package com.springauth.system.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.springauth.system.entities.User;
import com.springauth.system.exceptions.ResourceNotFoundException;
import com.springauth.system.repositories.UserRepository;



public class AcountService {

    @Autowired
    private UserRepository userRepository;
    public User findById(Long id){
        Optional<User> obj = userRepository.findById(id);
        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }
}
