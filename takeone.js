
//Initializing Express and setting PORT
const express = require('express')
const app = express()

PORT =4000

//Setting up the view engine
app.set('view engine', 'ejs')
app.set('views', './Views')


let count = 99


// Root route to start the game
app.get('/' ,(req,res)=>{
   // res.send('<h1>99 Bottles of beer on the wall</h1>')
  
     res.render('takeOne',{
        pageTitle: 'Take One Down', 
        pageHeader: '99 Bottles of beer on the wall',
        index : 99
   })
})
 

//Logic for takeone down Game
app.get('/:id',(req,res) =>{
   
  count = req.params.id
  if(count >0){
    res.render('stepdown',{
        pageTitle: 'Take One Down', 
        pageHeader: 'Bottles of beer on the wall',
        index : count,
        text : 'take one down, pass it around'
    })
} 

  else{
    res.render('stepdown',{
        pageTitle: 'Take One Down', 
        pageHeader: 'Bottles of beer on the wall',
        index : 99  ,
        text : 'Start Over'
    })
  

}
 
})
  
app.listen(PORT , (req,res)=>{
    console.log('Server  is Running...')
})

