import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private firestore: Firestore) { }



  addNewAppliedCourse(specificData: any)
  {
    let $postDataQuery = collection(this.firestore, "Applied");
    return addDoc($postDataQuery, specificData)
  }

}
