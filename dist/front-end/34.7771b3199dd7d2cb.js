"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[34],{34:(C,h,t)=>{t.r(h),t.d(h,{APP_ROUTING:()=>d});var o=t(2492);const d=[{path:"",loadComponent:()=>Promise.all([t.e(592),t.e(806)]).then(t.bind(t,6707)).then(n=>n.LayoutComponent),children:[{path:"",loadComponent:()=>Promise.all([t.e(592),t.e(203)]).then(t.bind(t,3649)).then(n=>n.HomePageComponent)},{path:"catalog",loadChildren:()=>Promise.all([t.e(223),t.e(592),t.e(254)]).then(t.bind(t,4254)).then(n=>n.CATALOG_ROUTING)},{path:"blog",loadComponent:()=>t.e(189).then(t.bind(t,3189)).then(n=>n.BlogComponent)},{path:"cart",loadComponent:()=>Promise.all([t.e(223),t.e(687),t.e(592),t.e(352)]).then(t.bind(t,3352)).then(n=>n.CartComponent),outlet:"cart"},{path:"order",loadComponent:()=>Promise.all([t.e(223),t.e(592),t.e(155)]).then(t.bind(t,7155)).then(n=>n.OrderComponent)},{path:"sales",loadComponent:()=>Promise.all([t.e(592),t.e(461)]).then(t.bind(t,1221)).then(n=>n.SalesComponent)},{path:"user",loadChildren:()=>t.e(415).then(t.bind(t,4415)).then(n=>n.USER_ROUTES)},{path:"about",loadChildren:()=>t.e(737).then(t.bind(t,5737)).then(n=>n.ABOUT_ROUTING)},{path:"login",loadComponent:()=>Promise.all([t.e(223),t.e(592),t.e(498)]).then(t.bind(t,9498)).then(n=>n.LoginComponent),canActivate:[o.r]},{path:"signup",loadComponent:()=>Promise.all([t.e(223),t.e(592),t.e(559)]).then(t.bind(t,2559)).then(n=>n.SignupComponent),canActivate:[o.r]}]},{path:"admin",loadChildren:()=>t.e(248).then(t.bind(t,4248)).then(n=>n.ADMIN_ROUTING)},{path:"",redirectTo:"/",pathMatch:"full"},{path:"**",redirectTo:"/",pathMatch:"full"}]},2492:(C,h,t)=>{t.d(h,{p:()=>g,r:()=>P});var o=t(4946),d=t(180),n=t(6879),a=t(3423);const g=()=>{const l=(0,o.f3M)(a.e),s=(0,o.f3M)(d.F0),O=(0,o.f3M)(n.c),m=localStorage.getItem("expDate");return m&&(new Date).getTime()>new Date(m).getTime()&&(l.signOut(),O.warning("\u0422\u0435\u0440\u043c\u0456\u043d \u0434\u0456\u0457 \u0441\u0435\u0441\u0456\u0457 \u0437\u0430\u043a\u0456\u043d\u0447\u0438\u0432\u0441\u044f! \u0417\u0434\u0456\u0439\u0441\u043d\u0456\u0442\u044c \u043d\u043e\u0432\u0438\u0439 \u0432\u0445\u0456\u0434!")),!(!l.isAuth()||l.isAnonym())||(localStorage.getItem("user")&&localStorage.clear(),s.parseUrl("/login"))},P=()=>{const l=(0,o.f3M)(a.e),s=(0,o.f3M)(d.F0);return!l.isAuth()||(l.signOut(),s.parseUrl("/"))}}}]);