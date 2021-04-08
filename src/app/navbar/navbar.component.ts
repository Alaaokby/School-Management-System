import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from '../authguard.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean=false;

  
  logout(){
    localStorage.removeItem("token");
    this._Router.navigateByUrl("/login");
    this._AuthguardService.showMenuItems.next(null)


  }
  constructor(private _Router:Router,private _AuthguardService:AuthguardService) {
    _AuthguardService.showMenuItems.subscribe(()=>{
      if(_AuthguardService.showMenuItems.getValue()==null){
        this.isLogin=false;

      }
      else{
        this.isLogin=true;
      }


    })
   }
 
  ngOnInit(): void {
  }

}
