"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[938],{4938:(O,u,o)=>{o.r(u),o.d(u,{EditProductComponent:()=>E});var t=o(4946),a=o(6814),c=o(7394),d=o(4664),l=o(9397),p=o(180),_=o(2239),m=o(6685),f=o(95),g=o(4063);function h(e,s){if(1&e){const i=t.EpF();t.ynx(0),t.TgZ(1,"app-edit-product-item",1)(2,"button",2),t._uU(3," \u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 "),t.qZA(),t.TgZ(4,"button",3),t.NdJ("click",function(){t.CHM(i);const r=t.oxw();return t.KtG(r.cancel())}),t._uU(5," \u0412\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438 "),t.qZA(),t.TgZ(6,"button",3),t.NdJ("click",function(){const P=t.CHM(i).ngIf,M=t.oxw();return t.KtG(M.delete(P._id))}),t._uU(7," \u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 "),t.qZA()(),t.BQk()}if(2&e){const i=s.ngIf,n=t.oxw();t.xp6(1),t.Q6J("product",i)("isUpdate",n.isUpdate),t.xp6(1),t.Q6J("disabled",!n.valid)}}let E=(()=>{var e;class s{constructor(){this.productsService=(0,t.f3M)(_.s),this.route=(0,t.f3M)(p.gz),this.validFormService=(0,t.f3M)(g.i),this.valid=!1,this.isUpdate=!1,this.unSub=new c.w0}ngOnInit(){this.isUpdate=!0,this.product$=this.route.paramMap.pipe((0,d.w)(n=>this.productsService.getProductById(n.get("id")))),this.unSub.add(this.validFormService.productFormValid$.pipe((0,l.b)(n=>{this.valid=n})).subscribe())}delete(n){n&&this.unSub.add(this.productsService.deleteProduct(n).subscribe())}cancel(){this.validFormService.cancel()}ngOnDestroy(){this.unSub.unsubscribe(),this.isUpdate=!1}}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-edit-product"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"product","isUpdate"],["type","submit",1,"btn","btn__add",3,"disabled"],["type","button",1,"btn","btn__add",3,"click"]],template:function(n,r){1&n&&(t.YNc(0,h,8,3,"ng-container",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,r.product$))},dependencies:[a.ez,a.O5,a.Ov,m.u,f.UX],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Manrope&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap";.form-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;height:auto;gap:2rem}.input-wrap[_ngcontent-%COMP%]{display:flex;padding:12px 16px;align-items:center;gap:8px;border-radius:8px;border:1px solid #949494}.input[_ngcontent-%COMP%]{width:536px;height:29px;border:none;outline:none;font-size:18px;font-style:normal;font-weight:400;line-height:130%}.input[_ngcontent-%COMP%]::placeholder{color:#949494}']}),s})()}}]);