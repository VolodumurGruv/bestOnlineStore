"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[649],{3649:(Z,l,a)=>{a.r(l),a.d(l,{HomePageComponent:()=>M});var c=a(6814),t=a(4946);const u=function(e){return{active:e}};function d(e,s){if(1&e&&(t.TgZ(0,"div",10),t._UZ(1,"img",11),t.qZA()),2&e){const o=s.$implicit,n=s.index,i=t.oxw();t.Q6J("ngClass",t.VKq(3,u,n===i.slideIndex)),t.xp6(1),t.Q6J("src",o.url,t.LSH)("alt",o.alt)}}const g=function(e){return{"active-dot":e}};function _(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"span",12),t.NdJ("click",function(){const r=t.CHM(o).index,b=t.oxw();return t.KtG(b.goToSlide(r))}),t.qZA()}if(2&e){const o=s.index,n=t.oxw();t.Q6J("ngClass",t.VKq(1,g,o===n.slideIndex))}}let m=(()=>{var e;class s{constructor(){this.photos=[{url:"assets/pics/png/carusel1.jpg",alt:""},{url:"assets/pics/png/carusel2.jpg",alt:""},{url:"assets/pics/png/carusel3.jpg",alt:""},{url:"assets/pics/png/carusel4.jpg",alt:""}],this.slideIndex=0,this.isMouseOverSlide=!1}ngOnInit(){this.startAutoPlay()}ngOnDestroy(){this.stopAutoPlay()}nextSlide(){this.slideIndex=(this.slideIndex+1)%this.photos.length}prevSlide(){this.slideIndex=(this.slideIndex-1+this.photos.length)%this.photos.length}goToSlide(n){this.slideIndex=n}startAutoPlay(){this.autoPlayInterval=setInterval(()=>{this.isMouseOverSlide||this.nextSlide()},7e3)}stopAutoPlay(){clearInterval(this.autoPlayInterval)}handleMouseEnter(){this.isMouseOverSlide=!0,this.stopAutoPlay()}handleMouseLeave(){this.isMouseOverSlide=!1,this.startAutoPlay()}}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-carousel"]],standalone:!0,features:[t.jDz],decls:11,vars:2,consts:[[1,"carousel",3,"mouseenter","mouseleave"],[1,"arrow","arrow-left",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","48","height","48","viewBox","0 0 48 48","fill","none"],["d","M30 36L18 24L30 12","stroke","#05020E","stroke-linecap","round","stroke-linejoin","round"],[1,"slide-container"],["class","slide",3,"ngClass",4,"ngFor","ngForOf"],[1,"arrow","arrow-right",3,"click"],["d","M18 36L30 24L18 12","stroke","#05020E","stroke-linecap","round","stroke-linejoin","round"],[1,"dots"],["class","dot",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"slide",3,"ngClass"],[3,"src","alt"],[1,"dot",3,"ngClass","click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.NdJ("mouseenter",function(){return i.handleMouseEnter()})("mouseleave",function(){return i.handleMouseLeave()}),t.TgZ(1,"a",1),t.NdJ("click",function(){return i.prevSlide()}),t.O4$(),t.TgZ(2,"svg",2),t._UZ(3,"path",3),t.qZA()(),t.kcU(),t.TgZ(4,"div",4),t.YNc(5,d,2,5,"div",5),t.qZA(),t.TgZ(6,"a",6),t.NdJ("click",function(){return i.nextSlide()}),t.O4$(),t.TgZ(7,"svg",2),t._UZ(8,"path",7),t.qZA()()(),t.kcU(),t.TgZ(9,"div",8),t.YNc(10,_,1,3,"span",9),t.qZA()),2&n&&(t.xp6(5),t.Q6J("ngForOf",i.photos),t.xp6(5),t.Q6J("ngForOf",i.photos))},dependencies:[c.ez,c.mk,c.sg],styles:[".carousel[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:relative}.slide-container[_ngcontent-%COMP%]{position:relative;width:1166px;height:740px;overflow:hidden}.slide[_ngcontent-%COMP%]{opacity:0;position:absolute;top:0;left:0;transition:opacity .5s;width:100%;height:100%}.slide.active[_ngcontent-%COMP%]{opacity:1}.arrow[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);width:48px;height:48px;display:flex;justify-content:center;align-items:center;cursor:pointer;fill:#05020e;background-color:#ffffff80;border-radius:50%;transition:background-color .3s}.arrow-left[_ngcontent-%COMP%]{left:0}.arrow-right[_ngcontent-%COMP%]{right:0}.arrow[_ngcontent-%COMP%]:hover{background-color:#fffc}.dots[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:24px;gap:16px}.dot[_ngcontent-%COMP%]{display:inline-block;width:15px;height:15px;border:1px solid #000;border-radius:50%;cursor:pointer;transition:all .3s ease}.active-dot[_ngcontent-%COMP%]{background-color:#000}"]}),s})(),f=(()=>{var e;class s{}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-advices"]],standalone:!0,features:[t.jDz],decls:8,vars:0,consts:[[1,"advices__container"],[1,"advices__title"],[1,"advices__images"],[1,"temp__image__wide","temp__image-one"],[1,"temp__image","temp__image-two"],[1,"temp__image","temp__image-three"],[1,"temp__image__wide","temp__image-four"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"\u041f\u043e\u0440\u0430\u0434\u0438 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0430"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6),t.qZA()())},dependencies:[c.ez],styles:[".advices__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.advices__title[_ngcontent-%COMP%]{margin-bottom:100px;font-size:40px;font-style:normal;font-weight:400;line-height:130%;color:#000}.advices__images[_ngcontent-%COMP%]{display:flex;width:100%;flex-wrap:wrap;gap:100px;justify-content:space-between;align-items:center}.temp__image[_ngcontent-%COMP%]{width:28%;height:471px;background-color:#d9d9d9}.temp__image__wide[_ngcontent-%COMP%]{width:64%;height:471px;background-color:#d9d9d9}.temp__image-one[_ngcontent-%COMP%]{background-image:url(advice1.89425923895f6182.jpg)}.temp__image-two[_ngcontent-%COMP%]{background-image:url(advice2.1646ed701f391919.jpg)}.temp__image-three[_ngcontent-%COMP%]{background-image:url(advice4.7a62a38a0998ad15.jpg)}.temp__image-four[_ngcontent-%COMP%]{background-image:url(advice3.eee36675a044aa7b.jpg)}"]}),s})();var h=a(7875),p=a(2239),C=a(7398);function x(e,s){1&e&&t._UZ(0,"app-product-card",3),2&e&&t.Q6J("product",s.$implicit)}let v=(()=>{var e;class s{constructor(){this.productService=(0,t.f3M)(p.s)}ngOnInit(){this.unSub=this.productService.getProducts().pipe((0,C.U)(n=>this.products=n)).subscribe()}ngOnDestroy(){this.unSub&&this.unSub.unsubscribe()}}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card"]],inputs:{product:"product"},standalone:!0,features:[t.jDz],decls:4,vars:1,consts:[[1,"top__title"],[1,"card__wrap"],[3,"product",4,"ngFor","ngForOf"],[3,"product"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t._uU(1,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f"),t.qZA(),t.TgZ(2,"div",1),t.YNc(3,x,1,1,"app-product-card",2),t.qZA()),2&n&&(t.xp6(3),t.Q6J("ngForOf",i.products))},dependencies:[c.ez,c.sg,h.Y],styles:[".top[_ngcontent-%COMP%], .advices[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%], .new[_ngcontent-%COMP%]{padding:80px 0}.top__box[_ngcontent-%COMP%], .advices__box[_ngcontent-%COMP%], .actions__box[_ngcontent-%COMP%], .new__box[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.top__title[_ngcontent-%COMP%]{text-align:center;margin-bottom:100px;font-size:40px;font-style:normal;font-weight:400;line-height:130%;color:#000}.card__wrap[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start}.card__title[_ngcontent-%COMP%]{margin-top:32px;text-align:center;font-size:18px;font-style:normal;font-weight:400;line-height:130%;color:#000}.card__price[_ngcontent-%COMP%]{text-align:center;font-size:20px;font-style:normal;font-weight:400;line-height:130%;color:#000}.card__price__discount[_ngcontent-%COMP%]{text-align:center;font-size:16px;font-style:normal;font-weight:400;line-height:130%;text-decoration-line:line-through;color:#da3838}"]}),s})();var y=a(7394),w=a(180);function O(e,s){if(1&e){const o=t.EpF();t.ynx(0),t.TgZ(1,"section",2),t._UZ(2,"app-carousel"),t.qZA(),t.TgZ(3,"section",3),t._UZ(4,"app-card",4),t.TgZ(5,"div",5)(6,"button",6),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.redirect("/catalog"))}),t._uU(7," \u041f\u0415\u0420\u0415\u0419\u0422\u0418 \u0412 \u041a\u0410\u0422\u0410\u041b\u041e\u0413 "),t.qZA()()(),t.TgZ(8,"section",7),t._UZ(9,"app-card",8),t.TgZ(10,"div",5)(11,"button",6),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.redirect("/catalog"))}),t._uU(12," \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0432\u0441\u0456 "),t.qZA()()(),t.TgZ(13,"section",9),t._UZ(14,"app-card",10),t.TgZ(15,"div",5)(16,"button",6),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.redirect("/catalog"))}),t._uU(17," \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0432\u0441\u0456 "),t.qZA()()(),t.TgZ(18,"section",11),t._UZ(19,"app-advices",12),t.qZA(),t.BQk()}if(2&e){const o=t.oxw();t.xp6(4),t.Q6J("product",o.products),t.xp6(5),t.Q6J("product",o.products),t.xp6(5),t.Q6J("product",o.products)}}function P(e,s){1&e&&(t.TgZ(0,"div",13),t._uU(1,"Loading..."),t.qZA())}let M=(()=>{var e;class s{constructor(n,i){this.router=n,this.productService=i,this.unSub=new y.w0}ngOnInit(){this.unSub.add(this.productService.getProducts().subscribe(n=>this.products=n))}redirect(n,i){this.router.navigate(i?[n,i]:[n])}ngOnDestroy(){this.unSub.unsubscribe()}}return(e=s).\u0275fac=function(n){return new(n||e)(t.Y36(w.F0),t.Y36(p.s))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home-page"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[1,"carousel","wrapper"],[1,"top","wrapper"],[1,"top__box",3,"product"],[1,"top__btn"],[1,"btn__card",3,"click"],[1,"new","wrapper"],[1,"new__box",3,"product"],[1,"actions","wrapper"],[1,"actions__box",3,"product"],[1,"advices","wrapper"],[1,"advices__box"],[1,"wrapper"]],template:function(n,i){if(1&n&&(t.YNc(0,O,20,3,"ng-container",0),t.YNc(1,P,2,0,"ng-template",null,1,t.W1O)),2&n){const r=t.MAs(2);t.Q6J("ngIf",null==i.products?null:i.products.length)("ngIfElse",r)}},dependencies:[c.ez,c.O5,m,f,v],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Manrope&family=Roboto:ital,wght@0,400;0,500;1,300&family=Satisfy&family=Titan+One&display=swap";@import"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap";.name[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:70px 0 32px}.name__shop[_ngcontent-%COMP%]{font-family:Satisfy,cursive;margin:0;font-size:52px;font-style:normal;font-weight:400;line-height:130%;color:#000}.top[_ngcontent-%COMP%], .new[_ngcontent-%COMP%], .carousel[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%], .advices[_ngcontent-%COMP%]{padding:80px 0}.carousel[_ngcontent-%COMP%]{padding-top:0}.top__btn[_ngcontent-%COMP%]{display:flex}.btn__card[_ngcontent-%COMP%]{margin-top:64px;margin-left:auto;margin-right:auto;width:274px;padding:16px 30px;gap:10px;border-radius:8px;border:1px solid #000;color:#000;font-size:20px;font-style:normal;font-weight:300;line-height:130%;text-transform:uppercase;background:transparent}']}),s})()}}]);