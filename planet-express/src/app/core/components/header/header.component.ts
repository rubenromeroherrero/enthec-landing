import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activated: boolean = false;
  // Cogemos elementos del DOM
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('menuPhone') menuPhone!: ElementRef;

  scrolling: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showMenu(): void {
    this.activated = !this.activated;
  }

  // Escuchamos el evento scroll
  @HostListener('document: scroll', [])
  scrollingHeader(): void {
    if (document.scrollingElement?.scrollTop) {
      this.menu.nativeElement.classList.add('scrolling');
      this.menuPhone.nativeElement.classList.add('scrolling');
    } else {
      this.menu.nativeElement.classList.remove('scrolling');
      this.menuPhone.nativeElement.classList.remove('scrolling');
    }
  }
}
