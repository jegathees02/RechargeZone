package com.rechargezone.rechargezone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rechargezone.rechargezone.services.adminService;
import com.rechargezone.rechargezone.services.authenticationService;
import com.rechargezone.rechargezone.services.userService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import com.rechargezone.rechargezone.dto.planDataDTO; // Import the planDataDTO class
import com.rechargezone.rechargezone.dto.userDto;
import com.rechargezone.rechargezone.model.adminDetails;

import java.util.List; // Import the List class
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private userService userservice;

    @Autowired
    private authenticationService authservice;


    @PreAuthorize("hasAuthority('user')")
    @GetMapping("/getAllData")
    public List<planDataDTO> getAllPlans () {
        return userservice.getAllData();
    }

    @PreAuthorize("hasAuthority('user')")
    @GetMapping("/getplansbyoperatoranddata/{operator}/{data}")
    public List<planDataDTO> getByOperatorAndData(@PathVariable String operator, @PathVariable String data) {
        return userservice.getPlansByOperatorAndData(operator, data);
    }

    @PreAuthorize("hasAuthority('user')")
    @GetMapping("/getplansbyoperatoranddataandtype/{operator}/{data}/{type}")
    public List<planDataDTO> getByOperatorAndDataAndType(@PathVariable String operator, @PathVariable String data, @PathVariable String type) {
        return userservice.getPlansByOperatorAndDataAndType(operator, data, type);
    }

    @PreAuthorize("hasAuthority('user')")
    @PutMapping("/update-profile")
    public void updateProfile(@RequestBody userDto entity) {
        authservice.updateUser(entity);
    }

    @PreAuthorize("hasAuthority('user')")
    @DeleteMapping("/delete")
    public String deleteUser(@RequestParam long id) {
        return authservice.deleteUser(id);
    }
    

    // @GetMapping("/getPlanDataByOperatorAndData") 
    // public List<planDataDTO> getPlanDataByOperatorAndData(@RequestParam String operator, @RequestParam String data) {
    //     return userservice.getPlanDataByOperatorAndData(operator, data);
    // }

   
    
    
}
