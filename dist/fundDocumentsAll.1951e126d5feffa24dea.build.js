!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/prav-fund__project/",n(n.s=18)}([function(t,e,n){},function(t,e){var n=document.querySelector("#hamburger-menu-link"),r=document.querySelector("#hamburger-menu"),i=document.querySelector("#close-nav-button"),o=r.querySelectorAll(".menu__semi-link");if(void 0!==n&&n.addEventListener("click",function(t){r.classList.add("hamburger-menu--active"),document.body.classList.add("restrictedScroll")}),void 0!==i&&i.addEventListener("click",function(t){t.preventDefault(),r.classList.remove("hamburger-menu--active"),document.body.classList.remove("restrictedScroll")}),void 0!==o)for(var a=0;a<o.length;a++)o[a].addEventListener("click",function(){r.classList.remove("hamburger-menu--active"),document.body.classList.remove("restrictedScroll")})},function(t,e){var n=document.querySelectorAll(".news-menu__item"),r=document.querySelectorAll(".tab");if(void 0!==n){!function(){function t(){n.forEach(function(t){t.classList.remove("is-active")}),this.classList.add("is-active"),function(t){r.forEach(function(e){e.classList.contains(t)?e.classList.add("is-active"):e.classList.remove("is-active")})}(this.getAttribute("data-tab-name"))}n.forEach(function(e){e.addEventListener("click",t)})}()}},function(t,e,n){"use strict";!function(t,e){var n=document.querySelector(t),r=n.querySelector(".slider__wrapper--sponsors"),i=n.querySelectorAll(".slider__item--sponsors"),o=n.querySelectorAll(".slider__control--sponsors"),a=(n.querySelector(".slider__control_left--sponsors"),n.querySelector(".slider__control_right--sponsors"),parseFloat(getComputedStyle(r).width)),c=parseFloat(getComputedStyle(i[0]).width),s=0,l=0,u=c/a*100,f=[],d=0,m={isCycling:!1,direction:"right",interval:5e3,pause:!0};for(var v in e)v in m&&(m[v]=e[v]);i.forEach(function(t,e){f.push({item:t,position:e,transform:0})});var p={getItemMin:function(){var t=0;return f.forEach(function(e,n){e.position<f[t].position&&(t=n)}),t},getItemMax:function(){var t=0;return f.forEach(function(e,n){e.position>f[t].position&&(t=n)}),t},getMin:function(){return f[p.getItemMin()].position},getMax:function(){return f[p.getItemMax()].position}},g=function(t){var e;"right"===t&&(++s+a/c-1>p.getMax()&&(e=p.getItemMin(),f[e].position=p.getMax()+1,f[e].transform+=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l-=u),"left"===t&&(--s<p.getMin()&&(e=p.getItemMax(),f[e].position=p.getMin()-1,f[e].transform-=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l+=u),r.style.transform="translateX("+l+"%)"},y=function(t){m.isCycling&&(d=setInterval(function(){g(t)},m.interval))},_=function(t){if(t.target.classList.contains("slider__control--sponsors")){t.preventDefault();var e=t.target.classList.contains("slider-sponsors__click-listener_right")?"right":"left";g(e),clearInterval(d),y(m.direction)}};o.forEach(function(t){t.addEventListener("click",_)}),m.pause&&m.isCycling&&(n.addEventListener("mouseenter",function(){clearInterval(d)}),n.addEventListener("mouseleave",function(){clearInterval(d),y(m.direction)})),y(m.direction)}(".slider--sponsors",{isCycling:!1})},function(t,e,n){"use strict";!function(t,e){var n=document.querySelector(t),r=n.querySelector(".photo__wrapper"),i=n.querySelectorAll(".photo__item"),o=n.querySelectorAll(".photo__buttons"),a=(n.querySelector(".photo__left"),n.querySelector(".photo__right"),parseFloat(getComputedStyle(r).width)),c=parseFloat(getComputedStyle(i[0]).width),s=0,l=0,u=c/a*100,f=[],d=0,m={isCycling:!1,direction:"right",interval:5e3,pause:!0};for(var v in e)v in m&&(m[v]=e[v]);i.forEach(function(t,e){f.push({item:t,position:e,transform:0})});var p={getItemMin:function(){var t=0;return f.forEach(function(e,n){e.position<f[t].position&&(t=n)}),t},getItemMax:function(){var t=0;return f.forEach(function(e,n){e.position>f[t].position&&(t=n)}),t},getMin:function(){return f[p.getItemMin()].position},getMax:function(){return f[p.getItemMax()].position}},g=function(t){var e;"right"===t&&(++s+a/c-1>p.getMax()&&(e=p.getItemMin(),f[e].position=p.getMax()+1,f[e].transform+=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l-=u),"left"===t&&(--s<p.getMin()&&(e=p.getItemMax(),f[e].position=p.getMin()-1,f[e].transform-=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l+=u),r.style.transform="translateX("+l+"%)"},y=function(t){m.isCycling&&(d=setInterval(function(){g(t)},m.interval))},_=function(t){if(t.target.classList.contains("photo__buttons")){t.preventDefault();var e=t.target.classList.contains("photo__right")?"right":"left";g(e),clearInterval(d),y(m.direction)}};o.forEach(function(t){t.addEventListener("click",_)}),m.pause&&m.isCycling&&(n.addEventListener("mouseenter",function(){clearInterval(d)}),n.addEventListener("mouseleave",function(){clearInterval(d),y(m.direction)})),y(m.direction)}(".main__photo-wrapper",{isCycling:!1})},function(t,e,n){"use strict";!function(t,e){var n=document.querySelector(t),r=n.querySelector(".video__wrapper"),i=n.querySelectorAll(".video__item"),o=n.querySelectorAll(".video__buttons"),a=(n.querySelector(".video__left"),n.querySelector(".video__right"),parseFloat(getComputedStyle(r).width)),c=parseFloat(getComputedStyle(i[0]).width),s=0,l=0,u=c/a*100,f=[],d=0,m={isCycling:!1,direction:"right",interval:5e3,pause:!0};for(var v in e)v in m&&(m[v]=e[v]);i.forEach(function(t,e){f.push({item:t,position:e,transform:0})});var p={getItemMin:function(){var t=0;return f.forEach(function(e,n){e.position<f[t].position&&(t=n)}),t},getItemMax:function(){var t=0;return f.forEach(function(e,n){e.position>f[t].position&&(t=n)}),t},getMin:function(){return f[p.getItemMin()].position},getMax:function(){return f[p.getItemMax()].position}},g=function(t){var e;"right"===t&&(++s+a/c-1>p.getMax()&&(e=p.getItemMin(),f[e].position=p.getMax()+1,f[e].transform+=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l-=u),"left"===t&&(--s<p.getMin()&&(e=p.getItemMax(),f[e].position=p.getMin()-1,f[e].transform-=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l+=u),r.style.transform="translateX("+l+"%)"},y=function(t){m.isCycling&&(d=setInterval(function(){g(t)},m.interval))},_=function(t){if(t.target.classList.contains("video__buttons")){t.preventDefault();var e=t.target.classList.contains("video__right")?"right":"left";g(e),clearInterval(d),y(m.direction)}};o.forEach(function(t){t.addEventListener("click",_)}),m.pause&&m.isCycling&&(n.addEventListener("mouseenter",function(){clearInterval(d)}),n.addEventListener("mouseleave",function(){clearInterval(d),y(m.direction)})),y(m.direction)}(".main__video-wrapper",{isCycling:!1})},function(t,e,n){"use strict";!function(t,e){var n=document.querySelector(t),r=n.querySelector(".library__wrapper"),i=n.querySelectorAll(".library__item"),o=n.querySelectorAll(".library__buttons"),a=(n.querySelector(".library__left"),n.querySelector(".library__right"),parseFloat(getComputedStyle(r).width)),c=parseFloat(getComputedStyle(i[0]).width),s=0,l=0,u=c/a*100,f=[],d=0,m={isCycling:!1,direction:"right",interval:5e3,pause:!0};for(var v in e)v in m&&(m[v]=e[v]);i.forEach(function(t,e){f.push({item:t,position:e,transform:0})});var p={getItemMin:function(){var t=0;return f.forEach(function(e,n){e.position<f[t].position&&(t=n)}),t},getItemMax:function(){var t=0;return f.forEach(function(e,n){e.position>f[t].position&&(t=n)}),t},getMin:function(){return f[p.getItemMin()].position},getMax:function(){return f[p.getItemMax()].position}},g=function(t){var e;"right"===t&&(++s+a/c-1>p.getMax()&&(e=p.getItemMin(),f[e].position=p.getMax()+1,f[e].transform+=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l-=u),"left"===t&&(--s<p.getMin()&&(e=p.getItemMax(),f[e].position=p.getMin()-1,f[e].transform-=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l+=u),r.style.transform="translateX("+l+"%)"},y=function(t){m.isCycling&&(d=setInterval(function(){g(t)},m.interval))},_=function(t){if(t.target.classList.contains("library__buttons")){t.preventDefault();var e=t.target.classList.contains("library__right")?"right":"left";g(e),clearInterval(d),y(m.direction)}};o.forEach(function(t){t.addEventListener("click",_)}),m.pause&&m.isCycling&&(n.addEventListener("mouseenter",function(){clearInterval(d)}),n.addEventListener("mouseleave",function(){clearInterval(d),y(m.direction)})),y(m.direction)}(".main__library-wrapper",{isCycling:!1})},function(t,e){var n=document.querySelector(".phones__nav"),r=document.querySelector(".search-icon__block");void 0!==r&&r.addEventListener("click",function(t){t.preventDefault(),n.classList.toggle("focus__search--active")})},function(t,e){var n=document.querySelector(".button-to-top");n.onclick=function(){window.scrollTo(pageXOffset,0)},window.addEventListener("scroll",function(){n.hidden=pageYOffset<.1*document.documentElement.clientHeight})},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=document.querySelector(".photo__overlay"),i=document.querySelector(".video__play"),o=document.querySelector(".button--banner"),a=document.querySelector("#overlayTemplate").innerHTML;if(void 0!==a){var c=function(t){var e=document.createElement("div");e.innerHTML=t;var n=e.querySelector(".overlay"),r=e.querySelector(".overlay__content"),i=e.querySelector(".overlay__close");return n.addEventListener("click",function(t){t.target===n&&i.click()}),i.addEventListener("click",function(t){t.preventDefault(),document.body.removeChild(n),n.style.display="none",document.body.style.overflow="auto"}),{open:function(){document.body.appendChild(n),n.style.display="block",document.body.style.overflow="hidden"},close:function(){i.click()},setContent:function(t){r.innerHTML=t}}};if(n(r)){var s=c(a);r.addEventListener("click",function(t){t.preventDefault(),s.open(),s.setContent("")})}if(n(i)){var l=c(a);i.addEventListener("click",function(t){t.preventDefault(),l.open(),l.setContent("")})}if(n(o)){var u=c(a);o.addEventListener("click",function(t){t.preventDefault(),u.open(),u.setContent("")})}}},function(t,e,n){"use strict";!function(t,e){var n=document.querySelector(t),r=n.querySelector(".activity-news__wrapper"),i=n.querySelectorAll(".slider__item--activity-news "),o=n.querySelectorAll(".activity-news__buttons"),a=(n.querySelector(".activity-news__left"),n.querySelector(".activity-news__right"),parseFloat(getComputedStyle(r).width)),c=parseFloat(getComputedStyle(i[0]).width),s=0,l=0,u=c/a*100,f=[],d=0,m={isCycling:!1,direction:"right",interval:5e3,pause:!0};for(var v in e)v in m&&(m[v]=e[v]);i.forEach(function(t,e){f.push({item:t,position:e,transform:0})});var p={getItemMin:function(){var t=0;return f.forEach(function(e,n){e.position<f[t].position&&(t=n)}),t},getItemMax:function(){var t=0;return f.forEach(function(e,n){e.position>f[t].position&&(t=n)}),t},getMin:function(){return f[p.getItemMin()].position},getMax:function(){return f[p.getItemMax()].position}},g=function(t){var e;"right"===t&&(++s+a/c-1>p.getMax()&&(e=p.getItemMin(),f[e].position=p.getMax()+1,f[e].transform+=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l-=u),"left"===t&&(--s<p.getMin()&&(e=p.getItemMax(),f[e].position=p.getMin()-1,f[e].transform-=100*f.length,f[e].item.style.transform="translateX("+f[e].transform+"%)"),l+=u),r.style.transform="translateX("+l+"%)"},y=function(t){m.isCycling&&(d=setInterval(function(){g(t)},m.interval))},_=function(t){if(t.target.classList.contains("activity-news__buttons")){t.preventDefault();var e=t.target.classList.contains("activity-news__right")?"right":"left";g(e),clearInterval(d),y(m.direction)}};o.forEach(function(t){t.addEventListener("click",_)}),m.pause&&m.isCycling&&(n.addEventListener("mouseenter",function(){clearInterval(d)}),n.addEventListener("mouseleave",function(){clearInterval(d),y(m.direction)})),y(m.direction)}(".main__activity-news-wrapper",{isCycling:!1})},,,,,,,,function(t,e,n){"use strict";n.r(e);n(0),n(1),n(2),n(3),n(4),n(5),n(6),n(10),n(7),n(8),n(9)}]);