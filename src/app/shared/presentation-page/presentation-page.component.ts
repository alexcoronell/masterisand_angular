import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-presentation-page',
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.scss']
})
export class PresentationPageComponent implements OnInit {

  @Input() title: string = '';
  @Input() background: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
