const express=require('express');
const cors=require('cors');
const mysql=require('mysql');

const app=express();
const sel="select * from users";
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'customers'
})
connection.connect(err=>{
    if(err) {return err;}
 
});
app.use(cors());
app.get('/users',(req,res)=>{
    connection.query(sel,(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data:results
            })
        }
    })
})
app.get('/',(req,res)=>{
    res.send("go to /users ");
})
app.get('/user/:id',(req,res)=>{
    
    const id=req.params.id;
    
    connection.query('select * from users where id='+id,(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data:results
            })
        }
    })
})
app.get('/user/delete/:id',(req,res)=>{
    
    const id=req.params.id;
    
    connection.query('delete from users where id='+id,(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data:results
            })
        }
    })
})
app.get('/user/orders/:id',(req,res)=>{
    
    const id=req.params.id;
    
    connection.query('select * from items left join orders on items.id=orders.itemID and orders.userID='+id+' where orders.userID is not null',(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data:results
            })
        }
    })
})

app.get('/users/add',(req,res)=>{
    const {first_name,last_name,phone,email,address,gender,password}=req.query;
    const insert=`insert into users(first_name,last_name,phone,email,address,gender,password) values('${first_name}','${last_name}','${phone}','${email}','${address}','${gender}','${password}')`
    connection.query(insert,(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.send("new user added successfully");
        }
    })
})
app.get('/shopping',(req,res)=>{
    connection.query("select * from items",(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data:results
            })
        }
    })
})
app.get('/shopping/:id?',(req,res)=>{
    connection.query("select * from items",(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data:results
            })
        }
    })
})

app.get('/shopping/:userID/:itemID',(req,res)=>{
    const userID=req.params.userID;
    const itemID=req.params.itemID;
   // res.send("userID="+userID+" itemID="+itemID);
    
    connection.query(`insert into orders(userID,itemID) values(${userID},${itemID})`,(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data:results
            })
        }
    })
})
app.get('/user/orders/:userID/:itemID',(req,res)=>{
    const userID=req.params.userID;
    const itemID=req.params.itemID;
   // res.send("userID="+userID+" itemID="+itemID);
    
    connection.query(`delete from orders where userID=${userID} and itemID=${itemID}`,(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data:results
            })
        }
    })
})
app.get('/user/update/:id',(req,res)=>{
    
    const id=req.params.id;
    
    const {first_name,last_name,phone,email,address}=req.query;
    const insert=`update users set first_name='${first_name}',last_name='${last_name}',phone='${phone}',email='${email}',address='${address}' where id='${id}'`
    connection.query(insert,(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.send("updated");
        }
    })
})

app.listen(4000,()=>{
    console.log('server running');

})