import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {

  products: any = [];
  isProductLoad: boolean = true;

  constructor(public http: Http) {
    this.loadProducts();
  }

  loadProducts() {
    this.isProductLoad = true;
    this.http.get('https://paginaweb-221ec.firebaseio.com/products_idx.json')
      .subscribe(res => {
        console.log(res.json());
        //this.products =
        this.isProductLoad = false;
      })
  }

}
