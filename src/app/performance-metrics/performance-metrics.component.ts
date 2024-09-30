import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-performance-metrics',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TableModule, ButtonModule, CalendarModule, FormsModule, PaginatorModule],
  templateUrl: './performance-metrics.component.html',
  styleUrl: './performance-metrics.component.css'
})
export class PerformanceMetricsComponent {


candidates: any []= [];
filterObj = {
  "Name": "",
  "ContactNo": "",
  "Email": "",
  "PageNumber": "1",
  "PageSize": "10"
}
pageTitle: string = 'Server Side Filter';
constructor(private http: HttpClient){}

ngOnInit(): void {
  this.filetrCandidates('');
}

filetrCandidates(param: string) {
  
  this.http.post('https://dummyjson.com/products',this.filterObj).subscribe((res:any)=> {
    this.candidates = res.data;
  })
}

}
