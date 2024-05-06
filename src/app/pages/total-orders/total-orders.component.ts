import { Component } from '@angular/core';

@Component({
  selector: 'app-total-orders',
  templateUrl: './total-orders.component.html',
  styleUrls: ['./total-orders.component.scss']
})
export class TotalOrdersComponent {
  products: any[] = [
    {
      customerName: 'imran',
      productName: 'ViTal',
      productQuntity: 3,
      productPrice: 100,
      totalCost:300,
      onHand:100
    }
  ]
}
