(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{ukH2:function(t,e,n){"use strict";n.r(e),n.d(e,"getEntry",(function(){return o}));var l=n("nUVr");function o(t,e,n){axios.get("/api/collections/"+t+"/"+e).then((function(t){var e=t.data.data.matrix,l=t.data.data.entry,o={name:l.name,slug:l.slug,status:l.status};_.forEach(e.blueprint.sections,(function(t){_.forEach(t.fields,(function(t){o[t.handle]=l[t.handle]}))})),n(null,l,e,o)})).catch((function(t){n(new Error("The requested entry could not be found"))}))}var s={head:{title:function(){return{inner:_.has(this.form,"name")?this.form.name:"Loading..."}}},data:function(){return{collection:{},entry:{},form:null}},components:{"shared-form":n("ummp").a},methods:{submit:function(){var t=this;this.form.patch("/api/collections/"+this.collection.slug+"/"+this.entry.id).then((function(e){toast("Entry saved successfully","success"),t.$router.push("/collection/"+t.collection.slug)})).catch((function(t){toast(t.message,"failed")}))}},beforeRouteEnter:function(t,e,n){o(t.params.collection,t.params.id,(function(t,e,o,s){n(t?function(e){e.$router.push("/collection/"+e.$router.currentRoute.params.collection),toast(t.toString(),"danger")}:function(t){t.collection=o,t.entry=e,t.form=new l.a(s,!0),t.$emit("updateHead")})}))},beforeRouteUpdate:function(t,e,n){var s=this;o(t.params.collection,t.params.id,(function(t,e,n,o){t?(s.$router.push("/collection/"+s.$router.currentRoute.params.collection),toast(t.toString(),"danger")):(s.collection=n,s.entry=e,s.form=new l.a(o,!0),s.$emit("updateHead"))})),n()}},a=n("KHd+"),i=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collection-page"},[n("portal",{attrs:{to:"title"}},[n("page-title",{attrs:{icon:t.collection.icon||"pencil-alt",subtitle:t.collection.description}},[t._v("Edit "+t._s(t.collection.reference_singular))])],1),t._v(" "),t.form?n("shared-form",{attrs:{form:t.form,entry:t.entry,collection:t.collection}}):t._e()],1)}),[],!1,null,null,null);e.default=i.exports},ummp:function(t,e,n){"use strict";var l={props:{entry:{required:!1},collection:{required:!0},form:{type:Object,required:!0}},data:function(){return{editSlug:!1,slugValue:""}},computed:{sections:function(){return{body:_.filter(this.collection.blueprint.sections,(function(t){return"body"==t.placement})),sidebar:_.filter(this.collection.blueprint.sections,(function(t){return"sidebar"==t.placement}))}}},methods:{openEdit:function(){this.slugValue=this.form.slug,this.editSlug=!0,this.slugFocus()},closeEdit:function(){this.slugValue="",this.editSlug=!1,this.editBtnFocus()},saveSlug:function(){""===this.slugValue?this.slugValue=this.form.slug:this.form.slug=this.slugValue,this.closeEdit()},slugFocus:function(){var t=this;this.$nextTick((function(){t.$refs.slug.$el.focus()}))},editBtnFocus:function(){var t=this;this.$nextTick((function(){t.$refs.edit.$el.focus()}))}}},o=n("KHd+"),s=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("portal",{attrs:{to:"actions"}},[n("div",{staticClass:"buttons"},[t.collection.slug&&"sm"!=t.$mq?n("ui-button",{attrs:{to:{name:"collection.index",params:{collection:t.collection.slug}},variant:"secondary"}},[t._v("Go Back")]):t._e(),t._v(" "),n("ui-button",{attrs:{type:"submit",variant:"primary",disabled:!t.form.hasChanges},on:{click:function(e){return e.preventDefault(),t.$parent.submit(e)}}},[t._v("Save")])],1)]),t._v(" "),n("portal",{attrs:{to:"sidebar-right"}},[t.collection?n("sidebar",{attrs:{id:"collection-sidebar"}},[n("sidebar-section",{attrs:{id:"collection_panel_status",tabindex:"-1"}},[n("ui-toggle",{attrs:{name:"status",label:"Status",help:t.form.status?"Toggle to disable this entry.":"Toggle to enable this entry.","true-value":1,"false-value":0},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1),t._v(" "),t._l(t.sections.sidebar,(function(e){return n("sidebar-section",{key:e.handle,attrs:{id:"collection_panel_"+e.handle,title:e.name,description:e.description,tabindex:"-1"}},t._l(e.fields,(function(e){return n(e.type.id+"-fieldtype",{key:e.handle,tag:"component",attrs:{field:e,"has-error":t.form.errors.has(e.handle),"error-message":t.form.errors.get(e.handle)},model:{value:t.form[e.handle],callback:function(n){t.$set(t.form,e.handle,n)},expression:"form[field.handle]"}})})),1)})),t._v(" "),t.entry?n("status-card",{attrs:{id:"collection_panel_status_card",entry:t.entry,tabindex:"-1"}}):t._e()],2):t._e()],1),t._v(" "),t.collection.show_name_field?n("ui-card",{attrs:{id:"collection_panel_"+t.collection.handle,tabindex:"-1"}},[n("ui-card-body",[t.collection.show_name_field?n("ui-title-group",{staticClass:"mb-0",attrs:{name:"name",label:t.collection.name_label||"Name",autocomplete:"off",autofocus:"",required:"",readonly:t.editSlug,placeholder:t.collection.name_label||"Name","has-error":t.form.errors.has("name"),"error-message":t.form.errors.get("name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}):t._e(),t._v(" "),t.form.slug?n("div",{staticClass:"entry-slug"},[t.editSlug?t._e():n("div",{staticClass:"entry-slug__current"},[n("span",{staticClass:"entry-slug__label"},[t._v("Slug:")]),t._v(" "),n("span",{staticClass:"entry-slug__value"},[t._v(t._s(t.form.slug))]),t._v(" "),n("ui-button",{ref:"edit",staticClass:"entry-slug__action",attrs:{size:"xsmall"},on:{click:function(e){return e.preventDefault(),t.openEdit()}}},[t._v("Edit")])],1),t._v(" "),t.editSlug?n("div",{staticClass:"entry-slug__edit"},[t.editSlug?n("label",{staticClass:"entry-slug__label",attrs:{for:"edit-slug"}},[t._v("Slug:")]):t._e(),t._v(" "),n("ui-slug",{ref:"slug",staticClass:"field--xs",attrs:{id:"edit-slug",name:"edit_slug",monospaced:"",autocomplete:"off"},model:{value:t.slugValue,callback:function(e){t.slugValue=e},expression:"slugValue"}}),t._v(" "),n("ui-button",{staticClass:"entry-slug__action",attrs:{variant:"primary",size:"xsmall"},on:{click:function(e){return e.preventDefault(),t.saveSlug()}}},[t._v("Apply")]),t._v(" "),n("ui-button",{staticClass:"entry-slug__action",attrs:{variant:"secondary",size:"xsmall"},on:{click:function(e){return e.preventDefault(),t.closeEdit()}}},[t._v("Cancel")])],1):t._e()]):t._e(),t._v(" "),t.collection.show_name_field||t.entry.id?n("ui-slug",{attrs:{type:"hidden",name:"slug",label:"Slug",monospaced:"",autocomplete:"off",required:"",help:t.collection.show_name_field?"":"This field is auto-generated based on pattern specified.",watch:t.form.name,readonly:!t.collection.show_name_field,"has-error":t.form.errors.has("slug"),"error-message":t.form.errors.get("slug")},model:{value:t.form.slug,callback:function(e){t.$set(t.form,"slug",e)},expression:"form.slug"}}):t._e()],1)],1):t._e(),t._v(" "),t._l(t.sections.body,(function(e){return n("section-card",{key:e.handle,attrs:{id:"collection_panel_"+e.handle,title:e.name,description:e.description,tabindex:"-1"}},t._l(e.fields,(function(e){return n(e.type.id+"-fieldtype",{key:e.handle,tag:"component",attrs:{field:e,errors:t.form.errors},model:{value:t.form[e.handle],callback:function(n){t.$set(t.form,e.handle,n)},expression:"form[field.handle]"}})})),1)}))],2)}),[],!1,null,null,null);e.a=s.exports}}]);