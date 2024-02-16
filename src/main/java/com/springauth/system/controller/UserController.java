package com.springauth.system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springauth.system.DTOs.UserDTO;
import com.springauth.system.entities.User;
import com.springauth.system.exceptions.ResourceNotFoundException;
import com.springauth.system.services.user.UpdateRequestService;
import com.springauth.system.services.user.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.EntityNotFoundException;

@Tag(name = "Users", description = "API Users for controllers")
@RestController
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    private UserService userService;

    @Operation(summary = "Create User operation")
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody UserDTO user) {
        User newUser = userService.createUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @Operation(summary = "Get All Users operation")
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = this.userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @Operation(summary = "Get User with ID")
    @GetMapping("/{userId}")
    public ResponseEntity<User> findById(@PathVariable Long userId){ // add findById Get
        try{
            User newUser = userService.findById(userId);
            return new ResponseEntity<>(newUser, HttpStatus.OK);
        }catch(EntityNotFoundException e){
            throw new ResourceNotFoundException(userId);
        }catch(UsernameNotFoundException e){
            return ResponseEntity.noContent().build();
        }
    }

    @Operation(summary = "Update User operation")
    @PutMapping("/{userId}")
    public ResponseEntity<String> update(@PathVariable Long userId, @RequestBody UpdateRequestService updateRequestService){
        try {
            userService.updateData(updateRequestService,userId);
            return ResponseEntity.ok("USUÁRIO ATUALIZADO");
        }catch(EntityNotFoundException e){
            throw new ResourceNotFoundException(userId);
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("USUÁRIO NÃO ENCONTRADO");
        }
    }

    @Operation(summary = "Delete User operation")
    @DeleteMapping("/{userId}")
    public ResponseEntity<String> delete(@PathVariable Long userId){
        try{
            userService.delete(userId);
            return ResponseEntity.ok("USUÁRIO EXCLUIDO");
        }catch(EntityNotFoundException e){ //add exception customized
            throw new ResourceNotFoundException(userId);
        }catch(UsernameNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("USUÁRIO NÃO ENCONTRADO");
        }
    }
}
