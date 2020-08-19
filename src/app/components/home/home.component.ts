import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userIsAdmin = (localStorage.getItem('userAdminRole') === 'true');
  constructor() { }

  ngOnInit(): void {
  }

}
