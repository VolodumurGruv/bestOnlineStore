"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[687],{7403:(v,m,r)=>{r.d(m,{N:()=>o});var t=r(9862),s=r(4946),e=r(9397),h=r(6306),i=r(347),l=r(4009),c=r(6879);let o=(()=>{var n;class d{constructor(){this.http=(0,s.f3M)(t.eN),this.handleError=(0,s.f3M)(l.G),this.alertService=(0,s.f3M)(c.c)}getCart(){return this.http.get(`${i.rH.URL}/cart/get-cart`)}makeOrder(y,_=1){return this.http.post(`${i.rH.URL}/cart/add-to-cart`,{productId:y,quantity:_}).pipe((0,e.b)(C=>{0===_?this.alertService.warning("\u0422\u043e\u0432\u0430\u0440 \u0431\u0443\u043b\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e"):C&&this.alertService.success("\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0434\u0430\u043d\u043e \u0434\u043e \u043a\u043e\u0448\u0438\u043a\u0430 \u0443\u0441\u043f\u0456\u0448\u043d\u043e!")}),(0,h.K)(this.handleError.handleError("\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430")))}}return(n=d).\u0275fac=function(y){return new(y||n)},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),d})()},8493:(v,m,r)=>{r.d(m,{K:()=>n});var t=r(9862),s=r(4946),e=r(347),h=r(4009),i=r(7398),l=r(6306),c=r(8374),o=r(9397);let n=(()=>{var d;class f{constructor(){this.http=(0,s.f3M)(t.eN),this.httpErrorHandler=(0,s.f3M)(h.G)}getUsers(){return this.http.get(`${e.rH.URL}/user`).pipe((0,i.U)(_=>_.payload),(0,l.K)(this.httpErrorHandler.handleError("\u041d\u0435\u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432!")))}getUserById(_){return this.http.get(`${e.rH.URL}/user/${_}`).pipe((0,i.U)(C=>C.payload),(0,l.K)(this.httpErrorHandler.handleError("\u041d\u0435\u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430!")))}updateUser(_){return this.http.put(`${e.rH.URL}/user/profile`,_).pipe((0,c.X)(3),(0,o.b)(C=>{const P=C.payload.user;P.token=JSON.parse(localStorage.getItem("user")).token,localStorage.setItem("user",JSON.stringify(P))}),(0,l.K)(this.httpErrorHandler.handleError("\u041d\u0435\u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u043d\u043e\u0432\u0438\u0442\u0438 \u0434\u0430\u043d\u0456!")))}}return(d=f).\u0275fac=function(_){return new(_||d)},d.\u0275prov=s.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),f})()},6247:(v,m,r)=>{r.d(m,{k:()=>c});var t=r(6814);const s=(o,n)=>{let d=e.get(o)?.validatorErrorsKey?.map(f=>n?.[f]);return d?function h(o,...n){if(o)return o.replace(/{(\d+)}/g,(d,f)=>typeof n[f]<"u"?n[f]:d)}(e.get(o)?.message,...d):n?.message},e=new Map([["required",{message:"\u0426\u0435 \u043f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u043c"}],["minlength",{message:"\u041c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 {0} \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432",validatorErrorsKey:["requiredLength"]}],["maxlength",{message:"\u041d\u0435 \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043f\u043e\u043d\u0430\u0434 {0} \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432",validatorErrorsKey:["requiredLength"]}]]);var i=r(4946);function l(o,n){if(1&o&&(i.ynx(0),i.TgZ(1,"div",1),i._uU(2),i.qZA(),i.BQk()),2&o){const d=i.oxw();i.xp6(2),i.hij(" ",d.errorMessage," ")}}let c=(()=>{var o;class n{get errorMessage(){for(const f in this.control?.errors)if(this.control.touched)return s(f,this.control.errors[f]);return null}}return(o=n).\u0275fac=function(f){return new(f||o)},o.\u0275cmp=i.Xpm({type:o,selectors:[["app-error-validation"]],inputs:{control:"control"},standalone:!0,features:[i.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[1,"errorMessage"]],template:function(f,y){1&f&&i.YNc(0,l,3,1,"ng-container",0),2&f&&i.Q6J("ngIf",null!==y.errorMessage)},dependencies:[t.O5],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Manrope&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap";.errorMessage[_ngcontent-%COMP%]{font-family:Inter;font-size:14px;font-weight:400;font-style:normal;line-height:normal;position:absolute;top:30px;right:40px;width:500px;color:#da3838}app-error-validation[_ngcontent-%COMP%]{position:relative}']}),n})()},2476:(v,m,r)=>{r.d(m,{o:()=>h});var t=r(6814),s=r(4946);const e=function(i){return{fill:i}};let h=(()=>{var i;class l{constructor(){this.path="",this.viewBox="",this.fill=""}ngOnInit(){this.link=`assets/pics/svg/${this.path}.svg#${this.path}`}}return(i=l).\u0275fac=function(o){return new(o||i)},i.\u0275cmp=s.Xpm({type:i,selectors:[["app-icon"]],hostVars:2,hostBindings:function(o,n){2&o&&s.Udp("-webkit-mask-image",n.link)},inputs:{path:"path",size:"size",viewBox:"viewBox",fill:"fill",i:"i",rating:"rating"},standalone:!0,features:[s.jDz],decls:3,vars:7,consts:[["xmlns","http://www.w3.org/2000/svg","fill","none"],["points","8,10 5,5 23,70 16,12 28,2",3,"ngStyle"]],template:function(o,n){1&o&&(s.O4$(),s.TgZ(0,"svg",0),s._UZ(1,"polygon",1)(2,"use"),s.qZA()),2&o&&(s.Akn(n.size),s.xp6(1),s.Q6J("ngStyle",s.VKq(5,e,n.i<n.rating?"yellow":"none")),s.xp6(1),s.uIk("href",n.link,null,"xlink")("href",n.link))},dependencies:[t.ez,t.PC],styles:["svg[_ngcontent-%COMP%]{width:inherit;height:inherit}"]}),l})()},1211:(v,m,r)=>{r.d(m,{I:()=>A});var t=r(4946),s=r(6814),e=r(6223),h=r(180),i=r(7394),l=r(9397),c=r(8493),o=r(5693),n=r(2198),d=r(1230),f=r(6247),y=r(2982),_=r(2476);function C(g,b){if(1&g){const u=t.EpF();t.TgZ(0,"li",13),t.NdJ("click",function(){const M=t.CHM(u).$implicit,x=t.oxw(2);return t.KtG(x.chosenAddress(M))}),t._uU(1),t.qZA()}if(2&g){const u=b.$implicit;t.xp6(1),t.HOy(" ",u.SettlementTypeDescription," ",u.Description," ",u.RegionsDescription," ",u.AreaDescription," ")}}function P(g,b){if(1&g&&(t.TgZ(0,"div",10)(1,"ul",11),t.YNc(2,C,2,4,"li",12),t.qZA()()),2&g){const u=t.oxw();t.xp6(2),t.Q6J("ngForOf",u.addresses)}}const w=function(){return{width:"23px",height:"23px"}},I=function(g){return{hidden:g}};let E=(()=>{var g;class b{constructor(){this.isCart=!1,this.departments=new t.vpe,this.changeDetectorRef=(0,t.f3M)(t.sBO),this.isValid=d.J,this.isChosen=!1,this.isDepartment=!1,this.addresses=[],this.phoneHolder="+380"}ngAfterViewChecked(){this.isCart&&this.infoForm.get("password")?.removeValidators([e.kI.required,e.kI.minLength(8),e.kI.maxLength(16),(0,o.ym)()]),this.changeDetectorRef.detectChanges()}getAddress(p){p&&((0,y.ZK)(p).then(a=>a.json()).then(a=>this.addresses=a.data),this.isChosen=!0)}chosenAddress(p){const{Description:a,AreaDescription:M,SettlementTypeDescription:x,RegionsDescription:O,Ref:T}=p;this.infoForm.get("address")?.setValue(`${x} ${a} ${O} ${M}`),this.getDepartments({city:a,ref:T}),this.isDepartment=!1,this.isChosen=!1}getDepartments(p){this.departments.emit(p)}onblur(){this.clearTimeOut=setTimeout(()=>{clearTimeout(this.clearTimeOut),this.isChosen=!1,this.isDepartment=!1},100)}}return(g=b).\u0275fac=function(p){return new(p||g)},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-info-form-item"]],inputs:{infoForm:"infoForm",isCart:"isCart"},outputs:{departments:"departments"},standalone:!0,features:[t.jDz],decls:16,vars:16,consts:[[1,"user__form",3,"formGroup"],[1,"user__wrap-input",3,"ngClass"],["type","text","formControlName","firstName","placeholder","\u0406\u043c'\u044f *",1,"user__input"],[3,"control"],[3,"path","size","viewBox"],[1,"phone-holder"],["type","text","formControlName","phone",1,"user__input"],[3,"ngClass"],["type","password","formControlName","password","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c *",1,"user__input"],["class","address__list",4,"ngIf"],[1,"address__list"],[1,"address__list-items"],["class","address__list-item",3,"click",4,"ngFor","ngForOf"],[1,"address__list-item",3,"click"]],template:function(p,a){1&p&&(t.TgZ(0,"form",0)(1,"div",1),t._UZ(2,"input",2)(3,"app-error-validation",3),t.qZA(),t.TgZ(4,"div",1)(5,"span"),t._UZ(6,"app-icon",4),t.qZA(),t.TgZ(7,"span",5),t._uU(8),t.qZA(),t._UZ(9,"input",6)(10,"app-error-validation",3),t.qZA(),t.TgZ(11,"div",7)(12,"div",1),t._UZ(13,"input",8)(14,"app-error-validation",3),t.qZA()(),t.YNc(15,P,3,1,"div",9),t.qZA()),2&p&&(t.Q6J("formGroup",a.infoForm),t.xp6(1),t.Q6J("ngClass",a.isValid(a.infoForm,"firstName")),t.xp6(2),t.Q6J("control",a.infoForm.get("firstName")),t.xp6(1),t.Q6J("ngClass",a.isValid(a.infoForm,"phone")),t.xp6(2),t.Q6J("path","flag")("size",t.DdM(13,w))("viewBox","0 0 23 23"),t.xp6(2),t.Oqu(a.phoneHolder),t.xp6(2),t.Q6J("control",a.infoForm.get("phone")),t.xp6(1),t.Q6J("ngClass",t.VKq(14,I,a.isCart)),t.xp6(1),t.Q6J("ngClass",a.isValid(a.infoForm,"password")),t.xp6(2),t.Q6J("control",a.infoForm.get("password")),t.xp6(1),t.Q6J("ngIf",a.addresses.length&&a.isChosen))},dependencies:[s.ez,s.mk,s.sg,s.O5,e.UX,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,f.k,_.o],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Manrope&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap";.btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:8px;flex-shrink:0;cursor:pointer}.btn__login[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:20px;font-weight:500;font-style:normal;line-height:130%;width:570px;height:60px;padding:16px 12px;gap:8;background:#272727;color:#fafafa}.btn__login[_ngcontent-%COMP%]:hover{box-shadow:0 4px 4px #09090966}.btn__login[_ngcontent-%COMP%]:active{box-shadow:none}.btn__buy[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:24px;font-weight:400;font-style:normal;line-height:130%;height:64px;padding:8px 16px;text-transform:uppercase;gap:8;background:#272727;color:#fff}.btn__buy[_ngcontent-%COMP%]:hover{box-shadow:0 4px 4px #09090966}.btn__buy[_ngcontent-%COMP%]:active{box-shadow:none}.btn__add[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:20px;font-weight:300;font-style:normal;line-height:130%;color:#000;height:64px;padding:16px 32px;text-transform:uppercase;gap:16px;border:1px solid #05020e;color:#05020e}.btn__add[_ngcontent-%COMP%]:hover{background:#05020e;color:#fff}.btn__add[_ngcontent-%COMP%]:active{background:transparent;color:#05020e}.btn__reply[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:22px;font-weight:400;font-style:normal;line-height:130%;color:#000;padding:16px;gap:16px;border:1px solid #646464;color:#05020e}.disabled[_ngcontent-%COMP%], .btn__add[_ngcontent-%COMP%]:disabled, .btn__reply[_ngcontent-%COMP%]:disabled{border:1px solid #949494;color:#949494;box-shadow:none;background:transparent}.disabled-grey[_ngcontent-%COMP%], .btn__login[_ngcontent-%COMP%]:disabled, .btn__buy[_ngcontent-%COMP%]:disabled{background:#949494;color:#fafafa;box-shadow:none}.errorMessage[_ngcontent-%COMP%]{font-family:Inter;font-size:14px;font-weight:400;font-style:normal;line-height:normal;position:absolute;top:30px;right:40px;width:500px;color:#da3838}app-error-validation[_ngcontent-%COMP%]{position:relative}input[type=radio][_ngcontent-%COMP%]{font-family:Roboto,sans-serif;-webkit-appearance:none;appearance:none;background-color:var(--form-background);margin:0;width:20px;height:20px;border:1px solid #000;border-radius:.15em;transform:translateY(-.075em);display:grid;place-content:center;z-index:0}input[type=radio][_ngcontent-%COMP%]:before{content:"";width:18px;height:18px;clip-path:polygon(0% 27%,0 25%,50% 95%,80% 16%,80% 0%,43% 62%);transform:scale(0);transform-origin:bottom left;transition:.12s transform ease-in-out;box-shadow:inset 5px 5px var(--form-control-color);background-color:CanvasText;z-index:0}input[type=radio][_ngcontent-%COMP%]:checked:before{transform:scale(1);z-index:0}.user__info[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:100px}.user__info-title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:28px;font-weight:400;font-style:normal;line-height:130%;color:#000;text-align:center;padding-bottom:72px}.user__form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;gap:32px;width:837px}.user__wrap-input[_ngcontent-%COMP%]{display:flex;padding:12px 16px;align-items:center;gap:8px;border-radius:8px;border:1px solid #949494;width:402px}.user__input[_ngcontent-%COMP%]{width:536px;height:29px;border:none;outline:none;font-size:18px;font-style:normal;font-weight:400;line-height:130%}.user__input[_ngcontent-%COMP%]::placeholder{color:#949494}.phone-holder[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:18px;font-weight:400;font-style:normal;line-height:130%;color:#000;text-align:center;color:#5d5d5d}.list[_ngcontent-%COMP%], .address__list[_ngcontent-%COMP%]{position:relative;border:1px solid #4c4c4c;border-top:none;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top-right-radius:none;border-top-left-radius:none;background:#fff}.address__list[_ngcontent-%COMP%]{top:-35px;left:-1px;max-width:402px;z-index:1}.address__list-item[_ngcontent-%COMP%]{position:relative;border-radius:8px;padding:0 20px 10px 10px;cursor:pointer}.address__list-item[_ngcontent-%COMP%]:hover{background:#efeeee}.address__list-items[_ngcontent-%COMP%]{display:block;position:absolute;list-style:none;border:1px solid #000;border-top:none;border-bottom-right-radius:8px;border-bottom-left-radius:8px;width:402px;overflow-y:auto;max-height:50vh;background:#fff}.hidden[_ngcontent-%COMP%]{visibility:hidden}']}),b})();const D=["*"];let A=(()=>{var g;class b{constructor(){this.fb=(0,t.f3M)(e.qu),this.router=(0,t.f3M)(h.F0),this.route=(0,t.f3M)(h.gz),this.userService=(0,t.f3M)(c.K),this.unSub=new i.w0,this.isCart=!1,this.isDepartment=!1,this.infoForm=this.fb.group({firstName:["",[e.kI.required,e.kI.minLength(3),e.kI.maxLength(30),(0,o.qg)()]],lastName:["",[e.kI.required,e.kI.minLength(3),e.kI.maxLength(30),(0,o.qg)()]],email:["",[e.kI.required,e.kI.email,(0,o.Le)()]],phone:["",[e.kI.required,e.kI.minLength(9),e.kI.maxLength(9),(0,o.tH)()]],password:["",[e.kI.required,e.kI.minLength(8),e.kI.maxLength(16),(0,o.ym)()]]})}ngOnInit(){this.getUserInfo(),this.route.url.subscribe(p=>{p[0]&&(this.path=p[0].path)})}ngAfterViewChecked(){"\u041d\u043e\u0432\u0430 \u043f\u043e\u0448\u0442\u0430"===this.infoForm.get("deliveryMethod")?.value&&(this.infoForm.get("novaPoshtaAddress")?.addValidators(e.kI.required),this.infoForm.get("novaPoshtaAddress")?.updateValueAndValidity()),"\u041d\u043e\u0432\u0430 \u043f\u043e\u0448\u0442\u0430"!==this.infoForm.get("deliveryMethod")?.value&&(this.infoForm.get("novaPoshtaAddress")?.removeValidators(e.kI.required),this.infoForm.get("novaPoshtaAddress")?.updateValueAndValidity())}updateUser(){this.unSub.add(this.userService.updateUser(this.infoForm.value).subscribe(p=>{(0,n.w)(this.infoForm,p.payload.user)}))}makeOrder(){this.infoForm.value&&(this.unSub.add(this.userService.updateUser(this.infoForm.value).subscribe(()=>{this.router.navigate([{outlets:{cart:null}}],{relativeTo:this.route.parent})})),this.router.navigate(["/order"]))}getDepartments(p){const{city:a,ref:M}=p;a&&(0,y.xL)(a,M).then(x=>x.json()).then(x=>(this.isDepartment=!0,this.departments=x.data.filter(O=>"Postomat"!==O.CategoryOfWarehouse).map(O=>({city:O.CityDescription,description:O.Description})))).catch(x=>{console.error(x)})}cancel(){this.infoForm.reset(),this.getUserInfo()}getUserInfo(){this.unSub.add(this.userService.getUserById(JSON.parse(localStorage.getItem("user"))._id).pipe((0,l.b)(p=>{this.user=p.user,(0,n.w)(this.infoForm,this.user)})).subscribe())}redirectToContact(){this.router.navigate(["/about/contact"])}ngOnDestroy(){this.unSub.unsubscribe()}}return(g=b).\u0275fac=function(p){return new(p||g)},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-info-form"]],inputs:{isCart:"isCart"},standalone:!0,features:[t.jDz],ngContentSelectors:D,decls:6,vars:3,consts:[[1,"user__info-title"],["autocomplete","on",1,"user__form",3,"formGroup","ngSubmit"],[3,"infoForm","isCart","departments"],[1,"delivery__actions"]],template:function(p,a){1&p&&(t.F$t(),t.TgZ(0,"div",0),t._uU(1,"\u041e\u0441\u043e\u0431\u0438\u0441\u0442\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f"),t.qZA(),t.TgZ(2,"form",1),t.NdJ("ngSubmit",function(){return a.isCart?a.makeOrder():a.updateUser()}),t.TgZ(3,"app-info-form-item",2),t.NdJ("departments",function(x){return a.getDepartments(x)}),t.qZA(),t.TgZ(4,"div",3),t.Hsn(5),t.qZA()()),2&p&&(t.xp6(2),t.Q6J("formGroup",a.infoForm),t.xp6(1),t.Q6J("infoForm",a.infoForm)("isCart",a.isCart))},dependencies:[s.ez,e.UX,e._Y,e.JL,e.sg,E],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Manrope&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap";.btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:8px;flex-shrink:0;cursor:pointer}.btn__login[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:20px;font-weight:500;font-style:normal;line-height:130%;width:570px;height:60px;padding:16px 12px;gap:8;background:#272727;color:#fafafa}.btn__login[_ngcontent-%COMP%]:hover{box-shadow:0 4px 4px #09090966}.btn__login[_ngcontent-%COMP%]:active{box-shadow:none}.btn__buy[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:24px;font-weight:400;font-style:normal;line-height:130%;height:64px;padding:8px 16px;text-transform:uppercase;gap:8;background:#272727;color:#fff}.btn__buy[_ngcontent-%COMP%]:hover{box-shadow:0 4px 4px #09090966}.btn__buy[_ngcontent-%COMP%]:active{box-shadow:none}.btn__add[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:20px;font-weight:300;font-style:normal;line-height:130%;color:#000;height:64px;padding:16px 32px;text-transform:uppercase;gap:16px;border:1px solid #05020e;color:#05020e}.btn__add[_ngcontent-%COMP%]:hover{background:#05020e;color:#fff}.btn__add[_ngcontent-%COMP%]:active{background:transparent;color:#05020e}.btn__reply[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:22px;font-weight:400;font-style:normal;line-height:130%;color:#000;padding:16px;gap:16px;border:1px solid #646464;color:#05020e}.disabled[_ngcontent-%COMP%], .btn__add[_ngcontent-%COMP%]:disabled, .btn__reply[_ngcontent-%COMP%]:disabled{border:1px solid #949494;color:#949494;box-shadow:none;background:transparent}.disabled-grey[_ngcontent-%COMP%], .btn__login[_ngcontent-%COMP%]:disabled, .btn__buy[_ngcontent-%COMP%]:disabled{background:#949494;color:#fafafa;box-shadow:none}.errorMessage[_ngcontent-%COMP%]{font-family:Inter;font-size:14px;font-weight:400;font-style:normal;line-height:normal;position:absolute;top:30px;right:40px;width:500px;color:#da3838}app-error-validation[_ngcontent-%COMP%]{position:relative}input[type=radio][_ngcontent-%COMP%]{font-family:Roboto,sans-serif;-webkit-appearance:none;appearance:none;background-color:var(--form-background);margin:0;width:20px;height:20px;border:1px solid #000;border-radius:.15em;transform:translateY(-.075em);display:grid;place-content:center;z-index:0}input[type=radio][_ngcontent-%COMP%]:before{content:"";width:18px;height:18px;clip-path:polygon(0% 27%,0 25%,50% 95%,80% 16%,80% 0%,43% 62%);transform:scale(0);transform-origin:bottom left;transition:.12s transform ease-in-out;box-shadow:inset 5px 5px var(--form-control-color);background-color:CanvasText;z-index:0}input[type=radio][_ngcontent-%COMP%]:checked:before{transform:scale(1);z-index:0}.user__info-title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:28px;font-weight:400;font-style:normal;line-height:130%;color:#000;text-align:center;padding-bottom:72px}.user__form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;gap:32px;width:837px}.list[_ngcontent-%COMP%]{position:relative;border:1px solid #4c4c4c;border-top:none;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top-right-radius:none;border-top-left-radius:none;background:#fff}.icon[_ngcontent-%COMP%]{cursor:pointer}.delivery__actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;gap:80px;padding-top:80px}']}),b})()},2198:(v,m,r)=>{r.d(m,{w:()=>s});var t=r(1230);const s=(e,h)=>{if(h)for(const i in h)"allImages"!==i&&(e.get(i)?.patchValue(h[i]),(0,t.J)(e,i))}},1230:(v,m,r)=>{r.d(m,{J:()=>t});const t=(s,e)=>({"box-danger":!s.get(e)?.valid&&s.get(e)?.touched,"box-success":s.get(e)?.valid&&s.get(e)?.touched})},2982:(v,m,r)=>{r.d(m,{MC:()=>i,ZK:()=>e,xL:()=>l});var t=r(5516);const s="https://api.novaposhta.ua/v2.0/json/",e=n=>(console.log(n),o(s,{apiKey:t.N.novaPoshta,modelName:"Address",calledMethod:"getSettlements",methodProperties:{FindByString:n}})),i=n=>o(s,{apiKey:t.N.novaPoshta,modelName:"Address",calledMethod:"getCities",methodProperties:{FindByString:n}}),l=(n,d)=>o(s,{apiKey:t.N.novaPoshta,modelName:"Address",calledMethod:"getWarehouses",methodProperties:{CityName:n}}),o=(n,d)=>fetch(n,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(d)})},5693:(v,m,r)=>{function t(){return l=>{let n,c=!1;return l.value&&(n=l.value.match(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0406\u0456\u0407\u0457\u0404\u0454\u0490\u0491']{3,30}([A-Za-z\u0410-\u042f\u0430-\u044f\u0406\u0456\u0407\u0457\u0404\u0454\u0490\u0491'\s'`-]{3,30}){0,1}$/g),n&&(c=n.join("")===l.value)),c?null:{name:{message:"\u0456\u043c'\u044f \u043c\u043e\u0436\u0435 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043b\u0438\u0448\u0435 \u0431\u0443\u043a\u0432\u0438"}}}}function s(){return l=>{const c=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/g;let o=!1;if(l.value){const n=l.value.trim().match(c);n&&(o=n.join("")===l.value)}return l.parent?.get("email"),o?null:{email:{message:"\u0432\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 e-mail"}}}}function e(){return l=>{const c=/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@#$_!%*?&]{8,16}$/g;let o=!1;if(l.value){const n=l.value.trim().match(c);n&&(o=n.join("")===l.value)}return o?null:{password:{message:"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u0445\u043e\u0447\u0430\u0431 \u043e\u0434\u0438\u043d \u0441\u0438\u043c\u0432\u043e\u043b, \u043e\u0434\u043d\u0443 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043d\u0443 \u043b\u0456\u0442\u0435\u0440\u0443 \u0442\u0430 \u0446\u0438\u0444\u0440\u0443"}}}}function h(){return l=>{const c=l.parent?.getRawValue().password,o=l.parent?.getRawValue().confirmPassword;return o&&o!==c?{confirmPassword:{message:"\u043f\u0430\u0440\u043e\u043b\u0456 \u043c\u0430\u044e\u0442\u044c \u0437\u0431\u0456\u0433\u0430\u0442\u0438\u0441\u044f"}}:null}}function i(){const l=/[0-9]{9,9}$/g;return c=>{const o=c.value?.match(l);let n=!1;return o&&(n=o.join("")===c.value),n?null:{phone:{message:"\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443"}}}}r.d(m,{IX:()=>h,Le:()=>s,qg:()=>t,tH:()=>i,ym:()=>e})}}]);