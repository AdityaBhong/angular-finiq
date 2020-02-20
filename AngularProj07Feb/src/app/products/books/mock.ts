import { Books } from './books';

export const BOOKS: Books[]=[
    {
      bookId:1,
      bookName: 'Fixed Income',
      author: 'F J Fabozzi',
      quantity: 100,
      imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/51sW49-uQGL._SX329_BO1,204,203,200_.jpg'
      ,inStock:'Y'
      ,price: 1500
      ,discount:20
      ,pQuantity:0
    },
    {
      bookId:2,
      bookName: 'mutual funds',
      author: 'Lalitha T',
      quantity: 200,
      imgSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQlvDJKCTff8UKjdgFnTrlE5LkXJJa5YMPA0lYeZlTfEBcJyde5hhyk0PJatXvRAhpzcNuuZrZBSuNpMsgQE1c7dbtD_GvO9jIzXuoFCzPeVLDgxHXn0Fw&usqp=CAc'
      ,inStock:'Y'
      ,price: 1300
      ,discount:30
      ,pQuantity:0
    },
    {
      bookId:3,
      bookName: 'Forex Trading',
      author: 'Michelle Williams',
      quantity: 0,
      imgSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTOVufEL1GhgHFr-xrb-BB5YiNh5r4rN_ooqZ9J_ahV-8YfH_Gnld_Wh5JH4ouBORn9vlpOoSewhL2NT1EkMqd7o66nCVT2v0yz8I5FmZRudglxhTmPLmcC&usqp=CAc'
      ,inStock:'N'
      ,price: 200
      ,discount:0
      ,pQuantity:0
    },
    {
      bookId:4,
      bookName: 'Equities',
      author: 'S R Veale',
      quantity: 400,
      imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/51zo-1ETX1L._SX331_BO1,204,203,200_.jpg'
      ,inStock:'Y'
      ,price: 3500
      ,discount:50
      ,pQuantity:0
    }
  ]