package com.springauth.system;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.springauth.system.DTOs.RegisterDTO;
import com.springauth.system.entities.User;
import com.springauth.system.entities.UserRole;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import com.springauth.system.repositories.UserRepository;

import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;
    
    @Test
    @DisplayName("Find Document")
    void findUserByDocument(){
        String document = "123.456.789-12";
        Optional<User> existingUser = this.userRepository.findByDocument(document);
        User user;

        if(existingUser.isPresent()){
            user = existingUser.get();
        } else {
            user = null;
        }
        
        Optional<User> foundUser = this.userRepository.findByDocument(document);

        User getUserDocument = foundUser.get();
        assertNotNull(foundUser);
        assertEquals(document, getUserDocument.getDocument());
        assertTrue(foundUser.isPresent());
    }

    @Test
    @DisplayName("Find Login")
    void findUserByLogin(){
        String login = "diego";
        User existUser = this.userRepository.findByLogin(login);
        String user;

        if(existUser.isEnabled()){
            user = existUser.getLogin();
        } 

        String getUserLogin = existUser.getLogin();
        assertNotNull(getUserLogin);
        assertEquals(login, getUserLogin);
        assertTrue(existUser.isEnabled());
    }
}
