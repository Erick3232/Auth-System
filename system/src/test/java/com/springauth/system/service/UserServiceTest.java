package com.springauth.system.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.springauth.system.entities.User;
import com.springauth.system.repositories.UserRepository;
import com.springauth.system.services.user.UserService;

public class UserServiceTest {
    
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setUp(){
        MockitoAnnotations.openMocks(this);
    }

    @Test
    @DisplayName("Find User by Login")
    void findUserByLogin(){
        String login = "diego";
        User user = new User();
        user.setLogin(login);

        when(userRepository.findByLogin(login)).thenReturn(user);

        User foundUser = userService.findByLogin(login);

        assertEquals(login, foundUser.getLogin());
    }
    @Test
    @DisplayName("Should not find User by Login")
    void dontFindUserByLogin(){
        String login = "dieg1232131o";

        when(userRepository.findByLogin(login)).thenReturn(null);

        User foundUser = userService.findByLogin(login);

        assertNull(foundUser);
    }

    @Test
    @DisplayName("Find User by Document")
    void findUserByDocument(){
        String document = "123-456-789-12";
        User user = new User();
        user.setDocument(document);

        when(userRepository.findByDocument(document)).thenReturn(Optional.of(user));

        Boolean foundUser = userService.findByDocument(document);

        assertFalse(foundUser);
    }

    @Test
    @DisplayName("Should not find User by Document")
    void dontFindUserByDocument(){
        String document = "nao existe";

        when(userRepository.findByDocument(document)).thenReturn(Optional.empty());

        boolean foundUser = userService.findByDocument(document);

        assertTrue(foundUser);
    }
}
