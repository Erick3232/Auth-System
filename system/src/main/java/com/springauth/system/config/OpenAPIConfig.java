package com.springauth.system.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.servers.Server;

@Configuration
public class OpenAPIConfig {
    
    @Value("${root.openapi.dev-url}")
    private String devURL;
    @Value("${root.openapi.prod-url}")
    private String prodURL;

    @Bean
    public OpenAPI myOpenAPI(){
        Server devServer = new Server();
        devServer.setUrl(devURL);
        devServer.setDescription("Server URL in development");

        Server prodServer = new Server();
        prodServer.setUrl(prodURL);
        prodServer.setDescription("Server URL in production development");

        Contact contact = new Contact();
        contact.setName("Project Github");
        contact.setUrl("https://github.com/ErickMiyagi/Auth-System");

        License mitLicense = new License().name("MIT LICENSE").url("https://choosealicense.com/licenses/mit/");

        Info info = new Info()
            .title("Authentication System API")
            .version("1.0")
            .contact(contact)
            .description("This project is an API built using Java, Java Spring,H2 as database and Spring Security and JWT for authentication control where the focus main is the Security")
            .license(mitLicense);

            return new OpenAPI().info(info).servers(List.of(devServer,prodServer));
        }

}
