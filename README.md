SOCIAL APP DEMO

1) Open a command prompt in the project's root directory

2) Type: `npm install`
    This installs the dependencies as defined in the package.json file.
    
3) Type: `npm start`
    This launches the TypeScript compiler (tsc) to compile the application and wait for changes. 
    It also starts the lite-server and launches the browser to run the application.
  
Npm start should open a browser window with login page of the app.

This app uses the Facebook Javascript SDK to login and logout the user.
On the '/home' page you can share the page on facebook. 
Instead, the app shares the company's home page (eponymous.co).

The primary technical challenges with this app were TypesScript and the new Angular2 way of doing things.
Along with working with the convoluted Facebook SDK.

I have used Material Design CSS for the UI.
