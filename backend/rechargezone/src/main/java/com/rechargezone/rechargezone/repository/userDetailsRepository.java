package com.rechargezone.rechargezone.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rechargezone.rechargezone.model.userDetails;
import com.rechargezone.rechargezone.model.userMain;

public interface userDetailsRepository extends JpaRepository<userDetails, Long>{
    // public Optional<userMain> findByEmail(String email);
    
    public userDetails findById(long id);
    // public userDetails findByEmail(String email);
    
}
