import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { StructuralDerectivesComponent } from './structural-derectives/structural-derectives.component';
import { HttpClientModule } from "@angular/common/http";
import { Service1Component } from './service1/service1.component';
import { Sub1ServiceComponent } from './service1/sub1-service/sub1-service.component';
import { Sub2ServiceComponent } from './service1/sub2-service/sub2-service.component';
import { MadhuComponent } from './madhu/madhu.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
// import { HotelComponent } from './hotel/hotel.component';
// import { HotelDetailsComponent } from './hotel/hotel-details/hotel-details.component';
// import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
// import { RoutingComponent } from './routing/routing.component';
// import { HomeComponent } from './routing/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    StructuralDerectivesComponent,
    Service1Component,
    Sub1ServiceComponent,
    Sub2ServiceComponent,
    MadhuComponent,
    FormsComponent,
    TemplateDrivenFormComponent
    // HotelComponent,
    // HotelDetailsComponent,
    // HotelListComponent,
    // RoutingComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
