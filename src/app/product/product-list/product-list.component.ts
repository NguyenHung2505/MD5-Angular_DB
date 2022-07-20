import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../model/Category';
import {CategoryService} from '../../service/category.service';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listProduct: any;
  listCategory: Category[] = [];
  // tiem giong nhu Autowired
  constructor(private httpClien: HttpClient,
              private productService: ProductService,
              private categoryService: CategoryService) {
  }
  ngOnInit(): void {
    this.getAllProduct();
    this.getAllCategory();
  }
  getAllCategory() {
    this.categoryService.findAll().subscribe((data) => {
      this.listCategory = data;
    });
  }
  getAllProduct() {
    this.productService.findAll().subscribe((data) => {
      console.log(data);
      this.listProduct = data;
    }, error => {
      console.log(error);
    });
  }
}
