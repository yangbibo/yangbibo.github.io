(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1054:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(){var e=window.location.href,t="",n={};if(e.indexOf("?")>-1){t=e.indexOf("?")+1;var r=e.substr(t).split("&");r&&r.length>0&&r.forEach(function(e){var t=e.split("=");n[t[0]]=t[1]})}return n}},1227:function(e,t,n){"use strict";n.r(t);n(124);var r=n(42),a=(n(710),n(711)),o=(n(154),n(25)),c=(n(296),n(206)),i=n(30),l=n(31),s=n(33),u=n(32),p=n(34),d=n(0),f=n.n(d),m=n(1054),b=n(80),y=n(63),v=n(814),h=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={id:""},n.handleFinish=function(){c.a.confirm({title:"\u63d0\u4ea4\u786e\u8ba4",content:"\u8bf7\u786e\u8ba4\u662f\u5426\u5b8c\u6210\u5e76\u63d0\u4ea4\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){Object(y.a)("/ybt/form/task/lauch/submit",{formTaskId:n.state.id}).then(function(e){e.success?(console.log(e),c.a.success({title:"\u586b\u62a5\u5df2\u5b8c\u6210",content:"\u8bf7\u524d\u5f80\u6211\u7684\u586b\u62a5\u4efb\u52a1\u67e5\u770b\u8fdb\u5ea6",okText:"\u786e\u5b9a",onOk:function(){n.props.history.push("/myFillingTask")}})):o.a.error(e.obj)})}})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)();this.setState({type:e.type,id:e.id||""})}},{key:"render",value:function(){var e=this;return f.a.createElement("div",{style:{padding:20}},f.a.createElement(a.a,{title:"\u586b\u62a5\u9884\u89c8",style:{height:"calc(100vh - 170px)"},bodyStyle:{height:"calc(100vh - 225px)",padding:0}},this.state.id&&f.a.createElement(v.a,{id:this.state.id,type:"formTaskId"})),f.a.createElement("div",{style:{marginTop:10,textAlign:"right"}},f.a.createElement(r.a,{onClick:function(){e.props.history.push("/myFillingTask/step2?id=".concat(e.state.id,"&type=fill"))},type:"primary",ghost:!0,style:{marginRight:8}},"\u4e0a\u4e00\u6b65"),f.a.createElement(r.a,{onClick:function(){e.handleFinish()},type:"primary",style:{marginRight:8}},"\u5b8c\u6210"),f.a.createElement(r.a,{onClick:function(){e.props.history.push("/myFillingTask")},style:{marginRight:40}},"\u53d6\u6d88")))}}]),t}(d.Component);t.default=Object(b.g)(h)},613:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(642);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}},642:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return r})},652:function(e,t,n){"use strict";n(56),n(638)},653:function(e,t,n){"use strict";n(56),n(638)},654:function(e,t,n){"use strict";var r=n(872);t.a=r.a},655:function(e,t,n){"use strict";var r=n(873);t.a=r.a},710:function(e,t,n){"use strict";n(56),n(719),n(733),n(652),n(653)},711:function(e,t,n){"use strict";var r=n(0),a=n(3),o=n.n(a),c=n(24),i=n(86);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},u=function(e){return r.createElement(i.a,null,function(t){var n,a,c,i=t.getPrefixCls,u=e.prefixCls,p=e.className,d=e.hoverable,f=void 0===d||d,m=s(e,["prefixCls","className","hoverable"]),b=i("card",u),y=o()("".concat(b,"-grid"),p,(n={},a="".concat(b,"-grid-hoverable"),c=f,a in n?Object.defineProperty(n,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[a]=c,n));return r.createElement("div",l({},m,{className:y}))})};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},f=function(e){return r.createElement(i.a,null,function(t){var n=t.getPrefixCls,a=e.prefixCls,c=e.className,i=e.avatar,l=e.title,s=e.description,u=d(e,["prefixCls","className","avatar","title","description"]),f=n("card",a),m=o()("".concat(f,"-meta"),c),b=i?r.createElement("div",{className:"".concat(f,"-meta-avatar")},i):null,y=l?r.createElement("div",{className:"".concat(f,"-meta-title")},l):null,v=s?r.createElement("div",{className:"".concat(f,"-meta-description")},s):null,h=y||v?r.createElement("div",{className:"".concat(f,"-meta-detail")},y,v):null;return r.createElement("div",p({},u,{className:m}),b,h)})},m=n(739),b=n(654),y=n(655),v=n(14);function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",function(){return T});var I=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var T=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=E(this,w(t).apply(this,arguments))).onTabChange=function(t){e.props.onTabChange&&e.props.onTabChange(t)},e.renderCard=function(t){var n,a,i,l=t.getPrefixCls,s=e.props,u=s.prefixCls,p=s.className,d=s.extra,f=s.headStyle,v=void 0===f?{}:f,h=s.bodyStyle,j=void 0===h?{}:h,E=s.title,w=s.loading,k=s.bordered,T=void 0===k||k,C=s.size,S=void 0===C?"default":C,P=s.type,N=s.cover,x=s.actions,_=s.tabList,D=s.children,A=s.activeTabKey,H=s.defaultActiveTabKey,F=s.tabBarExtraContent,J=I(s,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent"]),K=l("card",u),R=o()(K,p,(O(n={},"".concat(K,"-loading"),w),O(n,"".concat(K,"-bordered"),T),O(n,"".concat(K,"-hoverable"),e.getCompatibleHoverable()),O(n,"".concat(K,"-contain-grid"),e.isContainGrid()),O(n,"".concat(K,"-contain-tabs"),_&&_.length),O(n,"".concat(K,"-").concat(S),"default"!==S),O(n,"".concat(K,"-type-").concat(P),!!P),n)),z=0===j.padding||"0px"===j.padding?{padding:24}:void 0,B=r.createElement("div",{className:"".concat(K,"-loading-content"),style:z},r.createElement(b.a,{gutter:8},r.createElement(y.a,{span:22},r.createElement("div",{className:"".concat(K,"-loading-block")}))),r.createElement(b.a,{gutter:8},r.createElement(y.a,{span:8},r.createElement("div",{className:"".concat(K,"-loading-block")})),r.createElement(y.a,{span:15},r.createElement("div",{className:"".concat(K,"-loading-block")}))),r.createElement(b.a,{gutter:8},r.createElement(y.a,{span:6},r.createElement("div",{className:"".concat(K,"-loading-block")})),r.createElement(y.a,{span:18},r.createElement("div",{className:"".concat(K,"-loading-block")}))),r.createElement(b.a,{gutter:8},r.createElement(y.a,{span:13},r.createElement("div",{className:"".concat(K,"-loading-block")})),r.createElement(y.a,{span:9},r.createElement("div",{className:"".concat(K,"-loading-block")}))),r.createElement(b.a,{gutter:8},r.createElement(y.a,{span:4},r.createElement("div",{className:"".concat(K,"-loading-block")})),r.createElement(y.a,{span:3},r.createElement("div",{className:"".concat(K,"-loading-block")})),r.createElement(y.a,{span:16},r.createElement("div",{className:"".concat(K,"-loading-block")})))),M=void 0!==A,G=(O(a={},M?"activeKey":"defaultActiveKey",M?A:H),O(a,"tabBarExtraContent",F),a),U=_&&_.length?r.createElement(m.a,g({},G,{className:"".concat(K,"-head-tabs"),size:"large",onChange:e.onTabChange}),_.map(function(e){return r.createElement(m.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})})):null;(E||d||U)&&(i=r.createElement("div",{className:"".concat(K,"-head"),style:v},r.createElement("div",{className:"".concat(K,"-head-wrapper")},E&&r.createElement("div",{className:"".concat(K,"-head-title")},E),d&&r.createElement("div",{className:"".concat(K,"-extra")},d)),U));var q=N?r.createElement("div",{className:"".concat(K,"-cover")},N):null,L=r.createElement("div",{className:"".concat(K,"-body"),style:j},w?B:D),Q=x&&x.length?r.createElement("ul",{className:"".concat(K,"-actions")},function(e){return e.map(function(t,n){return r.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},r.createElement("span",null,t))})}(x)):null,V=Object(c.a)(J,["onTabChange","noHovering","hoverable"]);return r.createElement("div",g({},V,{className:R}),i,q,L,Q)},e}var n,a,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){"noHovering"in this.props&&(Object(v.a)(!this.props.noHovering,"Card","`noHovering` is deprecated, you can remove it safely or use `hoverable` instead."),Object(v.a)(!!this.props.noHovering,"Card","`noHovering={false}` is deprecated, use `hoverable` instead."))}},{key:"getCompatibleHoverable",value:function(){var e=this.props,t=e.noHovering,n=e.hoverable;return"noHovering"in this.props?!t||n:!!n}},{key:"isContainGrid",value:function(){var e;return r.Children.forEach(this.props.children,function(t){t&&t.type&&t.type===u&&(e=!0)}),e}},{key:"render",value:function(){return r.createElement(i.a,null,this.renderCard)}}])&&j(n.prototype,a),l&&j(n,l),t}();T.Grid=u,T.Meta=f},719:function(e,t,n){},814:function(e,t,n){"use strict";n(154);var r=n(25),a=n(613),o=n(30),c=n(31),i=n(33),l=n(32),s=n(34),u=n(0),p=n.n(u),d=n(1),f=n.n(d),m=n(63),b=!1,y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e)))._getFormTaskInfo=function(){var e=window.location.host;"formTaskId"===n.props.type?Object(m.a)("/ybt/form/preview/formTask/info?formTaskId=".concat(n.props.id)).then(function(t){if(t.success){var o=Object(a.a)({},t.obj,{url:"http://".concat(e,"/ybt/form/preview/formTask;JSESSIONID=").concat(t.obj.sessionId,"?formTaskId=").concat(n.props.id)});n._setConfig(o)}else r.a.error(t.obj)}):"formId"===n.props.type?Object(m.a)("/ybt/form/preview/form/info?formId=".concat(n.props.id)).then(function(t){if(t.success){var o=Object(a.a)({},t.obj,{url:"http://".concat(e,"/ybt/form/preview/form;JSESSIONID=").concat(t.obj.sessionId,"?formId=").concat(n.props.id)});n._setConfig(o)}else r.a.error(t.obj)}):"summary"===n.props.type?Object(m.a)("/ybt/summary/preview/info?templetId=".concat(n.props.id)).then(function(t){if(t.success){var o=Object(a.a)({},t.obj,{url:"http://".concat(e,"/ybt/summary/data/preview;JSESSIONID=").concat(t.obj.sessionId,"?templetId=").concat(n.props.id,"&historyId=").concat(n.props.historyId)});n._setConfig(o)}else r.a.error(t.obj)}):"summaryPreview"===n.props.type&&Object(m.a)("/ybt/summary/preview/info?templetId=".concat(n.props.id)).then(function(t){if(t.success){var o=Object(a.a)({},t.obj,{url:"http://".concat(e,"/ybt/summary/data/pre/preview/ids;JSESSIONID=").concat(t.obj.sessionId,"?templetId=").concat(n.props.id,"&planTaskIds=").concat(n.props.planTaskIds.join(","))});n._setConfig(o)}else r.a.error(t.obj)})},n._setConfig=function(e){if(document.getElementById("documentScript")){document.getElementById("documentScript").src=e.documentServerApiUrl}else{var t=document.createElement("script");t.id="documentScript",t.type="text/javascript",t.async=!1,t.src=e.documentServerApiUrl,document.head.appendChild(t)}n.setState({config:e},n._openEditor)},n._openEditor=function(){var e=n.state.config,t=window.DocsAPI;(t&&(b=!0),b)?Object(m.a)("/ybt/form/task/getFormTaskStatus?formTaskId="+n.props.id).then(function(e){return e.success?1===e.obj:Promise.reject(e.obj)}).then(function(r){b=!0;var a=localStorage.getItem("ticket");a&&(e.url=e.url+"&ticket="+a),window.docEditor=new t.DocEditor("PreviewDoc",{documentType:e.documentType,document:{fileType:e.fileType,key:e.key,title:e.title,url:e.url,permissions:{download:"formId"===n.props.type||r,print:"formId"===n.props.type||r,edit:!1,fillForms:!1,comment:!1}},editorConfig:{mode:"view",lang:"zh",customization:{chat:!1,comments:!1,help:!1,autosave:!0,commentAuthorOnly:!1,compactToolbar:!1,logo:{image:null,url:null,imageEmbedded:null},about:!1},plugins:{autostart:[],pluginsData:[]}},height:"100%",width:"100%"})}).catch(function(e){r.a.warn(e.obj)}):(b=!1,setTimeout(function(){n._openEditor()},0))},n.state={config:{documentServerApiUrl:"",documentType:"",fileType:"",key:"",title:"",url:""}},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this._getFormTaskInfo()}},{key:"render",value:function(){return p.a.createElement("div",{id:"PreviewDoc"},"\u52a0\u8f7d\u4e2d\u3002\u3002\u3002\u3002\u3002\u3002")}}]),t}(p.a.Component);y.defaultProps={type:"formTaskId"},y.PropType={id:f.a.string.isRequired,type:f.a.string.isRequired,historyId:f.a.string},t.a=y}}]);
//# sourceMappingURL=46.6d409409.chunk.js.map