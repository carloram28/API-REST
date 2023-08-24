const { response, request } = require('express');



const User = require('../models/user');



const usersGet = async(req = request, res = response) => {

    try {

        const users = await User.find();
        res.json(users)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

const userGet = async(req, res = response ) => {

    const { id } = req.params;
    const user = await User.findById( id )
                            

    res.json( user );

}

const usersPost = async(req, res = response) => {
    
    const { username, email} = req.body;
    const user = new User({username,email});

    
    // Guardar en BD
    await user.save();

    res.json({
        user
    });
}

const usersPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id,...resto } = req.body;

    
    const user = await User.findByIdAndUpdate( id, resto);
    
    res.json(user);
}



const usersDelete = async(req, res = response) => {

    const { id } = req.params;
    const user = await User.findByIdAndDelete( id );

    
    res.json(user);
}


module.exports = {
    userGet,
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
}