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
                  <li onClick={this.loadDice}><Link to="/dice">Dice</Link></li>
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

var diceType = 6;
var diceAmount = 1;



var Dice = React.createClass({

  componentDidMount: function() {

    this.setType(diceType);
    this.setAmount(diceAmount);
  },

  rollDie: function() {

    var roll = 0;
    //roll = Math.floor(((Math.random()*diceType)+1)*diceAmount);

    var output = "You rolled: ";
    var i;
    for (i = 0; i < diceAmount; i++) {
      var tempNum = Math.floor((Math.random()*diceType+1));
      var tempString = tempNum.toString();
      output += tempString;
      if(i < diceAmount-1)
        output+= " + "
      roll += tempNum;
    }

    if(diceAmount != 1)
      output += " = " + roll.toString();

    document.getElementById("output").innerHTML = output;
  },


  setType: function(type) {
    
    diceType = type;
    if(type != 4)
      $("#four").removeClass("btn-primary").addClass("btn-info");
    else
      $("#four").removeClass("btn-info").addClass("btn-primary");
    if(type != 6)
      $("#six").removeClass("btn-primary").addClass("btn-info");
    else 
      $("#six").removeClass("btn-info").addClass("btn-primary");
    if(type != 8)
      $("#eight").removeClass("btn-primary").addClass("btn-info");
    else 
      $("#eight").removeClass("btn-info").addClass("btn-primary");
    if(type != 12)
      $("#twelve").removeClass("btn-primary").addClass("btn-info");
    else 
      $("#twelve").removeClass("btn-info").addClass("btn-primary");
     if(type != 16)
      $("#sixteen").removeClass("btn-primary").addClass("btn-info");
    else 
      $("#sixteen").removeClass("btn-info").addClass("btn-primary");
    if(type != 20)
      $("#twenty").removeClass("btn-primary").addClass("btn-info");
    else 
      $("#twenty").removeClass("btn-info").addClass("btn-primary");
  },

  setAmount: function(amount) {
    diceAmount = amount;
    if(amount != 1)
      $("#1").removeClass("btn-primary").addClass("btn-info");
    else
      $("#1").removeClass("btn-info").addClass("btn-primary");
    if(amount != 2)
      $("#2").removeClass("btn-primary").addClass("btn-info");
    else 
      $("#2").removeClass("btn-info").addClass("btn-primary");
    if(amount != 3)
      $("#3").removeClass("btn-primary").addClass("btn-info");
    else 
      $("#3").removeClass("btn-info").addClass("btn-primary");
    if(amount != 4)
      $("#4").removeClass("btn-primary").addClass("btn-info");
    else 
      $("#4").removeClass("btn-info").addClass("btn-primary");
     if(amount != 5)
      $("#5").removeClass("btn-primary").addClass("btn-info");
    else 
      $("#5").removeClass("btn-info").addClass("btn-primary");
    if(amount != 6)
      $("#6").removeClass("btn-primary").addClass("btn-info");
    else 
      $("#6").removeClass("btn-info").addClass("btn-primary");
  },



  render: function() {
    return (
      <div className="container">
      <p style={textStyle}>What kind of dice?</p>
      <button type="button" className="btn btn-info" id="four" onClick={this.setType.bind(this, 4)}>4 Sided</button>
      &nbsp;
      <button type="button" className="btn btn-primary" id="six" onClick={this.setType.bind(this, 6)}>6 Sided</button>
      &nbsp;
      <button type="button" className="btn btn-info" id="eight" onClick={this.setType.bind(this, 8)}>8 Sided</button>
      &nbsp;
      <button type="button" className="btn btn-info" id="twelve" onClick={this.setType.bind(this, 12)}>12 Sided</button>
      &nbsp;
      <button type="button" className="btn btn-info" id="sixteen" onClick={this.setType.bind(this, 16)}>16 Sided</button>
      &nbsp;
      <button type="button" className="btn btn-info" id="twenty" onClick={this.setType.bind(this, 20)}>20 Sided</button>
      <p style={textStyle}>How many?</p>
       <button type="button" className="btn btn-primary" id="1" onClick={this.setAmount.bind(this, 1)}>One</button>
      &nbsp;
      <button type="button" className="btn btn-info" id="2" onClick={this.setAmount.bind(this, 2)}>Two</button>
      &nbsp;
      <button type="button" className="btn btn-info" id="3" onClick={this.setAmount.bind(this, 3)}>Three</button>
      &nbsp;
      <button type="button" className="btn btn-info" id="4" onClick={this.setAmount.bind(this, 4)}>Four</button>
      &nbsp;
      <button type="button" className="btn btn-info" id="5" onClick={this.setAmount.bind(this, 5)}>Five</button>
      &nbsp;
      <button type="button" className="btn btn-info" id="6"onClick={this.setAmount.bind(this, 6)}>Six</button>
      <p style={textStyle}></p>
      <button type="button" className="btn btn-success" onClick={this.rollDie} >ROLL THE DICE</button>
      <p style={textStyle}></p>
      <p id="output" style={textStyle}></p>
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
      <div className="login">
        <p style={textStyle}>Thou mayest login if thou desirest.</p>
        <form role="form">
          <input type="text" value="Hello!" />
        </form>
      </div>
    );
  }
}); 

var Register = React.createClass({
  render: function() {
    return (
      <div className="login">
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