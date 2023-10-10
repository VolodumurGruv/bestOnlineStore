"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[158],{7403:(M,v,o)=>{o.d(v,{N:()=>i});var e=o(9862),d=o(4946),n=o(347),_=o(4009),g=o(6306);let i=(()=>{var r;class s{constructor(){this.http=(0,d.f3M)(e.eN),this.handleError=(0,d.f3M)(_.G)}getCart(){return this.http.get(`${n.rH.URL}/cart/get-cart`)}makeOrder(h,x=1){return this.http.post(`${n.rH.URL}/cart/add-to-cart`,{productId:h,quantity:x}).pipe((0,g.K)(this.handleError.handleError("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0442\u043e\u0432\u0430\u0440\u0443 \u0434\u043e \u043a\u043e\u0448\u0438\u043a\u0443")))}}return(r=s).\u0275fac=function(h){return new(h||r)},r.\u0275prov=d.Yz7({token:r,factory:r.\u0275fac}),s})()},8493:(M,v,o)=>{o.d(v,{K:()=>s});var e=o(9862),d=o(4946),n=o(347),_=o(4009),g=o(7398),i=o(6306),r=o(9397);let s=(()=>{var a;class h{constructor(){this.http=(0,d.f3M)(e.eN),this.httpErrorHandler=(0,d.f3M)(_.G)}getUsers(){return this.http.get(`${n.rH.URL}/user/all`).pipe((0,g.U)(C=>C.payload),(0,i.K)(this.httpErrorHandler.handleError("\u041d\u0435\u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432!")))}getUserById(C){return this.http.get(`${n.rH.URL}/user/${C}`).pipe((0,g.U)(y=>y.payload),(0,i.K)(this.httpErrorHandler.handleError("\u041d\u0435\u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430!")))}updateUser(C){return this.http.put(`${n.rH.URL}/user/profile`,C).pipe((0,r.b)(y=>{console.log(y),localStorage.setItem("user",JSON.stringify(y.payload.user)),localStorage.setItem("address",JSON.stringify(y.payload.address))}),(0,i.K)(this.httpErrorHandler.handleError("\u041d\u0435\u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u043d\u043e\u0432\u0438\u0442\u0438 \u0434\u0430\u043d\u0456!")))}}return(a=h).\u0275fac=function(C){return new(C||a)},a.\u0275prov=d.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),h})()},2370:(M,v,o)=>{o.d(v,{I:()=>U});var e=o(4946),d=o(6814),n=o(95),_=o(180),g=o(8493),i=o(1230),r=o(5693),s=o(2198),a=o(5516);const h="https://api.novaposhta.ua/v2.0/json/",O=(l,f)=>fetch(l,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(f)});var P=o(6247),E=o(7957),A=o(9397);function Z(l,f){if(1&l){const u=e.EpF();e.TgZ(0,"li",47),e.NdJ("click",function(){const c=e.CHM(u).$implicit,m=e.oxw(2);return e.KtG(m.chosenAddress(c))}),e._uU(1),e.qZA()}if(2&l){const u=f.$implicit;e.xp6(1),e.HOy(" ",u.SettlementTypeDescription," ",u.Description," ",u.RegionsDescription," ",u.AreaDescription," ")}}function T(l,f){if(1&l&&(e.TgZ(0,"div",44)(1,"ul",45),e.YNc(2,Z,2,4,"li",46),e.qZA()()),2&l){const u=e.oxw();e.xp6(2),e.Q6J("ngForOf",u.addresses)}}function F(l,f){if(1&l){const u=e.EpF();e.TgZ(0,"li",51),e.NdJ("click",function(){const c=e.CHM(u).$implicit,m=e.oxw(2);return e.KtG(m.chosenDepartment(c))}),e._uU(1),e.qZA()}if(2&l){const u=f.$implicit;e.xp6(1),e.AsE(" ",u.city," ",u.description," ")}}function D(l,f){if(1&l&&(e.TgZ(0,"div",48)(1,"ul",49),e.YNc(2,F,2,2,"li",50),e.qZA()()),2&l){const u=e.oxw();e.xp6(2),e.Q6J("ngForOf",u.departments)}}const I=function(){return{hidden:!1}},w=["*"];let U=(()=>{var l;class f{constructor(){this.fb=(0,e.f3M)(n.qu),this.router=(0,e.f3M)(_.F0),this.route=(0,e.f3M)(_.gz),this.userService=(0,e.f3M)(g.K),this.orderService=(0,e.f3M)(E.p),this.phoneHolder="+380",this.addresses=[],this.isChosen=!1,this.isDepartment=!1,this.isValid=i.J,this.isCart=!1,this.infoForm=this.fb.group({name:["",[n.kI.required,n.kI.minLength(3),n.kI.maxLength(30),(0,r.qg)()]],lastName:["",[n.kI.required,n.kI.minLength(3),n.kI.maxLength(30),(0,r.qg)()]],email:["",[n.kI.required,n.kI.email,(0,r.Le)()]],shippingAddress:["",[n.kI.required]],phone:["",[n.kI.required,n.kI.minLength(9),n.kI.maxLength(9),(0,r.tH)()]],password:["",[n.kI.required,n.kI.minLength(8),n.kI.maxLength(16),(0,r.ym)()]],department:[""],deliveryMethod:["",[n.kI.required]],paymentMethod:["cash"]})}ngOnInit(){this.userService.getUserById(JSON.parse(localStorage.getItem("user"))._id).pipe((0,A.b)(p=>(0,s.w)(this.infoForm,p))).subscribe(),this.route.url.subscribe(p=>{p[0]&&(this.path=p[0].path,console.log(this.path))})}ngAfterViewChecked(){"\u041d\u043e\u0432\u0430 \u043f\u043e\u0448\u0442\u0430"===this.infoForm.get("deliveryMethod")?.value&&(this.infoForm.get("department")?.addValidators(n.kI.required),this.infoForm.get("department")?.updateValueAndValidity()),"\u041d\u043e\u0432\u0430 \u043f\u043e\u0448\u0442\u0430"!==this.infoForm.get("deliveryMethod")?.value&&(this.infoForm.get("department")?.removeValidators(n.kI.required),this.infoForm.get("department")?.updateValueAndValidity())}getAddress(p){p&&((l=>(console.log(l),O(h,{apiKey:a.N.novaPoshta,modelName:"Address",calledMethod:"getSettlements",methodProperties:{FindByString:l}})))(p).then(t=>t.json()).then(t=>this.addresses=t.data),this.isChosen=!0)}chosenAddress(p){const{Description:t,AreaDescription:c,SettlementTypeDescription:m,RegionsDescription:b,Ref:k}=p;this.infoForm.get("shippingAddress")?.setValue(`${m} ${t} ${b} ${c}`),this.getDepartments(t,k),this.isDepartment=!1,this.isChosen=!1}updateUser(){this.userService.updateUser(this.infoForm.value).subscribe(()=>{(0,s.w)(this.infoForm,this.infoForm.controls)})}makeOrder(){this.userService.updateUser(this.infoForm.value).subscribe(),this.orderService.makeOrder(JSON.parse(localStorage.getItem("user"))._id).subscribe()}onSubmit(){}cancel(){(0,s.w)(this.infoForm,this.infoForm.controls)}getDepartments(p,t=""){p&&((l,f)=>O(h,{apiKey:a.N.novaPoshta,modelName:"Address",calledMethod:"getWarehouses",methodProperties:{CityName:l,SettlementRef:f}}))(p,t).then(c=>c.json()).then(c=>(this.isDepartment=!0,this.departments=c.data.filter(m=>"Postomat"!==m.CategoryOfWarehouse).map(m=>({city:m.CityDescription,description:m.Description})))).catch(c=>{console.error(c)})}chosenDepartment(p){p&&(this.infoForm.get("department")?.setValue(`${p.city} ${p.description}`),this.isDepartment=!1)}redirectToContact(){this.router.navigate(["/about/contact"])}onblur(){this.clearTimeOut=setTimeout(()=>{clearTimeout(this.clearTimeOut),this.isChosen=!1,this.isDepartment=!1},100)}ngOnDestroy(){clearTimeout(this.clearTimeOut)}}return(l=f).\u0275fac=function(p){return new(p||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-info-form"]],inputs:{isCart:"isCart"},standalone:!0,features:[e.jDz],ngContentSelectors:w,decls:84,vars:22,consts:[[1,"user__info-title"],["autocomplete","on",1,"user__form",3,"formGroup","ngSubmit"],[1,"user__wrap-input",3,"ngClass"],["type","text","formControlName","name","placeholder","\u0406\u043c'\u044f *",1,"user__input"],[3,"control"],["type","text","formControlName","lastName","placeholder","\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 *",1,"user__input"],["type","email","formControlName","email","placeholder","Email *",1,"user__input"],["xmlns","http://www.w3.org/2000/svg","width","23","height","23","viewBox","0 0 23 23","fill","none"],["clip-path","url(#clip0_421_659)"],["d","M20.4444 3.19446H2.55556C1.87778 3.19446 1.22776 3.4637 0.748505 3.94296C0.269245 4.42222 0 5.07224 0 5.75001L0 11.5H23V5.75001C23 5.07224 22.7308 4.42222 22.2515 3.94296C21.7722 3.4637 21.1222 3.19446 20.4444 3.19446Z","fill","#005BBB"],["d","M23 17.25C23 17.9278 22.7308 18.5778 22.2515 19.0571C21.7722 19.5363 21.1222 19.8056 20.4444 19.8056H2.55556C1.87778 19.8056 1.22776 19.5363 0.748505 19.0571C0.269245 18.5778 0 17.9278 0 17.25V11.5H23V17.25Z","fill","#FFD500"],["id","clip0_421_659"],["width","23","height","23","fill","white"],[1,"phone-holder"],["type","text","formControlName","phone",1,"user__input"],["type","text","formControlName","shippingAddress","placeholder","\u0410\u0434\u0440\u0435\u0441\u0430 *",1,"user__input",3,"value","keyup","blur"],["addr",""],[3,"ngClass"],["type","password","formControlName","password","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c *",1,"user__input"],["class","address__list",4,"ngIf"],[1,"delivery"],[1,"delivery__title"],[1,"delivery__options"],[1,"delivery__options-checkbox"],["for","novaposhta"],["type","radio","name","deliveryMethod","id","novaposhta","formControlName","deliveryMethod","value","\u041d\u043e\u0432\u0430 \u043f\u043e\u0448\u0442\u0430"],[1,"checkbox__custom"],[1,"logo-company"],[1,"text-company"],[1,"delivery__options-select",3,"ngClass"],["type","text","formControlName","department","placeholder","\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f",1,"input-select",3,"keyup","blur","focus"],["city",""],[1,"icon",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","11","height","7","viewBox","0 0 11 7","fill","none"],["d","M5 6.49999C4.93442 6.50079 4.86941 6.48786 4.80913 6.46202C4.74885 6.43619 4.69465 6.39803 4.65 6.34999L0.15 1.84999C-0.05 1.64999 -0.05 1.33999 0.15 1.13999C0.35 0.93999 0.66 0.93999 0.86 1.13999L5.01 5.28999L9.15 1.14999C9.35 0.94999 9.66 0.94999 9.86 1.14999C10.06 1.34999 10.06 1.65999 9.86 1.85999L5.36 6.35999C5.26 6.45999 5.13 6.50999 5.01 6.50999L5 6.49999Z","fill","#6A6A6A"],["class","department__list",4,"ngIf"],[1,"delivery__options-btn"],["for","uapost"],["type","radio","name","deliveryMethod","id","uapost","formControlName","deliveryMethod","value","\u0423\u043a\u0440\u043f\u043e\u0448\u0442\u0430"],["for","onmyown"],["type","radio","name","deliveryMethod","id","onmyown","formControlName","deliveryMethod","value","\u0421\u0430\u043c\u043e\u0432\u0438\u0432\u0456\u0437"],["for","postman"],["type","radio","name","deliveryMethod","id","postman","formControlName","deliveryMethod","value","\u041a\u0443\u0440'\u0454\u0440\u0441\u044c\u043a\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"],[1,"delivery__actions"],[1,"address__list"],[1,"address__list-items"],["class","address__list-item",3,"click",4,"ngFor","ngForOf"],[1,"address__list-item",3,"click"],[1,"department__list"],[1,"department__list-items"],["class","department__list-item",3,"click",4,"ngFor","ngForOf"],[1,"department__list-item",3,"click"]],template:function(p,t){if(1&p){const c=e.EpF();e.F$t(),e.TgZ(0,"div",0),e._uU(1,"\u041e\u0441\u043e\u0431\u0438\u0441\u0442\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f"),e.qZA(),e.TgZ(2,"form",1),e.NdJ("ngSubmit",function(){return t.isCart?t.makeOrder():t.updateUser()}),e.TgZ(3,"div",2),e._UZ(4,"input",3)(5,"app-error-validation",4),e.qZA(),e.TgZ(6,"div",2),e._UZ(7,"input",5)(8,"app-error-validation",4),e.qZA(),e.TgZ(9,"div",2),e._UZ(10,"input",6)(11,"app-error-validation",4),e.qZA(),e.TgZ(12,"div",2)(13,"span"),e.O4$(),e.TgZ(14,"svg",7)(15,"g",8),e._UZ(16,"path",9)(17,"path",10),e.qZA(),e.TgZ(18,"defs")(19,"clipPath",11),e._UZ(20,"rect",12),e.qZA()()()(),e.kcU(),e.TgZ(21,"span",13),e._uU(22),e.qZA(),e._UZ(23,"input",14)(24,"app-error-validation",4),e.qZA(),e.TgZ(25,"div",2)(26,"input",15,16),e.NdJ("keyup",function(){e.CHM(c);const b=e.MAs(27);return e.KtG(t.getAddress(b.value))})("blur",function(){return t.onblur()}),e.qZA(),e._UZ(28,"app-error-validation",4),e.qZA(),e.TgZ(29,"div",17)(30,"div",2),e._UZ(31,"input",18)(32,"app-error-validation",4),e.qZA()(),e.YNc(33,T,3,1,"div",19),e.TgZ(34,"div",20)(35,"div",21),e._uU(36,"\u0421\u043f\u043e\u0441\u043e\u0431\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"),e.qZA(),e.TgZ(37,"div",22)(38,"div",23)(39,"label",24),e._UZ(40,"input",25)(41,"span",26),e.TgZ(42,"span",27),e._uU(43,"logo"),e.qZA(),e.TgZ(44,"span",28),e._uU(45,"\u041d\u043e\u0432\u0430 \u041f\u043e\u0448\u0442\u0430"),e.qZA()(),e.TgZ(46,"div",29)(47,"input",30,31),e.NdJ("keyup",function(){e.CHM(c);const b=e.MAs(48);return e.KtG(t.getDepartments(b.value))})("blur",function(){return t.onblur()})("focus",function(){return t.isDepartment=!0}),e.qZA(),e.TgZ(49,"div",32),e.NdJ("click",function(){return t.isDepartment=!t.isDepartment}),e.O4$(),e.TgZ(50,"svg",33),e._UZ(51,"path",34),e.qZA(),e.kcU(),e._UZ(52,"app-error-validation",4),e.qZA(),e.YNc(53,D,3,1,"div",35),e.qZA(),e.TgZ(54,"div",36)(55,"span"),e._uU(56,"\u0417\u0430\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u043e\u0441\u0438\u043b\u043a\u0443 \u0443 \u043d\u0430\u0439\u0431\u043b\u0438\u0436\u0447\u043e\u043c\u0443 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u0456 \u041d\u043e\u0432\u043e\u0457 \u041f\u043e\u0448\u0442\u0438"),e.qZA()()(),e.TgZ(57,"div",23)(58,"label",37),e._UZ(59,"input",38)(60,"span",26),e.TgZ(61,"span",27),e._uU(62,"logo"),e.qZA(),e.TgZ(63,"span",28),e._uU(64,"\u0423\u043a\u0440\u041f\u043e\u0448\u0442\u0430"),e.qZA()()(),e.TgZ(65,"div",23)(66,"label",39),e._UZ(67,"input",40)(68,"span",26),e.TgZ(69,"span",27),e._uU(70,"logo"),e.qZA(),e.TgZ(71,"span",28),e._uU(72,"\u0421\u0430\u043c\u043e\u0432\u0438\u0432\u0456\u0437"),e.qZA()()(),e.TgZ(73,"div",23)(74,"label",41),e._UZ(75,"input",42)(76,"span",26),e.TgZ(77,"span",27),e._uU(78,"logo"),e.qZA(),e.TgZ(79,"span",28),e._uU(80,"\u041a\u0443\u0440\u2019\u0454\u0440\u0441\u044c\u043a\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"),e.qZA()(),e._UZ(81,"app-error-validation",4),e.qZA()(),e.TgZ(82,"div",43),e.Hsn(83),e.qZA()()()}if(2&p){let c;e.xp6(2),e.Q6J("formGroup",t.infoForm),e.xp6(1),e.Q6J("ngClass",t.isValid(t.infoForm,"name")),e.xp6(2),e.Q6J("control",t.infoForm.get("name")),e.xp6(1),e.Q6J("ngClass",t.isValid(t.infoForm,"lastName")),e.xp6(2),e.Q6J("control",t.infoForm.get("lastName")),e.xp6(1),e.Q6J("ngClass",t.isValid(t.infoForm,"email")),e.xp6(2),e.Q6J("control",t.infoForm.get("email")),e.xp6(1),e.Q6J("ngClass",t.isValid(t.infoForm,"phone")),e.xp6(10),e.Oqu(t.phoneHolder),e.xp6(2),e.Q6J("control",t.infoForm.get("phone")),e.xp6(1),e.Q6J("ngClass",t.isValid(t.infoForm,"shippingAddress")),e.xp6(1),e.Q6J("value",null==(c=t.infoForm.get("address"))?null:c.value),e.xp6(2),e.Q6J("control",t.infoForm.get("address")),e.xp6(1),e.Q6J("ngClass",e.DdM(21,I)),e.xp6(1),e.Q6J("ngClass",t.isValid(t.infoForm,"password")),e.xp6(2),e.Q6J("control",t.infoForm.get("password")),e.xp6(1),e.Q6J("ngIf",t.addresses.length&&t.isChosen),e.xp6(13),e.Q6J("ngClass",t.isValid(t.infoForm,"department")),e.xp6(6),e.Q6J("control",t.infoForm.get("department")),e.xp6(1),e.Q6J("ngIf",(null==t.departments?null:t.departments.length)&&t.isDepartment),e.xp6(28),e.Q6J("control",t.infoForm.get("deliveryMethod"))}},dependencies:[d.ez,d.mk,d.sg,d.O5,n.UX,n._Y,n.Fj,n._,n.JJ,n.JL,n.sg,n.u,P.k],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Manrope&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap";.btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:8px;flex-shrink:0;cursor:pointer}.btn__login[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:20px;font-weight:500;font-style:normal;line-height:130%;width:570px;height:60px;padding:16px 12px;gap:8;background:#272727;color:#fafafa}.btn__login[_ngcontent-%COMP%]:hover{box-shadow:0 4px 4px #09090966}.btn__login[_ngcontent-%COMP%]:active{box-shadow:none}.btn__buy[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:24px;font-weight:400;font-style:normal;line-height:130%;height:64px;padding:8px 16px;text-transform:uppercase;gap:8;background:#272727;color:#fff}.btn__buy[_ngcontent-%COMP%]:hover{box-shadow:0 4px 4px #09090966}.btn__buy[_ngcontent-%COMP%]:active{box-shadow:none}.btn__add[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:20px;font-weight:300;font-style:normal;line-height:130%;color:#000;height:64px;padding:16px 32px;text-transform:uppercase;gap:16px;border:1px solid #05020e;color:#05020e}.btn__add[_ngcontent-%COMP%]:hover{background:#05020e;color:#fff}.btn__add[_ngcontent-%COMP%]:active{background:transparent;color:#05020e}.btn__reply[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:22px;font-weight:400;font-style:normal;line-height:130%;color:#000;padding:16px;gap:16px;border:1px solid #646464;color:#05020e}.disabled[_ngcontent-%COMP%], .btn__add[_ngcontent-%COMP%]:disabled, .btn__reply[_ngcontent-%COMP%]:disabled{border:1px solid #949494;color:#949494;box-shadow:none;background:transparent}.disabled-grey[_ngcontent-%COMP%], .btn__login[_ngcontent-%COMP%]:disabled, .btn__buy[_ngcontent-%COMP%]:disabled{background:#949494;color:#fafafa;box-shadow:none}.errorMessage[_ngcontent-%COMP%]{font-family:Inter;font-size:14px;font-weight:400;font-style:normal;line-height:normal;position:relative;top:40px;color:#da3838}app-error-validation[_ngcontent-%COMP%]{position:absolute}input[type=radio][_ngcontent-%COMP%]{font-family:Roboto,sans-serif;-webkit-appearance:none;appearance:none;background-color:var(--form-background);margin:0;width:20px;height:20px;border:1px solid #000;border-radius:.15em;transform:translateY(-.075em);display:grid;place-content:center;z-index:0}input[type=radio][_ngcontent-%COMP%]:before{content:"";width:18px;height:18px;clip-path:polygon(0% 27%,0 25%,50% 95%,80% 16%,80% 0%,43% 62%);transform:scale(0);transform-origin:bottom left;transition:.12s transform ease-in-out;box-shadow:inset 5px 5px var(--form-control-color);background-color:CanvasText;z-index:0}input[type=radio][_ngcontent-%COMP%]:checked:before{transform:scale(1);z-index:0}.user__info[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:100px}.user__info-title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:28px;font-weight:400;font-style:normal;line-height:130%;color:#000;text-align:center;padding-bottom:72px}.user__form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;gap:32px;width:837px}.user__wrap-input[_ngcontent-%COMP%]{display:flex;padding:12px 16px;align-items:center;gap:8px;border-radius:8px;border:1px solid #949494;width:402px}.user__input[_ngcontent-%COMP%]{width:536px;height:29px;border:none;outline:none;font-size:18px;font-style:normal;font-weight:400;line-height:130%}.user__input[_ngcontent-%COMP%]::placeholder{color:#949494}.delivery[_ngcontent-%COMP%]{display:inline-flex;padding-right:0;flex-direction:column;justify-content:center;align-items:flex-start;gap:51px;padding-top:120px;width:829px}.delivery__title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:28px;font-weight:400;font-style:normal;line-height:130%;color:#000;width:100%;text-align:center}.delivery__options[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:56px}.delivery__options-select[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:32px;margin-top:32px;margin-left:72px;width:332px;padding:12px 16px;gap:8px;border-radius:8px;border:1px solid #949494}.delivery__options-select[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:18px;font-weight:400;font-style:normal;line-height:130%;color:#000;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;outline:none;border:none;background:transparent;color:#6a6a6a}.delivery__options-btn[_ngcontent-%COMP%]{display:flex;align-items:center;width:757px;padding:16px;margin-left:72px;gap:10px;border-radius:8px;background:#efeeee}.delivery__options-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:130%;color:#000}.delivery__actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;gap:80px;padding-top:80px}.delivery__btn[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:18px;font-weight:300;font-style:normal;line-height:130%;color:#000;text-transform:none}.delivery__options-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start}.logo-company[_ngcontent-%COMP%]{padding-left:48px;padding-right:24px}.phone-holder[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:18px;font-weight:400;font-style:normal;line-height:130%;color:#000;text-align:center;color:#5d5d5d}.text-company[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;color:#000;font-size:20px;font-style:normal;font-weight:400;line-height:130%}.list[_ngcontent-%COMP%], .address__list[_ngcontent-%COMP%], .department__list[_ngcontent-%COMP%]{position:relative;border:1px solid #4c4c4c;border-top:none;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top-right-radius:none;border-top-left-radius:none;background:#fff}.department__list[_ngcontent-%COMP%]{z-index:100}.department__list-item[_ngcontent-%COMP%]{position:relative;border-radius:8px;padding:0 20px 10px 10px;cursor:pointer}.department__list-item[_ngcontent-%COMP%]:hover{background:#efeeee}.department__list-items[_ngcontent-%COMP%]{display:block;position:absolute;list-style:none;border:1px solid #000;border-top:none;border-bottom-right-radius:8px;border-bottom-left-radius:8px;top:30px;left:-311px;width:330px;overflow-y:auto;max-height:50vh;background:#fff;z-index:100}.address__list[_ngcontent-%COMP%]{top:-35px;left:-1px;max-width:402px;z-index:1}.address__list-item[_ngcontent-%COMP%]{position:relative;border-radius:8px;padding:0 20px 10px 10px;cursor:pointer}.address__list-item[_ngcontent-%COMP%]:hover{background:#efeeee}.address__list-items[_ngcontent-%COMP%]{display:block;position:absolute;list-style:none;border:1px solid #000;border-top:none;border-bottom-right-radius:8px;border-bottom-left-radius:8px;width:402px;overflow-y:auto;max-height:50vh;background:#fff}.input-select[_ngcontent-%COMP%]{width:536px;height:29px;border:none;outline:none;font-family:Roboto,sans-serif;font-size:18px;font-weight:400;font-style:normal;line-height:130%;color:#000;color:#6a6a6a}.input-select[_ngcontent-%COMP%]::placeholder{color:#949494}.icon[_ngcontent-%COMP%]{cursor:pointer}.hidden[_ngcontent-%COMP%]{visibility:hidden}']}),f})()},7957:(M,v,o)=>{o.d(v,{p:()=>r});var e=o(9862),d=o(4946),n=o(347),_=o(4009),g=o(6306),i=o(9397);let r=(()=>{var s;class a{constructor(){this.http=(0,d.f3M)(e.eN),this.httpError=(0,d.f3M)(_.G)}getOrders(){return this.http.get(`${n.rH.URL}/order`).pipe((0,g.K)(this.httpError.handleError("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044c")))}makeOrder(x){return this.http.post(`${n.rH.URL}/order`,{user:x}).pipe((0,i.b)(C=>console.log(C)),(0,g.K)(this.httpError.handleError("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f")))}getOrderHistory(){return this.http.get(`${n.rH.URL}/order/order-history`).pipe((0,g.K)(this.httpError.handleError("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044c")))}getOrderById(x){}}return(s=a).\u0275fac=function(x){return new(x||s)},s.\u0275prov=d.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),a})()},2198:(M,v,o)=>{o.d(v,{w:()=>d});var e=o(1230);const d=(n,_)=>{JSON.parse(localStorage.getItem("user"));const i=JSON.parse(localStorage.getItem("address"));if(console.log(_),console.log(i),_)for(const r in _)"password"!==r&&(n.get(r)?.setValue(_[r]),(0,e.J)(n,r))}},5693:(M,v,o)=>{function e(){return i=>{let a,r=!1;return i.value&&(a=i.value.match(/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0406\u0456\u0407\u0457\u0404\u0454\u0490\u0491]{3,30}(?: [A-Za-z\u0410-\u042f\u0430-\u044f\u0406\u0456\u0407\u0457\u0404\u0454\u0490\u0491]{3,30}){0,1}$/g),a&&(r=a.join("")===i.value)),r?null:{name:{message:"\u0456\u043c'\u044f \u043c\u043e\u0436\u0435 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043b\u0438\u0448\u0435 \u0431\u0443\u043a\u0432\u0438"}}}}function d(){return i=>{const r=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/g;let s=!1;if(i.value){const a=i.value.trim().match(r);a&&(s=a.join("")===i.value)}return i.parent?.get("email"),s?null:{email:{message:"\u0432\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 e-mail"}}}}function n(){return i=>{const r=/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@#$_!%*?&]{8,16}$/g;let s=!1;if(i.value){const a=i.value.trim().match(r);a&&(s=a.join("")===i.value)}return s?null:{password:{message:"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u0445\u043e\u0447\u0430\u0431 \u043e\u0434\u0438\u043d \u0441\u0438\u043c\u0432\u043e\u043b, \u043e\u0434\u043d\u0443 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043d\u0443 \u043b\u0456\u0442\u0435\u0440\u0443 \u0442\u0430 \u0446\u0438\u0444\u0440\u0443"}}}}function _(){return i=>{const r=i.parent?.getRawValue().password,s=i.parent?.getRawValue().confirmPassword;return s&&s!==r?{confirmPassword:{message:"\u043f\u0430\u0440\u043e\u043b\u0456 \u043c\u0430\u044e\u0442\u044c \u0437\u0431\u0456\u0433\u0430\u0442\u0438\u0441\u044f"}}:null}}function g(){const i=/[0-9]{9,9}$/g;return r=>{const s=r.value.match(i);let a=!1;return s&&(a=s.join("")===r.value),a?null:{phone:{message:"\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443"}}}}o.d(v,{IX:()=>_,Le:()=>d,qg:()=>e,tH:()=>g,ym:()=>n})}}]);