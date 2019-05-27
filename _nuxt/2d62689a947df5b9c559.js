(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{408:function(e,r,t){"use strict";t.d(r,"a",function(){return o});var o=[function(e){return!!e||"Cannot be empty."}]},506:function(e,r,t){"use strict";t.r(r);t(52);var o=t(10),n=t(408),c=t(67),l=t(0),d=t.n(l);var f={name:"ingreso",data:function(){return{valid:!1,form:{categoria:"",decada:"",fecha:"",ind_es:1,periodo:"",valor:"",notas:""},success:"",error:"",decadas:[10,20,30],notEmptyRules:n.a,menu2:!1,periodos:["201905","201906"],categorias:["Salario","Mes Anterior","Amor","Amor Ahorro","Samu Prepagada","BBVA Mercado","Jhon Jairo","Oxigeno mama","Papa Prepagada","Mama Credito Bancolombia","Laboratorio Internet"],guardando:!1}},mounted:function(){this.form.periodo=this.$store.getters.periodo,this.form.decada=this.$store.getters.decada,this.form.fecha=d()().format("YYYY-MM-DD")},methods:{guardar:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.error="",!this.$refs.form.validate()){e.next=19;break}return e.prev=2,this.guardando=!0,e.next=6,c.b.collection("cuentas_movimientos").add(this.form);case 6:r=e.sent,console.log("ingreso.vue docRef",r),this.success="Se guardo con exito",e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),this.error=e.t0;case 14:return e.prev=14,this.guardando=!1,e.finish(14);case 17:e.next=20;break;case 19:this.error="Debe ingresar los valores";case 20:case"end":return e.stop()}},e,this,[[2,11,14,17]])}));return function(){return e.apply(this,arguments)}}()}},v=t(37),m=t(71),x=t.n(m),h=t(498),k=t(120),_=t(412),y=t(497),w=t(411),V=t(111),$=t(500),C=t(116),D=t(458),A=t(117),M=t(439),R=t(496),P=t(499),component=Object(v.a)(f,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-card",[t("v-card-title",{attrs:{"primary-title":""}},[t("h4",[e._v("Registrar Ingreso")])]),e._v(" "),t("v-form",{ref:"form",staticClass:"ma-3",attrs:{"lazy-validation":""},on:{keydown:function(r){if(!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;r.preventDefault()}},model:{value:e.valid,callback:function(r){e.valid=r},expression:"valid"}},[t("v-container",[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],attrs:{xs12:""}},[t("v-alert",{attrs:{value:e.error,type:"error"}},[e._v("\n            "+e._s(e.error)+"\n          ")])],1),e._v(" "),t("v-flex",{directives:[{name:"show",rawName:"v-show",value:e.success,expression:"success"}],attrs:{xs12:""}},[t("v-alert",{attrs:{value:e.success,type:"success"}},[e._v("\n            "+e._s(e.success)+"\n          ")])],1),e._v(" "),t("v-flex",{attrs:{xs4:""}},[t("v-select",{attrs:{items:e.periodos,label:"Periodo"},model:{value:e.form.periodo,callback:function(r){e.$set(e.form,"periodo",r)},expression:"form.periodo"}})],1),e._v(" "),t("v-flex",{attrs:{xs4:""}},[t("v-select",{attrs:{items:e.decadas,rules:[function(e){return!!e||"Debe seleccionar la decada"}],label:"Decada",required:""},model:{value:e.form.decada,callback:function(r){e.$set(e.form,"decada",r)},expression:"form.decada"}})],1),e._v(" "),t("v-flex",{attrs:{xs4:""}},[t("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on;return[t("v-text-field",e._g({attrs:{label:"Fecha","prepend-icon":"event",readonly:""},model:{value:e.form.fecha,callback:function(r){e.$set(e.form,"fecha",r)},expression:"form.fecha"}},o))]}}]),model:{value:e.menu2,callback:function(r){e.menu2=r},expression:"menu2"}},[e._v(" "),t("v-date-picker",{on:{input:function(r){e.menu2=!1}},model:{value:e.form.fecha,callback:function(r){e.$set(e.form,"fecha",r)},expression:"form.fecha"}})],1)],1),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("v-select",{attrs:{items:e.categorias,rules:[function(e){return!!e||"Debe seleccionar la categoria"}],label:"Categoria",required:""},model:{value:e.form.categoria,callback:function(r){e.$set(e.form,"categoria",r)},expression:"form.categoria"}})],1),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("v-text-field",{attrs:{rules:e.notEmptyRules,label:"Valor",required:"","prepend-icon":"attach_money"},model:{value:e.form.valor,callback:function(r){e.$set(e.form,"valor",r)},expression:"form.valor"}})],1),e._v(" "),t("v-flex",{attrs:{xs12:""}},[t("v-text-field",{attrs:{label:"Notas"},model:{value:e.form.notas,callback:function(r){e.$set(e.form,"notas",r)},expression:"form.notas"}})],1),e._v(" "),t("v-card-actions",[t("v-btn",{attrs:{primary:"",large:"",disabled:!e.valid,loading:e.guardando},on:{click:e.guardar}},[e._v("\n            Guardar\n          ")])],1)],1)],1)],1)],1)},[],!1,null,"1a353a56",null);r.default=component.exports;x()(component,{VAlert:h.a,VBtn:k.a,VCard:_.a,VCardActions:y.a,VCardTitle:w.a,VContainer:V.a,VDatePicker:$.a,VFlex:C.a,VForm:D.a,VLayout:A.a,VMenu:M.a,VSelect:R.a,VTextField:P.a})}}]);