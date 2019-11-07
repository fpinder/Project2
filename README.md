# Project2

[eatsDB](https://safe-fortress-16085.herokuapp.com/)

**Object**

`Discover the nutritional information of 700,000+ foods!`

_The Application [eatsDB](https://safe-fortress-16085.herokuapp.com/) **food-search** is an *open-source* project which uses [Edaman API](https://developer.edamam.com/) to browse and retrieve the nutritional information and brand of any food or meal searched. The API has many fuctionalities for example: Nutrition Analysis, Food Database Lookup, Food Entity Extraction, Recipe Licensing, Recipe Search, and Meal Recommendation Engine. The API contains a [Food Database](https://developer.edamam.com/edamam-recipe-api) with over 700,000 foods, restaurant items, fast foods and package foods.
_

`Home handlebars Page` _The home page provide a different page when the individual refresh the page or access the site. Therefore, he/she will see always a new home page or entry page._

<a href="#"><img src="public\assets\images\home.jpg" alt="Home Page"></a>

`Index handlebars Page` _The index page provide access to Edaman site where the search can be completed_

<a href="#"><img src="public\assets\images\eats1.jpg" alt="index Page"></a>

`Modal` _The search page provide access to a link that load on a modal for each items seacrch with calories amounts, time require to complete the meal, ingredients, and a video with relevant information regardingthe food you searched._

<a href="#"><img src="public\assets\images\eats2.jpg" alt="Modal"></a>

`Mark Cooked` _The Mark cook item put each item cooked below he items searched_

<a href="#"><img src="public\assets\images\eats3.jpg" alt="index Page"></a>

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
|       └── css
|       └── images
|   ├── js
|       └── script.js
|   ├── styles
|   ├── script.babel
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

**SCSS** _is a preprocessor which lets you use features that aren't a part of the wider CSS standard yet, and provides better workflows for maintaining your stylesheets_

**script.babel** _Babel is a JavaScript transpiler (source-to-source compilers) that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones)_

Lincense by <a href="https://creativecommons.org/licenses/by/3.0/" rel="nofollow">CC-BY</a>
