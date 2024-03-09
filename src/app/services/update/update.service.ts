import { Injectable } from '@angular/core';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private firestore: Firestore) { }



   updateSpecificApplicationStatus(id:string, specificData:any)
  {
    let $updateDataQuery = doc(this.firestore,`Applications/${id}`);
    return updateDoc($updateDataQuery, specificData);    
  }

}
