"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[700],{6700:(M,r,i)=>{i.r(r),i.d(r,{LoginComponent:()=>h});var n=i(4946),_=i(6814),p=i(8015),o=i(95),u=i(5078),d=i(9102),c=i(5474),a=i(4653),m=i(1760),f=i(1013);let h=(()=>{var l;class s{constructor(){this.fb=(0,n.f3M)(o.qu),this.authService=(0,n.f3M)(u.e),this.isValid=f.J,this.signinForm=this.fb.group({email:["vova@mymail.com",[o.kI.required,o.kI.email,(0,a.Le)()]],password:["voVA123vova",[o.kI.required,(0,a.ym)()]],savePass:[]})}onSubmit(){this.authService.signIn(this.signinForm.value)}googleLogin(){}isVisisble(e){e.type="password"===e.type?"text":"password"}}return(l=s).\u0275fac=function(e){return new(e||l)},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-login"]],standalone:!0,features:[n.jDz],decls:31,vars:6,consts:[[1,"login"],[1,"login__wrap"],[1,"login__title"],[1,"login__form",3,"formGroup","ngSubmit"],[1,"form__container"],[1,"input__wrap",3,"ngClass"],["type","email","id","email","formControlName","email","placeholder","E-mail*",1,"form__input"],[3,"control"],["type","password","id","password","formControlName","password","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c*",1,"form__input"],["input",""],[1,"icon",3,"click"],[1,"form__checkbox"],["type","checkbox","id","pass-save","formControlName","savePass"],["for","pass-save",1,"form__checkbox__label"],[1,"form__btn"],["type","submit",1,"btn__grey",3,"disabled"],[1,"login__section-adittion"],[1,"login__link"],["routerLink","/signup",1,"login__link"],[1,"or"],[1,"google__login"]],template:function(e,t){if(1&e){const x=n.EpF();n.TgZ(0,"section",0)(1,"div",1)(2,"div",2),n._uU(3,"\u0423\u0432\u0456\u0439\u0442\u0438"),n.qZA(),n.TgZ(4,"form",3),n.NdJ("ngSubmit",function(){return t.onSubmit()}),n.TgZ(5,"div",4)(6,"div",5),n._UZ(7,"input",6),n.qZA(),n._UZ(8,"app-error-validation",7),n.TgZ(9,"div",5),n._UZ(10,"input",8,9),n.TgZ(12,"span",10),n.NdJ("click",function(){n.CHM(x);const v=n.MAs(11);return n.KtG(t.isVisisble(v))}),n._UZ(13,"app-visibility-icon"),n.qZA()(),n._UZ(14,"app-error-validation",7),n.qZA(),n.TgZ(15,"div",11),n._UZ(16,"input",12),n.TgZ(17,"label",13),n._uU(18,"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"),n.qZA()(),n.TgZ(19,"div",14)(20,"button",15),n._uU(21," \u0423\u0432\u0456\u0439\u0442\u0438 "),n.qZA()()(),n.TgZ(22,"div",16)(23,"a",17),n._uU(24,"\u0417\u0430\u0431\u0443\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"),n.qZA(),n.TgZ(25,"a",18),n._uU(26,"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f"),n.qZA()(),n.TgZ(27,"p",19),n._uU(28,"\u0430\u0431\u043e"),n.qZA(),n.TgZ(29,"div",20),n._UZ(30,"app-google-login"),n.qZA()()()}2&e&&(n.xp6(4),n.Q6J("formGroup",t.signinForm),n.xp6(2),n.Q6J("ngClass",t.isValid(t.signinForm,"email")),n.xp6(2),n.Q6J("control",t.signinForm.get("email")),n.xp6(1),n.Q6J("ngClass",t.isValid(t.signinForm,"password")),n.xp6(5),n.Q6J("control",t.signinForm.get("password")),n.xp6(6),n.Q6J("disabled",!t.signinForm.valid))},dependencies:[_.ez,_.mk,p.rH,o.u5,o._Y,o.Fj,o.Wl,o.JJ,o.JL,o.UX,o.sg,o.u,d.M,c.h,m.k],styles:[".login[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:131px;margin-bottom:168px}.login__wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:570px;height:515px}.login__title[_ngcontent-%COMP%]{padding-bottom:60px;font-size:40px;font-style:normal;font-weight:500;line-height:130%;color:#000}.login__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.login__section-adittion[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:570px}.login__link[_ngcontent-%COMP%]{padding-top:8px;padding-bottom:28px;text-decoration:none;font-size:15px;font-style:normal;font-weight:400;line-height:130%;text-decoration-line:underline;color:#565656;cursor:pointer}.form__container[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column;align-items:flex-start;gap:24px}.form__input[_ngcontent-%COMP%]{width:536px;height:29px;border:none;outline:none;font-size:18px;font-style:normal;font-weight:400;line-height:130%}.form__input[_ngcontent-%COMP%]::placeholder{color:#949494}.form__input[_ngcontent-%COMP%]::placeholder{font-size:18px;font-style:normal;font-weight:400;line-height:130%;color:#949494}.form__checkbox[_ngcontent-%COMP%]{margin-right:auto;padding-top:18px;padding-bottom:43px}.form__checkbox__label[_ngcontent-%COMP%]{width:127px;padding-left:15px;font-size:15px;font-style:normal;font-weight:400;line-height:130%;color:#565656}.input__wrap[_ngcontent-%COMP%]{display:flex;padding:12px 16px;align-items:center;gap:8px;border-radius:8px;border:1px solid #949494;max-width:570px}.icon[_ngcontent-%COMP%]{padding:0 16px;cursor:pointer}.or[_ngcontent-%COMP%]{padding-bottom:28px;font-size:18px;font-style:normal;font-weight:400;line-height:130%;color:#000}.google__login[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;border-radius:8px;border:1px solid #010101;width:274px;font-size:18px;font-style:normal;font-weight:400;line-height:130%;color:#010101;cursor:pointer}.google__login-icon[_ngcontent-%COMP%]{width:24px;height:24px;background-image:url(flat-color-icons_google.b84dff0d73a33a96.png);background-size:contain;background-repeat:no-repeat}.google__login-text[_ngcontent-%COMP%]{padding:8px}"]}),s})()}}]);