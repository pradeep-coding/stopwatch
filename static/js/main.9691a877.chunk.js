(this["webpackJsonp22-stop-watch-app"]=this["webpackJsonp22-stop-watch-app"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(1),i=n.n(s),c=n(3),r=n.n(c),a=n(4),o=n(5),u=n(7),d=n(6),l=(n(12),n(0)),m=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={seconds:0,isTimerRunning:!1},t.displayTimer=function(){var e=t.state.seconds,n=Math.floor(e/60),s=Math.floor(e%60),i=n>9?n:"0".concat(n),c=s>9?s:"0".concat(s);return"".concat(i,":").concat(c)},t.addSeconds=function(){t.setState((function(t){return{seconds:t.seconds+1}}))},t.startOrStopFunction=function(){t.state.isTimerRunning?clearInterval(t.timerId):t.timerId=setInterval((function(){t.addSeconds()}),1e3)},t.startTimer=function(){t.setState((function(t){return{isTimerRunning:!t.isTimerRunning}})),t.startOrStopFunction()},t.stopTimer=function(){t.setState((function(t){return{isTimerRunning:!t.isTimerRunning}})),t.startOrStopFunction()},t.resetTimer=function(){clearInterval(t.timerId),t.setState({seconds:0,isTimerRunning:!1})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state.isTimerRunning;return Object(l.jsxs)("div",{className:"stopwatch-bg-container",children:[Object(l.jsx)("h1",{className:"main-heading",children:"Stopwatch"}),Object(l.jsxs)("div",{className:"timer-container",children:[Object(l.jsxs)("div",{className:"timer-heading-container",children:[Object(l.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png",alt:"timer logo",className:"timer-logo"}),Object(l.jsx)("p",{className:"timer-heading",children:"Timer"})]}),Object(l.jsx)("h1",{className:"timer",testid:"timer",children:this.displayTimer()}),Object(l.jsxs)("div",{className:"buttons-container",children:[Object(l.jsx)("button",{type:"button",className:"button start-button",onClick:this.startTimer,disabled:t,children:"Start"}),Object(l.jsx)("button",{type:"button",className:"button stop-button",onClick:this.stopTimer,disabled:!t,children:"Stop"}),Object(l.jsx)("button",{type:"button",className:"button reset-button",onClick:this.resetTimer,children:"Reset"})]})]})]})}}]),n}(s.Component),b=(n(14),function(){return Object(l.jsx)(m,{})});r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9691a877.chunk.js.map