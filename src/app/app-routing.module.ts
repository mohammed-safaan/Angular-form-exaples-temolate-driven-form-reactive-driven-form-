import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'products', component:ProductsComponent},
  {path:'addproduct', component:AddProductComponent},
  {path:'', redirectTo:'/login' ,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
