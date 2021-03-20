(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1253:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_virtual_scroll",(function(){return VirtualScroll}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(60),createNode=function(t,e){var i=getTemplate(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null},getTemplate=function(t,e){switch(e){case"item":return t.querySelector("template:not([name])");case"header":return t.querySelector("template[name=header]");case"footer":return t.querySelector("template[name=footer]")}},calcCells=function(t,e,i,r,n,s,a,o,l,h,c,u){for(var f=[],d=u+c,p=c;p<d;p++){var g,v=t[p];if(n)null!=(g=n(v,p,t))&&f.push({i:h++,type:"header",value:g,index:p,height:i?i(g,p):a,reads:i?0:2,visible:!!i});if(f.push({i:h++,type:"item",value:v,index:p,height:e?e(v,p):l,reads:e?0:2,visible:!!e}),s)null!=(g=s(v,p,t))&&f.push({i:h++,type:"footer",value:g,index:p,height:r?r(g,p):o,reads:r?0:2,visible:!!r})}return f},VirtualScroll=function(){function t(t){var e=this;Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.o)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){e.updateVirtualScroll()}}return t.prototype.itemsChanged=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.connectedCallback=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)(this,void 0,void 0,(function(){var t,e;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.e)(this,(function(i){switch(i.label){case 0:return(t=this.el.closest("ion-content"))?(e=this,[4,t.getScrollElement()]):(console.error("<ion-virtual-scroll> must be used inside an <ion-content>"),[2]);case 1:return e.scrollEl=i.sent(),this.contentEl=t,this.calcCells(),this.updateState(),[2]}}))}))},t.prototype.componentDidUpdate=function(){this.updateState()},t.prototype.disconnectedCallback=function(){this.scrollEl=void 0},t.prototype.onResize=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.positionForItem=function(t){return Promise.resolve(function(t,e,i){var r=e.find((function(e){return"item"===e.type&&e.index===t}));return r?i[r.i]:-1}(t,this.cells,this.getHeightIndex()))},t.prototype.checkRange=function(t,e){return void 0===e&&(e=-1),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)(this,void 0,void 0,(function(){var i,r,n;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.e)(this,(function(s){return this.items?(i=-1===e?this.items.length-t:e,r=function(t,e){var i=t.length>0?t[t.length-1].index:0;return 0===e?0:e===i+1?t.length:t.findIndex((function(t){return t.index===e}))}(this.cells,t),n=calcCells(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,r,t,i),this.cells=function(t,e,i){if(0===i&&e.length>=t.length)return e;for(var r=0;r<e.length;r++)t[r+i]=e[r];return t}(this.cells,n,r),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate(),[2]):[2]}))}))},t.prototype.checkEnd=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)(this,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.e)(this,(function(t){return this.items&&this.checkRange(this.lastItemLen),[2]}))}))},t.prototype.updateVirtualScroll=function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.h)(this.readVS.bind(this)),Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.writeVS.bind(this)))},t.prototype.readVS=function(){for(var t=this,e=t.contentEl,i=t.scrollEl,n=0,s=t.el;s&&s!==e;)n+=s.offsetTop,s=s.offsetParent;this.viewportOffset=n,i&&(this.viewportHeight=i.offsetHeight,this.currentScrollTop=i.scrollTop)},t.prototype.writeVS=function(){var t=this.indexDirty,i=function(t,e,i){return{top:Math.max(t-i,0),bottom:t+e+i}}(this.currentScrollTop-this.viewportOffset,this.viewportHeight,100),r=this.getHeightIndex(),n=function(t,e,i){for(var r=e.top,n=e.bottom,s=0;s<t.length&&!(t[s]>r);s++);for(var a=Math.max(s-i-1,0);s<t.length&&!(t[s]>=n);s++);return{offset:a,length:Math.min(s+i,t.length)-a}}(r,i,2);(function(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length})(t,this.range,n)&&(this.range=n,function(t,e,i,r){for(var n=0,s=t;n<s.length;n++){var a=s[n];a.change=0,a.d=!0}for(var o=[],l=r.offset+r.length,h=function(r){var n=i[r],s=t.find((function(t){return t.d&&t.cell===n}));if(s){var a=e[r];a!==s.top&&(s.top=a,s.change=1),s.d=!1}else o.push(n)},c=r.offset;c<l;c++)h(c);for(var u=t.filter((function(t){return t.d})),f=function(i){var r=u.find((function(t){return t.d&&t.cell.type===i.type})),n=i.i;r?(r.d=!1,r.change=2,r.cell=i,r.top=e[n]):t.push({d:!1,cell:i,visible:!0,change:2,top:e[n]})},d=0,p=o;d<p.length;d++){f(p[d])}t.filter((function(t){return t.d&&-9999!==t.top})).forEach((function(t){t.change=1,t.top=-9999}))}(this.virtualDom,r,this.cells,n),this.nodeRender?function(t,e,i,r){for(var a,n=Array.from(t.children).filter((function(t){return"TEMPLATE"!==t.tagName})),s=n.length,o=0;o<i.length;o++){var l=i[o],h=l.cell;if(2===l.change){if(o<s)e(a=n[o],h,o);else{var c=createNode(t,h.type);(a=e(c,h,o)||c).classList.add("virtual-item"),t.appendChild(a)}a.$ionCell=h}else a=n[o];0!==l.change&&(a.style.transform="translate3d(0,"+l.top+"px,0)");var u=h.visible;l.visible!==u&&(u?a.classList.remove("virtual-loading"):a.classList.add("virtual-loading"),l.visible=u),h.reads>0&&(r(h,a),h.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.l)(this))},t.prototype.updateCellHeight=function(t,e){var i=this,r=function(){if(e.$ionCell===t){var r=window.getComputedStyle(e),n=e.offsetHeight+parseFloat(r.getPropertyValue("margin-bottom"));i.setCellHeight(t,n)}};e&&e.componentOnReady?e.componentOnReady().then(r):r()},t.prototype.setCellHeight=function(t,e){var i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))},t.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout((function(){return t.updateVirtualScroll()}),100)},t.prototype.updateState=function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())},t.prototype.calcCells=function(){this.items&&(this.lastItemLen=this.items.length,this.cells=calcCells(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)},t.prototype.getHeightIndex=function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex},t.prototype.calcHeightIndex=function(t){void 0===t&&(t=0),this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,i){for(var r=t[i],n=i;n<t.length;n++)t[n]=r,r+=e[n].height;return r}(this.heightIndex,this.cells,t),this.indexDirty=1/0},t.prototype.enableScrollEvents=function(t){var e=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var i=this.scrollEl;i&&(this.isEnabled=t,i.addEventListener("scroll",this.onScroll),this.rmEvent=function(){i.removeEventListener("scroll",e.onScroll)})},t.prototype.renderVirtualNode=function(t){var e=t.cell,i=e.type,r=e.value,n=e.index;switch(i){case"item":return this.renderItem(r,n);case"header":return this.renderHeader(r,n);case"footer":return this.renderFooter(r,n)}},t.prototype.render=function(){var t=this;return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.j)(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.c,{style:{height:this.totalHeight+"px"}},this.renderItem&&Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.j)(VirtualProxy,{dom:this.virtualDom},this.virtualDom.map((function(e){return t.renderVirtualNode(e)}))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_1__.k)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}},enumerable:!1,configurable:!0}),t}(),VirtualProxy=function(t,e,i){var r=t.dom;return i.map(e,(function(t,e){var i=r[e],n=t.vattrs||{},s=n.class||"";return s+="virtual-item ",i.visible||(s+="virtual-loading"),Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},n),{class:s,style:Object.assign(Object.assign({},n.style),{transform:"translate3d(0,"+i.top+"px,0)"})})})}))};VirtualScroll.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}]);
//# sourceMappingURL=51.cf5fd074bd3a2b198d57.bundle.js.map