# BakerGirl
A simple online platform for ordering customised cakes for baker girl company based in Sydney. This platform is to help streamline the running of bakergirl as it helps manage orders.

___

## Initial Setup

### To install packages:
```
yarn add [package name]
```
___

#### Dependencies required for api backend:
___

  * body-parser
  **version 1.18.2**
  * cookie-parser
  **version 1.4.3**
  * cors
  **version 2.8.4**
  * dotenv
  **version 4.0.0**
  * express
  **version 4.16.2**
  * express-session
  **version 1.15.6**
  * jsonwebtoken
  **version 8.1.0**
  * mongoose
  **version 4.13.6**
  * passport
  **version 0.4.0**
  * passport-jwt
  **version 3.0.1**
  * passport-local
  **version 1.0.0**
  * passport-local-mongoose
  **version 4.4.0**

### Development dependencies required for api backend:

___

  * chai
  **version 4.1.2**
  * chai-http
  **version 3.0.0**
  * mocha
  **version 4.0.1**
  * nodemon
  **version 1.12.4**
  * now
  **version 9.0.1**


___

### Dependencies for react front-end

* bootstrap
**version 4.0.0-beta.3**
* jwt-decode
**version 2.2.0**
* react-dom
**version 16.2.0**
* react-router-dom
**version 4.2.2**
* react-scripts
**version 1.0.17**

***Note: you will need to add the below for the backend api to work with the react front end as part of the react front-end dependencies***

```
"proxy": "http://localhost:7000",
```

### Development dependencies for react front-end

* enzyme
**version 3.2.0**
* enzyme-adapter-react-16
**version 1.1.0**
* react-test-renderer
**version 16.2.0**


___

### To run on local server

 - clone repository
 - change directories to api (backend folder) and create .env file in api (backend) and add the below:


 **MONGO_URI=mongodb://localhost/cakes**


 - change directories to react-web (front end folder) and create a .env.local file and add the below:


 **REACT_APP_API_URL=http://localhost:7000**

***Note: To run instagram feed will require instagram creditionals of the client which we are unable to provide***

##### Terminal

* In one tab run

```
$ mongod --dbpath /usr/local/var/mongodb
```

***this will run a mongodb server***

* In a seperate tab change directories to api folder and the Bakergirl folder and run the following command:

```
$ npm install
```

***this will install the dependencies required the api backend***

* In a seperate tab change directories to the react-web folder and run the following command:

```
$ yarn
```

***this will install the dependencies required for the react front end***

* In the api tab run the below:

```
$ yarn dev
```

***this will start your backend api locally***

* In the react-web tab run the below:

```
$ yarn start
```

***this will start your react front end locally automatically in the browswer if not the app can be accessed through http://localhost:3000/***

___

## Project Proposal ##

![](/documentation/Project_proposal1.png=100x20 )

![](/documentation/Project_proposal2.png)

![](/documentation/Project_proposal3.png)

![](/documentation/Project_proposal4.png)

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
