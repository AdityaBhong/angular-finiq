import { BOOKS } from './mock';
import { Books } from './books';

import { Component,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls:['./books.component.css']
})

export class BooksComponent {
  
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
}
