package com.rechargezone.rechargezone.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rechargezone.rechargezone.dto.planDataDTO;
import com.rechargezone.rechargezone.dto.Response.HistoryResponse;
import com.rechargezone.rechargezone.model.planData;
import com.rechargezone.rechargezone.model.userDetails;
import com.rechargezone.rechargezone.model.userHistory;
import com.rechargezone.rechargezone.model.userMain;
import com.rechargezone.rechargezone.repository.planDetailsRepository;
import com.rechargezone.rechargezone.repository.userDetailsRepository;
import com.rechargezone.rechargezone.repository.userHistoryRepository;
import com.rechargezone.rechargezone.repository.userRepository;

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Service
public class userService {
    @Autowired
    userRepository usermainrepo;
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

    // get the data by operator name, plan validity, and plan type
    public List<planDataDTO> getPlansByOperatorAndValidityAndType(String operator, String validity, String type) {
        List<planData> plans = planrepo.findByOperatorAndPlanValidityAndPlanType(operator, validity, type);
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



    // add history data when user recharges using plan id
    public void addHistoryData(long userId, long planId) {
        // @SuppressWarnings("null")
        planData plan = planrepo.findById(planId).get(0);
        // @SuppressWarnings("null")
        userDetails user = userrepo.findById(userId);
        if (plan != null &&  user != null) {
            // Create a new userHistory object
            // ...

            userHistory history = new userHistory();
            history.setDate(LocalDate.now());
            history.setTime(LocalDateTime.now());
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
    // public List<userHistory> getHistoryByUserId(long userId) {
    //     userDetails user = userrepo.findById(userId);
    //     // List<userHistory> history = historyrepo.findByUserDetails(user);
    //     List<userHistory> history = historyrepo.findByUserDetails(user);
    //     System.out.println(history);
    //     // List<userHistory> history = historyrepo.findByUserDetailsId(userId);
    //     return history;
    // }

    public  List<HistoryResponse> getHistoryByUserId(long userId) {
        userDetails user = userrepo.findById(userId);
        List<userHistory> history = historyrepo.findByUserDetails(user);
        List<HistoryResponse> historyData = new ArrayList<>();
        int i=0;
        for(userHistory userhistory : history) {
            planData plan = history.get(i).getPlanData();
            HistoryResponse response = new HistoryResponse();
            response.setPlanName(plan.getPlanName());
            response.setPlanAmount(plan.getPlanAmount());
            response.setRechargedBy(user.getFname()+" "+user.getLname());
            response.setDate(userhistory.getDate().toString());
            response.setTime(userhistory.getTime().toString());
            
            historyData.add(response);
            i++;
        }
        Collections.reverse(historyData);
        return historyData;
        
        // response.setPlanName(plan.getPlanName());
        // response.setPlanAmount(plan.getPlanAmount());
        // response.setRechargedBy(hist);
        // response.setRechargedBy(user.getFname()+" "+user.getLname());
        // response.setHistory(dtos);
        // return response;
    
    }

    // @SuppressWarnings("null")
    public List<planData> getPlanById(long id) {
        return planrepo.findById(id);
    }

public planDataDTO getLatestRechargePlanByUserId(long userId) {
    userDetails user = userrepo.findById(userId);
    List<userHistory> history = historyrepo.findByUserDetails(user);
    
    if (history.isEmpty()) {
        return null; // No recharge history found for the user
    }
    
    userHistory latestRecharge = history.get(history.size() - 1);
    planData plan = latestRecharge.getPlanData();
    
    planDataDTO planDetails = new planDataDTO();
    planDetails.setPlanName(plan.getPlanName());
    planDetails.setPlanAmount(plan.getPlanAmount());
    planDetails.setPlanValidity(plan.getPlanValidity());
    planDetails.setPlanType(plan.getPlanType());
    planDetails.setOperator(plan.getOperator());
    planDetails.setPlanData(plan.getPlanData());
    planDetails.setPlanTalktime(plan.getPlanTalktime());
    planDetails.setPlanSms(plan.getPlanSms());
    // Set other plan details as needed
    
    return planDetails;
}

public List<Integer> getTotalSpendingPerMonth(long userId) {
    userDetails user = userrepo.findById(userId);
    List<userHistory> history = historyrepo.findByUserDetails(user);
    List<Integer> totalSpendingPerMonth = new ArrayList<>(Arrays.asList(new Integer[12]));
    Collections.fill(totalSpendingPerMonth, 100);

    for (userHistory userhistory : history) {
        int month = userhistory.getDate().getMonthValue() - 1; // Month index starts from 0
        int amountSpent = Integer.parseInt(userhistory.getPlanData().getPlanAmount());
        totalSpendingPerMonth.set(month, totalSpendingPerMonth.get(month) + amountSpent);
    }

    return totalSpendingPerMonth;
}


    
    
}
