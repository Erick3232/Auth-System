package com.springauth.system.DTOs;

import com.springauth.system.entities.UserRole;

public record UserDTO(Long id, String email, String login, String password, UserRole role) {
 
}
