package com.rechargezone.rechargezone.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class planDataDTO {
    private long id;
    private String operator;
    private String planType; //prepaid or postpaid
    private String planName;
    private String planValidity;
    private String planAmount;
    private String planDescription;
    private String planData;
    private String planTalktime;
    private String planSms;
    private String plansubscription;
    
    
}
