import express from 'express'
import morgan from 'morgan'
import fileUpload from 'express-fileupload';
import { connectMongoDb } from './database/connection.js';
import { router } from './routers/routes.js'

const app = express()
const port = process.env.PORT || 5000;

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(
  fileUpload({
    createParentPath: true,
    limits: { fileSize: 20 * 1024 * 1024 },
    abortOnLimit: true,
    responseOnLimit: "Archivo muy grande",
  })
);
connectMongoDb();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.use('/',router)

app.listen(port, () => console.log('Todo bien en el puerto: '+port));
