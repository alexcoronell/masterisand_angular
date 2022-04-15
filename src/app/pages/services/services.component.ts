import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/json/services.json';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: any = (data as any).default;
  title: string = 'Servicios'
  background: string = 'background-servicios.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
