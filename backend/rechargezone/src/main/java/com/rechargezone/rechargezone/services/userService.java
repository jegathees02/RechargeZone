package com.rechargezone.rechargezone.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rechargezone.rechargezone.dto.planDataDTO;
import com.rechargezone.rechargezone.model.planData;
import com.rechargezone.rechargezone.repository.planDetailsRepository;
import java.util.List;
import java.util.ArrayList;

@Service
public class userService {
    @Autowired
    planDetailsRepository planrepo;


    public List<planDataDTO> getAllData() {
        List<planData> plans = planrepo.findAll();
        List<planDataDTO> dtos = new ArrayList<>();
        for (planData plan : plans) {
            planDataDTO dto = new planDataDTO();
            dto.setId(plan.getId());
            dto.setOperator(plan.getOperator());
            dto.setPlanType(plan.getPlanType());
            dto.setPlanName(plan.getPlanName());
            dto.setPlanValidity(plan.getPlanValidity());
            dto.setPlanAmount(plan.getPlanAmount());
            dto.setPlanDescription(plan.getPlanDescription());
            dto.setPlanData(plan.getPlanData());
            dto.setPlanTalktime(plan.getPlanTalktime());
            dto.setPlanSms(plan.getPlanSms());
            dto.setPlansubscription(plan.getPlansubscription());
            dtos.add(dto);
        }
        return dtos;
    }

    public List<planDataDTO> getPlanDataByOperatorAndData(String operator, String data) {
        List<planData> plans = planrepo.findByOperatorAndPlanData(operator,data);
        List<planDataDTO> dtos = new ArrayList<>();
        for (planData plan : plans) {
            planDataDTO dto = new planDataDTO();
            dto.setId(plan.getId());
            dto.setOperator(plan.getOperator());
            dto.setPlanType(plan.getPlanType());
            dto.setPlanName(plan.getPlanName());
            dto.setPlanValidity(plan.getPlanValidity());
            dto.setPlanAmount(plan.getPlanAmount());
            dto.setPlanDescription(plan.getPlanDescription());
            dto.setPlanData(plan.getPlanData());
            dto.setPlanTalktime(plan.getPlanTalktime());
            dto.setPlanSms(plan.getPlanSms());
            dto.setPlansubscription(plan.getPlansubscription());
            dtos.add(dto);
        }
        return dtos;

        // return plans;
    }
    
}
