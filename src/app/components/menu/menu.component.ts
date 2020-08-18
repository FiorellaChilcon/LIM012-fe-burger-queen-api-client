import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  readonly menu: string[] = ['breakfast', 'lunch - dinner'];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSelect(section: string) {
    this.router.navigate(['home/menu', section]);
  }

}
