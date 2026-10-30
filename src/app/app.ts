
import { Component } from '@angular/core';
import { HealthcareService } from './service/healthcare.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  users: any[] = [];
  doctors: any[] = [];
  patients: any[] = [];
  appointments: any[] = [];
  prescriptions: any[] = [];

  showLogin = false;

  sampleDoctors: any[] = [
    {
      id: 1,
      name: 'Dr. Rahul Sharma',
      specialization: 'Cardiologist',
      hospital: 'City Care Hospital',
      location: 'Ghaziabad, Uttar Pradesh',
      experience: 8,
      availability: 'Available',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Dr. Priya Verma',
      specialization: 'Dermatologist',
      hospital: 'Apollo Clinic',
      location: 'Noida, Uttar Pradesh',
      experience: 6,
      availability: 'Available',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Dr. Amit Singh',
      specialization: 'Neurologist',
      hospital: 'Max Super Speciality Hospital',
      location: 'Delhi',
      experience: 12,
      availability: 'Available',
      image: 'https://randomuser.me/api/portraits/men/46.jpg'
    },
    {
      id: 4,
      name: 'Dr. Neha Gupta',
      specialization: 'Dentist',
      hospital: 'Smile Dental Clinic',
      location: 'Ghaziabad, Uttar Pradesh',
      experience: 5,
      availability: 'Available',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      id: 5,
      name: 'Dr. Arjun Mehta',
      specialization: 'Orthopedic',
      hospital: 'Fortis Hospital',
      location: 'Noida, Uttar Pradesh',
      experience: 10,
      availability: 'Available',
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      id: 6,
      name: 'Dr. Sneha Kapoor',
      specialization: 'Pediatrician',
      hospital: 'Child Care Clinic',
      location: 'Delhi',
      experience: 7,
      availability: 'Available',
      image: 'https://randomuser.me/api/portraits/women/65.jpg'
    }
  ];

  searchText = '';
  selectedSpecialization = 'All';

  constructor(private service: HealthcareService) {
    // Load sample doctors automatically.
    this.getDoctors();
  }

  getDoctors(): void {
    this.doctors = this.sampleDoctors;
  }

  get filteredDoctors(): any[] {
    const search = this.searchText.trim().toLowerCase();

    return this.doctors.filter(doctor => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(search) ||
        doctor.hospital.toLowerCase().includes(search) ||
        doctor.location.toLowerCase().includes(search) ||
        doctor.specialization.toLowerCase().includes(search);

      const matchesSpecialization =
        this.selectedSpecialization === 'All' ||
        doctor.specialization === this.selectedSpecialization;

      return matchesSearch && matchesSpecialization;
    });
  }

  get specializations(): string[] {
    return [
      'All',
      ...new Set(
        this.sampleDoctors.map(doctor => doctor.specialization)
      )
    ];
  }

  getUsers(): void {
    this.service.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  getPatients(): void {
    this.service.getPatients().subscribe(data => {
      this.patients = data;
    });
  }

  getAppointments(): void {
    this.service.getAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  getPrescriptions(): void {
    this.service.getPrescriptions().subscribe(data => {
      this.prescriptions = data;
    });
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}

