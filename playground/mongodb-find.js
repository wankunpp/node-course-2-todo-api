// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client ) => {
    if(err) {
        console.log(err);
       return console.log('Uable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');
  
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b1551720b002830112925f9')
    // }).toArray().then( (docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined,2));
    // }, (err) => {
    //     console.log('unable to fetch todos', err)
    // })

    // db.collection('Todos').find().count().then( (count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('unable to fetch todos', err)
    // })

    db.collection('Users').find({name:'kun wang'}).count().then( (count) =>{
        // console.log(JSON.stringify(doc, undefined, 2))
        console.log(count);
    }, (err) =>{
        console.log('unable to fetch todos', err)
    })

    // client.close();
});