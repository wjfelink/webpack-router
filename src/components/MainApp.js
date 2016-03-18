/**
 * @jsx React.DOM
 */

var React = require('react');
var Action=require('../action/AppActions.js');
var AppStore= require('../store/AppStore.js');
var SideBar=require('./SideBar');
var TopBar=require('./TopBar');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Redirect=Router.Redirect;
var RouteHandler = Router.RouteHandler;
var About = React.createClass({
    render: function(){
        return (<h2>About</h2>);
    }
});
var Inbox = React.createClass({
    render: function(){
        return(<h2>Inbox</h2>);
    }
});
var Home2 = React.createClass({
    render: function(){

        return(
            <div>
                <h2>Home2</h2>
                <a href="inbox">jump another page </a>
            </div>
            );
    }
});
var Home1=require("../components/Home1.js");
var NotFoundRoute = Router.NotFoundRoute;

var MainApp = React.createClass({

    getInitialState:function(){
        return {menu:[]}
    },
    onChange:function(menu)
    {
        this.setState({
            menu: menu
        });
    },

    componentWillUnmount: function() {
        this.unsubscribe();
    },

    componentDidMount: function() {
        Action.setMenu(["about","inbox","home1","home2"]);
        this.unsubscribe =  AppStore.listen(this.onChange);
    },

    render: function() {
         var userName="Hello World";

          return (
                  <div>
                      <TopBar logout={this._logout} userName={userName}/>
                      <SideBar list={this.state.menu} />
                      <div id="page-wrapper" className="page-content">
                          <div className="page-content">
                              <RouteHandler {...this.props} />
                          </div>
                      </div>
                  </div>
              )
    },
    _logout:function()
    {
        alert(1)
    }
});
var routes = (
    <Route  path="/" handler={MainApp}>
        <Route name="about" path="about" handler={About}/>
        <Route name="inbox" path="inbox" handler={Inbox}/>
        <Route name="inbox2" path="inbox/123" handler={Inbox}/>
        <Route name="home1" path="home1" handler={Home1}/>
        <Route name="home2" path="home2" handler={Home2}/>
        <NotFoundRoute name="index" handler={Home2} />
    </Route>
    );

Router.run(routes, Router.HistoryLocation, function(Root,state){React.render(<Root pathname={state.pathname} />,document.getElementById('wrapper'));});

module.exports=MainApp;