import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  imports:[CommonModule]
})
export class CategoryComponent {
  categories = [
    { id: 1, name: 'e-voucher', content: 'Content for e-voucher.', checked: false },
    { id: 2, name: 'products', content: 'Content for products.', checked: false },
    { id: 3, name: 'Evergreen', content: 'Content for Evergreen.', checked: false },
    { id: 4, name: 'Fashion & retail', content: 'Content for Fashion & retail.', checked: false },
  ];

  toggleCheck(item: any) {
    item.checked = !item.checked;
  }
}