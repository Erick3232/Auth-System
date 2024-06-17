package com.springauth.system.services.user;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
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

    public List<User> getAllUsers() {
        return this.userRepository.findAll();
    }

    public User findById(String userId) {
        Optional<User> obj = userRepository.findById(userId);
        return obj.orElseThrow(() -> new ResourceNotFoundException(userId));
    }

    public boolean findByDocument(String document, String rg, String email) {
        User findedUser = userRepository.findByDocument(document, rg, email);
        if (findedUser == null) {
            return true;
        } else
            return false;
    }

    public User findIdByLogin(String login) {
        User user = userRepository.findIdByLogin(login);
        return user;
    }

    public User createUser(UserDTO data) {
        User newUser = new User(data);
        this.saveUser(newUser);
        return newUser;
    }

    public User registerUser(RegisterDTO data) {
        String encodedPassword = new BCryptPasswordEncoder().encode(data.password());
        User newUser = new User(data, encodedPassword);
        this.saveUser(newUser);
        return newUser;
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
