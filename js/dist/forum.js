module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([,function(e,t){e.exports=flarum.core.compat["common/extend"]},function(e,t){e.exports=flarum.core.compat["components/SignUpModal"]},function(e,t){e.exports=flarum.core.compat["forum/components/IndexPage"]},function(e,t){e.exports=flarum.core.compat["components/PostStream"]},function(e,t){e.exports=flarum.core.compat["components/Button"]},,function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(3),a=n.n(o),u=n(4),p=n.n(u),i=n(2),c=n.n(i);n(5);app.initializers.add("justoverclock/flarum-ext-guestengagement",(function(){Object(r.extend)(a.a.prototype,"view",(function(e){if(!app.session.user&&e.children&&e.children.splice){setTimeout((function(){$("#wrapperengage").fadeOut().empty()}),app.forum.attribute("timeOut"));var t=m("div",{id:"wrapperengage"},m("div",{id:"engagebox"},[m("p",[m("strong",app.translator.trans("flarum-ext-guestengagement.forum.hello")),m("br"),m("br"),app.translator.trans("flarum-ext-guestengagement.forum.whenucreate"),m("br"),app.translator.trans("flarum-ext-guestengagement.forum.uwillreceive")]),m("button",{className:".SplitDropdown-button Button Button--primary hasIcon",type:"button",onclick:function(){return app.modal.show(c.a)}},app.translator.trans("core.forum.header.sign_up_link"))]));e.children.splice(1,0,t)}})),Object(r.extend)(p.a.prototype,"view",(function(e){if(!app.session.user&&e.children&&e.children.splice){var t=m("div",{id:"wrapperengageps"},m("div",{id:"engageboxps"},m("p",[m("strong",app.forum.attribute("BoxTitle")),m("br"),m("br"),app.forum.attribute("tchange")]),m("button",{className:".SplitDropdown-button Button Button--primary hasIcon",type:"button",onclick:function(){return app.modal.show(c.a)}},app.translator.trans("core.forum.header.sign_up_link"))));e.children.splice(app.forum.attribute("xPost"),0,t)}}))}))}]);
//# sourceMappingURL=forum.js.map