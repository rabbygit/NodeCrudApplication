var express = require('express');
var router = express.Router();
var Item = require('../models/item')
//var items = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('additem');
});

router.post('/' , (req , res)=>{
  var name = req.body.name ; 
  var phonenumber = req.body.phonenumber;

  //console.log(name , number);
  var item = new Item({
    name:name ,
    phonenumber: phonenumber
  })

 item.save(function(data, err){
   if(err){
     console.log(err);
 
   }
   else{
     console.log(data)
   }
 })
  // items.push(values);
  // console.log(items);

 // res.render('index' , {value: {items}});

 res.redirect('/');

})

router.post('/update/:id', (req,res)=>{
  var name = req.body.name;
   var phonenumber = req.body.phonenumber;
 
   var item = {
     name: name ,
     phonenumber: phonenumber
   }
   
  Item.findByIdAndUpdate(req.params.id , item , (err,value)=>{
    console.log(req.params.id);
    res.redirect('/')
     
  } )
 })


module.exports = router;