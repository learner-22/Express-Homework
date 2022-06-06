
//Initializing Express and setting PORT
const express = require('express')
const app = express()
PORT =3000

// Root route
app.get('/' ,(req,res)=>{
    res.send('<h1>Hello, Stranger</h1>')
})


//Route to calculate tip when the Total amount and Tip amount are passes as params
app.get('/tip/:num1/:num2',(req,res)=>{
console.log(req.params.num2 , req.params.num1)
let tip = (Number(req.params.num2)*Number(req.params.num1))/100

    res.send(`<h1>Tip Amount :  ${tip} </h1>`)
})

//Route to say Welcome to the name passed as param
app.get('/:name',(req,res)=>{
    
    res.send(`<h1> Wow! Hello there,   ${ req.params.name}  !!!</h1>`)
})


//Route to evaluate if a number is in the Fibonacci series
app.get('/fibonacci/:n' ,(req,res)=>{
    
    let n = req.params.n
    if(Number.isInteger(Math.sqrt(5*n*n + 4)) ||
    Number.isInteger(Math.sqrt(5*n*n - 4))){
        res.send(`<h1>${n} Is a Fibonacci Number</h1>`)
    }
    else{
        res.send(`<h1> ${n} Not a Fibonacci Number</h1>`)
    }
    
})

// Route for the Magic 8 ball
let magicEight = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:question', (req,res)=>{
    res.send(`<h1> Question: ${req.params.question} </h1>
    <h2> Answer : ${magicEight[Math.floor(Math.random()*magicEight.length)]}</h2>`)
})

//Listening to the port
app.listen(PORT , (req,res)=>{
    console.log('Server  is Running...')
})