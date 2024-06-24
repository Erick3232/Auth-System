package com.springauth.system.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springauth.system.DTOs.BalanceDTO;
import com.springauth.system.DTOs.TransactionDTO;
import com.springauth.system.entities.Transaction;
import com.springauth.system.exceptions.ResourceNotFoundException;
import com.springauth.system.services.bank.AcountService;
import com.springauth.system.services.bank.TransactionService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.EntityNotFoundException;

@Tag(name = "Transactions", description = "API Transactions for controllers")
@RestController
@RequestMapping("/transactions")
public class TransactionController {
    
    @Autowired
    private TransactionService transactionService;

    @Autowired
    private AcountService acountService;

    @Operation(summary = "Create Transaction operation")
    @PostMapping
    public ResponseEntity<Transaction> processTransaction(@RequestBody TransactionDTO transaction)throws Exception{
        Transaction newTransaction = transactionService.processTransaction(transaction);
        return new ResponseEntity<>(newTransaction, HttpStatus.CREATED);
    }

    @Operation(summary = "Get all Transactions operations")
    @GetMapping
    public ResponseEntity<List<Transaction>> getAllTransactions(){
        List<Transaction> transactions = this.transactionService.getAllTransactions();
        return new ResponseEntity<>(transactions, HttpStatus.OK);
    }

    @Operation(summary = "Update User Balance")
    @PutMapping("/{userId}")
    public ResponseEntity<String> update(@PathVariable String userId, @RequestBody BalanceDTO balance) throws Exception {
        try {
            acountService.addBalance(balance, userId);
            return ResponseEntity.ok("SALDO ADICIONADO");
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException(userId);
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("USUÁRIO NAO ENCONTRADO");
        }
    }
}
