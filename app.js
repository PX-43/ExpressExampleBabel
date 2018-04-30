import express from 'express';
import bodyParser from 'body-parser';
import index from './routes/index';
import product from './routes/product';
import mongoose from 'mongoose';

let app = express();

const mongoDB = 'mongodb://127.0.0.1:27017/my_database';
mongoose.connect(mongoDB, {
  poolSize: 10
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api/product', product);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
