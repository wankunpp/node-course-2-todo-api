// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client ) => {
    if(err) {
        console.log(err);
       return console.log('Uable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     compeleted: false
    // }, (err, res) =>{
    //     if(err){
    //         return console.log('unable to insert todo',err);
    //     }
        
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    db.collection("Users").insertOne({
        name: 'kun wang',
        age: 27,
        location: 'Montreal'
    }, (err, res) => {
        if(err){
            return console.log('unable to insert users', err);
        }
        console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
    })

    client.close();
});