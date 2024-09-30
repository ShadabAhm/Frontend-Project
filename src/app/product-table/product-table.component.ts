import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule, TableModule, PaginatorModule],
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  products: any[] = [];
  paginatedProducts: any[] = [];
  totalRecords: number = 0;
  rowsPerPage: number = 10;
  selectedCells: Set<string> = new Set();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get('https://dummyjson.com/products').subscribe((response: any) => {
      this.products = response.products.map((product: any) => ({
        id: product.id,
        title: product.title,
        category: product.category,
        price: product.price,
        discountPercentage: product.discountPercentage,
        rating: product.rating,
        stock: product.stock,
        tags: product.tags,
        brand: product.brand,
        sku: product.sku
      }));
      this.totalRecords = this.products.length;
      this.paginate({ first: 0, rows: this.rowsPerPage });
    });
  }

  paginate(event: any) {
    const start = event.first;
    const end = start + event.rows;
    this.paginatedProducts = this.products.slice(start, end);
  }

  onCellClick(row: number, col: string) {
    const cellKey = `${row}-${col}`;
    if (this.selectedCells.has(cellKey)) {
      this.selectedCells.delete(cellKey);
    } else {
      this.selectedCells.add(cellKey);
    }
  }

  isCellSelected(row: number, col: string): boolean {
    return this.selectedCells.has(`${row}-${col}`);
  }
}
