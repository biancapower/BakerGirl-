import React from 'react';
<<<<<<< HEAD
import Instafeed from '../react-instafeed/src/index';
import { Jumbotron, Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';

=======
import Instafeed from 'react-instafeed';
import { Jumbotron, Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';

const instaUserId = `${process.env.REACT_APP_INSTA_USER_ID}`;
const instaClientId = `${process.env.REACT_APP_INSTA_CLIENT_ID}`;
const instaAccessToken = `${process.env.REACT_APP_INSTA_ACCESS_TOKEN}`;
>>>>>>> develop

//import Instafeed from 'react-instafeed';

class InstaFeed extends React.Component {
  render() {
    const instafeedTarget = 'instafeed';
    return (
      <div id={instafeedTarget}>
        <Instafeed
<<<<<<< HEAD
          limit='5'
=======
          limit='100'
>>>>>>> develop
          ref='instafeed'
          resolution='standard_resolution'
          sortBy='most-recent'
          target={instafeedTarget}
          template="
                    <a href='{{link}}' target='_blank' class='instafeed__item'>
<<<<<<< HEAD
                      <img class='instafeed__item__background col-2 m-3' src='{{image}}' />
                    </a>
           "
          userId='3094190558'
          clientId='9b93b988b45e4a899f8595fceceba014'
          accessToken='3094190558.1677ed0.1dc7b816456d4941b697f03c3cef4b47'
=======
                      <img class='instafeed__item__background col-sm-5 col-md-2 m-3' src='{{image}}' />
                    </a>
           "
          userId={instaUserId}
          clientId={instaClientId}
          accessToken={instaAccessToken}
>>>>>>> develop
        />
      </div>
    )
  }
}

<<<<<<< HEAD
export default InstaFeed
=======
export default InstaFeed
>>>>>>> develop
