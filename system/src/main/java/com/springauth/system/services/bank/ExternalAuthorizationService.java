package com.springauth.system.services.bank;

import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.springauth.system.entities.User;

@Service
public class ExternalAuthorizationService {

    @Autowired
    private RestTemplate restTemplate;

    public boolean externalAuthorization(User payer, BigDecimal amount) {
        ResponseEntity<String> authotizationResponse = restTemplate.getForEntity("https://run.mocky.io/v3/ac7e6eee-19a4-416d-b09c-a3c163ebe0d0", String.class);
        
        if (authotizationResponse.getStatusCode() == HttpStatus.OK) {
            String responseBody = authotizationResponse.getBody();
            if (responseBody != null && responseBody.contains("\"message\": \"Autorizado\"")) {
                return true;
            }
        }
        return false;
    }
}
