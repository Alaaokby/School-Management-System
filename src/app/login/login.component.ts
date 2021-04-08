import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthguardService } from '../authguard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message:any;

  constructor(private _authService:AuthService,private _Router:Router,private _AuthguardService:AuthguardService) { }
   loginForm:FormGroup=new FormGroup({
    "email":new FormControl(null,[Validators.required,Validators.email]),
    "password":new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][0-9]{3,}$/)]),
   })

   login(){
    if(this.loginForm.invalid){
      return;
    }
    this._authService.loginData(this.loginForm.value).subscribe((data)=>{
      localStorage.setItem("token",data.token)
      if (data.message=="success"){
         this._Router.navigateByUrl("/home")
         this._AuthguardService.saveCurrentUser();


      }
      else{
       this.message=data.message;
      }
    },(err)=>{
      console.log(err)
    })
  }
  ngOnInit(): void {
  }

}
