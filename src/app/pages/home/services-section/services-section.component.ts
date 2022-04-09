import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/json/services.json';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent implements OnInit {

  titleSection: string = "Servicios"
  services: any = (data as any).default;

  constructor() { }

  ngOnInit(): void {
  }

}
