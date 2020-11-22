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
    },
    {
      //running it in fork mode but LB can also be run in cluster mode
      name: 'Load Balancer',
      script: './server/dispatch.js',
      watch: true,
      env: {
        REST_PORT,
        REST_INSTANCES,
      }
    }
  ]
}