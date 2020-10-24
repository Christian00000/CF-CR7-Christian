import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { TravelsComponent } from './travels/travels.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { LegalComponent } from './legal/legal.component';
const routes: Routes = [{
  path: "" , component: HomeComponent
},
  {
  path: "details/:productId", component: DetailsComponent
  },
  {
    path: "blog" , component: BlogComponent
},
{
  path: "travel" , component:  TravelsComponent
  },
  {
  path: 'cart', component: CartComponent
  },
  {
  path: 'legal', component: LegalComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
