const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res)=> res.send('Hello world'));


app.get('/products', (req, res) => {
    const products = [
        {id: 1, name: 'hammer'},
        {id: 2, name: 'screwdriver'},
        {id: 3, name: 'wrench'},
        
    ];
    res.json(products)
});

app.use((req, res, next)=>{
    // pre request
})
app.get('/protected-resources',()=>{
    // handle the actual request
})
app.use((req, res, next)=>{
    // post request
})
app.get('/login', ()=>{})

/* 
app.get(
  '/<some route>',
 () => {
   // Pre request middleware
 }, () => {
   // Handle the actual request
 })

 */


app.listen(port, () => {
    console.log(`Example app listening on port ${port}! http://localhost:${port}/`)
});