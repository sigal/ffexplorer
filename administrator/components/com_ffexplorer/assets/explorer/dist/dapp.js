(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-app"},[e("DSidebar"),this._v(" "),e("DContent")],1)};s._withStripped=!0;var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-sidebar"},[i("div",{staticClass:"d-sidebar-header"},[i("el-input",{staticClass:"d-sidebar-table-search",attrs:{type:"text",placeholder:"search table...",size:"small"},on:{input:t.searchDb},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),t._v(" "),i("DSidbarItems")],1)};a._withStripped=!0;var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-sidebar-items",style:{height:t.height}},[i("table",{staticClass:"d-item-list"},t._l(t.filtedList,(function(e){return i("tr",{key:e.name,staticClass:"d-item",class:{active:e.name===t.activeTable},on:{click:function(i){return t.selectTable(e.name)}}},[i("td",{staticClass:"item-label"},[t._v(t._s(e.name))]),t._v(" "),i("td",{staticClass:"item-size"},[i("span",[t._v(t._s(t.parseSize(e.size)))]),t._v(" "),i("div",{staticClass:"item-size-percent",style:{width:t.getSizePercent(e.size)+"%"}})])])})),0)])};o._withStripped=!0;var n=i(65),l=i.n(n),r=i(0),c={data:()=>({height:"0px",list:[],maxSize:0}),mounted(){setTimeout(()=>{this.setListHeight()}),jQuery(window).on("resize.ffexplorer",()=>{this.setListHeight()}),this.$ajax({task:"db.tableList"}).then(t=>{if(t.error)return alert(t.error);if(t.data){r.default.set(this,"list",t.data);const e=t.data.map(t=>+t.size);this.maxSize=e.reduce((t,e)=>Math.max(t,e))}})},computed:{filtedList(){const t=this.$store.state.db_keyword.toLowerCase();return this.list.filter(e=>e.name.toLowerCase().indexOf(t)>-1)},activeTable(){return this.$store.state.activeTable}},methods:{selectTable(t){this.$store.commit("setActiveTable",t)},setListHeight:l()((function(){const t=jQuery,e=t(window).height();t(".d-sidebar-items").length&&(this.height=e-t(".d-sidebar-items").offset().top-45+"px")}),100),parseSize(t){const e=Math.round(t/1024);if(e<1024)return e+" kB";const i=Math.round(t/1024/1024);if(i<1024)return i+" mB";return Math.round(t/1024/1024)+" gB"},getSizePercent(t){return Math.round(100*t*100/this.maxSize)/100}}},u=(i(96),i(18)),d=Object(u.a)(c,o,[],!1,null,null,null);d.options.__file="src/components/DSidebarItems.vue";var h={components:{DSidbarItems:d.exports},data:()=>({app:"database",keyword:""}),methods:{changeApp(){this.$store.dispatch("setApp",this.app)},searchDb:l()((function(){this.$store.commit("searchDb",this.keyword)}))}},v=(i(97),Object(u.a)(h,a,[],!1,null,null,null));v.options.__file="src/components/DSidebar.vue";var f=v.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"d-content"},[i("div",{staticClass:"d-content-header"},[t.table?i("div",{staticClass:"header-toolbar"},[i("div",{staticClass:"header-toolbar-col",staticStyle:{"margin-right":"10px","flex-grow":"1"}},[i("el-button",{attrs:{size:"small",type:"success"},on:{click:t.openDialogInsert}},[t._v("Insert")]),t._v(" "),i("el-button",{attrs:{size:"small",type:"danger"},on:{click:t.openDialogDelete}},[t._v("Delete")])],1),t._v(" "),i("div",{staticClass:"header-toolbar-col filter-bar"},[i("div",{staticClass:"filter-col",staticStyle:{"margin-right":"5px",display:"flex"}},[i("el-select",{attrs:{size:"small",clearable:""},model:{value:t.filterCol,callback:function(e){t.filterCol=e},expression:"filterCol"}},t._l(t.filterColumns,(function(e){return i("el-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])})),1),t._v(" "),i("el-select",{attrs:{size:"small"},model:{value:t.filterMethod,callback:function(e){t.filterMethod=e},expression:"filterMethod"}},[i("el-option",{key:"equal",attrs:{value:"equal",label:"="}}),t._v(" "),i("el-option",{key:"like_both",attrs:{value:"like_both",label:"like %...%"}}),t._v(" "),i("el-option",{key:"like_start",attrs:{value:"like_start",label:"like ...%"}}),t._v(" "),i("el-option",{key:"like_end",attrs:{value:"like_end",label:"like %..."}})],1),t._v(" "),i("el-input",{attrs:{size:"small",placeholder:"value of column"},model:{value:t.filterValue,callback:function(e){t.filterValue=e},expression:"filterValue"}})],1),t._v(" "),i("div",{staticClass:"filter-col"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.doFilter}},[t._v("Filter")]),t._v(" "),i("el-button",{attrs:{size:"small"},on:{click:t.clearFilter}},[t._v("Clear")])],1)])]):t._e()]),t._v(" "),i("div",{staticClass:"d-content-inner",style:{height:t.height,overflow:t.loading?"hidden":"auto"}},[i("table",{staticClass:"d-content-table"},[i("thead",[i("tr",t._l(t.columns,(function(e){return i("th",{key:e.name},[t._v(t._s(e.name))])})),0)]),t._v(" "),i("tbody",t._l(t.items,(function(e,s){return i("tr",{key:s,class:{selected:t.activeRow===s},on:{click:function(e){return t.selectRow(s)}}},t._l(e,(function(a,o){return i("td",{key:o,class:{selected:t.activeNode===s+o+""},on:{click:function(i){return t.selectNode(s+o+"",e,o)}}},[t._v(t._s(a?(""+a).substring(0,100):""))])})),0)})),0)])]),t._v(" "),i("div",{staticStyle:{"margin-top":"5px","text-align":"right"}},[i("el-pagination",{attrs:{layout:"jumper, prev, pager, next","page-size":50,"hide-on-single-page":!0,"current-page":t.currentPage,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"current-change":t.changePage}})],1),t._v(" "),i("el-dialog",{attrs:{width:"60%","append-to-body":!0,"close-on-click-modal":!1,"close-on-press-escape":!t.saving,"show-close":!t.saving,"destroy-on-close":!0,"custom-class":"dialog-edit",title:t.activeColumn+" - Editor",visible:t.dialogEdit},on:{"update:visible":function(e){t.dialogEdit=e}}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.dialogValue,expression:"dialogValue"}],staticStyle:{width:"100%","box-sizing":"border-box"},attrs:{rows:"15",disabled:t.saving},domProps:{value:t.dialogValue},on:{input:function(e){e.target.composing||(t.dialogValue=e.target.value)}}}),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small",disabled:t.saving},on:{click:function(e){t.dialogEdit=!1}}},[t._v("Close")]),t._v(" "),i("el-button",{attrs:{size:"small",type:"primary",loading:t.saving},on:{click:t.saveNode}},[t._v("Save")])],1)]),t._v(" "),i("el-dialog",{attrs:{width:"60%","append-to-body":!0,"close-on-click-modal":!1,"close-on-press-escape":!t.saving,"show-close":!t.saving,"destroy-on-close":!0,"custom-class":"dialog-insert",title:t.table+" - Insert record",visible:t.dialogInsert},on:{"update:visible":function(e){t.dialogInsert=e}}},[i("form",{directives:[{name:"loading",rawName:"v-loading",value:t.saving,expression:"saving"}],staticClass:"form-insert"},[i("table",t._l(t.cloneColumns,(function(e){return i("tr",{key:e.name},[i("th",[t._v(t._s(e.name))]),t._v(" "),i("td",[t._v(t._s(e.type))]),t._v(" "),i("td",["auto_increment"===e.extra?i("span",[t._v("Auto Increment")]):"CURRENT_TIMESTAMP"===e.default?i("span",[t._v("Current Timestamp")]):i("input",{directives:[{name:"model",rawName:"v-model",value:e.default,expression:"column.default"}],attrs:{type:"text",name:e.name},domProps:{value:e.default},on:{input:function(i){i.target.composing||t.$set(e,"default",i.target.value)}}})])])})),0)]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small",disabled:t.saving},on:{click:function(e){t.dialogInsert=!1}}},[t._v("Close")]),t._v(" "),i("el-button",{attrs:{size:"small",type:"primary",loading:t.saving},on:{click:t.insertRecord}},[t._v("Insert")])],1)]),t._v(" "),i("el-dialog",{attrs:{width:"50%","append-to-body":!0,"close-on-click-modal":!1,"close-on-press-escape":!t.saving,"show-close":!t.saving,"destroy-on-close":!0,"custom-class":"dialog-insert",title:"Table `"+t.table+"`: Do you want to delete this record?",visible:t.dialogDelete},on:{"update:visible":function(e){t.dialogDelete=e}}},[i("table",t._l(t.activeItem,(function(e,s){return i("tr",{key:s},[i("th",[t._v(t._s(s))]),t._v(" "),i("td",[t._v(t._s(e?(""+e).substring(0,100):""))])])})),0),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small",disabled:t.saving},on:{click:function(e){t.dialogDelete=!1}}},[t._v("Close")]),t._v(" "),i("el-button",{attrs:{size:"small",type:"primary",loading:t.saving},on:{click:t.deleteRecord}},[t._v("Delete")])],1)])],1)};p._withStripped=!0;var m={data:()=>({loading:!1,columns:[],cloneColumns:[],total:0,items:[],height:"0px",currentPage:1,activeNode:"",activeColumn:"",activeRow:-1,activeItem:{},dialogValue:"",dialogEdit:!1,saving:!1,dialogInsert:!1,dialogDelete:!1,filterCol:"",filterValue:"",filterMethod:"equal"}),mounted(){setTimeout(()=>{this.setContentHeight()}),jQuery(window).on("resize.ffexplorer",()=>{this.setContentHeight()})},computed:{table(){return this.$store.state.activeTable},filterColumns(){return this.columns.map(t=>t.name)}},watch:{table(t){this.currentPage=1,this.resetFilter(),this.resetActiveNode(),this.initTable(t),this.resetScrollPosition()}},methods:{clearFilter(){this.currentPage=1,this.resetActiveNode(),this.resetFilter(),this.resetScrollPosition(),this.initTable()},doFilter(){this.currentPage=1,this.initTable()},openDialogDelete(){if(-1===this.activeRow)return alert("You need select a record to delete");this.dialogDelete=!0},deleteRecord(){this.saving=!0;const t=this.getConditionColumns(),e={};t.forEach(t=>{e[t]=this.activeItem[t]}),this.$ajax({task:"db.deleteRecord",table:this.table,condition:JSON.stringify(e)}).then(t=>t.error?alert(t.error):t.success?(this.resetActiveNode(),this.$message({type:"success",message:"delete succesfully"}),this.initTable(this.table,this.currentPage)):void 0).catch(t=>{alert("delete error")}).finally(()=>{this.saving=!1,this.dialogDelete=!1})},openDialogInsert(){r.default.set(this,"cloneColumns",JSON.parse(JSON.stringify(this.columns))),this.dialogInsert=!0},insertRecord(){this.saving=!0;const t=jQuery("form.form-insert").serializeArray();this.$ajax({task:"db.insertRecord",table:this.table,data:JSON.stringify(t)}).then(t=>t.error?alert(t.error):t.success?(this.$message({type:"success",message:"insert succesfully"}),this.initTable(this.table,this.currentPage)):void 0).catch(t=>{alert("insert error")}).finally(()=>{this.saving=!1,this.dialogInsert=!1})},saveNode(){this.saving=!0;const t=this.getConditionColumns(),e={};t.forEach(t=>{e[t]=this.activeItem[t]}),this.$ajax({task:"db.saveNode",table:this.table,condition:JSON.stringify(e),column:this.activeColumn,value:this.dialogValue}).then(t=>t.error?alert(t.error):(this.$message({type:"success",message:"Save successfully"}),this.initTable(this.table,this.currentPage))).catch(t=>{alert("save error")}).finally(()=>{this.saving=!1})},getConditionColumns(){const t=this.columns.filter(t=>"PRI"===t.key).map(t=>t.name);return t.length?t:this.columns.map(t=>t.name)},resetActiveNode(){this.activeNode="",this.activeColumn="",this.activeRow=-1,r.default.set(this,"activeItem",{})},resetFilter(){this.filterCol="",this.filterValue="",this.filterMethod="equal"},changePage(t){this.resetActiveNode(),this.initTable(this.table,t).then(()=>{this.resetScrollPosition()})},selectRow(t){this.activeRow=t},selectNode(t,e,i){this.activeNode!==t?(this.activeNode=t,this.activeColumn=i,this.dialogValue=e[i],r.default.set(this,"activeItem",e)):this.dialogEdit=!0},setContentHeight:l()((function(){const t=jQuery,e=t(window).height();t(".d-content-inner").length&&(this.height=e-t(".d-content-inner").offset().top-50+"px")}),100),initTable(t,e){return new Promise((i,s)=>{t=t||this.table,e=e||1,this.loading=!0;const{filterCol:a,filterValue:o,filterMethod:n}=this;this.$ajax({task:"db.initTable",name:t,page:e,filterCol:a,filterValue:o,filterMethod:n}).then(t=>{if(t.error)return alert(t.error);t.data&&(this.total=+t.data.total,r.default.set(this,"columns",t.data.columns),r.default.set(this,"items",t.data.items),this.setContentHeight())}).catch(t=>{alert("init table error")}).finally(()=>{this.loading=!1,i()})})},resetScrollPosition(){const t=this.$el.querySelector(".d-content-inner");t.scrollTop=0,t.scrollLeft=0}}},g=(i(98),Object(u.a)(m,p,[],!1,null,null,null));g.options.__file="src/components/DContent.vue";var b={components:{DSidebar:f,DContent:g.exports}},_=(i(99),Object(u.a)(b,s,[],!1,null,null,null));_.options.__file="src/components/DApp.vue";e.default=_.exports},65:function(t,e,i){var s=i(66),a=i(69),o=i(71),n=Math.max,l=Math.min;t.exports=function(t,e,i){var r,c,u,d,h,v,f=0,p=!1,m=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var i=r,s=c;return r=c=void 0,f=e,d=t.apply(s,i)}function _(t){return f=t,h=setTimeout(C,e),p?b(t):d}function y(t){var i=t-v;return void 0===v||i>=e||i<0||m&&t-f>=u}function C(){var t=a();if(y(t))return x(t);h=setTimeout(C,function(t){var i=e-(t-v);return m?l(i,u-(t-f)):i}(t))}function x(t){return h=void 0,g&&r?b(t):(r=c=void 0,d)}function k(){var t=a(),i=y(t);if(r=arguments,c=this,v=t,i){if(void 0===h)return _(v);if(m)return clearTimeout(h),h=setTimeout(C,e),b(v)}return void 0===h&&(h=setTimeout(C,e)),d}return e=o(e)||0,s(i)&&(p=!!i.leading,u=(m="maxWait"in i)?n(o(i.maxWait)||0,e):u,g="trailing"in i?!!i.trailing:g),k.cancel=function(){void 0!==h&&clearTimeout(h),f=0,r=v=c=h=void 0},k.flush=function(){return void 0===h?d:x(a())},k}},66:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},67:function(t,e,i){var s=i(70),a="object"==typeof self&&self&&self.Object===Object&&self,o=s||a||Function("return this")();t.exports=o},68:function(t,e,i){var s=i(67).Symbol;t.exports=s},69:function(t,e,i){var s=i(67);t.exports=function(){return s.Date.now()}},70:function(t,e,i){(function(e){var i="object"==typeof e&&e&&e.Object===Object&&e;t.exports=i}).call(this,i(4))},71:function(t,e,i){var s=i(66),a=i(72),o=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,r=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(a(t))return NaN;if(s(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=s(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=l.test(t);return i||r.test(t)?c(t.slice(2),i?2:8):n.test(t)?NaN:+t}},72:function(t,e,i){var s=i(73),a=i(76);t.exports=function(t){return"symbol"==typeof t||a(t)&&"[object Symbol]"==s(t)}},73:function(t,e,i){var s=i(68),a=i(74),o=i(75),n=s?s.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":n&&n in Object(t)?a(t):o(t)}},74:function(t,e,i){var s=i(68),a=Object.prototype,o=a.hasOwnProperty,n=a.toString,l=s?s.toStringTag:void 0;t.exports=function(t){var e=o.call(t,l),i=t[l];try{t[l]=void 0;var s=!0}catch(t){}var a=n.call(t);return s&&(e?t[l]=i:delete t[l]),a}},75:function(t,e){var i=Object.prototype.toString;t.exports=function(t){return i.call(t)}},76:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},83:function(t,e,i){},84:function(t,e,i){},85:function(t,e,i){},86:function(t,e,i){},96:function(t,e,i){"use strict";i(83)},97:function(t,e,i){"use strict";i(84)},98:function(t,e,i){"use strict";i(85)},99:function(t,e,i){"use strict";i(86)}}]);