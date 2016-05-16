SOCIAL APP DEMO

To run the app, open terminal/cmd:
  npm install
  npm start
  
Npm start should open a browser window with login page of the app.

This app uses the Facebook Javascript SDK to login and logout the user.
On the '/home' page you can share the page on facebook. You could if 'http://localost:3000' could be shared.
Instead, the app shares the company's home page (eponymous.co).

The primary technical challenges with this app were TypesScrpt and the new Angular2 way of doing things.
Along with working with the convoluted Facebook SDK.

I have used Material Design CSS for the UI.  

============
UX Concerns:
============
As several dependencies like the facebook API integration are hastily ported over
and major angular functionality is still in beta, only basic routing by login and logout buttons is implemented.

Refreshing '/home' page breaks the functionality as the 'FB' object gets detached from window.

Needing to pollute the namespace itself is a necessary compromise to make this work, 
due to the novelty of TS and Angular2, and lack of official SDK support at this time.

For proper experience: login and logout, and then login again. 
Should see the profile image and user name.

Alerts are used as toastr has not been updated for angular2, and available OSS repos are hacky.
