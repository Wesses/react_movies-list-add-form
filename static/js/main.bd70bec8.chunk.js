(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var a=i(8),n=i.n(a),c=(i(16),i(11)),s=i(2),r=(i(17),i(1)),l=(i(18),i(19),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},m=i(5),j=i(7),b=i(9),u=i.n(b),h=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/;var g=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,c=e.placeholder,o=void 0===c?"Enter ".concat(n):c,d=e.required,m=void 0!==d&&d,j=e.onChange,b=void 0===j?function(){}:j,g=e.validation,p=void 0!==g&&g,O=Object(r.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),v=Object(s.a)(O,1)[0],f=Object(r.useState)(!1),x=Object(s.a)(f,2),w=x[0],M=x[1],N=w&&m&&!i,U=!N&&w&&p&&!h.test(i);return Object(l.jsxs)("div",{className:"field",children:[Object(l.jsxs)("label",{className:"label",htmlFor:v,children:[n,m&&Object(l.jsx)("span",{className:"has-text-danger",children:"*"})]}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:v,"data-cy":"movie-".concat(t),className:u()("input",{"is-danger":N||U}),placeholder:o,value:i,onChange:function(e){return b(e.target.value)},onBlur:function(){return M(!0)}})}),N&&Object(l.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")}),U&&Object(l.jsx)("p",{className:"help is-danger",children:"Your link is broken"})]})},p={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},O=function(e){var t=e.onAdd,i=Object(r.useState)(0),a=Object(s.a)(i,2),n=a[0],c=a[1],o=Object(r.useState)(p),d=Object(s.a)(o,2),b=d[0],u=d[1],O=b.title,v=b.description,f=b.imdbUrl,x=b.imgUrl,w=b.imdbId,M=!O.trim()||!h.test(f)||!h.test(x)||!w.trim();function N(e,t){u((function(i){return Object(j.a)(Object(j.a)({},i),{},Object(m.a)({},t,e))}))}return Object(l.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),t(b),u(p),c((function(e){return e+1}))},children:[Object(l.jsx)("h2",{className:"title",children:"Add a movie"}),Object(l.jsx)(g,{name:"title",label:"Title",value:O,onChange:function(e){return N(e,"title")},required:!0}),Object(l.jsx)(g,{name:"description",label:"Description",value:v,onChange:function(e){return N(e,"description")}}),Object(l.jsx)(g,{name:"imgUrl",label:"Image URL",value:x,onChange:function(e){return N(e,"imgUrl")},required:!0,validation:!0}),Object(l.jsx)(g,{name:"imdbUrl",label:"Imdb URL",value:f,onChange:function(e){return N(e,"imdbUrl")},required:!0,validation:!0}),Object(l.jsx)(g,{name:"imdbId",label:"Imdb ID",value:w,onChange:function(e){return N(e,"imdbId")},required:!0}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:M,children:"Add"})})})]},n)},v=i(10),f=function(){var e=Object(r.useState)(v),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(O,{onAdd:function(e){a((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})};n.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.bd70bec8.chunk.js.map