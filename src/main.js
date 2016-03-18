var Test=require('./test.js');
var React=require('react');

/* 内容区模块代码 */
var ContentMode = React.createClass({
        render: function(){
            return (
                <div className="ContentMode">
					<div className="contents">{this.props.contents}</div>
                    {this.props.children}
                </div>
            )
        }
});
/* 页面div封装 上面三个模块 */
var Page = React.createClass({
    render: function(){
        return (
            <div className="homepage">s
                <ContentMode  contents ="longen">this is one 12comment1223</ContentMode >
                <ContentMode  contents ="longen2">this is two comment233</ContentMode >
				<Test></Test>
            </div>
            )
        }
});
/* 初始化到content容器内 */
React.render(
    React.createElement(Page,null),document.getElementById("content")
);