import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages Components
import { HomeComponent } from './pages/home/home.component';
import { BusinessComponent } from './pages/business/business.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'la-empresa', component: BusinessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
