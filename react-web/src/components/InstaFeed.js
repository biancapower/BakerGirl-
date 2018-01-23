import React from 'react';
import Instafeed from '../react-instafeed/src/index';

const instaUserId = `${process.env.REACT_APP_INSTA_USER_ID}`;
const instaClientId = `${process.env.REACT_APP_INSTA_CLIENT_ID}`;
const instaAccessToken = `${process.env.REACT_APP_INSTA_ACCESS_TOKEN}`;

class InstaFeed extends React.Component {
  render() {
    const instafeedTarget = 'instafeed';
    return (
      <div id={instafeedTarget}>
        <Instafeed
          limit='100'
          ref='instafeed'
          resolution='standard_resolution'
          sortBy='most-recent'
          target={instafeedTarget}
          template="
                    <a href='{{link}}' target='_blank' class='instafeed__item'>
                      <img class='instafeed__item__background col-sm-5 col-md-2 m-3' src='{{image}}' />
                    </a>
           "
          userId={instaUserId}
          clientId={instaClientId}
          accessToken={instaAccessToken}
        />
      </div>
    )
  }
}

export default InstaFeed