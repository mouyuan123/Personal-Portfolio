"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[270],{5270:(P,d,l)=>{l.r(d),l.d(d,{PortfolioDetailModule:()=>v});var s=l(8692),a=l(9900),c=l(7352),t=l(6985),u=l(3178),m=l(8292);const g=function(o){return{active:o}};function f(o,r){if(1&o&&(t.TgZ(0,"div",36),t._UZ(1,"img",37),t.qZA()),2&o){const e=r.$implicit;t.Q6J("ngClass",t.VKq(2,g,r.first)),t.xp6(1),t.s9C("src",e,t.LSH)}}function _(o,r){1&o&&t._UZ(0,"div")}function b(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",38)(1,"h2"),t._uU(2,"Project Description"),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"button",39),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.isUpdate=!1)}),t._uU(6,"Update"),t.qZA()()}if(2&o){const e=t.oxw(2);t.xp6(4),t.hij(" ",e.project.projectDescription," ")}}function Z(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",38)(1,"h2"),t._uU(2,"Project Description"),t.qZA(),t.TgZ(3,"form",null,40)(5,"textarea",41),t.NdJ("ngModelChange",function(i){t.CHM(e);const p=t.oxw(2);return t.KtG(p.project.projectDescription=i)}),t.qZA(),t.TgZ(6,"button",42),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return i.isUpdate=!0,t.KtG(i.updateProjectDescript())}),t._uU(7,"Save"),t.qZA()()()}if(2&o){const e=t.oxw(2);t.xp6(5),t.Q6J("ngModel",e.project.projectDescription)}}function j(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"main",10)(1,"section",11)(2,"div",12)(3,"div",13)(4,"h2"),t._uU(5,"Portfoio Details"),t.qZA(),t.TgZ(6,"ol")(7,"li")(8,"a",14),t._uU(9,"Home"),t.qZA()(),t.TgZ(10,"li"),t._uU(11,"Portfolio Details"),t.qZA()()()()(),t.TgZ(12,"section",15)(13,"div",12)(14,"div",16)(15,"div",17)(16,"div",18)(17,"div",19)(18,"div",20),t.YNc(19,f,2,4,"div",21),t.qZA(),t.TgZ(20,"button",22),t._UZ(21,"span",23),t.TgZ(22,"span",24),t._uU(23,"Previous"),t.qZA()(),t.TgZ(24,"button",25),t._UZ(25,"span",26),t.TgZ(26,"span",24),t._uU(27,"Next"),t.qZA()()()(),t.TgZ(28,"div",27)(29,"button",28),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.goBack())}),t.TgZ(30,"strong"),t._uU(31,"<\xa0\xa0Back to Previous Page"),t.qZA()(),t.TgZ(32,"button",29),t._uU(33,"X\xa0\xa0Delete"),t.qZA()()(),t.TgZ(34,"div",30)(35,"div",31)(36,"h3"),t._uU(37,"Project information"),t.qZA(),t.TgZ(38,"ul")(39,"li")(40,"strong"),t._uU(41,"Name"),t.qZA(),t._uU(42),t.qZA(),t.TgZ(43,"li")(44,"strong"),t._uU(45,"Category"),t.qZA(),t._uU(46),t.qZA(),t.TgZ(47,"li")(48,"strong"),t._uU(49,"Project Role"),t.qZA(),t._uU(50),t.qZA(),t.TgZ(51,"li")(52,"strong"),t._uU(53,"Project Semester"),t.qZA(),t._uU(54),t.qZA(),t.TgZ(55,"li")(56,"strong"),t._uU(57,"Project URL"),t.qZA(),t._uU(58,": "),t.TgZ(59,"a",32),t._uU(60),t.qZA()()()(),t.YNc(61,_,1,0,"div",33),t.YNc(62,b,7,1,"ng-template",null,34,t.W1O),t.YNc(64,Z,8,1,"ng-template",null,35,t.W1O),t.qZA()()()()()}if(2&o){const e=t.MAs(63),n=t.MAs(65),i=t.oxw();t.xp6(19),t.Q6J("ngForOf",i.project.projectImg),t.xp6(23),t.hij(": ",i.project.projectName,""),t.xp6(4),t.hij(": ",i.project.projectCategory,""),t.xp6(4),t.hij(": ",i.project.projectRole,""),t.xp6(4),t.hij(": ",i.project.projectDate,""),t.xp6(5),t.s9C("href",i.project.projectURL,t.LSH),t.xp6(1),t.Oqu(i.project.projectURL),t.xp6(1),t.Q6J("ngIf",i.isUpdate)("ngIfThen",e)("ngIfElse",n)}}const h=[{path:"",component:(()=>{class o{constructor(e,n,i,p){this.route=e,this.pgs=n,this.location=i,this.toast=p,this.isUpdate=!0}ngOnInit(){this.getProject()}getProject(){const e=String(this.route.snapshot.paramMap.get("pid"));this.pgs.getProject(e).subscribe(n=>{this.project=n})}deleteProject(){this.project.id&&this.pgs.deleteProject(this.project.id).subscribe()}updateProjectDescript(){this.pgs.updateProjectDescript(this.project).subscribe(),this.showSuccess()}showSuccess(){this.toast.success("You have amended the project description successfully!","Amend project description",{positionClass:"toast-bottom-right"})}goBack(){this.location.back()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.gz),t.Y36(u.$),t.Y36(s.Ye),t.Y36(m._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-portfolio-detail"]],decls:14,vars:1,consts:[["id","main",4,"ngIf"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click"],["id","main"],["id","breadcrumbs",1,"breadcrumbs"],[1,"container"],[1,"d-flex","justify-content-between","align-items-center"],["routerLink","/home"],["id","portfolio-details",1,"portfolio-details"],[1,"row","gy-4"],["data-aos","fade-right",1,"col-lg-8"],[1,"portfolio-details-slider","swiper"],["id","carouselExampleControls","data-bs-ride","carousel",1,"carousel","slide"],[1,"carousel-inner"],["class","carousel-item ",3,"ngClass",4,"ngFor","ngForOf"],["type","button","data-bs-target","#carouselExampleControls","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleControls","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],[1,"d-grid","gap-2","d-md-flex","justify-content-md-between","mt-2"],["type","button",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModal",1,"btn","btn-outline-danger"],["data-aos","fade-left",1,"col-lg-4"],[1,"portfolio-info"],["target","_blank",1,"text-break",3,"href"],[4,"ngIf","ngIfThen","ngIfElse"],["ifBlock",""],["elseBlock",""],[1,"carousel-item",3,"ngClass"],["alt","...",1,"d-block","w-100",3,"src"],[1,"portfolio-description"],["type","button",1,"btn","btn-info",3,"click"],["descriptForm","ngForm"],["name","description","rows","7",1,"form-control","mb-3",2,"font-size","14px",3,"ngModel","ngModelChange"],["type","submit","type","button",1,"btn","btn-success",3,"click"]],template:function(e,n){1&e&&(t.YNc(0,j,66,10,"main",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"button",5),t.qZA(),t.TgZ(6,"div",6)(7,"h3"),t._uU(8,"Are you sure you want to delete this project?"),t.qZA()(),t.TgZ(9,"div",7)(10,"button",8),t._uU(11,"Close"),t.qZA(),t.TgZ(12,"button",9),t.NdJ("click",function(){return n.deleteProject(),n.goBack()}),t._uU(13,"Yes"),t.qZA()()()()()),2&e&&t.Q6J("ngIf",n.project)},dependencies:[s.mk,s.sg,s.O5,c.yS,a._Y,a.Fj,a.JJ,a.JL,a.On,a.F]}),o})()}];let x=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz.forChild(h),c.Bz]}),o})(),v=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,x,a.u5]}),o})()}}]);