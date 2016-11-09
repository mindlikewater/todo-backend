'use strict'

const Schema = use('Schema')

class TasksTableSchema extends Schema {

  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.timestamps()
      table.string('title')
      table.date('due_date')
      table.boolean('done')
      table.integer('todo_list_id')
      table.foreign('todo_list_id').references('todo_lists.id')
    })
  }

  down () {
    this.drop('tasks')
  }

}

module.exports = TasksTableSchema
