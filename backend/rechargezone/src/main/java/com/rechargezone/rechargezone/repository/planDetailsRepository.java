package com.rechargezone.rechargezone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rechargezone.rechargezone.model.planData;
import java.util.*;

public interface planDetailsRepository extends JpaRepository<planData, Long>{
    public planData findByOperator(String operator);  
    public List<planData> findByOperatorAndPlanData(String operator, String planData);
    public List<planData> findByOperatorAndPlanDataAndPlanType(String operator, String planData, String planType); 
    // public List<planData> findByOperatorandPlanData(String operator, String planData);
    public planData findByPlanType(String planType);
    public List<planData> findById(long id);
    public List<planData> findByOperatorAndPlanValidityAndPlanType(String operator, String planValidity, String PlanType);
    // public List<planData> findByOperatorAndPlanValidityAndPlanType(String operator, String planValidity, String PlanType);
}
