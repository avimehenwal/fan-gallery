(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{384:function(e,t,o){},406:function(e,t,o){"use strict";o(384)},418:function(e,t,o){"use strict";o.r(t);o(194);var c={mounted:function(){this.checkUserPreference()},methods:{toggleDarkTheme:function(){var e=document.body;e.classList.toggle("dark-mode"),e.classList.contains("dark-mode")?localStorage.setItem("dark-theme","true"):(e.classList.remove("dark-mode"),setTimeout((function(){localStorage.removeItem("dark-theme")}),100))},checkUserPreference:function(){localStorage.getItem("dark-theme")&&(document.body.classList.add("dark-mode"),document.getElementById("theme-toggle").checked=!0)}}},s=(o(406),o(8)),n=Object(s.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dark-mode-widget"},[t("input",{attrs:{type:"checkbox",id:"theme-toggle"},on:{click:this.toggleDarkTheme}}),this._v(" "),this._m(0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"theme-toggle"}},[t("span")])}],!1,null,null,null);t.default=n.exports}}]);