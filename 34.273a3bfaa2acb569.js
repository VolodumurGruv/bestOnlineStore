"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[34],{34:(m,h,t)=>{t.r(h),t.d(h,{APP_ROUTING:()=>l});var o=t(2492);const l=[{path:"",loadComponent:()=>Promise.all([t.e(592),t.e(306)]).then(t.bind(t,306)).then(n=>n.LayoutComponent),children:[{path:"",loadComponent:()=>Promise.all([t.e(592),t.e(649)]).then(t.bind(t,3649)).then(n=>n.HomePageComponent)},{path:"",loadChildren:()=>t.e(945).then(t.bind(t,8945)).then(n=>n.CATALOG_ROUTING)},{path:"blog",loadComponent:()=>t.e(189).then(t.bind(t,3189)).then(n=>n.BlogComponent)},{path:"cart",loadComponent:()=>Promise.all([t.e(95),t.e(592),t.e(652)]).then(t.bind(t,9652)).then(n=>n.CartComponent),outlet:"cart"},{path:"sales",loadComponent:()=>t.e(221).then(t.bind(t,1221)).then(n=>n.SalesComponent)},{path:"",loadChildren:()=>t.e(415).then(t.bind(t,4415)).then(n=>n.USER_ROUTES)},{path:"about",loadChildren:()=>t.e(737).then(t.bind(t,5737)).then(n=>n.ABOUT_ROUTING)},{path:"login",loadComponent:()=>Promise.all([t.e(95),t.e(592),t.e(498)]).then(t.bind(t,9498)).then(n=>n.LoginComponent),canActivate:[o.r]},{path:"signup",loadComponent:()=>Promise.all([t.e(95),t.e(592),t.e(559)]).then(t.bind(t,2559)).then(n=>n.SignupComponent),canActivate:[o.r]}]},{path:"",loadChildren:()=>t.e(248).then(t.bind(t,4248)).then(n=>n.ADMIN_ROUTING)},{path:"",redirectTo:"/",pathMatch:"full"},{path:"**",redirectTo:"/",pathMatch:"full"}]},2492:(m,h,t)=>{t.d(h,{p:()=>P,r:()=>g});var o=t(4946),l=t(2413),n=t(6879),a=t(311);const P=()=>{const d=(0,o.f3M)(a.e),s=(0,o.f3M)(l.F0),O=(0,o.f3M)(n.c),C=localStorage.getItem("expDate");return C&&(new Date).getTime()>new Date(C).getTime()&&(d.signOut(),O.warning("\u0422\u0435\u0440\u043c\u0456\u043d \u0434\u0456\u0457 \u0441\u0435\u0441\u0456\u0457 \u0437\u0430\u043a\u0456\u043d\u0447\u0438\u0432\u0441\u044f! \u0417\u0434\u0456\u0439\u0441\u043d\u0456\u0442\u044c \u043d\u043e\u0432\u0438\u0439 \u0432\u0445\u0456\u0434!")),!!d.isAuth()||s.parseUrl("/login")},g=()=>{const d=(0,o.f3M)(a.e),s=(0,o.f3M)(l.F0);return!d.isAuth()||s.parseUrl("/")}}}]);