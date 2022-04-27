import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Somos una empresa innovadora en servicios para medios impresos publicitarios, y que cuenta con profesionales que poseen una gran trayectoria y experiencia en las artes gráficas, arte final, preprensa, impresión de gran formato, publicidad impresa e impresión digital por demanda, Desarrollo Web y Marketing Digital.' },
      { name: 'author', content: 'Masterisand' },
      { name: 'keywords', content: 'Impresion digital, impresion gran formato, diseño y desarrollo web, angula, spa, single page applications, marketing digital, redes sociales, facebook, instagram, google, diseño gráfico, diseno grafico, sublimacion' },
      { name: 'url', content: 'http://www.masterisand.com.co/' },
      { name: 'locale', content: 'es_CO' },
      { name: 'title', content: 'Masterisand | Home Page' },
      { name: 'site_name', content: 'Masterisand' }
    ]);
    this.setTitle('Masterisand - Centro de Impresión y Procesamiento Digital | Inicio');
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
  }

}
