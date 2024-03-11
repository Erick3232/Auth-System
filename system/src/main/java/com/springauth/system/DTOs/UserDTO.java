package com.springauth.system.DTOs;

import com.springauth.system.entities.UserRole;

public record UserDTO(String id, String email, String login, String password,String RG, UserRole role) {
 
}
