//não vai ter rotas mais,só terá as importações

const express = require('express')
const exphbs = require('express-handlebars')
const port = 2222

const conn = require('./db/conn')
//IMPORTAR ROTAS
const taskRoutes = require('./routes/taskRoute')
//TASKS
const Task = require('./models/Task')
const app = express()

//MILDDLEWARES
     //- JSON
app.use(express.urlencoded({extended:true}))
//USA O OBJ JSON
app.use(express.json())
//config HANDLEBARS
app.engine('handlebars', exphbs.engine())
//COMO VISU OS ARQ HANDLEBARS
app.set('view engine','handlebars')

//ARQUIVOS ESTATICOS
app.use(express.static('public'))

//ROTAS DA APLICAÇÃO
//localhost:2222/?/add
//localhost:2222/task/add
app.use('/tasks', taskRoutes)


conn.sync().then(()=>{
     app.listen(port)

}).catch((error)=>console.log(error))
