import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/json/promotions.json'

@Component({
  selector: 'app-promotions-section',
  templateUrl: './promotions-section.component.html',
  styleUrls: ['./promotions-section.component.scss']
})
export class PromotionsSectionComponent implements OnInit {

  promotions: any = (data as any).default;

  sectionTitle: string = "Infopromociones";
  numberPromotions: number = this.promotions.length;
  finalWidth: number = 95 / this.numberPromotions;
  currentImage: number = 0;
  total: number = this.numberPromotions - 1;
  constructor() { }

  ngOnInit(): void {
    this.changeImages()
  }

  changeImages() {
    setInterval(() => {
      if(this.currentImage == this.total) {
        this.currentImage = 0
      } else {
        this.currentImage += 1;
      }
    }, 3000 )

  }

  chargeImage(index: number) {
    this.currentImage = index;
  }

  nextImage() {
    if(this.currentImage == this.total) {
      this.currentImage = 0
    } else {
      this.currentImage += 1;
    }
  }

  prevImage() {
    if(this.currentImage == 0) {
      this.currentImage = this.total;
    } else {
      this.currentImage -= 1;
    }
  }

}
