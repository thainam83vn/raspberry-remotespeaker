(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(43)},22:function(e,n,t){},23:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(9),l=t.n(r),c=(t(22),t(23),t(10)),i=t(11),u=t(14),s=t(12),m=t(15),d=t(13),h=t.n(d),v={Play:function(e){e.action;var n=e.song;return o.a.createElement("div",null,o.a.createElement("h1",null,"Playing"),o.a.createElement("h3",null,"Song ",n.name))},List:function(e){var n=e.action,t=e.songs;return o.a.createElement("div",null,o.a.createElement("h1",null,n),t.map(function(e){return o.a.createElement("h3",{key:e.index},e.index,".",e.name)}),o.a.createElement("h1",null,'Please say "Play number #"'))},None:function(e){return o.a.createElement("div",null,o.a.createElement("h1",null,"Waiting your commands"))}},f=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(o)))).state={},t}return Object(m.a)(n,e),Object(i.a)(n,[{key:"updateNow",value:function(){var e=this;h()("".concat("http://localhost:9090/api","/now")).then(function(n){console.log("@debug-call-now",{data:n.data}),e.setState({data:n.data})}).catch(function(e){console.log("error:",e)})}},{key:"componentDidMount",value:function(){var e=this;this.updateNow(),this.interval=setInterval(function(){return e.updateNow()},1e3)}},{key:"render",value:function(){var e=this.state.data;if(console.log("@debug",{data:e}),e){var n=v[e.action];return o.a.createElement("div",null,o.a.createElement(n,e))}return o.a.createElement("div",null,o.a.createElement("h1",null,"Waiting Your Commands..."))}}]),n}(a.Component);var p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.4d3636d1.chunk.js.map