package com.springauth.system.DTOs;

import com.springauth.system.entities.UserRole;

public record RegisterDTO(String login, String password, String document, UserRole role){
    
}
