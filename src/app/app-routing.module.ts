import { StructuralDerectivesComponent } from './structural-derectives/structural-derectives.component';
import { MadhuComponent } from './madhu/madhu.component';
import { BindingComponent } from './binding/binding.component';
import { FormsComponent } from './forms/forms.component';
import { Service1Component } from './service1/service1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sub1ServiceComponent } from './service1/sub1-service/sub1-service.component';
import { Sub2ServiceComponent } from './service1/sub2-service/sub2-service.component';


const routes: Routes = [
  {path:"",component:BindingComponent},
  {path:"binding",component:BindingComponent},
  {path:"forms",component:FormsComponent},
  {path:"madhu",component:MadhuComponent},
  {path:"service",component:Service1Component,
    children:[
      {path:"sub1",component:Sub1ServiceComponent},
      {path:"sub2",component:Sub2ServiceComponent}
    ]},
    {path:"directives",component:StructuralDerectivesComponent},
    {path:"enroll-form",component:FormsComponent}
  // {path:"home",component:HomeComponent},
  // {path:"login",component:LoginComponent,children:[
  //   {path:"lion",component},
  //   {},
  //   {}
  // ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }

