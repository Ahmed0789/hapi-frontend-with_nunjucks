import { config } from '~/src/config'
import { createServer } from '~/src/server'
import { createLogger } from '~/src/server/common/helpers/logging/logger'

const logger = createLogger()

process.on('unhandledRejection', (error) => {
  logger.info('Unhandled rejection')
  logger.error(error)
  process.exit(1)
})

async function startServer() {
  const server = await createServer()
  await server.start()

  server.logger.info('Server started successfully')
  server.logger.info(
    `Access your frontend on http://localhost:${config.get('port')}}`
  )
}

startServer().catch((error) => {
  logger.info('Server failed to start :(')
  logger.error(error)
})