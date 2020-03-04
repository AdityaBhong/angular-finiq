import { BOOKS } from './../products/books/mock';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from "rxjs/operators";

@Injectable()
export class BooksService {
  
  constructor(private http:Http)
  {

  }

  //http://localhost:4200/FinIQService/RMWorkstation_JSOn.svc/GetProductList/

  getBooksData()
  {
     //return BOOKS;

     return this.http
     .get("http://localhost:4200/FinIQService/RMWorkstation_JSOn.svc/GetProductList/") //../../assets/api/books.json
     .pipe(map(response => response.json()));
  }
}
