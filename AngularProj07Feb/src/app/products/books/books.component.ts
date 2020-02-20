import { BOOKS } from './mock';
import { Books } from './books';

import { Component,SimpleChanges, Input, Output } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls:['./books.component.css']
})

export class BooksComponent {

  @Input() title_ch:string;
  @Output() title_op:string="From Child..."; 

  books: Books[];
  tweet;
  test: string;

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('OnChanges executed');
    this.test="sample test";
  }

  ngOnInit()
  {
    console.log('On Init executed');
    this.books=BOOKS;
    this.test="Test";
    this.tweet={
      likesCount:10,
      isLiked:false
    }
  
  }

  constructor()
  {
    console.log('constructor executed');
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('AfterContentInit executed');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('AfterViewInit executed');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('On Destroy Executed..!!');
  }

  OnRemove(book)
  {
    let index=this.books.indexOf(book);
    this.books.splice(index,1);
  }

  getBooksCount()
  {
    let bookCount=0;

    for(let book of this.books)
    {
      bookCount=bookCount+1;
    }

    return bookCount;
  }

  removeQuantity(book)
  {
    if(book.pQuantity !=0) book.pQuantity--;
  }

  addQuantity(book)
  {
    if(book.pQuantity < book.quantity)
    {
        book.pQuantity++;
    }      
  }

  attrQuantity(text,book)
  {
    console.clear();
    console.log(text);
    if(text>book.quantity)     
      alert("Enter lesser quatity.");
    else
      book.pQuantity=text;
    
  }
}
