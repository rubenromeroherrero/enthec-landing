import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activated: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  showMenu(): void {
    if (this.activated === false) {
      this.activated = true;
    } else {
      this.activated = false;
    }
  }
}
