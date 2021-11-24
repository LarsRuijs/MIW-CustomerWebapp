import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'app/models/product';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {id: 1, name: 'ESP LTD M-1000 HT BP LH Black Fade', company: "ESP", price: 1319, discount: 10, imgLink: '', category: 'Guitar'},
    {id: 1, name: 'Startone MK-300', company: "Startone", price: 119, discount: 9, imgLink: '', category: 'Keyboard'},
    {id: 1, name: 'iafodj', company: "diaofjd", price: 23.12, discount: 10, imgLink: '', category: 'Keyboard'},
    {id: 1, name: 'iafodj', company: "diaofjd", price: 23.12, discount: 10, imgLink: '', category: 'Keyboard'}
  ];
  columnsToDisplay = ['category', 'name', 'company', 'price'];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((products) => {
      console.log(products);
    })
  }

}
