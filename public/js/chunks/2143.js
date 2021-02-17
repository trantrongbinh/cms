(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[2143],{5550:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n={methods:{isAssignable:function(e,t){return!_.includes(["guest"],e)&&this.$level(t)},isRemovable:function(e,t){return!_.includes(["owner","user","guest"],e)&&this.$level(t)},hasPermissions:function(e){return!_.includes(["owner"],e)}}}},2143:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});const n={auth:function(){return{permission:"roles.viewAny"}},head:{title:function(){return{inner:"Roles"}}},mixins:[r(5550).Z],data:function(){return{transfer:"",roles:[]}},methods:{roleOptions:function(e){var t=_.reject(this.roles,(function(t){return e==t.handle}));return _.map(t,(function(e){return{label:e.name,value:e.handle}}))},destroy:function(e){var t=this;axios.delete("/api/roles/".concat(e),{data:{transfer:this.transfer}}).then((function(e){t.transfer="",toast("Role successfully deleted.","success"),bus().$emit("refresh-datatable-roles")}))},isOwner:function(e){return e&&1===e}},created:function(){var e=this;bus().$on("modal-opened",(function(t){"delete-role"==t&&(e.transfer="")}))},beforeRouteEnter:function(e,t,r){axios.get("/api/roles").then((function(e){r((function(t){return t.roles=e.data.data}))})).catch((function(e){r((function(e){e.$router.push("/roles"),toast(error.toString(),"danger")}))}))}};const o=(0,r(1900).Z)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"roles-page"},[r("portal",{attrs:{to:"title"}},[r("page-title",{attrs:{icon:"user-shield"}},[e._v("Roles")])],1),e._v(" "),r("portal",{attrs:{to:"actions"}},[e.$can("roles.create")?r("ui-button",{key:"create-role-btn",attrs:{to:{name:"roles.create"},variant:"primary"}},[e._v("Create Role")]):e._e()],1),e._v(" "),r("ui-card",[r("ui-card-body",[r("ui-table",{key:"roles",staticClass:"roles-table",attrs:{id:"roles",endpoint:"/datatable/roles","sort-by":"level","show-page-status":"","show-page-numbers":"","show-page-nav":"","show-page-ends":""},scopedSlots:e._u([{key:"name",fn:function(t){return[e.$can("roles.view")?r("router-link",{attrs:{to:{name:"roles.show",params:{role:t.record.id}}}},[e._v(e._s(t.record.name))]):r("span",[e._v(e._s(t.record.name))])]}},{key:"level",fn:function(t){return[r("ui-badge",[e._v(e._s(t.record.level))])]}},{key:"description",fn:function(t){return[r("span",{staticClass:"text-gray-800 text-sm"},[e._v(e._s(t.record.description))])]}},{key:"actions",fn:function(t){return[r("ui-actions",{key:"role_"+t.record.id+"_actions",attrs:{id:"role_"+t.record.id+"_actions"}},[e.$can("roles.view")?r("ui-dropdown-link",{attrs:{to:{name:"roles.show",params:{role:t.record.id}}}},[e._v("\n                            View\n                        ")]):e._e(),e._v(" "),!e.isOwner(t.record.id)&&e.$can("roles.update",t.record.level)?r("ui-dropdown-link",{attrs:{to:{name:"roles.edit",params:{role:t.record.id}}},on:{click:function(e){e.preventDefault()}}},[e._v("\n                            Edit\n                        ")]):e._e(),e._v(" "),e.isRemovable(t.record.handle)&&e.$can("roles.delete",t.record.level)?r("ui-dropdown-divider"):e._e(),e._v(" "),e.isRemovable(t.record.handle)&&e.$can("roles.delete",t.record.level)?r("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-role",value:t.record,expression:"table.record",arg:"delete-role"}],attrs:{classes:"danger"},on:{click:function(e){e.preventDefault()}}},[e._v("\n                            Delete\n                        ")]):e._e()],1)]}}])})],1)],1),e._v(" "),r("portal",{attrs:{to:"modals"}},[r("ui-modal",{attrs:{name:"delete-role",title:"Delete Role"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v("Please select another role to move users to.")]),e._v(" "),t.data?r("ui-select-group",{attrs:{id:"move-role",name:"move_role",label:"Transfer to Role",options:e.roleOptions(t.data.handle),autocomplete:"off"},model:{value:e.transfer,callback:function(t){e.transfer=t},expression:"transfer"}}):e._e()]}},{key:"footer",fn:function(t){return[r("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-role",arg:"delete-role"}],staticClass:"ml-3",attrs:{variant:"danger",disabled:0==e.transfer.length},on:{click:function(r){return e.destroy(t.data.id)}}},[e._v("Delete")]),e._v(" "),r("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-role",arg:"delete-role"}],attrs:{variant:"secondary"}},[e._v("Cancel")])]}}])})],1)],1)}),[],!1,null,null,null).exports}}]);