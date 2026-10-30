package com.abes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abes.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}