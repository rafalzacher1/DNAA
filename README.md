# DNAA
 Drug And Alcohol Awareness website.
 
### Components
 The entry point of this application is *app.js*. This is the project structure for this projects, they
 might not all be used right away but will be used as the project grows:
 * design: this folder contains the designs for the website interfaces and components.
 * public: this is where all of the static web files will go, including HTML, CSS, front-end JS, images and
 fonts. 'Static' means that these files don't contain any dynamic server-side information.
 * routes: this is where JS files are kept that are responsible for calling certain functions based on the
 route a user requests. Routes are the the different paths within our web app that follow the root domain,
 like '/' or '/contact'.
 * controllers: this is where JS files are kept that contain the functions we want to run depending on
 the route. Most of these files will be referenced by files in our routes folder.
 * views: this is where all of the files that are responsible for displaying dynamic content to the user
 are kept.
 * models: this is where all of the files that are responsible for interfacing with the database