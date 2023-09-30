"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[498],{9498:(S,f,r)=>{r.r(f),r.d(f,{LoginComponent:()=>I});var n=r(4946),c=r(6814),u=r(2413),s=r(95),v=r(311),m=r(9102),y=r(5474),p=r(4653),d=r(1760),_=r(1013),w=r(9862),P=r(1993),h=r(347),C=r(4009),M=r(8645),x=r(6306);let g=(()=>{var i;class a{constructor(){this.http=(0,n.f3M)(w.eN),this.httpErrorHandler=(0,n.f3M)(C.G),this.destroyRef=(0,n.f3M)(n.ktI),this.router=(0,n.f3M)(u.F0),this.recoverRes=new M.x,this.recoverRes$=this.recoverRes.asObservable()}recoverPass(e){this.http.post(h.rH.URL+"/user/forgot-password",{email:e}).pipe((0,x.K)(this.httpErrorHandler.handleError("\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434 \u0447\u0430\u0441 \u0432\u0456\u0434\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u0430\u0440\u043e\u043b\u044e!")),(0,P.sL)(this.destroyRef)).subscribe(t=>{t&&t.message&&t.text?(this.recoverRes.next("\u0414\u043b\u044f \u043f\u043e\u0434\u0430\u043b\u044c\u0448\u043e\u0433\u043e \u0432\u0456\u0434\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044c \u0437\u0430 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u043c \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u0438\u043c \u043d\u0430 \u0412\u0430\u0448 e-mail"),this.router.navigate(["/login",{token:"token"}])):this.recoverRes.next("\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430! \u041f\u043e\u0432\u0442\u043e\u0440\u0456\u0442\u044c \u0441\u043f\u0440\u043e\u0431\u0443!")})}setNewPass(e,t){this.http.post(h.rH.URL+"/user/reset-password",{newPassword:t,token:e}).pipe((0,x.K)(this.httpErrorHandler.handleError("\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434 \u0447\u0430\u0441 \u0432\u0456\u0434\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u0430\u0440\u043e\u043b\u044e!"))).subscribe(l=>{l&&l.message&&l.text?(this.recoverRes.next("\u0417\u0434\u0456\u0439\u0441\u043d\u0456\u0442\u044c \u0432\u0445\u0456\u0434 \u0437 \u043d\u043e\u0432\u0438\u043c \u043f\u0430\u0440\u043e\u043b\u0435\u043c"),this.router.navigate(["/login",{token:"token"}])):this.recoverRes.next("\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430! \u041f\u043e\u0432\u0442\u043e\u0440\u0456\u0442\u044c \u0441\u043f\u0440\u043e\u0431\u0443!")})}getRecoverRes(){return this.recoverRes$}}return(i=a).\u0275fac=function(e){return new(e||i)},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac}),a})();function O(i,a){if(1&i){const o=n.EpF();n.TgZ(0,"div",3)(1,"p"),n._uU(2,"\u0414\u043b\u044f \u0432\u0456\u0434\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u0430\u0440\u043e\u043b\u044e \u0432\u0432\u0435\u0434\u0456\u0442\u044c e-mail"),n.qZA(),n.TgZ(3,"form",4),n.NdJ("ngSubmit",function(){n.CHM(o);const t=n.oxw();return n.KtG(t.onSubmit())}),n.TgZ(4,"div",5)(5,"div",6),n._UZ(6,"input",7)(7,"app-error-validation",8),n.qZA()(),n.TgZ(8,"div",9)(9,"div")(10,"button",10),n._uU(11," \u0412\u0456\u0434\u043d\u043e\u0432\u0438\u0442\u0438 "),n.qZA()(),n.TgZ(12,"div")(13,"button",11),n.NdJ("click",function(){n.CHM(o);const t=n.oxw();return n.KtG(t.cancel())}),n._uU(14," \u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 "),n.qZA()()()()()}if(2&i){const o=n.oxw();n.xp6(3),n.Q6J("formGroup",o.recoverPassForm),n.xp6(2),n.Q6J("ngClass",o.isValid(o.recoverPassForm,"email")),n.xp6(2),n.Q6J("control",o.recoverPassForm.get("email")),n.xp6(3),n.Q6J("disabled",!o.recoverPassForm.valid)}}function Z(i,a){if(1&i){const o=n.EpF();n.TgZ(0,"div",12)(1,"div")(2,"p"),n._uU(3),n.ALo(4,"async"),n.qZA()(),n.TgZ(5,"div")(6,"button",13),n.NdJ("click",function(){n.CHM(o);const t=n.oxw();return n.KtG(t.cancel())}),n._uU(7,"\u0417\u0430\u043a\u0440\u0438\u0442\u0438"),n.qZA()()()}if(2&i){const o=n.oxw();n.xp6(3),n.Oqu(n.lcZ(4,1,o.recoverPass$))}}let k=(()=>{var i;class a{constructor(){this.recover=new n.vpe,this.fb=(0,n.f3M)(s.qu),this.recoverPass=(0,n.f3M)(g),this.isValid=_.J,this.notSend=!0,this.recoverPassForm=this.fb.group({email:["",[s.kI.required,s.kI.email,(0,p.Le)()]]})}onSubmit(){const e=this.recoverPassForm.get("email")?.value;e&&(this.recoverPass.recoverPass(e),this.recoverPass$=this.recoverPass.getRecoverRes(),this.notSend=!1,localStorage.setItem("recEmail",e))}cancel(){this.recover.emit(!1)}}return(i=a).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-recover-pass"]],outputs:{recover:"recover"},standalone:!0,features:[n._Bn([{provide:g,useClass:g}]),n.jDz],decls:4,vars:2,consts:[[1,"recover"],["class","recover__wrap",4,"ngIf","ngIfElse"],["send",""],[1,"recover__wrap"],[1,"recover__form",3,"formGroup","ngSubmit"],[1,"form__container"],[1,"input__wrap",3,"ngClass"],["type","email","id","email","formControlName","email","placeholder","E-mail*",1,"recover__input"],[3,"control"],[1,"action"],["type","submit",1,"btn","btn__buy",3,"disabled"],["type","button",1,"btn","btn__add",3,"click"],[1,"recover__form","recover__wrap"],["type","button",1,"btn",3,"click"]],template:function(e,t){if(1&e&&(n.TgZ(0,"div",0),n.YNc(1,O,15,4,"div",1),n.YNc(2,Z,8,3,"ng-template",null,2,n.W1O),n.qZA()),2&e){const l=n.MAs(3);n.xp6(1),n.Q6J("ngIf",t.notSend)("ngIfElse",l)}},dependencies:[c.mk,c.Ov,c.O5,s.UX,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,d.k],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Manrope&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap";.errorMessage[_ngcontent-%COMP%]{font-family:Inter;font-size:14px;font-weight:400;font-style:normal;line-height:normal;position:relative;top:40px;color:#da3838}app-error-validation[_ngcontent-%COMP%]{position:absolute}.btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:8px;flex-shrink:0;cursor:pointer}.btn__login[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:20px;font-weight:500;font-style:normal;line-height:130%;width:570px;height:60px;padding:16px 12px;gap:8;background:#272727;color:#fafafa}.btn__login[_ngcontent-%COMP%]:hover{box-shadow:0 4px 4px #09090966}.btn__login[_ngcontent-%COMP%]:active{box-shadow:none}.btn__buy[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:24px;font-weight:400;font-style:normal;line-height:130%;height:64px;padding:8px 16px;text-transform:uppercase;gap:8;background:#272727;color:#fff}.btn__buy[_ngcontent-%COMP%]:hover{box-shadow:0 4px 4px #09090966}.btn__buy[_ngcontent-%COMP%]:active{box-shadow:none}.btn__add[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:20px;font-weight:300;font-style:normal;line-height:130%;color:#000;height:64px;padding:16px 32px;text-transform:uppercase;gap:16px;border:1px solid #05020e;color:#05020e}.btn__add[_ngcontent-%COMP%]:hover{background:#05020e;color:#fff}.btn__add[_ngcontent-%COMP%]:active{background:transparent;color:#05020e}.btn__reply[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:22px;font-weight:400;font-style:normal;line-height:130%;color:#000;padding:16px;gap:16px;border:1px solid #646464;color:#05020e}.disabled[_ngcontent-%COMP%], .btn__add[_ngcontent-%COMP%]:disabled, .btn__reply[_ngcontent-%COMP%]:disabled{border:1px solid #949494;color:#949494;box-shadow:none;background:transparent}.disabled-grey[_ngcontent-%COMP%], .btn__login[_ngcontent-%COMP%]:disabled, .btn__buy[_ngcontent-%COMP%]:disabled{background:#949494;color:#fafafa;box-shadow:none}.recover__input[_ngcontent-%COMP%]{width:536px;height:29px;border:none;outline:none;font-size:18px;font-style:normal;font-weight:400;line-height:130%}.recover__input[_ngcontent-%COMP%]::placeholder{color:#949494}.input__wrap[_ngcontent-%COMP%]{display:flex;padding:12px 16px;align-items:center;gap:8px;border-radius:8px;border:1px solid #949494;max-width:570px}.recover[_ngcontent-%COMP%]{display:block;position:absolute;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.2);z-index:100}.recover__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:48px}.recover__wrap[_ngcontent-%COMP%]{margin:10% auto 0;border-radius:8px;max-width:670px;padding:20px;background:#fff}.recover__wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:18px;font-weight:400;font-style:normal;line-height:130%;color:#000;text-align:center}.action[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:48px}']}),a})();var T=r(6879);function N(i,a){if(1&i){const o=n.EpF();n.TgZ(0,"div",3)(1,"p"),n._uU(2,"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u0432\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"),n.qZA(),n.TgZ(3,"form",4),n.NdJ("ngSubmit",function(){n.CHM(o);const t=n.oxw();return n.KtG(t.onSubmit())}),n.TgZ(4,"p"),n._uU(5),n.qZA(),n.TgZ(6,"div",5)(7,"div",6),n._UZ(8,"input",7,8),n.TgZ(10,"span",9),n.NdJ("click",function(){n.CHM(o);const t=n.MAs(9),l=n.oxw();return n.KtG(l.isVisisble(t))}),n._UZ(11,"app-visibility-icon"),n.qZA(),n._UZ(12,"app-error-validation",10),n.qZA(),n.TgZ(13,"div",6),n._UZ(14,"input",11,12),n.TgZ(16,"span",9),n.NdJ("click",function(){n.CHM(o);const t=n.MAs(15),l=n.oxw();return n.KtG(l.isVisisble(t))}),n._UZ(17,"app-visibility-icon"),n.qZA(),n._UZ(18,"app-error-validation",10),n.qZA()(),n.TgZ(19,"div",13)(20,"div")(21,"button",14),n._uU(22," \u0412\u0456\u0434\u043d\u043e\u0432\u0438\u0442\u0438 "),n.qZA()(),n.TgZ(23,"div")(24,"button",15),n.NdJ("click",function(){n.CHM(o);const t=n.oxw();return n.KtG(t.cancel())}),n._uU(25," \u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 "),n.qZA()()()()()}if(2&i){const o=n.oxw();n.xp6(3),n.Q6J("formGroup",o.newPassForm),n.xp6(2),n.Oqu(o.getEmail()),n.xp6(2),n.Q6J("ngClass",o.isValid(o.newPassForm,"password")),n.xp6(5),n.Q6J("control",o.newPassForm.get("password")),n.xp6(1),n.Q6J("ngClass",o.isValid(o.newPassForm,"confirmPassword")),n.xp6(5),n.Q6J("control",o.newPassForm.get("confirmPassword")),n.xp6(3),n.Q6J("disabled",!o.newPassForm.valid)}}function R(i,a){if(1&i){const o=n.EpF();n.TgZ(0,"div",16)(1,"div")(2,"p"),n._uU(3),n.ALo(4,"async"),n.qZA()(),n.TgZ(5,"div")(6,"button",17),n.NdJ("click",function(){n.CHM(o);const t=n.oxw();return n.KtG(t.cancel())}),n._uU(7,"\u0417\u0430\u043a\u0440\u0438\u0442\u0438"),n.qZA()()()}if(2&i){const o=n.oxw();n.xp6(3),n.Oqu(n.lcZ(4,1,o.recoverPass$))}}let F=(()=>{var i;class a{constructor(){this.isNewPass=new n.vpe,this.fb=(0,n.f3M)(s.qu),this.setNewPassword=(0,n.f3M)(g),this.alertService=(0,n.f3M)(T.c),this.isValid=_.J,this.isRecover=!0,this.newPassForm=this.fb.group({password:["",[s.kI.required,s.kI.minLength(8),s.kI.maxLength(16),(0,p.ym)()]],confirmPassword:["",[s.kI.required,s.kI.minLength(8),s.kI.maxLength(16),(0,p.IX)(),(0,p.ym)()]]})}getEmail(){return localStorage.getItem("recEmail")?localStorage.getItem("recEmail"):""}onSubmit(){const e=this.newPassForm.get("password")?.value,t=localStorage.getItem("resToken");e&&t?(this.setNewPassword.setNewPass(t,e),this.recoverPass$=this.setNewPassword.getRecoverRes(),this.isRecover=!1):this.alertService.warning("\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430! \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437!")}cancel(){this.isNewPass.emit(!1)}isVisisble(e){e.type="password"===e.type?"text":"password"}}return(i=a).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-new-pass"]],outputs:{isNewPass:"isNewPass"},standalone:!0,features:[n._Bn([g]),n.jDz],decls:4,vars:2,consts:[[1,"recover"],["class","recover__wrap",4,"ngIf","ngIfElse"],["send",""],[1,"recover__wrap"],[1,"recover__form",3,"formGroup","ngSubmit"],[1,"form__container"],[1,"input__wrap",3,"ngClass"],["type","password","formControlName","password","placeholder","\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c*",1,"recover__input"],["passVis",""],[1,"icon",3,"click"],[3,"control"],["type","password","formControlName","confirmPassword","placeholder","\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c*",1,"recover__input"],["confPassVis",""],[1,"action"],["type","submit",1,"btn","btn__add",3,"disabled"],["type","button",1,"btn","btn__add",3,"click"],[1,"recover__form","recover__wrap"],["type","button",1,"btn",3,"click"]],template:function(e,t){if(1&e&&(n.TgZ(0,"div",0),n.YNc(1,N,26,7,"div",1),n.qZA(),n.YNc(2,R,8,3,"ng-template",null,2,n.W1O)),2&e){const l=n.MAs(3);n.xp6(1),n.Q6J("ngIf",t.isRecover)("ngIfElse",l)}},dependencies:[c.ez,c.mk,c.O5,c.Ov,s.UX,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,d.k,m.M],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Manrope&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap";.errorMessage[_ngcontent-%COMP%]{font-family:Inter;font-size:14px;font-weight:400;font-style:normal;line-height:normal;position:relative;top:40px;color:#da3838}app-error-validation[_ngcontent-%COMP%]{position:absolute}.btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:8px;flex-shrink:0;cursor:pointer}.btn__login[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:20px;font-weight:500;font-style:normal;line-height:130%;width:570px;height:60px;padding:16px 12px;gap:8;background:#272727;color:#fafafa}.btn__login[_ngcontent-%COMP%]:hover{box-shadow:0 4px 4px #09090966}.btn__login[_ngcontent-%COMP%]:active{box-shadow:none}.btn__buy[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:24px;font-weight:400;font-style:normal;line-height:130%;height:64px;padding:8px 16px;text-transform:uppercase;gap:8;background:#272727;color:#fff}.btn__buy[_ngcontent-%COMP%]:hover{box-shadow:0 4px 4px #09090966}.btn__buy[_ngcontent-%COMP%]:active{box-shadow:none}.btn__add[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:20px;font-weight:300;font-style:normal;line-height:130%;color:#000;height:64px;padding:16px 32px;text-transform:uppercase;gap:16px;border:1px solid #05020e;color:#05020e}.btn__add[_ngcontent-%COMP%]:hover{background:#05020e;color:#fff}.btn__add[_ngcontent-%COMP%]:active{background:transparent;color:#05020e}.btn__reply[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:22px;font-weight:400;font-style:normal;line-height:130%;color:#000;padding:16px;gap:16px;border:1px solid #646464;color:#05020e}.disabled[_ngcontent-%COMP%], .btn__add[_ngcontent-%COMP%]:disabled, .btn__reply[_ngcontent-%COMP%]:disabled{border:1px solid #949494;color:#949494;box-shadow:none;background:transparent}.disabled-grey[_ngcontent-%COMP%], .btn__login[_ngcontent-%COMP%]:disabled, .btn__buy[_ngcontent-%COMP%]:disabled{background:#949494;color:#fafafa;box-shadow:none}.recover__input[_ngcontent-%COMP%]{width:536px;height:29px;border:none;outline:none;font-size:18px;font-style:normal;font-weight:400;line-height:130%}.recover__input[_ngcontent-%COMP%]::placeholder{color:#949494}.input__wrap[_ngcontent-%COMP%]{display:flex;padding:12px 16px;align-items:center;gap:8px;border-radius:8px;border:1px solid #949494;max-width:570px}.recover[_ngcontent-%COMP%]{display:block;position:absolute;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.2);z-index:100}.recover__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;gap:48px}.recover__wrap[_ngcontent-%COMP%]{margin:10% auto 0;border-radius:8px;max-width:670px;padding:20px;background:#fff}.recover__wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:18px;font-weight:400;font-style:normal;line-height:130%;color:#000;text-align:center}.form__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}.action[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:48px}.icon[_ngcontent-%COMP%]{cursor:pointer}']}),a})();function J(i,a){if(1&i){const o=n.EpF();n.ynx(0),n.TgZ(1,"app-recover-pass",21),n.NdJ("recover",function(t){n.CHM(o);const l=n.oxw();return n.KtG(l.recoverPass(t))}),n.qZA(),n.BQk()}}function A(i,a){if(1&i){const o=n.EpF();n.ynx(0),n.TgZ(1,"app-new-pass",22),n.NdJ("isNewPass",function(t){n.CHM(o);const l=n.oxw();return n.KtG(l.newPass(t))}),n.qZA(),n.BQk()}}let I=(()=>{var i;class a{constructor(){this.fb=(0,n.f3M)(s.qu),this.authService=(0,n.f3M)(v.e),this.route=(0,n.f3M)(u.gz),this.isValid=_.J,this.recover=!1,this.isNewPass=!1,this.signinForm=this.fb.group({email:[null,[s.kI.required,s.kI.email,(0,p.Le)()]],password:[null,[s.kI.required,(0,p.ym)()]],savePass:[""]})}ngOnInit(){this.route.queryParamMap.subscribe(e=>{const t=e.get("token");t&&(this.isNewPass=!0,localStorage.setItem("resToken",t))})}onSubmit(){this.authService.signIn(this.signinForm.value)}googleLogin(){}isVisisble(e){e.type="password"===e.type?"text":"password"}recoverPass(e){this.recover=e}newPass(e){this.isNewPass=e}}return(i=a).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-login"]],standalone:!0,features:[n.jDz],decls:33,vars:8,consts:[[1,"login"],[1,"login__wrap"],[1,"login__title"],[1,"login__form",3,"formGroup","ngSubmit"],[1,"form__container"],[1,"input__wrap",3,"ngClass"],["type","email","id","email","formControlName","email","placeholder","E-mail*",1,"form__input"],[3,"control"],["type","password","id","password","formControlName","password","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c*",1,"form__input"],["input",""],[1,"icon",3,"click"],[1,"form__checkbox"],["type","checkbox","id","pass-save","formControlName","savePass"],["for","pass-save",1,"form__checkbox__label"],[1,"form__btn"],["type","submit",1,"btn","btn__login","diasbled",3,"disabled"],[1,"login__section-adittion"],[1,"login__link",3,"click"],["routerLink","/signup",1,"login__link"],[1,"or"],[4,"ngIf"],[3,"recover"],[3,"isNewPass"]],template:function(e,t){if(1&e){const l=n.EpF();n.TgZ(0,"section",0)(1,"div",1)(2,"div",2),n._uU(3,"\u0423\u0432\u0456\u0439\u0442\u0438"),n.qZA(),n.TgZ(4,"form",3),n.NdJ("ngSubmit",function(){return t.onSubmit()}),n.TgZ(5,"div",4)(6,"div",5),n._UZ(7,"input",6)(8,"app-error-validation",7),n.qZA(),n.TgZ(9,"div",5),n._UZ(10,"input",8,9),n.TgZ(12,"span",10),n.NdJ("click",function(){n.CHM(l);const E=n.MAs(11);return n.KtG(t.isVisisble(E))}),n._UZ(13,"app-visibility-icon"),n.qZA(),n._UZ(14,"app-error-validation",7),n.qZA()(),n.TgZ(15,"div",11),n._UZ(16,"input",12),n.TgZ(17,"label",13),n._uU(18,"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"),n.qZA()(),n.TgZ(19,"div",14)(20,"button",15),n._uU(21," \u0423\u0432\u0456\u0439\u0442\u0438 "),n.qZA()()(),n.TgZ(22,"div",16)(23,"a",17),n.NdJ("click",function(){return t.recover=!t.recover}),n._uU(24,"\u0417\u0430\u0431\u0443\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"),n.qZA(),n.TgZ(25,"a",18),n._uU(26,"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f"),n.qZA()(),n.TgZ(27,"p",19),n._uU(28,"\u0430\u0431\u043e"),n.qZA(),n.TgZ(29,"div"),n._UZ(30,"app-google-login"),n.qZA()(),n.YNc(31,J,2,0,"ng-container",20),n.YNc(32,A,2,0,"ng-container",20),n.qZA()}2&e&&(n.xp6(4),n.Q6J("formGroup",t.signinForm),n.xp6(2),n.Q6J("ngClass",t.isValid(t.signinForm,"email")),n.xp6(2),n.Q6J("control",t.signinForm.get("email")),n.xp6(1),n.Q6J("ngClass",t.isValid(t.signinForm,"password")),n.xp6(5),n.Q6J("control",t.signinForm.get("password")),n.xp6(6),n.Q6J("disabled",!t.signinForm.valid),n.xp6(11),n.Q6J("ngIf",t.recover),n.xp6(1),n.Q6J("ngIf",t.isNewPass))},dependencies:[c.ez,c.mk,c.O5,u.rH,s.u5,s._Y,s.Fj,s.Wl,s.JJ,s.JL,s.UX,s.sg,s.u,m.M,y.h,d.k,k,F],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Manrope&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap";.errorMessage[_ngcontent-%COMP%]{font-family:Inter;font-size:14px;font-weight:400;font-style:normal;line-height:normal;position:relative;top:40px;color:#da3838}app-error-validation[_ngcontent-%COMP%]{position:absolute}.btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:8px;flex-shrink:0;cursor:pointer}.btn__login[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:20px;font-weight:500;font-style:normal;line-height:130%;width:570px;height:60px;padding:16px 12px;gap:8;background:#272727;color:#fafafa}.btn__login[_ngcontent-%COMP%]:hover{box-shadow:0 4px 4px #09090966}.btn__login[_ngcontent-%COMP%]:active{box-shadow:none}.btn__buy[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:24px;font-weight:400;font-style:normal;line-height:130%;height:64px;padding:8px 16px;text-transform:uppercase;gap:8;background:#272727;color:#fff}.btn__buy[_ngcontent-%COMP%]:hover{box-shadow:0 4px 4px #09090966}.btn__buy[_ngcontent-%COMP%]:active{box-shadow:none}.btn__add[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:20px;font-weight:300;font-style:normal;line-height:130%;color:#000;height:64px;padding:16px 32px;text-transform:uppercase;gap:16px;border:1px solid #05020e;color:#05020e}.btn__add[_ngcontent-%COMP%]:hover{background:#05020e;color:#fff}.btn__add[_ngcontent-%COMP%]:active{background:transparent;color:#05020e}.btn__reply[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:22px;font-weight:400;font-style:normal;line-height:130%;color:#000;padding:16px;gap:16px;border:1px solid #646464;color:#05020e}.disabled[_ngcontent-%COMP%], .btn__add[_ngcontent-%COMP%]:disabled, .btn__reply[_ngcontent-%COMP%]:disabled{border:1px solid #949494;color:#949494;box-shadow:none;background:transparent}.disabled-grey[_ngcontent-%COMP%], .btn__login[_ngcontent-%COMP%]:disabled, .btn__buy[_ngcontent-%COMP%]:disabled{background:#949494;color:#fafafa;box-shadow:none}.login[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:131px;margin-bottom:168px}.login__wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:570px;height:515px}.login__title[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:40px;font-weight:500;font-style:normal;line-height:130%;padding-bottom:60px}.login__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.login__section-adittion[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:570px}.login__link[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:130%;color:#000;padding-top:8px;padding-bottom:28px;text-decoration:none;text-decoration-line:underline;color:#272727;cursor:pointer}.form__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:24px}.form__input[_ngcontent-%COMP%]{width:536px;height:29px;border:none;outline:none;font-size:18px;font-style:normal;font-weight:400;line-height:130%}.form__input[_ngcontent-%COMP%]::placeholder{color:#949494}.form__input[_ngcontent-%COMP%]::placeholder{font-family:Roboto,sans-serif;font-size:18px;font-weight:400;font-style:normal;line-height:130%;color:#000;color:#949494}.form__checkbox[_ngcontent-%COMP%]{margin-right:auto;padding-top:18px;padding-bottom:43px}.form__checkbox__label[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:130%;color:#000;width:127px;padding-left:15px;color:#272727}.input__wrap[_ngcontent-%COMP%]{display:flex;padding:12px 16px;align-items:center;gap:8px;border-radius:8px;border:1px solid #949494;max-width:570px}.icon[_ngcontent-%COMP%]{padding:0 16px;cursor:pointer}.or[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:18px;font-weight:400;font-style:normal;line-height:130%;color:#000;padding-bottom:28px}']}),a})()}}]);