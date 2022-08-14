# PipCamp-Capstone
HipCamp clone


# PipCamp README
Welcome to the README for PipCamp!
Live Link https://pip-camp.herokuapp.com
PipCamp is a HipCamp-spirited clone where users can add and review locations from their favorite fallout games

## Index
- Features
- Components
- Schema
- Frontend Routes
- API Routes

- Screenshots
- Install Pipcamp
- Technologies
- Planned Features
- Technical Implementation Details

## Features
### Sign Up
Users can login and create an account. Any locations or reviews they make will be stored under their information
### Navigation Bar
A navigation component is always visible anywhere on the application for quick and easy browsing to any view.
### Demo User
A convenient Demo User button is available for users who may not wish to create an account
### Locations
Users may browse all locations on the site on the main page, and click their respective cards to view details and reviews on the location
### Reviews
Users are able to leave a review for a location and leave their recommendation(yes/no). Each user can make 1 review per location


## Components

- Locations: Locations, LocationPage, LocationForm, EditLocationForm
- Reviews: Reviews(on LocationPage), ReviewForm, EditReviewForm
- User 
- Footer
- NavBar


## Database Schema
![Database Schema](https://user-images.githubusercontent.com/51832487/184188904-1b86da5e-55c2-4a5b-a595-d33099eb3156.png)


## API Routes
### All routes begin with /api/
### __/auth__
- GET / - Authenticate user
- POST /login - log user in
- POST /logout - log user out
- POST /sign_up - create new user instance and log them in

### __/locations__
- GET /new-location - Get new location form
- POST /new-location - Submit new location form
- GET /:locationId - Get details for a specific location
- DELETE /:locationId/delete - Delete a specified location
- PUT /:locationId/edit - Update a location's details

### /reviews
- GET /all - Get all reviews
- POST /new - Post a new review
- PUT /:reviewId/edit - update a review
- DELETE /:reviewId/delete - delete a review
### /users
- GET /:userId - get logged in user's details
## Redux Store Tree


## Installation
1. Clone PipCamP
2. ```cd``` into the ```/app``` folder.
3. run ```pipenv install ``` and enter your ```pipenv shell```
4. run ```flask run``` to start the backend flask server on default: `port 3000`
5. In a seperate terminal, ```cd``` into the ```/react-app``` folder
6. run ```npm install ```
7. run ```npm build``` to start the frontend react server on default port: `5000` in production mode
8. If it does not automatically open a browser window, navigate to ```localhost:5000``` to access the app.
  ## Technologies Used
  ![](https://img.shields.io/badge/-HTML-5555ff?style=flat-square&logo=html5&logoColor=FFFFFF) ![](https://img.shields.io/badge/-CSS-5555ff?style=flat-square&logo=css3&logoColor=FFFFFF) ![](https://img.shields.io/badge/-JS-5555ff?style=flat-square&logo=javascript&logoColor=FFFFFF)  ![](https://img.shields.io/badge/-Python-5555ff?style=flat-square&logo=python&logoColor=ffffff)  ![](https://img.shields.io/badge/-React-5555ff?style=flat-square&logo=react&logoColor=FFFFFF) ![](https://img.shields.io/badge/-VScode-5555ff?style=flat-square&logo=visual-studio-code&logoColor=FFFFFF)
![](https://img.shields.io/badge/-Flask-5555ff?style=flat-square&logo=flask&logoColor=ffffff)  ![](https://img.shields.io/badge/-Redux-5555ff?style=flat-square&logo=redux&logoColor=ffffff)  ![](https://img.shields.io/badge/-Postgres-5555ff?style=flat-square&logo=sequelize&logoColor=ffffff)  ![](https://img.shields.io/badge/-GitHub-5555ff?style=flat-square&logo=github&logoColor=ffffff)
## Technical Details
PipCamp was built using Flask as its backend, and React / Redux for its front end.

Great care was put into making a visual clone that applies a different 'brand' with the original format. I used colors common to Fallout 4 to hopefully achieve an appropriate theme with the 'bones' of HipCamp.

## Planned Features
 - [ ] Users can upload their images to AWS instead of just providing a URL
 - [ ] Fallout Locations are all existing US cities: using google maps api, users can pin the real-world city where the in-game loction can be found
 - [ ] Users can make faux reservations(maybe a 'I visited this in-game' toggle) that allows for review only if they have visited.
 - [ ] Location recommendation rate will appear as a statistic at the top of location details
## Screenshots
### Locations
![Locations/Splash](https://user-images.githubusercontent.com/51832487/184191666-eef5ad5d-53fb-476d-a1d9-565f433633f5.png)


### Location Page
![Location-top](https://user-images.githubusercontent.com/51832487/184191846-9dd340cf-f21f-44fc-bde5-fcfcd7e61c59.png)

![Reviews](https://user-images.githubusercontent.com/51832487/184192039-3359a827-4822-416c-b827-81b94f6e6c75.png)

