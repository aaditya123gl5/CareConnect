package com.abes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abes.model.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

}