(this["webpackJsonpturnos-cmo"]=this["webpackJsonpturnos-cmo"]||[]).push([[0],{72:function(e,a,t){e.exports=t(88)},77:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(62),c=t.n(o),l=(t(77),t(56)),i=t.n(l),m=t(63),u=t(59),s=t(71),d=t(7),b=t(2),p=t(42);function f(){var e=Object(d.a)(["\n        width: 50%;\n      "]);return f=function(){return e},e}function g(){var e=Object(d.a)(["\n        width: 95%;\n      "]);return g=function(){return e},e}function h(){var e=Object(d.a)(["\n    background-size: 100% 100%;\n    background-position: top;\n  "]);return h=function(){return e},e}function v(){var e=Object(d.a)(["\n    background-size: cover;\n    background-position: center;\n  "]);return v=function(){return e},e}function E(){var e=Object(d.a)(['\n  background-image: url("./assets/images/recepcion.jpg");\n  font-size: ',";\n  ","\n  ","\n  \n  & {\n    form {\n      ","\n      ","\n      ","\n    }\n    h1 {\n      ","\n      font-family: ",";\n      font-size: ",";\n    }\n    input {\n      ","\n    }\n    select {\n      ","\n    }\n    button {\n      ","\n    }\n  }\n"]);return E=function(){return e},e}function x(){var e=Object(d.a)(["\n  ",";\n"]);return x=function(){return e},e}function y(){var e=Object(d.a)(["\n  ",";\n"]);return y=function(){return e},e}function w(){var e=Object(d.a)(["\n  ","\n  ","\n"]);return w=function(){return e},e}var k=b.c.div(w(),{position:"absolute",left:"0",top:"0",height:"100vh",width:"100vw",zIndex:"10","--bg-opacity":"0.75",backgroundColor:"rgba(49, 130, 206, var(--bg-opacity))",justifyContent:"center",alignItems:"center"},(function(e){return e.sending?"display:flex":"display:none"})),j=b.c.div(y(),{width:"100%"}),N=b.c.span(x(),{"--text-opacity":"1",color:"rgba(197, 48, 48, var(--text-opacity))",fontWeight:"700",paddingBottom:"0.5rem"}),O=b.c.main.attrs({className:"flex flex-col h-screen justify-center items-center w-screen overflow-x-hidden"})(E(),(function(e){return e.theme.fontSize.secondary}),Object(p.a)("mobile")(v()),Object(p.a)("tablet")(h()),{"--bg-opacity":"0.5",backgroundColor:"rgba(255, 255, 255, var(--bg-opacity))",textAlign:"center",borderRadius:"0.25rem",paddingTop:"2rem",paddingBottom:"2rem",paddingLeft:"1.25rem",paddingRight:"1.25rem",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",maxWidth:"768px"},Object(p.a)("mobile")(g()),Object(p.a)("tablet")(f()),{fontSize:"2.25rem",marginBottom:"0.75rem"},(function(e){return e.theme.fonts.main}),(function(e){return e.theme.fontSize.main}),{"--border-opacity":"1",borderColor:"rgba(226, 232, 240, var(--border-opacity))",marginBottom:"0.5rem",width:"100%",borderStyle:"solid",borderWidth:"1px",borderRadius:"0.25rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"0.25rem",paddingRight:"0.25rem"},{"--border-opacity":"1",borderColor:"rgba(226, 232, 240, var(--border-opacity))",marginBottom:"0.5rem",width:"100%",borderStyle:"solid",borderWidth:"1px",borderRadius:"0.25rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"0.25rem",paddingRight:"0.25rem"},{"--bg-opacity":"1",backgroundColor:"rgba(99, 179, 237, var(--bg-opacity))",":hover":{"--bg-opacity":"1",backgroundColor:"rgba(49, 130, 206, var(--bg-opacity))"},"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))",fontWeight:"700",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"1rem",paddingRight:"1rem",marginLeft:"0.5rem",marginRight:"0.5rem",borderWidth:"1px","--border-opacity":"1",borderColor:"rgba(43, 108, 176, var(--border-opacity))",borderRadius:"0.25rem"}),z=t(4),C=t(40),S=t(58),M=t.n(S),B=t(70),R=function(e){var a=e.field,t=e.form,n=e.children;return r.a.createElement("select",Object.assign({},a,{className:t.errors[a.name]&&t.touched[a.name]?"error":""}),n)},L=function(e){var a=e.field,t=e.form,n=Object(s.a)(e,["field","form"]);return r.a.createElement("input",Object.assign({},a,n,{className:t.errors[a.name]&&t.touched[a.name]?"error":""}))},V=function(e){return r.a.createElement(N,null,e.children)};var q=function(){var e=r.a.useState(!1),a=Object(u.a)(e,2),t=(a[0],a[1]),n=r.a.useState(!1),o=Object(u.a)(n,2),c=o[0],l=o[1];r.a.useEffect((function(){M.a.init("user_dormN6V04kOBlq6CMFAVI")}),[]);var s=function(e){t(null!==e)};return r.a.createElement(O,null,r.a.createElement(z.d,{initialValues:{nombre:"",telefono:"",obraSocial:"",especialidad:""},onSubmit:function(){var e=Object(m.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,M.a.send("cmo","template_turno",a);case 3:200===e.sent.status&&l(!1);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),validationSchema:C.a().shape({nombre:C.b().required("Nombre es un campo requerido"),telefono:C.b().required("Tel\xe9fono es un campo obligatorio"),especialidad:C.b().ensure().required("Selecciona una especialidad"),obraSocial:C.b().ensure().required("Selecciona una Obra social")})},(function(e){var a=e.dirty,t=e.isSubmitting,n=e.handleSubmit,o=e.handleReset;return r.a.createElement(z.c,{onSubmit:n},r.a.createElement(k,{sending:c},r.a.createElement("div",{className:"font-bold text-white"},"Estamos enviando su petici\xf3n")),r.a.createElement("h1",null,"CMO"),r.a.createElement(j,null,r.a.createElement(z.b,{name:"nombre",placeholder:"Ingrese su Nombre",component:L}),r.a.createElement(z.a,{name:"nombre",component:V})),r.a.createElement(j,null,r.a.createElement(z.b,{name:"telefono",placeholder:"Ingrese tel\xe9fono de contacto",component:L}),r.a.createElement(z.a,{name:"telefono",component:V})),r.a.createElement(j,null,r.a.createElement(z.b,{name:"especialidad",component:R},r.a.createElement("option",{disabled:!0,value:""},"Seleccione la especialidad buscada"),r.a.createElement("option",{value:"odontologia"},"Odontolog\xeda"),r.a.createElement("option",{value:"RPG"},"RPG"),r.a.createElement("option",{value:"osteopatia"},"Osteopat\xeda"),r.a.createElement("option",{value:"nutricion"},"Nutrici\xf3n"),r.a.createElement("option",{value:"psiquiatria"},"Psiquiatr\xeda")),r.a.createElement(z.a,{name:"especialidad",component:V})),r.a.createElement(j,null,r.a.createElement(z.b,{name:"obraSocial",component:R},r.a.createElement("option",{disabled:!0,value:""},"Seleccione su obra social"),r.a.createElement("option",{value:"una"},"una"),r.a.createElement("option",{value:"otra"},"otra"),r.a.createElement("option",{value:"otra mas"},"otra mas")),r.a.createElement(z.a,{name:"obraSocial",component:V})),r.a.createElement(j,null,r.a.createElement("div",{className:"flex justify-center flex-wrap bg-gray-100 py-2 mb-2",role:"group","aria-labelledby":"checkbox-group"},r.a.createElement("h2",{className:"w-full text-lg font-bold mb-2"},"Seleccione el d\xeda de semana de su preferencia"),r.a.createElement("label",{className:"flex-grow"},r.a.createElement(z.b,{type:"checkbox",name:"dias",value:"Lunes"}),"Lunes"),r.a.createElement("label",{className:"flex-grow"},r.a.createElement(z.b,{type:"checkbox",name:"dias",value:"Martes"}),"Martes"),r.a.createElement("label",{className:"flex-grow"},r.a.createElement(z.b,{type:"checkbox",name:"dias",value:"Mi\xe9rc."}),"Mi\xe9rc."),r.a.createElement("label",{className:"flex-grow"},r.a.createElement(z.b,{type:"checkbox",name:"dias",value:"Jueves"}),"Jueves"),r.a.createElement("label",{className:"flex-grow"},r.a.createElement(z.b,{type:"checkbox",name:"dias",value:"Viernes"}),"Viernes")),r.a.createElement(z.a,{name:"dias",component:V})),r.a.createElement(j,null,r.a.createElement("div",{className:"flex justify-center flex-wrap bg-gray-100 py-2 mb-2",role:"group","aria-labelledby":"checkbox-group"},r.a.createElement("h2",{className:"w-full text-lg font-bold mb-2"},"Preferencia horaria"),r.a.createElement("label",{className:"flex-grow"},r.a.createElement(z.b,{type:"checkbox",name:"horario",value:"Ma\xf1ana"}),"Por la ma\xf1ana"),r.a.createElement("label",{className:"flex-grow"},r.a.createElement(z.b,{type:"checkbox",name:"horario",value:"Tarde"}),"Por la tarde")),r.a.createElement(z.a,{name:"horario",component:V})),r.a.createElement("div",{className:"flex justify-center mb-2"},r.a.createElement(B.a,{sitekey:"6Ldt3NUZAAAAAO56xDELqwKFfGWK4xndbGNcKVMJ",onChange:s})),r.a.createElement(j,null,r.a.createElement("button",{type:"button",onClick:o,disabled:!a||t},"Reset"),r.a.createElement("button",{type:"submit",disabled:t},"Reservar")))})))};function A(){var e=Object(d.a)(["\n  ",";\n"]);return A=function(){return e},e}function P(){var e=Object(d.a)(["\n  ",";\n"]);return P=function(){return e},e}var T=b.c.a(P(),{width:"2rem",height:"2rem",marginBottom:"1rem",cursor:"pointer"}),W=b.c.div(A(),{position:"absolute",right:"0",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",marginRight:"1rem"});function I(){var e=Object(d.a)([""]);return I=function(){return e},e}var G=b.c.svg.attrs({version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"})(I());function J(){var e=Object(d.a)(["\n  width: ",";\n  height: ",";\n"]);return J=function(){return e},e}var _=Object(b.c)(G)(J(),(function(e){var a=e.size;return a||"24px"}),(function(e){var a=e.size;return a||"24px"})),K=function(e){var a=e.className,t=e.size;return r.a.createElement(_,{viewBox:"0 0 512 512",className:a,size:t},r.a.createElement("path",{fill:"currentColor",d:"M233.1 2.1c-31.6 2.8-64.4 12.3-92.9 26.8-25.9 13.3-42.9 25.8-64.7 47.6-23 22.9-35.2 39.9-49 68-8.8 18-13.6 30.5-18.1 48.1-18.2 70.2-5.7 145.8 33.9 204.9 19.9 29.7 46.3 55.8 75.7 74.6 27.3 17.6 61.2 31.1 91.3 36.3l3.7.7V310h-61v-71h61v-26.8c0-14.7.5-31.7 1-37.7 4.1-43.1 26.8-70.7 66-80.2 6.2-1.5 11.8-1.8 32-1.8 13.5 0 29.8.4 36.3.8l11.7.9V158h-17.2c-35.3.1-46 3.1-51.7 14.5-3.4 6.9-4.1 13.5-4.1 40.6V239h71.2l-.6 3.2c-.6 3.9-8.6 65.4-8.6 66.8 0 .6-11.5 1.1-30.7 1.2l-30.8.3-.3 100.3L287 511l4.2-.6c46-6.6 89.9-25.8 126.3-55.1 12.5-10.1 32.8-30.9 42.1-43.4 58.7-77.9 68.8-180.1 26.4-266.4-14.2-29.1-26.3-45.8-49.5-69-21.8-21.8-38.8-34.3-64.7-47.6-42.4-21.6-91.1-31-138.7-26.8z"}))},D=function(e){var a=e.className,t=e.size;return r.a.createElement(_,{viewBox:"0 0 512 512",className:a,size:t},r.a.createElement("path",{fill:"currentColor",d:"M122 1.5C59.2 10.2 9.9 59.9 1.4 123c-2 15.5-2 250.5 0 266 4.2 31.2 18 59.2 40.2 81.4 22.1 22.1 50.2 36 81.4 40.2 15.5 2 250.5 2 266 0 63.6-8.6 113-58 121.6-121.6 2-15.5 2-250.5 0-266C502 59.4 452.6 10 389 1.4 374.2-.5 136.4-.5 122 1.5zM378.2 46c24.4 2.3 44.5 11.8 60.9 28.7 16 16.5 24.6 35.4 26.9 59.1 1.3 14.4 1.3 230 0 244.4-2.3 23.7-10.9 42.6-26.9 59.1-16.4 16.9-36.5 26.4-60.9 28.7-14.4 1.3-230 1.3-244.4 0-24.4-2.3-44.5-11.8-60.9-28.7-16-16.5-24.6-35.4-26.9-59.1-1.3-14.4-1.3-230 0-244.4 2.3-24.4 11.8-44.5 28.7-60.9 15.9-15.5 35.6-24.7 57.3-26.8 12.7-1.2 233.3-1.3 246.2-.1z"}),r.a.createElement("path",{fill:"currentColor",d:"M381.3 88.1c-7.5 2.9-14.4 9.5-17.8 17.1-9.7 21.2 5 45.3 28.4 46.6 11.3.6 22.8-5.1 29-14.5 4.1-6.1 5.5-11.3 5.4-19.6-.2-22.2-23.8-37.8-45-29.6zM238 125.5c-29 4.1-54.2 16.7-75 37.5-22.4 22.3-34.8 48.8-38.1 81.3-3.3 31.1 6.6 65.8 26 91.2 5.8 7.7 17.9 19.8 25.6 25.6 25.4 19.4 60.1 29.3 91.3 26 32.4-3.3 58.9-15.7 81.2-38.1 22.4-22.3 34.8-48.8 38.1-81.2 2.7-25.7-3.5-54.3-16.8-77.3-26.8-46.6-79.3-72.4-132.3-65zm38 46.5c31.1 7.5 56.5 32.9 64 64 2.7 11.6 2.7 28.4 0 40-5.9 24.8-23.3 46.3-46.3 57.5-12.6 6.1-23.3 8.5-37.7 8.5-14.4 0-25.1-2.4-37.7-8.5-23-11.2-40.4-32.7-46.3-57.5-2.7-11.6-2.7-28.4 0-40 7.4-30.8 32.7-56.4 63.5-63.9 11.2-2.8 29.1-2.8 40.5-.1z"}))},F=function(e){var a=e.className,t=e.size;return r.a.createElement(_,{viewBox:"0 0 512 512",className:a,size:t},r.a.createElement("path",{fill:"currentColor",d:"M241.5.6c-38.1 3.9-66.8 12.2-97.2 27.9C56.8 73.8 3.7 167 10 263.9c2.4 36.6 9.9 64.2 26.6 97.7l8.5 17.2-22.4 66.3C10.3 481.6.3 511.6.4 511.7c0 .1 31.3-9.8 69.4-21.9l69.3-22 6.7 3.5c15.5 8.1 40 16.9 59.2 21.2 19 4.3 33.8 5.8 57 5.8 24.4 0 39.5-1.9 62.6-7.8 42.6-10.9 82.6-33.9 114.4-65.7 39.3-39.3 63.1-87.8 71.2-144.8 2.1-15.5 1.6-51.5-1.1-68-4.1-25.9-11.2-48.1-22.7-71.6-14.8-30.4-35.1-56.8-60.2-78.5C389.4 30.2 345.3 10.1 296 2.5 285.9 1 250.1-.3 241.5.6zM286 41.4c47.8 6 90.4 26.8 124 60.5 57 57.1 76.3 137.7 51 213.4-21.8 65.1-76.3 117.1-142.5 135.7-53.7 15-110.6 8.6-159.4-18-5.2-2.8-10.4-5.8-11.5-6.6-1.1-.8-2.7-1.4-3.5-1.4-.8 0-18.4 5.4-39 11.9-20.7 6.5-38.6 12.2-39.7 12.5-1.9.6-.8-3.3 10.3-36.1 6.9-20.3 12.8-37.8 13-39 .4-1.6-1.3-5.1-5.8-12-36.2-55.9-43.5-126.1-19.4-187.9C91.8 101.8 159.4 49.9 237 41.1c12.2-1.4 36.7-1.2 49 .3z"}),r.a.createElement("path",{fill:"currentColor",d:"M167.3 138c-7.2 3.2-18.6 16.6-23.3 27.4-6.3 14-7.3 34.3-2.6 50 3.8 12.8 11.2 27.1 21.8 42.1 24.2 34.4 47.1 58 73.2 75.2 22.7 15.1 67.9 32.3 88.6 33.9 14.8 1.2 33.2-5 46.6-15.7 7.4-5.9 10.9-10.8 13.6-19.1 2.6-8.1 3.6-23.1 1.7-25.4-2.3-2.8-46-24-55.7-27-2.7-.9-5.1-1-6.6-.5-1.2.5-6.3 6-11.3 12.3-5 6.2-10.8 13-12.8 15.2-3.5 3.5-4.2 3.8-8.1 3.3-2.3-.2-9.9-3.2-16.8-6.5-25.3-12.2-44.4-28-61.4-50.9-7.3-9.7-12.2-18.4-12.2-21.4 0-2 2.3-5.5 8-12.4 9-10.9 12-16 12-20.5 0-3.3-18.2-48.2-22.7-55.8-1.3-2.4-3.6-4.7-4.9-5.3-1.4-.5-7.1-.9-12.7-.9-7.9 0-11.2.5-14.4 2z"}))},U=function(){return r.a.createElement(W,null,r.a.createElement(T,{href:"#",target:"_blank"},r.a.createElement(K,{className:"text-black hover:text-blue-600"})),r.a.createElement(T,{href:"#",target:"_blank"},r.a.createElement(D,{className:"text-black hover:text-blue-600"})),r.a.createElement(T,{href:"#",target:"_blank"},r.a.createElement(F,{className:"text-black hover:text-blue-600"})))};function X(){var e=Object(d.a)([""]);return X=function(){return e},e}var Z=b.c.div(X()),H={fonts:{main:"Gill-Sans",secondary:"Montserrat"},fontSize:{main:"3rem",secondary:"1rem",mobile:"2rem"},colors:{main:"#ffffff",secondary:"#334ac8",info:"#000001"},backgroundColors:{main:"#264afb",mainLight:"#516efb",secondary:"#162c96",info:"#f6ee0d"},header:{height:"20vh"},menu:{height:"80vh"},customValues:{appBar:{height:{mobile:"48px",desktop:"64px"}},delayPageTransitions:"200ms"}};var Q=function(){return r.a.createElement(b.a,{theme:H},r.a.createElement(Z,null,r.a.createElement(U,null),r.a.createElement(q,null)))};t(87);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.c7c02e2f.chunk.js.map