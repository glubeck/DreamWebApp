// tutorial3.js

var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var Route = ReactRouter.Route;


var Logo = React.createClass({
    render: function() {
        return <div className="text-center" style={logoStyle}>
          <p style={titleStyle}>Make Your Dreams Come True</p>
        </div>;
    }
});

var titleStyle = {

  color: 'white',
  padding: '60px',
  fontSize: '40px',
  fontFamily: 'Arial Black'
};

var textTitleStyle = {

  color: 'RoyalBlue',
 
  fontSize: '30px',
  fontFamily: 'Comic Sans MS'
};

var textTitleStyle = {

  color: 'RoyalBlue',
 
  fontSize: '30px',
  fontFamily: 'Comic Sans MS'
};

var textStyle = {

  color: 'RoyalBlue',
  paddingTop: '10px',
  fontSize: '15px',
  fontFamily: 'Comic Sans MS'
};

var logoStyle = {
  color: 'white',
  backgroundImage: 'url(' + 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Blue_sky_south_of_France.jpg' + ')',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all', // 'ms' is the only lowercase vendor prefix
  height: '180px'

};

var buttonStyle = {
  padding: '5px',

};

var App = React.createClass({
  render: function() {
    return (
      <div>
      <Logo />
        <nav className="navbar navbar-default" role="navigation">
          <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">Home</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <ul className="nav navbar-nav">
                  <li><Link to="/ideas">Ideas</Link></li>
                </ul>
                <ul className="nav navbar-nav">
                  <li><Link to="/dice">Dice</Link></li>
                </ul>
                <ul className="nav navbar-nav">
                  <li><Link to="/scoreboard">Scoreboard</Link></li>
                </ul>
                <ul className="nav navbar-nav">
                  <li><Link to="/tournament">Tournament</Link></li>
                </ul>
                <ul className="nav navbar-nav">
                  <li><Link to="/topics">Topics</Link></li>
                </ul>
                <ul className="nav navbar-nav">
                  <li><Link to="/login">Login</Link></li>
                </ul>
                <ul className="nav navbar-nav">
                  <li><Link to="/register">Register</Link></li>
                </ul>
              </div>
            </div>
        </nav>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

var Home = React.createClass({
  render: function() {
    return (
      <div className="container">

      <p style={textTitleStyle}>Game Utilities</p>
      <p style={textStyle}>Welcome to Game Utilities!  Where all of your dreams will most definitely come true.
      Here we have a variety of utilities for your everyday gaming needs.  Forgot your dice?  No problem.  Want an
      easy to use and eye pleasing interface for score keeping?  Got it.  Need a bracket system for a tournament?  Dude.
      We got your back.</p>
      
      </div>
    );
  }
});


var Ideas = React.createClass({
  render: function() {
    return (
      <div className="container">
      <p style={textStyle}>This is where people can post ideas for fun games</p>
      </div>
    );
  }
}); 

var Dice = React.createClass({
  render: function() {
    return (
      <div className="container">
      <p style={textStyle}>What kind of dice?</p>
      <button type="button" className="btn btn-info">4 Sided</button>
      &nbsp;
      <button type="button" className="btn btn-info">6 Sided</button>
      &nbsp;
      <button type="button" className="btn btn-info">8 Sided</button>
      &nbsp;
      <button type="button" className="btn btn-info">12 Sided</button>
      &nbsp;
      <button type="button" className="btn btn-info">16 Sided</button>
      &nbsp;
      <button type="button" className="btn btn-info">20 Sided</button>
      <p style={textStyle}>How many?</p>
       <button type="button" className="btn btn-success">One</button>
      &nbsp;
      <button type="button" className="btn btn-success">Two</button>
      &nbsp;
      <button type="button" className="btn btn-success">Three</button>
      &nbsp;
      <button type="button" className="btn btn-success">Four</button>
      &nbsp;
      <button type="button" className="btn btn-success">Five</button>
      &nbsp;
      <button type="button" className="btn btn-success">Six</button>
      <p style={textStyle}></p>
      <button type="button" className="btn btn-danger">ROLL THE DICE</button>
      </div>

    );
  }
}); 

var Scoreboard = React.createClass({
  render: function() {
    return (
      <div className="container">
      <p style={textStyle}>Score dem boards!</p>
      </div>
    );
  }
}); 

var Tournament = React.createClass({
  render: function() {
    return (
      <div className="container">
      <p style={textStyle}>Tournaments go here!</p>
      </div>
    );
  }
}); 

var Topics = React.createClass({
  render: function() {
    return (
      <div className="container">
      <p style={textStyle}>Talk about stuff!</p>
      </div>
    );
  }
}); 

var Login = React.createClass({
  render: function() {
    return (
      <div className="container">
      <p style={textStyle}>Thou mayest login if thou desirest.</p>
      </div>
    );
  }
}); 

var Register = React.createClass({
  render: function() {
    return (
      <div className="container">
      <p style={textStyle}>Register it up dawg.</p>
      </div>
    );
  }
}); 


// Run the routes
var routes = (
      <Router>
        <Route name="app" path="/" component={App}>
          <Route name="ideas" path="/ideas" component={Ideas} />
          <Route name="dice" path="/dice" component={Dice} />
          <Route name="scoreboard" path="/scoreboard" component={Scoreboard} />
          <Route name="tournament" path="/tournament" component={Tournament} />
          <Route name="topics" path="/topics" component={Topics} />
          <Route name="login" path="/login" component={Login} />
          <Route name="register" path="/register" component={Register} />
          <Route path="*" component={Home}/>
        </Route>
      </Router>
);



ReactDOM.render(routes, document.body);