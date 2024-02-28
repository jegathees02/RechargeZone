package com.rechargezone.rechargezone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rechargezone.rechargezone.model.userMain;

public interface userRepository  extends JpaRepository<userMain, Long>{
    public userMain findByEmail(String email);
}
