package com.springauth.system.repositories;

import com.springauth.system.entities.Transaction;
import org.springframework.data.jpa.repository.cdi.JpaRepositoryExtension;

public class TransactionRepository extends JpaRepositoryExtension<Transaction, Long> {
    
}
