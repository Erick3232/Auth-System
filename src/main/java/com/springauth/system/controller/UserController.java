package com.springauth.system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springauth.system.repositories.UserRepositoy;

@RestController
@RequestMapping
public class UserController {
    
    @Autowired
    UserRepositoy repo;
}
