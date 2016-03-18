/** @jsx React.DOM */
var React = require('react/addons');
var $ = require('jquery');
var Bootstrap = require('react-bootstrap');
var menu = require('../../constants/sidebar-menu');
var Tooltip = Bootstrap.Tooltip;
var OverlayTrigger = Bootstrap.OverlayTrigger;

var TooltipLink = React.createClass({
  render: function() {
    var tooltip = <Tooltip>{this.props.tooltip}</Tooltip>;
    return (
      <OverlayTrigger placement="top" overlay={tooltip} delayShow={300} delayHide={300}>
        <a href={this.props.href}>{this.props.children}</a>
      </OverlayTrigger>
    );
  }
});

var SidebarProfile = React.createClass({
  getInitialState: function() {
    return {
      avatar: 'http://i.imgur.com/zvrN7xN.jpg?1',
      name: user ? user.userRealname : 'guest'
    }
  },
  render: function() {
    return (
      <li className="user-panel clearfix">
          <div className="thumb">
            <img src={this.state.avatar} alt="" className="img-circle"/>
          </div>
          <div className="info"><p>{this.state.name}</p>
              <ul className="list-inline list-unstyled">
                  <li><TooltipLink href="#" tooltip="个人信息"><i className="fa fa-user"></i></TooltipLink></li>
                  <li><TooltipLink href="/logout" tooltip="退出"><i className="fa fa-sign-out"></i></TooltipLink></li>
              </ul>
          </div>
      </li>
    );
  }
});

var MenuItem = React.createClass({
  displayName: 'MenuItem',
  render: function() {

    var iconClasses = "fa fa-fw " + this.props.icon;

    var children = this.props.children ? (
      <ul className="nav nav-second-level collapse">
        {this.props.children.map(function(child, key) {

          var subIconClasses = "fa " + child.icon;
          if(user.role !=1 && (child.link == '/meal/list' || child.link == '/team/manager' || child.link == '/admin/index'|| child.link == '/team/voteManager')){
        	  return false;
          }
          return (
            <li key={key} className={child.link === window.location.pathname ? 'active' : ''}>
              <a href={child.link}>
                <i className={subIconClasses}></i>
                <span className="submenu-title">{child.name}</span>
              </a>
            </li>
          );
        }.bind(this))}
      </ul>
    ) : '';

    return (
      <li className="menu-item">
        <a href={this.props.link ? this.props.link : '#'} onClick={this.props.toggle}>
          <i className={iconClasses}><div className="icon-bg bg-orange"></div></i>
          <span className="menu-title">{this.props.name}</span>
          {this.props.children ? <span className="fa arrow"></span> : ''}
        </a>
        {this.props.children ? children : ''}
      </li>
      );
  }
})

var Sidebar = React.createClass({
  displayName: 'Sidebar',

  getInitialState: function() {
    return {
      menu: menu
    }
  },

  componentDidMount: function () {
    $(this.getDOMNode()).find('.active').parent().parent().addClass('active');
    $(this.getDOMNode()).find('.active').parent().addClass('in');
  },

  render: function () {

    var menuItem = this.state.menu.map(function(item, key) {
      return <MenuItem toggle={this._toggle} key={key} icon={item.icon} name={item.name} children={item.childrens} link={item.link} />;
    }.bind(this));

    return (
        <nav id="sidebar" role="navigation" className="navbar-default navbar-static-side">
          <div className="sidebar-collapse menu-scroll">
              <ul id="side-menu" className="nav">
                  <SidebarProfile />
                  {menuItem}
              </ul>
          </div>
      </nav>
    );
  },

  _toggle: function(e) {
    $(this.getDOMNode()).find('.menu-item').removeClass('active');
    $(e.target).parent().addClass('active');
    $(this.getDOMNode()).find('.collapse').removeClass('in');
    $(e.target).parent().find('.collapse').addClass('in');
    e.preventDefault();
  }
});

module.exports = Sidebar;
