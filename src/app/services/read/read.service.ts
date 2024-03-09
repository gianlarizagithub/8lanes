import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  constructor(private firestore: Firestore) { }



  getApplicationByUserID(userID: any)
  {
    let $getDataQuery = collection(this.firestore,`Applications`);
    const q = query($getDataQuery, where('userid', '==', userID));
    return collectionData(q) as Observable<any[]>;
  }

  getApplications() 
  {
    let $getDataQuery = collection(this.firestore, 'Applications');
    return collectionData($getDataQuery, {idField: 'id'}) as Observable<any[]>;
  }

  getUserByID(userID: any) 
  {
    let $getDataQuery = doc(this.firestore, `User/${userID}`);
    return docData($getDataQuery) as Observable<any>;
  }
  getUsers() 
  {
    let $getDataQuery = collection(this.firestore, 'User');
    return collectionData($getDataQuery, {idField: 'id'}) as Observable<any>;
  }
}
