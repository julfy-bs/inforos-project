!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/prav-fund__project/",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1),n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9)},function(t,e,n){},function(t,e){var n=document.querySelector("#hamburger-menu-link"),r=document.querySelector("#hamburger-menu"),i=document.querySelector("#close-nav-button"),o=r.querySelectorAll(".menu__semi-link");n.addEventListener("click",function(t){r.classList.add("hamburger-menu--active"),document.body.classList.add("restrictedScroll")}),i.addEventListener("click",function(t){t.preventDefault(),r.classList.remove("hamburger-menu--active"),document.body.classList.remove("restrictedScroll")});for(var a=0;a<o.length;a++)o[a].addEventListener("click",function(){r.classList.remove("hamburger-menu--active"),document.body.classList.remove("restrictedScroll")})},function(t,e){!function(){var t=document.querySelectorAll(".news-menu__item"),e=document.querySelectorAll(".tab");function n(){t.forEach(function(t){t.classList.remove("is-active")}),this.classList.add("is-active"),function(t){e.forEach(function(e){e.classList.contains(t)?e.classList.add("is-active"):e.classList.remove("is-active")})}(this.getAttribute("data-tab-name"))}t.forEach(function(t){t.addEventListener("click",n)})}()},function(t,e,n){"use strict";(function(){return function(t,e){var n,r=document.querySelector(t),i=r.querySelector(".slider__wrapper"),o=r.querySelectorAll(".slider__item"),a=(r.querySelectorAll(".slider__control"),r.querySelector(".slider__control_left"),r.querySelector(".slider__control_right"),parseFloat(getComputedStyle(i).width)),c=parseFloat(getComputedStyle(o[0]).width),s=r.innerHTML,l=0,u=o.length-1,f=0,d=0,m=c/a*100,g=[],v=0,p=[{active:!1,minWidth:0,count:1},{active:!1,minWidth:576,count:2},{active:!1,minWidth:992,count:3},{active:!1,minWidth:1200,count:4}],h={isCycling:!1,direction:"right",interval:5e3,pause:!0};for(var y in e)y in h&&(h[y]=e[y]);o.forEach(function(t,e){g.push({item:t,position:e,transform:0})});var _=function(){var t=0,e=parseFloat(document.body.clientWidth);p.forEach(function(n,r,i){p[r].active=!1,e>=p[r].minWidth&&(t=r)}),p[t].active=!0},M={getItemMin:function(){var t=0;return g.forEach(function(e,n){e.position<g[t].position&&(t=n)}),t},getItemMax:function(){var t=0;return g.forEach(function(e,n){e.position>g[t].position&&(t=n)}),t},getMin:function(){return g[M.getItemMin()].position},getMax:function(){return g[M.getItemMax()].position}},S=function(t){var e,o,s,v,p,h,y=l;(s=(o=r).getBoundingClientRect(),v=window.innerWidth||doc.documentElement.clientWidth,p=window.innerHeight||doc.documentElement.clientHeight,h=function(t,e){return document.elementFromPoint(t,e)},s.right<0||s.bottom<0||s.left>v||s.top>p||!(o.contains(h(s.left,s.top))||o.contains(h(s.right,s.top))||o.contains(h(s.right,s.bottom))||o.contains(h(s.left,s.bottom))))||("right"===t&&(++f+a/c-1>M.getMax()&&(e=M.getItemMin(),g[e].position=M.getMax()+1,g[e].transform+=100*g.length,g[e].item.style.transform="translateX("+g[e].transform+"%)"),d-=m,(l+=1)>u&&(l=0)),"left"===t&&(--f<M.getMin()&&(e=M.getItemMax(),g[e].position=M.getMin()-1,g[e].transform-=100*g.length,g[e].item.style.transform="translateX("+g[e].transform+"%)"),d+=m,(l-=1)<0&&(l=u)),i.style.transform="translateX("+d+"%)",n[y].classList.remove("active"),n[l].classList.add("active"))},I=function(t){h.isCycling&&(v=setInterval(function(){S(t)},h.interval))},b=function(t){if(t.target.classList.contains("slider__control")){t.preventDefault();var e=t.target.classList.contains("slider__control_right")?"right":"left";S(e),clearInterval(v),I(h.direction)}t.target.getAttribute("data-slide-to")&&(t.preventDefault(),function(t){for(var e=0,n=t>l?"right":"left";t!==l&&e<=u;)S(n),e++}(parseInt(t.target.getAttribute("data-slide-to"))),clearInterval(v),I(h.direction))},E=function(){"hidden"===document.visibilityState?clearInterval(v):(clearInterval(v),I(h.direction))},L=function(){var t=document.createElement("ol");t.classList.add("slider__indicators");for(var e=0;e<o.length;e++){var i=document.createElement("li");0===e&&i.classList.add("active"),i.setAttribute("data-slide-to",e),t.appendChild(i)}r.appendChild(t),n=r.querySelectorAll(".slider__indicators > li")};return L(),r.addEventListener("click",b),h.pause&&h.isCycling&&(r.addEventListener("mouseenter",function(){clearInterval(v)}),r.addEventListener("mouseleave",function(){clearInterval(v),I(h.direction)})),document.addEventListener("visibilitychange",E,!1),window.addEventListener("resize",function(){var t=0,e=parseFloat(document.body.clientWidth);p.forEach(function(n,r,i){e>=p[r].minWidth&&(t=r)}),t!==function(){var t;return p.forEach(function(e,n,r){p[n].active&&(t=n)}),t}()&&(_(),clearInterval(v),r.innerHTML=s,i=r.querySelector(".slider__wrapper"),o=r.querySelectorAll(".slider__item"),r.querySelectorAll(".slider__control"),r.querySelector(".slider__control_left"),r.querySelector(".slider__control_right"),a=parseFloat(getComputedStyle(i).width),c=parseFloat(getComputedStyle(o[0]).width),f=0,d=0,l=0,u=o.length-1,m=c/a*100,g=[],o.forEach(function(t,e){g.push({item:t,position:e,transform:0})}),L())}),"visible"===document.visibilityState&&I(h.direction),_(),{right:function(){S("right")},left:function(){S("left")},stop:function(){h.isCycling=!1,clearInterval(v)},cycle:function(){h.isCycling=!0,clearInterval(v),I()}}}})()(".main__wrapper--slider-main",{isCycling:!0})},function(t,e,n){"use strict";!function(t,e){var n=document.querySelector(t),r=n.querySelector(".slider__wrapper--sponsors"),i=n.querySelectorAll(".slider__item--sponsors"),o=n.querySelectorAll(".slider__control--sponsors"),a=(n.querySelector(".slider__control_left--sponsors"),n.querySelector(".slider__control_right--sponsors"),parseFloat(getComputedStyle(r).width)),c=parseFloat(getComputedStyle(i[0]).width),s=0,l=0,u=c/a*100,f=[],d=0,m={isCycling:!1,direction:"right",interval:5e3,pause:!0};for(var g in e)g in m&&(m[g]=e[g]);i.forEach(function(t,e){f.push({item:t,position:e,transform:0})});var v={getItemMin:function(){var t=0;return f.forEach(function(e,n){e.position<f[t].position&&(t=n)}),t},getItemMax:function(){var t=0;return f.forEach(function(e,n){e.position>f[t].position&&(t=n)}),t},getMin:function(){return f[v.getItemMin()].position},getMax:function(){return f[v.getItemMax()].position}},p=function(t){var e;"right"===t&&(++s+a/c-1>v.getMax()&&(e=v.getItemMin(),f[e].position=v.getMax()+1,f[e].transform+=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l-=u),"left"===t&&(--s<v.getMin()&&(e=v.getItemMax(),f[e].position=v.getMin()-1,f[e].transform-=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l+=u),r.style.transform="translateX("+l+"%)"},h=function(t){m.isCycling&&(d=setInterval(function(){p(t)},m.interval))},y=function(t){if(t.target.classList.contains("slider__control--sponsors")){t.preventDefault();var e=t.target.classList.contains("slider-sponsors__click-listener_right")?"right":"left";p(e),clearInterval(d),h(m.direction)}};o.forEach(function(t){t.addEventListener("click",y)}),m.pause&&m.isCycling&&(n.addEventListener("mouseenter",function(){clearInterval(d)}),n.addEventListener("mouseleave",function(){clearInterval(d),h(m.direction)})),h(m.direction)}(".slider--sponsors",{isCycling:!1})},function(t,e,n){"use strict";!function(t,e){var n=document.querySelector(t),r=n.querySelector(".photo__wrapper"),i=n.querySelectorAll(".photo__item"),o=n.querySelectorAll(".photo__buttons"),a=(n.querySelector(".photo__left"),n.querySelector(".photo__right"),parseFloat(getComputedStyle(r).width)),c=parseFloat(getComputedStyle(i[0]).width),s=0,l=0,u=c/a*100,f=[],d=0,m={isCycling:!1,direction:"right",interval:5e3,pause:!0};for(var g in e)g in m&&(m[g]=e[g]);i.forEach(function(t,e){f.push({item:t,position:e,transform:0})});var v={getItemMin:function(){var t=0;return f.forEach(function(e,n){e.position<f[t].position&&(t=n)}),t},getItemMax:function(){var t=0;return f.forEach(function(e,n){e.position>f[t].position&&(t=n)}),t},getMin:function(){return f[v.getItemMin()].position},getMax:function(){return f[v.getItemMax()].position}},p=function(t){var e;"right"===t&&(++s+a/c-1>v.getMax()&&(e=v.getItemMin(),f[e].position=v.getMax()+1,f[e].transform+=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l-=u),"left"===t&&(--s<v.getMin()&&(e=v.getItemMax(),f[e].position=v.getMin()-1,f[e].transform-=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l+=u),r.style.transform="translateX("+l+"%)"},h=function(t){m.isCycling&&(d=setInterval(function(){p(t)},m.interval))},y=function(t){if(t.target.classList.contains("photo__buttons")){t.preventDefault();var e=t.target.classList.contains("photo__right")?"right":"left";p(e),clearInterval(d),h(m.direction)}};o.forEach(function(t){t.addEventListener("click",y)}),m.pause&&m.isCycling&&(n.addEventListener("mouseenter",function(){clearInterval(d)}),n.addEventListener("mouseleave",function(){clearInterval(d),h(m.direction)})),h(m.direction)}(".main__photo-wrapper",{isCycling:!1})},function(t,e,n){"use strict";!function(t,e){var n=document.querySelector(t),r=n.querySelector(".video__wrapper"),i=n.querySelectorAll(".video__item"),o=n.querySelectorAll(".video__buttons"),a=(n.querySelector(".video__left"),n.querySelector(".video__right"),parseFloat(getComputedStyle(r).width)),c=parseFloat(getComputedStyle(i[0]).width),s=0,l=0,u=c/a*100,f=[],d=0,m={isCycling:!1,direction:"right",interval:5e3,pause:!0};for(var g in e)g in m&&(m[g]=e[g]);i.forEach(function(t,e){f.push({item:t,position:e,transform:0})});var v={getItemMin:function(){var t=0;return f.forEach(function(e,n){e.position<f[t].position&&(t=n)}),t},getItemMax:function(){var t=0;return f.forEach(function(e,n){e.position>f[t].position&&(t=n)}),t},getMin:function(){return f[v.getItemMin()].position},getMax:function(){return f[v.getItemMax()].position}},p=function(t){var e;"right"===t&&(++s+a/c-1>v.getMax()&&(e=v.getItemMin(),f[e].position=v.getMax()+1,f[e].transform+=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l-=u),"left"===t&&(--s<v.getMin()&&(e=v.getItemMax(),f[e].position=v.getMin()-1,f[e].transform-=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l+=u),r.style.transform="translateX("+l+"%)"},h=function(t){m.isCycling&&(d=setInterval(function(){p(t)},m.interval))},y=function(t){if(t.target.classList.contains("video__buttons")){t.preventDefault();var e=t.target.classList.contains("video__right")?"right":"left";p(e),clearInterval(d),h(m.direction)}};o.forEach(function(t){t.addEventListener("click",y)}),m.pause&&m.isCycling&&(n.addEventListener("mouseenter",function(){clearInterval(d)}),n.addEventListener("mouseleave",function(){clearInterval(d),h(m.direction)})),h(m.direction)}(".main__video-wrapper",{isCycling:!1})},function(t,e,n){"use strict";!function(t,e){var n=document.querySelector(t),r=n.querySelector(".library__wrapper"),i=n.querySelectorAll(".library__item"),o=n.querySelectorAll(".library__buttons"),a=(n.querySelector(".library__left"),n.querySelector(".library__right"),parseFloat(getComputedStyle(r).width)),c=parseFloat(getComputedStyle(i[0]).width),s=0,l=0,u=c/a*100,f=[],d=0,m={isCycling:!1,direction:"right",interval:5e3,pause:!0};for(var g in e)g in m&&(m[g]=e[g]);i.forEach(function(t,e){f.push({item:t,position:e,transform:0})});var v={getItemMin:function(){var t=0;return f.forEach(function(e,n){e.position<f[t].position&&(t=n)}),t},getItemMax:function(){var t=0;return f.forEach(function(e,n){e.position>f[t].position&&(t=n)}),t},getMin:function(){return f[v.getItemMin()].position},getMax:function(){return f[v.getItemMax()].position}},p=function(t){var e;"right"===t&&(++s+a/c-1>v.getMax()&&(e=v.getItemMin(),f[e].position=v.getMax()+1,f[e].transform+=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l-=u),"left"===t&&(--s<v.getMin()&&(e=v.getItemMax(),f[e].position=v.getMin()-1,f[e].transform-=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l+=u),r.style.transform="translateX("+l+"%)"},h=function(t){m.isCycling&&(d=setInterval(function(){p(t)},m.interval))},y=function(t){if(t.target.classList.contains("library__buttons")){t.preventDefault();var e=t.target.classList.contains("library__right")?"right":"left";p(e),clearInterval(d),h(m.direction)}};o.forEach(function(t){t.addEventListener("click",y)}),m.pause&&m.isCycling&&(n.addEventListener("mouseenter",function(){clearInterval(d)}),n.addEventListener("mouseleave",function(){clearInterval(d),h(m.direction)})),h(m.direction)}(".main__library-wrapper",{isCycling:!1})},function(t,e){var n=document.querySelector(".phones__nav");document.querySelector(".search-icon__block").addEventListener("click",function(t){t.preventDefault(),n.classList.toggle("focus__search--active")})}]);