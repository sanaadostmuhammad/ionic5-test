(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1269:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"startFocusVisible",(function(){return startFocusVisible}));var FOCUS_KEYS=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],startFocusVisible=function(){var t=[],e=!0,n=document,r=function(e){t.forEach((function(t){return t.classList.remove("ion-focused")})),e.forEach((function(t){return t.classList.add("ion-focused")})),t=e},o=function(){e=!1,r([])};n.addEventListener("keydown",(function(t){(e=FOCUS_KEYS.includes(t.key))||r([])})),n.addEventListener("focusin",(function(t){if(e&&t.composedPath){var n=t.composedPath().filter((function(t){return!!t.classList&&t.classList.contains("ion-focusable")}));r(n)}})),n.addEventListener("focusout",(function(){n.activeElement===n.body&&r([])})),n.addEventListener("touchstart",o),n.addEventListener("mousedown",o)}}}]);
//# sourceMappingURL=42.cf5fd074bd3a2b198d57.bundle.js.map