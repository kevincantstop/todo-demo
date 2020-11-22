const { apps } = require('./ecosystem.config')
const API = require('pm2-promise').custom

const pm2 = new API()

const run = async () => {
  try {
    await pm2.connect()

    for (const app of apps) {
      await pm2.start(app)
    }

    pm2.disconnect()

  } catch (err) {
    console.error(err)
    process.exit(2)
  }
}

run()