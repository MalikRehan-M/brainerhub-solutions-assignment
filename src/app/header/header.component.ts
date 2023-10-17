import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartItemsCount: number = 0;
  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService 
  ) {}
  ngOnInit() {
    this.cartItemsCount = this.cartService.getCartItemsCount();
    this.cartService.cartItemsCount$.subscribe(count => {
      this.cartItemsCount = count;
    });
  }

  navigateToCart(): void {
    this.router.navigate(['/cart']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
