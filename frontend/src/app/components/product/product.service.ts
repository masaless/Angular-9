import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './product-create/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readById(id: string | null) {
    throw new Error('Method not implemented.');
  }

  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition:"top"
    })
  }

  cancel(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition:"top"
    })
  }

  create(product: Product): Observable<Product> {
     return this.http.post<Product>(this.baseUrl, product)
  }
  
  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  readByID(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)

  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
}
