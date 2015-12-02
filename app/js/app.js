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

var homeNavStyle = {

  fontSize: '20px',
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
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                  <li style={homeNavStyle}><Link to="/home">Home</Link></li>
                </ul>
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
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {

    return (
      <div>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Post an idea!
        </Button>

      <div className="list-group">
      <p></p>
      
        <a href="#" className="list-group-item">First item</a>
        <a href="#" className="list-group-item">Second item</a>
        <a href="#" className="list-group-item">Third item</a>
      </div>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Just post it</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <form role="form">
          <div>
            <div className="form-login">
                <input type="text" id="ideaTitle" className="form-control input-sm chat-input" placeholder="Title" />
              <br/>
              <textarea name="ideaEntry" cols="78" rows="10" ></textarea>
              <br/>
              <div className="wrapper">
                <span className="group-btn">     
                 <a href="#" className="btn btn-primary btn-md">Post <i className="fa fa-sign-in"></i></a>
                </span>
              </div>
            </div>
          </div>
        </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
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
  // componentDidMount: function() {
  //   $('.tournamentThing').bracket({
  //       init: minimalData /* data to initialize the bracket with */ });
  // },
  displayBracket: function() {
    $('.list-group').bracket({
        init: minimalData /* data to initialize the bracket with */ });
  },
  render: function() {
    return (
      <div className="container">
        <h2>List Group With Linked Items</h2>
        <div className="list-group">
          <a href="#" className="list-group-item active" onClick={this.displayBracket}>First item</a>
          <a href="#" className="list-group-item">Second item</a>
          <a href="#" className="list-group-item">Third item</a>
        </div>
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
          <Route name="home" path="/home" component={Home}/>
        </Route>
      </Router>
);



ReactDOM.render(routes, document.body);