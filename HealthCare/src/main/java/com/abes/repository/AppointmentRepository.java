package com.abes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abes.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

}