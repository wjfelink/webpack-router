/**
 * Created with IntelliJ IDEA.
 * User: user
 * Date: 15-8-19
 * Time: 上午9:37
 * To change this template use File | Settings | File Templates.
 */


/**
 * Created by Sandeep on 06/10/14.
 */
var Reflux=require('reflux');
var AppActions=require('../action/AppActions.js');


var _notes=[];
var _menu=[];

var AppStore = Reflux.createStore({

    init: function() {
        this.listenTo(AppActions.setMenu, this.setMenu);
    },
    setMenu:function(menus)
    {
        _menu= menus;
        this.trigger(menus);
    }

});

module.exports=AppStore;
