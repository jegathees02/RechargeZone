package com.rechargezone.rechargezone.model;


import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "userDetails")
public class userDetails {
    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long user_id;
    private String Fname;
    private String Lname;
    private String phone;
    private String serviceProvider;
    private String address;
    private String city;

    @OneToOne
    @JoinColumn(name = "id")
    private userMain user;

    @OneToMany(mappedBy = "userDetails")
    @JsonIgnore
    private List<userHistory> userHistory; 
    
    
    
}
