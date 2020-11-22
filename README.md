# Todo List App Demo

## Screenshots


## Setup the project
1. Clone the repo.
2. `yarn` or `npm i` to install dependencies.
3. `Optional` If you want to monitor clusters status, better to run `npm i pm2 -g`

## Available Scripts

In the project directory, you can run:

### `yarn serve`
Start the restful server clusters and load balancer, the default value of clusters amount is 4. \
The server port can be changed in src/config.js \

The restful servers can be scaled very easily, just need to change the `REST_INSTANCES=4`. \
As the load balancer is stateless, so the load balancer server can also be scaled easily. \

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the data store test runner with jest.