(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"nn+G":function(e){e.exports=JSON.parse('{"mainheading":"BEBOLDMOBILEAPP","detail":"Connect with coaches, download videos, see support files and more from our mobile app.","section1":{"slider":[{"image":"/images/img33.jpg"},{"image":"/images/img34.jpg"},{"image":"/images/img35.jpg"},{"image":"/images/img36.jpg"},{"image":"/images/img33.jpg"},{"image":"/images/img34.jpg"},{"image":"/images/img35.jpg"},{"image":"/images/img36.jpg"}],"appstoreimage":"/images/btn-app-store.png","googleplayimage":"/images/btn-google-play.png"},"section2":{"image":"/images/img37.jpg","heading":"Get Beta Access to the Mobile App:","text":"Enter your email...","buttontext":"Request Access"}}')},y9VM:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),s=a.n(n),i=a("aCnj"),r=(a("fnl6"),a("nn+G")),o=a("hWpC"),l=a.n(o),c=(a("91GP"),a("OS56")),m=a.n(c);var p=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).setSliderData=function(){a.setState({sliders:a.props.sliderData})},a.getSliderImages=function(){return a.state.sliders.slider.map((function(e,t){return s.a.createElement("div",{className:"slide",key:t},s.a.createElement("div",{className:"img-holder"},s.a.createElement("img",{src:e.image,width:"285",height:"500",alt:"img description"})))}))},a.state={sliders:""},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.UNSAFE_componentWillMount=function(){this.setSliderData()},i.render=function(){return s.a.createElement("section",{className:"app-section"},s.a.createElement("img",{className:"circle-shape",src:"/images/circle-img09.svg",width:"505",height:"505",alt:"img description"}),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"section-header"},s.a.createElement("h2",{className:"h1 heading-border"},"BE",s.a.createElement("strong",null,"BOLD"),"MOBILE",s.a.createElement("strong",null,"APP")),s.a.createElement("p",null,"Connect with coaches, download videos, see support files and more from our mobile app.")),s.a.createElement("div",{className:"app-slider"},s.a.createElement("div",{className:"slideset"},s.a.createElement(m.a,Object.assign({},{dots:!0,infinite:!0,rows:0,speed:1e3,slidesToShow:4,slidesToScroll:1,PauseOnHover:!1,adaptiveHeight:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}}]},{className:"app_slider"}),this.getSliderImages()))),s.a.createElement("div",{className:"btn-holder"},s.a.createElement("a",{className:"btn-app",href:"#"},s.a.createElement("img",{src:this.state.sliders.appstoreimage,width:"120",height:"40",alt:"appstore"})),s.a.createElement("a",{className:"btn-app google-play",href:"#"},s.a.createElement("img",{src:this.state.sliders.googleplayimage,width:"135",height:"40",alt:"googleplay"})))))},n}(n.Component);var g=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).setBanner=function(){a.setState({banner:a.props.request})},a.state={banner:""},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.UNSAFE_componentWillMount=function(){this.setBanner()},i.render=function(){return s.a.createElement("div",{className:"get-access",style:{backgroundImage:"url(images/img37.jpg)"}},s.a.createElement("div",{className:"container"},s.a.createElement("form",{action:"#",className:"access-form"},s.a.createElement("div",{className:"input-col"},s.a.createElement("i",{className:"ico icon-tablet-mobile"}),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"email"},this.state.banner.heading),s.a.createElement("input",{id:"email",className:"form-control bg-dark",type:"text",placeholder:this.state.banner.text}))),s.a.createElement("div",{className:"btn-holder"},s.a.createElement("button",{className:"btn",type:"submit"},this.state.banner.buttontext)))))},n}(n.Component);var d=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).setApp=function(){a.setState({appData:r})},a.smooth=function(e){a.setState({activeData:e})},a.state={appData:"",activeData:1},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.UNSAFE_componentWillMount=function(){this.setApp()},i.render=function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{class:"fixed-block"},s.a.createElement("ul",{class:"fix-pagination"},s.a.createElement("li",{onClick:function(){return e.smooth(1)},className:this.state.activeData&&1==this.state.activeData?"active":""},s.a.createElement("a",{onClick:function(){return l()(e.first,{offset:0,align:"top",duration:1500})}})),s.a.createElement("li",{className:this.state.activeData&&2==this.state.activeData?"active":"",onClick:function(){return e.smooth(2)}},s.a.createElement("a",{onClick:function(){return l()(e.second,{offset:0,align:"top",duration:1500})}}))),s.a.createElement("span",{class:"counter"}),s.a.createElement("i",{class:"icon-arrow-down"}," "),s.a.createElement("strong",{class:"title"},"Explore & ",s.a.createElement("span",null,"BE"),"BOLD")),s.a.createElement("main",{id:"main"},s.a.createElement(p,{ref:function(t){e.first=t},sliderData:this.state.appData.section1}),s.a.createElement(g,{ref:function(t){e.second=t},request:this.state.appData.section2})))},n}(n.Component),u=a("CN8t");t.default=function(){return s.a.createElement("div",null,s.a.createElement(i.a,null),s.a.createElement(d,null),s.a.createElement(u.a,null))}}}]);
//# sourceMappingURL=component---src-pages-app-js-03272547256568341489.js.map