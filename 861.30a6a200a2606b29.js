"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[861],{4861:(N,m,s)=>{s.r(m),s.d(m,{PortfolioModule:()=>w});var c=s(8692),u=s(7352),e=s(6985),f=s(3178),l=s(9900),g=s(8292);function _(r,i){1&r&&(e.TgZ(0,"span",30),e._uU(1,"*Project title is required"),e.qZA())}function h(r,i){1&r&&(e.TgZ(0,"span",30),e._uU(1,"Please select the project category here"),e.qZA())}function j(r,i){1&r&&(e.TgZ(0,"span",30),e._uU(1,"*Project timeline is required"),e.qZA())}function C(r,i){1&r&&(e.TgZ(0,"span",30),e._uU(1,"*Project role is required "),e.qZA())}function Z(r,i){1&r&&(e.TgZ(0,"span",30),e._uU(1,"*Project description is required"),e.qZA())}function P(r,i){1&r&&(e.TgZ(0,"span"),e._uU(1,"*Project url is required"),e.qZA())}function b(r,i){1&r&&(e.TgZ(0,"span"),e._uU(1,"*Please provide a proper url"),e.qZA())}function A(r,i){if(1&r&&(e.TgZ(0,"span",30),e.YNc(1,P,2,0,"span",31),e.YNc(2,b,2,0,"span",31),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",null==o.url||null==o.url.errors?null:o.url.errors.required),e.xp6(1),e.Q6J("ngIf",null==o.url||null==o.url.errors?null:o.url.errors.pattern)}}function v(r,i){if(1&r){const o=e.EpF();e.TgZ(0,"div",32)(1,"input",33),e.NdJ("change",function(n){const a=e.CHM(o).index,J=e.oxw();return e.KtG(J.onFileChange(n,a))}),e.qZA(),e._uU(2," \xa0\xa0 "),e.TgZ(3,"i",34),e.NdJ("click",function(){const d=e.CHM(o).index,a=e.oxw();return e.KtG(a.deleteImage(d))}),e.qZA()()}}function y(r,i){1&r&&(e.TgZ(0,"span",30),e._uU(1,"*Please select at least one project image"),e.qZA())}let T=(()=>{class r{constructor(o,t,n){this.fb=o,this.pgs=t,this.toast=n,this.urlRegEx=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,this.closeForm=new e.vpe,this.addProjectForm=this.fb.group({title:["",[l.kI.required]],category:["Project",[l.kI.required]],timeline:["",[l.kI.required]],role:["",[l.kI.required]],description:["",[l.kI.required]],url:["",[l.kI.required,l.kI.pattern(this.urlRegEx)]],imagesUrl:this.fb.array([this.fb.control("",[l.kI.required])],[l.kI.required])})}ngOnInit(){}get category(){return this.addProjectForm.get("category")}get timeline(){return this.addProjectForm.get("timeline")}get title(){return this.addProjectForm.get("title")}get role(){return this.addProjectForm.get("role")}get description(){return this.addProjectForm.get("description")}get url(){return this.addProjectForm.get("url")}get projectImg(){return this.addProjectForm.get("imagesUrl")}addMoreImages(){this.projectImg.push(this.fb.control("",[l.kI.required]))}deleteImage(o){this.projectImg.removeAt(o)}onSubmit(o){if(this.addProjectForm.valid){let t={projectDefaultImg:this.defaultImg(o.category),projectName:o.title,projectCategory:o.category,projectDate:o.timeline,projectRole:o.role,projectDescription:o.description,projectURL:o.url,projectImg:o.imagesUrl};this.addProject(t),this.addProjectForm.reset(),this.projectImg.clear(),this.showSuccess()}else this.showFailure()}defaultImg(o){switch(o){case"App Development":return"assets/img/portfolio/app-development.jpeg";case"Web Development":return"assets/img/portfolio/web-development.jpeg";default:return"assets/img/portfolio/project.jpeg"}}addProject(o){this.pgs.addProject(o).subscribe(()=>{})}onFileChange(o,t){const n=new FileReader;o.target.files&&o.target.files.length&&(n.readAsDataURL(o.target.files[0]),n.onload=a=>{this.projectImg.at(t).setValue(n.result)},n.onerror=a=>{console.log("File could not be read: "+a.target.error.code)})}showSuccess(){this.toast.success("You have added the project successfully!","Add project successfully",{positionClass:"toast-top-center"}),this.toast.toastrConfig.preventDuplicates=!0}showFailure(){this.toast.error("Make sure you fill up all the input fields","Fails to add project",{positionClass:"toast-top-center"}),this.toast.toastrConfig.preventDuplicates=!0}close(){this.closeForm.emit()}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(l.qu),e.Y36(f.$),e.Y36(g._W))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-add-project-form"]],outputs:{closeForm:"closeForm"},decls:63,vars:9,consts:[["data-aos","fade-down",1,"form-container","shadow-lg","rounded","border","border-primary","border-2","overflow-auto"],[1,"d-flex","justify-content-center","title-background","pt-2"],[1,"row","mt-3","p-2","overflow-auto",3,"formGroup","ngSubmit"],[1,"row","mb-2"],["for","title",1,"col-sm-2","col-form-label"],[1,"col-sm-10"],["formControlName","title","name","title","type","email","placeholder","Project title here","aria-label","project title","required","",1,"form-control"],["style","color: red; font-size:15px",4,"ngIf"],["for","category",1,"col-sm-2","col-form-label"],["formControlName","category","name","category","required","",1,"form-select"],["value","Project"],["value","App Development"],["value","Web Development"],["for","timeline",1,"col-sm-2","col-form-label"],["formControlName","timeline","name","timeline","type","text","placeholder","E.g., Semester 1 Year 2","aria-label","When I do the project","required","",1,"form-control"],["for","role",1,"col-sm-2","col-form-label"],["formControlName","role","name","role","type","text","placeholder","Role in the project","aria-label","Project Role","required","",1,"form-control"],["for","description",1,"col-sm-2","col-form-label"],["formControlName","description","name","description","placeholder","Describe my own project","aria-label","project description","required","",1,"form-control"],["for","projectUrl",1,"col-sm-2","col-form-label"],["formControlName","url","name","projectUrl","type","text","placeholder","Project url to view the project","aria-label","project url","required","",1,"form-control"],["formArrayName","imagesUrl",1,"row","mb-2"],["for","images",1,"col-sm-2","col-form-label"],[1,"bi","bi-images"],["class","d-flex justify-content-between align-items-center",4,"ngFor","ngForOf"],[1,"mt-1","add-img-input",3,"click"],[1,"bi","bi-plus-circle"],[1,"d-grid","gap-2"],["type","submit",1,"btn","btn-primary"],["type","submit","id","liveToastBtn",1,"btn","btn-secondary",3,"click"],[2,"color","red","font-size","15px"],[4,"ngIf"],[1,"d-flex","justify-content-between","align-items-center"],["name","images","type","file","accept","image/jpeg, image/jpg","aria-label","project images",1,"form-control","mb-1",3,"change"],[1,"bi","bi-x-lg","delete-img-input",3,"click"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Add Project"),e.qZA()(),e.TgZ(4,"form",2),e.NdJ("ngSubmit",function(){return t.onSubmit(t.addProjectForm.value)}),e.TgZ(5,"div",3)(6,"label",4),e._uU(7,"Title:"),e.qZA(),e.TgZ(8,"div",5),e._UZ(9,"input",6),e.YNc(10,_,2,0,"span",7),e.qZA()(),e.TgZ(11,"div",3)(12,"label",8),e._uU(13,"Category:"),e.qZA(),e.TgZ(14,"div",5)(15,"select",9)(16,"option",10),e._uU(17,"Project"),e.qZA(),e.TgZ(18,"option",11),e._uU(19,"App Development"),e.qZA(),e.TgZ(20,"option",12),e._uU(21,"Web Development"),e.qZA()(),e.YNc(22,h,2,0,"span",7),e.qZA()(),e.TgZ(23,"div",3)(24,"label",13),e._uU(25,"Timeline:"),e.qZA(),e.TgZ(26,"div",5),e._UZ(27,"input",14),e.YNc(28,j,2,0,"span",7),e.qZA()(),e.TgZ(29,"div",3)(30,"label",15),e._uU(31,"Role:"),e.qZA(),e.TgZ(32,"div",5),e._UZ(33,"input",16),e.YNc(34,C,2,0,"span",7),e.qZA()(),e.TgZ(35,"div",3)(36,"label",17),e._uU(37,"Description:"),e.qZA(),e.TgZ(38,"div",5),e._UZ(39,"textarea",18),e.YNc(40,Z,2,0,"span",7),e.qZA()(),e.TgZ(41,"div",3)(42,"label",19),e._uU(43,"Project Url:"),e.qZA(),e.TgZ(44,"div",5),e._UZ(45,"input",20),e.YNc(46,A,3,2,"span",7),e.qZA()(),e.TgZ(47,"div",21)(48,"label",22),e._uU(49,"Images\xa0"),e._UZ(50,"i",23),e._uU(51,":"),e.qZA(),e.TgZ(52,"div",5),e.YNc(53,v,4,0,"div",24),e.YNc(54,y,2,0,"span",7),e.TgZ(55,"div",25),e.NdJ("click",function(){return t.addMoreImages()}),e._UZ(56,"i",26),e._uU(57,"\xa0Add more images"),e.qZA()()(),e.TgZ(58,"div",27)(59,"button",28),e._uU(60,"Add"),e.qZA(),e.TgZ(61,"button",29),e.NdJ("click",function(){return t.close()}),e._uU(62,"Close"),e.qZA()()()()),2&o&&(e.xp6(4),e.Q6J("formGroup",t.addProjectForm),e.xp6(6),e.Q6J("ngIf",(null==t.title?null:t.title.invalid)&&((null==t.title?null:t.title.dirty)||(null==t.title?null:t.title.touched))),e.xp6(12),e.Q6J("ngIf",null==t.category?null:t.category.untouched),e.xp6(6),e.Q6J("ngIf",(null==t.timeline?null:t.timeline.invalid)&&((null==t.timeline?null:t.timeline.dirty)||(null==t.timeline?null:t.timeline.touched))),e.xp6(6),e.Q6J("ngIf",(null==t.role?null:t.role.invalid)&&((null==t.role?null:t.role.dirty)||(null==t.role?null:t.role.touched))),e.xp6(6),e.Q6J("ngIf",(null==t.description?null:t.description.invalid)&&((null==t.description?null:t.description.dirty)||(null==t.description?null:t.description.touched))),e.xp6(6),e.Q6J("ngIf",(null==t.url?null:t.url.invalid)&&((null==t.url?null:t.url.dirty)||(null==t.url?null:t.url.touched))),e.xp6(7),e.Q6J("ngForOf",t.projectImg.controls),e.xp6(1),e.Q6J("ngIf",!t.projectImg.controls.length))},dependencies:[c.sg,c.O5,l._Y,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.JL,l.Q7,l.sg,l.u,l.CE],styles:[".form-container[_ngcontent-%COMP%]{background-color:#c4d7e0;position:fixed;top:5%;left:35%;right:20%;height:580px}.title-background[_ngcontent-%COMP%]{background-color:#e7f6f2}.delete-img-input[_ngcontent-%COMP%]   .add-img-input[_ngcontent-%COMP%]{cursor:pointer}"]}),r})();const k=["portfolio"];function q(r,i){if(1&r&&(e.TgZ(0,"div",16)(1,"a",17,18)(3,"div",19),e._UZ(4,"img",20),e.TgZ(5,"div",21)(6,"h4",22)(7,"strong"),e._uU(8),e.qZA()(),e._UZ(9,"hr"),e.TgZ(10,"p",23),e._uU(11),e.qZA()()()()()),2&r){const o=i.$implicit;e.xp6(1),e.MGl("routerLink","/portfolio-detail/",o.id,""),e.xp6(3),e.s9C("src",o.projectDefaultImg,e.LSH),e.xp6(4),e.Oqu(o.projectName),e.xp6(3),e.Oqu(o.projectDescription)}}function F(r,i){if(1&r){const o=e.EpF();e.TgZ(0,"app-add-project-form",24),e.NdJ("closeForm",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.addProject=!1)}),e.qZA()}}const p=function(r){return{"filter-active":r}},U=[{path:"",component:(()=>{class r{constructor(o){this.pgs=o,this.projectToDisplay=[],this.allClicked=!0,this.appClicked=!1,this.proClicked=!1,this.webClicked=!1,this.addProject=!1}ngOnInit(){this.getProjects()}ngAfterViewInit(){setTimeout(()=>{this.height=this.portfolio.nativeElement.offsetHeight},1e3)}getProjects(){this.pgs.getProjects().subscribe(o=>{this.projectToDisplay=this.appClicked?o.filter(t=>"App Development"==t.projectCategory):this.proClicked?o.filter(t=>"Project"==t.projectCategory):this.webClicked?o.filter(t=>"Web Development"==t.projectCategory):o})}displayAll(){this.allClicked=!0,this.appClicked=!1,this.proClicked=!1,this.webClicked=!1,this.getProjects()}displayApp(){this.allClicked=!1,this.appClicked=!0,this.proClicked=!1,this.webClicked=!1,this.getProjects()}displayPro(){this.allClicked=!1,this.appClicked=!1,this.proClicked=!0,this.webClicked=!1,this.getProjects()}displayWeb(){this.allClicked=!1,this.appClicked=!1,this.proClicked=!1,this.webClicked=!0,this.getProjects()}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(f.$))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-portfolio"]],viewQuery:function(o,t){if(1&o&&e.Gf(k,5),2&o){let n;e.iGM(n=e.CRH())&&(t.portfolio=n.first)}},decls:27,vars:16,consts:[["id","main"],["id","portfolio",1,"portfolio","section-bg"],[1,"container"],[1,"section-title"],["data-aos","fade-up",1,"row"],[1,"col-lg-12","d-flex","justify-content-center"],["id","portfolio-flters"],[3,"ngClass","click"],["id","portfolio-container","data-aos","fade-up","data-aos-delay","100",1,"container"],["id","portfolio-cards",1,"row","row-cols-3"],["class","col gy-3","data-aos","fade-up",4,"ngFor","ngForOf"],["data-aos","fade-up",1,"col","gy-3","d-flex",2,"min-height","296px"],["data-bs-toggle","tooltip modal","data-bs-target","#exampleModal","data-bs-placement","bottom","title","Add Project","data-aos","fade-up",1,"card","shadow","add-project-btn",2,"width","18rem",3,"click"],[1,"card-body","d-flex","justify-content-center","align-items-center"],[1,"bi","bi-plus-lg"],[3,"closeForm",4,"ngIf"],["data-aos","fade-up",1,"col","gy-3"],["data-bs-toggle","tooltip","data-bs-placement","bottom","title","Clicks for more info",3,"routerLink"],["portfolio",""],[1,"card","position-relative",2,"width","18rem"],["alt","...",1,"card-img-top",2,"height","185px",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text","text-truncate"],[3,"closeForm"]],template:function(o,t){1&o&&(e.TgZ(0,"main",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"h2"),e._uU(5,"Portfolio"),e.qZA(),e.TgZ(6,"p"),e._uU(7,'This is the most highlighted section. I build this section dynamically so that I can easily add, edit, and delete the projects that I contribute to until now. You may look into details of each project by clicking it. Those projects are categorized as: "Project", "App Development", annd "Web Development"'),e.qZA()(),e.TgZ(8,"div",4)(9,"div",5)(10,"ul",6)(11,"li",7),e.NdJ("click",function(){return t.displayAll()}),e._uU(12,"All"),e.qZA(),e.TgZ(13,"li",7),e.NdJ("click",function(){return t.displayApp()}),e._uU(14,"App"),e.qZA(),e.TgZ(15,"li",7),e.NdJ("click",function(){return t.displayPro()}),e._uU(16,"Pro"),e.qZA(),e.TgZ(17,"li",7),e.NdJ("click",function(){return t.displayWeb()}),e._uU(18,"Web"),e.qZA()()()(),e.TgZ(19,"div",8)(20,"div",9),e.YNc(21,q,12,4,"div",10),e.TgZ(22,"div",11)(23,"div",12),e.NdJ("click",function(){return t.addProject=!0}),e.TgZ(24,"div",13),e._UZ(25,"i",14),e.qZA()()()()()()()(),e.YNc(26,F,1,0,"app-add-project-form",15)),2&o&&(e.xp6(11),e.Q6J("ngClass",e.VKq(8,p,t.allClicked)),e.xp6(2),e.Q6J("ngClass",e.VKq(10,p,t.appClicked)),e.xp6(2),e.Q6J("ngClass",e.VKq(12,p,t.proClicked)),e.xp6(2),e.Q6J("ngClass",e.VKq(14,p,t.webClicked)),e.xp6(4),e.Q6J("ngForOf",t.projectToDisplay),e.xp6(1),e.Udp("height",t.height,"px"),e.xp6(4),e.Q6J("ngIf",t.addProject))},dependencies:[c.mk,c.sg,c.O5,u.yS,T]}),r})()}];let I=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[u.Bz.forChild(U),u.Bz]}),r})(),w=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[c.ez,I,l.UX]}),r})()}}]);