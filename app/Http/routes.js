'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/example', 'TodoListController.example')

Route.post('/users', 'UserController.create')
Route.get('/users/:id', 'UserController.show')
Route.delete('/users/:id', 'UserController.delete')

Route.post('/users/:id/todo-lists', 'TodoListController.create')
Route.get('/users/:id/todo-lists', 'TodoListController.index')
Route.delete('users/:id/todo-lists:list_id', 'TaskController.delete')


Route.post('/tasks', 'TaskController.create')
Route.get('/tasks/:list_id', 'TaskController.index')
Route.put('/tasks/:task_id', 'TaskController.update')
Route.delete('/tasks/:task_id', 'TaskController.delete')
