import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as data from '../../../../assets/json/menu.json';

@Component({
  selector: 'app-menu-desktop',
  templateUrl: './menu-desktop.component.html',
  styleUrls: ['./menu-desktop.component.scss']
})
export class MenuDesktopComponent implements OnInit {

  menu: any = (data as any).default;
  hiddenMenu: boolean = true;

  scroll:number = 0;

  @ViewChild('buttonMenuDesktop') buttonMenuDesktop: ElementRef;
  @ViewChild('buttonMenuDesktopClose') buttonMenuDesktopClose: ElementRef;
  @ViewChild('menuDesktop') menuDesktop: ElementRef;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
    this.scroll = window.scrollY;
  }

  scrollEvent = (event: any): void => {
    const number = event.srcElement.scrollTop;
    this.scroll = window.scrollY;
    if(this.scroll > 50) {
      this.buttonMenuDesktop.nativeElement.classList.add('buttonDesktopScroll');
      this.buttonMenuDesktopClose.nativeElement.classList.add('buttonDesktopScroll');
      this.menuDesktop.nativeElement.classList.add('menuDesktopScroll');
    } else {
      this.buttonMenuDesktop.nativeElement.classList.remove('buttonDesktopScroll');
      this.buttonMenuDesktopClose.nativeElement.classList.remove('buttonDesktopScroll');
      this.menuDesktop.nativeElement.classList.remove('menuDesktopScroll');
    }
  }

}
