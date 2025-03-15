import router from '@adonisjs/core/services/router'
const TasksController = () => import('#controllers/tasks_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.group(() => {
  router.get("/tasks", [TasksController, 'find'])
  router.get("/tasks/:id", [TasksController, 'find'])
  router.post("/tasks", [TasksController, 'create'])
  router.put("/tasks/:id", [TasksController, 'update'])
  router.delete("/tasks/completed", [TasksController, 'deleteCompleted']) 
  router.delete("/tasks/:id", [TasksController, 'delete'])
  router.delete("/tasks", [TasksController, 'deleteAll']) 
}).prefix('/api')