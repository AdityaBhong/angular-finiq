import { AuthGuard } from './auth.guard';
import { BooksService } from './services/books.service';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { NavComponent } from './layout/nav/nav.component';
import { BannerOneComponent } from './layout/banner-one/banner-one.component';
import { ProductsComponent } from './layout/products/products.component';
import { BannerTwoComponent } from './layout/banner-two/banner-two.component';
import { BannerThreeComponent } from './layout/banner-three/banner-three.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MobPartsComponent } from './products/mob-parts/mob-parts.component';
import { BooksComponent } from './products/books/books.component';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { FirstDirective } from './directives/first.directive';
import { HostDirective } from './directives/host.directive';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { HomeComponent } from './layouts/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { GovernmentBondsComponent } from './products/mob-parts/government-bonds/government-bonds.component';
import { CallableBondsComponent } from './products/mob-parts/callable-bonds/callable-bonds.component';
import { ProdNavMenuComponent } from './products/mob-parts/prod-nav-menu/prod-nav-menu.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TempComponent } from './forms/temp/temp.component';
import { ReactComponent } from './forms/react/react.component';



@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    NavComponent,
    BannerOneComponent,
    ProductsComponent,
    BannerTwoComponent,
    BannerThreeComponent,
    ContactUsComponent,
    FooterComponent,
    MobPartsComponent,
    BooksComponent,
    SqrtPipe,
    FirstDirective,
    HostDirective,
    PageNotFoundComponent,
    HomeComponent,
    GovernmentBondsComponent,
    CallableBondsComponent,
    ProdNavMenuComponent,
    LoginComponent,
    DashboardComponent,
    TempComponent,
    ReactComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [BooksService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
