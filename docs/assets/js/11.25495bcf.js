(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{373:function(e,t,o){},402:function(e,t,o){"use strict";var c=o(373);o.n(c).a},414:function(e,t,o){"use strict";o.r(t);o(192);var c={mounted:function(){this.checkUserPreference()},methods:{toggleDarkTheme:function(){var e=document.body;e.classList.toggle("dark-mode"),e.classList.contains("dark-mode")?localStorage.setItem("dark-theme","true"):(e.classList.remove("dark-mode"),setTimeout((function(){localStorage.removeItem("dark-theme")}),100))},checkUserPreference:function(){localStorage.getItem("dark-theme")&&(document.body.classList.add("dark-mode"),document.getElementById("theme-toggle").checked=!0)}}},n=(o(402),o(8)),s=Object(n.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dark-mode-widget"},[t("input",{attrs:{type:"checkbox",id:"theme-toggle"},on:{click:this.toggleDarkTheme}}),this._v(" "),this._m(0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"theme-toggle"}},[t("span")])}],!1,null,null,null);t.default=s.exports}}]);