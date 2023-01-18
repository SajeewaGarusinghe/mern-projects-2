const mongoose = require('mongoose');

const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please enter a valid title']
    },
    message:{
        type:String,
        required:[true,'Please enter a valid messsage']
    },
    creator:{
        type:String,
        required:[true,'Please enter a valid creator']
    },
    selectedFile:{
        type:String,
        required:[false ]
    },
    tags:{
        type:[String],
        required:[false,'Please enter a valid tags']
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
},
    // {
    //     timestamps: true, //to create updated and created at field automatically
    //   }
)

module.exports=mongoose.model('Post',postSchema)