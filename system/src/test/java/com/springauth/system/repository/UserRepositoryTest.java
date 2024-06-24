package com.springauth.system.repository;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.springauth.system.entities.User;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import com.springauth.system.repositories.UserRepository;

@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;
    
    @Test
    @DisplayName("Find Document - User found")
    void findUserByDocument(){
        String document = "123.456.789-12";        
        Optional<User> foundUser = this.userRepository.findByDocument(document);

        User getUserDocument = foundUser.get();
        assertEquals(document, getUserDocument.getDocument());
        assertTrue(foundUser.isPresent());
    }

    @Test
    @DisplayName("Should not find Document - User not found")
    void dontFindUserByDocument(){
        String document = "123.456.789-12";
        
        Optional<User> foundUser = this.userRepository.findByDocument(document);
        assertTrue(foundUser.isEmpty());
    }

    @Test
    @DisplayName("Find Login")
    void findUserByLogin(){
        String login = "diego";
        User existUser = this.userRepository.findByLogin(login);
        
        String getUserLogin = existUser.getLogin();
        assertEquals(login, getUserLogin);
        assertTrue(existUser.isEnabled());
    }

    @Test
    @DisplayName("Should not find Login")
    void dontFindUserByLogin(){
        String login = "diego123";
        User existUser = this.userRepository.findByLogin(login);

        String getNotUserLogin = existUser.getLogin();
        assertEquals(login, getNotUserLogin);
    }
}
