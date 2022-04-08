import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/json/dataBusiness.json';

@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.scss']
})
export class BasicDataComponent implements OnInit {

  dataBusiness: any = (data as any).default;

  constructor() { }

  ngOnInit(): void {
    console.table(this.dataBusiness);
  }

}
