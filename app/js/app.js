// tutorial3.js

var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var Route = ReactRouter.Route;

/*var routes = (
	<Router>
	<Route name="app" path="/" component={App}>
		<Route name="page" path="/page" component={page} />
		<Route path="*" component={Home}) */

var Page = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Logo />
        <NavBar />
        <List />
      </div>
    );
  }
});

var NavBar = React.createClass({
  render: function() {
    return (
	<div className="container">                 
 		<ul className="nav nav-tabs" role="tablist">
    		<li className="active"><a href="#">Home</a></li>
    		<li><a href="#">Featured</a></li>
    		<li><a href="#">Recent</a></li>
    		<li><a href="#">Popular</a></li>        
  		</ul>
	</div> 
    );
  }
});

var Logo = React.createClass({
    render: function() {
        return <div><img src={'https://pbs.twimg.com/media/CTl2qqFVEAAXZQY.png'} alt="boohoo" className="img-responsive"/></div>;
    }
});

var List = React.createClass({
  render: function() {
    return (
      <div className="container">
        <ul className="list-group">
  		<li className="list-group-item">This is the list of things</li>
  		<li className="list-group-item">stuff</li>
  		<li className="list-group-item">stuff</li>
  		<li className="list-group-item">stuff</li>
  		<li className="list-group-item">stuff</li>
  		<li className="list-group-item">stuff</li>
  		<li className="list-group-item">stuff</li>
  		<li className="list-group-item">stuff</li>
  		<li className="list-group-item">stuff</li>
  		<li className="list-group-item">stuff</li>
  		<li className="list-group-item">stuff</li>
  		<li className="list-group-item">stuff</li>
  		<li className="list-group-item">stuff</li>
  		<li className="list-group-item">stuff</li>
  		<li className="list-group-item">stuff</li>
  		<li className="list-group-item">stuff</li>
  		<li className="list-group-item">stuff</li>
  		<li className="list-group-item">stuff</li>
		</ul>
      </div>
    );
  }
});


ReactDOM.render(
  <Page />,
  document.getElementById('content')
);