const express = require('express');
const router = express.Router();

router.get('/auth/register', (req,res)=>{
    res.sendfile(__dirname + '/register.html'); 
});


router.get('/auth/login' , (req,res)=>{
    res.send("Welcome to login page");
})


router.get('/post/all', (req,res)=>{
    const persons = [];
    persons.push({firstName:"ahmed", lastName:"ahmed", age:46});
    persons.push({firstName:"feriel", lastName:"rabah", age:23});

    console.log(persons);
})

router.get('/post/:id' , (req,res)=> {

    const id= parseInt(req.params.id);

    
    
    const persons = [];
    persons.push({ID:1 ,firstName:"ahmed", lastName:"ahmed", age:46});
    persons.push({ID:2 ,firstName:"feriel", lastName:"rabah", age:23});

    
    const findPerson = persons.find(person => person.ID ===id)
    res.send(findPerson)


})
module.exports = router;


