!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("@antv/g6")):"function"==typeof define&&define.amd?define(["@antv/g6"],e):"object"==typeof exports?exports.G6Plugins=e(require("@antv/g6")):t.G6Plugins=e(t.G6)}(window,function(t){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=30)}([,,function(t,e){var n={}.toString;t.exports=function(t,e){return n.call(t)==="[object "+e+"]"}},function(t,e,n){var i=n(2),r=Array.isArray?Array.isArray:function(t){return i(t,"Array")};t.exports=r},,function(t,e,n){var i=n(9),r=n(3);t.exports=function(t,e){if(t)if(r(t))for(var n=0,o=t.length;n<o&&!1!==e(t[n],n);n++);else if(i(t))for(var a in t)if(t.hasOwnProperty(a)&&!1===e(t[a],a))break}},function(t,e){t.exports=function(t,e){if(t)for(var n in e)e.hasOwnProperty(n)&&(t.style[n]=e[n]);return t}},function(t,e){var n=document.createElement("table"),i=document.createElement("tr"),r=/^\s*<(\w+|!)[^>]*>/,o={tr:document.createElement("tbody"),tbody:n,thead:n,tfoot:n,td:i,th:i,"*":document.createElement("div")};t.exports=function(t){var e=r.test(t)&&RegExp.$1;e in o||(e="*");var n=o[e];t=t.replace(/(^\s*)|(\s*$)/g,""),n.innerHTML=""+t;var i=n.childNodes[0];return n.removeChild(i),i}},function(t,e,n){var i=n(11),r=n(3),o=5;function a(t,e,n,s){for(var u in n=n||0,s=s||o,e)if(e.hasOwnProperty(u)){var p=e[u];null!==p&&i(p)?(i(t[u])||(t[u]={}),n<s?a(t[u],p,n+1,s):t[u]=e[u]):r(p)?(t[u]=[],t[u]=t[u].concat(p)):void 0!==p&&(t[u]=p)}}t.exports=function(){for(var t=new Array(arguments.length),e=t.length,n=0;n<e;n++)t[n]=arguments[n];for(var i=t[0],r=1;r<e;r++)a(i,t[r]);return i}},function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t){var e=void 0===t?"undefined":n(t);return null!==t&&"object"===e||"function"===e}},function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t){return"object"===(void 0===t?"undefined":n(t))&&null!==t}},function(t,e,n){var i=n(10),r=n(2);t.exports=function(t){if(!i(t)||!r(t,"Object"))return!1;if(null===Object.getPrototypeOf(t))return!0;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}},function(t,e){t.exports=function(t){return null===t||void 0===t}},function(t,e,n){var i=n(8),r=n(5),o=n(14),a=function(){function t(t){this._cfgs=i(this.getDefaultCfg(),t)}var e=t.prototype;return e.getDefaultCfg=function(){return{}},e.initPlugin=function(t){var e=this;e.set("graph",t);var n=e.getEvents(),i={};r(n,function(n,r){var a=o(e,n);i[r]=a,t.on(r,a)}),this._events=i,this.init()},e.init=function(){},e.getEvents=function(){return{}},e.get=function(t){return this._cfgs[t]},e.set=function(t,e){this._cfgs[t]=e},e.destroy=function(){},e.destroyPlugin=function(){this.destroy();var t=this.get("graph"),e=this._events;r(e,function(e,n){t.off(n,e)}),this._events=null,this._cfgs=null,this.destroyed=!0},t}();t.exports=a},function(t,e){t.exports=function(t,e){if(t["_wrap_"+e])return t["_wrap_"+e];var n=function(n){t[e](n)};return t["_wrap_"+e]=n,n}},function(t,e,n){var i=n(2);t.exports=function(t){return i(t,"String")}},,function(t,e,n){var i=n(13),r=n(7),o=n(6),a=Math.max,s=Math.min,u=function(t){function e(){return t.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var n=e.prototype;return n.init=function(){var t=this.get("graph"),e=t.get("minZoom"),n=t.get("container"),i=t.get("canvas").get("el"),a=t.get("width"),s=t.get("height"),u=r('<div style="position: absolute; left:0;top:0;right:0;bottom:0;overflow: hidden;z-index: -1;"></div>'),p=r('<div class="g6-grid" style="position:absolute;transform-origin: 0% 0% 0px; background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UwZTBlMCIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlMGUwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=)"></div>');u.appendChild(p),o(p,{width:a/e+"px",height:s/e+"px",left:-a/e/2+"px",top:-s/e/2+"px"}),n.insertBefore(u,i),this.set("container",u),this.set("gridContainer",p)},n.getEvents=function(){return{viewportchange:"updateGrid"}},n.updateGrid=function(t){var e=this.get("graph"),n=this.get("gridContainer"),i=t.matrix,r="matrix("+i[0]+","+i[1]+","+i[3]+","+i[4]+","+i[6]+","+i[7]+")",u=e.get("group").getBBox();o(n,{transform:r,left:(s(u.minX,0)-20)*a(i[0],1)+"px",top:(s(u.minY,0)-20)*a(i[4],1)+"px"})},n.getContainer=function(){return this.get("container")},n.destroy=function(){this.get("graph").get("container").removeChild(this.get("container"))},e}(i);t.exports=u},function(e,n){e.exports=t},function(t,e,n){function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var r=n(18).G,o=n(13),a=n(15),s=n(12),u=n(7),p=n(6),c=n(5),g=Math.max,f=function(t){function e(){return t.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var n=e.prototype;return n.init=function(){this.initContainer()},n.getDefaultCfg=function(){return{container:null,className:"g6-minimap",viewportClassName:"g6-minimap-viewport",type:"default",size:[200,120],delegateStyle:{fill:"#40a9ff",stroke:"#096dd9"}}},n.getEvents=function(){return{beforepaint:"updateCanvas"}},n.initContainer=function(){var t=this.get("graph"),e=this.get("size"),n=this.get("className"),i=this.get("container"),o=u('<div class="'+n+'" style="width:'+e[0]+"px; height:"+e[1]+'px"></div>');a(i)&&(i=document.getElementById(i)),i?i.appendChild(o):t.get("container").appendChild(o),this.set("container",o);var s=u('<div class="g6-minimap-container"></div>');o.appendChild(s);var p=new r.Canvas({containerDOM:s,width:e[0],height:e[1],pixelRatio:t.get("pixelRatio")});this.set("canvas",p),this.updateCanvas()},n.initViewport=function(){var t,e,n,i,r,o,a,c=this._cfgs,g=c.size,f=c.graph,l=f.get("pixelRatio")||f.get("canvas").get("pixelRatio"),d=f.get("width")/g[0]*l,h=f.get("height")/g[1]*l,v=this.get("canvas").get("containerDOM"),y=u('<div class="'+c.viewportClassName+'" style="position:absolute;left:0;top:0;box-sizing:border-box;border: 2px solid #1980ff"></div>');v.addEventListener("mousedown",function(s){if(s.target===y){var u=y.style;i=parseInt(u.left,10),r=parseInt(u.top,10),o=parseInt(u.width,10),a=parseInt(u.height,10),o>=g[0]||a>=g[1]||(n=!0,t=s.clientX,e=s.clientY)}},!1),v.addEventListener("mousemove",function(u){if(n&&!s(u.clientX)&&!s(u.clientY)){var c=t-u.clientX,v=e-u.clientY;i-c<0?c=i:i-c+o>g[0]&&(c=i+o-g[0]),r-v<0?v=r:r-v+a>g[1]&&(v=r+a-g[1]),p(y,{left:(i-=c)+"px",top:(r-=v)+"px"}),f.translate(c*d*l,v*h*l),t=u.clientX,e=u.clientY}},!1),v.addEventListener("mouseleave",function(){n=!1},!1),v.addEventListener("mouseup",function(){n=!1},!1),this.set("viewport",y),v.appendChild(y)},n.updateCanvas=function(){var t=this.get("size"),e=this.get("graph"),n=this.get("canvas");switch(this.get("type")){case"default":this._updateGraphShapes();break;case"keyShape":this._updateKeyShapes();break;case"delegate":this._updateDelegateShapes();break;default:this._updateGraphShapes()}var i=n.getBBox(),r=g(i.width,e.get("width")),o=g(i.height,e.get("height")),a=n.get("pixelRatio"),s=Math.min(t[0]/r,t[1]/o);n.resetMatrix();var u=-(i.minX>0?0:i.minX),p=-(i.minY>0?0:i.minY);n.translate(u,p),n.scale(s*a,s*a);var c=(t[0]-r*s)/2,f=(t[1]-o*s)/2;n.translate(c*a,f*a),n.draw(),this._updateViewport(s,c+u*s,f+p*s)},n._updateKeyShapes=function(){var t=this._cfgs.graph,e=this.get("canvas"),n=e.get("children")[0];n||(n=e.addGroup()).setMatrix(t.get("group").getMatrix());var i=t.getNodes();n.clear(),this._getGraphEdgeKeyShape(n),c(i,function(t){if(t.isVisible()){var e=n.addGroup();e.setMatrix(t.get("group").attr("matrix")),e.add(t.get("keyShape").clone())}})},n._updateGraphShapes=function(){var t=this.get("graph"),e=this.get("canvas"),n=t.get("group").clone();n.resetMatrix(),e.get("children")[0]=n},n._updateDelegateShapes=function(){var t=this._cfgs.graph,e=this.get("canvas"),n=e.get("children")[0]||e.addGroup(),r=this.get("delegateStyle");n.clear(),this._getGraphEdgeKeyShape(n),c(t.getNodes(),function(t){if(t.isVisible()){var e=t.getBBox();n.addShape("rect",{attrs:i({x:e.minX,y:e.minY,width:e.width,height:e.height},r)})}})},n._getGraphEdgeKeyShape=function(t){var e=this.get("graph");c(e.getEdges(),function(e){e.isVisible()&&t.add(e.get("keyShape").clone())})},n._updateViewport=function(t,e,n){var i=this.get("graph"),r=this.get("size"),o=i.get("width"),a=i.get("height"),s=i.getPointByCanvas(0,0),u=i.getPointByCanvas(o,a),c=this.get("viewport");c||this.initViewport();var g=(u.x-s.x)*t,f=(u.y-s.y)*t,l=s.x*t+e,d=s.y*t+n;g>r[0]&&(g=r[0]),f>r[1]&&(f=r[1]),p(c,{left:l>0?l+"px":0,top:d>0?d+"px":0,width:g+"px",height:f+"px"})},n.getCanvas=function(){return this.get("canvas")},n.getViewport=function(){return this.get("viewport")},n.getContainer=function(){return this.get("container")},n.destroy=function(){this.get("canvas").destroy();var t=this.get("container");t.parentNode.removeChild(t)},e}(o);t.exports=f},,,,,,,,,,,function(t,e,n){var i={Minimap:n(19),Grid:n(17)};t.exports=i}])});
//# sourceMappingURL=g6Plugins.js.map