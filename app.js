import express from 'express'
import morgan from 'morgan'
import { connectMongoDb } from './database/connection.js';
import { router } from './routers/routes.js'

const app = express()
const port = process.env.PORT || 5000;

app.use(morgan('dev'))
//app.use(express.urlencoded({extended: true}));
app.use(express.json());
connectMongoDb()

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.use('/',router)

app.listen(port, () => console.log('Todo bien en el puerto: '+port));
