
const exp=require("express");
const app=exp();

app.listen(2824,()=>console.log("server is listening on port 2824"))

var user;

const mclient=require('mongodb').MongoClient;

mclient
.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2")
.then((dbRef)=>{
const dbObj=dbRef.db('sampledb');
user=dbObj.collection('userscollection');
const productsCollectionObj=dbObj.collection("productscollection");
//console.log(db.getCollectionInfos())
//app.set('usersCollectionObj',usersCollectionObj)
//app.set('productscollectionObj',productsCollectionObj)




console.log("db connection success")

})
.catch(err=>console.log("database connect error:",err));



const userApp=require("./api/userapi")
const productApp=require("./api/productapi")

app.use('/user-api',userApp)

app.use('/product-api',productApp)
//let user=[];

//const middleware1=(request,response,next)=>{
    //next()
   // console.log("middleware-1 executed")
    //next()
//}

//app.use(middleware1)

app.get('/get-user',async (request,response)=>{

    const d= await user.find().toArray()

  response.send({message:"all users",payload:d})
})



app.get('/get-user/:id',(request,response)=>{
    let userId=request.params.id;
  let user=user.find(userObj=>userObj.id==userId);
  console.log('user is',user)
  response.send({message:"one user",payload:user})  
})

app.use(exp.json())

app.post("/create-user",(request,response)=>{
    response.send("user created")
   let newUser=request.body; 
   user.push(newUser);
   response.send({message:"new user created"})
})


app.put("/update-user",(request,response)=>{
    response.send("user updated")
})

app.delete("/delete-user",(request,response)=>{
    response.send("user deleted")

})


//const errhandlingmiddleware=(error,request,response,next)=>{
   // response({message:error})
//}

//app.use(errhandlingware)


app.get("/get-products",(request,response)=>{
   response.send({message:"all products"})
})

app.post('/create-product',(request,response)=>{
    response.send({message:"new product created"})
})


app.delete("/delete-product",(request,response)=>{
    response.send({message:"product deleted"})
})


const invalidPathMiddleware=(request,response,next)=>{

    response.send({message:"invalid path"})
}

app.use("*",invalidPathMiddleware)


const errhandlingMiddleware=(error,request,response,next)=>{
    response.send({message:error.message});
};

app.use(errhandlingMiddleware);