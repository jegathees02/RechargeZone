package com.rechargezone.rechargezone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rechargezone.rechargezone.model.planData;

public interface planDetailsRepository extends JpaRepository<planData, Long>{
    
}
