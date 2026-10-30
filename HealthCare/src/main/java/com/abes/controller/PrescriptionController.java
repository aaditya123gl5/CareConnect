package com.abes.controller;

import java.util.List;


import org.springframework.web.bind.annotation.*;

import com.abes.model.Prescription;
import com.abes.repository.PrescriptionRepository;

@RestController
@RequestMapping("/prescriptions")
public class PrescriptionController {

    private final PrescriptionRepository prescriptionRepository;

    PrescriptionController(PrescriptionRepository prescriptionRepository) {
        this.prescriptionRepository = prescriptionRepository;
    }

    @GetMapping
    public List<Prescription> getPrescriptions() {
        return prescriptionRepository.findAll();
    }

    @PostMapping
    public Prescription addPrescription(@RequestBody Prescription prescription) {
        return prescriptionRepository.save(prescription);
    }

    @GetMapping("/{id}")
    public Prescription getPrescription(@PathVariable Long id) {
        return prescriptionRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deletePrescription(@PathVariable Long id) {
        prescriptionRepository.deleteById(id);
    }
}