const _ = require('lodash');
const express = require('express');
const bodayParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodayParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) =>{
        res.send(doc);
    }, (e) =>{
        res.status(400).send(e);
    })
})

app.get('/todos',(req, res) =>{
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos/:id', (req,res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) return res.status(404).send();

    Todo.findById(id).then((todo) =>{
        if(!todo) return res.status(404).send();
        res.send({todo});
    }).catch((e) =>{
        res.status(400).send(e);
    })
    
})

app.delete('/todos/:id', (req,res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) return res.status(404).send();

    Todo.findByIdAndRemove(id).then((todo) =>{
        if(!todo) return res.status(404).send();
        res.send({todo});
    }).catch((e) =>{
        res.status(400).send(e);
    }) 
})

app.patch('/todos/:id',(req,res) => {
    const id = req.params.id;
    const body = _.pick(req.body,['text','completed']);

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }else{
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body},{newt:true}).then((todo) =>{
        if(!todo) return res.status(404).send();
        res.send({todo});
    }).catch((e) => {
        res.status(400).send(e);
    })
});

app.listen(port,()=> {
    console.log(`Started up at port ${port}`)
});

module.exports = {app};
