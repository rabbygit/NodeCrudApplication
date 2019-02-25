var express = require('express');
var router = express.Router();
var Item = require('../models/item')

/* GET home page. */
router.get('/', function(req, res, next) {
  Item.find((err,value)=>{
    if (err){
      console.log(err);
    }
    res.render('index' , {value: {value}});
     //console.log(value);
  })

});

router.get('/delete/:id' , (req,res)=>{
  Item.findByIdAndRemove(req.params.id , (err,data)=>{
    if(err){
      console.log(err);
    }
    else{
      res.redirect('/');
    }


  })
})


router.get('/update/:id' , (req,res)=>{

  console.log(req.params.id);

 Item.findById(req.params.id ).then(value=>{
    console.log(value)
    res.render('additem' , {value : value});
  })
 

 
})


module.exports = router;
