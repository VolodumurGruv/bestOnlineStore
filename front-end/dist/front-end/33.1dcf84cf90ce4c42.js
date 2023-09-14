"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[33],{4033:(y,r,u)=>{u.r(r),u.d(r,{InfoComponent:()=>_});var e=u(4946),i=u(95),s=u(5516);const l="https://api.novaposhta.ua/v2.0/json/",p=(n,o)=>fetch(n,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(o)});let _=(()=>{var n;class o{constructor(){this.fb=(0,e.f3M)(i.qu),this.phoneHolder="+380",this.infoForm=this.fb.group({firstName:[null],lastName:[null],email:[null],address:[null],phone:[null],password:[null]})}ngOnInit(){p(l,{apiKey:s.N.novaPoshta,modelName:"Address",calledMethod:"getSettlements",methodProperties:{FindByString:"\u042f\u0433\u043e\u0442\u0438\u043d"}}).then(t=>t.json()).then(t=>{console.log(t),this.addresses=t.data}).catch(t=>{console.error(t)}),p(l,{apiKey:s.N.novaPoshta,modelName:"Address",calledMethod:"getWarehouses",methodProperties:{CityName:"\u0411\u0430\u0440\u0438\u0448\u0456\u0432\u043a\u0430"}}).then(t=>t.json()).then(t=>console.log(t)).catch(t=>{console.error(t)}),p(l,{apiKey:s.N.novaPoshta,modelName:"Address",calledMethod:"getStreet",methodProperties:{CityRef:"e7207d1a-4b33-11e4-ab6d-005056801329"}}).then(t=>t.json()).then(t=>console.log(t))}getAddress(t){return console.log(this.addresses),""}}return(n=o).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-info"]],standalone:!0,features:[e.jDz],decls:66,vars:1,consts:[[1,"user__info-title"],[1,"user__info-wrap"],[1,"user__wrap-input"],["type","text","placeholder","\u0406\u043c'\u044f *",1,"user__input"],["type","text","placeholder","\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435 *",1,"user__input"],["type","text","placeholder","Email *",1,"user__input"],["xmlns","http://www.w3.org/2000/svg","width","23","height","23","viewBox","0 0 23 23","fill","none"],["clip-path","url(#clip0_421_659)"],["d","M20.4444 3.19446H2.55556C1.87778 3.19446 1.22776 3.4637 0.748505 3.94296C0.269245 4.42222 0 5.07224 0 5.75001L0 11.5H23V5.75001C23 5.07224 22.7308 4.42222 22.2515 3.94296C21.7722 3.4637 21.1222 3.19446 20.4444 3.19446Z","fill","#005BBB"],["d","M23 17.25C23 17.9278 22.7308 18.5778 22.2515 19.0571C21.7722 19.5363 21.1222 19.8056 20.4444 19.8056H2.55556C1.87778 19.8056 1.22776 19.5363 0.748505 19.0571C0.269245 18.5778 0 17.9278 0 17.25V11.5H23V17.25Z","fill","#FFD500"],["id","clip0_421_659"],["width","23","height","23","fill","white"],["type","text",1,"user__input"],["type","phone","placeholder","\u0410\u0434\u0440\u0435\u0441\u0430 *",1,"user__input",3,"keyup"],["address",""],["type","text","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c *",1,"user__input"],[1,"delivery"],[1,"delivery__title"],[1,"delivery__options"],[1,"delivery__options-checkbox"],["type","checkbox",1,"checkbox"],[1,"logo-company"],[1,"text-company"],[1,"delivery__options-select"],[1,"select"],["value","",1,"select__option"],[1,"delivery__opitions-btn"],["type","checkbox","name","delivery","id","",1,"checkbox"],[1,"delivery__actions"],[1,"btn","delivery__btn"],[1,"btn__text"]],template:function(t,d){if(1&t){const h=e.EpF();e.TgZ(0,"div",0),e._uU(1,"\u041e\u0441\u043e\u0431\u0438\u0441\u0442\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f"),e.qZA(),e.TgZ(2,"div",1)(3,"div",2),e._UZ(4,"input",3),e.qZA(),e.TgZ(5,"div",2),e._UZ(6,"input",4),e.qZA(),e.TgZ(7,"div",2),e._UZ(8,"input",5),e.qZA(),e.TgZ(9,"div",2)(10,"span"),e.O4$(),e.TgZ(11,"svg",6)(12,"g",7),e._UZ(13,"path",8)(14,"path",9),e.qZA(),e.TgZ(15,"defs")(16,"clipPath",10),e._UZ(17,"rect",11),e.qZA()()()(),e.kcU(),e.TgZ(18,"span"),e._uU(19),e.qZA(),e._UZ(20,"input",12),e.qZA(),e.TgZ(21,"div",2)(22,"input",13,14),e.NdJ("keyup",function(){e.CHM(h);const x=e.MAs(23);return e.KtG(d.getAddress(x.value))}),e.qZA()(),e.TgZ(24,"div",2),e._UZ(25,"input",15),e.qZA()(),e.TgZ(26,"div",16)(27,"div",17),e._uU(28,"\u0421\u043f\u043e\u0441\u043e\u0431\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"),e.qZA(),e.TgZ(29,"div",18)(30,"div",19),e._UZ(31,"input",20),e.TgZ(32,"span",21),e._uU(33,"logo"),e.qZA(),e.TgZ(34,"span",22),e._uU(35,"\u041d\u043e\u0432\u0430 \u041f\u043e\u0448\u0442\u0430"),e.qZA(),e.TgZ(36,"div",23)(37,"select",24)(38,"option",25),e._uU(39,"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f"),e.qZA()()(),e.TgZ(40,"div",26)(41,"span"),e._uU(42,"\u0417\u0430\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u043e\u0441\u0438\u043b\u043a\u0443 \u0443 \u043d\u0430\u0439\u0431\u043b\u0438\u0436\u0447\u043e\u043c\u0443 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u0456 \u041d\u043e\u0432\u043e\u0457 \u041f\u043e\u0448\u0442\u0438"),e.qZA()()(),e.TgZ(43,"div",19),e._UZ(44,"input",27),e.TgZ(45,"span",21),e._uU(46,"logo"),e.qZA(),e.TgZ(47,"span",22),e._uU(48,"\u0423\u043a\u0440\u041f\u043e\u0448\u0442\u0430"),e.qZA()(),e.TgZ(49,"div",19),e._UZ(50,"input",27),e.TgZ(51,"span",21),e._uU(52,"logo"),e.qZA(),e.TgZ(53,"span",22),e._uU(54,"\u0421\u0430\u043c\u043e\u0432\u0438\u0432\u0456\u0437"),e.qZA()(),e.TgZ(55,"div",19),e._UZ(56,"input",27),e.TgZ(57,"span",21),e._uU(58,"logo"),e.qZA(),e.TgZ(59,"span",22),e._uU(60,"\u041a\u0443\u0440\u2019\u0454\u0440\u0441\u044c\u043a\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"),e.qZA()()(),e.TgZ(61,"div",28)(62,"button",29),e._uU(63,"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u043c\u0456\u043d\u0438"),e.qZA(),e.TgZ(64,"button",30),e._uU(65,"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0432\u0441\u0456 \u0437\u043c\u0456\u043d\u0438"),e.qZA()()()}2&t&&(e.xp6(19),e.Oqu(d.phoneHolder))},dependencies:[i.UX,i.YN,i.Kr],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";.user__info[_ngcontent-%COMP%]{display:flex;align-items:flex-start;padding-left:100px;gap:72px}.user__info-title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;color:#000;text-align:center;padding-bottom:72px;font-size:28px;font-style:normal;font-weight:400;line-height:130%}.user__info-wrap[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;gap:32px;width:837px}.user__wrap-input[_ngcontent-%COMP%]{display:flex;padding:12px 16px;align-items:center;gap:8px;border-radius:8px;border:1px solid #949494;width:402px}.user__input[_ngcontent-%COMP%]{width:536px;height:29px;border:none;outline:none;font-size:18px;font-style:normal;font-weight:400;line-height:130%}.user__input[_ngcontent-%COMP%]::placeholder{color:#949494}.delivery[_ngcontent-%COMP%]{display:inline-flex;padding-right:0;flex-direction:column;justify-content:center;align-items:flex-start;gap:51px;padding-top:120px;width:829px}.delivery__title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;width:100%;text-align:center;font-size:28px;font-style:normal;font-weight:400;line-height:130%;color:#000}.delivery__options[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:56px}.delivery__options-select[_ngcontent-%COMP%]{margin-bottom:32px;margin-top:32px;margin-left:72px;display:flex;width:332px;padding:12px 16px;align-items:center;gap:8px;border-radius:8px;border:1px solid #949494}.delivery__options-select[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;display:flex;width:300px;justify-content:space-between;align-items:center;flex-shrink:0;font-size:18px;font-style:normal;font-weight:400;line-height:130%;outline:none;border:none;background:transparent;color:#6a6a6a}.delivery__opitions-btn[_ngcontent-%COMP%]{display:flex;width:757px;padding:16px;margin-left:72px;align-items:center;gap:10px;border-radius:8px;background:#efeeee;cursor:pointer}.delivery__opitions-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;color:#000;font-size:16px;font-style:normal;font-weight:400;line-height:130%}.delivery__actions[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;gap:80px;padding-top:80px}.delivery__btn[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:18px;font-style:normal;font-weight:300;line-height:130%;text-transform:none;color:#000}.checkbox[_ngcontent-%COMP%]{width:24px;height:24px}.logo-company[_ngcontent-%COMP%]{padding-left:48px;padding-right:24px;padding-bottom:32px}.text-company[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:20px;font-style:normal;font-weight:400;line-height:130%;color:#000}.btn__text[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:20px;font-style:normal;font-weight:400;line-height:130%;text-decoration-line:underline;border:none;background:transparent;color:#000}']}),o})()}}]);