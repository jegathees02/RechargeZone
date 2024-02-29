package com.rechargezone.rechargezone.services;

import java.util.ArrayList;
import java.util.List;

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


    public String addPlans(planDataDTO dto) {
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
        return "added";
    }

    public String deletePlans(long id) {
        planrepo.deleteById(id);
        return "deleted";
    }

    public String updatePlans(long id, planDataDTO dto) {
        planData plan = planrepo.findById(id).get();
        // planData plan = new planData();
        plan.setId(dto.getId());
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
        return "updated";
    }


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
    
}
