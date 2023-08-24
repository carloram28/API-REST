export class Book{
  _id?:number;
  title:string;
  author:string;
  available:Boolean;

  constructor(title:string,author:string,available:boolean){
    this.title=title;
    this.author=author;
    this.available=available;

 }


}
