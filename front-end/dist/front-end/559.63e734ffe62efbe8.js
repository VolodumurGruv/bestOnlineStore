"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[559],{2559:(P,l,t)=>{t.r(l),t.d(l,{SignupComponent:()=>x});var n=t(4946),g=t(6814),m=t(2413),o=t(95),c=t(9102),f=t(311),h=t(5474),u=t(4653),C=t(1760),M=t(1013);let x=(()=>{var s;class a{constructor(){this.fb=(0,n.f3M)(o.qu),this.authService=(0,n.f3M)(f.e),this.isValid=M.J,this.signupForm=this.fb.group({name:[null,[o.kI.required,o.kI.minLength(3),o.kI.maxLength(30),(0,u.qg)()]],email:[null,[o.kI.required,o.kI.email,(0,u.Le)()]],password:[null,[o.kI.required,o.kI.minLength(8),o.kI.maxLength(16),(0,u.ym)(),(0,u.IX)()]],confirmPassword:[null,[o.kI.required,o.kI.minLength(8),o.kI.maxLength(16),(0,u.ym)(),(0,u.IX)()]]})}registerUser(){const{name:e,email:i,password:p}=this.signupForm.value;e&&i&&p&&this.authService.signup({name:e,password:p,email:i})}isVisisble(e){e.type="password"===e.type?"text":"password"}}return(s=a).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-signup"]],standalone:!0,features:[n.jDz],decls:33,vars:10,consts:[[1,"signup"],[1,"signup__form-wrap"],[1,"signup__title"],[1,"signup__form",3,"formGroup","ngSubmit"],[1,"signup__input-wrap",3,"ngClass"],["type","text","placeholder","\u0406'\u043c\u044f \u041f\u0440\u0438\u0437\u0432\u0456\u0449\u0435*","formControlName","name",1,"signup__input"],[3,"control"],["type","email","placeholder","E-mail*","formControlName","email",1,"signup__input"],["type","password","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c*","formControlName","password",1,"signup__input-icon"],["input",""],[1,"icon",3,"click"],["type","password","placeholder","\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c*","formControlName","confirmPassword",1,"signup__input-icon"],["confirm",""],[1,"signup__btn-wrap"],["type","submit",1,"btn__grey","btn",3,"disabled"],[1,"signup__section-adittion"],["routerLink","/login",1,"signup__link"],[1,"or"],[1,"signup__google"]],template:function(e,i){if(1&e){const p=n.EpF();n.TgZ(0,"section",0)(1,"div",1)(2,"div",2),n._uU(3,"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f"),n.qZA(),n.TgZ(4,"form",3),n.NdJ("ngSubmit",function(){return i.registerUser()}),n.TgZ(5,"div",4),n._UZ(6,"input",5),n.qZA(),n._UZ(7,"app-error-validation",6),n.TgZ(8,"div",4),n._UZ(9,"input",7),n.qZA(),n._UZ(10,"app-error-validation",6),n.TgZ(11,"div",4),n._UZ(12,"input",8,9),n.TgZ(14,"span",10),n.NdJ("click",function(){n.CHM(p);const r=n.MAs(13);return n.KtG(i.isVisisble(r))}),n._UZ(15,"app-visibility-icon"),n.qZA()(),n._UZ(16,"app-error-validation",6),n.TgZ(17,"div",4),n._UZ(18,"input",11,12),n.TgZ(20,"span",10),n.NdJ("click",function(){n.CHM(p);const r=n.MAs(19);return n.KtG(i.isVisisble(r))}),n._UZ(21,"app-visibility-icon"),n.qZA()(),n._UZ(22,"app-error-validation",6),n.TgZ(23,"div",13)(24,"button",14),n._uU(25," \u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f "),n.qZA()()(),n.TgZ(26,"div",15)(27,"a",16),n._uU(28,"\u0423\u0432\u0456\u0439\u0442\u0438"),n.qZA()(),n.TgZ(29,"p",17),n._uU(30,"\u0430\u0431\u043e"),n.qZA(),n.TgZ(31,"div",18),n._UZ(32,"app-google-login"),n.qZA()()()}2&e&&(n.xp6(4),n.Q6J("formGroup",i.signupForm),n.xp6(1),n.Q6J("ngClass",i.isValid(i.signupForm,"name")),n.xp6(2),n.Q6J("control",i.signupForm.get("name")),n.xp6(1),n.Q6J("ngClass",i.isValid(i.signupForm,"email")),n.xp6(2),n.Q6J("control",i.signupForm.get("email")),n.xp6(1),n.Q6J("ngClass",i.isValid(i.signupForm,"password")),n.xp6(5),n.Q6J("control",i.signupForm.get("password")),n.xp6(1),n.Q6J("ngClass",i.isValid(i.signupForm,"confirmPassword")),n.xp6(5),n.Q6J("control",i.signupForm.get("confirmPassword")),n.xp6(2),n.Q6J("disabled",!i.signupForm.valid))},dependencies:[g.ez,g.mk,m.rH,c.M,o.UX,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,h.h,C.k],styles:[".signup[_ngcontent-%COMP%]{margin:120px auto 160px;width:570px}.signup__title[_ngcontent-%COMP%]{padding-bottom:60px;font-size:40px;font-style:normal;font-weight:500;line-height:130%;color:#000}.signup__form-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;height:auto}.signup__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px}.signup__input-wrap[_ngcontent-%COMP%]{display:flex;padding:12px 16px;align-items:center;gap:8px;border-radius:8px;border:1px solid #949494}.signup__input-icon[_ngcontent-%COMP%]{width:536px;height:29px;border:none;outline:none;font-size:18px;font-style:normal;font-weight:400;line-height:130%;width:506px}.signup__input-icon[_ngcontent-%COMP%]::placeholder{color:#949494}.signup__input[_ngcontent-%COMP%]{width:536px;height:29px;border:none;outline:none;font-size:18px;font-style:normal;font-weight:400;line-height:130%}.signup__input[_ngcontent-%COMP%]::placeholder{color:#949494}.signup__section-adittion[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:570px}.signup__link[_ngcontent-%COMP%]{padding-top:8px;padding-bottom:28px;text-decoration:none;font-size:15px;font-style:normal;font-weight:400;line-height:130%;text-decoration-line:underline;color:#565656;cursor:pointer}.signup__google[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;border-radius:8px;border:1px solid #010101;width:274px;font-size:18px;font-style:normal;font-weight:400;line-height:130%;color:#010101;cursor:pointer}.signup__google-icon[_ngcontent-%COMP%]{width:24px;height:24px;background-image:url(flat-color-icons_google.b84dff0d73a33a96.png);background-size:contain;background-repeat:no-repeat}.signup__google-text[_ngcontent-%COMP%]{padding:8px}.or[_ngcontent-%COMP%]{text-align:center;padding-bottom:28px;font-size:18px;font-style:normal;font-weight:400;line-height:130%;color:#000}.icon[_ngcontent-%COMP%]{cursor:pointer}"]}),a})()}}]);