import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../model/Category';
import {CategoryService} from '../../service/category.service';
import {FormControl, FormControlName, FormGroup} from '@angular/forms';
import {error} from 'protractor';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  name: any;
  form: FormGroup = new FormGroup({
    category: new FormControl('')
  });
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
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    });
  }
  // getByProductById(id: any) {
  //   this.productService.getByProductById(id).subscribe((data) => {
  //     this.listProduct = data;
  //   }, error => {
  //     console.log(error);
  //   });
  // }
  getByProductById() {
    const id = this.form.value.category;
    this.productService.getByProductById(id).subscribe((data) => {
      this.listProduct = data;
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    });
  }
  getByname() {
    // name = this.name.value.category;
    this.productService.searchname(this.name).subscribe((data) => {
      this.listProduct = data;
    });
  }
}

