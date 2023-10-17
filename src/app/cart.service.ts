import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemsCountSubject: BehaviorSubject<number> = new BehaviorSubject(0);
  cartItemsCount$: Observable<number> = this.cartItemsCountSubject.asObservable();
  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]); 
  
  constructor() {}

  addItemToCart(product: any): void {
    const existingItem = this.cartItems.find((item) => item.id === product.id);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }

    this.updateCartItemsCount();
    this.updateCartState(); 
  }

  removeItemFromCart(itemId: number) {
    const itemIndex = this.cartItems.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      this.cartItems.splice(itemIndex, 1);
      this.updateCartItemsCount();
      this.updateCartState(); 
    }
  }
  getCartItemsObservable(): Observable<any[]> {
    return this.cartItemsSubject.asObservable();
  }
  private updateCartItemsCount() {
    this.cartItemsCountSubject.next(this.cartItems.length);
  }

  private updateCartState() {
    this.cartItemsSubject.next([...this.cartItems]);
  }

  getCartItemsCount(): number {
    return this.cartItems.length;
  }

  getCartItems(): any[] {
    return this.cartItems;
  }
}
