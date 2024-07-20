package com.springauth.system.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.math.BigDecimal;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.springauth.system.DTOs.TransactionDTO;
import com.springauth.system.entities.Transaction;
import com.springauth.system.entities.User;
import com.springauth.system.entities.UserRole;
import com.springauth.system.repositories.TransactionRepository;
import com.springauth.system.services.bank.AcountService;
import com.springauth.system.services.bank.ExternalAuthorizationService;
import com.springauth.system.services.bank.TransactionService;

@SpringBootTest
public class TransactionServiceTest {
    
    @Mock
    private TransactionRepository transactionRepository;

    @Mock
    private AcountService acountService;

    @Mock
    private ExternalAuthorizationService externalAuthorizationService;

    @InjectMocks
    private TransactionService transactionService;

    private User payer;
    private User payee;
    private TransactionDTO transactionDTO;

    @BeforeEach
    void setUp() {
        payer = new User();
        payer.setId("1");
        payer.setRole(UserRole.CPF);
        payer.setBalance(new BigDecimal("1000.00"));

        payee = new User();
        payee.setId("2");
        payee.setBalance(new BigDecimal("500.00"));

        transactionDTO = new TransactionDTO(payer.getId(), payee.getId(), new BigDecimal("200.00"));
    }

    @Test
    @DisplayName("test for process transaction")
    void testProcessTransaction() throws Exception{
        when(acountService.findById(transactionDTO.payer())).thenReturn(payer);
        when(acountService.findById(transactionDTO.payee())).thenReturn(payee);
       
        doNothing().when(acountService).validateAmount(payer, transactionDTO.amount());
        
        when(externalAuthorizationService.externalAuthorization(any(User.class), any(BigDecimal.class))).thenReturn(true);
        when(transactionRepository.save(any(Transaction.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Transaction transaction = transactionService.processTransaction(transactionDTO);

        verify(acountService).validateAmount(payer, transactionDTO.amount());
        verify(acountService).updateAccount(payer);
        verify(acountService).updateAccount(payee);
    }
    
    @Test
    @DisplayName("should not process transaction for CNPJ")
    void testProcessTransactionCNPJ(){
        payer.setRole(UserRole.CNPJ);

        when(acountService.findById(transactionDTO.payer())).thenReturn(payer);
        when(acountService.findById(transactionDTO.payee())).thenReturn(payee);

        Exception exception = assertThrows(RuntimeException.class, () -> {
            transactionService.processTransaction(transactionDTO);
        });

        assertEquals("CNPJ nÃO PODE REALIZAR TRANSFERÊNCIAS.", exception.getMessage());
    }   

    @Test
    @DisplayName("test for insufficient amount")
    void testProcessTransactionInsufficient(){
        when(acountService.findById(transactionDTO.payer())).thenReturn(payer);
        when(acountService.findById(transactionDTO.payee())).thenReturn(payee);

        transactionDTO = new TransactionDTO(payer.getId(), payee.getId(), new BigDecimal("2000.00"));

        Exception exception = assertThrows(RuntimeException.class, () -> {
            transactionService.processTransaction(transactionDTO);
        });
        
        assertEquals("SALDO iNSUFICIENTE PARA REALIZAR A TRANSAÇÃO.", exception.getMessage());
    }
    
    @Test
    @DisplayName("test for external permission authorization ")
    void testProcessTransactionAuthorization() throws Exception{
        when(acountService.findById(transactionDTO.payer())).thenReturn(payer);
        when(acountService.findById(transactionDTO.payee())).thenReturn(payee);
        doNothing().when(acountService).validateAmount(payer, transactionDTO.amount());
        when(externalAuthorizationService.externalAuthorization(any(User.class), any(BigDecimal.class))).thenReturn(false);
    
        Exception exception = assertThrows(RuntimeException.class, () -> {
            transactionService.processTransaction(transactionDTO);
        });

        assertEquals("Transacao nao autorizada", exception.getMessage());
    }
}
