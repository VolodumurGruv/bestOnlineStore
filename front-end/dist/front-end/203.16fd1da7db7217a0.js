"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[203],{3649:(x,f,r)=>{r.r(f),r.d(f,{HomePageComponent:()=>b});var p=r(6814),t=r(4946);const u=function(e){return{active:e}};function m(e,c){if(1&e&&(t.TgZ(0,"div",10),t._UZ(1,"img",11),t.qZA()),2&e){const o=c.$implicit,n=c.index,s=t.oxw();t.Q6J("ngClass",t.VKq(3,u,n===s.slideIndex)),t.xp6(1),t.Q6J("src",o.url,t.LSH)("alt",o.alt)}}const i=function(e){return{"active-dot":e}};function v(e,c){if(1&e){const o=t.EpF();t.TgZ(0,"span",12),t.NdJ("click",function(){const h=t.CHM(o).index,k=t.oxw();return t.KtG(k.goToSlide(h))}),t.qZA()}if(2&e){const o=c.index,n=t.oxw();t.Q6J("ngClass",t.VKq(1,i,o===n.slideIndex))}}let C=(()=>{var e;class c{constructor(){this.photos=[{url:"assets/pics/png/carusel1.jpg",alt:""},{url:"assets/pics/png/carusel2.jpg",alt:""},{url:"assets/pics/png/carusel3.jpg",alt:""},{url:"assets/pics/png/carusel4.jpg",alt:""}],this.slideIndex=0,this.isMouseOverSlide=!1}ngOnInit(){this.startAutoPlay()}ngOnDestroy(){this.stopAutoPlay()}nextSlide(){this.slideIndex=(this.slideIndex+1)%this.photos.length}prevSlide(){this.slideIndex=(this.slideIndex-1+this.photos.length)%this.photos.length}goToSlide(n){this.slideIndex=n}startAutoPlay(){this.autoPlayInterval=setInterval(()=>{this.isMouseOverSlide||this.nextSlide()},7e3)}stopAutoPlay(){clearInterval(this.autoPlayInterval)}handleMouseEnter(){this.isMouseOverSlide=!0,this.stopAutoPlay()}handleMouseLeave(){this.isMouseOverSlide=!1,this.startAutoPlay()}}return(e=c).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-carousel"]],standalone:!0,features:[t.jDz],decls:11,vars:2,consts:[[1,"carousel",3,"mouseenter","mouseleave"],[1,"arrow","arrow-left",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","48","height","48","viewBox","0 0 48 48","fill","none"],["d","M30 36L18 24L30 12","stroke","#05020E","stroke-linecap","round","stroke-linejoin","round"],[1,"slide-container"],["class","slide",3,"ngClass",4,"ngFor","ngForOf"],[1,"arrow","arrow-right",3,"click"],["d","M18 36L30 24L18 12","stroke","#05020E","stroke-linecap","round","stroke-linejoin","round"],[1,"dots"],["class","dot",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"slide",3,"ngClass"],[3,"src","alt"],[1,"dot",3,"ngClass","click"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0),t.NdJ("mouseenter",function(){return s.handleMouseEnter()})("mouseleave",function(){return s.handleMouseLeave()}),t.TgZ(1,"a",1),t.NdJ("click",function(){return s.prevSlide()}),t.O4$(),t.TgZ(2,"svg",2),t._UZ(3,"path",3),t.qZA()(),t.kcU(),t.TgZ(4,"div",4),t.YNc(5,m,2,5,"div",5),t.qZA(),t.TgZ(6,"a",6),t.NdJ("click",function(){return s.nextSlide()}),t.O4$(),t.TgZ(7,"svg",2),t._UZ(8,"path",7),t.qZA()()(),t.kcU(),t.TgZ(9,"div",8),t.YNc(10,v,1,3,"span",9),t.qZA()),2&n&&(t.xp6(5),t.Q6J("ngForOf",s.photos),t.xp6(5),t.Q6J("ngForOf",s.photos))},dependencies:[p.ez,p.mk,p.sg],styles:[".carousel[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:relative}.slide-container[_ngcontent-%COMP%]{position:relative;width:1166px;height:740px;overflow:hidden}.slide[_ngcontent-%COMP%]{opacity:0;position:absolute;top:0;left:0;transition:opacity .5s;width:100%;height:100%}.slide.active[_ngcontent-%COMP%]{opacity:1}.arrow[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);width:48px;height:48px;display:flex;justify-content:center;align-items:center;cursor:pointer;fill:#05020e;background-color:#ffffff80;border-radius:50%;transition:background-color .3s}.arrow-left[_ngcontent-%COMP%]{left:0}.arrow-right[_ngcontent-%COMP%]{right:0}.arrow[_ngcontent-%COMP%]:hover{background-color:#fffc}.dots[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:24px;gap:16px}.dot[_ngcontent-%COMP%]{display:inline-block;width:15px;height:15px;border:1px solid #000;border-radius:50%;cursor:pointer;transition:all .3s ease}.active-dot[_ngcontent-%COMP%]{background-color:#000}"]}),c})(),l=(()=>{var e;class c{}return(e=c).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-advices"]],standalone:!0,features:[t.jDz],decls:8,vars:0,consts:[[1,"advices__container"],[1,"advices__title"],[1,"advices__images"],[1,"temp__image__wide","temp__image-one"],[1,"temp__image","temp__image-two"],[1,"temp__image","temp__image-three"],[1,"temp__image__wide","temp__image-four"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"\u041f\u043e\u0440\u0430\u0434\u0438 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0430"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6),t.qZA()())},dependencies:[p.ez],styles:[".advices__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.advices__title[_ngcontent-%COMP%]{margin-bottom:100px;font-size:40px;font-style:normal;font-weight:400;line-height:130%;color:#000}.advices__images[_ngcontent-%COMP%]{display:flex;width:100%;flex-wrap:wrap;gap:100px;justify-content:space-between;align-items:center}.temp__image[_ngcontent-%COMP%]{width:28%;height:471px;background-color:#d9d9d9}.temp__image__wide[_ngcontent-%COMP%]{width:64%;height:471px;background-color:#d9d9d9}.temp__image-one[_ngcontent-%COMP%]{background-image:url(advice1.89425923895f6182.jpg)}.temp__image-two[_ngcontent-%COMP%]{background-image:url(advice2.1646ed701f391919.jpg)}.temp__image-three[_ngcontent-%COMP%]{background-image:url(advice4.7a62a38a0998ad15.jpg)}.temp__image-four[_ngcontent-%COMP%]{background-image:url(advice3.eee36675a044aa7b.jpg)}"]}),c})();var d=r(7875),P=r(2239),a=r(7398);function g(e,c){1&e&&t._UZ(0,"app-product-card",2),2&e&&t.Q6J("product",c.$implicit)}let _=(()=>{var e;class c{constructor(){this.productService=(0,t.f3M)(P.s)}ngOnInit(){this.unSub=this.productService.getAllProducts().pipe((0,a.U)(n=>this.products=n.slice(0,3))).subscribe()}ngOnDestroy(){this.unSub&&this.unSub.unsubscribe()}}return(e=c).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card"]],inputs:{product:"product"},standalone:!0,features:[t.jDz],decls:2,vars:1,consts:[[1,"card__wrap"],[3,"product",4,"ngFor","ngForOf"],[3,"product"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0),t.YNc(1,g,1,1,"app-product-card",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",s.products))},dependencies:[p.ez,p.sg,d.Y],styles:[".top[_ngcontent-%COMP%], .advices[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%], .new[_ngcontent-%COMP%]{padding:80px 0}.top__box[_ngcontent-%COMP%], .advices__box[_ngcontent-%COMP%], .actions__box[_ngcontent-%COMP%], .new__box[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.card__wrap[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start}.card__title[_ngcontent-%COMP%]{margin-top:32px;text-align:center;font-size:18px;font-style:normal;font-weight:400;line-height:130%;color:#000}.card__price[_ngcontent-%COMP%]{text-align:center;font-size:20px;font-style:normal;font-weight:400;line-height:130%;color:#000}.card__price__discount[_ngcontent-%COMP%]{text-align:center;font-size:16px;font-style:normal;font-weight:400;line-height:130%;text-decoration-line:line-through;color:#da3838}"]}),c})();var O=r(7394),y=r(180);function w(e,c){if(1&e){const o=t.EpF();t.ynx(0),t.TgZ(1,"section",2),t._UZ(2,"app-carousel"),t.qZA(),t.TgZ(3,"section",3)(4,"div",4),t._uU(5,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0435"),t.qZA(),t._UZ(6,"app-card",5),t.TgZ(7,"div",6)(8,"button",7),t.NdJ("click",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.redirect("/catalog"))}),t._uU(9," \u041f\u0415\u0420\u0415\u0419\u0422\u0418 \u0412 \u041a\u0410\u0422\u0410\u041b\u041e\u0413 "),t.qZA()()(),t.TgZ(10,"section",8)(11,"div",4),t._uU(12,"\u041d\u043e\u0432\u0438\u043d\u043a\u0438"),t.qZA(),t._UZ(13,"app-card",9),t.TgZ(14,"div",6)(15,"button",7),t.NdJ("click",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.redirect("/catalog"))}),t._uU(16," \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0432\u0441\u0456 "),t.qZA()()(),t.TgZ(17,"section",10)(18,"div",4),t._uU(19,"\u0410\u043a\u0446\u0456\u0457"),t.qZA(),t._UZ(20,"app-card",11),t.TgZ(21,"div",6)(22,"button",7),t.NdJ("click",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.redirect("/sales"))}),t._uU(23," \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0432\u0441\u0456 "),t.qZA()()(),t.TgZ(24,"section",12),t._UZ(25,"app-advices",13),t.qZA(),t.BQk()}if(2&e){const o=t.oxw();t.xp6(6),t.Q6J("product",o.products),t.xp6(7),t.Q6J("product",o.products),t.xp6(7),t.Q6J("product",o.products)}}function M(e,c){1&e&&(t.TgZ(0,"div",14),t._uU(1,"Loading..."),t.qZA())}let b=(()=>{var e;class c{constructor(n,s){this.router=n,this.productService=s,this.unSub=new O.w0}ngOnInit(){this.unSub.add(this.productService.getAllProducts().subscribe(n=>this.products=n))}redirect(n,s){this.router.navigate(s?[n,s]:[n])}ngOnDestroy(){this.unSub.unsubscribe()}}return(e=c).\u0275fac=function(n){return new(n||e)(t.Y36(y.F0),t.Y36(P.s))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home-page"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[1,"carousel","wrapper"],[1,"top","wrapper"],[1,"top__title"],[1,"top__box",3,"product"],[1,"top__btn"],[1,"btn","btn__add","btn__card",3,"click"],[1,"new","wrapper"],[1,"new__box",3,"product"],[1,"actions","wrapper"],[1,"actions__box",3,"product"],[1,"advices","wrapper"],[1,"advices__box"],[1,"wrapper"]],template:function(n,s){if(1&n&&(t.YNc(0,w,26,3,"ng-container",0),t.YNc(1,M,2,0,"ng-template",null,1,t.W1O)),2&n){const h=t.MAs(2);t.Q6J("ngIf",null==s.products?null:s.products.length)("ngIfElse",h)}},dependencies:[p.ez,p.O5,C,l,_],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Manrope&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap";.name[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:70px 0 32px}.name__shop[_ngcontent-%COMP%]{font-family:Satisfy,cursive;margin:0;font-size:52px;font-style:normal;font-weight:400;line-height:130%;color:#000}.top__title[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:40px;font-weight:500;font-style:normal;line-height:130%;text-align:center;color:#000}.top[_ngcontent-%COMP%], .new[_ngcontent-%COMP%], .carousel[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%], .advices[_ngcontent-%COMP%]{padding:80px 0}.carousel[_ngcontent-%COMP%]{padding-top:0}.top[_ngcontent-%COMP%], .new[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%], .advices[_ngcontent-%COMP%], .top__btn[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:100px}.btn__card[_ngcontent-%COMP%]{margin:0 auto;width:274px}']}),c})()},6189:(x,f,r)=>{r.d(f,{F:()=>p});const p=[{name:"\u041c\u0435\u0431\u043b\u0456",routerLink:"furniture",showSubcategories:!1,srcImg:"./assets/pics/png/catalog-menu/furniture.jpg",subcategories:[{name:"\u0421\u0442\u043e\u043b\u0438",routerLink:"tables",srcImg:"./assets/pics/png/catalog-menu/tables.jpg"},{name:"\u041f\u0443\u0444\u0438",routerLink:"ottomans",srcImg:"./assets/pics/png/catalog-menu/ottomans.jpg"},{name:"\u0421\u0442\u0456\u043b\u044c\u0446\u0456",routerLink:"chairs",srcImg:"./assets/pics/png/catalog-menu/chairs.jpg"},{name:"\u041a\u0440\u0456\u0441\u043b\u0430",routerLink:"armchairs",srcImg:"./assets/pics/png/catalog-menu/armchairs.jpg"},{name:"\u041b\u0456\u0436\u043a\u0430",routerLink:"beds",srcImg:"./assets/pics/png/catalog-menu/beds.jpg"},{name:"\u0414\u0438\u0432\u0430\u043d\u0438",routerLink:"sofas",srcImg:"./assets/pics/png/catalog-menu/sofas.jpg"},{name:"\u0421\u0442\u0435\u043b\u0430\u0436\u0456",routerLink:"racks",srcImg:"./assets/pics/png/catalog-menu/racks.jpg"},{name:"\u0422\u0443\u043c\u0431\u0438",routerLink:"nightstands",srcImg:"./assets/pics/png/catalog-menu/nightstands.jpg"}]},{name:"\u0421\u0430\u043d\u0442\u0435\u0445\u043d\u0456\u043a\u0430",routerLink:"plumbing",showSubcategories:!1,srcImg:"./assets/pics/png/catalog-menu/plumbing.jpg",subcategories:[{name:"\u0412\u0430\u043d\u043d\u0438",routerLink:"bathtubs",srcImg:"./assets/pics/png/catalog-menu/bathtubs.jpg"},{name:"\u0411\u0456\u0434\u0435",routerLink:"bide",srcImg:"./assets/pics/png/catalog-menu/bide.jpg"},{name:"\u0423\u043c\u0438\u0432\u0430\u043b\u044c\u043d\u0438\u043a\u0438",routerLink:"washbasins",srcImg:"./assets/pics/png/catalog-menu/washbasins.jpg"}]},{name:"\u041e\u0441\u0432\u0456\u0442\u043b\u0435\u043d\u043d\u044f",routerLink:"lighting",showSubcategories:!1,srcImg:"./assets/pics/png/catalog-menu/lighting.jpg",subcategories:[{name:"\u0422\u043e\u0440\u0448\u0435\u0440\u0438",routerLink:"floorlamps",srcImg:"./assets/pics/png/catalog-menu/floorlamps.jpg"},{name:"\u041d\u0430\u0441\u0442\u0456\u043b\u044c\u043d\u0456 \u043b\u0430\u043c\u043f\u0438",routerLink:"tablelamps",srcImg:"./assets/pics/png/catalog-menu/tablelamps.jpg"},{name:"\u041b\u044e\u0441\u0442\u0440\u0438",routerLink:"chandeliers",srcImg:"./assets/pics/png/catalog-menu/chandeliers.jpg"}]},{name:"\u0410\u043a\u0441\u0435\u0441\u0443\u0430\u0440\u0438",routerLink:"accessories",showSubcategories:!1,srcImg:"./assets/pics/png/catalog-menu/accessories.jpg",subcategories:[{name:"\u0414\u0437\u0435\u0440\u043a\u0430\u043b\u0430",routerLink:"mirrors",srcImg:"./assets/pics/png/catalog-menu/mirrors.jpg"},{name:"\u0412\u0456\u0448\u0430\u043a\u0438",routerLink:"hangers",srcImg:"./assets/pics/png/catalog-menu/hangers.jpg"},{name:"\u041f\u043e\u043b\u0438\u0447\u043a\u0438",routerLink:"shelves",srcImg:"./assets/pics/png/catalog-menu/shelves.jpg"}]},{name:"\u0406\u043d\u0448\u0435",routerLink:"other",showSubcategories:!1,srcImg:"./assets/pics/png/catalog-menu/other.jpg",subcategories:[{name:"\u041f\u043e\u0434\u0443\u0448\u043a\u0438",routerLink:"pillows",srcImg:"./assets/pics/png/catalog-menu/blankets.jpg"},{name:"\u041a\u043e\u0432\u0434\u0440\u0438",routerLink:"blankets",srcImg:"./assets/pics/png/catalog-menu/pillows.jpg"}]}]},2476:(x,f,r)=>{r.d(f,{o:()=>m});var p=r(6814),t=r(4946);const u=function(i){return{fill:i}};let m=(()=>{var i;class v{constructor(){this.path="",this.viewBox="",this.fill=""}ngOnInit(){this.link=`assets/pics/svg/${this.path}.svg#${this.path}`}}return(i=v).\u0275fac=function(l){return new(l||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-icon"]],hostVars:2,hostBindings:function(l,d){2&l&&t.Udp("-webkit-mask-image",d.link)},inputs:{path:"path",size:"size",viewBox:"viewBox",fill:"fill",i:"i",rating:"rating"},standalone:!0,features:[t.jDz],decls:3,vars:7,consts:[["xmlns","http://www.w3.org/2000/svg","fill","none"],["points","8,10 5,5 23,70 16,12 28,2",3,"ngStyle"]],template:function(l,d){1&l&&(t.O4$(),t.TgZ(0,"svg",0),t._UZ(1,"polygon",1)(2,"use"),t.qZA()),2&l&&(t.Akn(d.size),t.xp6(1),t.Q6J("ngStyle",t.VKq(5,u,d.i<d.rating?"yellow":"none")),t.xp6(1),t.uIk("href",d.link,null,"xlink")("href",d.link))},dependencies:[p.ez,p.PC],styles:["svg[_ngcontent-%COMP%]{width:inherit;height:inherit}"]}),v})()},2239:(x,f,r)=>{r.d(f,{s:()=>C});var p=r(4946),t=r(9862),u=r(347),m=r(7398),i=r(6306),v=r(4009);let C=(()=>{var l;class d{constructor(){this.http=(0,p.f3M)(t.eN),this.errorHandler=(0,p.f3M)(v.G)}getAllProducts(){return this.http.get(`${u.rH.URL}/product`).pipe((0,m.U)(a=>a.payload?.products),(0,i.K)(this.errorHandler.handleError("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0434\u0430\u043d\u0456!")))}getProductsPerPage(a,g){return this.http.get(`${u.rH.URL}/product?${a}=${g}`).pipe((0,m.U)(_=>_.payload?.products),(0,i.K)(this.errorHandler.handleError("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0434\u0430\u043d\u0456!")))}getSubcategoryPerPage(a,g,_){return this.http.get(`${u.rH.URL}/product?${a}=${g}&subcategory=${_}`).pipe((0,m.U)(O=>O.payload?.products),(0,i.K)(this.errorHandler.handleError("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0434\u0430\u043d\u0456!")))}getProductById(a){return this.http.get(`${u.rH.URL}/product/${a}`).pipe((0,m.U)(g=>g.payload),(0,i.K)(this.errorHandler.handleError("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0434\u0430\u043d\u0456!")))}getByName(){this.http.get(`${u.rH.URL}/product/search`).pipe((0,i.K)(this.errorHandler.handleError("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0434\u0430\u043d\u0456!")))}createProduct(a){return this.http.post(`${u.rH.URL}/product`,a).pipe((0,i.K)(this.errorHandler.handleError("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0434\u0430\u043d\u0456!")))}searchProduct(a){return this.http.get(`${u.rH.URL}/product/search?keyword=${a}`).pipe((0,m.U)(g=>g.payload),(0,i.K)(this.errorHandler.handleError("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0434\u0430\u043d\u0456!")))}updateProduct(a,g){return this.http.put(`${u.rH.URL}/product/${g}`,a).pipe((0,i.K)(this.errorHandler.handleError("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0434\u0430\u043d\u0456!")))}uploadImageProduct(a,g){const _=new FormData;return _.append("file",a),_.append("productId",g),this.http.post(`${u.rH.URL}/upload`,_).pipe((0,i.K)(this.errorHandler.handleError("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u0432\u0430\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f")))}deleteProduct(a){return this.http.delete(`${u.rH.URL}/product/${a}`).pipe((0,i.K)(this.errorHandler.handleError("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0434\u0430\u043d\u0456!")))}}return(l=d).\u0275fac=function(a){return new(a||l)},l.\u0275prov=p.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),d})()}}]);