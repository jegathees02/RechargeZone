package com.rechargezone.rechargezone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rechargezone.rechargezone.dto.userDto;
import com.rechargezone.rechargezone.services.authenticationService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private authenticationService authservice;

    @GetMapping("/users")
    public List<userDto> getAllUserDetails() {
        return authservice.getAllUsers();
    }

    @PostMapping("/login")
    public userDto loginUser(@RequestBody userDto dto) {
        return authservice.loginUser(dto);
    }

    @PostMapping("/register")
    public void registerUser(@RequestBody userDto dto) {
        authservice.registerUser(dto);
    }
    
    
    
}
