import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { ReadService } from '../../../services/read/read.service';
import { Router } from '@angular/router';
import { Application } from '../../../models/application/application';
import moment from 'moment'

@Component({
  selector: 'app-usercourselist',
  templateUrl: './usercourselist.component.html',
  styleUrl: './usercourselist.component.scss'
})
export class UsercourselistComponent implements OnInit {
public currentLoggedInUserID: any;
public mycourseList!: Application[];
  constructor(private authService: AuthService, private readService: ReadService, private router: Router) 
  {
  this.currentLoggedInUserID =  this.authService.getCurrentUserLoggedInObject().uid

  }


ngOnInit(): void {
this.validateRoleAccess();
  this.retrieveMyCourse();  
}
retrieveMyCourse() 
{
  this.readService.getApplicationByUserID(this.currentLoggedInUserID).subscribe
  ({
    next: async (res) => 
    {
      this.mycourseList = await res;
      this.mycourseList.sort((a, b) => {return moment(b.dateapplied).toDate().getTime() - moment(a.dateapplied).toDate().getTime()})
    },
    error: async (err) => 
    {

    }
  })
}

validateRoleAccess() 
{
  const currentUserLoggedInRole = this.authService.currentUserLoggedInRole.replace('"', '').replace('"', '')
  if (currentUserLoggedInRole != null || currentUserLoggedInRole == "" || currentUserLoggedInRole == undefined)
  if (currentUserLoggedInRole == 'admin') 
  {
    this.router.navigate(['/admin'])
  }
}

ConvertLectureSchedule(data: Application) 
{
  return moment(data.schedulefordrivinglecture).format("MMMM DD, YYYY")
}

}
