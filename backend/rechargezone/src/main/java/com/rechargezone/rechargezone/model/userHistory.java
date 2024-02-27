package com.rechargezone.rechargezone.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "history")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class userHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long user_id;
    private String plan_id;
    // private String plan_name;
    // private String plan_type;
    // private String plan_amount;
    // private String plan_description;

    
}
