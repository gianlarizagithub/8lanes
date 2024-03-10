import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { signInWithEmailAndPassword, Auth, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile, authState, user  } from '@angular/fire/auth';
import { collection, where, collectionData, doc, docData, addDoc, setDoc, updateDoc, deleteDoc, Firestore, query } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, from, catchError, throwError, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

public user: any;
public displayname: any;
public currentUserID: string = "";
  constructor
  (
    private auth: Auth,
    private firestore: Firestore,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) 

  { 
    
    if (isPlatformBrowser(this.platformId)) 
    {
      this.displayname = localStorage.getItem('displayname')
    }
    authState(this.auth).subscribe((data) => 
    {
      
      if (data && data.uid) 
      {
        this.currentUserID = data.uid;
      }
      else 
      {
      }
    })

  }


  // getDataAny(parameter: any, arraystring: any)
  // {
    
  //   let $getDataQuery = collection(this.firestore,`${parameter}`);
  //   const q = query($getDataQuery, where('id', 'in', arraystring));
  //   return collectionData(q) as Observable<any[]>;
  // }

  // getData(parameter: any)
  // {
  //   let $getDataQuery = collection(this.firestore,`${parameter}`);

  //   return collectionData($getDataQuery, {idField: 'id'}) as Observable<any[]>;
  // }
  // getDataById(parameter: any, specificId: any)
  // {
  //   let $getDataByIdQuery = doc(this.firestore, `${parameter}/${specificId}`);
  //   return docData($getDataByIdQuery)as Observable<any>;
  // }
  // postData(parameter: any, specificData: any)
  // {
  //   let $postDataQuery = collection(this.firestore,`${parameter}`);
  //   return addDoc($postDataQuery, specificData)
  // }
  // postDatawithID(parameter: any, specificData: any)
  // {
  //   let $postDataQuery = doc(this.firestore,`${parameter}`);
  //   return setDoc($postDataQuery, specificData)
  // }
  // updateData(id:string, specificData:any, parameter: any)
  // {
  //   let $updateDataQuery = doc(this.firestore,`${parameter}/${id}`);
  //   return updateDoc($updateDataQuery, specificData);    
  // }
  // deleteData(id:string, parameter: any)
  // {
  //   let $productRef= doc(this.firestore,`${parameter}/${id}`);
  //   return deleteDoc($productRef);
  // }


saveUserInfoAfterRegistering(specificData: any, uid: any) 
{
  let $postDataQuery = doc(this.firestore, `User/${uid}`);
  return setDoc($postDataQuery, specificData);
}
get currentUserLoggedInRole(): string 
{
  return JSON.stringify(localStorage.getItem('displayname'));
}

get isLoggedIn(): boolean 
{
  // if (isPlatformBrowser(this.platformId)) {
  //   return this.displayname !== null ? true : false
  // }
  return isPlatformBrowser(this.platformId) ? localStorage.getItem('displayname') != null ? true : false : false
}

setDisplayNameLocalStorage(role: any, userLoggedInObject: any) 
{
  if (isPlatformBrowser(this.platformId)) 
  localStorage.setItem('displayname', role)
localStorage.setItem('userobject', JSON.stringify(userLoggedInObject))
}
getCurrentUserLoggedInObject() 
{
  return isPlatformBrowser(this.platformId) ? JSON.parse(localStorage.getItem('userobject') as any) : []
}

   
  signIn(params: any): Observable<any>
  {
    return from 
    (
      signInWithEmailAndPassword(this.auth, params.email,params.password)
    ).pipe
    (
      catchError
      (
        (error: FirebaseError) =>
        throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
      )
    ) 
  }

  signUp(params: any): Observable<any>
  {

    return from
    (
      createUserWithEmailAndPassword
      (
        this.auth,
        params.email,
        params.password
      )
    ).pipe
    (
      catchError
      (
        (error: FirebaseError) => 
      throwError(() => new Error(this.translateFirebaseErrorMessageForSignUp(error)))
      )
    );
  }

  resetPassword(email: any): Observable<any>
  {
    return from
    (
      sendPasswordResetEmail
      (
        this.auth,
        email
      )
    ).pipe
    (
      catchError
      (
        (error: FirebaseError) => 
      throwError(() => new Error(this.translateFirebaseErrorMessageForSignUp(error)))
      )
    );
  }

  translateFirebaseErrorMessageForSignUp({code, message}: FirebaseError) {
    if (code === "auth/admin-restricted-operation") {
      return "Email is badly formatted.";
    }
    if (code === "auth/email-already-in-use") {
      return "Email already in use.";
    }
    if (code === "auth/missing-email")
    {
      return "Missing email"
    }
    if (code === "auth/missing-password")
    {
      return "Missing password"
    }
    return message;
  }

  translateFirebaseErrorMessage({code, message}: FirebaseError) {
    
    if (code === "auth/invalid-credential") {
      return "User not found.";
    }
    return message;
  }

SignOut() 
{
  signOut(this.auth)
  localStorage.removeItem('displayname');
  localStorage.removeItem('userobject')
  this.router.navigate(['/auth/login'])
}

}


