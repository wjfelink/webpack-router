/**
 * Created with IntelliJ IDEA.
 * User: user
 * Date: 15-8-13
 * Time: 下午4:17
 * To change this template use File | Settings | File Templates.
 */
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
module.exports = React.createClass({
    paramTest:"1",
    //var param=this.props.pathname;
    render: function(){
        alert(typeof this.constructor.name);
      //  alert(this instanceof Home1);
        // alert(JSON.stringify(this));
        //alert(this.props.pathname);
        return(
            <div className="main" style={{height:'600px'}}>
                <a href='/about'>transto..</a><h2>Home11</h2>
                 <Link to='/about'><span className="menu-title">turn..</span></Link>
                  <Link to='/about'><span className="menu-title">turn..</span></Link>
                   <Link to='/about'><span className="menu-title">turn..</span></Link>
                    <Link to='/about'><span className="menu-title">turn..</span></Link>

            </div>
            );
    }
});
