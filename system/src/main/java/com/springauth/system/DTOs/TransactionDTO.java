package com.springauth.system.DTOs;

import java.math.BigDecimal;

public record TransactionDTO(String payer, String payee, BigDecimal amount) {
    
}
