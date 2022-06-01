const express = require('express')
const app = express()

PORT =3000


app.get('/' ,(req,res)=>{
    res.send('<h1>Hello, Stranger</h1>')
})

app.get('/:name',(req,res)=>{
    
    res.send(`<h1> Wow! Hello there,   ${ req.params.name}  !!!</h1>`)
})

app.listen(PORT , (req,res)=>{
    console.log('Server  is Running...')
})