import type { HttpContext } from '@adonisjs/core/http'
import Task from '../models/Task.ts'  // TODO: Fix this import
import { createTaskValidator, updateTaskValidator } from '../validators/task.ts'

export default class TasksController {

  public async find({ request, params }: HttpContext) {
    if (params.id) {
      const task = await Task.findOrFail(params.id)
      return task
    } else {
      const data = request.all()
      if ("page" in data && "per_page" in data) {
        const page = request.input('page', 1)
        const perPage = request.input("per_page", 20)
        return await Task.query().paginate(page, perPage)
      } else {
        return await Task.all()
      }
    }
  }

  public async create({ request }: HttpContext) {
    const data = request.all()
    const payload = await createTaskValidator.validate(data)
    const task = await Task.create(payload)
    return task
  }

  public async update({ params, request }: HttpContext) {
    const task = await Task.findOrFail(params.id)
    const data = request.all()
    const payload = await updateTaskValidator.validate(data)
    task.merge(payload as Partial<typeof task>)
    await task.save()
    return task
  }

  public async delete({ params, response }: HttpContext) {
    const task = await Task.findOrFail(params.id)
    await task.delete()
    response.status(204)
  }
}