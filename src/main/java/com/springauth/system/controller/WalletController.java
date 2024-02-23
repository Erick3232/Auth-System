package com.springauth.system.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.springauth.system.DTOs.BalanceDTO;
import com.springauth.system.exceptions.ResourceNotFoundException;
import com.springauth.system.services.bank.AcountService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.EntityNotFoundException;

@RestController
@Tag(name = "Wallet User", description = "API Wallet for controllers")
@RequestMapping("/wallet")
public class WalletController {

    @Autowired
    private AcountService acountService;

    @GetMapping("/dashboard")
    public ModelAndView dashboard(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/menu/dashboard");
        return mv;
    }
    @GetMapping("/dashboard/cards")
    public ModelAndView cards(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/menu/cards");
        return mv;
    }
    @GetMapping("/dashboard/services")
    public ModelAndView services(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/menu/services");
        return mv;
    }
    @GetMapping("/dashboard/support")
    public ModelAndView support(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/menu/support");
        return mv;
    }
    @GetMapping("/dashboard/account")
    public ModelAndView account(){
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/menu/account");
        return mv;
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
