# Productivity App to track your tasks

> Productivity App built with the MERN stack & Redux.

## Features

- Login and register system
- User can Create, Read, Update and Delete lists
- Each list can have multiple tasks
- Each task have chicked feature
- Each task name can be updated
- Each task can be deleted
- Dark Mode feature is available.
- Tested using Cypress

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
CONNECTION_URL = your mongodb uri
JWT_SECRET =
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

## Link to live demo
https://productivity1.herokuapp.com/
