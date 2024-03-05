package com.rechargezone.rechargezone.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rechargezone.rechargezone.dto.planDataDTO;
import com.rechargezone.rechargezone.model.planData;
import com.rechargezone.rechargezone.model.userDetails;
import com.rechargezone.rechargezone.model.userHistory;
import com.rechargezone.rechargezone.repository.planDetailsRepository;
import com.rechargezone.rechargezone.repository.userDetailsRepository;
import com.rechargezone.rechargezone.repository.userHistoryRepository;

import java.util.List;
import java.util.ArrayList;
import java.time.LocalDate;
import java.time.LocalTime;

@Service
public class userService {
    @Autowired
    planDetailsRepository planrepo;

    @Autowired
    userHistoryRepository historyrepo;

    @Autowired
    userDetailsRepository userrepo;

    // get all info  about the plans
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


    // get the data by operator name, data usage 
    public List<planDataDTO> getPlansByOperatorAndData(String operator, String data) {
        List<planData> plans = planrepo.findByOperatorAndPlanData(operator, data);
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

    // get the data by operator name, data usage and plan type
    public  List<planDataDTO> getPlansByOperatorAndDataAndType(String operator, String data, String type) {
        List<planData> plans = planrepo.findByOperatorAndPlanDataAndPlanType(operator, data, type);
        List<planDataDTO> dtos = new ArrayList<>();
        for(planData plan : plans) {
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



    // add history data when user recharges using plan id
    public void addHistoryData(Long userId, Long planId) {
        @SuppressWarnings("null")
        planData plan = planrepo.findById(planId).orElse(null);
        @SuppressWarnings("null")
        userDetails user = userrepo.findById(userId).orElse(null);
        if (plan != null &&  user != null) {
            // Create a new userHistory object
            // ...

            userHistory history = new userHistory();
            history.setDate(LocalDate.now());
            history.setTime(LocalTime.now());
            history.setRechargedBy("you");
            history.setUserDetails(user);
            history.setPlanData(plan);
            // history.setUserId(userId);
            // history.setPlanId(planId);

            // history.setOperator(plan.getOperator());
            // history.setPlanType(plan.getPlanType());
            // history.setPlanName(plan.getPlanName());
            // history.setPlanValidity(plan.getPlanValidity());
            // history.setPlanAmount(plan.getPlanAmount());
            // history.setPlanDescription(plan.getPlanDescription());
            // history.setPlanData(plan.getPlanData());
            // history.setPlanTalktime(plan.getPlanTalktime());
            // history.setPlanSms(plan.getPlanSms());
            // history.setPlansubscription(plan.getPlansubscription());
            
            // Save the userHistory object to the repository
            historyrepo.save(history);
        }
    }

    // get the history of the user by user id
    public List<userHistory> getHistoryByUserId(Long userId) {
        userDetails user = userrepo.findById(userId).orElse(null);
        List<userHistory> history = historyrepo.findByUserDetails(user);
        // List<userHistory> history = historyrepo.findByUserDetailsId(userId);
        return history;
    }


    
    
}
