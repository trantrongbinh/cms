(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{EACl:function(t,e,n){"use strict";e.a={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(t){this.$set(this.value.settings,t)}},errors:function(){return this.value.errors||{}}}}},n6vu:function(t,e,n){"use strict";n.r(e);var o={name:"taxonomy-fieldtype-settings",mixins:[n("EACl").a],data:function(){return{taxonomies:[{label:"No",value:0},{label:"Yes",value:1}]}},methods:{fetchTaxonomies:function(){var t=this;axios.get("/api/taxonomies").then((function(e){t.taxonomies=_.map(e.data.data,(function(t){return{label:t.name,value:t.id}}))}))}},mounted:function(){this.fetchTaxonomies()}},s=n("KHd+"),a=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ui-select-group",{attrs:{name:"taxonomy",label:"Taxonomy",help:"The taxonomy from which to show terms.",autocomplete:"off",options:t.taxonomies,"has-error":t.errors.has("settings.taxonomy"),"error-message":t.errors.get("settings.taxonomy")},model:{value:t.settings.taxonomy,callback:function(e){t.$set(t.settings,"taxonomy",e)},expression:"settings.taxonomy"}})],1)}),[],!1,null,null,null);e.default=a.exports}}]);