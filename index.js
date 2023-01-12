const express = require('express');
const routerApi = require('./routes')
const cors = require('cors')

const {logErrors, errorHandler, boomErrorHandler} = require('./middleware/error.handler')

const app = express();
const port = 3000;

app.use(express.json())

//whitelist de destinos CORS
const whitelist = ['http://localhost:8080']
const options = {
  origin: (origin, callback)=>{
    if (whitelist.includes(origin))
      callback(null, true)
    else
      callback(new Error('Not allowed'))
  }
}

app.use(cors(options));

app.get('/',(req, res)=>{
  res.send('Hola mi server en express')
})

app.get('/nueva-ruta',(req, res)=>{
  res.send('Hola soy una nueva ruta')
})

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, ()=>{
  console.log(`Mi port es ${port}`);
})
