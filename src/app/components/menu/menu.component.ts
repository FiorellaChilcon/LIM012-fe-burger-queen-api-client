import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  readonly menu: string[] = ['breakfast', 'lunch - dinner'];
  constructor(private router: Router) { }
  addOrderForm = new FormGroup({
    client: new FormControl('', [Validators.required, Validators.email]),
    products: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  ngOnInit(): void {
  }
  onSelect(section: string) {
    this.router.navigate(['home/menu', section]);
  }

}
