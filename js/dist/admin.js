module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}({0:function(e,t){e.exports=flarum.core.compat.app},6:function(e,t){e.exports=flarum.core.compat["admin/components/ExtensionPage"]},8:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);n(6);o.a.initializers.add("justoverclock-guestengagement",(function(){o.a.extensionData.for("justoverclock-guestengagement").registerSetting({setting:"justoverclock-guestengagement.coordinates",name:"afterXpost",type:"number",label:"Display box After X post (accept number, default is 0)"},15)})),o.a.extensionData.for("justoverclock-guestengagement").registerSetting({setting:"justoverclock-guestengagement.timeout",name:"timeout",type:"number",label:"Auto hide box after X seconds (use millisecond, e.g for 5 sec use 5000)"},14)}});
//# sourceMappingURL=admin.js.map