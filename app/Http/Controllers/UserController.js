'use strict'

const User = use("App/Model/User")

class UserController {

  * create (request, response) {
    let data = request.only('email', 'name')
    let user = yield User.create(data)

    response.json(user)
  }

  * show (request, response) {
    let userId = request.param('id')
    let user = yield User.find(userId)

    if (user) {
      response.json(user)
    } else {
      response.status(404)
      response.json({ error: "No such user" })
    }
  }

  * delete (request, response) {
    let userId = request.param('id')
    let deleteUser = yield User.query().where('id', userId).del()

    response.status(201).json({ success: "User successfully deleted" })
  }
}

module.exports = UserController
