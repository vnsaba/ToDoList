import { BaseModel, column } from '@adonisjs/lucid/orm'
import { TaskCategory } from './enum_categoria.ts'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare description: string

  @column()
  declare category: TaskCategory

  @column()
  declare status: string

}
