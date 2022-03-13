const express = require('express');
const bodyParser = require('body-parser');
var util = require('util');
const router = require('./Routes/userRouters')

const app = express();
app.use(bodyParser.json())
app.use('/hello', router)


const database = require('./database');
const env = require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('./model/registration');
const { required } = require('nodemon/lib/config');
const res = require('express/lib/response');
const PORT = 2000;

console.log(process.env.SECRET_KEY);

var token = jwt.sign({ email: 'bhartinx@gmail.com' }, process.env.SECRET_KEY, { expiresIn: '1h'});
console.log('token are here',token, '******************S')



app.get('/', async (req, res)=>  {
//     var decoded = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJoYXJ0aW54QGdtYWlsLmNvbSIsImlhdCI6MTY0NjIwOTQ4MCwiZXhwIjoxNjQ2MjEzMDgwfQ.x2I5JZeoRuNwp3AdOmcTvUql6tP_sk44r-KKBscKoxM', process.env.SECRET_KEY);
console.log("hello word");
let a = await User.find();
console.log(a)
    res.send(a)
})

app.post('/insert',  async(req, res)=>{ 
    console.log("insered data")
    console.log("requested data", req.body)
    let create = await User.create(req.body);
    
    console.log("created data")
    
    res.json(create)
})
app.patch('/', async(req,res)=>{
    console.log("updated perpus");
    console.log("updated", req.body);
    let update = await User.update(req.body);
    console.log("updated data")
    res.send(update)
})



console.log("Hi ",util.isNullOrUndefined(Object))




app.delete('/', async(req,res) =>{
    console.log("deletedata")
    console.log("delete data", req.body)
    let delet = await User.deleteOne(req.body);
    console.log("deleteed data from data base")
    res.send(delet);
    
})
app.listen(PORT, () =>{
    console.log("server is running")
});      


console.log("Hi Tarkeshwar")