"use strict";var precacheConfig=[["/index.html","1f145e47fd80c2e7336f89302157b46b"],["/static/css/main.9b9f28ea.css","71b30407bf131e701b7e13bc81b10fb1"],["/static/js/main.da03f6f0.js","a9284c88c74f42db60fd82e73abcd9dc"],["/static/media/backstars.064dde5d.png","064dde5d67b43d8aa3f096bfffd0592d"],["/static/media/beehappy.8a8bd685.jpg","8a8bd685bbd9b7127bc98f1193030d7d"],["/static/media/doughuniverse.4fdfd76f.jpg","4fdfd76f5e5ac538da26fc3ffd4a2bc7"],["/static/media/electro-hero.8a478019.jpg","8a4780198ea749a871ab9df783a12445"],["/static/media/frontstars.af147387.png","af147387fb4489e40f85b8cce68729b7"],["/static/media/github.95e8c988.svg","95e8c9881c75cc1851725d2a76c72deb"],["/static/media/linkedin.48ea32d4.svg","48ea32d46f4e77cb42f1bebe984bdaf9"],["/static/media/louise.0c19dc07.jpg","0c19dc0759ff4cdda40ce8f266a95aa9"],["/static/media/make.c8457e2e.jpg","c8457e2e84c3c8b433bc84adde7804c4"],["/static/media/medium.2661d430.svg","2661d430fed8af8c382cd37abffa29b1"],["/static/media/middlestars.a4287003.png","a4287003d5b0082c945152a5ef433662"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});