const mongooes = require('mongoose');
const schemas = mongooes.Schema;

const blogSchema = new schemas({

    blog_id: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    category:{
        type: String,
        // required: true,
    },
    coverimg:{
        type: String,
        // required: true,
    },
    img1:{
        type: String,
        // required: true,
    },
    des: {
        type: String,
        // maxlength: 200,
        // required: true
    },
    content: {
        type: [],
        // required: true
    },
    tags: {
        type: [String],
        // required: true
    },
   
    activity: {
        total_likes: {
            type: Number,
            default: 0
        },
        total_comments: {
            type: Number,
            default: 0
        },
        total_reads: {
            type: Number,
            default: 0
        },
        total_parent_comments: {
            type: Number,
            default: 0
        },
    },
    comments: {
        type: [],
    },
    draft: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: String,
        // required: true
    },

}, 
{ 
    timestamps: {
        createdAt: 'publishedAt'
    } 

});

module.exports = mongooes.model('Blogs',blogSchema);