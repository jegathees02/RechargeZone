package com.rechargezone.rechargezone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rechargezone.rechargezone.dto.planDataDTO;
import com.rechargezone.rechargezone.services.adminService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private adminService adminservice;


    @GetMapping("/getplans")
    public List<planDataDTO> getAllPlans() {
        return adminservice.getAllData();
    }

    @GetMapping("/getplansbyoperatoranddata/{operator}/{data}")
    public List<planDataDTO> getByOperatorAndData(@PathVariable String operator, @PathVariable String data) {
        return adminservice.getPlansByOperatorAndData(operator, data);
    }

    @GetMapping("/getplansbyoperatoranddataandtype/{operator}/{data}/{type}")
    public List<planDataDTO> getByOperatorAndDataAndType(@PathVariable String operator, @PathVariable String data, @PathVariable String type) {
        return adminservice.getPlansByOperatorAndDataAndType(operator, data, type);
    }
    
    
    

    @PostMapping("/addplans")
    public String addPlanData(@RequestBody planDataDTO dto) {
        return adminservice.addPlans(dto);
    }
    
    @PutMapping("updateplans/{id}")
    public String updatePlans(@PathVariable long id, @RequestBody planDataDTO entity) {
        return adminservice.updatePlans(id, entity);
    }

    @DeleteMapping("deleteplans/{id}")
    public String deletePlans(@PathVariable long id) {
        return adminservice.deletePlans(id);
    }


    
    
}
