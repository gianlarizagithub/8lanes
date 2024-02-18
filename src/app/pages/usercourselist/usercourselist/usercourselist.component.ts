import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { ReadService } from '../../../services/read/read.service';

@Component({
  selector: 'app-usercourselist',
  templateUrl: './usercourselist.component.html',
  styleUrl: './usercourselist.component.scss'
})
export class UsercourselistComponent implements OnInit {
public currentLoggedInUserID: any;
public mycourseList: any;
  constructor(private authService: AuthService, private readService: ReadService) 
  {
  this.currentLoggedInUserID =  this.authService.getCurrentUserLoggedInObject().uid

  }


ngOnInit(): void {
  this.retrieveMyCourse();  
}
retrieveMyCourse() 
{
  
  this.readService.getAppliedCourseByUserID(this.currentLoggedInUserID).subscribe
  ({
    next: async (res) => 
    {
      console.log("the result", await res)
      this.mycourseList = await res;
    },
    error: async (err) => 
    {

    }
  })
}

}
