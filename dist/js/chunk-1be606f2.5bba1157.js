(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1be606f2"],{3466:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("header",[e("div",{staticClass:"header-left"},[e("div",{staticClass:"item",on:{click:function(s){1===t.sort?t.shuffleItem():t.orderSort()}}},[t._v(t._s(t._f("sortMap")(t.sort)))]),e("div",{staticClass:"item",on:{click:function(s){t.type="H"===t.type?"K":"H"}}},[t._v(t._s(t._f("typeMap")(t.type)))])]),t._m(0),e("div",{staticClass:"header-right"},[e("i",{staticClass:"remove",on:{click:function(s){return t.clearList()}}}),e("i",{staticClass:"back-btn",on:{click:function(s){return t.toBack()}}})])]),e("main",[e("div",{directives:[{name:"show",rawName:"v-show",value:0===t.breadList.length,expression:"breadList.length===0"}]},[e("p",{staticClass:"tip"},[t._v("小面包全吃啦~")])]),0!==t.breadList.length?e("transition-group",{staticClass:"card-contain",attrs:{name:"list",tag:"div"}},t._l(t.breadList,(function(s){return e("div",{key:s.index,staticClass:"card",class:{"second-word":s.show},on:{click:function(e){return t.changeShow(s)}}},["H"===t.type?e("span",[t._v(t._s(s.show?s.K:s.H))]):t._e(),"K"===t.type?e("span",[t._v(t._s(s.show?s.H:s.K))]):t._e(),e("span",{staticClass:"eat-bread",on:{click:function(e){return e.stopPropagation(),t.removeFromBread(s)}}})])})),0):t._e()],1)])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header-center"},[e("span",{staticClass:"bread-img hidden"},[t._v("记")]),e("span",{staticClass:"bread-img hidden"},[t._v("忆")]),e("span",{staticClass:"bread-img"},[t._v("小")]),e("span",{staticClass:"bread-img"},[t._v("面")]),e("span",{staticClass:"bread-img"},[t._v("包")]),t._v("~ ")])}],r=(e("286a"),e("2ef0")),n={data(){return{sort:1,type:"H",orderList:[],breadList:[]}},filters:{sortMap(t){return 1===t?"顺":"乱"},typeMap(t){return"H"===t?"平":"片"}},methods:{initInfo(){let{type:t,breadList:s}=JSON.parse(sessionStorage.getItem("homePageInfo"));this.type=t,this.breadList=s,this.orderList=JSON.parse(JSON.stringify(this.breadList))},shuffleItem:function(){this.sort=2,this.breadList=r.shuffle(this.breadList)},changeShow(t){t.show||(t.show=!0,setTimeout(()=>{t.show=!1},2e3))},orderSort(){this.sort=1,this.breadList=JSON.parse(JSON.stringify(this.orderList))},toBack(){let t=JSON.parse(sessionStorage.getItem("homePageInfo"));t.breadList=this.breadList,t.type=this.type,sessionStorage.setItem("homePageInfo",JSON.stringify(t)),this.$router.push({path:"/"})},updateSessionStorageBreadList(){let t=JSON.parse(sessionStorage.getItem("homePageInfo"));t.breadList=this.breadList,sessionStorage.setItem("homePageInfo",JSON.stringify(t))},clearList(){this.breadList=[],this.orderList=[],this.updateSessionStorageBreadList()},removeFromBread(t){let s=this.breadList.indexOf(t);this.breadList.splice(s,1),this.orderList=JSON.parse(JSON.stringify(this.breadList)),this.updateSessionStorageBreadList()}},created(){this.initInfo()}},o=n,d=(e("4261"),e("2877")),c=Object(d["a"])(o,i,a,!1,null,"295f9d7a",null);s["default"]=c.exports},4261:function(t,s,e){"use strict";var i=e("d53c"),a=e.n(i);a.a},d53c:function(t,s,e){}}]);
//# sourceMappingURL=chunk-1be606f2.5bba1157.js.map