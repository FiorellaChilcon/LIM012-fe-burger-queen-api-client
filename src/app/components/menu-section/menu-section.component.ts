import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss']
})
export class MenuSectionComponent implements OnInit {
  menuSection: string;

  constructor(private router: ActivatedRoute) {
    // listen to changes on the params
    router.params.subscribe(
      params => {
        this.menuSection = params['section'];
      }
    );
  }

  ngOnInit(): void {
  }

}
