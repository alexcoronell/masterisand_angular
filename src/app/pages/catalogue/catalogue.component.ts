import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  title: string = 'Catálogo'
  background: string = 'background-catalogo.jpg';

  catalogueImages: string[] = [
    'catalogo1.jpg',
    'catalogo2.jpg',
    'catalogo3.jpg',
    'catalogo4.jpg',
    'catalogo5.jpg',
    'catalogo6.jpg'
  ]

  catalogueVideos: string[] = [
    'impresion-libro-1.mp4',
    'impresion-libro-2.mp4',
    'plotterdecorte.mp4'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
