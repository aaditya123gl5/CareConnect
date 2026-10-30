package com.abes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abes.model.Prescription;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {

}