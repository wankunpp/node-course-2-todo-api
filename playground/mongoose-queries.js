const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} =require('./../server/models/user');

const {ObjectID} = require('mongodb');

var id ='5b18a3156c3112324bbfec82';

User.findById(id).then((user) =>{
    if(!user) return console.log('user not found');
    console.log(user)
}).catch((e) =>{
    console.log(e)
})

// var id = '5b17545cc581df949599f85bq';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) =>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) =>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By id',todo)
// }).catch((e) =>{
//     console.log(e);
// })