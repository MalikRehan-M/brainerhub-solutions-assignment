import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { MatSelectChange } from '@angular/material/select';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  selectedCategory: string | undefined;
  sortDirection: string = '';
  categories: string[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.categories = [...new Set(products.map((product) => product.category))];
    });
  }
  
  getProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      if (this.selectedCategory) {
        this.categories = [...new Set(products.map((product) => product.category))];
        products = products.filter((product) => product.category === this.selectedCategory);
      }

      if(this.sortDirection){
        products = products.sort((a, b) => {
          // console.log(this.sortDirection)
          if (this.sortDirection === 'asc') {
            return a.price - b.price;
          } else if (this.sortDirection === 'desc') {
            return b.price - a.price;
          }
        
        return 0;
      });
      }

      this.products = products;
    });
  }

  onCategoryChange(event: MatSelectChange): void {
    this.selectedCategory = event.value;
    this.getProducts();
  }

  onSortChange(sortDirection: string): void {
    this.sortDirection = sortDirection; 
    this.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addItemToCart(product);
  }
}
