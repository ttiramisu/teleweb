(()=>{"use strict";const e=!1,t=!1,n=!1,s="tt-media-progressive",a=524288,i="tt-assets",o=("undefined"!=typeof window&&window.innerHeight,Math.round(425),new Set(["newMessage","newScheduledMessage","deleteMessages","deleteScheduledMessages","deleteHistory"]),new Set(["image/png","image/jpeg","image/gif"])),r=new Set(["video/mp4"]);new Set(["audio/mp3","audio/ogg","audio/wav","audio/mpeg","audio/flac","audio/aac","audio/m4a","audio/mp4","audio/x-m4a"]),new Set([...o,...r]),new Set(["t.me","web.t.me","k.t.me","z.t.me"]),new Set(["AU","BD","CA","CO","EG","HN","IE","IN","JO","MX","MY","NI","NZ","PH","PK","SA","SV","US"]);const c=e=>new Promise((t=>{setTimeout((()=>t()),e)})),l=524288,u=2097151,d=6e4,f=new Map;async function p(e,t){const n=t.url.includes("/download/")?(await self.clients.matchAll()).find((e=>"window"===e.type&&"top-level"===e.frameType)):await self.clients.get(e.clientId);if(!n)return;const s=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];do{t=String(Math.random()).replace("0.","id")}while(e[t]);return n&&(e[t]=!0),t}(f),a={};let i=!1;const o=Promise.race([c(d).then((()=>i?void 0:Promise.reject(new Error("ERROR_PART_TIMEOUT")))),new Promise(((e,t)=>{Object.assign(a,{resolve:e,reject:t})}))]);return f.set(s,a),o.catch((()=>{})).finally((()=>{f.delete(s),i=!0})),n.postMessage({type:"requestPart",messageId:s,params:t}),o}self.addEventListener("message",(e=>{const{type:t,messageId:n,result:s}=e.data;if("partResponse"===t){const e=f.get(n);e&&e.resolve(s)}}));const h=1048576;class m{constructor(){var e,t,n;e=this,n=void 0,(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t="queue"))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,this.queue=[]}push(e){this.queue.push(e)}async pop(){return await this.queue.shift()}get size(){return this.queue.length}}const g=3e3;async function w(e){const t=await y((async()=>{const t=await self.caches.open(i),n=await t.match(e.request);return{cache:t,cached:n}}),g),{cache:n,cached:s}=t||{};if(n&&s){if(s.ok)return s;await n.delete(e.request)}const a=await fetch(e.request);return a.ok&&n&&n.put(e.request,a.clone()),a}async function y(e,t){let n=!1;try{return await Promise.race([c(t).then((()=>n?void 0:Promise.reject(new Error("TIMEOUT")))),e()])}catch(e){return void console.error(e)}finally{n=!0}}var v=function(e){return e.True="1",e.False="0",e}(v||{});let S=(new Date).valueOf();const b=new Set,R={};function P(e){return e.custom.from_id?e.custom.from_id:e.custom.chat_id||e.custom.channel_id?`-${e.custom.chat_id||e.custom.channel_id}`:void 0}function I(e){if(e.custom.msg_id)return parseInt(e.custom.msg_id,10)}async function E(){const e=new URL(self.registration.scope).origin;return(await self.clients.matchAll({type:"window"})).filter((t=>new URL(t.url).origin===e))}async function T(e){const t=(await E())[0];t&&t.postMessage({type:"playNotificationSound",payload:{id:e}})}function q(e){let{chatId:t,messageId:n,body:s,title:a,icon:i,reaction:o,isSilent:r,shouldReplaceHistory:c}=e;const l=(new Date).valueOf()-S<1e3,u={body:s,data:{chatId:t,messageId:n,reaction:o,count:1,shouldReplaceHistory:c},icon:i||"icon-192x192.png",badge:"icon-192x192.png",tag:String(l?0:t||0),vibrate:[200,100,200]};return Promise.all([o||r?void 0:T(String(n)||t||""),self.registration.showNotification(a,u)])}async function M(t,n){if(n.chatId&&(t.postMessage({type:"focusMessage",payload:n}),!t.focused))try{await t.focus()}catch(t){e&&console.warn("[SW] ",t)}}function C(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}self.addEventListener("sync",(()=>{S=Date.now()}));class ${constructor(){C(this,"promise",void 0),C(this,"reject",void 0),C(this,"resolve",void 0),this.promise=new Promise(((e,t)=>{this.reject=t,this.resolve=e}))}}const j=new $;j.resolve();const U=new Map;const W=/\.(wasm|html)$/,L=/[\da-f]{20}.*\.(js|css|woff2?|svg|png|jpg|jpeg|tgs|json|wasm)$/;self.addEventListener("install",(t=>{e&&console.log("ServiceWorker installed"),t.waitUntil(self.skipWaiting())})),self.addEventListener("activate",(t=>{e&&console.log("ServiceWorker activated"),t.waitUntil(Promise.race([c(3e3),Promise.all([self.caches.delete(i),self.clients.claim()])]))})),self.addEventListener("fetch",(t=>{const{url:o}=t.request;if(o.includes("/progressive/"))return t.respondWith(async function(t){const{url:i}=t.request,o=t.request.headers.get("range"),r=/^bytes=(\d+)-(\d+)?$/g.exec(o||""),c=Number(r[1]),d=Number(r[2]);let f=d;if((!f||f-c+1>l)&&(f=c+l-1),0===c&&1===f){const e=t.request.url.match(/fileSize=(\d+)&mimeType=([\w/]+)/),n=e&&Number(e[1]),s=e?.[2];if(n&&s)return new Response(new Uint8Array(2).buffer,{status:206,statusText:"Partial Content",headers:[["Content-Range",`bytes 0-1/${n}`],["Accept-Ranges","bytes"],["Content-Length","2"],["Content-Type",s]]})}const h=`${i}?start=${c}&end=${f}`,[m,g]=n?[]:await async function(e){const t=await self.caches.open(s);return Promise.all([t.match(`${e}&type=arrayBuffer`).then((e=>e?e.arrayBuffer():void 0)),t.match(`${e}&type=headers`).then((e=>e?e.json():void 0))])}(h);if(e&&console.log(`FETCH PROGRESSIVE ${h} (request: ${c}-${d}) CACHED: ${Boolean(m)}`),m)return new Response(m,{status:206,statusText:"Partial Content",headers:g});let w;try{w=await p(t,{url:i,start:c,end:f})}catch(t){e&&console.error("FETCH PROGRESSIVE",t)}if(!w)return new Response("",{status:500,statusText:"Failed to fetch progressive part"});const{arrayBuffer:y,fullSize:v,mimeType:S}=w,b=Math.min(f-c+1,y.byteLength);f=c+b-1;const R=y.slice(0,b),P=[["Content-Range",`bytes ${c}-${f}/${v}`],["Accept-Ranges","bytes"],["Content-Length",String(b)],["Content-Type",S]];return!n&&b<=a&&f<u&&async function(e,t,n){const a=await self.caches.open(s);Promise.all([a.put(new Request(`${e}&type=arrayBuffer`),new Response(t)),a.put(new Request(`${e}&type=headers`),new Response(JSON.stringify(n)))])}(h,R,P),new Response(R,{status:206,statusText:"Partial Content",headers:P})}(t)),!0;if(o.includes("/download/"))return t.respondWith(async function(t){const{url:n}=t.request;let s;try{s=await p(t,{url:n,start:0,end:65536})}catch(t){e&&console.error("FETCH DOWNLOAD",t)}if(!s)return new Response("",{status:500,statusText:"Failed to fetch file to download"});const a=t.request.url.match(/filename=(.*)/),i=a?`filename="${decodeURIComponent(a[1])}"`:"",{fullSize:o,mimeType:r}=s,c=[["Content-Length",String(o)],["Content-Type",r],["Content-Disposition",`attachment; ${i}`]],l=new m,u=e=>(l.push(p(t,{url:n,start:e,end:e+h-1}).then((e=>e?.arrayBuffer))),e+h);let d=0;const f=new ReadableStream({start(){for(let e=0;e<8&&!(d>=o);e++)d=u(d)},async pull(e){const t=await l.pop();t?(e.enqueue(new Uint8Array(t)),t.byteLength<h?e.close():d<o&&(d=u(d))):e.close()}});return new Response(f,{status:200,statusText:"OK",headers:c})}(t)),!0;if(o.includes("/share/")&&t.respondWith(async function(e){if("POST"===e.request.method)try{!async function(e,t){const n=await self.clients.get(t);n&&(await function(e){const t=U.get(e);if(t)return t.promise;const n=new $;return U.set(e,n),n.promise}(t),n.postMessage({type:"share",payload:e}))}(function(e){const t=e.getAll("files");return{title:e.get("title"),text:e.get("text"),url:e.get("url"),files:t}}(await e.request.formData()),e.resultingClientId)}catch(e){console.warn("[SHARE] Failed to parse input data",e)}return Response.redirect(".")}(t)),o.startsWith("http")){if("/"===new URL(o).pathname||o.match(W))return t.respondWith(async function(e){const t=await y((()=>fetch(e.request)),g);if(!t?.ok)return w(e);const n=t.clone();return self.caches.open(i).then((t=>t?.put(e.request,n))),t}(t)),!0;if(o.match(L))return t.respondWith(w(t)),!0}return!1})),self.addEventListener("push",(function(t){e&&(console.log("[SW] Push received event",t),t.data&&console.log("[SW] Push received with data",t.data.json()));const n=function(t){try{return t.data.json()}catch(n){return void(e&&console.log("[SW] Unable to parse push notification data",t.data))}}(t);if(!n||n.mute===v.True)return;const s=function(e){let t=e.title||"Telegram WebZ";const n=e.custom?.silent===v.True;return n&&(t+=" 🔕"),{chatId:P(e),messageId:I(e),body:e.description,isSilent:n,title:t}}(n);b.has(s.messageId)?b.delete(s.messageId):t.waitUntil(q(s))})),self.addEventListener("notificationclick",(function(t){const n=self.registration.scope;t.notification.close();const{data:s}=t.notification;t.waitUntil((async()=>{const t=await E();if(await Promise.all(t.map((e=>(R[e.id]=s,M(e,s))))),self.clients.openWindow&&!(t.length>0)){R[0]=s;try{const e=await self.clients.openWindow(n);e&&(R[e.id]=s)}catch(t){e&&console.warn("[SW] ",t)}}})())})),self.addEventListener("message",(e=>{(function(e){if(t&&console.log("[SW] New message from client",e),!e.data)return;const n=e.source;if("clientReady"===e.data.type){const t=R[n.id]||R[0];t&&(delete R[n.id],delete R[0],e.waitUntil(M(n,t)))}if("showMessageNotification"===e.data.type){const t=e.data.payload;e.waitUntil((async()=>(t.chatId&&(await self.registration.getNotifications({tag:t.chatId})).forEach((e=>e.close())),b.add(t.messageId),q(t)))())}"closeMessageNotifications"===e.data.type&&e.waitUntil(async function(e){let{chatId:t,lastReadInboxMessageId:n}=e;const s=await self.registration.getNotifications(),a=n||Number.MAX_VALUE;s.forEach((e=>{("0"===e.tag||e.data.chatId===t&&e.data.messageId<=a)&&e.close()}))}(e.data.payload))})(e),function(e){const{source:t,data:n}=e;if(t&&"clientReady"===n.type){const{id:e}=t,n=U.get(e);n?n.resolve():U.set(e,j)}}(e)}))})();
//# sourceMappingURL=1367.c57950d7e62845f2715a.js.map