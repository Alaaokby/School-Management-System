import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  message:any;

  constructor(private _authService:AuthService,private _Router:Router) { }
registerForm:FormGroup=new FormGroup({
  "first_name":new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  "last_name":new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  "email":new FormControl(null,[Validators.required,Validators.email]),
  "password":new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][0-9]{3,}$/)]),
})
register(){
  if(this.registerForm.invalid){
    return;
  }
  this._authService.registerData(this.registerForm.value).subscribe((data)=>{
    if (data.message=="success"){
      this.message=data.message;
       this._Router.navigateByUrl("/login")
    }
    else{
      this.message=data.message;
    }
  },(err)=>{
    console.log(err)
  })
  console.log(this.registerForm)
}
  ngOnInit(): void {
  }

}
