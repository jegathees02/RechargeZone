package com.rechargezone.rechargezone.mapper;

import com.rechargezone.rechargezone.dto.planDataDTO;
import com.rechargezone.rechargezone.model.planData;

public class planDataMapper {
    public static planDataDTO mapToPlanDataDTO(planData plan) {
        planDataDTO planData = new planDataDTO();
        // planData.setId(plan.getId());
        planData.setOperator(plan.getOperator());
        planData.setPlanType(plan.getPlanType());
        planData.setPlanName(plan.getPlanName());
        planData.setPlanValidity(plan.getPlanValidity());
        planData.setPlanAmount(plan.getPlanAmount());
        planData.setPlanDescription(plan.getPlanDescription());
        planData.setPlanData(plan.getPlanData());
        planData.setPlanTalktime(plan.getPlanTalktime());
        planData.setPlanSms(plan.getPlanSms());
        planData.setPlansubscription(plan.getPlansubscription());
        return planData;
    }

    public static planData mapToPlanData(planDataDTO planData) {
        planData plan = new planData();
        plan.setOperator(planData.getOperator());
        plan.setPlanType(planData.getPlanType());
        plan.setPlanName(planData.getPlanName());
        plan.setPlanValidity(planData.getPlanValidity());
        plan.setPlanAmount(planData.getPlanAmount());
        plan.setPlanDescription(planData.getPlanDescription());
        plan.setPlanData(planData.getPlanData());
        plan.setPlanTalktime(planData.getPlanTalktime());
        plan.setPlanSms(planData.getPlanSms());
        plan.setPlansubscription(planData.getPlansubscription());
        return plan;
    }
    
}
