import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartColumns: string[] = ['name', 'quantity', 'price', 'actions'];
  cartItems: Product[] = [];
  totalPrice: number = 0;
  cartItemsCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartItemsObservable().subscribe((items: Product[]) => {
      this.cartItems = items;
      this.calculateTotalPrice();
    });
    this.cartService.cartItemsCount$.subscribe((count: number) => {
      this.cartItemsCount = count;
    });
  }

  removeItemFromCart(item: Product): void {
    this.cartService.removeItemFromCart(item.id);
  }

  calculateTotalPrice(): number {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return this.totalPrice;
  }
}
