import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/json/menu.json';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {

  menu: any = (data as any).default;
  hiddenMenu: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
