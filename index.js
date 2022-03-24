const express = require('express');
const app = new express();
// app.use(express.static('./public'));
const port = process.env.PORT || 3000;

app.set('view engine', "ejs");
app.set("views","./views"); 

app.use(express.static(__dirname + '/views'));
 
app.get('/', (req,res) => {
    let posts = [
        {
            title: 'Man must explore, and this is exploration at its greatest',
            subtitle: 'Problems look mighty small from 150 miles up',
            author: 'Thinh Le',
            postDate: 'September 24,2021',
            url: 'https://www.24h.com.vn/'
        },
        {
            title: 'Man2 must explore, and this is exploration at its greatest',
            subtitle: 'Problems look mighty small from 150 miles up',
            author: 'Thinh Le',
            postDate: 'September 24,2021',
            url: 'https://bongdaplus.vn/'
        }
    ]
    res.render("index", {posts: posts});
})

app.get('/contact', (req,res) => {
    res.render("contact");
})

app.get('/about', (req,res) => {
    res.render("about");
})

app.get('/post', (req,res) => {
    res.render("post");
})

app.listen(port, () => {
    console.log(`App listening at PORT ${port}`)
})