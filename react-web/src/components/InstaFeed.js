import React from 'react';
import Instafeed from '../react-instafeed/src/index';

//import Instafeed from 'react-instafeed';

class InstaFeed extends React.Component {
  render() {
    const instafeedTarget = 'instafeed';
    return (
      <div id={instafeedTarget}>
        <Instafeed
          limit='5'
          ref='instafeed'
          resolution='standard_resolution'
          sortBy='most-recent'
          target={instafeedTarget}
          template="
          <div class='container'>
            <div class='col'>
              <div class='p-5 row'>
                <div class='col-6'>
                  <a href='{{link}}' target='_blank' class='instafeed__item'> <img class='instafeed__item__background' src='{{image}}' /></a>
                </div>
              </div>
            </div>
          </div>"
          userId='3094190558'
          clientId='9b93b988b45e4a899f8595fceceba014'
          accessToken='3094190558.1677ed0.1dc7b816456d4941b697f03c3cef4b47'
        />
      </div>
    )
  }
}

export default InstaFeed