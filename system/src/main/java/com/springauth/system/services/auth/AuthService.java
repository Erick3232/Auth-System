package com.springauth.system.services.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import com.springauth.system.DTOs.AuthenticationDTO;
import com.springauth.system.entities.User;
import com.springauth.system.services.token.TokenService;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    public String Login(AuthenticationDTO data){
        var login = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = authenticationManager.authenticate(login);
        var token = tokenService.generateToken((User) auth.getPrincipal());
        return token;
    }
}
