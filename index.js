const express = require('express');
const routerApi = require('./routes')
const cors = require('cors')

const {logErrors, errorHandler, boomErrorHandler, ormErrorHandler} = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

//whitelist de destinos CORS
const whitelist = ['http://localhost:8080']
const options = {
  origin: (origin, callback)=>{
    if (whitelist.includes(origin) || !origin)
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
app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)


app.listen(port, ()=>{
  console.log(`Mi port es ${port}`);
})
