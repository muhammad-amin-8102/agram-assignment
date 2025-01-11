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
    { id: 1, name: 'e-voucher', content: '', checked: false },
    { id: 2, name: 'products', content: '', checked: false },
    { id: 3, name: 'Evergreen', content: '', checked: false },
    { id: 4, name: 'Fashion & retail', content: '', checked: false },
  ];

  toggleCheck(item: any) {
    item.checked = !item.checked;
  }
}