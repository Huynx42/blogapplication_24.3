const express = require('express');
const app = new express();
// app.use(express.static('./public'));
const port = process.env.PORT || 3000;

app.set('view engine', "ejs");
app.set("views","./views"); 

app.use(express.static(__dirname + '/views'));
 
app.get('/', (req,res) => {
    res.render("index");
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