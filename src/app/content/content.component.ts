import { Component, Input } from '@angular/core';
import { CategoryComponent } from "../category/category.component";
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-content',
  imports: [CategoryComponent, ProductsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  @Input() searchQuery: string = '';
}
