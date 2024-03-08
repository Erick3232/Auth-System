package com.springauth.system.DTOs;

import java.math.BigDecimal;

public record TransactionDTO(String payerId, String payeeId, BigDecimal amount) {
    
}
