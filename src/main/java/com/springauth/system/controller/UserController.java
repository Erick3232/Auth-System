package com.springauth.system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springauth.system.DTOs.UserDTO;
import com.springauth.system.entities.User;
import com.springauth.system.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> findAll(){
        List<User> users = this.userService.findAll();
        return new ResponseEntity<>(users,HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<User> create(@RequestBody UserDTO userDTO){
        User obj = new User(userDTO);
        return new ResponseEntity<>(obj,HttpStatus.CREATED);
    }
}
