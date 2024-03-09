import{a as E,b as p,c as P,d as M,e as k,f as O,g as N,h as T,i as L,m as U,n as j,p as V}from"./chunk-OD775PVA.js";import{$ as D,Aa as G,H as s,I as f,Ja as v,M as c,O as S,Q as g,R as d,V as t,W as n,X as m,_ as y,aa as r,f as w,la as q,m as C,p as b,r as _,s as F,sa as h,ta as x,va as I}from"./chunk-32554YDS.js";function J(i,o){i&1&&(t(0,"div",38),r(1," Please provide a valid email. "),n())}function K(i,o){i&1&&(t(0,"div",39),r(1," Looks Good! "),n())}function Q(i,o){i&1&&(t(0,"div",38),r(1," Please provide a password. "),n())}function W(i,o){i&1&&(t(0,"div",39),r(1," Looks Good! "),n())}var z=(()=>{let o=class o{constructor(l,a,e){this.formBuilder=l,this.authService=a,this.router=e,this.submitted=!1,this.error="",this.year=new Date().getFullYear()}ngOnInit(){this.loginForm=this.formBuilder.group({email:["",[p.required,p.email]],password:["",[p.required]]})}get f(){return this.loginForm.controls}onSubmit(){if(this.loginForm.valid){var l={email:this.f.email.value,password:this.f.password.value};this.authService.signIn(l).subscribe({next:a=>w(this,null,function*(){this.authService.setDisplayNameLocalStorage(a.user.displayName,a.user),a.user.displayName=="customer"?this.router.navigate(["/form"]):this.router.navigate(["/admin/applicants"])}),error:a=>w(this,null,function*(){yield alert(JSON.stringify(a))})})}else this.validateAllFormFields(this.loginForm)}validateAllFormFields(l){Object.keys(l.controls).forEach(a=>{let e=l.get(a);e instanceof O?e.markAsDirty({onlySelf:!0}):e instanceof k&&this.validateAllFormFields(e)})}toggleFieldTextType(){this.fieldTextType=!this.fieldTextType}};o.\u0275fac=function(a){return new(a||o)(f(j),f(v),f(h))},o.\u0275cmp=_({type:o,selectors:[["app-login"]],decls:55,vars:11,consts:[[1,"w-100","h-100"],[1,"wrapper","container"],[1,"container","main"],[1,"row",2,"z-index","2"],[1,"left","col-lg-6","d-flex","flex-column","justify-content-center",2,"padding","40px 40px 0 40px"],[1,"d-flex","justify-content-center"],[1,"account-heading",2,"text-align","center","color","var(--text-color)"],[1,"d-flex","flex-column","justify-content-center","w-100",2,"padding","36px",3,"formGroup","ngSubmit"],[1,"mb-4"],["for","email",1,"form-label"],[1,"text-danger"],[1,"position-relative"],["type","text","formControlName","email","id","email","placeholder","Enter email",1,"form-control","password-input"],["class","invalid-feedback"],[1,""],[1,"float-end"],["routerLink","/auth/pass-reset",1,"text-muted",2,"text-decoration","none"],["for","password-input",1,"form-label"],[1,"position-relative","auth-pass-inputgroup","mb-4"],["formControlName","password","type","password","placeholder","Enter password","id","password-input",1,"form-control","pe-5","password-input"],["type","button","id","password-addon",1,"btn","btn-link","position-absolute","end-0","top-0","text-decoration-none","text-muted","password-addon"],[1,"form-check"],["type","checkbox","value","","id","auth-remember-check",1,"form-check-input"],["for","auth-remember-check",1,"form-check-label"],[1,"mt-4"],["type","submit",1,"account-btn","w-100"],[1,"mt-4","pt-2","text-center"],["routerLink","/auth/register"],[1,"right","d-none","d-lg-block","col-lg-6","d-flex","position-relative"],[1,"d-flex","h-100","flex-column","justify-content-center",2,"width","428px","margin-left","3rem"],[1,"account-heading"],[2,"color","var(--custom-white)"],[1,"logo-account"],["src","/assets/images/logo-for-bar.png","alt",""],[1,"dots1"],["src","/assets/images/dots1.png","alt",""],[1,"dots2"],["src","/assets/images/dots2.png","alt",""],[1,"invalid-feedback"],[1,"valid-feedback"]],template:function(a,e){a&1&&(t(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h1",6),r(7," LOGIN "),n()(),t(8,"form",7),y("ngSubmit",function(){return e.onSubmit()}),t(9,"div",8)(10,"label",9),r(11,"Email "),t(12,"span",10),r(13,"*"),n()(),t(14,"div",11),m(15,"input",12),c(16,J,2,0,"div",13)(17,K,2,0),n()(),t(18,"div",14)(19,"div",15)(20,"a",16),r(21,"Forgot password?"),n()(),t(22,"label",17),r(23,"Password "),t(24,"span",10),r(25,"*"),n()(),t(26,"div",18),m(27,"input",19),c(28,Q,2,0,"div",13)(29,W,2,0),m(30,"button",20),n()(),t(31,"div",21),m(32,"input",22),t(33,"label",23),r(34,"Remember me"),n()(),t(35,"div",24)(36,"button",25),r(37,"Log In"),n()(),t(38,"div",26)(39,"p"),r(40," Don't have an account ? "),t(41,"a",27),r(42,"Sign Up"),n()()()()(),t(43,"div",28)(44,"div",29)(45,"h1",30),r(46,"Start your journey with us."),n(),t(47,"p",31),r(48," Our specialized programs will empower you to become a SAFE driver for life. "),n()(),t(49,"div",32),m(50,"img",33),n(),t(51,"div",34),m(52,"img",35),n(),t(53,"div",36),m(54,"img",37),n()()()()()()),a&2&&(s(8),S("formGroup",e.loginForm),s(7),g("is-valid",e.loginForm.controls.email.status!="INVALID")("is-invalid",e.loginForm.controls.email.dirty&&e.loginForm.hasError("required","email")||e.loginForm.controls.email.dirty&&e.loginForm.hasError("email","email")),s(),d(16,e.loginForm.controls.email.dirty&&e.loginForm.hasError("required","email")||e.loginForm.controls.email.dirty&&e.loginForm.hasError("email","email")?16:17),s(11),g("is-valid",e.loginForm.controls.password.status!="INVALID")("is-invalid",e.loginForm.controls.password.dirty&&e.loginForm.hasError("required","password")),s(),d(28,e.loginForm.controls.password.dirty&&e.loginForm.hasError("required","password")?28:29))},dependencies:[x,N,E,P,M,T,L],styles:['.loginbtn[_ngcontent-%COMP%]{background-color:#ff0101;color:#fdfeff;height:36px;border:none}section[_ngcontent-%COMP%]{background:url("./media/night-view-waibaidu-bridge-blue-tone-5FGP6U6U.jpg");background-size:cover}section[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(0deg,#f5f5f5bf 14%,#f1ebebe6 97%)}.bg-account[_ngcontent-%COMP%]{background:#ff000028}.main[_ngcontent-%COMP%]{display:flex;min-height:100vh;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{width:1176px;height:650px}input[_ngcontent-%COMP%]{background:#e1eaf4ad;border:rgba(122,124,132,.5568627451)}.account-heading[_ngcontent-%COMP%]{font-family:SecondaryFontMedium}.left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{max-width:400px}.left[_ngcontent-%COMP%]{background:#fff}.right[_ngcontent-%COMP%]{background-color:#0b3c99}.logo-account[_ngcontent-%COMP%]{width:120px;height:120px;position:absolute;right:2rem;bottom:2rem}.logo-account[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.dots1[_ngcontent-%COMP%]{position:absolute;width:164px;height:200px;left:2rem;bottom:0rem}.dots1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .dots2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.dots2[_ngcontent-%COMP%]{position:absolute;width:184px;height:200px;right:2rem;top:0rem}']});let i=o;return i})();function ee(i,o){i&1&&(t(0,"div",40),r(1,"Please provide a valid name."),n())}function te(i,o){i&1&&(t(0,"div",41),r(1,"Looks Good!"),n())}function ie(i,o){i&1&&(t(0,"div",40),r(1," Please provide a valid email. "),n())}function ne(i,o){i&1&&(t(0,"div",41),r(1,"Looks Good!"),n())}function oe(i,o){i&1&&(t(0,"div",40),r(1," Please Provide a Philippine Valid Mobile No. (09XXXXXXXXX) "),n())}function re(i,o){i&1&&(t(0,"div",41),r(1,"Looks Good!"),n())}function ae(i,o){i&1&&(t(0,"div",40),r(1,"\u2022 Uppercase letters"),n())}function le(i,o){i&1&&(t(0,"div",40),r(1,"\u2022 Lowercase letters"),n())}function se(i,o){i&1&&(t(0,"div",40),r(1,"\u2022 Numbers"),n())}function me(i,o){i&1&&(t(0,"div",40),r(1,"\u2022 Special characters"),n())}function de(i,o){i&1&&(t(0,"div",40),r(1,"\u2022 At least 8 minimum"),n())}function pe(i,o){if(i&1&&c(0,ae,2,0,"div",13)(1,le,2,0,"div",13)(2,se,2,0,"div",13)(3,me,2,0,"div",13)(4,de,2,0,"div",13),i&2){let u=D();d(0,u.passwordFieldcontainsUppercase(u.f.password.value)?-1:0),s(),d(1,u.passwordFieldcontainsLowercase(u.f.password.value)?-1:1),s(),d(2,u.passwordFieldcontainsNumber(u.f.password.value)?-1:2),s(),d(3,u.passwordFieldcontainsSpecialCharacters(u.f.password.value)?-1:3),s(),d(4,u.f.password.value.length<8?4:-1)}}function ce(i,o){i&1&&(t(0,"div",41),r(1,"Looks Good!"),n())}function ue(i,o){i&1&&(t(0,"div",40),r(1," Confirm Password should match to your Password. "),n())}function ge(i,o){i&1&&(t(0,"div",41),r(1,"Looks Good!"),n())}var X=(()=>{let o=class o{constructor(l,a,e){this.formBuilder=l,this.authService=a,this.router=e,this.submitted=!1,this.error="",this.year=new Date().getFullYear()}ngOnInit(){this.signupForm=this.formBuilder.group({name:["",p.required],email:["",[p.required,p.email]],number:["",[p.required,p.pattern("(09)[0-9 ]{9}")]],password:["",[p.required,p.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")]],confirmpassword:["",p.required]})}get f(){return this.signupForm.controls}onSubmit(){if(this.signupForm.valid){var l={email:this.f.email.value,password:this.f.password.value};this.authService.signUp(l).subscribe({next:a=>w(this,null,function*(){G(a.user,{displayName:"admin"}),this.authService.setDisplayNameLocalStorage("admin",a.user);var e={email:this.f.email.value,name:this.f.name.value,phonenumber:this.f.number.value};this.authService.saveUserInfoAfterRegistering(e,a.user.uid),this.router.navigate(["/form"])}),error:a=>w(this,null,function*(){console.log("ew",a)})})}else this.validateAllFormFields(this.signupForm)}validateAllFormFields(l){Object.keys(l.controls).forEach(a=>{let e=l.get(a);e instanceof O?e.markAsDirty({onlySelf:!0}):e instanceof k&&this.validateAllFormFields(e)})}toggleFieldTextType(){this.fieldTextType=!this.fieldTextType}passwordFieldcontainsUppercase(l){return/[A-Z]/.test(l)}passwordFieldcontainsLowercase(l){return/[a-z]/.test(l)}passwordFieldcontainsNumber(l){return/[0-9]/.test(l)}passwordFieldcontainsSpecialCharacters(l){return/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(l)}};o.\u0275fac=function(a){return new(a||o)(f(j),f(v),f(h))},o.\u0275cmp=_({type:o,selectors:[["app-register"]],decls:78,vars:26,consts:[[1,"w-100","h-100"],[1,"wrapper","container"],[1,"container","main"],[1,"row",2,"z-index","2"],[1,"left","col-lg-6","d-flex","flex-column","justify-content-center",2,"padding","40px 40px 0 40px"],[1,"d-flex","justify-content-center"],[1,"account-heading",2,"text-align","center","color","var(--text-color)"],[1,"d-flex","flex-column","justify-content-center","w-100",2,"padding","12px",3,"formGroup","ngSubmit"],[1,"mb-1"],["for","name",1,"form-label"],[1,"text-danger"],[1,"position-relative"],["type","text","id","name","formControlName","name",1,"form-control","password-input"],["class","invalid-feedback"],["for","email",1,"form-label"],["type","email","formControlName","email","id","email",1,"form-control","password-input"],["for","number",1,"form-label"],["type","text","formControlName","number","id","number","maxlength","11",1,"form-control","password-input"],["for","password",1,"form-label"],["type","password","formControlName","password","id","password",1,"form-control","password-input"],["for","confirmpassword",1,"form-label"],[1,"position-relative","auth-pass-inputgroup","mb-4"],["formControlName","confirmpassword","type","password","id","password-input",1,"form-control","pe-5","password-input"],[1,"form-check"],["type","checkbox","value","","id","auth-remember-check",1,"form-check-input"],["for","auth-remember-check",1,"form-check-label"],[1,"mt-4"],["type","submit",1,"account-btn","w-100"],[1,"mt-4","pt-2","text-center"],["routerLink","/auth/login"],[1,"right","d-none","d-lg-block","col-lg-6","d-flex","position-relative"],[1,"d-flex","h-100","flex-column","justify-content-center",2,"width","428px","margin-left","3rem"],[1,"account-heading"],[2,"color","var(--custom-white)"],[1,"logo-account"],["src","/assets/images/logo-for-bar.png","alt","","routerLink","/"],[1,"dots1"],["src","/assets/images/dots1.png","alt",""],[1,"dots2"],["src","/assets/images/dots2.png","alt",""],[1,"invalid-feedback"],[1,"valid-feedback"]],template:function(a,e){a&1&&(t(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h1",6),r(7," REGISTER "),n()(),t(8,"form",7),y("ngSubmit",function(){return e.onSubmit()}),t(9,"div",8)(10,"label",9),r(11,"Name "),t(12,"span",10),r(13,"*"),n()(),t(14,"div",11),m(15,"input",12),c(16,ee,2,0,"div",13)(17,te,2,0),n()(),t(18,"div",8)(19,"label",14),r(20,"Email Address "),t(21,"span",10),r(22,"*"),n()(),t(23,"div",11),m(24,"input",15),c(25,ie,2,0,"div",13)(26,ne,2,0),n()(),t(27,"div",8)(28,"label",16),r(29,"Mobile Number "),t(30,"span",10),r(31,"*"),n()(),t(32,"div",11),m(33,"input",17),c(34,oe,2,0,"div",13)(35,re,2,0),n()(),t(36,"div",8)(37,"label",18),r(38,"Password "),t(39,"span",10),r(40,"*"),n()(),t(41,"div",11),m(42,"input",19),c(43,pe,5,5)(44,ce,2,0),n()(),t(45,"div",8)(46,"label",20),r(47,"Confirm Password "),t(48,"span",10),r(49,"*"),n()(),t(50,"div",21),m(51,"input",22),c(52,ue,2,0,"div",13)(53,ge,2,0),n()(),t(54,"div",23),m(55,"input",24),t(56,"label",25),r(57,"Agree with the Terms and Condition"),n()(),t(58,"div",26)(59,"button",27),r(60,"Sign Up"),n()(),t(61,"div",28)(62,"p"),r(63," Already Have an Account? "),t(64,"a",29),r(65,"Log in"),n()()()()(),t(66,"div",30)(67,"div",31)(68,"h1",32),r(69,"Start your journey with us."),n(),t(70,"p",33),r(71," Our specialized programs will empower you to become a SAFE driver for life. "),n()(),t(72,"div",34),m(73,"img",35),n(),t(74,"div",36),m(75,"img",37),n(),t(76,"div",38),m(77,"img",39),n()()()()()()),a&2&&(s(8),S("formGroup",e.signupForm),s(7),g("is-valid",e.signupForm.controls.name.status!="INVALID")("is-invalid",e.signupForm.controls.name.dirty&&e.signupForm.hasError("required","name")),s(),d(16,e.signupForm.controls.name.dirty&&e.signupForm.hasError("required","name")?16:17),s(8),g("is-valid",e.signupForm.controls.email.status!="INVALID")("is-invalid",e.signupForm.controls.email.dirty&&e.signupForm.hasError("required","email")||e.signupForm.controls.email.dirty&&e.signupForm.hasError("email","email")),s(),d(25,e.signupForm.controls.email.dirty&&e.signupForm.hasError("required","email")||e.signupForm.controls.email.dirty&&e.signupForm.hasError("email","email")?25:26),s(8),g("is-valid",e.signupForm.controls.number.status!="INVALID"&&!e.signupForm.hasError("pattern","number"))("is-invalid",e.signupForm.controls.number.dirty&&e.signupForm.hasError("required","number")||e.signupForm.controls.number.dirty&&e.signupForm.hasError("pattern","number")),s(),d(34,e.signupForm.controls.number.dirty&&e.signupForm.hasError("required","number")||e.signupForm.controls.number.dirty&&e.signupForm.hasError("pattern","number")?34:35),s(8),g("is-valid",e.signupForm.controls.password.status!="INVALID"&&!e.signupForm.hasError("pattern","password"))("is-invalid",e.signupForm.controls.password.dirty&&e.signupForm.hasError("required","password")||e.signupForm.controls.password.dirty&&e.signupForm.hasError("pattern","password")),s(),d(43,e.signupForm.controls.password.dirty&&e.signupForm.hasError("required","password")||e.signupForm.controls.password.dirty&&e.signupForm.hasError("pattern","password")?43:44),s(8),g("is-valid",e.signupForm.controls.confirmpassword.status!="INVALID"&&e.f.password.value===e.f.confirmpassword.value)("is-invalid",e.signupForm.controls.confirmpassword.dirty&&e.signupForm.hasError("required","confirmpassword")||e.f.password.value!==e.f.confirmpassword.value),s(),d(52,e.signupForm.controls.confirmpassword.dirty&&e.signupForm.hasError("required","confirmpassword")||e.f.password.value!==e.f.confirmpassword.value?52:53))},dependencies:[x,N,E,P,M,U,T,L],styles:['.loginbtn[_ngcontent-%COMP%]{background-color:#ff0101;color:#fdfeff;height:36px;border:none}section[_ngcontent-%COMP%]{background:url("./media/night-view-waibaidu-bridge-blue-tone-5FGP6U6U.jpg");background-size:cover}section[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(0deg,#f5f5f5bf 14%,#f1ebebe6 97%)}.bg-account[_ngcontent-%COMP%]{background:#ff000028}.main[_ngcontent-%COMP%]{display:flex;min-height:100vh;align-items:center;justify-content:center}.main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{width:1176px;height:650px}input[_ngcontent-%COMP%]{background:#e1eaf4ad;border:rgba(122,124,132,.5568627451)}.account-heading[_ngcontent-%COMP%]{font-family:SecondaryFontMedium}.left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{max-width:400px}.left[_ngcontent-%COMP%]{background:#fff}.right[_ngcontent-%COMP%]{background-color:#0b3c99}.logo-account[_ngcontent-%COMP%]{width:120px;height:120px;position:absolute;right:2rem;bottom:2rem}.logo-account[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.dots1[_ngcontent-%COMP%]{position:absolute;width:164px;height:200px;left:2rem;bottom:0rem}.dots1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .dots2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.dots2[_ngcontent-%COMP%]{position:absolute;width:184px;height:200px;right:2rem;top:0rem}']});let i=o;return i})();var R=(i,o)=>b(v).isLoggedIn?b(v).currentUserLoggedInRole!=null?b(v).currentUserLoggedInRole=="customer"?b(h).createUrlTree(["/form"]):b(h).createUrlTree(["/admin"]):b(h).createUrlTree(["/auth/login"]):!0;var fe=[{path:"login",component:z,canActivate:[R]},{path:"register",component:X,canActivate:[R]}],B=(()=>{let o=class o{};o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=F({type:o}),o.\u0275inj=C({imports:[I.forChild(fe),I]});let i=o;return i})();var qe=(()=>{let o=class o{};o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=F({type:o}),o.\u0275inj=C({imports:[q,B,V]});let i=o;return i})();export{qe as AccountModule};
