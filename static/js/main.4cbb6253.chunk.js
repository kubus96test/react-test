(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),c=n(4),a=n.n(c),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))},i=n(2),l=n(3),d=n(1),u=function(e){var t=e.children;return Object(d.jsx)("div",{className:"intro__wrapper",children:t})},j=function(e){var t=e.children,n=e.isIntro,s=e.restartGame;return Object(d.jsxs)("div",{className:"header__wrap",children:[Object(d.jsxs)("div",{className:"header__title",children:["Quiz ",n?null:Object(d.jsx)("img",{onClick:s,src:"./assets/zamknij_x.svg",alt:"zamknij"})]}),Object(d.jsx)("div",{className:"header__subtitle",children:t})]})},b=function(e){var t=e.name,n=void 0===t?null:t,s=(e.id,e.logo),r=void 0===s?null:s,c=(e.setCategory,e.selected),a=void 0===c?"":c;return Object(d.jsxs)("div",{className:"category__wrap".concat(a),children:[Object(d.jsx)("div",{className:"category__logo",children:Object(d.jsx)("img",{src:r,alt:"logo"})}),Object(d.jsx)("div",{className:"category__title",children:n})]})},m=function(e){var t=e.children,n=e.category,r=e.setCategory,c=e.renderHeader,a=Object(s.useState)(null),o=Object(l.a)(a,2),u=o[0],j=o[1];return Object(s.useEffect)((function(){fetch("./data.json").then((function(e){return e.json()})).then((function(e){j(e.categories[n.toLowerCase()].backgrounds.selected)}))}),[]),Object(d.jsxs)("div",{className:"selected__wrapper",style:{backgroundImage:'url("'.concat(u,'")'),backgroundSize:"cover"},children:[c(),Object(d.jsxs)("div",{className:"selected__content",children:[Object(d.jsx)("div",{className:"selected__item",children:t}),Object(d.jsxs)("button",{className:"forward__wrap",onClick:function(){r((function(e){return Object(i.a)(Object(i.a)({},e),{},{started:!0})}))},children:[Object(d.jsx)("div",{className:"forward__text",children:"ROZPOCZNIJ"}),Object(d.jsx)("img",{src:"./assets/button_strza\u0142ka.svg",alt:"rozpocznij"})]})]})]})},p=n(6),O=n(5),g=function(e){var t=e.content,n=e.chosenAnswer,s=void 0!==n&&n,r=e.letter,c=e.checkNormalQuestion,a=e.allowClicking,o="normal-question__answer";return s.content==t&&(o=s.correct?"normal-question__answer--right":"normal-question__answer--wrong"),Object(d.jsxs)("div",{className:o,onClick:function(){a&&c(t)},children:[r," ",t]})},h=function(e){var t=e.value,n=e.index;return Object(d.jsx)(O.b,{draggableId:t,index:n,children:function(e){return Object(d.jsx)("div",Object(i.a)(Object(i.a)(Object(i.a)({className:"dragable-question__dragable"},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,children:t}))}})},_=function(e){var t=e.category,n=e.setFinished,r=e.movePointsUp,c=e.renderHeader,a=Object(s.useState)({category:t.toLowerCase(),number:0,type:null,totalQuestions:null,content:null,examples:[],answers:{"A.":null,"B.":null,"C.":null,"D.":null,"E.":null},myDroppedAnswers:{},correct:null,points:0}),o=Object(l.a)(a,2),u=o[0],j=o[1],b=Object(s.useState)({correct:null,content:null}),m=Object(l.a)(b,2),_=m[0],x=m[1],f=Object(s.useState)(!0),v=Object(l.a)(f,2),w=v[0],y=v[1],N=Object(s.useState)(null),k=Object(l.a)(N,2),D=k[0],A=k[1],I=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];fetch("./data.json").then((function(e){return e.json()})).then((function(t){var n=t.categories[u.category].questions["q".concat(u.number+1)];"DragNDrop"==n.type?A(t.categories[u.category].backgrounds.dragable):"normal"==n.type&&A(t.categories[u.category].backgrounds.normal),j((function(s){return Object(i.a)(Object(i.a)({},s),{},{number:s.number+1,totalQuestions:0==s.number?Object.keys(t.categories[u.category].questions).length:s.totalQuestions,content:n.question,examples:"DragNDrop"==n.type?n.examples:null,answers:{"A.":n.answers[0],"B.":n.answers[1],"C.":n.answers[2],"D.":n.answers[3],"E.":n.answers[4]},myDroppedAnswers:"DragNDrop"==n.type?n.examples.reduce((function(e,t){return e[t]="",e}),{}):null,correct:n.correct,points:e?s.points+1:s.points,type:n.type})})),y(!0)}))},C=function(e){u.number<u.totalQuestions?e==u.correct?(x({content:e,correct:!0}),y(!1),setTimeout((function(){I(!0)}),3e3)):(x({content:e,correct:!1}),y(!1),setTimeout((function(){I(!1)}),3e3)):e==u.correct?(x({content:e,correct:!0}),y(!1),setTimeout((function(){j((function(e){return Object(i.a)(Object(i.a)({},e),{},{points:e.points+1})})),n(!0),r({got:u.points+1,max:u.totalQuestions})}),3e3)):(x({content:e,correct:!1}),y(!1),setTimeout((function(){n(!0),r({got:u.points,max:u.totalQuestions})}),3e3))};return Object(s.useEffect)((function(){I()}),[]),Object(s.useEffect)((function(){if("DragNDrop"==u.type){for(var e=!0,t=0;t<Object.keys(u.myDroppedAnswers).length;t++)0==u.myDroppedAnswers[Object.keys(u.myDroppedAnswers)[t]].length&&(e=!1);1==e&&function(){var e=!0,t=0;for(var n in u.myDroppedAnswers)u.correct[t]!=u.myDroppedAnswers[n]&&(e=!1),t++;1==e?setTimeout((function(){I(!0)}),2e3):setTimeout((function(){I()}),2e3)}()}}),[u.myDroppedAnswers]),Object(d.jsxs)("div",{className:"question__wrapper",style:{backgroundImage:'url("'.concat(D,'")'),backgroundSize:"cover"},children:[c(u.type,u.number,u.totalQuestions),Object(d.jsxs)("div",{className:"question__content",children:[Object(d.jsxs)("div",{className:"question__text",children:[u.number,". ",u.content]}),"normal"==u.type?Object(d.jsx)("div",{className:"normal-question__answers-wrap",children:Object.keys(u.answers).map((function(e){return Object(d.jsx)(g,{content:u.answers[e],chosenAnswer:{content:_.content,correct:_.correct},letter:e,checkNormalQuestion:C,allowClicking:w},e)}))}):Object(d.jsx)(O.a,{onDragEnd:function(e){var t=e.destination,n=e.source,s=e.draggableId;if(t&&(t.droppableId!==n.droppableId||t.index!==n.index)&&("start"!=t.droppableId||"start"!=n.droppableId)&&!(u.myDroppedAnswers[t.droppableId].length>0)&&t.droppableId!==n.droppableId){var r=[];for(var c in u.answers)r.push(u.answers[c]);r.splice(n.index,1);var a={A:null,B:null,C:null,D:null},o=0;for(var l in a)a[l]=r[o],o++;j((function(e){return Object(i.a)(Object(i.a)({},e),{},{answers:a,myDroppedAnswers:Object(i.a)(Object(i.a)({},e.myDroppedAnswers),{},Object(p.a)({},t.droppableId,s))})}))}},children:Object(d.jsxs)("div",{className:"dragable-question__answers-wrap",children:[Object(d.jsx)("div",{className:"dragable-question__dropables-wrap",children:u.examples.map((function(e,t){return Object(d.jsx)(O.c,{droppableId:e,children:function(n){for(var s="dragable-question__dropable",r=0,c=0;c<Object.keys(u.myDroppedAnswers).length;c++)0!=u.myDroppedAnswers[Object.keys(u.myDroppedAnswers)[c]].length&&r++;return r==Object.keys(u.myDroppedAnswers).length&&(u.correct[t]==u.myDroppedAnswers[Object.keys(u.myDroppedAnswers)[t]]?s="dragable-question__dropable--right":u.correct[t]!=u.myDroppedAnswers[Object.keys(u.myDroppedAnswers)]&&u.myDroppedAnswers[Object.keys(u.myDroppedAnswers)[t]].length>0&&(s="dragable-question__dropable--wrong")),Object(d.jsxs)("div",Object(i.a)(Object(i.a)({className:s,ref:n.innerRef},n.droppableProps),{},{children:[Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("span",{children:[e," - "]})," ",Object(d.jsx)("span",{children:u.myDroppedAnswers[Object.keys(u.myDroppedAnswers)[t]]})]}),n.placeholder]}))}},e)}))}),Object(d.jsx)(O.c,{droppableId:"start",children:function(e){return Object(d.jsxs)("div",Object(i.a)(Object(i.a)({className:"dragable-question__dragables-wrap",ref:e.innerRef},e.droppableProps),{},{children:[Object.keys(u.answers).map((function(e,t){if(null!=u.answers[e])return Object(d.jsx)(h,{value:u.answers[e],index:t},u.answers[e])})),e.placeholder]}))}})]})})]})]})},x=function(e){var t=e.children,n=e.category,r=e.categories,c=e.points,a=e.max,o=e.tryAgain,i=e.restartGame,u=Object(s.useState)([]),j=Object(l.a)(u,2),m=j[0],p=j[1],O=Object(s.useState)(null),g=Object(l.a)(O,2),h=g[0],_=g[1];Object(s.useEffect)((function(){for(var e=[],t=0;t<r.length;t++)r[t].name!=n.name&&e.push(r[t]),p(e)}),[]);return Object(s.useEffect)((function(){fetch("./data.json").then((function(e){return e.json()})).then((function(e){_(e.categories[n.name.toLowerCase()].backgrounds.result)}))}),[]),Object(d.jsxs)("div",{className:"result__wrapper",style:{backgroundImage:'url("'.concat(h,'")'),backgroundSize:"cover"},children:[Object(d.jsx)("div",{className:"result__header",children:Object(d.jsxs)("div",{className:"result__title",children:["Quiz ",Object(d.jsx)("img",{onClick:i,src:"./assets/zamknij_x.svg",alt:"zamknij"})]})}),Object(d.jsxs)("div",{className:"result__content",children:[Object(d.jsxs)("div",{className:"result__left-section",children:[Object(d.jsx)("div",{className:"result__left-top"}),Object(d.jsx)("div",{className:"result__left-middle",children:Object(d.jsx)("div",{className:"result__stripe",children:"TW\xd3J WYNIK"})}),Object(d.jsx)("div",{className:"result__left-bottom"})]}),Object(d.jsxs)("div",{className:"result__middle-section",children:[Object(d.jsx)("div",{className:"result__middle-top",children:t}),Object(d.jsx)("div",{className:"result__middle-middle",children:Object(d.jsxs)("div",{className:"result__number",children:[c,"/",a]})}),Object(d.jsx)("div",{className:"result__middle-bottom",children:Object(d.jsxs)("button",{className:"repeat__wrap",onClick:function(){o(n.id,n.name)},children:[Object(d.jsx)("div",{className:"repeat__text",children:"POWT\xd3RZ QUIZ"}),Object(d.jsx)("img",{src:"./assets/button_strza\u0142ka.svg"})]})})]}),Object(d.jsxs)("div",{className:"result__right-section",children:[Object(d.jsx)("div",{className:"result__other",children:"WYBIERZ INN\u0104 KATEGORI\u0118:"}),Object(d.jsx)("div",{class:"result__items-wrap",children:m.map((function(e){return Object(d.jsx)("div",{className:"result__item",onClick:function(){o(e.id,e.name)},children:Object(d.jsx)(b,{name:e.name,logo:e.logo})},e.name)}))})]})]})]})},f=function(){var e=Object(s.useState)({id:null,name:null,started:!1}),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)([]),a=Object(l.a)(c,2),o=a[0],p=a[1],O=Object(s.useState)(!1),g=Object(l.a)(O,2),h=g[0],f=g[1],v=Object(s.useState)({got:0,max:0}),w=Object(l.a)(v,2),y=w[0],N=w[1],k=null;return Object(s.useEffect)((function(){fetch("./data.json").then((function(e){return e.json()})).then((function(e){var t=[],n=0;for(var s in e.categories)n++,t.push({id:n,name:s.toUpperCase(),logo:"".concat(e.categories[s].logo)});p(t)}))}),[]),k=n.name?n.started?h?Object(d.jsx)(x,{category:n,categories:o,points:y.got,max:y.max,tryAgain:function(e,t){r({id:e,name:t,started:!1}),f(!1),N({got:0,max:0})},restartGame:function(){r({id:null,name:null,started:null}),N({got:null,max:null}),f(null)},children:Object(d.jsx)(b,{name:n.name,logo:o[n.id-1].logo,selected:"--selected"})}):Object(d.jsx)(_,{category:n.name,setFinished:f,movePointsUp:N,renderHeader:function(e,t,n){return Object(d.jsxs)(j,{restartGame:function(){r({id:null,name:null,started:null}),N({got:0,max:0})},children:["normal"==e?Object(d.jsx)("span",{className:"question__subtitle",children:"Wybierz prawid\u0142ow\u0105 odpowied\u017a"}):Object(d.jsx)("span",{className:"question__subtitle",children:"Przeci\u0105gnij prawid\u0142ow\u0105 odpowied\u017a w puste miejsce"}),Object(d.jsx)("div",{className:"question__number-wrap",children:Object(d.jsxs)("div",{className:"question__number",children:[t,"/",n]})})]})}}):Object(d.jsx)(m,{category:n.name,setCategory:r,renderHeader:function(){return Object(d.jsx)(j,{restartGame:function(){return r({id:null,name:null,started:null})},children:Object(d.jsx)(d.Fragment,{children:"Wybrana kategoria:"})})},children:Object(d.jsx)(b,{name:n.name,logo:o[n.id-1].logo,selected:"--selected"})}):Object(d.jsxs)(u,{children:[Object(d.jsx)(j,{isIntro:!0,children:Object(d.jsx)(d.Fragment,{children:"10 pyta\u0144/5 kategorii"})}),Object(d.jsx)("div",{className:"intro__content",children:o.map((function(e,t){return Object(d.jsx)("div",{className:"intro__item",onClick:function(){r((function(t){return Object(i.a)(Object(i.a)({},t),{},{id:e.id,name:e.name})}))},children:Object(d.jsx)(b,{name:e.name,logo:e.logo,id:e.id,setCategory:r},e.name)},t)}))})]}),Object(d.jsx)(d.Fragment,{children:k})},v=(n(19),function(){return Object(d.jsx)("div",{children:Object(d.jsx)(f,{})})});a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),o()}},[[20,1,2]]]);
//# sourceMappingURL=main.4cbb6253.chunk.js.map