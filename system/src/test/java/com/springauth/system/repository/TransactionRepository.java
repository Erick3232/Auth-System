package com.springauth.system.repository;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.springauth.system.entities.User;
import com.springauth.system.repositories.UserRepository;

@SpringBootTest
public class TransactionRepository {

    @Autowired
    private UserRepository userRepository;

    @MockBean
    private UserRepository mockUserRepository;

    @Test
    @DisplayName("Find Id - User found")
    void findById(){
        String id = "664dfcdc24c95f5bf28e93d3123";
        
        Optional<User> foundUser = this.userRepository.findById(id);

        User getUserId = foundUser.get();

        assertEquals(id, getUserId.getId());
        assertTrue(foundUser.isPresent());
    }

    @Test
    @DisplayName("Should not find Id - User not found")
    void dontFindById(){
        String id = "nao existe";

        when(mockUserRepository.findById(id)).thenReturn(Optional.empty());

        Optional<User> foundUser = mockUserRepository.findById(id);

        assertTrue(foundUser.isEmpty());
    }

}
