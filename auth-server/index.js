const mongoose=require('mongoose');
const User=require('./user');
mongoose.connect('mongodb://lcantillo:lily@ds133251.mlab.com:33251/lions1',(err)=>{
  const me=new User({
      firstName:'lulu',
      lastName:'lolo',
      userName:'lilyCantillo',
      email:'lily@yahoo.es',
      password:"lilylolo"
  });
 me.save((err)=>{
     if(err){
         throw err;
     }
     User.find((err,users)=>{
         if(err){
             throw err;
         }
         console.log(users);
         process.exit();
     });
 });
});
