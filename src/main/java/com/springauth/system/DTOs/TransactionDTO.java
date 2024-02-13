package com.springauth.system.DTOs;

import java.math.BigDecimal;

public record TransactionDTO(Long payerId, Long payeeId, BigDecimal amount) {
    
}
