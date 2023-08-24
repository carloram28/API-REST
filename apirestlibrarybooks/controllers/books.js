const { response, request } = require('express');
const Book = require('../models/book');



const booksGet = async(req = request, res = response) => {

    try {

        const books = await Book.find();
        res.json(books)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

const bookGet = async(req, res = response ) => {

    const { id } = req.params;
    const book = await Book.findById( id )
                            

    res.json( book );

}

const booksPost = async(req, res = response) => {
    
    const { title, author,available} = req.body;
    const book = new Book({title,author,available});
       
    // Guardar en BD
    await book.save();

    res.json({
        book
    });
}

const booksPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, ...resto } = req.body;

    
    const book = await Book.findByIdAndUpdate( id, resto );

    res.json(book);
}

const booksDelete = async(req, res = response) => {

    const { id } = req.params;
    const book = await Book.findByIdAndDelete( id );
        
    res.json(book);
}




module.exports = {
    bookGet,
    booksGet,
    booksPost,
    booksPut,
    booksDelete,
}