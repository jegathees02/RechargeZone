package com.rechargezone.rechargezone.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rechargezone.rechargezone.dto.planDataDTO;
import com.rechargezone.rechargezone.model.planData;
import com.rechargezone.rechargezone.repository.adminDetailsRepository;
import com.rechargezone.rechargezone.repository.planDetailsRepository;
import com.rechargezone.rechargezone.repository.userDetailsRepository;

@Service
public class adminService {

    @Autowired
    private adminDetailsRepository adminrepo;

    @Autowired
    private userDetailsRepository userrepo;

    @Autowired
    private planDetailsRepository planrepo;


    public void addPlans(planDataDTO dto) {
        planData plan = new planData();
        plan.setOperator(dto.getOperator());
        plan.setPlanType(dto.getPlanType());
        plan.setPlanName(dto.getPlanName());
        plan.setPlanValidity(dto.getPlanValidity());
        plan.setPlanAmount(dto.getPlanAmount());
        plan.setPlanDescription(dto.getPlanDescription());
        plan.setPlanData(dto.getPlanData());
        plan.setPlanTalktime(dto.getPlanTalktime());
        plan.setPlanSms(dto.getPlanSms());
        plan.setPlansubscription(dto.getPlansubscription());
        planrepo.save(plan);


    }
    
}
