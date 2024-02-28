package com.rechargezone.rechargezone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rechargezone.rechargezone.model.adminDetails;
// import java.util.List;


public interface adminDetailsRepository extends JpaRepository<adminDetails, Long>{
    
    public adminDetails  findById(long id);
    
}
