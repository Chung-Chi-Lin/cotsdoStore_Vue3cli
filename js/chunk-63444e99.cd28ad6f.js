(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63444e99"],{"2a53":function(e,t,l){"use strict";var a=l("7a23");const c={"aria-label":"Page navigation"},n={class:"pagination justify-content-center"},o=Object(a["createElementVNode"])("i",{class:"bi bi-chevron-left"},null,-1),r=[o],d=["onClick"],s=Object(a["createElementVNode"])("i",{class:"bi bi-chevron-right"},null,-1),i=[s];function b(e,t,l,o,s,b){return Object(a["openBlock"])(),Object(a["createElementBlock"])("nav",c,[Object(a["createElementVNode"])("ul",n,[Object(a["createElementVNode"])("li",{class:Object(a["normalizeClass"])(["page-item",{disabled:!1===l.pages.has_pre}])},[Object(a["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=Object(a["withModifiers"])((...e)=>b.prePage&&b.prePage(...e),["prevent"]))},r)],2),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(l.pages.total_pages,e=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{class:Object(a["normalizeClass"])(["page-item f-kalam",{active:e===l.pages.current_page}]),key:e},[Object(a["createElementVNode"])("a",{class:"page-link",href:"#",onClick:Object(a["withModifiers"])(t=>b.updatePage(e),["prevent"])},Object(a["toDisplayString"])(e),9,d)],2))),128)),Object(a["createElementVNode"])("li",{class:Object(a["normalizeClass"])(["page-item",{disabled:!1===l.pages.has_next}])},[Object(a["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=Object(a["withModifiers"])((...e)=>b.nextPage&&b.nextPage(...e),["prevent"]))},i)],2)])])}var m={props:["pages"],methods:{prePage(){this.$emit("emit-pages",this.pages.current_page-1)},updatePage(e){this.$emit("emit-pages",e)},nextPage(){this.$emit("emit-pages",this.pages.current_page+1)}}},O=l("6b0d"),p=l.n(O);const j=p()(m,[["render",b]]);t["a"]=j},"6ff1":function(e,t,l){"use strict";var a=l("7a23");const c={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},n={class:"modal-dialog",role:"document"},o={class:"modal-content border-0"},r={class:"modal-header bg-danger text-white"},d={class:"modal-title"},s=Object(a["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),i={class:"modal-body"},b={class:"text-danger"},m={class:"modal-footer"},O=Object(a["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function p(e,t,l,p,j,u){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("h5",d,[Object(a["createElementVNode"])("span",null,"刪除 "+Object(a["toDisplayString"])(l.item.title),1)]),s]),Object(a["createElementVNode"])("div",i,[Object(a["createTextVNode"])(" 是否刪除 "),Object(a["createElementVNode"])("strong",b,Object(a["toDisplayString"])(l.item.title),1),Object(a["createTextVNode"])(" (刪除後將無法恢復)。 ")]),Object(a["createElementVNode"])("div",m,[O,Object(a["createElementVNode"])("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=t=>e.$emit("del-item"))},"確認刪除 ")])])])],512)}var j=l("e0ae"),u={props:{item:{}},data(){return{modal:{}}},mixins:[j["a"]]},E=l("6b0d"),h=l.n(E);const g=h()(u,[["render",p]]);t["a"]=g},a402:function(e,t,l){"use strict";l.r(t);var a=l("7a23");const c={class:"table mt-4"},n=Object(a["createElementVNode"])("thead",null,[Object(a["createElementVNode"])("tr",null,[Object(a["createElementVNode"])("th",null,"購買時間"),Object(a["createElementVNode"])("th",null,"Email"),Object(a["createElementVNode"])("th",null,"購買款項"),Object(a["createElementVNode"])("th",null,"應付金額"),Object(a["createElementVNode"])("th",null,"是否付款"),Object(a["createElementVNode"])("th",null,"編輯")])],-1),o=["textContent"],r={class:"list-unstyled"},d={class:"text-right"},s={class:"form-check form-switch"},i=["for"],b={key:0},m={key:1},O=["id","onUpdate:modelValue","onChange"],p={class:"btn-group"},j=["onClick"],u=["onClick"];function E(e,t,l,E,h,g){const N=Object(a["resolveComponent"])("VueLoading"),V=Object(a["resolveComponent"])("OrderModal"),k=Object(a["resolveComponent"])("DelModal"),y=Object(a["resolveComponent"])("Pagination");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(N,{active:h.isLoading},null,8,["active"]),Object(a["createElementVNode"])("table",c,[n,Object(a["createElementVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(h.orders,(t,l)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],{key:l},[h.orders.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("tr",{key:0,class:Object(a["normalizeClass"])({"text-secondary":!t.is_paid})},[Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(e.$filters.date(t.create_at)),1),Object(a["createElementVNode"])("td",null,[t.user?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",{key:0,textContent:Object(a["toDisplayString"])(t.user.email)},null,8,o)):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("td",null,[Object(a["createElementVNode"])("ul",r,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(t.products,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{key:t},Object(a["toDisplayString"])(e.product.title)+" 數量："+Object(a["toDisplayString"])(e.qty)+" "+Object(a["toDisplayString"])(e.product.unit),1))),128))])]),Object(a["createElementVNode"])("td",d,Object(a["toDisplayString"])(t.total),1),Object(a["createElementVNode"])("td",null,[Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("label",{class:"form-check-label",for:"paidSwitch"+t.id},[t.is_paid?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",b,"已付款")):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",m,"未付款")),Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch"+t.id,"onUpdate:modelValue":e=>t.is_paid=e,onChange:e=>g.updatePaid(t)},null,40,O),[[a["vModelCheckbox"],t.is_paid]])],8,i)])]),Object(a["createElementVNode"])("td",null,[Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>g.openModal(!1,t)},"檢視",8,j),Object(a["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>g.openDelOrderModal(t)},"刪除",8,u)])])],2)):Object(a["createCommentVNode"])("",!0)],64))),128))])]),Object(a["createVNode"])(V,{order:h.tempOrder,ref:"orderModal",onUpdatePaid:g.updatePaid},null,8,["order","onUpdatePaid"]),Object(a["createVNode"])(k,{item:h.tempOrder,ref:"delModal",onDelItem:g.delOrder},null,8,["item","onDelItem"]),Object(a["createVNode"])(y,{pages:h.pagination,onEmitPages:g.getOrders},null,8,["pages","onEmitPages"])],64)}var h=l("6ff1");const g={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},N={class:"modal-dialog modal-xl",role:"document"},V={class:"modal-content border-0"},k=Object(a["createElementVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(a["createElementVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(a["createElementVNode"])("span",null,"訂單細節")]),Object(a["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},f={class:"row"},v={class:"col-md-4"},B=Object(a["createElementVNode"])("h3",null,"用戶資料",-1),x={class:"table"},C={key:0},D=Object(a["createElementVNode"])("th",{class:"order-m"},"姓名",-1),M=Object(a["createElementVNode"])("th",null,"Email",-1),P=Object(a["createElementVNode"])("th",null,"電話",-1),S=Object(a["createElementVNode"])("th",null,"地址",-1),w={class:"col-md-8"},_=Object(a["createElementVNode"])("h3",null,"訂單細節",-1),$={class:"table"},L=Object(a["createElementVNode"])("th",{class:"order-m"},"訂單編號",-1),F=Object(a["createElementVNode"])("th",null,"下單時間",-1),z=Object(a["createElementVNode"])("th",null,"付款時間",-1),U={key:0},q={key:1},I=Object(a["createElementVNode"])("th",null,"付款狀態",-1),J={key:0,class:"text-success"},T={key:1,class:"text-muted"},A=Object(a["createElementVNode"])("th",null,"總金額",-1),G=Object(a["createElementVNode"])("h3",null,"選購商品",-1),H={class:"table"},K=Object(a["createElementVNode"])("thead",null,[Object(a["createElementVNode"])("tr")],-1),Q={class:"text-end"},R={class:"modal-footer"},W=Object(a["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function X(e,t,l,c,n,o){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",g,[Object(a["createElementVNode"])("div",N,[Object(a["createElementVNode"])("div",V,[k,Object(a["createElementVNode"])("div",y,[Object(a["createElementVNode"])("div",f,[Object(a["createElementVNode"])("div",v,[B,Object(a["createElementVNode"])("table",x,[n.tempOrder.user?(Object(a["openBlock"])(),Object(a["createElementBlock"])("tbody",C,[Object(a["createElementVNode"])("tr",null,[D,Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(n.tempOrder.user.name),1)]),Object(a["createElementVNode"])("tr",null,[M,Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(n.tempOrder.user.email),1)]),Object(a["createElementVNode"])("tr",null,[P,Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(n.tempOrder.user.tel),1)]),Object(a["createElementVNode"])("tr",null,[S,Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(n.tempOrder.user.address),1)])])):Object(a["createCommentVNode"])("",!0)])]),Object(a["createElementVNode"])("div",w,[_,Object(a["createElementVNode"])("table",$,[Object(a["createElementVNode"])("tbody",null,[Object(a["createElementVNode"])("tr",null,[L,Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(n.tempOrder.id),1)]),Object(a["createElementVNode"])("tr",null,[F,Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(e.$filters.date(n.tempOrder.create_at)),1)]),Object(a["createElementVNode"])("tr",null,[z,Object(a["createElementVNode"])("td",null,[n.tempOrder.paid_date?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",U,Object(a["toDisplayString"])(e.$filters.date(n.tempOrder.paid_date)),1)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",q,"時間不正確"))])]),Object(a["createElementVNode"])("tr",null,[I,Object(a["createElementVNode"])("td",null,[n.tempOrder.is_paid?(Object(a["openBlock"])(),Object(a["createElementBlock"])("strong",J,"已付款")):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",T,"尚未付款"))])]),Object(a["createElementVNode"])("tr",null,[A,Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(e.$filters.currency(n.tempOrder.total)),1)])])]),G,Object(a["createElementVNode"])("table",H,[K,Object(a["createElementVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.tempOrder.products,t=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("tr",{key:t.id},[Object(a["createElementVNode"])("th",null,Object(a["toDisplayString"])(t.product.title),1),Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(t.qty)+" / "+Object(a["toDisplayString"])(t.product.unit),1),Object(a["createElementVNode"])("td",Q,Object(a["toDisplayString"])(e.$filters.currency(t.final_total)),1)]))),128))])])])])]),Object(a["createElementVNode"])("div",R,[W,Object(a["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=t=>e.$emit("update-order",n.tempOrder))},"確認")])])])],512)}var Y=l("e0ae"),Z={name:"orderModal",props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-product"],mixins:[Y["a"]],inject:["emitter"],watch:{order(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}}},ee=l("6b0d"),te=l.n(ee);const le=te()(Z,[["render",X]]);var ae=le,ce=l("2a53"),ne={data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:ce["a"],DelModal:h["a"],OrderModal:ae},methods:{getOrders(e=1){this.currentPage=e;const t="https://vue3-course-api.hexschool.io/api/chifinal-api/admin/orders?page="+e;this.isLoading=!0,this.$http.get(t,this.tempProduct).then(e=>{this.orders=e.data.orders,this.pagination=e.data.pagination,this.isLoading=!1,console.log(e)})},openModal(e,t){this.tempOrder={...t},this.isNew=!1;const l=this.$refs.orderModal;l.showModal()},openDelOrderModal(e){this.tempOrder={...e};const t=this.$refs.delModal;t.showModal()},updatePaid(e){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/chifinal-api/admin/order/"+e.id,l={is_paid:e.is_paid};this.$http.put(t,{data:l}).then(e=>{this.isLoading=!1,this.getOrders(this.currentPage),this.$httpMessageState(e,"更新付款狀態")})},delOrder(){const e="https://vue3-course-api.hexschool.io/api/chifinal-api/admin/order/"+this.tempOrder.id;this.isLoading=!0,this.$http.delete(e).then(e=>{console.log(e);const t=this.$refs.delModal;t.hideModal(),this.getOrders(this.currentPage)})}},created(){this.getOrders()}};const oe=te()(ne,[["render",E]]);t["default"]=oe}}]);
//# sourceMappingURL=chunk-63444e99.cd28ad6f.js.map