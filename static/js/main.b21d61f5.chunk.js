(this["webpackJsonpecommerce-seller"]=this["webpackJsonpecommerce-seller"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},44:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(3),n=c.n(a),l=c(32),r=c.n(l),i=(c(39),c(7)),o=(c(40),c(16)),d=c(9),j=c(21),b=j.a.initializeApp({apiKey:"AIzaSyDIPlDdqKYfpAFM6Yum7jig3WPnkLBYOyg",authDomain:"tybca-project.firebaseapp.com",projectId:"tybca-project",storageBucket:"tybca-project.appspot.com",messagingSenderId:"837424055879",appId:"1:837424055879:web:dced06ea9558f5930f5362",measurementId:"G-27XZ19T96Y"}).firestore(),m=j.a.auth(),u=j.a.storage().ref(),h=j.a.storage(),O=b,p=c(17),x=c(11);c(44);var f=function(){var e=Object(a.useState)({email:"",password:""}),t=Object(i.a)(e,2),c=t[0],n=t[1],l=Object(a.useState)(),r=Object(i.a)(l,2),d=r[0],j=r[1],b=function(e){var t=e.target;n(Object(x.a)(Object(x.a)({},c),{},Object(p.a)({},t.id,t.value)))};return Object(s.jsx)("div",{className:"signIn",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:d&&Object(s.jsxs)("div",{className:"alert alert-danger alert-dismissible fade show m-3",role:"alert",children:[d,Object(s.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})})}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"signIn__form",children:[Object(s.jsx)("h2",{children:"Sign In"}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m.signInWithEmailAndPassword(c.email,c.password).then((function(){return console.log("SignIn Successful")})).catch((function(e){return j(null===e||void 0===e?void 0:e.message)}))},children:[Object(s.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address:"}),Object(s.jsx)("input",{type:"email",className:"form-control",id:"email",onChange:b,value:c.email,required:!0}),Object(s.jsx)("label",{htmlFor:"password",className:"form-label mt-1",children:"Password:"}),Object(s.jsx)("input",{type:"password",className:"form-control",id:"password",onChange:b,value:c.password,required:!0}),Object(s.jsx)("input",{type:"submit",className:"btn btn-primary mt-2",value:"Sign in"}),Object(s.jsx)(o.b,{to:"/signup",className:"btn btn-link mt-2",children:"Not a member? Create an account here."})]})]})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/tybca-project.appspot.com/o/assets%2FScreenshot%202021-01-27%20122352.jpg?alt=media&token=5d70f4f2-4efe-480f-8461-a4291960a1b6",alt:"banner"})})]})]})})};c(49);var g=function(e){var t=e.currentStep,c=e.state,a=e.handleChange;return 1!==t?null:Object(s.jsxs)("div",{id:"stage1 container",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("h3",{className:"mb-3",children:"Account Information"})})}),Object(s.jsxs)("div",{className:"row g-2",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"form-floating mb-1",children:[Object(s.jsx)("input",{type:"text",className:"form-control",id:"fname",placeholder:"First Name",onChange:a,value:c.fname,required:!0}),Object(s.jsx)("label",{htmlFor:"fname",children:"First Name"})]})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"form-floating mb-1",children:[Object(s.jsx)("input",{type:"text",className:"form-control",id:"lname",placeholder:"Last Name",onChange:a,value:c.lname,required:!0}),Object(s.jsx)("label",{htmlFor:"lname",children:"Last Name"})]})})]}),Object(s.jsxs)("div",{className:"row g-2",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"form-floating mb-1",children:[Object(s.jsx)("input",{type:"text",className:"form-control",id:"phone",placeholder:"Phone No.",onChange:a,value:c.phone,pattern:"^[\\d]{10}$",title:"Should contain 10 digits.",required:!0}),Object(s.jsx)("label",{htmlFor:"phone",children:"Phone No."})]})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"form-floating mb-1",children:[Object(s.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Email",onChange:a,value:c.email,required:!0}),Object(s.jsx)("label",{htmlFor:"email",children:"Email"})]})})]}),Object(s.jsxs)("div",{className:"row g-2",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"form-floating mb-1",children:[Object(s.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",onChange:a,value:c.password,required:!0,minLength:8}),Object(s.jsx)("label",{htmlFor:"password",children:"Password"})]})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"form-floating mb-1",children:[Object(s.jsx)("input",{type:"password",className:"form-control",id:"confirmPassword",placeholder:"Confirm Password",onChange:a,value:c.confirmPassword,required:!0,minLength:8}),Object(s.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"})]})})]})]})};var v=function(e){var t=e.currentStep,c=e.state,a=e.handleChange;return 2!==t?null:Object(s.jsxs)("div",{id:"stage2 container",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("h3",{className:"mb-3",children:"Business Information"})})}),Object(s.jsx)("div",{className:"row g-2",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"form-floating",children:[Object(s.jsx)("input",{type:"text",className:"form-control",id:"storeName",placeholder:"Store Name",onChange:a,value:c.storeName,required:!0}),Object(s.jsx)("label",{htmlFor:"storeName",children:"Store Name"})]})})}),Object(s.jsx)("div",{className:"row g-2",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("h5",{className:"mt-2",children:"Business Address"})})}),Object(s.jsxs)("div",{className:"row g-2 mb-2",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"form-floating",children:[Object(s.jsx)("input",{type:"text",className:"form-control",id:"shopNo",placeholder:"Shop No.",onChange:a,value:c.shopNo,required:!0}),Object(s.jsx)("label",{htmlFor:"shopNo",children:"Shop No."})]})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"form-floating",children:[Object(s.jsx)("input",{type:"text",className:"form-control",id:"pincode",placeholder:"Pincode",onChange:a,value:c.pincode,required:!0}),Object(s.jsx)("label",{htmlFor:"pincode",children:"Pincode"})]})})]}),Object(s.jsxs)("div",{className:"row g-2 mb-2",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"form-floating",children:[Object(s.jsx)("input",{type:"text",className:"form-control",id:"city",placeholder:"City",onChange:a,value:c.city,required:!0}),Object(s.jsx)("label",{htmlFor:"city",children:"City"})]})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"form-floating",children:[Object(s.jsx)("input",{type:"text",className:"form-control",id:"state",placeholder:"State",onChange:a,value:c.state,required:!0}),Object(s.jsx)("label",{htmlFor:"state",children:"State"})]})}),Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"form-floating",children:[Object(s.jsx)("input",{type:"text",className:"form-control",id:"country",placeholder:"Country",onChange:a,value:c.country,required:!0}),Object(s.jsx)("label",{htmlFor:"country",children:"Country"})]})})]})]})};var N=function(e){var t=e.currentStep,c=e.state,a=e.handleChange;return 3!==t?null:Object(s.jsxs)("div",{id:"stage3 container",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("h3",{className:"mb-3",children:"Billing Information"})})}),Object(s.jsx)("div",{className:"row mb-2",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"form-floating",children:[Object(s.jsx)("input",{type:"text",className:"form-control",id:"cardHoldersName",placeholder:"Card Holder Name",onChange:a,value:c.cardHoldersName,required:!0}),Object(s.jsx)("label",{htmlFor:"cardHoldersName",children:"Card Holder's Name"})]})})}),Object(s.jsxs)("div",{className:"row g-2 mb-2",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"form-floating",children:[Object(s.jsx)("input",{type:"text",className:"form-control",id:"cardNumber",placeholder:"Card Number",onChange:a,value:c.cardNumber,required:!0}),Object(s.jsx)("label",{htmlFor:"cardNumber",children:"Card Number"})]})}),Object(s.jsx)("div",{className:"col-2",children:Object(s.jsxs)("div",{className:"form-floating",children:[Object(s.jsx)("input",{type:"number",className:"form-control",id:"cvv",placeholder:"CVV",minLength:"3",maxLength:"3",onChange:a,value:c.cvv,required:!0}),Object(s.jsx)("label",{htmlFor:"cvv",children:"CVV"})]})})]}),Object(s.jsx)("div",{className:"row mb-2",children:Object(s.jsx)("div",{className:"col-3",children:Object(s.jsx)("h5",{children:"Expiry Date"})})}),Object(s.jsxs)("div",{className:"row g-2 mb-2",children:[Object(s.jsx)("div",{className:"col-3",children:Object(s.jsxs)("div",{className:"form-floating",children:[Object(s.jsxs)("select",{className:"form-select",id:"month",onChange:a,value:c.month,required:!0,children:[Object(s.jsx)("option",{value:"",children:" --Select-- "}),Object(s.jsx)("option",{value:"January",children:"January"}),Object(s.jsx)("option",{value:"February",children:"February"}),Object(s.jsx)("option",{value:"March",children:"March"}),Object(s.jsx)("option",{value:"April",children:"April"}),Object(s.jsx)("option",{value:"May",children:"May"}),Object(s.jsx)("option",{value:"June",children:"June"}),Object(s.jsx)("option",{value:"July",children:"July"}),Object(s.jsx)("option",{value:"August",children:"August"}),Object(s.jsx)("option",{value:"September",children:"September"}),Object(s.jsx)("option",{value:"October",children:"October"}),Object(s.jsx)("option",{value:"November",children:"November"}),Object(s.jsx)("option",{value:"December",children:"December"})]}),Object(s.jsx)("label",{htmlFor:"month",children:"Month"})]})}),Object(s.jsx)("div",{className:"col-3",children:Object(s.jsxs)("div",{className:"form-floating",children:[Object(s.jsxs)("select",{className:"form-select",id:"year",onChange:a,value:c.year,required:!0,children:[Object(s.jsx)("option",{value:"",children:" --Select-- "}),function(){for(var e=(new Date).getFullYear(),t=[],c=e;c<=e+10;c++)t.push(c);return t}().map((function(e){return Object(s.jsx)("option",{value:e,children:e},e)}))]}),Object(s.jsx)("label",{htmlFor:"month",children:"Year"})]})})]})]})};var y=function(e){return 4!==e.currentStep?null:Object(s.jsxs)("div",{id:"stage4",className:"text-center",children:[Object(s.jsx)("h2",{children:"Success !"}),Object(s.jsx)("i",{className:"fas fa-check-circle text-success my-5",style:{fontSize:"80px"}}),Object(s.jsxs)("h4",{className:"text-muted",children:["You Have Successfully ",Object(s.jsx)("br",{})," Signed Up"]})]})};var w=function(){var e=Object(a.useState)(1),t=Object(i.a)(e,2),c=t[0],n=t[1],l=Object(a.useState)({fname:"",lname:"",phone:"",email:"",password:"",confirmPassword:"",storeName:"",shopNo:"",pincode:"",city:"",state:"",country:"",cardHoldersName:"",cardNumber:"",cvv:"",month:"",year:""}),r=Object(i.a)(l,2),d=r[0],j=r[1],b=Object(a.useRef)(),u=Object(a.useState)(),h=Object(i.a)(u,2),f=h[0],w=h[1],S=function(e){b.current.querySelectorAll("li")[e].classList.toggle("active")},C=function(){m.createUserWithEmailAndPassword(d.email,d.password).then((function(e){var t=e.user.uid;m.currentUser.updateProfile({displayName:"".concat(d.fname," ").concat(d.lname)}),O.doc(t).set({email:d.email,phone:d.phone,businessInfo:{storeName:d.storeName,shopNo:d.shopNo,pincode:d.pincode,city:d.city,state:d.state,country:d.country},billingInfo:{cardHoldersName:d.cardHoldersName,cardNumber:d.cardNumber,cvv:d.cvv,month:d.month,year:d.year}}).then((function(){m.signInWithEmailAndPassword(d.email,d.password)}))})).catch((function(e){return w(e.message)}))},F=function(e){var t=e.target;j(Object(x.a)(Object(x.a)({},d),{},Object(p.a)({},t.id,t.value)))};return Object(s.jsx)("div",{className:"signUp",children:Object(s.jsxs)("div",{className:"signUp__form",children:[Object(s.jsxs)("div",{className:"signUp__header p-4",children:[Object(s.jsx)("h1",{children:"Sign Up"}),Object(s.jsx)("h5",{className:"text-muted",children:"Fill all form fields to go to next step."})]}),Object(s.jsxs)("ul",{id:"signUp__progressbar",ref:b,children:[Object(s.jsx)("li",{className:"active",id:"account",children:Object(s.jsx)("strong",{children:"Account"})}),Object(s.jsx)("li",{id:"business",children:Object(s.jsx)("strong",{children:"Business"})}),Object(s.jsx)("li",{id:"billing",children:Object(s.jsx)("strong",{children:"Billing"})}),Object(s.jsx)("li",{id:"confirm",children:Object(s.jsx)("strong",{children:"Finish"})})]}),f&&Object(s.jsxs)("div",{className:"alert alert-danger alert-dismissible fade show m-3",role:"alert",children:[f,Object(s.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=c+1;1===c&&d.password!==d.confirmPassword?w("Passwords do not Match."):n(t),t<5&&S(c),4===t&&C()},children:[Object(s.jsxs)("div",{className:"signUp__stages",children:[Object(s.jsx)(g,{currentStep:c,state:d,handleChange:F}),Object(s.jsx)(v,{currentStep:c,state:d,handleChange:F}),Object(s.jsx)(N,{currentStep:c,state:d,handleChange:F}),Object(s.jsx)(y,{currentStep:c})]}),Object(s.jsxs)("div",{className:"signUp__actions",children:[Object(s.jsx)("button",{className:"signUp__prevBtn btn btn-secondary ".concat((!(c>1)||4===c)&&"d-none"),onClick:function(e){e.preventDefault();var t=c-1;n(t),t>0&&S(t)},children:"Previous"}),Object(s.jsx)("button",{type:"submit",className:"\n                btn mx-2\n                ".concat(4===c&&"d-none"," \n                ").concat(3===c?"btn-success":"signUp__nextBtn","\n              "),children:3===c?"Finish":"Next"}),Object(s.jsx)("br",{}),Object(s.jsx)(o.b,{to:"/signin",className:"btn btn-link",children:"Already a member? Click here to sign in."})]})]})]})})};c(50);function S(e){var t=e.text,c=e.link;return Object(s.jsx)(o.c,{exact:!0,className:"btn text-light",activeClassName:"btn-primary",to:c,children:t})}var C=function(){return Object(s.jsx)("nav",{className:"header",children:Object(s.jsxs)("div",{className:"header__container",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)(o.b,{to:"/",children:Object(s.jsx)("img",{className:"header__logo",src:"https://josephreisigl.files.wordpress.com/2015/08/amazonlogo.png",alt:"logo"})}),Object(s.jsx)(S,{text:"Dashboard",link:"/"}),Object(s.jsx)(S,{text:"Products",link:"/products"})]}),Object(s.jsx)("button",{className:"header__logoutBtn btn btn-secondary",onClick:function(){return m.signOut()},children:"Logout"})]})})},F=function(e){var t=e.id,c=e.buttonText,a=e.buttonIcon,n=e.className,l=e.title,r=e.children;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("button",{type:"button",className:n||"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#".concat(t),children:[Object(s.jsx)("i",{className:"".concat(a," mx-1")}),c]}),Object(s.jsx)("div",{className:"modal fade",id:t,"data-bs-backdrop":"static","data-bs-keyboard":"false",tabIndex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:Object(s.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(s.jsxs)("div",{className:"modal-content",children:[Object(s.jsxs)("div",{className:"modal-header",children:[Object(s.jsx)("h5",{className:"modal-title",id:"staticBackdropLabel",children:l}),Object(s.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(s.jsx)("div",{className:"modal-body  p-0",children:r})]})})})]})};c(51),c(52),c(53);var P=function(e){var t=e.images,c=Object(a.useState)(""),n=Object(i.a)(c,2),l=n[0],r=n[1];return Object(a.useEffect)((function(){r(t[0])}),[t]),Object(s.jsxs)("div",{className:"product__images-display",children:[Object(s.jsx)("div",{className:"product__images-main",children:Object(s.jsx)("img",{src:l,alt:"Product"})}),Object(s.jsx)("div",{className:"product__images-sub",children:t.map((function(e,c){return Object(s.jsx)("img",{alt:c,src:e,onClick:function(){return function(e){r(t[e])}(c)}},c)}))})]})};var k=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],l=Object(a.useState)([]),r=Object(i.a)(l,2),o=r[0],d=r[1],j=m.currentUser.uid;return Object(a.useEffect)((function(){var e=O.collection("products").where("sellerId","==",j).onSnapshot((function(e){n(e.docs.map((function(e){return Object(x.a)(Object(x.a)({},e.data()),{},{id:e.id})})))}));return function(){e()}}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("table",{className:"productsTable table table-striped table-hover",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{className:"table-dark",children:[Object(s.jsx)("th",{children:"Product Id"}),Object(s.jsx)("th",{children:"Title"}),Object(s.jsx)("th",{children:"Description"}),Object(s.jsx)("th",{children:"Category"}),Object(s.jsx)("th",{children:"Price"}),Object(s.jsx)("th",{children:"Stock"}),Object(s.jsx)("th",{children:"Tags"}),Object(s.jsx)("th",{children:"Images"}),Object(s.jsx)("th",{children:"Actions"})]})}),Object(s.jsx)("tbody",{children:c.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.id}),Object(s.jsx)("td",{children:e.title}),Object(s.jsx)("td",{className:"text-truncate",children:e.description}),Object(s.jsx)("td",{className:"text-truncate",children:e.category}),Object(s.jsx)("td",{children:e.price}),Object(s.jsx)("td",{children:e.stock}),Object(s.jsx)("td",{children:e.tags.map((function(e){return"".concat(e,", ")}))}),Object(s.jsx)("td",{children:Object(s.jsx)("button",{onClick:function(){return d(e.images)},className:"btn btn-secondary btn-sm","data-bs-toggle":"modal","data-bs-target":"#previewImagesModal",children:"View"})}),Object(s.jsxs)("td",{children:[Object(s.jsx)("button",{onClick:function(){return t=e.id,void console.log(t);var t},className:"btn btn-primary btn-sm me-1","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Edit/Update",children:Object(s.jsx)("i",{className:"fas fa-pen"})}),Object(s.jsx)("button",{onClick:function(){return function(e,t){console.log(e);var c=t.map((function(e){return h.refFromURL(e).delete()}));return Promise.all(c).then((function(){O.doc("products/".concat(e)).delete().then((function(){return console.log("Delete Successful")})).catch((function(e){return console.log(e)}))}))}(e.id,e.images)},className:"btn btn-danger btn-sm","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Delete",children:Object(s.jsx)("i",{className:"fas fa-trash"})})]})]},e.id)}))})]}),Object(s.jsx)(F,{id:"previewImagesModal",title:"Images (Preview)",className:"d-none",children:Object(s.jsx)(P,{images:o})})]})},I=c(19);c(54),c(55);var U=function(e){var t=e.id,c=e.handleDelete,n=e.image,l=e.shouldUploadImgs,r=e.getDownloadURL,o=Object(a.useState)(0),d=Object(i.a)(o,2),b=d[0],m=d[1];return Object(a.useEffect)((function(){if(l){var e=n.file,t=(new Date).toString().slice(0,-31).replaceAll(" ","-"),c="".concat(t," - ").concat(n.name),s={contentType:n.type},a=u.child("products/".concat(c)).put(e,s);a.on(j.a.storage.TaskEvent.STATE_CHANGED,(function(e){var t=parseInt(e.bytesTransferred/e.totalBytes*100);console.log("Upload is "+t+"% done"),m(t)}),(function(e){switch(e.code){case"storage/unauthorized":console.log("User doesn't have permission to access the object");break;case"storage/canceled":console.log("User canceled the upload");break;case"storage/unknown":default:console.log("Unknown error occurred, inspect error.serverResponse")}}),(function(){a.snapshot.ref.getDownloadURL().then((function(e){r(e),console.log("File available at",e)}))}))}}),[l]),Object(s.jsxs)("div",{className:"uploaderTask ".concat(l&&"uploaderTask-uploading"),"data-imgindex":t,children:[l?Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"progress-bar  progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":b,"aria-valuemin":"0","aria-valuemax":"100",style:{width:"".concat(b,"%")}})}):Object(s.jsx)("span",{onClick:c,children:"\xd7"}),Object(s.jsx)("img",{src:n.src,alt:n.name})]})};var _=function(e){var t=e.shouldUploadImgs,c=e.setShouldUploadImgs,n=e.dispatchImageURLs,l=e.isDisabled,r=Object(a.useState)([]),o=Object(i.a)(r,2),d=o[0],j=o[1],b=Object(a.useState)(!1),m=Object(i.a)(b,2),u=m[0],h=m[1],O=Object(a.useState)([]),p=Object(i.a)(O,2),x=p[0],f=p[1],g=function(e){var t=e.target,c=Array.from(t.files),s=[];c.forEach((function(e){var t=new FileReader;t.readAsDataURL(e),t.addEventListener("load",(function(){s.push({name:e.name,type:e.type,size:e.size,src:t.result,file:e}),j([].concat(Object(I.a)(d),s))}))}))},v=function(e){var t=e.target,c=Number(t.parentElement.dataset.imgindex);j([].concat(Object(I.a)(d.slice(0,c)),Object(I.a)(d.slice(c+1))))},N=function(e){e.preventDefault(),e.stopPropagation(),h(!0)},y=function(e){f((function(t){return[].concat(Object(I.a)(t),[e])}))};return Object(a.useEffect)((function(){x.length===d.length&&0!==d.length&&(c(!1),j([]),n(x))}),[x]),Object(s.jsxs)("div",{className:"imageUploader",children:[Object(s.jsxs)("div",{className:"imageUploader__dropArea ".concat(u&&"highlight"," ").concat(l&&"imageUploader__dropArea-disabled"),onDragEnter:N,onDragOver:N,onDragLeave:function(e){e.preventDefault(),e.stopPropagation(),h(!1)},onDrop:function(e){e.preventDefault(),e.stopPropagation();var t=e.dataTransfer;g({target:{files:t.files}}),h(!1)},children:[Object(s.jsx)("label",{className:"imageUploader__fileUpload",htmlFor:"images",children:"DRAG & DROP"}),Object(s.jsx)("input",{className:"d-none",type:"file",id:"images",accept:"image/*",multiple:!0,onChange:g,disabled:l})]}),Object(s.jsx)("div",{className:"imageUploader__image-previews",children:d.length>0&&d.map((function(e,c){return Object(s.jsx)(U,{id:c,handleDelete:v,image:e,shouldUploadImgs:t,getDownloadURL:y},c)}))})]})};c(56);var D=function(e){var t=e.isDisabled,c=e.dispatchTags,n=Object(a.useState)([]),l=Object(i.a)(n,2),r=l[0],o=l[1];return Object(a.useEffect)((function(){t&&(c(r),o([]))}),[t]),Object(s.jsxs)("div",{className:"tagsInput",children:[Object(s.jsx)("ul",{children:r.map((function(e,t){return Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{children:e}),Object(s.jsx)("i",{className:"fas fa-times",onClick:function(){return function(e){o(Object(I.a)(r.filter((function(t){return r.indexOf(t)!==e}))))}(t)}})]},t)}))}),Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Press ,(comma) to add a tag",onKeyUp:function(e){var t=e.key,c=e.target,s=c.value.slice(0,-1);","===t&&""!==s&&(-1===r.indexOf(s)&&o([].concat(Object(I.a)(r),[s])),c.value="")},disabled:t})]})};var A=function(){var e={title:"",description:"",tags:[],stock:"",price:"",category:"",images:[]},t=Object(a.useState)(e),c=Object(i.a)(t,2),n=c[0],l=c[1],r=Object(a.useState)(!1),o=Object(i.a)(r,2),d=o[0],j=o[1],b=Object(a.useState)(!1),u=Object(i.a)(b,2),h=u[0],f=u[1],g=Object(a.useRef)(),v=m.currentUser.uid,N=function(e){var t=e.target;l(Object(x.a)(Object(x.a)({},n),{},Object(p.a)({},t.id,t.value)))};return console.log(n),Object(a.useEffect)((function(){0!==n.images.length&&(console.log("upload to firestore>>>",n),O.collection("products").add(Object(x.a)(Object(x.a)({},n),{},{sellerId:v})).then((function(){f(!1),l(e),g.current.click()})).catch((function(e){return console.log(e.message)})))}),[n.images]),Object(s.jsx)("div",{className:"addProducts px-4 pt-4",children:Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(!0),f(!0)},method:"post",children:[Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{className:"text-end fs-5",htmlFor:"title",children:"Title"}),Object(s.jsx)("input",{type:"text",id:"title",className:"form-control",value:n.title,onChange:N,disabled:h,required:!0})]}),Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{className:"text-end fs-5",htmlFor:"description",children:"Description"}),Object(s.jsx)("textarea",{type:"text",id:"description",className:"form-control",rows:"5",value:n.description,onChange:N,disabled:h,required:!0})]}),Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{className:"text-end fs-5",htmlFor:"stock",children:"Stock"}),Object(s.jsx)("input",{type:"text",id:"stock",className:"form-control",value:n.stock,onChange:N,disabled:h,required:!0,pattern:"^\\d+$",title:"Only Numbers allowed."})]}),Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{className:"text-end fs-5",htmlFor:"price",children:"Price"}),Object(s.jsx)("input",{type:"text",id:"price",className:"form-control",value:n.price,onChange:N,disabled:h,pattern:"^\\d+(\\.\\d{1,2})?$",title:"Price can be formatted as 0.00",required:!0})]}),Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{className:"text-end fs-5",htmlFor:"category",children:"Category"}),Object(s.jsxs)("select",{id:"category",className:"form-select",value:n.category,onChange:N,disabled:h,required:!0,children:[Object(s.jsx)("option",{value:"",children:"Select Category"}),["Appliances","Apps & Games","Baby","Beauty","Books","Car & Motorbike","Clothing & Accessories","Collectibles","Computers & Accessories","Electronics","Furniture","Garden & Outdoors","Grocery & Gourmet Foods","Health & Personal Care","Home & Kitchen","Industrial & Scientific","Jewellery","Luggage & Bags","Movies & TV Shows","Music","Musical Instruments","Office Products","Pet Supplies","Shoes & Handbags","Software","Sports, Fitness & Outdoors","Tools & Home Improvement","Toys & Games","Watches"].map((function(e){return Object(s.jsx)("option",{value:e,children:e})}))]})]}),Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{className:"text-end fs-5",htmlFor:"tags",children:"Tags"}),Object(s.jsx)(D,{isDisabled:h,dispatchTags:function(e){l(Object(x.a)(Object(x.a)({},n),{},{tags:e}))}})]}),Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{className:"text-end fs-5",children:"Upload Images"}),Object(s.jsx)(_,{shouldUploadImgs:d,setShouldUploadImgs:j,isDisabled:h,dispatchImageURLs:function(e){l(Object(x.a)(Object(x.a)({},n),{},{images:e}))}})]}),Object(s.jsxs)("div",{className:"modal-footer m-0 p-0 py-1",children:[Object(s.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",ref:g,children:"Close"}),Object(s.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:h,children:"Add Product"})]})]})})};var q=function(){return Object(s.jsx)("div",{className:"products",children:Object(s.jsxs)("div",{className:"modal-content mx-auto",children:[Object(s.jsxs)("div",{className:"modal-header",children:[Object(s.jsx)("h4",{children:"Products"}),Object(s.jsx)("div",{className:"products__search",children:Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Search..."})})]}),Object(s.jsx)("div",{className:"modal-body",style:{height:"400px",overflow:"auto"},children:Object(s.jsx)(k,{})}),Object(s.jsx)("div",{className:"modal-footer",style:{padding:"10px"},children:Object(s.jsx)(F,{id:"addProduct",buttonText:"Add a Product",title:" Add a Product",buttonIcon:"fas fa-plus",children:Object(s.jsx)(A,{})})})]})})};var E=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){m.onAuthStateChanged((function(e){n(e||null)}))}),[]),Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(o.a,{children:c?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(C,{}),Object(s.jsxs)(d.c,{children:[Object(s.jsx)(d.a,{path:"/products",component:q}),Object(s.jsx)(d.a,{path:"/",component:q})]})]}):Object(s.jsxs)(d.c,{children:[Object(s.jsx)(d.a,{path:"/signup",component:w}),Object(s.jsx)(d.a,{path:["/signin","/"],component:f})]})})})};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(E,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.b21d61f5.chunk.js.map