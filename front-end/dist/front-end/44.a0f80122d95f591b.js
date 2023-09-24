"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[44],{3044:(P,f,p)=>{p.r(f),p.d(f,{InfoComponent:()=>M});var t=p(4946),o=p(95),h=p(2413),c=p(6814),_=p(5516);const m="https://api.novaposhta.ua/v2.0/json/",g=(n,s)=>fetch(n,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(s)});let y=(()=>{var n;class s{}return(n=s).\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-contact-us"]],standalone:!0,features:[t.jDz],decls:3,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","width","73","height","73","viewBox","0 0 73 73","fill","none"],["d","M66.5 19.2499V34.5499C66.5 38.3599 65.24 41.5699 62.99 43.7899C60.77 46.0399 57.56 47.2999 53.75 47.2999V52.7299C53.75 54.7699 51.47 55.9999 49.79 54.8599L46.88 52.9399C47.15 52.0099 47.27 50.9899 47.27 49.9099V37.7C47.27 31.58 43.19 27.4999 37.07 27.4999H16.7C16.28 27.4999 15.89 27.53 15.5 27.56V19.2499C15.5 11.5999 20.6 6.49994 28.25 6.49994H53.75C61.4 6.49994 66.5 11.5999 66.5 19.2499Z","fill","white","stroke","#4C4C4C","stroke-width","1.5","stroke-miterlimit","10","stroke-linecap","round","stroke-linejoin","round"],["d","M47.27 37.7001V49.9099C47.27 50.9899 47.15 52.0099 46.88 52.9399C45.77 57.3499 42.11 60.11 37.07 60.11H28.91L19.85 66.14C18.5 67.07 16.7 66.08 16.7 64.46V60.11C13.64 60.11 11.09 59.09 9.32001 57.32C7.52001 55.52 6.5 52.9699 6.5 49.9099V37.7001C6.5 32.0001 10.04 28.0701 15.5 27.5601C15.89 27.5301 16.28 27.5 16.7 27.5H37.07C43.19 27.5 47.27 31.5801 47.27 37.7001Z","fill","white","stroke","#4C4C4C","stroke-width","1.5","stroke-miterlimit","10","stroke-linecap","round","stroke-linejoin","round"]],template:function(i,e){1&i&&(t.O4$(),t.TgZ(0,"svg",0),t._UZ(1,"path",1)(2,"path",2),t.qZA())}}),s})();var u=p(4653),v=p(1760),b=p(1013);function Z(n,s){if(1&n){const r=t.EpF();t.TgZ(0,"li",49),t.NdJ("click",function(){const a=t.CHM(r).$implicit,l=t.oxw(2);return t.KtG(l.chosenAddress(a))}),t._uU(1),t.qZA()}if(2&n){const r=s.$implicit;t.xp6(1),t.HOy(" ",r.SettlementTypeDescription," ",r.Description," ",r.RegionsDescription," ",r.AreaDescription," ")}}function w(n,s){if(1&n&&(t.TgZ(0,"div",46)(1,"ul",47),t.YNc(2,Z,2,4,"li",48),t.qZA()()),2&n){const r=t.oxw();t.xp6(2),t.Q6J("ngForOf",r.addresses)}}function k(n,s){if(1&n){const r=t.EpF();t.TgZ(0,"li",53),t.NdJ("click",function(){const a=t.CHM(r).$implicit,l=t.oxw(2);return t.KtG(l.chosenDepartment(a))}),t._uU(1),t.qZA()}if(2&n){const r=s.$implicit;t.xp6(1),t.AsE(" ",r.city," ",r.description," ")}}function O(n,s){if(1&n&&(t.TgZ(0,"div",50)(1,"ul",51),t.YNc(2,k,2,2,"li",52),t.qZA()()),2&n){const r=t.oxw();t.xp6(2),t.Q6J("ngForOf",r.departments)}}let M=(()=>{var n;class s{constructor(){this.fb=(0,t.f3M)(o.qu),this.router=(0,t.f3M)(h.F0),this.phoneHolder="+380",this.addresses=[],this.isChosen=!1,this.isDepartment=!1,this.isValid=b.J,this.infoForm=this.fb.group({name:["",[o.kI.required,o.kI.minLength(3),o.kI.maxLength(30),(0,u.qg)()]],lastName:["",[o.kI.required,o.kI.minLength(3),o.kI.maxLength(30),(0,u.qg)()]],email:["",[o.kI.required,o.kI.email,(0,u.Le)()]],address:["",[o.kI.required]],phone:["",[o.kI.required,o.kI.minLength(9),o.kI.maxLength(9),(0,u.tH)()]],password:["",[o.kI.required,o.kI.minLength(8),o.kI.maxLength(16),(0,u.ym)()]],department:["",[o.kI.required]],delivery:["",[o.kI.required]]})}getAddress(i){this.infoForm.get("department")?.reset(),this.isDepartment=!1,this.departments=[],i&&((n=>(console.log(n),g(m,{apiKey:_.N.novaPoshta,modelName:"Address",calledMethod:"getSettlements",methodProperties:{FindByString:n}})))(i).then(e=>e.json()).then(e=>this.addresses=e.data),this.isChosen=!0)}chosenAddress(i){console.log(i);const{Description:e,AreaDescription:a,SettlementTypeDescription:l,RegionsDescription:d,Ref:T}=i;this.infoForm.get("address")?.setValue(`${l} ${e} ${d} ${a}`),this.getDepartments(e,T),this.isDepartment=!1,this.isChosen=!1}onSubmit(){}getDepartments(i,e=""){i&&((n,s)=>g(m,{apiKey:_.N.novaPoshta,modelName:"Address",calledMethod:"getWarehouses",methodProperties:{CityName:n,SettlementRef:s}}))(i,e).then(a=>a.json()).then(a=>(console.log(a),this.isDepartment=!0,this.departments=a.data.filter(l=>"Postomat"!==l.CategoryOfWarehouse).map(l=>({city:l.CityDescription,description:l.Description})))).catch(a=>{console.error(a)})}chosenDepartment(i){i&&(console.log(i),this.infoForm.get("department")?.setValue(`${i.city} ${i.description}`),this.isDepartment=!1)}redirectToContact(){this.router.navigate(["/"])}onblur(){this.clearTimeOut=setTimeout(()=>{clearTimeout(this.clearTimeOut),this.isChosen=!1,this.isDepartment=!1},100)}ngOnDestroy(){clearTimeout(this.clearTimeOut)}}return(n=s).\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-info"]],standalone:!0,features:[t.jDz],decls:88,vars:20,consts:[[1,"user__info-title"],[1,"user__form",3,"formGroup","ngSubmit"],[1,"user__wrap-input",3,"ngClass"],["type","text","formControlName","name","placeholder","\u0406\u043c'\u044f *",1,"user__input"],[3,"control"],["type","text","formControlName","lastName","placeholder","\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 *",1,"user__input"],["type","email","formControlName","email","placeholder","Email *",1,"user__input"],["xmlns","http://www.w3.org/2000/svg","width","23","height","23","viewBox","0 0 23 23","fill","none"],["clip-path","url(#clip0_421_659)"],["d","M20.4444 3.19446H2.55556C1.87778 3.19446 1.22776 3.4637 0.748505 3.94296C0.269245 4.42222 0 5.07224 0 5.75001L0 11.5H23V5.75001C23 5.07224 22.7308 4.42222 22.2515 3.94296C21.7722 3.4637 21.1222 3.19446 20.4444 3.19446Z","fill","#005BBB"],["d","M23 17.25C23 17.9278 22.7308 18.5778 22.2515 19.0571C21.7722 19.5363 21.1222 19.8056 20.4444 19.8056H2.55556C1.87778 19.8056 1.22776 19.5363 0.748505 19.0571C0.269245 18.5778 0 17.9278 0 17.25V11.5H23V17.25Z","fill","#FFD500"],["id","clip0_421_659"],["width","23","height","23","fill","white"],[1,"phone-holder"],["type","text","formControlName","phone",1,"user__input"],["type","text","formControlName","address","placeholder","\u0410\u0434\u0440\u0435\u0441\u0430 *",1,"user__input",3,"value","keyup","blur"],["addr",""],["type","password","formControlName","password","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c *",1,"user__input"],["class","address__list",4,"ngIf"],[1,"delivery"],[1,"delivery__title"],[1,"delivery__options"],[1,"delivery__options-checkbox"],["for","novaposhta"],["type","radio","name","delivery","id","novaposhta","formControlName","delivery","value","novaposhta"],[1,"checkbox__custom"],[1,"logo-company"],[1,"text-company"],[1,"delivery__options-select",3,"ngClass"],["type","text","formControlName","department","placeholder","\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f",1,"input-select",3,"keyup","blur","focus"],["city",""],[1,"icon",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","11","height","7","viewBox","0 0 11 7","fill","none"],["d","M5 6.49999C4.93442 6.50079 4.86941 6.48786 4.80913 6.46202C4.74885 6.43619 4.69465 6.39803 4.65 6.34999L0.15 1.84999C-0.05 1.64999 -0.05 1.33999 0.15 1.13999C0.35 0.93999 0.66 0.93999 0.86 1.13999L5.01 5.28999L9.15 1.14999C9.35 0.94999 9.66 0.94999 9.86 1.14999C10.06 1.34999 10.06 1.65999 9.86 1.85999L5.36 6.35999C5.26 6.45999 5.13 6.50999 5.01 6.50999L5 6.49999Z","fill","#6A6A6A"],["class","department__list",4,"ngIf"],[1,"delivery__options-btn"],["for","uapost"],["type","radio","name","delivery","id","uapost","formControlName","delivery","value","uapost"],["for","onmyown"],["type","radio","name","delivery","id","onmyown","formControlName","delivery","value","onmyown"],["for","postman"],["type","radio","name","delivery","id","postman","formControlName","delivery","value","postman"],[1,"delivery__actions"],["type","submit",1,"btn","delivery__btn"],["type","button",1,"btn__text"],[1,"contactus",3,"click"],[1,"address__list"],[1,"address__list-items"],["class","address__list-item",3,"click",4,"ngFor","ngForOf"],[1,"address__list-item",3,"click"],[1,"department__list"],[1,"department__list-items"],["class","department__list-item",3,"click",4,"ngFor","ngForOf"],[1,"department__list-item",3,"click"]],template:function(i,e){if(1&i){const a=t.EpF();t.TgZ(0,"div",0),t._uU(1,"\u041e\u0441\u043e\u0431\u0438\u0441\u0442\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f"),t.qZA(),t.TgZ(2,"form",1),t.NdJ("ngSubmit",function(){return e.onSubmit()}),t.TgZ(3,"div",2),t._UZ(4,"input",3)(5,"app-error-validation",4),t.qZA(),t.TgZ(6,"div",2),t._UZ(7,"input",5)(8,"app-error-validation",4),t.qZA(),t.TgZ(9,"div",2),t._UZ(10,"input",6)(11,"app-error-validation",4),t.qZA(),t.TgZ(12,"div",2)(13,"span"),t.O4$(),t.TgZ(14,"svg",7)(15,"g",8),t._UZ(16,"path",9)(17,"path",10),t.qZA(),t.TgZ(18,"defs")(19,"clipPath",11),t._UZ(20,"rect",12),t.qZA()()()(),t.kcU(),t.TgZ(21,"span",13),t._uU(22),t.qZA(),t._UZ(23,"input",14)(24,"app-error-validation",4),t.qZA(),t.TgZ(25,"div",2)(26,"input",15,16),t.NdJ("keyup",function(){t.CHM(a);const d=t.MAs(27);return t.KtG(e.getAddress(d.value))})("blur",function(){return e.onblur()}),t.qZA(),t._UZ(28,"app-error-validation",4),t.qZA(),t.TgZ(29,"div",2),t._UZ(30,"input",17)(31,"app-error-validation",4),t.qZA(),t.YNc(32,w,3,1,"div",18),t.TgZ(33,"div",19)(34,"div",20),t._uU(35,"\u0421\u043f\u043e\u0441\u043e\u0431\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"),t.qZA(),t.TgZ(36,"div",21)(37,"div",22)(38,"label",23),t._UZ(39,"input",24)(40,"span",25),t.TgZ(41,"span",26),t._uU(42,"logo"),t.qZA(),t.TgZ(43,"span",27),t._uU(44,"\u041d\u043e\u0432\u0430 \u041f\u043e\u0448\u0442\u0430"),t.qZA()(),t.TgZ(45,"div",28)(46,"input",29,30),t.NdJ("keyup",function(){t.CHM(a);const d=t.MAs(47);return t.KtG(e.getDepartments(d.value))})("blur",function(){return e.onblur()})("focus",function(){return e.isDepartment=!0}),t.qZA(),t.TgZ(48,"div",31),t.NdJ("click",function(){return e.isDepartment=!e.isDepartment}),t.O4$(),t.TgZ(49,"svg",32),t._UZ(50,"path",33),t.qZA(),t.kcU(),t._UZ(51,"app-error-validation",4),t.qZA(),t.YNc(52,O,3,1,"div",34),t.qZA(),t.TgZ(53,"div",35)(54,"span"),t._uU(55,"\u0417\u0430\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u043e\u0441\u0438\u043b\u043a\u0443 \u0443 \u043d\u0430\u0439\u0431\u043b\u0438\u0436\u0447\u043e\u043c\u0443 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u0456 \u041d\u043e\u0432\u043e\u0457 \u041f\u043e\u0448\u0442\u0438"),t.qZA()()(),t.TgZ(56,"div",22)(57,"label",36),t._UZ(58,"input",37)(59,"span",25),t.TgZ(60,"span",26),t._uU(61,"logo"),t.qZA(),t.TgZ(62,"span",27),t._uU(63,"\u0423\u043a\u0440\u041f\u043e\u0448\u0442\u0430"),t.qZA()()(),t.TgZ(64,"div",22)(65,"label",38),t._UZ(66,"input",39)(67,"span",25),t.TgZ(68,"span",26),t._uU(69,"logo"),t.qZA(),t.TgZ(70,"span",27),t._uU(71,"\u0421\u0430\u043c\u043e\u0432\u0438\u0432\u0456\u0437"),t.qZA()()(),t.TgZ(72,"div",22)(73,"label",40),t._UZ(74,"input",41)(75,"span",25),t.TgZ(76,"span",26),t._uU(77,"logo"),t.qZA(),t.TgZ(78,"span",27),t._uU(79,"\u041a\u0443\u0440\u2019\u0454\u0440\u0441\u044c\u043a\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"),t.qZA()(),t._UZ(80,"app-error-validation",4),t.qZA()(),t.TgZ(81,"div",42)(82,"button",43),t._uU(83,"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u043c\u0456\u043d\u0438"),t.qZA(),t.TgZ(84,"button",44),t._uU(85,"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0432\u0441\u0456 \u0437\u043c\u0456\u043d\u0438"),t.qZA()()()(),t.TgZ(86,"div",45),t.NdJ("click",function(){return e.redirectToContact()}),t._UZ(87,"app-contact-us"),t.qZA()}if(2&i){let a;t.xp6(2),t.Q6J("formGroup",e.infoForm),t.xp6(1),t.Q6J("ngClass",e.isValid(e.infoForm,"name")),t.xp6(2),t.Q6J("control",e.infoForm.get("name")),t.xp6(1),t.Q6J("ngClass",e.isValid(e.infoForm,"lastName")),t.xp6(2),t.Q6J("control",e.infoForm.get("lastName")),t.xp6(1),t.Q6J("ngClass",e.isValid(e.infoForm,"email")),t.xp6(2),t.Q6J("control",e.infoForm.get("email")),t.xp6(1),t.Q6J("ngClass",e.isValid(e.infoForm,"phone")),t.xp6(10),t.Oqu(e.phoneHolder),t.xp6(2),t.Q6J("control",e.infoForm.get("phone")),t.xp6(1),t.Q6J("ngClass",e.isValid(e.infoForm,"address")),t.xp6(1),t.Q6J("value",null==(a=e.infoForm.get("address"))?null:a.value),t.xp6(2),t.Q6J("control",e.infoForm.get("address")),t.xp6(1),t.Q6J("ngClass",e.isValid(e.infoForm,"password")),t.xp6(2),t.Q6J("control",e.infoForm.get("password")),t.xp6(1),t.Q6J("ngIf",e.addresses.length&&e.isChosen),t.xp6(13),t.Q6J("ngClass",e.isValid(e.infoForm,"department")),t.xp6(6),t.Q6J("control",e.infoForm.get("department")),t.xp6(1),t.Q6J("ngIf",(null==e.departments?null:e.departments.length)&&e.isDepartment),t.xp6(28),t.Q6J("control",e.infoForm.get("delivery"))}},dependencies:[o.UX,o._Y,o.Fj,o._,o.JJ,o.JL,o.sg,o.u,c.ax,c.O5,c.mk,y,v.k],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Manrope&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";.btn[_ngcontent-%COMP%], .btn__grey[_ngcontent-%COMP%], .btn__link[_ngcontent-%COMP%]{padding:16px 32px;border-radius:8px;border:1px solid #000;text-decoration:none;color:#000;font-size:18px;font-style:normal;font-weight:300;line-height:130%;text-transform:uppercase;background:transparent}.btn__link[_ngcontent-%COMP%]{margin-top:64px;margin-left:auto;margin-right:auto;width:274px}.btn__grey[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:570px;padding:16px 12px;font-size:20px;font-weight:500;color:#fff;background:#d9d9d9}.btn[_ngcontent-%COMP%]:disabled, .btn__link[_ngcontent-%COMP%]:disabled, .btn__grey[_ngcontent-%COMP%]:disabled{opacity:.4;border:1px solid #b2adad}.errorMessage[_ngcontent-%COMP%]{position:relative;top:40px}app-error-validation[_ngcontent-%COMP%]{position:absolute}input[type=radio][_ngcontent-%COMP%]{font-family:Roboto,sans-serif;-webkit-appearance:none;appearance:none;background-color:var(--form-background);margin:0;width:20px;height:20px;border:1px solid #000;border-radius:.15em;transform:translateY(-.075em);display:grid;place-content:center;z-index:0}input[type=radio][_ngcontent-%COMP%]:before{content:"";width:18px;height:18px;clip-path:polygon(0% 27%,0 25%,50% 95%,80% 16%,80% 0%,43% 62%);transform:scale(0);transform-origin:bottom left;transition:.12s transform ease-in-out;box-shadow:inset 5px 5px var(--form-control-color);background-color:CanvasText;z-index:0}input[type=radio][_ngcontent-%COMP%]:checked:before{transform:scale(1);z-index:0}.user__info[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:100px}.user__info-title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;text-align:center;font-size:28px;font-style:normal;font-weight:400;line-height:130%;color:#000;padding-bottom:72px}.user__form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;gap:32px;width:837px}.user__wrap-input[_ngcontent-%COMP%]{display:flex;padding:12px 16px;align-items:center;gap:8px;border-radius:8px;border:1px solid #949494;width:402px}.user__input[_ngcontent-%COMP%]{width:536px;height:29px;border:none;outline:none;font-size:18px;font-style:normal;font-weight:400;line-height:130%}.user__input[_ngcontent-%COMP%]::placeholder{color:#949494}.delivery[_ngcontent-%COMP%]{display:inline-flex;padding-right:0;flex-direction:column;justify-content:center;align-items:flex-start;gap:51px;padding-top:120px;width:829px}.delivery__title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:28px;font-weight:400;font-style:normal;line-height:130%;color:#000;width:100%;text-align:center}.delivery__options[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:56px}.delivery__options-select[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:32px;margin-top:32px;margin-left:72px;width:332px;padding:12px 16px;gap:8px;border-radius:8px;border:1px solid #949494}.delivery__options-select[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:18px;font-weight:400;font-style:normal;line-height:130%;color:#000;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;outline:none;border:none;background:transparent;color:#6a6a6a}.delivery__options-btn[_ngcontent-%COMP%]{display:flex;align-items:center;width:757px;padding:16px;margin-left:72px;gap:10px;border-radius:8px;background:#efeeee}.delivery__options-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:130%;color:#000}.delivery__actions[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;gap:80px;padding-top:80px}.delivery__btn[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:18px;font-weight:300;font-style:normal;line-height:130%;color:#000;text-transform:none}.delivery__options-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start}.logo-company[_ngcontent-%COMP%]{padding-left:48px;padding-right:24px}.phone-holder[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:18px;font-weight:400;font-style:normal;line-height:130%;color:#000;text-align:center;color:#5d5d5d}.text-company[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;color:#000;font-size:20px;font-style:normal;font-weight:400;line-height:130%}.btn__text[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:20px;font-style:normal;font-weight:400;line-height:130%;text-decoration-line:underline;border:none;background:transparent;color:#000;cursor:pointer}.contactus[_ngcontent-%COMP%]{position:fixed;top:780px;right:80px;width:125px;height:125px;padding:24px;border-radius:50%;border:2px solid #4c4c4c;background:rgba(255,255,255,.3);cursor:pointer}.list[_ngcontent-%COMP%], .address__list[_ngcontent-%COMP%], .department__list[_ngcontent-%COMP%]{position:relative;border:1px solid #4c4c4c;border-top:none;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top-right-radius:none;border-top-left-radius:none;background:#fff}.department__list[_ngcontent-%COMP%]{z-index:100}.department__list-item[_ngcontent-%COMP%]{position:relative;border-radius:8px;padding:0 20px 10px 10px;cursor:pointer}.department__list-item[_ngcontent-%COMP%]:hover{background:#efeeee}.department__list-items[_ngcontent-%COMP%]{display:block;position:absolute;list-style:none;border:1px solid #000;border-top:none;border-bottom-right-radius:8px;border-bottom-left-radius:8px;top:30px;left:-311px;width:330px;overflow-y:auto;max-height:50vh;background:#fff;z-index:100}.address__list[_ngcontent-%COMP%]{top:-35px;left:-1px;max-width:402px}.address__list-item[_ngcontent-%COMP%]{position:relative;border-radius:8px;padding:0 20px 10px 10px;cursor:pointer}.address__list-item[_ngcontent-%COMP%]:hover{background:#efeeee}.address__list-items[_ngcontent-%COMP%]{display:block;position:absolute;list-style:none;border:1px solid #000;border-top:none;border-bottom-right-radius:8px;border-bottom-left-radius:8px;width:402px;overflow-y:auto;max-height:50vh;background:#fff}.input-select[_ngcontent-%COMP%]{width:536px;height:29px;border:none;outline:none;font-family:Roboto,sans-serif;font-size:18px;font-weight:400;font-style:normal;line-height:130%;color:#000;color:#6a6a6a}.input-select[_ngcontent-%COMP%]::placeholder{color:#949494}.icon[_ngcontent-%COMP%]{cursor:pointer}']}),s})()}}]);