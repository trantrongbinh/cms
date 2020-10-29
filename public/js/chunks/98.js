(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{WE88:function(a,n,t){"use strict";t.r(n);var e={head:{title:function(){return{inner:"Addons"}}},data:function(){return{endpoint:"/datatable/addons"}},methods:{upload:function(a){var n=this;if(void 0!==a){var t=new FormData;t.append("_method","POST"),t.append("file-upload",a),axios.post("/api/addons/upload",t).then((function(a){bus().$emit("toggle-modal-upload-addon"),n.$refs.upload.remove(),n.refresh("Addon successfully uploaded.")})).catch((function(a){return n.refresh(a.response.data.message,"danger")}))}},enable:function(a){var n=this;axios.post("/api/addons/".concat(a,"/enable")).then((function(a){n.refresh("Addon successfully enabled."),a.data.data.redirect&&a.data.data.redirect.enable&&n.$router.push(a.data.data.redirect.enable)})).catch((function(a){return n.refresh(a.response.data.message,"danger")}))},disable:function(a){var n=this;axios.post("/api/addons/".concat(a,"/disable")).then((function(a){return n.refresh("Addon successfully disabled.")})).catch((function(a){return n.refresh(a.response.data.message,"danger")}))},install:function(a){var n=this;axios.post("/api/addons/".concat(a,"/install")).then((function(a){n.refresh("Addon successfully installed."),a.data.data.redirect.install&&(location.href="/".concat(config.path,"/").concat(a.data.data.redirect.install))})).catch((function(a){return n.refresh(a.response.data.message,"danger")}))},uninstall:function(a){var n=this;axios.post("/api/addons/".concat(a,"/uninstall")).then((function(a){return n.refresh("Addon successfully uninstalled.")})).catch((function(a){return n.refresh(a.response.data.message,"danger")}))},refresh:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";a&&toast(a,n),this.$store.dispatch("navigation/fetchAdminNavigation"),bus().$emit("refresh-datatable-addons")}}},d=t("KHd+"),o=Object(d.a)(e,(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",[t("portal",{attrs:{to:"title"}},[t("page-title",{attrs:{icon:"box-open"}},[a._v("Addons")])],1),a._v(" "),t("portal",{attrs:{to:"actions"}},[t("ui-button",{directives:[{name:"modal",rawName:"v-modal:upload-addon",arg:"upload-addon"}]},[a._v("Upload Addon")])],1),a._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"content-container"},[t("ui-table",{key:"addons_table",attrs:{endpoint:a.endpoint,id:"addons","sort-by":"name","primary-key":"handle"},scopedSlots:a._u([{key:"name",fn:function(n){return[t("div",{staticClass:"flex items-center"},[n.record.installed?t("ui-status",{staticClass:"mr-2",attrs:{value:n.record.enabled}}):t("ui-status",{staticClass:"mr-2"}),a._v("\n\n                        "+a._s(n.record.name)+"\n                    ")],1)]}},{key:"version",fn:function(n){return[t("span",{staticClass:"badge"},[a._v(a._s(n.record.version))])]}},{key:"description",fn:function(n){return[t("span",{staticClass:"text-gray-800 text-sm"},[a._v(a._s(n.record.description))])]}},{key:"actions",fn:function(n){return[t("ui-table-actions",{directives:[{name:"show",rawName:"v-show",value:n.record.installed,expression:"table.record.installed"}],key:"addon_"+n.record.slug+"_actions_installed",attrs:{id:"addon_"+n.record.slug+"_actions_installed"}},[n.record.enabled?t("ui-dropdown-link",{on:{click:function(t){return a.disable(n.record.slug)}}},[a._v("Disable")]):t("ui-dropdown-link",{on:{click:function(t){return a.enable(n.record.slug)}}},[a._v("Enable")]),a._v(" "),t("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:uninstall-addon",value:n.record.slug,expression:"table.record.slug",arg:"uninstall-addon"}],attrs:{classes:"link--danger"},on:{click:function(a){a.preventDefault()}}},[a._v("\n                            Uninstall\n                        ")])],1),a._v(" "),t("ui-table-actions",{directives:[{name:"show",rawName:"v-show",value:!n.record.installed,expression:"!table.record.installed"}],key:"addon_"+n.record.slug+"_actions_uninstalled",attrs:{id:"addon_"+n.record.slug+"_actions_uninstalled"}},[t("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:install-addon",value:n.record.slug,expression:"table.record.slug",arg:"install-addon"}]},[a._v("\n                            Install\n                        ")])],1)]}}])})],1)]),a._v(" "),t("portal",{attrs:{to:"modals"}},[t("ui-modal",{key:"uninstall_addon",attrs:{name:"uninstall-addon",title:"Uninstall Addon"},scopedSlots:a._u([{key:"footer",fn:function(n){return[t("ui-button",{directives:[{name:"modal",rawName:"v-modal:uninstall-addon",arg:"uninstall-addon"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(t){return a.uninstall(n.data)}}},[a._v("Uninstall")]),a._v(" "),t("ui-button",{directives:[{name:"modal",rawName:"v-modal:uninstall-addon",arg:"uninstall-addon"}]},[a._v("Cancel")])]}}])},[t("p",[a._v("Existing data related to this addon will be removed.")]),a._v(" "),t("p",[a._v("Are you sure you want to uninstall this addon?")])]),a._v(" "),t("ui-modal",{key:"install_addon",attrs:{name:"install-addon",title:"Install Addon"},scopedSlots:a._u([{key:"footer",fn:function(n){return[t("ui-button",{directives:[{name:"modal",rawName:"v-modal:install-addon",arg:"install-addon"}],staticClass:"ml-3",attrs:{variant:"success"},on:{click:function(t){return a.install(n.data)}}},[a._v("Install")]),a._v(" "),t("ui-button",{directives:[{name:"modal",rawName:"v-modal:install-addon",arg:"install-addon"}]},[a._v("Cancel")])]}}])},[t("p",[a._v("Are you sure you want to install this addon?")])]),a._v(" "),t("ui-modal",{key:"update_addon",attrs:{name:"update-addon",title:"Update Module"},scopedSlots:a._u([{key:"footer",fn:function(n){return[t("ui-button",{directives:[{name:"modal",rawName:"v-modal:update-addon",arg:"update-addon"}],staticClass:"ml-3",attrs:{variant:"warning"},on:{click:function(t){return a.update(n.data)}}},[a._v("Update")]),a._v(" "),t("ui-button",{directives:[{name:"modal",rawName:"v-modal:update-addon",arg:"update-addon"}]},[a._v("Cancel")])]}}])},[t("p",[a._v("This will migrate any new migrations and run db:seed.")]),a._v(" "),t("p",[a._v("Are you sure you want to proceed?")])]),a._v(" "),t("ui-modal",{key:"upload_addon",attrs:{name:"upload-addon",title:"Upload Addon"}},[t("ui-upload",{ref:"upload",attrs:{name:"file-upload",label:"Addon",accept:"zip",multiple:!1},on:{input:a.upload}})],1)],1)],1)}),[],!1,null,null,null);n.default=o.exports}}]);