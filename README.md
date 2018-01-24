# BakerGirl
A simple online platform for ordering customised cakes for baker girl company based in Sydney. This platform is to help streamline the running of bakergirl as it helps manage orders.

---


## Team:

**Sophie Chhoeu**
* Role: Project Manager

  Responsibilities: Organising work flow, managing client relationship, assist team where necessary and or with escalation issues.  

**Bianca Power**

* Role: Tech Lead

  Responsibilities: Manages Team Github, Deployment and escalation tech and creative issues.

**Tessa Reed**  

* Role: UX / Dev Lead  

  Responsibilities: Manages and develops site flow. Implements authentication in line with client user experience.

**Cindy Ariya**

* Role: Creative Lead

  Responsibilities: Implements style requirements based on team and client recommendations.

___

# Live site

Here is the deployed live site on netlify:

[Click here](https://baker-girl.netlify.com/)


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

<img src="/documentation/Project_proposal1.png" width="500">

<img src="/documentation/Project_proposal2.png" width="500">

<img src="/documentation/Project_proposal3.png" width="500">

<img src="/documentation/Project_proposal4.png" width="500">

## Proposal Pitch ##
<img src="/documentation/BAKERGIRL_prez1.png" width="500">

<img src="/documentation/BAKERGIRL_prez2.png" width="500">

<img src="/documentation/BAKERGIRL_prez3.png" width="500">

<img src="/documentation/BAKERGIRL_prez4.png" width="500">

<img src="/documentation/BAKERGIRL_prez5.png" width="500">

<img src="/documentation/BAKERGIRL_prez6.png" width="500">

<img src="/documentation/BAKERGIRL_prez7.png" width="500">

## User Flow ##
<img src="/documentation/BakerGirlUserflow.png" width="500">

## Project Sprint ##
<img src="/documentation/sprint.png" width="500">

## ERD ##
<img src="/documentation/Images/BakerGirlERD.png" width="500">

## Wireframes ##
<img src="/documentation/Images/BakerGirlLandingMobile.png" width="500">

<img src="/documentation/Images/BakerGirlLandingDesktop.png" width="500">

<img src="/documentation/Images/BakerGirlGalleryMobile.png" width="500">

<img src="/documentation/Images/BakerGirlGalleryDesktop.png" width="500">

<img src="/documentation/Images/BakerGirlContactMobile.png" width="500">

<img src="/documentation/Images/BakerGirlContactDesktop.png" width="500">

<img src="/documentation/Images/BakerGirlAdminMobile.png" width="500">

<img src="/documentation/Images/BakerGirlAdminDesktop.png" width="500">

<img src="/documentation/Images/BakerGirlAboutMobile.png" width="500">

<img src="/documentation/Images/BakerGirlAboutDesktop.png" width="500">


## Trello Board

Highlights deliverables by team:
includes: styling, colours, user stories and initial project timeline

https://trello.com/b/SOuF8d5F/baker-girl

## Client Diary

Communication with client including meeting minutes and agenda points by the team:

https://docs.google.com/document/d/1H_Q8dseeNPwsDFcRDex7stukgzn7SDYm_t_CPqaoapc/edit


## Issues:
___

### Instagram

In attempting to use the npm module [react-instafeed](https://github.com/JeromeFitz/react-instafeed) I realised that the code in the module was incorrect. To remedy this, I forked the github repo, made the necessary changes to the code, and from there on used my forked version to achieve the desired result.

To get it working locally:
- cd into react-web/src
- remove the directory "react-instafeed"
- git clone https://github.com/biancapower/react-instafeed.git

### Form Validation

Due to the timeframe of the project we were unable to implement form validation for the client and have advised accordingly.

### Delete order entries in Admin

Due to the timeframe of the project, next sprint will include routes to delete order entries. Have advised client accordingly.

___

## User testing

Team have provided feedback survey to other users results are below:

* User Feedback

![User feedback](/documentation/User_feedback.png)

### Client Feedback

Provided client survey for site feedback: [Click here](https://www.surveymonkey.com/r/5WHV3D8)

Results from client below:
