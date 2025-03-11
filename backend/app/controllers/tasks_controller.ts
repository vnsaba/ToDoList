import type { HttpContext } from '@adonisjs/core/http'

import Task from '../models/Task.ts'  // TODO: Fix this import

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
    const body = request.only(['description', 'category', 'status'])
    const task = await Task.create(body)
    return task
  }

  public async update({ params, request }: HttpContext) {
    const task = await Task.findOrFail(params.id)
    const body = request.only(['description', 'category', 'status'])
    task.merge(body)
    await task.save()
    return task
  }

  public async delete({ params, response }: HttpContext) {
    const task = await Task.findOrFail(params.id)
    await task.delete()
    response.status(204)
  }
}