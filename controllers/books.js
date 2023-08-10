const { response, request } = require('express');
const Book = require('../models/book');


const booksGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = req.params;

    const [ total, books ] = await Promise.all([
        Book.countDocuments(query),
        Book.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        books
    });
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