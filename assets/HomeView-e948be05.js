import{u as j}from"./List-275c6667.js";import{u as W}from"./settings-a635e265.js";import{g as B,o as D,a as U,n as F,u as C,b as G,r as N,w as R,c as A,s as P,d as q,e as H,f as b,V as $,h as S,i as V,t as x,j as k}from"./index-fa3ee689.js";import{V as E,a as z}from"./VRow-88a30550.js";function _(e){return B()?(D(e),!0):!1}function T(){const e=new Set,t=o=>{e.delete(o)};return{on:o=>{e.add(o);const r=()=>t(o);return _(r),{off:r}},off:t,trigger:(...o)=>Promise.all(Array.from(e).map(r=>r(...o)))}}function L(e){return typeof e=="function"?e():C(e)}const J=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const K=Object.prototype.toString,Q=e=>K.call(e)==="[object Object]",X=()=>{};function Y(e){return e||G()}function Z(e,t=!0,n){const i=Y(n);i?U(e,i):t?e():F(e)}function ee(e){var t;const n=L(e);return(t=n==null?void 0:n.$el)!=null?t:n}const M=J?window:void 0;function te(...e){let t,n,i,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,i,o]=e,t=M):[t,n,i,o]=e,!t)return X;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],a=()=>{r.forEach(l=>l()),r.length=0},p=(l,s,u,d)=>(l.addEventListener(s,u,d),()=>l.removeEventListener(s,u,d)),h=R(()=>[ee(t),L(o)],([l,s])=>{if(a(),!l)return;const u=Q(s)?{...s}:s;r.push(...n.flatMap(d=>i.map(c=>p(l,d,c,u))))},{immediate:!0,flush:"post"}),m=()=>{h(),a()};return _(m),m}function ne(){const e=N(!1);return G()&&U(()=>{e.value=!0}),e}function oe(e){const t=ne();return A(()=>(t.value,!!e()))}function ie(e={}){const{window:t=M,requestPermissions:n=!0}=e,i=e,o=oe(()=>!!t&&"Notification"in t),r=N(o.value&&"permission"in Notification&&Notification.permission==="granted"),a=N(null),p=async()=>{if(o.value)return!r.value&&Notification.permission!=="denied"&&await Notification.requestPermission()==="granted"&&(r.value=!0),r.value},{on:h,trigger:m}=T(),{on:l,trigger:s}=T(),{on:u,trigger:d}=T(),{on:c,trigger:O}=T(),w=async v=>{if(!o.value||!r.value)return;const f=Object.assign({},i,v);return a.value=new Notification(f.title||"",f),a.value.onclick=m,a.value.onshow=s,a.value.onerror=d,a.value.onclose=O,a.value},y=()=>{a.value&&a.value.close(),a.value=null};if(n&&Z(p),_(y),o.value&&t){const v=t.document;te(v,"visibilitychange",f=>{f.preventDefault(),v.visibilityState==="visible"&&y()})}return{isSupported:o,notification:a,ensurePermissions:p,permissionGranted:r,show:w,close:y,onClick:h,onShow:l,onError:u,onClose:c}}const ue={__name:"HomeView",setup(e){const t=j(),{currentItem:n,items:i,timeleft:o}=P(t),{setCurrentItem:r,countdown:a,setFinishedItem:p}=t,h=W(),{selectedAlarmFile:m,notify:l}=P(h),s={STOP:0,COUNTING:1,PAUSE:2};let u=0;const d=()=>{c.value===s.STOP&&i.value.length>0&&r(),c.value=s.COUNTING,u=setInterval(()=>{a(),o.value===0&&w()},1e3)},c=N(s.STOP),O=()=>{c.value=s.PAUSE,clearInterval(u)},w=()=>{clearInterval(u),c.value=s.STOP;const f=new Audio;if(f.src=m.value,f.play(),l.value){const{isSupported:g,show:I}=ie({title:"事項完成",body:n.value,icon:new URL(""+new URL("tomato-fe6b03eb.png",import.meta.url).href,self.location).href});g.value&&I()}p(),i.value.length>0&&d()},y=A(()=>n.value.length>0?n.value:i.value.length>0?"點擊開始":"沒有事項"),v=A(()=>{const f=Math.floor(o.value/60).toString().padStart(2,"0"),g=(o.value%60).toString().padStart(2,"0");return f+":"+g});return(f,g)=>(q(),H($,null,{default:b(()=>[S(z,null,{default:b(()=>[S(E,{cols:"12"},{default:b(()=>[V("h1",null,x(y.value),1),V("h1",null,x(v.value),1)]),_:1}),S(E,{cols:"12"},{default:b(()=>[S(k,{variant:"text",icon:"mdi-play",disabled:c.value===s.COUNTING||C(n).length===0&&C(i).length===0,onClick:g[0]||(g[0]=I=>d())},null,8,["disabled"]),S(k,{variant:"text",icon:"mdi-pause",disabled:c.value!==s.COUNTING,onClick:O},null,8,["disabled"]),S(k,{variant:"text",icon:"mdi-skip-next",disabled:C(n).length===0,onClick:w},null,8,["disabled"])]),_:1})]),_:1})]),_:1}))}};export{ue as default};