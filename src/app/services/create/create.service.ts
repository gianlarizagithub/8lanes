import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private firestore: Firestore) { }



  addNewApplication(specificData: any)
  {
    let $postDataQuery = collection(this.firestore, "Applications");
    return addDoc($postDataQuery, specificData)
  }

  addNotificationForUsersWhenTheirApplicationStatusHasChanged(userid: string, specificData: any) 
  {
    let $postDataQuery = collection(this.firestore, `User/${userid}/Notifications`);
    return addDoc($postDataQuery, specificData);
  }

}
