const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("../models/user");
var ArticleCategory = require('../models/article_cat.js');

/**
 * Article Schema
 */

const ArticleSchema = new Schema({
    // _id:Number,
    name:{ type: String, default: '' },
    userID: {type: Schema.Types.ObjectId, ref: User},
    categoryID :{type: Schema.Types.ObjectId, ref: ArticleCategory},
    short_desc: { type: String, default: 3 },
    description: { type: String, default: 3 },
    created_at:  { type: String, default: Date.now },
    updated_at:  { type: String, default: Date.now },
    profile_img_url:  { type: String, default: 3 }
},{ collection: 'article' });

const Article = mongoose.model('article', ArticleSchema);

module.exports= Article;