# Todo List App Demo

## Design
# ![APP](https://raw.githubusercontent.com/kevincantstop/todo-demo/main/screenshot-arch.jpg)

## Updates
1. Make restful server scalable so that data transfer / synchronization can be more efficient.
2. Added pm2 as the load balancer.
3. Used `Snowflake` like algorithms to make task id unique in all clusters, but it's simplified.

## Screenshots
# ![APP](https://raw.githubusercontent.com/kevincantstop/todo-demo/main/screenshot-app.jpg)
# ![APP](https://raw.githubusercontent.com/kevincantstop/todo-demo/main/screenshot-pm2.jpg)

## Requests

### How to make the synchronization process between devices efficient? / How to optimize network bandwidth usage?
Solutions:
1. Make the restful server scalable so that read/writes requests can be redirected to different servers.
2. Use Http/v2 over Http/v1.
3. Compress server requests/responses.
4. Only send necessary data to servers instead of complete / large objects.
...(So many ways)

### How to ensure data integrity?
Solutions:
1. Use correct distribution solutions.
2. Make application servers stateless as much as possible.
3. If the loads to server is huge consider using `Queues` (ActiveMQ, SQS etc).
4. Make data modification atomic (Thread safe, redis, memcache etc).
5. Data sharding.
...Etc

## Setup the project
1. Clone the repo.
2. `yarn` or `npm i` to install dependencies.
3. `Optional` If you want to monitor clusters status, better to run `npm i pm2 -g`

## Available Scripts
In the project directory, you can run:

### `yarn serve`
Start the restful server clusters and load balancer, the default value of clusters amount is 4.
The load balancer server port can be changed in `src/config.js`

The restful servers can be scaled very easily, just need to change the `REST_INSTANCES=4`.
As the load balancer is stateless, so the load balancer server can also be scaled easily.
Due to the configuration for now, the load balancer is scaled based on the number of the CPUs.

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the data store test runner with jest.