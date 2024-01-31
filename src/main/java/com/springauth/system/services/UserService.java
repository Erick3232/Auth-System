package com.springauth.system.services;

import java.util.List;
import java.util.Optional;

import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springauth.system.DTOs.UserDTO;
import com.springauth.system.entities.User;
import com.springauth.system.repositories.UserRepositoy;

@Service
public class UserService {
    
    @Autowired
    private UserRepositoy repo;

    public List<User> findAll(){
        return repo.findAll();
    }
    
    public User findById(Long id){
        Optional<User> obj = repo.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Id not found, try again!", obj));
    }

    public User creaUser(UserDTO data){
        User newUser = new User(data);
        this.saveUser(newUser);
        return newUser;
    }

    public void saveUser(User user){
        repo.save(user);
    }

}
