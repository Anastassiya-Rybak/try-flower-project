(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{269:function(e,t,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(107).default)("23c7a14c",content,!0,{sourceMap:!1})},270:function(e,t,n){"use strict";n(269)},271:function(e,t,n){var r=n(106)((function(i){return i[1]}));r.push([e.i,".range__plants-card{align-items:center;background-color:rgba(27,122,46,.264);border-radius:10px;box-shadow:1px 1px 15px rgba(0,3,3,.21);display:flex;flex-direction:column;height:60vh;margin-bottom:20px;max-height:450px;min-height:350px;width:275px}.range__plants-card__img{height:60%;margin-top:12px;max-height:320px;min-height:220px;overflow:hidden;width:90%}.range__plants-card__img img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.range__plants-card__title{font-size:20px;margin:10px 0 0}.range__plants-card__desc{font-size:14px;margin:10px 0;max-width:90%;text-align:center}.show-more-description{cursor:pointer;line-height:10px;-webkit-text-decoration:underline;text-decoration:underline}.show-more-description:hover{opacity:.7}.hide-full-desc{color:#06612a;cursor:pointer;line-height:30px;text-align:center;-webkit-text-decoration:underline;text-decoration:underline}.hide-full-desc:hover{opacity:.7}.range__plants-card__price{font-weight:800;letter-spacing:3px;margin-bottom:10px}",""]),r.locals={},e.exports=r},272:function(e,t,n){"use strict";n.r(t);n(197);var r={name:"RangeCard",props:{title:{type:String,required:!0,default:""},desc:{type:String,required:!0,default:""},fullDesc:{type:String,required:!0,default:""},price:{type:Number,default:0,required:!1},image:{type:String,required:!0,default:""}},data:function(){return{moreDescriptionOn:!1}},computed:{tooLongDesc:function(){return this.desc.length>68?"Больше...":""}},methods:{showMoreDescription:function(){this.moreDescriptionOn=!0},closeMoreDescription:function(){this.moreDescriptionOn=!1}}},o=(n(270),n(30)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"range__plants-card"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.moreDescriptionOn,expression:"!moreDescriptionOn"}],staticClass:"range__plants-card__img"},[t("img",{attrs:{src:e.image,alt:e.title}})]),e._v(" "),t("h2",{staticClass:"range__plants-card__title"},[e._v(e._s(e.title))]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:!e.moreDescriptionOn,expression:"!moreDescriptionOn"}],staticClass:"range__plants-card__desc"},[e._v("\n      "+e._s(e.desc)+"\n      "),t("span",{staticClass:"show-more-description",on:{click:e.showMoreDescription}},[e._v(" "+e._s(e.tooLongDesc)+" ")])]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:e.moreDescriptionOn,expression:"moreDescriptionOn"}],staticClass:"range__plants-card__desc"},[e._v("\n      "+e._s(e.fullDesc)+" "),t("br"),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.moreDescriptionOn,expression:"moreDescriptionOn"}],staticClass:"hide-full-desc",on:{click:e.closeMoreDescription}},[e._v(" Свернуть ")])]),e._v(" "),t("span",{staticClass:"range__plants-card__price"},[e._v("\n      "+e._s(e.price)+"тг\n    ")])])])}),[],!1,null,null,null);t.default=component.exports},275:function(e,t,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(107).default)("216f0992",content,!0,{sourceMap:!1})},285:function(e,t,n){e.exports=n.p+"img/WhatsAppImage2020-09-14at17.17.22.d79bc6a.jpg"},286:function(e,t,n){e.exports=n.p+"img/dieffenbachia-compacta-12-38-2-1000x1000.69fec67.jpg"},287:function(e,t,n){e.exports=n.p+"img/habkIArCNTMmP1PML0ZniA.cd7eda1.jpg"},288:function(e,t,n){e.exports=n.p+"img/monstera-14.565df1d.webp"},289:function(e,t,n){e.exports=n.p+"img/2-50-700x678.29e994d.jpg"},290:function(e,t,n){e.exports=n.p+"img/108-2.0e967d7.jpg"},291:function(e,t,n){e.exports=n.p+"img/fikus-elastika-klassika-sredi-krupnyih-komnatnyih-rasteniy-06.421b3d6.jpg"},292:function(e,t,n){e.exports=n.p+"img/baines160cm_Newflora.ru-.6c72d2d.jpg"},293:function(e,t,n){e.exports=n.p+"img/7-21-700x658.df17703.jpeg"},294:function(e,t,n){e.exports=n.p+"img/komnatnyiy-evkalipt-aromatnyiy-i-trebovatelnyiy-04.9ac14e3.jpg"},295:function(e,t,n){e.exports=n.p+"img/Антуриум_андре.95f7856.jpg"},296:function(e,t,n){"use strict";n(275)},297:function(e,t,n){var r=n(106)((function(i){return i[1]}));r.push([e.i,".range{margin:0 auto;max-width:1200px;width:100%}h1{color:#177a31;font-size:32px;margin-bottom:50px;text-align:center}.range-wrapper{display:flex;flex-wrap:wrap;justify-content:space-between}",""]),r.locals={},e.exports=r},304:function(e,t,n){"use strict";n.r(t);n(31),n(58),n(37),n(59);var r={name:"RangePage",components:{RangeCard:n(272).default},data:function(){return{range:[{name:"Аглаонема",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe itaque a magni, expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.",price:2e4,img:n(285)},{name:"Диффенбахия",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe itaque a magni, expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.",price:8e3,img:n(286)},{name:"Замиокулькас",description:"Alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.",price:1e4,img:n(287)},{name:"Монстера",description:"Saepe itaque a magni, expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.",price:2e4,img:n(288)},{name:"Фикус коучуконосный",description:"",price:25e3,img:n(289)},{name:"Фикус Бэнджамина",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe itaque a magni, expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.",price:4e4,img:n(290)},{name:"Фикус Эластика",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe itaque a magni, expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.",price:4e4,img:n(291)},{name:"Алоэ Байнеса",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe itaque a magni, expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.",price:4e4,img:n(292)},{name:"Сансевиерия",description:"Saepe itaque a magni, expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.",price:7e3,img:n(293)},{name:"Эвкалипт",description:"expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.",price:2e4,img:n(294)},{name:"Антуриум",description:"Saepe itaque a magni, expedita totam in soluta eum dolorem praesentium quam alias necessitatibus doloribus id commodi reprehenderit enim quas assumenda nihil.",price:1e4,img:n(295)}]}},computed:{}},o=(n(296),n(30)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"range"},[t("h1",{staticClass:"range__title"},[e._v("Ассортимент")]),e._v(" "),t("div",{staticClass:"range-wrapper"},e._l(e.range,(function(e){return t("RangeCard",{key:e.id,attrs:{title:e.name,desc:e.description.slice(0,70),"full-desc":e.description,price:e.price,image:e.img}})})),1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{RangeCard:n(272).default})}}]);