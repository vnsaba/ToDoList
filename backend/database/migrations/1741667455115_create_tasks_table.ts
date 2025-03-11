import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tasks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('description').notNullable()
      table.enu('category', ['work', 'personal', 'study', 'other']).notNullable()
      table.string('status').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}