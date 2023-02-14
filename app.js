//requiring all the npm
const express=require("express");
const ejs=require("ejs");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");

const app=express();

app.use(express.static('public'));
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://admin-firdosh:test123@cluster0.crisinm.mongodb.net/?retryWrites=true&w=majority");


var auth="login | Signup";

const bookingSchema= new mongoose.Schema({
  name:String,
  email:String,
  number:String,
  date:String,
  time:String,
  no:String,
  message:String
});

const Booking=mongoose.model("Booking",bookingSchema);



const reviewSchema=new mongoose.Schema({
  name:String,
  email:String,
  subject:String,
  review:String
});

const Review=mongoose.model("Review",reviewSchema);


const authSchema=new mongoose.Schema({
  email:String,
  password:String
});

const Auth= mongoose.model("Auth",authSchema);

app.get("/",function(req,res){
  res.render('home',{auth:auth});
});

app.get("/login",function(req,res){
  res.render('login',{auth:auth});
});



app.get("/designe-your-menu",function(req,res){
  if(auth=="profile")
   res.render('menu',{auth:auth}); 
   else
   res.redirect("/login"); 
    
});


app.get("/checkout",function(req,res){
  res.render('checkout');
});

app.get("/home",function(req,res){
  res.redirect("/")
})


app.get("/oder",function(req,res){
  if(auth=="profile")
   res.render("oder")
   else
   res.redirect("/login"); 
})

app.post("/",function(req,res){



   const newTable=new Booking({
    name:req.body.name,
    email:req.body.email,
    number:req.body.number,
    date:req.body.date,
    time:req.body.time,
    no:req.body.no,
    message:req.body.message
   });
 
   newTable.save();

   const newReview= new Review({
    name:req.body.rname,
    email:req.body.remail,
    subject:req.body.subject,
    review:req.body.review
   })
  
   newReview.save();

   const newUser=new Auth({
    email:req.body.aemail,
    password:req.body.apassword
   });


   function showAlert() {
    var myText = "This can be whatever text you like!";
    alert (myText);
  }


   Auth.find({email:req.body.aemail},function(err,found){
      if(found.length===0){
        newUser.save();
        auth="profile";
      }
      
      else{
        if(found[0].password!=req.body.apassword){
          console.log(req.body.apassword);
          auth="false";
        }
       
          else{
            auth="profile";
          }
          
      }
        
   })
  
   
   res.redirect("/");
});











app.listen(process.env.PORT || 5000,function(err){
    if(!err)
    console.log("server running ");
})


