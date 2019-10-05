# Project2

[eatsDB](https://eats-db.herokuapp.com/)

**Object**

`Discover the nutritional information of 700,000+ foods!`

_The Application [eatsDB](https://eats-db.herokuapp.com/) **food-search** is a *open-source* project which uses [Edaman API](https://developer.edamam.com/) to browse and retrieve the nutritional information and brand of any food or meal searched. The API contains a [Food Database](https://developer.edamam.com/edamam-recipe-api) with over 700,000 foods, restaurant items, fast foods and package foods.
_

`index handlebars Page`

<a href="#"><img src="#" alt="Home Page"></a>

**The application eatsDB is organized with the following structure:**

```
eatsDB
.
├── config
│   ├── config.json
│ 
├── models
│   ├── food.js
│   └── index.js
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
|       └──images
|   ├── js
|       └──app.js
|       └──script.js
|   ├── styles
|
├── routes
|   └── apiRoutes.js
|   └── htmlRoutes.js
├──views
|   └── index.handlebars
|   └── 404.handlebars
|   ├── layouts
|       └── main.handlebars
├── server.js

```

**_Technology used_**

_This app uses sequelize, Node.js, Mysql and 6 NPM packages: Express, Express-handlebars, express-validato, Body-parser, dotenv and Nodemon_

| Files Used         | Role in the App                                                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| node_modules       | node modules includes the NPM packages                                                                                                                            |
| express            | used to handle routing                                                                                                                                            |
| .gitignore         | This will tell git not to track these files, and thus they won't be committed to Github                                                                           |
| package.json       | JSON Source file the has all the dependencies.                                                                                                                    |
| bodyParser         | Used to sets up the Express app to handle data parsing.                                                                                                           |
| Dotenv             | Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.                                                            |
| Express            | A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.                                  |
| Express-handlebars | Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.                                                      |
| Nodemon            | nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. |
| sequelize          | Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.                                                           |

**Server.js:** _This file is the initial starting point for the Node/Express server_

**config.json** _This file initiates The Connection to the database_

**View Setup:** _`index.handlebars` file used by Handlebars and `index.handlebars` to have the template that Handlebars can render onto_

Lincense by <a href="https://creativecommons.org/licenses/by/3.0/" rel="nofollow">CC-BY</a>
