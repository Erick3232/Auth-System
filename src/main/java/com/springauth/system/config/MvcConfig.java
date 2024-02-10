package com.springauth.system.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer{
    
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/auth/register").setViewName("register");
        registry.addViewController("/auth/login").setViewName("login");
    }
}
