(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{M4DC:function(t,e,s){"use strict";var a={props:{resource:{type:Object,required:!1,default:function(){}},form:{type:Object,required:!0}}},r=s("KHd+"),n=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form-container",{scopedSlots:t._u([{key:"sidebar",fn:function(){return[s("div",{staticClass:"card"},[s("div",{staticClass:"card__body"},[s("p-slug",{attrs:{name:"handle",label:"Handle",autocomplete:"off",required:"",delimiter:"_",watch:t.form.name,"has-error":t.form.errors.has("handle"),"error-message":t.form.errors.get("handle")},model:{value:t.form.handle,callback:function(e){t.$set(t.form,"handle",e)},expression:"form.handle"}})],1)]),t._v(" "),t.resource?s("p-definition-list",[s("p-definition",{attrs:{name:"Created At"}},[t._v("\n                    "+t._s(t.$moment(t.resource.created_at).format("Y-MM-DD, hh:mm a"))+"\n                ")]),t._v(" "),s("p-definition",{attrs:{name:"Updated At"}},[t._v("\n                    "+t._s(t.$moment(t.resource.updated_at).format("Y-MM-DD, hh:mm a"))+"\n                ")])],1):t._e()]},proxy:!0}])},[s("portal",{attrs:{to:"actions"}},[s("div",{staticClass:"buttons"},[s("router-link",{staticClass:"button",attrs:{to:{name:"fieldsets"}}},[t._v("Go Back")]),t._v(" "),s("button",{staticClass:"button button--primary",class:{"button--disabled":!t.form.hasChanges},attrs:{type:"submit",disabled:!t.form.hasChanges},on:{click:function(e){return e.preventDefault(),t.$parent.submit(e)}}},[t._v("Save")])],1)]),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card__body"},[s("p-title",{attrs:{name:"name",autocomplete:"off",autofocus:"",required:"","has-error":t.form.errors.has("name"),"error-message":t.form.errors.get("name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),s("section-builder",{staticClass:"mt-6",model:{value:t.$parent.sections,callback:function(e){t.$set(t.$parent,"sections",e)},expression:"$parent.sections"}})],1)])],1)}),[],!1,null,null,null);e.a=n.exports},onVS:function(t,e,s){"use strict";s.r(e);var a=s("nUVr"),r={head:{title:function(){return{inner:"Create a Fieldset"}}},data:function(){return{sections:[],form:new a.a({name:"",handle:""},!0)}},components:{"shared-form":s("M4DC").a},methods:{submit:function(){var t=this;this.form.post("/api/fieldsets").then((function(e){axios.post("/api/fieldsets/".concat(e.data.id,"/sections"),{sections:t.sections}).then((function(){toast("Fieldset successfully created","success"),t.$router.push("/fieldsets")})).catch((function(t){toast(t.message,"failed")}))})).catch((function(t){toast(t.message,"failed")}))}}},n=s("KHd+"),o=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("portal",{attrs:{to:"title"}},[e("app-title",{attrs:{icon:"list"}},[this._v("Create Fieldset")])],1),this._v(" "),e("shared-form",{attrs:{form:this.form}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);