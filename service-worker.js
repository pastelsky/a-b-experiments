"use strict";var precacheConfig=[["/a-b-experiments/index.html","86c7ce82b68a247606e1847ed526f9c8"],["/a-b-experiments/static/css/main.321c32f1.css","a577887f1abad418dba6cdac910b9b70"],["/a-b-experiments/static/js/main.572acc5f.js","292bb1e60bff3b5c8a9ec9d53a29ec1d"],["/a-b-experiments/static/media/alpha.18489338.png","1848933838111c28b27c43a7126f099e"],["/a-b-experiments/static/media/campaign-logo.ec5676d6.png","ec5676d63d991865170ccac19683ff77"],["/a-b-experiments/static/media/coin.1f8f30a5.svg","1f8f30a5ef5410901aa1f0edfc2f274d"],["/a-b-experiments/static/media/obama-button.dcde996c.png","dcde996c03b69f378bba37ade97804fc"],["/a-b-experiments/static/media/obama-change-2.3b42e74d.png","3b42e74deab64b70f862efa7d7ad7455"],["/a-b-experiments/static/media/obama-change.2e0538bd.gif","2e0538bd21268d93263572a93d38291a"],["/a-b-experiments/static/media/obama-homepage.a083ebd3.png","a083ebd3cf9f4cc2f3cca860d469e235"],["/a-b-experiments/static/media/obama-involved.a083ebd3.png","a083ebd3cf9f4cc2f3cca860d469e235"],["/a-b-experiments/static/media/result.a294908a.png","a294908a632e7ae56514c2bf2dda6670"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/a-b-experiments/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});