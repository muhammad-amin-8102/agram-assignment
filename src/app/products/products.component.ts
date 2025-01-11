import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [CommonModule, MatIconModule,MatButtonModule, MatSidenavModule]
})
export class ProductsComponent {
  @Input() searchQuery: string = '';
  @ViewChild('drawer') drawer!: MatDrawer;
  products = [
    {
        "pk": 901,
        "name": "Ryan",
        "points": 355,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 0,
        "valid_until": "2025-10-10T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 902,
        "name": "Christopher",
        "points": 262,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 5,
        "valid_until": "2025-02-15T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 903,
        "name": "Sara",
        "points": 150,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 5,
        "valid_until": "2025-04-02T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 904,
        "name": "Matthew",
        "points": 172,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 7,
        "valid_until": "2025-12-31T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 905,
        "name": "Zachary",
        "points": 427,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 10,
        "valid_until": "2025-06-03T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 906,
        "name": "Calvin",
        "points": 470,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 16,
        "valid_until": "2025-05-20T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 907,
        "name": "Scott",
        "points": 164,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 20,
        "valid_until": "2025-04-02T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 908,
        "name": "Stephen",
        "points": 134,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 6,
        "valid_until": "2025-03-31T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 909,
        "name": "David",
        "points": 335,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 8,
        "valid_until": "2025-10-04T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 910,
        "name": "Stacy",
        "points": 165,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 11,
        "valid_until": "2025-12-18T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 911,
        "name": "Brandon",
        "points": 227,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 13,
        "valid_until": "2025-11-25T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 912,
        "name": "Christopher",
        "points": 173,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 17,
        "valid_until": "2025-03-25T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 913,
        "name": "Robert",
        "points": 316,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 19,
        "valid_until": "2025-08-03T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 914,
        "name": "Taylor",
        "points": 266,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 14,
        "valid_until": "2025-04-01T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 915,
        "name": "Stacey",
        "points": 211,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 13,
        "valid_until": "2025-10-08T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 916,
        "name": "John",
        "points": 352,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 15,
        "valid_until": "2025-03-09T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 917,
        "name": "Taylor",
        "points": 258,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 18,
        "valid_until": "2025-09-22T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 918,
        "name": "Barbara",
        "points": 178,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 19,
        "valid_until": "2025-04-16T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 919,
        "name": "William",
        "points": 277,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 13,
        "valid_until": "2025-09-21T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 920,
        "name": "Charles",
        "points": 330,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 11,
        "valid_until": "2025-09-01T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 921,
        "name": "Amanda",
        "points": 185,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 18,
        "valid_until": "2025-05-28T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 922,
        "name": "Ann",
        "points": 370,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 7,
        "valid_until": "2025-09-03T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 923,
        "name": "Glenn",
        "points": 130,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 17,
        "valid_until": "2025-11-04T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 924,
        "name": "Nancy",
        "points": 403,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 18,
        "valid_until": "2025-11-29T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 925,
        "name": "Robert",
        "points": 312,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 14,
        "valid_until": "2025-08-02T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 926,
        "name": "Carlos",
        "points": 108,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 13,
        "valid_until": "2025-11-30T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 927,
        "name": "Colin",
        "points": 267,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 12,
        "valid_until": "2025-10-28T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 928,
        "name": "Sarah",
        "points": 116,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 13,
        "valid_until": "2025-06-28T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 929,
        "name": "Mary",
        "points": 256,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 20,
        "valid_until": "2025-05-04T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 930,
        "name": "Cody",
        "points": 209,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 19,
        "valid_until": "2025-07-06T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 931,
        "name": "Alexandra",
        "points": 262,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 12,
        "valid_until": "2025-02-28T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 932,
        "name": "Nicholas",
        "points": 333,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 6,
        "valid_until": "2025-07-13T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 933,
        "name": "Dylan",
        "points": 242,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 18,
        "valid_until": "2025-06-18T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 934,
        "name": "Valerie",
        "points": 108,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 16,
        "valid_until": "2025-11-28T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 935,
        "name": "Jeffrey",
        "points": 280,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 9,
        "valid_until": "2025-05-05T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 936,
        "name": "Shawn",
        "points": 321,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 10,
        "valid_until": "2025-03-03T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 937,
        "name": "Alyssa",
        "points": 232,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 12,
        "valid_until": "2025-03-31T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 938,
        "name": "Wesley",
        "points": 482,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 7,
        "valid_until": "2025-03-11T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 939,
        "name": "James",
        "points": 135,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 20,
        "valid_until": "2025-07-10T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 940,
        "name": "Meagan",
        "points": 236,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 17,
        "valid_until": "2025-05-31T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 941,
        "name": "Benjamin",
        "points": 414,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 19,
        "valid_until": "2025-03-20T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 942,
        "name": "Christina",
        "points": 385,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 9,
        "valid_until": "2025-12-18T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 943,
        "name": "Janice",
        "points": 472,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 8,
        "valid_until": "2025-05-17T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 944,
        "name": "Calvin",
        "points": 416,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 6,
        "valid_until": "2025-02-28T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 945,
        "name": "Jonathan",
        "points": 327,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 11,
        "valid_until": "2025-10-17T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 946,
        "name": "Christopher",
        "points": 357,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 16,
        "valid_until": "2025-08-09T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 947,
        "name": "Elizabeth",
        "points": 333,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 10,
        "valid_until": "2025-03-23T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 948,
        "name": "Christopher",
        "points": 221,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 11,
        "valid_until": "2025-11-24T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 949,
        "name": "Amanda",
        "points": 285,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 17,
        "valid_until": "2025-03-07T02:11:44",
        "low_quantity": 10
    },
    {
        "pk": 950,
        "name": "Brandon",
        "points": 460,
        "display_img_url": "https://picsum.photos/300/200",
        "quantity": 20,
        "valid_until": "2025-07-12T02:11:44",
        "low_quantity": 10
    }
];

  filteredProducts = this.products;
  // Pagination variables
  currentPage = 1;
  itemsPerPage = 6; // Default items per page
  itemsPerPageOptions = [3, 6, 9, 12]; // Options for items per page selection

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchQuery']) {
      this.filterProducts();
    }
  }

  // Toggle the drawer
  toggleDrawer(): void {
    this.drawer.toggle();
  }

  // Sort products
  sortProducts(order: 'asc' | 'desc'): void {
    this.filteredProducts.sort((a, b) => {
      if (order === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    this.drawer.close(); // Close the drawer after sorting
  }


  // Filter products based on the search query
  filterProducts(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.currentPage = 1; // Reset to the first page after filtering
  }

   // Get the total number of pages
   get totalPages(): number {
    return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }

  // Get the products for the current page
  get paginatedProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, endIndex);
  }

  // Change the current page
  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // Change the number of items per page
  changeItemsPerPage(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.itemsPerPage = parseInt(value, 10);
    this.currentPage = 1; // Reset to the first page when items per page changes
  }
}