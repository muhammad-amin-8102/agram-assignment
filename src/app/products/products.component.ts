import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [CommonModule]
})
export class ProductsComponent {
  @Input() searchQuery: string = '';
  products = [
    {
        "pk": 901,
        "name": "Janice",
        "points": 439,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 18,
        "valid_until": "2025-09-10T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 902,
        "name": "Eric",
        "points": 216,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 15,
        "valid_until": "2025-08-25T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 903,
        "name": "Linda",
        "points": 277,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 13,
        "valid_until": "2025-03-15T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 904,
        "name": "Brian",
        "points": 391,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 18,
        "valid_until": "2025-12-25T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 905,
        "name": "Darrell",
        "points": 488,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 8,
        "valid_until": "2025-07-23T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 906,
        "name": "Michael",
        "points": 264,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 17,
        "valid_until": "2025-08-29T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 907,
        "name": "Nicholas",
        "points": 438,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 6,
        "valid_until": "2025-04-12T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 908,
        "name": "Elizabeth",
        "points": 144,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 19,
        "valid_until": "2025-05-09T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 909,
        "name": "Joshua",
        "points": 248,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 12,
        "valid_until": "2025-05-31T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 910,
        "name": "Duane",
        "points": 218,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 16,
        "valid_until": "2025-05-21T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 911,
        "name": "Kristina",
        "points": 204,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 17,
        "valid_until": "2025-05-15T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 912,
        "name": "Felicia",
        "points": 243,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 12,
        "valid_until": "2025-09-03T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 913,
        "name": "Brittney",
        "points": 339,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 19,
        "valid_until": "2025-09-16T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 914,
        "name": "Nicholas",
        "points": 265,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 6,
        "valid_until": "2025-10-09T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 915,
        "name": "Kristina",
        "points": 299,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 10,
        "valid_until": "2025-09-24T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 916,
        "name": "Maxwell",
        "points": 395,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 12,
        "valid_until": "2025-06-26T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 917,
        "name": "Phillip",
        "points": 392,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 11,
        "valid_until": "2025-05-01T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 918,
        "name": "Olivia",
        "points": 252,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 10,
        "valid_until": "2025-12-08T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 919,
        "name": "Benjamin",
        "points": 354,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 19,
        "valid_until": "2025-07-02T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 920,
        "name": "Ann",
        "points": 374,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 18,
        "valid_until": "2025-03-09T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 921,
        "name": "Thomas",
        "points": 273,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 10,
        "valid_until": "2026-01-05T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 922,
        "name": "Linda",
        "points": 218,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 8,
        "valid_until": "2025-05-21T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 923,
        "name": "Catherine",
        "points": 337,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 16,
        "valid_until": "2025-06-11T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 924,
        "name": "Douglas",
        "points": 426,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 6,
        "valid_until": "2025-03-15T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 925,
        "name": "Annette",
        "points": 326,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 15,
        "valid_until": "2025-10-11T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 926,
        "name": "Julie",
        "points": 270,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 13,
        "valid_until": "2025-11-08T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 927,
        "name": "Yolanda",
        "points": 165,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 10,
        "valid_until": "2025-02-23T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 928,
        "name": "Dustin",
        "points": 287,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 17,
        "valid_until": "2025-10-24T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 929,
        "name": "William",
        "points": 302,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 8,
        "valid_until": "2025-08-30T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 930,
        "name": "Matthew",
        "points": 322,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 13,
        "valid_until": "2025-12-27T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 931,
        "name": "Brenda",
        "points": 439,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 15,
        "valid_until": "2025-12-15T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 932,
        "name": "Tyler",
        "points": 472,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 16,
        "valid_until": "2025-10-07T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 933,
        "name": "Reginald",
        "points": 368,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 17,
        "valid_until": "2025-07-12T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 934,
        "name": "Paula",
        "points": 428,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 19,
        "valid_until": "2025-07-31T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 935,
        "name": "Shane",
        "points": 221,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 19,
        "valid_until": "2025-09-24T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 936,
        "name": "Dawn",
        "points": 482,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 5,
        "valid_until": "2025-11-26T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 937,
        "name": "Anthony",
        "points": 262,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 13,
        "valid_until": "2025-04-13T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 938,
        "name": "Kiara",
        "points": 464,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 9,
        "valid_until": "2025-05-25T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 939,
        "name": "Betty",
        "points": 200,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 13,
        "valid_until": "2025-11-04T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 940,
        "name": "David",
        "points": 445,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 5,
        "valid_until": "2025-09-06T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 941,
        "name": "Dana",
        "points": 114,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 5,
        "valid_until": "2025-08-17T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 942,
        "name": "Keith",
        "points": 442,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 5,
        "valid_until": "2025-11-04T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 943,
        "name": "Sara",
        "points": 245,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 13,
        "valid_until": "2025-02-23T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 944,
        "name": "Danielle",
        "points": 451,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 17,
        "valid_until": "2025-05-23T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 945,
        "name": "Caleb",
        "points": 287,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 18,
        "valid_until": "2025-06-25T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 946,
        "name": "Richard",
        "points": 309,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 9,
        "valid_until": "2025-06-06T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 947,
        "name": "Kyle",
        "points": 197,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 6,
        "valid_until": "2025-03-03T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 948,
        "name": "Denise",
        "points": 467,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 5,
        "valid_until": "2025-08-02T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 949,
        "name": "Lydia",
        "points": 428,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 7,
        "valid_until": "2025-02-26T01:53:27",
        "low_quantity": 10
    },
    {
        "pk": 950,
        "name": "Christopher",
        "points": 375,
        "display_img_url": "https://placehold.co/600x400",
        "quantity": 7,
        "valid_until": "2025-09-23T01:53:27",
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