package com.springauth.system.services.bank;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springauth.system.DTOs.TransactionDTO;
import com.springauth.system.entities.Transaction;
import com.springauth.system.entities.User;
import com.springauth.system.entities.UserRole;
import com.springauth.system.repositories.TransactionRepository;


@Service
public class TransactionService {

    @Autowired
    private AcountService acountService;
    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private ExternalAuthorizationService externalAuthorizationService;

    public Transaction processTransaction(TransactionDTO transaction)throws Exception{
        User payer = acountService.findById(transaction.payerId());
        User payee = acountService.findById(transaction.payeeId());
        BigDecimal amount = transaction.amount();

        Transaction newTransaction = new Transaction();
        newTransaction.setPayer(payer);
        newTransaction.setPayee(payee);
        newTransaction.setAmount(amount);
        newTransaction.setTimestamp(LocalDateTime.now());

        if(payer.getRole() == UserRole.CNPJ){
            throw new RuntimeException("CNPJ NÃO PODE REALIZAR TRANSFERÊNCIAS.");
        } 

        if(payer.getBalance().compareTo(amount) < 0){
            throw new RuntimeException("SALDO INSUFICIENTE PARA REALIZAR A TRANSAÇÃO.");
        }
        
        if(externalAuthorizationService.externalAuthorization(payer, amount) == false){
            throw new RuntimeException("Transação Não authorizada");
        }

        payer.setBalance(payer.getBalance().subtract(amount));
        payee.setBalance(payee.getBalance().add(amount));

        acountService.savUser(payee);
        acountService.savUser(payer);

        transactionRepository.save(newTransaction);

        return newTransaction;
    }

    public List<Transaction> getAllTransactions(){
        return this.transactionRepository.findAll();
    }
}
