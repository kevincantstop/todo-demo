const { REST_INSTANCES, REST_PORT } = process.env

module.exports = {
  apps : [
    {
      name: 'Restful Server',
      script: './server/restful.js',
      instances: REST_INSTANCES,
      exec_mode: 'cluster',
      watch: true,
      increment_var : 'PORT',
      env: {
        PORT: REST_PORT,
      }
    }
  ]
}