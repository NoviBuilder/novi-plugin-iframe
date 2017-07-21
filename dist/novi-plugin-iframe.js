module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),i=r(o),a=n(4),u=r(a),c=novi.react.React,l={name:"novi-plugin-iframe",title:"Novi Iframe",description:"Novi Iframe description",version:"1.0.2",dependencies:{},defaults:{querySelector:"iframe[src]"},ui:{editor:[i.default],settings:c.createElement(u.default,null)}};novi.plugins.register(l)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){e[0].src!==e[0].oldSrc&&novi.element.setAttribute(e[0].element,"src",e[0].src)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),a=r(i),u=n(3),c=r(u),l=novi.react.React,s={trigger:l.createElement(a.default,null),tooltip:"Change Iframe Source",header:[l.createElement(c.default,null)],closeIcon:"submit",width:300,onSubmit:o,title:"Edit iframe source"};t.default=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=novi.ui.icon,u=novi.ui.icons,c=novi.react.React,l=novi.react.Component,s=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return o(t,e),i(t,[{key:"render",value:function(){return c.createElement(a,null,u.ICON_IFRAME)}}]),t}(l);t.default=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=novi.ui.icon,u=novi.ui.input,c=novi.ui.icons,l=novi.react.React,s=novi.react.Component,f=function(e){function t(e){n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),i=novi.element.getAttribute(e.element,"src");return o.state={src:i,oldSrc:i,element:e.element},o._handleLinkChange=o._handleLinkChange.bind(o),o}return o(t,e),i(t,[{key:"render",value:function(){return l.createElement("div",{className:"novi-link-tool"},l.createElement(a,null,c.ICON_IFRAME),l.createElement("div",{className:"link-tool-input-warp",style:{width:210}},l.createElement(u,{onChange:this._handleLinkChange,value:this.state.src})))}},{key:"_handleLinkChange",value:function(e){var t=void 0,n=void 0,r=void 0,o=void 0;t=e.target.value,o=e.target.value,n=t.indexOf("youtube"),n&&(r=t.split("?v=")[1])&&r.length&&(o="http://www.youtube.com/embed/"+r),this.setState({src:o})}}]),t}(s);t.default=f},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=novi.react.React,u=novi.react.Component,c=novi.ui.input,l=novi.ui.button,s=function(e){function t(e){n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.state={settings:e.settings},o.saveSettings=o.saveSettings.bind(o),o.onChange=o.onChange.bind(o),o}return o(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({settings:e.settings})}},{key:"render",value:function(){return a.createElement("div",null,a.createElement("span",{style:{letterSpacing:"0,0462em"}},"Iframe Plugin"),a.createElement("div",{style:{fontSize:13,color:"#6E778A",marginTop:21}},"Apply this plugin to elements which are matching selector:"),a.createElement(c,{style:{marginTop:10,width:340},value:this.state.settings.querySelector,onChange:this.onChange}),a.createElement("div",{style:{marginTop:30}},a.createElement(l,{type:"primary",messages:{textContent:"Save Settings"},onClick:this.saveSettings})))}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({settings:{querySelector:t}})}},{key:"saveSettings",value:function(){novi.plugins.settings.update("novi-plugin-iframe",this.state.settings)}}]),t}(u);t.default=s}]);