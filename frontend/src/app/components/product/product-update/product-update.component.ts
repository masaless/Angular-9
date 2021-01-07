import { Product } from './../product-create/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product;

  constructor(private ProductService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ProductService.readByID(id!).subscribe(product => {
      this.product = product
    })
  }
  updateProduct(): void {

    this.ProductService.update(this.product).subscribe(() => {
      this.ProductService.showMessage('Alteração feita com sucesso!')
      this.router.navigate(['/products'])
    })

  }
  cancel(): void {
    this.router.navigate(['/products'])
    this.ProductService.showMessage('Alteração cancelada com sucesso!')
  }
}
