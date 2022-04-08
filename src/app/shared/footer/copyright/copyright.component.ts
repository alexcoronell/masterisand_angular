import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {

  currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
    console.log(this.currentYear);
  }

}