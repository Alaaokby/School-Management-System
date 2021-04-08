import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  showMenuItems:any =new BehaviorSubject(null)

  canActivate():boolean|Observable<boolean>{
    let token=localStorage.getItem("token")
    if(token){
      return true
    }
    this._Router.navigateByUrl("/login")
    return false
    
  }
  saveCurrentUser(){
    let currentUser=localStorage.getItem("token");
    this.showMenuItems.next(currentUser);
  }
   constructor(private _Router:Router) { 
     if(localStorage.getItem("token")!="undefined"){
       this.saveCurrentUser();
     }
   }
}
