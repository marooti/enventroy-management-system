import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
const routes: Routes = [
  { path: '', component: HomePageComponent },];


@NgModule({
  declarations: [
    HomePageComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    MatDatepickerModule,
    MatButtonModule
  ]
})
export class EnventryManagementModule { }
