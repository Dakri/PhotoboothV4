"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[131],{3131:(e,t,a)=>{a.r(t),a.d(t,{default:()=>H});var n=a(9835);const l=(0,n.Uk)(" Photobooth V4 ("),r=(0,n.Uk)("Verbunden"),o=(0,n.Uk)("Nicht verbunden "),i=(0,n.Uk)("Suchen"),u=(0,n.Uk)(") "),c=(0,n.Uk)(" Photobooth Menu ");function p(e,t,a,p,s,d){const w=(0,n.up)("q-btn"),k=(0,n.up)("q-chip"),g=(0,n.up)("q-toolbar-title"),f=(0,n.up)("q-toolbar"),m=(0,n.up)("q-header"),h=(0,n.up)("q-item-label"),q=(0,n.up)("EssentialLink"),b=(0,n.up)("q-list"),y=(0,n.up)("q-drawer"),v=(0,n.up)("router-view"),Z=(0,n.up)("q-page-container"),_=(0,n.up)("q-footer"),Q=(0,n.up)("q-layout");return(0,n.wg)(),(0,n.j4)(Q,{view:"lHh Lpr lFf"},{default:(0,n.w5)((()=>[e.pageState.showHeader?((0,n.wg)(),(0,n.j4)(m,{key:0,elevated:""},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[l,e.connected?((0,n.wg)(),(0,n.j4)(k,{key:0,color:"green"},{default:(0,n.w5)((()=>[r])),_:1})):(0,n.kq)("",!0),e.connected?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(k,{key:1,color:"red"},{default:(0,n.w5)((()=>[o])),_:1})),e.connected?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(w,{key:2,icon:"search",onClick:t[0]||(t[0]=t=>e.serverSearch=!0)},{default:(0,n.w5)((()=>[i])),_:1})),u])),_:1})])),_:1})])),_:1})):(0,n.kq)("",!0),e.pageState.showMenu?((0,n.wg)(),(0,n.j4)(y,{key:1,modelValue:e.pageState.leftDrawerOpen,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pageState.leftDrawerOpen=t),bordered:""},{default:(0,n.w5)((()=>[(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[(0,n.Wm)(h,{header:""},{default:(0,n.w5)((()=>[c])),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.essentialLinks,(e=>((0,n.wg)(),(0,n.j4)(q,(0,n.dG)({key:e.title},e),null,16)))),128))])),_:1})])),_:1},8,["modelValue"])):(0,n.kq)("",!0),(0,n.Wm)(Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(v)])),_:1}),(0,n.Wm)(_,{elevated:"",class:"bg-grey-8 text-white footer"})])),_:1})}var s=a(6970);function d(e,t,a,l,r,o){const i=(0,n.up)("q-icon"),u=(0,n.up)("q-item-section"),c=(0,n.up)("q-item-label"),p=(0,n.up)("q-item");return(0,n.wg)(),(0,n.j4)(p,{clickable:"",tag:"a",target:"_self",href:e.link,onClick:e.special},{default:(0,n.w5)((()=>[e.icon?((0,n.wg)(),(0,n.j4)(u,{key:0,avatar:""},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{name:e.icon},null,8,["name"])])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.title),1)])),_:1}),(0,n.Wm)(c,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["href","onClick"])}const w=(0,n.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""},special:{type:Function,default:()=>{}}}});var k=a(1639),g=a(490),f=a(1233),m=a(2857),h=a(3115),q=a(9984),b=a.n(q);const y=(0,k.Z)(w,[["render",d]]),v=y;b()(w,"components",{QItem:g.Z,QItemSection:f.Z,QIcon:m.Z,QItemLabel:h.Z});var Z=a(4858),_=a(1268),Q=a(6431);const S=[{title:"Dashboard",caption:"Overview",icon:"dashboard",link:"/#/"},{title:"Client",caption:"Trigger / Preview / Gallery",icon:"camera",link:"/#/client"},{title:"Settings",caption:"Delay, Preview Timer, Camera",icon:"settings",link:"/#/settings"},{title:"Gallery",caption:"Gallery Overview",icon:"collections",link:"/#/gallery"}],L=(0,n.aZ)({name:"MainLayout",components:{EssentialLink:v},setup(){const e=(0,Z.u)(),t=(0,Q.T)(),{connected:a}=(0,_.Jk)(t),{serverSearch:n}=(0,_.Jk)(e);return{connected:a,serverSearch:n,pageState:e,essentialLinks:S,toggleLeftDrawer(){e.leftDrawerOpen=!e.leftDrawerOpen}}}});var W=a(7605),j=a(6602),C=a(1663),D=a(4455),U=a(1973),T=a(7691),O=a(6689),I=a(3246),P=a(2133),V=a(1378);const G=(0,k.Z)(L,[["render",p]]),H=G;b()(L,"components",{QLayout:W.Z,QHeader:j.Z,QToolbar:C.Z,QBtn:D.Z,QToolbarTitle:U.Z,QChip:T.Z,QDrawer:O.Z,QList:I.Z,QItemLabel:h.Z,QPageContainer:P.Z,QFooter:V.Z})}}]);