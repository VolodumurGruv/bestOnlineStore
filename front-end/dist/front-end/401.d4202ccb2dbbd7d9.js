"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[401],{3401:(C,c,r)=>{r.r(c),r.d(c,{CategoriesComponent:()=>p});var a=r(6895),l=r(4736);const m=[{id:1,name:"\u041c\u0435\u0431\u043b\u0456",routerLink:"/catalog/furniture",showSubcategories:!1,subcategories:[{id:11,name:"\u0421\u0442\u043e\u043b\u0438",routerLink:"tables"},{id:12,name:"\u041f\u0443\u0444\u0438",routerLink:"ottomans"},{id:13,name:"\u0421\u0442\u0456\u043b\u044c\u0446\u0456",routerLink:"chairs"},{id:14,name:"\u041a\u0440\u0456\u0441\u043b\u0430",routerLink:"armchairs"},{id:15,name:"\u041b\u0456\u0436\u043a\u0430",routerLink:"beds"},{id:16,name:"\u0414\u0438\u0432\u0430\u043d\u0438",routerLink:"sofas"},{id:17,name:"\u0421\u0442\u0435\u043b\u0430\u0436\u0456",routerLink:"shelves"},{id:18,name:"\u0422\u0443\u043c\u0431\u0438",routerLink:"nightstands"},{id:19,name:"\u041a\u043e\u043c\u043e\u0434\u0438",routerLink:"dressers"}]},{id:2,name:"\u041e\u0441\u0432\u0456\u0442\u043b\u0435\u043d\u043d\u044f",routerLink:"/catalog/lighting",showSubcategories:!1,subcategories:[{id:21,name:"\u041b\u044e\u0441\u0442\u0440\u0438",routerLink:"chandeliers"},{id:22,name:"\u041b\u0430\u043c\u043f\u0438",routerLink:"lamps"}]},{id:3,name:"\u0421\u0430\u043d\u0442\u0435\u0445\u043d\u0456\u043a\u0430",routerLink:"/catalog/plumbing",showSubcategories:!1,subcategories:[{id:31,name:"\u0412\u0430\u043d\u043d\u0438",routerLink:"bathtubs"},{id:32,name:"\u0414\u0443\u0448\u0456",routerLink:"showers"}]},{id:4,name:"\u0410\u043a\u0441\u0435\u0441\u0443\u0430\u0440\u0438",routerLink:"/catalog/accessories",showSubcategories:!1,subcategories:[{id:41,name:"\u041f\u043e\u0434\u0443\u0448\u043a\u0438",routerLink:"cushions"},{id:42,name:"\u041a\u0438\u043b\u0438\u043c\u0438",routerLink:"rugs"}]},{id:5,name:"\u0406\u043d\u0448\u0435",routerLink:"/catalog/other",showSubcategories:!1,subcategories:[{id:51,name:"\u0414\u0435\u043a\u043e\u0440",routerLink:"decor"},{id:52,name:"\u041f\u043e\u0441\u0443\u0434",routerLink:"tableware"}]}];var e=r(8256);const u=function(t){return{category:t}},g=function(t,i){return[t,i]};function d(t,i){if(1&t&&(e.TgZ(0,"li")(1,"a",10),e._uU(2),e.qZA()()),2&t){const o=i.$implicit,n=e.oxw(2).$implicit;e.xp6(1),e.Q6J("routerLink",e.WLB(4,g,n.routerLink,e.VKq(2,u,o.routerLink))),e.xp6(1),e.Oqu(o.name)}}function _(t,i){if(1&t&&(e.TgZ(0,"ul",8),e.YNc(1,d,3,7,"li",9),e.qZA()),2&t){const o=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",o.subcategories)}}function f(t,i){if(1&t){const o=e.EpF();e.TgZ(0,"li",5),e.NdJ("mouseenter",function(){const h=e.CHM(o).$implicit,k=e.oxw();return e.KtG(k.showSubcategories(h))})("mouseleave",function(){e.CHM(o);const s=e.oxw();return e.KtG(s.hideSubcategories())}),e.TgZ(1,"a",6),e._uU(2),e.qZA(),e.YNc(3,_,2,1,"ul",7),e.qZA()}if(2&t){const o=i.$implicit;e.xp6(1),e.Q6J("routerLink",e.WLB(5,g,o.routerLink,e.VKq(3,u,o.routerLink))),e.xp6(1),e.Oqu(o.name),e.xp6(1),e.Q6J("ngIf",o.showSubcategories)}}let p=(()=>{var t;class i{constructor(){this.categories=m}showSubcategories(n){n.showSubcategories=!0}hideSubcategories(){this.categories.forEach(n=>n.showSubcategories=!1)}}return(t=i).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-categories"]],standalone:!0,features:[e.jDz],decls:5,vars:1,consts:[[1,"categories"],[1,"categories__container"],[1,"categories__menu-side"],[3,"mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"categories__image"],[3,"mouseenter","mouseleave"],[1,"categories__menu-title",3,"routerLink"],["class","categories__menu-links",4,"ngIf"],[1,"categories__menu-links"],[4,"ngFor","ngForOf"],[1,"categories__menu-subtitle",3,"routerLink"]],template:function(n,s){1&n&&(e.TgZ(0,"section",0)(1,"div",1)(2,"ul",2),e.YNc(3,f,4,8,"li",3),e.qZA()(),e._UZ(4,"div",4),e.qZA()),2&n&&(e.xp6(3),e.Q6J("ngForOf",s.categories))},dependencies:[a.ez,a.sg,a.O5,l.rH],styles:[".categories[_ngcontent-%COMP%]{display:flex;height:100vh;position:absolute;width:100%;top:0;left:0;z-index:2}.categories__container[_ngcontent-%COMP%]{padding:244px 80px 0;width:40%;background-color:#000}.categories__image[_ngcontent-%COMP%]{width:60%;background-color:#d9d9d9}.categories__menu-title[_ngcontent-%COMP%]{text-decoration:none;margin-bottom:12px;color:#d9d9d9;font-family:Roboto;font-size:36px;font-style:normal;font-weight:500;line-height:130%}.categories__menu-subtitle[_ngcontent-%COMP%]{margin-bottom:12px;text-decoration:none;color:#fff;font-size:22px;font-style:normal;font-weight:400;line-height:130%}"]}),i})()}}]);