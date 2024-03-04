package com.rechargezone.rechargezone.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rechargezone.rechargezone.model.adminDetails;
// import java.util.List;
import com.rechargezone.rechargezone.model.userMain;


public interface adminDetailsRepository extends JpaRepository<adminDetails, Long>{
    
    public List<adminDetails>  findById(long id);
    // public adminDetails findBy

    
    
}
