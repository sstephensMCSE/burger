
# Project Title : Node Express Handlebars

This assignment will demonstrate a working, deployed application that uses persistent data. The project will follow the MVC design pattern with Node and MySQL to manage the data interface. I will use Handlebars to generate the HTML.

This will be hosted with Heroku, but this time will need some additional configuration for the hosting the database.

This is a homemade ORM (Object Relational Mapping) which is another way of saying this will create a user friendly interface for the burgers database.

# Code Requirements

```
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
Whenever a user submits a burger's name, your app will display the burger on the left side of the page 
   -- waiting to be devoured. 
Each burger in the waiting area also has a Devour it! button. 
When the user clicks it, the burger will move to the right side of the page. 
Your app will store every burger in a database, whether devoured or not.
```


## Installation
create burger repo on github and clone to my computer.
install node.js, run npm init, run npm i.
I use npm install to install the modules.
Create the directory structure.
```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```



## Psuedo Code

* **database schema**:

  * Create the `burgers_db`.
  * Switch to or use the `burgers_db`.
  * Create a `burgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.

  

## Technology
- Node JS
- Heroku
- mysql
- express-handlebars
- burgers

## Index Screenshot

<img src="https://github.com/sstephensMCSE/burger/blob/main/public/assets/img/index.jpg" width="500" title="index">

## Example Data pushed to the Database

<img src="https://github.com/sstephensMCSE/burger/blob/main/public/assets/img/example.jpg" width="500" title="example">

## Data being sent to the SQL Database

<img src="https://github.com/sstephensMCSE/burger/blob/main/public/assets/img/database.jpg" width="500" title="database">



