package com.springauth.system.exceptions;

public class ResourceNotFoundException extends RuntimeException{
    public ResourceNotFoundException(Object id){
        super("Id: " + id + " not Found: ");
    }
}
