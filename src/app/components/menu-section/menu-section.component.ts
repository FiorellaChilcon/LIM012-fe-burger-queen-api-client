import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/data-service/products/products.service';
import { DataProduct } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss']
})
export class MenuSectionComponent implements OnInit {
  menuSection: string = 'breakfast';
  products: DataProduct[];
  filteredProducts: DataProduct[];
  constructor(private router: ActivatedRoute,
    private productsService: ProductsService) {

  }
  getProduct() {
    if (this.products) {
      this.filteredProducts = this.products.filter((product) => (
        this.menuSection === 'breakfast' ? (product.type === 'breakfast') : (product.type !== 'breakfast')
      ));
    }
  }
  onSelect(product) {
    this.productsService.addItem({
      productId: product._id,
      qty: 1,
      price: product.price,
      name: product.name
    });
  }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      data => {
        this.products = data;
        this.getProduct();
      }
    );
    // listen to changes on the params
    this.router.params.subscribe(
      params => {
        this.menuSection = params['section'];
        this.getProduct();
      }
    );
  }

}
