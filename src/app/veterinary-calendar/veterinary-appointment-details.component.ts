import { Component, OnInit, Input } from '@angular/core';
import { AppointmentDetails, Appointments } from 'app/models';
import { AppointmentService } from 'app/services/appointment.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-veterinary-appointment-details',
  templateUrl: './veterinary-appointment-details.component.html',
  styleUrls: ['./veterinary-appointment-details.component.css']
})
export class VeterinaryAppointmentDetails implements OnInit {
  AppointmentDetail: AppointmentDetails
  appointment: Appointments
  constructor(public appointmentService: AppointmentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
  }

  //TODO: ADD METHOD TO SHOW DETAIL

  cancel(): void {
    this.router.navigate([''])
  }

}
