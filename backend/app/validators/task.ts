import vine from '@vinejs/vine'
import { TaskCategory } from '../models/enum_categoria.ts'
/**
 * Validates the task's creation action
 */
export const createTaskValidator = vine.compile(
    vine.object({
      description: vine.string().trim().escape().minLength(3),
      category: vine.enum(Object.values(TaskCategory)),
      status: vine.string().trim()
    })
  )

/**
 * Validates the task's update action
 */
export const updateTaskValidator = vine.compile(
    vine.object({
      description: vine.string().trim().escape().optional(),
      category: vine.enum(Object.values(TaskCategory)).optional(),
      status: vine.string().trim().optional()
    })
  )