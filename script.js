const express = require('express');
const app = express();
const port = 5100 ;
app.set('view engine,ejs');
app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`App listening to port${port}`)

})

app.get('/',)