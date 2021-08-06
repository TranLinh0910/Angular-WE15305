import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './backend/products/product.component';
import { ProductAddComponentComponent } from './backend/product-add/product-add-component.component';

import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';

import { ProductEditComponent } from './backend/product-edit/product-edit.component';
import { HomeComponent } from './frontend/home/home.component';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { HeaderComponent } from './frontend/header/header.component';
import { HeaderAdminComponent } from './backend/header-admin/header-admin.component';
import { LayoutWebsiteComponent } from './frontend/layout-website/layout-website.component';
import { SideBarComponent } from './backend/side-bar/side-bar.component';
import { FooterComponent } from './frontend/footer/footer.component';
import { BannerComponent } from './frontend/banner/banner.component';
import { AlbumComponent } from './frontend/album/album.component';
import { DetailComponent } from './frontend/detail/detail.component';
import { AboutComponent } from './frontend/about/about.component';
import { ContactComponent } from './frontend/contact/contact.component';
import firebase from 'firebase';
import { environment } from 'src/environments/environment';
firebase.initializeApp(environment.config)




@NgModule({
  
  declarations: [
    AppComponent,
    ProductComponent,
    ProductAddComponentComponent,
   HeaderComponent,
    ProductEditComponent,
    HomeComponent,
    AdminComponent,
    DashboardComponent,
    HeaderAdminComponent,
    LayoutWebsiteComponent,
    SideBarComponent,
    FooterComponent,
    BannerComponent,
    AlbumComponent,
    DetailComponent,
    AboutComponent,
    ContactComponent,
    
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],

  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
