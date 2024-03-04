package com.rechargezone.rechargezone.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table (name = "adminDetails")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class adminDetails {
    @Id 
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long admin_id;
    private String Fname;
    private String Lname;
    private String phone;

    @OneToOne
    @JoinColumn(name = "id")
    private userMain user;
    


    
}
