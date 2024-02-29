package com.rechargezone.rechargezone.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "planData")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class planData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    // @OneToMany(mappedBy = "planData")
    // @JsonIgnore
    // private List<userHistory> userHistory;

    
}
