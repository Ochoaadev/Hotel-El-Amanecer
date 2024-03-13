const mongoose = require('mongoose')

const users = new mongoose.Schema(
    {
        Name:{
            type: String,
            required: true
        },
        Lastname:{
            type: String,
            required: true
        },
        Email:{
            type: String,
            unique: true,
            required: true
        },
        Password:{
            type: String,
            required: true
        },
        Phone:{
            type: String,
            unique: true,
            required: false,
        },
        Rol:{
            type: String,
            required: true
        },
        Username:{
            type: String,
            unique: true,
            required: true
        },
        Gender:{
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('usuarios', users)