(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{c1QY:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),r=a.n(l),c=(a("Wbzz"),a("aCnj")),n=a("CN8t"),s=(a("KKXr"),a("fnl6"),a("yMbf"),a("g1Ie"),a("YwZP"));var o=function(e){var t,a;function l(t){var a;return(a=e.call(this,t)||this).showType=void 0,a.showOverview=function(){a.setState({showType:1})},a.headSet=function(){var e=a.state.mastercoaches;return r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"title-holder"},r.a.createElement("h2",null,e.coachname),r.a.createElement("span",{className:"designation"},e.text)),r.a.createElement("div",{className:"btn-holder"},r.a.createElement("a",{href:"#",className:"btn btn-border"},"Sample Play Lesson 1")))},a.overView=function(){var e=a.state.mastercoaches.Overview;return r.a.createElement("div",null,r.a.createElement("h3",null,e.heading),r.a.createElement("p",null,e.detail),r.a.createElement("p",null,e.detail1),r.a.createElement("p",null,e.detail2),r.a.createElement("p",null,e.detail3))},a.getLessons=function(){return a.state.mastercoaches.lesson.arrayoflesson.map((function(e,t){return r.a.createElement("article",{className:"lesson-article",key:t},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"img-box"},r.a.createElement("img",{src:e.image,width:"264",height:"185",alt:"img description"}),r.a.createElement("span",{className:"text"},e.timefram)),r.a.createElement("div",{className:"text-box"},r.a.createElement("h3",null,e.heading),r.a.createElement("strong",{className:"subtitle"},e.subheading),r.a.createElement("p",null,e.detail))))}))},a.getQA=function(){return a.state.mastercoaches.qandaa.overviewarray.map((function(e,t){return r.a.createElement("div",{className:"que-ans"},r.a.createElement("h3",null,e.heading),r.a.createElement("p",null,e.detail))}))},a.showSelected=function(){s.globalHistory.location.href.split("#")[1]},a.getPopup=function(){return r.a.createElement("div",{class:"popup-holder"},r.a.createElement("a",{class:"btn-close"},r.a.createElement("i",{class:"icon-cross",onClick:a.popUp})),r.a.createElement("div",{class:"popup"},r.a.createElement("div",{class:"img-holder"},r.a.createElement("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/LKFuXETZUsI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),r.a.createElement("div",{class:"text-holder"},r.a.createElement("div",{class:"text-box"},r.a.createElement("h3",null,"John Doe"),r.a.createElement("h2",null,"Class One"),r.a.createElement("span",{class:"designation"},"COACHES")),r.a.createElement("div",{class:"btn-holder"},r.a.createElement("a",{href:"#",class:"btn btn-border"},"Explore the Class"),r.a.createElement("a",{href:"#",class:"btn btn-border"},"Share the Trailer"),r.a.createElement("a",{href:"#",class:"btn"},"Book Discovery Call")))))},a.popUp=function(){Object(s.navigate)("/mastercoachdetail#tab-01"),a.setState({showPopup:!a.state.showPopup})},a.state={mastercoaches:"",showType:0,showPopup:!1},a}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=l.prototype;return c.componentDidMount=function(){this.setState({mastercoaches:JSON.parse(localStorage.getItem("selected"))})},c.render=function(){return r.a.createElement("div",{className:"main-block"},r.a.createElement("section",{className:"coaches-info"},r.a.createElement("img",{className:"circle-shape",src:"images/circle-img10.svg",width:"505",height:"505",alt:"img description"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section-header"},r.a.createElement("h1",{className:"heading-border"},"master",r.a.createElement("strong",null,"coach"))),r.a.createElement("div",{className:"detail-holder"},r.a.createElement("div",{className:"img-col"},r.a.createElement("div",{className:"img-box"},r.a.createElement("img",{src:this.state.mastercoaches.coachimage,width:"385",height:"385",alt:"img description"})),r.a.createElement("a",{className:"btn-watch",onClick:this.popUp},"Watch trailer")),r.a.createElement("div",{className:"text-col"},this.headSet(),r.a.createElement("div",{className:"tabset-holder"},r.a.createElement("ul",{className:"tabset"},r.a.createElement("li",{className:"tab-01"==s.globalHistory.location.href.split("#")[1]?"active":""},r.a.createElement("a",{href:"#tab-01",onClick:this.showSelected},"Overview")),r.a.createElement("li",{className:"tab-02"==s.globalHistory.location.href.split("#")[1]?"active":""},r.a.createElement("a",{href:"#tab-02",onClick:this.showSelected},"Lessons")),r.a.createElement("li",{className:"tab-03"==s.globalHistory.location.href.split("#")[1]?"active":""},r.a.createElement("a",{href:"#tab-03"},"Q & A"))),r.a.createElement("div",{className:"tab-content"},"tab-01"==s.globalHistory.location.href.split("#")[1]?r.a.createElement("div",{id:"tab-01"},this.overView()):"tab-02"==s.globalHistory.location.href.split("#")[1]?r.a.createElement("div",{id:"tab-02"},this.getLessons()):"tab-03"==s.globalHistory.location.href.split("#")[1]?r.a.createElement("div",{id:"tab-03"},this.getQA()):""))))),this.state.showPopup&&this.state.showPopup?r.a.createElement("div",null,this.getPopup()):""),r.a.createElement("section",{class:"contact-form"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"text-area"},r.a.createElement("h2",{class:"h1 heading-border lowercase"},"Book a Discovery Call."),r.a.createElement("h3",null,"Want to explore the possibilities?"),r.a.createElement("a",{href:"#",class:"btn"},"book now")),r.a.createElement("form",{action:"#",class:"form-area"},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"name"},"Name:"),r.a.createElement("input",{id:"name",class:"form-control",type:"text",placeholder:"Enter your name..."})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"email"},"Email:"),r.a.createElement("input",{id:"email",class:"form-control",type:"email",placeholder:"Enter your email..."})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"phone"},"Phone:"),r.a.createElement("input",{id:"phone",class:"form-control",type:"text",placeholder:"Enter your phone..."})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"note"},"Notes:"),r.a.createElement("textarea",{id:"note",class:"form-control",placeholder:"Enter your notes..."})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"contact"},"Best time to contact:"),r.a.createElement("div",{class:"input-row"},r.a.createElement("input",{id:"contact",class:"form-control",type:"text",placeholder:"04-04-2020"}),r.a.createElement("input",{class:"form-control",type:"text",placeholder:"10:00 AM"})))))))},l}(l.Component);t.default=function(){return r.a.createElement("div",null,r.a.createElement(c.a,null),r.a.createElement(o,null),r.a.createElement(n.a,null))}}}]);
//# sourceMappingURL=component---src-pages-mastercoachdetail-js-5385c7d49b548dbe4e12.js.map