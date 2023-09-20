const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('mvc', 'aluno_medio', '@lunoSenai23.', {
    host: '127.0.0.1',
    port: 3306,            //isso é uma promisse viu galera
    dialect: 'mysql'
})
// usamos o try()catch para achar erro
try{
sequelize.authenticate()
console.log('Conectado ao MySql')
}catch(err){
    console.log(err)
}

module.exports = sequelize