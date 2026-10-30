package com.abes.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.abes.model.Prescription;
import com.abes.repository.PrescriptionRepository;

@Service
public class PrescriptionService {

    private final PrescriptionRepository prescriptionRepository;

    PrescriptionService(PrescriptionRepository prescriptionRepository) {
        this.prescriptionRepository = prescriptionRepository;
    }

    public List<Prescription> getPrescriptions() {
        return prescriptionRepository.findAll();
    }

    public Prescription getPrescription(Long id) {
        return prescriptionRepository.findById(id).orElse(null);
    }

    public Prescription addPrescription(Prescription prescription) {
        return prescriptionRepository.save(prescription);
    }

    public void deletePrescription(Long id) {
        prescriptionRepository.deleteById(id);
    }
}