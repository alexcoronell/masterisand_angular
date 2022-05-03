import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scroll:number = 0;

  @ViewChild('background1') background1: ElementRef;
  @ViewChild('background2') background2: ElementRef;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
    this.scroll = window.scrollY;
  }

  scrollEvent = (event: any): void => {
    const number = event.srcElement.scrollTop;
    this.scroll = window.scrollY;
    if(this.scroll > 50) {
      this.background1.nativeElement.classList.add('Header__background--1--scroll');
      this.background2.nativeElement.classList.add('Header__background--2--hidden');
    } else {
      this.background1.nativeElement.classList.remove('Header__background--1--scroll');
      this.background2.nativeElement.classList.remove('Header__background--2--hidden');
    }
  }

}
