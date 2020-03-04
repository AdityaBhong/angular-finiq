import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyChildComponent } from './lazy-child/lazy-child.component';


const routesLazy:Routes=[
  {
    path:"lazy-child",
    component:LazyChildComponent
  }
]

@NgModule({
  declarations: [LazyChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routesLazy)
  ]
})
export class LazyModule { }
