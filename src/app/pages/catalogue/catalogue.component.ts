import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalUrlService } from 'src/app/services/canonical-url.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  titlePage: string = 'Catálogo'
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

  constructor(private meta: Meta, private title: Title, private canonical: CanonicalUrlService) {
    this.meta.addTags([
      { name: 'description', content: 'Somos una empresa innovadora en servicios para medios impresos publicitarios, y que cuenta con profesionales que poseen una gran trayectoria y experiencia en las artes gráficas, arte final, preprensa, impresión de gran formato, publicidad impresa e impresión digital por demanda, Desarrollo Web y Marketing Digital.' },
      { name: 'author', content: 'Masterisand' },
      { name: 'keywords', content: 'Impresion digital, impresion gran formato, diseño y desarrollo web, angula, spa, single page applications, marketing digital, redes sociales, facebook, instagram, google, diseño gráfico, diseno grafico, sublimacion, catalogo, catálogo, impresion, video' },
      { name: 'url', content: 'http://www.masterisand.com.co/' },
      { name: 'locale', content: 'es_CO' },
      { name: 'title', content: 'Masterisand | Home Page' },
      { name: 'site_name', content: 'Masterisand' }
    ]);
    this.setTitle('Masterisand - Centro de Impresión y Procesamiento Digital | Catálogo');
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
    this.canonical.createLinkForCanonicalURL();
    setTimeout(() => window.scrollTo(0, 0), 16);
  }

}
