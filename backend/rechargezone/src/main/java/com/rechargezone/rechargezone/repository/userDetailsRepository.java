package com.rechargezone.rechargezone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rechargezone.rechargezone.model.userDetails;

public interface userDetailsRepository extends JpaRepository<userDetails, Long>{
    // public userDetails findByEmail(String email);
    public userDetails findById(long id);
    
}
