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
  {path: 'products', component:MobPartsComponent},
  {path: 'books',component:BooksComponent},
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
