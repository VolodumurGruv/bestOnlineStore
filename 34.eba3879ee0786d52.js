"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[34],{34:(g,h,n)=>{n.r(h),n.d(h,{APP_ROUTING:()=>l});var o=n(2492);const l=[{path:"",loadComponent:()=>n.e(554).then(n.bind(n,6554)).then(t=>t.LayoutComponent),children:[{path:"",loadComponent:()=>Promise.all([n.e(592),n.e(93)]).then(n.bind(n,6093)).then(t=>t.HomePageComponent)},{path:"",loadChildren:()=>n.e(761).then(n.bind(n,9761)).then(t=>t.CATALOG_ROUTING)},{path:"blog",loadComponent:()=>n.e(189).then(n.bind(n,3189)).then(t=>t.BlogComponent)},{path:"cart",loadComponent:()=>Promise.all([n.e(95),n.e(592),n.e(652)]).then(n.bind(n,9652)).then(t=>t.CartComponent),outlet:"cart"},{path:"sales",loadComponent:()=>n.e(221).then(n.bind(n,1221)).then(t=>t.SalesComponent)},{path:"about",loadComponent:()=>n.e(352).then(n.bind(n,6352)).then(t=>t.AboutComponent)},{path:"login",loadComponent:()=>Promise.all([n.e(95),n.e(592),n.e(498)]).then(n.bind(n,9498)).then(t=>t.LoginComponent),canActivate:[o.r]},{path:"signup",loadComponent:()=>Promise.all([n.e(95),n.e(592),n.e(559)]).then(n.bind(n,2559)).then(t=>t.SignupComponent),canActivate:[o.r]},{path:"",loadChildren:()=>n.e(415).then(n.bind(n,4415)).then(t=>t.USER_ROUTES)}]},{path:"",loadChildren:()=>n.e(248).then(n.bind(n,4248)).then(t=>t.ADMIN_ROUTING)},{path:"",redirectTo:"/",pathMatch:"full"},{path:"**",redirectTo:"/",pathMatch:"full"}]},2492:(g,h,n)=>{n.d(h,{p:()=>M,r:()=>P});var o=n(4946),l=n(2413),t=n(6879),C=n(311);const M=()=>{const d=(0,o.f3M)(C.e),s=(0,o.f3M)(l.F0),a=(0,o.f3M)(t.c),m=localStorage.getItem("expDate");return m&&(new Date).getTime()>new Date(m).getTime()&&(d.signOut(),a.warning("\u0422\u0435\u0440\u043c\u0456\u043d \u0434\u0456\u0457 \u0441\u0435\u0441\u0456\u0457 \u0437\u0430\u043a\u0456\u043d\u0447\u0438\u0432\u0441\u044f! \u0417\u0434\u0456\u0439\u0441\u043d\u0456\u0442\u044c \u043d\u043e\u0432\u0438\u0439 \u0432\u0445\u0456\u0434!")),!!d.isAuth()||s.parseUrl("/login")},P=()=>{const d=(0,o.f3M)(C.e),s=(0,o.f3M)(l.F0),a=(0,o.f3M)(t.c);return!d.isAuth()||(a.warning("\u0412\u0445\u0456\u0434 \u0432\u0436\u0435 \u0437\u0434\u0456\u0439\u0441\u043d\u0435\u043d\u043e!"),s.parseUrl("/"))}}}]);