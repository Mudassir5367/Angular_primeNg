import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-table1',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class Table1Component implements OnInit {


  studenDetail: any[] = [
    {name: 'Ali', age:23, city: 'multan'},
    {name: 'M.ali', age:23, city: 'multan'},
    {name: 'Ahmed', age:23, city: 'multan'},
    {name: 'Awais', age:23, city: 'multan'},
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
      //this.productService.getProductsSmall().then((data: any) => this.products = data);
      // this.http.get<any>('assets/products.json').subscribe((data:any)=>{
      //   console.log('data:',data);
        
      // })
      
  }

  


}
