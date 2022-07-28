import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  newProductForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl('', Validators.required),
    description: new FormControl(''),
    category: new FormControl(''),
    image: new FormControl(''),
    rating: new FormGroup({
      rate: new FormControl(),
      count: new FormControl(),
    }),
  });

  constructor(
    private productsServices: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  get id() {
    return this.newProductForm.get('id') as FormControl;
  }
  get title() {
    return this.newProductForm.get('title') as FormControl;
  }
  get price() {
    return this.newProductForm.get('price') as FormControl;
  }
  get description() {
    return this.newProductForm.get('description') as FormControl;
  }
  get category() {
    return this.newProductForm.get('category') as FormControl;
  }
  get image() {
    return this.newProductForm.get('image') as FormControl;
  }
  get rate() {
    return this.newProductForm.get('rating.rate') as FormControl;
  }
  get count() {
    return this.newProductForm.get('rating.count') as FormControl;
  }

  // setProductData() {
  //   this.newProductForm.setValue({
  //     id: this.id,
  //     title: this.title,
  //     price: this.price,
  //     description: this.description,
  //     category: this.category,
  //     image: this.image,
  //     rating: this.rating,
  //     rate: this.rate,
  //     count: this.count,
  //   });
  // }
  addProduct(user: {}) {
    this.productsServices.addProduct(user);
    this.router.navigate(['/products']);
  }
}
