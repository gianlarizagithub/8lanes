import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { ReadService } from '../services/read/read.service';
import { Usernotification } from '../models/usernotification/usernotification';
import * as bootstrap from 'bootstrap';
import moment from 'moment';
import { UpdateService } from '../services/update/update.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isScrolled = false;
  isMenuClicked = false;
  public alreadyLoggedIn: boolean = false;
  public currentUserObjectLoggedIn: any;
  public currentUserLoggedInRole: string = '';
  public currentUserLoggedInEmail: string = '';
  public currentUserLoggedInUID: string = '';
  public currentUserNotificationsNotYetRead: number = 0;
  public currentUserLoggedInNotificationsList!: Usernotification[]
  public userNotificationsListModal: any;

  @HostListener('window:scroll', [])


  onWindowScroll() {
    if (!this.isMenuClicked) {
      this.isScrolled = window.scrollY > 30;
    }
  }
  constructor
  (
    private authService: AuthService,
    private readService: ReadService,
    private updateService: UpdateService 
  ) 
  {
    this.alreadyLoggedIn = this.authService.isLoggedIn;
    this.currentUserObjectLoggedIn = this.authService.getCurrentUserLoggedInObject()
      if (this.currentUserObjectLoggedIn != null || this.currentUserObjectLoggedIn != undefined) 
      {
        
        this.currentUserLoggedInRole = this.authService.currentUserLoggedInRole;
        this.currentUserLoggedInEmail = this.currentUserObjectLoggedIn.email;
        this.currentUserLoggedInUID = this.currentUserObjectLoggedIn.uid;
        this.getCurrentUserLoggedInNotifications()
      }
    }


  getCurrentUserLoggedInNotifications() 
  {
    this.readService.getUserNotifications(this.currentUserLoggedInUID).subscribe
    ({
      next: async (response) => 
      {
        this.currentUserLoggedInNotificationsList = response;
        this.currentUserLoggedInNotificationsList.sort((a, b) => {return moment(b.date).toDate().getTime() - moment(a.date).toDate().getTime()})
        this.currentUserNotificationsNotYetRead = this.currentUserLoggedInNotificationsList.filter(f => !f.isread).length;
        },
      error: async (error) => 
      {
        alert(error)
      }
    })
  }

  toggle() {
    if (!this.isMenuClicked) {
      this.isScrolled = window.scrollY > 30;
    }
  }

  signout() 
  {
    this.authService.SignOut();
  }

  openUserNotificationsListModal(modal: any) 
  {
    this.userNotificationsListModal = new bootstrap.Modal(modal, {});
    this.userNotificationsListModal?.show();
  }

  closeUserNotificationsListModal() 
  {
    this.userNotificationsListModal?.hide();
  }

  getSpecificNotificationDateFromNow(date: string) 
  {
    return moment(date).fromNow();
  }

  specificNotificationMarkasRead(specificUserNotification: Usernotification) 
  {
    if (!specificUserNotification.isread)  
    {
      var obj = 
      {
        isread: true
      }
      this.updateService
      .updateSpecificUserNotificationisRead
      (specificUserNotification.id, this.currentUserLoggedInUID, obj)
      .then(() => {})
      .catch(() => {})
    } 
  }

}
