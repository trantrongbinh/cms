(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{b0V6:function(t,e,r){"use strict";r.r(e);var n=r("L2JU");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={name:"form-manager-form",props:{form:{type:Object,required:!0},isSelectable:{type:Boolean,default:!0}},computed:s(s({},Object(n.c)({selected:"formmanager/getSelected"})),{},{isSelected:function(){return _.includes(this.selected,this.form.id)}})},o=r("KHd+"),l=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gallery-wrapper"},[r("div",{staticClass:"gallery-item",class:{"gallery-item--selected selectable--selected":t.isSelected,selectable:t.isSelectable},attrs:{"data-selection":t.form.id},on:{dblclick:function(e){return t.$emit("dblclick")}}},[r("div",{staticClass:"h-full w-full text-gray-300 flex items-center justify-center"},[r("fa-icon",{staticClass:"fa-fw fa-3x",attrs:{icon:["fas","clipboard"]}})],1)]),t._v(" "),r("div",{staticClass:"gallery-subtitle"},[r("span",[t._v(t._s(t.form.name))])]),t._v(" "),r("div",{staticClass:"gallery-text"},[r("span",{staticClass:"text-gray-800 text-sm"},[t._v(t._s(t.form.description))])]),t._v(" "),r("div",{staticClass:"gallery-text"},[t._v("\n\t\t\t"+t._s(t.$moment(t.form.created_at).format("MMM Do, YYYY"))+"\n\t\t")])])}),[],!1,null,null,null).exports,u={computed:{selection:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},addLimit:function(){return this.limit-this.selection.length}},props:{value:{type:Array,required:!0},limit:{type:Number,default:1/0},hasHeader:{type:Boolean,default:!0}},methods:{remove:function(t){this.selection=_.filter(this.selection,(function(e){return e.id!==t}))}}},f=Object(o.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card h-full"},[t.hasHeader?r("div",{staticClass:"flex items-center justify-between border-b border-gray-200 p-3"},[r("p-button",{attrs:{theme:"warning"},on:{click:function(e){return t.$emit("reject")}}},[r("fa-icon",{staticClass:"mr-2",attrs:{icon:["fas","times"]}}),t._v(" Reject")],1),t._v(" "),r("p-button",{attrs:{theme:"info"},on:{click:function(e){return t.$emit("accept")}}},[t._v("Accept "),r("fa-icon",{staticClass:"ml-2",attrs:{icon:["fas","check"]}})],1)],1):t._e(),t._v(" "),t.selection.length>0?r("div",[r("p-sortable-list",{staticClass:"sortable-list",model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[r("div",{staticClass:"w-full p-3"},t._l(t.selection,(function(e){return r("p-sortable-item",{key:e.id},[r("div",{staticClass:"flex items-center py-2"},[r("div",{staticClass:"w-1/12"},[r("p-sortable-handle",{staticClass:"cursor-move"},[r("fa-icon",{staticClass:"handle fa-fw text-gray-400",attrs:{icon:"ellipsis-v"}})],1)],1),t._v(" "),r("div",{staticClass:"h-full w-3/12 text-gray-300 flex items-center justify-center"},[r("fa-icon",{staticClass:"fa-fw fa-2x",attrs:{icon:["fas","clipboard"]}})],1),t._v(" "),r("div",{staticClass:"gallery-text w-6/12"},[r("div",[t._v(t._s(e.name))])]),t._v(" "),r("div",{staticClass:"w-2/12 text-right"},[r("p-button",{attrs:{theme:"danger"},on:{click:function(r){return t.remove(e.id)}}},[r("fa-icon",{attrs:{icon:["fas","trash"]}})],1)],1)])])})),1)]),t._v(" "),t.addLimit<=0?r("div",{staticClass:"text-sm italic text-danger-600 text-center"},[t._v("\n\t\t\tSelection limit reached\n\t\t")]):t._e()],1):r("div",{staticClass:"h-full flex flex-col justify-center items-center text-5xl text-gray-300"},[r("fa-icon",{staticClass:"fa-fw fa-3x",attrs:{icon:["fas","clipboard"]}}),t._v(" "),r("span",{staticClass:"text-lg py-2 text-gray-500"},[t._v("Select some forms...")])],1)])}),[],!1,null,null,null).exports;function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p={name:"form-manager-search-action",computed:{search:{get:function(){return this.$store.state.formmanager.search},set:function(t){this.setSearch(t)}}},watch:{search:function(t){this.fetchForms()}},methods:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(n.b)({fetchForms:"formmanager/fetchForms",setSearch:"formmanager/setSearch"}))};function b(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O={name:"form-fieldtype",components:{"form-card":l,"form-selection":f,"search-action":Object(o.a)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"field__control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"field__input",attrs:{type:"search",name:"search",placeholder:"Search..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])}),[],!1,null,null,null).exports},mixins:[r("OuK8").default,r("BAqS").default,r("GfKu").default],data:function(){return{requestOpen:!1,modalOpen:!1,selection:[]}},props:{field:{type:Object,required:!0},value:{type:Array,required:!1,default:function(){return[]}}},watch:{loading:function(t){var e=this;this.$nextTick((function(){t?e.destroySelector():(e.loadSelector(e.$el.querySelector(".selectables")),e.requestOpen&&(e.modalOpen=!0,e.requestOpen=!1))}))}},computed:y(y({},Object(n.c)({loading:"formmanager/getLoading",forms:"formmanager/getForms"})),{},{selected:{get:function(){return this.value||[]},set:function(t){this.$emit("input",t)}},selectionLimit:function(){return Number(this.field.settings.limit)||1/0},addLimit:function(){return this.selectionLimit-this.selection.length}}),methods:y(y({},Object(n.b)({fetchForms:"formmanager/fetchForms"})),{},{push:function(){var t=this;_.forEach(this.selection,(function(e){return t.add(e)}))},add:function(t){if(this.addLimit>0){var e=_.find(this.selection,["id",t]),r=_.find(this.forms,["id",t]);e||this.selection.push(r)}},open:function(){this.reset(),this.fetchForms(),this.selection=b(this.selected),this.requestOpen=!0},close:function(){this.reset(),this.selection=[],this.modalOpen=!1},reject:function(){this.close()},accept:function(){this.selected=this.selection,this.close()}})},j=Object(o.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("label",{staticClass:"form__label",attrs:{for:t.field.handle}},[t._v(t._s(t.field.name))]),t._v(" "),r("div",{staticClass:"flex items-start justify-between"},[r("div",{staticClass:"w-1/2"},[r("p-button",{attrs:{disabled:t.requestOpen},on:{click:t.open}},[r("fa-icon",{staticClass:"mr-1",attrs:{icon:["fas","plus-circle"]}}),t._v(" Manage Forms\n\t\t\t\t")],1)],1),t._v(" "),r("form-selection",{staticClass:"w-1/2",attrs:{limit:t.selectionLimit,hasHeader:!1},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),r("p-modal",{attrs:{name:"selection-manager","no-header":"","no-footer":"","extra-large":""},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"side-container"},[r("form-selection",{attrs:{limit:t.selectionLimit},on:{reject:t.reject,accept:t.accept},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}})],1),t._v(" "),r("div",{staticClass:"content-container"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card__body"},[r("div",{staticClass:"toolbar"},[r("div",{staticClass:"toolbar__group"},[r("button",{staticClass:"button button--icon",on:{click:function(e){return e.preventDefault(),t.push(e)}}},[r("fa-icon",{staticClass:"icon",attrs:{icon:"arrow-alt-circle-left"}})],1)]),t._v(" "),r("div",{staticClass:"toolbar__group toolbar__group--grow"},[r("search-action")],1)])]),t._v(" "),r("div",{staticClass:"gallery-container selectables"},[r("div",{staticClass:"gallery border-b border-gray-200 pb-2"},t._l(t.forms,(function(e){return r("form-card",{key:e.id,attrs:{form:e},on:{dblclick:function(r){return t.add(e.id)}}})})),1)])])])])])],1)}),[],!1,null,null,null);e.default=j.exports}}]);