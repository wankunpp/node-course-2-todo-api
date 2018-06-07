const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} =require('./../server/models/user');

const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

// Todo.findByIdAndRemove('5b19510f6c3112324bbffcbe').then((todo) =>{
//     console.log(todo);
// })

Todo.findOneAndRemove({_id: new ObjectID("5b1951736c3112324bbffd0d")}).then((todo) =>{
    console.log(todo);
})