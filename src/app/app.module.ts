import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BusinessComponent } from './pages/business/business.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuMobileComponent } from './shared/header/menu-mobile/menu-mobile.component';
import { MenuDesktopComponent } from './shared/header/menu-desktop/menu-desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusinessComponent,
    ServicesComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    MenuMobileComponent,
    MenuDesktopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
