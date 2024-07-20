package com.springauth.system.services.user;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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

    @Cacheable("users")
    public List<User> getAllUsers() {
        System.out.println("Fetching all users from database...");
        return this.userRepository.findAll();
    }

    @Cacheable(value = "users",key = "#userId")
    public User findById(String userId) {
        Optional<User> obj = userRepository.findById(userId);
        return obj.orElseThrow(() -> new ResourceNotFoundException(userId));
    }

    @Cacheable(value = "users",key = "#document")
    public boolean findByDocument(String document) {
        Optional<User> findedUser = userRepository.findByDocument(document);
        return findedUser.isEmpty();
    }

    public User findByLogin(String login) {
        User user = userRepository.findByLogin(login);
        return user;
    }

    public User createUser(UserDTO data) {
        User newUser = new User(data);
        return userRepository.save(newUser);
    }

    public User registerUser(RegisterDTO data) {
        String encodedPassword = new BCryptPasswordEncoder().encode(data.password());
        User newUser = new User(data, encodedPassword);
        return userRepository.save(newUser);
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public void delete(String id) {
        findById(id);
        userRepository.deleteById(id);
    }

    public User updateData(UpdateRequestService updateRequestService, String id) {
        User newUser = findById(id);
        newUser.setEmail(updateRequestService.getEmail());
        newUser.setPassword(updateRequestService.getPassword());
        return userRepository.save(newUser);
    }

}
