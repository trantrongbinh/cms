(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{"/xnj":function(t,e,a){"use strict";a.r(e);var r=a("g6NE"),i={auth:function(){return{permission:"matrices.viewAny"}},head:{title:function(){return{inner:"Matrix"}}},data:function(){return{endpoint:"/datatable/matrices"}},methods:{destroy:function(t){axios.delete("/api/matrices/"+t).then((function(t){r.a.dispatch("navigation/fetchAdminNavigation"),toast("Matrix successfully deleted.","success"),bus().$emit("refresh-datatable-matrices")}))}}},n=a("KHd+"),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"matrix-page"},[a("portal",{attrs:{to:"title"}},[a("page-title",{attrs:{icon:"layer-group"}},[t._v("Matrix")])],1),t._v(" "),a("portal",{attrs:{to:"actions"}},[t.$can("matrices.create")?a("ui-button",{key:"create-matrix-btn",attrs:{to:{name:"matrices.create"},variant:"primary"}},[t._v("Create Matrix")]):t._e()],1),t._v(" "),a("ui-card",[a("ui-card-body",[a("ui-table",{key:"matrices",staticClass:"matrix-table",attrs:{id:"matrices",endpoint:t.endpoint,"sort-by":"name","primary-key":"handle","show-page-status":"","show-page-numbers":"","show-page-nav":"","show-page-ends":""},scopedSlots:t._u([{key:"name",fn:function(e){return[a("div",{staticClass:"flex items-center"},[a("ui-status",{staticClass:"mr-2",attrs:{value:e.record.status}}),t._v(" "),t.$can("matrices.update")?a("router-link",{attrs:{to:{name:"matrices.edit",params:{matrix:e.record.id}}}},[t._v(t._s(e.record.name))]):a("span",[t._v(t._s(e.record.name))])],1)]}},{key:"handle",fn:function(e){return[t._v("\n                    "+t._s(e.record.handle)+"\n                ")]}},{key:"type",fn:function(e){return[a("span",{staticClass:"badge"},[t._v(t._s(e.record.type))])]}},{key:"description",fn:function(e){return[a("span",{staticClass:"text-gray-800 text-sm"},[t._v(t._s(e.record.description))])]}},{key:"actions",fn:function(e){return[a("ui-table-actions",{key:"matrix_"+e.record.id+"_actions",attrs:{id:"matrix_"+e.record.id+"_actions"}},[t.$can("matrices.update")?a("ui-dropdown-link",{attrs:{to:{name:"matrices.edit",params:{matrix:e.record.id}}}},[t._v("Edit")]):t._e(),t._v(" "),a("ui-dropdown-divider"),t._v(" "),t.$can("matrices.delete")?a("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-matrix",value:e.record,expression:"table.record",arg:"delete-matrix"}],staticClass:"danger",on:{click:function(t){t.preventDefault()}}},[t._v("\n                            Delete\n                        ")]):t._e()],1)]}}])})],1)],1),t._v(" "),a("portal",{attrs:{to:"modals"}},[a("ui-modal",{key:"delete_matrix",attrs:{name:"delete-matrix",title:"Delete Matrix"},scopedSlots:t._u([{key:"footer",fn:function(e){return[a("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-matrix",arg:"delete-matrix"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(a){return t.destroy(e.data.id)}}},[t._v("Delete")]),t._v(" "),a("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-matrix",arg:"delete-matrix"}],attrs:{variant:"secondary"}},[t._v("Cancel")])]}}])},[a("p",[t._v("Are you sure you want to permenantly delete this matrix?")])])],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);