import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/data-service/products/products.service';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss']
})
export class MenuSectionComponent implements OnInit {
  menuSection: string;
  products;
  newOrder = [];
  constructor(private router: ActivatedRoute, private productsService: ProductsService) {
    // listen to changes on the params
    router.params.subscribe(
      params => {
        this.menuSection = params['section'];
        this.getProduct();
      }
    );
  }
  getProduct() {
    this.productsService.getProducts().subscribe(
      data => {
        this.products = data.filter((product) => (
          this.menuSection === 'breakfast' ? (product.type === 'breakfast') : (product.type !== 'breakfast')
        ));
      }
    )
  }
  onSelect(product) {
    console.log(product)
    console.log(this.newOrder)
    return this.newOrder.push(product);
  }
  ngOnInit(): void {
  }

}
