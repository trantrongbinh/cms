(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{M4DC:function(t,e,s){"use strict";var n={props:{resource:{type:Object,required:!1,default:function(){}},form:{type:Object,required:!0}}},a=s("KHd+"),r=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form-container",{scopedSlots:t._u([{key:"sidebar",fn:function(){return[s("div",{staticClass:"card"},[s("div",{staticClass:"card__body"},[s("p-slug",{attrs:{name:"handle",label:"Handle",autocomplete:"off",required:"",delimiter:"_",watch:t.form.name,"has-error":t.form.errors.has("handle"),"error-message":t.form.errors.get("handle")},model:{value:t.form.handle,callback:function(e){t.$set(t.form,"handle",e)},expression:"form.handle"}})],1)]),t._v(" "),t.resource?s("p-definition-list",[s("p-definition",{attrs:{name:"Created At"}},[t._v("\n                    "+t._s(t.$moment(t.resource.created_at).format("Y-MM-DD, hh:mm a"))+"\n                ")]),t._v(" "),s("p-definition",{attrs:{name:"Updated At"}},[t._v("\n                    "+t._s(t.$moment(t.resource.updated_at).format("Y-MM-DD, hh:mm a"))+"\n                ")])],1):t._e()]},proxy:!0}])},[s("portal",{attrs:{to:"actions"}},[s("div",{staticClass:"buttons"},[s("router-link",{staticClass:"button",attrs:{to:{name:"fieldsets"}}},[t._v("Go Back")]),t._v(" "),s("button",{staticClass:"button button--primary",class:{"button--disabled":!t.form.hasChanges},attrs:{type:"submit",disabled:!t.form.hasChanges},on:{click:function(e){return e.preventDefault(),t.$parent.submit(e)}}},[t._v("Save")])],1)]),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card__body"},[s("p-title",{attrs:{name:"name",autocomplete:"off",autofocus:"",required:"","has-error":t.form.errors.has("name"),"error-message":t.form.errors.get("name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),s("section-builder",{staticClass:"mt-6",model:{value:t.$parent.sections,callback:function(e){t.$set(t.$parent,"sections",e)},expression:"$parent.sections"}})],1)])],1)}),[],!1,null,null,null);e.a=r.exports},WciM:function(t,e,s){"use strict";s.r(e),s.d(e,"getFieldset",(function(){return a}));var n=s("nUVr");function a(t,e){axios.get("/api/fieldsets/"+t).then((function(t){e(null,t.data.data)})).catch((function(t){e(new Error("The requested fieldset could not be found"))}))}var r={head:{title:function(){return{inner:_.has(this.form,"name")?this.form.name:"Loading..."}}},data:function(){return{id:null,resource:null,sections:[],form:null}},components:{"shared-form":s("M4DC").a},methods:{submit:function(){var t=this;this.form.patch("/api/fieldsets/".concat(this.resource.id)).then((function(){axios.post("/api/fieldsets/".concat(t.resource.id,"/sections"),{sections:t.sections}).then((function(){toast("Fieldset successfully updated","success"),t.$router.push("/fieldsets")})).catch((function(t){toast(t.message,"failed")}))})).catch((function(t){toast(t.response.data.message,"failed")}))}},beforeRouteEnter:function(t,e,s){a(t.params.fieldset,(function(t,e){s(t?function(e){e.$router.push("/fieldsets"),toast(t.toString(),"danger")}:function(t){t.resource=e,t.sections=e.sections,t.form=new n.a({name:e.name,handle:e.handle},!0),t.$nextTick((function(){t.$emit("updateHead")}))})}))}},o=s("KHd+"),i=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("portal",{attrs:{to:"title"}},[e("app-title",{attrs:{icon:"list"}},[this._v("Edit Fieldset")])],1),this._v(" "),this.form?e("shared-form",{attrs:{form:this.form,resource:this.resource}}):this._e()],1)}),[],!1,null,null,null);e.default=i.exports}}]);