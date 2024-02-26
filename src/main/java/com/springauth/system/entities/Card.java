package com.springauth.system.entities;

import java.io.Serializable;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.springauth.system.DTOs.CardDTO;

import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor  
@AllArgsConstructor
@Table(name = "users")
@Document(collection = "table_cards")
public class Card implements Serializable{
    
    
    private String title;
    private String numberCard;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM")
    private String date;
    private String cvv;

    public Card(CardDTO data) {
        this.title = data.title();
        this.numberCard = data.numberCard();
        this.date = data.date();
        this.cvv = data.cvv();
    }

}
