package com.springauth.system.repositories;

import com.springauth.system.entities.Transaction;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories
public interface TransactionRepository extends MongoRepository<Transaction, String> {
    Optional<Transaction>findById(String id);
}
