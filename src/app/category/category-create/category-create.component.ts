import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  // // @ts-ignore
  // formCate : new FormGroup = new FormGroup({
  //   name: new FormControl()
  // })
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  // add(){
  //   const category = this.formCate.value;
  //   this.categoryService.save(category).subscribe(() => {
  //     alert('Thành công');
  //   }, error => {
  //     alert('Lỗi');
  //   }) ;
  // }
}
