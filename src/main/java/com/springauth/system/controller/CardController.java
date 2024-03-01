package com.springauth.system.controller;

import java.text.ParseException;
import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springauth.system.DTOs.CardDTO;
import com.springauth.system.entities.Card;
import com.springauth.system.services.card.CardService;

import org.springframework.web.bind.annotation.RequestBody; 

@RestController
@RequestMapping("/cards")
public class CardController {
    
    @Autowired
    private CardService cardService;

    @PostMapping()
    public ResponseEntity<Card> createCard(@RequestBody CardDTO data) throws ParseException{
        Card newCard = this.cardService.createCard(data);
        return new ResponseEntity<>(newCard, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Card>> getAllCards(){
        List<Card> cards = this.cardService.getAllCards();
        return new ResponseEntity<>(cards, HttpStatus.OK);
    }

}
