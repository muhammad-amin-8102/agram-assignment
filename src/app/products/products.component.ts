import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports:[CommonModule]
})
export class ProductsComponent {
  products = [
    { name: 'Product 1', price: '$50.00', image: 'assets/product1.jpg' },
    { name: 'Product 2', price: '$80.00', image: 'assets/product2.jpg' },
    // Add more products as needed
  ];
}