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
  // tim kiem theo ten
  name: any;
  // tim kiem theo gia
  productForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    categoryId: new FormControl(''),
    from: new FormControl(''),
    to: new FormControl('')
  });
  //
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
  // tim kiem product bang category
  getByProductById(id: any) {
    this.productService.getByProductById(id).subscribe((data) => {
      this.listProduct = data;
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    });
  }
  //
  // selection
  getByIdProductById() {
    const id = this.form.value.category;
    this.productService.getByProductById(id).subscribe((data) => {
      this.listProduct = data;
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    });
  }
  getByname(name: any) {
    this.productService.searchname(this.name).subscribe((data) => {
      this.listProduct = data;
    });
  }

  searchByPrice() {
    const from = this.productForm.value.from;
    const to = this.productForm.value.to;
    this.productService.getByPriceBetween(from, to).subscribe((data) => {
      console.log(data);
      this.listProduct = data;
    });
  }
}

