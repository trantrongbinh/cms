(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"0DBc":function(e,t,r){"use strict";r.r(t);var n=r("L2JU");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a={name:"user-manager-user",props:{user:{type:Object,required:!0},isSelectable:{type:Boolean,default:!0}},computed:i(i({},Object(n.c)({selected:"usermanager/getSelected",view:"usermanager/getView"})),{},{isSelected:function(){return _.includes(this.selected,this.user.id)}})},o=r("KHd+"),l=Object(o.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["grid"==e.view?"gallery-wrapper":"gallery-wrapper--row"]},[r("div",{staticClass:"gallery-item",class:{"gallery-item--selected selectable--selected":e.isSelected,selectable:e.isSelectable},attrs:{"data-selection":e.user.id},on:{dblclick:function(t){return e.$emit("dblclick")}}},[r("div",{staticClass:"h-full w-full text-gray-300 flex items-center justify-center"},[r("fa-icon",{staticClass:"fa-fw",class:["grid"==e.view?"fa-3x":"fa-2x"],attrs:{icon:["fas","user"]}})],1)]),e._v(" "),r("div",{staticClass:"gallery-subtitle"},[r("span",[e._v(e._s(e.user.name))])]),e._v(" "),"list"==e.view?r("div",{staticClass:"gallery-text"},[e.user.roles.length?r("span",[e._v(e._s(e.user.roles[0].name))]):r("span",[e._v("--")])]):e._e(),e._v(" "),"list"==e.view?r("div",{staticClass:"gallery-text"},[e._v("\n\t\t\t"+e._s(e.$moment(e.user.created_at).format("MMM Do, YYYY"))+"\n\t\t")]):e._e()])}),[],!1,null,null,null).exports,u={computed:{selection:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},addLimit:function(){return this.limit-this.selection.length}},props:{value:{type:Array,required:!0},limit:{type:Number,default:1/0},hasHeader:{type:Boolean,default:!0}},methods:{remove:function(e){this.selection=_.filter(this.selection,(function(t){return t.id!==e}))}}},f=Object(o.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card h-full"},[e.hasHeader?r("div",{staticClass:"flex items-center justify-between border-b border-gray-200 p-3"},[r("ui-button",{attrs:{variant:"warning"},on:{click:function(t){return e.$emit("reject")}}},[r("fa-icon",{staticClass:"mr-2",attrs:{icon:["fas","times"]}}),e._v(" Reject")],1),e._v(" "),r("ui-button",{attrs:{variant:"info"},on:{click:function(t){return e.$emit("accept")}}},[e._v("Accept "),r("fa-icon",{staticClass:"ml-2",attrs:{icon:["fas","check"]}})],1)],1):e._e(),e._v(" "),e.selection.length>0?r("div",[r("ui-sortable-list",{staticClass:"sortable-list",model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}},[r("div",{staticClass:"w-full p-3"},e._l(e.selection,(function(t){return r("ui-sortable-item",{key:t.id},[r("div",{staticClass:"flex items-center py-2"},[r("div",{staticClass:"w-1/12"},[r("ui-sortable-handle",{staticClass:"cursor-move"},[r("fa-icon",{staticClass:"handle fa-fw text-gray-400",attrs:{icon:"ellipsis-v"}})],1)],1),e._v(" "),r("div",{staticClass:"h-full w-3/12 text-gray-300 flex items-center justify-center"},[r("fa-icon",{staticClass:"fa-fw fa-2x",attrs:{icon:["fas","user"]}})],1),e._v(" "),r("div",{staticClass:"gallery-text w-6/12"},[r("div",[e._v(e._s(t.name))])]),e._v(" "),r("div",{staticClass:"w-2/12 text-right"},[r("ui-button",{attrs:{variant:"danger"},on:{click:function(r){return e.remove(t.id)}}},[r("fa-icon",{attrs:{icon:["fas","trash"]}})],1)],1)])])})),1)]),e._v(" "),e.addLimit<=0?r("div",{staticClass:"text-sm italic text-danger-600 text-center"},[e._v("\n\t\t\tSelection limit reached\n\t\t")]):e._e()],1):r("div",{staticClass:"h-full flex flex-col justify-center items-center text-5xl text-gray-300"},[r("fa-icon",{staticClass:"fa-fw fa-3x",attrs:{icon:["fas","users"]}}),e._v(" "),r("span",{staticClass:"text-lg py-2 text-gray-500"},[e._v("Select some users...")])],1)])}),[],!1,null,null,null).exports;function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m={name:"user-manager-role-action",computed:d(d({},Object(n.c)({role:"usermanager/getRole",roles:"usermanager/getRoles"})),{},{options:function(){var e={};return _.forEach(this.roles,(function(t){e[t.slug]=t.name})),e}}),watch:{role:function(e){this.fetchUsers()}},methods:d({},Object(n.b)({fetchUsers:"usermanager/fetchUsers",setRole:"usermanager/setRole"}))},g=Object(o.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ui-dropdown",{attrs:{id:"role-filters"},scopedSlots:e._u([{key:"menu",fn:function(){return[r("ui-dropdown-link",{key:"default",on:{click:function(t){return t.preventDefault(),e.setRole(null)}}},[e._v("Everyone")]),e._v(" "),e._l(e.options,(function(t,n){return r("ui-dropdown-link",{key:n,on:{click:function(t){return t.preventDefault(),e.setRole(n)}}},[e._v("\n\t\t\t"+e._s(t)+"\n\t\t")])}))]},proxy:!0}])},[r("fa-icon",{staticClass:"icon",attrs:{icon:["fas","user-tag"]}}),e._v(" "),r("span",{staticClass:"hidden md:inline"},[e._v(e._s(e.options[e.role]||"Everyone"))])],1)}),[],!1,null,null,null).exports;function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O={name:"user-manager-search-action",computed:{search:{get:function(){return this.$store.state.usermanager.search},set:function(e){this.setSearch(e)}}},watch:{search:function(e){this.fetchUsers()}},methods:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(n.b)({fetchUsers:"usermanager/fetchUsers",setSearch:"usermanager/setSearch"}))},y=Object(o.a)(O,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"field__control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"field__input",attrs:{type:"search",name:"search",placeholder:"Search..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})])}),[],!1,null,null,null).exports;function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C={name:"user-manager-sort-action",data:function(){return{options:{name:"Name",email:"Email",created_at:"Creation Date"}}},computed:w({},Object(n.c)({direction:"usermanager/getDirection",sort:"usermanager/getSort"})),watch:{direction:function(e){this.fetchUsers()},sort:function(e){this.fetchUsers()}},methods:w(w({},Object(n.b)({toggleDirection:"usermanager/toggleDirection",fetchUsers:"usermanager/fetchUsers",setDirection:"usermanager/setDirection",setSort:"usermanager/setSort"})),{},{sortBy:function(e){this.sort===e?this.toggleDirection():(this.setSort(e),this.setDirection("asc"))},sortIcon:function(e){return this.sort===e?"asc"===this.direction?"sort-amount-down":"sort-amount-up":"bars"}})},S=Object(o.a)(C,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ui-dropdown",{attrs:{id:"sort-filters"},scopedSlots:e._u([{key:"menu",fn:function(){return e._l(e.options,(function(t,n){return r("ui-dropdown-link",{key:n,on:{click:function(t){return t.preventDefault(),e.sortBy(n)}}},[r("fa-icon",{staticClass:"icon",attrs:{icon:["fas",e.sortIcon(n)]}}),e._v("\n\t\t\t"+e._s(t)+"\n\t\t")],1)}))},proxy:!0}])},[r("fa-icon",{staticClass:"icon",attrs:{icon:["fas",e.sortIcon(e.sort)]}}),e._v(" "),r("span",{staticClass:"hidden md:inline"},[e._v(e._s(e.options[e.sort]))])],1)}),[],!1,null,null,null).exports;function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E={name:"user-manager-view-action",computed:x({},Object(n.c)({view:"usermanager/getView"})),watch:{view:function(e){this.fetchUsers()}},methods:x({},Object(n.b)({fetchUsers:"usermanager/fetchUsers",toggleView:"usermanager/toggleView"}))};function U(e){return function(e){if(Array.isArray(e))return $(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var I={name:"user-fieldtype",components:{"user-card":l,"user-selection":f,"role-action":g,"search-action":y,"sort-action":S,"view-action":Object(o.a)(E,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"buttons"},[r("div",{staticClass:"buttons__group"},[r("ui-button",{attrs:{icon:"",disabled:"list"==e.view},on:{click:function(t){return t.preventDefault(),e.toggleView("list")}}},[r("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fas","bars"]}})],1),e._v(" "),r("ui-button",{attrs:{icon:"",disabled:"grid"==e.view},on:{click:function(t){return t.preventDefault(),e.toggleView("grid")}}},[r("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fas","th-large"]}})],1)],1)])}),[],!1,null,null,null).exports},mixins:[r("MZys").default],data:function(){return{requestOpen:!1,modalOpen:!1,selection:[]}},props:{field:{type:Object,required:!0},value:{type:Array,required:!1,default:function(){return[]}}},watch:{loading:function(e){var t=this;this.$nextTick((function(){e?t.destroySelector():(t.loadSelector(t.$el.querySelector(".selectables")),t.requestOpen&&(t.modalOpen=!0,t.requestOpen=!1))}))}},computed:q(q({},Object(n.c)({loading:"usermanager/getLoading",users:"usermanager/getUsers"})),{},{selected:{get:function(){return this.value||[]},set:function(e){this.$emit("input",e)}},selectionLimit:function(){return Number(this.field.settings.limit)||1/0},addLimit:function(){return this.selectionLimit-this.selection.length}}),methods:q(q({},Object(n.b)({fetchUsers:"usermanager/fetchUsers"})),{},{push:function(){var e=this;_.forEach(this.selectedUsers,(function(t){return e.add(t)}))},add:function(e){if(this.addLimit>0){var t=_.find(this.selection,["id",e]),r=_.find(this.users,["id",e]);t||this.selection.push(r)}},open:function(){this.fetchUsers(),this.selection=U(this.selected),this.requestOpen=!0},close:function(){this.clearSelection(),this.selection=[],this.modalOpen=!1},reject:function(){this.close()},accept:function(){this.selected=this.selection,this.close()}})},M=Object(o.a)(I,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("label",{staticClass:"form__label",attrs:{for:e.field.handle}},[e._v(e._s(e.field.name))]),e._v(" "),r("div",{staticClass:"flex items-start justify-between"},[r("div",{staticClass:"w-1/2"},[r("ui-button",{attrs:{disabled:e.requestOpen},on:{click:e.open}},[r("fa-icon",{staticClass:"mr-1",attrs:{icon:["fas","plus-circle"]}}),e._v(" Manage Users\n\t\t\t\t")],1)],1),e._v(" "),r("user-selection",{staticClass:"w-1/2",attrs:{limit:e.selectionLimit,hasHeader:!1},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),r("ui-modal",{attrs:{name:"user-manager","no-header":"","no-footer":"","extra-large":""},model:{value:e.modalOpen,callback:function(t){e.modalOpen=t},expression:"modalOpen"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"side-container"},[r("user-selection",{attrs:{limit:e.selectionLimit},on:{reject:e.reject,accept:e.accept},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}})],1),e._v(" "),r("div",{staticClass:"content-container"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card__body"},[r("div",{staticClass:"toolbar"},[r("div",{staticClass:"toolbar__group"},[r("ui-button",{attrs:{icon:""},on:{click:function(t){return t.preventDefault(),e.push(t)}}},[r("fa-icon",{staticClass:"icon",attrs:{icon:"arrow-alt-circle-left"}})],1)],1),e._v(" "),r("div",{staticClass:"toolbar__group toolbar__group--grow"},[r("search-action")],1),e._v(" "),r("div",{staticClass:"toolbar__group"},[r("role-action"),e._v(" "),r("sort-action"),e._v(" "),r("view-action")],1)])]),e._v(" "),r("div",{staticClass:"gallery-container selectables"},[r("div",{staticClass:"gallery border-b border-gray-200 pb-2"},e._l(e.users,(function(t){return r("user-card",{key:t.id,attrs:{user:t},on:{dblclick:function(r){return e.add(t.id)}}})})),1)])])])])])],1)}),[],!1,null,null,null);t.default=M.exports},MZys:function(e,t,r){"use strict";r.r(t);var n=r("LXhb"),s=r.n(n),i=r("L2JU");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default={data:function(){return{selector:null}},computed:a({},Object(i.c)({selectedUsers:"usermanager/getSelected"})),methods:a(a({},Object(i.b)({toggleSelection:"usermanager/toggleSelection",clearSelection:"usermanager/clearSelection"})),{},{loadSelector:function(e){var t=this;this.selector=new s.a({area:e,selectables:e.querySelectorAll(".selectable"),callback:function(e){t.clearSelection(),_.forEach(e,(function(e){return t.toggleSelection(parseInt(e.dataset.selection))}))},onDragStart:function(e){(e.target.classList.contains("selectable--selected")||e.target.closest(".selectable--selected"))&&t.selector.break()}})},destroySelector:function(){this.selector&&this.selector.stop()}})}}}]);