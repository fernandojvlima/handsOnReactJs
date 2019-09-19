# handsOnReactJs
Hands On ReactJS from DevPleno Course

HandsOn - Project 
A CRUD app linking Frontend and Backend, all write in React.
In this application, you add your favourite
Series or Movies sorted by gender or category.
You have the basic functions (CRUD), with bootstrap style elements and a node server ready to use.

Let’s describe the recipe:

Check if you already have :
NPM, Yarn, Node.

Using a shortcut, you can create a react app using:
->create-react-app name-of-project
This will make easier the project.

It will create the dependencies (React, React-Dom , React Scripts)
And the Scripts (Start, Build, Test, Eject)

Open your folder on VSCode 

->yarn start

Using this command, a server will be opened (port 3000).

Remove all the css styles from the framework,  logo, test, in this project we don’t use them.

Shut down your server and add bootstrap and Reactstrap

->yarn add bootstrap 

Import bootstrap to index.js (import ‘bootstrap/dist/css/bootstrap.css’

Install Reactstrap
->yarn add reactstrap

Obs: in case of bug, remove node_modules and reinstall through yarn.

To work with Routes, react-router-dom
->yarn add react-router-dom

Obs: important to use routes to redirect and to use the concept of single page application, avoiding refresh.

To consume data, we need axios.
->yarn add axios

In this project, the focus is React, so we have a server ready to use, so we can add it straight from the GitHub.
->yarn add https://github.com/tuliofaria/minhas-series-server

To turn on server:
->node node_modules/minhas-series-server/index.js

It will start a server on 3002 port.
 
To avoid a problem using 2 servers, we will proxy, maintaining just one port.
Just for development

At package.json we write:
“proxy”: “http://localhost:3002/“
