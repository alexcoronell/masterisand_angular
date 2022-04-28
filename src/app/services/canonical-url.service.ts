import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanonicalUrlService {

  constructor(@Inject(DOCUMENT) private doc: any) { }

  createLinkForCanonicalURL() {
    let links = this.doc.getElementsByTagName("link");
    links[1].setAttribute('href', this.doc.URL);
  }
}
