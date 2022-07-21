import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/Category';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl('')
  });
  obj: any;
  listCategory: Category[];
  constructor(private httpCline: HttpClient, private router: Router,
              private productBeService: ProductService,
              private categoryService: CategoryService) {
  }
  ngOnInit(): void {
    this.categoryService.findAll().subscribe((data) => {
      this.listCategory = data;
    });
  }
  add() {
    console.log(this.form.value);
    this.obj = {
      name: this.form.value.name,
      price: this.form.value.price,
      category: {
        id: this.form.value.category
      }
    };
    this.productBeService.save(this.obj).subscribe((data) => {
        alert('Them thanh cong');
        this.obj = data;
        // this.router.navigate(['']);
      },
    );
  }
}
