import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UniversiteAddComponent } from './component/universite-add/universite-add.component';
import { UniversiteListComponent } from './component/universite-list/universite-list.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "dashboard",
    component: DashbordComponent,
 
  },
  {
    path: "uniList",
    component: UniversiteListComponent,
 
  },
  {
    path: "addUniv",
    component: UniversiteAddComponent,
 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
