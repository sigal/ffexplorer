(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-app"},[e("DSidebar"),this._v(" "),e("DContent")],1)};a._withStripped=!0;var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-sidebar"},[i("div",{staticClass:"d-sidebar-header"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.app,expression:"app"}],staticClass:"d-sdiebar-app-select",on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.app=e.target.multiple?i:i[0]},t.changeApp]}},[i("option",{attrs:{value:"explorer"}},[t._v("Explorer")]),t._v(" "),i("option",{attrs:{value:"database"}},[t._v("Database")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"d-sidebar-table-search",attrs:{type:"text",placeholder:"search table..."},domProps:{value:t.keyword},on:{input:[function(e){e.target.composing||(t.keyword=e.target.value)},t.searchDb]}})]),t._v(" "),i("DSidbarItems")],1)};s._withStripped=!0;var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-sidebar-items",style:{height:t.height}},[i("table",{staticClass:"d-item-list"},t._l(t.filtedList,(function(e){return i("tr",{key:e.name,staticClass:"d-item",class:{active:e.name===t.activeTable},on:{click:function(i){return t.selectTable(e.name)}}},[i("td",[t._v(t._s(e.name))]),t._v(" "),i("td",{staticClass:"item-size"},[i("span",[t._v(t._s(t.parseSize(e.size)))]),t._v(" "),i("div",{staticClass:"item-size-percent",style:{width:t.getSizePercent(e.size)+"%"}})])])})),0)])};n._withStripped=!0;var o=i(64),r=i.n(o),l=i(0),c={data:()=>({height:"0px",list:[],maxSize:0}),mounted(){setTimeout(()=>{this.setListHeight()}),jQuery(window).on("resize.ffexplorer",()=>{this.setListHeight()}),this.$ajax({task:"db.tableList"}).then(t=>{if(t.error)return alert(t.error);if(t.data){l.default.set(this,"list",t.data);const e=t.data.map(t=>+t.size);this.maxSize=e.reduce((t,e)=>Math.max(t,e))}})},computed:{filtedList(){const t=this.$store.state.db_keyword.toLowerCase();return this.list.filter(e=>e.name.toLowerCase().indexOf(t)>-1)},activeTable(){return this.$store.state.activeTable}},methods:{selectTable(t){this.$store.commit("setActiveTable",t)},setListHeight:r()((function(){const t=jQuery,e=t(window).height();this.height=e-t(".d-sidebar-items").offset().top-45+"px"}),100),parseSize(t){const e=Math.round(t/1024);if(e<1024)return e+" kB";const i=Math.round(t/1024/1024);return i<1024?i+" mB":Math.round(t/1024/1024)+" gB"},getSizePercent(t){return Math.round(100*t*100/this.maxSize)/100}}},u=(i(95),i(18)),d=Object(u.a)(c,n,[],!1,null,null,null);d.options.__file="src/components/DSidebarItems.vue";var v={components:{DSidbarItems:d.exports},data:()=>({app:"database",keyword:""}),methods:{changeApp(){this.$store.dispatch("setApp",this.app)},searchDb:r()((function(){this.$store.commit("searchDb",this.keyword)}),300)}},h=(i(96),Object(u.a)(v,s,[],!1,null,null,null));h.options.__file="src/components/DSidebar.vue";var f=h.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"d-content"},[i("div",{staticClass:"d-content-header"},[t.table?i("div",{staticClass:"header-toolbar"},[i("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.openDialogInsert}},[t._v("Insert record")]),t._v(" "),i("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.openDialogDelete}},[t._v("Delete record")]),t._v(" "),i("span",{staticStyle:{"margin-left":"10px","margin-right":"5px"}},[t._v("Filter")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.filterCol,expression:"filterCol"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.filterCol=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:""}},[t._v("Select column")]),t._v(" "),t._l(t.filterColumns,(function(e){return i("option",{key:e},[t._v(t._s(e))])}))],2),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.filterMethod,expression:"filterMethod"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.filterMethod=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"equal"}},[t._v("=")]),t._v(" "),i("option",{attrs:{value:"like_both"}},[t._v("like %...%")]),t._v(" "),i("option",{attrs:{value:"like_start"}},[t._v("like ...%")]),t._v(" "),i("option",{attrs:{value:"like_end"}},[t._v("like %...")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.filterValue,expression:"filterValue"}],attrs:{type:"text"},domProps:{value:t.filterValue},on:{input:function(e){e.target.composing||(t.filterValue=e.target.value)}}}),t._v(" "),i("button",{staticClass:"btn",on:{click:t.doFilter}},[t._v("Go")]),t._v(" "),i("button",{staticClass:"btn",on:{click:t.clearFilter}},[t._v("Clear")])]):t._e(),t._v(" "),i("el-pagination",{attrs:{layout:"jumper, prev, pager, next","page-size":50,"hide-on-single-page":!0,"current-page":t.currentPage,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"current-change":t.changePage}})],1),t._v(" "),i("div",{staticClass:"d-content-inner",style:{height:t.height,overflow:t.loading?"hidden":"auto"}},[i("table",{staticClass:"d-content-table",attrs:{border:"1",bordercolor:"#ddd"}},[i("thead",[i("tr",t._l(t.columns,(function(e){return i("th",{key:e.name},[t._v(t._s(e.name))])})),0)]),t._v(" "),i("tbody",t._l(t.items,(function(e,a){return i("tr",{key:a,class:{selected:t.activeRow===a},on:{click:function(e){return t.selectRow(a)}}},t._l(e,(function(s,n){return i("td",{key:n,class:{selected:t.activeNode===a+n+""},on:{click:function(i){return t.selectNode(a+n+"",e,n)}}},[t._v(t._s(s.substring(0,100)))])})),0)})),0)])]),t._v(" "),i("el-dialog",{attrs:{width:"60%","close-on-click-modal":!1,"close-on-press-escape":!t.saving,"show-close":!t.saving,"destroy-on-close":!0,"custom-class":"dialog-edit",title:t.activeColumn+" - Editor",visible:t.dialogEdit},on:{"update:visible":function(e){t.dialogEdit=e}}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.dialogValue,expression:"dialogValue"}],staticStyle:{width:"100%","box-sizing":"border-box"},attrs:{rows:"15",disabled:t.saving},domProps:{value:t.dialogValue},on:{input:function(e){e.target.composing||(t.dialogValue=e.target.value)}}}),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small",disabled:t.saving},on:{click:function(e){t.dialogEdit=!1}}},[t._v("Close")]),t._v(" "),i("el-button",{attrs:{size:"small",type:"primary",loading:t.saving},on:{click:t.saveNode}},[t._v("Save")])],1)]),t._v(" "),i("el-dialog",{attrs:{width:"60%","close-on-click-modal":!1,"close-on-press-escape":!t.saving,"show-close":!t.saving,"destroy-on-close":!0,"custom-class":"dialog-insert",title:t.table+" - Insert record",visible:t.dialogInsert},on:{"update:visible":function(e){t.dialogInsert=e}}},[i("form",{directives:[{name:"loading",rawName:"v-loading",value:t.saving,expression:"saving"}],staticClass:"form-insert"},[i("table",t._l(t.cloneColumns,(function(e){return i("tr",{key:e.name},[i("th",[t._v(t._s(e.name))]),t._v(" "),i("td",[t._v(t._s(e.type))]),t._v(" "),i("td",["auto_increment"===e.extra?i("span",[t._v("Auto Increment")]):"CURRENT_TIMESTAMP"===e.default?i("span",[t._v("Current Timestamp")]):i("input",{directives:[{name:"model",rawName:"v-model",value:e.default,expression:"column.default"}],attrs:{type:"text",name:e.name},domProps:{value:e.default},on:{input:function(i){i.target.composing||t.$set(e,"default",i.target.value)}}})])])})),0)]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small",disabled:t.saving},on:{click:function(e){t.dialogInsert=!1}}},[t._v("Close")]),t._v(" "),i("el-button",{attrs:{size:"small",type:"primary",loading:t.saving},on:{click:t.insertRecord}},[t._v("Insert")])],1)]),t._v(" "),i("el-dialog",{attrs:{width:"50%","close-on-click-modal":!1,"close-on-press-escape":!t.saving,"show-close":!t.saving,"destroy-on-close":!0,"custom-class":"dialog-insert",title:"Table `"+t.table+"`: Do you want to delete this record?",visible:t.dialogDelete},on:{"update:visible":function(e){t.dialogDelete=e}}},[i("table",t._l(t.activeItem,(function(e,a){return i("tr",{key:a},[i("th",[t._v(t._s(a))]),t._v(" "),i("td",[t._v(t._s(e.substring(0,100)))])])})),0),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small",disabled:t.saving},on:{click:function(e){t.dialogDelete=!1}}},[t._v("Close")]),t._v(" "),i("el-button",{attrs:{size:"small",type:"primary",loading:t.saving},on:{click:t.deleteRecord}},[t._v("Delete")])],1)])],1)};p._withStripped=!0;var m={data:()=>({loading:!1,columns:[],cloneColumns:[],total:0,items:[],height:"0px",currentPage:1,activeNode:"",activeColumn:"",activeRow:-1,activeItem:{},dialogValue:"",dialogEdit:!1,saving:!1,dialogInsert:!1,dialogDelete:!1,filterCol:"",filterValue:"",filterMethod:"equal"}),mounted(){setTimeout(()=>{this.setContentHeight()}),jQuery(window).on("resize.ffexplorer",()=>{this.setContentHeight()})},computed:{table(){return this.$store.state.activeTable},filterColumns(){return this.columns.map(t=>t.name)}},watch:{table(t){this.currentPage=1,this.resetFilter(),this.resetActiveNode(),this.initTable(t),this.resetScrollPosition()}},methods:{clearFilter(){this.currentPage=1,this.resetActiveNode(),this.resetFilter(),this.resetScrollPosition(),this.initTable()},doFilter(){this.currentPage=1,this.initTable()},openDialogDelete(){if(-1===this.activeRow)return alert("You need select a record to delete");this.dialogDelete=!0},deleteRecord(){this.saving=!0;const t=this.getConditionColumns(),e={};t.forEach(t=>{e[t]=this.activeItem[t]}),this.$ajax({task:"db.deleteRecord",table:this.table,condition:JSON.stringify(e)}).then(t=>t.error?alert(t.error):t.success?(this.resetActiveNode(),this.$message({type:"success",message:"delete succesfully"}),this.initTable(this.table,this.currentPage)):void 0).catch(t=>{alert("delete error")}).finally(()=>{this.saving=!1,this.dialogDelete=!1})},openDialogInsert(){l.default.set(this,"cloneColumns",JSON.parse(JSON.stringify(this.columns))),this.dialogInsert=!0},insertRecord(){this.saving=!0;const t=jQuery("form.form-insert").serializeArray();this.$ajax({task:"db.insertRecord",table:this.table,data:JSON.stringify(t)}).then(t=>t.error?alert(t.error):t.success?(this.$message({type:"success",message:"insert succesfully"}),this.initTable(this.table,this.currentPage)):void 0).catch(t=>{alert("insert error")}).finally(()=>{this.saving=!1,this.dialogInsert=!1})},saveNode(){this.saving=!0;const t=this.getConditionColumns(),e={};t.forEach(t=>{e[t]=this.activeItem[t]}),this.$ajax({task:"db.saveNode",table:this.table,condition:JSON.stringify(e),column:this.activeColumn,value:this.dialogValue}).then(t=>{if(t.error)return alert(t.error);this.$message({type:"success",message:"Save successfully"}),this.activeItem[this.activeColumn]=t.result,this.dialogValue=t.result}).catch(t=>{alert("save error")}).finally(()=>{this.saving=!1})},getConditionColumns(){const t=this.columns.filter(t=>"PRI"===t.key).map(t=>t.name);return t.length?t:this.columns.map(t=>t.name)},resetActiveNode(){this.activeNode="",this.activeColumn="",this.activeRow=-1,l.default.set(this,"activeItem",{})},resetFilter(){this.filterCol="",this.filterValue="",this.filterMethod="equal"},changePage(t){this.resetActiveNode(),this.initTable(this.table,t).then(()=>{this.resetScrollPosition()})},selectRow(t){this.activeRow=t},selectNode(t,e,i){this.activeNode!==t?(this.activeNode=t,this.activeColumn=i,this.dialogValue=e[i],l.default.set(this,"activeItem",e)):this.dialogEdit=!0},setContentHeight:r()((function(){const t=jQuery,e=t(window).height();this.height=e-t(".d-content").offset().top-73+"px"}),100),initTable(t,e){return new Promise((i,a)=>{t=t||this.table,e=e||1,this.loading=!0;const{filterCol:s,filterValue:n,filterMethod:o}=this;this.$ajax({task:"db.initTable",name:t,page:e,filterCol:s,filterValue:n,filterMethod:o}).then(t=>{if(t.error)return alert(t.error);t.data&&(this.total=+t.data.total,l.default.set(this,"columns",t.data.columns),l.default.set(this,"items",t.data.items))}).catch(t=>{alert("init table error")}).finally(()=>{this.loading=!1,i()})})},resetScrollPosition(){const t=this.$el.querySelector(".d-content-inner");t.scrollTop=0,t.scrollLeft=0}}},g=(i(97),Object(u.a)(m,p,[],!1,null,null,null));g.options.__file="src/components/DContent.vue";var b={components:{DSidebar:f,DContent:g.exports}},_=(i(98),Object(u.a)(b,a,[],!1,null,null,null));_.options.__file="src/components/DApp.vue";e.default=_.exports},64:function(t,e,i){var a=i(65),s=i(69),n=i(71),o=Math.max,r=Math.min;t.exports=function(t,e,i){var l,c,u,d,v,h,f=0,p=!1,m=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var i=l,a=c;return l=c=void 0,f=e,d=t.apply(a,i)}function _(t){return f=t,v=setTimeout(C,e),p?b(t):d}function y(t){var i=t-h;return void 0===h||i>=e||i<0||m&&t-f>=u}function C(){var t=s();if(y(t))return w(t);v=setTimeout(C,function(t){var i=e-(t-h);return m?r(i,u-(t-f)):i}(t))}function w(t){return v=void 0,g&&l?b(t):(l=c=void 0,d)}function x(){var t=s(),i=y(t);if(l=arguments,c=this,h=t,i){if(void 0===v)return _(h);if(m)return clearTimeout(v),v=setTimeout(C,e),b(h)}return void 0===v&&(v=setTimeout(C,e)),d}return e=n(e)||0,a(i)&&(p=!!i.leading,u=(m="maxWait"in i)?o(n(i.maxWait)||0,e):u,g="trailing"in i?!!i.trailing:g),x.cancel=function(){void 0!==v&&clearTimeout(v),f=0,l=h=c=v=void 0},x.flush=function(){return void 0===v?d:w(s())},x}},65:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},66:function(t,e,i){var a=i(70),s="object"==typeof self&&self&&self.Object===Object&&self,n=a||s||Function("return this")();t.exports=n},67:function(t,e,i){var a=i(66).Symbol;t.exports=a},69:function(t,e,i){var a=i(66);t.exports=function(){return a.Date.now()}},70:function(t,e,i){(function(e){var i="object"==typeof e&&e&&e.Object===Object&&e;t.exports=i}).call(this,i(5))},71:function(t,e,i){var a=i(65),s=i(72),n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(s(t))return NaN;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var i=r.test(t);return i||l.test(t)?c(t.slice(2),i?2:8):o.test(t)?NaN:+t}},72:function(t,e,i){var a=i(73),s=i(76);t.exports=function(t){return"symbol"==typeof t||s(t)&&"[object Symbol]"==a(t)}},73:function(t,e,i){var a=i(67),s=i(74),n=i(75),o=a?a.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":o&&o in Object(t)?s(t):n(t)}},74:function(t,e,i){var a=i(67),s=Object.prototype,n=s.hasOwnProperty,o=s.toString,r=a?a.toStringTag:void 0;t.exports=function(t){var e=n.call(t,r),i=t[r];try{t[r]=void 0;var a=!0}catch(t){}var s=o.call(t);return a&&(e?t[r]=i:delete t[r]),s}},75:function(t,e){var i=Object.prototype.toString;t.exports=function(t){return i.call(t)}},76:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},82:function(t,e,i){},83:function(t,e,i){},84:function(t,e,i){},85:function(t,e,i){},95:function(t,e,i){"use strict";var a=i(82);i.n(a).a},96:function(t,e,i){"use strict";var a=i(83);i.n(a).a},97:function(t,e,i){"use strict";var a=i(84);i.n(a).a},98:function(t,e,i){"use strict";var a=i(85);i.n(a).a}}]);