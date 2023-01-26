const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
})


const bookSchema = new Schema({
    userRecommending: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        required: true,
        default: function () {
            return new Date().toLocaleDateString('en-us', { day: "numeric", year: "numeric", month: "short" })
        }
    },
    coverImage: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ['Fiction', 'Novel',
            'Science fiction', 'Non-fiction',
            'Poetry', 'Memoir', 'Self Help', 'History', 'Autobiography', 'Drama', 'CookBook',
            'Personal Development', 'Humor', 'Children Literature',
            'Romance', 'Mythology', 'Mystery', 'Politics', 'Psychology', 'Business', 'Finance'

        ],
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],

})

// Compile the schema into a model and export it 
module.exports = mongoose.model('Book', bookSchema)