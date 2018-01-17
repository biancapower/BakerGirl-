# Baker Girl #
A simple online platform for ordering customised cakes for baker girl company based in Sydney. This platform is to help streamline the running of baker girl as it helps manage orders.

## Setup ##
Once cloned from github a few steps need to be taken to get the application up and running.
* Open terminal and run ``` mongod ```
* Then in a second tab in terminal run ``` mongo ```
* For this app we are using Dontenv Library, and more information can be checked out here: https://www.npmjs.com/package/dotenv
  * Under the api/ directory create a .env file with the following contents,
  ``` MONGO_URI=mongodb://localhost/cakes ```
    * Then in a new terminal tab run ```yarn install```
    Then
    ``` yarn dev ```
    to start the backend server.
  * Under the react-web/ directory create a .env.local file with the following contents,
  ``` REACT_APP_API_URL=http://localhost:7000 ```
    * Then in a new terminal tab run
    ```yarn install```
    Then
    ``` yarn start ```
    to start the front end server. This may automatically start the web app, if not the app can be accessed through http://localhost:3000/

## Prerequisites and dependencies ##
  * node -v 9.2.0
  * dotenv 4.0.0
  * express 4.16.2
  * jsonwebtoken 8.1.0
  * mongoose 4.13.6
  * passport 0.4.0
  * passport-jwt 3.0.1
  * passport-local 1.0.0
  * passport-local-mongoose 4.4.0

## Project Proposal ##
![Project Proposal](/documentation/Project_proposal.png)

## Proposal Pitch ##
![Pitch Slides](/documentation/BAKERGIRL_prez.png)

## User Flow ##
![user Flow](/documentation/BakerGirlUserflow.png)

## Project Sprint ##
![Project Sprint](/documentation/sprint.png)

## ERD ##
![ERD](/documentation/Images/BakerGirlERD.png)

## Wireframes ##
![Landing Mobile](/documentation/Images/BakerGirl Landing Mobile.png)

![Landing Desktop](/documentation/Images/BakerGirl Landing Desktop.png)

![Gallery Mobile](/documentation/Images/BakerGirl Gallery Mobile.png)

![Gallery Desktop](/documentation/Images/BakerGirl Gallery Desktop.png)

![Contact Mobile](/documentation/Images/BakerGirl Contact Mobile.png)

![Contact Desktop](/documentation/Images/BakerGirl Contact Desktop.png)

![Admin Mobile](/documentation/Images/BakerGirl Admin Mobile.png)

![Admin Desktop](/documentation/Images/BakerGirl Admin Desktop.png)

![About Mobile](/documentation/Images/BakerGirl About Mobile.png)

![About Desktop](/documentation/Images/BakerGirl About Desktop.png)
