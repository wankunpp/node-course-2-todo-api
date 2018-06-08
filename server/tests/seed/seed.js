const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('../../models/todo');
const {User} = require('./../../models/user')

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [
    {
        _id: userOneId,
        email: 'andrew@example.com',
        password: 'userOnePass',
        tokens:[{
            access:'x-auth',
            token: jwt.sign({_id:userOneId, access:'auth'},'abc123').toString(),
        }]
    },
    {
        _id: userTwoId,
        email: 'luis@example.com',
        password:'userTwoPass'
    }
]

const todos = [{
    _id: new ObjectID(),
    text:'first test todo'
}, {
    _id: new ObjectID(),
    text:'second test todo',
    completed:true,
    completedAt:333 
}];

const pupulateTodos = (done) =>{
    Todo.remove({}).then(() =>{
       return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) =>{
    User.remove({}).then(() =>{
        const userOne = new User(users[0]).save();
        const userTwo = new User(users[1]).save();

        return Promise.all([userOne,userTwo])
    }).then(() =>done());
}

module.exports = {todos, pupulateTodos,users, populateUsers};