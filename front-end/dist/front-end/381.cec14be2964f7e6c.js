"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[381],{7381:(v,s,t)=>{t.r(s),t.d(s,{USER_ROUTES:()=>l});var o=t(4946),e=t(8015),d=t(6199),a=t(5078);const l=[{path:"user",loadComponent:()=>t.e(215).then(t.bind(t,2215)).then(n=>n.UserComponent),canActivate:[()=>{const n=(0,o.f3M)(a.e),m=(0,o.f3M)(e.F0),f=(0,o.f3M)(d.c),h=localStorage.getItem("expDate");return h&&(new Date).getTime()>new Date(h).getTime()&&(n.signOut(),f.warning("\u0422\u0435\u0440\u043c\u0456\u043d \u0434\u0456\u0457 \u0441\u0435\u0441\u0456\u0457 \u0437\u0430\u043a\u0456\u043d\u0447\u0438\u0432\u0441\u044f! \u0417\u0434\u0456\u0439\u0441\u043d\u0456\u0442\u044c \u043d\u043e\u0432\u0438\u0439 \u0432\u0445\u0456\u0434!")),!!n.isAuth()||m.parseUrl("/login")}],children:[{path:"",redirectTo:"/user",pathMatch:"full"},{path:"",loadComponent:()=>Promise.all([t.e(95),t.e(33)]).then(t.bind(t,4033)).then(n=>n.InfoComponent)},{path:"orders",loadComponent:()=>t.e(293).then(t.bind(t,293)).then(n=>n.OrdersComponent)},{path:"reviews",loadComponent:()=>t.e(177).then(t.bind(t,3177)).then(n=>n.ReviewsComponent)}]}]}}]);