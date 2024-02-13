package com.springauth.system.services.user;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springauth.system.DTOs.RegisterDTO;
import com.springauth.system.DTOs.UserDTO;
import com.springauth.system.entities.User;
import com.springauth.system.exceptions.ResourceNotFoundException;
import com.springauth.system.repositories.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers(){
        return this.userRepository.findAll();
    }

    public User findById(Long id){
        Optional<User> obj = userRepository.findById(id);
        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }

    public User findByDocument(String document){
        User findedUser = userRepository.findByDocument(document);
        return findedUser;
    }

    public User createUser(UserDTO data){
        User newUser = new User(data);
        this.saveUser(newUser);
        return newUser;
    }

    public User registerUser(RegisterDTO data, String encodedPassword){
        User newUser = new User(data, encodedPassword);
        this.saveUser(newUser);
        return newUser;
    }

    public void saveUser(User user){
        userRepository.save(user);
    }
    
    public void delete(Long id){
        findById(id);
        userRepository.deleteById(id);
    }
    public User updateData(UpdateRequestService updateRequestService,Long id){
        User newUser = findById(id);
        newUser.setEmail(updateRequestService.getEmail());
        newUser.setPassword(updateRequestService.getPassword());
        return userRepository.save(newUser);
    }
}
