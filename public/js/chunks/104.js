(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{cZeF:function(e,t,i){"use strict";i.r(t);var a=i("T7iU"),r=i.n(a),o=i("nUVr"),n=i("Huo5"),l=i("L2JU");function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){f(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function f(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var u={auth:function(){return{permission:"files.view"}},head:{title:function(){return{inner:this.file.name||"Loading..."}}},mixins:[n.default],data:function(){return{file:{},form:new o.a,player:null,loaded:!1}},computed:{fileSrc:function(e){return"".concat(this.file.url,"?w=1500&h=1500&fit=max&t=").concat(this.$moment.utc(this.file.updated_at).format("X"))}},watch:{file:{handler:function(e){var t=this;this.$nextTick((function(){t.player=new r.a(t.$refs.player,{title:t.file.name,ratio:"16:9",controls:["play-large","restart","play","progress","current-time","duration","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["quality","loop"]})}))},deep:!0}},methods:c(c({},Object(l.b)({toggleSelection:"filemanager/toggleFileSelection"})),{},{getFile:function(e,t,i){var a=this;axios.get("/api/files/"+e.params.uuid).then((function(e){a.file=e.data.data,a.loaded=!0,a.form=new o.a({name:a.file.name,title:a.file.title,alt:a.file.alt,caption:a.file.caption}),a.toggleSelection(a.file.id),a.$emit("updateHead")}))},submit:function(){var e=this;this.form.patch("/api/files/".concat(this.file.id)).then((function(t){e.file.name=e.form.name,toast("The file's information was successfully updated","success")})).catch((function(e){toast(e.response.data.message,"danger")}))},back:function(){this.$router.push({name:"file-manager.index"})},download:function(){var e=this;axios({url:"/api/files/".concat(this.file.uuid,"/download"),method:"GET",responseType:"blob"}).then((function(t){var i=window.URL.createObjectURL(new Blob([t.data])),a=document.createElement("a");a.href=i,a.setAttribute("download","".concat(e.file.name,".").concat(e.file.extension)),document.body.appendChild(a),a.click()}))}}),beforeRouteEnter:function(e,t,i){i((function(a){a.getFile(e,t,i)}))},beforeRouteUpdate:function(e,t,i){this.getFile(e,t,i),i()}},d=i("KHd+"),m=Object(d.a)(u,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("form-container",{scopedSlots:e._u([{key:"sidebar",fn:function(){return[i("div",{staticClass:"card"},[i("div",{staticClass:"card__body"},[i("ui-slug-group",{attrs:{name:"name",label:"Filename",autofocus:"",required:"",autocomplete:"off",help:"The filename dictates the Share URL below.",placeholder:"Filename","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),i("ui-input-group",{attrs:{name:"title",label:"Title",autocomplete:"off",help:"The title targets the title html attributes, which is a nice-to-have feature.",placeholder:"Title (optional)","has-error":e.form.errors.has("title"),"error-message":e.form.errors.get("title")},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}}),e._v(" "),i("ui-input-group",{attrs:{name:"alt",label:"Alt",autocomplete:"off",placeholder:"Alt (optional)",help:"This value targets the alt html attributes, required for accessibility.","has-error":e.form.errors.has("alt"),"error-message":e.form.errors.get("alt")},model:{value:e.form.alt,callback:function(t){e.$set(e.form,"alt",t)},expression:"form.alt"}}),e._v(" "),i("ui-textarea-group",{attrs:{name:"caption",label:"Caption",help:"This caption is used for image captions to give users more information.",placeholder:"Caption (optional)","has-error":e.form.errors.has("caption"),"error-message":e.form.errors.get("caption")},model:{value:e.form.caption,callback:function(t){e.$set(e.form,"caption",t)},expression:"form.caption"}})],1)]),e._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"card__body"},[i("ui-input-group",{staticClass:"text-sm",attrs:{name:"share",readonly:"",label:"Share",value:e.file.url}})],1)]),e._v(" "),e.file.created_at?i("ui-definition-list",[i("ui-definition",{attrs:{name:"Size"}},[e._v("\n                "+e._s(e._f("bytes")(e.file.bytes))+"\n            ")]),e._v(" "),i("ui-definition",{attrs:{name:"Mimetype"}},[e._v("\n                "+e._s(e.file.mimetype)+"\n            ")]),e._v(" "),e.file.dimensions?i("ui-definition",{attrs:{name:"Dimensions"}},[e._v("\n                "+e._s(e.file.dimensions.width)+" x "+e._s(e.file.dimensions.height)+"\n            ")]):e._e(),e._v(" "),i("ui-definition",{attrs:{name:"Last Modified"}},[e._v("\n                "+e._s(e.$moment(e.file.created_at.date).format("L"))+"\n            ")])],1):e._e()]},proxy:!0}])},[i("portal",{attrs:{to:"title"}},[i("page-title",{attrs:{icon:"image"},domProps:{textContent:e._s(e.form.name)}})],1),e._v(" "),i("portal",{attrs:{to:"actions"}},[i("div",{staticClass:"buttons"},[i("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete",arg:"delete"}],attrs:{variant:"primary"}},[e._v("Delete")]),e._v(" "),i("ui-button",{directives:[{name:"modal",rawName:"v-modal:move-file",arg:"move-file"}]},[e._v("Move")]),e._v(" "),i("ui-button",{directives:[{name:"modal",rawName:"v-modal:replace-file",arg:"replace-file"}]},[e._v("Replace")]),e._v(" "),i("ui-button",{on:{click:function(t){return t.preventDefault(),e.download(t)}}},[e._v("Download")]),e._v(" "),i("ui-button",{on:{click:function(t){return t.preventDefault(),e.back(t)}}},[e._v("Go Back")]),e._v(" "),i("ui-button",{attrs:{variant:"primary"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save")])],1)]),e._v(" "),i("portal",{attrs:{to:"modals"}},[i("move-file-modal"),e._v(" "),i("replace-file-modal",{attrs:{file:e.file},on:{replaced:function(t){return e.file=t}}}),e._v(" "),i("delete-file-modal",{attrs:{file:e.file}})],1),e._v(" "),e.loaded?i("div",{key:e.file.name,staticClass:"card"},[i("div",{staticClass:"card__body flex items-center justify-center"},["image"==e.file.type?i("div",[i("ui-img",{staticClass:"rounded",attrs:{src:e.fileSrc,alt:e.file.alt,"background-color":"#ffffff"}})],1):"video"==e.file.type?i("div",{staticClass:"w-full"},[i("video",{ref:"player",attrs:{controls:"",crossorigin:""}},[i("source",{attrs:{src:e.file.url,type:e.file.mimetype,size:"576"}})])]):"audio"==e.file.type?i("div",[i("audio",{attrs:{controls:""}},[i("source",{attrs:{src:e.file.url,type:e.file.mimetype}})])]):i("div",[i("ui-img",{attrs:{src:"/vendor/fusion/img/"+e.file.type+"-small.svg","background-color":"#ffffff",width:200,height:200,alt:e.file.alt}}),e._v(" "),i("div",{staticClass:"text-center px-6 py-3 rounded border border-gray-400 bg-gray-200 text-gray-800"},[e._v("\n                    No preview available\n                ")])],1)])]):e._e(),e._v(" "),"video"==e.file.type?i("div",{staticClass:"card"},[i("div",{staticClass:"card__body text-center text-sm text-gray-800"},[e._v("\n            If you intend on serving this video on your website, it's highly recommended that you use a 3rd party service such as "),i("a",{attrs:{href:""}},[e._v("Youtube")]),e._v(" or "),i("a",{attrs:{href:""}},[e._v("Vimeo")]),e._v(".\n        ")])]):e._e()],1)}),[],!1,null,null,null);t.default=m.exports}}]);