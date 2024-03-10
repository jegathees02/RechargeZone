package com.rechargezone.rechargezone.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rechargezone.rechargezone.model.userMain;

public interface userRepository extends JpaRepository<userMain, Long> {
    public Optional<userMain> findByEmail(String email);
    public userMain findById(long id);
}
