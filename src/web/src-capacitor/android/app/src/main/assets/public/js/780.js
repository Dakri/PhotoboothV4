"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[780],{1780:(e,l,a)=>{a.r(l),a.d(l,{default:()=>we});var t=a(9835),u=a(6970);const n={class:"full-width full-height"},i=(0,t._)("div",{class:"text-h4 q-mb-md"},"Allgemein",-1),o={class:"q-gutter-md"},m=(0,t._)("div",{class:"text-h4 q-mb-md"},"Kamera/Bild Einstellungen",-1),s={class:"q-gutter-md"},d=(0,t._)("div",{class:"text-h4 q-mb-md"},"Galerie",-1),r={class:"q-gutter-md"},c=(0,t._)("br",null,null,-1),p=(0,t._)("div",{class:"text-h4 q-mb-md"},"Galerien",-1),w={class:"q-ml-sm"},f=(0,t.Uk)("Gallerie "),b=(0,t.Uk)(" wirklich löschen?"),g={class:"q-gutter-md"},v=(0,t.Uk)(' Noch keine Gallery vorhanden, bitte über das "+" erstellen '),y=(0,t.Uk)("Aktivieren"),_=(0,t.Uk)("USB Archiv"),h=(0,t.Uk)("Löschen"),W={class:"text-right"},q=(0,t._)("div",{class:"text-h6"},"Neue Galerie erstellen",-1),V={class:"row q-gutter-md"},k=(0,t.Uk)("Erstellen"),U=(0,t.Uk)("Abbrechen"),G=(0,t._)("div",{class:"text-h4 q-mb-md"},"Usb Speicher",-1),Z=(0,t._)("div",{class:"text-h4 q-mb-md"},"Movies",-1),Q=(0,t._)("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.",-1),S=(0,t._)("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.",-1),x=(0,t._)("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.",-1);function D(e,l,a,D,z,j){const C=(0,t.up)("q-tab"),I=(0,t.up)("q-tabs"),L=(0,t.up)("q-input"),A=(0,t.up)("q-tab-panel"),F=(0,t.up)("q-avatar"),M=(0,t.up)("q-card-section"),T=(0,t.up)("q-btn"),H=(0,t.up)("q-card-actions"),B=(0,t.up)("q-card"),P=(0,t.up)("q-dialog"),K=(0,t.up)("q-item-section"),N=(0,t.up)("q-item"),E=(0,t.up)("q-item-label"),O=(0,t.up)("q-icon"),Y=(0,t.up)("q-separator"),$=(0,t.up)("q-list"),J=(0,t.up)("q-menu"),R=(0,t.up)("q-checkbox"),X=(0,t.up)("q-select"),ee=(0,t.up)("usb-devices"),le=(0,t.up)("q-tab-panels"),ae=(0,t.up)("q-page"),te=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(ae,{style:{"background-color":"#ffffff"}},{default:(0,t.w5)((()=>[(0,t._)("div",n,[(0,t.Wm)(I,{modelValue:D.tab,"onUpdate:modelValue":l[0]||(l[0]=e=>D.tab=e),horizontal:"",class:"bg-teal text-white","keep-alive":""},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{name:"general",icon:"settings",label:"Allgemein"}),(0,t.Wm)(C,{name:"camera",icon:"camera",label:"Kamera"}),(0,t.Wm)(C,{name:"gallery",icon:"collections",label:"Galerie"}),(0,t.Wm)(C,{name:"usb",icon:"usb",label:"Usb"}),(0,t.Wm)(C,{name:"clients",icon:"computer",label:"Clients"})])),_:1},8,["modelValue"]),(0,t.Wm)(le,{modelValue:D.tab,"onUpdate:modelValue":l[17]||(l[17]=e=>D.tab=e),animated:"",swipeable:"",horizontal:"",infinite:"","transition-prev":"jump-right","transition-next":"jump-left"},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{name:"general"},{default:(0,t.w5)((()=>[i,(0,t._)("div",o,[(0,t.Wm)(L,{filled:"",type:"text",modelValue:D.app.password,"onUpdate:modelValue":[l[1]||(l[1]=e=>D.app.password=e),D.updateSettings],modelModifiers:{lazy:!0},label:"Passwort für allgemeinen Zugriff",hint:"Default:  photobooth"},null,8,["modelValue","onUpdate:modelValue"]),(0,t.Wm)(L,{filled:"",type:"text",modelValue:D.settings.password,"onUpdate:modelValue":[l[2]||(l[2]=e=>D.settings.password=e),D.updateSettings],modelModifiers:{lazy:!0},label:"Passwort um Einstellungen zu ändern",hint:"Default:  photobooth"},null,8,["modelValue","onUpdate:modelValue"]),(0,t.Wm)(L,{filled:"",type:"text",modelValue:D.gallery.password,"onUpdate:modelValue":[l[3]||(l[3]=e=>D.gallery.password=e),D.updateSettings],modelModifiers:{lazy:!0},label:"Passwort um Gallerie einzusehen",hint:"Default:  photobooth"},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),(0,t.Wm)(A,{name:"camera"},{default:(0,t.w5)((()=>[m,(0,t._)("div",s,[(0,t.Wm)(L,{filled:"",type:"number",modelValue:D.camera.triggerDelay,"onUpdate:modelValue":[l[4]||(l[4]=e=>D.camera.triggerDelay=e),D.updateSettings],modelModifiers:{lazy:!0},label:"Auslöser Verzögerung",hint:"Default:  -465",prefix:"Millisekunden"},null,8,["modelValue","onUpdate:modelValue"]),(0,t.Wm)(L,{filled:"",type:"number",modelValue:D.camera.countdown,"onUpdate:modelValue":[l[5]||(l[5]=e=>D.camera.countdown=e),D.updateSettings],modelModifiers:{lazy:!0},label:"Auslöser Countdown",hint:"Default:  3",prefix:"Sekunden"},null,8,["modelValue","onUpdate:modelValue"]),(0,t.Wm)(L,{filled:"",type:"number",modelValue:D.camera.previewTimeout,"onUpdate:modelValue":[l[6]||(l[6]=e=>D.camera.previewTimeout=e),D.updateSettings],modelModifiers:{lazy:!0},label:"Bildanzeige Timeout",hint:"Default:  5",prefix:"Sekunden"},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),(0,t.Uk)(" "+(0,u.zw)(D.galleryList)+" ",1),(0,t.Wm)(A,{name:"gallery"},{default:(0,t.w5)((()=>[d,(0,t._)("div",r,[(0,t.Wm)(L,{filled:"",type:"text",modelValue:D.gallery.resolution,"onUpdate:modelValue":[l[7]||(l[7]=e=>D.gallery.resolution=e),D.updateSettings],modelModifiers:{lazy:!0},label:"Breite Thumbnails",hint:"Default:  80px",prefix:"Width"},null,8,["modelValue","onUpdate:modelValue"])]),c,p,(0,t.Wm)(P,{modelValue:D.confirmDelete,"onUpdate:modelValue":l[9]||(l[9]=e=>D.confirmDelete=e),persistent:""},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[(0,t.Wm)(M,{class:"row items-center"},{default:(0,t.w5)((()=>[(0,t.Wm)(F,{icon:"trash",color:"primary","text-color":"white"}),(0,t._)("span",w,[f,(0,t._)("b",null,(0,u.zw)(D.toDeleteGallery.name),1),b])])),_:1}),(0,t.Wm)(H,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(T,{flat:"",label:"Abbrechen",color:"primary"},null,512),[[te]]),(0,t.wy)((0,t.Wm)(T,{flat:"",label:"Löschen",color:"primary",onClick:l[8]||(l[8]=e=>D.removeGalleryConfirmed(D.toDeleteGallery))},null,512),[[te]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t._)("div",g,[(0,t.Wm)($,{class:"gallery-list"},{default:(0,t.w5)((()=>[D.galleryList.length<=0?((0,t.wg)(),(0,t.j4)(N,{key:0},{default:(0,t.w5)((()=>[(0,t.Wm)(K,{class:"col-6"},{default:(0,t.w5)((()=>[v])),_:1})])),_:1})):(0,t.kq)("",!0),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(D.galleryList,(e=>((0,t.wg)(),(0,t.j4)(N,{key:e.id},{default:(0,t.w5)((()=>[(0,t.Wm)(K,{class:"col-6"},{default:(0,t.w5)((()=>[(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[(0,t._)("b",null,(0,u.zw)(e.name),1)])),_:2},1024),(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.photos)+" Fotos / "+(0,u.zw)(e.storedOnUSB)+" Usb",1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[e.active?((0,t.wg)(),(0,t.j4)(O,{key:0,name:"check_circle",size:"md",color:"green",filled:""})):(0,t.kq)("",!0),e.active?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(O,{key:1,name:"check_circle",size:"md",disabled:"true",color:"gray"}))])),_:2},1024)])),_:2},1024),(0,t.Wm)(K,{class:"text-right"},{default:(0,t.w5)((()=>[(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[(0,t.Wm)(T,{color:"primary",icon:"menu"},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{"transition-show":"jump-down","transition-hide":"jump-up"},{default:(0,t.w5)((()=>[(0,t.Wm)($,{style:{"min-width":"100px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(N,{clickable:"",disable:e.active},{default:(0,t.w5)((()=>[(0,t.Wm)(K,null,{default:(0,t.w5)((()=>[y])),_:1})])),_:2},1032,["disable"]),(0,t.Wm)(N,{clickable:""},{default:(0,t.w5)((()=>[(0,t.Wm)(K,null,{default:(0,t.w5)((()=>[_])),_:1})])),_:1}),(0,t.Wm)(Y),(0,t.Wm)(N,{clickable:""},{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.j4)(K,{onClick:l=>D.removeGallery(e)},{default:(0,t.w5)((()=>[h])),_:2},1032,["onClick"])),[[te]])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),(0,t.Wm)(N,null,{default:(0,t.w5)((()=>[(0,t.Wm)(K,{class:"text-right"},{default:(0,t.w5)((()=>[(0,t._)("div",W,[(0,t.Wm)(T,{fab:"",icon:"add",color:"primary",onClick:l[10]||(l[10]=e=>D.showGalleryDialog=!0)})])])),_:1})])),_:1})])),_:1}),(0,t.Wm)(P,{modelValue:D.showGalleryDialog,"onUpdate:modelValue":l[15]||(l[15]=e=>D.showGalleryDialog=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[(0,t.Wm)(M,null,{default:(0,t.w5)((()=>[q])),_:1}),(0,t.Wm)(M,null,{default:(0,t.w5)((()=>[(0,t.Wm)(L,{modelValue:D.newGallery.name,"onUpdate:modelValue":l[11]||(l[11]=e=>D.newGallery.name=e),label:"Galeriename"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(M,null,{default:(0,t.w5)((()=>[(0,t.Wm)(R,{"model-value":D.newGallery.active,"onUpdate:model-value":l[12]||(l[12]=e=>D.newGallery.active=e),label:"Beim erstellen aktiv"},null,8,["model-value"])])),_:1}),(0,t.Wm)(M,null,{default:(0,t.w5)((()=>[(0,t.Wm)(X,{"model-value":D.newGallery.usb,"onUpdate:model-value":l[13]||(l[13]=e=>D.newGallery.usb=e),label:"Speicherziel (USB)",options:[{label:"/mnt/usb1",value:"/mnt/usb1"}]},null,8,["model-value"])])),_:1}),(0,t.Wm)(M,null,{default:(0,t.w5)((()=>[(0,t._)("div",V,[(0,t.Wm)(T,{onClick:l[14]||(l[14]=e=>D.confirmNewGallery()),color:"positive"},{default:(0,t.w5)((()=>[k])),_:1}),(0,t.wy)(((0,t.wg)(),(0,t.j4)(T,{color:"negative"},{default:(0,t.w5)((()=>[U])),_:1})),[[te]])])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])),_:1}),(0,t.Wm)(A,{name:"usb"},{default:(0,t.w5)((()=>[G,(0,t.Wm)(ee,{devices:D.usb,"onUpdate:devices":l[16]||(l[16]=e=>D.usb=e),onInput:D.updateSettings},null,8,["devices","onInput"])])),_:1}),(0,t.Wm)(A,{name:"clients"},{default:(0,t.w5)((()=>[Z,Q,S,x])),_:1})])),_:1},8,["modelValue"])])])),_:1})}var z=a(499),j=a(8143);function C(e,l,a,n,i,o){const m=(0,t.up)("q-item-label"),s=(0,t.up)("q-item-section"),d=(0,t.up)("q-select"),r=(0,t.up)("q-item"),c=(0,t.up)("q-list");return(0,t.wg)(),(0,t.j4)(c,null,{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.devices.list,(a=>((0,t.wg)(),(0,t.j4)(r,{key:a.name},{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(a.name),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,{modelValue:a.type,"onUpdate:modelValue":e=>a.type=e,onInput:l[0]||(l[0]=l=>e.$emit("input")),options:[{label:"Dynamisch",value:"dynamicStorage"},{label:"Kein",value:"none"}]},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})}const I={name:"UsbDevices",props:{devices:{type:Object,default:()=>{}}},setup(){return{}}};var L=a(1639),A=a(3246),F=a(490),M=a(1233),T=a(3115),H=a(8401),B=a(9984),P=a.n(B);const K=(0,L.Z)(I,[["render",C]]),N=K;P()(I,"components",{QList:A.Z,QItem:F.Z,QItemSection:M.Z,QItemLabel:T.Z,QSelect:H.Z});var E=a(899),O=a(1495);const Y={name:"SettingsPage",components:{UsbDevices:N},setup(){const e=(0,j.F)(),l=(0,O.s)(),a=(0,t.Fl)((()=>e.settings)),u=(0,t.Fl)((()=>a.value.app||{})),n=(0,t.Fl)((()=>a.value.settings||{})),i=(0,t.Fl)((()=>a.value.gallery||{})),o=(0,t.Fl)((()=>a.value.camera||{})),m=((0,t.Fl)((()=>o.value.preview||{})),(0,z.iH)({list:[{name:"/mnt/usb1",type:"dynamicStorage"},{name:"/mnt/usb2",type:"none"}]})),s=(0,t.Fl)((()=>a.value.clients||{})),d=(0,z.iH)({name:"",active:!1,usb:""}),r=(0,t.Fl)((()=>{var e;if(!l.gallery.list||!l.gallery.currentActive)return[];const a=null===(e=l.gallery)||void 0===e?void 0:e.currentActive,t=Object.values(l.gallery.list),u=t.map((e=>(e.active=!1,e.id===a&&(e.active=!0),e)));return u})),c=(0,z.iH)(!1);setTimeout((()=>{c.value=!0}),200);const p=(0,E.Z)((()=>{console.log("save Settings"),e.saveSettings()}),500),w=(0,z.iH)(!1),f=()=>{l.addGallery(d.value),d.value={name:"",active:!1,usb:""},l.requestGallery(),w.value=!1},b=(0,z.iH)(!1),g=(0,z.iH)({}),v=e=>{g.value=e,b.value=!0},y=e=>{l.removeGallery(e),l.requestGallery()};return l.requestGallery(),{tab:(0,z.iH)("gallery"),splitterModel:(0,z.iH)(20),showFooterButtons:c,settingsComp:a,app:u,settings:n,gallery:i,camera:o,usb:m,clients:s,updateSettings:p,galleryList:r,showGalleryDialog:w,newGallery:d,confirmNewGallery:f,removeGallery:v,toDeleteGallery:g,confirmDelete:b,removeGalleryConfirmed:y}}};var $=a(9885),J=a(7817),R=a(900),X=a(9800),ee=a(4106),le=a(6611),ae=a(2074),te=a(4458),ue=a(3190),ne=a(1357),ie=a(1821),oe=a(4455),me=a(2857),se=a(5290),de=a(926),re=a(1006),ce=a(2146);const pe=(0,L.Z)(Y,[["render",D]]),we=pe;P()(Y,"components",{QPage:$.Z,QTabs:J.Z,QTab:R.Z,QTabPanels:X.Z,QTabPanel:ee.Z,QInput:le.Z,QDialog:ae.Z,QCard:te.Z,QCardSection:ue.Z,QAvatar:ne.Z,QCardActions:ie.Z,QBtn:oe.Z,QList:A.Z,QItem:F.Z,QItemSection:M.Z,QItemLabel:T.Z,QIcon:me.Z,QMenu:se.Z,QSeparator:de.Z,QCheckbox:re.Z,QSelect:H.Z}),P()(Y,"directives",{ClosePopup:ce.Z})}}]);