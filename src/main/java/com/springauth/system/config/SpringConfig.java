package com.springauth.system.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity

public class SpringConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
        return httpSecurity.csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session
<<<<<<< HEAD
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .build();
            }
=======
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)).build();
    }
    
>>>>>>> 189079dc71d8c7126640dda812a00ba9b7b98c47
}
