const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('unable to connect to mongoDB server');
    }
    console.log('Connected to MongoDB');

    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then( (result)=> {
    //     console.log(result);
    // })
    
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({text:'eat lunch'}).then((result) =>{
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name:'kun wang'}).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5b154f7342333c87bf246d3b")}).then((result) => {
        console.log(result);
    })

});