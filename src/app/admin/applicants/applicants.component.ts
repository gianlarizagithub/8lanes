import { Component, HostBinding, OnInit, inject } from '@angular/core';
import { Applicant } from './applicant.model';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ReadService } from '../../services/read/read.service';
import { Application } from '../../models/application/application';
import moment from 'moment';
import { map } from 'rxjs';
import * as bootstrap from 'bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UpdateService } from '../../services/update/update.service';
import { CreateService } from '../../services/create/create.service';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrl: './applicants.component.scss',
})
export class ApplicantsComponent implements OnInit {

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
  
  public getApplications!: Application[]
  public sample!: any;
  public SpecificApplicantModal: any;
  SpecificApplicantInformationForm!: FormGroup;
  public specificStatus: string = ''
  constructor
  (
  private readService: ReadService, 
  private formBuilder: FormBuilder,
  private updateService: UpdateService,
  private createService: CreateService
  ) 
  {}
  ngOnInit(): void {
    this.ExecuteSpecificApplicantForm();
    this.retrieveApplicationsList();  
  }
  retrieveApplicationsList() 
  {
    this.readService.getApplications().subscribe
    ({
      next: async (res) =>
       {
        this.getApplications = res
       
        this.getApplications.map((i, index) => 
        {
          this.readService.getUserByID(i.userid)
          .subscribe(data => 
            {
              i.borrowerfullname = data.email
            })
        })
      },
       error: async (error) => 
       {
        alert(JSON.stringify(error))
       }
    })
  }
  openSpecificApplicantInformationModal(element: any, data: Application) 
  {
    this.specificStatus = data.status;
    this.f['userid'].setValue(data.userid);
    this.f['id'].setValue(data.id);
    this.f['course'].setValue(data.course)
    this.f['transmission'].setValue(data.transmission)
    this.f['typeofvehicle'].setValue(data.typeofvehicle)
    this.f['restrictioncode'].setValue(data.restrictioncode)
    this.f['applicantfirstname'].setValue(data.firstname)
    this.f['applicantlastname'].setValue(data.lastname)
    this.f['applicantmiddlename'].setValue(data.middlename)
    this.f['applicantsuffixname'].setValue(data.suffixname)
    this.f['applicantemailaddress'].setValue(data.emailaddress)
    this.f['applicantfacebookaccount'].setValue(data.facebookaccount)
    this.f['applicantcontactno'].setValue(data.contactno)
    this.f['applicantnationality'].setValue(data.nationality)
    this.f['applicantgender'].setValue(data.sex)
    this.f['applicantcivilstatus'].setValue(data.civilstatus)
    this.f['applicantoccupation'].setValue(data.occupation)
    this.f['applicantcompany'].setValue(data.company)
    this.f['applicantbirthplace'].setValue(`${data.birthplaceregion}, ${data.birthplaceprovince} ${data.birthplacecity} ${data.birthplacebarangay}`)
    this.f['applicantbirthdate'].setValue(data.birthdate)
    this.f['applicanthomeaddress'].setValue(data.address)
    this.f['applicanthomeregion'].setValue(data.region)
    this.f['applicanthomeprovince'].setValue(data.province)
    this.f['applicanthomecity'].setValue(data.city)
    this.f['applicanthomebarangay'].setValue(data.barangay)
    this.f['applicantparentfirstname'].setValue(data.parentfirstname)
    this.f['applicantparentlastname'].setValue(data.parentlastname)
    this.f['applicantparentmiddlename'].setValue(data.parentmiddlename)
    this.f['applicantparentsuffixname'].setValue(data.parentsuffixname)
    this.f['applicantparentcontactno'].setValue(data.parentcontactno)
    this.f['applicantparenthomeaddress'].setValue(data.parentaddress)
    this.f['applicantparenthomeregion'].setValue(data.parentregion)
    this.f['applicantparenthomeprovince'].setValue(data.parentprovince)
    this.f['applicantparenthomecity'].setValue(data.parentcity)
    this.f['applicantparenthomebarangay'].setValue(data.parentbarangay)
    this.f['applicationstatus'].setValue(data.status)
    this.f['applicationpaymentstatus'].setValue(data.paid)
    this.f['dateapplied'].setValue(data.dateapplied)
    this.f['accountemail'].setValue(data.borrowerfullname)
    this.SpecificApplicantModal = new bootstrap.Modal(element, {})
    this.SpecificApplicantModal?.show();

  }
  closeSpecificApplicantInformationModal() 
  {
    this.SpecificApplicantModal?.hide()
  }
  save(data: any) {}

ExecuteSpecificApplicantForm() 
{
  this.SpecificApplicantInformationForm = this.formBuilder.group
  ({
    id: [''],
    course: [''],
    transmission: [''],
    typeofvehicle: [''],
    restrictioncode: [''],
    applicantfirstname: [''],
    applicantlastname: [''],
    applicantmiddlename: [''],
    applicantsuffixname: [''],
    applicantemailaddress: [''],
    applicantfacebookaccount: [''],
    applicantcontactno: [''],
    applicantnationality: [''],
    applicantgender: [''],
    applicantcivilstatus: [''],
    applicantoccupation: [''],
    applicantcompany: [''],
    applicantbirthplace: [''],
    applicantbirthdate: [''],
    applicanthomeaddress: [''],
    applicanthomeregion: [''],
    applicanthomeprovince: [''],
    applicanthomecity: [''],
    applicanthomebarangay: [''],
    applicantparentfirstname: [''],
    applicantparentlastname: [''],
    applicantparentmiddlename: [''],
    applicantparentsuffixname: [''],
    applicantparentcontactno: [''],
    applicantparenthomeaddress: [''],
    applicantparenthomeregion: [''],
    applicantparenthomeprovince: [''],
    applicantparenthomecity: [''],
    applicantparenthomebarangay: [''],
    applicationstatus: [''],
    applicationpaymentstatus: [Boolean],
    dateapplied: [''],
    accountemail: [''],
    userid: ['']
  })
}
  get f() 
  {
    return this.SpecificApplicantInformationForm.controls;
  }
  

  updateSpecificApplicationStatus(statusValue: string) 
  {
    var specificID = this.f['id'].value;
    var obj = 
    {
      status: statusValue
    }
    this.updateService.updateSpecificApplicationStatus(specificID, obj).then(() => 
    {
      this.addNotificationForUsersWhenTheirApplicationStatusHasChanged(statusValue).then(() => 
      {
        this.specificStatus = statusValue;
      })
    }).catch((err) => 
    {

    })
  }

  addNotificationForUsersWhenTheirApplicationStatusHasChanged(statusValue: string) 
  {
    var notificationObjectParameter = 
    {
      applicationdateapplied: this.f['dateapplied'].value,
      course: this.f['course'].value,
      transmission: this.f['transmission'].value,
      typeofvehicle: this.f['typeofvehicle'].value,
      restrictioncode: this.f['restrictioncode'].value,
      firstname: this.f['applicantfirstname'].value,
      middlename: this.f['applicantmiddlename'].value,
      lastname: this.f['applicantlastname'].value,
      suffixname: this.f['applicantsuffixname'].value,
      status: statusValue,
      isread: false,
      date: moment(new Date()).format('MMMM DD YYYY HH:mm A')
    }
    return this.createService.addNotificationForUsersWhenTheirApplicationStatusHasChanged(this.f['userid'].value, notificationObjectParameter) 
  }
}
