import { BaseModel, column } from '@adonisjs/lucid/orm'

export enum TaskCategory {
  WORK = 'work',
  PERSONAL = 'personal',
  STUDY = 'study',
  OTHER = 'other'
}

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