package com.springauth.system.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.springauth.system.entities.Card;

@Repository
public interface CardRepository extends MongoRepository<Card,String>{
    
}
