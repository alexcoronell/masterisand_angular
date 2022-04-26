import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/json/descriptionBusiness.json';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  business: any = (data as any).default;

  title: string = 'Masterisand'
  background: string = 'background-quienessomos.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
