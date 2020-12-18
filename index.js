const exp = require('express')
const app = exp();
const db = require('./db')

const path = require('path')
app.use(exp.json())

app.use(exp.urlencoded({extended:true}))
app.set('view engine','hbs')



app.get('/',(req,res)=>{
    
    //res.send('welcome to get / ');

    db.get_people()
        .then((people)=>{
            res.render('people',{people})
        })
        .catch((err)=>{
            res.send('404 error')
        })

})

app.get('/add',(req,res)=>{
    res.render('addpeople');
})

app.post('/add',(req,res)=>{
    
    db.add_people(req.body.id,req.body.name)
        .then(()=>{
            res.redirect('/');
        })
        .catch(()=>{

        })
})





app.listen(4444,()=>{
    console.log('server started !');
})
