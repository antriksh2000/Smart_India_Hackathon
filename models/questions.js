const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
   
    image:{
        type: String,
        default: ""
    }
    
});
const Books = mongoose.model('Books', BookSchema);
module.exports = Books; 
