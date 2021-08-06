import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { HomeComponent } from './frontend/home/home.component';

import { ProductAddComponentComponent } from './backend/product-add/product-add-component.component';
import { ProductEditComponent } from './backend/product-edit/product-edit.component';
import { ProductComponent } from './backend/products/product.component';

import { LayoutWebsiteComponent } from './frontend/layout-website/layout-website.component';
import { DetailComponent } from './frontend/detail/detail.component';
import { ContactComponent } from './frontend/contact/contact.component';

const routes: Routes = [

  {path:'',component: LayoutWebsiteComponent,
children:[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'detail/:id',component:DetailComponent},
  {path:'contact',component:ContactComponent}
]},
  
  {path: 'admin',component:AdminComponent,
   children:[
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  { path: 'product', component: ProductComponent },
  { path: 'product/add', component: ProductAddComponentComponent },
  { path: 'product/:id/edit', component: ProductEditComponent },
]},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
