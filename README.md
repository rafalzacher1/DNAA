# DNAA
 Drug And Alcohol Awareness website.
 
### Components
 The entry point of this application is *app.js*. This is the project structure:
 * **design**: this folder contains the designs for the website's interfaces and components.
 * **public**: this is where all of the static web files go, including HTML, CSS, front-end JS, images and
 fonts. 'Static' means that these files don't contain any dynamic server-side information.
 * **routes**: this is where JS files are kept that are responsible for calling certain functions based on the
 route a user requests. Routes are the the different paths within our web app that follow the root domain,
 like '/' or '/contact'.
 * **controllers**: this is where JS files are kept that contain the functions we want to run depending on
 the route. Most of these files will be referenced by files in our routes folder.
 * **views**: this is where all of the files that are responsible for displaying dynamic content to the user
 are kept.
 * **models**: this is where all of the files that are responsible for interfacing with the database.
 * **config**: this is where all the configurations files are for the database.
 
### Tech Stack
 * Node.js for back end.
 * React for front end.
 * I've used Eclipse IDE and Bootstrap studio. The Node.js will require additional packages to be installed: *npm install*.

 ### Other Tools
 * Yeoman for generating generic scaffolding system.
 
#### Reflections
 I wanted to experiment in this project with web dev so thats the reason to use Node.js. I've learned much from this work:
 * The use of *express* to create url paths for web pages; this includes using POST and GET commands.
 * Creating a responsive UI with the use of Bootstrap 4.
 * Coordinating with fellow members of the society during designing and implementing.
 * Using EJS templating to creating dynamic content.
 * Fundamentals of creating communication with the user through email system (newsletter).