const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

//cros requesr
app.use(cors());

//Connect to DB --

mongoose.connect('mongodb://burlee:q1w2e3@ds227171.mlab.com:27171/graph')
mongoose.connection.once('open', ()=>{
    console.log("Połączono z mongoDB")
})

//----------------


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log("Działa")
})