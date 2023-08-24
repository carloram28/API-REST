import { Book } from './book';
import { User } from './user';
export class Reservation{
  _id?:number;
  user:User;
  book:Book;
  dateReserved:Date;
  dateDue:Date;



  constructor(user:User,book:Book,dateReserved:Date,dateDue:Date){
    this.user=user;
    this.book=book;
    this.dateReserved=dateReserved;
    this.dateDue=dateDue;


 }


}
