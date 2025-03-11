/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

const TasksController = () => import('#controllers/tasks_controller')

router.group(() => {
  router.get("/tasks", [TasksController, 'find'])
  router.get("/tasks/:id", [TasksController, 'find'])
  router.post("/tasks", [TasksController, 'create'])
  router.put("/tasks/:id", [TasksController, 'update'])
  router.delete("/tasks/:id", [TasksController, 'delete'])
}).prefix('/api')