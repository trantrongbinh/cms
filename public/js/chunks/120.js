(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{rEap:function(t,n,e){"use strict";e.r(n),e.d(n,"getSettings",(function(){return a}));var s=e("nUVr");function a(t,n){axios.get("/api/settings/".concat(t)).then((function(t){n(null,t.data.data)})).catch((function(t){n(new Error("The requested settings could not be found"))}))}var o={auth:function(){return{permission:"settings.update"}},head:{title:function(){return{inner:this.group.name+" Settings"||!1}}},data:function(){return{group:{},form:null}},components:{"shared-form":e("C/Q/").a},methods:{submit:function(){this.form.patch("/api/settings/".concat(this.group.handle)).then((function(t){toast("Settings saved successfully","success")})).catch((function(t){toast(t.response.data.message,"failed")}))}},beforeRouteEnter:function(t,n,e){a(t.params.group,(function(t,n){e(t?function(n){n.$router.push("/settings"),toast(t.toString(),"danger")}:function(t){t.group=n,t.form=new s.a(n.settings),t.$emit("updateHead")})}))}},r=e("KHd+"),i=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("portal",{attrs:{to:"title"}},[e("page-title",{attrs:{icon:"cog"}},[t._v(t._s(t.group.name)+" Settings")])],1),t._v(" "),e("portal",{attrs:{to:"actions"}},[t.form?e("div",{staticClass:"buttons"},[e("ui-button",{attrs:{to:{name:"settings"},variant:"secondary"}},[t._v("Go Back")]),t._v(" "),e("ui-button",{attrs:{type:"submit",variant:"primary",disabled:!t.form.hasChanges},on:{click:function(n){return n.preventDefault(),t.submit(n)}}},[t._v("Save")])],1):t._e()]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col w-full"},[t.form?e("shared-form",{attrs:{form:t.form,group:t.group}}):t._e()],1)])],1)}),[],!1,null,null,null);n.default=i.exports}}]);