package com.springauth.system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

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

    @GetMapping("/register")
    public ModelAndView index(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("register");
        return mv;
    }

    @Operation(summary = "Register operation")
    @PostMapping("/process")
    public ResponseEntity<User> createUser(@RequestBody RegisterDTO data) {
        if(userService.findByDocument(data.document()) == null){
        String encoded = new BCryptPasswordEncoder().encode(data.password());
        User newUser = userService.registerUser(data, encoded);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        } 
        else return ResponseEntity.badRequest().build();
    }

    @GetMapping("/login")
    public ModelAndView index2(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("login");
        return mv;
    }

    @Operation(summary = "Login operation")
    @PostMapping("/loged")
    public ResponseEntity login(@RequestBody AuthenticationDTO data) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);
        var generateToken = tokenService.generateToken((User) auth.getPrincipal());
        return ResponseEntity.ok(new LoginResponseDTO(generateToken));
    }
   
}


