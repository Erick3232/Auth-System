package com.springauth.system.services.bank;

import java.math.BigDecimal;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springauth.system.DTOs.BalanceDTO;
import com.springauth.system.entities.User;
import com.springauth.system.entities.UserRole;
import com.springauth.system.exceptions.ResourceNotFoundException;
import com.springauth.system.repositories.UserRepository;


@Service
public class AcountService {

    @Autowired
    private UserRepository userRepository;

    public User findById(String id){
        Optional<User> obj = userRepository.findById(id);
        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }

    public User addBalance(BalanceDTO balancedDto, String id) throws Exception{
        User receiver = findById(id);
        if(balancedDto.balance().compareTo(BigDecimal.ZERO) < 0){
            throw new RuntimeException("VALOR INVÁLIDO");
        }
        receiver.setBalance(balancedDto.balance());
        userRepository.save(receiver);

        return receiver;
    }

    public void validateAmount(User user, BigDecimal amount) throws Exception{
        if(user.getRole() == UserRole.CNPJ){
            throw new RuntimeException("CNPJ NÃO PODE REALIZAR TRANSFERÊNCIAS.");
        }
        if(user.getBalance().compareTo(amount) < 0){
            throw new RuntimeException("SALDO INSUFICIENTE PARA REALIZAR A TRANSAÇÃO.");
        }
    }

    public void updateAccount(User user) {
        userRepository.save(user);
    }
}
