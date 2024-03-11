package com.rechargezone.rechargezone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rechargezone.rechargezone.dto.planDataDTO;
import com.rechargezone.rechargezone.dto.userDto;
import com.rechargezone.rechargezone.dto.Response.AdminResponse;
import com.rechargezone.rechargezone.services.adminService;
import com.rechargezone.rechargezone.services.authenticationService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private adminService adminservice;

    @Autowired
    private authenticationService authenticationService;


    @PreAuthorize("hasAuthority('admin')")
    @GetMapping("/getplans")
    public List<planDataDTO> getAllPlans() {
        return adminservice.getAllData();
    }

    @PreAuthorize("hasAuthority('admin')")
    @GetMapping("/getplansbyoperatoranddata/{operator}/{data}")
    public List<planDataDTO> getByOperatorAndData(@PathVariable String operator, @PathVariable String data) {
        return adminservice.getPlansByOperatorAndData(operator, data);
    }

    @PreAuthorize("hasAuthority('admin')")
    @GetMapping("/getplansbyoperatoranddataandtype/{operator}/{data}/{type}")
    public List<planDataDTO> getByOperatorAndDataAndType(@PathVariable String operator, @PathVariable String data, @PathVariable String type) {
        return adminservice.getPlansByOperatorAndDataAndType(operator, data, type);
    }

    @PreAuthorize("hasAuthority('admin')")
    @GetMapping("/getplansbyoperatorandvalidityandtype/{operator}/{validity}/{type}")
    public List<planDataDTO> getByOperatorAndValidityAndType(@PathVariable String operator, @PathVariable String validity, @PathVariable String type) {
        // return userservice.getPlansByOperatorAndDataAndType(operator, validity, type);
        return adminservice.getPlansByOperatorAndValidityAndType(operator, validity, type);
    }

    @PreAuthorize("hasAuthority('admin')")
    @GetMapping("/getAdminData")
    public List<AdminResponse> getAdminData(@RequestBody long id) {
        return adminservice.getadminDetails(id);

    }
    
    
    @PreAuthorize("hasAuthority('admin')")
    @PostMapping("/addplans")
    public String addPlanData(@RequestBody planDataDTO dto) {
        return adminservice.addPlans(dto);
    }
    
    @PreAuthorize("hasAuthority('admin')")
    @PutMapping("updateplans/{id}")
    public String updatePlans(@PathVariable long id, @RequestBody planDataDTO entity) {
        return adminservice.updatePlans(id, entity);
    }

    @PreAuthorize("hasAuthority('admin')")
    @PutMapping("updateprofile") 
    public String updateProfile(@RequestBody AdminResponse dto) {
        return authenticationService.updateAdmin(dto);
    }
    
    

    @PreAuthorize("hasAuthority('admin')")
    @DeleteMapping("deleteplans/{id}")
    public String deletePlans(@PathVariable long id) {
        return adminservice.deletePlans(id);
    }


    
    
}
