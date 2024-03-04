package com.rechargezone.rechargezone.dto;

import com.rechargezone.rechargezone.model.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class userDto {
    private long id;
    private String email;
    private String password;
    private String Fname;
    private String Lname;
    private String phone;
    private String serviceProvider;
    private String address;
    private String city;
    private String role;
    
}
