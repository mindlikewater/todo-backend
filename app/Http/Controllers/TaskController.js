'use strict'

const TodoList = use("App/Model/Task")


class TaskController {

  * create (request, response) {
    let data = request.only('title', 'todo_list_id', 'due_date', 'done')
    let task = yield Task.create(data)

    response.status(201).json(task)
  }

  * index (request, response) {
    let listId = request.param('list_id')
    let tasks = yield Task.query().where('todo_list_id', listId)

    response.json(tasks)
  }

  * update (request, response) {
    let taskId = request.param('task_id')
    let task = yield Task.findBy('id', taskId)
    let data = request.only('title', 'todo_list_id', 'due_date', 'done')

    task.fill(data)

    yield task.save()
    response.status(201).json(task)
  }

  * delete (request, response) {
    let taskId = request.param('task_id')
    let deleteTask = yield Task.findBy('id', taskId).del()

    response.status(201).json({ success: "Task successfully deleted" })
  }

}

module.exports = TaskController
