import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/json/descriptionBusiness.json';

@Component({
  selector: 'app-business-section',
  templateUrl: './business-section.component.html',
  styleUrls: ['./business-section.component.scss']
})
export class BusinessSectionComponent implements OnInit {
  descriptionBusiness: any = (data as any).default;
  constructor() { }

  ngOnInit(): void {
  }

}
