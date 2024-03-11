package com.rechargezone.rechargezone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rechargezone.rechargezone.model.userDetails;
import com.rechargezone.rechargezone.model.userHistory;

public interface userHistoryRepository extends JpaRepository<userHistory,Long> {

    // List<userHistory> findByUserDetailsId(Long userId);
    List<userHistory> findByUserDetails(userDetails userDetails);
    // List<userHistory> findBy
    
}
