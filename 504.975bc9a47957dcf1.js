"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[504],{6504:(m,u,i)=>{i.r(u),i.d(u,{CATALOG_ROUTING:()=>w});var s=i(6895),t=i(8256);let p=(()=>{var e;class o{}return(e=o).\u0275fac=function(r){return new(r||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product"]],standalone:!0,features:[t.jDz],decls:2,vars:0,template:function(r,n){1&r&&(t.TgZ(0,"p"),t._uU(1,"product works!"),t.qZA())},dependencies:[s.ez]}),o})();var d=i(5600);function k(e,o){1&e&&(t.TgZ(0,"span",10),t._uU(1,"\u0410\u043a\u0446\u0456\u044f"),t.qZA())}function l(e,o){if(1&e&&t._UZ(0,"img",11),2&e){const c=t.oxw();t.s9C("alt",c.product.name),t.Q6J("src",c.product.image,t.LSH)}}function h(e,o){1&e&&t._UZ(0,"div",12)}function b(e,o){if(1&e&&(t.TgZ(0,"p",13),t._uU(1),t.qZA()),2&e){const c=t.oxw();t.xp6(1),t.hij(" ",c.formatPrice(.8*c.product.price)," ")}}const f=function(e){return{"product-card__crossed-price":e}};let _=(()=>{var e;class o{formatPrice(r){return new Intl.NumberFormat("uk-UA",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}).format(r)+" \u20b4"}}return(e=o).\u0275fac=function(r){return new(r||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-product-card"]],inputs:{product:"product"},standalone:!0,features:[t.jDz],decls:12,vars:10,consts:[[1,"product-card"],[1,"product-card__caption"],["class","product-card__action",4,"ngIf"],[1,"product-card__picture"],["type","image/webp",3,"srcset"],["class","product-card__image",3,"src","alt",4,"ngIf"],["class","product-card__placeholder",4,"ngIf"],[1,"product-card__name"],["class","product-card__sale",4,"ngIf"],[1,"product-card__price",3,"ngClass"],[1,"product-card__action"],[1,"product-card__image",3,"src","alt"],[1,"product-card__placeholder"],[1,"product-card__sale"]],template:function(r,n){1&r&&(t.TgZ(0,"figure",0)(1,"figcaption",1),t.YNc(2,k,2,0,"span",2),t.TgZ(3,"picture",3),t._UZ(4,"source",4),t.YNc(5,l,1,2,"img",5),t.YNc(6,h,1,0,"div",6),t.qZA(),t.TgZ(7,"h3",7),t._uU(8),t.qZA(),t.YNc(9,b,2,1,"p",8),t.TgZ(10,"p",9),t._uU(11),t.qZA()()()),2&r&&(t.xp6(2),t.Q6J("ngIf",n.product.sale),t.xp6(2),t.Q6J("srcset",n.product.image),t.xp6(1),t.Q6J("ngIf",n.product.image),t.xp6(1),t.Q6J("ngIf",!n.product.image),t.xp6(2),t.Oqu(n.product.name),t.xp6(1),t.Q6J("ngIf",n.product.sale),t.xp6(1),t.Q6J("ngClass",t.VKq(8,f,n.product.sale)),t.xp6(1),t.Oqu(n.formatPrice(n.product.price)))},dependencies:[s.ez,s.mk,s.O5],styles:[".product-card[_ngcontent-%COMP%]{position:relative;max-width:360px;text-align:center;font-family:Roboto;line-height:130%}.product-card__action[_ngcontent-%COMP%]{position:absolute;right:0;top:0;color:#fff;padding:8px 12px;background-color:#4b4b4b}.product-card__image[_ngcontent-%COMP%], .product-card__placeholder[_ngcontent-%COMP%]{width:360px;height:360px;object-fit:contain;background-color:#d9d9d9;margin-bottom:32px}.product-card__name[_ngcontent-%COMP%]{font-size:18px;font-weight:400;margin-bottom:8px}.product-card__sale[_ngcontent-%COMP%], .product-card__price[_ngcontent-%COMP%]{font-size:20px}.product-card__crossed-price[_ngcontent-%COMP%]{color:#da3838;font-size:16px;text-decoration:line-through}"]}),o})();var y=i(4736);function v(e,o){if(1&e&&(t.TgZ(0,"div"),t._UZ(1,"app-product-card",7),t.qZA()),2&e){const c=o.$implicit;t.xp6(1),t.Q6J("product",c)}}const w=[{path:"catalog",loadComponent:()=>i.e(16).then(i.bind(i,7016)).then(e=>e.CategoriesComponent)},{path:"catalog/:id",component:(()=>{var e;class o{constructor(r){this.route=r}ngOnInit(){this.route.url.subscribe(r=>{const n=r[r.length-1].path,g=d.F.flatMap(a=>a.subcategories||[]).find(a=>a?.routerLink===n);if(g){const a=d.F.find(I=>I.subcategories?.includes(g));a&&(this.categoryName=a.name,this.subcategory=g,console.log(this.subcategory))}})}}return(e=o).\u0275fac=function(r){return new(r||e)(t.Y36(y.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-products"]],standalone:!0,features:[t.jDz],decls:11,vars:3,consts:[[1,"products"],[1,"products__path"],[1,"products__title"],["href","#",1,"products__cards-sort"],["href","#",1,"products__cards-filter"],[1,"products__cards"],[4,"ngFor","ngForOf"],[3,"product"]],template:function(r,n){1&r&&(t.TgZ(0,"section",0)(1,"p",1),t._uU(2),t.qZA(),t.TgZ(3,"h2",2),t._uU(4),t.qZA(),t.TgZ(5,"a",3),t._uU(6,"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438"),t.qZA(),t.TgZ(7,"a",4),t._uU(8,"\u0424\u0456\u043b\u044c\u0442\u0440\u0438"),t.qZA(),t.TgZ(9,"div",5),t.YNc(10,v,2,1,"div",6),t.qZA()()),2&r&&(t.xp6(2),t.Oqu("\u041a\u0430\u0442\u0430\u043b\u043e\u0433 / "+n.categoryName+" / "+n.subcategory.name),t.xp6(2),t.Oqu(n.subcategory.name),t.xp6(6),t.Q6J("ngForOf",n.subcategory.products))},dependencies:[s.ez,s.sg,_],styles:['.products[_ngcontent-%COMP%]{max-width:1688px;margin:0 auto}.products__path[_ngcontent-%COMP%]{text-align:center;color:#797979;font-family:Roboto;font-size:20px;font-weight:400;line-height:130%}.products__title[_ngcontent-%COMP%]{padding:52px 0 90px;text-align:center;color:#000;font-family:Roboto;font-size:40px;font-style:normal;font-weight:500;line-height:130%}.products__cards-sort[_ngcontent-%COMP%], .products__cards-filter[_ngcontent-%COMP%]{margin-bottom:25px;position:relative;padding-left:40px;display:inline-block;text-decoration:none;color:#000;font-family:Roboto;font-size:26px;font-style:normal;font-weight:400;line-height:normal}.products__cards-sort[_ngcontent-%COMP%]:before, .products__cards-filter[_ngcontent-%COMP%]:before{content:"";width:32px;height:32px;position:absolute;left:0;top:50%;transform:translateY(-50%);background-repeat:no-repeat;background-size:contain}.products__cards-sort[_ngcontent-%COMP%]:before{background-image:url(ic_round-sort.5580297f763e157c.svg)}.products__cards-filter[_ngcontent-%COMP%]:before{background-image:url(mi_filter.f12f9192e43a68db.svg)}.products__cards-sort[_ngcontent-%COMP%]{margin-right:90px}.products__cards[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:80px}']}),o})()},{path:"product/:id",component:p}]},5600:(m,u,i)=>{i.d(u,{F:()=>s});const s=[{id:1,name:"\u041c\u0435\u0431\u043b\u0456",routerLink:"furniture",showSubcategories:!1,subcategories:[{id:11,name:"\u0421\u0442\u043e\u043b\u0438",routerLink:"tables",products:[{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2,sale:!0},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2,sale:!0},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2,sale:!0},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2,sale:!0}]},{id:12,name:"\u041f\u0443\u0444\u0438",routerLink:"ottomans",products:[{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2}]},{id:13,name:"\u0421\u0442\u0456\u043b\u044c\u0446\u0456",routerLink:"chairs",products:[{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2}]},{id:14,name:"\u041a\u0440\u0456\u0441\u043b\u0430",routerLink:"armchairs",products:[{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2}]},{id:15,name:"\u041b\u0456\u0436\u043a\u0430",routerLink:"beds",products:[{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2}]},{id:16,name:"\u0414\u0438\u0432\u0430\u043d\u0438",routerLink:"sofas",products:[{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2}]},{id:17,name:"\u0421\u0442\u0435\u043b\u0430\u0436\u0456",routerLink:"shelves",products:[{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2}]},{id:18,name:"\u0422\u0443\u043c\u0431\u0438",routerLink:"nightstands",products:[{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2}]},{id:19,name:"\u041a\u043e\u043c\u043e\u0434\u0438",routerLink:"dressers",products:[{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2},{name:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",descr:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a: \u0424\u0440\u0430\u043d\u0446\u0456\u044f",shortDescr:"\u041c\u043e\u0434\u0435\u043b\u044c: 06-00486",price:6500,image:"",brand:"\u0424\u0440\u0430\u043d\u0446\u0456\u044f",category:"string",instock:!0,countInStock:2,raiting:2,numReviews:2}]}]},{id:2,name:"\u041e\u0441\u0432\u0456\u0442\u043b\u0435\u043d\u043d\u044f",routerLink:"lighting",showSubcategories:!1,subcategories:[{id:21,name:"\u041b\u044e\u0441\u0442\u0440\u0438",routerLink:"chandeliers"},{id:22,name:"\u041b\u0430\u043c\u043f\u0438",routerLink:"lamps"}]},{id:3,name:"\u0421\u0430\u043d\u0442\u0435\u0445\u043d\u0456\u043a\u0430",routerLink:"plumbing",showSubcategories:!1,subcategories:[{id:31,name:"\u0412\u0430\u043d\u043d\u0438",routerLink:"bathtubs"},{id:32,name:"\u0414\u0443\u0448\u0456",routerLink:"showers"}]},{id:4,name:"\u0410\u043a\u0441\u0435\u0441\u0443\u0430\u0440\u0438",routerLink:"accessories",showSubcategories:!1,subcategories:[{id:41,name:"\u041f\u043e\u0434\u0443\u0448\u043a\u0438",routerLink:"cushions"},{id:42,name:"\u041a\u0438\u043b\u0438\u043c\u0438",routerLink:"rugs"}]},{id:5,name:"\u0406\u043d\u0448\u0435",routerLink:"other",showSubcategories:!1,subcategories:[{id:51,name:"\u0414\u0435\u043a\u043e\u0440",routerLink:"decor"},{id:52,name:"\u041f\u043e\u0441\u0443\u0434",routerLink:"tableware"}]}]}}]);