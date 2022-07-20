import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Category} from '../../model/Category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  diachi: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    categoryId: new FormControl('')
  });

  obj: any;
  listCategory: Category[] = [];
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
    this.categoryService.findAll().subscribe((data) => {
      this.listCategory = data;
    });

  }

  private getProduct(id: number) {
    return this.productBeService.getById(id).subscribe(data => {
      this.diachi = new FormGroup({
        name: new FormControl(data.name),
        price: new FormControl(data.price),
        categoryId: new FormControl(data.category.id),
      });
    });

  }

  edit(id: number) {
    this.obj = {
      name: this.diachi.value.name,
      price: this.diachi.value.price,
      category: {
        id: this.diachi.value.categoryId
      }
    };
    this.productBeService.edit(id, this.obj).subscribe(() => {
      this.router.navigate(['/product-be']);
      alert('Cập nhật thành công');
    }, error => {
      console.log(error);
    });
  }
}
