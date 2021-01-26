import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from '../app/components/search/search.component'
import {DisplayflightComponent} from '../app/components/displayflight/displayflight.component'
const routes: Routes = [
  { path: '', component:SearchComponent},
  { path: 'flight/search', component: DisplayflightComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
