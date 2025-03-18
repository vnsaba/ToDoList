import { test } from '@japa/runner'
import Task from '#models/task'

test.group('TasksController Basic CRUD', () => {

  test('crear una nueva tarea', async ({ client, assert }) => {
    const response = await client.post('/api/tasks').json({
        description: 'sacar una cita de ortodoncia',
        category: 'personal',
        status: 'pending'
    })

    response.assertStatus(200)
    const body = response.body()
    assert.equal(body.description, 'sacar una cita de ortodoncia')
    assert.equal(body.status, 'pending')
  })

  test('actualizar una tarea', async ({ client, assert }) => {
    const response = await client.post('/api/tasks').json({
        description: 'sacar una cita de ortodoncia',
        category: 'personal',
        status: 'pending'
    })

    const task = response.body();

    const updateTask = await client.put(`/api/tasks/${task.id}`).json({
      description: 'sacar una cita de ortodoncia para el 10 de marzo',
      category: 'other',
    })

    updateTask.assertStatus(200)
    assert.equal(updateTask.body().description, 'sacar una cita de ortodoncia para el 10 de marzo')
    assert.equal(updateTask.body().category, 'other')
  })

  test('eliminar una tarea', async ({ client, assert }) => {
    const response = await client.post('/api/tasks').json({
        description: 'sacar una cita de ortodoncia',
        category: 'personal',
        status: 'pending'
    })

    const task = response.body();
    const deleteTask = await client.delete(`/api/tasks/${task.id}`)
    deleteTask.assertStatus(204)

    const deleted = await Task.find(task.id)
    assert.isNull(deleted)
  })

})
