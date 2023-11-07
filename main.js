class Book{
    constructor(title,author,publicationYear){
        this.title=title;
        this.author=author;
        this.publicationYear=publicationYear
    }
    bookDetails(){
    document.write(`Title :${this.title}<br>Author :${this.author}<br>Published year:${this.publicationYear}`);
    }
}

class Ebook extends Book{
    constructor(title,author,publicationYear,bookPrice){
        super(title,author,publicationYear)
        this.bookPrice=bookPrice;

    }
    bookDeatils(){
        
        document.write(`Title of book is ${this.title},<br>Author is ${this.author},<br>published in year ${this.publicationYear} and price of book is ${this.bookPrice}`);
    }
}
let res=new Ebook("Turning Points","A.P.J.Abdul Kalam",2012,200);
res.bookDeatils();