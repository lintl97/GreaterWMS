(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{"15c3":function(t,e,a){"use strict";var o=a("462f"),n=a.n(o);e["default"]=n.a},"462f":function(t,e){},"6d4e":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md",staticStyle:{width:"100%","margin-top":"-20px"}},[a("q-table",{attrs:{title:"Treats",dense:"",data:t.data,columns:t.columns,separator:t.separator,filter:t.filter,loading:t.loading,"hide-bottom":"",pagination:t.pagination,"no-data-label":"没有找到任何数据","no-results-label":"没有找到您想要的数据","table-style":{height:t.height}},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("q-uploader",{staticStyle:{"max-width":"100%"},attrs:{url:t.cyclecountlist,label:"选择文件",color:"purple",square:"",flat:"",bordered:"","auto-upload":"",method:"put","field-name":function(t){return"file"}},on:{finish:function(e){return t.successUpload()},failed:function(e){return t.failUpload()}},scopedSlots:t._u([{key:"header",fn:function(e){return[a("div",{staticClass:"row no-wrap items-center q-pa-sm q-gutter-xs"},[e.queuedFiles.length>0?a("q-btn",{attrs:{icon:"clear_all",round:"",dense:"",flat:""},on:{click:e.removeQueuedFiles}},[a("q-tooltip",[t._v("移除所有上传的文件")])],1):t._e(),e.uploadedFiles.length>0?a("q-btn",{attrs:{icon:"done_all",round:"",dense:"",flat:""},on:{click:e.removeUploadedFiles}},[a("q-tooltip",[t._v("移除上传的文件")])],1):t._e(),e.isUploading?a("q-spinner",{staticClass:"q-uploader__spinner"}):t._e(),a("div",{staticClass:"col"},[a("div",{staticClass:"q-uploader__title"},[t._v("上传到服务器进行盘点")]),a("div",{staticClass:"q-uploader__subtitle"},[t._v(t._s(e.uploadSizeLabel)+" / "+t._s(e.uploadProgressLabel))])]),e.canAddFiles?a("q-btn",{attrs:{type:"a",icon:"add_box",round:"",dense:"",flat:""}},[a("q-uploader-add-trigger"),a("q-tooltip",[t._v("选择一个文件")])],1):t._e(),e.canUpload?a("q-btn",{attrs:{icon:"cloud_upload",round:"",dense:"",flat:""},on:{click:e.upload}},[a("q-tooltip",[t._v("上传到服务器")])],1):t._e(),e.isUploading?a("q-btn",{attrs:{icon:"clear",round:"",dense:"",flat:""},on:{click:e.abort}},[a("q-tooltip",[t._v("Abort Upload")])],1):t._e()],1)]}}])}),a("q-space"),a("q-btn",{staticStyle:{"margin-right":"20px"},attrs:{label:"下载盘点表",icon:"cloud_download"},on:{click:function(e){return t.downloadexample("1")}}}),a("q-btn",{staticStyle:{"margin-right":"20px"},attrs:{label:"下载盘点结果",icon:"cloud_download"},on:{click:function(e){return t.downloadexample("2")}}}),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:"本页关键字搜索"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"no-data",fn:function(e){var o=e.icon,n=e.message,i=e.filter;return[a("div",{staticClass:"full-width row flex-center text-accent q-gutter-sm"},[a("q-icon",{attrs:{size:"2em",name:"sentiment_dissatisfied"}}),a("span",[t._v("\n            Well this is sad... "+t._s(n)+"\n          ")]),a("q-icon",{attrs:{size:"2em",name:i?"filter_b_and_w":o}})],1)]}}])}),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-pagination",{staticStyle:{"z-index":"1000"},attrs:{color:"purple",max:t.totlepage,"max-pages":7,"boundary-links":!0,"direction-links":!0,"boundary-numbers":!0},on:{click:function(e){return t.pageChange()}},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1)]],2)},n=[],i=a("758b"),r=a("b06b"),s={name:"Pagecyclecount",data:function(){return{pathname:"cyclecount/",authorization_get:!1,authorization_post:!1,authorization_getfile:!1,authorization_delete:!1,authorization_patch:!1,cyclecountlist:"",separator:"cell",loading:!1,filter:"",totlepage:1,current:1,height:"",columns:[{name:"name",required:!0,label:"库位名称",align:"left",field:"name"},{name:"goods_code",label:"商品编码",field:"goods_code"},{name:"goods_name",label:"商品描述",field:"goods_name"},{name:"goods_qty",label:"盘点数量",field:"goods_qty"},{name:"cycle_count_balance",label:"盘点差异",field:"cycle_count_balance"},{name:"staff",label:"盘点用户名",field:"staff"},{name:"inbound_time",label:"入库时间",field:"inbound_time"},{name:"create_time",label:"创建时间",field:"create_time"},{name:"last_update_time",label:"最后修改时间",field:"last_update_time"}],data:[],pagination:{sortBy:"name",descending:!1,page:1,rowsPerPage:50}}},methods:{authCheck:function(){var t=this,e=this.$q.localStorage.getItem("openid");this.$axios.get(i["a"]+"userauth/",{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e,authorization:"1"},data:{}}).then((function(e){"200"===e.data.results.code?0===e.data.results.data.length?(t.authorization_get=!0,t.authorization_post=!0,t.authorization_getfile=!0,t.authorization_delete=!0,t.authorization_patch=!0,t.getList()):1===e.data.results.data.length?(0===e.data.results.data[0].aut1?(t.authorization_get=!0,t.getList()):t.authorization_get=!1,0===e.data.results.data[0].aut2?t.authorization_getfile=!0:t.authorization_getfile=!1,0===e.data.results.data[0].aut3?t.authorization_post=!0:t.authorization_post=!1,0===e.data.results.data[0].aut4?t.authorization_patch=!0:t.authorization_patch=!1,0===e.data.results.data[0].aut5?t.authorization_delete=!0:t.authorization_delete=!1):(t.authorization=!1,t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500})):(t.authorization_get=!1,t.authorization_post=!1,t.authorization_getfile=!1,t.authorization_delete=!1,t.authorization_patch=!1,t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500}))})).catch((function(e){t.authorization_get=!1,t.authorization_post=!1,t.authorization_getfile=!1,t.authorization_delete=!1,t.authorization_patch=!1,console.log(e)}))},getList:function(){var t=this;if(this.authorization_get)if(this.$q.localStorage.has("openid")){var e=this.$q.localStorage.getItem("openid");this.$axios.get(i["a"]+this.pathname,{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e,page:this.current,max_page:50,date1:this.date1,date2:this.date2},data:{}}).then((function(e){"200"===e.data.results.code?(t.data=e.data.results.data,t.totlepage=e.data.results.totlepage):t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有查询权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},getSelectedString:function(){return 0===this.selected.length?"":"".concat(this.selected.length," record").concat(this.selected.length>1?"s":""," selected of ").concat(this.data.length)},pageChange:function(){this.getList()},reFresh:function(){this.current=1,this.getList()},successUpload:function(){this.getList(),this.$q.notify({message:"上传成功",icon:"check",color:"positive",position:"right",timeout:1500})},failUpload:function(){this.$q.notify({message:"网络原因无法上传成功",icon:"close",color:"negative",position:"right",timeout:1500})},downloadexample:function(t){this.authorization_getfile?this.$q.localStorage.has("openid")?Object(r["a"])(i["a"]+this.pathname+"?openid="+this.$q.localStorage.getItem("openid")+"&getfile="+t):this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500}):this.$q.notify({message:"您没有下载权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})}},created:function(){this.cyclecountlist=i["a"]+"cyclecount/?openid="+this.$q.localStorage.getItem("openid")+"&getfile=1"},mounted:function(){this.$q.localStorage.has("openid")&&this.authCheck(),this.$q.platform.is.electron?this.height=String(this.$q.screen.height-360)+"px":this.height=this.$q.screen.height-360+"px"},updated:function(){}},c=s,l=a("2877"),u=a("15c3"),d=a("eebe"),p=a.n(d),h=a("eaac"),f=a("ee89"),g=a("9c40"),m=a("05c0"),_=a("0d59"),b=a("cc04"),q=a("2c91"),y=a("27f9"),z=a("0016"),v=a("3b16"),x=Object(l["a"])(c,o,n,!1,null,null,null);"function"===typeof u["default"]&&Object(u["default"])(x);e["default"]=x.exports;p()(x,"components",{QTable:h["a"],QUploader:f["a"],QBtn:g["a"],QTooltip:m["a"],QSpinner:_["a"],QUploaderAddTrigger:b["a"],QSpace:q["a"],QInput:y["a"],QIcon:z["a"],QPagination:v["a"]})},"758b":function(t,e,a){"use strict";a.d(e,"c",(function(){return p})),a.d(e,"e",(function(){return h})),a.d(e,"d",(function(){return m})),a.d(e,"b",(function(){return _})),a.d(e,"g",(function(){return f})),a.d(e,"f",(function(){return g})),a.d(e,"a",(function(){return s}));a("551c"),a("06db");var o=a("2b0e"),n=a("bc3a"),i=a.n(n),r=a("18d6"),s="http://127.0.0.1:8000/",c=i.a.create({baseURL:s,timeout:5e3}),l=i.a.create({baseURL:s,timeout:5e3}),u=i.a.create({baseURL:s,timeout:5e3}),d=i.a.create({baseURL:s,timeout:5e3});function p(t,e){return c.get(t,{params:e})}function h(t,e,a){return c.post(t,a,{params:e})}function f(t,e){return l.post(t,e)}function g(t,e){return u.post(t,e)}function m(t,e,a){return c.patch(t,a,{params:e})}function _(t,e,a){return d.delete(t,a,{params:e})}u.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),u.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),l.interceptors.request.use((function(t){var e=r["a"].getItem("authid");return t.params={openid:e},t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),d.interceptors.request.use((function(t){var e=r["a"].getItem("openid");return t.params={openid:e},t}),(function(t){return Promise.reject(t)})),d.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),o["a"].prototype.$axios=c}}]);