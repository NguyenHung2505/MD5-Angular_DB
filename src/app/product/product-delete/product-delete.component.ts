import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {FormControl, FormGroup} from '@angular/forms';
import {resetFakeAsyncZone} from '@angular/core/testing';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price : new FormControl(''),
    categoryId: new FormControl('')
  });
  id: any;
  constructor(private productBeService: ProductService,
              private activatedRoute: ActivatedRoute,
              // ActivatedRoute lấy dữ liệu trên đường dẫn) { }
              private categoryService: CategoryService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }
  ngOnInit(): void {
  }
  private getProduct(id: number) {
    return this.productBeService.getById(id).subscribe(data => {
      this.form = new FormGroup({
        name: new FormControl(data.name),
        price: new FormControl(data.price),
        categoryId: new FormControl(data.category.id),
      });
    });
  }
  delete(id: number) {
    this.productBeService.delete(id).subscribe(() => {
      this.router.navigate(['/product-be']);
      alert('Xoá thành công');
    }, error => {
      console.log(error);
    });
  }
}
