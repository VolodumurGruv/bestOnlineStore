"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[34],{34:(C,l,n)=>{n.r(l),n.d(l,{APP_ROUTING:()=>s});var o=n(2492);const s=[{path:"",loadComponent:()=>Promise.all([n.e(592),n.e(306)]).then(n.bind(n,306)).then(t=>t.LayoutComponent),children:[{path:"",loadComponent:()=>Promise.all([n.e(592),n.e(649)]).then(n.bind(n,3649)).then(t=>t.HomePageComponent)},{path:"catalog",loadChildren:()=>Promise.all([n.e(592),n.e(103)]).then(n.bind(n,5103)).then(t=>t.CATALOG_ROUTING)},{path:"blog",loadComponent:()=>n.e(189).then(n.bind(n,3189)).then(t=>t.BlogComponent)},{path:"cart",loadComponent:()=>Promise.all([n.e(95),n.e(124),n.e(592),n.e(352)]).then(n.bind(n,3352)).then(t=>t.CartComponent),outlet:"cart"},{path:"sales",loadComponent:()=>n.e(221).then(n.bind(n,1221)).then(t=>t.SalesComponent)},{path:"user",loadChildren:()=>n.e(415).then(n.bind(n,4415)).then(t=>t.USER_ROUTES)},{path:"about",loadChildren:()=>n.e(737).then(n.bind(n,5737)).then(t=>t.ABOUT_ROUTING)},{path:"login",loadComponent:()=>Promise.all([n.e(95),n.e(592),n.e(498)]).then(n.bind(n,9498)).then(t=>t.LoginComponent),canActivate:[o.r]},{path:"signup",loadComponent:()=>Promise.all([n.e(95),n.e(592),n.e(559)]).then(n.bind(n,2559)).then(t=>t.SignupComponent),canActivate:[o.r]}]},{path:"admin",loadChildren:()=>n.e(248).then(n.bind(n,4248)).then(t=>t.ADMIN_ROUTING)},{path:"",redirectTo:"/",pathMatch:"full"},{path:"**",redirectTo:"/",pathMatch:"full"}]},2492:(C,l,n)=>{n.d(l,{p:()=>g,r:()=>P});var o=n(4946),s=n(180),t=n(6879),a=n(311);const g=()=>{const h=(0,o.f3M)(a.e),d=(0,o.f3M)(s.F0),O=(0,o.f3M)(t.c),m=localStorage.getItem("expDate");return m&&(new Date).getTime()>new Date(m).getTime()&&(h.signOut(),O.warning("\u0422\u0435\u0440\u043c\u0456\u043d \u0434\u0456\u0457 \u0441\u0435\u0441\u0456\u0457 \u0437\u0430\u043a\u0456\u043d\u0447\u0438\u0432\u0441\u044f! \u0417\u0434\u0456\u0439\u0441\u043d\u0456\u0442\u044c \u043d\u043e\u0432\u0438\u0439 \u0432\u0445\u0456\u0434!")),!(!h.isAuth()||h.isAnonym())||d.parseUrl("/login")},P=()=>{const h=(0,o.f3M)(a.e),d=(0,o.f3M)(s.F0);return!h.isAuth()||(h.signOut(),d.parseUrl("/"))}}}]);