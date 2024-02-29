package com.rechargezone.rechargezone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rechargezone.rechargezone.services.adminService;
import com.rechargezone.rechargezone.services.userService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import com.rechargezone.rechargezone.dto.planDataDTO; // Import the planDataDTO class
import com.rechargezone.rechargezone.model.adminDetails;

import java.util.List; // Import the List class


@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private userService userservice;


    @GetMapping("/getAllData")
    public List<planDataDTO> getAllPlans () {
        return userservice.getAllData();
    }

    @GetMapping("/getplansbyoperatoranddata/{operator}/{data}")
    public List<planDataDTO> getByOperatorAndData(@PathVariable String operator, @PathVariable String data) {
        return userservice.getPlansByOperatorAndData(operator, data);
    }

    @GetMapping("/getplansbyoperatoranddataandtype/{operator}/{data}/{type}")
    public List<planDataDTO> getByOperatorAndDataAndType(@PathVariable String operator, @PathVariable String data, @PathVariable String type) {
        return userservice.getPlansByOperatorAndDataAndType(operator, data, type);
    }

    // @GetMapping("/getPlanDataByOperatorAndData") 
    // public List<planDataDTO> getPlanDataByOperatorAndData(@RequestParam String operator, @RequestParam String data) {
    //     return userservice.getPlanDataByOperatorAndData(operator, data);
    // }

   
    
    
}
