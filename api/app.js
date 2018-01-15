const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const authMiddleware = require('./middleware/auth');

// Create the app
const app = express();

app.use(require('cookie-parser')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(require('express-session')(
  { secret: 'secret', resave: false, saveUninitialized: false }
));
app.use(authMiddleware.initialize);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// cakes router/controller
const cakesRouter = require('./routes/cakes');
app.use('/cakes', cakesRouter);
app.use('/auth', require('./routes/auth'));

app.get('/', (req, res) => {
  res.json({
    resources: [{
      cakes: '/cakes'
    }]
  })
});


//import instagram
var ig = require('instagram-node').instagram();

var igOptions = {
    client_id: 'd200517f5f434f73b6b8b4478f9f7eda',
    client_secret: '82edca82229e4a49a6251c1dc04dbf9d'
}

redirectUri = 'http://localhost:7000/handleAuth'

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.get('/authorize', function(req, res){
    console.log('server processing endpoint /authorize');
    // console.log('ig.get....: ', ig.get_authorization_url(redirectUri, { scope : ['public_content','likes']}) )

    // set the scope of our application to be able to access likes and public content
    // IMPORTANT NOTE:
    // Copy/paste the code `ig.get_authorization_url(redirectUri, { scope : ['public_content','likes']})` into
    // your web browser to see any error messages (i.e. redirectUri not recognised by Instagram). If it's not
    // recognised then go to https://www.instagram.com/developer/clients/manage/ and go to
    // Manage Clients > Manage > Security, and add to "Valid redirect URIs:" the addresses of
    // localhost and port or production url, then try copy/paste again, until it displays to the user
    // 'This app is in sandbox mode and can only be authorized by sandbox users.', so the user can approve
    // by pressing the Authorise button that is shown.
    ig.use(igOptions);
    let redirectionPath = ig.get_authorization_url(redirectUri, { scope : ['public_content','likes']});
    console.log('redirectionPath: ', redirectionPath);

    // WRONG
    // request(redirectionPath, function (error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('response:', response);
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //   console.log('body:', body); // Print the HTML for the Google homepage.
    // });

    res.redirect( redirectionPath );

    // res.json({test: 'test'})
    // the above redirects to say:
    // http://localhost:7000/handleAuth?code=6d14d865579a4c1aba0828fe0d987f4c
});

app.get('/handleAuth', function(req, res){
    console.log('server processing endpoint /handleAuth');
    //retrieves the code that was passed along as a query to the '/handleAuth' route and uses this code to construct an access token
    ig.use(igOptions);
    ig.authorize_user(req.query.code, redirectUri, function(err, result){
      console.log('server processing endpoint /handleAuth with err: ', err);
        if(err) res.send( err );
        console.log('server processing endpoint /handleAuth with result: ', result);
    // store this access_token in a global variable called accessToken
        accessToken = result.access_token;
        console.log('server processing endpoint /handleAuth with result.access_token: ', accessToken);
    // After getting the access_token redirect to the '/' route

        ig.use({
          client_id: 'd200517f5f434f73b6b8b4478f9f7eda',
          client_secret: '82edca82229e4a49a6251c1dc04dbf9d',
          access_token : accessToken
        });

        ig.user_media_recent(getUserIdFromAccessToken(), function(err, result, pagination, remaining, limit) {
            if(err) res.json(err);

            console.log('server processing root route: ', err, result);

         // pass the json file gotten to our ejs template
            res.json({ instagramData : result });
        });


        // res.redirect('/');
    });
})

function getUserIdFromAccessToken() {
  console.log('server processing getUserIdFromAccessToken: ', accessToken.split('.')[0]);
  return accessToken.split('.')[0];
}

app.get('/', function(req, res){
   // create a new instance of the use method which contains the access token gotten
   res.json({ hi : 'nothing here' });
});


module.exports = app
