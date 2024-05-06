import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { OrderPlaceComponent } from './order-place/order-place.component';
import { AddInvertoryComponent } from './add-invertory/add-invertory.component';
import { StockComponent } from './stock/stock.component';
import { TotalOrdersComponent } from './total-orders/total-orders.component';
import { TableModule } from 'primeng/table';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'order_processing', component: OrderPlaceComponent },
  { path: 'add_inventory', component: AddInvertoryComponent },
  { path: 'stock', component: OrderPlaceComponent },
];


@NgModule({
  declarations: [
    HomePageComponent,
    OrderPlaceComponent,
    AddInvertoryComponent,
    StockComponent,
    TotalOrdersComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    MatDatepickerModule,
    MatButtonModule,
    TableModule
  ],
})
export class EnventryManagementModule { }
