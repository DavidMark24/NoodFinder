(this["webpackJsonpnood-finder"]=this["webpackJsonpnood-finder"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(26),i=c.n(a),r=(c(34),c(28)),l=c(2),o=(c(35),c(10)),d=c.p+"static/media/onlyFoodsLogo.cfddaad8.svg",j=c(0);var b=function(){return Object(j.jsx)("div",{className:"jumbotron logo py-4",children:Object(j.jsx)("img",{src:d,height:"250",alt:"Nood Finder Logo"})})},m=c.p+"static/media/dineInSquare.f0f32a23.jpg",u=c.p+"static/media/dineInLogo.70d936a5.svg",h=c.p+"static/media/eatOutSquare.ad40ba4f.jpg",x=c.p+"static/media/eatOutLogo.68975e36.svg";var p=function(){return Object(j.jsx)("footer",{className:"footer py-4 mt-5 font-small text-dark",children:Object(j.jsx)("div",{className:"footer-copyright text-center container-fluid",children:"\xa9 Nood Finder LLC, 2021"})})},g=c(7),O=c.n(g),v={getRecipeApi:function(e){return O.a.get("/api/recipesearch/"+e)},getRandomRecipe:function(e,t){return O.a.get("/api/cuisine/".concat(e,"/").concat(t))},handleYelp:function(e,t){return O.a.get("/api/restaurantsearch/"+e+"/"+t)}};var N=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),i=Object(o.a)(a,2),r=i[0],l=i[1];return Object(s.useEffect)((function(){v.getRecipeApi("chicken").then((function(e){console.log(e),n(e.data)})),v.handleYelp("sushi","Irvine,CA").then((function(e){console.log(e),l(e.data)}))}),[]),Object(j.jsxs)("div",{children:[console.log(c,r),Object(j.jsx)(b,{width:"50%"}),Object(j.jsx)("div",{class:"container",children:Object(j.jsxs)("div",{class:"row",children:[Object(j.jsxs)("div",{onClick:function(e){return window.location.href="/dinein"},class:"col-md-5 col-sm-12 shadow-lg p-3 m-5 rounded tan_bg",children:[Object(j.jsx)("div",{class:"box light_brown_bg p-2 rounded",children:Object(j.jsx)("img",{className:"rounded",src:m,width:"100%",alt:""})}),Object(j.jsx)("div",{class:"logo",children:Object(j.jsx)("img",{class:"mt-2 py-4",src:u,width:"90%",alt:""})})]}),Object(j.jsxs)("div",{onClick:function(e){return window.location.href="/eatout"},class:"col-md-5 col-sm-12 shadow-lg p-3 m-4 my-5 rounded tan_bg",children:[Object(j.jsx)("div",{class:"box light_brown_bg p-2 rounded",children:Object(j.jsx)("img",{className:"rounded",src:h,width:"100%",alt:""})}),Object(j.jsx)("div",{class:"logo",children:Object(j.jsx)("img",{class:"mt-2 py-4",src:x,width:"90%",alt:""})})]})]})}),Object(j.jsx)(p,{})]})},f=c(14),w=c.n(f),y=c(27),L=c.p+"static/media/logInLogo.4f32a49b.svg",k=c.p+"static/media/logInButton.87ad87fe.svg";var _=function(){function e(){return(e=Object(y.a)(w.a.mark((function e(t){var c,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c=document.getElementById("email-input").value,s=document.getElementById("password-input").value,O.a.post("/login",{email:c,password:s}).then((function(e){var t=e.data.token;console.log("token:",t)})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"row spacing"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2"}),Object(j.jsxs)("div",{className:"col-8 shadow-lg p-5 my-5 tan_bg rounded",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{src:L,alt:"LoginLogo",height:"100"})}),Object(j.jsxs)("form",{className:"login",children:[Object(j.jsx)("div",{className:"input-group input-group-lg mt-4 ",children:Object(j.jsx)("input",{type:"email",className:"form-control two-right-round-corners","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",id:"email-input",placeholder:"Email",required:!0})}),Object(j.jsx)("div",{className:"form-group h2 my-4",children:Object(j.jsx)("div",{className:"input-group input-group-lg",children:Object(j.jsx)("input",{type:"password",className:"form-control","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",id:"password-input",placeholder:"Password",required:!0})})}),Object(j.jsxs)("div",{style:{display:"none"},id:"alert",className:"alert alert-danger",role:"alert",children:[Object(j.jsx)("span",{className:"glyphicon glyphicon-exclamation-sign","aria-hidden":"true"}),Object(j.jsx)("span",{className:"sr-only",children:"Error:"})," ",Object(j.jsx)("span",{className:"msg"})]}),Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("button",{onClick:function(t){!function(t){e.apply(this,arguments)}(t),window.location.href="/choice"},type:"submit",className:"btn btn-primary mt-2 mb-1 mx-auto h3 btn-xl",children:Object(j.jsx)("img",{src:k,width:"100",alt:"loginbtn"})})})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("p",{className:"text-center",children:["Not a member? Sign up ",Object(j.jsx)("a",{className:"link-color",href:"/signup",children:"HERE!"})]}),Object(j.jsx)("p",{className:"text-center",children:Object(j.jsx)("a",{className:"link-color",href:"/enteremail",children:"Forgot password?"})})]}),Object(j.jsx)("div",{className:"col-2"})]}),Object(j.jsx)(p,{})]})};var C=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:" Main "}),Object(j.jsx)(p,{})]})},E=c.p+"static/media/signUpLogo.a367030a.svg",S=c.p+"static/media/signUpButton.4c1e738d.svg";var B=function(){var e=function(e){return document.getElementById(e).value};return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"row spacing"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2"}),Object(j.jsxs)("div",{className:"col-8 shadow-lg p-5 my-5 tan_bg rounded",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{src:E,alt:"LoginLogo",height:"100"})}),Object(j.jsxs)("form",{className:"login",children:[Object(j.jsx)("div",{className:"input-group input-group-lg mt-4 ",children:Object(j.jsx)("input",{type:"text",className:"form-control two-right-round-corners","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",id:"firstname-input",placeholder:"First Name",required:!0})}),Object(j.jsx)("div",{className:"input-group input-group-lg mt-4 ",children:Object(j.jsx)("input",{type:"text",className:"form-control two-right-round-corners","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",id:"lastname-input",placeholder:"Last Name",required:!0})}),Object(j.jsx)("div",{className:"input-group input-group-lg mt-4 ",children:Object(j.jsx)("input",{type:"email",className:"form-control two-right-round-corners","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",id:"email-input",placeholder:"Email",required:!0})}),Object(j.jsx)("div",{className:"form-group h2 my-4",children:Object(j.jsx)("div",{className:"input-group input-group-lg",children:Object(j.jsx)("input",{type:"password",className:"form-control","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",id:"password-input",placeholder:"Password",required:!0})})}),Object(j.jsx)("div",{class:"form-group h2 my-4",children:Object(j.jsx)("div",{class:"input-group input-group-lg",children:Object(j.jsx)("input",{type:"password",class:"form-control","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",id:"password-confirm",placeholder:"Confirm Password",required:!0})})}),Object(j.jsxs)("div",{style:{display:"none"},id:"alert",className:"alert alert-danger",role:"alert",children:[Object(j.jsx)("span",{className:"glyphicon glyphicon-exclamation-sign","aria-hidden":"true"}),Object(j.jsx)("span",{className:"sr-only",children:"Error:"})," ",Object(j.jsx)("span",{className:"msg"})]}),Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("button",{onClick:function(t){!function(t){t.preventDefault();var c=["firstname-input","lastname-input","email-input","password-input","password-confirm"].map(e);if(c[3]!==c[4])return"passwords do not match.";var s={};["firstName","lastName","email","password"].forEach((function(e,t){return s[e]=c[t]})),O.a.post("/newUser",s).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}(t),window.location.href="/choice"},type:"submit",className:"btn btn-secondary mt-2 mb-1 mx-auto h3 btn-xl",children:Object(j.jsx)("img",{src:S,width:"100",alt:"loginbtn"})})})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("p",{className:"text-center",children:["Already a member? Sign in ",Object(j.jsx)("a",{className:"link-color",href:"/",children:"HERE!"})]})]}),Object(j.jsx)("div",{className:"col-2"})]}),Object(j.jsx)(p,{})]})},D=c.p+"static/media/lemon.75b5b79d.jpg";var F=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"row tan_bg splashSpacingTop",children:Object(j.jsx)("img",{src:D,alt:""})}),Object(j.jsx)("div",{className:"row pink_bg splashSpacingBottom",children:Object(j.jsx)("h1",{className:"white text-center",children:" Welcome "})})]})};var I=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:" User "})})},q=c.p+"static/media/resetPassword.b54b5c68.svg",z=c.p+"static/media/submitButton.d34069d6.svg";var R=function(){function e(e){e.preventDefault(),O.a.post("/passwordreset",{email:document.getElementById("email-input").value}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"row spacing"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2"}),Object(j.jsxs)("div",{className:"col-8 shadow-lg px-5 pt-5 pb-3 my-5 tan_bg rounded",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{src:q,alt:"LoginLogo",height:"100%"})}),Object(j.jsxs)("form",{onSubmit:function(t){return e(t)},className:"login mt-5",children:[Object(j.jsx)("div",{className:"input-group input-group-lg mt-4 ",children:Object(j.jsx)("input",{type:"email",className:"form-control two-right-round-corners","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",id:"email-input",placeholder:"Enter Your Email",required:!0})}),Object(j.jsxs)("div",{style:{display:"none"},id:"alert",className:"alert alert-danger",role:"alert",children:[Object(j.jsx)("span",{className:"glyphicon glyphicon-exclamation-sign","aria-hidden":"true"}),Object(j.jsx)("span",{className:"sr-only",children:"Error:"})," ",Object(j.jsx)("span",{className:"msg"})]}),Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("button",{onClick:function(t){return e(t)},type:"submit",className:"btn btn-secondary m-3 mt-4 h3 btn-xl",children:Object(j.jsx)("img",{src:z,width:"100",alt:"loginbtn"})})})]}),Object(j.jsx)("br",{})]}),Object(j.jsx)("div",{className:"col-2"})]}),Object(j.jsx)(p,{})]})};var G=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"row spacing"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2"}),Object(j.jsxs)("div",{className:"col-8 shadow-lg px-5 pt-5 pb-3 my-5 tan_bg rounded",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{src:q,alt:"LoginLogo",height:"100%"})}),Object(j.jsxs)("form",{className:"login mt-5",children:[Object(j.jsx)("div",{className:"input-group input-group-lg mt-4 ",children:Object(j.jsx)("div",{className:"input-group input-group-lg",children:Object(j.jsx)("input",{type:"password",className:"form-control","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",id:"password-input",placeholder:"Enter a New Password",required:!0})})}),Object(j.jsxs)("div",{style:{display:"none"},id:"alert",className:"alert alert-danger",role:"alert",children:[Object(j.jsx)("span",{className:"glyphicon glyphicon-exclamation-sign","aria-hidden":"true"}),Object(j.jsx)("span",{className:"sr-only",children:"Error:"})," ",Object(j.jsx)("span",{className:"msg"})]}),Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("button",{onClick:function(e){return function(e){e.preventDefault();var t=new URLSearchParams(window.location.search),c={userID:t.get("id"),token:t.get("token"),newPassword:document.getElementById("password-input").value};O.a.post("/resetpassword",c).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}(e)},type:"submit",className:"btn btn-primary m-3 mt-4 h3 btn-xl",children:Object(j.jsx)("img",{src:z,width:"100",alt:"loginbtn"})})})]}),Object(j.jsx)("br",{})]}),Object(j.jsx)("div",{className:"col-2"})]}),Object(j.jsx)(p,{})]})},P=c.p+"static/media/location.129e3d9b.svg";var T=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"row spacing"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2"}),Object(j.jsxs)("div",{className:"col-8 shadow-lg px-5 pt-5 pb-3 my-5 tan_bg rounded",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{src:P,alt:"LoginLogo",height:"100"})}),Object(j.jsxs)("form",{className:"login mt-5",children:[Object(j.jsx)("div",{className:"input-group input-group-lg mt-4 ",children:Object(j.jsx)("div",{className:"input-group input-group-lg",children:Object(j.jsx)("input",{type:"text",className:"form-control","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",id:"location-input",placeholder:"Enter your city or zipcode",required:!0})})}),Object(j.jsxs)("div",{style:{display:"none"},id:"alert",className:"alert alert-danger",role:"alert",children:[Object(j.jsx)("span",{className:"glyphicon glyphicon-exclamation-sign","aria-hidden":"true"}),Object(j.jsx)("span",{className:"sr-only",children:"Error:"})," ",Object(j.jsx)("span",{className:"msg"})]}),Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-primary m-3 mt-4 h3 btn-xl",children:Object(j.jsx)("img",{src:z,width:"100",alt:"loginbtn"})})})]}),Object(j.jsx)("br",{})]}),Object(j.jsx)("div",{className:"col-2"})]}),Object(j.jsx)(p,{})]})},U=c.p+"static/media/rejectButton.66270462.svg",A=c.p+"static/media/acceptButton.bc35eff8.svg";var M=function(e){var t=Object(s.useState)([]),c=Object(o.a)(t,2),n=c[0],a=c[1],i=Object(s.useState)(0),r=Object(o.a)(i,2),l=r[0],d=r[1];function b(e){e.preventDefault(),d(l+1)}return Object(s.useEffect)((function(){v.getRandomRecipe("mexican","lunch").then((function(e){var t=e.data.map((function(e){return e.recipe})).filter((function(e){return 0!==e.totalTime})).filter((function(e){return 0!==e.yield}));!function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),s=[e[c],e[t]];e[t]=s[0],e[c]=s[1]}}(t),a(t)}))}),[]),console.log("allRecipes:",n),Object(j.jsxs)("div",{children:[null==n[l]?Object(j.jsx)("div",{className:"d-flex mt-5 justify-content-center",children:Object(j.jsx)("div",{className:"spinner-border text-warning",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"jumbotron logo py-4",children:Object(j.jsx)("img",{src:u,height:"150",alt:"Nood Finder Logo"})}),Object(j.jsx)("div",{className:"container logo",children:Object(j.jsxs)("div",{className:"col-md-5 col-sm-12 shadow-lg p-3 m-4 my-5 extra-rounded tan_bg",children:[Object(j.jsx)("div",{className:"box light_brown_bg p-2 rounded",children:Object(j.jsx)("img",{className:"rounded",src:n[l].image,width:"100%",alt:""})}),Object(j.jsxs)("div",{className:"p-3",children:[Object(j.jsx)("div",{className:"row text-center",children:Object(j.jsx)("h2",{children:Object(j.jsx)("strong",{children:n[l].label})})}),Object(j.jsx)("div",{className:"row text-center",children:Object(j.jsxs)("h3",{children:["Preparation Time: ",n[l].totalTime]})}),Object(j.jsx)("div",{className:"row text-center",children:Object(j.jsxs)("h3",{children:["Servings: ",n[l].yield]})}),Object(j.jsxs)("div",{className:"row text-center mt-4",children:[Object(j.jsx)("div",{className:"col-4",children:Object(j.jsx)("img",{onClick:function(e){return b(e)},src:U,width:"100%",alt:""})}),Object(j.jsx)("div",{className:"col-4"}),Object(j.jsx)("div",{className:"col-4",children:Object(j.jsx)("img",{onClick:function(e){return b(e)},src:A,width:"100%",alt:""})})]})]})]})})]}),Object(j.jsx)(p,{})]})};var H=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"jumbotron logo py-4",children:Object(j.jsx)("img",{src:x,height:"150",alt:"Nood Finder Logo"})}),Object(j.jsx)("div",{className:"container logo",children:Object(j.jsxs)("div",{className:"col-md-5 col-sm-12 shadow-lg p-3 m-4 my-5 extra-rounded tan_bg",children:[Object(j.jsx)("div",{className:"box light_brown_bg p-2 rounded",children:Object(j.jsx)("img",{className:"rounded",src:h,width:"100%",alt:""})}),Object(j.jsxs)("div",{className:"p-3",children:[Object(j.jsx)("div",{className:"row text-center",children:Object(j.jsx)("h1",{children:Object(j.jsx)("strong",{children:"Restaurant"})})}),Object(j.jsx)("div",{className:"row text-center",children:Object(j.jsx)("h3",{children:"Hours"})}),Object(j.jsx)("div",{className:"row text-center",children:Object(j.jsx)("h3",{children:"1-800-SND-NOOD"})}),Object(j.jsxs)("div",{className:"row text-center mt-4",children:[Object(j.jsx)("div",{className:"col-4",children:Object(j.jsx)("img",{onClick:function(e){return alert("Disliked")},src:U,width:"100%",alt:""})}),Object(j.jsx)("div",{className:"col-4"}),Object(j.jsx)("div",{className:"col-4",children:Object(j.jsx)("img",{onClick:function(e){return alert("Liked")},src:A,width:"100%",alt:""})})]})]})]})}),Object(j.jsx)(p,{})]})},Y=c.p+"static/media/genre.9ca5ad1c.svg";var J=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"jumbotron logo py-4",children:Object(j.jsx)("img",{src:Y,height:"150",alt:"Nood Finder Logo"})}),Object(j.jsx)("div",{className:"container logo",children:Object(j.jsxs)("div",{className:"col-md-5 col-sm-12 shadow-lg p-3 m-4 my-5 extra-rounded tan_bg",children:[Object(j.jsx)("div",{className:"box light_brown_bg p-2 rounded",children:Object(j.jsx)("img",{className:"rounded",src:m,width:"100%",alt:""})}),Object(j.jsxs)("div",{className:"p-3",children:[Object(j.jsx)("div",{className:"row text-center",children:Object(j.jsx)("h1",{children:Object(j.jsx)("strong",{children:"Cuisine"})})}),Object(j.jsxs)("div",{className:"row text-center mt-4",children:[Object(j.jsx)("div",{className:"col-4",children:Object(j.jsx)("img",{onClick:function(e){return alert("Disliked")},src:U,width:"100%",alt:""})}),Object(j.jsx)("div",{className:"col-4"}),Object(j.jsx)("div",{className:"col-4",children:Object(j.jsx)("img",{onClick:function(e){return alert("Liked")},src:A,width:"100%",alt:""})})]})]})]})}),Object(j.jsx)(p,{})]})},W=c.p+"static/media/subgenre.7dce1090.svg";var K=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"jumbotron logo py-4",children:Object(j.jsx)("img",{src:W,height:"150",alt:"Nood Finder Logo"})}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{onClick:function(e){return alert("Breakfast")},className:"text-center m-4 cuisine-box box extra-rounded tan_bg col-md-5 col-sm-12 white",children:Object(j.jsx)("h2",{children:Object(j.jsx)("strong",{children:"Breakfast"})})}),Object(j.jsx)("div",{onClick:function(e){return alert("Brunch")},className:"text-center m-4 cuisine-box box extra-rounded tan_bg col-md-5 col-sm-12 white",children:Object(j.jsx)("h2",{children:Object(j.jsx)("strong",{children:"Brunch"})})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{onClick:function(e){return alert("Lunch")},className:"text-center m-4 cuisine-box box extra-rounded tan_bg col-md-5 col-sm-12 white",children:Object(j.jsx)("h2",{children:Object(j.jsx)("strong",{children:"Lunch"})})}),Object(j.jsx)("div",{onClick:function(e){return alert("Dinner")},className:"text-center m-4 cuisine-box box extra-rounded tan_bg col-md-5 col-sm-12 white",children:Object(j.jsx)("h2",{children:Object(j.jsx)("strong",{children:"Dinner"})})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{onClick:function(e){return alert("Dessert")},className:"text-center m-4 cuisine-box box extra-rounded tan_bg col-md-5 col-sm-12 white",children:Object(j.jsx)("h2",{children:Object(j.jsx)("strong",{children:"Dessert"})})}),Object(j.jsx)("div",{onClick:function(e){return alert("Snacks")},className:"text-center m-4 cuisine-box box extra-rounded tan_bg col-md-5 col-sm-12 white",children:Object(j.jsx)("h2",{children:Object(j.jsx)("strong",{children:"Snacks"})})})]})]}),Object(j.jsx)(p,{})]})};var Q=function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",component:_}),Object(j.jsx)(l.a,{exact:!0,path:"/signup",component:B}),Object(j.jsx)(l.a,{exact:!0,path:"/choice",component:N}),Object(j.jsx)(l.a,{path:"/main",component:C}),Object(j.jsx)(l.a,{path:"/splash",component:F}),Object(j.jsx)(l.a,{path:"/user",component:I}),Object(j.jsx)(l.a,{path:"/enteremail",component:R}),Object(j.jsx)(l.a,{path:"/resetpassword/",component:G}),Object(j.jsx)(l.a,{path:"/location",component:T}),Object(j.jsx)(l.a,{path:"/dinein",component:M}),Object(j.jsx)(l.a,{path:"/eatout",component:H}),Object(j.jsx)(l.a,{path:"/cuisines",component:J}),Object(j.jsx)(l.a,{path:"/meals",component:K})]})})},V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(Q,{})}),document.getElementById("root")),V()}},[[61,1,2]]]);
//# sourceMappingURL=main.cf0616d5.chunk.js.map