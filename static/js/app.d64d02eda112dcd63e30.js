webpackJsonp([1],{"4igy":function(e,t){},NHnr:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=l("+RKF"),n={name:"App",data:function(){return{filterText:"",treeData:[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"电泳双轨自行输送小车作业安全操作规程.docx",url:"http://www.xdocin.com/xdoc?_func=form&_key=oppax4hqf5gupmpayvf6ja7pcm&_xdoc=./%E7%94%B5%E6%B3%B3%E5%8F%8C%E8%BD%A8%E8%87%AA%E8%A1%8C%E8%BE%93%E9%80%81%E5%B0%8F%E8%BD%A6%E4%BD%9C%E4%B8%9A%E5%AE%89%E5%85%A8%E6%93%8D%E4%BD%9C%E8%A7%84%E7%A8%8B.docx"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}]}},watch:{filterText:function(e){this.$refs.tree.filter(e)}},methods:{filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},handleNodeClick:function(e){e.children||e.url&&window.open(e.url)}}},a={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[l("div",{staticClass:"header"},[l("div",{staticClass:"logo"}),e._v(" "),l("el-input",{attrs:{placeholder:"输入产品关键字"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}})],1),e._v(" "),l("div",{staticClass:"content"},[l("div",{staticClass:"tree-wrap"},[l("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{data:e.treeData,"default-expand-all":"","filter-node-method":e.filterNode},on:{"node-click":e.handleNodeClick}})],1)])])},staticRenderFns:[]};var r=l("C7Lr")(n,a,!1,function(e){l("4igy")},null,null).exports,c=l("bAj6"),s={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"fileList"},[e._m(0),e._v(" "),l("ul",{staticClass:"list"},e._l(e.fileList,function(t,i){return l("li",{key:i},[l("a",{attrs:{href:t.url}},[l("i",{staticClass:"el-icon-document"}),e._v("\n          "+e._s(t.name)+"\n        ")])])}),0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"total-text"},[this._v("总 "),t("strong",[this._v("1")])])}]},o=l("C7Lr")({name:"fileList",data:function(){return{searchText:"",fileList:[{name:"电泳双轨自行输送小车作业安全操作规程.docx",url:"http://www.xdocin.com/xdoc?_func=form&_key=oppax4hqf5gupmpayvf6ja7pcm&_xdoc=./%E7%94%B5%E6%B3%B3%E5%8F%8C%E8%BD%A8%E8%87%AA%E8%A1%8C%E8%BE%93%E9%80%81%E5%B0%8F%E8%BD%A6%E4%BD%9C%E4%B8%9A%E5%AE%89%E5%85%A8%E6%93%8D%E4%BD%9C%E8%A7%84%E7%A8%8B.docx"}]}}},s,!1,null,null,null).exports;i.default.use(c.a);var d=new c.a({routes:[{path:"/",name:"fileList",component:o}],mode:"history"}),u=l("gU9C"),f=l.n(u);l("b6Kr");i.default.use(f.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:d,components:{App:r},template:"<App/>"})},b6Kr:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d64d02eda112dcd63e30.js.map