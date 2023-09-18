//não vai ter rotas mais,só terá as importações

const express = require('express')
const exphbs = require('express-handlebars')
const port = 2222

const conn = require('./db/conn')

const app = express()

//MILDDLEWARES
     //- JSON
app.use(express.urlencoded({extended:true}))
//USA O OBJ JSON
app.use(express.json())
//config HANDLEBARS
app.engine('handlebars', exphbs.engine())
//COMO VISU OS ARQ HANDLEBARS
app.set('view engine',' handlebars')

//ARQUIVOS ESTATICOS
app.use(express.static('public'))

app.listen(port)
