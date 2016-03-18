/**
 * @jsx React.DOM
 */

var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;

var SideBar = React.createClass({

    render: function(){
       var list=this.props.list;

       var menu=  list.map(function(item){
            return <li> <Link to={item}><span className="menu-title">{item}</span></Link> </li>
       });
       return  <nav id="sidebar" className="navbar-default navbar-static-side"> <div className="sidebar-collapse menu-scroll"><ul id="sidebar-menu" className="nav mtn">{menu}</ul></div></nav>;
    }
});

module.exports= SideBar;