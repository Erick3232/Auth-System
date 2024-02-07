package com.springauth.system.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public enum UserRole {
    CPF("admin"),
    CNPJ("user");

    private String role;

}
