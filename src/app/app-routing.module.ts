import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages Components
import { HomeComponent } from './pages/home/home.component';
import { BusinessComponent } from './pages/business/business.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'la-empresa', component: BusinessComponent },
  { path: 'servicios', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
