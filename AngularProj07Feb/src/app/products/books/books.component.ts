import { BOOKS } from './mock';
import { Books } from './books';

import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls:['./books.component.css']
})

export class BooksComponent {
  
  books: Books[]=BOOKS;

  tweet={
    likesCount:10,
    isLiked:false
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
