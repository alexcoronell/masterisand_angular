import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/json/dataBusiness.json';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  dataBusiness: any = (data as any).default;
  socialMedia: any = this.dataBusiness.socialMedia;

  constructor() { }

  ngOnInit(): void {}

}
