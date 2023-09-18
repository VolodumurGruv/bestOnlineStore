"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[996],{1996:(S,d,a)=>{a.r(d),a.d(d,{LoginComponent:()=>I});var e=a(4946),u=a(6814),g=a(2413),s=a(95),w=a(311),f=a(9102),C=a(5474),l=a(4653),_=a(1760),m=a(1013),P=a(9862),b=a(1993),v=a(347),y=a(4009),Z=a(8645),x=a(6306);let p=(()=>{var i;class r{constructor(){this.http=(0,e.f3M)(P.eN),this.httpErrorHandler=(0,e.f3M)(y.G),this.destroyRef=(0,e.f3M)(e.ktI),this.router=(0,e.f3M)(g.F0),this.recoverRes=new Z.x,this.recoverRes$=this.recoverRes.asObservable()}recoverPass(t){this.http.post(v.rH.URL+"/user/forgot-password",{email:t}).pipe((0,x.K)(this.httpErrorHandler.handleError("\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434 \u0447\u0430\u0441 \u0432\u0456\u0434\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u0430\u0440\u043e\u043b\u044e!")),(0,b.sL)(this.destroyRef)).subscribe(n=>{n.message&&n.text&&(this.recoverRes.next(n.text),this.router.navigate(["/login",{token:"token"}]))})}setNewPass(t,n){this.http.post(v.rH.URL+"/user/reset-password",{newPassword:n,token:t}).pipe((0,x.K)(this.httpErrorHandler.handleError("\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434 \u0447\u0430\u0441 \u0432\u0456\u0434\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u0430\u0440\u043e\u043b\u044e!"))).subscribe(c=>{c.message&&c.text&&(this.recoverRes.next(c.text),this.router.navigate(["/login",{token:"token"}]))})}getRecoverRes(){return this.recoverRes$}}return(i=r).\u0275fac=function(t){return new(t||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),r})();function M(i,r){if(1&i){const o=e.EpF();e.TgZ(0,"div",3)(1,"p"),e._uU(2,"\u0414\u043b\u044f \u0432\u0456\u0434\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u0430\u0440\u043e\u043b\u044e \u0432\u0432\u0435\u0434\u0456\u0442\u044c e-mail"),e.qZA(),e.TgZ(3,"form",4),e.NdJ("ngSubmit",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.onSubmit())}),e.TgZ(4,"div",5)(5,"div",6),e._UZ(6,"input",7),e.qZA(),e._UZ(7,"app-error-validation",8),e.qZA(),e.TgZ(8,"div",9)(9,"div")(10,"button",10),e._uU(11," \u0412\u0456\u0434\u043d\u043e\u0432\u0438\u0442\u0438 "),e.qZA()(),e.TgZ(12,"div")(13,"button",11),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.cancel())}),e._uU(14," \u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 "),e.qZA()()()()()}if(2&i){const o=e.oxw();e.xp6(3),e.Q6J("formGroup",o.recoverPassForm),e.xp6(2),e.Q6J("ngClass",o.isValid(o.recoverPassForm,"email")),e.xp6(2),e.Q6J("control",o.recoverPassForm.get("email")),e.xp6(3),e.Q6J("disabled",!o.recoverPassForm.valid)}}function T(i,r){if(1&i){const o=e.EpF();e.TgZ(0,"div",12)(1,"div")(2,"p"),e._uU(3),e.ALo(4,"async"),e.qZA()(),e.TgZ(5,"div")(6,"button",11),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.cancel())}),e._uU(7,"\u0417\u0430\u043a\u0440\u0438\u0442\u0438"),e.qZA()()()}if(2&i){const o=e.oxw();e.xp6(3),e.Oqu(e.lcZ(4,1,o.recoverPass$))}}let k=(()=>{var i;class r{constructor(){this.recover=new e.vpe,this.fb=(0,e.f3M)(s.qu),this.recoverPass=(0,e.f3M)(p),this.isValid=m.J,this.notSend=!0,this.recoverPassForm=this.fb.group({email:["",[s.kI.required,s.kI.email,(0,l.Le)()]]})}onSubmit(){const t=this.recoverPassForm.get("email")?.value;t&&(this.recoverPass.recoverPass(t),this.recoverPass$=this.recoverPass.getRecoverRes(),this.notSend=!1,localStorage.setItem("recEmail",t))}cancel(){this.recover.emit(!1)}}return(i=r).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recover-pass"]],outputs:{recover:"recover"},standalone:!0,features:[e._Bn([{provide:p,useClass:p}]),e.jDz],decls:4,vars:2,consts:[[1,"recover"],["class","recover__wrap",4,"ngIf","ngIfElse"],["send",""],[1,"recover__wrap"],[1,"recover__form",3,"formGroup","ngSubmit"],[1,"form__container"],[1,"input__wrap",3,"ngClass"],["type","email","id","email","formControlName","email","placeholder","E-mail*",1,"recover__input"],[3,"control"],[1,"action"],["type","submit",1,"btn",3,"disabled"],["type","button",1,"btn",3,"click"],[1,"recover__form","recover__wrap"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e.YNc(1,M,15,4,"div",1),e.YNc(2,T,8,3,"ng-template",null,2,e.W1O),e.qZA()),2&t){const c=e.MAs(3);e.xp6(1),e.Q6J("ngIf",n.notSend)("ngIfElse",c)}},dependencies:[u.mk,u.Ov,u.O5,s.UX,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,_.k],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";.recover__input[_ngcontent-%COMP%]{width:536px;height:29px;border:none;outline:none;font-size:18px;font-style:normal;font-weight:400;line-height:130%}.recover__input[_ngcontent-%COMP%]::placeholder{color:#949494}.input__wrap[_ngcontent-%COMP%]{display:flex;padding:12px 16px;align-items:center;gap:8px;border-radius:8px;border:1px solid #949494;max-width:570px}.recover[_ngcontent-%COMP%]{display:block;position:absolute;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.2);z-index:100}.recover__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:48px}.recover__wrap[_ngcontent-%COMP%]{margin:10% auto 0;border-radius:8px;max-width:670px;padding:20px;background:#fff}.recover__wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;text-align:center;font-weight:400;font-size:18px}.action[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:48px}']}),r})(),O=(()=>{var i;class r{}return(i=r).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-input-text"]],standalone:!0,features:[e.jDz],decls:1,vars:0,consts:[["type","text"]],template:function(t,n){1&t&&e._UZ(0,"input",0)},dependencies:[u.ez],styles:["input[_ngcontent-%COMP%]{max-width:536px;height:29px;border:none;outline:none;font-size:18px;font-style:normal;font-weight:400;line-height:130%}input[_ngcontent-%COMP%]::placeholder{color:#949494}"]}),r})();var N=a(6879);function F(i,r){if(1&i){const o=e.EpF();e.TgZ(0,"div",3)(1,"p"),e._uU(2,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u0432\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"),e.qZA(),e.TgZ(3,"form",4),e.NdJ("ngSubmit",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.onSubmit())}),e.TgZ(4,"p"),e._uU(5),e.qZA(),e.TgZ(6,"div",5)(7,"div",6),e._UZ(8,"input",7,8),e.TgZ(10,"span",9),e.NdJ("click",function(){e.CHM(o);const n=e.MAs(9),c=e.oxw();return e.KtG(c.isVisisble(n))}),e._UZ(11,"app-visibility-icon"),e.qZA()(),e._UZ(12,"app-error-validation",10),e.TgZ(13,"div",6),e._UZ(14,"input",11,12),e.TgZ(16,"span",9),e.NdJ("click",function(){e.CHM(o);const n=e.MAs(15),c=e.oxw();return e.KtG(c.isVisisble(n))}),e._UZ(17,"app-visibility-icon"),e.qZA()(),e._UZ(18,"app-error-validation",10),e.qZA(),e._UZ(19,"app-input-text"),e.TgZ(20,"div",13)(21,"div")(22,"button",14),e._uU(23," \u0412\u0456\u0434\u043d\u043e\u0432\u0438\u0442\u0438 "),e.qZA()(),e.TgZ(24,"div")(25,"button",15),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.cancel())}),e._uU(26," \u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 "),e.qZA()()()()()}if(2&i){const o=e.oxw();e.xp6(3),e.Q6J("formGroup",o.newPassForm),e.xp6(2),e.Oqu(o.getEmail()),e.xp6(2),e.Q6J("ngClass",o.isValid(o.newPassForm,"password")),e.xp6(5),e.Q6J("control",o.newPassForm.get("password")),e.xp6(1),e.Q6J("ngClass",o.isValid(o.newPassForm,"confirmPassword")),e.xp6(5),e.Q6J("control",o.newPassForm.get("confirmPassword")),e.xp6(4),e.Q6J("disabled",!o.newPassForm.valid)}}function J(i,r){if(1&i){const o=e.EpF();e.TgZ(0,"div",16)(1,"div")(2,"p"),e._uU(3),e.ALo(4,"async"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"\u0417\u0434\u0456\u0441\u043d\u0456\u0441\u0442\u044c \u0432\u0445\u0456\u0434 \u0437 \u043d\u043e\u0432\u0438\u043c \u043f\u0430\u0440\u043e\u043b\u0435\u043c"),e.qZA()(),e.TgZ(7,"div")(8,"button",15),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.cancel())}),e._uU(9,"\u0417\u0430\u043a\u0440\u0438\u0442\u0438"),e.qZA()()()}if(2&i){const o=e.oxw();e.xp6(3),e.Oqu(e.lcZ(4,1,o.recoverPass$))}}let A=(()=>{var i;class r{constructor(){this.isNewPass=new e.vpe,this.fb=(0,e.f3M)(s.qu),this.setNewPassword=(0,e.f3M)(p),this.alertService=(0,e.f3M)(N.c),this.isValid=m.J,this.isRecover=!0,this.newPassForm=this.fb.group({password:["",[s.kI.required,s.kI.minLength(8),s.kI.maxLength(16),(0,l.ym)()]],confirmPassword:["",[s.kI.required,s.kI.minLength(8),s.kI.maxLength(16),(0,l.IX)(),(0,l.ym)()]]})}getEmail(){return localStorage.getItem("recEmail")?localStorage.getItem("recEmail"):""}onSubmit(){const t=this.newPassForm.get("password")?.value,n=localStorage.getItem("resToken");t&&n?(this.setNewPassword.setNewPass(n,t),this.recoverPass$=this.setNewPassword.getRecoverRes(),this.isRecover=!1):this.alertService.warning("\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430! \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437!")}cancel(){this.isNewPass.emit(!1)}isVisisble(t){t.type="password"===t.type?"text":"password"}}return(i=r).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-new-pass"]],outputs:{isNewPass:"isNewPass"},standalone:!0,features:[e._Bn([p]),e.jDz],decls:4,vars:2,consts:[[1,"recover"],["class","recover__wrap",4,"ngIf","ngIfElse"],["send",""],[1,"recover__wrap"],[1,"recover__form",3,"formGroup","ngSubmit"],[1,"form__container"],[1,"input__wrap",3,"ngClass"],["type","password","formControlName","password","placeholder","\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c*",1,"recover__input"],["passVis",""],[1,"icon",3,"click"],[3,"control"],["type","password","formControlName","confirmPassword","placeholder","\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c*",1,"recover__input"],["confPassVis",""],[1,"action"],["type","submit",1,"btn",3,"disabled"],["type","button",1,"btn",3,"click"],[1,"recover__form","recover__wrap"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e.YNc(1,F,27,7,"div",1),e.qZA(),e.YNc(2,J,10,3,"ng-template",null,2,e.W1O)),2&t){const c=e.MAs(3);e.xp6(1),e.Q6J("ngIf",n.isRecover)("ngIfElse",c)}},dependencies:[u.ez,u.mk,u.O5,u.Ov,s.UX,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,_.k,f.M,O],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";.recover__input[_ngcontent-%COMP%]{width:536px;height:29px;border:none;outline:none;font-size:18px;font-style:normal;font-weight:400;line-height:130%}.recover__input[_ngcontent-%COMP%]::placeholder{color:#949494}.input__wrap[_ngcontent-%COMP%]{display:flex;padding:12px 16px;align-items:center;gap:8px;border-radius:8px;border:1px solid #949494;max-width:570px}.recover[_ngcontent-%COMP%]{display:block;position:absolute;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.2);z-index:100}.recover__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:48px}.recover__wrap[_ngcontent-%COMP%]{margin:10% auto 0;border-radius:8px;max-width:670px;padding:20px;background:#fff}.recover__wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;text-align:center;font-weight:400;font-size:18px}.form__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}.action[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:48px}.email__rec[_ngcontent-%COMP%]{width:100%;padding:20px;font-family:Roboto,sans-serif;font-size:16px;font-style:normal;font-weight:600;line-height:130%;color:#000;background:#efeeee}.icon[_ngcontent-%COMP%]{cursor:pointer}']}),r})();function U(i,r){if(1&i){const o=e.EpF();e.ynx(0),e.TgZ(1,"app-recover-pass",22),e.NdJ("recover",function(n){e.CHM(o);const c=e.oxw();return e.KtG(c.recoverPass(n))}),e.qZA(),e.BQk()}}function E(i,r){if(1&i){const o=e.EpF();e.ynx(0),e.TgZ(1,"app-new-pass",23),e.NdJ("isNewPass",function(n){e.CHM(o);const c=e.oxw();return e.KtG(c.newPass(n))}),e.qZA(),e.BQk()}}let I=(()=>{var i;class r{constructor(){this.fb=(0,e.f3M)(s.qu),this.authService=(0,e.f3M)(w.e),this.route=(0,e.f3M)(g.gz),this.isValid=m.J,this.recover=!1,this.isNewPass=!1,this.signinForm=this.fb.group({email:[null,[s.kI.required,s.kI.email,(0,l.Le)()]],password:[null,[s.kI.required,(0,l.ym)()]],savePass:[""]})}ngOnInit(){this.route.queryParamMap.subscribe(t=>{const n=t.get("token");n&&(this.isNewPass=!0,localStorage.setItem("resToken",n))})}onSubmit(){this.authService.signIn(this.signinForm.value)}googleLogin(){}isVisisble(t){t.type="password"===t.type?"text":"password"}recoverPass(t){this.recover=t}newPass(t){this.isNewPass=t}}return(i=r).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-login"]],standalone:!0,features:[e.jDz],decls:33,vars:8,consts:[[1,"login"],[1,"login__wrap"],[1,"login__title"],[1,"login__form",3,"formGroup","ngSubmit"],[1,"form__container"],[1,"input__wrap",3,"ngClass"],["type","email","id","email","formControlName","email","placeholder","E-mail*",1,"form__input"],[3,"control"],["type","password","id","password","formControlName","password","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c*",1,"form__input"],["input",""],[1,"icon",3,"click"],[1,"form__checkbox"],["type","checkbox","id","pass-save","formControlName","savePass"],["for","pass-save",1,"form__checkbox__label"],[1,"form__btn"],["type","submit",1,"btn__grey",3,"disabled"],[1,"login__section-adittion"],[1,"login__link",3,"click"],["routerLink","/signup",1,"login__link"],[1,"or"],[1,"google__login"],[4,"ngIf"],[3,"recover"],[3,"isNewPass"]],template:function(t,n){if(1&t){const c=e.EpF();e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._uU(3,"\u0423\u0432\u0456\u0439\u0442\u0438"),e.qZA(),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(5,"div",4)(6,"div",5),e._UZ(7,"input",6),e.qZA(),e._UZ(8,"app-error-validation",7),e.TgZ(9,"div",5),e._UZ(10,"input",8,9),e.TgZ(12,"span",10),e.NdJ("click",function(){e.CHM(c);const R=e.MAs(11);return e.KtG(n.isVisisble(R))}),e._UZ(13,"app-visibility-icon"),e.qZA()(),e._UZ(14,"app-error-validation",7),e.qZA(),e.TgZ(15,"div",11),e._UZ(16,"input",12),e.TgZ(17,"label",13),e._uU(18,"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"),e.qZA()(),e.TgZ(19,"div",14)(20,"button",15),e._uU(21," \u0423\u0432\u0456\u0439\u0442\u0438 "),e.qZA()()(),e.TgZ(22,"div",16)(23,"a",17),e.NdJ("click",function(){return n.recover=!n.recover}),e._uU(24,"\u0417\u0430\u0431\u0443\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"),e.qZA(),e.TgZ(25,"a",18),e._uU(26,"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f"),e.qZA()(),e.TgZ(27,"p",19),e._uU(28,"\u0430\u0431\u043e"),e.qZA(),e.TgZ(29,"div",20),e._UZ(30,"app-google-login"),e.qZA()(),e.YNc(31,U,2,0,"ng-container",21),e.YNc(32,E,2,0,"ng-container",21),e.qZA()}2&t&&(e.xp6(4),e.Q6J("formGroup",n.signinForm),e.xp6(2),e.Q6J("ngClass",n.isValid(n.signinForm,"email")),e.xp6(2),e.Q6J("control",n.signinForm.get("email")),e.xp6(1),e.Q6J("ngClass",n.isValid(n.signinForm,"password")),e.xp6(5),e.Q6J("control",n.signinForm.get("password")),e.xp6(6),e.Q6J("disabled",!n.signinForm.valid),e.xp6(11),e.Q6J("ngIf",n.recover),e.xp6(1),e.Q6J("ngIf",n.isNewPass))},dependencies:[u.ez,u.mk,u.O5,g.rH,s.u5,s._Y,s.Fj,s.Wl,s.JJ,s.JL,s.UX,s.sg,s.u,f.M,C.h,_.k,k,A],styles:[".login[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:131px;margin-bottom:168px}.login__wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:570px;height:515px}.login__title[_ngcontent-%COMP%]{padding-bottom:60px;font-size:40px;font-style:normal;font-weight:500;line-height:130%;color:#000}.login__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.login__section-adittion[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:570px}.login__link[_ngcontent-%COMP%]{padding-top:8px;padding-bottom:28px;text-decoration:none;font-size:15px;font-style:normal;font-weight:400;line-height:130%;text-decoration-line:underline;color:#565656;cursor:pointer}.form__container[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column;align-items:flex-start;gap:24px}.form__input[_ngcontent-%COMP%]{width:536px;height:29px;border:none;outline:none;font-size:18px;font-style:normal;font-weight:400;line-height:130%}.form__input[_ngcontent-%COMP%]::placeholder{color:#949494}.form__input[_ngcontent-%COMP%]::placeholder{font-size:18px;font-style:normal;font-weight:400;line-height:130%;color:#949494}.form__checkbox[_ngcontent-%COMP%]{margin-right:auto;padding-top:18px;padding-bottom:43px}.form__checkbox__label[_ngcontent-%COMP%]{width:127px;padding-left:15px;font-size:15px;font-style:normal;font-weight:400;line-height:130%;color:#565656}.input__wrap[_ngcontent-%COMP%]{display:flex;padding:12px 16px;align-items:center;gap:8px;border-radius:8px;border:1px solid #949494;max-width:570px}.icon[_ngcontent-%COMP%]{padding:0 16px;cursor:pointer}.or[_ngcontent-%COMP%]{padding-bottom:28px;font-size:18px;font-style:normal;font-weight:400;line-height:130%;color:#000}.google__login[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;border-radius:8px;border:1px solid #010101;width:274px;font-size:18px;font-style:normal;font-weight:400;line-height:130%;color:#010101;cursor:pointer}.google__login-icon[_ngcontent-%COMP%]{width:24px;height:24px;background-image:url(flat-color-icons_google.b84dff0d73a33a96.png);background-size:contain;background-repeat:no-repeat}.google__login-text[_ngcontent-%COMP%]{padding:8px}"]}),r})()}}]);