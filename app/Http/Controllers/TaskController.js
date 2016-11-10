'use strict'

class TaskController {

  * create (request, response) {
    let data = request.only('title', 'due_date', 'done', 'todo_list_id')
    let task = yield Task.create(data)

    response.status(201).json(task)
  }

  * index (request, response) {
    let listId = request.param('list_id')
    let tasks = yield.Task.query().where('todo_list_id', listId)

    response.json(tasks)
  }

  * update (request, response) {
    let taskId = request.param('task_id')
    let task = yield Task.findBy('id', taskId)
    let data = request.only('title', 'list_id', 'due_date', 'done')

    task.fill(data)

    yield task.save()
    response.json(task)
  }

  * delete (request, response) {
    let taskId = request.param('task_id')
    let deleteTask = yield Task.findBy('id', taskId)
    yield deleteTask.del()
  }

}

module.exports = TaskController
