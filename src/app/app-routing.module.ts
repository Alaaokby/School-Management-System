import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService } from './authguard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [{path:"",redirectTo:"home",pathMatch:"full"},
{path:"home",component:HomeComponent,canActivate:[AuthguardService]},
{path:"details/:id",component:StudentDetailsComponent,canActivate:[AuthguardService]},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"**",component:NotfoundComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
