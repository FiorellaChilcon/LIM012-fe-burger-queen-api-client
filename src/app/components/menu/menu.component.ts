import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/data-service/products/products.service';
import { ordersProduct } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  readonly menu: string[] = ['breakfast', 'lunch - dinner'];
  menuSection: string;
  total: number;
  constructor(private router: Router, private productsService: ProductsService) { }
  order: ordersProduct[];
  ngOnInit(): void {
    this.productsService.sharedProducts.subscribe((data) => {
      this.order = data;
    });
    this.productsService.sharedTotal.subscribe((num) => {
      this.total = num;
    });
  }
  onSelect(section: string) {
    this.router.navigate(['home/menu', section]);
    this.menuSection = section;
  }

}
