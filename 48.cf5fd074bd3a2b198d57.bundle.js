(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1239:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_ripple_effect",(function(){return RippleEffect}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(60),_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(65),RippleEffect=function(){function t(t){Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.o)(this,t),this.type="bounded"}return t.prototype.addRipple=function(t,e){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)(this,void 0,void 0,(function(){var n=this;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.e)(this,(function(a){return[2,new Promise((function(a){Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.h)((function(){var i=n.el.getBoundingClientRect(),r=i.width,o=i.height,s=Math.sqrt(r*r+o*o),f=Math.max(o,r),l=n.unbounded?f:s+PADDING,c=Math.floor(f*INITIAL_ORIGIN_SCALE),m=l/c,u=t-i.left,p=e-i.top;n.unbounded&&(u=.5*r,p=.5*o);var d=u-.5*c,b=p-.5*c,v=.5*r-u,g=.5*o-p;Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.f)((function(){var t=document.createElement("div");t.classList.add("ripple-effect");var e=t.style;e.top=b+"px",e.left=d+"px",e.width=e.height=c+"px",e.setProperty("--final-scale",""+m),e.setProperty("--translate-end",v+"px, "+g+"px"),(n.el.shadowRoot||n.el).appendChild(t),setTimeout((function(){a((function(){removeRipple(t)}))}),325)}))}))}))]}))}))},Object.defineProperty(t.prototype,"unbounded",{get:function(){return"unbounded"===this.type},enumerable:!1,configurable:!0}),t.prototype.render=function(){var t,e=Object(_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.j)(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.c,{role:"presentation",class:(t={},t[e]=!0,t.unbounded=this.unbounded,t)})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.k)(this)},enumerable:!1,configurable:!0}),t}(),removeRipple=function(t){t.classList.add("fade-out"),setTimeout((function(){t.remove()}),200)},PADDING=10,INITIAL_ORIGIN_SCALE=.5;RippleEffect.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);
//# sourceMappingURL=48.cf5fd074bd3a2b198d57.bundle.js.map