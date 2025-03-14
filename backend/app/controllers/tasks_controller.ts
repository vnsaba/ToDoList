import type { HttpContext } from '@adonisjs/core/http'
import Task from '../models/Task.ts'  
import { createTaskValidator, updateTaskValidator } from '../validators/task.ts'

export default class TasksController {

  /**
   * Find a task by id or return all tasks
   * @param HttpContext { request, params }
   * @returns Task | Task[]
   */
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

  /**
   *  Validate the request and return the created task
   * @param HttpContext { request } have the request object
   * @returns  Task created
   */
  public async create({ request }: HttpContext) {
    const data = request.all()
    const payload = await createTaskValidator.validate(data)
    const task = await Task.create(payload)
    return task
  }

  /**
   * Update a task by id
   * @param HttpContext { params, request } have the params and request object
   * @returns Task updated
   */
  public async update({ params, request }: HttpContext) {
    const task = await Task.findOrFail(params.id)
    const data = request.all()
    const payload = await updateTaskValidator.validate(data)
    task.merge(payload as Partial<typeof task>)
    await task.save()
    return task
  }

  /**
   *  Delete only a task by id
   * @param param HttpContext { params, response } have the params and response object 
   */
  public async delete({ params, response }: HttpContext) {
    const task = await Task.findOrFail(params.id)
    await task.delete()
    response.status(204)
  }

   /**
   * Delete all tasks with status 'completed'
   * @param HttpContext { response } have the response object
   * @returns void
   */
   public async deleteCompleted({ response }: HttpContext) {
    await Task.query().where('status', 'completed').delete()
    response.status(204)
  }

  /**
   * Delete all tasks
   * @param HttpContext { response } have the response object
   * @returns void
   */
  public async deleteAll({ response }: HttpContext) {
    await Task.query().delete()
    response.status(204)
  }
}