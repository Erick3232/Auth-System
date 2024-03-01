package com.springauth.system.services.card;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springauth.system.DTOs.CardDTO;
import com.springauth.system.entities.Card;
import com.springauth.system.repositories.CardRepository;

@Service
public class CardService {
    
    @Autowired
    private CardRepository cardRepository;

    public List<Card> getAllCards(){
        return this.cardRepository.findAll();
    }
    public Card createCard(CardDTO data){
        Card newCard = new Card(data);
        this.saveCard(newCard);
        return newCard;
    }
    public void saveCard(Card card){
        cardRepository.save(card);
    }

}
