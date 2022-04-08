import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/json/menu.json';

@Component({
  selector: 'app-menu-desktop',
  templateUrl: './menu-desktop.component.html',
  styleUrls: ['./menu-desktop.component.scss']
})
export class MenuDesktopComponent implements OnInit {

  menu: any = (data as any).default;
  hiddenMenu: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
