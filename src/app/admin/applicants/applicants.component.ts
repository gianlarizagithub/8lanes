import { Component, HostBinding } from '@angular/core';
import { Applicant } from './applicant.model';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrl: './applicants.component.scss',
})
export class ApplicantsComponent {
  applicantsSampleData = [
    {
      id: '1',
      name: 'John Doe',
      course: 'Theoretical Driving',
      registrationDate: '1634534400',
      email: 'johndoe@example.com',
    },
    {
      id: '2',
      name: 'Jane Smith',
      course: 'Practical Driving',
      registrationDate: '1634534400',
      email: 'janesmith@example.com',
    },
    {
      id: '3',
      name: 'David Johnson',
      course: 'Theoretical Driving',
      registrationDate: '1634534400',
      email: 'davidjohnson@example.com',
    },
    {
      id: '4',
      name: 'Sarah Williams',
      course: 'Practical Driving',
      registrationDate: '1634534400',
      email: 'sarahwilliams@example.com',
    },
    {
      id: '5',
      name: 'Michael Brown',
      course: 'Theoretical Driving',
      registrationDate: '1634534400',
      email: 'michaelbrown@example.com',
    },
  ];

  paginationDatas: Applicant[] = [
    {
      id: '1',
      name: 'John Doe',
      course: 'Theoretical Driving',
      registrationDate: '1634534400',
      email: 'johndoe@example.com',
    },
    {
      id: '2',
      name: 'Jane Smith',
      course: 'Practical Driving',
      registrationDate: '1634534400',
      email: 'janesmith@example.com',
    },
    {
      id: '3',
      name: 'David Johnson',
      course: 'Theoretical Driving',
      registrationDate: '1634534400',
      email: 'davidjohnson@example.com',
    },
    {
      id: '4',
      name: 'Sarah Williams',
      course: 'Practical Driving',
      registrationDate: '1634534400',
      email: 'sarahwilliams@example.com',
    },
    {
      id: '5',
      name: 'Michael Brown',
      course: 'Theoretical Driving',
      registrationDate: '1634534400',
      email: 'michaelbrown@example.com',
    },
  ];
  constructor() {}

  save(data: any) {}
}
