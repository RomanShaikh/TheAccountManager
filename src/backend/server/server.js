var express = require('express');
var bodyParser = require('body-parser');
const _=require('lodash');
const {ObjectID} = require('mongodb');
var cors = require('cors')

var { mongoose } = require('./db/mongoose');

var { User } = require('./models/user');

const { authenticate } = require('./middleware/authenticate');

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/users',(req,res)=>{
    var body=_.pick(req.body,['email','password']);
    var user=new User(body);
    user.save().then(()=>{
        return user.generateAuthToken();
    }).then((token)=>{
        res.header('x-auth',token).send(user);
    }).catch((err)=>{
        res.status(400).send(err);
    });
});

app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
  });

app.post('/users/login',(req,res)=>{
    var body=_.pick(req.body,['email','password']);
    User.findByCredentials(body.email,body.password).then((user)=>{
        return user.generateAuthToken().then((token)=>{
            res.header('x-auth',token).send(user);
        });
    }).catch((e)=>{
        res.status(401).send();
    });
    
});

app.delete('/users/me/token',authenticate,(req,res)=>{
    req.user.removeToken(req.token).then(()=>{
        res.status(200).send();
    },()=>{
        res.status(400).send();
    });
});


app.post('/user/signup',(req,res)=>{
    var body=_.pick(req.body,['firstName','lastName','email','password']);
    var user=new User(body);
    user.save().then(()=>{
        return user.generateAuthToken();
    }).then((token)=>{
        res.header('x-auth',token).send(user);
    }).catch((err)=>{
        res.status(400).send(err);
    });
});


app.listen(3000, () => {
    console.log('Started on post 3000');
});

//$ ./mongod --dbpath ~/mongo-data