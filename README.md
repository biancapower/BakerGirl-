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
![Project Proposal](/documentation/Project_proposal1.png)

![Project Proposal](/documentation/Project_proposal2.png)

![Project Proposal](/documentation/Project_proposal3.png)

![Project Proposal](/documentation/Project_proposal4.png)

## Proposal Pitch ##
![Pitch Slides](/documentation/BAKERGIRL_prez1.png)

![Pitch Slides](/documentation/BAKERGIRL_prez2.png)

![Pitch Slides](/documentation/BAKERGIRL_prez3.png)

![Pitch Slides](/documentation/BAKERGIRL_prez4.png)

![Pitch Slides](/documentation/BAKERGIRL_prez5.png)

![Pitch Slides](/documentation/BAKERGIRL_prez6.png)

![Pitch Slides](/documentation/BAKERGIRL_prez7.png)

## User Flow ##
![user Flow](/documentation/BakerGirlUserflow.png)

## Project Sprint ##
![Project Sprint](/documentation/sprint.png)

## ERD ##
![ERD](/documentation/Images/BakerGirlERD.png)

## Wireframes ##
![Landing Mobile](/documentation/Images/BakerGirlLandingMobile.png)

![Landing Desktop](/documentation/Images/BakerGirlLandingDesktop.png)

![Gallery Mobile](/documentation/Images/BakerGirlGalleryMobile.png)

![Gallery Desktop](/documentation/Images/BakerGirlGalleryDesktop.png)

![Contact Mobile](/documentation/Images/BakerGirlContactMobile.png)

![Contact Desktop](/documentation/Images/BakerGirlContactDesktop.png)

![Admin Mobile](/documentation/Images/BakerGirlAdminMobile.png)

![Admin Desktop](/documentation/Images/BakerGirlAdminDesktop.png)

![About Mobile](/documentation/Images/BakerGirlAboutMobile.png)

![About Desktop](/documentation/Images/BakerGirlAboutDesktop.png)


## Notes ##

When using the Instagram API platform plase take into account the below notes on how to set the scope of the application to be able to access public instagram content:

* When using instagram developer you may get an error message saying: redirectUri not recognised by Instagram.
* If its not recognised go to: : https://www.instagram.com/developer/clients/manage
* Then go to to Manage Clients > Manage > Security, and add to “Valid redirect URIs:” the addresses of the
* localhost and port of production URL, then try & copy and paste again, until it displays the user
* The app in sandbox mode can only be authorised by sandbox users, so the user has so approve, by pressing the     authorize button which is shown.
