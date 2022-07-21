import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';

import {ProductDeleteComponent} from './product/product-delete/product-delete.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CategoryCreateComponent} from './category/category-create/category-create.component';


const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    children: [
      {
        path: 'createProduct',
        component: ProductCreateComponent
      },
      {
        path: 'edit/:id',
        component: ProductEditComponent
      },
      {
        path: 'delete/:id',
        component: ProductDeleteComponent
      },
      {
        path: 'categorylist',
        component: CategoryCreateComponent
      },
      {
        path: 'createCategory',
        component: CategoryCreateComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
