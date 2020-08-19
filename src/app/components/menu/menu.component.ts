import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  readonly menu: string[] = ['breakfast', 'lunch - dinner'];
  menuSection: string;
  constructor(private router: Router, private activatedrouter: ActivatedRoute) { }
  addOrderForm = new FormGroup({
    client: new FormControl('', [Validators.required, Validators.email]),
    products: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  ngOnInit(): void {
  }
  onSelect(section: string) {
    this.router.navigate(['home/menu', section]);
    this.menuSection = section;
  }

}
