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

var diceType = 6;
var diceAmount = 1;

var Dice = React.createClass({

  rollDie: function() {

    var roll = Math.floor(((Math.random()*diceType)+1)*diceAmount);

    alert("You rolled a " + roll);
  },

  setType: function(type) {
    
    diceType = type;
  },

  setAmount: function(amount) {
    diceAmount = amount;
  },

  render: function() {
    return (
      <div className="container">
      <p style={textStyle}>What kind of dice?</p>
      <button type="button" className="btn btn-info" onClick={this.setType.bind(this, 4)}>4 Sided</button>
      &nbsp;
      <button type="button" className="btn btn-info" onClick={this.setType.bind(this, 6)}>6 Sided</button>
      &nbsp;
      <button type="button" className="btn btn-info" onClick={this.setType.bind(this, 8)}>8 Sided</button>
      &nbsp;
      <button type="button" className="btn btn-info" onClick={this.setType.bind(this, 12)}>12 Sided</button>
      &nbsp;
      <button type="button" className="btn btn-info" onClick={this.setType.bind(this, 16)}>16 Sided</button>
      &nbsp;
      <button type="button" className="btn btn-info" onClick={this.setType.bind(this, 20)}>20 Sided</button>
      <p style={textStyle}>How many?</p>
       <button type="button" className="btn btn-success" onClick={this.setAmount.bind(this, 1)}>One</button>
      &nbsp;
      <button type="button" className="btn btn-success" onClick={this.setAmount.bind(this, 2)}>Two</button>
      &nbsp;
      <button type="button" className="btn btn-success" onClick={this.setAmount.bind(this, 3)}>Three</button>
      &nbsp;
      <button type="button" className="btn btn-success" onClick={this.setAmount.bind(this, 4)}>Four</button>
      &nbsp;
      <button type="button" className="btn btn-success" onClick={this.setAmount.bind(this, 5)}>Five</button>
      &nbsp;
      <button type="button" className="btn btn-success" onClick={this.setAmount.bind(this, 6)}>Six</button>
      <p style={textStyle}></p>
      <button type="button" className="btn btn-danger" onClick={this.rollDie} >ROLL THE DICE</button>
      </div>

    );
  }
}); 

var Scoreboard = React.createClass({
  render: function() {
    return (
      <div className="container">
      <p style={textStyle}>Score dem boards!</p>
      <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>Lorem</td>
                  <td>ipsum</td>
                  <td>dolor</td>
                  <td>sit</td>
                </tr>
                <tr>
                  <td>1,002</td>
                  <td>amet</td>
                  <td>consectetur</td>
                  <td>adipiscing</td>
                  <td>elit</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>Integer</td>
                  <td>nec</td>
                  <td>odio</td>
                  <td>Praesent</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>libero</td>
                  <td>Sed</td>
                  <td>cursus</td>
                  <td>ante</td>
                </tr>
                <tr>
                  <td>1,004</td>
                  <td>dapibus</td>
                  <td>diam</td>
                  <td>Sed</td>
                  <td>nisi</td>
                </tr>
                <tr>
                  <td>1,005</td>
                  <td>Nulla</td>
                  <td>quis</td>
                  <td>sem</td>
                  <td>at</td>
                </tr>
                <tr>
                  <td>1,006</td>
                  <td>nibh</td>
                  <td>elementum</td>
                  <td>imperdiet</td>
                  <td>Duis</td>
                </tr>
                <tr>
                  <td>1,007</td>
                  <td>sagittis</td>
                  <td>ipsum</td>
                  <td>Praesent</td>
                  <td>mauris</td>
                </tr>
                <tr>
                  <td>1,008</td>
                  <td>Fusce</td>
                  <td>nec</td>
                  <td>tellus</td>
                  <td>sed</td>
                </tr>
                <tr>
                  <td>1,009</td>
                  <td>augue</td>
                  <td>semper</td>
                  <td>porta</td>
                  <td>Mauris</td>
                </tr>
                <tr>
                  <td>1,010</td>
                  <td>massa</td>
                  <td>Vestibulum</td>
                  <td>lacinia</td>
                  <td>arcu</td>
                </tr>
                <tr>
                  <td>1,011</td>
                  <td>eget</td>
                  <td>nulla</td>
                  <td>Class</td>
                  <td>aptent</td>
                </tr>
                <tr>
                  <td>1,012</td>
                  <td>taciti</td>
                  <td>sociosqu</td>
                  <td>ad</td>
                  <td>litora</td>
                </tr>
                <tr>
                  <td>1,013</td>
                  <td>torquent</td>
                  <td>per</td>
                  <td>conubia</td>
                  <td>nostra</td>
                </tr>
                <tr>
                  <td>1,014</td>
                  <td>per</td>
                  <td>inceptos</td>
                  <td>himenaeos</td>
                  <td>Curabitur</td>
                </tr>
                <tr>
                  <td>1,015</td>
                  <td>sodales</td>
                  <td>ligula</td>
                  <td>in</td>
                  <td>libero</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    );
  }
});

var minimalData = {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"]  /* second matchup */
    ],
    results : [
      [[1,2], [3,4]],       /* first round */
      [[4,6], [2,1]]        /* second round */
    ]
  };

var Tournament = React.createClass({
  componentDidMount: function() {
    $('.tournamentThing').bracket({
        init: minimalData /* data to initialize the bracket with */ });
  },
  render: function() {
    return (
      <div className="tournamentThing">
      <p style={textStyle}>You go here.!</p>
      </div>
    );
  }
}); 


var Topics = React.createClass({
  render: function() {
    return (
      <div className="container">
      <p style={textStyle}>{this.anExtremelyEfficientFunction}Talk about stuff!</p>
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
          <div className="col-md-offset-5 col-md-3">
            <div className="form-login">
              <h4>Welcome back.</h4>
                <input type="text" id="userName" className="form-control input-sm chat-input" placeholder="username" />
              <br/>
              <input type="text" id="userPassword" className="form-control input-sm chat-input" placeholder="password" />
              <br/>
              <div className="wrapper">
                <span className="group-btn">     
                 <a href="#" className="btn btn-primary btn-md">login <i className="fa fa-sign-in"></i></a>
                </span>
              </div>
            </div>
          </div>
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