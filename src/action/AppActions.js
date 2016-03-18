/**
 * Created with IntelliJ IDEA.
 * User: user
 * Date: 15-8-19
 * Time: 上午9:50
 * To change this template use File | Settings | File Templates.
 */
var Reflux=require('reflux');

var AppActions = Reflux.createActions([
    "setMenu",
    "getMenu"
    ]
);

module.exports=AppActions;