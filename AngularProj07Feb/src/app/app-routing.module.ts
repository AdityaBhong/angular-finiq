import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProdNavMenuComponent } from './products/mob-parts/prod-nav-menu/prod-nav-menu.component';
import { CallableBondsComponent } from './products/mob-parts/callable-bonds/callable-bonds.component';
import { GovernmentBondsComponent } from './products/mob-parts/government-bonds/government-bonds.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { HomeComponent } from './layouts/home/home.component';
import { MobPartsComponent } from './products/mob-parts/mob-parts.component';
import { BooksComponent } from './products/books/books.component';


const appRoutes:Routes=[
  {path: '',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'books',component:BooksComponent},
  {path: "login", component: LoginComponent},
  {path: 'dashboard',
   canActivate: [AuthGuard],
   component:DashboardComponent,
  },
  {path: 'products', component:ProdNavMenuComponent,
  children:[
    {
      path: "",
      component:MobPartsComponent
    },
    {
      path: 'govbonds',
      component:GovernmentBondsComponent
    },
    {
      path:'callbonds',
      component:CallableBondsComponent
    }
  ]
  },
 {path:"lazy",
 loadChildren:"./modules/lazy/lazy.module#LazyModule"
},
  {path: '**',component:PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(appRoutes),
  ],
  exports:[
     RouterModule
  ]
})
export class AppRoutingModule { 

}
