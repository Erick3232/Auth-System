package com.springauth.system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springauth.system.DTOs.AuthenticationDTO;
import com.springauth.system.DTOs.LoginResponseDTO;
import com.springauth.system.DTOs.RegisterDTO;
import com.springauth.system.entities.User;
import com.springauth.system.services.token.TokenService;
import com.springauth.system.services.user.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;


@Tag(name = "Register and Login", description = "API for Register and Login controllers")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;


    @Operation(summary = "Register operation")
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/process")
    public ResponseEntity<User> createUser(@RequestBody RegisterDTO data) {
        if(userService.findByDocument(data.document()) == null){
        String encoded = new BCryptPasswordEncoder().encode(data.password());
        User newUser = userService.registerUser(data, encoded);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        } 
        else return ResponseEntity.badRequest().build();
    }


    @Operation(summary = "Login operation")
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/processLogin")
    public ResponseEntity login(@RequestBody AuthenticationDTO data) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);
        var generateToken = tokenService.generateToken((User) auth.getPrincipal());
        return ResponseEntity.ok(new LoginResponseDTO(generateToken));
    }
   
    @GetMapping("/getId/{login}")
    public ResponseEntity<User> getLogin(@PathVariable String login){
        User newUser = userService.findIdByLogin(login);
        return new ResponseEntity<>(newUser,HttpStatus.OK);
    }

    @GetMapping("/getUserDetails/{id}")
    public ResponseEntity<User> getUserDetails(@PathVariable String id) {
        User newUser = userService.findById(id);
        return new ResponseEntity<>(newUser,HttpStatus.OK);
    }
}