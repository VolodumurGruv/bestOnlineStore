"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[652],{9652:(P,u,s)=>{s.r(u),s.d(u,{CartComponent:()=>O});var t=s(4946),d=s(2413),h=s(9862),g=s(347);let _=(()=>{var e;class r{constructor(){this.http=(0,t.f3M)(h.eN)}getCart(){this.http.get(`${g.rH.URL}/get-cart`).subscribe(n=>console.log(n))}makeOrder(n,i){this.http.post(`${g.rH.URL}/add-to-cart`,{id:n,quantity:i}).subscribe(a=>console.log(a))}}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),r})();var p=s(6814),f=s(8980),l=s(95);function m(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div",7)(1,"div",8),t._UZ(2,"img",9),t.qZA(),t.TgZ(3,"div",10)(4,"div",11)(5,"div",12),t._uU(6),t.qZA(),t.TgZ(7,"div",13),t.NdJ("click",function(){const a=t.CHM(o).$implicit,c=t.oxw(2);return t.KtG(c.delete(null==a?null:a._id))}),t.O4$(),t.TgZ(8,"svg",14),t._UZ(9,"path",15)(10,"path",16)(11,"path",17)(12,"path",18),t.qZA()()(),t.kcU(),t.TgZ(13,"div",19)(14,"div",20)(15,"span",21),t.NdJ("click",function(){const a=t.CHM(o).index,c=t.oxw(2);return t.KtG(c.decrease(a))}),t.O4$(),t.TgZ(16,"svg",22),t._UZ(17,"path",23),t.qZA()(),t.kcU(),t.TgZ(18,"input",24),t.NdJ("ngModelChange",function(i){const c=t.CHM(o).$implicit;return t.KtG(c.quantity=i)})("keyup",function(){const i=t.CHM(o),a=i.$implicit,c=i.index,k=t.oxw(2);return t.KtG(k.onKeyup(a,c))}),t.qZA(),t.TgZ(19,"span",25),t.NdJ("click",function(){const a=t.CHM(o).index,c=t.oxw(2);return t.KtG(c.increase(a))}),t.O4$(),t.TgZ(20,"svg",22),t._UZ(21,"path",26),t.qZA()()(),t.kcU(),t.TgZ(22,"div",27)(23,"p",12,28),t._uU(25),t.ALo(26,"transformPrice"),t.qZA()()()()()}if(2&e){const o=r.$implicit,n=t.oxw(2);t.xp6(2),t.Q6J("src",o.image,t.LSH),t.xp6(4),t.Oqu(o.description),t.xp6(12),t.Q6J("min",n.minQuantity)("max",n.maxQuantity)("ngModel",o.quantity),t.xp6(7),t.hij(" ",t.lcZ(26,6,o.summa)," ")}}function x(e,r){if(1&e){const o=t.EpF();t.ynx(0),t.YNc(1,m,27,8,"div",2),t.TgZ(2,"div",3)(3,"p"),t._uU(4),t.ALo(5,"transformPrice"),t.qZA()(),t.TgZ(6,"div",4)(7,"button",5),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.close())}),t._uU(8," \u041f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0438 "),t.qZA(),t.TgZ(9,"button",6),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.submit())}),t._uU(10," \u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f "),t.qZA()(),t.BQk()}if(2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.orders),t.xp6(3),t.hij("\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u0430: ",t.lcZ(5,2,o.total),"")}}const C=function(){return["/catalog"]};function y(e,r){1&e&&(t.TgZ(0,"div",29)(1,"div"),t._UZ(2,"img",30),t.qZA(),t.TgZ(3,"p",31),t._uU(4,"\u0412\u0430\u0448 \u043a\u043e\u0448\u0438\u043a \u0449\u0435 \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0439"),t.qZA(),t.TgZ(5,"a",32),t._uU(6,"\u0420\u043e\u0437\u043f\u043e\u0447\u0430\u0442\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("routerLink",t.DdM(1,C)))}let v=(()=>{var e;class r{constructor(){this.router=(0,t.f3M)(d.F0),this.route=(0,t.f3M)(d.gz),this.cartService=(0,t.f3M)(_),this.maxQuantity=100,this.minQuantity=1,this.total=0,this.prevValue=1,this.orders=[{_id:"64e7af152f011665dfd7f194",image:"https://img.freepik.com/premium-photo/blue-color-chair-product-image-web-page-scandinavian-design-clean-soft-chair-comfortable-with-copy-space-generatiev-ai_834602-16335.jpg",description:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a \u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a",quantity:1,price:5500,discount:6500,summa:5500},{_id:"64e7cd1adeff9daacd5a62e2",image:"https://img.freepik.com/premium-photo/blue-color-chair-product-image-web-page-scandinavian-design-clean-soft-chair-comfortable-with-copy-space-generatiev-ai_834602-16335.jpg",description:"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a ",quantity:1,price:5500,summa:5500}]}ngOnInit(){this.countTotal()}increase(n){this.orders[n].quantity<this.maxQuantity&&(this.orders[n].quantity+=1,this.orders[n].summa=this.orders[n].price*this.orders[n].quantity,this.prevValue=this.orders[n].quantity),this.checkQuantity(this.orders[n],n)}decrease(n){this.orders[n].quantity>this.minQuantity&&(this.orders[n].quantity-=1,this.orders[n].summa=this.orders[n].price*this.orders[n].quantity,this.prevValue=this.orders[n].quantity),this.checkQuantity(this.orders[n],n)}onKeyup(n,i){this.checkQuantity(n,i),n.quantity<=this.maxQuantity&&n.quantity>=this.minQuantity&&(this.orders[i].quantity=n.quantity,this.orders[i].summa=this.orders[i].price*n.quantity),this.countTotal()}checkQuantity(n,i){n.quantity>=this.maxQuantity&&(n.quantity=this.maxQuantity,this.orders[i].quantity=n.quantity),n.quantity<=this.minQuantity&&(n.quantity=this.minQuantity,this.orders[i].quantity=n.quantity),this.countTotal()}countTotal(){let n=0;this.orders.forEach(i=>n+=i.summa),this.total=n,console.log(this.total)}delete(n){this.orders=this.orders.filter(i=>i._id!==n),this.countTotal()}close(){this.router.navigate([{outlets:{cart:null}}],{relativeTo:this.route.parent})}submit(){this.cartService.makeOrder("64e7af152f011665dfd7f194",3)}}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cart-orders"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["isOrders",""],["class","cart__order",4,"ngFor","ngForOf"],[1,"cart__order-total"],[1,"cart__order-actions"],["type","button",1,"btn","btn__add",3,"click"],["type","button",1,"btn","btn__buy",3,"click"],[1,"cart__order"],[1,"cart__order-img"],["alt","",3,"src"],[1,"cart__order-text"],[1,"cart__order-description"],[1,"text"],[1,"btn-delete",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","25","viewBox","0 0 24 25","fill","none"],["d","M3 6.5H5H21","stroke","#DA3838","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M19 6.5V20.5C19 21.0304 18.7893 21.5391 18.4142 21.9142C18.0391 22.2893 17.5304 22.5 17 22.5H7C6.46957 22.5 5.96086 22.2893 5.58579 21.9142C5.21071 21.5391 5 21.0304 5 20.5V6.5M8 6.5V4.5C8 3.96957 8.21071 3.46086 8.58579 3.08579C8.96086 2.71071 9.46957 2.5 10 2.5H14C14.5304 2.5 15.0391 2.71071 15.4142 3.08579C15.7893 3.46086 16 3.96957 16 4.5V6.5","stroke","#DA3838","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M10 11.5V17.5","stroke","#DA3838","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M14 11.5V17.5","stroke","#DA3838","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],[1,"cart__order-data"],[1,"cart__order-amount"],[1,"decrease",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","26","height","27","viewBox","0 0 26 27","fill","none"],["d","M6.5 13.5H19.5","stroke","#676767","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],["type","number",1,"cart__input",3,"min","max","ngModel","ngModelChange","keyup"],[1,"increase",3,"click"],["d","M6.5 13.5H13M13 13.5H19.5M13 13.5V7M13 13.5V20","stroke","#676767","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],[1,"cart__order-price"],["price",""],[1,"noorders"],["src","../../../../assets/pics/png/bascket.png","alt",""],[1,"text-empty"],[1,"text-link",3,"routerLink"]],template:function(n,i){if(1&n&&(t.YNc(0,x,11,4,"ng-container",0),t.YNc(1,y,7,2,"ng-template",null,1,t.W1O)),2&n){const a=t.MAs(2);t.Q6J("ngIf",i.orders.length)("ngIfElse",a)}},dependencies:[p.ax,p.O5,f.s,l.u5,l.Fj,l.wV,l.JJ,l.qQ,l.Fd,l.On,d.rH],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Manrope&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap";@charset "UTF-8";.btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:none;background:transparent;border-radius:8px;flex-shrink:0;cursor:pointer}.btn__login[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:20px;font-weight:500;font-style:normal;line-height:130%;width:570px;height:60px;padding:16px 12px;gap:8;background:#272727;color:#fafafa}.btn__login[_ngcontent-%COMP%]:hover{box-shadow:0 4px 4px #09090966}.btn__login[_ngcontent-%COMP%]:active{box-shadow:none}.btn__buy[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:24px;font-weight:400;font-style:normal;line-height:130%;height:64px;padding:8px 16px;text-transform:uppercase;gap:8;background:#272727;color:#fff}.btn__buy[_ngcontent-%COMP%]:hover{box-shadow:0 4px 4px #09090966}.btn__buy[_ngcontent-%COMP%]:active{box-shadow:none}.btn__add[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:20px;font-weight:300;font-style:normal;line-height:130%;color:#000;height:64px;padding:16px 32px;text-transform:uppercase;gap:16px;border:1px solid #05020e;color:#05020e}.btn__add[_ngcontent-%COMP%]:hover{background:#05020e;color:#fff}.btn__add[_ngcontent-%COMP%]:active{background:transparent;color:#05020e}.btn__reply[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:22px;font-weight:400;font-style:normal;line-height:130%;color:#000;padding:16px;gap:16px;border:1px solid #646464;color:#05020e}.disabled[_ngcontent-%COMP%], .btn__add[_ngcontent-%COMP%]:disabled, .btn__reply[_ngcontent-%COMP%]:disabled{border:1px solid #949494;color:#949494;box-shadow:none;background:transparent}.disabled-grey[_ngcontent-%COMP%], .btn__login[_ngcontent-%COMP%]:disabled, .btn__buy[_ngcontent-%COMP%]:disabled{background:#949494;color:#fafafa;box-shadow:none}.cart__order-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:170px;height:122px;flex-shrink:0;background-size:cover;background-repeat:no-repeat}.cart__order[_ngcontent-%COMP%]{display:flex;width:100%;padding:8px 48px 20px 24px;align-items:center;gap:20px;border-bottom:1px solid #ababab}.cart__order-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:27px;width:100%}.cart__order-description[_ngcontent-%COMP%], .cart__order-data[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;width:100%}.cart__order-amount[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;width:auto}.cart__order-total[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;width:100%;padding:52px 48px 44px 0}.cart__input[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:20px;font-weight:400;font-style:normal;line-height:130%;color:#000;width:56px;padding:8px;text-align:center;outline:none;border-radius:2px;border:1px solid #cdcdcd;background:#fafafa}.cart__order-actions[_ngcontent-%COMP%]{display:inline-flex;justify-content:space-between;align-items:center;width:100%;padding-left:24px;padding-right:48px}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.text[_ngcontent-%COMP%], .cart__order-total[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:18px;font-weight:400;font-style:normal;line-height:130%}.btn__close[_ngcontent-%COMP%], .btn-delete[_ngcontent-%COMP%], .increase[_ngcontent-%COMP%], .decrease[_ngcontent-%COMP%]{cursor:pointer}.noorders[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px}.noorders[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding-bottom:12px}.text-empty[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:48px;font-weight:500;font-style:normal;line-height:normal;color:#000}.text-link[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:18px;font-weight:500;font-style:normal;line-height:130%;text-decoration:underline;color:#000;cursor:pointer}']}),r})();var w=s(2239);function b(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div",4)(1,"div",5),t._UZ(2,"img",6),t.TgZ(3,"div",7),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.addToFavorite())}),t.O4$(),t.TgZ(4,"svg",8),t._UZ(5,"path",9),t.qZA(),t.TgZ(6,"svg",10),t._UZ(7,"path",11),t.qZA()()(),t.kcU(),t.TgZ(8,"div",12)(9,"div",13),t._uU(10),t.qZA(),t.TgZ(11,"div",14),t._uU(12,"\u0417\u0430\u043b\u0438\u0448\u0438\u0442\u0438 \u0432\u0456\u0434\u0433\u0443\u043a"),t.qZA(),t.TgZ(13,"div",15),t._uU(14),t.ALo(15,"transformPrice"),t.qZA()()()}if(2&e){const o=r.$implicit;t.xp6(2),t.Q6J("src",o.baseImage,t.LSH)("alt",o.shortDescr),t.xp6(8),t.hij(" ",o.name," "),t.xp6(4),t.Oqu(t.lcZ(15,4,5500))}}let M=(()=>{var e;class r{constructor(){this.productService=(0,t.f3M)(w.s)}ngOnInit(){this.productService.getProductsApi().subscribe(n=>{console.log(n),this.advs=n.products})}addToFavorite(){}}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cart-ad"]],standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"adv"],[1,"adv__title"],[1,"adv__wrap"],["class","adv__body",4,"ngFor","ngForOf"],[1,"adv__body"],[1,"adv__body-wrap"],[1,"adv__img",3,"src","alt"],[1,"like-wrap",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none",1,"like"],["d","M16.6875 3.375C14.6775 3.375 12.945 4.33031 12 5.91281C11.055 4.33031 9.3225 3.375 7.3125 3.375C5.87092 3.37674 4.48888 3.95017 3.46952 4.96952C2.45017 5.98888 1.87674 7.37092 1.875 8.8125C1.875 11.4928 3.5625 14.2941 6.88125 17.1366C8.4136 18.4405 10.0681 19.5937 11.8219 20.58C11.8766 20.6095 11.9378 20.625 12 20.625C12.0622 20.625 12.1234 20.6095 12.1781 20.58C13.9319 19.5937 15.5864 18.4405 17.1188 17.1366C20.4375 14.2941 22.125 11.4928 22.125 8.8125C22.1233 7.37092 21.5498 5.98888 20.5305 4.96952C19.5111 3.95017 18.1291 3.37674 16.6875 3.375ZM12 19.8206C10.6875 19.0744 2.625 14.2566 2.625 8.8125C2.62649 7.56975 3.12083 6.37834 3.99958 5.49958C4.87834 4.62083 6.06975 4.12649 7.3125 4.125C9.29156 4.125 10.9547 5.18531 11.6531 6.89156C11.6814 6.96034 11.7294 7.01917 11.7912 7.06057C11.853 7.10197 11.9256 7.12408 12 7.12408C12.0744 7.12408 12.147 7.10197 12.2088 7.06057C12.2706 7.01917 12.3186 6.96034 12.3469 6.89156C13.0453 5.18531 14.7084 4.125 16.6875 4.125C17.9302 4.12649 19.1217 4.62083 20.0004 5.49958C20.8792 6.37834 21.3735 7.56975 21.375 8.8125C21.375 14.25 13.3125 19.0744 12 19.8206Z","fill","#A36D08"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none",1,"like-hover"],["d","M22.5 8.8125C22.5 15.375 12.7697 20.6869 12.3553 20.9062C12.2461 20.965 12.124 20.9958 12 20.9958C11.876 20.9958 11.7539 20.965 11.6447 20.9062C11.2303 20.6869 1.5 15.375 1.5 8.8125C1.50174 7.27146 2.11468 5.79404 3.20436 4.70436C4.29404 3.61468 5.77146 3.00174 7.3125 3C9.24844 3 10.9434 3.8325 12 5.23969C13.0566 3.8325 14.7516 3 16.6875 3C18.2285 3.00174 19.706 3.61468 20.7956 4.70436C21.8853 5.79404 22.4983 7.27146 22.5 8.8125Z","fill","#A36D08"],[1,"adv__text"],[1,"adv__description"],[1,"adv__review"],[1,"adv__price"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"\u0412\u0430\u043c \u043c\u043e\u0436\u0435 \u0441\u043f\u043e\u0434\u043e\u0431\u0430\u0442\u0438\u0441\u044f:"),t.qZA(),t.TgZ(3,"div",2),t.YNc(4,b,16,6,"div",3),t.qZA()()),2&n&&(t.xp6(4),t.Q6J("ngForOf",i.advs))},dependencies:[p.ax,f.s],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Manrope&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap";.adv[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;gap:16px;padding:58px 16px 16px 24px}.adv__title[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:32px;font-weight:500;font-style:normal;line-height:130%;color:#000}.adv__img[_ngcontent-%COMP%]{width:214px;height:214px;flex-shrink:0;background-size:cover;background-repeat:no-repeat;padding-bottom:28px}.adv__wrap[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:flex-start;gap:28px}.adv__body[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.adv__text[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:8px}.adv__description[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:130%;color:#000}.adv__review[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:12px;font-weight:400;font-style:normal;line-height:130%;color:#000;color:#949494;cursor:pointer}.adv__review[_ngcontent-%COMP%]:hover{color:#000}.adv__price[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:18px;font-weight:400;font-style:normal;line-height:130%}.adv__body-wrap[_ngcontent-%COMP%]{position:relative}.like[_ngcontent-%COMP%], .like-hover[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px}.like-hover[_ngcontent-%COMP%]{opacity:0;transition:opacity .3s ease}.like-wrap[_ngcontent-%COMP%]{cursor:pointer}.like-wrap[_ngcontent-%COMP%]:hover   .like-hover[_ngcontent-%COMP%]{opacity:1}']}),r})(),O=(()=>{var e;class r{constructor(){this.router=(0,t.f3M)(d.F0),this.route=(0,t.f3M)(d.gz)}close(){this.router.navigate([{outlets:{cart:null}}],{relativeTo:this.route.parent})}}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cart"]],standalone:!0,features:[t._Bn([{provide:_}]),t.jDz],decls:12,vars:0,consts:[[1,"shadow"],[1,"cart"],[1,"cart__wrap"],[1,"cart__title"],[1,"cart__title-text"],[1,"btn__close",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","44","height","45","viewBox","0 0 44 45","fill","none"],["d","M12.833 13.3333L31.1663 31.6667M12.833 31.6667L31.1663 13.3333","stroke","black","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],[1,"cart__orders"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4),t._uU(5,"\u041a\u043e\u0448\u0438\u043a"),t.qZA(),t.TgZ(6,"div",5),t.NdJ("click",function(){return i.close()}),t.O4$(),t.TgZ(7,"svg",6),t._UZ(8,"path",7),t.qZA()()(),t.kcU(),t.TgZ(9,"div",8),t._UZ(10,"app-cart-orders",8),t.qZA(),t._UZ(11,"app-cart-ad"),t.qZA()()())},dependencies:[v,M],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Manrope&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap";.shadow[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100vw;height:100vh;overflow-x:hidden;background:rgba(0,0,0,.2);z-index:300}.cart[_ngcontent-%COMP%]{width:984px;height:1132px;flex-shrink:0;overflow-x:auto;background:#fafafa;z-index:400}.cart__orders[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;margin:0;align-items:center}.cart__title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:984px;padding:20px 48px 8px 24px;border-bottom:1px solid #ababab}.cart__title-text[_ngcontent-%COMP%]{font-family:Manrope,sans-serif;font-size:36px;font-weight:500;font-style:normal;line-height:normal;color:#000}.cart__order-actions[_ngcontent-%COMP%]{display:inline-flex;justify-content:space-between;align-items:center;width:100%;padding-left:16px;padding-right:26px}.btn__close[_ngcontent-%COMP%]{cursor:pointer}.cart__btn[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:18px;font-weight:400;font-style:normal;line-height:130%;color:#000;display:flex;padding:14px 8px;justify-content:center;align-items:center;gap:8px;border:1px solid #636363;border-radius:8px;color:#1a1a1a}.cart__btn-dark-grey[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:20px;font-weight:400;font-style:normal;line-height:130%;color:#000;display:flex;padding:16px 12px;justify-content:center;align-items:center;gap:8px;border:none;border-radius:8px;background:#4f4f4f;color:#fafafa}']}),r})()}}]);