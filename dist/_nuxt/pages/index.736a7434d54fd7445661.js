webpackJsonp([7],{"/TYz":function(t,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=s("v3Sr"),e=s("vFTf"),n=s("VU/8"),i=n(a.a,e.a,null,null,null);r.default=i.exports},"1GMj":function(t,r,s){"use strict";r.a={props:["img","text","branchId"]}},"1PK9":function(t,r,s){"use strict";var a=s("vY5S");r.a={props:["branchs","branchid","course"],components:{RatingInCard:a.a}}},"4eFc":function(t,r,s){"use strict";r.a={props:["src","position","height"]}},NpEb:function(t,r,s){"use strict";var a=s("1GMj"),e=s("ZOHu"),n=s("VU/8"),i=n(a.a,e.a,null,null,null);r.a=i.exports},"ON+l":function(t,r,s){"use strict";var a=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",[s("br"),s("v-container",{attrs:{"grid-list-lg":""}},[s("v-layout",[s("v-flex",{attrs:{xs11:""}},[s("h6",[t._v('คอร์สที่ได้รับความนิยมใน "'+t._s(t.branchs)+'"')])]),s("v-flex",{attrs:{xs1:"","text-xs-right":""}},[s("nuxt-link",{attrs:{to:"/allcourse/"+t.branchid}},[t._v("ดูทั้งหมด")])],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.course,function(r){return[s("v-flex",{attrs:{xs6:"",md4:"",lg3:""}},[s("nuxt-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/course/"+r.course_id,tag:"span"}},[s("v-card",[s("v-card-media",{attrs:{src:r.cover,height:"150"}}),s("v-card-text",[s("p",[t._v(t._s(r.subject)+" ("+t._s(r.code)+")")]),s("span",{staticClass:"grey--text"},[t._v(t._s(r.fname)+" "+t._s(r.lname))]),s("br"),s("RatingInCard",{attrs:{courseId:r.course_id}})],1),s("v-card-actions",[s("v-spacer"),s("h6",{staticClass:"primary--text"},[t._v(t._s(r.price)+".-")])],1)],1)],1)],1)]})],2)],1)],1)},e=[],n={render:a,staticRenderFns:e};r.a=n},ZOHu:function(t,r,s){"use strict";var a=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[s("nuxt-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/allcourse/"+t.branchId,tag:"span"}},[s("v-card",[s("v-card-media",{attrs:{src:t.img,height:"200"}}),s("v-card-title",[t._v(t._s(t.text))])],1)],1)],1)},e=[],n={render:a,staticRenderFns:e};r.a=n},cSCX:function(t,r,s){"use strict";var a=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",[[s("v-parallax",{attrs:{src:t.src,height:t.height}},["center"==t.position?[s("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[t._t("default")],2)]:[s("v-layout",[s("v-container",[t._t("default")],2)],1)]],2)]],2)},e=[],n={render:a,staticRenderFns:e};r.a=n},mpuw:function(t,r,s){"use strict";var a=s("4eFc"),e=s("cSCX"),n=s("VU/8"),i=n(a.a,e.a,null,null,null);r.a=i.exports},nTDs:function(t,r,s){"use strict";var a=s("1PK9"),e=s("ON+l"),n=s("VU/8"),i=n(a.a,e.a,null,null,null);r.a=i.exports},ripa:function(t,r,s){"use strict";var a=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",[t._l(t.$store.getters.COURSE_VOTE_FROM_COURSE_ID(t.courseId),function(r){return[t._l(5,function(a,e){return[r.avg.toFixed(0)>e?[s("v-icon",[t._v("star")])]:[s("v-icon",[t._v("star_border")])]]}),s("span",[t._v(t._s(r.avg.toFixed(1)))]),s("br"),s("span",{staticClass:"grey--text"},[t._v("คนโหวตทั้งหมด "+t._s(r.length)+" คน")])]})],2)},e=[],n={render:a,staticRenderFns:e};r.a=n},tX2r:function(t,r,s){"use strict";r.a={props:["courseId"]}},v3Sr:function(t,r,s){"use strict";var a=s("mvHQ"),e=s.n(a),n=s("Xxa5"),i=s.n(n),c=s("exGp"),o=s.n(c),l=s("mpuw"),u=s("NpEb"),v=s("nTDs"),p=s("vY5S");r.a={asyncData:function(){function t(t){return r.apply(this,arguments)}var r=o()(i.a.mark(function t(r){var s=r.store;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.dispatch("PULL_POPULAR_COURSE_INDEX");case 2:case"end":return t.stop()}},t,this)}));return t}(),computed:{branchs:function(){return this.$store.state.branchs},popularCourseIndex:function(){return this.$store.state.popularCourseIndex}},mounted:function(){console.log(e()(this.branchs))},components:{parallax:l.a,branch:u.a,popularCourse:v.a,RatingInCard:p.a}}},vFTf:function(t,r,s){"use strict";var a=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",[s("parallax",{attrs:{height:"500",type:"link",src:"http://www.gengotutors.com/img/slides/skype-language-tutor-homepage-background.jpg",position:"center"}},[s("h1",{staticClass:"white--text text-xs-center"},[t._v("เรียนกับอาจารย์ไม่รู้เรื่อง ?")]),s("h4",{staticClass:"white--text"},[t._v("มาเริ่มต้นกับเราที่ ABC-Tutor")]),s("v-btn",{staticStyle:{padding:"60px 70px 60x 70px"},attrs:{round:"",primary:"",large:"",nuxt:"",to:"/login"}},[t._v("สม้ครสมาชิก")])],1),s("div",[s("br"),s("br"),s("v-container",{attrs:{"grid-list-lg":""}},[s("h6",[t._v("ที่ได้รับความนิยม")]),s("v-spacer"),s("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.popularCourseIndex,function(r){return[s("v-flex",{attrs:{xs6:"",md3:""}},[s("nuxt-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/course/"+r.course_id,tag:"span"}},[s("v-card",[s("v-card-media",{attrs:{src:r.cover,height:"150"}}),s("v-card-text",[s("p",{staticStyle:{display:"inline"}},[t._v(t._s(r.subject)+" ("+t._s(r.code)+")")]),s("br"),s("span",{staticClass:"grey--text"},[t._v(t._s(r.fname)+" "+t._s(r.lname))]),s("br"),s("RatingInCard",{attrs:{courseId:r.course_id}})],1),s("v-card-actions",[s("v-spacer"),s("h6",{staticClass:"primary--text"},[s("b",[t._v(t._s(r.price)+".-")])])],1)],1)],1)],1)]})],2)],1)],1),s("hr"),s("div",{staticClass:"text-xs-center white"},[s("v-container",{attrs:{"grid-list-lg":""}},[s("br"),s("h5",{staticClass:"black--text"},[t._v("สำรวจ")]),s("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.branchs,function(t){return[s("branch",{attrs:{img:t.img,text:t.text,branchId:t.branch_id}})]})],2)],1)],1),s("br"),s("div",{staticClass:"grey darken-4"},[s("v-container",[s("v-card",{staticClass:"grey darken-4",attrs:{flat:""}},[s("v-card-text",[s("div",{staticClass:"text-xs-center"},[s("h5",{staticClass:"white--text"},[t._v(t._s(t.$store.state.projectName)+" ทำงานอย่างไร?")]),s("v-layout",[s("v-flex",{attrs:{xs6:""}},[s("v-layout",[s("v-flex",{attrs:{xs3:""}},[s("img",{attrs:{src:"http://www.clker.com/cliparts/D/k/0/U/i/k/search-icon-red-hi.png",height:"55",alt:""}})]),s("v-flex",{attrs:{xs4:"","text-xs-left":""}},[s("span",{staticClass:"white--text"},[s("b",[t._v("ค้นหาวิชาที่จะติว")])]),s("br"),s("span",{staticClass:"white--text"},[t._v("สำรวจวิชาที่สนใจจะติวด้วยรหัสวิชา")])])],1)],1),s("v-flex",{attrs:{xs6:""}},[s("v-layout",[s("v-flex",{attrs:{xs7:"","text-xs-right":""}},[s("img",{attrs:{src:"https://cdn4.iconfinder.com/data/icons/keynote-and-powerpoint-icons/256/Plus-128.png",height:"55",alt:""}})]),s("v-flex",{staticClass:"ml-5",attrs:{xs4:"","text-xs-left":""}},[s("span",{staticClass:"white--text"},[s("b",[t._v("สร้างคอร์ส")])]),s("br"),s("span",{staticClass:"white--text"},[t._v("สร้างคอร์สของคุณเพื่อความก้าวหน้าของคุณ")])])],1)],1)],1)],1)])],1)],1)],1),s("v-container",[s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("div",{staticClass:"text-xs-center"},[s("h5",{staticStyle:{display:"inline"}},[s("b",[t._v("ประสบการณ์การใหม่บนมือถือ")])]),s("p",[t._v("ไม่ต้องติดตั้งแอปพลิเคชันบนมือถือ สำหรับ Android ด้วยระบบ Progressive Web Apps   "),s("nuxt-link",{attrs:{to:""}},[t._v("ข้อมูลเพิ่มเติม")])],1)]),s("br"),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",md6:""}},[s("img",{attrs:{src:"https://blog.ionic.io/wp-content/uploads/2016/05/what-is-pwa-img.png",alt:"",height:"200"}})]),s("v-flex",{attrs:{xs6:"",md3:"","text-xs-right":"","mt-3":""}},[s("img",{attrs:{src:"http://tunecomp.net/wp-content/uploads/2016/01/03-website-to-home-screen-android.png",alt:"",height:"150"}})]),s("v-flex",{attrs:{xs6:"",md3:"","text-xs-center":"","mt-3":""}},[s("img",{attrs:{src:"http://pngimg.com/uploads/smartphone/smartphone_PNG8541.png",alt:"",height:"150"}})])],1)],1)],1)],1)],1)},e=[],n={render:a,staticRenderFns:e};r.a=n},vY5S:function(t,r,s){"use strict";var a=s("tX2r"),e=s("ripa"),n=s("VU/8"),i=n(a.a,e.a,null,null,null);r.a=i.exports}});
//# sourceMappingURL=index.736a7434d54fd7445661.js.map