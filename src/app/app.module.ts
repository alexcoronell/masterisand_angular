import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BusinessComponent } from './pages/business/business.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuMobileComponent } from './shared/header/menu-mobile/menu-mobile.component';
import { MenuDesktopComponent } from './shared/header/menu-desktop/menu-desktop.component';
import { BasicDataComponent } from './shared/footer/basic-data/basic-data.component';
import { SocialMediaComponent } from './shared/footer/social-media/social-media.component';
import { CopyrightComponent } from './shared/footer/copyright/copyright.component';
import { GoUpComponent } from './shared/footer/go-up/go-up.component';
import { CarrouselComponent } from './pages/home/carrousel/carrousel.component';
import { BusinessSectionComponent } from './pages/home/business-section/business-section.component';
import { ServicesSectionComponent } from './pages/home/services-section/services-section.component';
import { PromotionsSectionComponent } from './pages/home/promotions-section/promotions-section.component';
import { ContactSectionComponent } from './pages/home/contact-section/contact-section.component';
import { PresentationPageComponent } from './shared/presentation-page/presentation-page.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { AnimateBackgroundComponent } from './shared/animate-background/animate-background.component';

// Sweet Alert
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
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
    MenuDesktopComponent,
    BasicDataComponent,
    SocialMediaComponent,
    CopyrightComponent,
    GoUpComponent,
    CarrouselComponent,
    BusinessSectionComponent,
    ServicesSectionComponent,
    PromotionsSectionComponent,
    ContactSectionComponent,
    PresentationPageComponent,
    CatalogueComponent,
    AnimateBackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
