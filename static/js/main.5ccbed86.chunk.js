(this["webpackJsonpent-vote-app"]=this["webpackJsonpent-vote-app"]||[]).push([[1],{26:function(e,n,t){},27:function(e,n,t){},33:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),s=t(18),i=t.n(s),r=(t(26),t(2)),o=t(9),l=t(10),j=t(12),u=t(11),b=t(13),h=[{name:"Weekly",link:"/weekly-winner",icon:"fa-trophy"},{name:"Vote",link:"/vote",icon:"fa-vote-yea"},{name:"Actors",link:"/actors",icon:"fa-users"},{name:"Chat",link:"/chat",icon:"fa-comments"}],O=(t(27),t(1)),d=function(e){Object(j.a)(t,e);var n=Object(u.a)(t);function t(e){var c;return Object(o.a)(this,t),(c=n.call(this,e)).state={menulist:h,isMenuToggleOn:!1},c}return Object(l.a)(t,[{key:"toggleMenu",value:function(e){e.stopPropagation(),this.setState((function(e){return{isMenuToggleOn:!e.isMenuToggleOn}}))}},{key:"closeNavbar",value:function(){this.setState({isMenuToggleOn:!1})}},{key:"render",value:function(){var e=this;return Object(O.jsx)("header",{children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(b.a,{to:"/great-award",onClick:this.closeNavbar.bind(this),children:Object(O.jsxs)("h1",{className:"logo",children:["great",Object(O.jsx)("span",{children:"awards"})]})}),Object(O.jsx)("nav",{className:"site-nav "+(this.state.isMenuToggleOn?"site-nav--open ":" "),children:Object(O.jsx)("ul",{children:this.state.menulist.map((function(n,t){return Object(O.jsx)("li",{children:Object(O.jsxs)(b.a,{to:n.link,onClick:e.closeNavbar.bind(e),children:[Object(O.jsx)("i",{className:" fa "+n.icon+" site-nav--icon "}),n.name]})},t)}))})}),Object(O.jsx)("div",{className:"menu-toggle",onClick:this.toggleMenu.bind(this),children:Object(O.jsx)("div",{className:"hamburger "+(this.state.isMenuToggleOn?"hamburger--open ":" ")})})]})})}}]),t}(a.a.Component),p=(t(33),Object(c.lazy)((function(){return t.e(8).then(t.bind(null,84))}))),x=Object(c.lazy)((function(){return t.e(9).then(t.bind(null,88))})),m=Object(c.lazy)((function(){return t.e(7).then(t.bind(null,86))})),g=Object(c.lazy)((function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,89))})),f=Object(c.lazy)((function(){return Promise.all([t.e(0),t.e(5),t.e(6)]).then(t.bind(null,87))})),v=function(){var e=Object(c.useRef)();return Object(O.jsx)("div",{className:"app",children:Object(O.jsxs)(r.a,{children:[Object(O.jsx)(d,{ref:e}),Object(O.jsxs)(r.d,{children:[Object(O.jsx)(r.b,{exact:!0,path:"/weekly-winner",component:m}),Object(O.jsx)(r.b,{exact:!0,path:"/actors",component:x}),Object(O.jsx)(r.b,{exact:!0,path:"/vote",component:g}),Object(O.jsx)(r.b,{exact:!0,path:"/chat",component:f}),Object(O.jsx)(r.b,{component:p})]})]})})},k=function(e){e&&e instanceof Function&&t.e(10).then(t.bind(null,85)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),s(e),i(e)}))},y=(t(34),function(e){Object(j.a)(t,e);var n=Object(u.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"spinner-wrapper",children:Object(O.jsx)("svg",{className:"spinner",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("circle",{cx:"50",cy:"50",r:"45"})})})}}]),t}(a.a.Component));i.a.render(Object(O.jsx)(c.Suspense,{fallback:Object(O.jsx)(y,{}),children:Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(v,{})})}),document.getElementById("root")),k()}},[[35,2,3]]]);
//# sourceMappingURL=main.5ccbed86.chunk.js.map