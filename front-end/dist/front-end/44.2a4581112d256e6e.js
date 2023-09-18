"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[44],{3044:(b,g,p)=>{p.r(g),p.d(g,{InfoComponent:()=>v});var t=p(4946),u=p(95),m=p(2413),_=p(6814),f=p(5516);const l="https://api.novaposhta.ua/v2.0/json/",d=(e,i)=>fetch(e,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(i)});let C=(()=>{var e;class i{}return(e=i).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-contact-us"]],standalone:!0,features:[t.jDz],decls:3,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","width","73","height","73","viewBox","0 0 73 73","fill","none"],["d","M66.5 19.2499V34.5499C66.5 38.3599 65.24 41.5699 62.99 43.7899C60.77 46.0399 57.56 47.2999 53.75 47.2999V52.7299C53.75 54.7699 51.47 55.9999 49.79 54.8599L46.88 52.9399C47.15 52.0099 47.27 50.9899 47.27 49.9099V37.7C47.27 31.58 43.19 27.4999 37.07 27.4999H16.7C16.28 27.4999 15.89 27.53 15.5 27.56V19.2499C15.5 11.5999 20.6 6.49994 28.25 6.49994H53.75C61.4 6.49994 66.5 11.5999 66.5 19.2499Z","fill","white","stroke","#4C4C4C","stroke-width","1.5","stroke-miterlimit","10","stroke-linecap","round","stroke-linejoin","round"],["d","M47.27 37.7001V49.9099C47.27 50.9899 47.15 52.0099 46.88 52.9399C45.77 57.3499 42.11 60.11 37.07 60.11H28.91L19.85 66.14C18.5 67.07 16.7 66.08 16.7 64.46V60.11C13.64 60.11 11.09 59.09 9.32001 57.32C7.52001 55.52 6.5 52.9699 6.5 49.9099V37.7001C6.5 32.0001 10.04 28.0701 15.5 27.5601C15.89 27.5301 16.28 27.5 16.7 27.5H37.07C43.19 27.5 47.27 31.5801 47.27 37.7001Z","fill","white","stroke","#4C4C4C","stroke-width","1.5","stroke-miterlimit","10","stroke-linecap","round","stroke-linejoin","round"]],template:function(n,o){1&n&&(t.O4$(),t.TgZ(0,"svg",0),t._UZ(1,"path",1)(2,"path",2),t.qZA())}}),i})();function y(e,i){if(1&e){const s=t.EpF();t.TgZ(0,"li",36),t.NdJ("click",function(){const r=t.CHM(s).$implicit,a=t.oxw(2);return t.KtG(a.chosenAddress(r))}),t._uU(1),t.qZA()}if(2&e){const s=i.$implicit;t.xp6(1),t.HOy(" ",s.SettlementTypeDescription," ",s.Description," ",s.RegionsDescription," ",s.AreaDescription," ")}}function Z(e,i){if(1&e&&(t.TgZ(0,"div",33)(1,"ul",34),t.YNc(2,y,2,4,"li",35),t.qZA()()),2&e){const s=t.oxw();t.xp6(2),t.Q6J("ngForOf",s.addresses)}}let v=(()=>{var e;class i{constructor(){this.fb=(0,t.f3M)(u.qu),this.router=(0,t.f3M)(m.F0),this.phoneHolder="+380",this.addresses=[],this.isChosen=!1,this.infoForm=this.fb.group({firstName:[""],lastName:[""],email:[""],address:[""],phone:[""],password:[""]})}ngOnInit(){d(l,{apiKey:f.N.novaPoshta,modelName:"Address",calledMethod:"getWarehouses",methodProperties:{CityName:"\u0425\u0430\u0440\u043a\u0456\u0432\u043a\u0430"}}).then(n=>n.json()).then(n=>console.log(n)).catch(n=>{console.error(n)})}getAddress(n){n&&((e=>(console.log(e),d(l,{apiKey:f.N.novaPoshta,modelName:"Address",calledMethod:"getSettlements",methodProperties:{FindByString:e}})))(n).then(o=>o.json()).then(o=>this.addresses=o.data),this.isChosen=!0)}chosenAddress(n){const{Description:o,AreaDescription:r,SettlementTypeDescription:a,RegionsDescription:c}=n;this.infoForm.get("address")?.setValue(`${a} ${o} ${c} ${r}`),this.isChosen=!1}onSubmit(){}redirectToContact(){this.router.navigate(["/"])}}return(e=i).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-info"]],standalone:!0,features:[t.jDz],decls:69,vars:4,consts:[[1,"user__info-title"],[1,"user__form",3,"formGroup","ngSubmit"],[1,"user__wrap-input"],["type","text","formGroupName","firstName","placeholder","\u0406\u043c'\u044f *",1,"user__input"],["type","text","formGroupName","lastName","placeholder","\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 *",1,"user__input"],["type","text","formGroupName","email","placeholder","Email *",1,"user__input"],["xmlns","http://www.w3.org/2000/svg","width","23","height","23","viewBox","0 0 23 23","fill","none"],["clip-path","url(#clip0_421_659)"],["d","M20.4444 3.19446H2.55556C1.87778 3.19446 1.22776 3.4637 0.748505 3.94296C0.269245 4.42222 0 5.07224 0 5.75001L0 11.5H23V5.75001C23 5.07224 22.7308 4.42222 22.2515 3.94296C21.7722 3.4637 21.1222 3.19446 20.4444 3.19446Z","fill","#005BBB"],["d","M23 17.25C23 17.9278 22.7308 18.5778 22.2515 19.0571C21.7722 19.5363 21.1222 19.8056 20.4444 19.8056H2.55556C1.87778 19.8056 1.22776 19.5363 0.748505 19.0571C0.269245 18.5778 0 17.9278 0 17.25V11.5H23V17.25Z","fill","#FFD500"],["id","clip0_421_659"],["width","23","height","23","fill","white"],["type","text","formGroupName","phone",1,"user__input"],["type","phone","formGroupName","address","placeholder","\u0410\u0434\u0440\u0435\u0441\u0430 *",1,"user__input",3,"value","keyup"],["addr",""],["type","text","formGroupName","password","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c *",1,"user__input"],["class","address__list",4,"ngIf"],[1,"delivery"],[1,"delivery__title"],[1,"delivery__options"],[1,"delivery__options-checkbox"],["type","checkbox",1,"checkbox"],[1,"logo-company"],[1,"text-company"],[1,"delivery__options-select"],[1,"select"],["value","",1,"select__option"],[1,"delivery__opitions-btn"],["type","checkbox","name","delivery","id","",1,"checkbox"],[1,"delivery__actions"],["type","submit",1,"btn","delivery__btn"],["type","button",1,"btn__text"],[1,"contactus",3,"click"],[1,"address__list"],[1,"address__list-items"],["class","address__list-item",3,"click",4,"ngFor","ngForOf"],[1,"address__list-item",3,"click"]],template:function(n,o){if(1&n){const r=t.EpF();t.TgZ(0,"div",0),t._uU(1,"\u041e\u0441\u043e\u0431\u0438\u0441\u0442\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f"),t.qZA(),t.TgZ(2,"form",1),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(3,"div",2),t._UZ(4,"input",3),t.qZA(),t.TgZ(5,"div",2),t._UZ(6,"input",4),t.qZA(),t.TgZ(7,"div",2),t._UZ(8,"input",5),t.qZA(),t.TgZ(9,"div",2)(10,"span"),t.O4$(),t.TgZ(11,"svg",6)(12,"g",7),t._UZ(13,"path",8)(14,"path",9),t.qZA(),t.TgZ(15,"defs")(16,"clipPath",10),t._UZ(17,"rect",11),t.qZA()()()(),t.kcU(),t.TgZ(18,"span"),t._uU(19),t.qZA(),t._UZ(20,"input",12),t.qZA(),t.TgZ(21,"div",2)(22,"input",13,14),t.NdJ("keyup",function(){t.CHM(r);const c=t.MAs(23);return t.KtG(o.getAddress(c.value))}),t.qZA()(),t.TgZ(24,"div",2),t._UZ(25,"input",15),t.qZA(),t.YNc(26,Z,3,1,"div",16),t.qZA(),t.TgZ(27,"div",17)(28,"div",18),t._uU(29,"\u0421\u043f\u043e\u0441\u043e\u0431\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"),t.qZA(),t.TgZ(30,"div",19)(31,"div",20),t._UZ(32,"input",21),t.TgZ(33,"span",22),t._uU(34,"logo"),t.qZA(),t.TgZ(35,"span",23),t._uU(36,"\u041d\u043e\u0432\u0430 \u041f\u043e\u0448\u0442\u0430"),t.qZA(),t.TgZ(37,"div",24)(38,"select",25)(39,"option",26),t._uU(40,"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f"),t.qZA()()(),t.TgZ(41,"div",27)(42,"span"),t._uU(43,"\u0417\u0430\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u043e\u0441\u0438\u043b\u043a\u0443 \u0443 \u043d\u0430\u0439\u0431\u043b\u0438\u0436\u0447\u043e\u043c\u0443 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u0456 \u041d\u043e\u0432\u043e\u0457 \u041f\u043e\u0448\u0442\u0438"),t.qZA()()(),t.TgZ(44,"div",20),t._UZ(45,"input",28),t.TgZ(46,"span",22),t._uU(47,"logo"),t.qZA(),t.TgZ(48,"span",23),t._uU(49,"\u0423\u043a\u0440\u041f\u043e\u0448\u0442\u0430"),t.qZA()(),t.TgZ(50,"div",20),t._UZ(51,"input",28),t.TgZ(52,"span",22),t._uU(53,"logo"),t.qZA(),t.TgZ(54,"span",23),t._uU(55,"\u0421\u0430\u043c\u043e\u0432\u0438\u0432\u0456\u0437"),t.qZA()(),t.TgZ(56,"div",20),t._UZ(57,"input",28),t.TgZ(58,"span",22),t._uU(59,"logo"),t.qZA(),t.TgZ(60,"span",23),t._uU(61,"\u041a\u0443\u0440\u2019\u0454\u0440\u0441\u044c\u043a\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"),t.qZA()()(),t.TgZ(62,"div",29)(63,"button",30),t._uU(64,"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u043c\u0456\u043d\u0438"),t.qZA(),t.TgZ(65,"button",31),t._uU(66,"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0432\u0441\u0456 \u0437\u043c\u0456\u043d\u0438"),t.qZA()()(),t.TgZ(67,"div",32),t.NdJ("click",function(){return o.redirectToContact()}),t._UZ(68,"app-contact-us"),t.qZA()}if(2&n){let r;t.xp6(2),t.Q6J("formGroup",o.infoForm),t.xp6(17),t.Oqu(o.phoneHolder),t.xp6(3),t.Q6J("value",null==(r=o.infoForm.get("address"))?null:r.value),t.xp6(4),t.Q6J("ngIf",o.addresses.length&&o.isChosen)}},dependencies:[u.UX,u._Y,u.YN,u.Kr,u.JL,u.sg,u.x0,_.ax,_.O5,C],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";.user__info[_ngcontent-%COMP%]{display:flex;align-items:flex-start;padding-left:100px;gap:72px}.user__info-title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;color:#000;text-align:center;padding-bottom:72px;font-size:28px;font-style:normal;font-weight:400;line-height:130%}.user__form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;gap:32px;width:837px}.user__wrap-input[_ngcontent-%COMP%]{display:flex;padding:12px 16px;align-items:center;gap:8px;border-radius:8px;border:1px solid #949494;width:402px}.user__input[_ngcontent-%COMP%]{width:536px;height:29px;border:none;outline:none;font-size:18px;font-style:normal;font-weight:400;line-height:130%}.user__input[_ngcontent-%COMP%]::placeholder{color:#949494}.delivery[_ngcontent-%COMP%]{display:inline-flex;padding-right:0;flex-direction:column;justify-content:center;align-items:flex-start;gap:51px;padding-top:120px;width:829px}.delivery__title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;width:100%;text-align:center;font-size:28px;font-style:normal;font-weight:400;line-height:130%;color:#000}.delivery__options[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:56px}.delivery__options-select[_ngcontent-%COMP%]{margin-bottom:32px;margin-top:32px;margin-left:72px;display:flex;width:332px;padding:12px 16px;align-items:center;gap:8px;border-radius:8px;border:1px solid #949494}.delivery__options-select[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;display:flex;width:300px;justify-content:space-between;align-items:center;flex-shrink:0;font-size:18px;font-style:normal;font-weight:400;line-height:130%;outline:none;border:none;background:transparent;color:#6a6a6a}.delivery__opitions-btn[_ngcontent-%COMP%]{display:flex;width:757px;padding:16px;margin-left:72px;align-items:center;gap:10px;border-radius:8px;background:#efeeee}.delivery__opitions-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;color:#000;font-size:16px;font-style:normal;font-weight:400;line-height:130%}.delivery__actions[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;gap:80px;padding-top:80px}.delivery__btn[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:18px;font-style:normal;font-weight:300;line-height:130%;text-transform:none;color:#000}.checkbox[_ngcontent-%COMP%]{width:24px;height:24px}.logo-company[_ngcontent-%COMP%]{padding-left:48px;padding-right:24px;padding-bottom:32px}.text-company[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:20px;font-style:normal;font-weight:400;line-height:130%;color:#000}.btn__text[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:20px;font-style:normal;font-weight:400;line-height:130%;text-decoration-line:underline;border:none;background:transparent;color:#000}.contactus[_ngcontent-%COMP%]{position:fixed;top:780px;right:80px;width:125px;height:125px;padding:24px;border-radius:50%;border:2px solid #4c4c4c;background:rgba(255,255,255,.3);cursor:pointer}.address__list[_ngcontent-%COMP%]{position:relative;top:-20px;max-width:402px;border:1px solid #4c4c4c;border-top:none;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top-right-radius:none;border-top-left-radius:none}.address__list-item[_ngcontent-%COMP%]{border-radius:8px;padding:0 20px 10px 10px;cursor:pointer}.address__list-item[_ngcontent-%COMP%]:hover{background:#efeeee}.address__list-items[_ngcontent-%COMP%]{list-style:none}']}),i})()}}]);