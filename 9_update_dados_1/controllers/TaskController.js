const Task = require('../models/Task')

module.exports = class TaskController{
    static createTask(request, response){
    return response.render('tasks/create')
    }
    static async createTaskSave(request, response){
const task ={
    title:request.body.title,
    description:request.body.description,
    done:false
}
//VALIDAÇÃO DE DADOS

//TRATAR DADOS
await Task.create(task)
return response.redirect('/tasks')
    }
//DELETAR DADOS
static async removeTask(request, response){
    const id = request.body.id

    await Task.destroy({where:{id:id}})
    return response.redirect('/tasks')
   
}
    //LISTAR DADOS

    static async showTasks(request, response){
        const tasks = await Task.findAll({raw:true})

 return response.render('tasks/all', {tasks})
    }

    //EDITAR DADOS
    static async editTask(request,response){
        const id = request.params.id
        const task = await Task.findOne({raw:true, where:{id:id}}) 
        console.log(task)
    return response.render('tasks/edit', {task})
    }
    //
    static async updateTask(request, response){
        const id = request.body.id
        const task ={
            title:request.body.title,
            description:request.body.description
        }
        await Task.update(task, {whre:{id:id}})
        return response.redirect('/tasks')
    }

}
