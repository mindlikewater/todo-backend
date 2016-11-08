'use strict'

const Schema = use('Schema')

class TodoListsTableSchema extends Schema {

  up () {
    this.create('todo_lists', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.integer('user_id')
    })
  }

  down () {
    this.drop('todo_lists')
  }

}

module.exports = TodoListsTableSchema
