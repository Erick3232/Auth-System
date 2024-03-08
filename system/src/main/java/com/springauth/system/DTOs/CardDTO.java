package com.springauth.system.DTOs;
import com.fasterxml.jackson.annotation.JsonFormat;

public record CardDTO(
    String title, 
    String numberCard, 
    
    @JsonFormat(pattern = "dd/MM")
    String date, 
    String cvv) {
    
}
