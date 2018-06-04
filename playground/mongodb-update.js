const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('unable to connect to mongoDB server');
    }
    console.log('Connected to MongoDB');

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b1551720b002830112925f9"
    // )}, {
    //     $set: {
    //         compelete: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b15485fcc00df87a49ccd6f")
    }, {
        $inc:{
            age:1
        },
        $set: {
            name:'kun wang'
        }
    }).then((result) => {
        console.log(result);
    })

})