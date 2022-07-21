import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  formcategory = new FormGroup({
    name: new FormControl('')
  });
  obj: any;
  constructor(private httpCline: HttpClient, private router: Router,
              private categoryService: CategoryService) {
  }
  ngOnInit(): void {
  }
  addCategory() {
    this.obj = {
      name: this.formcategory.value.name
    };
    this.categoryService.save(this.obj).subscribe((data) => {
      alert('them thanh cong');
      this.obj = data;
      this.router.navigate(['']);
    },
    );
  }
}
