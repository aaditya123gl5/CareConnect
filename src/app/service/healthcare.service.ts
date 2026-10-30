import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HealthcareService {

  url = 'http://localhost:8083';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<any[]>(this.url + '/users');
  }

  getDoctors() {
    return this.http.get<any[]>(this.url + '/doctors');
  }

  getPatients() {
    return this.http.get<any[]>(this.url + '/patients');
  }

  getAppointments() {
    return this.http.get<any[]>(this.url + '/appointments');
  }

  getPrescriptions() {
    return this.http.get<any[]>(this.url + '/prescriptions');
  }
}