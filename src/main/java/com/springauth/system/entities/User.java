package com.springauth.system.entities;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.springauth.system.DTOs.RegisterDTO;
import com.springauth.system.DTOs.UserDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "users")
@Table(name = "new_user")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String login;
    private String email;
    private String password;
    private String document;
    private UserRole role;

    public User(UserDTO data) {
        this.email = data.email();
        this.login = data.login();
        this.id = data.id();
        this.password = data.password();
        this.role = data.role();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if(this.role == UserRole.CPF) return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"));
        else return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getUsername() {
        // TODO Auto-generated method stub
        return login;
    }

    @Override
    public boolean isAccountNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isEnabled() {
        // TODO Auto-generated method stub
        return true;
    }

    public User(@Valid RegisterDTO data) {
        //TODO Auto-generated constructor stub
        this.email = data.email();
        this.login = data.login();
        this.password = data.password();
        this.role = data.role();
        this.document = data.document();
    }
}
