import { configure } from '@japa/runner'
import { assert } from '@japa/assert'
import { apiClient } from '@japa/api-client'
import app from '@adonisjs/core/services/app'
import { pluginAdonisJS } from '@japa/plugin-adonisjs'
import testUtils from '@adonisjs/core/services/test_utils'

configure({
  files: ['tests/**/*.spec.ts'],

  plugins: [assert(), apiClient(), pluginAdonisJS(app)],

  configureSuite(suite) {
    if (['browser', 'functional', 'e2e'].includes(suite.name)) {
      suite.setup(() => testUtils.httpServer().start())
    }
  },
})
