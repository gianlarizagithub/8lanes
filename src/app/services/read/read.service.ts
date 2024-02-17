import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  constructor(private firestore: Firestore) { }



  getAppliedCourseByUserID(userID: any)
  {
    
    let $getDataQuery = collection(this.firestore,`Applied`);
    const q = query($getDataQuery, where('userid', '==', userID));
    return collectionData(q) as Observable<any[]>;
  }

}
