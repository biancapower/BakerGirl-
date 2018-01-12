import React from 'react'
import InstagramEmbed from 'react-instagram-embed'
import Instafeed from 'react-instafeed';
import { Jumbotron, Container, Media } from 'reactstrap';

export default function () {
  return (
    <div>
    <Jumbotron fluid></Jumbotron>
      <Container>
     <div className="instagram">
          <Media id="Instagram" src="path/to/instafeed.min.js" alt="Generic placeholder image" />
     </div>
   </Container>
   <InstagramEmbed
     url='https://www.instagram.com/p/BV6dT2xBSOy/?taken-by=_bakergirl'
     maxWidth={320}
     hideCaption={false}
     containerTagName='div'
     protocol=''
     onLoading={() => {}}
     onSuccess={() => {}}
     onAfterRender={() => {}}
     onFailure={() => {}}
   />
    </div>
  )
}





//
// // var Instafeed = require("instafeed");
//
//
// export default function () {
//   return (
//   <script type="text/javascript" src="https://www.instagram.com/_bakergirl/"></script>
//   )
// }



// const instafeedTarget = 'instafeed';
//  return (
//    <div id={instafeedTarget}>
//      <Instafeed
//        limit='5'
//        ref='instafeed'
//        resolution='standard_resolution'
//        sortBy='most-recent'
//        target={instafeedTarget}
//        template=
//        <a href='{{https://www.instagram.com/smcxoxo/}}' target='_blank' class='instafeed__item'>
//           <img className='instafeed__item__background' src='{{image}}' />
//         <div className='instafeed__item__overlay'>
//             <div className='instafeed__item__overlay--inner'>
//               <p className='instafeed__item__caption'>{{model.short_caption}}</p>
//             <p className='instafeed__item__location'>{{location}}</p>
//             </div>
//           </div>
//         </a>
//      />
//    </div>
//  )
//
// userId={`${process.env.REACT_APP_INSTAGRAM_USER_ID}`}
// clientId={`${process.env.REACT_APP_INSTAGRAM_CLIENT_ID}`}
// accessToken={`${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`}

//  export instafeedTarget;
