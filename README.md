# Creating a react pp using vite - POC!

For running this react app:

- clone this repo
- npm i
- npm run dev

> app will be started at server in localhost

React is a library that helps to create user interfaces (UI) for web and mobile interfaces.

> We might need other tools for things like routing, http, form validations, animations, etc...

To create a project using vite send this command in terminal:

- npm crate vite@latest
- give a project name
- select framework vue, vite vanilla, others... (we are using vite)
- npm i

> extension .tsx is used to create components with typescript with React.

We are going to create components based on functions, example Message.tsx

Bootstrap CSS library will be used for providing styles to our app.

How I implemented unit tests:

installed vitest

> npm install -D vitest

install testing/react library

> npm install @testing-library/react @types/testing-library\_\_react --save-dev

install jest-dom

> npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom

then added config for vite.config.ts file, and created test.test.tsx file.
