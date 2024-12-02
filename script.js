const express = require('express');
const app = express();
const port = 5100 ;
app.set('view engine','ejs');
app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`Server listening at: http://localhost:${port}`)

})

app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/avail_grp',(req,res)=>{
    res.render('avail_grp');
});

app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.get('/kerala',(req,res)=>{
    res.render('kerala');
});
app.get('/create',(req,res)=>{
    res.render('create');
});
app.get('/CreateAccountfinal',(req,res)=>{
    res.render('CreateAccountfinal');
});
app.get('/signinpage',(req,res)=>{
    res.render('signinpage');
});
app.get('/update',(req,res)=>{
    res.render('update');
});