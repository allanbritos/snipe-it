!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=0)}({"+sje":function(t,e,i){var n=i("VU/8")(i("eOaq"),i("Nd5k"),!1,function(t){i("JxFy")},"data-v-6b692371",null);t.exports=n.exports},0:function(t,e,i){i("GDnL"),i("Bqz+"),i("1CH1"),t.exports=i("f5J3")},"01Ia":function(t,e,i){var n=i("tt0+");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("528a40f2",n,!0,{})},1:function(t,e){},"1CH1":function(t,e){},"20cu":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["clientsUrl","tokensUrl"],data:function(){return{tokens:[]}},ready:function(){this.prepareComponent()},mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getTokens()},getTokens:function(){var t=this;this.$http.get(this.tokensUrl).then(function(e){t.tokens=e.data})},revoke:function(t){var e=this;this.$http.delete(this.tokensUrl+"/"+t.id).then(function(t){e.getTokens()})}}}},"2XQS":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".select2-dropdown[data-v-0bca28e1]{z-index:9999}",""])},"3IRH":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},"4r7M":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-md-12",class:t.alertType},[i("div",{staticClass:"alert",class:t.alertClassName},[i("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.hideEvent}},[t._v("×")]),t._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:"success"==t.alertType,expression:"alertType == 'success'"}],staticClass:"fa fa-check faa-pulse animated"}),t._v(" "),i("strong",[t._v(t._s(t.title)+" ")]),t._v(" "),t._t("default")],2)])},staticRenderFns:[]}},"5F58":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i("FHXl"),e.default={data:function(){return{files:[],displayImportModal:!1,activeFile:null,alert:{type:null,message:null,visible:!1},importErrors:null,progress:{currentClass:"progress-bar-warning",currentPercent:"0",statusText:"",visible:!1},customFields:[]}},mounted:function(){window.eventHub.$on("importErrors",this.updateImportErrors),this.fetchFiles(),this.fetchCustomFields();var t=this;$("#fileupload").fileupload({dataType:"json",done:function(e,i){t.progress.currentClass="progress-bar-success",t.progress.statusText="Success!",t.files=i.result.files.concat(t.files),console.log(i.result.header_row)},add:function(e,i){i.headers={"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":Laravel.csrfToken},i.process().done(function(){i.submit()}),t.progress.visible=!0},progress:function(e,i){var n=parseInt((i.loaded,i.total,10));t.progress.currentPercent=n,t.progress.statusText=n+"% Complete"},fail:function(e,i){t.progress.currentClass="progress-bar-danger",t.progress.statusText=i.jqXHR.responseJSON.messages}})},methods:{fetchFiles:function(){var t=this;this.$http.get(route("api.imports.index")).then(function(e){var i=e.data;return t.files=i},function(e){t.alert.type="danger",t.alert.visible=!0,t.alert.message="Something went wrong fetching files..."})},fetchCustomFields:function(){var t=this;this.$http.get(route("api.customfields.index")).then(function(e){var i=e.data;(i=i.rows).forEach(function(e){t.customFields.push({id:e.db_column_name,text:e.name})})})},deleteFile:function(t,e){var i=this;this.$http.delete(route("api.imports.destroy",t.id)).then(function(t){return i.files.splice(e,1)},function(t){i.alert.type="danger",i.alert.visible=!0,i.alert.message=t.body.messages})},toggleEvent:function(t){window.eventHub.$emit("showDetails",t)},updateAlert:function(t){this.alert=t},updateImportErrors:function(t){this.importErrors=t}},computed:{progressWidth:function(){return"width: "+10*this.progress.currentPercent+"%"}},components:{alert:i("b7rt"),errors:i("yDVJ"),importFile:i("sJcK")}}},"5Onq":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.errors?i("div",{staticClass:"box"},[i("div",{staticClass:"box-body"},[t._m(0),t._v(" "),i("div",{staticClass:"errors-table"},[i("table",{staticClass:"table table-striped table-bordered",attrs:{id:"errors-table"}},[t._m(1),t._v(" "),i("tbody",t._l(t.errors,function(e,n){return i("tr",[i("td",[t._v(t._s(n))]),t._v(" "),t._l(e,function(e,n){return i("td",[i("b",[t._v(t._s(n)+":")]),t._v(" "),t._l(e,function(e){return i("span",[t._v(t._s(e[0]))])}),t._v(" "),i("br")],2)})],2)}))])])])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert alert-warning"},[e("strong",[this._v("Warning")]),this._v(" Some Errors occured while importing\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",[this._v("Item")]),this._v(" "),e("th",[this._v("Errors")])])}]}},"5m3O":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default={props:["clientsUrl"],data:function(){return{clients:[],createForm:{errors:[],name:"",redirect:""},editForm:{errors:[],name:"",redirect:""}}},ready:function(){this.prepareComponent()},mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getClients(),$("#modal-create-client").on("shown.bs.modal",function(){$("#create-client-name").focus()}),$("#modal-edit-client").on("shown.bs.modal",function(){$("#edit-client-name").focus()})},getClients:function(){var t=this;this.$http.get(this.clientsUrl).then(function(e){t.clients=e.data})},showCreateClientForm:function(){$("#modal-create-client").modal("show")},store:function(){this.persistClient("post",this.clientsUrl,this.createForm,"#modal-create-client")},edit:function(t){this.editForm.id=t.id,this.editForm.name=t.name,this.editForm.redirect=t.redirect,$("#modal-edit-client").modal("show")},update:function(){this.persistClient("put",this.clientsUrl+"/"+this.editForm.id,this.editForm,"#modal-edit-client")},persistClient:function(t,e,i,s){var r=this;console.log("persisting"),i.errors=[],console.log("method: "+t),this.$http[t](e,i).then(function(t){r.getClients(),i.name="",i.redirect="",i.errors=[],$(s).modal("hide")}).catch(function(t){"object"===n(t.data)?i.errors=_.flatten(_.toArray(t.data)):i.errors=["Something went wrong. Please try again."]})},destroy:function(t){var e=this;this.$http.delete(this.clientsUrl+"/"+t.id).then(function(t){e.getClients()})}}}},"7SOi":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},"7t+N":function(t,e,i){var n;!function(e,i){"use strict";"object"==typeof t&&"object"==typeof t.exports?t.exports=e.document?i(e,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return i(t)}:i(e)}("undefined"!=typeof window?window:this,function(i,s){"use strict";var r=[],o=i.document,a=Object.getPrototypeOf,l=r.slice,u=r.concat,c=r.push,h=r.indexOf,d={},p=d.toString,f=d.hasOwnProperty,g=f.toString,m=g.call(Object),v={},_=function(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function(t){return null!=t&&t===t.window},b={type:!0,src:!0,noModule:!0};function w(t,e,i){var n,s=(e=e||o).createElement("script");if(s.text=t,i)for(n in b)i[n]&&(s[n]=i[n]);e.head.appendChild(s).parentNode.removeChild(s)}function x(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?d[p.call(t)]||"object":typeof t}var C=function(t,e){return new C.fn.init(t,e)},k=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function T(t){var e=!!t&&"length"in t&&t.length,i=x(t);return!_(t)&&!y(t)&&("array"===i||0===e||"number"==typeof e&&e>0&&e-1 in t)}C.fn=C.prototype={jquery:"3.3.1",constructor:C,length:0,toArray:function(){return l.call(this)},get:function(t){return null==t?l.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=C.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return C.each(this,t)},map:function(t){return this.pushStack(C.map(this,function(e,i){return t.call(e,i,e)}))},slice:function(){return this.pushStack(l.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,i=+t+(t<0?e:0);return this.pushStack(i>=0&&i<e?[this[i]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:r.sort,splice:r.splice},C.extend=C.fn.extend=function(){var t,e,i,n,s,r,o=arguments[0]||{},a=1,l=arguments.length,u=!1;for("boolean"==typeof o&&(u=o,o=arguments[a]||{},a++),"object"==typeof o||_(o)||(o={}),a===l&&(o=this,a--);a<l;a++)if(null!=(t=arguments[a]))for(e in t)i=o[e],o!==(n=t[e])&&(u&&n&&(C.isPlainObject(n)||(s=Array.isArray(n)))?(s?(s=!1,r=i&&Array.isArray(i)?i:[]):r=i&&C.isPlainObject(i)?i:{},o[e]=C.extend(u,r,n)):void 0!==n&&(o[e]=n));return o},C.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var e,i;return!(!t||"[object Object]"!==p.call(t))&&(!(e=a(t))||"function"==typeof(i=f.call(e,"constructor")&&e.constructor)&&g.call(i)===m)},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},globalEval:function(t){w(t)},each:function(t,e){var i,n=0;if(T(t))for(i=t.length;n<i&&!1!==e.call(t[n],n,t[n]);n++);else for(n in t)if(!1===e.call(t[n],n,t[n]))break;return t},trim:function(t){return null==t?"":(t+"").replace(k,"")},makeArray:function(t,e){var i=e||[];return null!=t&&(T(Object(t))?C.merge(i,"string"==typeof t?[t]:t):c.call(i,t)),i},inArray:function(t,e,i){return null==e?-1:h.call(e,t,i)},merge:function(t,e){for(var i=+e.length,n=0,s=t.length;n<i;n++)t[s++]=e[n];return t.length=s,t},grep:function(t,e,i){for(var n=[],s=0,r=t.length,o=!i;s<r;s++)!e(t[s],s)!==o&&n.push(t[s]);return n},map:function(t,e,i){var n,s,r=0,o=[];if(T(t))for(n=t.length;r<n;r++)null!=(s=e(t[r],r,i))&&o.push(s);else for(r in t)null!=(s=e(t[r],r,i))&&o.push(s);return u.apply([],o)},guid:1,support:v}),"function"==typeof Symbol&&(C.fn[Symbol.iterator]=r[Symbol.iterator]),C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){d["[object "+e+"]"]=e.toLowerCase()});var D=function(t){var e,i,n,s,r,o,a,l,u,c,h,d,p,f,g,m,v,_,y,b="sizzle"+1*new Date,w=t.document,x=0,C=0,k=ot(),T=ot(),D=ot(),S=function(t,e){return t===e&&(h=!0),0},A={}.hasOwnProperty,E=[],I=E.pop,O=E.push,$=E.push,P=E.slice,N=function(t,e){for(var i=0,n=t.length;i<n;i++)if(t[i]===e)return i;return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",j="[\\x20\\t\\r\\n\\f]",H="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",R="\\["+j+"*("+H+")(?:"+j+"*([*^$|!~]?=)"+j+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+H+"))|)"+j+"*\\]",L=":("+H+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+R+")*)|.*)\\)|)",F=new RegExp(j+"+","g"),z=new RegExp("^"+j+"+|((?:^|[^\\\\])(?:\\\\.)*)"+j+"+$","g"),W=new RegExp("^"+j+"*,"+j+"*"),q=new RegExp("^"+j+"*([>+~]|"+j+")"+j+"*"),U=new RegExp("="+j+"*([^\\]'\"]*?)"+j+"*\\]","g"),B=new RegExp(L),Y=new RegExp("^"+H+"$"),V={ID:new RegExp("^#("+H+")"),CLASS:new RegExp("^\\.("+H+")"),TAG:new RegExp("^("+H+"|[*])"),ATTR:new RegExp("^"+R),PSEUDO:new RegExp("^"+L),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+j+"*(even|odd|(([+-]|)(\\d*)n|)"+j+"*(?:([+-]|)"+j+"*(\\d+)|))"+j+"*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^"+j+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+j+"*((?:-\\d)?\\d*)"+j+"*\\)|)(?=[^-]|$)","i")},K=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,G=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,Q=new RegExp("\\\\([\\da-f]{1,6}"+j+"?|("+j+")|.)","ig"),tt=function(t,e,i){var n="0x"+e-65536;return n!=n||i?e:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)},et=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,it=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},nt=function(){d()},st=_t(function(t){return!0===t.disabled&&("form"in t||"label"in t)},{dir:"parentNode",next:"legend"});try{$.apply(E=P.call(w.childNodes),w.childNodes),E[w.childNodes.length].nodeType}catch(t){$={apply:E.length?function(t,e){O.apply(t,P.call(e))}:function(t,e){for(var i=t.length,n=0;t[i++]=e[n++];);t.length=i-1}}}function rt(t,e,n,s){var r,a,u,c,h,f,v,_=e&&e.ownerDocument,x=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==x&&9!==x&&11!==x)return n;if(!s&&((e?e.ownerDocument||e:w)!==p&&d(e),e=e||p,g)){if(11!==x&&(h=Z.exec(t)))if(r=h[1]){if(9===x){if(!(u=e.getElementById(r)))return n;if(u.id===r)return n.push(u),n}else if(_&&(u=_.getElementById(r))&&y(e,u)&&u.id===r)return n.push(u),n}else{if(h[2])return $.apply(n,e.getElementsByTagName(t)),n;if((r=h[3])&&i.getElementsByClassName&&e.getElementsByClassName)return $.apply(n,e.getElementsByClassName(r)),n}if(i.qsa&&!D[t+" "]&&(!m||!m.test(t))){if(1!==x)_=e,v=t;else if("object"!==e.nodeName.toLowerCase()){for((c=e.getAttribute("id"))?c=c.replace(et,it):e.setAttribute("id",c=b),a=(f=o(t)).length;a--;)f[a]="#"+c+" "+vt(f[a]);v=f.join(","),_=J.test(t)&&gt(e.parentNode)||e}if(v)try{return $.apply(n,_.querySelectorAll(v)),n}catch(t){}finally{c===b&&e.removeAttribute("id")}}}return l(t.replace(z,"$1"),e,n,s)}function ot(){var t=[];return function e(i,s){return t.push(i+" ")>n.cacheLength&&delete e[t.shift()],e[i+" "]=s}}function at(t){return t[b]=!0,t}function lt(t){var e=p.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function ut(t,e){for(var i=t.split("|"),s=i.length;s--;)n.attrHandle[i[s]]=e}function ct(t,e){var i=e&&t,n=i&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(n)return n;if(i)for(;i=i.nextSibling;)if(i===e)return-1;return t?1:-1}function ht(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function dt(t){return function(e){var i=e.nodeName.toLowerCase();return("input"===i||"button"===i)&&e.type===t}}function pt(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&st(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ft(t){return at(function(e){return e=+e,at(function(i,n){for(var s,r=t([],i.length,e),o=r.length;o--;)i[s=r[o]]&&(i[s]=!(n[s]=i[s]))})})}function gt(t){return t&&void 0!==t.getElementsByTagName&&t}for(e in i=rt.support={},r=rt.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return!!e&&"HTML"!==e.nodeName},d=rt.setDocument=function(t){var e,s,o=t?t.ownerDocument||t:w;return o!==p&&9===o.nodeType&&o.documentElement?(f=(p=o).documentElement,g=!r(p),w!==p&&(s=p.defaultView)&&s.top!==s&&(s.addEventListener?s.addEventListener("unload",nt,!1):s.attachEvent&&s.attachEvent("onunload",nt)),i.attributes=lt(function(t){return t.className="i",!t.getAttribute("className")}),i.getElementsByTagName=lt(function(t){return t.appendChild(p.createComment("")),!t.getElementsByTagName("*").length}),i.getElementsByClassName=G.test(p.getElementsByClassName),i.getById=lt(function(t){return f.appendChild(t).id=b,!p.getElementsByName||!p.getElementsByName(b).length}),i.getById?(n.filter.ID=function(t){var e=t.replace(Q,tt);return function(t){return t.getAttribute("id")===e}},n.find.ID=function(t,e){if(void 0!==e.getElementById&&g){var i=e.getElementById(t);return i?[i]:[]}}):(n.filter.ID=function(t){var e=t.replace(Q,tt);return function(t){var i=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return i&&i.value===e}},n.find.ID=function(t,e){if(void 0!==e.getElementById&&g){var i,n,s,r=e.getElementById(t);if(r){if((i=r.getAttributeNode("id"))&&i.value===t)return[r];for(s=e.getElementsByName(t),n=0;r=s[n++];)if((i=r.getAttributeNode("id"))&&i.value===t)return[r]}return[]}}),n.find.TAG=i.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):i.qsa?e.querySelectorAll(t):void 0}:function(t,e){var i,n=[],s=0,r=e.getElementsByTagName(t);if("*"===t){for(;i=r[s++];)1===i.nodeType&&n.push(i);return n}return r},n.find.CLASS=i.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&g)return e.getElementsByClassName(t)},v=[],m=[],(i.qsa=G.test(p.querySelectorAll))&&(lt(function(t){f.appendChild(t).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+j+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||m.push("\\["+j+"*(?:value|"+M+")"),t.querySelectorAll("[id~="+b+"-]").length||m.push("~="),t.querySelectorAll(":checked").length||m.push(":checked"),t.querySelectorAll("a#"+b+"+*").length||m.push(".#.+[+~]")}),lt(function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=p.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&m.push("name"+j+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),f.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),m.push(",.*:")})),(i.matchesSelector=G.test(_=f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&lt(function(t){i.disconnectedMatch=_.call(t,"*"),_.call(t,"[s!='']:x"),v.push("!=",L)}),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),e=G.test(f.compareDocumentPosition),y=e||G.test(f.contains)?function(t,e){var i=9===t.nodeType?t.documentElement:t,n=e&&e.parentNode;return t===n||!(!n||1!==n.nodeType||!(i.contains?i.contains(n):t.compareDocumentPosition&&16&t.compareDocumentPosition(n)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},S=e?function(t,e){if(t===e)return h=!0,0;var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n||(1&(n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!i.sortDetached&&e.compareDocumentPosition(t)===n?t===p||t.ownerDocument===w&&y(w,t)?-1:e===p||e.ownerDocument===w&&y(w,e)?1:c?N(c,t)-N(c,e):0:4&n?-1:1)}:function(t,e){if(t===e)return h=!0,0;var i,n=0,s=t.parentNode,r=e.parentNode,o=[t],a=[e];if(!s||!r)return t===p?-1:e===p?1:s?-1:r?1:c?N(c,t)-N(c,e):0;if(s===r)return ct(t,e);for(i=t;i=i.parentNode;)o.unshift(i);for(i=e;i=i.parentNode;)a.unshift(i);for(;o[n]===a[n];)n++;return n?ct(o[n],a[n]):o[n]===w?-1:a[n]===w?1:0},p):p},rt.matches=function(t,e){return rt(t,null,null,e)},rt.matchesSelector=function(t,e){if((t.ownerDocument||t)!==p&&d(t),e=e.replace(U,"='$1']"),i.matchesSelector&&g&&!D[e+" "]&&(!v||!v.test(e))&&(!m||!m.test(e)))try{var n=_.call(t,e);if(n||i.disconnectedMatch||t.document&&11!==t.document.nodeType)return n}catch(t){}return rt(e,p,null,[t]).length>0},rt.contains=function(t,e){return(t.ownerDocument||t)!==p&&d(t),y(t,e)},rt.attr=function(t,e){(t.ownerDocument||t)!==p&&d(t);var s=n.attrHandle[e.toLowerCase()],r=s&&A.call(n.attrHandle,e.toLowerCase())?s(t,e,!g):void 0;return void 0!==r?r:i.attributes||!g?t.getAttribute(e):(r=t.getAttributeNode(e))&&r.specified?r.value:null},rt.escape=function(t){return(t+"").replace(et,it)},rt.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},rt.uniqueSort=function(t){var e,n=[],s=0,r=0;if(h=!i.detectDuplicates,c=!i.sortStable&&t.slice(0),t.sort(S),h){for(;e=t[r++];)e===t[r]&&(s=n.push(r));for(;s--;)t.splice(n[s],1)}return c=null,t},s=rt.getText=function(t){var e,i="",n=0,r=t.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=s(t)}else if(3===r||4===r)return t.nodeValue}else for(;e=t[n++];)i+=s(e);return i},(n=rt.selectors={cacheLength:50,createPseudo:at,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(Q,tt),t[3]=(t[3]||t[4]||t[5]||"").replace(Q,tt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||rt.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&rt.error(t[0]),t},PSEUDO:function(t){var e,i=!t[6]&&t[2];return V.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":i&&B.test(i)&&(e=o(i,!0))&&(e=i.indexOf(")",i.length-e)-i.length)&&(t[0]=t[0].slice(0,e),t[2]=i.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(Q,tt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=k[t+" "];return e||(e=new RegExp("(^|"+j+")"+t+"("+j+"|$)"))&&k(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,e,i){return function(n){var s=rt.attr(n,t);return null==s?"!="===e:!e||(s+="","="===e?s===i:"!="===e?s!==i:"^="===e?i&&0===s.indexOf(i):"*="===e?i&&s.indexOf(i)>-1:"$="===e?i&&s.slice(-i.length)===i:"~="===e?(" "+s.replace(F," ")+" ").indexOf(i)>-1:"|="===e&&(s===i||s.slice(0,i.length+1)===i+"-"))}},CHILD:function(t,e,i,n,s){var r="nth"!==t.slice(0,3),o="last"!==t.slice(-4),a="of-type"===e;return 1===n&&0===s?function(t){return!!t.parentNode}:function(e,i,l){var u,c,h,d,p,f,g=r!==o?"nextSibling":"previousSibling",m=e.parentNode,v=a&&e.nodeName.toLowerCase(),_=!l&&!a,y=!1;if(m){if(r){for(;g;){for(d=e;d=d[g];)if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;f=g="only"===t&&!f&&"nextSibling"}return!0}if(f=[o?m.firstChild:m.lastChild],o&&_){for(y=(p=(u=(c=(h=(d=m)[b]||(d[b]={}))[d.uniqueID]||(h[d.uniqueID]={}))[t]||[])[0]===x&&u[1])&&u[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(y=p=0)||f.pop();)if(1===d.nodeType&&++y&&d===e){c[t]=[x,p,y];break}}else if(_&&(y=p=(u=(c=(h=(d=e)[b]||(d[b]={}))[d.uniqueID]||(h[d.uniqueID]={}))[t]||[])[0]===x&&u[1]),!1===y)for(;(d=++p&&d&&d[g]||(y=p=0)||f.pop())&&((a?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++y||(_&&((c=(h=d[b]||(d[b]={}))[d.uniqueID]||(h[d.uniqueID]={}))[t]=[x,y]),d!==e)););return(y-=s)===n||y%n==0&&y/n>=0}}},PSEUDO:function(t,e){var i,s=n.pseudos[t]||n.setFilters[t.toLowerCase()]||rt.error("unsupported pseudo: "+t);return s[b]?s(e):s.length>1?(i=[t,t,"",e],n.setFilters.hasOwnProperty(t.toLowerCase())?at(function(t,i){for(var n,r=s(t,e),o=r.length;o--;)t[n=N(t,r[o])]=!(i[n]=r[o])}):function(t){return s(t,0,i)}):s}},pseudos:{not:at(function(t){var e=[],i=[],n=a(t.replace(z,"$1"));return n[b]?at(function(t,e,i,s){for(var r,o=n(t,null,s,[]),a=t.length;a--;)(r=o[a])&&(t[a]=!(e[a]=r))}):function(t,s,r){return e[0]=t,n(e,null,r,i),e[0]=null,!i.pop()}}),has:at(function(t){return function(e){return rt(t,e).length>0}}),contains:at(function(t){return t=t.replace(Q,tt),function(e){return(e.textContent||e.innerText||s(e)).indexOf(t)>-1}}),lang:at(function(t){return Y.test(t||"")||rt.error("unsupported lang: "+t),t=t.replace(Q,tt).toLowerCase(),function(e){var i;do{if(i=g?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(i=i.toLowerCase())===t||0===i.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var i=t.location&&t.location.hash;return i&&i.slice(1)===e.id},root:function(t){return t===f},focus:function(t){return t===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:pt(!1),disabled:pt(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!n.pseudos.empty(t)},header:function(t){return X.test(t.nodeName)},input:function(t){return K.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:ft(function(){return[0]}),last:ft(function(t,e){return[e-1]}),eq:ft(function(t,e,i){return[i<0?i+e:i]}),even:ft(function(t,e){for(var i=0;i<e;i+=2)t.push(i);return t}),odd:ft(function(t,e){for(var i=1;i<e;i+=2)t.push(i);return t}),lt:ft(function(t,e,i){for(var n=i<0?i+e:i;--n>=0;)t.push(n);return t}),gt:ft(function(t,e,i){for(var n=i<0?i+e:i;++n<e;)t.push(n);return t})}}).pseudos.nth=n.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[e]=ht(e);for(e in{submit:!0,reset:!0})n.pseudos[e]=dt(e);function mt(){}function vt(t){for(var e=0,i=t.length,n="";e<i;e++)n+=t[e].value;return n}function _t(t,e,i){var n=e.dir,s=e.next,r=s||n,o=i&&"parentNode"===r,a=C++;return e.first?function(e,i,s){for(;e=e[n];)if(1===e.nodeType||o)return t(e,i,s);return!1}:function(e,i,l){var u,c,h,d=[x,a];if(l){for(;e=e[n];)if((1===e.nodeType||o)&&t(e,i,l))return!0}else for(;e=e[n];)if(1===e.nodeType||o)if(c=(h=e[b]||(e[b]={}))[e.uniqueID]||(h[e.uniqueID]={}),s&&s===e.nodeName.toLowerCase())e=e[n]||e;else{if((u=c[r])&&u[0]===x&&u[1]===a)return d[2]=u[2];if(c[r]=d,d[2]=t(e,i,l))return!0}return!1}}function yt(t){return t.length>1?function(e,i,n){for(var s=t.length;s--;)if(!t[s](e,i,n))return!1;return!0}:t[0]}function bt(t,e,i,n,s){for(var r,o=[],a=0,l=t.length,u=null!=e;a<l;a++)(r=t[a])&&(i&&!i(r,n,s)||(o.push(r),u&&e.push(a)));return o}function wt(t,e,i,n,s,r){return n&&!n[b]&&(n=wt(n)),s&&!s[b]&&(s=wt(s,r)),at(function(r,o,a,l){var u,c,h,d=[],p=[],f=o.length,g=r||function(t,e,i){for(var n=0,s=e.length;n<s;n++)rt(t,e[n],i);return i}(e||"*",a.nodeType?[a]:a,[]),m=!t||!r&&e?g:bt(g,d,t,a,l),v=i?s||(r?t:f||n)?[]:o:m;if(i&&i(m,v,a,l),n)for(u=bt(v,p),n(u,[],a,l),c=u.length;c--;)(h=u[c])&&(v[p[c]]=!(m[p[c]]=h));if(r){if(s||t){if(s){for(u=[],c=v.length;c--;)(h=v[c])&&u.push(m[c]=h);s(null,v=[],u,l)}for(c=v.length;c--;)(h=v[c])&&(u=s?N(r,h):d[c])>-1&&(r[u]=!(o[u]=h))}}else v=bt(v===o?v.splice(f,v.length):v),s?s(null,o,v,l):$.apply(o,v)})}function xt(t){for(var e,i,s,r=t.length,o=n.relative[t[0].type],a=o||n.relative[" "],l=o?1:0,c=_t(function(t){return t===e},a,!0),h=_t(function(t){return N(e,t)>-1},a,!0),d=[function(t,i,n){var s=!o&&(n||i!==u)||((e=i).nodeType?c(t,i,n):h(t,i,n));return e=null,s}];l<r;l++)if(i=n.relative[t[l].type])d=[_t(yt(d),i)];else{if((i=n.filter[t[l].type].apply(null,t[l].matches))[b]){for(s=++l;s<r&&!n.relative[t[s].type];s++);return wt(l>1&&yt(d),l>1&&vt(t.slice(0,l-1).concat({value:" "===t[l-2].type?"*":""})).replace(z,"$1"),i,l<s&&xt(t.slice(l,s)),s<r&&xt(t=t.slice(s)),s<r&&vt(t))}d.push(i)}return yt(d)}return mt.prototype=n.filters=n.pseudos,n.setFilters=new mt,o=rt.tokenize=function(t,e){var i,s,r,o,a,l,u,c=T[t+" "];if(c)return e?0:c.slice(0);for(a=t,l=[],u=n.preFilter;a;){for(o in i&&!(s=W.exec(a))||(s&&(a=a.slice(s[0].length)||a),l.push(r=[])),i=!1,(s=q.exec(a))&&(i=s.shift(),r.push({value:i,type:s[0].replace(z," ")}),a=a.slice(i.length)),n.filter)!(s=V[o].exec(a))||u[o]&&!(s=u[o](s))||(i=s.shift(),r.push({value:i,type:o,matches:s}),a=a.slice(i.length));if(!i)break}return e?a.length:a?rt.error(t):T(t,l).slice(0)},a=rt.compile=function(t,e){var i,s=[],r=[],a=D[t+" "];if(!a){for(e||(e=o(t)),i=e.length;i--;)(a=xt(e[i]))[b]?s.push(a):r.push(a);(a=D(t,function(t,e){var i=e.length>0,s=t.length>0,r=function(r,o,a,l,c){var h,f,m,v=0,_="0",y=r&&[],b=[],w=u,C=r||s&&n.find.TAG("*",c),k=x+=null==w?1:Math.random()||.1,T=C.length;for(c&&(u=o===p||o||c);_!==T&&null!=(h=C[_]);_++){if(s&&h){for(f=0,o||h.ownerDocument===p||(d(h),a=!g);m=t[f++];)if(m(h,o||p,a)){l.push(h);break}c&&(x=k)}i&&((h=!m&&h)&&v--,r&&y.push(h))}if(v+=_,i&&_!==v){for(f=0;m=e[f++];)m(y,b,o,a);if(r){if(v>0)for(;_--;)y[_]||b[_]||(b[_]=I.call(l));b=bt(b)}$.apply(l,b),c&&!r&&b.length>0&&v+e.length>1&&rt.uniqueSort(l)}return c&&(x=k,u=w),y};return i?at(r):r}(r,s))).selector=t}return a},l=rt.select=function(t,e,i,s){var r,l,u,c,h,d="function"==typeof t&&t,p=!s&&o(t=d.selector||t);if(i=i||[],1===p.length){if((l=p[0]=p[0].slice(0)).length>2&&"ID"===(u=l[0]).type&&9===e.nodeType&&g&&n.relative[l[1].type]){if(!(e=(n.find.ID(u.matches[0].replace(Q,tt),e)||[])[0]))return i;d&&(e=e.parentNode),t=t.slice(l.shift().value.length)}for(r=V.needsContext.test(t)?0:l.length;r--&&(u=l[r],!n.relative[c=u.type]);)if((h=n.find[c])&&(s=h(u.matches[0].replace(Q,tt),J.test(l[0].type)&&gt(e.parentNode)||e))){if(l.splice(r,1),!(t=s.length&&vt(l)))return $.apply(i,s),i;break}}return(d||a(t,p))(s,e,!g,i,!e||J.test(t)&&gt(e.parentNode)||e),i},i.sortStable=b.split("").sort(S).join("")===b,i.detectDuplicates=!!h,d(),i.sortDetached=lt(function(t){return 1&t.compareDocumentPosition(p.createElement("fieldset"))}),lt(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||ut("type|href|height|width",function(t,e,i){if(!i)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),i.attributes&&lt(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||ut("value",function(t,e,i){if(!i&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),lt(function(t){return null==t.getAttribute("disabled")})||ut(M,function(t,e,i){var n;if(!i)return!0===t[e]?e.toLowerCase():(n=t.getAttributeNode(e))&&n.specified?n.value:null}),rt}(i);C.find=D,C.expr=D.selectors,C.expr[":"]=C.expr.pseudos,C.uniqueSort=C.unique=D.uniqueSort,C.text=D.getText,C.isXMLDoc=D.isXML,C.contains=D.contains,C.escapeSelector=D.escape;var S=function(t,e,i){for(var n=[],s=void 0!==i;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(s&&C(t).is(i))break;n.push(t)}return n},A=function(t,e){for(var i=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&i.push(t);return i},E=C.expr.match.needsContext;function I(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}var O=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function $(t,e,i){return _(e)?C.grep(t,function(t,n){return!!e.call(t,n,t)!==i}):e.nodeType?C.grep(t,function(t){return t===e!==i}):"string"!=typeof e?C.grep(t,function(t){return h.call(e,t)>-1!==i}):C.filter(e,t,i)}C.filter=function(t,e,i){var n=e[0];return i&&(t=":not("+t+")"),1===e.length&&1===n.nodeType?C.find.matchesSelector(n,t)?[n]:[]:C.find.matches(t,C.grep(e,function(t){return 1===t.nodeType}))},C.fn.extend({find:function(t){var e,i,n=this.length,s=this;if("string"!=typeof t)return this.pushStack(C(t).filter(function(){for(e=0;e<n;e++)if(C.contains(s[e],this))return!0}));for(i=this.pushStack([]),e=0;e<n;e++)C.find(t,s[e],i);return n>1?C.uniqueSort(i):i},filter:function(t){return this.pushStack($(this,t||[],!1))},not:function(t){return this.pushStack($(this,t||[],!0))},is:function(t){return!!$(this,"string"==typeof t&&E.test(t)?C(t):t||[],!1).length}});var P,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(C.fn.init=function(t,e,i){var n,s;if(!t)return this;if(i=i||P,"string"==typeof t){if(!(n="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:N.exec(t))||!n[1]&&e)return!e||e.jquery?(e||i).find(t):this.constructor(e).find(t);if(n[1]){if(e=e instanceof C?e[0]:e,C.merge(this,C.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:o,!0)),O.test(n[1])&&C.isPlainObject(e))for(n in e)_(this[n])?this[n](e[n]):this.attr(n,e[n]);return this}return(s=o.getElementById(n[2]))&&(this[0]=s,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):_(t)?void 0!==i.ready?i.ready(t):t(C):C.makeArray(t,this)}).prototype=C.fn,P=C(o);var M=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function H(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}C.fn.extend({has:function(t){var e=C(t,this),i=e.length;return this.filter(function(){for(var t=0;t<i;t++)if(C.contains(this,e[t]))return!0})},closest:function(t,e){var i,n=0,s=this.length,r=[],o="string"!=typeof t&&C(t);if(!E.test(t))for(;n<s;n++)for(i=this[n];i&&i!==e;i=i.parentNode)if(i.nodeType<11&&(o?o.index(i)>-1:1===i.nodeType&&C.find.matchesSelector(i,t))){r.push(i);break}return this.pushStack(r.length>1?C.uniqueSort(r):r)},index:function(t){return t?"string"==typeof t?h.call(C(t),this[0]):h.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(C.uniqueSort(C.merge(this.get(),C(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),C.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return S(t,"parentNode")},parentsUntil:function(t,e,i){return S(t,"parentNode",i)},next:function(t){return H(t,"nextSibling")},prev:function(t){return H(t,"previousSibling")},nextAll:function(t){return S(t,"nextSibling")},prevAll:function(t){return S(t,"previousSibling")},nextUntil:function(t,e,i){return S(t,"nextSibling",i)},prevUntil:function(t,e,i){return S(t,"previousSibling",i)},siblings:function(t){return A((t.parentNode||{}).firstChild,t)},children:function(t){return A(t.firstChild)},contents:function(t){return I(t,"iframe")?t.contentDocument:(I(t,"template")&&(t=t.content||t),C.merge([],t.childNodes))}},function(t,e){C.fn[t]=function(i,n){var s=C.map(this,e,i);return"Until"!==t.slice(-5)&&(n=i),n&&"string"==typeof n&&(s=C.filter(n,s)),this.length>1&&(j[t]||C.uniqueSort(s),M.test(t)&&s.reverse()),this.pushStack(s)}});var R=/[^\x20\t\r\n\f]+/g;function L(t){return t}function F(t){throw t}function z(t,e,i,n){var s;try{t&&_(s=t.promise)?s.call(t).done(e).fail(i):t&&_(s=t.then)?s.call(t,e,i):e.apply(void 0,[t].slice(n))}catch(t){i.apply(void 0,[t])}}C.Callbacks=function(t){t="string"==typeof t?function(t){var e={};return C.each(t.match(R)||[],function(t,i){e[i]=!0}),e}(t):C.extend({},t);var e,i,n,s,r=[],o=[],a=-1,l=function(){for(s=s||t.once,n=e=!0;o.length;a=-1)for(i=o.shift();++a<r.length;)!1===r[a].apply(i[0],i[1])&&t.stopOnFalse&&(a=r.length,i=!1);t.memory||(i=!1),e=!1,s&&(r=i?[]:"")},u={add:function(){return r&&(i&&!e&&(a=r.length-1,o.push(i)),function e(i){C.each(i,function(i,n){_(n)?t.unique&&u.has(n)||r.push(n):n&&n.length&&"string"!==x(n)&&e(n)})}(arguments),i&&!e&&l()),this},remove:function(){return C.each(arguments,function(t,e){for(var i;(i=C.inArray(e,r,i))>-1;)r.splice(i,1),i<=a&&a--}),this},has:function(t){return t?C.inArray(t,r)>-1:r.length>0},empty:function(){return r&&(r=[]),this},disable:function(){return s=o=[],r=i="",this},disabled:function(){return!r},lock:function(){return s=o=[],i||e||(r=i=""),this},locked:function(){return!!s},fireWith:function(t,i){return s||(i=[t,(i=i||[]).slice?i.slice():i],o.push(i),e||l()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!n}};return u},C.extend({Deferred:function(t){var e=[["notify","progress",C.Callbacks("memory"),C.Callbacks("memory"),2],["resolve","done",C.Callbacks("once memory"),C.Callbacks("once memory"),0,"resolved"],["reject","fail",C.Callbacks("once memory"),C.Callbacks("once memory"),1,"rejected"]],n="pending",s={state:function(){return n},always:function(){return r.done(arguments).fail(arguments),this},catch:function(t){return s.then(null,t)},pipe:function(){var t=arguments;return C.Deferred(function(i){C.each(e,function(e,n){var s=_(t[n[4]])&&t[n[4]];r[n[1]](function(){var t=s&&s.apply(this,arguments);t&&_(t.promise)?t.promise().progress(i.notify).done(i.resolve).fail(i.reject):i[n[0]+"With"](this,s?[t]:arguments)})}),t=null}).promise()},then:function(t,n,s){var r=0;function o(t,e,n,s){return function(){var a=this,l=arguments,u=function(){var i,u;if(!(t<r)){if((i=n.apply(a,l))===e.promise())throw new TypeError("Thenable self-resolution");u=i&&("object"==typeof i||"function"==typeof i)&&i.then,_(u)?s?u.call(i,o(r,e,L,s),o(r,e,F,s)):(r++,u.call(i,o(r,e,L,s),o(r,e,F,s),o(r,e,L,e.notifyWith))):(n!==L&&(a=void 0,l=[i]),(s||e.resolveWith)(a,l))}},c=s?u:function(){try{u()}catch(i){C.Deferred.exceptionHook&&C.Deferred.exceptionHook(i,c.stackTrace),t+1>=r&&(n!==F&&(a=void 0,l=[i]),e.rejectWith(a,l))}};t?c():(C.Deferred.getStackHook&&(c.stackTrace=C.Deferred.getStackHook()),i.setTimeout(c))}}return C.Deferred(function(i){e[0][3].add(o(0,i,_(s)?s:L,i.notifyWith)),e[1][3].add(o(0,i,_(t)?t:L)),e[2][3].add(o(0,i,_(n)?n:F))}).promise()},promise:function(t){return null!=t?C.extend(t,s):s}},r={};return C.each(e,function(t,i){var o=i[2],a=i[5];s[i[1]]=o.add,a&&o.add(function(){n=a},e[3-t][2].disable,e[3-t][3].disable,e[0][2].lock,e[0][3].lock),o.add(i[3].fire),r[i[0]]=function(){return r[i[0]+"With"](this===r?void 0:this,arguments),this},r[i[0]+"With"]=o.fireWith}),s.promise(r),t&&t.call(r,r),r},when:function(t){var e=arguments.length,i=e,n=Array(i),s=l.call(arguments),r=C.Deferred(),o=function(t){return function(i){n[t]=this,s[t]=arguments.length>1?l.call(arguments):i,--e||r.resolveWith(n,s)}};if(e<=1&&(z(t,r.done(o(i)).resolve,r.reject,!e),"pending"===r.state()||_(s[i]&&s[i].then)))return r.then();for(;i--;)z(s[i],o(i),r.reject);return r.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;C.Deferred.exceptionHook=function(t,e){i.console&&i.console.warn&&t&&W.test(t.name)&&i.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},C.readyException=function(t){i.setTimeout(function(){throw t})};var q=C.Deferred();function U(){o.removeEventListener("DOMContentLoaded",U),i.removeEventListener("load",U),C.ready()}C.fn.ready=function(t){return q.then(t).catch(function(t){C.readyException(t)}),this},C.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--C.readyWait:C.isReady)||(C.isReady=!0,!0!==t&&--C.readyWait>0||q.resolveWith(o,[C]))}}),C.ready.then=q.then,"complete"===o.readyState||"loading"!==o.readyState&&!o.documentElement.doScroll?i.setTimeout(C.ready):(o.addEventListener("DOMContentLoaded",U),i.addEventListener("load",U));var B=function(t,e,i,n,s,r,o){var a=0,l=t.length,u=null==i;if("object"===x(i))for(a in s=!0,i)B(t,e,a,i[a],!0,r,o);else if(void 0!==n&&(s=!0,_(n)||(o=!0),u&&(o?(e.call(t,n),e=null):(u=e,e=function(t,e,i){return u.call(C(t),i)})),e))for(;a<l;a++)e(t[a],i,o?n:n.call(t[a],a,e(t[a],i)));return s?t:u?e.call(t):l?e(t[0],i):r},Y=/^-ms-/,V=/-([a-z])/g;function K(t,e){return e.toUpperCase()}function X(t){return t.replace(Y,"ms-").replace(V,K)}var G=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};function Z(){this.expando=C.expando+Z.uid++}Z.uid=1,Z.prototype={cache:function(t){var e=t[this.expando];return e||(e={},G(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,i){var n,s=this.cache(t);if("string"==typeof e)s[X(e)]=i;else for(n in e)s[X(n)]=e[n];return s},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][X(e)]},access:function(t,e,i){return void 0===e||e&&"string"==typeof e&&void 0===i?this.get(t,e):(this.set(t,e,i),void 0!==i?i:e)},remove:function(t,e){var i,n=t[this.expando];if(void 0!==n){if(void 0!==e){i=(e=Array.isArray(e)?e.map(X):(e=X(e))in n?[e]:e.match(R)||[]).length;for(;i--;)delete n[e[i]]}(void 0===e||C.isEmptyObject(n))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!C.isEmptyObject(e)}};var J=new Z,Q=new Z,tt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,et=/[A-Z]/g;function it(t,e,i){var n;if(void 0===i&&1===t.nodeType)if(n="data-"+e.replace(et,"-$&").toLowerCase(),"string"==typeof(i=t.getAttribute(n))){try{i=function(t){return"true"===t||"false"!==t&&("null"===t?null:t===+t+""?+t:tt.test(t)?JSON.parse(t):t)}(i)}catch(t){}Q.set(t,e,i)}else i=void 0;return i}C.extend({hasData:function(t){return Q.hasData(t)||J.hasData(t)},data:function(t,e,i){return Q.access(t,e,i)},removeData:function(t,e){Q.remove(t,e)},_data:function(t,e,i){return J.access(t,e,i)},_removeData:function(t,e){J.remove(t,e)}}),C.fn.extend({data:function(t,e){var i,n,s,r=this[0],o=r&&r.attributes;if(void 0===t){if(this.length&&(s=Q.get(r),1===r.nodeType&&!J.get(r,"hasDataAttrs"))){for(i=o.length;i--;)o[i]&&0===(n=o[i].name).indexOf("data-")&&(n=X(n.slice(5)),it(r,n,s[n]));J.set(r,"hasDataAttrs",!0)}return s}return"object"==typeof t?this.each(function(){Q.set(this,t)}):B(this,function(e){var i;if(r&&void 0===e)return void 0!==(i=Q.get(r,t))?i:void 0!==(i=it(r,t))?i:void 0;this.each(function(){Q.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){Q.remove(this,t)})}}),C.extend({queue:function(t,e,i){var n;if(t)return e=(e||"fx")+"queue",n=J.get(t,e),i&&(!n||Array.isArray(i)?n=J.access(t,e,C.makeArray(i)):n.push(i)),n||[]},dequeue:function(t,e){e=e||"fx";var i=C.queue(t,e),n=i.length,s=i.shift(),r=C._queueHooks(t,e);"inprogress"===s&&(s=i.shift(),n--),s&&("fx"===e&&i.unshift("inprogress"),delete r.stop,s.call(t,function(){C.dequeue(t,e)},r)),!n&&r&&r.empty.fire()},_queueHooks:function(t,e){var i=e+"queueHooks";return J.get(t,i)||J.access(t,i,{empty:C.Callbacks("once memory").add(function(){J.remove(t,[e+"queue",i])})})}}),C.fn.extend({queue:function(t,e){var i=2;return"string"!=typeof t&&(e=t,t="fx",i--),arguments.length<i?C.queue(this[0],t):void 0===e?this:this.each(function(){var i=C.queue(this,t,e);C._queueHooks(this,t),"fx"===t&&"inprogress"!==i[0]&&C.dequeue(this,t)})},dequeue:function(t){return this.each(function(){C.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var i,n=1,s=C.Deferred(),r=this,o=this.length,a=function(){--n||s.resolveWith(r,[r])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";o--;)(i=J.get(r[o],t+"queueHooks"))&&i.empty&&(n++,i.empty.add(a));return a(),s.promise(e)}});var nt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,st=new RegExp("^(?:([+-])=|)("+nt+")([a-z%]*)$","i"),rt=["Top","Right","Bottom","Left"],ot=function(t,e){return"none"===(t=e||t).style.display||""===t.style.display&&C.contains(t.ownerDocument,t)&&"none"===C.css(t,"display")},at=function(t,e,i,n){var s,r,o={};for(r in e)o[r]=t.style[r],t.style[r]=e[r];for(r in s=i.apply(t,n||[]),e)t.style[r]=o[r];return s};function lt(t,e,i,n){var s,r,o=20,a=n?function(){return n.cur()}:function(){return C.css(t,e,"")},l=a(),u=i&&i[3]||(C.cssNumber[e]?"":"px"),c=(C.cssNumber[e]||"px"!==u&&+l)&&st.exec(C.css(t,e));if(c&&c[3]!==u){for(l/=2,u=u||c[3],c=+l||1;o--;)C.style(t,e,c+u),(1-r)*(1-(r=a()/l||.5))<=0&&(o=0),c/=r;c*=2,C.style(t,e,c+u),i=i||[]}return i&&(c=+c||+l||0,s=i[1]?c+(i[1]+1)*i[2]:+i[2],n&&(n.unit=u,n.start=c,n.end=s)),s}var ut={};function ct(t){var e,i=t.ownerDocument,n=t.nodeName,s=ut[n];return s||(e=i.body.appendChild(i.createElement(n)),s=C.css(e,"display"),e.parentNode.removeChild(e),"none"===s&&(s="block"),ut[n]=s,s)}function ht(t,e){for(var i,n,s=[],r=0,o=t.length;r<o;r++)(n=t[r]).style&&(i=n.style.display,e?("none"===i&&(s[r]=J.get(n,"display")||null,s[r]||(n.style.display="")),""===n.style.display&&ot(n)&&(s[r]=ct(n))):"none"!==i&&(s[r]="none",J.set(n,"display",i)));for(r=0;r<o;r++)null!=s[r]&&(t[r].style.display=s[r]);return t}C.fn.extend({show:function(){return ht(this,!0)},hide:function(){return ht(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){ot(this)?C(this).show():C(this).hide()})}});var dt=/^(?:checkbox|radio)$/i,pt=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ft=/^$|^module$|\/(?:java|ecma)script/i,gt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function mt(t,e){var i;return i=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&I(t,e)?C.merge([t],i):i}function vt(t,e){for(var i=0,n=t.length;i<n;i++)J.set(t[i],"globalEval",!e||J.get(e[i],"globalEval"))}gt.optgroup=gt.option,gt.tbody=gt.tfoot=gt.colgroup=gt.caption=gt.thead,gt.th=gt.td;var _t,yt,bt=/<|&#?\w+;/;function wt(t,e,i,n,s){for(var r,o,a,l,u,c,h=e.createDocumentFragment(),d=[],p=0,f=t.length;p<f;p++)if((r=t[p])||0===r)if("object"===x(r))C.merge(d,r.nodeType?[r]:r);else if(bt.test(r)){for(o=o||h.appendChild(e.createElement("div")),a=(pt.exec(r)||["",""])[1].toLowerCase(),l=gt[a]||gt._default,o.innerHTML=l[1]+C.htmlPrefilter(r)+l[2],c=l[0];c--;)o=o.lastChild;C.merge(d,o.childNodes),(o=h.firstChild).textContent=""}else d.push(e.createTextNode(r));for(h.textContent="",p=0;r=d[p++];)if(n&&C.inArray(r,n)>-1)s&&s.push(r);else if(u=C.contains(r.ownerDocument,r),o=mt(h.appendChild(r),"script"),u&&vt(o),i)for(c=0;r=o[c++];)ft.test(r.type||"")&&i.push(r);return h}_t=o.createDocumentFragment().appendChild(o.createElement("div")),(yt=o.createElement("input")).setAttribute("type","radio"),yt.setAttribute("checked","checked"),yt.setAttribute("name","t"),_t.appendChild(yt),v.checkClone=_t.cloneNode(!0).cloneNode(!0).lastChild.checked,_t.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!_t.cloneNode(!0).lastChild.defaultValue;var xt=o.documentElement,Ct=/^key/,kt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Tt=/^([^.]*)(?:\.(.+)|)/;function Dt(){return!0}function St(){return!1}function At(){try{return o.activeElement}catch(t){}}function Et(t,e,i,n,s,r){var o,a;if("object"==typeof e){for(a in"string"!=typeof i&&(n=n||i,i=void 0),e)Et(t,a,i,n,e[a],r);return t}if(null==n&&null==s?(s=i,n=i=void 0):null==s&&("string"==typeof i?(s=n,n=void 0):(s=n,n=i,i=void 0)),!1===s)s=St;else if(!s)return t;return 1===r&&(o=s,(s=function(t){return C().off(t),o.apply(this,arguments)}).guid=o.guid||(o.guid=C.guid++)),t.each(function(){C.event.add(this,e,s,n,i)})}C.event={global:{},add:function(t,e,i,n,s){var r,o,a,l,u,c,h,d,p,f,g,m=J.get(t);if(m)for(i.handler&&(i=(r=i).handler,s=r.selector),s&&C.find.matchesSelector(xt,s),i.guid||(i.guid=C.guid++),(l=m.events)||(l=m.events={}),(o=m.handle)||(o=m.handle=function(e){return void 0!==C&&C.event.triggered!==e.type?C.event.dispatch.apply(t,arguments):void 0}),u=(e=(e||"").match(R)||[""]).length;u--;)p=g=(a=Tt.exec(e[u])||[])[1],f=(a[2]||"").split(".").sort(),p&&(h=C.event.special[p]||{},p=(s?h.delegateType:h.bindType)||p,h=C.event.special[p]||{},c=C.extend({type:p,origType:g,data:n,handler:i,guid:i.guid,selector:s,needsContext:s&&C.expr.match.needsContext.test(s),namespace:f.join(".")},r),(d=l[p])||((d=l[p]=[]).delegateCount=0,h.setup&&!1!==h.setup.call(t,n,f,o)||t.addEventListener&&t.addEventListener(p,o)),h.add&&(h.add.call(t,c),c.handler.guid||(c.handler.guid=i.guid)),s?d.splice(d.delegateCount++,0,c):d.push(c),C.event.global[p]=!0)},remove:function(t,e,i,n,s){var r,o,a,l,u,c,h,d,p,f,g,m=J.hasData(t)&&J.get(t);if(m&&(l=m.events)){for(u=(e=(e||"").match(R)||[""]).length;u--;)if(p=g=(a=Tt.exec(e[u])||[])[1],f=(a[2]||"").split(".").sort(),p){for(h=C.event.special[p]||{},d=l[p=(n?h.delegateType:h.bindType)||p]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=r=d.length;r--;)c=d[r],!s&&g!==c.origType||i&&i.guid!==c.guid||a&&!a.test(c.namespace)||n&&n!==c.selector&&("**"!==n||!c.selector)||(d.splice(r,1),c.selector&&d.delegateCount--,h.remove&&h.remove.call(t,c));o&&!d.length&&(h.teardown&&!1!==h.teardown.call(t,f,m.handle)||C.removeEvent(t,p,m.handle),delete l[p])}else for(p in l)C.event.remove(t,p+e[u],i,n,!0);C.isEmptyObject(l)&&J.remove(t,"handle events")}},dispatch:function(t){var e,i,n,s,r,o,a=C.event.fix(t),l=new Array(arguments.length),u=(J.get(this,"events")||{})[a.type]||[],c=C.event.special[a.type]||{};for(l[0]=a,e=1;e<arguments.length;e++)l[e]=arguments[e];if(a.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,a)){for(o=C.event.handlers.call(this,a,u),e=0;(s=o[e++])&&!a.isPropagationStopped();)for(a.currentTarget=s.elem,i=0;(r=s.handlers[i++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!a.rnamespace.test(r.namespace)||(a.handleObj=r,a.data=r.data,void 0!==(n=((C.event.special[r.origType]||{}).handle||r.handler).apply(s.elem,l))&&!1===(a.result=n)&&(a.preventDefault(),a.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,a),a.result}},handlers:function(t,e){var i,n,s,r,o,a=[],l=e.delegateCount,u=t.target;if(l&&u.nodeType&&!("click"===t.type&&t.button>=1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==t.type||!0!==u.disabled)){for(r=[],o={},i=0;i<l;i++)void 0===o[s=(n=e[i]).selector+" "]&&(o[s]=n.needsContext?C(s,this).index(u)>-1:C.find(s,this,null,[u]).length),o[s]&&r.push(n);r.length&&a.push({elem:u,handlers:r})}return u=this,l<e.length&&a.push({elem:u,handlers:e.slice(l)}),a},addProp:function(t,e){Object.defineProperty(C.Event.prototype,t,{enumerable:!0,configurable:!0,get:_(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[C.expando]?t:new C.Event(t)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==At()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===At()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&I(this,"input"))return this.click(),!1},_default:function(t){return I(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},C.removeEvent=function(t,e,i){t.removeEventListener&&t.removeEventListener(e,i)},C.Event=function(t,e){if(!(this instanceof C.Event))return new C.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?Dt:St,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&C.extend(this,e),this.timeStamp=t&&t.timeStamp||Date.now(),this[C.expando]=!0},C.Event.prototype={constructor:C.Event,isDefaultPrevented:St,isPropagationStopped:St,isImmediatePropagationStopped:St,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=Dt,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=Dt,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=Dt,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},C.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;return null==t.which&&Ct.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:!t.which&&void 0!==e&&kt.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},C.event.addProp),C.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){C.event.special[t]={delegateType:e,bindType:e,handle:function(t){var i,n=t.relatedTarget,s=t.handleObj;return n&&(n===this||C.contains(this,n))||(t.type=s.origType,i=s.handler.apply(this,arguments),t.type=e),i}}}),C.fn.extend({on:function(t,e,i,n){return Et(this,t,e,i,n)},one:function(t,e,i,n){return Et(this,t,e,i,n,1)},off:function(t,e,i){var n,s;if(t&&t.preventDefault&&t.handleObj)return n=t.handleObj,C(t.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if("object"==typeof t){for(s in t)this.off(s,e,t[s]);return this}return!1!==e&&"function"!=typeof e||(i=e,e=void 0),!1===i&&(i=St),this.each(function(){C.event.remove(this,t,i,e)})}});var It=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ot=/<script|<style|<link/i,$t=/checked\s*(?:[^=]|=\s*.checked.)/i,Pt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Nt(t,e){return I(t,"table")&&I(11!==e.nodeType?e:e.firstChild,"tr")&&C(t).children("tbody")[0]||t}function Mt(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function jt(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function Ht(t,e){var i,n,s,r,o,a,l,u;if(1===e.nodeType){if(J.hasData(t)&&(r=J.access(t),o=J.set(e,r),u=r.events))for(s in delete o.handle,o.events={},u)for(i=0,n=u[s].length;i<n;i++)C.event.add(e,s,u[s][i]);Q.hasData(t)&&(a=Q.access(t),l=C.extend({},a),Q.set(e,l))}}function Rt(t,e,i,n){e=u.apply([],e);var s,r,o,a,l,c,h=0,d=t.length,p=d-1,f=e[0],g=_(f);if(g||d>1&&"string"==typeof f&&!v.checkClone&&$t.test(f))return t.each(function(s){var r=t.eq(s);g&&(e[0]=f.call(this,s,r.html())),Rt(r,e,i,n)});if(d&&(r=(s=wt(e,t[0].ownerDocument,!1,t,n)).firstChild,1===s.childNodes.length&&(s=r),r||n)){for(a=(o=C.map(mt(s,"script"),Mt)).length;h<d;h++)l=s,h!==p&&(l=C.clone(l,!0,!0),a&&C.merge(o,mt(l,"script"))),i.call(t[h],l,h);if(a)for(c=o[o.length-1].ownerDocument,C.map(o,jt),h=0;h<a;h++)l=o[h],ft.test(l.type||"")&&!J.access(l,"globalEval")&&C.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?C._evalUrl&&C._evalUrl(l.src):w(l.textContent.replace(Pt,""),c,l))}return t}function Lt(t,e,i){for(var n,s=e?C.filter(e,t):t,r=0;null!=(n=s[r]);r++)i||1!==n.nodeType||C.cleanData(mt(n)),n.parentNode&&(i&&C.contains(n.ownerDocument,n)&&vt(mt(n,"script")),n.parentNode.removeChild(n));return t}C.extend({htmlPrefilter:function(t){return t.replace(It,"<$1></$2>")},clone:function(t,e,i){var n,s,r,o,a,l,u,c=t.cloneNode(!0),h=C.contains(t.ownerDocument,t);if(!(v.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||C.isXMLDoc(t)))for(o=mt(c),n=0,s=(r=mt(t)).length;n<s;n++)a=r[n],l=o[n],void 0,"input"===(u=l.nodeName.toLowerCase())&&dt.test(a.type)?l.checked=a.checked:"input"!==u&&"textarea"!==u||(l.defaultValue=a.defaultValue);if(e)if(i)for(r=r||mt(t),o=o||mt(c),n=0,s=r.length;n<s;n++)Ht(r[n],o[n]);else Ht(t,c);return(o=mt(c,"script")).length>0&&vt(o,!h&&mt(t,"script")),c},cleanData:function(t){for(var e,i,n,s=C.event.special,r=0;void 0!==(i=t[r]);r++)if(G(i)){if(e=i[J.expando]){if(e.events)for(n in e.events)s[n]?C.event.remove(i,n):C.removeEvent(i,n,e.handle);i[J.expando]=void 0}i[Q.expando]&&(i[Q.expando]=void 0)}}}),C.fn.extend({detach:function(t){return Lt(this,t,!0)},remove:function(t){return Lt(this,t)},text:function(t){return B(this,function(t){return void 0===t?C.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)})},null,t,arguments.length)},append:function(){return Rt(this,arguments,function(t){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Nt(this,t).appendChild(t)})},prepend:function(){return Rt(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=Nt(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return Rt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return Rt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(C.cleanData(mt(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return C.clone(this,t,e)})},html:function(t){return B(this,function(t){var e=this[0]||{},i=0,n=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!Ot.test(t)&&!gt[(pt.exec(t)||["",""])[1].toLowerCase()]){t=C.htmlPrefilter(t);try{for(;i<n;i++)1===(e=this[i]||{}).nodeType&&(C.cleanData(mt(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];return Rt(this,arguments,function(e){var i=this.parentNode;C.inArray(this,t)<0&&(C.cleanData(mt(this)),i&&i.replaceChild(e,this))},t)}}),C.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){C.fn[t]=function(t){for(var i,n=[],s=C(t),r=s.length-1,o=0;o<=r;o++)i=o===r?this:this.clone(!0),C(s[o])[e](i),c.apply(n,i.get());return this.pushStack(n)}});var Ft=new RegExp("^("+nt+")(?!px)[a-z%]+$","i"),zt=function(t){var e=t.ownerDocument.defaultView;return e&&e.opener||(e=i),e.getComputedStyle(t)},Wt=new RegExp(rt.join("|"),"i");function qt(t,e,i){var n,s,r,o,a=t.style;return(i=i||zt(t))&&(""!==(o=i.getPropertyValue(e)||i[e])||C.contains(t.ownerDocument,t)||(o=C.style(t,e)),!v.pixelBoxStyles()&&Ft.test(o)&&Wt.test(e)&&(n=a.width,s=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=o,o=i.width,a.width=n,a.minWidth=s,a.maxWidth=r)),void 0!==o?o+"":o}function Ut(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}!function(){function t(){if(c){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",xt.appendChild(u).appendChild(c);var t=i.getComputedStyle(c);n="1%"!==t.top,l=12===e(t.marginLeft),c.style.right="60%",a=36===e(t.right),s=36===e(t.width),c.style.position="absolute",r=36===c.offsetWidth||"absolute",xt.removeChild(u),c=null}}function e(t){return Math.round(parseFloat(t))}var n,s,r,a,l,u=o.createElement("div"),c=o.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===c.style.backgroundClip,C.extend(v,{boxSizingReliable:function(){return t(),s},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),n},reliableMarginLeft:function(){return t(),l},scrollboxSize:function(){return t(),r}}))}();var Bt=/^(none|table(?!-c[ea]).+)/,Yt=/^--/,Vt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:"0",fontWeight:"400"},Xt=["Webkit","Moz","ms"],Gt=o.createElement("div").style;function Zt(t){var e=C.cssProps[t];return e||(e=C.cssProps[t]=function(t){if(t in Gt)return t;for(var e=t[0].toUpperCase()+t.slice(1),i=Xt.length;i--;)if((t=Xt[i]+e)in Gt)return t}(t)||t),e}function Jt(t,e,i){var n=st.exec(e);return n?Math.max(0,n[2]-(i||0))+(n[3]||"px"):e}function Qt(t,e,i,n,s,r){var o="width"===e?1:0,a=0,l=0;if(i===(n?"border":"content"))return 0;for(;o<4;o+=2)"margin"===i&&(l+=C.css(t,i+rt[o],!0,s)),n?("content"===i&&(l-=C.css(t,"padding"+rt[o],!0,s)),"margin"!==i&&(l-=C.css(t,"border"+rt[o]+"Width",!0,s))):(l+=C.css(t,"padding"+rt[o],!0,s),"padding"!==i?l+=C.css(t,"border"+rt[o]+"Width",!0,s):a+=C.css(t,"border"+rt[o]+"Width",!0,s));return!n&&r>=0&&(l+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-r-l-a-.5))),l}function te(t,e,i){var n=zt(t),s=qt(t,e,n),r="border-box"===C.css(t,"boxSizing",!1,n),o=r;if(Ft.test(s)){if(!i)return s;s="auto"}return o=o&&(v.boxSizingReliable()||s===t.style[e]),("auto"===s||!parseFloat(s)&&"inline"===C.css(t,"display",!1,n))&&(s=t["offset"+e[0].toUpperCase()+e.slice(1)],o=!0),(s=parseFloat(s)||0)+Qt(t,e,i||(r?"border":"content"),o,n,s)+"px"}function ee(t,e,i,n,s){return new ee.prototype.init(t,e,i,n,s)}C.extend({cssHooks:{opacity:{get:function(t,e){if(e){var i=qt(t,"opacity");return""===i?"1":i}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,e,i,n){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var s,r,o,a=X(e),l=Yt.test(e),u=t.style;if(l||(e=Zt(a)),o=C.cssHooks[e]||C.cssHooks[a],void 0===i)return o&&"get"in o&&void 0!==(s=o.get(t,!1,n))?s:u[e];"string"===(r=typeof i)&&(s=st.exec(i))&&s[1]&&(i=lt(t,e,s),r="number"),null!=i&&i==i&&("number"===r&&(i+=s&&s[3]||(C.cssNumber[a]?"":"px")),v.clearCloneStyle||""!==i||0!==e.indexOf("background")||(u[e]="inherit"),o&&"set"in o&&void 0===(i=o.set(t,i,n))||(l?u.setProperty(e,i):u[e]=i))}},css:function(t,e,i,n){var s,r,o,a=X(e);return Yt.test(e)||(e=Zt(a)),(o=C.cssHooks[e]||C.cssHooks[a])&&"get"in o&&(s=o.get(t,!0,i)),void 0===s&&(s=qt(t,e,n)),"normal"===s&&e in Kt&&(s=Kt[e]),""===i||i?(r=parseFloat(s),!0===i||isFinite(r)?r||0:s):s}}),C.each(["height","width"],function(t,e){C.cssHooks[e]={get:function(t,i,n){if(i)return!Bt.test(C.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?te(t,e,n):at(t,Vt,function(){return te(t,e,n)})},set:function(t,i,n){var s,r=zt(t),o="border-box"===C.css(t,"boxSizing",!1,r),a=n&&Qt(t,e,n,o,r);return o&&v.scrollboxSize()===r.position&&(a-=Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-parseFloat(r[e])-Qt(t,e,"border",!1,r)-.5)),a&&(s=st.exec(i))&&"px"!==(s[3]||"px")&&(t.style[e]=i,i=C.css(t,e)),Jt(0,i,a)}}}),C.cssHooks.marginLeft=Ut(v.reliableMarginLeft,function(t,e){if(e)return(parseFloat(qt(t,"marginLeft"))||t.getBoundingClientRect().left-at(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),C.each({margin:"",padding:"",border:"Width"},function(t,e){C.cssHooks[t+e]={expand:function(i){for(var n=0,s={},r="string"==typeof i?i.split(" "):[i];n<4;n++)s[t+rt[n]+e]=r[n]||r[n-2]||r[0];return s}},"margin"!==t&&(C.cssHooks[t+e].set=Jt)}),C.fn.extend({css:function(t,e){return B(this,function(t,e,i){var n,s,r={},o=0;if(Array.isArray(e)){for(n=zt(t),s=e.length;o<s;o++)r[e[o]]=C.css(t,e[o],!1,n);return r}return void 0!==i?C.style(t,e,i):C.css(t,e)},t,e,arguments.length>1)}}),C.Tween=ee,ee.prototype={constructor:ee,init:function(t,e,i,n,s,r){this.elem=t,this.prop=i,this.easing=s||C.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=n,this.unit=r||(C.cssNumber[i]?"":"px")},cur:function(){var t=ee.propHooks[this.prop];return t&&t.get?t.get(this):ee.propHooks._default.get(this)},run:function(t){var e,i=ee.propHooks[this.prop];return this.options.duration?this.pos=e=C.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):ee.propHooks._default.set(this),this}},ee.prototype.init.prototype=ee.prototype,ee.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=C.css(t.elem,t.prop,""))&&"auto"!==e?e:0},set:function(t){C.fx.step[t.prop]?C.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[C.cssProps[t.prop]]&&!C.cssHooks[t.prop]?t.elem[t.prop]=t.now:C.style(t.elem,t.prop,t.now+t.unit)}}},ee.propHooks.scrollTop=ee.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},C.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},C.fx=ee.prototype.init,C.fx.step={};var ie,ne,se=/^(?:toggle|show|hide)$/,re=/queueHooks$/;function oe(){ne&&(!1===o.hidden&&i.requestAnimationFrame?i.requestAnimationFrame(oe):i.setTimeout(oe,C.fx.interval),C.fx.tick())}function ae(){return i.setTimeout(function(){ie=void 0}),ie=Date.now()}function le(t,e){var i,n=0,s={height:t};for(e=e?1:0;n<4;n+=2-e)s["margin"+(i=rt[n])]=s["padding"+i]=t;return e&&(s.opacity=s.width=t),s}function ue(t,e,i){for(var n,s=(ce.tweeners[e]||[]).concat(ce.tweeners["*"]),r=0,o=s.length;r<o;r++)if(n=s[r].call(i,e,t))return n}function ce(t,e,i){var n,s,r=0,o=ce.prefilters.length,a=C.Deferred().always(function(){delete l.elem}),l=function(){if(s)return!1;for(var e=ie||ae(),i=Math.max(0,u.startTime+u.duration-e),n=1-(i/u.duration||0),r=0,o=u.tweens.length;r<o;r++)u.tweens[r].run(n);return a.notifyWith(t,[u,n,i]),n<1&&o?i:(o||a.notifyWith(t,[u,1,0]),a.resolveWith(t,[u]),!1)},u=a.promise({elem:t,props:C.extend({},e),opts:C.extend(!0,{specialEasing:{},easing:C.easing._default},i),originalProperties:e,originalOptions:i,startTime:ie||ae(),duration:i.duration,tweens:[],createTween:function(e,i){var n=C.Tween(t,u.opts,e,i,u.opts.specialEasing[e]||u.opts.easing);return u.tweens.push(n),n},stop:function(e){var i=0,n=e?u.tweens.length:0;if(s)return this;for(s=!0;i<n;i++)u.tweens[i].run(1);return e?(a.notifyWith(t,[u,1,0]),a.resolveWith(t,[u,e])):a.rejectWith(t,[u,e]),this}}),c=u.props;for(!function(t,e){var i,n,s,r,o;for(i in t)if(s=e[n=X(i)],r=t[i],Array.isArray(r)&&(s=r[1],r=t[i]=r[0]),i!==n&&(t[n]=r,delete t[i]),(o=C.cssHooks[n])&&"expand"in o)for(i in r=o.expand(r),delete t[n],r)i in t||(t[i]=r[i],e[i]=s);else e[n]=s}(c,u.opts.specialEasing);r<o;r++)if(n=ce.prefilters[r].call(u,t,c,u.opts))return _(n.stop)&&(C._queueHooks(u.elem,u.opts.queue).stop=n.stop.bind(n)),n;return C.map(c,ue,u),_(u.opts.start)&&u.opts.start.call(t,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),C.fx.timer(C.extend(l,{elem:t,anim:u,queue:u.opts.queue})),u}C.Animation=C.extend(ce,{tweeners:{"*":[function(t,e){var i=this.createTween(t,e);return lt(i.elem,t,st.exec(e),i),i}]},tweener:function(t,e){_(t)?(e=t,t=["*"]):t=t.match(R);for(var i,n=0,s=t.length;n<s;n++)i=t[n],ce.tweeners[i]=ce.tweeners[i]||[],ce.tweeners[i].unshift(e)},prefilters:[function(t,e,i){var n,s,r,o,a,l,u,c,h="width"in e||"height"in e,d=this,p={},f=t.style,g=t.nodeType&&ot(t),m=J.get(t,"fxshow");for(n in i.queue||(null==(o=C._queueHooks(t,"fx")).unqueued&&(o.unqueued=0,a=o.empty.fire,o.empty.fire=function(){o.unqueued||a()}),o.unqueued++,d.always(function(){d.always(function(){o.unqueued--,C.queue(t,"fx").length||o.empty.fire()})})),e)if(s=e[n],se.test(s)){if(delete e[n],r=r||"toggle"===s,s===(g?"hide":"show")){if("show"!==s||!m||void 0===m[n])continue;g=!0}p[n]=m&&m[n]||C.style(t,n)}if((l=!C.isEmptyObject(e))||!C.isEmptyObject(p))for(n in h&&1===t.nodeType&&(i.overflow=[f.overflow,f.overflowX,f.overflowY],null==(u=m&&m.display)&&(u=J.get(t,"display")),"none"===(c=C.css(t,"display"))&&(u?c=u:(ht([t],!0),u=t.style.display||u,c=C.css(t,"display"),ht([t]))),("inline"===c||"inline-block"===c&&null!=u)&&"none"===C.css(t,"float")&&(l||(d.done(function(){f.display=u}),null==u&&(c=f.display,u="none"===c?"":c)),f.display="inline-block")),i.overflow&&(f.overflow="hidden",d.always(function(){f.overflow=i.overflow[0],f.overflowX=i.overflow[1],f.overflowY=i.overflow[2]})),l=!1,p)l||(m?"hidden"in m&&(g=m.hidden):m=J.access(t,"fxshow",{display:u}),r&&(m.hidden=!g),g&&ht([t],!0),d.done(function(){for(n in g||ht([t]),J.remove(t,"fxshow"),p)C.style(t,n,p[n])})),l=ue(g?m[n]:0,n,d),n in m||(m[n]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(t,e){e?ce.prefilters.unshift(t):ce.prefilters.push(t)}}),C.speed=function(t,e,i){var n=t&&"object"==typeof t?C.extend({},t):{complete:i||!i&&e||_(t)&&t,duration:t,easing:i&&e||e&&!_(e)&&e};return C.fx.off?n.duration=0:"number"!=typeof n.duration&&(n.duration in C.fx.speeds?n.duration=C.fx.speeds[n.duration]:n.duration=C.fx.speeds._default),null!=n.queue&&!0!==n.queue||(n.queue="fx"),n.old=n.complete,n.complete=function(){_(n.old)&&n.old.call(this),n.queue&&C.dequeue(this,n.queue)},n},C.fn.extend({fadeTo:function(t,e,i,n){return this.filter(ot).css("opacity",0).show().end().animate({opacity:e},t,i,n)},animate:function(t,e,i,n){var s=C.isEmptyObject(t),r=C.speed(e,i,n),o=function(){var e=ce(this,C.extend({},t),r);(s||J.get(this,"finish"))&&e.stop(!0)};return o.finish=o,s||!1===r.queue?this.each(o):this.queue(r.queue,o)},stop:function(t,e,i){var n=function(t){var e=t.stop;delete t.stop,e(i)};return"string"!=typeof t&&(i=e,e=t,t=void 0),e&&!1!==t&&this.queue(t||"fx",[]),this.each(function(){var e=!0,s=null!=t&&t+"queueHooks",r=C.timers,o=J.get(this);if(s)o[s]&&o[s].stop&&n(o[s]);else for(s in o)o[s]&&o[s].stop&&re.test(s)&&n(o[s]);for(s=r.length;s--;)r[s].elem!==this||null!=t&&r[s].queue!==t||(r[s].anim.stop(i),e=!1,r.splice(s,1));!e&&i||C.dequeue(this,t)})},finish:function(t){return!1!==t&&(t=t||"fx"),this.each(function(){var e,i=J.get(this),n=i[t+"queue"],s=i[t+"queueHooks"],r=C.timers,o=n?n.length:0;for(i.finish=!0,C.queue(this,t,[]),s&&s.stop&&s.stop.call(this,!0),e=r.length;e--;)r[e].elem===this&&r[e].queue===t&&(r[e].anim.stop(!0),r.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete i.finish})}}),C.each(["toggle","show","hide"],function(t,e){var i=C.fn[e];C.fn[e]=function(t,n,s){return null==t||"boolean"==typeof t?i.apply(this,arguments):this.animate(le(e,!0),t,n,s)}}),C.each({slideDown:le("show"),slideUp:le("hide"),slideToggle:le("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){C.fn[t]=function(t,i,n){return this.animate(e,t,i,n)}}),C.timers=[],C.fx.tick=function(){var t,e=0,i=C.timers;for(ie=Date.now();e<i.length;e++)(t=i[e])()||i[e]!==t||i.splice(e--,1);i.length||C.fx.stop(),ie=void 0},C.fx.timer=function(t){C.timers.push(t),C.fx.start()},C.fx.interval=13,C.fx.start=function(){ne||(ne=!0,oe())},C.fx.stop=function(){ne=null},C.fx.speeds={slow:600,fast:200,_default:400},C.fn.delay=function(t,e){return t=C.fx&&C.fx.speeds[t]||t,e=e||"fx",this.queue(e,function(e,n){var s=i.setTimeout(e,t);n.stop=function(){i.clearTimeout(s)}})},function(){var t=o.createElement("input"),e=o.createElement("select").appendChild(o.createElement("option"));t.type="checkbox",v.checkOn=""!==t.value,v.optSelected=e.selected,(t=o.createElement("input")).value="t",t.type="radio",v.radioValue="t"===t.value}();var he,de=C.expr.attrHandle;C.fn.extend({attr:function(t,e){return B(this,C.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){C.removeAttr(this,t)})}}),C.extend({attr:function(t,e,i){var n,s,r=t.nodeType;if(3!==r&&8!==r&&2!==r)return void 0===t.getAttribute?C.prop(t,e,i):(1===r&&C.isXMLDoc(t)||(s=C.attrHooks[e.toLowerCase()]||(C.expr.match.bool.test(e)?he:void 0)),void 0!==i?null===i?void C.removeAttr(t,e):s&&"set"in s&&void 0!==(n=s.set(t,i,e))?n:(t.setAttribute(e,i+""),i):s&&"get"in s&&null!==(n=s.get(t,e))?n:null==(n=C.find.attr(t,e))?void 0:n)},attrHooks:{type:{set:function(t,e){if(!v.radioValue&&"radio"===e&&I(t,"input")){var i=t.value;return t.setAttribute("type",e),i&&(t.value=i),e}}}},removeAttr:function(t,e){var i,n=0,s=e&&e.match(R);if(s&&1===t.nodeType)for(;i=s[n++];)t.removeAttribute(i)}}),he={set:function(t,e,i){return!1===e?C.removeAttr(t,i):t.setAttribute(i,i),i}},C.each(C.expr.match.bool.source.match(/\w+/g),function(t,e){var i=de[e]||C.find.attr;de[e]=function(t,e,n){var s,r,o=e.toLowerCase();return n||(r=de[o],de[o]=s,s=null!=i(t,e,n)?o:null,de[o]=r),s}});var pe=/^(?:input|select|textarea|button)$/i,fe=/^(?:a|area)$/i;function ge(t){return(t.match(R)||[]).join(" ")}function me(t){return t.getAttribute&&t.getAttribute("class")||""}function ve(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(R)||[]}C.fn.extend({prop:function(t,e){return B(this,C.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[C.propFix[t]||t]})}}),C.extend({prop:function(t,e,i){var n,s,r=t.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&C.isXMLDoc(t)||(e=C.propFix[e]||e,s=C.propHooks[e]),void 0!==i?s&&"set"in s&&void 0!==(n=s.set(t,i,e))?n:t[e]=i:s&&"get"in s&&null!==(n=s.get(t,e))?n:t[e]},propHooks:{tabIndex:{get:function(t){var e=C.find.attr(t,"tabindex");return e?parseInt(e,10):pe.test(t.nodeName)||fe.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.optSelected||(C.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),C.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){C.propFix[this.toLowerCase()]=this}),C.fn.extend({addClass:function(t){var e,i,n,s,r,o,a,l=0;if(_(t))return this.each(function(e){C(this).addClass(t.call(this,e,me(this)))});if((e=ve(t)).length)for(;i=this[l++];)if(s=me(i),n=1===i.nodeType&&" "+ge(s)+" "){for(o=0;r=e[o++];)n.indexOf(" "+r+" ")<0&&(n+=r+" ");s!==(a=ge(n))&&i.setAttribute("class",a)}return this},removeClass:function(t){var e,i,n,s,r,o,a,l=0;if(_(t))return this.each(function(e){C(this).removeClass(t.call(this,e,me(this)))});if(!arguments.length)return this.attr("class","");if((e=ve(t)).length)for(;i=this[l++];)if(s=me(i),n=1===i.nodeType&&" "+ge(s)+" "){for(o=0;r=e[o++];)for(;n.indexOf(" "+r+" ")>-1;)n=n.replace(" "+r+" "," ");s!==(a=ge(n))&&i.setAttribute("class",a)}return this},toggleClass:function(t,e){var i=typeof t,n="string"===i||Array.isArray(t);return"boolean"==typeof e&&n?e?this.addClass(t):this.removeClass(t):_(t)?this.each(function(i){C(this).toggleClass(t.call(this,i,me(this),e),e)}):this.each(function(){var e,s,r,o;if(n)for(s=0,r=C(this),o=ve(t);e=o[s++];)r.hasClass(e)?r.removeClass(e):r.addClass(e);else void 0!==t&&"boolean"!==i||((e=me(this))&&J.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":J.get(this,"__className__")||""))})},hasClass:function(t){var e,i,n=0;for(e=" "+t+" ";i=this[n++];)if(1===i.nodeType&&(" "+ge(me(i))+" ").indexOf(e)>-1)return!0;return!1}});var _e=/\r/g;C.fn.extend({val:function(t){var e,i,n,s=this[0];return arguments.length?(n=_(t),this.each(function(i){var s;1===this.nodeType&&(null==(s=n?t.call(this,i,C(this).val()):t)?s="":"number"==typeof s?s+="":Array.isArray(s)&&(s=C.map(s,function(t){return null==t?"":t+""})),(e=C.valHooks[this.type]||C.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,s,"value")||(this.value=s))})):s?(e=C.valHooks[s.type]||C.valHooks[s.nodeName.toLowerCase()])&&"get"in e&&void 0!==(i=e.get(s,"value"))?i:"string"==typeof(i=s.value)?i.replace(_e,""):null==i?"":i:void 0}}),C.extend({valHooks:{option:{get:function(t){var e=C.find.attr(t,"value");return null!=e?e:ge(C.text(t))}},select:{get:function(t){var e,i,n,s=t.options,r=t.selectedIndex,o="select-one"===t.type,a=o?null:[],l=o?r+1:s.length;for(n=r<0?l:o?r:0;n<l;n++)if(((i=s[n]).selected||n===r)&&!i.disabled&&(!i.parentNode.disabled||!I(i.parentNode,"optgroup"))){if(e=C(i).val(),o)return e;a.push(e)}return a},set:function(t,e){for(var i,n,s=t.options,r=C.makeArray(e),o=s.length;o--;)((n=s[o]).selected=C.inArray(C.valHooks.option.get(n),r)>-1)&&(i=!0);return i||(t.selectedIndex=-1),r}}}}),C.each(["radio","checkbox"],function(){C.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=C.inArray(C(t).val(),e)>-1}},v.checkOn||(C.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})}),v.focusin="onfocusin"in i;var ye=/^(?:focusinfocus|focusoutblur)$/,be=function(t){t.stopPropagation()};C.extend(C.event,{trigger:function(t,e,n,s){var r,a,l,u,c,h,d,p,g=[n||o],m=f.call(t,"type")?t.type:t,v=f.call(t,"namespace")?t.namespace.split("."):[];if(a=p=l=n=n||o,3!==n.nodeType&&8!==n.nodeType&&!ye.test(m+C.event.triggered)&&(m.indexOf(".")>-1&&(m=(v=m.split(".")).shift(),v.sort()),c=m.indexOf(":")<0&&"on"+m,(t=t[C.expando]?t:new C.Event(m,"object"==typeof t&&t)).isTrigger=s?2:3,t.namespace=v.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=n),e=null==e?[t]:C.makeArray(e,[t]),d=C.event.special[m]||{},s||!d.trigger||!1!==d.trigger.apply(n,e))){if(!s&&!d.noBubble&&!y(n)){for(u=d.delegateType||m,ye.test(u+m)||(a=a.parentNode);a;a=a.parentNode)g.push(a),l=a;l===(n.ownerDocument||o)&&g.push(l.defaultView||l.parentWindow||i)}for(r=0;(a=g[r++])&&!t.isPropagationStopped();)p=a,t.type=r>1?u:d.bindType||m,(h=(J.get(a,"events")||{})[t.type]&&J.get(a,"handle"))&&h.apply(a,e),(h=c&&a[c])&&h.apply&&G(a)&&(t.result=h.apply(a,e),!1===t.result&&t.preventDefault());return t.type=m,s||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(g.pop(),e)||!G(n)||c&&_(n[m])&&!y(n)&&((l=n[c])&&(n[c]=null),C.event.triggered=m,t.isPropagationStopped()&&p.addEventListener(m,be),n[m](),t.isPropagationStopped()&&p.removeEventListener(m,be),C.event.triggered=void 0,l&&(n[c]=l)),t.result}},simulate:function(t,e,i){var n=C.extend(new C.Event,i,{type:t,isSimulated:!0});C.event.trigger(n,null,e)}}),C.fn.extend({trigger:function(t,e){return this.each(function(){C.event.trigger(t,e,this)})},triggerHandler:function(t,e){var i=this[0];if(i)return C.event.trigger(t,e,i,!0)}}),v.focusin||C.each({focus:"focusin",blur:"focusout"},function(t,e){var i=function(t){C.event.simulate(e,t.target,C.event.fix(t))};C.event.special[e]={setup:function(){var n=this.ownerDocument||this,s=J.access(n,e);s||n.addEventListener(t,i,!0),J.access(n,e,(s||0)+1)},teardown:function(){var n=this.ownerDocument||this,s=J.access(n,e)-1;s?J.access(n,e,s):(n.removeEventListener(t,i,!0),J.remove(n,e))}}});var we=i.location,xe=Date.now(),Ce=/\?/;C.parseXML=function(t){var e;if(!t||"string"!=typeof t)return null;try{e=(new i.DOMParser).parseFromString(t,"text/xml")}catch(t){e=void 0}return e&&!e.getElementsByTagName("parsererror").length||C.error("Invalid XML: "+t),e};var ke=/\[\]$/,Te=/\r?\n/g,De=/^(?:submit|button|image|reset|file)$/i,Se=/^(?:input|select|textarea|keygen)/i;function Ae(t,e,i,n){var s;if(Array.isArray(e))C.each(e,function(e,s){i||ke.test(t)?n(t,s):Ae(t+"["+("object"==typeof s&&null!=s?e:"")+"]",s,i,n)});else if(i||"object"!==x(e))n(t,e);else for(s in e)Ae(t+"["+s+"]",e[s],i,n)}C.param=function(t,e){var i,n=[],s=function(t,e){var i=_(e)?e():e;n[n.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==i?"":i)};if(Array.isArray(t)||t.jquery&&!C.isPlainObject(t))C.each(t,function(){s(this.name,this.value)});else for(i in t)Ae(i,t[i],e,s);return n.join("&")},C.fn.extend({serialize:function(){return C.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=C.prop(this,"elements");return t?C.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!C(this).is(":disabled")&&Se.test(this.nodeName)&&!De.test(t)&&(this.checked||!dt.test(t))}).map(function(t,e){var i=C(this).val();return null==i?null:Array.isArray(i)?C.map(i,function(t){return{name:e.name,value:t.replace(Te,"\r\n")}}):{name:e.name,value:i.replace(Te,"\r\n")}}).get()}});var Ee=/%20/g,Ie=/#.*$/,Oe=/([?&])_=[^&]*/,$e=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pe=/^(?:GET|HEAD)$/,Ne=/^\/\//,Me={},je={},He="*/".concat("*"),Re=o.createElement("a");function Le(t){return function(e,i){"string"!=typeof e&&(i=e,e="*");var n,s=0,r=e.toLowerCase().match(R)||[];if(_(i))for(;n=r[s++];)"+"===n[0]?(n=n.slice(1)||"*",(t[n]=t[n]||[]).unshift(i)):(t[n]=t[n]||[]).push(i)}}function Fe(t,e,i,n){var s={},r=t===je;function o(a){var l;return s[a]=!0,C.each(t[a]||[],function(t,a){var u=a(e,i,n);return"string"!=typeof u||r||s[u]?r?!(l=u):void 0:(e.dataTypes.unshift(u),o(u),!1)}),l}return o(e.dataTypes[0])||!s["*"]&&o("*")}function ze(t,e){var i,n,s=C.ajaxSettings.flatOptions||{};for(i in e)void 0!==e[i]&&((s[i]?t:n||(n={}))[i]=e[i]);return n&&C.extend(!0,t,n),t}Re.href=we.href,C.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:we.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(we.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":He,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":C.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?ze(ze(t,C.ajaxSettings),e):ze(C.ajaxSettings,t)},ajaxPrefilter:Le(Me),ajaxTransport:Le(je),ajax:function(t,e){"object"==typeof t&&(e=t,t=void 0),e=e||{};var n,s,r,a,l,u,c,h,d,p,f=C.ajaxSetup({},e),g=f.context||f,m=f.context&&(g.nodeType||g.jquery)?C(g):C.event,v=C.Deferred(),_=C.Callbacks("once memory"),y=f.statusCode||{},b={},w={},x="canceled",k={readyState:0,getResponseHeader:function(t){var e;if(c){if(!a)for(a={};e=$e.exec(r);)a[e[1].toLowerCase()]=e[2];e=a[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return c?r:null},setRequestHeader:function(t,e){return null==c&&(t=w[t.toLowerCase()]=w[t.toLowerCase()]||t,b[t]=e),this},overrideMimeType:function(t){return null==c&&(f.mimeType=t),this},statusCode:function(t){var e;if(t)if(c)k.always(t[k.status]);else for(e in t)y[e]=[y[e],t[e]];return this},abort:function(t){var e=t||x;return n&&n.abort(e),T(0,e),this}};if(v.promise(k),f.url=((t||f.url||we.href)+"").replace(Ne,we.protocol+"//"),f.type=e.method||e.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(R)||[""],null==f.crossDomain){u=o.createElement("a");try{u.href=f.url,u.href=u.href,f.crossDomain=Re.protocol+"//"+Re.host!=u.protocol+"//"+u.host}catch(t){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=C.param(f.data,f.traditional)),Fe(Me,f,e,k),c)return k;for(d in(h=C.event&&f.global)&&0==C.active++&&C.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Pe.test(f.type),s=f.url.replace(Ie,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(Ee,"+")):(p=f.url.slice(s.length),f.data&&(f.processData||"string"==typeof f.data)&&(s+=(Ce.test(s)?"&":"?")+f.data,delete f.data),!1===f.cache&&(s=s.replace(Oe,"$1"),p=(Ce.test(s)?"&":"?")+"_="+xe+++p),f.url=s+p),f.ifModified&&(C.lastModified[s]&&k.setRequestHeader("If-Modified-Since",C.lastModified[s]),C.etag[s]&&k.setRequestHeader("If-None-Match",C.etag[s])),(f.data&&f.hasContent&&!1!==f.contentType||e.contentType)&&k.setRequestHeader("Content-Type",f.contentType),k.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+He+"; q=0.01":""):f.accepts["*"]),f.headers)k.setRequestHeader(d,f.headers[d]);if(f.beforeSend&&(!1===f.beforeSend.call(g,k,f)||c))return k.abort();if(x="abort",_.add(f.complete),k.done(f.success),k.fail(f.error),n=Fe(je,f,e,k)){if(k.readyState=1,h&&m.trigger("ajaxSend",[k,f]),c)return k;f.async&&f.timeout>0&&(l=i.setTimeout(function(){k.abort("timeout")},f.timeout));try{c=!1,n.send(b,T)}catch(t){if(c)throw t;T(-1,t)}}else T(-1,"No Transport");function T(t,e,o,a){var u,d,p,b,w,x=e;c||(c=!0,l&&i.clearTimeout(l),n=void 0,r=a||"",k.readyState=t>0?4:0,u=t>=200&&t<300||304===t,o&&(b=function(t,e,i){for(var n,s,r,o,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===n&&(n=t.mimeType||e.getResponseHeader("Content-Type"));if(n)for(s in a)if(a[s]&&a[s].test(n)){l.unshift(s);break}if(l[0]in i)r=l[0];else{for(s in i){if(!l[0]||t.converters[s+" "+l[0]]){r=s;break}o||(o=s)}r=r||o}if(r)return r!==l[0]&&l.unshift(r),i[r]}(f,k,o)),b=function(t,e,i,n){var s,r,o,a,l,u={},c=t.dataTypes.slice();if(c[1])for(o in t.converters)u[o.toLowerCase()]=t.converters[o];for(r=c.shift();r;)if(t.responseFields[r]&&(i[t.responseFields[r]]=e),!l&&n&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=r,r=c.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(!(o=u[l+" "+r]||u["* "+r]))for(s in u)if((a=s.split(" "))[1]===r&&(o=u[l+" "+a[0]]||u["* "+a[0]])){!0===o?o=u[s]:!0!==u[s]&&(r=a[0],c.unshift(a[1]));break}if(!0!==o)if(o&&t.throws)e=o(e);else try{e=o(e)}catch(t){return{state:"parsererror",error:o?t:"No conversion from "+l+" to "+r}}}return{state:"success",data:e}}(f,b,k,u),u?(f.ifModified&&((w=k.getResponseHeader("Last-Modified"))&&(C.lastModified[s]=w),(w=k.getResponseHeader("etag"))&&(C.etag[s]=w)),204===t||"HEAD"===f.type?x="nocontent":304===t?x="notmodified":(x=b.state,d=b.data,u=!(p=b.error))):(p=x,!t&&x||(x="error",t<0&&(t=0))),k.status=t,k.statusText=(e||x)+"",u?v.resolveWith(g,[d,x,k]):v.rejectWith(g,[k,x,p]),k.statusCode(y),y=void 0,h&&m.trigger(u?"ajaxSuccess":"ajaxError",[k,f,u?d:p]),_.fireWith(g,[k,x]),h&&(m.trigger("ajaxComplete",[k,f]),--C.active||C.event.trigger("ajaxStop")))}return k},getJSON:function(t,e,i){return C.get(t,e,i,"json")},getScript:function(t,e){return C.get(t,void 0,e,"script")}}),C.each(["get","post"],function(t,e){C[e]=function(t,i,n,s){return _(i)&&(s=s||n,n=i,i=void 0),C.ajax(C.extend({url:t,type:e,dataType:s,data:i,success:n},C.isPlainObject(t)&&t))}}),C._evalUrl=function(t){return C.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},C.fn.extend({wrapAll:function(t){var e;return this[0]&&(_(t)&&(t=t.call(this[0])),e=C(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(t){return _(t)?this.each(function(e){C(this).wrapInner(t.call(this,e))}):this.each(function(){var e=C(this),i=e.contents();i.length?i.wrapAll(t):e.append(t)})},wrap:function(t){var e=_(t);return this.each(function(i){C(this).wrapAll(e?t.call(this,i):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){C(this).replaceWith(this.childNodes)}),this}}),C.expr.pseudos.hidden=function(t){return!C.expr.pseudos.visible(t)},C.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},C.ajaxSettings.xhr=function(){try{return new i.XMLHttpRequest}catch(t){}};var We={0:200,1223:204},qe=C.ajaxSettings.xhr();v.cors=!!qe&&"withCredentials"in qe,v.ajax=qe=!!qe,C.ajaxTransport(function(t){var e,n;if(v.cors||qe&&!t.crossDomain)return{send:function(s,r){var o,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)a[o]=t.xhrFields[o];for(o in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||s["X-Requested-With"]||(s["X-Requested-With"]="XMLHttpRequest"),s)a.setRequestHeader(o,s[o]);e=function(t){return function(){e&&(e=n=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===t?a.abort():"error"===t?"number"!=typeof a.status?r(0,"error"):r(a.status,a.statusText):r(We[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=e(),n=a.onerror=a.ontimeout=e("error"),void 0!==a.onabort?a.onabort=n:a.onreadystatechange=function(){4===a.readyState&&i.setTimeout(function(){e&&n()})},e=e("abort");try{a.send(t.hasContent&&t.data||null)}catch(t){if(e)throw t}},abort:function(){e&&e()}}}),C.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),C.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return C.globalEval(t),t}}}),C.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),C.ajaxTransport("script",function(t){var e,i;if(t.crossDomain)return{send:function(n,s){e=C("<script>").prop({charset:t.scriptCharset,src:t.url}).on("load error",i=function(t){e.remove(),i=null,t&&s("error"===t.type?404:200,t.type)}),o.head.appendChild(e[0])},abort:function(){i&&i()}}});var Ue,Be=[],Ye=/(=)\?(?=&|$)|\?\?/;C.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Be.pop()||C.expando+"_"+xe++;return this[t]=!0,t}}),C.ajaxPrefilter("json jsonp",function(t,e,n){var s,r,o,a=!1!==t.jsonp&&(Ye.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ye.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return s=t.jsonpCallback=_(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Ye,"$1"+s):!1!==t.jsonp&&(t.url+=(Ce.test(t.url)?"&":"?")+t.jsonp+"="+s),t.converters["script json"]=function(){return o||C.error(s+" was not called"),o[0]},t.dataTypes[0]="json",r=i[s],i[s]=function(){o=arguments},n.always(function(){void 0===r?C(i).removeProp(s):i[s]=r,t[s]&&(t.jsonpCallback=e.jsonpCallback,Be.push(s)),o&&_(r)&&r(o[0]),o=r=void 0}),"script"}),v.createHTMLDocument=((Ue=o.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ue.childNodes.length),C.parseHTML=function(t,e,i){return"string"!=typeof t?[]:("boolean"==typeof e&&(i=e,e=!1),e||(v.createHTMLDocument?((n=(e=o.implementation.createHTMLDocument("")).createElement("base")).href=o.location.href,e.head.appendChild(n)):e=o),s=O.exec(t),r=!i&&[],s?[e.createElement(s[1])]:(s=wt([t],e,r),r&&r.length&&C(r).remove(),C.merge([],s.childNodes)));var n,s,r},C.fn.load=function(t,e,i){var n,s,r,o=this,a=t.indexOf(" ");return a>-1&&(n=ge(t.slice(a)),t=t.slice(0,a)),_(e)?(i=e,e=void 0):e&&"object"==typeof e&&(s="POST"),o.length>0&&C.ajax({url:t,type:s||"GET",dataType:"html",data:e}).done(function(t){r=arguments,o.html(n?C("<div>").append(C.parseHTML(t)).find(n):t)}).always(i&&function(t,e){o.each(function(){i.apply(this,r||[t.responseText,e,t])})}),this},C.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){C.fn[e]=function(t){return this.on(e,t)}}),C.expr.pseudos.animated=function(t){return C.grep(C.timers,function(e){return t===e.elem}).length},C.offset={setOffset:function(t,e,i){var n,s,r,o,a,l,u=C.css(t,"position"),c=C(t),h={};"static"===u&&(t.style.position="relative"),a=c.offset(),r=C.css(t,"top"),l=C.css(t,"left"),("absolute"===u||"fixed"===u)&&(r+l).indexOf("auto")>-1?(o=(n=c.position()).top,s=n.left):(o=parseFloat(r)||0,s=parseFloat(l)||0),_(e)&&(e=e.call(t,i,C.extend({},a))),null!=e.top&&(h.top=e.top-a.top+o),null!=e.left&&(h.left=e.left-a.left+s),"using"in e?e.using.call(t,h):c.css(h)}},C.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){C.offset.setOffset(this,t,e)});var e,i,n=this[0];return n?n.getClientRects().length?(e=n.getBoundingClientRect(),i=n.ownerDocument.defaultView,{top:e.top+i.pageYOffset,left:e.left+i.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,i,n=this[0],s={top:0,left:0};if("fixed"===C.css(n,"position"))e=n.getBoundingClientRect();else{for(e=this.offset(),i=n.ownerDocument,t=n.offsetParent||i.documentElement;t&&(t===i.body||t===i.documentElement)&&"static"===C.css(t,"position");)t=t.parentNode;t&&t!==n&&1===t.nodeType&&((s=C(t).offset()).top+=C.css(t,"borderTopWidth",!0),s.left+=C.css(t,"borderLeftWidth",!0))}return{top:e.top-s.top-C.css(n,"marginTop",!0),left:e.left-s.left-C.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===C.css(t,"position");)t=t.offsetParent;return t||xt})}}),C.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var i="pageYOffset"===e;C.fn[t]=function(n){return B(this,function(t,n,s){var r;if(y(t)?r=t:9===t.nodeType&&(r=t.defaultView),void 0===s)return r?r[e]:t[n];r?r.scrollTo(i?r.pageXOffset:s,i?s:r.pageYOffset):t[n]=s},t,n,arguments.length)}}),C.each(["top","left"],function(t,e){C.cssHooks[e]=Ut(v.pixelPosition,function(t,i){if(i)return i=qt(t,e),Ft.test(i)?C(t).position()[e]+"px":i})}),C.each({Height:"height",Width:"width"},function(t,e){C.each({padding:"inner"+t,content:e,"":"outer"+t},function(i,n){C.fn[n]=function(s,r){var o=arguments.length&&(i||"boolean"!=typeof s),a=i||(!0===s||!0===r?"margin":"border");return B(this,function(e,i,s){var r;return y(e)?0===n.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+t],r["scroll"+t],e.body["offset"+t],r["offset"+t],r["client"+t])):void 0===s?C.css(e,i,a):C.style(e,i,s,a)},e,o?s:void 0,o)}})}),C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,e){C.fn[e]=function(t,i){return arguments.length>0?this.on(e,null,t,i):this.trigger(e)}}),C.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),C.fn.extend({bind:function(t,e,i){return this.on(t,null,e,i)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,i,n){return this.on(e,t,i,n)},undelegate:function(t,e,i){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",i)}}),C.proxy=function(t,e){var i,n,s;if("string"==typeof e&&(i=t[e],e=t,t=i),_(t))return n=l.call(arguments,2),(s=function(){return t.apply(e||this,n.concat(l.call(arguments)))}).guid=t.guid=t.guid||C.guid++,s},C.holdReady=function(t){t?C.readyWait++:C.ready(!0)},C.isArray=Array.isArray,C.parseJSON=JSON.parse,C.nodeName=I,C.isFunction=_,C.isWindow=y,C.camelCase=X,C.type=x,C.now=Date.now,C.isNumeric=function(t){var e=C.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},void 0===(n=function(){return C}.apply(e,[]))||(t.exports=n);var Ve=i.jQuery,Ke=i.$;return C.noConflict=function(t){return i.$===C&&(i.$=Ke),t&&i.jQuery===C&&(i.jQuery=Ve),C},s||(i.jQuery=i.$=C),C})},"8+8L":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i.d(e,"Url",function(){return O}),i.d(e,"Http",function(){return q}),i.d(e,"Resource",function(){return U});var n=2;function s(t){this.state=n,this.value=void 0,this.deferred=[];var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(t){e.reject(t)}}s.reject=function(t){return new s(function(e,i){i(t)})},s.resolve=function(t){return new s(function(e,i){e(t)})},s.all=function(t){return new s(function(e,i){var n=0,r=[];function o(i){return function(s){r[i]=s,(n+=1)===t.length&&e(r)}}0===t.length&&e(r);for(var a=0;a<t.length;a+=1)s.resolve(t[a]).then(o(a),i)})},s.race=function(t){return new s(function(e,i){for(var n=0;n<t.length;n+=1)s.resolve(t[n]).then(e,i)})};var r=s.prototype;function o(t,e){t instanceof Promise?this.promise=t:this.promise=new Promise(t.bind(e)),this.context=e}r.resolve=function(t){var e=this;if(e.state===n){if(t===e)throw new TypeError("Promise settled with itself.");var i=!1;try{var s=t&&t.then;if(null!==t&&"object"==typeof t&&"function"==typeof s)return void s.call(t,function(t){i||e.resolve(t),i=!0},function(t){i||e.reject(t),i=!0})}catch(t){return void(i||e.reject(t))}e.state=0,e.value=t,e.notify()}},r.reject=function(t){if(this.state===n){if(t===this)throw new TypeError("Promise settled with itself.");this.state=1,this.value=t,this.notify()}},r.notify=function(){var t,e=this;l(function(){if(e.state!==n)for(;e.deferred.length;){var t=e.deferred.shift(),i=t[0],s=t[1],r=t[2],o=t[3];try{0===e.state?r("function"==typeof i?i.call(void 0,e.value):e.value):1===e.state&&("function"==typeof s?r(s.call(void 0,e.value)):o(e.value))}catch(t){o(t)}}},t)},r.then=function(t,e){var i=this;return new s(function(n,s){i.deferred.push([t,e,n,s]),i.notify()})},r.catch=function(t){return this.then(void 0,t)},"undefined"==typeof Promise&&(window.Promise=s),o.all=function(t,e){return new o(Promise.all(t),e)},o.resolve=function(t,e){return new o(Promise.resolve(t),e)},o.reject=function(t,e){return new o(Promise.reject(t),e)},o.race=function(t,e){return new o(Promise.race(t),e)};var a=o.prototype;a.bind=function(t){return this.context=t,this},a.then=function(t,e){return t&&t.bind&&this.context&&(t=t.bind(this.context)),e&&e.bind&&this.context&&(e=e.bind(this.context)),new o(this.promise.then(t,e),this.context)},a.catch=function(t){return t&&t.bind&&this.context&&(t=t.bind(this.context)),new o(this.promise.catch(t),this.context)},a.finally=function(t){return this.then(function(e){return t.call(this),e},function(e){return t.call(this),Promise.reject(e)})};var l,u={}.hasOwnProperty,c=[].slice,h=!1,d="undefined"!=typeof window;function p(t){return t?t.replace(/^\s*|\s*$/g,""):""}function f(t){return t?t.toLowerCase():""}var g=Array.isArray;function m(t){return"string"==typeof t}function v(t){return"function"==typeof t}function _(t){return null!==t&&"object"==typeof t}function y(t){return _(t)&&Object.getPrototypeOf(t)==Object.prototype}function b(t,e,i){var n=o.resolve(t);return arguments.length<2?n:n.then(e,i)}function w(t,e,i){return v(i=i||{})&&(i=i.call(e)),k(t.bind({$vm:e,$options:i}),t,{$options:i})}function x(t,e){var i,n;if(g(t))for(i=0;i<t.length;i++)e.call(t[i],t[i],i);else if(_(t))for(n in t)u.call(t,n)&&e.call(t[n],t[n],n);return t}var C=Object.assign||function(t){return c.call(arguments,1).forEach(function(e){T(t,e)}),t};function k(t){return c.call(arguments,1).forEach(function(e){T(t,e,!0)}),t}function T(t,e,i){for(var n in e)i&&(y(e[n])||g(e[n]))?(y(e[n])&&!y(t[n])&&(t[n]={}),g(e[n])&&!g(t[n])&&(t[n]=[]),T(t[n],e[n],i)):void 0!==e[n]&&(t[n]=e[n])}function D(t,e,i){var n=function(t){var e=["+","#",".","/",";","?","&"],i=[];return{vars:i,expand:function(n){return t.replace(/\{([^{}]+)\}|([^{}]+)/g,function(t,s,r){if(s){var o=null,a=[];if(-1!==e.indexOf(s.charAt(0))&&(o=s.charAt(0),s=s.substr(1)),s.split(/,/g).forEach(function(t){var e=/([^:*]*)(?::(\d+)|(\*))?/.exec(t);a.push.apply(a,function(t,e,i,n){var s=t[i],r=[];if(S(s)&&""!==s)if("string"==typeof s||"number"==typeof s||"boolean"==typeof s)s=s.toString(),n&&"*"!==n&&(s=s.substring(0,parseInt(n,10))),r.push(E(e,s,A(e)?i:null));else if("*"===n)Array.isArray(s)?s.filter(S).forEach(function(t){r.push(E(e,t,A(e)?i:null))}):Object.keys(s).forEach(function(t){S(s[t])&&r.push(E(e,s[t],t))});else{var o=[];Array.isArray(s)?s.filter(S).forEach(function(t){o.push(E(e,t))}):Object.keys(s).forEach(function(t){S(s[t])&&(o.push(encodeURIComponent(t)),o.push(E(e,s[t].toString())))}),A(e)?r.push(encodeURIComponent(i)+"="+o.join(",")):0!==o.length&&r.push(o.join(","))}else";"===e?r.push(encodeURIComponent(i)):""!==s||"&"!==e&&"?"!==e?""===s&&r.push(""):r.push(encodeURIComponent(i)+"=");return r}(n,o,e[1],e[2]||e[3])),i.push(e[1])}),o&&"+"!==o){var l=",";return"?"===o?l="&":"#"!==o&&(l=o),(0!==a.length?o:"")+a.join(l)}return a.join(",")}return I(r)})}}}(t),s=n.expand(e);return i&&i.push.apply(i,n.vars),s}function S(t){return void 0!==t&&null!==t}function A(t){return";"===t||"&"===t||"?"===t}function E(t,e,i){return e="+"===t||"#"===t?I(e):encodeURIComponent(e),i?encodeURIComponent(i)+"="+e:e}function I(t){return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t){return/%[0-9A-Fa-f]/.test(t)||(t=encodeURI(t)),t}).join("")}function O(t,e){var i,n=this||{},s=t;return m(t)&&(s={url:t,params:e}),s=k({},O.options,n.$options,s),O.transforms.forEach(function(t){m(t)&&(t=O.transform[t]),v(t)&&(i=function(t,e,i){return function(n){return t.call(i,n,e)}}(t,i,n.$vm))}),i(s)}function $(t){return new o(function(e){var i=new XDomainRequest,n=function(n){var s=n.type,r=0;"load"===s?r=200:"error"===s&&(r=500),e(t.respondWith(i.responseText,{status:r}))};t.abort=function(){return i.abort()},i.open(t.method,t.getUrl()),t.timeout&&(i.timeout=t.timeout),i.onload=n,i.onabort=n,i.onerror=n,i.ontimeout=n,i.onprogress=function(){},i.send(t.getBody())})}O.options={url:"",root:null,params:{}},O.transform={template:function(t){var e=[],i=D(t.url,t.params,e);return e.forEach(function(e){delete t.params[e]}),i},query:function(t,e){var i=Object.keys(O.options.params),n={},s=e(t);return x(t.params,function(t,e){-1===i.indexOf(e)&&(n[e]=t)}),(n=O.params(n))&&(s+=(-1==s.indexOf("?")?"?":"&")+n),s},root:function(t,e){var i,n,s=e(t);return m(t.root)&&!/^(https?:)?\//.test(s)&&(i=t.root,n="/",s=(i&&void 0===n?i.replace(/\s+$/,""):i&&n?i.replace(new RegExp("["+n+"]+$"),""):i)+"/"+s),s}},O.transforms=["template","query","root"],O.params=function(t){var e=[],i=encodeURIComponent;return e.add=function(t,e){v(e)&&(e=e()),null===e&&(e=""),this.push(i(t)+"="+i(e))},function t(e,i,n){var s,r=g(i),o=y(i);x(i,function(i,a){s=_(i)||g(i),n&&(a=n+"["+(o||s?a:"")+"]"),!n&&r?e.add(i.name,i.value):s?t(e,i,a):e.add(a,i)})}(e,t),e.join("&").replace(/%20/g,"+")},O.parse=function(t){var e=document.createElement("a");return document.documentMode&&(e.href=t,t=e.href),e.href=t,{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",port:e.port,host:e.host,hostname:e.hostname,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):""}};var P=d&&"withCredentials"in new XMLHttpRequest;function N(t){return new o(function(e){var i,n,s=t.jsonp||"callback",r=t.jsonpCallback||"_jsonp"+Math.random().toString(36).substr(2),o=null;i=function(i){var s=i.type,a=0;"load"===s&&null!==o?a=200:"error"===s&&(a=500),a&&window[r]&&(delete window[r],document.body.removeChild(n)),e(t.respondWith(o,{status:a}))},window[r]=function(t){o=JSON.stringify(t)},t.abort=function(){i({type:"abort"})},t.params[s]=r,t.timeout&&setTimeout(t.abort,t.timeout),(n=document.createElement("script")).src=t.getUrl(),n.type="text/javascript",n.async=!0,n.onload=i,n.onerror=i,document.body.appendChild(n)})}function M(t){return new o(function(e){var i=new XMLHttpRequest,n=function(n){var s=t.respondWith("response"in i?i.response:i.responseText,{status:1223===i.status?204:i.status,statusText:1223===i.status?"No Content":p(i.statusText)});x(p(i.getAllResponseHeaders()).split("\n"),function(t){s.headers.append(t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1))}),e(s)};t.abort=function(){return i.abort()},i.open(t.method,t.getUrl(),!0),t.timeout&&(i.timeout=t.timeout),t.responseType&&"responseType"in i&&(i.responseType=t.responseType),(t.withCredentials||t.credentials)&&(i.withCredentials=!0),t.crossOrigin||t.headers.set("X-Requested-With","XMLHttpRequest"),v(t.progress)&&"GET"===t.method&&i.addEventListener("progress",t.progress),v(t.downloadProgress)&&i.addEventListener("progress",t.downloadProgress),v(t.progress)&&/^(POST|PUT)$/i.test(t.method)&&i.upload.addEventListener("progress",t.progress),v(t.uploadProgress)&&i.upload&&i.upload.addEventListener("progress",t.uploadProgress),t.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.onload=n,i.onabort=n,i.onerror=n,i.ontimeout=n,i.send(t.getBody())})}function j(t){var e=i(1);return new o(function(i){var n,s=t.getUrl(),r=t.getBody(),o=t.method,a={};t.headers.forEach(function(t,e){a[e]=t}),e(s,{body:r,method:o,headers:a}).then(n=function(e){var n=t.respondWith(e.body,{status:e.statusCode,statusText:p(e.statusMessage)});x(e.headers,function(t,e){n.headers.set(e,t)}),i(n)},function(t){return n(t.response)})})}function H(t){return(t.client||(d?M:j))(t)}var R=function(t){var e=this;this.map={},x(t,function(t,i){return e.append(i,t)})};function L(t,e){return Object.keys(t).reduce(function(t,i){return f(e)===f(i)?i:t},null)}R.prototype.has=function(t){return null!==L(this.map,t)},R.prototype.get=function(t){var e=this.map[L(this.map,t)];return e?e.join():null},R.prototype.getAll=function(t){return this.map[L(this.map,t)]||[]},R.prototype.set=function(t,e){this.map[function(t){if(/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return p(t)}(L(this.map,t)||t)]=[p(e)]},R.prototype.append=function(t,e){var i=this.map[L(this.map,t)];i?i.push(p(e)):this.set(t,e)},R.prototype.delete=function(t){delete this.map[L(this.map,t)]},R.prototype.deleteAll=function(){this.map={}},R.prototype.forEach=function(t,e){var i=this;x(this.map,function(n,s){x(n,function(n){return t.call(e,n,s,i)})})};var F=function(t,e){var i=e.url,n=e.headers,s=e.status,r=e.statusText;this.url=i,this.ok=s>=200&&s<300,this.status=s||0,this.statusText=r||"",this.headers=new R(n),this.body=t,m(t)?this.bodyText=t:"undefined"!=typeof Blob&&t instanceof Blob&&(this.bodyBlob=t,function(t){return 0===t.type.indexOf("text")||-1!==t.type.indexOf("json")}(t)&&(this.bodyText=function(t){return new o(function(e){var i=new FileReader;i.readAsText(t),i.onload=function(){e(i.result)}})}(t)))};F.prototype.blob=function(){return b(this.bodyBlob)},F.prototype.text=function(){return b(this.bodyText)},F.prototype.json=function(){return b(this.text(),function(t){return JSON.parse(t)})},Object.defineProperty(F.prototype,"data",{get:function(){return this.body},set:function(t){this.body=t}});var z=function(t){var e;this.body=null,this.params={},C(this,t,{method:(e=t.method||"GET",e?e.toUpperCase():"")}),this.headers instanceof R||(this.headers=new R(this.headers))};z.prototype.getUrl=function(){return O(this)},z.prototype.getBody=function(){return this.body},z.prototype.respondWith=function(t,e){return new F(t,C(e||{},{url:this.getUrl()}))};var W={"Content-Type":"application/json;charset=utf-8"};function q(t){var e=this||{},i=function(t){var e=[H],i=[];function n(n){for(;e.length;){var s=e.pop();if(v(s)){var r=void 0,a=void 0;if(_(r=s.call(t,n,function(t){return a=t})||a))return new o(function(e,n){i.forEach(function(e){r=b(r,function(i){return e.call(t,i)||i},n)}),b(r,e,n)},t);v(r)&&i.unshift(r)}else l="Invalid interceptor of type "+typeof s+", must be a function","undefined"!=typeof console&&h&&console.warn("[VueResource warn]: "+l)}var l}return _(t)||(t=null),n.use=function(t){e.push(t)},n}(e.$vm);return function(t){c.call(arguments,1).forEach(function(e){for(var i in e)void 0===t[i]&&(t[i]=e[i])})}(t||{},e.$options,q.options),q.interceptors.forEach(function(t){m(t)&&(t=q.interceptor[t]),v(t)&&i.use(t)}),i(new z(t)).then(function(t){return t.ok?t:o.reject(t)},function(t){var e;return t instanceof Error&&(e=t,"undefined"!=typeof console&&console.error(e)),o.reject(t)})}function U(t,e,i,n){var s=this||{},r={};return x(i=C({},U.actions,i),function(i,o){i=k({url:t,params:C({},e)},n,i),r[o]=function(){return(s.$http||q)(function(t,e){var i,n=C({},t),s={};switch(e.length){case 2:s=e[0],i=e[1];break;case 1:/^(POST|PUT|PATCH)$/i.test(n.method)?i=e[0]:s=e[0];break;case 0:break;default:throw"Expected up to 2 arguments [params, body], got "+e.length+" arguments"}return n.body=i,n.params=C({},n.params,s),n}(i,arguments))}}),r}function B(t){var e,i,n;B.installed||(i=(e=t).config,n=e.nextTick,l=n,h=i.debug||!i.silent,t.url=O,t.http=q,t.resource=U,t.Promise=o,Object.defineProperties(t.prototype,{$url:{get:function(){return w(t.url,this,this.$options.url)}},$http:{get:function(){return w(t.http,this,this.$options.http)}},$resource:{get:function(){return t.resource.bind(this)}},$promise:{get:function(){var e=this;return function(i){return new t.Promise(i,e)}}}}))}q.options={},q.headers={put:W,post:W,patch:W,delete:W,common:{Accept:"application/json, text/plain, */*"},custom:{}},q.interceptor={before:function(t){v(t.before)&&t.before.call(this,t)},method:function(t){t.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(t.method)&&(t.headers.set("X-HTTP-Method-Override",t.method),t.method="POST")},jsonp:function(t){"JSONP"==t.method&&(t.client=N)},json:function(t){var e=t.headers.get("Content-Type")||"";return _(t.body)&&0===e.indexOf("application/json")&&(t.body=JSON.stringify(t.body)),function(t){return t.bodyText?b(t.text(),function(e){var i,n;if(0===(t.headers.get("Content-Type")||"").indexOf("application/json")||(n=(i=e).match(/^\s*(\[|\{)/))&&{"[":/]\s*$/,"{":/}\s*$/}[n[1]].test(i))try{t.body=JSON.parse(e)}catch(e){t.body=null}else t.body=e;return t}):t}},form:function(t){var e;e=t.body,"undefined"!=typeof FormData&&e instanceof FormData?t.headers.delete("Content-Type"):_(t.body)&&t.emulateJSON&&(t.body=O.params(t.body),t.headers.set("Content-Type","application/x-www-form-urlencoded"))},header:function(t){x(C({},q.headers.common,t.crossOrigin?{}:q.headers.custom,q.headers[f(t.method)]),function(e,i){t.headers.has(i)||t.headers.set(i,e)})},cors:function(t){if(d){var e=O.parse(location.href),i=O.parse(t.getUrl());i.protocol===e.protocol&&i.host===e.host||(t.crossOrigin=!0,t.emulateHTTP=!1,P||(t.client=$))}}},q.interceptors=["before","method","jsonp","json","form","header","cors"],["get","delete","head","jsonp"].forEach(function(t){q[t]=function(e,i){return this(C(i||{},{url:e,method:t}))}}),["post","put","patch"].forEach(function(t){q[t]=function(e,i,n){return this(C(n||{},{url:e,method:t,body:i}))}}),U.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},delete:{method:"DELETE"}},"undefined"!=typeof window&&window.Vue&&window.Vue.use(B),e.default=B},"A/e+":function(t,e,i){var n=i("VU/8")(i("5m3O"),i("RQmS"),!1,function(t){i("01Ia")},"data-v-50a31472",null);t.exports=n.exports},AR8h:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"legend[data-v-6b692371]{font-size:13px;font-weight:700;border:0}fieldset>div[data-v-6b692371]{background:#f4f4f4;border:1px solid #d3d6de;margin:0 15px 15px;padding:20px 20px 10px}@media (max-width:992px){legend[data-v-6b692371]{text-align:left!important}}@media (min-width:992px){fieldset>div[data-v-6b692371]{width:55%}}",""])},"Bqz+":function(t,e){},DuR2:function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},FHXl:function(t,e,i){var n,s,r;!function(o){"use strict";s=[i("7t+N"),i("z1kw")],void 0===(r="function"==typeof(n=o)?n.apply(e,s):n)||(t.exports=r)}(function(t){"use strict";function e(e){var i="dragover"===e;return function(n){n.dataTransfer=n.originalEvent&&n.originalEvent.dataTransfer;var s=n.dataTransfer;s&&-1!==t.inArray("Files",s.types)&&!1!==this._trigger(e,t.Event(e,{delegatedEvent:n}))&&(n.preventDefault(),i&&(s.dropEffect="copy"))}}t.support.fileInput=!(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent)||t('<input type="file"/>').prop("disabled")),t.support.xhrFileUpload=!(!window.ProgressEvent||!window.FileReader),t.support.xhrFormDataFileUpload=!!window.FormData,t.support.blobSlice=window.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice),t.widget("blueimp.fileupload",{options:{dropZone:t(document),pasteZone:void 0,fileInput:void 0,replaceFileInput:!0,paramName:void 0,singleFileUploads:!0,limitMultiFileUploads:void 0,limitMultiFileUploadSize:void 0,limitMultiFileUploadSizeOverhead:512,sequentialUploads:!1,limitConcurrentUploads:void 0,forceIframeTransport:!1,redirect:void 0,redirectParamName:void 0,postMessage:void 0,multipart:!0,maxChunkSize:void 0,uploadedBytes:void 0,recalculateProgress:!0,progressInterval:100,bitrateInterval:500,autoUpload:!0,messages:{uploadedBytes:"Uploaded bytes exceed file size"},i18n:function(e,i){return e=this.messages[e]||e.toString(),i&&t.each(i,function(t,i){e=e.replace("{"+t+"}",i)}),e},formData:function(t){return t.serializeArray()},add:function(e,i){if(e.isDefaultPrevented())return!1;(i.autoUpload||!1!==i.autoUpload&&t(this).fileupload("option","autoUpload"))&&i.process().done(function(){i.submit()})},processData:!1,contentType:!1,cache:!1,timeout:0},_specialOptions:["fileInput","dropZone","pasteZone","multipart","forceIframeTransport"],_blobSlice:t.support.blobSlice&&function(){return(this.slice||this.webkitSlice||this.mozSlice).apply(this,arguments)},_BitrateTimer:function(){this.timestamp=Date.now?Date.now():(new Date).getTime(),this.loaded=0,this.bitrate=0,this.getBitrate=function(t,e,i){var n=t-this.timestamp;return(!this.bitrate||!i||n>i)&&(this.bitrate=(e-this.loaded)*(1e3/n)*8,this.loaded=e,this.timestamp=t),this.bitrate}},_isXHRUpload:function(e){return!e.forceIframeTransport&&(!e.multipart&&t.support.xhrFileUpload||t.support.xhrFormDataFileUpload)},_getFormData:function(e){var i;return"function"===t.type(e.formData)?e.formData(e.form):t.isArray(e.formData)?e.formData:"object"===t.type(e.formData)?(i=[],t.each(e.formData,function(t,e){i.push({name:t,value:e})}),i):[]},_getTotal:function(e){var i=0;return t.each(e,function(t,e){i+=e.size||1}),i},_initProgressObject:function(e){var i={loaded:0,total:0,bitrate:0};e._progress?t.extend(e._progress,i):e._progress=i},_initResponseObject:function(t){var e;if(t._response)for(e in t._response)t._response.hasOwnProperty(e)&&delete t._response[e];else t._response={}},_onProgress:function(e,i){if(e.lengthComputable){var n,s=Date.now?Date.now():(new Date).getTime();if(i._time&&i.progressInterval&&s-i._time<i.progressInterval&&e.loaded!==e.total)return;i._time=s,n=Math.floor(e.loaded/e.total*(i.chunkSize||i._progress.total))+(i.uploadedBytes||0),this._progress.loaded+=n-i._progress.loaded,this._progress.bitrate=this._bitrateTimer.getBitrate(s,this._progress.loaded,i.bitrateInterval),i._progress.loaded=i.loaded=n,i._progress.bitrate=i.bitrate=i._bitrateTimer.getBitrate(s,n,i.bitrateInterval),this._trigger("progress",t.Event("progress",{delegatedEvent:e}),i),this._trigger("progressall",t.Event("progressall",{delegatedEvent:e}),this._progress)}},_initProgressListener:function(e){var i=this,n=e.xhr?e.xhr():t.ajaxSettings.xhr();n.upload&&(t(n.upload).bind("progress",function(t){var n=t.originalEvent;t.lengthComputable=n.lengthComputable,t.loaded=n.loaded,t.total=n.total,i._onProgress(t,e)}),e.xhr=function(){return n})},_isInstanceOf:function(t,e){return Object.prototype.toString.call(e)==="[object "+t+"]"},_initXHRData:function(e){var i,n=this,s=e.files[0],r=e.multipart||!t.support.xhrFileUpload,o="array"===t.type(e.paramName)?e.paramName[0]:e.paramName;e.headers=t.extend({},e.headers),e.contentRange&&(e.headers["Content-Range"]=e.contentRange),r&&!e.blob&&this._isInstanceOf("File",s)||(e.headers["Content-Disposition"]='attachment; filename="'+encodeURI(s.uploadName||s.name)+'"'),r?t.support.xhrFormDataFileUpload&&(e.postMessage?(i=this._getFormData(e),e.blob?i.push({name:o,value:e.blob}):t.each(e.files,function(n,s){i.push({name:"array"===t.type(e.paramName)&&e.paramName[n]||o,value:s})})):(n._isInstanceOf("FormData",e.formData)?i=e.formData:(i=new FormData,t.each(this._getFormData(e),function(t,e){i.append(e.name,e.value)})),e.blob?i.append(o,e.blob,s.uploadName||s.name):t.each(e.files,function(s,r){(n._isInstanceOf("File",r)||n._isInstanceOf("Blob",r))&&i.append("array"===t.type(e.paramName)&&e.paramName[s]||o,r,r.uploadName||r.name)})),e.data=i):(e.contentType=s.type||"application/octet-stream",e.data=e.blob||s),e.blob=null},_initIframeSettings:function(e){var i=t("<a></a>").prop("href",e.url).prop("host");e.dataType="iframe "+(e.dataType||""),e.formData=this._getFormData(e),e.redirect&&i&&i!==location.host&&e.formData.push({name:e.redirectParamName||"redirect",value:e.redirect})},_initDataSettings:function(t){this._isXHRUpload(t)?(this._chunkedUpload(t,!0)||(t.data||this._initXHRData(t),this._initProgressListener(t)),t.postMessage&&(t.dataType="postmessage "+(t.dataType||""))):this._initIframeSettings(t)},_getParamName:function(e){var i=t(e.fileInput),n=e.paramName;return n?t.isArray(n)||(n=[n]):(n=[],i.each(function(){for(var e=t(this),i=e.prop("name")||"files[]",s=(e.prop("files")||[1]).length;s;)n.push(i),s-=1}),n.length||(n=[i.prop("name")||"files[]"])),n},_initFormSettings:function(e){e.form&&e.form.length||(e.form=t(e.fileInput.prop("form")),e.form.length||(e.form=t(this.options.fileInput.prop("form")))),e.paramName=this._getParamName(e),e.url||(e.url=e.form.prop("action")||location.href),e.type=(e.type||"string"===t.type(e.form.prop("method"))&&e.form.prop("method")||"").toUpperCase(),"POST"!==e.type&&"PUT"!==e.type&&"PATCH"!==e.type&&(e.type="POST"),e.formAcceptCharset||(e.formAcceptCharset=e.form.attr("accept-charset"))},_getAJAXSettings:function(e){var i=t.extend({},this.options,e);return this._initFormSettings(i),this._initDataSettings(i),i},_getDeferredState:function(t){return t.state?t.state():t.isResolved()?"resolved":t.isRejected()?"rejected":"pending"},_enhancePromise:function(t){return t.success=t.done,t.error=t.fail,t.complete=t.always,t},_getXHRPromise:function(e,i,n){var s=t.Deferred(),r=s.promise();return i=i||this.options.context||r,!0===e?s.resolveWith(i,n):!1===e&&s.rejectWith(i,n),r.abort=s.promise,this._enhancePromise(r)},_addConvenienceMethods:function(e,i){var n=this,s=function(e){return t.Deferred().resolveWith(n,e).promise()};i.process=function(e,r){return(e||r)&&(i._processQueue=this._processQueue=(this._processQueue||s([this])).then(function(){return i.errorThrown?t.Deferred().rejectWith(n,[i]).promise():s(arguments)}).then(e,r)),this._processQueue||s([this])},i.submit=function(){return"pending"!==this.state()&&(i.jqXHR=this.jqXHR=!1!==n._trigger("submit",t.Event("submit",{delegatedEvent:e}),this)&&n._onSend(e,this)),this.jqXHR||n._getXHRPromise()},i.abort=function(){return this.jqXHR?this.jqXHR.abort():(this.errorThrown="abort",n._trigger("fail",null,this),n._getXHRPromise(!1))},i.state=function(){return this.jqXHR?n._getDeferredState(this.jqXHR):this._processQueue?n._getDeferredState(this._processQueue):void 0},i.processing=function(){return!this.jqXHR&&this._processQueue&&"pending"===n._getDeferredState(this._processQueue)},i.progress=function(){return this._progress},i.response=function(){return this._response}},_getUploadedBytes:function(t){var e=t.getResponseHeader("Range"),i=e&&e.split("-"),n=i&&i.length>1&&parseInt(i[1],10);return n&&n+1},_chunkedUpload:function(e,i){e.uploadedBytes=e.uploadedBytes||0;var n,s,r=this,o=e.files[0],a=o.size,l=e.uploadedBytes,u=e.maxChunkSize||a,c=this._blobSlice,h=t.Deferred(),d=h.promise();return!(!(this._isXHRUpload(e)&&c&&(l||("function"===t.type(u)?u(e):u)<a))||e.data)&&(!!i||(l>=a?(o.error=e.i18n("uploadedBytes"),this._getXHRPromise(!1,e.context,[null,"error",o.error])):(s=function(){var i=t.extend({},e),d=i._progress.loaded;i.blob=c.call(o,l,l+("function"===t.type(u)?u(i):u),o.type),i.chunkSize=i.blob.size,i.contentRange="bytes "+l+"-"+(l+i.chunkSize-1)+"/"+a,r._initXHRData(i),r._initProgressListener(i),n=(!1!==r._trigger("chunksend",null,i)&&t.ajax(i)||r._getXHRPromise(!1,i.context)).done(function(n,o,u){l=r._getUploadedBytes(u)||l+i.chunkSize,d+i.chunkSize-i._progress.loaded&&r._onProgress(t.Event("progress",{lengthComputable:!0,loaded:l-i.uploadedBytes,total:l-i.uploadedBytes}),i),e.uploadedBytes=i.uploadedBytes=l,i.result=n,i.textStatus=o,i.jqXHR=u,r._trigger("chunkdone",null,i),r._trigger("chunkalways",null,i),l<a?s():h.resolveWith(i.context,[n,o,u])}).fail(function(t,e,n){i.jqXHR=t,i.textStatus=e,i.errorThrown=n,r._trigger("chunkfail",null,i),r._trigger("chunkalways",null,i),h.rejectWith(i.context,[t,e,n])})},this._enhancePromise(d),d.abort=function(){return n.abort()},s(),d)))},_beforeSend:function(t,e){0===this._active&&(this._trigger("start"),this._bitrateTimer=new this._BitrateTimer,this._progress.loaded=this._progress.total=0,this._progress.bitrate=0),this._initResponseObject(e),this._initProgressObject(e),e._progress.loaded=e.loaded=e.uploadedBytes||0,e._progress.total=e.total=this._getTotal(e.files)||1,e._progress.bitrate=e.bitrate=0,this._active+=1,this._progress.loaded+=e.loaded,this._progress.total+=e.total},_onDone:function(e,i,n,s){var r=s._progress.total,o=s._response;s._progress.loaded<r&&this._onProgress(t.Event("progress",{lengthComputable:!0,loaded:r,total:r}),s),o.result=s.result=e,o.textStatus=s.textStatus=i,o.jqXHR=s.jqXHR=n,this._trigger("done",null,s)},_onFail:function(t,e,i,n){var s=n._response;n.recalculateProgress&&(this._progress.loaded-=n._progress.loaded,this._progress.total-=n._progress.total),s.jqXHR=n.jqXHR=t,s.textStatus=n.textStatus=e,s.errorThrown=n.errorThrown=i,this._trigger("fail",null,n)},_onAlways:function(t,e,i,n){this._trigger("always",null,n)},_onSend:function(e,i){i.submit||this._addConvenienceMethods(e,i);var n,s,r,o,a=this,l=a._getAJAXSettings(i),u=function(){return a._sending+=1,l._bitrateTimer=new a._BitrateTimer,n=n||((s||!1===a._trigger("send",t.Event("send",{delegatedEvent:e}),l))&&a._getXHRPromise(!1,l.context,s)||a._chunkedUpload(l)||t.ajax(l)).done(function(t,e,i){a._onDone(t,e,i,l)}).fail(function(t,e,i){a._onFail(t,e,i,l)}).always(function(t,e,i){if(a._onAlways(t,e,i,l),a._sending-=1,a._active-=1,l.limitConcurrentUploads&&l.limitConcurrentUploads>a._sending)for(var n=a._slots.shift();n;){if("pending"===a._getDeferredState(n)){n.resolve();break}n=a._slots.shift()}0===a._active&&a._trigger("stop")})};return this._beforeSend(e,l),this.options.sequentialUploads||this.options.limitConcurrentUploads&&this.options.limitConcurrentUploads<=this._sending?(this.options.limitConcurrentUploads>1?(r=t.Deferred(),this._slots.push(r),o=r.then(u)):(this._sequence=this._sequence.then(u,u),o=this._sequence),o.abort=function(){return s=[void 0,"abort","abort"],n?n.abort():(r&&r.rejectWith(l.context,s),u())},this._enhancePromise(o)):u()},_onAdd:function(e,i){var n,s,r,o,a=this,l=!0,u=t.extend({},this.options,i),c=i.files,h=c.length,d=u.limitMultiFileUploads,p=u.limitMultiFileUploadSize,f=u.limitMultiFileUploadSizeOverhead,g=0,m=this._getParamName(u),v=0;if(!h)return!1;if(p&&void 0===c[0].size&&(p=void 0),(u.singleFileUploads||d||p)&&this._isXHRUpload(u))if(u.singleFileUploads||p||!d)if(!u.singleFileUploads&&p)for(r=[],n=[],o=0;o<h;o+=1)g+=c[o].size+f,(o+1===h||g+c[o+1].size+f>p||d&&o+1-v>=d)&&(r.push(c.slice(v,o+1)),(s=m.slice(v,o+1)).length||(s=m),n.push(s),v=o+1,g=0);else n=m;else for(r=[],n=[],o=0;o<h;o+=d)r.push(c.slice(o,o+d)),(s=m.slice(o,o+d)).length||(s=m),n.push(s);else r=[c],n=[m];return i.originalFiles=c,t.each(r||c,function(s,o){var u=t.extend({},i);return u.files=r?o:[o],u.paramName=n[s],a._initResponseObject(u),a._initProgressObject(u),a._addConvenienceMethods(e,u),l=a._trigger("add",t.Event("add",{delegatedEvent:e}),u)}),l},_replaceFileInput:function(e){var i=e.fileInput,n=i.clone(!0),s=i.is(document.activeElement);e.fileInputClone=n,t("<form></form>").append(n)[0].reset(),i.after(n).detach(),s&&n.focus(),t.cleanData(i.unbind("remove")),this.options.fileInput=this.options.fileInput.map(function(t,e){return e===i[0]?n[0]:e}),i[0]===this.element[0]&&(this.element=n)},_handleFileTreeEntry:function(e,i){var n,s=this,r=t.Deferred(),o=[],a=function(t){t&&!t.entry&&(t.entry=e),r.resolve([t])},l=function(){n.readEntries(function(t){t.length?(o=o.concat(t),l()):function(t){s._handleFileTreeEntries(t,i+e.name+"/").done(function(t){r.resolve(t)}).fail(a)}(o)},a)};return i=i||"",e.isFile?e._file?(e._file.relativePath=i,r.resolve(e._file)):e.file(function(t){t.relativePath=i,r.resolve(t)},a):e.isDirectory?(n=e.createReader(),l()):r.resolve([]),r.promise()},_handleFileTreeEntries:function(e,i){var n=this;return t.when.apply(t,t.map(e,function(t){return n._handleFileTreeEntry(t,i)})).then(function(){return Array.prototype.concat.apply([],arguments)})},_getDroppedFiles:function(e){var i=(e=e||{}).items;return i&&i.length&&(i[0].webkitGetAsEntry||i[0].getAsEntry)?this._handleFileTreeEntries(t.map(i,function(t){var e;return t.webkitGetAsEntry?((e=t.webkitGetAsEntry())&&(e._file=t.getAsFile()),e):t.getAsEntry()})):t.Deferred().resolve(t.makeArray(e.files)).promise()},_getSingleFileInputFiles:function(e){var i,n,s=(e=t(e)).prop("webkitEntries")||e.prop("entries");if(s&&s.length)return this._handleFileTreeEntries(s);if((i=t.makeArray(e.prop("files"))).length)void 0===i[0].name&&i[0].fileName&&t.each(i,function(t,e){e.name=e.fileName,e.size=e.fileSize});else{if(!(n=e.prop("value")))return t.Deferred().resolve([]).promise();i=[{name:n.replace(/^.*\\/,"")}]}return t.Deferred().resolve(i).promise()},_getFileInputFiles:function(e){return e instanceof t&&1!==e.length?t.when.apply(t,t.map(e,this._getSingleFileInputFiles)).then(function(){return Array.prototype.concat.apply([],arguments)}):this._getSingleFileInputFiles(e)},_onChange:function(e){var i=this,n={fileInput:t(e.target),form:t(e.target.form)};this._getFileInputFiles(n.fileInput).always(function(s){n.files=s,i.options.replaceFileInput&&i._replaceFileInput(n),!1!==i._trigger("change",t.Event("change",{delegatedEvent:e}),n)&&i._onAdd(e,n)})},_onPaste:function(e){var i=e.originalEvent&&e.originalEvent.clipboardData&&e.originalEvent.clipboardData.items,n={files:[]};i&&i.length&&(t.each(i,function(t,e){var i=e.getAsFile&&e.getAsFile();i&&n.files.push(i)}),!1!==this._trigger("paste",t.Event("paste",{delegatedEvent:e}),n)&&this._onAdd(e,n))},_onDrop:function(e){e.dataTransfer=e.originalEvent&&e.originalEvent.dataTransfer;var i=this,n=e.dataTransfer,s={};n&&n.files&&n.files.length&&(e.preventDefault(),this._getDroppedFiles(n).always(function(n){s.files=n,!1!==i._trigger("drop",t.Event("drop",{delegatedEvent:e}),s)&&i._onAdd(e,s)}))},_onDragOver:e("dragover"),_onDragEnter:e("dragenter"),_onDragLeave:e("dragleave"),_initEventHandlers:function(){this._isXHRUpload(this.options)&&(this._on(this.options.dropZone,{dragover:this._onDragOver,drop:this._onDrop,dragenter:this._onDragEnter,dragleave:this._onDragLeave}),this._on(this.options.pasteZone,{paste:this._onPaste})),t.support.fileInput&&this._on(this.options.fileInput,{change:this._onChange})},_destroyEventHandlers:function(){this._off(this.options.dropZone,"dragenter dragleave dragover drop"),this._off(this.options.pasteZone,"paste"),this._off(this.options.fileInput,"change")},_destroy:function(){this._destroyEventHandlers()},_setOption:function(e,i){var n=-1!==t.inArray(e,this._specialOptions);n&&this._destroyEventHandlers(),this._super(e,i),n&&(this._initSpecialOptions(),this._initEventHandlers())},_initSpecialOptions:function(){var e=this.options;void 0===e.fileInput?e.fileInput=this.element.is('input[type="file"]')?this.element:this.element.find('input[type="file"]'):e.fileInput instanceof t||(e.fileInput=t(e.fileInput)),e.dropZone instanceof t||(e.dropZone=t(e.dropZone)),e.pasteZone instanceof t||(e.pasteZone=t(e.pasteZone))},_getRegExp:function(t){var e=t.split("/"),i=e.pop();return e.shift(),new RegExp(e.join("/"),i)},_isRegExpOption:function(e,i){return"url"!==e&&"string"===t.type(i)&&/^\/.*\/[igm]{0,3}$/.test(i)},_initDataAttributes:function(){var e=this,i=this.options,n=this.element.data();t.each(this.element[0].attributes,function(t,s){var r,o=s.name.toLowerCase();/^data-/.test(o)&&(o=o.slice(5).replace(/-[a-z]/g,function(t){return t.charAt(1).toUpperCase()}),r=n[o],e._isRegExpOption(o,r)&&(r=e._getRegExp(r)),i[o]=r)})},_create:function(){this._initDataAttributes(),this._initSpecialOptions(),this._slots=[],this._sequence=this._getXHRPromise(!0),this._sending=this._active=0,this._initProgressObject(this),this._initEventHandlers()},active:function(){return this._active},progress:function(){return this._progress},add:function(e){var i=this;e&&!this.options.disabled&&(e.fileInput&&!e.files?this._getFileInputFiles(e.fileInput).always(function(t){e.files=t,i._onAdd(null,e)}):(e.files=t.makeArray(e.files),this._onAdd(null,e)))},send:function(e){if(e&&!this.options.disabled){if(e.fileInput&&!e.files){var i,n,s=this,r=t.Deferred(),o=r.promise();return o.abort=function(){return n=!0,i?i.abort():(r.reject(null,"abort","abort"),o)},this._getFileInputFiles(e.fileInput).always(function(t){n||(t.length?(e.files=t,(i=s._onSend(null,e)).then(function(t,e,i){r.resolve(t,e,i)},function(t,e,i){r.reject(t,e,i)})):r.reject())}),this._enhancePromise(o)}if(e.files=t.makeArray(e.files),e.files.length)return this._onSend(null,e)}return this._getXHRPromise(!1,e&&e.context)}})})},"FZ+f":function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var s=(o=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),r=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[i].concat(r).concat([s]).join("\n")}var o;return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(n[r]=!0)}for(s=0;s<t.length;s++){var o=t[s];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),e.push(o))}},e}},GDnL:function(t,e,i){i("bUYX"),i("WRGp"),Vue.component("passport-clients",i("A/e+")),Vue.component("passport-authorized-clients",i("ooDj")),Vue.component("passport-personal-access-tokens",i("Lypw")),Vue.component("importer",i("NYlw")),Vue.component("fieldset-default-values",i("+sje"))},"HT/f":function(t,e,i){var n=i("7SOi");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("4a7641b9",n,!0,{})},"I3G/":function(t,e,i){"use strict";(function(e){function i(t){return void 0===t||null===t}function n(t){return void 0!==t&&null!==t}function s(t){return!0===t}function r(t){return"string"==typeof t||"number"==typeof t||"boolean"==typeof t}function o(t){return null!==t&&"object"==typeof t}var a=Object.prototype.toString;function l(t){return"[object Object]"===a.call(t)}function u(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function c(t){return null==t?"":"object"==typeof t?JSON.stringify(t,null,2):String(t)}function h(t){var e=parseFloat(t);return isNaN(e)?t:e}function d(t,e){for(var i=Object.create(null),n=t.split(","),s=0;s<n.length;s++)i[n[s]]=!0;return e?function(t){return i[t.toLowerCase()]}:function(t){return i[t]}}var p=d("slot,component",!0),f=d("key,ref,slot,is");function g(t,e){if(t.length){var i=t.indexOf(e);if(i>-1)return t.splice(i,1)}}var m=Object.prototype.hasOwnProperty;function v(t,e){return m.call(t,e)}function _(t){var e=Object.create(null);return function(i){return e[i]||(e[i]=t(i))}}var y=/-(\w)/g,b=_(function(t){return t.replace(y,function(t,e){return e?e.toUpperCase():""})}),w=_(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),x=/\B([A-Z])/g,C=_(function(t){return t.replace(x,"-$1").toLowerCase()});function k(t,e){function i(i){var n=arguments.length;return n?n>1?t.apply(e,arguments):t.call(e,i):t.call(e)}return i._length=t.length,i}function T(t,e){e=e||0;for(var i=t.length-e,n=new Array(i);i--;)n[i]=t[i+e];return n}function D(t,e){for(var i in e)t[i]=e[i];return t}function S(t){for(var e={},i=0;i<t.length;i++)t[i]&&D(e,t[i]);return e}function A(t,e,i){}var E=function(t,e,i){return!1},I=function(t){return t};function O(t,e){if(t===e)return!0;var i=o(t),n=o(e);if(!i||!n)return!i&&!n&&String(t)===String(e);try{var s=Array.isArray(t),r=Array.isArray(e);if(s&&r)return t.length===e.length&&t.every(function(t,i){return O(t,e[i])});if(s||r)return!1;var a=Object.keys(t),l=Object.keys(e);return a.length===l.length&&a.every(function(i){return O(t[i],e[i])})}catch(t){return!1}}function $(t,e){for(var i=0;i<t.length;i++)if(O(t[i],e))return i;return-1}function P(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var N="data-server-rendered",M=["component","directive","filter"],j=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],H={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:E,isReservedAttr:E,isUnknownElement:E,getTagNamespace:A,parsePlatformTagName:I,mustUseProp:E,_lifecycleHooks:j},R=Object.freeze({});function L(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function F(t,e,i,n){Object.defineProperty(t,e,{value:i,enumerable:!!n,writable:!0,configurable:!0})}var z=/[^\w.$]/;var W=A;function q(t,e,i){if(H.errorHandler)H.errorHandler.call(null,t,e,i);else{if(!Y||"undefined"==typeof console)throw t;console.error(t)}}var U,B="__proto__"in{},Y="undefined"!=typeof window,V=Y&&window.navigator.userAgent.toLowerCase(),K=V&&/msie|trident/.test(V),X=V&&V.indexOf("msie 9.0")>0,G=V&&V.indexOf("edge/")>0,Z=V&&V.indexOf("android")>0,J=V&&/iphone|ipad|ipod|ios/.test(V),Q=V&&/chrome\/\d+/.test(V)&&!G,tt={}.watch,et=!1;if(Y)try{var it={};Object.defineProperty(it,"passive",{get:function(){et=!0}}),window.addEventListener("test-passive",null,it)}catch(t){}var nt=function(){return void 0===U&&(U=!Y&&void 0!==e&&"server"===e.process.env.VUE_ENV),U},st=Y&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function rt(t){return"function"==typeof t&&/native code/.test(t.toString())}var ot,at="undefined"!=typeof Symbol&&rt(Symbol)&&"undefined"!=typeof Reflect&&rt(Reflect.ownKeys),lt=function(){var t,e=[],i=!1;function n(){i=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!=typeof Promise&&rt(Promise)){var s=Promise.resolve(),r=function(t){console.error(t)};t=function(){s.then(n).catch(r),J&&setTimeout(A)}}else if(K||"undefined"==typeof MutationObserver||!rt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())t=function(){setTimeout(n,0)};else{var o=1,a=new MutationObserver(n),l=document.createTextNode(String(o));a.observe(l,{characterData:!0}),t=function(){o=(o+1)%2,l.data=String(o)}}return function(n,s){var r;if(e.push(function(){if(n)try{n.call(s)}catch(t){q(t,s,"nextTick")}else r&&r(s)}),i||(i=!0,t()),!n&&"undefined"!=typeof Promise)return new Promise(function(t,e){r=t})}}();ot="undefined"!=typeof Set&&rt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=0,ct=function(){this.id=ut++,this.subs=[]};ct.prototype.addSub=function(t){this.subs.push(t)},ct.prototype.removeSub=function(t){g(this.subs,t)},ct.prototype.depend=function(){ct.target&&ct.target.addDep(this)},ct.prototype.notify=function(){for(var t=this.subs.slice(),e=0,i=t.length;e<i;e++)t[e].update()},ct.target=null;var ht=[];var dt=Array.prototype,pt=Object.create(dt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=dt[t];F(pt,t,function(){for(var i=[],n=arguments.length;n--;)i[n]=arguments[n];var s,r=e.apply(this,i),o=this.__ob__;switch(t){case"push":case"unshift":s=i;break;case"splice":s=i.slice(2)}return s&&o.observeArray(s),o.dep.notify(),r})});var ft=Object.getOwnPropertyNames(pt),gt={shouldConvert:!0},mt=function(t){(this.value=t,this.dep=new ct,this.vmCount=0,F(t,"__ob__",this),Array.isArray(t))?((B?vt:_t)(t,pt,ft),this.observeArray(t)):this.walk(t)};function vt(t,e,i){t.__proto__=e}function _t(t,e,i){for(var n=0,s=i.length;n<s;n++){var r=i[n];F(t,r,e[r])}}function yt(t,e){var i;if(o(t))return v(t,"__ob__")&&t.__ob__ instanceof mt?i=t.__ob__:gt.shouldConvert&&!nt()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(i=new mt(t)),e&&i&&i.vmCount++,i}function bt(t,e,i,n,s){var r=new ct,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var a=o&&o.get,l=o&&o.set,u=!s&&yt(i);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):i;return ct.target&&(r.depend(),u&&(u.dep.depend(),Array.isArray(e)&&function t(e){for(var i=void 0,n=0,s=e.length;n<s;n++)(i=e[n])&&i.__ob__&&i.__ob__.dep.depend(),Array.isArray(i)&&t(i)}(e))),e},set:function(e){var n=a?a.call(t):i;e===n||e!=e&&n!=n||(l?l.call(t,e):i=e,u=!s&&yt(e),r.notify())}})}}function wt(t,e,i){if(Array.isArray(t)&&u(e))return t.length=Math.max(t.length,e),t.splice(e,1,i),i;if(v(t,e))return t[e]=i,i;var n=t.__ob__;return t._isVue||n&&n.vmCount?i:n?(bt(n.value,e,i),n.dep.notify(),i):(t[e]=i,i)}function xt(t,e){if(Array.isArray(t)&&u(e))t.splice(e,1);else{var i=t.__ob__;t._isVue||i&&i.vmCount||v(t,e)&&(delete t[e],i&&i.dep.notify())}}mt.prototype.walk=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)bt(t,e[i],t[e[i]])},mt.prototype.observeArray=function(t){for(var e=0,i=t.length;e<i;e++)yt(t[e])};var Ct=H.optionMergeStrategies;function kt(t,e){if(!e)return t;for(var i,n,s,r=Object.keys(e),o=0;o<r.length;o++)n=t[i=r[o]],s=e[i],v(t,i)?l(n)&&l(s)&&kt(n,s):wt(t,i,s);return t}function Tt(t,e,i){return i?t||e?function(){var n="function"==typeof e?e.call(i):e,s="function"==typeof t?t.call(i):t;return n?kt(n,s):s}:void 0:e?t?function(){return kt("function"==typeof e?e.call(this):e,"function"==typeof t?t.call(this):t)}:e:t}function Dt(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function St(t,e){var i=Object.create(t||null);return e?D(i,e):i}Ct.data=function(t,e,i){return i?Tt(t,e,i):e&&"function"!=typeof e?t:Tt.call(this,t,e)},j.forEach(function(t){Ct[t]=Dt}),M.forEach(function(t){Ct[t+"s"]=St}),Ct.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var n in D(i,t),e){var s=i[n],r=e[n];s&&!Array.isArray(s)&&(s=[s]),i[n]=s?s.concat(r):Array.isArray(r)?r:[r]}return i},Ct.props=Ct.methods=Ct.inject=Ct.computed=function(t,e){if(!t)return e;var i=Object.create(null);return D(i,t),e&&D(i,e),i},Ct.provide=Tt;var At=function(t,e){return void 0===e?t:e};function Et(t,e,i){"function"==typeof e&&(e=e.options),function(t){var e=t.props;if(e){var i,n,s={};if(Array.isArray(e))for(i=e.length;i--;)"string"==typeof(n=e[i])&&(s[b(n)]={type:null});else if(l(e))for(var r in e)n=e[r],s[b(r)]=l(n)?n:{type:n};t.props=s}}(e),function(t){var e=t.inject;if(Array.isArray(e))for(var i=t.inject={},n=0;n<e.length;n++)i[e[n]]=e[n]}(e),function(t){var e=t.directives;if(e)for(var i in e){var n=e[i];"function"==typeof n&&(e[i]={bind:n,update:n})}}(e);var n=e.extends;if(n&&(t=Et(t,n,i)),e.mixins)for(var s=0,r=e.mixins.length;s<r;s++)t=Et(t,e.mixins[s],i);var o,a={};for(o in t)u(o);for(o in e)v(t,o)||u(o);function u(n){var s=Ct[n]||At;a[n]=s(t[n],e[n],i,n)}return a}function It(t,e,i,n){if("string"==typeof i){var s=t[e];if(v(s,i))return s[i];var r=b(i);if(v(s,r))return s[r];var o=w(r);return v(s,o)?s[o]:s[i]||s[r]||s[o]}}function Ot(t,e,i,n){var s=e[t],r=!v(i,t),o=i[t];if(Pt(Boolean,s.type)&&(r&&!v(s,"default")?o=!1:Pt(String,s.type)||""!==o&&o!==C(t)||(o=!0)),void 0===o){o=function(t,e,i){if(!v(e,"default"))return;var n=e.default;0;if(t&&t.$options.propsData&&void 0===t.$options.propsData[i]&&void 0!==t._props[i])return t._props[i];return"function"==typeof n&&"Function"!==$t(e.type)?n.call(t):n}(n,s,t);var a=gt.shouldConvert;gt.shouldConvert=!0,yt(o),gt.shouldConvert=a}return o}function $t(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Pt(t,e){if(!Array.isArray(e))return $t(e)===$t(t);for(var i=0,n=e.length;i<n;i++)if($t(e[i])===$t(t))return!0;return!1}var Nt=function(t,e,i,n,s,r,o,a){this.tag=t,this.data=e,this.children=i,this.text=n,this.elm=s,this.ns=void 0,this.context=r,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Mt={child:{}};Mt.child.get=function(){return this.componentInstance},Object.defineProperties(Nt.prototype,Mt);var jt=function(t){void 0===t&&(t="");var e=new Nt;return e.text=t,e.isComment=!0,e};function Ht(t){return new Nt(void 0,void 0,void 0,String(t))}function Rt(t,e){var i=new Nt(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return i.ns=t.ns,i.isStatic=t.isStatic,i.key=t.key,i.isComment=t.isComment,i.isCloned=!0,e&&t.children&&(i.children=Lt(t.children)),i}function Lt(t,e){for(var i=t.length,n=new Array(i),s=0;s<i;s++)n[s]=Rt(t[s],e);return n}var Ft,zt=_(function(t){var e="&"===t.charAt(0),i="~"===(t=e?t.slice(1):t).charAt(0),n="!"===(t=i?t.slice(1):t).charAt(0);return{name:t=n?t.slice(1):t,plain:!(e||i||n),once:i,capture:n,passive:e}});function Wt(t){function e(){var t=arguments,i=e.fns;if(!Array.isArray(i))return i.apply(null,arguments);for(var n=i.slice(),s=0;s<n.length;s++)n[s].apply(null,t)}return e.fns=t,e}function qt(t,e){return t.plain?-1:e.plain?1:0}function Ut(t,e,n,s,r){var o,a,l,u,c=[],h=!1;for(o in t)a=t[o],l=e[o],(u=zt(o)).plain||(h=!0),i(a)||(i(l)?(i(a.fns)&&(a=t[o]=Wt(a)),u.handler=a,c.push(u)):a!==l&&(l.fns=a,t[o]=l));if(c.length){h&&c.sort(qt);for(var d=0;d<c.length;d++){var p=c[d];n(p.name,p.handler,p.once,p.capture,p.passive)}}for(o in e)i(t[o])&&s((u=zt(o)).name,e[o],u.capture)}function Bt(t,e,r){var o,a=t[e];function l(){r.apply(this,arguments),g(o.fns,l)}i(a)?o=Wt([l]):n(a.fns)&&s(a.merged)?(o=a).fns.push(l):o=Wt([a,l]),o.merged=!0,t[e]=o}function Yt(t,e,i,s,r){if(n(e)){if(v(e,i))return t[i]=e[i],r||delete e[i],!0;if(v(e,s))return t[i]=e[s],r||delete e[s],!0}return!1}function Vt(t){return r(t)?[Ht(t)]:Array.isArray(t)?function t(e,o){var a=[];var l,u,c;for(l=0;l<e.length;l++)i(u=e[l])||"boolean"==typeof u||(c=a[a.length-1],Array.isArray(u)?a.push.apply(a,t(u,(o||"")+"_"+l)):r(u)?Kt(c)?c.text+=String(u):""!==u&&a.push(Ht(u)):Kt(u)&&Kt(c)?a[a.length-1]=Ht(c.text+u.text):(s(e._isVList)&&n(u.tag)&&i(u.key)&&n(o)&&(u.key="__vlist"+o+"_"+l+"__"),a.push(u)));return a}(t):void 0}function Kt(t){return n(t)&&n(t.text)&&!1===t.isComment}function Xt(t,e){return t.__esModule&&t.default&&(t=t.default),o(t)?e.extend(t):t}function Gt(t){return t.isComment&&t.asyncFactory}function Zt(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var i=t[e];if(n(i)&&(n(i.componentOptions)||Gt(i)))return i}}function Jt(t,e,i){i?Ft.$once(t,e):Ft.$on(t,e)}function Qt(t,e){Ft.$off(t,e)}function te(t,e,i){Ft=t,Ut(e,i||{},Jt,Qt)}function ee(t,e){var i={};if(!t)return i;for(var n=[],s=0,r=t.length;s<r;s++){var o=t[s],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.functionalContext!==e||!a||null==a.slot)n.push(o);else{var l=o.data.slot,u=i[l]||(i[l]=[]);"template"===o.tag?u.push.apply(u,o.children):u.push(o)}}return n.every(ie)||(i.default=n),i}function ie(t){return t.isComment||" "===t.text}function ne(t,e){e=e||{};for(var i=0;i<t.length;i++)Array.isArray(t[i])?ne(t[i],e):e[t[i].key]=t[i].fn;return e}var se=null;function re(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function oe(t,e){if(e){if(t._directInactive=!1,re(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var i=0;i<t.$children.length;i++)oe(t.$children[i]);ae(t,"activated")}}function ae(t,e){var i=t.$options[e];if(i)for(var n=0,s=i.length;n<s;n++)try{i[n].call(t)}catch(i){q(i,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var le=[],ue=[],ce={},he=!1,de=!1,pe=0;function fe(){var t,e;for(de=!0,le.sort(function(t,e){return t.id-e.id}),pe=0;pe<le.length;pe++)e=(t=le[pe]).id,ce[e]=null,t.run();var i=ue.slice(),n=le.slice();pe=le.length=ue.length=0,ce={},he=de=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,oe(t[e],!0)}(i),function(t){var e=t.length;for(;e--;){var i=t[e],n=i.vm;n._watcher===i&&n._isMounted&&ae(n,"updated")}}(n),st&&H.devtools&&st.emit("flush")}var ge=0,me=function(t,e,i,n){this.vm=t,t._watchers.push(this),n?(this.deep=!!n.deep,this.user=!!n.user,this.lazy=!!n.lazy,this.sync=!!n.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=i,this.id=++ge,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ot,this.newDepIds=new ot,this.expression="","function"==typeof e?this.getter=e:(this.getter=function(t){if(!z.test(t)){var e=t.split(".");return function(t){for(var i=0;i<e.length;i++){if(!t)return;t=t[e[i]]}return t}}}(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};me.prototype.get=function(){var t,e;t=this,ct.target&&ht.push(ct.target),ct.target=t;var i,n=this.vm;try{e=this.getter.call(n,n)}catch(t){if(!this.user)throw t;q(t,n,'getter for watcher "'+this.expression+'"')}finally{this.deep&&(i=e,ve.clear(),function t(e,i){var n,s,r=Array.isArray(e);if((r||o(e))&&Object.isExtensible(e)){if(e.__ob__){var a=e.__ob__.dep.id;if(i.has(a))return;i.add(a)}if(r)for(n=e.length;n--;)t(e[n],i);else for(s=Object.keys(e),n=s.length;n--;)t(e[s[n]],i)}}(i,ve)),ct.target=ht.pop(),this.cleanupDeps()}return e},me.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},me.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var i=this.depIds;this.depIds=this.newDepIds,this.newDepIds=i,this.newDepIds.clear(),i=this.deps,this.deps=this.newDeps,this.newDeps=i,this.newDeps.length=0},me.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){var e=t.id;if(null==ce[e]){if(ce[e]=!0,de){for(var i=le.length-1;i>pe&&le[i].id>t.id;)i--;le.splice(i+1,0,t)}else le.push(t);he||(he=!0,lt(fe))}}(this)},me.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||o(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){q(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},me.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},me.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},me.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}};var ve=new ot;var _e={enumerable:!0,configurable:!0,get:A,set:A};function ye(t,e,i){_e.get=function(){return this[e][i]},_e.set=function(t){this[e][i]=t},Object.defineProperty(t,i,_e)}function be(t){t._watchers=[];var e=t.$options;e.props&&function(t,e){var i=t.$options.propsData||{},n=t._props={},s=t.$options._propKeys=[],r=!t.$parent;gt.shouldConvert=r;var o=function(r){s.push(r);var o=Ot(r,e,i,t);bt(n,r,o),r in t||ye(t,"_props",r)};for(var a in e)o(a);gt.shouldConvert=!0}(t,e.props),e.methods&&function(t,e){t.$options.props;for(var i in e)t[i]=null==e[i]?A:k(e[i],t)}(t,e.methods),e.data?function(t){var e=t.$options.data;l(e=t._data="function"==typeof e?function(t,e){try{return t.call(e)}catch(t){return q(t,e,"data()"),{}}}(e,t):e||{})||(e={});var i=Object.keys(e),n=t.$options.props,s=(t.$options.methods,i.length);for(;s--;){var r=i[s];0,n&&v(n,r)||L(r)||ye(t,"_data",r)}yt(e,!0)}(t):yt(t._data={},!0),e.computed&&function(t,e){var i=t._computedWatchers=Object.create(null),n=nt();for(var s in e){var r=e[s],o="function"==typeof r?r:r.get;0,n||(i[s]=new me(t,o||A,A,we)),s in t||xe(t,s,r)}}(t,e.computed),e.watch&&e.watch!==tt&&function(t,e){for(var i in e){var n=e[i];if(Array.isArray(n))for(var s=0;s<n.length;s++)ke(t,i,n[s]);else ke(t,i,n)}}(t,e.watch)}var we={lazy:!0};function xe(t,e,i){var n=!nt();"function"==typeof i?(_e.get=n?Ce(e):i,_e.set=A):(_e.get=i.get?n&&!1!==i.cache?Ce(e):i.get:A,_e.set=i.set?i.set:A),Object.defineProperty(t,e,_e)}function Ce(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ct.target&&e.depend(),e.value}}function ke(t,e,i,n){return l(i)&&(n=i,i=i.handler),"string"==typeof i&&(i=t[i]),t.$watch(e,i,n)}function Te(t,e){if(t){for(var i=Object.create(null),n=at?Reflect.ownKeys(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}):Object.keys(t),s=0;s<n.length;s++){for(var r=n[s],o=t[r],a=e;a;){if(a._provided&&o in a._provided){i[r]=a._provided[o];break}a=a.$parent}0}return i}}function De(t,e){for(var i in e)t[b(i)]=e[i]}var Se={init:function(t,e,i,s){if(!t.componentInstance||t.componentInstance._isDestroyed)(t.componentInstance=function(t,e,i,s){var r=t.componentOptions,o={_isComponent:!0,parent:e,propsData:r.propsData,_componentTag:r.tag,_parentVnode:t,_parentListeners:r.listeners,_renderChildren:r.children,_parentElm:i||null,_refElm:s||null},a=t.data.inlineTemplate;n(a)&&(o.render=a.render,o.staticRenderFns=a.staticRenderFns);return new r.Ctor(o)}(t,se,i,s)).$mount(e?t.elm:void 0,e);else if(t.data.keepAlive){var r=t;Se.prepatch(r,r)}},prepatch:function(t,e){var i=e.componentOptions;!function(t,e,i,n,s){var r=!!(s||t.$options._renderChildren||n.data.scopedSlots||t.$scopedSlots!==R);if(t.$options._parentVnode=n,t.$vnode=n,t._vnode&&(t._vnode.parent=n),t.$options._renderChildren=s,t.$attrs=n.data&&n.data.attrs||R,t.$listeners=i||R,e&&t.$options.props){gt.shouldConvert=!1;for(var o=t._props,a=t.$options._propKeys||[],l=0;l<a.length;l++){var u=a[l];o[u]=Ot(u,t.$options.props,e,t)}gt.shouldConvert=!0,t.$options.propsData=e}if(i){var c=t.$options._parentListeners;t.$options._parentListeners=i,te(t,i,c)}r&&(t.$slots=ee(s,n.context),t.$forceUpdate())}(e.componentInstance=t.componentInstance,i.propsData,i.listeners,e,i.children)},insert:function(t){var e,i=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,ae(n,"mounted")),t.data.keepAlive&&(i._isMounted?((e=n)._inactive=!1,ue.push(e)):oe(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?function t(e,i){if(!(i&&(e._directInactive=!0,re(e))||e._inactive)){e._inactive=!0;for(var n=0;n<e.$children.length;n++)t(e.$children[n]);ae(e,"deactivated")}}(e,!0):e.$destroy())}},Ae=Object.keys(Se);function Ee(t,e,r,a,l){if(!i(t)){var u=r.$options._base;if(o(t)&&(t=u.extend(t)),"function"==typeof t){var c;if(i(t.cid)&&void 0===(t=function(t,e,r){if(s(t.error)&&n(t.errorComp))return t.errorComp;if(n(t.resolved))return t.resolved;if(s(t.loading)&&n(t.loadingComp))return t.loadingComp;if(!n(t.contexts)){var a=t.contexts=[r],l=!0,u=function(){for(var t=0,e=a.length;t<e;t++)a[t].$forceUpdate()},c=P(function(i){t.resolved=Xt(i,e),l||u()}),h=P(function(e){n(t.errorComp)&&(t.error=!0,u())}),d=t(c,h);return o(d)&&("function"==typeof d.then?i(t.resolved)&&d.then(c,h):n(d.component)&&"function"==typeof d.component.then&&(d.component.then(c,h),n(d.error)&&(t.errorComp=Xt(d.error,e)),n(d.loading)&&(t.loadingComp=Xt(d.loading,e),0===d.delay?t.loading=!0:setTimeout(function(){i(t.resolved)&&i(t.error)&&(t.loading=!0,u())},d.delay||200)),n(d.timeout)&&setTimeout(function(){i(t.resolved)&&h(null)},d.timeout))),l=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(r)}(c=t,u,r)))return function(t,e,i,n,s){var r=jt();return r.asyncFactory=t,r.asyncMeta={data:e,context:i,children:n,tag:s},r}(c,e,r,a,l);e=e||{},Be(t),n(e.model)&&function(t,e){var i=t.model&&t.model.prop||"value",s=t.model&&t.model.event||"input";(e.props||(e.props={}))[i]=e.model.value;var r=e.on||(e.on={});n(r[s])?r[s]=[e.model.callback].concat(r[s]):r[s]=e.model.callback}(t.options,e);var h=function(t,e,s){var r=e.options.props;if(!i(r)){var o={},a=t.attrs,l=t.props;if(n(a)||n(l))for(var u in r){var c=C(u);Yt(o,l,u,c,!0)||Yt(o,a,u,c,!1)}return o}}(e,t);if(s(t.options.functional))return function(t,e,i,s,r){var o={},a=t.options.props;if(n(a))for(var l in a)o[l]=Ot(l,a,e||R);else n(i.attrs)&&De(o,i.attrs),n(i.props)&&De(o,i.props);var u=Object.create(s),c=t.options.render.call(null,function(t,e,i,n){return Pe(u,t,e,i,n,!0)},{data:i,props:o,children:r,parent:s,listeners:i.on||R,injections:Te(t.options.inject,s),slots:function(){return ee(r,s)}});return c instanceof Nt&&(c.functionalContext=s,c.functionalOptions=t.options,i.slot&&((c.data||(c.data={})).slot=i.slot)),c}(t,h,e,r,a);var d=e.on;if(e.on=e.nativeOn,s(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}!function(t){t.hook||(t.hook={});for(var e=0;e<Ae.length;e++){var i=Ae[e],n=t.hook[i],s=Se[i];t.hook[i]=n?Ie(s,n):s}}(e);var f=t.options.name||l;return new Nt("vue-component-"+t.cid+(f?"-"+f:""),e,void 0,void 0,void 0,r,{Ctor:t,propsData:h,listeners:d,tag:l,children:a},c)}}}function Ie(t,e){return function(i,n,s,r){t(i,n,s,r),e(i,n,s,r)}}var Oe=1,$e=2;function Pe(t,e,o,a,l,u){return(Array.isArray(o)||r(o))&&(l=a,a=o,o=void 0),s(u)&&(l=$e),function(t,e,s,r,o){if(n(s)&&n(s.__ob__))return jt();n(s)&&n(s.is)&&(e=s.is);if(!e)return jt();0;Array.isArray(r)&&"function"==typeof r[0]&&((s=s||{}).scopedSlots={default:r[0]},r.length=0);o===$e?r=Vt(r):o===Oe&&(r=function(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}(r));var a,l;if("string"==typeof e){var u;l=t.$vnode&&t.$vnode.ns||H.getTagNamespace(e),a=H.isReservedTag(e)?new Nt(H.parsePlatformTagName(e),s,r,void 0,void 0,t):n(u=It(t.$options,"components",e))?Ee(u,s,t,r,e):new Nt(e,s,r,void 0,void 0,t)}else a=Ee(e,s,t,r);return n(a)?(l&&function t(e,s){e.ns=s;if("foreignObject"===e.tag)return;if(n(e.children))for(var r=0,o=e.children.length;r<o;r++){var a=e.children[r];n(a.tag)&&i(a.ns)&&t(a,s)}}(a,l),a):jt()}(t,e,o,a,l)}function Ne(t,e){var i,s,r,a,l;if(Array.isArray(t)||"string"==typeof t)for(i=new Array(t.length),s=0,r=t.length;s<r;s++)i[s]=e(t[s],s);else if("number"==typeof t)for(i=new Array(t),s=0;s<t;s++)i[s]=e(s+1,s);else if(o(t))for(a=Object.keys(t),i=new Array(a.length),s=0,r=a.length;s<r;s++)l=a[s],i[s]=e(t[l],l,s);return n(i)&&(i._isVList=!0),i}function Me(t,e,i,n){var s=this.$scopedSlots[t];if(s)return i=i||{},n&&(i=D(D({},n),i)),s(i)||e;var r=this.$slots[t];return r||e}function je(t){return It(this.$options,"filters",t)||I}function He(t,e,i){var n=H.keyCodes[e]||i;return Array.isArray(n)?-1===n.indexOf(t):n!==t}function Re(t,e,i,n,s){if(i)if(o(i)){var r;Array.isArray(i)&&(i=S(i));var a=function(o){if("class"===o||"style"===o||f(o))r=t;else{var a=t.attrs&&t.attrs.type;r=n||H.mustUseProp(e,a,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}o in r||(r[o]=i[o],s&&((t.on||(t.on={}))["update:"+o]=function(t){i[o]=t}))};for(var l in i)a(l)}else;return t}function Le(t,e){var i=this._staticTrees[t];return i&&!e?Array.isArray(i)?Lt(i):Rt(i):(ze(i=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),"__static__"+t,!1),i)}function Fe(t,e,i){return ze(t,"__once__"+e+(i?"_"+i:""),!0),t}function ze(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)t[n]&&"string"!=typeof t[n]&&We(t[n],e+"_"+n,i);else We(t,e,i)}function We(t,e,i){t.isStatic=!0,t.key=e,t.isOnce=i}function qe(t,e){if(e)if(l(e)){var i=t.on=t.on?D({},t.on):{};for(var n in e){var s=i[n],r=e[n];i[n]=s?[].concat(r,s):r}}else;return t}var Ue=0;function Be(t){var e=t.options;if(t.super){var i=Be(t.super);if(i!==t.superOptions){t.superOptions=i;var n=function(t){var e,i=t.options,n=t.extendOptions,s=t.sealedOptions;for(var r in i)i[r]!==s[r]&&(e||(e={}),e[r]=Ye(i[r],n[r],s[r]));return e}(t);n&&D(t.extendOptions,n),(e=t.options=Et(i,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function Ye(t,e,i){if(Array.isArray(t)){var n=[];i=Array.isArray(i)?i:[i],e=Array.isArray(e)?e:[e];for(var s=0;s<t.length;s++)(e.indexOf(t[s])>=0||i.indexOf(t[s])<0)&&n.push(t[s]);return n}return t}function Ve(t){this._init(t)}function Ke(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var i=this,n=i.cid,s=t._Ctor||(t._Ctor={});if(s[n])return s[n];var r=t.name||i.options.name;var o=function(t){this._init(t)};return(o.prototype=Object.create(i.prototype)).constructor=o,o.cid=e++,o.options=Et(i.options,t),o.super=i,o.options.props&&function(t){var e=t.options.props;for(var i in e)ye(t.prototype,"_props",i)}(o),o.options.computed&&function(t){var e=t.options.computed;for(var i in e)xe(t.prototype,i,e[i])}(o),o.extend=i.extend,o.mixin=i.mixin,o.use=i.use,M.forEach(function(t){o[t]=i[t]}),r&&(o.options.components[r]=o),o.superOptions=i.options,o.extendOptions=t,o.sealedOptions=D({},o.options),s[n]=o,o}}Ve.prototype._init=function(t){var e=this;e._uid=Ue++,e._isVue=!0,t&&t._isComponent?function(t,e){var i=t.$options=Object.create(t.constructor.options);i.parent=e.parent,i.propsData=e.propsData,i._parentVnode=e._parentVnode,i._parentListeners=e._parentListeners,i._renderChildren=e._renderChildren,i._componentTag=e._componentTag,i._parentElm=e._parentElm,i._refElm=e._refElm,e.render&&(i.render=e.render,i.staticRenderFns=e.staticRenderFns)}(e,t):e.$options=Et(Be(e.constructor),t||{},e),e._renderProxy=e,e._self=e,function(t){var e=t.$options,i=e.parent;if(i&&!e.abstract){for(;i.$options.abstract&&i.$parent;)i=i.$parent;i.$children.push(t)}t.$parent=i,t.$root=i?i.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(e),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&te(t,e)}(e),function(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,i=e&&e.context;t.$slots=ee(t.$options._renderChildren,i),t.$scopedSlots=R,t._c=function(e,i,n,s){return Pe(t,e,i,n,s,!1)},t.$createElement=function(e,i,n,s){return Pe(t,e,i,n,s,!0)};var n=e&&e.data;bt(t,"$attrs",n&&n.attrs||R,0,!0),bt(t,"$listeners",t.$options._parentListeners||R,0,!0)}(e),ae(e,"beforeCreate"),function(t){var e=Te(t.$options.inject,t);e&&(gt.shouldConvert=!1,Object.keys(e).forEach(function(i){bt(t,i,e[i])}),gt.shouldConvert=!0)}(e),be(e),function(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}(e),ae(e,"created"),e.$options.el&&e.$mount(e.$options.el)},function(t){var e={get:function(){return this._data}},i={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",i),t.prototype.$set=wt,t.prototype.$delete=xt,t.prototype.$watch=function(t,e,i){if(l(e))return ke(this,t,e,i);(i=i||{}).user=!0;var n=new me(this,t,e,i);return i.immediate&&e.call(this,n.value),function(){n.teardown()}}}(Ve),function(t){var e=/^hook:/;t.prototype.$on=function(t,i){if(Array.isArray(t))for(var n=0,s=t.length;n<s;n++)this.$on(t[n],i);else(this._events[t]||(this._events[t]=[])).push(i),e.test(t)&&(this._hasHookEvent=!0);return this},t.prototype.$once=function(t,e){var i=this;function n(){i.$off(t,n),e.apply(i,arguments)}return n.fn=e,i.$on(t,n),i},t.prototype.$off=function(t,e){var i=this;if(!arguments.length)return i._events=Object.create(null),i;if(Array.isArray(t)){for(var n=0,s=t.length;n<s;n++)this.$off(t[n],e);return i}var r=i._events[t];if(!r)return i;if(1===arguments.length)return i._events[t]=null,i;if(e)for(var o,a=r.length;a--;)if((o=r[a])===e||o.fn===e){r.splice(a,1);break}return i},t.prototype.$emit=function(t){var e=this,i=e._events[t];if(i){i=i.length>1?T(i):i;for(var n=T(arguments,1),s=0,r=i.length;s<r;s++)try{i[s].apply(e,n)}catch(i){q(i,e,'event handler for "'+t+'"')}}return e}}(Ve),function(t){t.prototype._update=function(t,e){var i=this;i._isMounted&&ae(i,"beforeUpdate");var n=i.$el,s=i._vnode,r=se;se=i,i._vnode=t,s?i.$el=i.__patch__(s,t):(i.$el=i.__patch__(i.$el,t,e,!1,i.$options._parentElm,i.$options._refElm),i.$options._parentElm=i.$options._refElm=null),se=r,n&&(n.__vue__=null),i.$el&&(i.$el.__vue__=i),i.$vnode&&i.$parent&&i.$vnode===i.$parent._vnode&&(i.$parent.$el=i.$el)},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){ae(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();for(var i=t._watchers.length;i--;)t._watchers[i].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),ae(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}(Ve),function(t){t.prototype.$nextTick=function(t){return lt(t,this)},t.prototype._render=function(){var t,e=this,i=e.$options,n=i.render,s=i.staticRenderFns,r=i._parentVnode;if(e._isMounted)for(var o in e.$slots){var a=e.$slots[o];a._rendered&&(e.$slots[o]=Lt(a,!0))}e.$scopedSlots=r&&r.data.scopedSlots||R,s&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=r;try{t=n.call(e._renderProxy,e.$createElement)}catch(i){q(i,e,"render function"),t=e._vnode}return t instanceof Nt||(t=jt()),t.parent=r,t},t.prototype._o=Fe,t.prototype._n=h,t.prototype._s=c,t.prototype._l=Ne,t.prototype._t=Me,t.prototype._q=O,t.prototype._i=$,t.prototype._m=Le,t.prototype._f=je,t.prototype._k=He,t.prototype._b=Re,t.prototype._v=Ht,t.prototype._e=jt,t.prototype._u=ne,t.prototype._g=qe}(Ve);var Xe=[String,RegExp,Array];function Ge(t){return t&&(t.Ctor.options.name||t.tag)}function Ze(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:(i=t,"[object RegExp]"===a.call(i)&&t.test(e));var i}function Je(t,e,i){for(var n in t){var s=t[n];if(s){var r=Ge(s.componentOptions);r&&!i(r)&&(s!==e&&Qe(s),t[n]=null)}}}function Qe(t){t&&t.componentInstance.$destroy()}var ti={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Xe,exclude:Xe},created:function(){this.cache=Object.create(null)},destroyed:function(){for(var t in this.cache)Qe(this.cache[t])},watch:{include:function(t){Je(this.cache,this._vnode,function(e){return Ze(t,e)})},exclude:function(t){Je(this.cache,this._vnode,function(e){return!Ze(t,e)})}},render:function(){var t=Zt(this.$slots.default),e=t&&t.componentOptions;if(e){var i=Ge(e);if(i&&(this.include&&!Ze(this.include,i)||this.exclude&&Ze(this.exclude,i)))return t;var n=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[n]?t.componentInstance=this.cache[n].componentInstance:this.cache[n]=t,t.data.keepAlive=!0}return t}}};!function(t){var e={get:function(){return H}};Object.defineProperty(t,"config",e),t.util={warn:W,extend:D,mergeOptions:Et,defineReactive:bt},t.set=wt,t.delete=xt,t.nextTick=lt,t.options=Object.create(null),M.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,D(t.options.components,ti),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var i=T(arguments,1);return i.unshift(this),"function"==typeof t.install?t.install.apply(t,i):"function"==typeof t&&t.apply(null,i),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=Et(this.options,t),this}}(t),Ke(t),function(t){M.forEach(function(e){t[e]=function(t,i){return i?("component"===e&&l(i)&&(i.name=i.name||t,i=this.options._base.extend(i)),"directive"===e&&"function"==typeof i&&(i={bind:i,update:i}),this.options[e+"s"][t]=i,i):this.options[e+"s"][t]}})}(t)}(Ve),Object.defineProperty(Ve.prototype,"$isServer",{get:nt}),Object.defineProperty(Ve.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Ve.version="2.4.4";var ei=d("style,class"),ii=d("input,textarea,option,select,progress"),ni=function(t,e,i){return"value"===i&&ii(t)&&"button"!==e||"selected"===i&&"option"===t||"checked"===i&&"input"===t||"muted"===i&&"video"===t},si=d("contenteditable,draggable,spellcheck"),ri=d("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),oi="http://www.w3.org/1999/xlink",ai=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},li=function(t){return ai(t)?t.slice(6,t.length):""},ui=function(t){return null==t||!1===t};function ci(t){for(var e=t.data,i=t,s=t;n(s.componentInstance);)(s=s.componentInstance._vnode).data&&(e=hi(s.data,e));for(;n(i=i.parent);)i.data&&(e=hi(e,i.data));return function(t,e){if(n(t)||n(e))return di(t,pi(e));return""}(e.staticClass,e.class)}function hi(t,e){return{staticClass:di(t.staticClass,e.staticClass),class:n(t.class)?[t.class,e.class]:e.class}}function di(t,e){return t?e?t+" "+e:t:e||""}function pi(t){return Array.isArray(t)?function(t){for(var e,i="",s=0,r=t.length;s<r;s++)n(e=pi(t[s]))&&""!==e&&(i&&(i+=" "),i+=e);return i}(t):o(t)?function(t){var e="";for(var i in t)t[i]&&(e&&(e+=" "),e+=i);return e}(t):"string"==typeof t?t:""}var fi={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},gi=d("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),mi=d("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),vi=function(t){return gi(t)||mi(t)};function _i(t){return mi(t)?"svg":"math"===t?"math":void 0}var yi=Object.create(null);var bi=d("text,number,password,search,email,tel,url");function wi(t){if("string"==typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}var xi=Object.freeze({createElement:function(t,e){var i=document.createElement(t);return"select"!==t?i:(e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&i.setAttribute("multiple","multiple"),i)},createElementNS:function(t,e){return document.createElementNS(fi[t],e)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,i){t.insertBefore(e,i)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,e){t.appendChild(e)},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},setAttribute:function(t,e,i){t.setAttribute(e,i)}}),Ci={create:function(t,e){ki(e)},update:function(t,e){t.data.ref!==e.data.ref&&(ki(t,!0),ki(e))},destroy:function(t){ki(t,!0)}};function ki(t,e){var i=t.data.ref;if(i){var n=t.context,s=t.componentInstance||t.elm,r=n.$refs;e?Array.isArray(r[i])?g(r[i],s):r[i]===s&&(r[i]=void 0):t.data.refInFor?Array.isArray(r[i])?r[i].indexOf(s)<0&&r[i].push(s):r[i]=[s]:r[i]=s}}var Ti=new Nt("",{},[]),Di=["create","activate","update","remove","destroy"];function Si(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&n(t.data)===n(e.data)&&function(t,e){if("input"!==t.tag)return!0;var i,s=n(i=t.data)&&n(i=i.attrs)&&i.type,r=n(i=e.data)&&n(i=i.attrs)&&i.type;return s===r||bi(s)&&bi(r)}(t,e)||s(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&i(e.asyncFactory.error))}function Ai(t,e,i){var s,r,o={};for(s=e;s<=i;++s)n(r=t[s].key)&&(o[r]=s);return o}var Ei={create:Ii,update:Ii,destroy:function(t){Ii(t,Ti)}};function Ii(t,e){(t.data.directives||e.data.directives)&&function(t,e){var i,n,s,r=t===Ti,o=e===Ti,a=$i(t.data.directives,t.context),l=$i(e.data.directives,e.context),u=[],c=[];for(i in l)n=a[i],s=l[i],n?(s.oldValue=n.value,Ni(s,"update",e,t),s.def&&s.def.componentUpdated&&c.push(s)):(Ni(s,"bind",e,t),s.def&&s.def.inserted&&u.push(s));if(u.length){var h=function(){for(var i=0;i<u.length;i++)Ni(u[i],"inserted",e,t)};r?Bt(e.data.hook||(e.data.hook={}),"insert",h):h()}c.length&&Bt(e.data.hook||(e.data.hook={}),"postpatch",function(){for(var i=0;i<c.length;i++)Ni(c[i],"componentUpdated",e,t)});if(!r)for(i in a)l[i]||Ni(a[i],"unbind",t,t,o)}(t,e)}var Oi=Object.create(null);function $i(t,e){var i,n,s=Object.create(null);if(!t)return s;for(i=0;i<t.length;i++)(n=t[i]).modifiers||(n.modifiers=Oi),s[Pi(n)]=n,n.def=It(e.$options,"directives",n.name);return s}function Pi(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Ni(t,e,i,n,s){var r=t.def&&t.def[e];if(r)try{r(i.elm,t,i,n,s)}catch(n){q(n,i.context,"directive "+t.name+" "+e+" hook")}}var Mi=[Ci,Ei];function ji(t,e){var s=e.componentOptions;if(!(n(s)&&!1===s.Ctor.options.inheritAttrs||i(t.data.attrs)&&i(e.data.attrs))){var r,o,a=e.elm,l=t.data.attrs||{},u=e.data.attrs||{};for(r in n(u.__ob__)&&(u=e.data.attrs=D({},u)),u)o=u[r],l[r]!==o&&Hi(a,r,o);for(r in X&&u.value!==l.value&&Hi(a,"value",u.value),l)i(u[r])&&(ai(r)?a.removeAttributeNS(oi,li(r)):si(r)||a.removeAttribute(r))}}function Hi(t,e,i){ri(e)?ui(i)?t.removeAttribute(e):(i="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,i)):si(e)?t.setAttribute(e,ui(i)||"false"===i?"false":"true"):ai(e)?ui(i)?t.removeAttributeNS(oi,li(e)):t.setAttributeNS(oi,e,i):ui(i)?t.removeAttribute(e):t.setAttribute(e,i)}var Ri={create:ji,update:ji};function Li(t,e){var s=e.elm,r=e.data,o=t.data;if(!(i(r.staticClass)&&i(r.class)&&(i(o)||i(o.staticClass)&&i(o.class)))){var a=ci(e),l=s._transitionClasses;n(l)&&(a=di(a,pi(l))),a!==s._prevClass&&(s.setAttribute("class",a),s._prevClass=a)}}var Fi,zi,Wi,qi,Ui,Bi,Yi={create:Li,update:Li},Vi=/[\w).+\-_$\]]/;function Ki(t){var e,i,n,s,r,o=!1,a=!1,l=!1,u=!1,c=0,h=0,d=0,p=0;for(n=0;n<t.length;n++)if(i=e,e=t.charCodeAt(n),o)39===e&&92!==i&&(o=!1);else if(a)34===e&&92!==i&&(a=!1);else if(l)96===e&&92!==i&&(l=!1);else if(u)47===e&&92!==i&&(u=!1);else if(124!==e||124===t.charCodeAt(n+1)||124===t.charCodeAt(n-1)||c||h||d){switch(e){case 34:a=!0;break;case 39:o=!0;break;case 96:l=!0;break;case 40:d++;break;case 41:d--;break;case 91:h++;break;case 93:h--;break;case 123:c++;break;case 125:c--}if(47===e){for(var f=n-1,g=void 0;f>=0&&" "===(g=t.charAt(f));f--);g&&Vi.test(g)||(u=!0)}}else void 0===s?(p=n+1,s=t.slice(0,n).trim()):m();function m(){(r||(r=[])).push(t.slice(p,n).trim()),p=n+1}if(void 0===s?s=t.slice(0,n).trim():0!==p&&m(),r)for(n=0;n<r.length;n++)s=Xi(s,r[n]);return s}function Xi(t,e){var i=e.indexOf("(");return i<0?'_f("'+e+'")('+t+")":'_f("'+e.slice(0,i)+'")('+t+","+e.slice(i+1)}function Gi(t){console.error("[Vue compiler]: "+t)}function Zi(t,e){return t?t.map(function(t){return t[e]}).filter(function(t){return t}):[]}function Ji(t,e,i){(t.props||(t.props=[])).push({name:e,value:i})}function Qi(t,e,i){(t.attrs||(t.attrs=[])).push({name:e,value:i})}function tn(t,e,i,n,s,r){(t.directives||(t.directives=[])).push({name:e,rawName:i,value:n,arg:s,modifiers:r})}function en(t,e,i,n,s,r){var o;n&&n.capture&&(delete n.capture,e="!"+e),n&&n.once&&(delete n.once,e="~"+e),n&&n.passive&&(delete n.passive,e="&"+e),n&&n.native?(delete n.native,o=t.nativeEvents||(t.nativeEvents={})):o=t.events||(t.events={});var a={value:i,modifiers:n},l=o[e];Array.isArray(l)?s?l.unshift(a):l.push(a):o[e]=l?s?[a,l]:[l,a]:a}function nn(t,e,i){var n=sn(t,":"+e)||sn(t,"v-bind:"+e);if(null!=n)return Ki(n);if(!1!==i){var s=sn(t,e);if(null!=s)return JSON.stringify(s)}}function sn(t,e){var i;if(null!=(i=t.attrsMap[e]))for(var n=t.attrsList,s=0,r=n.length;s<r;s++)if(n[s].name===e){n.splice(s,1);break}return i}function rn(t,e,i){var n=i||{},s=n.number,r="$$v";n.trim&&(r="(typeof $$v === 'string'? $$v.trim(): $$v)"),s&&(r="_n("+r+")");var o=on(e,r);t.model={value:"("+e+")",expression:'"'+e+'"',callback:"function ($$v) {"+o+"}"}}function on(t,e){var i=function(t){if(Fi=(zi=t).length,qi=Ui=Bi=0,t.indexOf("[")<0||t.lastIndexOf("]")<Fi-1)return{exp:t,idx:null};for(;!ln();)un(Wi=an())?hn(Wi):91===Wi&&cn(Wi);return{exp:t.substring(0,Ui),idx:t.substring(Ui+1,Bi)}}(t);return null===i.idx?t+"="+e:"$set("+i.exp+", "+i.idx+", "+e+")"}function an(){return zi.charCodeAt(++qi)}function ln(){return qi>=Fi}function un(t){return 34===t||39===t}function cn(t){var e=1;for(Ui=qi;!ln();)if(un(t=an()))hn(t);else if(91===t&&e++,93===t&&e--,0===e){Bi=qi;break}}function hn(t){for(var e=t;!ln()&&(t=an())!==e;);}var dn,pn="__r",fn="__c";function gn(t,e,i,n,s){if(i){var r=e,o=dn;e=function(i){null!==(1===arguments.length?r(i):r.apply(null,arguments))&&mn(t,e,n,o)}}dn.addEventListener(t,e,et?{capture:n,passive:s}:n)}function mn(t,e,i,n){(n||dn).removeEventListener(t,e,i)}function vn(t,e){if(!i(t.data.on)||!i(e.data.on)){var s=e.data.on||{},r=t.data.on||{};dn=e.elm,function(t){var e;n(t[pn])&&(t[e=K?"change":"input"]=[].concat(t[pn],t[e]||[]),delete t[pn]),n(t[fn])&&(t[e=Q?"click":"change"]=[].concat(t[fn],t[e]||[]),delete t[fn])}(s),Ut(s,r,gn,mn,e.context)}}var _n={create:vn,update:vn};function yn(t,e){if(!i(t.data.domProps)||!i(e.data.domProps)){var s,r,o=e.elm,a=t.data.domProps||{},l=e.data.domProps||{};for(s in n(l.__ob__)&&(l=e.data.domProps=D({},l)),a)i(l[s])&&(o[s]="");for(s in l)if(r=l[s],"textContent"!==s&&"innerHTML"!==s||(e.children&&(e.children.length=0),r!==a[s]))if("value"===s){o._value=r;var u=i(r)?"":String(r);bn(o,e,u)&&(o.value=u)}else o[s]=r}}function bn(t,e,i){return!t.composing&&("option"===e.tag||function(t,e){var i=!0;try{i=document.activeElement!==t}catch(t){}return i&&t.value!==e}(t,i)||function(t,e){var i=t.value,s=t._vModifiers;if(n(s)&&s.number)return h(i)!==h(e);if(n(s)&&s.trim)return i.trim()!==e.trim();return i!==e}(t,i))}var wn={create:yn,update:yn},xn=_(function(t){var e={},i=/:(.+)/;return t.split(/;(?![^(]*\))/g).forEach(function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Cn(t){var e=kn(t.style);return t.staticStyle?D(t.staticStyle,e):e}function kn(t){return Array.isArray(t)?S(t):"string"==typeof t?xn(t):t}var Tn,Dn=/^--/,Sn=/\s*!important$/,An=function(t,e,i){if(Dn.test(e))t.style.setProperty(e,i);else if(Sn.test(i))t.style.setProperty(e,i.replace(Sn,""),"important");else{var n=In(e);if(Array.isArray(i))for(var s=0,r=i.length;s<r;s++)t.style[n]=i[s];else t.style[n]=i}},En=["Webkit","Moz","ms"],In=_(function(t){if(Tn=Tn||document.createElement("div").style,"filter"!==(t=b(t))&&t in Tn)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<En.length;i++){var n=En[i]+e;if(n in Tn)return n}});function On(t,e){var s=e.data,r=t.data;if(!(i(s.staticStyle)&&i(s.style)&&i(r.staticStyle)&&i(r.style))){var o,a,l=e.elm,u=r.staticStyle,c=r.normalizedStyle||r.style||{},h=u||c,d=kn(e.data.style)||{};e.data.normalizedStyle=n(d.__ob__)?D({},d):d;var p=function(t,e){var i,n={};if(e)for(var s=t;s.componentInstance;)(s=s.componentInstance._vnode).data&&(i=Cn(s.data))&&D(n,i);(i=Cn(t.data))&&D(n,i);for(var r=t;r=r.parent;)r.data&&(i=Cn(r.data))&&D(n,i);return n}(e,!0);for(a in h)i(p[a])&&An(l,a,"");for(a in p)(o=p[a])!==h[a]&&An(l,a,null==o?"":o)}}var $n={create:On,update:On};function Pn(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var i=" "+(t.getAttribute("class")||"")+" ";i.indexOf(" "+e+" ")<0&&t.setAttribute("class",(i+e).trim())}}function Nn(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var i=" "+(t.getAttribute("class")||"")+" ",n=" "+e+" ";i.indexOf(n)>=0;)i=i.replace(n," ");(i=i.trim())?t.setAttribute("class",i):t.removeAttribute("class")}}function Mn(t){if(t){if("object"==typeof t){var e={};return!1!==t.css&&D(e,jn(t.name||"v")),D(e,t),e}return"string"==typeof t?jn(t):void 0}}var jn=_(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),Hn=Y&&!X,Rn="transition",Ln="animation",Fn="transition",zn="transitionend",Wn="animation",qn="animationend";Hn&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Fn="WebkitTransition",zn="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Wn="WebkitAnimation",qn="webkitAnimationEnd"));var Un=Y&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout;function Bn(t){Un(function(){Un(t)})}function Yn(t,e){var i=t._transitionClasses||(t._transitionClasses=[]);i.indexOf(e)<0&&(i.push(e),Pn(t,e))}function Vn(t,e){t._transitionClasses&&g(t._transitionClasses,e),Nn(t,e)}function Kn(t,e,i){var n=Gn(t,e),s=n.type,r=n.timeout,o=n.propCount;if(!s)return i();var a=s===Rn?zn:qn,l=0,u=function(){t.removeEventListener(a,c),i()},c=function(e){e.target===t&&++l>=o&&u()};setTimeout(function(){l<o&&u()},r+1),t.addEventListener(a,c)}var Xn=/\b(transform|all)(,|$)/;function Gn(t,e){var i,n=window.getComputedStyle(t),s=n[Fn+"Delay"].split(", "),r=n[Fn+"Duration"].split(", "),o=Zn(s,r),a=n[Wn+"Delay"].split(", "),l=n[Wn+"Duration"].split(", "),u=Zn(a,l),c=0,h=0;return e===Rn?o>0&&(i=Rn,c=o,h=r.length):e===Ln?u>0&&(i=Ln,c=u,h=l.length):h=(i=(c=Math.max(o,u))>0?o>u?Rn:Ln:null)?i===Rn?r.length:l.length:0,{type:i,timeout:c,propCount:h,hasTransform:i===Rn&&Xn.test(n[Fn+"Property"])}}function Zn(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(e,i){return Jn(e)+Jn(t[i])}))}function Jn(t){return 1e3*Number(t.slice(0,-1))}function Qn(t,e){var s=t.elm;n(s._leaveCb)&&(s._leaveCb.cancelled=!0,s._leaveCb());var r=Mn(t.data.transition);if(!i(r)&&!n(s._enterCb)&&1===s.nodeType){for(var a=r.css,l=r.type,u=r.enterClass,c=r.enterToClass,d=r.enterActiveClass,p=r.appearClass,f=r.appearToClass,g=r.appearActiveClass,m=r.beforeEnter,v=r.enter,_=r.afterEnter,y=r.enterCancelled,b=r.beforeAppear,w=r.appear,x=r.afterAppear,C=r.appearCancelled,k=r.duration,T=se,D=se.$vnode;D&&D.parent;)T=(D=D.parent).context;var S=!T._isMounted||!t.isRootInsert;if(!S||w||""===w){var A=S&&p?p:u,E=S&&g?g:d,I=S&&f?f:c,O=S&&b||m,$=S&&"function"==typeof w?w:v,N=S&&x||_,M=S&&C||y,j=h(o(k)?k.enter:k);0;var H=!1!==a&&!X,R=is($),L=s._enterCb=P(function(){H&&(Vn(s,I),Vn(s,E)),L.cancelled?(H&&Vn(s,A),M&&M(s)):N&&N(s),s._enterCb=null});t.data.show||Bt(t.data.hook||(t.data.hook={}),"insert",function(){var e=s.parentNode,i=e&&e._pending&&e._pending[t.key];i&&i.tag===t.tag&&i.elm._leaveCb&&i.elm._leaveCb(),$&&$(s,L)}),O&&O(s),H&&(Yn(s,A),Yn(s,E),Bn(function(){Yn(s,I),Vn(s,A),L.cancelled||R||(es(j)?setTimeout(L,j):Kn(s,l,L))})),t.data.show&&(e&&e(),$&&$(s,L)),H||R||L()}}}function ts(t,e){var s=t.elm;n(s._enterCb)&&(s._enterCb.cancelled=!0,s._enterCb());var r=Mn(t.data.transition);if(i(r))return e();if(!n(s._leaveCb)&&1===s.nodeType){var a=r.css,l=r.type,u=r.leaveClass,c=r.leaveToClass,d=r.leaveActiveClass,p=r.beforeLeave,f=r.leave,g=r.afterLeave,m=r.leaveCancelled,v=r.delayLeave,_=r.duration,y=!1!==a&&!X,b=is(f),w=h(o(_)?_.leave:_);0;var x=s._leaveCb=P(function(){s.parentNode&&s.parentNode._pending&&(s.parentNode._pending[t.key]=null),y&&(Vn(s,c),Vn(s,d)),x.cancelled?(y&&Vn(s,u),m&&m(s)):(e(),g&&g(s)),s._leaveCb=null});v?v(C):C()}function C(){x.cancelled||(t.data.show||((s.parentNode._pending||(s.parentNode._pending={}))[t.key]=t),p&&p(s),y&&(Yn(s,u),Yn(s,d),Bn(function(){Yn(s,c),Vn(s,u),x.cancelled||b||(es(w)?setTimeout(x,w):Kn(s,l,x))})),f&&f(s,x),y||b||x())}}function es(t){return"number"==typeof t&&!isNaN(t)}function is(t){if(i(t))return!1;var e=t.fns;return n(e)?is(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function ns(t,e){!0!==e.data.show&&Qn(e)}var ss=function(t){var e,o,a={},l=t.modules,u=t.nodeOps;for(e=0;e<Di.length;++e)for(a[Di[e]]=[],o=0;o<l.length;++o)n(l[o][Di[e]])&&a[Di[e]].push(l[o][Di[e]]);function c(t){var e=u.parentNode(t);n(e)&&u.removeChild(e,t)}function h(t,e,i,r,o){if(t.isRootInsert=!o,!function(t,e,i,r){var o=t.data;if(n(o)){var l=n(t.componentInstance)&&o.keepAlive;if(n(o=o.hook)&&n(o=o.init)&&o(t,!1,i,r),n(t.componentInstance))return p(t,e),s(l)&&function(t,e,i,s){for(var r,o=t;o.componentInstance;)if(o=o.componentInstance._vnode,n(r=o.data)&&n(r=r.transition)){for(r=0;r<a.activate.length;++r)a.activate[r](Ti,o);e.push(o);break}f(i,t.elm,s)}(t,e,i,r),!0}}(t,e,i,r)){var l=t.data,c=t.children,h=t.tag;n(h)?(t.elm=t.ns?u.createElementNS(t.ns,h):u.createElement(h,t),_(t),g(t,c,e),n(l)&&v(t,e),f(i,t.elm,r)):s(t.isComment)?(t.elm=u.createComment(t.text),f(i,t.elm,r)):(t.elm=u.createTextNode(t.text),f(i,t.elm,r))}}function p(t,e){n(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,m(t)?(v(t,e),_(t)):(ki(t),e.push(t))}function f(t,e,i){n(t)&&(n(i)?i.parentNode===t&&u.insertBefore(t,e,i):u.appendChild(t,e))}function g(t,e,i){if(Array.isArray(e))for(var n=0;n<e.length;++n)h(e[n],i,t.elm,null,!0);else r(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function m(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return n(t.tag)}function v(t,i){for(var s=0;s<a.create.length;++s)a.create[s](Ti,t);n(e=t.data.hook)&&(n(e.create)&&e.create(Ti,t),n(e.insert)&&i.push(t))}function _(t){for(var e,i=t;i;)n(e=i.context)&&n(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),i=i.parent;n(e=se)&&e!==t.context&&n(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function y(t,e,i,n,s,r){for(;n<=s;++n)h(i[n],r,t,e)}function b(t){var e,i,s=t.data;if(n(s))for(n(e=s.hook)&&n(e=e.destroy)&&e(t),e=0;e<a.destroy.length;++e)a.destroy[e](t);if(n(e=t.children))for(i=0;i<t.children.length;++i)b(t.children[i])}function w(t,e,i,s){for(;i<=s;++i){var r=e[i];n(r)&&(n(r.tag)?(x(r),b(r)):c(r.elm))}}function x(t,e){if(n(e)||n(t.data)){var i,s=a.remove.length+1;for(n(e)?e.listeners+=s:e=function(t,e){function i(){0==--i.listeners&&c(t)}return i.listeners=e,i}(t.elm,s),n(i=t.componentInstance)&&n(i=i._vnode)&&n(i.data)&&x(i,e),i=0;i<a.remove.length;++i)a.remove[i](t,e);n(i=t.data.hook)&&n(i=i.remove)?i(t,e):e()}else c(t.elm)}function C(t,e,i,s){for(var r=i;r<s;r++){var o=e[r];if(n(o)&&Si(t,o))return r}}function k(t,e,r,o){if(t!==e){var l=e.elm=t.elm;if(s(t.isAsyncPlaceholder))n(e.asyncFactory.resolved)?S(t.elm,e,r):e.isAsyncPlaceholder=!0;else if(s(e.isStatic)&&s(t.isStatic)&&e.key===t.key&&(s(e.isCloned)||s(e.isOnce)))e.componentInstance=t.componentInstance;else{var c,d=e.data;n(d)&&n(c=d.hook)&&n(c=c.prepatch)&&c(t,e);var p=t.children,f=e.children;if(n(d)&&m(e)){for(c=0;c<a.update.length;++c)a.update[c](t,e);n(c=d.hook)&&n(c=c.update)&&c(t,e)}i(e.text)?n(p)&&n(f)?p!==f&&function(t,e,s,r,o){for(var a,l,c,d=0,p=0,f=e.length-1,g=e[0],m=e[f],v=s.length-1,_=s[0],b=s[v],x=!o;d<=f&&p<=v;)i(g)?g=e[++d]:i(m)?m=e[--f]:Si(g,_)?(k(g,_,r),g=e[++d],_=s[++p]):Si(m,b)?(k(m,b,r),m=e[--f],b=s[--v]):Si(g,b)?(k(g,b,r),x&&u.insertBefore(t,g.elm,u.nextSibling(m.elm)),g=e[++d],b=s[--v]):Si(m,_)?(k(m,_,r),x&&u.insertBefore(t,m.elm,g.elm),m=e[--f],_=s[++p]):(i(a)&&(a=Ai(e,d,f)),i(l=n(_.key)?a[_.key]:C(_,e,d,f))?h(_,r,t,g.elm):Si(c=e[l],_)?(k(c,_,r),e[l]=void 0,x&&u.insertBefore(t,c.elm,g.elm)):h(_,r,t,g.elm),_=s[++p]);d>f?y(t,i(s[v+1])?null:s[v+1].elm,s,p,v,r):p>v&&w(0,e,d,f)}(l,p,f,r,o):n(f)?(n(t.text)&&u.setTextContent(l,""),y(l,null,f,0,f.length-1,r)):n(p)?w(0,p,0,p.length-1):n(t.text)&&u.setTextContent(l,""):t.text!==e.text&&u.setTextContent(l,e.text),n(d)&&n(c=d.hook)&&n(c=c.postpatch)&&c(t,e)}}}function T(t,e,i){if(s(i)&&n(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var D=d("attrs,style,class,staticClass,staticStyle,key");function S(t,i,r){if(s(i.isComment)&&n(i.asyncFactory))return i.elm=t,i.isAsyncPlaceholder=!0,!0;i.elm=t;var o=i.tag,a=i.data,l=i.children;if(n(a)&&(n(e=a.hook)&&n(e=e.init)&&e(i,!0),n(e=i.componentInstance)))return p(i,r),!0;if(n(o)){if(n(l))if(t.hasChildNodes())if(n(e=a)&&n(e=e.domProps)&&n(e=e.innerHTML)){if(e!==t.innerHTML)return!1}else{for(var u=!0,c=t.firstChild,h=0;h<l.length;h++){if(!c||!S(c,l[h],r)){u=!1;break}c=c.nextSibling}if(!u||c)return!1}else g(i,l,r);if(n(a))for(var d in a)if(!D(d)){v(i,r);break}}else t.data!==i.text&&(t.data=i.text);return!0}return function(t,e,r,o,l,c){if(!i(e)){var d,p=!1,f=[];if(i(t))p=!0,h(e,f,l,c);else{var g=n(t.nodeType);if(!g&&Si(t,e))k(t,e,f,o);else{if(g){if(1===t.nodeType&&t.hasAttribute(N)&&(t.removeAttribute(N),r=!0),s(r)&&S(t,e,f))return T(e,f,!0),t;d=t,t=new Nt(u.tagName(d).toLowerCase(),{},[],void 0,d)}var v=t.elm,_=u.parentNode(v);if(h(e,f,v._leaveCb?null:_,u.nextSibling(v)),n(e.parent))for(var y=e.parent,x=m(e);y;){for(var C=0;C<a.destroy.length;++C)a.destroy[C](y);if(y.elm=e.elm,x){for(var D=0;D<a.create.length;++D)a.create[D](Ti,y);var A=y.data.hook.insert;if(A.merged)for(var E=1;E<A.fns.length;E++)A.fns[E]()}y=y.parent}n(_)?w(0,[t],0,0):n(t.tag)&&b(t)}}return T(e,f,p),e.elm}n(t)&&b(t)}}({nodeOps:xi,modules:[Ri,Yi,_n,wn,$n,Y?{create:ns,activate:ns,remove:function(t,e){!0!==t.data.show?ts(t,e):e()}}:{}].concat(Mi)});function rs(t,e,i){os(t,e,i),(K||G)&&setTimeout(function(){os(t,e,i)},0)}function os(t,e,i){var n=e.value,s=t.multiple;if(!s||Array.isArray(n)){for(var r,o,a=0,l=t.options.length;a<l;a++)if(o=t.options[a],s)r=$(n,ls(o))>-1,o.selected!==r&&(o.selected=r);else if(O(ls(o),n))return void(t.selectedIndex!==a&&(t.selectedIndex=a));s||(t.selectedIndex=-1)}}function as(t,e){return e.every(function(e){return!O(e,t)})}function ls(t){return"_value"in t?t._value:t.value}function us(t){t.target.composing=!0}function cs(t){t.target.composing&&(t.target.composing=!1,hs(t.target,"input"))}function hs(t,e){var i=document.createEvent("HTMLEvents");i.initEvent(e,!0,!0),t.dispatchEvent(i)}function ds(t){return!t.componentInstance||t.data&&t.data.transition?t:ds(t.componentInstance._vnode)}X&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&hs(t,"input")});var ps={model:{inserted:function(t,e,i){"select"===i.tag?(rs(t,e,i.context),t._vOptions=[].map.call(t.options,ls)):("textarea"===i.tag||bi(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("change",cs),Z||(t.addEventListener("compositionstart",us),t.addEventListener("compositionend",cs)),X&&(t.vmodel=!0)))},componentUpdated:function(t,e,i){if("select"===i.tag){rs(t,e,i.context);var n=t._vOptions,s=t._vOptions=[].map.call(t.options,ls);if(s.some(function(t,e){return!O(t,n[e])}))(t.multiple?e.value.some(function(t){return as(t,s)}):e.value!==e.oldValue&&as(e.value,s))&&hs(t,"change")}}},show:{bind:function(t,e,i){var n=e.value,s=(i=ds(i)).data&&i.data.transition,r=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;n&&s?(i.data.show=!0,Qn(i,function(){t.style.display=r})):t.style.display=n?r:"none"},update:function(t,e,i){var n=e.value;n!==e.oldValue&&((i=ds(i)).data&&i.data.transition?(i.data.show=!0,n?Qn(i,function(){t.style.display=t.__vOriginalDisplay}):ts(i,function(){t.style.display="none"})):t.style.display=n?t.__vOriginalDisplay:"none")},unbind:function(t,e,i,n,s){s||(t.style.display=t.__vOriginalDisplay)}}},fs={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function gs(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?gs(Zt(e.children)):t}function ms(t){var e={},i=t.$options;for(var n in i.propsData)e[n]=t[n];var s=i._parentListeners;for(var r in s)e[b(r)]=s[r];return e}function vs(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}var _s={name:"transition",props:fs,abstract:!0,render:function(t){var e=this,i=this.$options._renderChildren;if(i&&(i=i.filter(function(t){return t.tag||Gt(t)})).length){0;var n=this.mode;0;var s=i[0];if(function(t){for(;t=t.parent;)if(t.data.transition)return!0}(this.$vnode))return s;var o=gs(s);if(!o)return s;if(this._leaving)return vs(t,s);var a="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?a+"comment":a+o.tag:r(o.key)?0===String(o.key).indexOf(a)?o.key:a+o.key:o.key;var l=(o.data||(o.data={})).transition=ms(this),u=this._vnode,c=gs(u);if(o.data.directives&&o.data.directives.some(function(t){return"show"===t.name})&&(o.data.show=!0),c&&c.data&&!function(t,e){return e.key===t.key&&e.tag===t.tag}(o,c)&&!Gt(c)){var h=c&&(c.data.transition=D({},l));if("out-in"===n)return this._leaving=!0,Bt(h,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),vs(t,s);if("in-out"===n){if(Gt(o))return u;var d,p=function(){d()};Bt(l,"afterEnter",p),Bt(l,"enterCancelled",p),Bt(h,"delayLeave",function(t){d=t})}}return s}}},ys=D({tag:String,moveClass:String},fs);function bs(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function ws(t){t.data.newPos=t.elm.getBoundingClientRect()}function xs(t){var e=t.data.pos,i=t.data.newPos,n=e.left-i.left,s=e.top-i.top;if(n||s){t.data.moved=!0;var r=t.elm.style;r.transform=r.WebkitTransform="translate("+n+"px,"+s+"px)",r.transitionDuration="0s"}}delete ys.mode;var Cs={Transition:_s,TransitionGroup:{props:ys,render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",i=Object.create(null),n=this.prevChildren=this.children,s=this.$slots.default||[],r=this.children=[],o=ms(this),a=0;a<s.length;a++){var l=s[a];if(l.tag)if(null!=l.key&&0!==String(l.key).indexOf("__vlist"))r.push(l),i[l.key]=l,(l.data||(l.data={})).transition=o;else;}if(n){for(var u=[],c=[],h=0;h<n.length;h++){var d=n[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),i[d.key]?u.push(d):c.push(d)}this.kept=t(e,null,u),this.removed=c}return t(e,null,r)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";if(t.length&&this.hasMove(t[0].elm,e)){t.forEach(bs),t.forEach(ws),t.forEach(xs);document.body.offsetHeight;t.forEach(function(t){if(t.data.moved){var i=t.elm,n=i.style;Yn(i,e),n.transform=n.WebkitTransform=n.transitionDuration="",i.addEventListener(zn,i._moveCb=function t(n){n&&!/transform$/.test(n.propertyName)||(i.removeEventListener(zn,t),i._moveCb=null,Vn(i,e))})}})}},methods:{hasMove:function(t,e){if(!Hn)return!1;if(this._hasMove)return this._hasMove;var i=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach(function(t){Nn(i,t)}),Pn(i,e),i.style.display="none",this.$el.appendChild(i);var n=Gn(i);return this.$el.removeChild(i),this._hasMove=n.hasTransform}}}};Ve.config.mustUseProp=ni,Ve.config.isReservedTag=vi,Ve.config.isReservedAttr=ei,Ve.config.getTagNamespace=_i,Ve.config.isUnknownElement=function(t){if(!Y)return!0;if(vi(t))return!1;if(t=t.toLowerCase(),null!=yi[t])return yi[t];var e=document.createElement(t);return t.indexOf("-")>-1?yi[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:yi[t]=/HTMLUnknownElement/.test(e.toString())},D(Ve.options.directives,ps),D(Ve.options.components,Cs),Ve.prototype.__patch__=Y?ss:A,Ve.prototype.$mount=function(t,e){return function(t,e,i){var n;return t.$el=e,t.$options.render||(t.$options.render=jt),ae(t,"beforeMount"),n=function(){t._update(t._render(),i)},t._watcher=new me(t,n,A),i=!1,null==t.$vnode&&(t._isMounted=!0,ae(t,"mounted")),t}(this,t=t&&Y?wi(t):void 0,e)},setTimeout(function(){H.devtools&&st&&st.emit("init",Ve)},0);var ks,Ts,Ds,Ss=!!Y&&(ks="\n",Ts="&#10;",(Ds=document.createElement("div")).innerHTML='<div a="'+ks+'"/>',Ds.innerHTML.indexOf(Ts)>0),As=/\{\{((?:.|\n)+?)\}\}/g,Es=/[-.*+?^${}()|[\]\/\\]/g,Is=_(function(t){var e=t[0].replace(Es,"\\$&"),i=t[1].replace(Es,"\\$&");return new RegExp(e+"((?:.|\\n)+?)"+i,"g")});function Os(t,e){var i=e?Is(e):As;if(i.test(t)){for(var n,s,r=[],o=i.lastIndex=0;n=i.exec(t);){(s=n.index)>o&&r.push(JSON.stringify(t.slice(o,s)));var a=Ki(n[1].trim());r.push("_s("+a+")"),o=s+n[0].length}return o<t.length&&r.push(JSON.stringify(t.slice(o))),r.join("+")}}var $s=[{staticKeys:["staticClass"],transformNode:function(t,e){e.warn;var i=sn(t,"class");i&&(t.staticClass=JSON.stringify(i));var n=nn(t,"class",!1);n&&(t.classBinding=n)},genData:function(t){var e="";return t.staticClass&&(e+="staticClass:"+t.staticClass+","),t.classBinding&&(e+="class:"+t.classBinding+","),e}},{staticKeys:["staticStyle"],transformNode:function(t,e){e.warn;var i=sn(t,"style");i&&(t.staticStyle=JSON.stringify(xn(i)));var n=nn(t,"style",!1);n&&(t.styleBinding=n)},genData:function(t){var e="";return t.staticStyle&&(e+="staticStyle:"+t.staticStyle+","),t.styleBinding&&(e+="style:("+t.styleBinding+"),"),e}}];var Ps,Ns={model:function(t,e,i){i;var n=e.value,s=e.modifiers,r=t.tag,o=t.attrsMap.type;if(t.component)return rn(t,n,s),!1;if("select"===r)!function(t,e,i){var n='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(i&&i.number?"_n(val)":"val")+"});";n=n+" "+on(e,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),en(t,"change",n,null,!0)}(t,n,s);else if("input"===r&&"checkbox"===o)!function(t,e,i){var n=i&&i.number,s=nn(t,"value")||"null",r=nn(t,"true-value")||"true",o=nn(t,"false-value")||"false";Ji(t,"checked","Array.isArray("+e+")?_i("+e+","+s+")>-1"+("true"===r?":("+e+")":":_q("+e+","+r+")")),en(t,fn,"var $$a="+e+",$$el=$event.target,$$c=$$el.checked?("+r+"):("+o+");if(Array.isArray($$a)){var $$v="+(n?"_n("+s+")":s)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+e+"=$$a.concat([$$v]))}else{$$i>-1&&("+e+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+on(e,"$$c")+"}",null,!0)}(t,n,s);else if("input"===r&&"radio"===o)!function(t,e,i){var n=i&&i.number,s=nn(t,"value")||"null";Ji(t,"checked","_q("+e+","+(s=n?"_n("+s+")":s)+")"),en(t,fn,on(e,s),null,!0)}(t,n,s);else if("input"===r||"textarea"===r)!function(t,e,i){var n=t.attrsMap.type,s=i||{},r=s.lazy,o=s.number,a=s.trim,l=!r&&"range"!==n,u=r?"change":"range"===n?pn:"input",c="$event.target.value";a&&(c="$event.target.value.trim()"),o&&(c="_n("+c+")");var h=on(e,c);l&&(h="if($event.target.composing)return;"+h),Ji(t,"value","("+e+")"),en(t,u,h,null,!0),(a||o)&&en(t,"blur","$forceUpdate()")}(t,n,s);else if(!H.isReservedTag(r))return rn(t,n,s),!1;return!0},text:function(t,e){e.value&&Ji(t,"textContent","_s("+e.value+")")},html:function(t,e){e.value&&Ji(t,"innerHTML","_s("+e.value+")")}},Ms=d("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),js=d("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Hs=d("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),Rs={expectHTML:!0,modules:$s,directives:Ns,isPreTag:function(t){return"pre"===t},isUnaryTag:Ms,mustUseProp:ni,canBeLeftOpenTag:js,isReservedTag:vi,getTagNamespace:_i,staticKeys:function(t){return t.reduce(function(t,e){return t.concat(e.staticKeys||[])},[]).join(",")}($s)},Ls=function(t){return(Ps=Ps||document.createElement("div")).innerHTML=t,Ps.textContent},Fs=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,zs="[a-zA-Z_][\\w\\-\\.]*",Ws="((?:"+zs+"\\:)?"+zs+")",qs=new RegExp("^<"+Ws),Us=/^\s*(\/?)>/,Bs=new RegExp("^<\\/"+Ws+"[^>]*>"),Ys=/^<!DOCTYPE [^>]+>/i,Vs=/^<!--/,Ks=/^<!\[/,Xs=!1;"x".replace(/x(.)?/g,function(t,e){Xs=""===e});var Gs=d("script,style,textarea",!0),Zs={},Js={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n"},Qs=/&(?:lt|gt|quot|amp);/g,tr=/&(?:lt|gt|quot|amp|#10);/g,er=d("pre,textarea",!0),ir=function(t,e){return t&&er(t)&&"\n"===e[0]};function nr(t,e){var i=e?tr:Qs;return t.replace(i,function(t){return Js[t]})}var sr,rr,or,ar,lr,ur,cr,hr,dr=/^@|^v-on:/,pr=/^v-|^@|^:/,fr=/(.*?)\s+(?:in|of)\s+(.*)/,gr=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,mr=/:(.*)$/,vr=/^:|^v-bind:/,_r=/\.[^.]+/g,yr=_(Ls);function br(t,e){sr=e.warn||Gi,ur=e.isPreTag||E,cr=e.mustUseProp||E,hr=e.getTagNamespace||E,or=Zi(e.modules,"transformNode"),ar=Zi(e.modules,"preTransformNode"),lr=Zi(e.modules,"postTransformNode"),rr=e.delimiters;var i,n,s=[],r=!1!==e.preserveWhitespace,o=!1,a=!1;function l(t){t.pre&&(o=!1),ur(t.tag)&&(a=!1)}return function(t,e){for(var i,n,s=[],r=e.expectHTML,o=e.isUnaryTag||E,a=e.canBeLeftOpenTag||E,l=0;t;){if(i=t,n&&Gs(n)){var u=0,c=n.toLowerCase(),h=Zs[c]||(Zs[c]=new RegExp("([\\s\\S]*?)(</"+c+"[^>]*>)","i")),d=t.replace(h,function(t,i,n){return u=n.length,Gs(c)||"noscript"===c||(i=i.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),ir(c,i)&&(i=i.slice(1)),e.chars&&e.chars(i),""});l+=t.length-d.length,t=d,D(c,l-u,l)}else{var p=t.indexOf("<");if(0===p){if(Vs.test(t)){var f=t.indexOf("--\x3e");if(f>=0){e.shouldKeepComment&&e.comment(t.substring(4,f)),C(f+3);continue}}if(Ks.test(t)){var g=t.indexOf("]>");if(g>=0){C(g+2);continue}}var m=t.match(Ys);if(m){C(m[0].length);continue}var v=t.match(Bs);if(v){var _=l;C(v[0].length),D(v[1],_,l);continue}var y=k();if(y){T(y),ir(n,t)&&C(1);continue}}var b=void 0,w=void 0,x=void 0;if(p>=0){for(w=t.slice(p);!(Bs.test(w)||qs.test(w)||Vs.test(w)||Ks.test(w)||(x=w.indexOf("<",1))<0);)p+=x,w=t.slice(p);b=t.substring(0,p),C(p)}p<0&&(b=t,t=""),e.chars&&b&&e.chars(b)}if(t===i){e.chars&&e.chars(t);break}}function C(e){l+=e,t=t.substring(e)}function k(){var e=t.match(qs);if(e){var i,n,s={tagName:e[1],attrs:[],start:l};for(C(e[0].length);!(i=t.match(Us))&&(n=t.match(Fs));)C(n[0].length),s.attrs.push(n);if(i)return s.unarySlash=i[1],C(i[0].length),s.end=l,s}}function T(t){var i=t.tagName,l=t.unarySlash;r&&("p"===n&&Hs(i)&&D(n),a(i)&&n===i&&D(i));for(var u=o(i)||!!l,c=t.attrs.length,h=new Array(c),d=0;d<c;d++){var p=t.attrs[d];Xs&&-1===p[0].indexOf('""')&&(""===p[3]&&delete p[3],""===p[4]&&delete p[4],""===p[5]&&delete p[5]);var f=p[3]||p[4]||p[5]||"";h[d]={name:p[1],value:nr(f,e.shouldDecodeNewlines)}}u||(s.push({tag:i,lowerCasedTag:i.toLowerCase(),attrs:h}),n=i),e.start&&e.start(i,h,u,t.start,t.end)}function D(t,i,r){var o,a;if(null==i&&(i=l),null==r&&(r=l),t&&(a=t.toLowerCase()),t)for(o=s.length-1;o>=0&&s[o].lowerCasedTag!==a;o--);else o=0;if(o>=0){for(var u=s.length-1;u>=o;u--)e.end&&e.end(s[u].tag,i,r);s.length=o,n=o&&s[o-1].tag}else"br"===a?e.start&&e.start(t,[],!0,i,r):"p"===a&&(e.start&&e.start(t,[],!1,i,r),e.end&&e.end(t,i,r))}D()}(t,{warn:sr,expectHTML:e.expectHTML,isUnaryTag:e.isUnaryTag,canBeLeftOpenTag:e.canBeLeftOpenTag,shouldDecodeNewlines:e.shouldDecodeNewlines,shouldKeepComment:e.comments,start:function(t,r,u){var c=n&&n.ns||hr(t);K&&"svg"===c&&(r=function(t){for(var e=[],i=0;i<t.length;i++){var n=t[i];Tr.test(n.name)||(n.name=n.name.replace(Dr,""),e.push(n))}return e}(r));var h,d={type:1,tag:t,attrsList:r,attrsMap:function(t){for(var e={},i=0,n=t.length;i<n;i++)e[t[i].name]=t[i].value;return e}(r),parent:n,children:[]};c&&(d.ns=c),"style"!==(h=d).tag&&("script"!==h.tag||h.attrsMap.type&&"text/javascript"!==h.attrsMap.type)||nt()||(d.forbidden=!0);for(var p=0;p<ar.length;p++)ar[p](d,e);if(o||(!function(t){null!=sn(t,"v-pre")&&(t.pre=!0)}(d),d.pre&&(o=!0)),ur(d.tag)&&(a=!0),o)!function(t){var e=t.attrsList.length;if(e)for(var i=t.attrs=new Array(e),n=0;n<e;n++)i[n]={name:t.attrsList[n].name,value:JSON.stringify(t.attrsList[n].value)};else t.pre||(t.plain=!0)}(d);else{!function(t){var e;if(e=sn(t,"v-for")){var i=e.match(fr);if(!i)return;t.for=i[2].trim();var n=i[1].trim(),s=n.match(gr);s?(t.alias=s[1].trim(),t.iterator1=s[2].trim(),s[3]&&(t.iterator2=s[3].trim())):t.alias=n}}(d),function(t){var e=sn(t,"v-if");if(e)t.if=e,wr(t,{exp:e,block:t});else{null!=sn(t,"v-else")&&(t.else=!0);var i=sn(t,"v-else-if");i&&(t.elseif=i)}}(d),function(t){null!=sn(t,"v-once")&&(t.once=!0)}(d),function(t){var e=nn(t,"key");e&&(t.key=e)}(d),d.plain=!d.key&&!r.length,function(t){var e=nn(t,"ref");e&&(t.ref=e,t.refInFor=function(t){var e=t;for(;e;){if(void 0!==e.for)return!0;e=e.parent}return!1}(t))}(d),function(t){if("slot"===t.tag)t.slotName=nn(t,"name");else{var e=nn(t,"slot");e&&(t.slotTarget='""'===e?'"default"':e,Qi(t,"slot",e)),"template"===t.tag&&(t.slotScope=sn(t,"scope"))}}(d),function(t){var e;(e=nn(t,"is"))&&(t.component=e);null!=sn(t,"inline-template")&&(t.inlineTemplate=!0)}(d);for(var f=0;f<or.length;f++)or[f](d,e);!function(t){var e,i,n,s,r,o,a,l=t.attrsList;for(e=0,i=l.length;e<i;e++){if(n=s=l[e].name,r=l[e].value,pr.test(n))if(t.hasBindings=!0,(o=xr(n))&&(n=n.replace(_r,"")),vr.test(n))n=n.replace(vr,""),r=Ki(r),a=!1,o&&(o.prop&&(a=!0,"innerHtml"===(n=b(n))&&(n="innerHTML")),o.camel&&(n=b(n)),o.sync&&en(t,"update:"+b(n),on(r,"$event"))),a||!t.component&&cr(t.tag,t.attrsMap.type,n)?Ji(t,n,r):Qi(t,n,r);else if(dr.test(n))n=n.replace(dr,""),en(t,n,r,o,!1);else{var u=(n=n.replace(pr,"")).match(mr),c=u&&u[1];c&&(n=n.slice(0,-(c.length+1))),tn(t,n,s,r,c,o)}else Qi(t,n,JSON.stringify(r))}}(d)}function g(t){0}if(i?s.length||i.if&&(d.elseif||d.else)&&(g(),wr(i,{exp:d.elseif,block:d})):(i=d,g()),n&&!d.forbidden)if(d.elseif||d.else)!function(t,e){var i=function(t){var e=t.length;for(;e--;){if(1===t[e].type)return t[e];t.pop()}}(e.children);i&&i.if&&wr(i,{exp:t.elseif,block:t})}(d,n);else if(d.slotScope){n.plain=!1;var m=d.slotTarget||'"default"';(n.scopedSlots||(n.scopedSlots={}))[m]=d}else n.children.push(d),d.parent=n;u?l(d):(n=d,s.push(d));for(var v=0;v<lr.length;v++)lr[v](d,e)},end:function(){var t=s[s.length-1],e=t.children[t.children.length-1];e&&3===e.type&&" "===e.text&&!a&&t.children.pop(),s.length-=1,n=s[s.length-1],l(t)},chars:function(t){if(n&&(!K||"textarea"!==n.tag||n.attrsMap.placeholder!==t)){var e,i,s=n.children;if(t=a||t.trim()?"script"===(e=n).tag||"style"===e.tag?t:yr(t):r&&s.length?" ":"")!o&&" "!==t&&(i=Os(t,rr))?s.push({type:2,expression:i,text:t}):" "===t&&s.length&&" "===s[s.length-1].text||s.push({type:3,text:t})}},comment:function(t){n.children.push({type:3,text:t,isComment:!0})}}),i}function wr(t,e){t.ifConditions||(t.ifConditions=[]),t.ifConditions.push(e)}function xr(t){var e=t.match(_r);if(e){var i={};return e.forEach(function(t){i[t.slice(1)]=!0}),i}}var Cr,kr,Tr=/^xmlns:NS\d+/,Dr=/^NS\d+:/;var Sr=_(function(t){return d("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(t?","+t:""))});function Ar(t,e){t&&(Cr=Sr(e.staticKeys||""),kr=e.isReservedTag||E,function t(e){e.static=function(t){if(2===t.type)return!1;if(3===t.type)return!0;return!(!t.pre&&(t.hasBindings||t.if||t.for||p(t.tag)||!kr(t.tag)||function(t){for(;t.parent;){if("template"!==(t=t.parent).tag)return!1;if(t.for)return!0}return!1}(t)||!Object.keys(t).every(Cr)))}(e);if(1===e.type){if(!kr(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var i=0,n=e.children.length;i<n;i++){var s=e.children[i];t(s),s.static||(e.static=!1)}if(e.ifConditions)for(var r=1,o=e.ifConditions.length;r<o;r++){var a=e.ifConditions[r].block;t(a),a.static||(e.static=!1)}}}(t),function t(e,i){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=i),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,s=e.children.length;n<s;n++)t(e.children[n],i||!!e.for);if(e.ifConditions)for(var r=1,o=e.ifConditions.length;r<o;r++)t(e.ifConditions[r].block,i)}}(t,!1))}var Er=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,Ir=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,Or={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},$r=function(t){return"if("+t+")return null;"},Pr={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:$r("$event.target !== $event.currentTarget"),ctrl:$r("!$event.ctrlKey"),shift:$r("!$event.shiftKey"),alt:$r("!$event.altKey"),meta:$r("!$event.metaKey"),left:$r("'button' in $event && $event.button !== 0"),middle:$r("'button' in $event && $event.button !== 1"),right:$r("'button' in $event && $event.button !== 2")};function Nr(t,e,i){var n=e?"nativeOn:{":"on:{";for(var s in t){0,n+='"'+s+'":'+Mr(s,t[s])+","}return n.slice(0,-1)+"}"}function Mr(t,e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return Mr(t,e)}).join(",")+"]";var i=Ir.test(e.value),n=Er.test(e.value);if(e.modifiers){var s="",r="",o=[];for(var a in e.modifiers)Pr[a]?(r+=Pr[a],Or[a]&&o.push(a)):o.push(a);return o.length&&(s+=function(t){return"if(!('button' in $event)&&"+t.map(jr).join("&&")+")return null;"}(o)),r&&(s+=r),"function($event){"+s+(i?e.value+"($event)":n?"("+e.value+")($event)":e.value)+"}"}return i||n?e.value:"function($event){"+e.value+"}"}function jr(t){var e=parseInt(t,10);if(e)return"$event.keyCode!=="+e;var i=Or[t];return"_k($event.keyCode,"+JSON.stringify(t)+(i?","+JSON.stringify(i):"")+")"}var Hr={on:function(t,e){t.wrapListeners=function(t){return"_g("+t+","+e.value+")"}},bind:function(t,e){t.wrapData=function(i){return"_b("+i+",'"+t.tag+"',"+e.value+","+(e.modifiers&&e.modifiers.prop?"true":"false")+(e.modifiers&&e.modifiers.sync?",true":"")+")"}},cloak:A},Rr=function(t){this.options=t,this.warn=t.warn||Gi,this.transforms=Zi(t.modules,"transformCode"),this.dataGenFns=Zi(t.modules,"genData"),this.directives=D(D({},Hr),t.directives);var e=t.isReservedTag||E;this.maybeComponent=function(t){return!e(t.tag)},this.onceId=0,this.staticRenderFns=[]};function Lr(t,e){var i=new Rr(e);return{render:"with(this){return "+(t?Fr(t,i):'_c("div")')+"}",staticRenderFns:i.staticRenderFns}}function Fr(t,e){if(t.staticRoot&&!t.staticProcessed)return zr(t,e);if(t.once&&!t.onceProcessed)return Wr(t,e);if(t.for&&!t.forProcessed)return function(t,e,i,n){var s=t.for,r=t.alias,o=t.iterator1?","+t.iterator1:"",a=t.iterator2?","+t.iterator2:"";0;return t.forProcessed=!0,(n||"_l")+"(("+s+"),function("+r+o+a+"){return "+(i||Fr)(t,e)+"})"}(t,e);if(t.if&&!t.ifProcessed)return qr(t,e);if("template"!==t.tag||t.slotTarget){if("slot"===t.tag)return function(t,e){var i=t.slotName||'"default"',n=Yr(t,e),s="_t("+i+(n?","+n:""),r=t.attrs&&"{"+t.attrs.map(function(t){return b(t.name)+":"+t.value}).join(",")+"}",o=t.attrsMap["v-bind"];!r&&!o||n||(s+=",null");r&&(s+=","+r);o&&(s+=(r?"":",null")+","+o);return s+")"}(t,e);var i;if(t.component)i=function(t,e,i){var n=e.inlineTemplate?null:Yr(e,i,!0);return"_c("+t+","+Ur(e,i)+(n?","+n:"")+")"}(t.component,t,e);else{var n=t.plain?void 0:Ur(t,e),s=t.inlineTemplate?null:Yr(t,e,!0);i="_c('"+t.tag+"'"+(n?","+n:"")+(s?","+s:"")+")"}for(var r=0;r<e.transforms.length;r++)i=e.transforms[r](t,i);return i}return Yr(t,e)||"void 0"}function zr(t,e){return t.staticProcessed=!0,e.staticRenderFns.push("with(this){return "+Fr(t,e)+"}"),"_m("+(e.staticRenderFns.length-1)+(t.staticInFor?",true":"")+")"}function Wr(t,e){if(t.onceProcessed=!0,t.if&&!t.ifProcessed)return qr(t,e);if(t.staticInFor){for(var i="",n=t.parent;n;){if(n.for){i=n.key;break}n=n.parent}return i?"_o("+Fr(t,e)+","+e.onceId+++","+i+")":Fr(t,e)}return zr(t,e)}function qr(t,e,i,n){return t.ifProcessed=!0,function t(e,i,n,s){if(!e.length)return s||"_e()";var r=e.shift();return r.exp?"("+r.exp+")?"+o(r.block)+":"+t(e,i,n,s):""+o(r.block);function o(t){return n?n(t,i):t.once?Wr(t,i):Fr(t,i)}}(t.ifConditions.slice(),e,i,n)}function Ur(t,e){var i="{",n=function(t,e){var i=t.directives;if(!i)return;var n,s,r,o,a="directives:[",l=!1;for(n=0,s=i.length;n<s;n++){r=i[n],o=!0;var u=e.directives[r.name];u&&(o=!!u(t,r,e.warn)),o&&(l=!0,a+='{name:"'+r.name+'",rawName:"'+r.rawName+'"'+(r.value?",value:("+r.value+"),expression:"+JSON.stringify(r.value):"")+(r.arg?',arg:"'+r.arg+'"':"")+(r.modifiers?",modifiers:"+JSON.stringify(r.modifiers):"")+"},")}if(l)return a.slice(0,-1)+"]"}(t,e);n&&(i+=n+","),t.key&&(i+="key:"+t.key+","),t.ref&&(i+="ref:"+t.ref+","),t.refInFor&&(i+="refInFor:true,"),t.pre&&(i+="pre:true,"),t.component&&(i+='tag:"'+t.tag+'",');for(var s=0;s<e.dataGenFns.length;s++)i+=e.dataGenFns[s](t);if(t.attrs&&(i+="attrs:{"+Xr(t.attrs)+"},"),t.props&&(i+="domProps:{"+Xr(t.props)+"},"),t.events&&(i+=Nr(t.events,!1,e.warn)+","),t.nativeEvents&&(i+=Nr(t.nativeEvents,!0,e.warn)+","),t.slotTarget&&(i+="slot:"+t.slotTarget+","),t.scopedSlots&&(i+=function(t,e){return"scopedSlots:_u(["+Object.keys(t).map(function(i){return Br(i,t[i],e)}).join(",")+"])"}(t.scopedSlots,e)+","),t.model&&(i+="model:{value:"+t.model.value+",callback:"+t.model.callback+",expression:"+t.model.expression+"},"),t.inlineTemplate){var r=function(t,e){var i=t.children[0];0;if(1===i.type){var n=Lr(i,e.options);return"inlineTemplate:{render:function(){"+n.render+"},staticRenderFns:["+n.staticRenderFns.map(function(t){return"function(){"+t+"}"}).join(",")+"]}"}}(t,e);r&&(i+=r+",")}return i=i.replace(/,$/,"")+"}",t.wrapData&&(i=t.wrapData(i)),t.wrapListeners&&(i=t.wrapListeners(i)),i}function Br(t,e,i){return e.for&&!e.forProcessed?function(t,e,i){var n=e.for,s=e.alias,r=e.iterator1?","+e.iterator1:"",o=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+n+"),function("+s+r+o+"){return "+Br(t,e,i)+"})"}(t,e,i):"{key:"+t+",fn:function("+String(e.attrsMap.scope)+"){return "+("template"===e.tag?Yr(e,i)||"void 0":Fr(e,i))+"}}"}function Yr(t,e,i,n,s){var r=t.children;if(r.length){var o=r[0];if(1===r.length&&o.for&&"template"!==o.tag&&"slot"!==o.tag)return(n||Fr)(o,e);var a=i?function(t,e){for(var i=0,n=0;n<t.length;n++){var s=t[n];if(1===s.type){if(Vr(s)||s.ifConditions&&s.ifConditions.some(function(t){return Vr(t.block)})){i=2;break}(e(s)||s.ifConditions&&s.ifConditions.some(function(t){return e(t.block)}))&&(i=1)}}return i}(r,e.maybeComponent):0,l=s||Kr;return"["+r.map(function(t){return l(t,e)}).join(",")+"]"+(a?","+a:"")}}function Vr(t){return void 0!==t.for||"template"===t.tag||"slot"===t.tag}function Kr(t,e){return 1===t.type?Fr(t,e):3===t.type&&t.isComment?(n=t,"_e("+JSON.stringify(n.text)+")"):"_v("+(2===(i=t).type?i.expression:Gr(JSON.stringify(i.text)))+")";var i,n}function Xr(t){for(var e="",i=0;i<t.length;i++){var n=t[i];e+='"'+n.name+'":'+Gr(n.value)+","}return e.slice(0,-1)}function Gr(t){return t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)");function Zr(t,e){try{return new Function(t)}catch(i){return e.push({err:i,code:t}),A}}var Jr,Qr=(Jr=function(t,e){var i=br(t.trim(),e);Ar(i,e);var n=Lr(i,e);return{ast:i,render:n.render,staticRenderFns:n.staticRenderFns}},function(t){function e(e,i){var n=Object.create(t),s=[],r=[];if(n.warn=function(t,e){(e?r:s).push(t)},i)for(var o in i.modules&&(n.modules=(t.modules||[]).concat(i.modules)),i.directives&&(n.directives=D(Object.create(t.directives),i.directives)),i)"modules"!==o&&"directives"!==o&&(n[o]=i[o]);var a=Jr(e,n);return a.errors=s,a.tips=r,a}return{compile:e,compileToFunctions:function(t){var e=Object.create(null);return function(i,n,s){var r=(n=n||{}).delimiters?String(n.delimiters)+i:i;if(e[r])return e[r];var o=t(i,n),a={},l=[];return a.render=Zr(o.render,l),a.staticRenderFns=o.staticRenderFns.map(function(t){return Zr(t,l)}),e[r]=a}}(e)}})(Rs).compileToFunctions,to=_(function(t){var e=wi(t);return e&&e.innerHTML}),eo=Ve.prototype.$mount;Ve.prototype.$mount=function(t,e){if((t=t&&wi(t))===document.body||t===document.documentElement)return this;var i=this.$options;if(!i.render){var n=i.template;if(n)if("string"==typeof n)"#"===n.charAt(0)&&(n=to(n));else{if(!n.nodeType)return this;n=n.innerHTML}else t&&(n=function(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}(t));if(n){0;var s=Qr(n,{shouldDecodeNewlines:Ss,delimiters:i.delimiters,comments:i.comments},this),r=s.render,o=s.staticRenderFns;i.render=r,i.staticRenderFns=o}}return eo.call(this,t,e)},Ve.compile=Qr,t.exports=Ve}).call(e,i("DuR2"))},"ImC/":function(t,e,i){var n=i("hITH");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("9a94013e",n,!0,{})},JHru:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["alertType","title"],computed:{alertClassName:function(){return"alert-"+this.alertType}},methods:{hideEvent:function(){this.$emit("hide")}}}},JxFy:function(t,e,i){var n=i("AR8h");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("f8d3023e",n,!0,{})},Lypw:function(t,e,i){var n=i("VU/8")(i("lAxH"),i("UpBZ"),!1,function(t){i("R3Cx")},"data-v-174a7226",null);t.exports=n.exports},M4fF:function(t,e,i){(function(t,n){var s;(function(){var r,o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="__lodash_hash_undefined__",c=500,h="__lodash_placeholder__",d=1,p=2,f=4,g=1,m=2,v=1,_=2,y=4,b=8,w=16,x=32,C=64,k=128,T=256,D=512,S=30,A="...",E=800,I=16,O=1,$=2,P=1/0,N=9007199254740991,M=1.7976931348623157e308,j=NaN,H=4294967295,R=H-1,L=H>>>1,F=[["ary",k],["bind",v],["bindKey",_],["curry",b],["curryRight",w],["flip",D],["partial",x],["partialRight",C],["rearg",T]],z="[object Arguments]",W="[object Array]",q="[object AsyncFunction]",U="[object Boolean]",B="[object Date]",Y="[object DOMException]",V="[object Error]",K="[object Function]",X="[object GeneratorFunction]",G="[object Map]",Z="[object Number]",J="[object Null]",Q="[object Object]",tt="[object Proxy]",et="[object RegExp]",it="[object Set]",nt="[object String]",st="[object Symbol]",rt="[object Undefined]",ot="[object WeakMap]",at="[object WeakSet]",lt="[object ArrayBuffer]",ut="[object DataView]",ct="[object Float32Array]",ht="[object Float64Array]",dt="[object Int8Array]",pt="[object Int16Array]",ft="[object Int32Array]",gt="[object Uint8Array]",mt="[object Uint8ClampedArray]",vt="[object Uint16Array]",_t="[object Uint32Array]",yt=/\b__p \+= '';/g,bt=/\b(__p \+=) '' \+/g,wt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,xt=/&(?:amp|lt|gt|quot|#39);/g,Ct=/[&<>"']/g,kt=RegExp(xt.source),Tt=RegExp(Ct.source),Dt=/<%-([\s\S]+?)%>/g,St=/<%([\s\S]+?)%>/g,At=/<%=([\s\S]+?)%>/g,Et=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,It=/^\w*$/,Ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$t=/[\\^$.*+?()[\]{}|]/g,Pt=RegExp($t.source),Nt=/^\s+|\s+$/g,Mt=/^\s+/,jt=/\s+$/,Ht=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Rt=/\{\n\/\* \[wrapped with (.+)\] \*/,Lt=/,? & /,Ft=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,zt=/\\(\\)?/g,Wt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,qt=/\w*$/,Ut=/^[-+]0x[0-9a-f]+$/i,Bt=/^0b[01]+$/i,Yt=/^\[object .+?Constructor\]$/,Vt=/^0o[0-7]+$/i,Kt=/^(?:0|[1-9]\d*)$/,Xt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Gt=/($^)/,Zt=/['\n\r\u2028\u2029\\]/g,Jt="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Qt="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",te="[\\ud800-\\udfff]",ee="["+Qt+"]",ie="["+Jt+"]",ne="\\d+",se="[\\u2700-\\u27bf]",re="[a-z\\xdf-\\xf6\\xf8-\\xff]",oe="[^\\ud800-\\udfff"+Qt+ne+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",ae="\\ud83c[\\udffb-\\udfff]",le="[^\\ud800-\\udfff]",ue="(?:\\ud83c[\\udde6-\\uddff]){2}",ce="[\\ud800-\\udbff][\\udc00-\\udfff]",he="[A-Z\\xc0-\\xd6\\xd8-\\xde]",de="(?:"+re+"|"+oe+")",pe="(?:"+he+"|"+oe+")",fe="(?:"+ie+"|"+ae+")"+"?",ge="[\\ufe0e\\ufe0f]?"+fe+("(?:\\u200d(?:"+[le,ue,ce].join("|")+")[\\ufe0e\\ufe0f]?"+fe+")*"),me="(?:"+[se,ue,ce].join("|")+")"+ge,ve="(?:"+[le+ie+"?",ie,ue,ce,te].join("|")+")",_e=RegExp("['’]","g"),ye=RegExp(ie,"g"),be=RegExp(ae+"(?="+ae+")|"+ve+ge,"g"),we=RegExp([he+"?"+re+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[ee,he,"$"].join("|")+")",pe+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[ee,he+de,"$"].join("|")+")",he+"?"+de+"+(?:['’](?:d|ll|m|re|s|t|ve))?",he+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ne,me].join("|"),"g"),xe=RegExp("[\\u200d\\ud800-\\udfff"+Jt+"\\ufe0e\\ufe0f]"),Ce=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ke=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Te=-1,De={};De[ct]=De[ht]=De[dt]=De[pt]=De[ft]=De[gt]=De[mt]=De[vt]=De[_t]=!0,De[z]=De[W]=De[lt]=De[U]=De[ut]=De[B]=De[V]=De[K]=De[G]=De[Z]=De[Q]=De[et]=De[it]=De[nt]=De[ot]=!1;var Se={};Se[z]=Se[W]=Se[lt]=Se[ut]=Se[U]=Se[B]=Se[ct]=Se[ht]=Se[dt]=Se[pt]=Se[ft]=Se[G]=Se[Z]=Se[Q]=Se[et]=Se[it]=Se[nt]=Se[st]=Se[gt]=Se[mt]=Se[vt]=Se[_t]=!0,Se[V]=Se[K]=Se[ot]=!1;var Ae={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ee=parseFloat,Ie=parseInt,Oe="object"==typeof t&&t&&t.Object===Object&&t,$e="object"==typeof self&&self&&self.Object===Object&&self,Pe=Oe||$e||Function("return this")(),Ne="object"==typeof e&&e&&!e.nodeType&&e,Me=Ne&&"object"==typeof n&&n&&!n.nodeType&&n,je=Me&&Me.exports===Ne,He=je&&Oe.process,Re=function(){try{return He&&He.binding&&He.binding("util")}catch(t){}}(),Le=Re&&Re.isArrayBuffer,Fe=Re&&Re.isDate,ze=Re&&Re.isMap,We=Re&&Re.isRegExp,qe=Re&&Re.isSet,Ue=Re&&Re.isTypedArray;function Be(t,e,i){switch(i.length){case 0:return t.call(e);case 1:return t.call(e,i[0]);case 2:return t.call(e,i[0],i[1]);case 3:return t.call(e,i[0],i[1],i[2])}return t.apply(e,i)}function Ye(t,e,i,n){for(var s=-1,r=null==t?0:t.length;++s<r;){var o=t[s];e(n,o,i(o),t)}return n}function Ve(t,e){for(var i=-1,n=null==t?0:t.length;++i<n&&!1!==e(t[i],i,t););return t}function Ke(t,e){for(var i=null==t?0:t.length;i--&&!1!==e(t[i],i,t););return t}function Xe(t,e){for(var i=-1,n=null==t?0:t.length;++i<n;)if(!e(t[i],i,t))return!1;return!0}function Ge(t,e){for(var i=-1,n=null==t?0:t.length,s=0,r=[];++i<n;){var o=t[i];e(o,i,t)&&(r[s++]=o)}return r}function Ze(t,e){return!!(null==t?0:t.length)&&ai(t,e,0)>-1}function Je(t,e,i){for(var n=-1,s=null==t?0:t.length;++n<s;)if(i(e,t[n]))return!0;return!1}function Qe(t,e){for(var i=-1,n=null==t?0:t.length,s=Array(n);++i<n;)s[i]=e(t[i],i,t);return s}function ti(t,e){for(var i=-1,n=e.length,s=t.length;++i<n;)t[s+i]=e[i];return t}function ei(t,e,i,n){var s=-1,r=null==t?0:t.length;for(n&&r&&(i=t[++s]);++s<r;)i=e(i,t[s],s,t);return i}function ii(t,e,i,n){var s=null==t?0:t.length;for(n&&s&&(i=t[--s]);s--;)i=e(i,t[s],s,t);return i}function ni(t,e){for(var i=-1,n=null==t?0:t.length;++i<n;)if(e(t[i],i,t))return!0;return!1}var si=hi("length");function ri(t,e,i){var n;return i(t,function(t,i,s){if(e(t,i,s))return n=i,!1}),n}function oi(t,e,i,n){for(var s=t.length,r=i+(n?1:-1);n?r--:++r<s;)if(e(t[r],r,t))return r;return-1}function ai(t,e,i){return e==e?function(t,e,i){var n=i-1,s=t.length;for(;++n<s;)if(t[n]===e)return n;return-1}(t,e,i):oi(t,ui,i)}function li(t,e,i,n){for(var s=i-1,r=t.length;++s<r;)if(n(t[s],e))return s;return-1}function ui(t){return t!=t}function ci(t,e){var i=null==t?0:t.length;return i?fi(t,e)/i:j}function hi(t){return function(e){return null==e?r:e[t]}}function di(t){return function(e){return null==t?r:t[e]}}function pi(t,e,i,n,s){return s(t,function(t,s,r){i=n?(n=!1,t):e(i,t,s,r)}),i}function fi(t,e){for(var i,n=-1,s=t.length;++n<s;){var o=e(t[n]);o!==r&&(i=i===r?o:i+o)}return i}function gi(t,e){for(var i=-1,n=Array(t);++i<t;)n[i]=e(i);return n}function mi(t){return function(e){return t(e)}}function vi(t,e){return Qe(e,function(e){return t[e]})}function _i(t,e){return t.has(e)}function yi(t,e){for(var i=-1,n=t.length;++i<n&&ai(e,t[i],0)>-1;);return i}function bi(t,e){for(var i=t.length;i--&&ai(e,t[i],0)>-1;);return i}var wi=di({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),xi=di({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function Ci(t){return"\\"+Ae[t]}function ki(t){return xe.test(t)}function Ti(t){var e=-1,i=Array(t.size);return t.forEach(function(t,n){i[++e]=[n,t]}),i}function Di(t,e){return function(i){return t(e(i))}}function Si(t,e){for(var i=-1,n=t.length,s=0,r=[];++i<n;){var o=t[i];o!==e&&o!==h||(t[i]=h,r[s++]=i)}return r}function Ai(t,e){return"__proto__"==e?r:t[e]}function Ei(t){var e=-1,i=Array(t.size);return t.forEach(function(t){i[++e]=t}),i}function Ii(t){var e=-1,i=Array(t.size);return t.forEach(function(t){i[++e]=[t,t]}),i}function Oi(t){return ki(t)?function(t){var e=be.lastIndex=0;for(;be.test(t);)++e;return e}(t):si(t)}function $i(t){return ki(t)?function(t){return t.match(be)||[]}(t):function(t){return t.split("")}(t)}var Pi=di({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var Ni=function t(e){var i,n=(e=null==e?Pe:Ni.defaults(Pe.Object(),e,Ni.pick(Pe,ke))).Array,s=e.Date,Jt=e.Error,Qt=e.Function,te=e.Math,ee=e.Object,ie=e.RegExp,ne=e.String,se=e.TypeError,re=n.prototype,oe=Qt.prototype,ae=ee.prototype,le=e["__core-js_shared__"],ue=oe.toString,ce=ae.hasOwnProperty,he=0,de=(i=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||""))?"Symbol(src)_1."+i:"",pe=ae.toString,fe=ue.call(ee),ge=Pe._,me=ie("^"+ue.call(ce).replace($t,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ve=je?e.Buffer:r,be=e.Symbol,xe=e.Uint8Array,Ae=ve?ve.allocUnsafe:r,Oe=Di(ee.getPrototypeOf,ee),$e=ee.create,Ne=ae.propertyIsEnumerable,Me=re.splice,He=be?be.isConcatSpreadable:r,Re=be?be.iterator:r,si=be?be.toStringTag:r,di=function(){try{var t=Lr(ee,"defineProperty");return t({},"",{}),t}catch(t){}}(),Mi=e.clearTimeout!==Pe.clearTimeout&&e.clearTimeout,ji=s&&s.now!==Pe.Date.now&&s.now,Hi=e.setTimeout!==Pe.setTimeout&&e.setTimeout,Ri=te.ceil,Li=te.floor,Fi=ee.getOwnPropertySymbols,zi=ve?ve.isBuffer:r,Wi=e.isFinite,qi=re.join,Ui=Di(ee.keys,ee),Bi=te.max,Yi=te.min,Vi=s.now,Ki=e.parseInt,Xi=te.random,Gi=re.reverse,Zi=Lr(e,"DataView"),Ji=Lr(e,"Map"),Qi=Lr(e,"Promise"),tn=Lr(e,"Set"),en=Lr(e,"WeakMap"),nn=Lr(ee,"create"),sn=en&&new en,rn={},on=co(Zi),an=co(Ji),ln=co(Qi),un=co(tn),cn=co(en),hn=be?be.prototype:r,dn=hn?hn.valueOf:r,pn=hn?hn.toString:r;function fn(t){if(Aa(t)&&!va(t)&&!(t instanceof _n)){if(t instanceof vn)return t;if(ce.call(t,"__wrapped__"))return ho(t)}return new vn(t)}var gn=function(){function t(){}return function(e){if(!Sa(e))return{};if($e)return $e(e);t.prototype=e;var i=new t;return t.prototype=r,i}}();function mn(){}function vn(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=r}function _n(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=H,this.__views__=[]}function yn(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}function bn(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}function wn(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}function xn(t){var e=-1,i=null==t?0:t.length;for(this.__data__=new wn;++e<i;)this.add(t[e])}function Cn(t){var e=this.__data__=new bn(t);this.size=e.size}function kn(t,e){var i=va(t),n=!i&&ma(t),s=!i&&!n&&wa(t),r=!i&&!n&&!s&&ja(t),o=i||n||s||r,a=o?gi(t.length,ne):[],l=a.length;for(var u in t)!e&&!ce.call(t,u)||o&&("length"==u||s&&("offset"==u||"parent"==u)||r&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||Yr(u,l))||a.push(u);return a}function Tn(t){var e=t.length;return e?t[xs(0,e-1)]:r}function Dn(t,e){return ao(nr(t),Mn(e,0,t.length))}function Sn(t){return ao(nr(t))}function An(t,e,i){(i===r||pa(t[e],i))&&(i!==r||e in t)||Pn(t,e,i)}function En(t,e,i){var n=t[e];ce.call(t,e)&&pa(n,i)&&(i!==r||e in t)||Pn(t,e,i)}function In(t,e){for(var i=t.length;i--;)if(pa(t[i][0],e))return i;return-1}function On(t,e,i,n){return Fn(t,function(t,s,r){e(n,t,i(t),r)}),n}function $n(t,e){return t&&sr(e,sl(e),t)}function Pn(t,e,i){"__proto__"==e&&di?di(t,e,{configurable:!0,enumerable:!0,value:i,writable:!0}):t[e]=i}function Nn(t,e){for(var i=-1,s=e.length,o=n(s),a=null==t;++i<s;)o[i]=a?r:Qa(t,e[i]);return o}function Mn(t,e,i){return t==t&&(i!==r&&(t=t<=i?t:i),e!==r&&(t=t>=e?t:e)),t}function jn(t,e,i,n,s,o){var a,l=e&d,u=e&p,c=e&f;if(i&&(a=s?i(t,n,s,o):i(t)),a!==r)return a;if(!Sa(t))return t;var h=va(t);if(h){if(a=function(t){var e=t.length,i=new t.constructor(e);return e&&"string"==typeof t[0]&&ce.call(t,"index")&&(i.index=t.index,i.input=t.input),i}(t),!l)return nr(t,a)}else{var g=Wr(t),m=g==K||g==X;if(wa(t))return Zs(t,l);if(g==Q||g==z||m&&!s){if(a=u||m?{}:Ur(t),!l)return u?function(t,e){return sr(t,zr(t),e)}(t,function(t,e){return t&&sr(e,rl(e),t)}(a,t)):function(t,e){return sr(t,Fr(t),e)}(t,$n(a,t))}else{if(!Se[g])return s?t:{};a=function(t,e,i){var n,s,r,o=t.constructor;switch(e){case lt:return Js(t);case U:case B:return new o(+t);case ut:return function(t,e){var i=e?Js(t.buffer):t.buffer;return new t.constructor(i,t.byteOffset,t.byteLength)}(t,i);case ct:case ht:case dt:case pt:case ft:case gt:case mt:case vt:case _t:return Qs(t,i);case G:return new o;case Z:case nt:return new o(t);case et:return(r=new(s=t).constructor(s.source,qt.exec(s))).lastIndex=s.lastIndex,r;case it:return new o;case st:return n=t,dn?ee(dn.call(n)):{}}}(t,g,l)}}o||(o=new Cn);var v=o.get(t);if(v)return v;if(o.set(t,a),Pa(t))return t.forEach(function(n){a.add(jn(n,e,i,n,t,o))}),a;if(Ea(t))return t.forEach(function(n,s){a.set(s,jn(n,e,i,s,t,o))}),a;var _=h?r:(c?u?$r:Or:u?rl:sl)(t);return Ve(_||t,function(n,s){_&&(n=t[s=n]),En(a,s,jn(n,e,i,s,t,o))}),a}function Hn(t,e,i){var n=i.length;if(null==t)return!n;for(t=ee(t);n--;){var s=i[n],o=e[s],a=t[s];if(a===r&&!(s in t)||!o(a))return!1}return!0}function Rn(t,e,i){if("function"!=typeof t)throw new se(l);return no(function(){t.apply(r,i)},e)}function Ln(t,e,i,n){var s=-1,r=Ze,a=!0,l=t.length,u=[],c=e.length;if(!l)return u;i&&(e=Qe(e,mi(i))),n?(r=Je,a=!1):e.length>=o&&(r=_i,a=!1,e=new xn(e));t:for(;++s<l;){var h=t[s],d=null==i?h:i(h);if(h=n||0!==h?h:0,a&&d==d){for(var p=c;p--;)if(e[p]===d)continue t;u.push(h)}else r(e,d,n)||u.push(h)}return u}fn.templateSettings={escape:Dt,evaluate:St,interpolate:At,variable:"",imports:{_:fn}},fn.prototype=mn.prototype,fn.prototype.constructor=fn,vn.prototype=gn(mn.prototype),vn.prototype.constructor=vn,_n.prototype=gn(mn.prototype),_n.prototype.constructor=_n,yn.prototype.clear=function(){this.__data__=nn?nn(null):{},this.size=0},yn.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},yn.prototype.get=function(t){var e=this.__data__;if(nn){var i=e[t];return i===u?r:i}return ce.call(e,t)?e[t]:r},yn.prototype.has=function(t){var e=this.__data__;return nn?e[t]!==r:ce.call(e,t)},yn.prototype.set=function(t,e){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=nn&&e===r?u:e,this},bn.prototype.clear=function(){this.__data__=[],this.size=0},bn.prototype.delete=function(t){var e=this.__data__,i=In(e,t);return!(i<0||(i==e.length-1?e.pop():Me.call(e,i,1),--this.size,0))},bn.prototype.get=function(t){var e=this.__data__,i=In(e,t);return i<0?r:e[i][1]},bn.prototype.has=function(t){return In(this.__data__,t)>-1},bn.prototype.set=function(t,e){var i=this.__data__,n=In(i,t);return n<0?(++this.size,i.push([t,e])):i[n][1]=e,this},wn.prototype.clear=function(){this.size=0,this.__data__={hash:new yn,map:new(Ji||bn),string:new yn}},wn.prototype.delete=function(t){var e=Hr(this,t).delete(t);return this.size-=e?1:0,e},wn.prototype.get=function(t){return Hr(this,t).get(t)},wn.prototype.has=function(t){return Hr(this,t).has(t)},wn.prototype.set=function(t,e){var i=Hr(this,t),n=i.size;return i.set(t,e),this.size+=i.size==n?0:1,this},xn.prototype.add=xn.prototype.push=function(t){return this.__data__.set(t,u),this},xn.prototype.has=function(t){return this.__data__.has(t)},Cn.prototype.clear=function(){this.__data__=new bn,this.size=0},Cn.prototype.delete=function(t){var e=this.__data__,i=e.delete(t);return this.size=e.size,i},Cn.prototype.get=function(t){return this.__data__.get(t)},Cn.prototype.has=function(t){return this.__data__.has(t)},Cn.prototype.set=function(t,e){var i=this.__data__;if(i instanceof bn){var n=i.__data__;if(!Ji||n.length<o-1)return n.push([t,e]),this.size=++i.size,this;i=this.__data__=new wn(n)}return i.set(t,e),this.size=i.size,this};var Fn=ar(Kn),zn=ar(Xn,!0);function Wn(t,e){var i=!0;return Fn(t,function(t,n,s){return i=!!e(t,n,s)}),i}function qn(t,e,i){for(var n=-1,s=t.length;++n<s;){var o=t[n],a=e(o);if(null!=a&&(l===r?a==a&&!Ma(a):i(a,l)))var l=a,u=o}return u}function Un(t,e){var i=[];return Fn(t,function(t,n,s){e(t,n,s)&&i.push(t)}),i}function Bn(t,e,i,n,s){var r=-1,o=t.length;for(i||(i=Br),s||(s=[]);++r<o;){var a=t[r];e>0&&i(a)?e>1?Bn(a,e-1,i,n,s):ti(s,a):n||(s[s.length]=a)}return s}var Yn=lr(),Vn=lr(!0);function Kn(t,e){return t&&Yn(t,e,sl)}function Xn(t,e){return t&&Vn(t,e,sl)}function Gn(t,e){return Ge(e,function(e){return ka(t[e])})}function Zn(t,e){for(var i=0,n=(e=Vs(e,t)).length;null!=t&&i<n;)t=t[uo(e[i++])];return i&&i==n?t:r}function Jn(t,e,i){var n=e(t);return va(t)?n:ti(n,i(t))}function Qn(t){return null==t?t===r?rt:J:si&&si in ee(t)?function(t){var e=ce.call(t,si),i=t[si];try{t[si]=r;var n=!0}catch(t){}var s=pe.call(t);return n&&(e?t[si]=i:delete t[si]),s}(t):function(t){return pe.call(t)}(t)}function ts(t,e){return t>e}function es(t,e){return null!=t&&ce.call(t,e)}function is(t,e){return null!=t&&e in ee(t)}function ns(t,e,i){for(var s=i?Je:Ze,o=t[0].length,a=t.length,l=a,u=n(a),c=1/0,h=[];l--;){var d=t[l];l&&e&&(d=Qe(d,mi(e))),c=Yi(d.length,c),u[l]=!i&&(e||o>=120&&d.length>=120)?new xn(l&&d):r}d=t[0];var p=-1,f=u[0];t:for(;++p<o&&h.length<c;){var g=d[p],m=e?e(g):g;if(g=i||0!==g?g:0,!(f?_i(f,m):s(h,m,i))){for(l=a;--l;){var v=u[l];if(!(v?_i(v,m):s(t[l],m,i)))continue t}f&&f.push(m),h.push(g)}}return h}function ss(t,e,i){var n=null==(t=eo(t,e=Vs(e,t)))?t:t[uo(Co(e))];return null==n?r:Be(n,t,i)}function rs(t){return Aa(t)&&Qn(t)==z}function os(t,e,i,n,s){return t===e||(null==t||null==e||!Aa(t)&&!Aa(e)?t!=t&&e!=e:function(t,e,i,n,s,o){var a=va(t),l=va(e),u=a?W:Wr(t),c=l?W:Wr(e),h=(u=u==z?Q:u)==Q,d=(c=c==z?Q:c)==Q,p=u==c;if(p&&wa(t)){if(!wa(e))return!1;a=!0,h=!1}if(p&&!h)return o||(o=new Cn),a||ja(t)?Er(t,e,i,n,s,o):function(t,e,i,n,s,r,o){switch(i){case ut:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case lt:return!(t.byteLength!=e.byteLength||!r(new xe(t),new xe(e)));case U:case B:case Z:return pa(+t,+e);case V:return t.name==e.name&&t.message==e.message;case et:case nt:return t==e+"";case G:var a=Ti;case it:var l=n&g;if(a||(a=Ei),t.size!=e.size&&!l)return!1;var u=o.get(t);if(u)return u==e;n|=m,o.set(t,e);var c=Er(a(t),a(e),n,s,r,o);return o.delete(t),c;case st:if(dn)return dn.call(t)==dn.call(e)}return!1}(t,e,u,i,n,s,o);if(!(i&g)){var f=h&&ce.call(t,"__wrapped__"),v=d&&ce.call(e,"__wrapped__");if(f||v){var _=f?t.value():t,y=v?e.value():e;return o||(o=new Cn),s(_,y,i,n,o)}}return!!p&&(o||(o=new Cn),function(t,e,i,n,s,o){var a=i&g,l=Or(t),u=l.length,c=Or(e).length;if(u!=c&&!a)return!1;for(var h=u;h--;){var d=l[h];if(!(a?d in e:ce.call(e,d)))return!1}var p=o.get(t);if(p&&o.get(e))return p==e;var f=!0;o.set(t,e),o.set(e,t);for(var m=a;++h<u;){d=l[h];var v=t[d],_=e[d];if(n)var y=a?n(_,v,d,e,t,o):n(v,_,d,t,e,o);if(!(y===r?v===_||s(v,_,i,n,o):y)){f=!1;break}m||(m="constructor"==d)}if(f&&!m){var b=t.constructor,w=e.constructor;b!=w&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w)&&(f=!1)}return o.delete(t),o.delete(e),f}(t,e,i,n,s,o))}(t,e,i,n,os,s))}function as(t,e,i,n){var s=i.length,o=s,a=!n;if(null==t)return!o;for(t=ee(t);s--;){var l=i[s];if(a&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++s<o;){var u=(l=i[s])[0],c=t[u],h=l[1];if(a&&l[2]){if(c===r&&!(u in t))return!1}else{var d=new Cn;if(n)var p=n(c,h,u,t,e,d);if(!(p===r?os(h,c,g|m,n,d):p))return!1}}return!0}function ls(t){return!(!Sa(t)||de&&de in t)&&(ka(t)?me:Yt).test(co(t))}function us(t){return"function"==typeof t?t:null==t?Il:"object"==typeof t?va(t)?gs(t[0],t[1]):fs(t):Ll(t)}function cs(t){if(!Zr(t))return Ui(t);var e=[];for(var i in ee(t))ce.call(t,i)&&"constructor"!=i&&e.push(i);return e}function hs(t){if(!Sa(t))return function(t){var e=[];if(null!=t)for(var i in ee(t))e.push(i);return e}(t);var e=Zr(t),i=[];for(var n in t)("constructor"!=n||!e&&ce.call(t,n))&&i.push(n);return i}function ds(t,e){return t<e}function ps(t,e){var i=-1,s=ya(t)?n(t.length):[];return Fn(t,function(t,n,r){s[++i]=e(t,n,r)}),s}function fs(t){var e=Rr(t);return 1==e.length&&e[0][2]?Qr(e[0][0],e[0][1]):function(i){return i===t||as(i,t,e)}}function gs(t,e){return Kr(t)&&Jr(e)?Qr(uo(t),e):function(i){var n=Qa(i,t);return n===r&&n===e?tl(i,t):os(e,n,g|m)}}function ms(t,e,i,n,s){t!==e&&Yn(e,function(o,a){if(Sa(o))s||(s=new Cn),function(t,e,i,n,s,o,a){var l=Ai(t,i),u=Ai(e,i),c=a.get(u);if(c)An(t,i,c);else{var h=o?o(l,u,i+"",t,e,a):r,d=h===r;if(d){var p=va(u),f=!p&&wa(u),g=!p&&!f&&ja(u);h=u,p||f||g?va(l)?h=l:ba(l)?h=nr(l):f?(d=!1,h=Zs(u,!0)):g?(d=!1,h=Qs(u,!0)):h=[]:Oa(u)||ma(u)?(h=l,ma(l)?h=Ua(l):(!Sa(l)||n&&ka(l))&&(h=Ur(u))):d=!1}d&&(a.set(u,h),s(h,u,n,o,a),a.delete(u)),An(t,i,h)}}(t,e,a,i,ms,n,s);else{var l=n?n(Ai(t,a),o,a+"",t,e,s):r;l===r&&(l=o),An(t,a,l)}},rl)}function vs(t,e){var i=t.length;if(i)return Yr(e+=e<0?i:0,i)?t[e]:r}function _s(t,e,i){var n=-1;return e=Qe(e.length?e:[Il],mi(jr())),function(t,e){var i=t.length;for(t.sort(e);i--;)t[i]=t[i].value;return t}(ps(t,function(t,i,s){return{criteria:Qe(e,function(e){return e(t)}),index:++n,value:t}}),function(t,e){return function(t,e,i){for(var n=-1,s=t.criteria,r=e.criteria,o=s.length,a=i.length;++n<o;){var l=tr(s[n],r[n]);if(l){if(n>=a)return l;var u=i[n];return l*("desc"==u?-1:1)}}return t.index-e.index}(t,e,i)})}function ys(t,e,i){for(var n=-1,s=e.length,r={};++n<s;){var o=e[n],a=Zn(t,o);i(a,o)&&Ss(r,Vs(o,t),a)}return r}function bs(t,e,i,n){var s=n?li:ai,r=-1,o=e.length,a=t;for(t===e&&(e=nr(e)),i&&(a=Qe(t,mi(i)));++r<o;)for(var l=0,u=e[r],c=i?i(u):u;(l=s(a,c,l,n))>-1;)a!==t&&Me.call(a,l,1),Me.call(t,l,1);return t}function ws(t,e){for(var i=t?e.length:0,n=i-1;i--;){var s=e[i];if(i==n||s!==r){var r=s;Yr(s)?Me.call(t,s,1):Ls(t,s)}}return t}function xs(t,e){return t+Li(Xi()*(e-t+1))}function Cs(t,e){var i="";if(!t||e<1||e>N)return i;do{e%2&&(i+=t),(e=Li(e/2))&&(t+=t)}while(e);return i}function ks(t,e){return so(to(t,e,Il),t+"")}function Ts(t){return Tn(pl(t))}function Ds(t,e){var i=pl(t);return ao(i,Mn(e,0,i.length))}function Ss(t,e,i,n){if(!Sa(t))return t;for(var s=-1,o=(e=Vs(e,t)).length,a=o-1,l=t;null!=l&&++s<o;){var u=uo(e[s]),c=i;if(s!=a){var h=l[u];(c=n?n(h,u,l):r)===r&&(c=Sa(h)?h:Yr(e[s+1])?[]:{})}En(l,u,c),l=l[u]}return t}var As=sn?function(t,e){return sn.set(t,e),t}:Il,Es=di?function(t,e){return di(t,"toString",{configurable:!0,enumerable:!1,value:Sl(e),writable:!0})}:Il;function Is(t){return ao(pl(t))}function Os(t,e,i){var s=-1,r=t.length;e<0&&(e=-e>r?0:r+e),(i=i>r?r:i)<0&&(i+=r),r=e>i?0:i-e>>>0,e>>>=0;for(var o=n(r);++s<r;)o[s]=t[s+e];return o}function $s(t,e){var i;return Fn(t,function(t,n,s){return!(i=e(t,n,s))}),!!i}function Ps(t,e,i){var n=0,s=null==t?n:t.length;if("number"==typeof e&&e==e&&s<=L){for(;n<s;){var r=n+s>>>1,o=t[r];null!==o&&!Ma(o)&&(i?o<=e:o<e)?n=r+1:s=r}return s}return Ns(t,e,Il,i)}function Ns(t,e,i,n){e=i(e);for(var s=0,o=null==t?0:t.length,a=e!=e,l=null===e,u=Ma(e),c=e===r;s<o;){var h=Li((s+o)/2),d=i(t[h]),p=d!==r,f=null===d,g=d==d,m=Ma(d);if(a)var v=n||g;else v=c?g&&(n||p):l?g&&p&&(n||!f):u?g&&p&&!f&&(n||!m):!f&&!m&&(n?d<=e:d<e);v?s=h+1:o=h}return Yi(o,R)}function Ms(t,e){for(var i=-1,n=t.length,s=0,r=[];++i<n;){var o=t[i],a=e?e(o):o;if(!i||!pa(a,l)){var l=a;r[s++]=0===o?0:o}}return r}function js(t){return"number"==typeof t?t:Ma(t)?j:+t}function Hs(t){if("string"==typeof t)return t;if(va(t))return Qe(t,Hs)+"";if(Ma(t))return pn?pn.call(t):"";var e=t+"";return"0"==e&&1/t==-P?"-0":e}function Rs(t,e,i){var n=-1,s=Ze,r=t.length,a=!0,l=[],u=l;if(i)a=!1,s=Je;else if(r>=o){var c=e?null:Cr(t);if(c)return Ei(c);a=!1,s=_i,u=new xn}else u=e?[]:l;t:for(;++n<r;){var h=t[n],d=e?e(h):h;if(h=i||0!==h?h:0,a&&d==d){for(var p=u.length;p--;)if(u[p]===d)continue t;e&&u.push(d),l.push(h)}else s(u,d,i)||(u!==l&&u.push(d),l.push(h))}return l}function Ls(t,e){return null==(t=eo(t,e=Vs(e,t)))||delete t[uo(Co(e))]}function Fs(t,e,i,n){return Ss(t,e,i(Zn(t,e)),n)}function zs(t,e,i,n){for(var s=t.length,r=n?s:-1;(n?r--:++r<s)&&e(t[r],r,t););return i?Os(t,n?0:r,n?r+1:s):Os(t,n?r+1:0,n?s:r)}function Ws(t,e){var i=t;return i instanceof _n&&(i=i.value()),ei(e,function(t,e){return e.func.apply(e.thisArg,ti([t],e.args))},i)}function qs(t,e,i){var s=t.length;if(s<2)return s?Rs(t[0]):[];for(var r=-1,o=n(s);++r<s;)for(var a=t[r],l=-1;++l<s;)l!=r&&(o[r]=Ln(o[r]||a,t[l],e,i));return Rs(Bn(o,1),e,i)}function Us(t,e,i){for(var n=-1,s=t.length,o=e.length,a={};++n<s;){var l=n<o?e[n]:r;i(a,t[n],l)}return a}function Bs(t){return ba(t)?t:[]}function Ys(t){return"function"==typeof t?t:Il}function Vs(t,e){return va(t)?t:Kr(t,e)?[t]:lo(Ba(t))}var Ks=ks;function Xs(t,e,i){var n=t.length;return i=i===r?n:i,!e&&i>=n?t:Os(t,e,i)}var Gs=Mi||function(t){return Pe.clearTimeout(t)};function Zs(t,e){if(e)return t.slice();var i=t.length,n=Ae?Ae(i):new t.constructor(i);return t.copy(n),n}function Js(t){var e=new t.constructor(t.byteLength);return new xe(e).set(new xe(t)),e}function Qs(t,e){var i=e?Js(t.buffer):t.buffer;return new t.constructor(i,t.byteOffset,t.length)}function tr(t,e){if(t!==e){var i=t!==r,n=null===t,s=t==t,o=Ma(t),a=e!==r,l=null===e,u=e==e,c=Ma(e);if(!l&&!c&&!o&&t>e||o&&a&&u&&!l&&!c||n&&a&&u||!i&&u||!s)return 1;if(!n&&!o&&!c&&t<e||c&&i&&s&&!n&&!o||l&&i&&s||!a&&s||!u)return-1}return 0}function er(t,e,i,s){for(var r=-1,o=t.length,a=i.length,l=-1,u=e.length,c=Bi(o-a,0),h=n(u+c),d=!s;++l<u;)h[l]=e[l];for(;++r<a;)(d||r<o)&&(h[i[r]]=t[r]);for(;c--;)h[l++]=t[r++];return h}function ir(t,e,i,s){for(var r=-1,o=t.length,a=-1,l=i.length,u=-1,c=e.length,h=Bi(o-l,0),d=n(h+c),p=!s;++r<h;)d[r]=t[r];for(var f=r;++u<c;)d[f+u]=e[u];for(;++a<l;)(p||r<o)&&(d[f+i[a]]=t[r++]);return d}function nr(t,e){var i=-1,s=t.length;for(e||(e=n(s));++i<s;)e[i]=t[i];return e}function sr(t,e,i,n){var s=!i;i||(i={});for(var o=-1,a=e.length;++o<a;){var l=e[o],u=n?n(i[l],t[l],l,i,t):r;u===r&&(u=t[l]),s?Pn(i,l,u):En(i,l,u)}return i}function rr(t,e){return function(i,n){var s=va(i)?Ye:On,r=e?e():{};return s(i,t,jr(n,2),r)}}function or(t){return ks(function(e,i){var n=-1,s=i.length,o=s>1?i[s-1]:r,a=s>2?i[2]:r;for(o=t.length>3&&"function"==typeof o?(s--,o):r,a&&Vr(i[0],i[1],a)&&(o=s<3?r:o,s=1),e=ee(e);++n<s;){var l=i[n];l&&t(e,l,n,o)}return e})}function ar(t,e){return function(i,n){if(null==i)return i;if(!ya(i))return t(i,n);for(var s=i.length,r=e?s:-1,o=ee(i);(e?r--:++r<s)&&!1!==n(o[r],r,o););return i}}function lr(t){return function(e,i,n){for(var s=-1,r=ee(e),o=n(e),a=o.length;a--;){var l=o[t?a:++s];if(!1===i(r[l],l,r))break}return e}}function ur(t){return function(e){var i=ki(e=Ba(e))?$i(e):r,n=i?i[0]:e.charAt(0),s=i?Xs(i,1).join(""):e.slice(1);return n[t]()+s}}function cr(t){return function(e){return ei(kl(ml(e).replace(_e,"")),t,"")}}function hr(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var i=gn(t.prototype),n=t.apply(i,e);return Sa(n)?n:i}}function dr(t){return function(e,i,n){var s=ee(e);if(!ya(e)){var o=jr(i,3);e=sl(e),i=function(t){return o(s[t],t,s)}}var a=t(e,i,n);return a>-1?s[o?e[a]:a]:r}}function pr(t){return Ir(function(e){var i=e.length,n=i,s=vn.prototype.thru;for(t&&e.reverse();n--;){var o=e[n];if("function"!=typeof o)throw new se(l);if(s&&!a&&"wrapper"==Nr(o))var a=new vn([],!0)}for(n=a?n:i;++n<i;){var u=Nr(o=e[n]),c="wrapper"==u?Pr(o):r;a=c&&Xr(c[0])&&c[1]==(k|b|x|T)&&!c[4].length&&1==c[9]?a[Nr(c[0])].apply(a,c[3]):1==o.length&&Xr(o)?a[u]():a.thru(o)}return function(){var t=arguments,n=t[0];if(a&&1==t.length&&va(n))return a.plant(n).value();for(var s=0,r=i?e[s].apply(this,t):n;++s<i;)r=e[s].call(this,r);return r}})}function fr(t,e,i,s,o,a,l,u,c,h){var d=e&k,p=e&v,f=e&_,g=e&(b|w),m=e&D,y=f?r:hr(t);return function v(){for(var _=arguments.length,b=n(_),w=_;w--;)b[w]=arguments[w];if(g)var x=Mr(v),C=function(t,e){for(var i=t.length,n=0;i--;)t[i]===e&&++n;return n}(b,x);if(s&&(b=er(b,s,o,g)),a&&(b=ir(b,a,l,g)),_-=C,g&&_<h){var k=Si(b,x);return wr(t,e,fr,v.placeholder,i,b,k,u,c,h-_)}var T=p?i:this,D=f?T[t]:t;return _=b.length,u?b=function(t,e){for(var i=t.length,n=Yi(e.length,i),s=nr(t);n--;){var o=e[n];t[n]=Yr(o,i)?s[o]:r}return t}(b,u):m&&_>1&&b.reverse(),d&&c<_&&(b.length=c),this&&this!==Pe&&this instanceof v&&(D=y||hr(D)),D.apply(T,b)}}function gr(t,e){return function(i,n){return function(t,e,i,n){return Kn(t,function(t,s,r){e(n,i(t),s,r)}),n}(i,t,e(n),{})}}function mr(t,e){return function(i,n){var s;if(i===r&&n===r)return e;if(i!==r&&(s=i),n!==r){if(s===r)return n;"string"==typeof i||"string"==typeof n?(i=Hs(i),n=Hs(n)):(i=js(i),n=js(n)),s=t(i,n)}return s}}function vr(t){return Ir(function(e){return e=Qe(e,mi(jr())),ks(function(i){var n=this;return t(e,function(t){return Be(t,n,i)})})})}function _r(t,e){var i=(e=e===r?" ":Hs(e)).length;if(i<2)return i?Cs(e,t):e;var n=Cs(e,Ri(t/Oi(e)));return ki(e)?Xs($i(n),0,t).join(""):n.slice(0,t)}function yr(t){return function(e,i,s){return s&&"number"!=typeof s&&Vr(e,i,s)&&(i=s=r),e=Fa(e),i===r?(i=e,e=0):i=Fa(i),function(t,e,i,s){for(var r=-1,o=Bi(Ri((e-t)/(i||1)),0),a=n(o);o--;)a[s?o:++r]=t,t+=i;return a}(e,i,s=s===r?e<i?1:-1:Fa(s),t)}}function br(t){return function(e,i){return"string"==typeof e&&"string"==typeof i||(e=qa(e),i=qa(i)),t(e,i)}}function wr(t,e,i,n,s,o,a,l,u,c){var h=e&b;e|=h?x:C,(e&=~(h?C:x))&y||(e&=~(v|_));var d=[t,e,s,h?o:r,h?a:r,h?r:o,h?r:a,l,u,c],p=i.apply(r,d);return Xr(t)&&io(p,d),p.placeholder=n,ro(p,t,e)}function xr(t){var e=te[t];return function(t,i){if(t=qa(t),i=null==i?0:Yi(za(i),292)){var n=(Ba(t)+"e").split("e");return+((n=(Ba(e(n[0]+"e"+(+n[1]+i)))+"e").split("e"))[0]+"e"+(+n[1]-i))}return e(t)}}var Cr=tn&&1/Ei(new tn([,-0]))[1]==P?function(t){return new tn(t)}:Ml;function kr(t){return function(e){var i=Wr(e);return i==G?Ti(e):i==it?Ii(e):function(t,e){return Qe(e,function(e){return[e,t[e]]})}(e,t(e))}}function Tr(t,e,i,s,o,a,u,c){var d=e&_;if(!d&&"function"!=typeof t)throw new se(l);var p=s?s.length:0;if(p||(e&=~(x|C),s=o=r),u=u===r?u:Bi(za(u),0),c=c===r?c:za(c),p-=o?o.length:0,e&C){var f=s,g=o;s=o=r}var m=d?r:Pr(t),D=[t,e,i,s,o,f,g,a,u,c];if(m&&function(t,e){var i=t[1],n=e[1],s=i|n,r=s<(v|_|k),o=n==k&&i==b||n==k&&i==T&&t[7].length<=e[8]||n==(k|T)&&e[7].length<=e[8]&&i==b;if(!r&&!o)return t;n&v&&(t[2]=e[2],s|=i&v?0:y);var a=e[3];if(a){var l=t[3];t[3]=l?er(l,a,e[4]):a,t[4]=l?Si(t[3],h):e[4]}(a=e[5])&&(l=t[5],t[5]=l?ir(l,a,e[6]):a,t[6]=l?Si(t[5],h):e[6]),(a=e[7])&&(t[7]=a),n&k&&(t[8]=null==t[8]?e[8]:Yi(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=s}(D,m),t=D[0],e=D[1],i=D[2],s=D[3],o=D[4],!(c=D[9]=D[9]===r?d?0:t.length:Bi(D[9]-p,0))&&e&(b|w)&&(e&=~(b|w)),e&&e!=v)S=e==b||e==w?function(t,e,i){var s=hr(t);return function o(){for(var a=arguments.length,l=n(a),u=a,c=Mr(o);u--;)l[u]=arguments[u];var h=a<3&&l[0]!==c&&l[a-1]!==c?[]:Si(l,c);return(a-=h.length)<i?wr(t,e,fr,o.placeholder,r,l,h,r,r,i-a):Be(this&&this!==Pe&&this instanceof o?s:t,this,l)}}(t,e,c):e!=x&&e!=(v|x)||o.length?fr.apply(r,D):function(t,e,i,s){var r=e&v,o=hr(t);return function e(){for(var a=-1,l=arguments.length,u=-1,c=s.length,h=n(c+l),d=this&&this!==Pe&&this instanceof e?o:t;++u<c;)h[u]=s[u];for(;l--;)h[u++]=arguments[++a];return Be(d,r?i:this,h)}}(t,e,i,s);else var S=function(t,e,i){var n=e&v,s=hr(t);return function e(){return(this&&this!==Pe&&this instanceof e?s:t).apply(n?i:this,arguments)}}(t,e,i);return ro((m?As:io)(S,D),t,e)}function Dr(t,e,i,n){return t===r||pa(t,ae[i])&&!ce.call(n,i)?e:t}function Sr(t,e,i,n,s,o){return Sa(t)&&Sa(e)&&(o.set(e,t),ms(t,e,r,Sr,o),o.delete(e)),t}function Ar(t){return Oa(t)?r:t}function Er(t,e,i,n,s,o){var a=i&g,l=t.length,u=e.length;if(l!=u&&!(a&&u>l))return!1;var c=o.get(t);if(c&&o.get(e))return c==e;var h=-1,d=!0,p=i&m?new xn:r;for(o.set(t,e),o.set(e,t);++h<l;){var f=t[h],v=e[h];if(n)var _=a?n(v,f,h,e,t,o):n(f,v,h,t,e,o);if(_!==r){if(_)continue;d=!1;break}if(p){if(!ni(e,function(t,e){if(!_i(p,e)&&(f===t||s(f,t,i,n,o)))return p.push(e)})){d=!1;break}}else if(f!==v&&!s(f,v,i,n,o)){d=!1;break}}return o.delete(t),o.delete(e),d}function Ir(t){return so(to(t,r,_o),t+"")}function Or(t){return Jn(t,sl,Fr)}function $r(t){return Jn(t,rl,zr)}var Pr=sn?function(t){return sn.get(t)}:Ml;function Nr(t){for(var e=t.name+"",i=rn[e],n=ce.call(rn,e)?i.length:0;n--;){var s=i[n],r=s.func;if(null==r||r==t)return s.name}return e}function Mr(t){return(ce.call(fn,"placeholder")?fn:t).placeholder}function jr(){var t=fn.iteratee||Ol;return t=t===Ol?us:t,arguments.length?t(arguments[0],arguments[1]):t}function Hr(t,e){var i,n,s=t.__data__;return("string"==(n=typeof(i=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==i:null===i)?s["string"==typeof e?"string":"hash"]:s.map}function Rr(t){for(var e=sl(t),i=e.length;i--;){var n=e[i],s=t[n];e[i]=[n,s,Jr(s)]}return e}function Lr(t,e){var i=function(t,e){return null==t?r:t[e]}(t,e);return ls(i)?i:r}var Fr=Fi?function(t){return null==t?[]:(t=ee(t),Ge(Fi(t),function(e){return Ne.call(t,e)}))}:Wl,zr=Fi?function(t){for(var e=[];t;)ti(e,Fr(t)),t=Oe(t);return e}:Wl,Wr=Qn;function qr(t,e,i){for(var n=-1,s=(e=Vs(e,t)).length,r=!1;++n<s;){var o=uo(e[n]);if(!(r=null!=t&&i(t,o)))break;t=t[o]}return r||++n!=s?r:!!(s=null==t?0:t.length)&&Da(s)&&Yr(o,s)&&(va(t)||ma(t))}function Ur(t){return"function"!=typeof t.constructor||Zr(t)?{}:gn(Oe(t))}function Br(t){return va(t)||ma(t)||!!(He&&t&&t[He])}function Yr(t,e){var i=typeof t;return!!(e=null==e?N:e)&&("number"==i||"symbol"!=i&&Kt.test(t))&&t>-1&&t%1==0&&t<e}function Vr(t,e,i){if(!Sa(i))return!1;var n=typeof e;return!!("number"==n?ya(i)&&Yr(e,i.length):"string"==n&&e in i)&&pa(i[e],t)}function Kr(t,e){if(va(t))return!1;var i=typeof t;return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=t&&!Ma(t))||It.test(t)||!Et.test(t)||null!=e&&t in ee(e)}function Xr(t){var e=Nr(t),i=fn[e];if("function"!=typeof i||!(e in _n.prototype))return!1;if(t===i)return!0;var n=Pr(i);return!!n&&t===n[0]}(Zi&&Wr(new Zi(new ArrayBuffer(1)))!=ut||Ji&&Wr(new Ji)!=G||Qi&&"[object Promise]"!=Wr(Qi.resolve())||tn&&Wr(new tn)!=it||en&&Wr(new en)!=ot)&&(Wr=function(t){var e=Qn(t),i=e==Q?t.constructor:r,n=i?co(i):"";if(n)switch(n){case on:return ut;case an:return G;case ln:return"[object Promise]";case un:return it;case cn:return ot}return e});var Gr=le?ka:ql;function Zr(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||ae)}function Jr(t){return t==t&&!Sa(t)}function Qr(t,e){return function(i){return null!=i&&i[t]===e&&(e!==r||t in ee(i))}}function to(t,e,i){return e=Bi(e===r?t.length-1:e,0),function(){for(var s=arguments,r=-1,o=Bi(s.length-e,0),a=n(o);++r<o;)a[r]=s[e+r];r=-1;for(var l=n(e+1);++r<e;)l[r]=s[r];return l[e]=i(a),Be(t,this,l)}}function eo(t,e){return e.length<2?t:Zn(t,Os(e,0,-1))}var io=oo(As),no=Hi||function(t,e){return Pe.setTimeout(t,e)},so=oo(Es);function ro(t,e,i){var n=e+"";return so(t,function(t,e){var i=e.length;if(!i)return t;var n=i-1;return e[n]=(i>1?"& ":"")+e[n],e=e.join(i>2?", ":" "),t.replace(Ht,"{\n/* [wrapped with "+e+"] */\n")}(n,function(t,e){return Ve(F,function(i){var n="_."+i[0];e&i[1]&&!Ze(t,n)&&t.push(n)}),t.sort()}(function(t){var e=t.match(Rt);return e?e[1].split(Lt):[]}(n),i)))}function oo(t){var e=0,i=0;return function(){var n=Vi(),s=I-(n-i);if(i=n,s>0){if(++e>=E)return arguments[0]}else e=0;return t.apply(r,arguments)}}function ao(t,e){var i=-1,n=t.length,s=n-1;for(e=e===r?n:e;++i<e;){var o=xs(i,s),a=t[o];t[o]=t[i],t[i]=a}return t.length=e,t}var lo=function(t){var e=aa(t,function(t){return i.size===c&&i.clear(),t}),i=e.cache;return e}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Ot,function(t,i,n,s){e.push(n?s.replace(zt,"$1"):i||t)}),e});function uo(t){if("string"==typeof t||Ma(t))return t;var e=t+"";return"0"==e&&1/t==-P?"-0":e}function co(t){if(null!=t){try{return ue.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function ho(t){if(t instanceof _n)return t.clone();var e=new vn(t.__wrapped__,t.__chain__);return e.__actions__=nr(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}var po=ks(function(t,e){return ba(t)?Ln(t,Bn(e,1,ba,!0)):[]}),fo=ks(function(t,e){var i=Co(e);return ba(i)&&(i=r),ba(t)?Ln(t,Bn(e,1,ba,!0),jr(i,2)):[]}),go=ks(function(t,e){var i=Co(e);return ba(i)&&(i=r),ba(t)?Ln(t,Bn(e,1,ba,!0),r,i):[]});function mo(t,e,i){var n=null==t?0:t.length;if(!n)return-1;var s=null==i?0:za(i);return s<0&&(s=Bi(n+s,0)),oi(t,jr(e,3),s)}function vo(t,e,i){var n=null==t?0:t.length;if(!n)return-1;var s=n-1;return i!==r&&(s=za(i),s=i<0?Bi(n+s,0):Yi(s,n-1)),oi(t,jr(e,3),s,!0)}function _o(t){return null!=t&&t.length?Bn(t,1):[]}function yo(t){return t&&t.length?t[0]:r}var bo=ks(function(t){var e=Qe(t,Bs);return e.length&&e[0]===t[0]?ns(e):[]}),wo=ks(function(t){var e=Co(t),i=Qe(t,Bs);return e===Co(i)?e=r:i.pop(),i.length&&i[0]===t[0]?ns(i,jr(e,2)):[]}),xo=ks(function(t){var e=Co(t),i=Qe(t,Bs);return(e="function"==typeof e?e:r)&&i.pop(),i.length&&i[0]===t[0]?ns(i,r,e):[]});function Co(t){var e=null==t?0:t.length;return e?t[e-1]:r}var ko=ks(To);function To(t,e){return t&&t.length&&e&&e.length?bs(t,e):t}var Do=Ir(function(t,e){var i=null==t?0:t.length,n=Nn(t,e);return ws(t,Qe(e,function(t){return Yr(t,i)?+t:t}).sort(tr)),n});function So(t){return null==t?t:Gi.call(t)}var Ao=ks(function(t){return Rs(Bn(t,1,ba,!0))}),Eo=ks(function(t){var e=Co(t);return ba(e)&&(e=r),Rs(Bn(t,1,ba,!0),jr(e,2))}),Io=ks(function(t){var e=Co(t);return e="function"==typeof e?e:r,Rs(Bn(t,1,ba,!0),r,e)});function Oo(t){if(!t||!t.length)return[];var e=0;return t=Ge(t,function(t){if(ba(t))return e=Bi(t.length,e),!0}),gi(e,function(e){return Qe(t,hi(e))})}function $o(t,e){if(!t||!t.length)return[];var i=Oo(t);return null==e?i:Qe(i,function(t){return Be(e,r,t)})}var Po=ks(function(t,e){return ba(t)?Ln(t,e):[]}),No=ks(function(t){return qs(Ge(t,ba))}),Mo=ks(function(t){var e=Co(t);return ba(e)&&(e=r),qs(Ge(t,ba),jr(e,2))}),jo=ks(function(t){var e=Co(t);return e="function"==typeof e?e:r,qs(Ge(t,ba),r,e)}),Ho=ks(Oo);var Ro=ks(function(t){var e=t.length,i=e>1?t[e-1]:r;return $o(t,i="function"==typeof i?(t.pop(),i):r)});function Lo(t){var e=fn(t);return e.__chain__=!0,e}function Fo(t,e){return e(t)}var zo=Ir(function(t){var e=t.length,i=e?t[0]:0,n=this.__wrapped__,s=function(e){return Nn(e,t)};return!(e>1||this.__actions__.length)&&n instanceof _n&&Yr(i)?((n=n.slice(i,+i+(e?1:0))).__actions__.push({func:Fo,args:[s],thisArg:r}),new vn(n,this.__chain__).thru(function(t){return e&&!t.length&&t.push(r),t})):this.thru(s)});var Wo=rr(function(t,e,i){ce.call(t,i)?++t[i]:Pn(t,i,1)});var qo=dr(mo),Uo=dr(vo);function Bo(t,e){return(va(t)?Ve:Fn)(t,jr(e,3))}function Yo(t,e){return(va(t)?Ke:zn)(t,jr(e,3))}var Vo=rr(function(t,e,i){ce.call(t,i)?t[i].push(e):Pn(t,i,[e])});var Ko=ks(function(t,e,i){var s=-1,r="function"==typeof e,o=ya(t)?n(t.length):[];return Fn(t,function(t){o[++s]=r?Be(e,t,i):ss(t,e,i)}),o}),Xo=rr(function(t,e,i){Pn(t,i,e)});function Go(t,e){return(va(t)?Qe:ps)(t,jr(e,3))}var Zo=rr(function(t,e,i){t[i?0:1].push(e)},function(){return[[],[]]});var Jo=ks(function(t,e){if(null==t)return[];var i=e.length;return i>1&&Vr(t,e[0],e[1])?e=[]:i>2&&Vr(e[0],e[1],e[2])&&(e=[e[0]]),_s(t,Bn(e,1),[])}),Qo=ji||function(){return Pe.Date.now()};function ta(t,e,i){return e=i?r:e,e=t&&null==e?t.length:e,Tr(t,k,r,r,r,r,e)}function ea(t,e){var i;if("function"!=typeof e)throw new se(l);return t=za(t),function(){return--t>0&&(i=e.apply(this,arguments)),t<=1&&(e=r),i}}var ia=ks(function(t,e,i){var n=v;if(i.length){var s=Si(i,Mr(ia));n|=x}return Tr(t,n,e,i,s)}),na=ks(function(t,e,i){var n=v|_;if(i.length){var s=Si(i,Mr(na));n|=x}return Tr(e,n,t,i,s)});function sa(t,e,i){var n,s,o,a,u,c,h=0,d=!1,p=!1,f=!0;if("function"!=typeof t)throw new se(l);function g(e){var i=n,o=s;return n=s=r,h=e,a=t.apply(o,i)}function m(t){var i=t-c;return c===r||i>=e||i<0||p&&t-h>=o}function v(){var t=Qo();if(m(t))return _(t);u=no(v,function(t){var i=e-(t-c);return p?Yi(i,o-(t-h)):i}(t))}function _(t){return u=r,f&&n?g(t):(n=s=r,a)}function y(){var t=Qo(),i=m(t);if(n=arguments,s=this,c=t,i){if(u===r)return function(t){return h=t,u=no(v,e),d?g(t):a}(c);if(p)return u=no(v,e),g(c)}return u===r&&(u=no(v,e)),a}return e=qa(e)||0,Sa(i)&&(d=!!i.leading,o=(p="maxWait"in i)?Bi(qa(i.maxWait)||0,e):o,f="trailing"in i?!!i.trailing:f),y.cancel=function(){u!==r&&Gs(u),h=0,n=c=s=u=r},y.flush=function(){return u===r?a:_(Qo())},y}var ra=ks(function(t,e){return Rn(t,1,e)}),oa=ks(function(t,e,i){return Rn(t,qa(e)||0,i)});function aa(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new se(l);var i=function(){var n=arguments,s=e?e.apply(this,n):n[0],r=i.cache;if(r.has(s))return r.get(s);var o=t.apply(this,n);return i.cache=r.set(s,o)||r,o};return i.cache=new(aa.Cache||wn),i}function la(t){if("function"!=typeof t)throw new se(l);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}aa.Cache=wn;var ua=Ks(function(t,e){var i=(e=1==e.length&&va(e[0])?Qe(e[0],mi(jr())):Qe(Bn(e,1),mi(jr()))).length;return ks(function(n){for(var s=-1,r=Yi(n.length,i);++s<r;)n[s]=e[s].call(this,n[s]);return Be(t,this,n)})}),ca=ks(function(t,e){var i=Si(e,Mr(ca));return Tr(t,x,r,e,i)}),ha=ks(function(t,e){var i=Si(e,Mr(ha));return Tr(t,C,r,e,i)}),da=Ir(function(t,e){return Tr(t,T,r,r,r,e)});function pa(t,e){return t===e||t!=t&&e!=e}var fa=br(ts),ga=br(function(t,e){return t>=e}),ma=rs(function(){return arguments}())?rs:function(t){return Aa(t)&&ce.call(t,"callee")&&!Ne.call(t,"callee")},va=n.isArray,_a=Le?mi(Le):function(t){return Aa(t)&&Qn(t)==lt};function ya(t){return null!=t&&Da(t.length)&&!ka(t)}function ba(t){return Aa(t)&&ya(t)}var wa=zi||ql,xa=Fe?mi(Fe):function(t){return Aa(t)&&Qn(t)==B};function Ca(t){if(!Aa(t))return!1;var e=Qn(t);return e==V||e==Y||"string"==typeof t.message&&"string"==typeof t.name&&!Oa(t)}function ka(t){if(!Sa(t))return!1;var e=Qn(t);return e==K||e==X||e==q||e==tt}function Ta(t){return"number"==typeof t&&t==za(t)}function Da(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=N}function Sa(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Aa(t){return null!=t&&"object"==typeof t}var Ea=ze?mi(ze):function(t){return Aa(t)&&Wr(t)==G};function Ia(t){return"number"==typeof t||Aa(t)&&Qn(t)==Z}function Oa(t){if(!Aa(t)||Qn(t)!=Q)return!1;var e=Oe(t);if(null===e)return!0;var i=ce.call(e,"constructor")&&e.constructor;return"function"==typeof i&&i instanceof i&&ue.call(i)==fe}var $a=We?mi(We):function(t){return Aa(t)&&Qn(t)==et};var Pa=qe?mi(qe):function(t){return Aa(t)&&Wr(t)==it};function Na(t){return"string"==typeof t||!va(t)&&Aa(t)&&Qn(t)==nt}function Ma(t){return"symbol"==typeof t||Aa(t)&&Qn(t)==st}var ja=Ue?mi(Ue):function(t){return Aa(t)&&Da(t.length)&&!!De[Qn(t)]};var Ha=br(ds),Ra=br(function(t,e){return t<=e});function La(t){if(!t)return[];if(ya(t))return Na(t)?$i(t):nr(t);if(Re&&t[Re])return function(t){for(var e,i=[];!(e=t.next()).done;)i.push(e.value);return i}(t[Re]());var e=Wr(t);return(e==G?Ti:e==it?Ei:pl)(t)}function Fa(t){return t?(t=qa(t))===P||t===-P?(t<0?-1:1)*M:t==t?t:0:0===t?t:0}function za(t){var e=Fa(t),i=e%1;return e==e?i?e-i:e:0}function Wa(t){return t?Mn(za(t),0,H):0}function qa(t){if("number"==typeof t)return t;if(Ma(t))return j;if(Sa(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Sa(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Nt,"");var i=Bt.test(t);return i||Vt.test(t)?Ie(t.slice(2),i?2:8):Ut.test(t)?j:+t}function Ua(t){return sr(t,rl(t))}function Ba(t){return null==t?"":Hs(t)}var Ya=or(function(t,e){if(Zr(e)||ya(e))sr(e,sl(e),t);else for(var i in e)ce.call(e,i)&&En(t,i,e[i])}),Va=or(function(t,e){sr(e,rl(e),t)}),Ka=or(function(t,e,i,n){sr(e,rl(e),t,n)}),Xa=or(function(t,e,i,n){sr(e,sl(e),t,n)}),Ga=Ir(Nn);var Za=ks(function(t,e){t=ee(t);var i=-1,n=e.length,s=n>2?e[2]:r;for(s&&Vr(e[0],e[1],s)&&(n=1);++i<n;)for(var o=e[i],a=rl(o),l=-1,u=a.length;++l<u;){var c=a[l],h=t[c];(h===r||pa(h,ae[c])&&!ce.call(t,c))&&(t[c]=o[c])}return t}),Ja=ks(function(t){return t.push(r,Sr),Be(al,r,t)});function Qa(t,e,i){var n=null==t?r:Zn(t,e);return n===r?i:n}function tl(t,e){return null!=t&&qr(t,e,is)}var el=gr(function(t,e,i){null!=e&&"function"!=typeof e.toString&&(e=pe.call(e)),t[e]=i},Sl(Il)),il=gr(function(t,e,i){null!=e&&"function"!=typeof e.toString&&(e=pe.call(e)),ce.call(t,e)?t[e].push(i):t[e]=[i]},jr),nl=ks(ss);function sl(t){return ya(t)?kn(t):cs(t)}function rl(t){return ya(t)?kn(t,!0):hs(t)}var ol=or(function(t,e,i){ms(t,e,i)}),al=or(function(t,e,i,n){ms(t,e,i,n)}),ll=Ir(function(t,e){var i={};if(null==t)return i;var n=!1;e=Qe(e,function(e){return e=Vs(e,t),n||(n=e.length>1),e}),sr(t,$r(t),i),n&&(i=jn(i,d|p|f,Ar));for(var s=e.length;s--;)Ls(i,e[s]);return i});var ul=Ir(function(t,e){return null==t?{}:function(t,e){return ys(t,e,function(e,i){return tl(t,i)})}(t,e)});function cl(t,e){if(null==t)return{};var i=Qe($r(t),function(t){return[t]});return e=jr(e),ys(t,i,function(t,i){return e(t,i[0])})}var hl=kr(sl),dl=kr(rl);function pl(t){return null==t?[]:vi(t,sl(t))}var fl=cr(function(t,e,i){return e=e.toLowerCase(),t+(i?gl(e):e)});function gl(t){return Cl(Ba(t).toLowerCase())}function ml(t){return(t=Ba(t))&&t.replace(Xt,wi).replace(ye,"")}var vl=cr(function(t,e,i){return t+(i?"-":"")+e.toLowerCase()}),_l=cr(function(t,e,i){return t+(i?" ":"")+e.toLowerCase()}),yl=ur("toLowerCase");var bl=cr(function(t,e,i){return t+(i?"_":"")+e.toLowerCase()});var wl=cr(function(t,e,i){return t+(i?" ":"")+Cl(e)});var xl=cr(function(t,e,i){return t+(i?" ":"")+e.toUpperCase()}),Cl=ur("toUpperCase");function kl(t,e,i){return t=Ba(t),(e=i?r:e)===r?function(t){return Ce.test(t)}(t)?function(t){return t.match(we)||[]}(t):function(t){return t.match(Ft)||[]}(t):t.match(e)||[]}var Tl=ks(function(t,e){try{return Be(t,r,e)}catch(t){return Ca(t)?t:new Jt(t)}}),Dl=Ir(function(t,e){return Ve(e,function(e){e=uo(e),Pn(t,e,ia(t[e],t))}),t});function Sl(t){return function(){return t}}var Al=pr(),El=pr(!0);function Il(t){return t}function Ol(t){return us("function"==typeof t?t:jn(t,d))}var $l=ks(function(t,e){return function(i){return ss(i,t,e)}}),Pl=ks(function(t,e){return function(i){return ss(t,i,e)}});function Nl(t,e,i){var n=sl(e),s=Gn(e,n);null!=i||Sa(e)&&(s.length||!n.length)||(i=e,e=t,t=this,s=Gn(e,sl(e)));var r=!(Sa(i)&&"chain"in i&&!i.chain),o=ka(t);return Ve(s,function(i){var n=e[i];t[i]=n,o&&(t.prototype[i]=function(){var e=this.__chain__;if(r||e){var i=t(this.__wrapped__);return(i.__actions__=nr(this.__actions__)).push({func:n,args:arguments,thisArg:t}),i.__chain__=e,i}return n.apply(t,ti([this.value()],arguments))})}),t}function Ml(){}var jl=vr(Qe),Hl=vr(Xe),Rl=vr(ni);function Ll(t){return Kr(t)?hi(uo(t)):function(t){return function(e){return Zn(e,t)}}(t)}var Fl=yr(),zl=yr(!0);function Wl(){return[]}function ql(){return!1}var Ul=mr(function(t,e){return t+e},0),Bl=xr("ceil"),Yl=mr(function(t,e){return t/e},1),Vl=xr("floor");var Kl,Xl=mr(function(t,e){return t*e},1),Gl=xr("round"),Zl=mr(function(t,e){return t-e},0);return fn.after=function(t,e){if("function"!=typeof e)throw new se(l);return t=za(t),function(){if(--t<1)return e.apply(this,arguments)}},fn.ary=ta,fn.assign=Ya,fn.assignIn=Va,fn.assignInWith=Ka,fn.assignWith=Xa,fn.at=Ga,fn.before=ea,fn.bind=ia,fn.bindAll=Dl,fn.bindKey=na,fn.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return va(t)?t:[t]},fn.chain=Lo,fn.chunk=function(t,e,i){e=(i?Vr(t,e,i):e===r)?1:Bi(za(e),0);var s=null==t?0:t.length;if(!s||e<1)return[];for(var o=0,a=0,l=n(Ri(s/e));o<s;)l[a++]=Os(t,o,o+=e);return l},fn.compact=function(t){for(var e=-1,i=null==t?0:t.length,n=0,s=[];++e<i;){var r=t[e];r&&(s[n++]=r)}return s},fn.concat=function(){var t=arguments.length;if(!t)return[];for(var e=n(t-1),i=arguments[0],s=t;s--;)e[s-1]=arguments[s];return ti(va(i)?nr(i):[i],Bn(e,1))},fn.cond=function(t){var e=null==t?0:t.length,i=jr();return t=e?Qe(t,function(t){if("function"!=typeof t[1])throw new se(l);return[i(t[0]),t[1]]}):[],ks(function(i){for(var n=-1;++n<e;){var s=t[n];if(Be(s[0],this,i))return Be(s[1],this,i)}})},fn.conforms=function(t){return function(t){var e=sl(t);return function(i){return Hn(i,t,e)}}(jn(t,d))},fn.constant=Sl,fn.countBy=Wo,fn.create=function(t,e){var i=gn(t);return null==e?i:$n(i,e)},fn.curry=function t(e,i,n){var s=Tr(e,b,r,r,r,r,r,i=n?r:i);return s.placeholder=t.placeholder,s},fn.curryRight=function t(e,i,n){var s=Tr(e,w,r,r,r,r,r,i=n?r:i);return s.placeholder=t.placeholder,s},fn.debounce=sa,fn.defaults=Za,fn.defaultsDeep=Ja,fn.defer=ra,fn.delay=oa,fn.difference=po,fn.differenceBy=fo,fn.differenceWith=go,fn.drop=function(t,e,i){var n=null==t?0:t.length;return n?Os(t,(e=i||e===r?1:za(e))<0?0:e,n):[]},fn.dropRight=function(t,e,i){var n=null==t?0:t.length;return n?Os(t,0,(e=n-(e=i||e===r?1:za(e)))<0?0:e):[]},fn.dropRightWhile=function(t,e){return t&&t.length?zs(t,jr(e,3),!0,!0):[]},fn.dropWhile=function(t,e){return t&&t.length?zs(t,jr(e,3),!0):[]},fn.fill=function(t,e,i,n){var s=null==t?0:t.length;return s?(i&&"number"!=typeof i&&Vr(t,e,i)&&(i=0,n=s),function(t,e,i,n){var s=t.length;for((i=za(i))<0&&(i=-i>s?0:s+i),(n=n===r||n>s?s:za(n))<0&&(n+=s),n=i>n?0:Wa(n);i<n;)t[i++]=e;return t}(t,e,i,n)):[]},fn.filter=function(t,e){return(va(t)?Ge:Un)(t,jr(e,3))},fn.flatMap=function(t,e){return Bn(Go(t,e),1)},fn.flatMapDeep=function(t,e){return Bn(Go(t,e),P)},fn.flatMapDepth=function(t,e,i){return i=i===r?1:za(i),Bn(Go(t,e),i)},fn.flatten=_o,fn.flattenDeep=function(t){return null!=t&&t.length?Bn(t,P):[]},fn.flattenDepth=function(t,e){return null!=t&&t.length?Bn(t,e=e===r?1:za(e)):[]},fn.flip=function(t){return Tr(t,D)},fn.flow=Al,fn.flowRight=El,fn.fromPairs=function(t){for(var e=-1,i=null==t?0:t.length,n={};++e<i;){var s=t[e];n[s[0]]=s[1]}return n},fn.functions=function(t){return null==t?[]:Gn(t,sl(t))},fn.functionsIn=function(t){return null==t?[]:Gn(t,rl(t))},fn.groupBy=Vo,fn.initial=function(t){return null!=t&&t.length?Os(t,0,-1):[]},fn.intersection=bo,fn.intersectionBy=wo,fn.intersectionWith=xo,fn.invert=el,fn.invertBy=il,fn.invokeMap=Ko,fn.iteratee=Ol,fn.keyBy=Xo,fn.keys=sl,fn.keysIn=rl,fn.map=Go,fn.mapKeys=function(t,e){var i={};return e=jr(e,3),Kn(t,function(t,n,s){Pn(i,e(t,n,s),t)}),i},fn.mapValues=function(t,e){var i={};return e=jr(e,3),Kn(t,function(t,n,s){Pn(i,n,e(t,n,s))}),i},fn.matches=function(t){return fs(jn(t,d))},fn.matchesProperty=function(t,e){return gs(t,jn(e,d))},fn.memoize=aa,fn.merge=ol,fn.mergeWith=al,fn.method=$l,fn.methodOf=Pl,fn.mixin=Nl,fn.negate=la,fn.nthArg=function(t){return t=za(t),ks(function(e){return vs(e,t)})},fn.omit=ll,fn.omitBy=function(t,e){return cl(t,la(jr(e)))},fn.once=function(t){return ea(2,t)},fn.orderBy=function(t,e,i,n){return null==t?[]:(va(e)||(e=null==e?[]:[e]),va(i=n?r:i)||(i=null==i?[]:[i]),_s(t,e,i))},fn.over=jl,fn.overArgs=ua,fn.overEvery=Hl,fn.overSome=Rl,fn.partial=ca,fn.partialRight=ha,fn.partition=Zo,fn.pick=ul,fn.pickBy=cl,fn.property=Ll,fn.propertyOf=function(t){return function(e){return null==t?r:Zn(t,e)}},fn.pull=ko,fn.pullAll=To,fn.pullAllBy=function(t,e,i){return t&&t.length&&e&&e.length?bs(t,e,jr(i,2)):t},fn.pullAllWith=function(t,e,i){return t&&t.length&&e&&e.length?bs(t,e,r,i):t},fn.pullAt=Do,fn.range=Fl,fn.rangeRight=zl,fn.rearg=da,fn.reject=function(t,e){return(va(t)?Ge:Un)(t,la(jr(e,3)))},fn.remove=function(t,e){var i=[];if(!t||!t.length)return i;var n=-1,s=[],r=t.length;for(e=jr(e,3);++n<r;){var o=t[n];e(o,n,t)&&(i.push(o),s.push(n))}return ws(t,s),i},fn.rest=function(t,e){if("function"!=typeof t)throw new se(l);return ks(t,e=e===r?e:za(e))},fn.reverse=So,fn.sampleSize=function(t,e,i){return e=(i?Vr(t,e,i):e===r)?1:za(e),(va(t)?Dn:Ds)(t,e)},fn.set=function(t,e,i){return null==t?t:Ss(t,e,i)},fn.setWith=function(t,e,i,n){return n="function"==typeof n?n:r,null==t?t:Ss(t,e,i,n)},fn.shuffle=function(t){return(va(t)?Sn:Is)(t)},fn.slice=function(t,e,i){var n=null==t?0:t.length;return n?(i&&"number"!=typeof i&&Vr(t,e,i)?(e=0,i=n):(e=null==e?0:za(e),i=i===r?n:za(i)),Os(t,e,i)):[]},fn.sortBy=Jo,fn.sortedUniq=function(t){return t&&t.length?Ms(t):[]},fn.sortedUniqBy=function(t,e){return t&&t.length?Ms(t,jr(e,2)):[]},fn.split=function(t,e,i){return i&&"number"!=typeof i&&Vr(t,e,i)&&(e=i=r),(i=i===r?H:i>>>0)?(t=Ba(t))&&("string"==typeof e||null!=e&&!$a(e))&&!(e=Hs(e))&&ki(t)?Xs($i(t),0,i):t.split(e,i):[]},fn.spread=function(t,e){if("function"!=typeof t)throw new se(l);return e=null==e?0:Bi(za(e),0),ks(function(i){var n=i[e],s=Xs(i,0,e);return n&&ti(s,n),Be(t,this,s)})},fn.tail=function(t){var e=null==t?0:t.length;return e?Os(t,1,e):[]},fn.take=function(t,e,i){return t&&t.length?Os(t,0,(e=i||e===r?1:za(e))<0?0:e):[]},fn.takeRight=function(t,e,i){var n=null==t?0:t.length;return n?Os(t,(e=n-(e=i||e===r?1:za(e)))<0?0:e,n):[]},fn.takeRightWhile=function(t,e){return t&&t.length?zs(t,jr(e,3),!1,!0):[]},fn.takeWhile=function(t,e){return t&&t.length?zs(t,jr(e,3)):[]},fn.tap=function(t,e){return e(t),t},fn.throttle=function(t,e,i){var n=!0,s=!0;if("function"!=typeof t)throw new se(l);return Sa(i)&&(n="leading"in i?!!i.leading:n,s="trailing"in i?!!i.trailing:s),sa(t,e,{leading:n,maxWait:e,trailing:s})},fn.thru=Fo,fn.toArray=La,fn.toPairs=hl,fn.toPairsIn=dl,fn.toPath=function(t){return va(t)?Qe(t,uo):Ma(t)?[t]:nr(lo(Ba(t)))},fn.toPlainObject=Ua,fn.transform=function(t,e,i){var n=va(t),s=n||wa(t)||ja(t);if(e=jr(e,4),null==i){var r=t&&t.constructor;i=s?n?new r:[]:Sa(t)&&ka(r)?gn(Oe(t)):{}}return(s?Ve:Kn)(t,function(t,n,s){return e(i,t,n,s)}),i},fn.unary=function(t){return ta(t,1)},fn.union=Ao,fn.unionBy=Eo,fn.unionWith=Io,fn.uniq=function(t){return t&&t.length?Rs(t):[]},fn.uniqBy=function(t,e){return t&&t.length?Rs(t,jr(e,2)):[]},fn.uniqWith=function(t,e){return e="function"==typeof e?e:r,t&&t.length?Rs(t,r,e):[]},fn.unset=function(t,e){return null==t||Ls(t,e)},fn.unzip=Oo,fn.unzipWith=$o,fn.update=function(t,e,i){return null==t?t:Fs(t,e,Ys(i))},fn.updateWith=function(t,e,i,n){return n="function"==typeof n?n:r,null==t?t:Fs(t,e,Ys(i),n)},fn.values=pl,fn.valuesIn=function(t){return null==t?[]:vi(t,rl(t))},fn.without=Po,fn.words=kl,fn.wrap=function(t,e){return ca(Ys(e),t)},fn.xor=No,fn.xorBy=Mo,fn.xorWith=jo,fn.zip=Ho,fn.zipObject=function(t,e){return Us(t||[],e||[],En)},fn.zipObjectDeep=function(t,e){return Us(t||[],e||[],Ss)},fn.zipWith=Ro,fn.entries=hl,fn.entriesIn=dl,fn.extend=Va,fn.extendWith=Ka,Nl(fn,fn),fn.add=Ul,fn.attempt=Tl,fn.camelCase=fl,fn.capitalize=gl,fn.ceil=Bl,fn.clamp=function(t,e,i){return i===r&&(i=e,e=r),i!==r&&(i=(i=qa(i))==i?i:0),e!==r&&(e=(e=qa(e))==e?e:0),Mn(qa(t),e,i)},fn.clone=function(t){return jn(t,f)},fn.cloneDeep=function(t){return jn(t,d|f)},fn.cloneDeepWith=function(t,e){return jn(t,d|f,e="function"==typeof e?e:r)},fn.cloneWith=function(t,e){return jn(t,f,e="function"==typeof e?e:r)},fn.conformsTo=function(t,e){return null==e||Hn(t,e,sl(e))},fn.deburr=ml,fn.defaultTo=function(t,e){return null==t||t!=t?e:t},fn.divide=Yl,fn.endsWith=function(t,e,i){t=Ba(t),e=Hs(e);var n=t.length,s=i=i===r?n:Mn(za(i),0,n);return(i-=e.length)>=0&&t.slice(i,s)==e},fn.eq=pa,fn.escape=function(t){return(t=Ba(t))&&Tt.test(t)?t.replace(Ct,xi):t},fn.escapeRegExp=function(t){return(t=Ba(t))&&Pt.test(t)?t.replace($t,"\\$&"):t},fn.every=function(t,e,i){var n=va(t)?Xe:Wn;return i&&Vr(t,e,i)&&(e=r),n(t,jr(e,3))},fn.find=qo,fn.findIndex=mo,fn.findKey=function(t,e){return ri(t,jr(e,3),Kn)},fn.findLast=Uo,fn.findLastIndex=vo,fn.findLastKey=function(t,e){return ri(t,jr(e,3),Xn)},fn.floor=Vl,fn.forEach=Bo,fn.forEachRight=Yo,fn.forIn=function(t,e){return null==t?t:Yn(t,jr(e,3),rl)},fn.forInRight=function(t,e){return null==t?t:Vn(t,jr(e,3),rl)},fn.forOwn=function(t,e){return t&&Kn(t,jr(e,3))},fn.forOwnRight=function(t,e){return t&&Xn(t,jr(e,3))},fn.get=Qa,fn.gt=fa,fn.gte=ga,fn.has=function(t,e){return null!=t&&qr(t,e,es)},fn.hasIn=tl,fn.head=yo,fn.identity=Il,fn.includes=function(t,e,i,n){t=ya(t)?t:pl(t),i=i&&!n?za(i):0;var s=t.length;return i<0&&(i=Bi(s+i,0)),Na(t)?i<=s&&t.indexOf(e,i)>-1:!!s&&ai(t,e,i)>-1},fn.indexOf=function(t,e,i){var n=null==t?0:t.length;if(!n)return-1;var s=null==i?0:za(i);return s<0&&(s=Bi(n+s,0)),ai(t,e,s)},fn.inRange=function(t,e,i){return e=Fa(e),i===r?(i=e,e=0):i=Fa(i),function(t,e,i){return t>=Yi(e,i)&&t<Bi(e,i)}(t=qa(t),e,i)},fn.invoke=nl,fn.isArguments=ma,fn.isArray=va,fn.isArrayBuffer=_a,fn.isArrayLike=ya,fn.isArrayLikeObject=ba,fn.isBoolean=function(t){return!0===t||!1===t||Aa(t)&&Qn(t)==U},fn.isBuffer=wa,fn.isDate=xa,fn.isElement=function(t){return Aa(t)&&1===t.nodeType&&!Oa(t)},fn.isEmpty=function(t){if(null==t)return!0;if(ya(t)&&(va(t)||"string"==typeof t||"function"==typeof t.splice||wa(t)||ja(t)||ma(t)))return!t.length;var e=Wr(t);if(e==G||e==it)return!t.size;if(Zr(t))return!cs(t).length;for(var i in t)if(ce.call(t,i))return!1;return!0},fn.isEqual=function(t,e){return os(t,e)},fn.isEqualWith=function(t,e,i){var n=(i="function"==typeof i?i:r)?i(t,e):r;return n===r?os(t,e,r,i):!!n},fn.isError=Ca,fn.isFinite=function(t){return"number"==typeof t&&Wi(t)},fn.isFunction=ka,fn.isInteger=Ta,fn.isLength=Da,fn.isMap=Ea,fn.isMatch=function(t,e){return t===e||as(t,e,Rr(e))},fn.isMatchWith=function(t,e,i){return i="function"==typeof i?i:r,as(t,e,Rr(e),i)},fn.isNaN=function(t){return Ia(t)&&t!=+t},fn.isNative=function(t){if(Gr(t))throw new Jt(a);return ls(t)},fn.isNil=function(t){return null==t},fn.isNull=function(t){return null===t},fn.isNumber=Ia,fn.isObject=Sa,fn.isObjectLike=Aa,fn.isPlainObject=Oa,fn.isRegExp=$a,fn.isSafeInteger=function(t){return Ta(t)&&t>=-N&&t<=N},fn.isSet=Pa,fn.isString=Na,fn.isSymbol=Ma,fn.isTypedArray=ja,fn.isUndefined=function(t){return t===r},fn.isWeakMap=function(t){return Aa(t)&&Wr(t)==ot},fn.isWeakSet=function(t){return Aa(t)&&Qn(t)==at},fn.join=function(t,e){return null==t?"":qi.call(t,e)},fn.kebabCase=vl,fn.last=Co,fn.lastIndexOf=function(t,e,i){var n=null==t?0:t.length;if(!n)return-1;var s=n;return i!==r&&(s=(s=za(i))<0?Bi(n+s,0):Yi(s,n-1)),e==e?function(t,e,i){for(var n=i+1;n--;)if(t[n]===e)return n;return n}(t,e,s):oi(t,ui,s,!0)},fn.lowerCase=_l,fn.lowerFirst=yl,fn.lt=Ha,fn.lte=Ra,fn.max=function(t){return t&&t.length?qn(t,Il,ts):r},fn.maxBy=function(t,e){return t&&t.length?qn(t,jr(e,2),ts):r},fn.mean=function(t){return ci(t,Il)},fn.meanBy=function(t,e){return ci(t,jr(e,2))},fn.min=function(t){return t&&t.length?qn(t,Il,ds):r},fn.minBy=function(t,e){return t&&t.length?qn(t,jr(e,2),ds):r},fn.stubArray=Wl,fn.stubFalse=ql,fn.stubObject=function(){return{}},fn.stubString=function(){return""},fn.stubTrue=function(){return!0},fn.multiply=Xl,fn.nth=function(t,e){return t&&t.length?vs(t,za(e)):r},fn.noConflict=function(){return Pe._===this&&(Pe._=ge),this},fn.noop=Ml,fn.now=Qo,fn.pad=function(t,e,i){t=Ba(t);var n=(e=za(e))?Oi(t):0;if(!e||n>=e)return t;var s=(e-n)/2;return _r(Li(s),i)+t+_r(Ri(s),i)},fn.padEnd=function(t,e,i){t=Ba(t);var n=(e=za(e))?Oi(t):0;return e&&n<e?t+_r(e-n,i):t},fn.padStart=function(t,e,i){t=Ba(t);var n=(e=za(e))?Oi(t):0;return e&&n<e?_r(e-n,i)+t:t},fn.parseInt=function(t,e,i){return i||null==e?e=0:e&&(e=+e),Ki(Ba(t).replace(Mt,""),e||0)},fn.random=function(t,e,i){if(i&&"boolean"!=typeof i&&Vr(t,e,i)&&(e=i=r),i===r&&("boolean"==typeof e?(i=e,e=r):"boolean"==typeof t&&(i=t,t=r)),t===r&&e===r?(t=0,e=1):(t=Fa(t),e===r?(e=t,t=0):e=Fa(e)),t>e){var n=t;t=e,e=n}if(i||t%1||e%1){var s=Xi();return Yi(t+s*(e-t+Ee("1e-"+((s+"").length-1))),e)}return xs(t,e)},fn.reduce=function(t,e,i){var n=va(t)?ei:pi,s=arguments.length<3;return n(t,jr(e,4),i,s,Fn)},fn.reduceRight=function(t,e,i){var n=va(t)?ii:pi,s=arguments.length<3;return n(t,jr(e,4),i,s,zn)},fn.repeat=function(t,e,i){return e=(i?Vr(t,e,i):e===r)?1:za(e),Cs(Ba(t),e)},fn.replace=function(){var t=arguments,e=Ba(t[0]);return t.length<3?e:e.replace(t[1],t[2])},fn.result=function(t,e,i){var n=-1,s=(e=Vs(e,t)).length;for(s||(s=1,t=r);++n<s;){var o=null==t?r:t[uo(e[n])];o===r&&(n=s,o=i),t=ka(o)?o.call(t):o}return t},fn.round=Gl,fn.runInContext=t,fn.sample=function(t){return(va(t)?Tn:Ts)(t)},fn.size=function(t){if(null==t)return 0;if(ya(t))return Na(t)?Oi(t):t.length;var e=Wr(t);return e==G||e==it?t.size:cs(t).length},fn.snakeCase=bl,fn.some=function(t,e,i){var n=va(t)?ni:$s;return i&&Vr(t,e,i)&&(e=r),n(t,jr(e,3))},fn.sortedIndex=function(t,e){return Ps(t,e)},fn.sortedIndexBy=function(t,e,i){return Ns(t,e,jr(i,2))},fn.sortedIndexOf=function(t,e){var i=null==t?0:t.length;if(i){var n=Ps(t,e);if(n<i&&pa(t[n],e))return n}return-1},fn.sortedLastIndex=function(t,e){return Ps(t,e,!0)},fn.sortedLastIndexBy=function(t,e,i){return Ns(t,e,jr(i,2),!0)},fn.sortedLastIndexOf=function(t,e){if(null!=t&&t.length){var i=Ps(t,e,!0)-1;if(pa(t[i],e))return i}return-1},fn.startCase=wl,fn.startsWith=function(t,e,i){return t=Ba(t),i=null==i?0:Mn(za(i),0,t.length),e=Hs(e),t.slice(i,i+e.length)==e},fn.subtract=Zl,fn.sum=function(t){return t&&t.length?fi(t,Il):0},fn.sumBy=function(t,e){return t&&t.length?fi(t,jr(e,2)):0},fn.template=function(t,e,i){var n=fn.templateSettings;i&&Vr(t,e,i)&&(e=r),t=Ba(t),e=Ka({},e,n,Dr);var s,o,a=Ka({},e.imports,n.imports,Dr),l=sl(a),u=vi(a,l),c=0,h=e.interpolate||Gt,d="__p += '",p=ie((e.escape||Gt).source+"|"+h.source+"|"+(h===At?Wt:Gt).source+"|"+(e.evaluate||Gt).source+"|$","g"),f="//# sourceURL="+("sourceURL"in e?e.sourceURL:"lodash.templateSources["+ ++Te+"]")+"\n";t.replace(p,function(e,i,n,r,a,l){return n||(n=r),d+=t.slice(c,l).replace(Zt,Ci),i&&(s=!0,d+="' +\n__e("+i+") +\n'"),a&&(o=!0,d+="';\n"+a+";\n__p += '"),n&&(d+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),c=l+e.length,e}),d+="';\n";var g=e.variable;g||(d="with (obj) {\n"+d+"\n}\n"),d=(o?d.replace(yt,""):d).replace(bt,"$1").replace(wt,"$1;"),d="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(s?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var m=Tl(function(){return Qt(l,f+"return "+d).apply(r,u)});if(m.source=d,Ca(m))throw m;return m},fn.times=function(t,e){if((t=za(t))<1||t>N)return[];var i=H,n=Yi(t,H);e=jr(e),t-=H;for(var s=gi(n,e);++i<t;)e(i);return s},fn.toFinite=Fa,fn.toInteger=za,fn.toLength=Wa,fn.toLower=function(t){return Ba(t).toLowerCase()},fn.toNumber=qa,fn.toSafeInteger=function(t){return t?Mn(za(t),-N,N):0===t?t:0},fn.toString=Ba,fn.toUpper=function(t){return Ba(t).toUpperCase()},fn.trim=function(t,e,i){if((t=Ba(t))&&(i||e===r))return t.replace(Nt,"");if(!t||!(e=Hs(e)))return t;var n=$i(t),s=$i(e);return Xs(n,yi(n,s),bi(n,s)+1).join("")},fn.trimEnd=function(t,e,i){if((t=Ba(t))&&(i||e===r))return t.replace(jt,"");if(!t||!(e=Hs(e)))return t;var n=$i(t);return Xs(n,0,bi(n,$i(e))+1).join("")},fn.trimStart=function(t,e,i){if((t=Ba(t))&&(i||e===r))return t.replace(Mt,"");if(!t||!(e=Hs(e)))return t;var n=$i(t);return Xs(n,yi(n,$i(e))).join("")},fn.truncate=function(t,e){var i=S,n=A;if(Sa(e)){var s="separator"in e?e.separator:s;i="length"in e?za(e.length):i,n="omission"in e?Hs(e.omission):n}var o=(t=Ba(t)).length;if(ki(t)){var a=$i(t);o=a.length}if(i>=o)return t;var l=i-Oi(n);if(l<1)return n;var u=a?Xs(a,0,l).join(""):t.slice(0,l);if(s===r)return u+n;if(a&&(l+=u.length-l),$a(s)){if(t.slice(l).search(s)){var c,h=u;for(s.global||(s=ie(s.source,Ba(qt.exec(s))+"g")),s.lastIndex=0;c=s.exec(h);)var d=c.index;u=u.slice(0,d===r?l:d)}}else if(t.indexOf(Hs(s),l)!=l){var p=u.lastIndexOf(s);p>-1&&(u=u.slice(0,p))}return u+n},fn.unescape=function(t){return(t=Ba(t))&&kt.test(t)?t.replace(xt,Pi):t},fn.uniqueId=function(t){var e=++he;return Ba(t)+e},fn.upperCase=xl,fn.upperFirst=Cl,fn.each=Bo,fn.eachRight=Yo,fn.first=yo,Nl(fn,(Kl={},Kn(fn,function(t,e){ce.call(fn.prototype,e)||(Kl[e]=t)}),Kl),{chain:!1}),fn.VERSION="4.17.5",Ve(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){fn[t].placeholder=fn}),Ve(["drop","take"],function(t,e){_n.prototype[t]=function(i){i=i===r?1:Bi(za(i),0);var n=this.__filtered__&&!e?new _n(this):this.clone();return n.__filtered__?n.__takeCount__=Yi(i,n.__takeCount__):n.__views__.push({size:Yi(i,H),type:t+(n.__dir__<0?"Right":"")}),n},_n.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}}),Ve(["filter","map","takeWhile"],function(t,e){var i=e+1,n=i==O||3==i;_n.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:jr(t,3),type:i}),e.__filtered__=e.__filtered__||n,e}}),Ve(["head","last"],function(t,e){var i="take"+(e?"Right":"");_n.prototype[t]=function(){return this[i](1).value()[0]}}),Ve(["initial","tail"],function(t,e){var i="drop"+(e?"":"Right");_n.prototype[t]=function(){return this.__filtered__?new _n(this):this[i](1)}}),_n.prototype.compact=function(){return this.filter(Il)},_n.prototype.find=function(t){return this.filter(t).head()},_n.prototype.findLast=function(t){return this.reverse().find(t)},_n.prototype.invokeMap=ks(function(t,e){return"function"==typeof t?new _n(this):this.map(function(i){return ss(i,t,e)})}),_n.prototype.reject=function(t){return this.filter(la(jr(t)))},_n.prototype.slice=function(t,e){t=za(t);var i=this;return i.__filtered__&&(t>0||e<0)?new _n(i):(t<0?i=i.takeRight(-t):t&&(i=i.drop(t)),e!==r&&(i=(e=za(e))<0?i.dropRight(-e):i.take(e-t)),i)},_n.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},_n.prototype.toArray=function(){return this.take(H)},Kn(_n.prototype,function(t,e){var i=/^(?:filter|find|map|reject)|While$/.test(e),n=/^(?:head|last)$/.test(e),s=fn[n?"take"+("last"==e?"Right":""):e],o=n||/^find/.test(e);s&&(fn.prototype[e]=function(){var e=this.__wrapped__,a=n?[1]:arguments,l=e instanceof _n,u=a[0],c=l||va(e),h=function(t){var e=s.apply(fn,ti([t],a));return n&&d?e[0]:e};c&&i&&"function"==typeof u&&1!=u.length&&(l=c=!1);var d=this.__chain__,p=!!this.__actions__.length,f=o&&!d,g=l&&!p;if(!o&&c){e=g?e:new _n(this);var m=t.apply(e,a);return m.__actions__.push({func:Fo,args:[h],thisArg:r}),new vn(m,d)}return f&&g?t.apply(this,a):(m=this.thru(h),f?n?m.value()[0]:m.value():m)})}),Ve(["pop","push","shift","sort","splice","unshift"],function(t){var e=re[t],i=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",n=/^(?:pop|shift)$/.test(t);fn.prototype[t]=function(){var t=arguments;if(n&&!this.__chain__){var s=this.value();return e.apply(va(s)?s:[],t)}return this[i](function(i){return e.apply(va(i)?i:[],t)})}}),Kn(_n.prototype,function(t,e){var i=fn[e];if(i){var n=i.name+"";(rn[n]||(rn[n]=[])).push({name:e,func:i})}}),rn[fr(r,_).name]=[{name:"wrapper",func:r}],_n.prototype.clone=function(){var t=new _n(this.__wrapped__);return t.__actions__=nr(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=nr(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=nr(this.__views__),t},_n.prototype.reverse=function(){if(this.__filtered__){var t=new _n(this);t.__dir__=-1,t.__filtered__=!0}else(t=this.clone()).__dir__*=-1;return t},_n.prototype.value=function(){var t=this.__wrapped__.value(),e=this.__dir__,i=va(t),n=e<0,s=i?t.length:0,r=function(t,e,i){for(var n=-1,s=i.length;++n<s;){var r=i[n],o=r.size;switch(r.type){case"drop":t+=o;break;case"dropRight":e-=o;break;case"take":e=Yi(e,t+o);break;case"takeRight":t=Bi(t,e-o)}}return{start:t,end:e}}(0,s,this.__views__),o=r.start,a=r.end,l=a-o,u=n?a:o-1,c=this.__iteratees__,h=c.length,d=0,p=Yi(l,this.__takeCount__);if(!i||!n&&s==l&&p==l)return Ws(t,this.__actions__);var f=[];t:for(;l--&&d<p;){for(var g=-1,m=t[u+=e];++g<h;){var v=c[g],_=v.iteratee,y=v.type,b=_(m);if(y==$)m=b;else if(!b){if(y==O)continue t;break t}}f[d++]=m}return f},fn.prototype.at=zo,fn.prototype.chain=function(){return Lo(this)},fn.prototype.commit=function(){return new vn(this.value(),this.__chain__)},fn.prototype.next=function(){this.__values__===r&&(this.__values__=La(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?r:this.__values__[this.__index__++]}},fn.prototype.plant=function(t){for(var e,i=this;i instanceof mn;){var n=ho(i);n.__index__=0,n.__values__=r,e?s.__wrapped__=n:e=n;var s=n;i=i.__wrapped__}return s.__wrapped__=t,e},fn.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof _n){var e=t;return this.__actions__.length&&(e=new _n(this)),(e=e.reverse()).__actions__.push({func:Fo,args:[So],thisArg:r}),new vn(e,this.__chain__)}return this.thru(So)},fn.prototype.toJSON=fn.prototype.valueOf=fn.prototype.value=function(){return Ws(this.__wrapped__,this.__actions__)},fn.prototype.first=fn.prototype.head,Re&&(fn.prototype[Re]=function(){return this}),fn}();Pe._=Ni,(s=function(){return Ni}.call(e,i,e,n))===r||(n.exports=s)}).call(this)}).call(e,i("DuR2"),i("3IRH")(t))},NYlw:function(t,e,i){var n=i("VU/8")(i("5F58"),null,!1,null,null,null);t.exports=n.exports},Nd5k:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.show&&t.fields.length?i("div",[i("div",{staticClass:"form-group"},[i("fieldset",[i("legend",{staticClass:"col-md-3 control-label"},[t._v("Default Values")]),t._v(" "),i("div",{staticClass:"col-sm-8 col-xl-7"},[t.error?i("p",[t._v("\n                        There was a problem retrieving the fields for this fieldset.\n                    ")]):t._e(),t._v(" "),t._l(t.fields,function(e){return i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-12 col-lg-6"},[i("label",{staticClass:"control-label",attrs:{for:"default-value"+e.id}},[t._v(t._s(e.name))])]),t._v(" "),i("div",{staticClass:"col-sm-12 col-lg-6"},["text"==e.type?i("input",{staticClass:"form-control m-b-xs",attrs:{type:"text",id:"default-value"+e.id,name:"default_values["+e.id+"]"},domProps:{value:t.getValue(e)}}):t._e(),t._v(" "),"textarea"==e.type?i("textarea",{staticClass:"form-control",attrs:{id:"default-value"+e.id,name:"default_values["+e.id+"]"},domProps:{value:t.getValue(e)}}):t._e(),i("br"),t._v(" "),"listbox"==e.type?i("select",{staticClass:"form-control m-b-xs",attrs:{name:"default_values["+e.id+"]"}},[i("option",{attrs:{value:""}}),t._v(" "),t._l(e.field_values_array,function(n){return i("option",{domProps:{value:n,selected:t.getValue(e)==n}},[t._v(t._s(n))])})],2):t._e()])])})],2)])])]):t._e()])},staticRenderFns:[]}},ODCm:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".action-link[data-v-500e149a]{cursor:pointer}.m-b-none[data-v-500e149a]{margin-bottom:0}",""])},R3Cx:function(t,e,i){var n=i("mki+");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("2adeb8e4",n,!0,{})},RQmS:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"panel panel-default"},[i("div",{staticClass:"panel-heading"},[i("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[i("span",[t._v("\n                    OAuth Clients\n                ")]),t._v(" "),i("a",{staticClass:"action-link",on:{click:t.showCreateClientForm}},[t._v("\n                    Create New Client\n                ")])])]),t._v(" "),i("div",{staticClass:"panel-body"},[0===t.clients.length?i("p",{staticClass:"m-b-none"},[t._v("\n                You have not created any OAuth clients.\n            ")]):t._e(),t._v(" "),t.clients.length>0?i("table",{staticClass:"table table-borderless m-b-none"},[t._m(0),t._v(" "),i("tbody",t._l(t.clients,function(e){return i("tr",[i("td",{staticStyle:{"vertical-align":"middle"}},[t._v("\n                            "+t._s(e.id)+"\n                        ")]),t._v(" "),i("td",{staticStyle:{"vertical-align":"middle"}},[t._v("\n                            "+t._s(e.name)+"\n                        ")]),t._v(" "),i("td",{staticStyle:{"vertical-align":"middle"}},[i("code",[t._v(t._s(e.secret))])]),t._v(" "),i("td",{staticStyle:{"vertical-align":"middle"}},[i("a",{staticClass:"action-link",on:{click:function(i){t.edit(e)}}},[t._v("\n                                Edit\n                            ")])]),t._v(" "),i("td",{staticStyle:{"vertical-align":"middle"}},[i("a",{staticClass:"action-link text-danger",on:{click:function(i){t.destroy(e)}}},[t._v("\n                                Delete\n                            ")])])])}))]):t._e()])]),t._v(" "),i("div",{staticClass:"modal fade",attrs:{id:"modal-create-client",tabindex:"-1",role:"dialog"}},[i("div",{staticClass:"modal-dialog"},[i("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),i("div",{staticClass:"modal-body"},[t.createForm.errors.length>0?i("div",{staticClass:"alert alert-danger"},[t._m(2),t._v(" "),i("br"),t._v(" "),i("ul",t._l(t.createForm.errors,function(e){return i("li",[t._v("\n                                "+t._s(e)+"\n                            ")])}))]):t._e(),t._v(" "),i("form",{staticClass:"form-horizontal",attrs:{role:"form"}},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-3 control-label"},[t._v("Name")]),t._v(" "),i("div",{staticClass:"col-md-7"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.createForm.name,expression:"createForm.name"}],staticClass:"form-control",attrs:{id:"create-client-name",type:"text"},domProps:{value:t.createForm.name},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.store(e)},input:function(e){e.target.composing||(t.createForm.name=e.target.value)}}}),t._v(" "),i("span",{staticClass:"help-block"},[t._v("\n                                    Something your users will recognize and trust.\n                                ")])])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-3 control-label"},[t._v("Redirect URL")]),t._v(" "),i("div",{staticClass:"col-md-7"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.createForm.redirect,expression:"createForm.redirect"}],staticClass:"form-control",attrs:{type:"text",name:"redirect"},domProps:{value:t.createForm.redirect},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.store(e)},input:function(e){e.target.composing||(t.createForm.redirect=e.target.value)}}}),t._v(" "),i("span",{staticClass:"help-block"},[t._v("\n                                    Your application's authorization callback URL.\n                                ")])])])])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),i("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.store}},[t._v("\n                        Create\n                    ")])])])])]),t._v(" "),i("div",{staticClass:"modal fade",attrs:{id:"modal-edit-client",tabindex:"-1",role:"dialog"}},[i("div",{staticClass:"modal-dialog"},[i("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),i("div",{staticClass:"modal-body"},[t.editForm.errors.length>0?i("div",{staticClass:"alert alert-danger"},[t._m(4),t._v(" "),i("br"),t._v(" "),i("ul",t._l(t.editForm.errors,function(e){return i("li",[t._v("\n                                "+t._s(e)+"\n                            ")])}))]):t._e(),t._v(" "),i("form",{staticClass:"form-horizontal",attrs:{role:"form"}},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-3 control-label"},[t._v("Name")]),t._v(" "),i("div",{staticClass:"col-md-7"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.editForm.name,expression:"editForm.name"}],staticClass:"form-control",attrs:{id:"edit-client-name",type:"text"},domProps:{value:t.editForm.name},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.update(e)},input:function(e){e.target.composing||(t.editForm.name=e.target.value)}}}),t._v(" "),i("span",{staticClass:"help-block"},[t._v("\n                                    Something your users will recognize and trust.\n                                ")])])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-3 control-label"},[t._v("Redirect URL")]),t._v(" "),i("div",{staticClass:"col-md-7"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.editForm.redirect,expression:"editForm.redirect"}],staticClass:"form-control",attrs:{type:"text",name:"redirect"},domProps:{value:t.editForm.redirect},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.update(e)},input:function(e){e.target.composing||(t.editForm.redirect=e.target.value)}}}),t._v(" "),i("span",{staticClass:"help-block"},[t._v("\n                                    Your application's authorization callback URL.\n                                ")])])])])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),i("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.update}},[t._v("\n                        Save Changes\n                    ")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Client ID")]),this._v(" "),e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Secret")]),this._v(" "),e("th"),this._v(" "),e("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button ","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")]),this._v(" "),e("h4",{staticClass:"modal-title"},[this._v("\n                        Create Client\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Whoops!")]),this._v(" Something went wrong!")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button ","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")]),this._v(" "),e("h4",{staticClass:"modal-title"},[this._v("\n                        Edit Client\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Whoops!")]),this._v(" Something went wrong!")])}]}},Sh4Y:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",{directives:[{name:"show",rawName:"v-show",value:t.processDetail,expression:"processDetail"}]},[i("td",{attrs:{colspan:"5"}},[i("div",{staticClass:"col-md-2 text-left"}),t._v(" "),i("div",{staticClass:"col-md-8 col-md-offset-2 text-center",staticStyle:{"padding-top":"30px",margin:"0 auto"}},[i("div",{staticClass:"col-md-12 text-left"},[i("h4",{staticClass:"modal-title"},[t._v("Import File:")]),t._v(" "),i("div",{staticClass:"dynamic-form-row"},[t._m(0),t._v(" "),i("div",{staticClass:"col-md-7 col-xs-12"},[i("select2",{attrs:{options:t.options.importTypes,required:""},model:{value:t.options.importType,callback:function(e){t.options.importType=e},expression:"options.importType"}},[i("option",{attrs:{disabled:"",value:"0"}})])],1)]),t._v(" "),i("div",{staticClass:"dynamic-form-row"},[t._m(1),t._v(" "),i("div",{staticClass:"col-md-7 col-xs-12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.options.update,expression:"options.update"}],attrs:{type:"checkbox",name:"import-update"},domProps:{checked:Array.isArray(t.options.update)?t._i(t.options.update,null)>-1:t.options.update},on:{__c:function(e){var i=t.options.update,n=e.target,s=!!n.checked;if(Array.isArray(i)){var r=t._i(i,null);n.checked?r<0&&(t.options.update=i.concat([null])):r>-1&&(t.options.update=i.slice(0,r).concat(i.slice(r+1)))}else t.options.update=s}}})])]),t._v(" "),i("div",{staticClass:"dynamic-form-row"},[t._m(2),t._v(" "),i("div",{staticClass:"col-md-7 col-xs-12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.options.send_welcome,expression:"options.send_welcome"}],attrs:{type:"checkbox",name:"send-welcome"},domProps:{checked:Array.isArray(t.options.send_welcome)?t._i(t.options.send_welcome,null)>-1:t.options.send_welcome},on:{__c:function(e){var i=t.options.send_welcome,n=e.target,s=!!n.checked;if(Array.isArray(i)){var r=t._i(i,null);n.checked?r<0&&(t.options.send_welcome=i.concat([null])):r>-1&&(t.options.send_welcome=i.slice(0,r).concat(i.slice(r+1)))}else t.options.send_welcome=s}}})])])]),t._v(" "),t.statusText?i("div",{staticClass:"alert col-md-12",class:t.alertClass,staticStyle:{"text-align":"left"}},[t._v("\n            "+t._s(this.statusText)+"\n        ")]):t._e(),t._v(" "),i("div",{staticClass:"text-left",staticStyle:{"padding-top":"30px"}},[i("table",{staticClass:"table table-striped snipe-table"},[t._m(3),t._v(" "),i("tbody",[t._l(t.file.header_row,function(e,n){return[i("tr",[i("td",[i("label",{staticClass:"controllabel",attrs:{for:e}},[t._v(t._s(e))])]),t._v(" "),i("td",[i("div",{attrs:{required:""}},[i("select2",{attrs:{options:t.columns},model:{value:t.columnMappings[e],callback:function(i){t.$set(t.columnMappings,e,i)},expression:"columnMappings[header]"}},[i("option",{attrs:{value:"0"}},[t._v("Do Not Import")])])],1)]),t._v(" "),i("td",[i("div",[t._v(t._s(t.activeFile.first_row[n]))])])])]})],2)]),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"col-md-8 col-md-offset-2 text-right"},[i("button",{staticClass:"btn btn-sm btn-default",attrs:{type:"button"},on:{click:function(e){t.processDetail=!1}}},[t._v("Cancel")]),t._v(" "),i("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"submit"},on:{click:t.postSave}},[t._v("Import")]),t._v(" "),i("br"),i("br")]),t._v(" "),t.statusText?i("div",{staticClass:"alert col-md-12",class:t.alertClass,staticStyle:{"padding-top":"20px"}},[t._v("\n                "+t._s(this.statusText)+"\n            ")]):t._e()])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-5 col-xs-12"},[e("label",{attrs:{for:"import-type"}},[this._v("Import Type:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-5 col-xs-12"},[e("label",{attrs:{for:"import-update"}},[this._v("Update Existing Values?:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-5 col-xs-12"},[e("label",{attrs:{for:"send-welcome"}},[this._v("Send Welcome Email for new Users?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",[this._v("Header Field")]),this._v(" "),e("th",[this._v("Import Field")]),this._v(" "),e("th",[this._v("Sample Value")])])}]}},TNGo:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i("hv7s"),e.default={props:["options","value"],mounted:function(){var t=this;$(this.$el).select2({data:this.options}).on("change",function(){t.$emit("input",this.value)}).val(this.value).trigger("change")},watch:{value:function(t){$(this.$el).val(t)},options:function(t){var e=this;$(this.$el).select2("destroy").empty().select2({data:t}).on("change",function(){e.$emit("input",this.value)}).val(this.value).trigger("change")},destroyed:function(){$(this.$el).off().select2("destroy")}}}},UZ9c:function(t,e,i){var n,s,r,o;o=function(t){return t.ui=t.ui||{},t.ui.version="1.12.1"},s=[i("7t+N")],void 0===(r="function"==typeof(n=o)?n.apply(e,s):n)||(t.exports=r)},UpBZ:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("div",{staticClass:"panel panel-default"},[i("div",{staticClass:"panel-heading"},[i("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[i("span",[t._v("\n                        Personal Access Tokens\n                    ")]),t._v(" "),i("a",{staticClass:"action-link",on:{click:t.showCreateTokenForm}},[t._v("\n                        Create New Token\n                    ")])])]),t._v(" "),i("div",{staticClass:"panel-body"},[0===t.tokens.length?i("p",{staticClass:"m-b-none"},[t._v("\n                    You have not created any personal access tokens.\n                ")]):t._e(),t._v(" "),t.tokens.length>0?i("table",{staticClass:"table table-borderless m-b-none"},[t._m(0),t._v(" "),i("tbody",t._l(t.tokens,function(e){return i("tr",[i("td",{staticStyle:{"vertical-align":"middle"}},[t._v("\n                                "+t._s(e.name)+"\n                            ")]),t._v(" "),i("td",{staticStyle:{"vertical-align":"middle"}},[i("a",{staticClass:"action-link text-danger",on:{click:function(i){t.revoke(e)}}},[t._v("\n                                    Delete\n                                ")])])])}))]):t._e()])])]),t._v(" "),i("div",{staticClass:"modal fade",attrs:{id:"modal-create-token",tabindex:"-1",role:"dialog"}},[i("div",{staticClass:"modal-dialog"},[i("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),i("div",{staticClass:"modal-body"},[t.form.errors.length>0?i("div",{staticClass:"alert alert-danger"},[t._m(2),t._v(" "),i("br"),t._v(" "),i("ul",t._l(t.form.errors,function(e){return i("li",[t._v("\n                                "+t._s(e)+"\n                            ")])}))]):t._e(),t._v(" "),i("form",{staticClass:"form-horizontal",attrs:{role:"form"},on:{submit:function(e){e.preventDefault(),t.store(e)}}},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-4 control-label"},[t._v("Name")]),t._v(" "),i("div",{staticClass:"col-md-6"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{id:"create-token-name",type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||(t.form.name=e.target.value)}}})])]),t._v(" "),t.scopes.length>0?i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-4 control-label"},[t._v("Scopes")]),t._v(" "),i("div",{staticClass:"col-md-6"},t._l(t.scopes,function(e){return i("div",[i("div",{staticClass:"checkbox"},[i("label",[i("input",{attrs:{type:"checkbox"},domProps:{checked:t.scopeIsAssigned(e.id)},on:{click:function(i){t.toggleScope(e.id)}}}),t._v("\n\n                                                "+t._s(e.id)+"\n                                        ")])])])}))]):t._e()])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),i("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.store}},[t._v("\n                        Create\n                    ")])])])])]),t._v(" "),i("div",{staticClass:"modal fade",attrs:{id:"modal-access-token",tabindex:"-1",role:"dialog"}},[i("div",{staticClass:"modal-dialog"},[i("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),i("div",{staticClass:"modal-body"},[i("p",[t._v("\n                        Here is your new personal access token. This is the only time it will be shown so don't lose it!\n                        You may now use this token to make API requests.\n                    ")]),t._v(" "),i("pre",[i("code",[t._v(t._s(t.accessToken))])])]),t._v(" "),t._m(4)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button ","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")]),this._v(" "),e("h4",{staticClass:"modal-title"},[this._v("\n                        Create Token\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Whoops!")]),this._v(" Something went wrong!")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button ","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")]),this._v(" "),e("h4",{staticClass:"modal-title"},[this._v("\n                        Personal Access Token\n                    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])}]}},"VU/8":function(t,e){t.exports=function(t,e,i,n,s,r){var o,a=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,a=t.default);var u,c="function"==typeof a?a.options:a;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId=s),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=u):n&&(u=n),u){var h=c.functional,d=h?c.render:c.beforeCreate;h?(c._injectStyles=u,c.render=function(t,e){return u.call(e),d(t,e)}):c.beforeCreate=d?[].concat(d,u):[u]}return{esModule:o,exports:a,options:c}}},WRGp:function(t,e,i){window._=i("M4fF"),window.$=window.jQuery=i("7t+N"),i("hSCs"),window.Vue=i("I3G/"),window.eventHub=new Vue,i("8+8L"),Vue.http.interceptors.push(function(t,e){t.headers.set("X-CSRF-TOKEN",Laravel.csrfToken),e()})},YDmc:function(t,e,i){var n=i("VU/8")(i("TNGo"),i("c3eT"),!1,function(t){i("niYt")},"data-v-0bca28e1",null);t.exports=n.exports},b7rt:function(t,e,i){var n=i("VU/8")(i("JHru"),i("4r7M"),!1,function(t){i("HT/f")},"data-v-7c23dd1b",null);t.exports=n.exports},bUYX:function(t,e,i){var n,s,r,o;o=function(t){function e(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=i(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function i(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,n)}function n(){t.datepicker._isDisabledDatepicker(c.inline?c.dpDiv.parent()[0]:c.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function s(e,i){for(var n in t.extend(e,i),i)null==i[n]&&(e[n]=i[n]);return e}function r(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui=t.ui||{},t.ui.version="1.12.1";var o=0,a=Array.prototype.slice;t.cleanData=function(e){return function(i){var n,s,r;for(r=0;null!=(s=i[r]);r++)try{(n=t._data(s,"events"))&&n.remove&&t(s).triggerHandler("remove")}catch(t){}e(i)}}(t.cleanData),t.widget=function(e,i,n){var s,r,o,a={},l=e.split(".")[0],u=l+"-"+(e=e.split(".")[1]);return n||(n=i,i=t.Widget),t.isArray(n)&&(n=t.extend.apply(null,[{}].concat(n))),t.expr[":"][u.toLowerCase()]=function(e){return!!t.data(e,u)},t[l]=t[l]||{},s=t[l][e],r=t[l][e]=function(t,e){return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new r(t,e)},t.extend(r,s,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),(o=new i).options=t.widget.extend({},o.options),t.each(n,function(e,n){return t.isFunction(n)?void(a[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,r=this._superApply;return this._super=t,this._superApply=s,e=n.apply(this,arguments),this._super=i,this._superApply=r,e}}()):void(a[e]=n)}),r.prototype=t.widget.extend(o,{widgetEventPrefix:s&&o.widgetEventPrefix||e},a,{constructor:r,namespace:l,widgetName:e,widgetFullName:u}),s?(t.each(s._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,r,i._proto)}),delete s._childConstructors):i._childConstructors.push(r),t.widget.bridge(e,r),r},t.widget.extend=function(e){for(var i,n,s=a.call(arguments,1),r=0,o=s.length;o>r;r++)for(i in s[r])n=s[r][i],s[r].hasOwnProperty(i)&&void 0!==n&&(e[i]=t.isPlainObject(n)?t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(s){var r="string"==typeof s,o=a.call(arguments,1),l=this;return r?this.length||"instance"!==s?this.each(function(){var i,r=t.data(this,n);return"instance"===s?(l=r,!1):r?t.isFunction(r[s])&&"_"!==s.charAt(0)?(i=r[s].apply(r,o))!==r&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0:t.error("no such method '"+s+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+s+"'")}):l=void 0:(o.length&&(s=t.widget.extend.apply(null,[s].concat(o))),this.each(function(){var e=t.data(this,n);e?(e.option(s||{}),e._init&&e._init()):t.data(this,n,new i(s,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=o++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var n,s,r,o=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(o={},e=(n=e.split(".")).shift(),n.length){for(s=o[e]=t.widget.extend({},this.options[e]),r=0;n.length-1>r;r++)s[n[r]]=s[n[r]]||{},s=s[n[r]];if(e=n.pop(),1===arguments.length)return void 0===s[e]?null:s[e];s[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];o[e]=i}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,n,s;for(i in e)s=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&s&&s.length&&(n=t(s.get()),this._removeClass(s,i),n.addClass(this._classes({element:n,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,r){var o,a;for(a=0;i.length>a;a++)o=s.classesElementLookup[i[a]]||t(),o=e.add?t(t.unique(o.get().concat(e.element.get()))):t(o.not(e.element).get()),s.classesElementLookup[i[a]]=o,n.push(i[a]),r&&e.classes[i[a]]&&n.push(e.classes[i[a]])}var n=[],s=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),n.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(n,s){-1!==t.inArray(e.target,s)&&(i.classesElementLookup[n]=t(s.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){n="boolean"==typeof n?n:i;var s="string"==typeof t||null===t,r={extra:s?e:i,keys:s?t:e,element:s?this.element:t,add:n};return r.element.toggleClass(this._classes(r),n),this},_on:function(e,i,n){var s,r=this;"boolean"!=typeof e&&(n=i,i=e,e=!1),n?(i=s=t(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,s=this.widget()),t.each(n,function(n,o){function a(){return e||!0!==r.options.disabled&&!t(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):void 0}"string"!=typeof o&&(a.guid=o.guid=o.guid||a.guid||t.guid++);var l=n.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?s.on(u,c,a):i.on(u,a)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,n){var s,r,o=this.options[e];if(n=n||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],r=i.originalEvent)for(s in r)s in i||(i[s]=r[s]);return this.element.trigger(i,n),!(t.isFunction(o)&&!1===o.apply(this.element[0],[i].concat(n))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,s,r){"string"==typeof s&&(s={effect:s});var o,a=s?!0===s||"number"==typeof s?i:s.effect||i:e;"number"==typeof(s=s||{})&&(s={duration:s}),o=!t.isEmptyObject(s),s.complete=r,s.delay&&n.delay(s.delay),o&&t.effects&&t.effects.effect[a]?n[e](s):a!==e&&n[a]?n[a](s.duration,s.easing,r):n.queue(function(i){t(this)[e](),r&&r.call(n[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(c.test(t[0])?e/100:1),parseFloat(t[1])*(c.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}var n,s=Math.max,r=Math.abs,o=/left|center|right/,a=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,u=/^\w+/,c=/%$/,h=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),r=s.children()[0];return t("body").append(s),e=r.offsetWidth,s.css("overflow","scroll"),e===(i=r.offsetWidth)&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),n=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),s="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth;return{width:"scroll"===n||"auto"===n&&e.height<e.element[0].scrollHeight?t.position.scrollbarWidth():0,height:s?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),n=t.isWindow(i[0]),s=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:n,isDocument:s,offset:!n&&!s?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return h.apply(this,arguments);n=t.extend({},n);var c,d,p,f,g,m,v=t(n.of),_=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(_),b=(n.collision||"flip").split(" "),w={};return m=function(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}(v),v[0].preventDefault&&(n.at="left top"),d=m.width,p=m.height,f=m.offset,g=t.extend({},f),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=o.test(i[0])?i.concat(["center"]):a.test(i[0])?["center"].concat(i):["center","center"]),i[0]=o.test(i[0])?i[0]:"center",i[1]=a.test(i[1])?i[1]:"center",t=l.exec(i[0]),e=l.exec(i[1]),w[this]=[t?t[0]:0,e?e[0]:0],n[this]=[u.exec(i[0])[0],u.exec(i[1])[0]]}),1===b.length&&(b[1]=b[0]),"right"===n.at[0]?g.left+=d:"center"===n.at[0]&&(g.left+=d/2),"bottom"===n.at[1]?g.top+=p:"center"===n.at[1]&&(g.top+=p/2),c=e(w.at,d,p),g.left+=c[0],g.top+=c[1],this.each(function(){var o,a,l=t(this),u=l.outerWidth(),h=l.outerHeight(),m=i(this,"marginLeft"),x=i(this,"marginTop"),C=u+m+i(this,"marginRight")+y.width,k=h+x+i(this,"marginBottom")+y.height,T=t.extend({},g),D=e(w.my,l.outerWidth(),l.outerHeight());"right"===n.my[0]?T.left-=u:"center"===n.my[0]&&(T.left-=u/2),"bottom"===n.my[1]?T.top-=h:"center"===n.my[1]&&(T.top-=h/2),T.left+=D[0],T.top+=D[1],o={marginLeft:m,marginTop:x},t.each(["left","top"],function(e,i){t.ui.position[b[e]]&&t.ui.position[b[e]][i](T,{targetWidth:d,targetHeight:p,elemWidth:u,elemHeight:h,collisionPosition:o,collisionWidth:C,collisionHeight:k,offset:[c[0]+D[0],c[1]+D[1]],my:n.my,at:n.at,within:_,elem:l})}),n.using&&(a=function(t){var e=f.left-T.left,i=e+d-u,o=f.top-T.top,a=o+p-h,c={target:{element:v,left:f.left,top:f.top,width:d,height:p},element:{element:l,left:T.left,top:T.top,width:u,height:h},horizontal:0>i?"left":e>0?"right":"center",vertical:0>a?"top":o>0?"bottom":"middle"};u>d&&d>r(e+i)&&(c.horizontal="center"),h>p&&p>r(o+a)&&(c.vertical="middle"),c.important=s(r(e),r(i))>s(r(o),r(a))?"horizontal":"vertical",n.using.call(this,t,c)}),l.offset(t.extend(T,{using:a}))})},t.ui.position={fit:{left:function(t,e){var i,n=e.within,r=n.isWindow?n.scrollLeft:n.offset.left,o=n.width,a=t.left-e.collisionPosition.marginLeft,l=r-a,u=a+e.collisionWidth-o-r;e.collisionWidth>o?l>0&&0>=u?(i=t.left+l+e.collisionWidth-o-r,t.left+=l-i):t.left=u>0&&0>=l?r:l>u?r+o-e.collisionWidth:r:l>0?t.left+=l:u>0?t.left-=u:t.left=s(t.left-a,t.left)},top:function(t,e){var i,n=e.within,r=n.isWindow?n.scrollTop:n.offset.top,o=e.within.height,a=t.top-e.collisionPosition.marginTop,l=r-a,u=a+e.collisionHeight-o-r;e.collisionHeight>o?l>0&&0>=u?(i=t.top+l+e.collisionHeight-o-r,t.top+=l-i):t.top=u>0&&0>=l?r:l>u?r+o-e.collisionHeight:r:l>0?t.top+=l:u>0?t.top-=u:t.top=s(t.top-a,t.top)}},flip:{left:function(t,e){var i,n,s=e.within,o=s.offset.left+s.scrollLeft,a=s.width,l=s.isWindow?s.scrollLeft:s.offset.left,u=t.left-e.collisionPosition.marginLeft,c=u-l,h=u+e.collisionWidth-a-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(0>(i=t.left+d+p+f+e.collisionWidth-a-o)||r(c)>i)&&(t.left+=d+p+f):h>0&&(((n=t.left-e.collisionPosition.marginLeft+d+p+f-l)>0||h>r(n))&&(t.left+=d+p+f))},top:function(t,e){var i,n,s=e.within,o=s.offset.top+s.scrollTop,a=s.height,l=s.isWindow?s.scrollTop:s.offset.top,u=t.top-e.collisionPosition.marginTop,c=u-l,h=u+e.collisionHeight-a-l,d="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,p="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,f=-2*e.offset[1];0>c?(0>(n=t.top+d+p+f+e.collisionHeight-a-o)||r(c)>n)&&(t.top+=d+p+f):h>0&&(((i=t.top-e.collisionPosition.marginTop+d+p+f-l)>0||h>r(i))&&(t.top+=d+p+f))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,n){return!!t.data(e,n[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}}),t.ui.focusable=function(e,i){var n,s,r,o,a,l=e.nodeName.toLowerCase();return"area"===l?(s=(n=e.parentNode).name,!(!e.href||!s||"map"!==n.nodeName.toLowerCase())&&((r=t("img[usemap='#"+s+"']")).length>0&&r.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(l)?(o=!e.disabled)&&((a=t(e).closest("fieldset")[0])&&(o=!a.disabled)):o="a"===l&&e.href||i,o&&t(e).is(":visible")&&function(t){for(var e=t.css("visibility");"inherit"===e;)e=(t=t.parent()).css("visibility");return"hidden"!==e}(t(e)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function n(e,i,n,r){return t.each(s,function(){i-=parseFloat(t.css(e,"padding"+this))||0,n&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),r&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var s="Width"===i?["Left","Right"]:["Top","Bottom"],r=i.toLowerCase(),o={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?o["inner"+i].call(this):this.each(function(){t(this).css(r,n(this,e)+"px")})},t.fn["outer"+i]=function(e,s){return"number"!=typeof e?o["outer"+i].call(this,e):this.each(function(){t(this).css(r,n(this,e,!0,s)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,n,s,r;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(s=this.eq(0).parents("label"),(n=this.attr("id"))&&(r=(e=this.eq(0).parents().last()).add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(n)+"']",s=s.add(r.find(i).addBack(i))),this.pushStack(s))},t.fn.scrollParent=function(e){var i=this.css("position"),n="absolute"===i,s=e?/(auto|scroll|hidden)/:/(auto|scroll)/,r=this.parents().filter(function(){var e=t(this);return(!n||"static"!==e.css("position"))&&s.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&r.length?r:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),n=null!=i;return(!n||i>=0)&&t.ui.focusable(e,n)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var l=!1;t(document).on("mouseup",function(){l=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!l){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,n=1===e.which,s=!("string"!=typeof this.options.cancel||!e.target.nodeName)&&t(e.target).closest(this.options.cancel).length;return!(n&&!s&&this._mouseCapture(e))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(e),!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),l=!0,!0))}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,e),this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,l=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,n){var s,r=t.ui[e].prototype;for(s in n)r.plugins[s]=r.plugins[s]||[],r.plugins[s].push([i,n[s]])},call:function(t,e,i,n){var s,r=t.plugins[e];if(r&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(s=0;r.length>s;s++)t.options[r[s][0]]&&r[s][1].apply(t.element,i)}},t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(e){var i=this.options;return!(this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(e),!!this.handle&&(this._blurActiveElement(e),this._blockFrames(!0===i.iframeFix?"iframe":i.iframeFix),!0))},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]);t(e.target).closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),!1===this._trigger("start",e)?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var n=this._uiHash();if(!1===this._trigger("drag",e,n))return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=n.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,n=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(n=t.ui.ddmanager.drop(this,e)),this.dropped&&(n=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!n||"valid"===this.options.revert&&n||!0===this.options.revert||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){!1!==i._trigger("stop",e)&&i._clear()}):!1!==this._trigger("stop",e)&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return!this.options.handle||!!t(e.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,n=t.isFunction(i.helper),s=n?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),n&&s[0]===this.element[0]&&this._setPositionRelative(),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,n,s=this.options,r=this.document[0];return this.relativeContainer=null,s.containment?"window"===s.containment?void(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||r.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===s.containment?void(this.containment=[0,0,t(r).width()-this.helperProportions.width-this.margins.left,(t(r).height()||r.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):s.containment.constructor===Array?void(this.containment=s.containment):("parent"===s.containment&&(s.containment=this.helper[0].parentNode),void((n=(i=t(s.containment))[0])&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(n.scrollWidth,n.offsetWidth):n.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(n.scrollHeight,n.offsetHeight):n.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i))):void(this.containment=null)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,n=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:n?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:n?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,n,s,r,o=this.options,a=this._isRootNode(this.scrollParent[0]),l=t.pageX,u=t.pageY;return a&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(n=this.relativeContainer.offset(),i=[this.containment[0]+n.left,this.containment[1]+n.top,this.containment[2]+n.left,this.containment[3]+n.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(u=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(u=i[3]+this.offset.click.top)),o.grid&&(s=o.grid[1]?this.originalPageY+Math.round((u-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,u=i?s-this.offset.click.top>=i[1]||s-this.offset.click.top>i[3]?s:s-this.offset.click.top>=i[1]?s-o.grid[1]:s+o.grid[1]:s,r=o.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,l=i?r-this.offset.click.left>=i[0]||r-this.offset.click.left>i[2]?r:r-this.offset.click.left>=i[0]?r-o.grid[0]:r+o.grid[0]:r),"y"===o.axis&&(l=this.originalPageX),"x"===o.axis&&(u=this.originalPageY)),{top:u-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:a?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:a?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,n){return n=n||this._uiHash(),t.ui.plugin.call(this,e,[i,n,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),n.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,n)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,n){var s=t.extend({},i,{item:n.element});n.sortables=[],t(n.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(n.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,s))})},stop:function(e,i,n){var s=t.extend({},i,{item:n.element});n.cancelHelperRemoval=!1,t.each(n.sortables,function(){var t=this;t.isOver?(t.isOver=0,n.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,s))})},drag:function(e,i,n){t.each(n.sortables,function(){var s=!1,r=this;r.positionAbs=n.positionAbs,r.helperProportions=n.helperProportions,r.offset.click=n.offset.click,r._intersectsWith(r.containerCache)&&(s=!0,t.each(n.sortables,function(){return this.positionAbs=n.positionAbs,this.helperProportions=n.helperProportions,this.offset.click=n.offset.click,this!==r&&this._intersectsWith(this.containerCache)&&t.contains(r.element[0],this.element[0])&&(s=!1),s})),s?(r.isOver||(r.isOver=1,n._parent=i.helper.parent(),r.currentItem=i.helper.appendTo(r.element).data("ui-sortable-item",!0),r.options._helper=r.options.helper,r.options.helper=function(){return i.helper[0]},e.target=r.currentItem[0],r._mouseCapture(e,!0),r._mouseStart(e,!0,!0),r.offset.click.top=n.offset.click.top,r.offset.click.left=n.offset.click.left,r.offset.parent.left-=n.offset.parent.left-r.offset.parent.left,r.offset.parent.top-=n.offset.parent.top-r.offset.parent.top,n._trigger("toSortable",e),n.dropped=r.element,t.each(n.sortables,function(){this.refreshPositions()}),n.currentItem=n.element,r.fromOutside=n),r.currentItem&&(r._mouseDrag(e),i.position=r.position)):r.isOver&&(r.isOver=0,r.cancelHelperRemoval=!0,r.options._revert=r.options.revert,r.options.revert=!1,r._trigger("out",e,r._uiHash(r)),r._mouseStop(e,!0),r.options.revert=r.options._revert,r.options.helper=r.options._helper,r.placeholder&&r.placeholder.remove(),i.helper.appendTo(n._parent),n._refreshOffsets(e),i.position=n._generatePosition(e,!0),n._trigger("fromSortable",e),n.dropped=!1,t.each(n.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,n){var s=t("body"),r=n.options;s.css("cursor")&&(r._cursor=s.css("cursor")),s.css("cursor",r.cursor)},stop:function(e,i,n){var s=n.options;s._cursor&&t("body").css("cursor",s._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,n){var s=t(i.helper),r=n.options;s.css("opacity")&&(r._opacity=s.css("opacity")),s.css("opacity",r.opacity)},stop:function(e,i,n){var s=n.options;s._opacity&&t(i.helper).css("opacity",s._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,n){var s=n.options,r=!1,o=n.scrollParentNotHidden[0],a=n.document[0];o!==a&&"HTML"!==o.tagName?(s.axis&&"x"===s.axis||(n.overflowOffset.top+o.offsetHeight-e.pageY<s.scrollSensitivity?o.scrollTop=r=o.scrollTop+s.scrollSpeed:e.pageY-n.overflowOffset.top<s.scrollSensitivity&&(o.scrollTop=r=o.scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(n.overflowOffset.left+o.offsetWidth-e.pageX<s.scrollSensitivity?o.scrollLeft=r=o.scrollLeft+s.scrollSpeed:e.pageX-n.overflowOffset.left<s.scrollSensitivity&&(o.scrollLeft=r=o.scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(e.pageY-t(a).scrollTop()<s.scrollSensitivity?r=t(a).scrollTop(t(a).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(a).scrollTop())<s.scrollSensitivity&&(r=t(a).scrollTop(t(a).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(e.pageX-t(a).scrollLeft()<s.scrollSensitivity?r=t(a).scrollLeft(t(a).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(a).scrollLeft())<s.scrollSensitivity&&(r=t(a).scrollLeft(t(a).scrollLeft()+s.scrollSpeed)))),!1!==r&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(n,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,n){var s=n.options;n.snapElements=[],t(s.snap.constructor!==String?s.snap.items||":data(ui-draggable)":s.snap).each(function(){var e=t(this),i=e.offset();this!==n.element[0]&&n.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,n){var s,r,o,a,l,u,c,h,d,p,f=n.options,g=f.snapTolerance,m=i.offset.left,v=m+n.helperProportions.width,_=i.offset.top,y=_+n.helperProportions.height;for(d=n.snapElements.length-1;d>=0;d--)u=(l=n.snapElements[d].left-n.margins.left)+n.snapElements[d].width,h=(c=n.snapElements[d].top-n.margins.top)+n.snapElements[d].height,l-g>v||m>u+g||c-g>y||_>h+g||!t.contains(n.snapElements[d].item.ownerDocument,n.snapElements[d].item)?(n.snapElements[d].snapping&&n.options.snap.release&&n.options.snap.release.call(n.element,e,t.extend(n._uiHash(),{snapItem:n.snapElements[d].item})),n.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(s=g>=Math.abs(c-y),r=g>=Math.abs(h-_),o=g>=Math.abs(l-v),a=g>=Math.abs(u-m),s&&(i.position.top=n._convertPositionTo("relative",{top:c-n.helperProportions.height,left:0}).top),r&&(i.position.top=n._convertPositionTo("relative",{top:h,left:0}).top),o&&(i.position.left=n._convertPositionTo("relative",{top:0,left:l-n.helperProportions.width}).left),a&&(i.position.left=n._convertPositionTo("relative",{top:0,left:u}).left)),p=s||r||o||a,"outer"!==f.snapMode&&(s=g>=Math.abs(c-_),r=g>=Math.abs(h-y),o=g>=Math.abs(l-m),a=g>=Math.abs(u-v),s&&(i.position.top=n._convertPositionTo("relative",{top:c,left:0}).top),r&&(i.position.top=n._convertPositionTo("relative",{top:h-n.helperProportions.height,left:0}).top),o&&(i.position.left=n._convertPositionTo("relative",{top:0,left:l}).left),a&&(i.position.left=n._convertPositionTo("relative",{top:0,left:u-n.helperProportions.width}).left)),!n.snapElements[d].snapping&&(s||r||o||a||p)&&n.options.snap.snap&&n.options.snap.snap.call(n.element,e,t.extend(n._uiHash(),{snapItem:n.snapElements[d].item})),n.snapElements[d].snapping=s||r||o||a||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,n){var s,r=n.options,o=t.makeArray(t(r.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});o.length&&(s=parseInt(t(o[0]).css("zIndex"),10)||0,t(o).each(function(e){t(this).css("zIndex",s+e)}),this.css("zIndex",s+o.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,n){var s=t(i.helper),r=n.options;s.css("zIndex")&&(r._zIndex=s.css("zIndex")),s.css("zIndex",r.zIndex)},stop:function(e,i,n){var s=n.options;s._zIndex&&t(i.helper).css("zIndex",s._zIndex)}}),t.ui.draggable,t.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,n=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(n)?n:function(t){return t.is(n)},this.proportions=function(){return arguments.length?void(e=arguments[0]):e||(e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight})},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var n=t.ui.ddmanager.droppables[this.options.scope];this._splice(n),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var n=i||t.ui.ddmanager.current,s=!1;return!(!n||(n.currentItem||n.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===n.options.scope&&i.accept.call(i.element[0],n.currentItem||n.element)&&u(n,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(s=!0,!1):void 0}),!s&&(!!this.accept.call(this.element[0],n.currentItem||n.element)&&(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(n)),this.element)))},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var u=t.ui.intersect=function(){function t(t,e,i){return t>=e&&e+i>t}return function(e,i,n,s){if(!i.offset)return!1;var r=(e.positionAbs||e.position.absolute).left+e.margins.left,o=(e.positionAbs||e.position.absolute).top+e.margins.top,a=r+e.helperProportions.width,l=o+e.helperProportions.height,u=i.offset.left,c=i.offset.top,h=u+i.proportions().width,d=c+i.proportions().height;switch(n){case"fit":return r>=u&&h>=a&&o>=c&&d>=l;case"intersect":return r+e.helperProportions.width/2>u&&h>a-e.helperProportions.width/2&&o+e.helperProportions.height/2>c&&d>l-e.helperProportions.height/2;case"pointer":return t(s.pageY,c,i.proportions().height)&&t(s.pageX,u,i.proportions().width);case"touch":return(o>=c&&d>=o||l>=c&&d>=l||c>o&&l>d)&&(r>=u&&h>=r||a>=u&&h>=a||u>r&&a>h);default:return!1}}}();t.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(e,i){var n,s,r=t.ui.ddmanager.droppables[e.options.scope]||[],o=i?i.type:null,a=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(n=0;r.length>n;n++)if(!(r[n].options.disabled||e&&!r[n].accept.call(r[n].element[0],e.currentItem||e.element))){for(s=0;a.length>s;s++)if(a[s]===r[n].element[0]){r[n].proportions().height=0;continue t}r[n].visible="none"!==r[n].element.css("display"),r[n].visible&&("mousedown"===o&&r[n]._activate.call(r[n],i),r[n].offset=r[n].element.offset(),r[n].proportions({width:r[n].element[0].offsetWidth,height:r[n].element[0].offsetHeight}))}},drop:function(e,i){var n=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&u(e,this,this.options.tolerance,i)&&(n=this._drop.call(this,i)||n),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),n},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var n,s,r,o=u(e,this,this.options.tolerance,i),a=!o&&this.isover?"isout":o&&!this.isover?"isover":null;a&&(this.options.greedy&&(s=this.options.scope,(r=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===s})).length&&((n=t(r[0]).droppable("instance")).greedyChild="isover"===a)),n&&"isover"===a&&(n.isover=!1,n.isout=!0,n._out.call(n,i)),this[a]=!0,this["isout"===a?"isover":"isout"]=!1,this["isover"===a?"_over":"_out"].call(this,i),n&&"isout"===a&&(n.isout=!1,n.isover=!0,n._over.call(n,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},!1!==t.uiBackCompat&&t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),t.ui.droppable,t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return e[n]>0||(e[n]=1,s=e[n]>0,e[n]=0,s)},_create:function(){var e,i=this.options,n=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(n._removeClass("ui-resizable-autohide"),n._handles.show())}).on("mouseleave",function(){i.disabled||n.resizing||(n._addClass("ui-resizable-autohide"),n._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var e,i,n,s,r,o=this.options,a=this;if(this.handles=o.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),n=this.handles.split(","),this.handles={},i=0;n.length>i;i++)s="ui-resizable-"+(e=t.trim(n[i])),r=t("<div>"),this._addClass(r,"ui-resizable-handle "+s),r.css({zIndex:o.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(r);this._renderAxis=function(e){var i,n,s,r;for(i in e=e||this.element,this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:a._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(n=t(this.handles[i],this.element),r=/sw|ne|nw|se|n|s/.test(i)?n.outerHeight():n.outerWidth(),s=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(s,r),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){a.resizing||(this.className&&(r=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=r&&r[1]?r[1]:"se")}),o.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,n,s=!1;for(i in this.handles)((n=t(this.handles[i])[0])===e.target||t.contains(n,e.target))&&(s=!0);return!this.options.disabled&&s},_mouseStart:function(e){var i,n,s,r=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),n=this._num(this.helper.css("top")),r.containment&&(i+=t(r.containment).scrollLeft()||0,n+=t(r.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:n},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:n},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof r.aspectRatio?r.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===s?this.axis+"-resize":s),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,n,s=this.originalMousePosition,r=this.axis,o=e.pageX-s.left||0,a=e.pageY-s.top||0,l=this._change[r];return this._updatePrevProperties(),!!l&&(i=l.apply(this,[e,o,a]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),n=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(n)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1)},_mouseStop:function(e){this.resizing=!1;var i,n,s,r,o,a,l,u=this.options,c=this;return this._helper&&(s=(n=(i=this._proportionallyResizeElements).length&&/textarea/i.test(i[0].nodeName))&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,r=n?0:c.sizeDiff.width,o={width:c.helper.width()-r,height:c.helper.height()-s},a=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,l=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,u.animate||this.element.css(t.extend(o,{top:l,left:a})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!u.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,n,s,r,o=this.options;r={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||t)&&(e=r.minHeight*this.aspectRatio,n=r.minWidth/this.aspectRatio,i=r.maxHeight*this.aspectRatio,s=r.maxWidth/this.aspectRatio,e>r.minWidth&&(r.minWidth=e),n>r.minHeight&&(r.minHeight=n),r.maxWidth>i&&(r.maxWidth=i),r.maxHeight>s&&(r.maxHeight=s)),this._vBoundaries=r},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,n=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===n&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===n&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,n=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,s=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,r=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,o=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,a=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,u=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return r&&(t.width=e.minWidth),o&&(t.height=e.minHeight),n&&(t.width=e.maxWidth),s&&(t.height=e.maxHeight),r&&u&&(t.left=a-e.minWidth),n&&u&&(t.left=a-e.maxWidth),o&&c&&(t.top=l-e.minHeight),s&&c&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],n=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],s=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseFloat(n[e])||0,i[e]+=parseFloat(s[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize;return{left:this.originalPosition.left+e,width:i.width-e}},n:function(t,e,i){var n=this.originalSize;return{top:this.originalPosition.top+i,height:n.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,n){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,n]))},sw:function(e,i,n){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,n]))},ne:function(e,i,n){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,n]))},nw:function(e,i,n){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,n]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),n=i.options,s=i._proportionallyResizeElements,r=s.length&&/textarea/i.test(s[0].nodeName),o=r&&i._hasScroll(s[0],"left")?0:i.sizeDiff.height,a=r?0:i.sizeDiff.width,l={width:i.size.width-a,height:i.size.height-o},u=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(l,c&&u?{top:c,left:u}:{}),{duration:n.animateDuration,easing:n.animateEasing,step:function(){var n={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};s&&s.length&&t(s[0]).css({width:n.width,height:n.height}),i._updateCache(n),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,n,s,r,o,a,l=t(this).resizable("instance"),u=l.options,c=l.element,h=u.containment,d=h instanceof t?h.get(0):/parent/.test(h)?c.parent().get(0):h;d&&(l.containerElement=t(d),/document/.test(h)||h===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,n){i[t]=l._num(e.css("padding"+n))}),l.containerOffset=e.offset(),l.containerPosition=e.position(),l.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},n=l.containerOffset,s=l.containerSize.height,r=l.containerSize.width,o=l._hasScroll(d,"left")?d.scrollWidth:r,a=l._hasScroll(d)?d.scrollHeight:s,l.parentData={element:d,left:n.left,top:n.top,width:o,height:a}))},resize:function(e){var i,n,s,r,o=t(this).resizable("instance"),a=o.options,l=o.containerOffset,u=o.position,c=o._aspectRatio||e.shiftKey,h={top:0,left:0},d=o.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(h=l),u.left<(o._helper?l.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-l.left:o.position.left-h.left),c&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=a.helper?l.left:0),u.top<(o._helper?l.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-l.top:o.position.top),c&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?l.top:0),s=o.containerElement.get(0)===o.element.parent().get(0),r=/relative|absolute/.test(o.containerElement.css("position")),s&&r?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-h.left:o.offset.left-l.left)),n=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-h.top:o.offset.top-l.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,c&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),n+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-n,c&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,n=e.containerOffset,s=e.containerPosition,r=e.containerElement,o=t(e.helper),a=o.offset(),l=o.outerWidth()-e.sizeDiff.width,u=o.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(r.css("position"))&&t(this).css({left:a.left-s.left-n.left,width:l,height:u}),e._helper&&!i.animate&&/static/.test(r.css("position"))&&t(this).css({left:a.left-s.left-n.left,width:l,height:u})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance").options;t(e.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var n=t(this).resizable("instance"),s=n.options,r=n.originalSize,o=n.originalPosition,a={height:n.size.height-r.height||0,width:n.size.width-r.width||0,top:n.position.top-o.top||0,left:n.position.left-o.left||0};t(s.alsoResize).each(function(){var e=t(this),n=t(this).data("ui-resizable-alsoresize"),s={},r=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(r,function(t,e){var i=(n[e]||0)+(a[e]||0);i&&i>=0&&(s[e]=i||null)}),e.css(s)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),!1!==t.uiBackCompat&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),n=i.options,s=i.size,r=i.originalSize,o=i.originalPosition,a=i.axis,l="number"==typeof n.grid?[n.grid,n.grid]:n.grid,u=l[0]||1,c=l[1]||1,h=Math.round((s.width-r.width)/u)*u,d=Math.round((s.height-r.height)/c)*c,p=r.width+h,f=r.height+d,g=n.maxWidth&&p>n.maxWidth,m=n.maxHeight&&f>n.maxHeight,v=n.minWidth&&n.minWidth>p,_=n.minHeight&&n.minHeight>f;n.grid=l,v&&(p+=u),_&&(f+=c),g&&(p-=u),m&&(f-=c),/^(se|s|e)$/.test(a)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(a)?(i.size.width=p,i.size.height=f,i.position.top=o.top-d):/^(sw)$/.test(a)?(i.size.width=p,i.size.height=f,i.position.left=o.left-h):((0>=f-c||0>=p-u)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=o.top-d):(f=c-e.height,i.size.height=f,i.position.top=o.top+r.height-f),p-u>0?(i.size.width=p,i.position.left=o.left-h):(p=u-e.width,i.size.width=p,i.position.left=o.left+r.width-p))}}),t.ui.resizable,t.widget("ui.selectable",t.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e.elementPos=t(e.element[0]).offset(),e.selectees=t(e.options.filter,e.element[0]),e._addClass(e.selectees,"ui-selectee"),e.selectees.each(function(){var i=t(this),n=i.offset(),s={left:n.left-e.elementPos.left,top:n.top-e.elementPos.top};t.data(this,"selectable-item",{element:this,$element:i,left:s.left,top:s.top,right:s.left+i.outerWidth(),bottom:s.top+i.outerHeight(),startselected:!1,selected:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselecting:i.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=t("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(e){var i=this,n=this.options;this.opos=[e.pageX,e.pageY],this.elementPos=t(this.element[0]).offset(),this.options.disabled||(this.selectees=t(n.filter,this.element[0]),this._trigger("start",e),t(n.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),n.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var n=t.data(this,"selectable-item");n.startselected=!0,e.metaKey||e.ctrlKey||(i._removeClass(n.$element,"ui-selected"),n.selected=!1,i._addClass(n.$element,"ui-unselecting"),n.unselecting=!0,i._trigger("unselecting",e,{unselecting:n.element}))}),t(e.target).parents().addBack().each(function(){var n,s=t.data(this,"selectable-item");return s?(n=!e.metaKey&&!e.ctrlKey||!s.$element.hasClass("ui-selected"),i._removeClass(s.$element,n?"ui-unselecting":"ui-selected")._addClass(s.$element,n?"ui-selecting":"ui-unselecting"),s.unselecting=!n,s.selecting=n,s.selected=n,n?i._trigger("selecting",e,{selecting:s.element}):i._trigger("unselecting",e,{unselecting:s.element}),!1):void 0}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,n=this,s=this.options,r=this.opos[0],o=this.opos[1],a=e.pageX,l=e.pageY;return r>a&&(i=a,a=r,r=i),o>l&&(i=l,l=o,o=i),this.helper.css({left:r,top:o,width:a-r,height:l-o}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),u=!1,c={};i&&i.element!==n.element[0]&&(c.left=i.left+n.elementPos.left,c.right=i.right+n.elementPos.left,c.top=i.top+n.elementPos.top,c.bottom=i.bottom+n.elementPos.top,"touch"===s.tolerance?u=!(c.left>a||r>c.right||c.top>l||o>c.bottom):"fit"===s.tolerance&&(u=c.left>r&&a>c.right&&c.top>o&&l>c.bottom),u?(i.selected&&(n._removeClass(i.$element,"ui-selected"),i.selected=!1),i.unselecting&&(n._removeClass(i.$element,"ui-unselecting"),i.unselecting=!1),i.selecting||(n._addClass(i.$element,"ui-selecting"),i.selecting=!0,n._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(n._removeClass(i.$element,"ui-selecting"),i.selecting=!1,n._addClass(i.$element,"ui-selected"),i.selected=!0):(n._removeClass(i.$element,"ui-selecting"),i.selecting=!1,i.startselected&&(n._addClass(i.$element,"ui-unselecting"),i.unselecting=!0),n._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(n._removeClass(i.$element,"ui-selected"),i.selected=!1,n._addClass(i.$element,"ui-unselecting"),i.unselecting=!0,n._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var n=t.data(this,"selectable-item");i._removeClass(n.$element,"ui-unselecting"),n.unselecting=!1,n.startselected=!1,i._trigger("unselected",e,{unselected:n.element})}),t(".ui-selecting",this.element[0]).each(function(){var n=t.data(this,"selectable-item");i._removeClass(n.$element,"ui-selecting")._addClass(n.$element,"ui-selected"),n.selecting=!1,n.selected=!0,n.startselected=!0,i._trigger("selected",e,{selected:n.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var n=null,s=!1,r=this;return!this.reverting&&(!this.options.disabled&&"static"!==this.options.type&&(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,r.widgetName+"-item")===r?(n=t(this),!1):void 0}),t.data(e.target,r.widgetName+"-item")===r&&(n=t(e.target)),!!n&&(!(this.options.handle&&!i&&(t(this.options.handle,n).find("*").addBack().each(function(){this===e.target&&(s=!0)}),!s))&&(this.currentItem=n,this._removeCurrentsFromItems(),!0))))},_mouseStart:function(e,i,n){var s,r,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(r=this.document.find("body"),this.storedCursor=r.css("cursor"),r.css("cursor",o.cursor),this.storedStylesheet=t("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(r)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!n)for(s=this.containers.length-1;s>=0;s--)this.containers[s]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,n,s,r,o=this.options,a=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=a=this.scrollParent[0].scrollTop+o.scrollSpeed:e.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=a=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=a=this.scrollParent[0].scrollLeft+o.scrollSpeed:e.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=a=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(e.pageY-this.document.scrollTop()<o.scrollSensitivity?a=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<o.scrollSensitivity&&(a=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),e.pageX-this.document.scrollLeft()<o.scrollSensitivity?a=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(a=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),!1!==a&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=(n=this.items[i]).item[0],(r=this._intersectsWithPointer(n))&&n.instance===this.currentContainer&&s!==this.currentItem[0]&&this.placeholder[1===r?"next":"prev"]()[0]!==s&&!t.contains(this.placeholder[0],s)&&("semi-dynamic"!==this.options.type||!t.contains(this.element[0],s))){if(this.direction=1===r?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(n))break;this._rearrange(e,n),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var n=this,s=this.placeholder.offset(),r=this.options.axis,o={};r&&"x"!==r||(o.left=s.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),r&&"y"!==r||(o.top=s.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){n._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new t.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),n=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&n.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!n.length&&e.key&&n.push(e.key+"="),n.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),n=[];return e=e||{},i.each(function(){n.push(t(e.item||this).attr(e.attribute||"id")||"")}),n},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,n=this.positionAbs.top,s=n+this.helperProportions.height,r=t.left,o=r+t.width,a=t.top,l=a+t.height,u=this.offset.click.top,c=this.offset.click.left,h="x"===this.options.axis||n+u>a&&l>n+u,d="y"===this.options.axis||e+c>r&&o>e+c,p=h&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>r&&o>i-this.helperProportions.width/2&&n+this.helperProportions.height/2>a&&l>s-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,n="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width);return!!(n&&s)&&(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1))},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();return this.floating&&s?"right"===s&&i||"left"===s&&!i:n&&("down"===n&&e||"up"===n&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){a.push(this)}var n,s,r,o,a=[],l=[],u=this._connectWith();if(u&&e)for(n=u.length-1;n>=0;n--)for(s=(r=t(u[n],this.document[0])).length-1;s>=0;s--)(o=t.data(r[s],this.widgetFullName))&&o!==this&&!o.options.disabled&&l.push([t.isFunction(o.options.items)?o.options.items.call(o.element):t(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(l.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),n=l.length-1;n>=0;n--)l[n][0].each(i);return t(a)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,n,s,r,o,a,l,u,c=this.items,h=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=(s=t(d[i],this.document[0])).length-1;n>=0;n--)(r=t.data(s[n],this.widgetFullName))&&r!==this&&!r.options.disabled&&(h.push([t.isFunction(r.options.items)?r.options.items.call(r.element[0],e,{item:this.currentItem}):t(r.options.items,r.element),r]),this.containers.push(r));for(i=h.length-1;i>=0;i--)for(o=h[i][1],n=0,u=(a=h[i][0]).length;u>n;n++)(l=t(a[n])).data(this.widgetName+"-item",o),c.push({item:l,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(e){var i,n,s,r;for(this.floating=!!this.items.length&&("x"===this.options.axis||this._isFloating(this.items[0].item)),this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset()),i=this.items.length-1;i>=0;i--)(n=this.items[i]).instance!==this.currentContainer&&this.currentContainer&&n.item[0]!==this.currentItem[0]||(s=this.options.toleranceElement?t(this.options.toleranceElement,n.item):n.item,e||(n.width=s.outerWidth(),n.height=s.outerHeight()),r=s.offset(),n.left=r.left,n.top=r.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)r=this.containers[i].element.offset(),this.containers[i].containerCache.left=r.left,this.containers[i].containerCache.top=r.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){var i,n=(e=e||this).options;n.placeholder&&n.placeholder.constructor!==String||(i=n.placeholder,n.placeholder={element:function(){var n=e.currentItem[0].nodeName.toLowerCase(),s=t("<"+n+">",e.document[0]);return e._addClass(s,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(s,"ui-sortable-helper"),"tbody"===n?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(s)):"tr"===n?e._createTrPlaceholder(e.currentItem,s):"img"===n&&s.attr("src",e.currentItem.attr("src")),i||s.css("visibility","hidden"),s},update:function(t,s){(!i||n.forcePlaceholderSize)&&(s.height()||s.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),s.width()||s.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(n.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),n.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var n=this;e.children().each(function(){t("<td>&#160;</td>",n.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,n,s,r,o,a,l,u,c,h,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(s=1e4,r=null,o=(c=d.floating||this._isFloating(this.currentItem))?"left":"top",a=c?"width":"height",h=c?"pageX":"pageY",n=this.items.length-1;n>=0;n--)t.contains(this.containers[p].element[0],this.items[n].item[0])&&this.items[n].item[0]!==this.currentItem[0]&&(l=this.items[n].item.offset()[o],u=!1,e[h]-l>this.items[n][a]/2&&(u=!0),s>Math.abs(e[h]-l)&&(s=Math.abs(e[h]-l),r=this.items[n],this.direction=u?"up":"down"));if(!r&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return void(this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1));r?this._rearrange(e,r,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,n=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return n.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(n[0]),n[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!n[0].style.width||i.forceHelperSize)&&n.width(this.currentItem.width()),(!n[0].style.height||i.forceHelperSize)&&n.height(this.currentItem.height()),n},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,n,s=this.options;"parent"===s.containment&&(s.containment=this.helper[0].parentNode),("document"===s.containment||"window"===s.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===s.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===s.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(s.containment)||(e=t(s.containment)[0],i=t(s.containment).offset(),n="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(n?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(n?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var n="absolute"===e?1:-1,s="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,r=/(html|body)/i.test(s[0].tagName);return{top:i.top+this.offset.relative.top*n+this.offset.parent.top*n-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():r?0:s.scrollTop())*n,left:i.left+this.offset.relative.left*n+this.offset.parent.left*n-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():r?0:s.scrollLeft())*n}},_generatePosition:function(e){var i,n,s=this.options,r=e.pageX,o=e.pageY,a="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=/(html|body)/i.test(a[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(r=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(r=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),s.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/s.grid[1])*s.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-s.grid[1]:i+s.grid[1]:i,n=this.originalPageX+Math.round((r-this.originalPageX)/s.grid[0])*s.grid[0],r=this.containment?n-this.offset.click.left>=this.containment[0]&&n-this.offset.click.left<=this.containment[2]?n:n-this.offset.click.left>=this.containment[0]?n-s.grid[0]:n+s.grid[0]:n)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():l?0:a.scrollTop()),left:r-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():l?0:a.scrollLeft())}},_rearrange:function(t,e,i,n){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var s=this.counter;this._delay(function(){s===this.counter&&this.refreshPositions(!n)})},_clear:function(t,e){function i(t,e,i){return function(n){i._trigger(t,n,e._uiHash(e))}}this.reverting=!1;var n,s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(n in this._storedCSS)("auto"===this._storedCSS[n]||"static"===this._storedCSS[n])&&(this._storedCSS[n]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&s.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||s.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(s.push(function(t){this._trigger("remove",t,this._uiHash())}),s.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),n=this.containers.length-1;n>=0;n--)e||s.push(i("deactivate",this,this.containers[n])),this.containers[n].containerCache.over&&(s.push(i("out",this,this.containers[n])),this.containers[n].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(n=0;s.length>n;n++)s[n].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){!1===t.Widget.prototype._trigger.apply(this,arguments)&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||!1!==e.active&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,n=this.options.icons;n&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+n.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,n.header)._addClass(i,null,n.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?void this._activate(e):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||!1!==this.options.active||this._activate(0),void("icons"===t&&(this._destroyIcons(),e&&this._createIcons())))},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,n=this.headers.length,s=this.headers.index(e.target),r=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:r=this.headers[(s+1)%n];break;case i.LEFT:case i.UP:r=this.headers[(s-1+n)%n];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:r=this.headers[0];break;case i.END:r=this.headers[n-1]}r&&(t(e.target).attr("tabIndex",-1),t(r).attr("tabIndex",0),t(r).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),!1===e.active&&!0===e.collapsible||!this.headers.length?(e.active=!1,this.active=t()):!1===e.active?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,n=i.heightStyle,s=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),n=e.next(),s=n.uniqueId().attr("id");e.attr("aria-controls",s),n.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===n?(e=s.height(),this.element.siblings(":visible").each(function(){var i=t(this),n=i.css("position");"absolute"!==n&&"fixed"!==n&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===n&&(e=0,this.headers.next().each(function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,n,s=this.options,r=this.active,o=t(e.currentTarget),a=o[0]===r[0],l=a&&s.collapsible,u=l?t():o.next(),c={oldHeader:r,oldPanel:r.next(),newHeader:l?t():o,newPanel:u};e.preventDefault(),a&&!s.collapsible||!1===this._trigger("beforeActivate",e,c)||(s.active=!l&&this.headers.index(o),this.active=a?t():o,this._toggle(c),this._removeClass(r,"ui-accordion-header-active","ui-state-active"),s.icons&&(i=r.children(".ui-accordion-header-icon"),this._removeClass(i,null,s.icons.activeHeader)._addClass(i,null,s.icons.header)),a||(this._removeClass(o,"ui-accordion-header-collapsed")._addClass(o,"ui-accordion-header-active","ui-state-active"),s.icons&&(n=o.children(".ui-accordion-header-icon"),this._removeClass(n,null,s.icons.header)._addClass(n,null,s.icons.activeHeader)),this._addClass(o.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,n=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=n,this.options.animate?this._animate(i,n,e):(n.hide(),i.show(),this._toggleComplete(e)),n.attr({"aria-hidden":"true"}),n.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&n.length?n.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var n,s,r,o=this,a=0,l=t.css("box-sizing"),u=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},h=u&&c.down||c,d=function(){o._toggleComplete(i)};return"number"==typeof h&&(r=h),"string"==typeof h&&(s=h),s=s||h.easing||c.easing,r=r||h.duration||c.duration,e.length?t.length?(n=t.show().outerHeight(),e.animate(this.hideProps,{duration:r,easing:s,step:function(t,e){e.now=Math.round(t)}}),void t.hide().animate(this.showProps,{duration:r,easing:s,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===l&&(a+=i.now):"content"!==o.options.heightStyle&&(i.now=Math.round(n-e.outerHeight()-a),a=0)}})):e.animate(this.hideProps,r,s,d):t.animate(this.showProps,r,s,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),n=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&n.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),n=t(e.currentTarget);i[0]===n[0]&&(this._removeClass(n.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,n))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]))&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),e.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,n,s,r,o=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:o=!1,n=this.previousFilter||"",r=!1,s=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),s===n?r=!0:s=n+s,i=this._filterMenuItems(s),(i=r&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i).length||(s=String.fromCharCode(e.keyCode),i=this._filterMenuItems(s)),i.length?(this.focus(e,i),this.previousFilter=s,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,n,s,r=this,o=this.options.icons.submenu,a=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),i=a.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),n=t("<span>").data("ui-menu-submenu-caret",!0);r._addClass(n,"ui-menu-icon","ui-icon "+o),i.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(i,"ui-menu","ui-widget ui-widget-content ui-front"),(e=a.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function(){var e=t(this);r._isDivider(e)&&r._addClass(e,"ui-menu-divider","ui-widget-content")}),s=(n=e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(s,"ui-menu-item-wrapper"),e.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,n,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),n=this.active.children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",n.attr("id")),s=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),(i=e.children(".ui-menu")).length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,n,s,r,o,a;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,n=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,s=e.offset().top-this.activeMenu.offset().top-i-n,r=this.activeMenu.scrollTop(),o=this.activeMenu.height(),a=e.outerHeight(),0>s?this.activeMenu.scrollTop(r+s):s+a>o&&this.activeMenu.scrollTop(r+s-o+a))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var n=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));n.length||(n=this.element),this._close(n),this.blur(e),this._removeClass(n.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=n},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var n;this.active&&(n="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),n&&n.length&&this.active||(n=this.activeMenu.find(this.options.items)[e]()),this.focus(i,n)},nextPage:function(e){var i,n,s;return this.active?void(this.isLastItem()||(this._hasScroll()?(n=this.active.offset().top,s=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return 0>(i=t(this)).offset().top-n-s}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(e)},previousPage:function(e){var i,n,s;return this.active?void(this.isFirstItem()||(this._hasScroll()?(n=this.active.offset().top,s=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return(i=t(this)).offset().top-n+s>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first()))):void this.next(e)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),n=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,n,s=this.element[0].nodeName.toLowerCase(),r="textarea"===s,o="input"===s;this.isMultiLine=r||!o&&this._isContentEditable(this.element),this.valueMethod=this.element[r||o?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(s){if(this.element.prop("readOnly"))return e=!0,n=!0,void(i=!0);e=!1,n=!1,i=!1;var r=t.ui.keyCode;switch(s.keyCode){case r.PAGE_UP:e=!0,this._move("previousPage",s);break;case r.PAGE_DOWN:e=!0,this._move("nextPage",s);break;case r.UP:e=!0,this._keyEvent("previous",s);break;case r.DOWN:e=!0,this._keyEvent("next",s);break;case r.ENTER:this.menu.active&&(e=!0,s.preventDefault(),this.menu.select(s));break;case r.TAB:this.menu.active&&this.menu.select(s);break;case r.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(s),s.preventDefault());break;default:i=!0,this._searchTimeout(s)}},keypress:function(n){if(e)return e=!1,void((!this.isMultiLine||this.menu.element.is(":visible"))&&n.preventDefault());if(!i){var s=t.ui.keyCode;switch(n.keyCode){case s.PAGE_UP:this._move("previousPage",n);break;case s.PAGE_DOWN:this._move("nextPage",n);break;case s.UP:this._keyEvent("previous",n);break;case s.DOWN:this._keyEvent("next",n)}}},input:function(t){return n?(n=!1,void t.preventDefault()):void this._searchTimeout(t)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(t),void this._change(t))}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var n,s;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),void this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)})):(s=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:s})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(s.value),void((n=i.item.attr("aria-label")||s.value)&&t.trim(n).length&&(this.liveRegion.children().hide(),t("<div>").text(n).appendTo(this.liveRegion))))},menuselect:function(e,i){var n=i.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=n})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),this.term=this._value(),this.close(e),this.selectedItem=n}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,n=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,n){n(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,s){n.xhr&&n.xhr.abort(),n.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){s(t)},error:function(){s([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),n=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!n)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):!1!==this._trigger("search",e)?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var n=this;t.each(i,function(t,i){n._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[t](e):void this.search(null,e)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var n=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return n.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete;var c,h=/ui-corner-([a-z]){2,6}/g;t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,function(n,s){var r,o={};return s?"controlgroupLabel"===n?((r=e.element.find(s)).each(function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),e._addClass(r,null,"ui-widget ui-widget-content ui-state-default"),void(i=i.concat(r.get()))):void(t.fn[n]&&(o=e["_"+n+"Options"]?e["_"+n+"Options"]("middle"):{classes:{}},e.element.find(s).each(function(){var s=t(this),r=s[n]("instance"),a=t.widget.extend({},o);if("button"!==n||!s.parent(".ui-spinner").length){r||(r=s[n]()[n]("instance")),r&&(a.classes=e._resolveClassesValues(a.classes,r)),s[n](a);var l=s[n]("widget");t.data(l[0],"ui-controlgroup-data",r||s[n]("instance")),i.push(l[0])}}))):void 0}),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var i=t(this).data("ui-controlgroup-data");i&&i[e]&&i[e]()})},_updateCornerClass:function(t,e){var i=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,"ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),this._addClass(t,null,i)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,n={classes:{}};return n.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],n},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:!!e&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(e,i){var n={};return t.each(e,function(s){var r=i.options.classes[s]||"";r=t.trim(r.replace(h,"")),n[s]=(r+" "+e[s]).replace(/\s+/g," ")}),n},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?void this._callChildMethod(e?"disable":"enable"):void this.refresh()},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],function(t,n){var s=e[n]().data("ui-controlgroup-data");if(s&&i["_"+s.widgetName+"Options"]){var r=i["_"+s.widgetName+"Options"](1===e.length?"only":n);r.classes=i._resolveClassesValues(r.classes,s),s.element[s.widgetName](r)}else i._updateCornerClass(e[n](),n)}),this._callChildMethod("refresh"))}}),t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,n=this,s=this._super()||{};return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){n.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML}),this.originalLabel&&(s.label=this.originalLabel),null!=(e=this.element[0].disabled)&&(s.disabled=e),s},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var e=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var e=this.element[0].name,i="input[name='"+t.ui.escapeSelector(e)+"']";return e?(this.form.length?t(this.form[0].elements).filter(i):t(i).filter(function(){return 0===t(this).form().length})).not(this.element):t([])},_toggleClasses:function(){var e=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each(function(){var e=t(this).checkboxradio("instance");e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){return"label"!==t||e?(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),void(this.element[0].disabled=e)):void this.refresh()):void 0},_updateIcon:function(e){var i="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),this.iconSpace&&(t=t.not(this.iconSpace[0])),t.remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),t.ui.checkboxradio,t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),null!=(t=this.element[0].disabled)&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(e,i){var n="iconPosition"!==e,s=n?this.options.iconPosition:i,r="top"===s||"bottom"===s;this.icon?n&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),n&&this._addClass(this.icon,null,i),this._attachIcon(s),r?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(s))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),!1!==t.uiBackCompat&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){return"text"===t?void this._super("showLabel",e):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),void this._superApply(arguments))}}),t.fn.button=function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button,t.extend(t.ui,{datepicker:{version:"1.12.1"}}),t.extend(e.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return s(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var n,s,r;s="div"===(n=e.nodeName.toLowerCase())||"span"===n,e.id||(this.uuid+=1,e.id="dp"+this.uuid),(r=this._newInst(t(e),s)).settings=t.extend({},i||{}),"input"===n?this._connectDatepicker(e,r):s&&this._inlineDatepicker(e,r)},_newInst:function(e,n){return{id:e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1"),input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:n,dpDiv:n?i(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var n=t(e);i.append=t([]),i.trigger=t([]),n.hasClass(this.markerClassName)||(this._attachments(n,i),n.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var n,s,r,o=this._get(i,"appendText"),a=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=t("<span class='"+this._appendClass+"'>"+o+"</span>"),e[a?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),("focus"===(n=this._get(i,"showOn"))||"both"===n)&&e.on("focus",this._showDatepicker),("button"===n||"both"===n)&&(s=this._get(i,"buttonText"),r=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:r,alt:s,title:s}):t("<button type='button'></button>").addClass(this._triggerClass).html(r?t("<img/>").attr({src:r,alt:s,title:s}):s)),e[a?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,n,s,r=new Date(2009,11,20),o=this._get(t,"dateFormat");o.match(/[DM]/)&&(e=function(t){for(i=0,n=0,s=0;t.length>s;s++)t[s].length>i&&(i=t[s].length,n=s);return n},r.setMonth(e(this._get(t,o.match(/MM/)?"monthNames":"monthNamesShort"))),r.setDate(e(this._get(t,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-r.getDay())),t.input.attr("size",this._formatDate(t,r).length)}},_inlineDatepicker:function(e,i){var n=t(e);n.hasClass(this.markerClassName)||(n.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,n,r,o){var a,l,u,c,h,d=this._dialogInst;return d||(this.uuid+=1,a="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+a+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),(d=this._dialogInst=this._newInst(this._dialogInput,!1)).settings={},t.data(this._dialogInput[0],"datepicker",d)),s(d.settings,r||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(l=document.documentElement.clientWidth,u=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,h=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+c,u/2-150+h]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=n,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,n=t(e),s=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(s.append.remove(),s.trigger.remove(),n.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&n.removeClass(this.markerClassName).empty(),c===s&&(c=null))},_enableDatepicker:function(e){var i,n,s=t(e),r=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&("input"===(i=e.nodeName.toLowerCase())?(e.disabled=!1,r.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&((n=s.children("."+this._inlineClass)).children().removeClass("ui-state-disabled"),n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,n,s=t(e),r=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&("input"===(i=e.nodeName.toLowerCase())?(e.disabled=!0,r.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&((n=s.children("."+this._inlineClass)).children().addClass("ui-state-disabled"),n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,n){var r,o,a,l,u=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):u?"all"===i?t.extend({},u.settings):this._get(u,i):null:(r=i||{},"string"==typeof i&&((r={})[i]=n),void(u&&(this._curInst===u&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),a=this._getMinMaxDate(u,"min"),l=this._getMinMaxDate(u,"max"),s(u.settings,r),null!==a&&void 0!==r.dateFormat&&void 0===r.minDate&&(u.settings.minDate=this._formatDate(u,a)),null!==l&&void 0!==r.dateFormat&&void 0===r.maxDate&&(u.settings.maxDate=this._formatDate(u,l)),"disabled"in r&&(r.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),u),this._autoSize(u),this._setDate(u,o),this._updateAlternate(u),this._updateDatepicker(u))))},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,n,s,r=t.datepicker._getInst(e.target),o=!0,a=r.dpDiv.is(".ui-datepicker-rtl");if(r._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),o=!1;break;case 13:return(s=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",r.dpDiv))[0]&&t.datepicker._selectDay(e.target,r.selectedMonth,r.selectedYear,s[0]),(i=t.datepicker._get(r,"onSelect"))?(n=t.datepicker._formatDate(r),i.apply(r.input?r.input[0]:null,[n,r])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(r,"stepBigMonths"):-t.datepicker._get(r,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(r,"stepBigMonths"):+t.datepicker._get(r,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),o=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),o=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,a?1:-1,"D"),o=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(r,"stepBigMonths"):-t.datepicker._get(r,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),o=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,a?-1:1,"D"),o=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(r,"stepBigMonths"):+t.datepicker._get(r,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),o=e.ctrlKey||e.metaKey;break;default:o=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):o=!1;o&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,n,s=t.datepicker._getInst(e.target);return t.datepicker._get(s,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(s,"dateFormat")),n=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">n||!i||i.indexOf(n)>-1):void 0},_doKeyUp:function(e){var i=t.datepicker._getInst(e.target);if(i.input.val()!==i.lastVal)try{t.datepicker.parseDate(t.datepicker._get(i,"dateFormat"),i.input?i.input.val():null,t.datepicker._getFormatConfig(i))&&(t.datepicker._setDateFromField(i),t.datepicker._updateAlternate(i),t.datepicker._updateDatepicker(i))}catch(t){}return!0},_showDatepicker:function(e){var i,n,r,o,a,l,u;("input"!==(e=e.target||e).nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),t.datepicker._isDisabledDatepicker(e)||t.datepicker._lastInput===e)||(i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),!1!==(r=(n=t.datepicker._get(i,"beforeShow"))?n.apply(e,[e,i]):{})&&(s(i.settings,r),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),o=!1,t(e).parents().each(function(){return!(o|="fixed"===t(this).css("position"))}),a={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(i),a=t.datepicker._checkOffset(i,a,o),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":o?"fixed":"absolute",display:"none",left:a.left+"px",top:a.top+"px"}),i.inline||(l=t.datepicker._get(i,"showAnim"),u=t.datepicker._get(i,"duration"),i.dpDiv.css("z-index",function(t){for(var e,i;t.length&&t[0]!==document;){if(("absolute"===(e=t.css("position"))||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[l]?i.dpDiv.show(l,t.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),t.datepicker._shouldFocusInput(i)&&i.input.trigger("focus"),t.datepicker._curInst=i)))},_updateDatepicker:function(e){this.maxRows=4,c=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),r=s[1],o=e.dpDiv.find("."+this._dayOverClass+" a");o.length>0&&n.apply(o.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),r>1&&e.dpDiv.addClass("ui-datepicker-multi-"+r).css("width",17*r+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,n){var s=e.dpDiv.outerWidth(),r=e.dpDiv.outerHeight(),o=e.input?e.input.outerWidth():0,a=e.input?e.input.outerHeight():0,l=document.documentElement.clientWidth+(n?0:t(document).scrollLeft()),u=document.documentElement.clientHeight+(n?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?s-o:0,i.left-=n&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=n&&i.top===e.input.offset().top+a?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+s>l&&l>s?Math.abs(i.left+s-l):0),i.top-=Math.min(i.top,i.top+r>u&&u>r?Math.abs(r+a):0),i},_findPos:function(e){for(var i,n=this._getInst(e),s=this._get(n,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[s?"previousSibling":"nextSibling"];return[(i=t(e).offset()).left,i.top]},_hideDatepicker:function(e){var i,n,s,r,o=this._curInst;!o||e&&o!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),n=this._get(o,"duration"),s=function(){t.datepicker._tidyDialog(o)},t.effects&&(t.effects.effect[i]||t.effects[i])?o.dpDiv.hide(i,t.datepicker._get(o,"showOptions"),n,s):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?n:null,s),i||s(),this._datepickerShowing=!1,(r=this._get(o,"onClose"))&&r.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),n=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==n)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,n){var s=t(e),r=this._getInst(s[0]);this._isDisabledDatepicker(s[0])||(this._adjustInstDate(r,i+("M"===n?this._get(r,"showCurrentAtPos"):0),n),this._updateDatepicker(r))},_gotoToday:function(e){var i,n=t(e),s=this._getInst(n[0]);this._get(s,"gotoCurrent")&&s.currentDay?(s.selectedDay=s.currentDay,s.drawMonth=s.selectedMonth=s.currentMonth,s.drawYear=s.selectedYear=s.currentYear):(i=new Date,s.selectedDay=i.getDate(),s.drawMonth=s.selectedMonth=i.getMonth(),s.drawYear=s.selectedYear=i.getFullYear()),this._notifyChange(s),this._adjustDate(n)},_selectMonthYear:function(e,i,n){var s=t(e),r=this._getInst(s[0]);r["selected"+("M"===n?"Month":"Year")]=r["draw"+("M"===n?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(r),this._adjustDate(s)},_selectDay:function(e,i,n,s){var r,o=t(e);t(s).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||((r=this._getInst(o[0])).selectedDay=r.currentDay=t("a",s).html(),r.selectedMonth=r.currentMonth=i,r.selectedYear=r.currentYear=n,this._selectDate(e,this._formatDate(r,r.currentDay,r.currentMonth,r.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var n,s=t(e),r=this._getInst(s[0]);i=null!=i?i:this._formatDate(r),r.input&&r.input.val(i),this._updateAlternate(r),(n=this._get(r,"onSelect"))?n.apply(r.input?r.input[0]:null,[i,r]):r.input&&r.input.trigger("change"),r.inline?this._updateDatepicker(r):(this._hideDatepicker(),this._lastInput=r.input[0],"object"!=typeof r.input[0]&&r.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,n,s,r=this._get(e,"altField");r&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),n=this._getDate(e),s=this.formatDate(i,n,this._getFormatConfig(e)),t(r).val(s))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,n){if(null==e||null==i)throw"Invalid arguments";if(""===(i="object"==typeof i?""+i:i+""))return null;var s,r,o,a,l=0,u=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof u?u:(new Date).getFullYear()%100+parseInt(u,10),h=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,d=(n?n.dayNames:null)||this._defaults.dayNames,p=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,f=(n?n.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,v=-1,_=-1,y=!1,b=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},w=function(t){var e=b(t),n="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,s=RegExp("^\\d{"+("y"===t?n:1)+","+n+"}"),r=i.substring(l).match(s);if(!r)throw"Missing number at position "+l;return l+=r[0].length,parseInt(r[0],10)},x=function(e,n,s){var r=-1,o=t.map(b(e)?s:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(o,function(t,e){var n=e[1];return i.substr(l,n.length).toLowerCase()===n.toLowerCase()?(r=e[0],l+=n.length,!1):void 0}),-1!==r)return r+1;throw"Unknown name at position "+l},C=function(){if(i.charAt(l)!==e.charAt(s))throw"Unexpected literal at position "+l;l++};for(s=0;e.length>s;s++)if(y)"'"!==e.charAt(s)||b("'")?C():y=!1;else switch(e.charAt(s)){case"d":v=w("d");break;case"D":x("D",h,d);break;case"o":_=w("o");break;case"m":m=w("m");break;case"M":m=x("M",p,f);break;case"y":g=w("y");break;case"@":g=(a=new Date(w("@"))).getFullYear(),m=a.getMonth()+1,v=a.getDate();break;case"!":g=(a=new Date((w("!")-this._ticksTo1970)/1e4)).getFullYear(),m=a.getMonth()+1,v=a.getDate();break;case"'":b("'")?C():y=!0;break;default:C()}if(i.length>l&&(o=i.substr(l),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c>=g?0:-100)),_>-1)for(m=1,v=_;!((r=this._getDaysInMonth(g,m-1))>=v);)m++,v-=r;if((a=this._daylightSavingAdjust(new Date(g,m-1,v))).getFullYear()!==g||a.getMonth()+1!==m||a.getDate()!==v)throw"Invalid date";return a},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:864e9*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var n,s=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,r=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,a=(i?i.monthNames:null)||this._defaults.monthNames,l=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},u=function(t,e,i){var n=""+e;if(l(t))for(;i>n.length;)n="0"+n;return n},c=function(t,e,i,n){return l(t)?n[e]:i[e]},h="",d=!1;if(e)for(n=0;t.length>n;n++)if(d)"'"!==t.charAt(n)||l("'")?h+=t.charAt(n):d=!1;else switch(t.charAt(n)){case"d":h+=u("d",e.getDate(),2);break;case"D":h+=c("D",e.getDay(),s,r);break;case"o":h+=u("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":h+=u("m",e.getMonth()+1,2);break;case"M":h+=c("M",e.getMonth(),o,a);break;case"y":h+=l("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":h+=e.getTime();break;case"!":h+=1e4*e.getTime()+this._ticksTo1970;break;case"'":l("'")?h+="'":d=!0;break;default:h+=t.charAt(n)}return h},_possibleChars:function(t){var e,i="",n=!1,s=function(i){var n=t.length>e+1&&t.charAt(e+1)===i;return n&&e++,n};for(e=0;t.length>e;e++)if(n)"'"!==t.charAt(e)||s("'")?i+=t.charAt(e):n=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":s("'")?i+="'":n=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),n=t.lastVal=t.input?t.input.val():null,s=this._getDefaultDate(t),r=s,o=this._getFormatConfig(t);try{r=this.parseDate(i,n,o)||s}catch(t){n=e?"":n}t.selectedDay=r.getDate(),t.drawMonth=t.selectedMonth=r.getMonth(),t.drawYear=t.selectedYear=r.getFullYear(),t.currentDay=n?r.getDate():0,t.currentMonth=n?r.getMonth():0,t.currentYear=n?r.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,n){var s=null==i||""===i?n:"string"==typeof i?function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(t){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,s=n.getFullYear(),r=n.getMonth(),o=n.getDate(),a=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=a.exec(i);l;){switch(l[2]||"d"){case"d":case"D":o+=parseInt(l[1],10);break;case"w":case"W":o+=7*parseInt(l[1],10);break;case"m":case"M":r+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(s,r));break;case"y":case"Y":s+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(s,r))}l=a.exec(i)}return new Date(s,r,o)}(i):"number"==typeof i?isNaN(i)?n:function(t){var e=new Date;return e.setDate(e.getDate()+t),e}(i):new Date(i.getTime());return(s=s&&"Invalid Date"==""+s?n:s)&&(s.setHours(0),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0)),this._daylightSavingAdjust(s)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var n=!e,s=t.selectedMonth,r=t.selectedYear,o=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=o.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=o.getMonth(),t.drawYear=t.selectedYear=t.currentYear=o.getFullYear(),s===t.selectedMonth&&r===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(n?"":this._formatDate(t))},_getDate:function(t){return!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),n="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(n,-i,"M")},next:function(){t.datepicker._adjustDate(n,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(n)},selectDay:function(){return t.datepicker._selectDay(n,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(n,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(n,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,n,s,r,o,a,l,u,c,h,d,p,f,g,m,v,_,y,b,w,x,C,k,T,D,S,A,E,I,O,$,P,N,M,j,H,R,L,F=new Date,z=this._daylightSavingAdjust(new Date(F.getFullYear(),F.getMonth(),F.getDate())),W=this._get(t,"isRTL"),q=this._get(t,"showButtonPanel"),U=this._get(t,"hideIfNoPrevNext"),B=this._get(t,"navigationAsDateFormat"),Y=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),K=this._get(t,"stepMonths"),X=1!==Y[0]||1!==Y[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Z=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Q=t.drawMonth-V,tt=t.drawYear;if(0>Q&&(Q+=12,tt--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-Y[0]*Y[1]+1,J.getDate())),e=Z&&Z>e?Z:e;this._daylightSavingAdjust(new Date(tt,Q,1))>e;)0>--Q&&(Q=11,tt--);for(t.drawMonth=Q,t.drawYear=tt,i=this._get(t,"prevText"),i=B?this.formatDate(i,this._daylightSavingAdjust(new Date(tt,Q-K,1)),this._getFormatConfig(t)):i,n=this._canAdjustMonth(t,-1,tt,Q)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(W?"e":"w")+"'>"+i+"</span></a>":U?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(W?"e":"w")+"'>"+i+"</span></a>",s=this._get(t,"nextText"),s=B?this.formatDate(s,this._daylightSavingAdjust(new Date(tt,Q+K,1)),this._getFormatConfig(t)):s,r=this._canAdjustMonth(t,1,tt,Q)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(W?"w":"e")+"'>"+s+"</span></a>":U?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(W?"w":"e")+"'>"+s+"</span></a>",o=this._get(t,"currentText"),a=this._get(t,"gotoCurrent")&&t.currentDay?G:z,o=B?this.formatDate(o,a,this._getFormatConfig(t)):o,l=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",u=q?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(W?l:"")+(this._isInRange(t,a)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(W?"":l)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,h=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),y=this._getDefaultDate(t),b="",x=0;Y[0]>x;x++){for(C="",this.maxRows=4,k=0;Y[1]>k;k++){if(T=this._daylightSavingAdjust(new Date(tt,Q,t.selectedDay)),D=" ui-corner-all",S="",X){if(S+="<div class='ui-datepicker-group",Y[1]>1)switch(k){case 0:S+=" ui-datepicker-group-first",D=" ui-corner-"+(W?"right":"left");break;case Y[1]-1:S+=" ui-datepicker-group-last",D=" ui-corner-"+(W?"left":"right");break;default:S+=" ui-datepicker-group-middle",D=""}S+="'>"}for(S+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+D+"'>"+(/all|left/.test(D)&&0===x?W?r:n:"")+(/all|right/.test(D)&&0===x?W?n:r:"")+this._generateMonthYearHeader(t,Q,tt,Z,J,x>0||k>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead><tr>",A=h?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)E=(w+c)%7,A+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+d[E]+"'>"+p[E]+"</span></th>";for(S+=A+"</tr></thead><tbody>",I=this._getDaysInMonth(tt,Q),tt===t.selectedYear&&Q===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,I)),O=(this._getFirstDayOfMonth(tt,Q)-c+7)%7,$=Math.ceil((O+I)/7),P=X&&this.maxRows>$?this.maxRows:$,this.maxRows=P,N=this._daylightSavingAdjust(new Date(tt,Q,1-O)),M=0;P>M;M++){for(S+="<tr>",j=h?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(N)+"</td>":"",w=0;7>w;w++)H=m?m.apply(t.input?t.input[0]:null,[N]):[!0,""],L=(R=N.getMonth()!==Q)&&!_||!H[0]||Z&&Z>N||J&&N>J,j+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(R?" ui-datepicker-other-month":"")+(N.getTime()===T.getTime()&&Q===t.selectedMonth&&t._keyEvent||y.getTime()===N.getTime()&&y.getTime()===T.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(R&&!v?"":" "+H[1]+(N.getTime()===G.getTime()?" "+this._currentClass:"")+(N.getTime()===z.getTime()?" ui-datepicker-today":""))+"'"+(R&&!v||!H[2]?"":" title='"+H[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+N.getMonth()+"' data-year='"+N.getFullYear()+"'")+">"+(R&&!v?"&#xa0;":L?"<span class='ui-state-default'>"+N.getDate()+"</span>":"<a class='ui-state-default"+(N.getTime()===z.getTime()?" ui-state-highlight":"")+(N.getTime()===G.getTime()?" ui-state-active":"")+(R?" ui-priority-secondary":"")+"' href='#'>"+N.getDate()+"</a>")+"</td>",N.setDate(N.getDate()+1),N=this._daylightSavingAdjust(N);S+=j+"</tr>"}++Q>11&&(Q=0,tt++),C+=S+="</tbody></table>"+(X?"</div>"+(Y[0]>0&&k===Y[1]-1?"<div class='ui-datepicker-row-break'></div>":""):"")}b+=C}return b+=u,t._keyEvent=!1,b},_generateMonthYearHeader:function(t,e,i,n,s,r,o,a){var l,u,c,h,d,p,f,g,m=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),y="<div class='ui-datepicker-title'>",b="";if(r||!m)b+="<span class='ui-datepicker-month'>"+o[e]+"</span>";else{for(l=n&&n.getFullYear()===i,u=s&&s.getFullYear()===i,b+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!l||c>=n.getMonth())&&(!u||s.getMonth()>=c)&&(b+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+a[c]+"</option>");b+="</select>"}if(_||(y+=b+(!r&&m&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",r||!v)y+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(h=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),f=(p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e})(h[0]),g=Math.max(f,p(h[1]||"")),f=n?Math.max(f,n.getFullYear()):f,g=s?Math.min(g,s.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",y+=t.yearshtml,t.yearshtml=null}return y+=this._get(t,"yearSuffix"),_&&(y+=(!r&&m&&v?"":"&#xa0;")+b),y+"</div>"},_adjustInstDate:function(t,e,i){var n=t.selectedYear+("Y"===i?e:0),s=t.selectedMonth+("M"===i?e:0),r=Math.min(t.selectedDay,this._getDaysInMonth(n,s))+("D"===i?e:0),o=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(n,s,r)));t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),n=this._getMinMaxDate(t,"max"),s=i&&i>e?i:e;return n&&s>n?n:s},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,n){var s=this._getNumberOfMonths(t),r=this._daylightSavingAdjust(new Date(i,n+(0>e?e:s[0]*s[1]),1));return 0>e&&r.setDate(this._getDaysInMonth(r.getFullYear(),r.getMonth())),this._isInRange(t,r)},_isInRange:function(t,e){var i,n,s=this._getMinMaxDate(t,"min"),r=this._getMinMaxDate(t,"max"),o=null,a=null,l=this._get(t,"yearRange");return l&&(i=l.split(":"),n=(new Date).getFullYear(),o=parseInt(i[0],10),a=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=n),i[1].match(/[+\-].*/)&&(a+=n)),(!s||e.getTime()>=s.getTime())&&(!r||e.getTime()<=r.getTime())&&(!o||e.getFullYear()>=o)&&(!a||a>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return{shortYearCutoff:e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,n){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var s=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(n,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),s,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new e,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker,t.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),(t=e.parent.children().eq(e.index)).length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&!1!==this._trigger("beforeClose",e)&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var n=!1,s=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),r=Math.max.apply(null,s);return r>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",r+1),n=!0),n&&!i&&this._trigger("focus",e),n},open:function(){var e=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]);this.uiDialog[0]===e||t.contains(this.uiDialog[0],e)||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),void this.close(e);if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),n=i.filter(":first"),s=i.filter(":last");e.target!==s[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==n[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){s.trigger("focus")}),e.preventDefault()):(this._delay(function(){n.trigger("focus")}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?void this._removeClass(this.uiDialog,"ui-dialog-buttons"):(t.each(i,function(i,n){var s,r;n=t.isFunction(n)?{click:n,text:i}:n,n=t.extend({type:"button"},n),s=n.click,r={icon:n.icon,iconPosition:n.iconPosition,showLabel:n.showLabel,icons:n.icons,text:n.text},delete n.click,delete n.icon,delete n.iconPosition,delete n.showLabel,delete n.icons,"boolean"==typeof n.text&&delete n.text,t("<button></button>",n).button(r).appendTo(e.uiButtonSet).on("click",function(){s.apply(e.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,s){i._addClass(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",n,e(s))},drag:function(t,n){i._trigger("drag",t,e(n))},stop:function(s,r){var o=r.offset.left-i.document.scrollLeft(),a=r.offset.top-i.document.scrollTop();n.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" top"+(a>=0?"+":"")+a,of:i.window},i._removeClass(t(this),"ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",s,e(r))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,n=this.options,s=n.resizable,r=this.uiDialog.css("position"),o="string"==typeof s?s:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:n.maxWidth,maxHeight:n.maxHeight,minWidth:n.minWidth,minHeight:this._minHeight(),handles:o,start:function(n,s){i._addClass(t(this),"ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",n,e(s))},resize:function(t,n){i._trigger("resize",t,e(n))},stop:function(s,r){var o=i.uiDialog.offset(),a=o.left-i.document.scrollLeft(),l=o.top-i.document.scrollTop();n.height=i.uiDialog.height(),n.width=i.uiDialog.width(),n.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" top"+(l>=0?"+":"")+l,of:i.window},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",s,e(r))}}).css("position",r)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,n=!1,s={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(n=!0),t in i.resizableRelatedOptions&&(s[t]=e)}),n&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(e,i){var n,s,r=this.uiDialog;"disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&((n=r.is(":data(ui-draggable)"))&&!i&&r.draggable("destroy"),!n&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&((s=r.is(":data(ui-resizable)"))&&!i&&r.resizable("destroy"),s&&"string"==typeof i&&r.resizable("option","handles",i),s||!1===i||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,n=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),n.minWidth>n.width&&(n.width=n.minWidth),t=this.uiDialog.css({height:"auto",width:n.width}).outerHeight(),e=Math.max(0,n.minHeight-t),i="number"==typeof n.maxHeight?Math.max(0,n.maxHeight-t):"none","auto"===n.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,n.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return!!t(e.target).closest(".ui-dialog").length||!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),!1!==t.uiBackCompat&&t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),t.ui.dialog,t.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=t("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),void this._refreshValue())},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=!1===t,"number"!=typeof t&&(t=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).width(i.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,e===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectmenu",[t.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=t()},_drawButton:function(){var e,i=this,n=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),e=t("<span>").appendTo(this.button),this._addClass(e,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(n).appendTo(this.button),!1!==this.options.width&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){i._rendered||i._refreshMenu()})},_drawMenu:function(){var e=this;this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,i){t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t)},focus:function(t,i){var n=i.item.data("ui-selectmenu-item");null!=e.focusIndex&&n.index!==e.focusIndex&&(e._trigger("focus",t,{item:n}),e.isOpen||e._select(n,t)),e.focusIndex=n.index,e.button.attr("aria-activedescendant",e.menuItems.eq(n.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(e){var i=t("<span>");return this._setText(i,e.label),this._addClass(i,"ui-selectmenu-text"),i},_renderMenu:function(e,i){var n=this,s="";t.each(i,function(i,r){var o;r.optgroup!==s&&(o=t("<li>",{text:r.optgroup}),n._addClass(o,"ui-selectmenu-optgroup","ui-menu-divider"+(r.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),o.appendTo(e),s=r.optgroup),n._renderItemData(e,r)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,i){var n=t("<li>"),s=t("<div>",{title:i.element.attr("title")});return i.disabled&&this._addClass(n,null,"ui-state-disabled"),this._setText(s,i.label),n.append(s).appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,n,s=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),s+=":not(.ui-state-disabled)"),(n="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](s).eq(-1):i[t+"All"](s).eq(0)).length&&this.menuInstance.focus(e,n)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?((t=window.getSelection()).removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+t.ui.escapeSelector(this.ids.button)).length||this.close(e))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection()).rangeCount&&(this.range=t.getRangeAt(0)):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;return!1===t?void this.button.css("width",""):(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),void this.button.outerWidth(t))},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(e){var i=this,n=[];e.each(function(e,s){n.push(i._parseOption(t(s),e))}),this.items=n},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),t.widget("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,n=this.options,s=this.element.find(".ui-slider-handle"),r=[];for(i=n.values&&n.values.length||1,s.length>i&&(s.slice(i).remove(),s=s.slice(0,i)),e=s.length;i>e;e++)r.push("<span tabindex='0'></span>");this.handles=s.add(t(r.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(!0===e.range&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===e.range||"max"===e.range)&&this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,n,s,r,o,a,l,u=this,c=this.options;return!c.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(i),s=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(n-u.values(e));(s>i||s===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(s=i,r=t(this),o=e)}),!1!==this._start(e,o)&&(this._mouseSliding=!0,this._handleIndex=o,this._addClass(r,null,"ui-state-active"),r.trigger("focus"),a=r.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-a.left-r.width()/2,top:e.pageY-a.top-r.height()/2-(parseInt(r.css("borderTopWidth"),10)||0)-(parseInt(r.css("borderBottomWidth"),10)||0)+(parseInt(r.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,n),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,n,s,r;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),(n=i/e)>1&&(n=1),0>n&&(n=0),"vertical"===this.orientation&&(n=1-n),s=this._valueMax()-this._valueMin(),r=this._valueMin()+n*s,this._trimAlignValue(r)},_uiHash:function(t,e,i){var n={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(n.value=void 0!==e?e:this.values(t),n.values=i||this.values()),n},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var n,s=this.value(),r=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),s=this.values(e),2===this.options.values.length&&!0===this.options.range&&(i=0===e?Math.min(n,i):Math.max(n,i)),r[e]=i),i!==s&&(!1!==this._trigger("slide",t,this._uiHash(e,i,r))&&(this._hasMultipleValues()?this.values(e,i):this.value(i)))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),void this._change(null,0)):this._value()},values:function(e,i){var n,s,r;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),void this._change(null,e);if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(n=this.options.values,s=arguments[0],r=0;n.length>r;r+=1)n[r]=this._trimAlignValue(s[r]),this._change(null,r);this._refreshValue()},_setOption:function(e,i){var n,s=0;switch("range"===e&&!0===this.options.range&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(s=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),n=s-1;n>=0;n--)this._change(null,n);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return this._trimAlignValue(t)},_values:function(t){var e,i,n;if(arguments.length)return e=this.options.values[t],this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),n=0;i.length>n;n+=1)i[n]=this._trimAlignValue(i[n]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,n=t-i;return 2*Math.abs(i)>=e&&(n+=i>0?e:-e),parseFloat(n.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step;(t=Math.round((t-e)/i)*i+e)>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,n,s,r,o=this.options.range,a=this.options,l=this,u=!this._animateOff&&a.animate,c={};this._hasMultipleValues()?this.handles.each(function(n){i=(l.values(n)-l._valueMin())/(l._valueMax()-l._valueMin())*100,c["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[u?"animate":"css"](c,a.animate),!0===l.options.range&&("horizontal"===l.orientation?(0===n&&l.range.stop(1,1)[u?"animate":"css"]({left:i+"%"},a.animate),1===n&&l.range[u?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:a.animate})):(0===n&&l.range.stop(1,1)[u?"animate":"css"]({bottom:i+"%"},a.animate),1===n&&l.range[u?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:a.animate}))),e=i}):(n=this.value(),s=this._valueMin(),r=this._valueMax(),i=r!==s?(n-s)/(r-s)*100:0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[u?"animate":"css"](c,a.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[u?"animate":"css"]({width:i+"%"},a.animate),"max"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[u?"animate":"css"]({width:100-i+"%"},a.animate),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[u?"animate":"css"]({height:i+"%"},a.animate),"max"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[u?"animate":"css"]({height:100-i+"%"},a.animate))},_handleEvents:{keydown:function(e){var i,n,s,r=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),!1===this._start(e,r)))return}switch(s=this.options.step,i=n=this._hasMultipleValues()?this.values(r):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(i===this._valueMax())return;n=this._trimAlignValue(i+s);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i===this._valueMin())return;n=this._trimAlignValue(i-s)}this._slide(e,r,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}}),t.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e=this._super(),i=this.element;return t.each(["min","max","step"],function(t,n){var s=i.attr(n);null!=s&&s.length&&(e[n]=s)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(this._stop(),this._refresh(),void(this.previous!==this.element.val()&&this._trigger("change",t)))},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){this.element[0]===t.ui.safeActiveElement(this.document[0])||(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n}))}var n;n=this.element[0]===t.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),!1!==this._start(e)&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?!1!==this._start(e)&&void this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e):void 0},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(e){var i=this.options,n=t.ui.keyCode;switch(e.keyCode){case n.UP:return this._repeat(null,1,e),!0;case n.DOWN:return this._repeat(null,-1,e),!0;case n.PAGE_UP:return this._repeat(null,i.page,e),!0;case n.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_start:function(t){return!(!this.spinning&&!1===this._trigger("start",t))&&(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&!1===this._trigger("spin",e,{value:i})||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,n=this.options;return i=t-(e=null!==n.min?n.min:0),t=e+(i=Math.round(i/n.step)*n.step),t=parseFloat(t.toFixed(this._precision())),null!==n.max&&t>n.max?n.max:null!==n.min&&n.min>t?n.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i,n,s;return"culture"===t||"numberFormat"===t?(i=this._parse(this.element.val()),this.options[t]=e,void this.element.val(this._format(i))):(("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(n=this.buttons.first().find(".ui-icon"),this._removeClass(n,null,this.options.icons.up),this._addClass(n,null,e.up),s=this.buttons.last().find(".ui-icon"),this._removeClass(s,null,this.options.icons.down),this._addClass(s,null,e.down)),void this._super(t,e))},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:r(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null!==t&&t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&(null!==(i=this._parse(t))&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:r(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:r(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:r(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:r(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?void r(this._value).call(this,t):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),!1!==t.uiBackCompat&&t.widget("ui.spinner",t.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}}),t.ui.spinner,t.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/;return function(e){var i,n;i=e.href.replace(t,""),n=location.href.replace(t,"");try{i=decodeURIComponent(i)}catch(t){}try{n=decodeURIComponent(n)}catch(t){}return e.hash.length>1&&i===n}}(),_create:function(){var e=this,i=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=!1!==this.options.active&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,n=location.hash.substring(1);return null===e&&(n&&this.tabs.each(function(i,s){return t(s).attr("aria-controls")===n?(e=i,!1):void 0}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=!!this.tabs.length&&0)),!1!==e&&(-1===(e=this.tabs.index(this.tabs.eq(e)))&&(e=!i&&0)),!i&&!1===e&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(t.ui.safeActiveElement(this.document[0])).closest("li"),n=this.tabs.index(i),s=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:s=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),void this._activate(n);case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),void this._activate(n!==this.options.active&&n);default:return}e.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,s),e.ctrlKey||e.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){for(var n=this.tabs.length-1;-1!==t.inArray((e>n&&(e=0),0>e&&(e=n),e),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){return"active"===t?void this._activate(e):(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||!1!==this.options.active||this._activate(0)),"event"===t&&this._setupEvents(e),void("heightStyle"===t&&this._setupHeightStyle(e)))},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),!1!==e.active&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,n=this.anchors,s=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=t(),this.anchors.each(function(i,n){var s,r,o,a=t(n).uniqueId().attr("id"),l=t(n).closest("li"),u=l.attr("aria-controls");e._isLocal(n)?(o=(s=n.hash).substring(1),r=e.element.find(e._sanitizeSelector(s))):(s="#"+(o=l.attr("aria-controls")||t({}).uniqueId()[0].id),(r=e.element.find(s)).length||(r=e._createPanel(o)).insertAfter(e.panels[i-1]||e.tablist),r.attr("aria-live","polite")),r.length&&(e.panels=e.panels.add(r)),u&&l.data("ui-tabs-aria-controls",u),l.attr({"aria-controls":o,"aria-labelledby":a}),r.attr("aria-labelledby",a)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),i&&(this._off(i.not(this.tabs)),this._off(n.not(this.anchors)),this._off(s.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(e){var i,n,s;for(t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1),s=0;n=this.tabs[s];s++)i=t(n),!0===e||-1!==t.inArray(s,e)?(i.attr("aria-disabled","true"),this._addClass(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._removeClass(i,null,"ui-state-disabled"));this.options.disabled=e,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!0===e)},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,n=this.element.parent();"fill"===e?(i=n.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),n=e.css("position");"absolute"!==n&&"fixed"!==n&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,n=this.active,s=t(e.currentTarget).closest("li"),r=s[0]===n[0],o=r&&i.collapsible,a=o?t():this._getPanelForTab(s),l=n.length?this._getPanelForTab(n):t(),u={oldTab:n,oldPanel:l,newTab:o?t():s,newPanel:a};e.preventDefault(),s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||r&&!i.collapsible||!1===this._trigger("beforeActivate",e,u)||(i.active=!o&&this.tabs.index(s),this.active=r?t():s,this.xhr&&this.xhr.abort(),l.length||a.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),a.length&&this.load(this.tabs.index(s),e),this._toggle(e,u))},_toggle:function(e,i){function n(){r.running=!1,r._trigger("activate",e,i)}function s(){r._addClass(i.newTab.closest("li"),"ui-tabs-active","ui-state-active"),o.length&&r.options.show?r._show(o,r.options.show,n):(o.show(),n())}var r=this,o=i.newPanel,a=i.oldPanel;this.running=!0,a.length&&this.options.hide?this._hide(a,this.options.hide,function(){r._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),s()}):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),a.hide(),s()),a.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),o.length&&a.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,n=this._findActive(e);n[0]!==this.active[0]&&(n.length||(n=this.active),i=n.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return!1===e?t():this.tabs.eq(e)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+t.ui.escapeSelector(e)+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;!1!==i&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,i){return i!==e?i:null})),this._setOptionDisabled(i))},disable:function(e){var i=this.options.disabled;if(!0!==i){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setOptionDisabled(i)}},load:function(e,i){e=this._getIndex(e);var n=this,s=this.tabs.eq(e),r=s.find(".ui-tabs-anchor"),o=this._getPanelForTab(s),a={tab:s,panel:o},l=function(t,e){"abort"===e&&n.panels.stop(!1,!0),n._removeClass(s,"ui-tabs-loading"),o.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr};this._isLocal(r[0])||(this.xhr=t.ajax(this._ajaxSettings(r,i,a)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(s,"ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.done(function(t,e,s){setTimeout(function(){o.html(t),n._trigger("load",i,a),l(s,e)},1)}).fail(function(t,e){setTimeout(function(){l(t,e)},1)})))},_ajaxSettings:function(e,i,n){var s=this;return{url:e.attr("href").replace(/#.*$/,""),beforeSend:function(e,r){return s._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:r},n))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),!1!==t.uiBackCompat&&t.widget("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}}),t.ui.tabs,t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var n=(e.attr("aria-describedby")||"").split(/\s+/);n.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(n.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),n=(e.attr("aria-describedby")||"").split(/\s+/),s=t.inArray(i,n);-1!==s&&n.splice(s,1),e.removeData("ui-tooltip-id"),(n=t.trim(n.join(" ")))?e.attr("aria-describedby",n):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var n=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){n._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,function(i,n){var s=t.Event("blur");s.target=s.currentTarget=n.element[0],e.close(s,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);return e.is("[title]")?e.data("ui-tooltip-title",e.attr("title")).removeAttr("title"):void 0}))},_enable:function(){this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=t([])},open:function(e){var i=this,n=t(e?e.target:this.element).closest(this.options.items);n.length&&!n.data("ui-tooltip-id")&&(n.attr("title")&&n.data("ui-tooltip-title",n.attr("title")),n.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&n.parents().each(function(){var e,n=t(this);n.data("ui-tooltip-open")&&((e=t.Event("blur")).target=e.currentTarget=this,i.close(e,!0)),n.attr("title")&&(n.uniqueId(),i.parents[this.id]={element:this,title:n.attr("title")},n.attr("title",""))}),this._registerCloseHandlers(e,n),this._updateContent(n,e))},_updateContent:function(t,e){var i,n=this.options.content,s=this,r=e?e.type:null;return"string"==typeof n||n.nodeType||n.jquery?this._open(e,t,n):void((i=n.call(t[0],function(i){s._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=r),this._open(e,t,i))})}))&&this._open(e,t,i))},_open:function(e,i,n){function s(t){u.of=t,o.is(":hidden")||o.position(u)}var r,o,a,l,u=t.extend({},this.options.position);if(n){if(r=this._find(i))return void r.tooltip.find(".ui-tooltip-content").html(n);i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),r=this._tooltip(i),o=r.tooltip,this._addDescribedBy(i,o.attr("id")),o.find(".ui-tooltip-content").html(n),this.liveRegion.children().hide(),(l=t("<div>").html(o.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),l.removeAttr("id").find("[id]").removeAttr("id"),l.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:s}),s(e)):o.position(t.extend({of:i},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(a=this.delayedShow=setInterval(function(){o.is(":visible")&&(s(u.of),clearInterval(a))},t.fx.interval)),this._trigger("open",e,{tooltip:o})}},_registerCloseHandlers:function(e,i){var n={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var n=t.Event(e);n.currentTarget=i[0],this.close(n,!0)}}};i[0]!==this.element[0]&&(n.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(n.mouseleave="close"),e&&"focusin"!==e.type||(n.focusout="close"),this._on(!0,i,n)},close:function(e){var i,n=this,s=t(e?e.currentTarget:this.element),r=this._find(s);return r?(i=r.tooltip,void(r.closing||(clearInterval(this.delayedShow),s.data("ui-tooltip-title")&&!s.attr("title")&&s.attr("title",s.data("ui-tooltip-title")),this._removeDescribedBy(s),r.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){n._removeTooltip(t(this))}),s.removeData("ui-tooltip-open"),this._off(s,"mouseleave focusout keyup"),s[0]!==this.element[0]&&this._off(s,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete n.parents[e]}),r.closing=!0,this._trigger("close",e,{tooltip:i}),r.hiding||(r.closing=!1)))):void s.removeData("ui-tooltip-open")},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),n=t("<div>").appendTo(i),s=i.uniqueId().attr("id");return this._addClass(n,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[s]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,function(i,n){var s=t.Event("blur"),r=n.element;s.target=s.currentTarget=r[0],e.close(s,!0),t("#"+i).remove(),r.data("ui-tooltip-title")&&(r.attr("title")||r.attr("title",r.data("ui-tooltip-title")),r.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),!1!==t.uiBackCompat&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip;var d="ui-effects-",p="ui-effects-style",f="ui-effects-animated",g=t;t.effects={effect:{}},function(t,e){function i(t,e,i){var n=c[e.type]||{};return null==t?i||!e.def?null:e.def:(t=n.floor?~~t:parseFloat(t),isNaN(t)?e.def:n.mod?(t+n.mod)%n.mod:0>t?0:t>n.max?n.max:t)}function n(i){var n=l(),s=n._rgba=[];return i=i.toLowerCase(),p(a,function(t,r){var o,a=r.re.exec(i),l=a&&r.parse(a),c=r.space||"rgba";return l?(o=n[c](l),n[u[c].cache]=o[u[c].cache],s=n._rgba=o._rgba,!1):e}),s.length?("0,0,0,0"===s.join()&&t.extend(s,r.transparent),n):r[i]}function s(t,e,i){return 1>6*(i=(i+1)%1)?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var r,o=/^([\-+])=\s*(\d+\.?\d*)/,a=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,n,s){return new t.Color.fn.parse(e,i,n,s)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},h=l.support={},d=t("<p>")[0],p=t.each;d.style.cssText="background-color:rgba(1,1,1,.5)",h.rgba=d.style.backgroundColor.indexOf("rgba")>-1,p(u,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(s,o,a,c){if(s===e)return this._rgba=[null,null,null,null],this;(s.jquery||s.nodeType)&&(s=t(s).css(o),o=e);var h=this,d=t.type(s),f=this._rgba=[];return o!==e&&(s=[s,o,a,c],d="array"),"string"===d?this.parse(n(s)||r._default):"array"===d?(p(u.rgba.props,function(t,e){f[e.idx]=i(s[e.idx],e)}),this):"object"===d?(p(u,s instanceof l?function(t,e){s[e.cache]&&(h[e.cache]=s[e.cache].slice())}:function(e,n){var r=n.cache;p(n.props,function(t,e){if(!h[r]&&n.to){if("alpha"===t||null==s[t])return;h[r]=n.to(h._rgba)}h[r][e.idx]=i(s[t],e,!0)}),h[r]&&0>t.inArray(null,h[r].slice(0,3))&&(h[r][3]=1,n.from&&(h._rgba=n.from(h[r])))}),this):e},is:function(t){var i=l(t),n=!0,s=this;return p(u,function(t,r){var o,a=i[r.cache];return a&&(o=s[r.cache]||r.to&&r.to(s._rgba)||[],p(r.props,function(t,i){return null!=a[i.idx]?n=a[i.idx]===o[i.idx]:e})),n}),n},_space:function(){var t=[],e=this;return p(u,function(i,n){e[n.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var n=l(t),s=n._space(),r=u[s],o=0===this.alpha()?l("transparent"):this,a=o[r.cache]||r.to(o._rgba),h=a.slice();return n=n[r.cache],p(r.props,function(t,s){var r=s.idx,o=a[r],l=n[r],u=c[s.type]||{};null!==l&&(null===o?h[r]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[r]=i((l-o)*e+o,s)))}),this[s](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),n=i.pop(),s=l(e)._rgba;return l(t.map(i,function(t,e){return(1-n)*s[e]+n*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),n=i.pop();return e&&i.push(~~(255*n)),"#"+t.map(i,function(t){return 1===(t=(t||0).toString(16)).length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,n=t[0]/255,s=t[1]/255,r=t[2]/255,o=t[3],a=Math.max(n,s,r),l=Math.min(n,s,r),u=a-l,c=a+l,h=.5*c;return e=l===a?0:n===a?60*(s-r)/u+360:s===a?60*(r-n)/u+120:60*(n-s)/u+240,i=0===u?0:.5>=h?u/c:u/(2-c),[Math.round(e)%360,i,h,null==o?1:o]},u.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],n=t[2],r=t[3],o=.5>=n?n*(1+i):n+i-n*i,a=2*n-o;return[Math.round(255*s(a,o,e+1/3)),Math.round(255*s(a,o,e)),Math.round(255*s(a,o,e-1/3)),r]},p(u,function(n,s){var r=s.props,a=s.cache,u=s.to,c=s.from;l.fn[n]=function(n){if(u&&!this[a]&&(this[a]=u(this._rgba)),n===e)return this[a].slice();var s,o=t.type(n),h="array"===o||"object"===o?n:arguments,d=this[a].slice();return p(r,function(t,e){var n=h["object"===o?t:e.idx];null==n&&(n=d[e.idx]),d[e.idx]=i(n,e)}),c?((s=l(c(d)))[a]=d,s):l(d)},p(r,function(e,i){l.fn[e]||(l.fn[e]=function(s){var r,a=t.type(s),l="alpha"===e?this._hsla?"hsla":"rgba":n,u=this[l](),c=u[i.idx];return"undefined"===a?c:("function"===a&&(s=s.call(this,c),a=t.type(s)),null==s&&i.empty?this:("string"===a&&((r=o.exec(s))&&(s=c+parseFloat(r[2])*("+"===r[1]?1:-1))),u[i.idx]=s,this[l](u)))})})}),l.hook=function(e){var i=e.split(" ");p(i,function(e,i){t.cssHooks[i]={set:function(e,s){var r,o,a="";if("transparent"!==s&&("string"!==t.type(s)||(r=n(s)))){if(s=l(r||s),!h.rgba&&1!==s._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===a||"transparent"===a)&&o&&o.style;)try{a=t.css(o,"backgroundColor"),o=o.parentNode}catch(t){}s=s.blend(a&&"transparent"!==a?a:"_default")}s=s.toRgbaString()}try{e.style[i]=s}catch(t){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),t.cssHooks.borderColor={expand:function(t){var e={};return p(["Top","Right","Bottom","Left"],function(i,n){e["border"+n+"Color"]=t}),e}},r=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(g),function(){function e(e){var i,n,s=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,r={};if(s&&s.length&&s[0]&&s[s[0]])for(n=s.length;n--;)"string"==typeof s[i=s[n]]&&(r[t.camelCase(i)]=s[i]);else for(i in s)"string"==typeof s[i]&&(r[i]=s[i]);return r}function i(e,i){var n,r,o={};for(n in i)r=i[n],e[n]!==r&&(s[n]||(t.fx.step[n]||!isNaN(parseFloat(r)))&&(o[n]=r));return o}var n=["add","remove","toggle"],s={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(g.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(s,r,o,a){var l=t.speed(r,o,a);return this.queue(function(){var r,o=t(this),a=o.attr("class")||"",u=l.children?o.find("*").addBack():o;u=u.map(function(){return{el:t(this),start:e(this)}}),(r=function(){t.each(n,function(t,e){s[e]&&o[e+"Class"](s[e])})})(),u=u.map(function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",a),u=u.map(function(){var e=this,i=t.Deferred(),n=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,n),i.promise()}),t.when.apply(t,u.get()).done(function(){r(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,n,s,r){return n?t.effects.animateClass.call(this,{add:i},n,s,r):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,n,s,r){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},n,s,r):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,n,s,r,o){return"boolean"==typeof n||void 0===n?s?t.effects.animateClass.call(this,n?{add:i}:{remove:i},s,r,o):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},n,s,r)}}(t.fn.toggleClass),switchClass:function(e,i,n,s,r){return t.effects.animateClass.call(this,{add:i,remove:e},n,s,r)}})}(),function(){function e(e,i,n,s){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(s=i,n=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(s=n,n=i,i={}),t.isFunction(n)&&(s=n,n=null),i&&t.extend(e,i),n=n||i.duration,e.duration=t.fx.off?0:"number"==typeof n?n:n in t.fx.speeds?t.fx.speeds[n]:t.fx.speeds._default,e.complete=s||i.complete,e}function i(e){return!(e&&"number"!=typeof e&&!t.fx.speeds[e])||("string"==typeof e&&!t.effects.effect[e]||(!!t.isFunction(e)||"object"==typeof e&&!e.effect))}function n(t,e){var i=e.outerWidth(),n=e.outerHeight(),s=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t)||["",0,i,n,0];return{top:parseFloat(s[1])||0,right:"auto"===s[2]?i:parseFloat(s[2]),bottom:"auto"===s[3]?n:parseFloat(s[3]),left:parseFloat(s[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=function(e){return function(i){return!!t(i).data(f)||e(i)}}(t.expr.filters.animated)),!1!==t.uiBackCompat&&t.extend(t.effects,{save:function(t,e){for(var i=0,n=e.length;n>i;i++)null!==e[i]&&t.data(d+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,n=0,s=e.length;s>n;n++)null!==e[n]&&(i=t.data(d+e[n]),t.css(e[n],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),float:e.css("float")},n=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),s={width:e.width(),height:e.height()},r=document.activeElement;try{r.id}catch(t){r=document.body}return e.wrap(n),(e[0]===r||t.contains(e[0],r))&&t(r).trigger("focus"),n=e.parent(),"static"===e.css("position")?(n.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,n){i[n]=e.css(n),isNaN(parseInt(i[n],10))&&(i[n]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(s),n.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.1",define:function(e,i,n){return n||(n=i,i="effect"),t.effects.effect[e]=n,t.effects.effect[e].mode=i,n},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var n="horizontal"!==i?(e||100)/100:1,s="vertical"!==i?(e||100)/100:1;return{height:t.height()*s,width:t.width()*n,outerHeight:t.outerHeight()*s,outerWidth:t.outerWidth()*n}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var n=t.queue();e>1&&n.splice.apply(n,[1,0].concat(n.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(p,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(p)||"",t.removeData(p)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,n;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=t[1]/e.width}return{x:n,y:i}},createPlaceholder:function(e){var i,n=e.css("position"),s=e.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(n)&&(n="absolute",i=t("<"+e[0].nodeName+">").insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),float:e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(d+"placeholder",i)),e.css({position:n,left:s.left,top:s.top}),i},removePlaceholder:function(t){var e=d+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,n,s){return s=s||{},t.each(i,function(t,i){var r=e.cssUnit(i);r[0]>0&&(s[i]=r[0]*n+r[1])}),s}}),t.fn.extend({effect:function(){function i(e){function i(){t.isFunction(l)&&l.call(o[0]),t.isFunction(e)&&e()}var o=t(this);n.mode=c.shift(),!1===t.uiBackCompat||r?"none"===n.mode?(o[u](),i()):s.call(o[0],n,function(){o.removeData(f),t.effects.cleanUp(o),"hide"===n.mode&&o.hide(),i()}):(o.is(":hidden")?"hide"===u:"show"===u)?(o[u](),i()):s.call(o[0],n,i)}var n=e.apply(this,arguments),s=t.effects.effect[n.effect],r=s.mode,o=n.queue,a=o||"fx",l=n.complete,u=n.mode,c=[],h=function(e){var i=t(this),n=t.effects.mode(i,u)||r;i.data(f,!0),c.push(n),r&&("show"===n||n===r&&"hide"===n)&&i.show(),r&&"none"===n||t.effects.saveStyle(i),t.isFunction(e)&&e()};return t.fx.off||!s?u?this[u](n.duration,l):this.each(function(){l&&l.call(this)}):!1===o?this.each(h).each(i):this.queue(a,h).queue(a,i)},show:function(t){return function(n){if(i(n))return t.apply(this,arguments);var s=e.apply(this,arguments);return s.mode="show",this.effect.call(this,s)}}(t.fn.show),hide:function(t){return function(n){if(i(n))return t.apply(this,arguments);var s=e.apply(this,arguments);return s.mode="hide",this.effect.call(this,s)}}(t.fn.hide),toggle:function(t){return function(n){if(i(n)||"boolean"==typeof n)return t.apply(this,arguments);var s=e.apply(this,arguments);return s.mode="toggle",this.effect.call(this,s)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),n=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(n=[parseFloat(i),e])}),n},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):n(this.css("clip"),this)},transfer:function(e,i){var n=t(this),s=t(e.to),r="fixed"===s.css("position"),o=t("body"),a=r?o.scrollTop():0,l=r?o.scrollLeft():0,u=s.offset(),c={top:u.top-a,left:u.left-l,height:s.innerHeight(),width:s.innerWidth()},h=n.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:h.top-a,left:h.left-l,height:n.innerHeight(),width:n.innerWidth(),position:r?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&&i()})}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=n(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}();t.effects;t.effects.define("blind","hide",function(e,i){var n={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},s=t(this),r=e.direction||"up",o=s.cssClip(),a={clip:t.extend({},o)},l=t.effects.createPlaceholder(s);a.clip[n[r][0]]=a.clip[n[r][1]],"show"===e.mode&&(s.cssClip(a.clip),l&&l.css(t.effects.clipToBox(a)),a.clip=o),l&&l.animate(t.effects.clipToBox(a),e.duration,e.easing),s.animate(a,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("bounce",function(e,i){var n,s,r,o=t(this),a=e.mode,l="hide"===a,u="show"===a,c=e.direction||"up",h=e.distance,d=e.times||5,p=2*d+(u||l?1:0),f=e.duration/p,g=e.easing,m="up"===c||"down"===c?"top":"left",v="up"===c||"left"===c,_=0,y=o.queue().length;for(t.effects.createPlaceholder(o),r=o.css(m),h||(h=o["top"===m?"outerHeight":"outerWidth"]()/3),u&&((s={opacity:1})[m]=r,o.css("opacity",0).css(m,v?2*-h:2*h).animate(s,f,g)),l&&(h/=Math.pow(2,d-1)),(s={})[m]=r;d>_;_++)(n={})[m]=(v?"-=":"+=")+h,o.animate(n,f,g).animate(s,f,g),h=l?2*h:h/2;l&&((n={opacity:0})[m]=(v?"-=":"+=")+h,o.animate(n,f,g)),o.queue(i),t.effects.unshift(o,y,p+1)}),t.effects.define("clip","hide",function(e,i){var n,s={},r=t(this),o=e.direction||"vertical",a="both"===o,l=a||"horizontal"===o,u=a||"vertical"===o;n=r.cssClip(),s.clip={top:u?(n.bottom-n.top)/2:n.top,right:l?(n.right-n.left)/2:n.right,bottom:u?(n.bottom-n.top)/2:n.bottom,left:l?(n.right-n.left)/2:n.left},t.effects.createPlaceholder(r),"show"===e.mode&&(r.cssClip(s.clip),s.clip=n),r.animate(s,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("drop","hide",function(e,i){var n,s=t(this),r="show"===e.mode,o=e.direction||"left",a="up"===o||"down"===o?"top":"left",l="up"===o||"left"===o?"-=":"+=",u="+="===l?"-=":"+=",c={opacity:0};t.effects.createPlaceholder(s),n=e.distance||s["top"===a?"outerHeight":"outerWidth"](!0)/2,c[a]=l+n,r&&(s.css(c),c[a]=u+n,c.opacity=1),s.animate(c,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("explode","hide",function(e,i){function n(){v.push(this),v.length===c*h&&(d.css({visibility:"visible"}),t(v).remove(),i())}var s,r,o,a,l,u,c=e.pieces?Math.round(Math.sqrt(e.pieces)):3,h=c,d=t(this),p="show"===e.mode,f=d.show().css("visibility","hidden").offset(),g=Math.ceil(d.outerWidth()/h),m=Math.ceil(d.outerHeight()/c),v=[];for(s=0;c>s;s++)for(a=f.top+s*m,u=s-(c-1)/2,r=0;h>r;r++)o=f.left+r*g,l=r-(h-1)/2,d.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-r*g,top:-s*m}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:g,height:m,left:o+(p?l*g:0),top:a+(p?u*m:0),opacity:p?0:1}).animate({left:o+(p?0:l*g),top:a+(p?0:u*m),opacity:p?1:0},e.duration||500,e.easing,n)}),t.effects.define("fade","toggle",function(e,i){var n="show"===e.mode;t(this).css("opacity",n?0:1).animate({opacity:n?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("fold","hide",function(e,i){var n=t(this),s=e.mode,r="show"===s,o="hide"===s,a=e.size||15,l=/([0-9]+)%/.exec(a),u=!!e.horizFirst?["right","bottom"]:["bottom","right"],c=e.duration/2,h=t.effects.createPlaceholder(n),d=n.cssClip(),p={clip:t.extend({},d)},f={clip:t.extend({},d)},g=[d[u[0]],d[u[1]]],m=n.queue().length;l&&(a=parseInt(l[1],10)/100*g[o?0:1]),p.clip[u[0]]=a,f.clip[u[0]]=a,f.clip[u[1]]=0,r&&(n.cssClip(f.clip),h&&h.css(t.effects.clipToBox(f)),f.clip=d),n.queue(function(i){h&&h.animate(t.effects.clipToBox(p),c,e.easing).animate(t.effects.clipToBox(f),c,e.easing),i()}).animate(p,c,e.easing).animate(f,c,e.easing).queue(i),t.effects.unshift(n,m,4)}),t.effects.define("highlight","show",function(e,i){var n=t(this),s={backgroundColor:n.css("backgroundColor")};"hide"===e.mode&&(s.opacity=0),t.effects.saveStyle(n),n.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(s,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("size",function(e,i){var n,s,r,o=t(this),a=["fontSize"],l=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],u=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],c=e.mode,h="effect"!==c,d=e.scale||"both",p=e.origin||["middle","center"],f=o.css("position"),g=o.position(),m=t.effects.scaledDimensions(o),v=e.from||m,_=e.to||t.effects.scaledDimensions(o,0);t.effects.createPlaceholder(o),"show"===c&&(r=v,v=_,_=r),s={from:{y:v.height/m.height,x:v.width/m.width},to:{y:_.height/m.height,x:_.width/m.width}},("box"===d||"both"===d)&&(s.from.y!==s.to.y&&(v=t.effects.setTransition(o,l,s.from.y,v),_=t.effects.setTransition(o,l,s.to.y,_)),s.from.x!==s.to.x&&(v=t.effects.setTransition(o,u,s.from.x,v),_=t.effects.setTransition(o,u,s.to.x,_))),("content"===d||"both"===d)&&s.from.y!==s.to.y&&(v=t.effects.setTransition(o,a,s.from.y,v),_=t.effects.setTransition(o,a,s.to.y,_)),p&&(n=t.effects.getBaseline(p,m),v.top=(m.outerHeight-v.outerHeight)*n.y+g.top,v.left=(m.outerWidth-v.outerWidth)*n.x+g.left,_.top=(m.outerHeight-_.outerHeight)*n.y+g.top,_.left=(m.outerWidth-_.outerWidth)*n.x+g.left),o.css(v),("content"===d||"both"===d)&&(l=l.concat(["marginTop","marginBottom"]).concat(a),u=u.concat(["marginLeft","marginRight"]),o.find("*[width]").each(function(){var i=t(this),n=t.effects.scaledDimensions(i),r={height:n.height*s.from.y,width:n.width*s.from.x,outerHeight:n.outerHeight*s.from.y,outerWidth:n.outerWidth*s.from.x},o={height:n.height*s.to.y,width:n.width*s.to.x,outerHeight:n.height*s.to.y,outerWidth:n.width*s.to.x};s.from.y!==s.to.y&&(r=t.effects.setTransition(i,l,s.from.y,r),o=t.effects.setTransition(i,l,s.to.y,o)),s.from.x!==s.to.x&&(r=t.effects.setTransition(i,u,s.from.x,r),o=t.effects.setTransition(i,u,s.to.x,o)),h&&t.effects.saveStyle(i),i.css(r),i.animate(o,e.duration,e.easing,function(){h&&t.effects.restoreStyle(i)})})),o.animate(_,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=o.offset();0===_.opacity&&o.css("opacity",v.opacity),h||(o.css("position","static"===f?"relative":f).offset(e),t.effects.saveStyle(o)),i()}})}),t.effects.define("scale",function(e,i){var n=t(this),s=e.mode,r=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"effect"!==s?0:100),o=t.extend(!0,{from:t.effects.scaledDimensions(n),to:t.effects.scaledDimensions(n,r,e.direction||"both"),origin:e.origin||["middle","center"]},e);e.fade&&(o.from.opacity=1,o.to.opacity=0),t.effects.effect.size.call(this,o,i)}),t.effects.define("puff","hide",function(e,i){var n=t.extend(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.scale.call(this,n,i)}),t.effects.define("pulsate","show",function(e,i){var n=t(this),s=e.mode,r="show"===s,o=r||"hide"===s,a=2*(e.times||5)+(o?1:0),l=e.duration/a,u=0,c=1,h=n.queue().length;for((r||!n.is(":visible"))&&(n.css("opacity",0).show(),u=1);a>c;c++)n.animate({opacity:u},l,e.easing),u=1-u;n.animate({opacity:u},l,e.easing),n.queue(i),t.effects.unshift(n,h,a+1)}),t.effects.define("shake",function(e,i){var n=1,s=t(this),r=e.direction||"left",o=e.distance||20,a=e.times||3,l=2*a+1,u=Math.round(e.duration/l),c="up"===r||"down"===r?"top":"left",h="up"===r||"left"===r,d={},p={},f={},g=s.queue().length;for(t.effects.createPlaceholder(s),d[c]=(h?"-=":"+=")+o,p[c]=(h?"+=":"-=")+2*o,f[c]=(h?"-=":"+=")+2*o,s.animate(d,u,e.easing);a>n;n++)s.animate(p,u,e.easing).animate(f,u,e.easing);s.animate(p,u,e.easing).animate(d,u/2,e.easing).queue(i),t.effects.unshift(s,g,l+1)}),t.effects.define("slide","show",function(e,i){var n,s,r=t(this),o={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},a=e.mode,l=e.direction||"left",u="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l,h=e.distance||r["top"===u?"outerHeight":"outerWidth"](!0),d={};t.effects.createPlaceholder(r),n=r.cssClip(),s=r.position()[u],d[u]=(c?-1:1)*h+s,d.clip=r.cssClip(),d.clip[o[l][1]]=d.clip[o[l][0]],"show"===a&&(r.cssClip(d.clip),r.css(u,d[u]),d.clip=n,d[u]=s),r.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),!1!==t.uiBackCompat&&t.effects.define("transfer",function(e,i){t(this).transfer(e,i)})},s=[i("7t+N")],void 0===(r="function"==typeof(n=o)?n.apply(e,s):n)||(t.exports=r)},c3eT:function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("select",{staticStyle:{width:"100%"}},[this._t("default")],2)},staticRenderFns:[]}},d8IG:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"tr{padding-left:30px}",""])},eOaq:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["fieldsetId","modelId","previousInput"],data:function(){return{identifiers:{fieldset:null,model:null},elements:{fieldset:null,field:null},fields:null,show:!1,error:!1}},ready:function(){this.init()},mounted:function(){this.init()},methods:{init:function(){this.defaultValues=JSON.parse(this.previousInput),this.identifiers.fieldset=this.fieldsetId,this.identifiers.model=this.modelId,this.elements.fieldset=$(".js-fieldset-field"),this.elements.field=document.querySelector(".js-default-values-toggler"),this.elements.fieldset&&this.elements.field&&(this.addListeners(),this.getFields())},addListeners:function(){var t=this;this.elements.field.addEventListener("change",function(e){return t.updateShow()}),this.elements.fieldset.on("change",function(e){return t.updateFields()})},getFields:function(){var t=this;if(!this.identifiers.fieldset)return this.fields=[];this.$http.get(this.getUrl()).then(function(t){return t.json()}).then(function(e){return t.checkResponseForError(e)}).then(function(e){return t.fields=e.rows}).then(function(){return t.determineIfShouldShow()})},getValue:function(t){return t.default_value?t.default_value:null!=this.defaultValues?this.defaultValues[t.id.toString()]:""},getUrl:function(){return this.identifiers.model?route("api.fieldsets.fields-with-default-value",{fieldset:this.identifiers.fieldset,model:this.identifiers.model}):route("api.fieldsets.fields",{fieldset:this.identifiers.fieldset})},checkResponseForError:function(t){return this.error="error"==t.status,t},updateShow:function(){this.identifiers.fieldset&&this.elements.field&&(this.show=this.elements.field.checked)},determineIfShouldShow:function(){this.elements.field.checked=this.elements.field.checked||this.show||this.fields.reduce(function(t,e){return t||e.default_value},!1),this.updateShow()},updateFields:function(){this.identifiers.fieldset=!!this.elements.fieldset[0].value&&parseInt(this.elements.fieldset[0].value),this.getFields()}}}},f5J3:function(t,e){},hITH:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},hSCs:function(t,e){"format global";"deps jquery";"exports $";if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),function(t){"use strict";t.fn.emulateTransitionEnd=function(e){var i=!1,n=this;t(this).one("bsTransitionEnd",function(){i=!0});return setTimeout(function(){i||t(n).trigger(t.support.transition.end)},e),this},t(function(){t.support.transition=function(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(t){"use strict";var e='[data-dismiss="alert"]',i=function(i){t(i).on("click",e,this.close)};i.VERSION="3.3.4",i.TRANSITION_DURATION=150,i.prototype.close=function(e){var n=t(this),s=n.attr("data-target");s||(s=(s=n.attr("href"))&&s.replace(/.*(?=#[^\s]*$)/,""));var r=t(s);function o(){r.detach().trigger("closed.bs.alert").remove()}e&&e.preventDefault(),r.length||(r=n.closest(".alert")),r.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(r.removeClass("in"),t.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o())};var n=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var n=t(this),s=n.data("bs.alert");s||n.data("bs.alert",s=new i(this)),"string"==typeof e&&s[e].call(n)})},t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",e,i.prototype.close)}(jQuery),function(t){"use strict";var e=function(i,n){this.$element=t(i),this.options=t.extend({},e.DEFAULTS,n),this.isLoading=!1};function i(i){return this.each(function(){var n=t(this),s=n.data("bs.button"),r="object"==typeof i&&i;s||n.data("bs.button",s=new e(this,r)),"toggle"==i?s.toggle():i&&s.setState(i)})}e.VERSION="3.3.4",e.DEFAULTS={loadingText:"loading..."},e.prototype.setState=function(e){var i="disabled",n=this.$element,s=n.is("input")?"val":"html",r=n.data();e+="Text",null==r.resetText&&n.data("resetText",n[s]()),setTimeout(t.proxy(function(){n[s](null==r[e]?this.options[e]:r[e]),"loadingText"==e?(this.isLoading=!0,n.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,n.removeClass(i).removeAttr(i))},this),0)},e.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));t&&this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=i,t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(e){var n=t(e.target);n.hasClass("btn")||(n=n.closest(".btn")),i.call(n,"toggle"),e.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),function(t){"use strict";var e=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};function i(i){return this.each(function(){var n=t(this),s=n.data("bs.carousel"),r=t.extend({},e.DEFAULTS,n.data(),"object"==typeof i&&i),o="string"==typeof i?i:r.slide;s||n.data("bs.carousel",s=new e(this,r)),"number"==typeof i?s.to(i):o?s[o]():r.interval&&s.pause().cycle()})}e.VERSION="3.3.4",e.TRANSITION_DURATION=600,e.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},e.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},e.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},e.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},e.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var n=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(n)},e.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},e.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},e.prototype.next=function(){if(!this.sliding)return this.slide("next")},e.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},e.prototype.slide=function(i,n){var s=this.$element.find(".item.active"),r=n||this.getItemForDirection(i,s),o=this.interval,a="next"==i?"left":"right",l=this;if(r.hasClass("active"))return this.sliding=!1;var u=r[0],c=t.Event("slide.bs.carousel",{relatedTarget:u,direction:a});if(this.$element.trigger(c),!c.isDefaultPrevented()){if(this.sliding=!0,o&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=t(this.$indicators.children()[this.getItemIndex(r)]);h&&h.addClass("active")}var d=t.Event("slid.bs.carousel",{relatedTarget:u,direction:a});return t.support.transition&&this.$element.hasClass("slide")?(r.addClass(i),r[0].offsetWidth,s.addClass(a),r.addClass(a),s.one("bsTransitionEnd",function(){r.removeClass([i,a].join(" ")).addClass("active"),s.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(d)},0)}).emulateTransitionEnd(e.TRANSITION_DURATION)):(s.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger(d)),o&&this.cycle(),this}};var n=t.fn.carousel;t.fn.carousel=i,t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this};var s=function(e){var n,s=t(this),r=t(s.attr("data-target")||(n=s.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""));if(r.hasClass("carousel")){var o=t.extend({},r.data(),s.data()),a=s.attr("data-slide-to");a&&(o.interval=!1),i.call(r,o),a&&r.data("bs.carousel").to(a),e.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",s).on("click.bs.carousel.data-api","[data-slide-to]",s),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),function(t){"use strict";var e=function(i,n){this.$element=t(i),this.options=t.extend({},e.DEFAULTS,n),this.$trigger=t('[data-toggle="collapse"][href="#'+i.id+'"],[data-toggle="collapse"][data-target="#'+i.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function i(e){var i,n=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(n)}function n(i){return this.each(function(){var n=t(this),s=n.data("bs.collapse"),r=t.extend({},e.DEFAULTS,n.data(),"object"==typeof i&&i);!s&&r.toggle&&/show|hide/.test(i)&&(r.toggle=!1),s||n.data("bs.collapse",s=new e(this,r)),"string"==typeof i&&s[i]()})}e.VERSION="3.3.4",e.TRANSITION_DURATION=350,e.DEFAULTS={toggle:!0},e.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},e.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var i,s=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(s&&s.length&&(i=s.data("bs.collapse"))&&i.transitioning)){var r=t.Event("show.bs.collapse");if(this.$element.trigger(r),!r.isDefaultPrevented()){s&&s.length&&(n.call(s,"hide"),i||s.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return a.call(this);var l=t.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(e.TRANSITION_DURATION)[o](this.$element[0][l])}}}},e.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var i=t.Event("hide.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var s=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!t.support.transition)return s.call(this);this.$element[n](0).one("bsTransitionEnd",t.proxy(s,this)).emulateTransitionEnd(e.TRANSITION_DURATION)}}},e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},e.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(e,n){var s=t(n);this.addAriaAndCollapsedClass(i(s),s)},this)).end()},e.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var s=t.fn.collapse;t.fn.collapse=n,t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=s,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(e){var s=t(this);s.attr("data-target")||e.preventDefault();var r=i(s),o=r.data("bs.collapse")?"toggle":s.data();n.call(r,o)})}(jQuery),function(t){"use strict";var e=".dropdown-backdrop",i='[data-toggle="dropdown"]',n=function(e){t(e).on("click.bs.dropdown",this.toggle)};function s(n){n&&3===n.which||(t(e).remove(),t(i).each(function(){var e=t(this),i=r(e),s={relatedTarget:this};i.hasClass("open")&&(i.trigger(n=t.Event("hide.bs.dropdown",s)),n.isDefaultPrevented()||(e.attr("aria-expanded","false"),i.removeClass("open").trigger("hidden.bs.dropdown",s)))}))}function r(e){var i=e.attr("data-target");i||(i=(i=e.attr("href"))&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var n=i&&t(i);return n&&n.length?n:e.parent()}n.VERSION="3.3.4",n.prototype.toggle=function(e){var i=t(this);if(!i.is(".disabled, :disabled")){var n=r(i),o=n.hasClass("open");if(s(),!o){"ontouchstart"in document.documentElement&&!n.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",s);var a={relatedTarget:this};if(n.trigger(e=t.Event("show.bs.dropdown",a)),e.isDefaultPrevented())return;i.trigger("focus").attr("aria-expanded","true"),n.toggleClass("open").trigger("shown.bs.dropdown",a)}return!1}},n.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var n=t(this);if(e.preventDefault(),e.stopPropagation(),!n.is(".disabled, :disabled")){var s=r(n),o=s.hasClass("open");if(!o&&27!=e.which||o&&27==e.which)return 27==e.which&&s.find(i).trigger("focus"),n.trigger("click");var a=" li:not(.disabled):visible a",l=s.find('[role="menu"]'+a+', [role="listbox"]'+a);if(l.length){var u=l.index(e.target);38==e.which&&u>0&&u--,40==e.which&&u<l.length-1&&u++,~u||(u=0),l.eq(u).trigger("focus")}}}};var o=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var i=t(this),s=i.data("bs.dropdown");s||i.data("bs.dropdown",s=new n(this)),"string"==typeof e&&s[e].call(i)})},t.fn.dropdown.Constructor=n,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=o,this},t(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",i,n.prototype.toggle).on("keydown.bs.dropdown.data-api",i,n.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',n.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',n.prototype.keydown)}(jQuery),function(t){"use strict";var e=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function i(i,n){return this.each(function(){var s=t(this),r=s.data("bs.modal"),o=t.extend({},e.DEFAULTS,s.data(),"object"==typeof i&&i);r||s.data("bs.modal",r=new e(this,o)),"string"==typeof i?r[i](n):o.show&&r.show(n)})}e.VERSION="3.3.4",e.TRANSITION_DURATION=300,e.BACKDROP_TRANSITION_DURATION=150,e.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},e.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},e.prototype.show=function(i){var n=this,s=t.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(s),this.isShown||s.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){n.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(n.$element)&&(n.ignoreBackdropClick=!0)})}),this.backdrop(function(){var s=t.support.transition&&n.$element.hasClass("fade");n.$element.parent().length||n.$element.appendTo(n.$body),n.$element.show().scrollTop(0),n.adjustDialog(),s&&n.$element[0].offsetWidth,n.$element.addClass("in").attr("aria-hidden",!1),n.enforceFocus();var r=t.Event("shown.bs.modal",{relatedTarget:i});s?n.$dialog.one("bsTransitionEnd",function(){n.$element.trigger("focus").trigger(r)}).emulateTransitionEnd(e.TRANSITION_DURATION):n.$element.trigger("focus").trigger(r)}))},e.prototype.hide=function(i){i&&i.preventDefault(),i=t.Event("hide.bs.modal"),this.$element.trigger(i),this.isShown&&!i.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(e.TRANSITION_DURATION):this.hideModal())},e.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},e.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},e.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},e.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},e.prototype.backdrop=function(i){var n=this,s=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var r=t.support.transition&&s;if(this.$backdrop=t('<div class="modal-backdrop '+s+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),r&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!i)return;r?this.$backdrop.one("bsTransitionEnd",i).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):i()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var o=function(){n.removeBackdrop(),i&&i()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",o).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):o()}else i&&i()},e.prototype.handleUpdate=function(){this.adjustDialog()},e.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},e.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},e.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},e.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},e.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},e.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var n=t.fn.modal;t.fn.modal=i,t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var n=t(this),s=n.attr("href"),r=t(n.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,"")),o=r.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},r.data(),n.data());n.is("a")&&e.preventDefault(),r.one("show.bs.modal",function(t){t.isDefaultPrevented()||r.one("hidden.bs.modal",function(){n.is(":visible")&&n.trigger("focus")})}),i.call(r,o,this)})}(jQuery),function(t){"use strict";var e=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",t,e)};e.VERSION="3.3.4",e.TRANSITION_DURATION=150,e.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},e.prototype.init=function(e,i,n){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(n),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var s=this.options.trigger.split(" "),r=s.length;r--;){var o=s[r];if("click"==o)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=o){var a="hover"==o?"mouseenter":"focusin",l="hover"==o?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.getOptions=function(e){return(e=t.extend({},this.getDefaults(),this.$element.data(),e)).delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},e.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,n){i[t]!=n&&(e[t]=n)}),e},e.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(i&&i.$tip&&i.$tip.is(":visible"))i.hoverState="in";else{if(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="in",!i.options.delay||!i.options.delay.show)return i.show();i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)}},e.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="out",!i.options.delay||!i.options.delay.hide)return i.hide();i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)},e.prototype.show=function(){var i=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(i);var n=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(i.isDefaultPrevented()||!n)return;var s=this,r=this.tip(),o=this.getUID(this.type);this.setContent(),r.attr("id",o),this.$element.attr("aria-describedby",o),this.options.animation&&r.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,u=l.test(a);u&&(a=a.replace(l,"")||"top"),r.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element);var c=this.getPosition(),h=r[0].offsetWidth,d=r[0].offsetHeight;if(u){var p=a,f=this.options.container?t(this.options.container):this.$element.parent(),g=this.getPosition(f);a="bottom"==a&&c.bottom+d>g.bottom?"top":"top"==a&&c.top-d<g.top?"bottom":"right"==a&&c.right+h>g.width?"left":"left"==a&&c.left-h<g.left?"right":a,r.removeClass(p).addClass(a)}var m=this.getCalculatedOffset(a,c,h,d);this.applyPlacement(m,a);var v=function(){var t=s.hoverState;s.$element.trigger("shown.bs."+s.type),s.hoverState=null,"out"==t&&s.leave(s)};t.support.transition&&this.$tip.hasClass("fade")?r.one("bsTransitionEnd",v).emulateTransitionEnd(e.TRANSITION_DURATION):v()}},e.prototype.applyPlacement=function(e,i){var n=this.tip(),s=n[0].offsetWidth,r=n[0].offsetHeight,o=parseInt(n.css("margin-top"),10),a=parseInt(n.css("margin-left"),10);isNaN(o)&&(o=0),isNaN(a)&&(a=0),e.top=e.top+o,e.left=e.left+a,t.offset.setOffset(n[0],t.extend({using:function(t){n.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),n.addClass("in");var l=n[0].offsetWidth,u=n[0].offsetHeight;"top"==i&&u!=r&&(e.top=e.top+r-u);var c=this.getViewportAdjustedDelta(i,e,l,u);c.left?e.left+=c.left:e.top+=c.top;var h=/top|bottom/.test(i),d=h?2*c.left-s+l:2*c.top-r+u,p=h?"offsetWidth":"offsetHeight";n.offset(e),this.replaceArrow(d,n[0][p],h)},e.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},e.prototype.hide=function(i){var n=this,s=t(this.$tip),r=t.Event("hide.bs."+this.type);function o(){"in"!=n.hoverState&&s.detach(),n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),i&&i()}if(this.$element.trigger(r),!r.isDefaultPrevented())return s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(e.TRANSITION_DURATION):o(),this.hoverState=null,this},e.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},e.prototype.hasContent=function(){return this.getTitle()},e.prototype.getPosition=function(e){var i=(e=e||this.$element)[0],n="BODY"==i.tagName,s=i.getBoundingClientRect();null==s.width&&(s=t.extend({},s,{width:s.right-s.left,height:s.bottom-s.top}));var r=n?{top:0,left:0}:e.offset(),o={scroll:n?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},a=n?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},s,o,a,r)},e.prototype.getCalculatedOffset=function(t,e,i,n){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-n,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-n/2,left:e.left-i}:{top:e.top+e.height/2-n/2,left:e.left+e.width}},e.prototype.getViewportAdjustedDelta=function(t,e,i,n){var s={top:0,left:0};if(!this.$viewport)return s;var r=this.options.viewport&&this.options.viewport.padding||0,o=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-r-o.scroll,l=e.top+r-o.scroll+n;a<o.top?s.top=o.top-a:l>o.top+o.height&&(s.top=o.top+o.height-l)}else{var u=e.left-r,c=e.left+r+i;u<o.left?s.left=o.left-u:c>o.width&&(s.left=o.left+o.width-c)}return s},e.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},e.prototype.getUID=function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},e.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},e.prototype.enable=function(){this.enabled=!0},e.prototype.disable=function(){this.enabled=!1},e.prototype.toggleEnabled=function(){this.enabled=!this.enabled},e.prototype.toggle=function(e){var i=this;e&&((i=t(e.currentTarget).data("bs."+this.type))||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),i.tip().hasClass("in")?i.leave(i):i.enter(i)},e.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})};var i=t.fn.tooltip;t.fn.tooltip=function(i){return this.each(function(){var n=t(this),s=n.data("bs.tooltip"),r="object"==typeof i&&i;!s&&/destroy|hide/.test(i)||(s||n.data("bs.tooltip",s=new e(this,r)),"string"==typeof i&&s[i]())})},t.fn.tooltip.Constructor=e,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(jQuery),function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");e.VERSION="3.3.4",e.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),e.prototype.constructor=e,e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},e.prototype.hasContent=function(){return this.getTitle()||this.getContent()},e.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var i=t.fn.popover;t.fn.popover=function(i){return this.each(function(){var n=t(this),s=n.data("bs.popover"),r="object"==typeof i&&i;!s&&/destroy|hide/.test(i)||(s||n.data("bs.popover",s=new e(this,r)),"string"==typeof i&&s[i]())})},t.fn.popover.Constructor=e,t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(jQuery),function(t){"use strict";function e(i,n){this.$body=t(document.body),this.$scrollElement=t(i).is(document.body)?t(window):t(i),this.options=t.extend({},e.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var n=t(this),s=n.data("bs.scrollspy"),r="object"==typeof i&&i;s||n.data("bs.scrollspy",s=new e(this,r)),"string"==typeof i&&s[i]()})}e.VERSION="3.3.4",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),s=e.data("target")||e.attr("href"),r=/^#./.test(s)&&t(s);return r&&r.length&&r.is(":visible")&&[[r[i]().top+n,s]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),n=this.options.offset+i-this.$scrollElement.height(),s=this.offsets,r=this.targets,o=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=n)return o!=(t=r[r.length-1])&&this.activate(t);if(o&&e<s[0])return this.activeTarget=null,this.clear();for(t=s.length;t--;)o!=r[t]&&e>=s[t]&&(void 0===s[t+1]||e<s[t+1])&&this.activate(r[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',n=t(i).parents("li").addClass("active");n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var n=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),function(t){"use strict";var e=function(e){this.element=t(e)};function i(i){return this.each(function(){var n=t(this),s=n.data("bs.tab");s||n.data("bs.tab",s=new e(this)),"string"==typeof i&&s[i]()})}e.VERSION="3.3.4",e.TRANSITION_DURATION=150,e.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),n=e.data("target");if(n||(n=(n=e.attr("href"))&&n.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var s=i.find(".active:last a"),r=t.Event("hide.bs.tab",{relatedTarget:e[0]}),o=t.Event("show.bs.tab",{relatedTarget:s[0]});if(s.trigger(r),e.trigger(o),!o.isDefaultPrevented()&&!r.isDefaultPrevented()){var a=t(n);this.activate(e.closest("li"),i),this.activate(a,a.parent(),function(){s.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:s[0]})})}}},e.prototype.activate=function(i,n,s){var r=n.find("> .active"),o=s&&t.support.transition&&(r.length&&r.hasClass("fade")||!!n.find("> .fade").length);function a(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),o?(i[0].offsetWidth,i.addClass("in")):i.removeClass("fade"),i.parent(".dropdown-menu").length&&i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),s&&s()}r.length&&o?r.one("bsTransitionEnd",a).emulateTransitionEnd(e.TRANSITION_DURATION):a(),r.removeClass("in")};var n=t.fn.tab;t.fn.tab=i,t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=n,this};var s=function(e){e.preventDefault(),i.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',s).on("click.bs.tab.data-api",'[data-toggle="pill"]',s)}(jQuery),function(t){"use strict";var e=function(i,n){this.options=t.extend({},e.DEFAULTS,n),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(i),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(i){return this.each(function(){var n=t(this),s=n.data("bs.affix"),r="object"==typeof i&&i;s||n.data("bs.affix",s=new e(this,r)),"string"==typeof i&&s[i]()})}e.VERSION="3.3.4",e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0,target:window},e.prototype.getState=function(t,e,i,n){var s=this.$target.scrollTop(),r=this.$element.offset(),o=this.$target.height();if(null!=i&&"top"==this.affixed)return s<i&&"top";if("bottom"==this.affixed)return null!=i?!(s+this.unpin<=r.top)&&"bottom":!(s+o<=t-n)&&"bottom";var a=null==this.affixed,l=a?s:r.top;return null!=i&&s<=i?"top":null!=n&&l+(a?o:e)>=t-n&&"bottom"},e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");var t=this.$target.scrollTop(),i=this.$element.offset();return this.pinnedOffset=i.top-t},e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var i=this.$element.height(),n=this.options.offset,s=n.top,r=n.bottom,o=t(document.body).height();"object"!=typeof n&&(r=s=n),"function"==typeof s&&(s=n.top(this.$element)),"function"==typeof r&&(r=n.bottom(this.$element));var a=this.getState(o,i,s,r);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var l="affix"+(a?"-"+a:""),u=t.Event(l+".bs.affix");if(this.$element.trigger(u),u.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:o-i-r})}};var n=t.fn.affix;t.fn.affix=i,t.fn.affix.Constructor=e,t.fn.affix.noConflict=function(){return t.fn.affix=n,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),n=e.data();n.offset=n.offset||{},null!=n.offsetBottom&&(n.offset.bottom=n.offsetBottom),null!=n.offsetTop&&(n.offset.top=n.offsetTop),i.call(e,n)})})}(jQuery)},hv7s:function(t,e,i){var n,s,r,o;o=function(t){var e=function(){if(t&&t.fn&&t.fn.select2&&t.fn.select2.amd)var e=t.fn.select2.amd;var i,n,s;return e&&e.requirejs||(e?n=e:e={},function(t){var e,r,o,a,l={},u={},c={},h={},d=Object.prototype.hasOwnProperty,p=[].slice,f=/\.js$/;function g(t,e){return d.call(t,e)}function m(t,e){var i,n,s,r,o,a,l,u,h,d,p,g=e&&e.split("/"),m=c.map,v=m&&m["*"]||{};if(t){for(o=(t=t.split("/")).length-1,c.nodeIdCompat&&f.test(t[o])&&(t[o]=t[o].replace(f,"")),"."===t[0].charAt(0)&&g&&(t=g.slice(0,g.length-1).concat(t)),h=0;h<t.length;h++)if("."===(p=t[h]))t.splice(h,1),h-=1;else if(".."===p){if(0===h||1===h&&".."===t[2]||".."===t[h-1])continue;h>0&&(t.splice(h-1,2),h-=2)}t=t.join("/")}if((g||v)&&m){for(h=(i=t.split("/")).length;h>0;h-=1){if(n=i.slice(0,h).join("/"),g)for(d=g.length;d>0;d-=1)if((s=m[g.slice(0,d).join("/")])&&(s=s[n])){r=s,a=h;break}if(r)break;!l&&v&&v[n]&&(l=v[n],u=h)}!r&&l&&(r=l,a=u),r&&(i.splice(0,a,r),t=i.join("/"))}return t}function v(e,i){return function(){var n=p.call(arguments,0);return"string"!=typeof n[0]&&1===n.length&&n.push(null),r.apply(t,n.concat([e,i]))}}function _(t){return function(e){l[t]=e}}function y(i){if(g(u,i)){var n=u[i];delete u[i],h[i]=!0,e.apply(t,n)}if(!g(l,i)&&!g(h,i))throw new Error("No "+i);return l[i]}function b(t){var e,i=t?t.indexOf("!"):-1;return i>-1&&(e=t.substring(0,i),t=t.substring(i+1,t.length)),[e,t]}function w(t){return t?b(t):[]}o=function(t,e){var i,n,s=b(t),r=s[0],o=e[1];return t=s[1],r&&(i=y(r=m(r,o))),r?t=i&&i.normalize?i.normalize(t,(n=o,function(t){return m(t,n)})):m(t,o):(r=(s=b(t=m(t,o)))[0],t=s[1],r&&(i=y(r))),{f:r?r+"!"+t:t,n:t,pr:r,p:i}},a={require:function(t){return v(t)},exports:function(t){var e=l[t];return void 0!==e?e:l[t]={}},module:function(t){return{id:t,uri:"",exports:l[t],config:function(t){return function(){return c&&c.config&&c.config[t]||{}}}(t)}}},e=function(e,i,n,s){var r,c,d,p,f,m,b,x=[],C=typeof n;if(m=w(s=s||e),"undefined"===C||"function"===C){for(i=!i.length&&n.length?["require","exports","module"]:i,f=0;f<i.length;f+=1)if("require"===(c=(p=o(i[f],m)).f))x[f]=a.require(e);else if("exports"===c)x[f]=a.exports(e),b=!0;else if("module"===c)r=x[f]=a.module(e);else if(g(l,c)||g(u,c)||g(h,c))x[f]=y(c);else{if(!p.p)throw new Error(e+" missing "+c);p.p.load(p.n,v(s,!0),_(c),{}),x[f]=l[c]}d=n?n.apply(l[e],x):void 0,e&&(r&&r.exports!==t&&r.exports!==l[e]?l[e]=r.exports:d===t&&b||(l[e]=d))}else e&&(l[e]=n)},i=n=r=function(i,n,s,l,u){if("string"==typeof i)return a[i]?a[i](n):y(o(i,w(n)).f);if(!i.splice){if((c=i).deps&&r(c.deps,c.callback),!n)return;n.splice?(i=n,n=s,s=null):i=t}return n=n||function(){},"function"==typeof s&&(s=l,l=u),l?e(t,i,n,s):setTimeout(function(){e(t,i,n,s)},4),r},r.config=function(t){return r(t)},i._defined=l,(s=function(t,e,i){if("string"!=typeof t)throw new Error("See almond README: incorrect module build, no module name");e.splice||(i=e,e=[]),g(l,t)||g(u,t)||(u[t]=[t,e,i])}).amd={jQuery:!0}}(),e.requirejs=i,e.require=n,e.define=s),e.define("almond",function(){}),e.define("jquery",[],function(){var e=t||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),e.define("select2/utils",["jquery"],function(t){var e={};function i(t){var e=t.prototype,i=[];for(var n in e){"function"==typeof e[n]&&("constructor"!==n&&i.push(n))}return i}e.Extend=function(t,e){var i={}.hasOwnProperty;function n(){this.constructor=t}for(var s in e)i.call(e,s)&&(t[s]=e[s]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},e.Decorate=function(t,e){var n=i(e),s=i(t);function r(){var i=Array.prototype.unshift,n=e.prototype.constructor.length,s=t.prototype.constructor;n>0&&(i.call(arguments,t.prototype.constructor),s=e.prototype.constructor),s.apply(this,arguments)}e.displayName=t.displayName,r.prototype=new function(){this.constructor=r};for(var o=0;o<s.length;o++){var a=s[o];r.prototype[a]=t.prototype[a]}for(var l=function(t){var i=function(){};t in r.prototype&&(i=r.prototype[t]);var n=e.prototype[t];return function(){return Array.prototype.unshift.call(arguments,i),n.apply(this,arguments)}},u=0;u<n.length;u++){var c=n[u];r.prototype[c]=l(c)}return r};var n=function(){this.listeners={}};return n.prototype.on=function(t,e){this.listeners=this.listeners||{},t in this.listeners?this.listeners[t].push(e):this.listeners[t]=[e]},n.prototype.trigger=function(t){var e=Array.prototype.slice,i=e.call(arguments,1);this.listeners=this.listeners||{},null==i&&(i=[]),0===i.length&&i.push({}),i[0]._type=t,t in this.listeners&&this.invoke(this.listeners[t],e.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},n.prototype.invoke=function(t,e){for(var i=0,n=t.length;i<n;i++)t[i].apply(this,e)},e.Observable=n,e.generateChars=function(t){for(var e="",i=0;i<t;i++){e+=Math.floor(36*Math.random()).toString(36)}return e},e.bind=function(t,e){return function(){t.apply(e,arguments)}},e._convertData=function(t){for(var e in t){var i=e.split("-"),n=t;if(1!==i.length){for(var s=0;s<i.length;s++){var r=i[s];(r=r.substring(0,1).toLowerCase()+r.substring(1))in n||(n[r]={}),s==i.length-1&&(n[r]=t[e]),n=n[r]}delete t[e]}}return t},e.hasScroll=function(e,i){var n=t(i),s=i.style.overflowX,r=i.style.overflowY;return(s!==r||"hidden"!==r&&"visible"!==r)&&("scroll"===s||"scroll"===r||(n.innerHeight()<i.scrollHeight||n.innerWidth()<i.scrollWidth))},e.escapeMarkup=function(t){var e={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof t?t:String(t).replace(/[&<>"'\/\\]/g,function(t){return e[t]})},e.appendMany=function(e,i){if("1.7"===t.fn.jquery.substr(0,3)){var n=t();t.map(i,function(t){n=n.add(t)}),i=n}e.append(i)},e}),e.define("select2/results",["jquery","./utils"],function(t,e){function i(t,e,n){this.$element=t,this.data=n,this.options=e,i.__super__.constructor.call(this)}return e.Extend(i,e.Observable),i.prototype.render=function(){var e=t('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e,e},i.prototype.clear=function(){this.$results.empty()},i.prototype.displayMessage=function(e){var i=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=t('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),s=this.options.get("translations").get(e.message);n.append(i(s(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},i.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},i.prototype.append=function(t){this.hideLoading();var e=[];if(null!=t.results&&0!==t.results.length){t.results=this.sort(t.results);for(var i=0;i<t.results.length;i++){var n=t.results[i],s=this.option(n);e.push(s)}this.$results.append(e)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},i.prototype.position=function(t,e){e.find(".select2-results").append(t)},i.prototype.sort=function(t){return this.options.get("sorter")(t)},i.prototype.highlightFirstItem=function(){var t=this.$results.find(".select2-results__option[aria-selected]"),e=t.filter("[aria-selected=true]");e.length>0?e.first().trigger("mouseenter"):t.first().trigger("mouseenter"),this.ensureHighlightVisible()},i.prototype.setClasses=function(){var e=this;this.data.current(function(i){var n=t.map(i,function(t){return t.id.toString()});e.$results.find(".select2-results__option[aria-selected]").each(function(){var e=t(this),i=t.data(this,"data"),s=""+i.id;null!=i.element&&i.element.selected||null==i.element&&t.inArray(s,n)>-1?e.attr("aria-selected","true"):e.attr("aria-selected","false")})})},i.prototype.showLoading=function(t){this.hideLoading();var e={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(t)},i=this.option(e);i.className+=" loading-results",this.$results.prepend(i)},i.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},i.prototype.option=function(e){var i=document.createElement("li");i.className="select2-results__option";var n={role:"treeitem","aria-selected":"false"};for(var s in e.disabled&&(delete n["aria-selected"],n["aria-disabled"]="true"),null==e.id&&delete n["aria-selected"],null!=e._resultId&&(i.id=e._resultId),e.title&&(i.title=e.title),e.children&&(n.role="group",n["aria-label"]=e.text,delete n["aria-selected"]),n){var r=n[s];i.setAttribute(s,r)}if(e.children){var o=t(i),a=document.createElement("strong");a.className="select2-results__group";t(a);this.template(e,a);for(var l=[],u=0;u<e.children.length;u++){var c=e.children[u],h=this.option(c);l.push(h)}var d=t("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});d.append(l),o.append(a),o.append(d)}else this.template(e,i);return t.data(i,"data",e),i},i.prototype.bind=function(e,i){var n=this,s=e.id+"-results";this.$results.attr("id",s),e.on("results:all",function(t){n.clear(),n.append(t.data),e.isOpen()&&(n.setClasses(),n.highlightFirstItem())}),e.on("results:append",function(t){n.append(t.data),e.isOpen()&&n.setClasses()}),e.on("query",function(t){n.hideMessages(),n.showLoading(t)}),e.on("select",function(){e.isOpen()&&(n.setClasses(),n.highlightFirstItem())}),e.on("unselect",function(){e.isOpen()&&(n.setClasses(),n.highlightFirstItem())}),e.on("open",function(){n.$results.attr("aria-expanded","true"),n.$results.attr("aria-hidden","false"),n.setClasses(),n.ensureHighlightVisible()}),e.on("close",function(){n.$results.attr("aria-expanded","false"),n.$results.attr("aria-hidden","true"),n.$results.removeAttr("aria-activedescendant")}),e.on("results:toggle",function(){var t=n.getHighlightedResults();0!==t.length&&t.trigger("mouseup")}),e.on("results:select",function(){var t=n.getHighlightedResults();if(0!==t.length){var e=t.data("data");"true"==t.attr("aria-selected")?n.trigger("close",{}):n.trigger("select",{data:e})}}),e.on("results:previous",function(){var t=n.getHighlightedResults(),e=n.$results.find("[aria-selected]"),i=e.index(t);if(0!==i){var s=i-1;0===t.length&&(s=0);var r=e.eq(s);r.trigger("mouseenter");var o=n.$results.offset().top,a=r.offset().top,l=n.$results.scrollTop()+(a-o);0===s?n.$results.scrollTop(0):a-o<0&&n.$results.scrollTop(l)}}),e.on("results:next",function(){var t=n.getHighlightedResults(),e=n.$results.find("[aria-selected]"),i=e.index(t)+1;if(!(i>=e.length)){var s=e.eq(i);s.trigger("mouseenter");var r=n.$results.offset().top+n.$results.outerHeight(!1),o=s.offset().top+s.outerHeight(!1),a=n.$results.scrollTop()+o-r;0===i?n.$results.scrollTop(0):o>r&&n.$results.scrollTop(a)}}),e.on("results:focus",function(t){t.element.addClass("select2-results__option--highlighted")}),e.on("results:message",function(t){n.displayMessage(t)}),t.fn.mousewheel&&this.$results.on("mousewheel",function(t){var e=n.$results.scrollTop(),i=n.$results.get(0).scrollHeight-e+t.deltaY,s=t.deltaY>0&&e-t.deltaY<=0,r=t.deltaY<0&&i<=n.$results.height();s?(n.$results.scrollTop(0),t.preventDefault(),t.stopPropagation()):r&&(n.$results.scrollTop(n.$results.get(0).scrollHeight-n.$results.height()),t.preventDefault(),t.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(e){var i=t(this),s=i.data("data");"true"!==i.attr("aria-selected")?n.trigger("select",{originalEvent:e,data:s}):n.options.get("multiple")?n.trigger("unselect",{originalEvent:e,data:s}):n.trigger("close",{})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(e){var i=t(this).data("data");n.getHighlightedResults().removeClass("select2-results__option--highlighted"),n.trigger("results:focus",{data:i,element:t(this)})})},i.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},i.prototype.destroy=function(){this.$results.remove()},i.prototype.ensureHighlightVisible=function(){var t=this.getHighlightedResults();if(0!==t.length){var e=this.$results.find("[aria-selected]").index(t),i=this.$results.offset().top,n=t.offset().top,s=this.$results.scrollTop()+(n-i),r=n-i;s-=2*t.outerHeight(!1),e<=2?this.$results.scrollTop(0):(r>this.$results.outerHeight()||r<0)&&this.$results.scrollTop(s)}},i.prototype.template=function(e,i){var n=this.options.get("templateResult"),s=this.options.get("escapeMarkup"),r=n(e,i);null==r?i.style.display="none":"string"==typeof r?i.innerHTML=s(r):t(i).append(r)},i}),e.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),e.define("select2/selection/base",["jquery","../utils","../keys"],function(t,e,i){function n(t,e){this.$element=t,this.options=e,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),this.$selection=e,e},n.prototype.bind=function(t,e){var n=this,s=(t.id,t.id+"-results");this.container=t,this.$selection.on("focus",function(t){n.trigger("focus",t)}),this.$selection.on("blur",function(t){n._handleBlur(t)}),this.$selection.on("keydown",function(t){n.trigger("keypress",t),t.which===i.SPACE&&t.preventDefault()}),t.on("results:focus",function(t){n.$selection.attr("aria-activedescendant",t.data._resultId)}),t.on("selection:update",function(t){n.update(t.data)}),t.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",s),n._attachCloseHandler(t)}),t.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.focus(),n._detachCloseHandler(t)}),t.on("enable",function(){n.$selection.attr("tabindex",n._tabindex)}),t.on("disable",function(){n.$selection.attr("tabindex","-1")})},n.prototype._handleBlur=function(e){var i=this;window.setTimeout(function(){document.activeElement==i.$selection[0]||t.contains(i.$selection[0],document.activeElement)||i.trigger("blur",e)},1)},n.prototype._attachCloseHandler=function(e){t(document.body).on("mousedown.select2."+e.id,function(e){var i=t(e.target).closest(".select2");t(".select2.select2-container--open").each(function(){var e=t(this);this!=i[0]&&e.data("element").select2("close")})})},n.prototype._detachCloseHandler=function(e){t(document.body).off("mousedown.select2."+e.id)},n.prototype.position=function(t,e){e.find(".selection").append(t)},n.prototype.destroy=function(){this._detachCloseHandler(this.container)},n.prototype.update=function(t){throw new Error("The `update` method must be defined in child classes.")},n}),e.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(t,e,i,n){function s(){s.__super__.constructor.apply(this,arguments)}return i.Extend(s,e),s.prototype.render=function(){var t=s.__super__.render.call(this);return t.addClass("select2-selection--single"),t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),t},s.prototype.bind=function(t,e){var i=this;s.__super__.bind.apply(this,arguments);var n=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",n),this.$selection.attr("aria-labelledby",n),this.$selection.on("mousedown",function(t){1===t.which&&i.trigger("toggle",{originalEvent:t})}),this.$selection.on("focus",function(t){}),this.$selection.on("blur",function(t){}),t.on("focus",function(e){t.isOpen()||i.$selection.focus()}),t.on("selection:update",function(t){i.update(t.data)})},s.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},s.prototype.display=function(t,e){var i=this.options.get("templateSelection");return this.options.get("escapeMarkup")(i(t,e))},s.prototype.selectionContainer=function(){return t("<span></span>")},s.prototype.update=function(t){if(0!==t.length){var e=t[0],i=this.$selection.find(".select2-selection__rendered"),n=this.display(e,i);i.empty().append(n),i.prop("title",e.title||e.text)}else this.clear()},s}),e.define("select2/selection/multiple",["jquery","./base","../utils"],function(t,e,i){function n(t,e){n.__super__.constructor.apply(this,arguments)}return i.Extend(n,e),n.prototype.render=function(){var t=n.__super__.render.call(this);return t.addClass("select2-selection--multiple"),t.html('<ul class="select2-selection__rendered"></ul>'),t},n.prototype.bind=function(e,i){var s=this;n.__super__.bind.apply(this,arguments),this.$selection.on("click",function(t){s.trigger("toggle",{originalEvent:t})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){if(!s.options.get("disabled")){var i=t(this).parent().data("data");s.trigger("unselect",{originalEvent:e,data:i})}})},n.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},n.prototype.display=function(t,e){var i=this.options.get("templateSelection");return this.options.get("escapeMarkup")(i(t,e))},n.prototype.selectionContainer=function(){return t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},n.prototype.update=function(t){if(this.clear(),0!==t.length){for(var e=[],n=0;n<t.length;n++){var s=t[n],r=this.selectionContainer(),o=this.display(s,r);r.append(o),r.prop("title",s.title||s.text),r.data("data",s),e.push(r)}var a=this.$selection.find(".select2-selection__rendered");i.appendMany(a,e)}},n}),e.define("select2/selection/placeholder",["../utils"],function(t){function e(t,e,i){this.placeholder=this.normalizePlaceholder(i.get("placeholder")),t.call(this,e,i)}return e.prototype.normalizePlaceholder=function(t,e){return"string"==typeof e&&(e={id:"",text:e}),e},e.prototype.createPlaceholder=function(t,e){var i=this.selectionContainer();return i.html(this.display(e)),i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),i},e.prototype.update=function(t,e){var i=1==e.length&&e[0].id!=this.placeholder.id;if(e.length>1||i)return t.call(this,e);this.clear();var n=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(n)},e}),e.define("select2/selection/allowClear",["jquery","../keys"],function(t,e){function i(){}return i.prototype.bind=function(t,e,i){var n=this;t.call(this,e,i),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(t){n._handleClear(t)}),e.on("keypress",function(t){n._handleKeyboardClear(t,e)})},i.prototype._handleClear=function(t,e){if(!this.options.get("disabled")){var i=this.$selection.find(".select2-selection__clear");if(0!==i.length){e.stopPropagation();for(var n=i.data("data"),s=0;s<n.length;s++){var r={data:n[s]};if(this.trigger("unselect",r),r.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},i.prototype._handleKeyboardClear=function(t,i,n){n.isOpen()||i.which!=e.DELETE&&i.which!=e.BACKSPACE||this._handleClear(i)},i.prototype.update=function(e,i){if(e.call(this,i),!(this.$selection.find(".select2-selection__placeholder").length>0||0===i.length)){var n=t('<span class="select2-selection__clear">&times;</span>');n.data("data",i),this.$selection.find(".select2-selection__rendered").prepend(n)}},i}),e.define("select2/selection/search",["jquery","../utils","../keys"],function(t,e,i){function n(t,e,i){t.call(this,e,i)}return n.prototype.render=function(e){var i=t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=i,this.$search=i.find("input");var n=e.call(this);return this._transferTabIndex(),n},n.prototype.bind=function(t,e,n){var s=this;t.call(this,e,n),e.on("open",function(){s.$search.trigger("focus")}),e.on("close",function(){s.$search.val(""),s.$search.removeAttr("aria-activedescendant"),s.$search.trigger("focus")}),e.on("enable",function(){s.$search.prop("disabled",!1),s._transferTabIndex()}),e.on("disable",function(){s.$search.prop("disabled",!0)}),e.on("focus",function(t){s.$search.trigger("focus")}),e.on("results:focus",function(t){s.$search.attr("aria-activedescendant",t.id)}),this.$selection.on("focusin",".select2-search--inline",function(t){s.trigger("focus",t)}),this.$selection.on("focusout",".select2-search--inline",function(t){s._handleBlur(t)}),this.$selection.on("keydown",".select2-search--inline",function(t){if(t.stopPropagation(),s.trigger("keypress",t),s._keyUpPrevented=t.isDefaultPrevented(),t.which===i.BACKSPACE&&""===s.$search.val()){var e=s.$searchContainer.prev(".select2-selection__choice");if(e.length>0){var n=e.data("data");s.searchRemoveChoice(n),t.preventDefault()}}});var r=document.documentMode,o=r&&r<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(t){o?s.$selection.off("input.search input.searchcheck"):s.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(t){if(o&&"input"===t.type)s.$selection.off("input.search input.searchcheck");else{var e=t.which;e!=i.SHIFT&&e!=i.CTRL&&e!=i.ALT&&e!=i.TAB&&s.handleSearch(t)}})},n.prototype._transferTabIndex=function(t){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},n.prototype.createPlaceholder=function(t,e){this.$search.attr("placeholder",e.text)},n.prototype.update=function(t,e){var i=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),t.call(this,e),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),i&&this.$search.focus()},n.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},n.prototype.searchRemoveChoice=function(t,e){this.trigger("unselect",{data:e}),this.$search.val(e.text),this.handleSearch()},n.prototype.resizeSearch=function(){this.$search.css("width","25px");var t="";""!==this.$search.attr("placeholder")?t=this.$selection.find(".select2-selection__rendered").innerWidth():t=.75*(this.$search.val().length+1)+"em";this.$search.css("width",t)},n}),e.define("select2/selection/eventRelay",["jquery"],function(t){function e(){}return e.prototype.bind=function(e,i,n){var s=this,r=["open","opening","close","closing","select","selecting","unselect","unselecting"],o=["opening","closing","selecting","unselecting"];e.call(this,i,n),i.on("*",function(e,i){if(-1!==t.inArray(e,r)){i=i||{};var n=t.Event("select2:"+e,{params:i});s.$element.trigger(n),-1!==t.inArray(e,o)&&(i.prevented=n.isDefaultPrevented())}})},e}),e.define("select2/translation",["jquery","require"],function(t,e){function i(t){this.dict=t||{}}return i.prototype.all=function(){return this.dict},i.prototype.get=function(t){return this.dict[t]},i.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},i._cache={},i.loadPath=function(t){if(!(t in i._cache)){var n=e(t);i._cache[t]=n}return new i(i._cache[t])},i}),e.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"}}),e.define("select2/data/base",["../utils"],function(t){function e(t,i){e.__super__.constructor.call(this)}return t.Extend(e,t.Observable),e.prototype.current=function(t){throw new Error("The `current` method must be defined in child classes.")},e.prototype.query=function(t,e){throw new Error("The `query` method must be defined in child classes.")},e.prototype.bind=function(t,e){},e.prototype.destroy=function(){},e.prototype.generateResultId=function(e,i){var n=e.id+"-result-";return n+=t.generateChars(4),null!=i.id?n+="-"+i.id.toString():n+="-"+t.generateChars(4),n},e}),e.define("select2/data/select",["./base","../utils","jquery"],function(t,e,i){function n(t,e){this.$element=t,this.options=e,n.__super__.constructor.call(this)}return e.Extend(n,t),n.prototype.current=function(t){var e=[],n=this;this.$element.find(":selected").each(function(){var t=i(this),s=n.item(t);e.push(s)}),t(e)},n.prototype.select=function(t){var e=this;if(t.selected=!0,i(t.element).is("option"))return t.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(n){var s=[];(t=[t]).push.apply(t,n);for(var r=0;r<t.length;r++){var o=t[r].id;-1===i.inArray(o,s)&&s.push(o)}e.$element.val(s),e.$element.trigger("change")});else{var n=t.id;this.$element.val(n),this.$element.trigger("change")}},n.prototype.unselect=function(t){var e=this;if(this.$element.prop("multiple")){if(t.selected=!1,i(t.element).is("option"))return t.element.selected=!1,void this.$element.trigger("change");this.current(function(n){for(var s=[],r=0;r<n.length;r++){var o=n[r].id;o!==t.id&&-1===i.inArray(o,s)&&s.push(o)}e.$element.val(s),e.$element.trigger("change")})}},n.prototype.bind=function(t,e){var i=this;this.container=t,t.on("select",function(t){i.select(t.data)}),t.on("unselect",function(t){i.unselect(t.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){i.removeData(this,"data")})},n.prototype.query=function(t,e){var n=[],s=this;this.$element.children().each(function(){var e=i(this);if(e.is("option")||e.is("optgroup")){var r=s.item(e),o=s.matches(t,r);null!==o&&n.push(o)}}),e({results:n})},n.prototype.addOptions=function(t){e.appendMany(this.$element,t)},n.prototype.option=function(t){var e;t.children?(e=document.createElement("optgroup")).label=t.text:void 0!==(e=document.createElement("option")).textContent?e.textContent=t.text:e.innerText=t.text,void 0!==t.id&&(e.value=t.id),t.disabled&&(e.disabled=!0),t.selected&&(e.selected=!0),t.title&&(e.title=t.title);var n=i(e),s=this._normalizeItem(t);return s.element=e,i.data(e,"data",s),n},n.prototype.item=function(t){var e={};if(null!=(e=i.data(t[0],"data")))return e;if(t.is("option"))e={id:t.val(),text:t.text(),disabled:t.prop("disabled"),selected:t.prop("selected"),title:t.prop("title")};else if(t.is("optgroup")){e={text:t.prop("label"),children:[],title:t.prop("title")};for(var n=t.children("option"),s=[],r=0;r<n.length;r++){var o=i(n[r]),a=this.item(o);s.push(a)}e.children=s}return(e=this._normalizeItem(e)).element=t[0],i.data(t[0],"data",e),e},n.prototype._normalizeItem=function(t){i.isPlainObject(t)||(t={id:t,text:t});return null!=(t=i.extend({},{text:""},t)).id&&(t.id=t.id.toString()),null!=t.text&&(t.text=t.text.toString()),null==t._resultId&&t.id&&null!=this.container&&(t._resultId=this.generateResultId(this.container,t)),i.extend({},{selected:!1,disabled:!1},t)},n.prototype.matches=function(t,e){return this.options.get("matcher")(t,e)},n}),e.define("select2/data/array",["./select","../utils","jquery"],function(t,e,i){function n(t,e){var i=e.get("data")||[];n.__super__.constructor.call(this,t,e),this.addOptions(this.convertToOptions(i))}return e.Extend(n,t),n.prototype.select=function(t){var e=this.$element.find("option").filter(function(e,i){return i.value==t.id.toString()});0===e.length&&(e=this.option(t),this.addOptions(e)),n.__super__.select.call(this,t)},n.prototype.convertToOptions=function(t){var n=this,s=this.$element.find("option"),r=s.map(function(){return n.item(i(this)).id}).get(),o=[];function a(t){return function(){return i(this).val()==t.id}}for(var l=0;l<t.length;l++){var u=this._normalizeItem(t[l]);if(i.inArray(u.id,r)>=0){var c=s.filter(a(u)),h=this.item(c),d=i.extend(!0,{},u,h),p=this.option(d);c.replaceWith(p)}else{var f=this.option(u);if(u.children){var g=this.convertToOptions(u.children);e.appendMany(f,g)}o.push(f)}}return o},n}),e.define("select2/data/ajax",["./array","../utils","jquery"],function(t,e,i){function n(t,e){this.ajaxOptions=this._applyDefaults(e.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,t,e)}return e.Extend(n,t),n.prototype._applyDefaults=function(t){var e={data:function(t){return i.extend({},t,{q:t.term})},transport:function(t,e,n){var s=i.ajax(t);return s.then(e),s.fail(n),s}};return i.extend({},e,t,!0)},n.prototype.processResults=function(t){return t},n.prototype.query=function(t,e){var n=this;null!=this._request&&(i.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var s=i.extend({type:"GET"},this.ajaxOptions);function r(){var r=s.transport(s,function(s){var r=n.processResults(s,t);n.options.get("debug")&&window.console&&console.error&&(r&&r.results&&i.isArray(r.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),e(r)},function(){r.status&&"0"===r.status||n.trigger("results:message",{message:"errorLoading"})});n._request=r}"function"==typeof s.url&&(s.url=s.url.call(this.$element,t)),"function"==typeof s.data&&(s.data=s.data.call(this.$element,t)),this.ajaxOptions.delay&&null!=t.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(r,this.ajaxOptions.delay)):r()},n}),e.define("select2/data/tags",["jquery"],function(t){function e(e,i,n){var s=n.get("tags"),r=n.get("createTag");void 0!==r&&(this.createTag=r);var o=n.get("insertTag");if(void 0!==o&&(this.insertTag=o),e.call(this,i,n),t.isArray(s))for(var a=0;a<s.length;a++){var l=s[a],u=this._normalizeItem(l),c=this.option(u);this.$element.append(c)}}return e.prototype.query=function(t,e,i){var n=this;this._removeOldTags(),null!=e.term&&null==e.page?t.call(this,e,function t(s,r){for(var o=s.results,a=0;a<o.length;a++){var l=o[a],u=null!=l.children&&!t({results:l.children},!0);if((l.text||"").toUpperCase()===(e.term||"").toUpperCase()||u)return!r&&(s.data=o,void i(s))}if(r)return!0;var c=n.createTag(e);if(null!=c){var h=n.option(c);h.attr("data-select2-tag",!0),n.addOptions([h]),n.insertTag(o,c)}s.results=o,i(s)}):t.call(this,e,i)},e.prototype.createTag=function(e,i){var n=t.trim(i.term);return""===n?null:{id:n,text:n}},e.prototype.insertTag=function(t,e,i){e.unshift(i)},e.prototype._removeOldTags=function(e){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||t(this).remove()})},e}),e.define("select2/data/tokenizer",["jquery"],function(t){function e(t,e,i){var n=i.get("tokenizer");void 0!==n&&(this.tokenizer=n),t.call(this,e,i)}return e.prototype.bind=function(t,e,i){t.call(this,e,i),this.$search=e.dropdown.$search||e.selection.$search||i.find(".select2-search__field")},e.prototype.query=function(e,i,n){var s=this;i.term=i.term||"";var r=this.tokenizer(i,this.options,function(e){var i=s._normalizeItem(e);if(!s.$element.find("option").filter(function(){return t(this).val()===i.id}).length){var n=s.option(i);n.attr("data-select2-tag",!0),s._removeOldTags(),s.addOptions([n])}!function(t){s.trigger("select",{data:t})}(i)});r.term!==i.term&&(this.$search.length&&(this.$search.val(r.term),this.$search.focus()),i.term=r.term),e.call(this,i,n)},e.prototype.tokenizer=function(e,i,n,s){for(var r=n.get("tokenSeparators")||[],o=i.term,a=0,l=this.createTag||function(t){return{id:t.term,text:t.term}};a<o.length;){var u=o[a];if(-1!==t.inArray(u,r)){var c=o.substr(0,a),h=l(t.extend({},i,{term:c}));null!=h?(s(h),o=o.substr(a+1)||"",a=0):a++}else a++}return{term:o}},e}),e.define("select2/data/minimumInputLength",[],function(){function t(t,e,i){this.minimumInputLength=i.get("minimumInputLength"),t.call(this,e,i)}return t.prototype.query=function(t,e,i){e.term=e.term||"",e.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:e.term,params:e}}):t.call(this,e,i)},t}),e.define("select2/data/maximumInputLength",[],function(){function t(t,e,i){this.maximumInputLength=i.get("maximumInputLength"),t.call(this,e,i)}return t.prototype.query=function(t,e,i){e.term=e.term||"",this.maximumInputLength>0&&e.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:e.term,params:e}}):t.call(this,e,i)},t}),e.define("select2/data/maximumSelectionLength",[],function(){function t(t,e,i){this.maximumSelectionLength=i.get("maximumSelectionLength"),t.call(this,e,i)}return t.prototype.query=function(t,e,i){var n=this;this.current(function(s){var r=null!=s?s.length:0;n.maximumSelectionLength>0&&r>=n.maximumSelectionLength?n.trigger("results:message",{message:"maximumSelected",args:{maximum:n.maximumSelectionLength}}):t.call(n,e,i)})},t}),e.define("select2/dropdown",["jquery","./utils"],function(t,e){function i(t,e){this.$element=t,this.options=e,i.__super__.constructor.call(this)}return e.Extend(i,e.Observable),i.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e,e},i.prototype.bind=function(){},i.prototype.position=function(t,e){},i.prototype.destroy=function(){this.$dropdown.remove()},i}),e.define("select2/dropdown/search",["jquery","../utils"],function(t,e){function i(){}return i.prototype.render=function(e){var i=e.call(this),n=t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=n,this.$search=n.find("input"),i.prepend(n),i},i.prototype.bind=function(e,i,n){var s=this;e.call(this,i,n),this.$search.on("keydown",function(t){s.trigger("keypress",t),s._keyUpPrevented=t.isDefaultPrevented()}),this.$search.on("input",function(e){t(this).off("keyup")}),this.$search.on("keyup input",function(t){s.handleSearch(t)}),i.on("open",function(){s.$search.attr("tabindex",0),s.$search.focus(),window.setTimeout(function(){s.$search.focus()},0)}),i.on("close",function(){s.$search.attr("tabindex",-1),s.$search.val("")}),i.on("focus",function(){i.isOpen()||s.$search.focus()}),i.on("results:all",function(t){null!=t.query.term&&""!==t.query.term||(s.showSearch(t)?s.$searchContainer.removeClass("select2-search--hide"):s.$searchContainer.addClass("select2-search--hide"))})},i.prototype.handleSearch=function(t){if(!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},i.prototype.showSearch=function(t,e){return!0},i}),e.define("select2/dropdown/hidePlaceholder",[],function(){function t(t,e,i,n){this.placeholder=this.normalizePlaceholder(i.get("placeholder")),t.call(this,e,i,n)}return t.prototype.append=function(t,e){e.results=this.removePlaceholder(e.results),t.call(this,e)},t.prototype.normalizePlaceholder=function(t,e){return"string"==typeof e&&(e={id:"",text:e}),e},t.prototype.removePlaceholder=function(t,e){for(var i=e.slice(0),n=e.length-1;n>=0;n--){var s=e[n];this.placeholder.id===s.id&&i.splice(n,1)}return i},t}),e.define("select2/dropdown/infiniteScroll",["jquery"],function(t){function e(t,e,i,n){this.lastParams={},t.call(this,e,i,n),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(t,e){this.$loadingMore.remove(),this.loading=!1,t.call(this,e),this.showLoadingMore(e)&&this.$results.append(this.$loadingMore)},e.prototype.bind=function(e,i,n){var s=this;e.call(this,i,n),i.on("query",function(t){s.lastParams=t,s.loading=!0}),i.on("query:append",function(t){s.lastParams=t,s.loading=!0}),this.$results.on("scroll",function(){var e=t.contains(document.documentElement,s.$loadingMore[0]);!s.loading&&e&&(s.$results.offset().top+s.$results.outerHeight(!1)+50>=s.$loadingMore.offset().top+s.$loadingMore.outerHeight(!1)&&s.loadMore())})},e.prototype.loadMore=function(){this.loading=!0;var e=t.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(t,e){return e.pagination&&e.pagination.more},e.prototype.createLoadingMore=function(){var e=t('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),i=this.options.get("translations").get("loadingMore");return e.html(i(this.lastParams)),e},e}),e.define("select2/dropdown/attachBody",["jquery","../utils"],function(t,e){function i(e,i,n){this.$dropdownParent=n.get("dropdownParent")||t(document.body),e.call(this,i,n)}return i.prototype.bind=function(t,e,i){var n=this,s=!1;t.call(this,e,i),e.on("open",function(){n._showDropdown(),n._attachPositioningHandler(e),s||(s=!0,e.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),e.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}))}),e.on("close",function(){n._hideDropdown(),n._detachPositioningHandler(e)}),this.$dropdownContainer.on("mousedown",function(t){t.stopPropagation()})},i.prototype.destroy=function(t){t.call(this),this.$dropdownContainer.remove()},i.prototype.position=function(t,e,i){e.attr("class",i.attr("class")),e.removeClass("select2"),e.addClass("select2-container--open"),e.css({position:"absolute",top:-999999}),this.$container=i},i.prototype.render=function(e){var i=t("<span></span>"),n=e.call(this);return i.append(n),this.$dropdownContainer=i,i},i.prototype._hideDropdown=function(t){this.$dropdownContainer.detach()},i.prototype._attachPositioningHandler=function(i,n){var s=this,r="scroll.select2."+n.id,o="resize.select2."+n.id,a="orientationchange.select2."+n.id,l=this.$container.parents().filter(e.hasScroll);l.each(function(){t(this).data("select2-scroll-position",{x:t(this).scrollLeft(),y:t(this).scrollTop()})}),l.on(r,function(e){var i=t(this).data("select2-scroll-position");t(this).scrollTop(i.y)}),t(window).on(r+" "+o+" "+a,function(t){s._positionDropdown(),s._resizeDropdown()})},i.prototype._detachPositioningHandler=function(i,n){var s="scroll.select2."+n.id,r="resize.select2."+n.id,o="orientationchange.select2."+n.id;this.$container.parents().filter(e.hasScroll).off(s),t(window).off(s+" "+r+" "+o)},i.prototype._positionDropdown=function(){var e=t(window),i=this.$dropdown.hasClass("select2-dropdown--above"),n=this.$dropdown.hasClass("select2-dropdown--below"),s=null,r=this.$container.offset();r.bottom=r.top+this.$container.outerHeight(!1);var o={height:this.$container.outerHeight(!1)};o.top=r.top,o.bottom=r.top+o.height;var a=this.$dropdown.outerHeight(!1),l=e.scrollTop(),u=e.scrollTop()+e.height(),c=l<r.top-a,h=u>r.bottom+a,d={left:r.left,top:o.bottom},p=this.$dropdownParent;"static"===p.css("position")&&(p=p.offsetParent());var f=p.offset();d.top-=f.top,d.left-=f.left,i||n||(s="below"),h||!c||i?!c&&h&&i&&(s="below"):s="above",("above"==s||i&&"below"!==s)&&(d.top=o.top-f.top-a),null!=s&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+s),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+s)),this.$dropdownContainer.css(d)},i.prototype._resizeDropdown=function(){var t={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(t.minWidth=t.width,t.position="relative",t.width="auto"),this.$dropdown.css(t)},i.prototype._showDropdown=function(t){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},i}),e.define("select2/dropdown/minimumResultsForSearch",[],function(){function t(t,e,i,n){this.minimumResultsForSearch=i.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),t.call(this,e,i,n)}return t.prototype.showSearch=function(t,e){return!(function t(e){for(var i=0,n=0;n<e.length;n++){var s=e[n];s.children?i+=t(s.children):i++}return i}(e.data.results)<this.minimumResultsForSearch)&&t.call(this,e)},t}),e.define("select2/dropdown/selectOnClose",[],function(){function t(){}return t.prototype.bind=function(t,e,i){var n=this;t.call(this,e,i),e.on("close",function(t){n._handleSelectOnClose(t)})},t.prototype._handleSelectOnClose=function(t,e){if(e&&null!=e.originalSelect2Event){var i=e.originalSelect2Event;if("select"===i._type||"unselect"===i._type)return}var n=this.getHighlightedResults();if(!(n.length<1)){var s=n.data("data");null!=s.element&&s.element.selected||null==s.element&&s.selected||this.trigger("select",{data:s})}},t}),e.define("select2/dropdown/closeOnSelect",[],function(){function t(){}return t.prototype.bind=function(t,e,i){var n=this;t.call(this,e,i),e.on("select",function(t){n._selectTriggered(t)}),e.on("unselect",function(t){n._selectTriggered(t)})},t.prototype._selectTriggered=function(t,e){var i=e.originalEvent;i&&i.ctrlKey||this.trigger("close",{originalEvent:i,originalSelect2Event:e})},t}),e.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(t){var e=t.input.length-t.maximum,i="Please delete "+e+" character";return 1!=e&&(i+="s"),i},inputTooShort:function(t){return"Please enter "+(t.minimum-t.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(t){var e="You can only select "+t.maximum+" item";return 1!=t.maximum&&(e+="s"),e},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),e.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(t,e,i,n,s,r,o,a,l,u,c,h,d,p,f,g,m,v,_,y,b,w,x,C,k,T,D,S,A){function E(){this.reset()}return E.prototype.apply=function(h){if(null==(h=t.extend(!0,{},this.defaults,h)).dataAdapter){if(null!=h.ajax?h.dataAdapter=f:null!=h.data?h.dataAdapter=p:h.dataAdapter=d,h.minimumInputLength>0&&(h.dataAdapter=u.Decorate(h.dataAdapter,v)),h.maximumInputLength>0&&(h.dataAdapter=u.Decorate(h.dataAdapter,_)),h.maximumSelectionLength>0&&(h.dataAdapter=u.Decorate(h.dataAdapter,y)),h.tags&&(h.dataAdapter=u.Decorate(h.dataAdapter,g)),null==h.tokenSeparators&&null==h.tokenizer||(h.dataAdapter=u.Decorate(h.dataAdapter,m)),null!=h.query){var A=e(h.amdBase+"compat/query");h.dataAdapter=u.Decorate(h.dataAdapter,A)}if(null!=h.initSelection){var E=e(h.amdBase+"compat/initSelection");h.dataAdapter=u.Decorate(h.dataAdapter,E)}}if(null==h.resultsAdapter&&(h.resultsAdapter=i,null!=h.ajax&&(h.resultsAdapter=u.Decorate(h.resultsAdapter,C)),null!=h.placeholder&&(h.resultsAdapter=u.Decorate(h.resultsAdapter,x)),h.selectOnClose&&(h.resultsAdapter=u.Decorate(h.resultsAdapter,D))),null==h.dropdownAdapter){if(h.multiple)h.dropdownAdapter=b;else{var I=u.Decorate(b,w);h.dropdownAdapter=I}if(0!==h.minimumResultsForSearch&&(h.dropdownAdapter=u.Decorate(h.dropdownAdapter,T)),h.closeOnSelect&&(h.dropdownAdapter=u.Decorate(h.dropdownAdapter,S)),null!=h.dropdownCssClass||null!=h.dropdownCss||null!=h.adaptDropdownCssClass){var O=e(h.amdBase+"compat/dropdownCss");h.dropdownAdapter=u.Decorate(h.dropdownAdapter,O)}h.dropdownAdapter=u.Decorate(h.dropdownAdapter,k)}if(null==h.selectionAdapter){if(h.multiple?h.selectionAdapter=s:h.selectionAdapter=n,null!=h.placeholder&&(h.selectionAdapter=u.Decorate(h.selectionAdapter,r)),h.allowClear&&(h.selectionAdapter=u.Decorate(h.selectionAdapter,o)),h.multiple&&(h.selectionAdapter=u.Decorate(h.selectionAdapter,a)),null!=h.containerCssClass||null!=h.containerCss||null!=h.adaptContainerCssClass){var $=e(h.amdBase+"compat/containerCss");h.selectionAdapter=u.Decorate(h.selectionAdapter,$)}h.selectionAdapter=u.Decorate(h.selectionAdapter,l)}if("string"==typeof h.language)if(h.language.indexOf("-")>0){var P=h.language.split("-")[0];h.language=[h.language,P]}else h.language=[h.language];if(t.isArray(h.language)){var N=new c;h.language.push("en");for(var M=h.language,j=0;j<M.length;j++){var H=M[j],R={};try{R=c.loadPath(H)}catch(t){try{H=this.defaults.amdLanguageBase+H,R=c.loadPath(H)}catch(t){h.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+H+'" could not be automatically loaded. A fallback will be used instead.');continue}}N.extend(R)}h.translations=N}else{var L=c.loadPath(this.defaults.amdLanguageBase+"en"),F=new c(h.language);F.extend(L),h.translations=F}return h},E.prototype.reset=function(){function e(t){return t.replace(/[^\u0000-\u007E]/g,function(t){return h[t]||t})}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:u.escapeMarkup,language:A,matcher:function i(n,s){if(""===t.trim(n.term))return s;if(s.children&&s.children.length>0){for(var r=t.extend(!0,{},s),o=s.children.length-1;o>=0;o--)null==i(n,s.children[o])&&r.children.splice(o,1);return r.children.length>0?r:i(n,r)}var a=e(s.text).toUpperCase(),l=e(n.term).toUpperCase();return a.indexOf(l)>-1?s:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(t){return t},templateResult:function(t){return t.text},templateSelection:function(t){return t.text},theme:"default",width:"resolve"}},E.prototype.set=function(e,i){var n={};n[t.camelCase(e)]=i;var s=u._convertData(n);t.extend(this.defaults,s)},new E}),e.define("select2/options",["require","jquery","./defaults","./utils"],function(t,e,i,n){function s(e,s){if(this.options=e,null!=s&&this.fromElement(s),this.options=i.apply(this.options),s&&s.is("input")){var r=t(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=n.Decorate(this.options.dataAdapter,r)}}return s.prototype.fromElement=function(t){var i=["select2"];null==this.options.multiple&&(this.options.multiple=t.prop("multiple")),null==this.options.disabled&&(this.options.disabled=t.prop("disabled")),null==this.options.language&&(t.prop("lang")?this.options.language=t.prop("lang").toLowerCase():t.closest("[lang]").prop("lang")&&(this.options.language=t.closest("[lang]").prop("lang"))),null==this.options.dir&&(t.prop("dir")?this.options.dir=t.prop("dir"):t.closest("[dir]").prop("dir")?this.options.dir=t.closest("[dir]").prop("dir"):this.options.dir="ltr"),t.prop("disabled",this.options.disabled),t.prop("multiple",this.options.multiple),t.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),t.data("data",t.data("select2Tags")),t.data("tags",!0)),t.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),t.attr("ajax--url",t.data("ajaxUrl")),t.data("ajax--url",t.data("ajaxUrl")));var s={};s=e.fn.jquery&&"1."==e.fn.jquery.substr(0,2)&&t[0].dataset?e.extend(!0,{},t[0].dataset,t.data()):t.data();var r=e.extend(!0,{},s);for(var o in r=n._convertData(r))e.inArray(o,i)>-1||(e.isPlainObject(this.options[o])?e.extend(this.options[o],r[o]):this.options[o]=r[o]);return this},s.prototype.get=function(t){return this.options[t]},s.prototype.set=function(t,e){this.options[t]=e},s}),e.define("select2/core",["jquery","./options","./utils","./keys"],function(t,e,i,n){var s=function(t,i){null!=t.data("select2")&&t.data("select2").destroy(),this.$element=t,this.id=this._generateId(t),i=i||{},this.options=new e(i,t),s.__super__.constructor.call(this);var n=t.attr("tabindex")||0;t.data("old-tabindex",n),t.attr("tabindex","-1");var r=this.options.get("dataAdapter");this.dataAdapter=new r(t,this.options);var o=this.render();this._placeContainer(o);var a=this.options.get("selectionAdapter");this.selection=new a(t,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,o);var l=this.options.get("dropdownAdapter");this.dropdown=new l(t,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,o);var u=this.options.get("resultsAdapter");this.results=new u(t,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var c=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(t){c.trigger("selection:update",{data:t})}),t.addClass("select2-hidden-accessible"),t.attr("aria-hidden","true"),this._syncAttributes(),t.data("select2",this)};return i.Extend(s,i.Observable),s.prototype._generateId=function(t){return"select2-"+(null!=t.attr("id")?t.attr("id"):null!=t.attr("name")?t.attr("name")+"-"+i.generateChars(2):i.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},s.prototype._placeContainer=function(t){t.insertAfter(this.$element);var e=this._resolveWidth(this.$element,this.options.get("width"));null!=e&&t.css("width",e)},s.prototype._resolveWidth=function(t,e){var i=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==e){var n=this._resolveWidth(t,"style");return null!=n?n:this._resolveWidth(t,"element")}if("element"==e){var s=t.outerWidth(!1);return s<=0?"auto":s+"px"}if("style"==e){var r=t.attr("style");if("string"!=typeof r)return null;for(var o=r.split(";"),a=0,l=o.length;a<l;a+=1){var u=o[a].replace(/\s/g,"").match(i);if(null!==u&&u.length>=1)return u[1]}return null}return e},s.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},s.prototype._registerDomEvents=function(){var e=this;this.$element.on("change.select2",function(){e.dataAdapter.current(function(t){e.trigger("selection:update",{data:t})})}),this.$element.on("focus.select2",function(t){e.trigger("focus",t)}),this._syncA=i.bind(this._syncAttributes,this),this._syncS=i.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var n=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=n?(this._observer=new n(function(i){t.each(i,e._syncA),t.each(i,e._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",e._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",e._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",e._syncS,!1))},s.prototype._registerDataEvents=function(){var t=this;this.dataAdapter.on("*",function(e,i){t.trigger(e,i)})},s.prototype._registerSelectionEvents=function(){var e=this,i=["toggle","focus"];this.selection.on("toggle",function(){e.toggleDropdown()}),this.selection.on("focus",function(t){e.focus(t)}),this.selection.on("*",function(n,s){-1===t.inArray(n,i)&&e.trigger(n,s)})},s.prototype._registerDropdownEvents=function(){var t=this;this.dropdown.on("*",function(e,i){t.trigger(e,i)})},s.prototype._registerResultsEvents=function(){var t=this;this.results.on("*",function(e,i){t.trigger(e,i)})},s.prototype._registerEvents=function(){var t=this;this.on("open",function(){t.$container.addClass("select2-container--open")}),this.on("close",function(){t.$container.removeClass("select2-container--open")}),this.on("enable",function(){t.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){t.$container.addClass("select2-container--disabled")}),this.on("blur",function(){t.$container.removeClass("select2-container--focus")}),this.on("query",function(e){t.isOpen()||t.trigger("open",{}),this.dataAdapter.query(e,function(i){t.trigger("results:all",{data:i,query:e})})}),this.on("query:append",function(e){this.dataAdapter.query(e,function(i){t.trigger("results:append",{data:i,query:e})})}),this.on("keypress",function(e){var i=e.which;t.isOpen()?i===n.ESC||i===n.TAB||i===n.UP&&e.altKey?(t.close(),e.preventDefault()):i===n.ENTER?(t.trigger("results:select",{}),e.preventDefault()):i===n.SPACE&&e.ctrlKey?(t.trigger("results:toggle",{}),e.preventDefault()):i===n.UP?(t.trigger("results:previous",{}),e.preventDefault()):i===n.DOWN&&(t.trigger("results:next",{}),e.preventDefault()):(i===n.ENTER||i===n.SPACE||i===n.DOWN&&e.altKey)&&(t.open(),e.preventDefault())})},s.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},s.prototype._syncSubtree=function(t,e){var i=!1,n=this;if(!t||!t.target||"OPTION"===t.target.nodeName||"OPTGROUP"===t.target.nodeName){if(e)if(e.addedNodes&&e.addedNodes.length>0)for(var s=0;s<e.addedNodes.length;s++){e.addedNodes[s].selected&&(i=!0)}else e.removedNodes&&e.removedNodes.length>0&&(i=!0);else i=!0;i&&this.dataAdapter.current(function(t){n.trigger("selection:update",{data:t})})}},s.prototype.trigger=function(t,e){var i=s.__super__.trigger,n={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===e&&(e={}),t in n){var r=n[t],o={prevented:!1,name:t,args:e};if(i.call(this,r,o),o.prevented)return void(e.prevented=!0)}i.call(this,t,e)},s.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},s.prototype.open=function(){this.isOpen()||this.trigger("query",{})},s.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},s.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},s.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},s.prototype.focus=function(t){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},s.prototype.enable=function(t){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=t&&0!==t.length||(t=[!0]);var e=!t[0];this.$element.prop("disabled",e)},s.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},s.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();var i=e[0];t.isArray(i)&&(i=t.map(i,function(t){return t.toString()})),this.$element.val(i).trigger("change")},s.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},s.prototype.render=function(){var e=t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container.addClass("select2-container--"+this.options.get("theme")),e.data("element",this.$element),e},s}),e.define("jquery-mousewheel",["jquery"],function(t){return t}),e.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(t,e,i,n){if(null==t.fn.select2){var s=["open","close","destroy"];t.fn.select2=function(e){if("object"==typeof(e=e||{}))return this.each(function(){var n=t.extend(!0,{},e);new i(t(this),n)}),this;if("string"==typeof e){var n,r=Array.prototype.slice.call(arguments,1);return this.each(function(){var i=t(this).data("select2");null==i&&window.console&&console.error&&console.error("The select2('"+e+"') method was called on an element that is not using Select2."),n=i[e].apply(i,r)}),t.inArray(e,s)>-1?this:n}throw new Error("Invalid arguments for Select2: "+e)}}return null==t.fn.select2.defaults&&(t.fn.select2.defaults=n),i}),{define:e.define,require:e.require}}(),i=e.require("jquery.select2");return t.fn.select2.amd=e,i},s=[i("7t+N")],void 0===(r="function"==typeof(n=o)?n.apply(e,s):n)||(t.exports=r)},l9CE:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["file","customFields"],data:function(){return{activeFile:this.file,processDetail:!1,statusText:null,statusType:null,options:{importType:this.file.import_type,update:!1,importTypes:[{id:"asset",text:"Assets"},{id:"accessory",text:"Accessories"},{id:"consumable",text:"Consumables"},{id:"component",text:"Components"},{id:"license",text:"Licenses"},{id:"user",text:"Users"}],statusText:null},columnOptions:{general:[{id:"category",text:"Category"},{id:"company",text:"Company"},{id:"checkout_to",text:"Checked out to"},{id:"email",text:"Email"},{id:"item_name",text:"Item Name"},{id:"location",text:"Location"},{id:"maintained",text:"Maintained"},{id:"manufacturer",text:"Manufacturer"},{id:"notes",text:"Notes"},{id:"order_number",text:"Order Number"},{id:"purchase_cost",text:"Purchase Cost"},{id:"purchase_date",text:"Purchase Date"},{id:"quantity",text:"Quantity"},{id:"requestable",text:"Requestable"},{id:"serial",text:"Serial Number"},{id:"supplier",text:"Supplier"},{id:"username",text:"Username"},{id:"department",text:"Department"}],assets:[{id:"asset_tag",text:"Asset Tag"},{id:"asset_model",text:"Model Name"},{id:"checkout_class",text:"Checkout Type"},{id:"checkout_location",text:"Checkout Location"},{id:"image",text:"Image Filename"},{id:"model_number",text:"Model Number"},{id:"full_name",text:"Full Name"},{id:"status",text:"Status"},{id:"warranty_months",text:"Warranty Months"}],consumables:[{id:"item_no",text:"Item Number"},{id:"model_number",text:"Model Number"}],licenses:[{id:"expiration_date",text:"Expiration Date"},{id:"license_email",text:"Licensed To Email"},{id:"license_name",text:"Licensed To Name"},{id:"purchase_order",text:"Purchase Order"},{id:"reassignable",text:"Reassignable"},{id:"seats",text:"Seats"}],users:[{id:"employee_num",text:"Employee Number"},{id:"first_name",text:"First Name"},{id:"jobtitle",text:"Job Title"},{id:"last_name",text:"Last Name"},{id:"phone_number",text:"Phone Number"},{id:"manager_first_name",text:"Manager First Name"},{id:"manager_last_name",text:"Manager Last Name"},{id:"activated",text:"Activated"}],customFields:this.customFields},columnMappings:this.file.field_map||{},activeColumn:null}},created:function(){window.eventHub.$on("showDetails",this.toggleExtendedDisplay),this.populateSelect2ActiveItems()},computed:{columns:function(){function t(t,e){return t.text<e.text?-1:t.text>e.text?1:0}switch(this.options.importType){case"asset":return this.columnOptions.general.concat(this.columnOptions.assets).concat(this.columnOptions.customFields).sort(t);case"consumable":return this.columnOptions.general.concat(this.columnOptions.consumables).sort(t);case"license":return this.columnOptions.general.concat(this.columnOptions.licenses).sort(t);case"user":return this.columnOptions.general.concat(this.columnOptions.users).sort(t)}return this.columnOptions.general},alertClass:function(){return"success"==this.statusType?"alert-success":"error"==this.statusType?"alert-danger":"alert-info"}},watch:{columns:function(){this.populateSelect2ActiveItems()}},methods:{postSave:function(){var t=this;if(console.log("saving"),console.log(this.options.importType),!this.options.importType)return this.statusType="error",void(this.statusText="An import type is required... ");this.statusType="pending",this.statusText="Processing...",this.$http.post(route("api.imports.importFile",this.file.id),{"import-update":this.options.update,"send-welcome":this.options.send_welcome,"import-type":this.options.importType,"column-mappings":this.columnMappings}).then(function(e){var i=e.body;t.statusType="success",t.statusText="Success... Redirecting.",window.location.href=i.messages.redirect_url},function(e){var i=e.body;"import-errors"==i.status?(window.eventHub.$emit("importErrors",i.messages),t.statusType="error",t.statusText="Error"):t.$emit("alert",{message:i.messages,type:"danger",visible:!0}),t.displayImportModal=!1})},populateSelect2ActiveItems:function(){if(null==this.file.field_map){for(var t=0;t<this.file.header_row.length;t++)this.$set(this.columnMappings,this.file.header_row[t],null);for(var e=0;e<this.columns.length;e++){var i=this.columns[e],n=this.file.header_row.map(function(t){return t.toLowerCase()}).indexOf(i.text.toLowerCase());-1!=n&&this.$set(this.columnMappings,this.file.header_row[n],i.id)}}},toggleExtendedDisplay:function(t){t==this.file.id&&(this.processDetail=!this.processDetail)},updateModel:function(t,e){this.columnMappings[t]=e}},components:{select2:i("YDmc")}}},lAxH:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default={props:["tokenUrl","scopesUrl"],data:function(){return{accessToken:null,tokens:[],scopes:[],form:{name:"",scopes:[],errors:[]}}},ready:function(){this.prepareComponent()},mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getTokens(),this.getScopes(),$("#modal-create-token").on("shown.bs.modal",function(){$("#create-token-name").focus()})},getTokens:function(){var t=this;this.$http.get(this.tokenUrl).then(function(e){t.tokens=e.data})},getScopes:function(){var t=this;this.$http.get(this.scopesUrl).then(function(e){t.scopes=e.data})},showCreateTokenForm:function(){$("#modal-create-token").modal("show")},store:function(){var t=this;this.accessToken=null,this.form.errors=[],this.$http.post(this.tokenUrl,this.form).then(function(e){t.form.name="",t.form.scopes=[],t.form.errors=[],t.tokens.push(e.data.token),t.showAccessToken(e.data.accessToken)}).catch(function(e){"object"===n(e.data)?t.form.errors=_.flatten(_.toArray(e.data)):(console.dir(t.form),t.form.errors=["Something went wrong. Please try again."])})},toggleScope:function(t){this.scopeIsAssigned(t)?this.form.scopes=_.reject(this.form.scopes,function(e){return e==t}):this.form.scopes.push(t)},scopeIsAssigned:function(t){return _.indexOf(this.form.scopes,t)>=0},showAccessToken:function(t){$("#modal-create-token").modal("hide"),this.accessToken=t,$("#modal-access-token").modal("show")},revoke:function(t){var e=this;this.$http.delete(this.tokenUrl+"/"+t.id).then(function(t){e.getTokens()})}}}},"mki+":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".action-link[data-v-174a7226]{cursor:pointer}.m-b-none[data-v-174a7226]{margin-bottom:0}",""])},niYt:function(t,e,i){var n=i("2XQS");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("114534d6",n,!0,{})},ooDj:function(t,e,i){var n=i("VU/8")(i("20cu"),i("ym9G"),!1,function(t){i("s+xJ")},"data-v-500e149a",null);t.exports=n.exports},rjj0:function(t,e,i){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=i("tTVk"),r={},o=n&&(document.head||document.getElementsByTagName("head")[0]),a=null,l=0,u=!1,c=function(){},h=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t){for(var e=0;e<t.length;e++){var i=t[e],n=r[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(m(i.parts[s]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{var o=[];for(s=0;s<i.parts.length;s++)o.push(m(i.parts[s]));r[i.id]={id:i.id,refs:1,parts:o}}}}function g(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function m(t){var e,i,n=document.querySelector("style["+d+'~="'+t.id+'"]');if(n){if(u)return c;n.parentNode.removeChild(n)}if(p){var s=l++;n=a||(a=g()),e=y.bind(null,n,s,!1),i=y.bind(null,n,s,!0)}else n=g(),e=function(t,e){var i=e.css,n=e.media,s=e.sourceMap;n&&t.setAttribute("media",n);h.ssrId&&t.setAttribute(d,e.id);s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}t.exports=function(t,e,i,n){u=i,h=n||{};var o=s(t,e);return f(o),function(e){for(var i=[],n=0;n<o.length;n++){var a=o[n];(l=r[a.id]).refs--,i.push(l)}e?f(o=s(t,e)):o=[];for(n=0;n<i.length;n++){var l;if(0===(l=i[n]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete r[l.id]}}}};var v,_=(v=[],function(t,e){return v[t]=e,v.filter(Boolean).join("\n")});function y(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=_(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}},"s+xJ":function(t,e,i){var n=i("ODCm");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("15a99b3e",n,!0,{})},sJcK:function(t,e,i){var n=i("VU/8")(i("l9CE"),i("Sh4Y"),!1,function(t){i("thhx")},null,null);t.exports=n.exports},tTVk:function(t,e){t.exports=function(t,e){for(var i=[],n={},s=0;s<e.length;s++){var r=e[s],o=r[0],a={id:t+":"+s,css:r[1],media:r[2],sourceMap:r[3]};n[o]?n[o].parts.push(a):i.push(n[o]={id:o,parts:[a]})}return i}},thhx:function(t,e,i){var n=i("d8IG");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("4b3e80d8",n,!0,{})},"tt0+":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".action-link[data-v-50a31472]{cursor:pointer}.m-b-none[data-v-50a31472]{margin-bottom:0}",""])},yDVJ:function(t,e,i){var n=i("VU/8")(i("zJOD"),i("5Onq"),!1,function(t){i("ImC/")},"data-v-d5daaf60",null);t.exports=n.exports},ym9G:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.tokens.length>0?i("div",[i("div",{staticClass:"panel panel-default"},[i("div",{staticClass:"panel-heading"},[t._v("Authorized Applications")]),t._v(" "),i("div",{staticClass:"panel-body"},[i("table",{staticClass:"table table-borderless m-b-none"},[t._m(0),t._v(" "),i("tbody",t._l(t.tokens,function(e){return i("tr",[i("td",{staticStyle:{"vertical-align":"middle"}},[t._v("\n                                "+t._s(e.client.name)+"\n                            ")]),t._v(" "),i("td",{staticStyle:{"vertical-align":"middle"}},[e.scopes.length>0?i("span",[t._v("\n                                    "+t._s(e.scopes.join(", "))+"\n                                ")]):t._e()]),t._v(" "),i("td",{staticStyle:{"vertical-align":"middle"}},[i("a",{staticClass:"action-link text-danger",on:{click:function(i){t.revoke(e)}}},[t._v("\n                                    Revoke\n                                ")])])])}))])])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Scopes")]),this._v(" "),e("th")])])}]}},z1kw:function(t,e,i){var n,s,r,o;o=function(t){var e,i=0,n=Array.prototype.slice;return t.cleanData=(e=t.cleanData,function(i){var n,s,r;for(r=0;null!=(s=i[r]);r++)try{(n=t._data(s,"events"))&&n.remove&&t(s).triggerHandler("remove")}catch(t){}e(i)}),t.widget=function(e,i,n){var s,r,o,a={},l=e.split(".")[0],u=l+"-"+(e=e.split(".")[1]);return n||(n=i,i=t.Widget),t.isArray(n)&&(n=t.extend.apply(null,[{}].concat(n))),t.expr[":"][u.toLowerCase()]=function(e){return!!t.data(e,u)},t[l]=t[l]||{},s=t[l][e],r=t[l][e]=function(t,e){if(!this._createWidget)return new r(t,e);arguments.length&&this._createWidget(t,e)},t.extend(r,s,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),(o=new i).options=t.widget.extend({},o.options),t.each(n,function(e,n){t.isFunction(n)?a[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,r=this._superApply;return this._super=t,this._superApply=s,e=n.apply(this,arguments),this._super=i,this._superApply=r,e}}():a[e]=n}),r.prototype=t.widget.extend(o,{widgetEventPrefix:s&&o.widgetEventPrefix||e},a,{constructor:r,namespace:l,widgetName:e,widgetFullName:u}),s?(t.each(s._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,r,i._proto)}),delete s._childConstructors):i._childConstructors.push(r),t.widget.bridge(e,r),r},t.widget.extend=function(e){for(var i,s,r=n.call(arguments,1),o=0,a=r.length;o<a;o++)for(i in r[o])s=r[o][i],r[o].hasOwnProperty(i)&&void 0!==s&&(t.isPlainObject(s)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):e[i]=s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(r){var o="string"==typeof r,a=n.call(arguments,1),l=this;return o?this.length||"instance"!==r?this.each(function(){var i,n=t.data(this,s);return"instance"===r?(l=n,!1):n?t.isFunction(n[r])&&"_"!==r.charAt(0)?(i=n[r].apply(n,a))!==n&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0:t.error("no such method '"+r+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+r+"'")}):l=void 0:(a.length&&(r=t.widget.extend.apply(null,[r].concat(a))),this.each(function(){var e=t.data(this,s);e?(e.option(r||{}),e._init&&e._init()):t.data(this,s,new i(r,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var n,s,r,o=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(o={},e=(n=e.split(".")).shift(),n.length){for(s=o[e]=t.widget.extend({},this.options[e]),r=0;r<n.length-1;r++)s[n[r]]=s[n[r]]||{},s=s[n[r]];if(e=n.pop(),1===arguments.length)return void 0===s[e]?null:s[e];s[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];o[e]=i}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,n,s;for(i in e)s=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&s&&s.length&&(n=t(s.get()),this._removeClass(s,i),n.addClass(this._classes({element:n,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var i=[],n=this;function s(s,r){var o,a;for(a=0;a<s.length;a++)o=n.classesElementLookup[s[a]]||t(),o=e.add?t(t.unique(o.get().concat(e.element.get()))):t(o.not(e.element).get()),n.classesElementLookup[s[a]]=o,i.push(s[a]),r&&e.classes[s[a]]&&i.push(e.classes[s[a]])}return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&s(e.keys.match(/\S+/g)||[],!0),e.extra&&s(e.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(n,s){-1!==t.inArray(e.target,s)&&(i.classesElementLookup[n]=t(s.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){n="boolean"==typeof n?n:i;var s="string"==typeof t||null===t,r={extra:s?e:i,keys:s?t:e,element:s?this.element:t,add:n};return r.element.toggleClass(this._classes(r),n),this},_on:function(e,i,n){var s,r=this;"boolean"!=typeof e&&(n=i,i=e,e=!1),n?(i=s=t(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,s=this.widget()),t.each(n,function(n,o){function a(){if(e||!0!==r.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof o?r[o]:o).apply(r,arguments)}"string"!=typeof o&&(a.guid=o.guid=o.guid||a.guid||t.guid++);var l=n.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?s.on(u,c,a):i.on(u,a)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,n){var s,r,o=this.options[e];if(n=n||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],r=i.originalEvent)for(s in r)s in i||(i[s]=r[s]);return this.element.trigger(i,n),!(t.isFunction(o)&&!1===o.apply(this.element[0],[i].concat(n))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,s,r){var o;"string"==typeof s&&(s={effect:s});var a=s?!0===s||"number"==typeof s?i:s.effect||i:e;"number"==typeof(s=s||{})&&(s={duration:s}),o=!t.isEmptyObject(s),s.complete=r,s.delay&&n.delay(s.delay),o&&t.effects&&t.effects.effect[a]?n[e](s):a!==e&&n[a]?n[a](s.duration,s.easing,r):n.queue(function(i){t(this)[e](),r&&r.call(n[0]),i()})}}),t.widget},s=[i("7t+N"),i("UZ9c")],void 0===(r="function"==typeof(n=o)?n.apply(e,s):n)||(t.exports=r)},zJOD:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["errors"]}}});
//# sourceMappingURL=vue.js.map
!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.Tether=e()}(this,function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){var o=t.getBoundingClientRect(),i={};for(var n in o)i[n]=o[n];if(t.ownerDocument!==document){var r=t.ownerDocument.defaultView.frameElement;if(r){var s=e(r);i.top+=s.top,i.bottom+=s.top,i.left+=s.left,i.right+=s.left}}return i}function o(t){var e=getComputedStyle(t)||{},o=e.position,i=[];if("fixed"===o)return[t];for(var n=t;(n=n.parentNode)&&n&&1===n.nodeType;){var r=void 0;try{r=getComputedStyle(n)}catch(s){}if("undefined"==typeof r||null===r)return i.push(n),i;var a=r,f=a.overflow,l=a.overflowX,h=a.overflowY;/(auto|scroll|overlay)/.test(f+h+l)&&("absolute"!==o||["relative","absolute","fixed"].indexOf(r.position)>=0)&&i.push(n)}return i.push(t.ownerDocument.body),t.ownerDocument!==document&&i.push(t.ownerDocument.defaultView),i}function i(){O&&document.body.removeChild(O),O=null}function n(t){var o=void 0;t===document?(o=document,t=document.documentElement):o=t.ownerDocument;var i=o.documentElement,n=e(t),r=A();return n.top-=r.top,n.left-=r.left,"undefined"==typeof n.width&&(n.width=document.body.scrollWidth-n.left-n.right),"undefined"==typeof n.height&&(n.height=document.body.scrollHeight-n.top-n.bottom),n.top=n.top-i.clientTop,n.left=n.left-i.clientLeft,n.right=o.body.clientWidth-n.width-n.left,n.bottom=o.body.clientHeight-n.height-n.top,n}function r(t){return t.offsetParent||document.documentElement}function s(){if(T)return T;var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");a(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var o=t.offsetWidth;e.style.overflow="scroll";var i=t.offsetWidth;o===i&&(i=e.clientWidth),document.body.removeChild(e);var n=o-i;return T={width:n,height:n}}function a(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=[];return Array.prototype.push.apply(e,arguments),e.slice(1).forEach(function(e){if(e)for(var o in e)({}).hasOwnProperty.call(e,o)&&(t[o]=e[o])}),t}function f(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.remove(e)});else{var o=new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi"),i=d(t).replace(o," ");p(t,i)}}function l(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.add(e)});else{f(t,e);var o=d(t)+(" "+e);p(t,o)}}function h(t,e){if("undefined"!=typeof t.classList)return t.classList.contains(e);var o=d(t);return new RegExp("(^| )"+e+"( |$)","gi").test(o)}function d(t){return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString?t.className.baseVal:t.className}function p(t,e){t.setAttribute("class",e)}function u(t,e,o){o.forEach(function(o){e.indexOf(o)===-1&&h(t,o)&&f(t,o)}),e.forEach(function(e){h(t,e)||l(t,e)})}function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function g(t,e){var o=arguments.length<=2||void 0===arguments[2]?1:arguments[2];return t+o>=e&&e>=t-o}function m(){return"object"==typeof performance&&"function"==typeof performance.now?performance.now():+new Date}function v(){for(var t={top:0,left:0},e=arguments.length,o=Array(e),i=0;i<e;i++)o[i]=arguments[i];return o.forEach(function(e){var o=e.top,i=e.left;"string"==typeof o&&(o=parseFloat(o,10)),"string"==typeof i&&(i=parseFloat(i,10)),t.top+=o,t.left+=i}),t}function y(t,e){return"string"==typeof t.left&&t.left.indexOf("%")!==-1&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&t.top.indexOf("%")!==-1&&(t.top=parseFloat(t.top,10)/100*e.height),t}function b(t,e){return"scrollParent"===e?e=t.scrollParents[0]:"window"===e&&(e=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),e===document&&(e=e.documentElement),"undefined"!=typeof e.nodeType&&!function(){var t=e,o=n(e),i=o,r=getComputedStyle(e);if(e=[i.left,i.top,o.width+i.left,o.height+i.top],t.ownerDocument!==document){var s=t.ownerDocument.defaultView;e[0]+=s.pageXOffset,e[1]+=s.pageYOffset,e[2]+=s.pageXOffset,e[3]+=s.pageYOffset}I.forEach(function(t,o){t=t[0].toUpperCase()+t.substr(1),"Top"===t||"Left"===t?e[o]+=parseFloat(r["border"+t+"Width"]):e[o]-=parseFloat(r["border"+t+"Width"])})}(),e}var w=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),C=void 0;"undefined"==typeof C&&(C={modules:[]});var O=null,E=function(){var t=0;return function(){return++t}}(),x={},A=function(){var t=O;t&&document.body.contains(t)||(t=document.createElement("div"),t.setAttribute("data-tether-id",E()),a(t.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(t),O=t);var o=t.getAttribute("data-tether-id");return"undefined"==typeof x[o]&&(x[o]=e(t),P(function(){delete x[o]})),x[o]},T=null,S=[],P=function(t){S.push(t)},M=function(){for(var t=void 0;t=S.pop();)t()},W=function(){function e(){t(this,e)}return w(e,[{key:"on",value:function(t,e,o){var i=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];"undefined"==typeof this.bindings&&(this.bindings={}),"undefined"==typeof this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:i})}},{key:"once",value:function(t,e,o){this.on(t,e,o,!0)}},{key:"off",value:function(t,e){if("undefined"!=typeof this.bindings&&"undefined"!=typeof this.bindings[t])if("undefined"==typeof e)delete this.bindings[t];else for(var o=0;o<this.bindings[t].length;)this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):++o}},{key:"trigger",value:function(t){if("undefined"!=typeof this.bindings&&this.bindings[t]){for(var e=0,o=arguments.length,i=Array(o>1?o-1:0),n=1;n<o;n++)i[n-1]=arguments[n];for(;e<this.bindings[t].length;){var r=this.bindings[t][e],s=r.handler,a=r.ctx,f=r.once,l=a;"undefined"==typeof l&&(l=this),s.apply(l,i),f?this.bindings[t].splice(e,1):++e}}}}]),e}();C.Utils={getActualBoundingClientRect:e,getScrollParents:o,getBounds:n,getOffsetParent:r,extend:a,addClass:l,removeClass:f,hasClass:h,updateClasses:u,defer:P,flush:M,uniqueId:E,Evented:W,getScrollBarSize:s,removeUtilElements:i};var k=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),w=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),_=function(t,e,o){for(var i=!0;i;){var n=t,r=e,s=o;i=!1,null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,r);if(void 0!==a){if("value"in a)return a.value;var f=a.get;if(void 0===f)return;return f.call(s)}var l=Object.getPrototypeOf(n);if(null===l)return;t=l,e=r,o=s,i=!0,a=l=void 0}};if("undefined"==typeof C)throw new Error("You must include the utils.js file before tether.js");var B=C.Utils,o=B.getScrollParents,n=B.getBounds,r=B.getOffsetParent,a=B.extend,l=B.addClass,f=B.removeClass,u=B.updateClasses,P=B.defer,M=B.flush,s=B.getScrollBarSize,i=B.removeUtilElements,j=function(){if("undefined"==typeof document)return"";for(var t=document.createElement("div"),e=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],o=0;o<e.length;++o){var i=e[o];if(void 0!==t.style[i])return i}}(),z=[],Y=function(){z.forEach(function(t){t.position(!1)}),M()};!function(){var t=null,e=null,o=null,i=function n(){return"undefined"!=typeof e&&e>16?(e=Math.min(e-16,250),void(o=setTimeout(n,250))):void("undefined"!=typeof t&&m()-t<10||(null!=o&&(clearTimeout(o),o=null),t=m(),Y(),e=m()-t))};"undefined"!=typeof window&&"undefined"!=typeof window.addEventListener&&["resize","scroll","touchmove"].forEach(function(t){window.addEventListener(t,i)})}();var L={center:"center",left:"right",right:"left"},D={middle:"middle",top:"bottom",bottom:"top"},X={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},F=function(t,e){var o=t.left,i=t.top;return"auto"===o&&(o=L[e.left]),"auto"===i&&(i=D[e.top]),{left:o,top:i}},H=function(t){var e=t.left,o=t.top;return"undefined"!=typeof X[t.left]&&(e=X[t.left]),"undefined"!=typeof X[t.top]&&(o=X[t.top]),{left:e,top:o}},N=function(t){var e=t.split(" "),o=k(e,2),i=o[0],n=o[1];return{top:i,left:n}},U=N,V=function(e){function h(e){var o=this;t(this,h),_(Object.getPrototypeOf(h.prototype),"constructor",this).call(this),this.position=this.position.bind(this),z.push(this),this.history=[],this.setOptions(e,!1),C.modules.forEach(function(t){"undefined"!=typeof t.initialize&&t.initialize.call(o)}),this.position()}return c(h,e),w(h,[{key:"getClass",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=this.options.classes;return"undefined"!=typeof e&&e[t]?this.options.classes[t]:this.options.classPrefix?this.options.classPrefix+"-"+t:t}},{key:"setOptions",value:function(t){var e=this,i=arguments.length<=1||void 0===arguments[1]||arguments[1],n={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=a(n,t);var r=this.options,s=r.element,f=r.target,h=r.targetModifier;if(this.element=s,this.target=f,this.targetModifier=h,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(t){if("undefined"==typeof e[t])throw new Error("Tether Error: Both element and target must be defined");"undefined"!=typeof e[t].jquery?e[t]=e[t][0]:"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),l(this.element,this.getClass("element")),this.options.addTargetClasses!==!1&&l(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=U(this.options.targetAttachment),this.attachment=U(this.options.attachment),this.offset=N(this.options.offset),this.targetOffset=N(this.options.targetOffset),"undefined"!=typeof this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=o(this.target),this.options.enabled!==!1&&this.enable(i)}},{key:"getTargetBounds",value:function(){if("undefined"==typeof this.targetModifier)return n(this.target);if("visible"===this.targetModifier){if(this.target===document.body)return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth};var t=n(this.target),e={height:t.height,width:t.width,top:t.top,left:t.left};return e.height=Math.min(e.height,t.height-(pageYOffset-t.top)),e.height=Math.min(e.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),e.height=Math.min(innerHeight,e.height),e.height-=2,e.width=Math.min(e.width,t.width-(pageXOffset-t.left)),e.width=Math.min(e.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),e.width=Math.min(innerWidth,e.width),e.width-=2,e.top<pageYOffset&&(e.top=pageYOffset),e.left<pageXOffset&&(e.left=pageXOffset),e}if("scroll-handle"===this.targetModifier){var t=void 0,o=this.target;o===document.body?(o=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=n(o);var i=getComputedStyle(o),r=o.scrollWidth>o.clientWidth||[i.overflow,i.overflowX].indexOf("scroll")>=0||this.target!==document.body,s=0;r&&(s=15);var a=t.height-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)-s,e={width:15,height:.975*a*(a/o.scrollHeight),left:t.left+t.width-parseFloat(i.borderLeftWidth)-15},f=0;a<408&&this.target===document.body&&(f=-11e-5*Math.pow(a,2)-.00727*a+22.58),this.target!==document.body&&(e.height=Math.max(e.height,24));var l=this.target.scrollTop/(o.scrollHeight-a);return e.top=l*(a-e.height-f)+t.top+parseFloat(i.borderTopWidth),this.target===document.body&&(e.height=Math.max(e.height,24)),e}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return"undefined"==typeof this._cache&&(this._cache={}),"undefined"==typeof this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];this.options.addTargetClasses!==!1&&l(this.target,this.getClass("enabled")),l(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach(function(e){e!==t.target.ownerDocument&&e.addEventListener("scroll",t.position)}),e&&this.position()}},{key:"disable",value:function(){var t=this;f(this.target,this.getClass("enabled")),f(this.element,this.getClass("enabled")),this.enabled=!1,"undefined"!=typeof this.scrollParents&&this.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.position)})}},{key:"destroy",value:function(){var t=this;this.disable(),z.forEach(function(e,o){e===t&&z.splice(o,1)}),0===z.length&&i()}},{key:"updateAttachClasses",value:function(t,e){var o=this;t=t||this.attachment,e=e||this.targetAttachment;var i=["left","top","bottom","right","middle","center"];"undefined"!=typeof this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),"undefined"==typeof this._addAttachClasses&&(this._addAttachClasses=[]);var n=this._addAttachClasses;t.top&&n.push(this.getClass("element-attached")+"-"+t.top),t.left&&n.push(this.getClass("element-attached")+"-"+t.left),e.top&&n.push(this.getClass("target-attached")+"-"+e.top),e.left&&n.push(this.getClass("target-attached")+"-"+e.left);var r=[];i.forEach(function(t){r.push(o.getClass("element-attached")+"-"+t),r.push(o.getClass("target-attached")+"-"+t)}),P(function(){"undefined"!=typeof o._addAttachClasses&&(u(o.element,o._addAttachClasses,r),o.options.addTargetClasses!==!1&&u(o.target,o._addAttachClasses,r),delete o._addAttachClasses)})}},{key:"position",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];if(this.enabled){this.clearCache();var o=F(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,o);var i=this.cache("element-bounds",function(){return n(t.element)}),a=i.width,f=i.height;if(0===a&&0===f&&"undefined"!=typeof this.lastSize){var l=this.lastSize;a=l.width,f=l.height}else this.lastSize={width:a,height:f};var h=this.cache("target-bounds",function(){return t.getTargetBounds()}),d=h,p=y(H(this.attachment),{width:a,height:f}),u=y(H(o),d),c=y(this.offset,{width:a,height:f}),g=y(this.targetOffset,d);p=v(p,c),u=v(u,g);for(var m=h.left+u.left-p.left,b=h.top+u.top-p.top,w=0;w<C.modules.length;++w){var O=C.modules[w],E=O.position.call(this,{left:m,top:b,targetAttachment:o,targetPos:h,elementPos:i,offset:p,targetOffset:u,manualOffset:c,manualTargetOffset:g,scrollbarSize:S,attachment:this.attachment});if(E===!1)return!1;"undefined"!=typeof E&&"object"==typeof E&&(b=E.top,m=E.left)}var x={page:{top:b,left:m},viewport:{top:b-pageYOffset,bottom:pageYOffset-b-f+innerHeight,left:m-pageXOffset,right:pageXOffset-m-a+innerWidth}},A=this.target.ownerDocument,T=A.defaultView,S=void 0;return T.innerHeight>A.documentElement.clientHeight&&(S=this.cache("scrollbar-size",s),x.viewport.bottom-=S.height),T.innerWidth>A.documentElement.clientWidth&&(S=this.cache("scrollbar-size",s),x.viewport.right-=S.width),["","static"].indexOf(A.body.style.position)!==-1&&["","static"].indexOf(A.body.parentElement.style.position)!==-1||(x.page.bottom=A.body.scrollHeight-b-f,x.page.right=A.body.scrollWidth-m-a),"undefined"!=typeof this.options.optimizations&&this.options.optimizations.moveElement!==!1&&"undefined"==typeof this.targetModifier&&!function(){var e=t.cache("target-offsetparent",function(){return r(t.target)}),o=t.cache("target-offsetparent-bounds",function(){return n(e)}),i=getComputedStyle(e),s=o,a={};if(["Top","Left","Bottom","Right"].forEach(function(t){a[t.toLowerCase()]=parseFloat(i["border"+t+"Width"])}),o.right=A.body.scrollWidth-o.left-s.width+a.right,o.bottom=A.body.scrollHeight-o.top-s.height+a.bottom,x.page.top>=o.top+a.top&&x.page.bottom>=o.bottom&&x.page.left>=o.left+a.left&&x.page.right>=o.right){var f=e.scrollTop,l=e.scrollLeft;x.offset={top:x.page.top-o.top+f-a.top,left:x.page.left-o.left+l-a.left}}}(),this.move(x),this.history.unshift(x),this.history.length>3&&this.history.pop(),e&&M(),!0}}},{key:"move",value:function(t){var e=this;if("undefined"!=typeof this.element.parentNode){var o={};for(var i in t){o[i]={};for(var n in t[i]){for(var s=!1,f=0;f<this.history.length;++f){var l=this.history[f];if("undefined"!=typeof l[i]&&!g(l[i][n],t[i][n])){s=!0;break}}s||(o[i][n]=!0)}}var h={top:"",left:"",right:"",bottom:""},d=function(t,o){var i="undefined"!=typeof e.options.optimizations,n=i?e.options.optimizations.gpu:null;if(n!==!1){var r=void 0,s=void 0;if(t.top?(h.top=0,r=o.top):(h.bottom=0,r=-o.bottom),t.left?(h.left=0,s=o.left):(h.right=0,s=-o.right),window.matchMedia){var a=window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches;a||(s=Math.round(s),r=Math.round(r))}h[j]="translateX("+s+"px) translateY("+r+"px)","msTransform"!==j&&(h[j]+=" translateZ(0)")}else t.top?h.top=o.top+"px":h.bottom=o.bottom+"px",t.left?h.left=o.left+"px":h.right=o.right+"px"},p=!1;if((o.page.top||o.page.bottom)&&(o.page.left||o.page.right)?(h.position="absolute",d(o.page,t.page)):(o.viewport.top||o.viewport.bottom)&&(o.viewport.left||o.viewport.right)?(h.position="fixed",d(o.viewport,t.viewport)):"undefined"!=typeof o.offset&&o.offset.top&&o.offset.left?!function(){h.position="absolute";var i=e.cache("target-offsetparent",function(){return r(e.target)});r(e.element)!==i&&P(function(){e.element.parentNode.removeChild(e.element),i.appendChild(e.element)}),d(o.offset,t.offset),p=!0}():(h.position="absolute",d({top:!0,left:!0},t.page)),!p)if(this.options.bodyElement)this.element.parentNode!==this.options.bodyElement&&this.options.bodyElement.appendChild(this.element);else{for(var u=!0,c=this.element.parentNode;c&&1===c.nodeType&&"BODY"!==c.tagName;){if("static"!==getComputedStyle(c).position){u=!1;break}c=c.parentNode}u||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}var m={},v=!1;for(var n in h){var y=h[n],b=this.element.style[n];b!==y&&(v=!0,m[n]=y)}v&&P(function(){a(e.element.style,m),e.trigger("repositioned")})}}}]),h}(W);V.modules=[],C.position=Y;var R=a(V,C),k=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),B=C.Utils,n=B.getBounds,a=B.extend,u=B.updateClasses,P=B.defer,I=["left","top","right","bottom"];C.modules.push({position:function(t){var e=this,o=t.top,i=t.left,r=t.targetAttachment;if(!this.options.constraints)return!0;var s=this.cache("element-bounds",function(){return n(e.element)}),f=s.height,l=s.width;if(0===l&&0===f&&"undefined"!=typeof this.lastSize){var h=this.lastSize;l=h.width,f=h.height}var d=this.cache("target-bounds",function(){return e.getTargetBounds()}),p=d.height,c=d.width,g=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(t){var e=t.outOfBoundsClass,o=t.pinnedClass;e&&g.push(e),o&&g.push(o)}),g.forEach(function(t){["left","top","right","bottom"].forEach(function(e){g.push(t+"-"+e)})});var m=[],v=a({},r),y=a({},this.attachment);return this.options.constraints.forEach(function(t){var n=t.to,s=t.attachment,a=t.pin;"undefined"==typeof s&&(s="");var h=void 0,d=void 0;if(s.indexOf(" ")>=0){var u=s.split(" "),g=k(u,2);d=g[0],h=g[1]}else h=d=s;var w=b(e,n);"target"!==d&&"both"!==d||(o<w[1]&&"top"===v.top&&(o+=p,v.top="bottom"),o+f>w[3]&&"bottom"===v.top&&(o-=p,v.top="top")),"together"===d&&("top"===v.top&&("bottom"===y.top&&o<w[1]?(o+=p,v.top="bottom",o+=f,y.top="top"):"top"===y.top&&o+f>w[3]&&o-(f-p)>=w[1]&&(o-=f-p,v.top="bottom",y.top="bottom")),"bottom"===v.top&&("top"===y.top&&o+f>w[3]?(o-=p,v.top="top",o-=f,y.top="bottom"):"bottom"===y.top&&o<w[1]&&o+(2*f-p)<=w[3]&&(o+=f-p,v.top="top",y.top="top")),"middle"===v.top&&(o+f>w[3]&&"top"===y.top?(o-=f,y.top="bottom"):o<w[1]&&"bottom"===y.top&&(o+=f,y.top="top"))),"target"!==h&&"both"!==h||(i<w[0]&&"left"===v.left&&(i+=c,v.left="right"),i+l>w[2]&&"right"===v.left&&(i-=c,v.left="left")),"together"===h&&(i<w[0]&&"left"===v.left?"right"===y.left?(i+=c,v.left="right",i+=l,y.left="left"):"left"===y.left&&(i+=c,v.left="right",i-=l,y.left="right"):i+l>w[2]&&"right"===v.left?"left"===y.left?(i-=c,v.left="left",i-=l,y.left="right"):"right"===y.left&&(i-=c,v.left="left",i+=l,y.left="left"):"center"===v.left&&(i+l>w[2]&&"left"===y.left?(i-=l,y.left="right"):i<w[0]&&"right"===y.left&&(i+=l,y.left="left"))),"element"!==d&&"both"!==d||(o<w[1]&&"bottom"===y.top&&(o+=f,y.top="top"),o+f>w[3]&&"top"===y.top&&(o-=f,y.top="bottom")),"element"!==h&&"both"!==h||(i<w[0]&&("right"===y.left?(i+=l,y.left="left"):"center"===y.left&&(i+=l/2,y.left="left")),i+l>w[2]&&("left"===y.left?(i-=l,y.left="right"):"center"===y.left&&(i-=l/2,y.left="right"))),"string"==typeof a?a=a.split(",").map(function(t){return t.trim()}):a===!0&&(a=["top","left","right","bottom"]),a=a||[];var C=[],O=[];o<w[1]&&(a.indexOf("top")>=0?(o=w[1],C.push("top")):O.push("top")),o+f>w[3]&&(a.indexOf("bottom")>=0?(o=w[3]-f,C.push("bottom")):O.push("bottom")),i<w[0]&&(a.indexOf("left")>=0?(i=w[0],C.push("left")):O.push("left")),i+l>w[2]&&(a.indexOf("right")>=0?(i=w[2]-l,C.push("right")):O.push("right")),C.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.pinnedClass?e.options.pinnedClass:e.getClass("pinned"),m.push(t),C.forEach(function(e){m.push(t+"-"+e)})}(),O.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.outOfBoundsClass?e.options.outOfBoundsClass:e.getClass("out-of-bounds"),m.push(t),O.forEach(function(e){m.push(t+"-"+e)})}(),(C.indexOf("left")>=0||C.indexOf("right")>=0)&&(y.left=v.left=!1),(C.indexOf("top")>=0||C.indexOf("bottom")>=0)&&(y.top=v.top=!1),v.top===r.top&&v.left===r.left&&y.top===e.attachment.top&&y.left===e.attachment.left||(e.updateAttachClasses(y,v),e.trigger("update",{attachment:y,targetAttachment:v}))}),P(function(){e.options.addTargetClasses!==!1&&u(e.target,m,g),u(e.element,m,g)}),{top:o,left:i}}});var B=C.Utils,n=B.getBounds,u=B.updateClasses,P=B.defer;C.modules.push({position:function(t){var e=this,o=t.top,i=t.left,r=this.cache("element-bounds",function(){return n(e.element)}),s=r.height,a=r.width,f=this.getTargetBounds(),l=o+s,h=i+a,d=[];o<=f.bottom&&l>=f.top&&["left","right"].forEach(function(t){var e=f[t];e!==i&&e!==h||d.push(t)}),i<=f.right&&h>=f.left&&["top","bottom"].forEach(function(t){var e=f[t];e!==o&&e!==l||d.push(t)});var p=[],c=[],g=["left","top","right","bottom"];return p.push(this.getClass("abutted")),g.forEach(function(t){p.push(e.getClass("abutted")+"-"+t)}),d.length&&c.push(this.getClass("abutted")),d.forEach(function(t){c.push(e.getClass("abutted")+"-"+t)}),P(function(){e.options.addTargetClasses!==!1&&u(e.target,c,p),u(e.element,c,p)}),!0}});var k=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return C.modules.push({position:function(t){var e=t.top,o=t.left;if(this.options.shift){var i=this.options.shift;"function"==typeof this.options.shift&&(i=this.options.shift.call(this,{top:e,left:o}));var n=void 0,r=void 0;if("string"==typeof i){i=i.split(" "),i[1]=i[1]||i[0];var s=i,a=k(s,2);n=a[0],r=a[1],n=parseFloat(n,10),r=parseFloat(r,10)}else n=i.top,r=i.left;return e+=n,o+=r,{top:e,left:o}}}}),R});
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function($) {

  $.fn.extend({
    slimScroll: function(options) {

      var defaults = {

        // width in pixels of the visible scroll area
        width : 'auto',

        // height in pixels of the visible scroll area
        height : '250px',

        // width in pixels of the scrollbar and rail
        size : '7px',

        // scrollbar color, accepts any hex/color value
        color: '#000',

        // scrollbar position - left/right
        position : 'right',

        // distance in pixels between the side edge and the scrollbar
        distance : '1px',

        // default scroll position on load - top / bottom / $('selector')
        start : 'top',

        // sets scrollbar opacity
        opacity : .4,

        // enables always-on mode for the scrollbar
        alwaysVisible : false,

        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut : false,

        // sets visibility of the rail
        railVisible : false,

        // sets rail color
        railColor : '#333',

        // sets rail opacity
        railOpacity : .2,

        // whether  we should use jQuery UI Draggable to enable bar dragging
        railDraggable : true,

        // defautlt CSS class of the slimscroll rail
        railClass : 'slimScrollRail',

        // defautlt CSS class of the slimscroll bar
        barClass : 'slimScrollBar',

        // defautlt CSS class of the slimscroll wrapper
        wrapperClass : 'slimScrollDiv',

        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll : false,

        // scroll amount applied to each mouse wheel step
        wheelStep : 20,

        // scroll amount applied when user is using gestures
        touchScrollStep : 200,

        // sets border radius
        borderRadius: '7px',

        // sets border radius of the rail
        railBorderRadius : '7px'
      };

      var o = $.extend(defaults, options);

      // do it for every element that matches selector
      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
        barHeight, percentScroll, lastScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false;

        // used in event handlers and for better minification
        var me = $(this);

        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass))
        {
            // start from last bar position
            var offset = me.scrollTop();

            // find bar and rail
            bar = me.siblings('.' + o.barClass);
            rail = me.siblings('.' + o.railClass);

            getBarHeight();

            // check if we should scroll existing instance
            if ($.isPlainObject(options))
            {
              // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
              if ( 'height' in options && options.height == 'auto' ) {
                me.parent().css('height', 'auto');
                me.css('height', 'auto');
                var height = me.parent().parent().height();
                me.parent().css('height', height);
                me.css('height', height);
              } else if ('height' in options) {
                var h = options.height;
                me.parent().css('height', h);
                me.css('height', h);
              }

              if ('scrollTo' in options)
              {
                // jump to a static point
                offset = parseInt(o.scrollTo);
              }
              else if ('scrollBy' in options)
              {
                // jump by value pixels
                offset += parseInt(o.scrollBy);
              }
              else if ('destroy' in options)
              {
                // remove slimscroll elements
                bar.remove();
                rail.remove();
                me.unwrap();
                return;
              }

              // scroll content by the given offset
              scrollContent(offset, false, true);
            }

            return;
        }
        else if ($.isPlainObject(options))
        {
            if ('destroy' in options)
            {
            	return;
            }
        }

        // optionally set height to the parent's height
        o.height = (o.height == 'auto') ? me.parent().height() : o.height;

        // wrap content
        var wrapper = $(divS)
          .addClass(o.wrapperClass)
          .css({
            position: 'relative',
            overflow: 'hidden',
            width: o.width,
            height: o.height
          });

        // update style for the div
        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height
        });

        // create scrollbar rail
        var rail = $(divS)
          .addClass(o.railClass)
          .css({
            width: o.size,
            height: '100%',
            position: 'absolute',
            top: 0,
            display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
            'border-radius': o.railBorderRadius,
            background: o.railColor,
            opacity: o.railOpacity,
            zIndex: 90
          });

        // create scrollbar
        var bar = $(divS)
          .addClass(o.barClass)
          .css({
            background: o.color,
            width: o.size,
            position: 'absolute',
            top: 0,
            opacity: o.opacity,
            display: o.alwaysVisible ? 'block' : 'none',
            'border-radius' : o.borderRadius,
            BorderRadius: o.borderRadius,
            MozBorderRadius: o.borderRadius,
            WebkitBorderRadius: o.borderRadius,
            zIndex: 99
          });

        // set position
        var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
        rail.css(posCss);
        bar.css(posCss);

        // wrap it
        me.wrap(wrapper);

        // append to parent div
        me.parent().append(bar);
        me.parent().append(rail);

        // make it draggable and no longer dependent on the jqueryUI
        if (o.railDraggable){
          bar.bind("mousedown", function(e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;

            $doc.bind("mousemove.slimscroll", function(e){
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false);// scroll content
            });

            $doc.bind("mouseup.slimscroll", function(e) {
              isDragg = false;hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function(e){
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        }

        // on rail over
        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
        });

        // on bar over
        bar.hover(function(){
          isOverBar = true;
        }, function(){
          isOverBar = false;
        });

        // show on parent mouseover
        me.hover(function(){
          isOverPanel = true;
          showBar();
          hideBar();
        }, function(){
          isOverPanel = false;
          hideBar();
        });

        // support for mobile
        me.bind('touchstart', function(e,b){
          if (e.originalEvent.touches.length)
          {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        me.bind('touchmove', function(e){
          // prevent scrolling the page if necessary
          if(!releaseScroll)
          {
  		      e.originalEvent.preventDefault();
		      }
          if (e.originalEvent.touches.length)
          {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
            // scroll content
            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom')
        {
          // scroll content to bottom
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (o.start !== 'top')
        {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true);

          // make sure bar stays hidden
          if (!o.alwaysVisible) { bar.hide(); }
        }

        // attach scroll events
        attachWheel(this);

        function _onWheel(e)
        {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          var target = e.target || e.srcTarget || e.srcElement;
          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          }

          // stop window scroll
          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel)
          {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

            // move bar, make sure it doesn't go out
            delta = Math.min(Math.max(delta, 0), maxTop);

            // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

            // scroll the scrollbar
            bar.css({ top: delta + 'px' });
          }

          // calculate actual scroll amount
          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({ top: offsetTop + 'px' });
          }

          // scroll content
          me.scrollTop(delta);

          // fire scrolling event
          me.trigger('slimscrolling', ~~delta);

          // ensure bar is visible
          showBar();

          // trigger hide when scroll is stopped
          hideBar();
        }

        function attachWheel(target)
        {
          if (window.addEventListener)
          {
            target.addEventListener('DOMMouseScroll', _onWheel, false );
            target.addEventListener('mousewheel', _onWheel, false );
          }
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

        function getBarHeight()
        {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
          bar.css({ height: barHeight + 'px' });

          // hide scrollbar if content is not long enough
          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({ display: display });
        }

        function showBar()
        {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide);

          // when bar reached top or bottom
          if (percentScroll == ~~percentScroll)
          {
            //release wheel
            releaseScroll = o.allowPageScroll;

            // publish approporiate event
            if (lastScroll != percentScroll)
            {
                var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                me.trigger('slimscroll', msg);
            }
          }
          else
          {
            releaseScroll = false;
          }
          lastScroll = percentScroll;

          // show only when required
          if(barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (o.railVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          // only hide when options allow it
          if (!o.alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
              {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

      });

      // maintain chainability
      return this;
    }
  });

  $.fn.extend({
    slimscroll: $.fn.slimScroll
  });

})(jQuery);

// This [jQuery](https://jquery.com/) plugin implements an `<iframe>`
// [transport](https://api.jquery.com/jQuery.ajax/#extending-ajax) so that
// `$.ajax()` calls support the uploading of files using standard HTML file
// input fields. This is done by switching the exchange from `XMLHttpRequest`
// to a hidden `iframe` element containing a form that is submitted.

// The [source for the plugin](https://github.com/cmlenz/jquery-iframe-transport)
// is available on [Github](https://github.com/) and licensed under the [MIT
// license](https://github.com/cmlenz/jquery-iframe-transport/blob/master/LICENSE).

// ## Usage

// To use this plugin, you simply add an `iframe` option with the value `true`
// to the Ajax settings an `$.ajax()` call, and specify the file fields to
// include in the submssion using the `files` option, which can be a selector,
// jQuery object, or a list of DOM elements containing one or more
// `<input type="file">` elements:

//     $("#myform").submit(function() {
//         $.ajax(this.action, {
//             files: $(":file", this),
//             iframe: true
//         }).complete(function(data) {
//             console.log(data);
//         });
//     });

// The plugin will construct hidden `<iframe>` and `<form>` elements, add the
// file field(s) to that form, submit the form, and process the response.

// If you want to include other form fields in the form submission, include
// them in the `data` option, and set the `processData` option to `false`:

//     $("#myform").submit(function() {
//         $.ajax(this.action, {
//             data: $(":text", this).serializeArray(),
//             files: $(":file", this),
//             iframe: true,
//             processData: false
//         }).complete(function(data) {
//             console.log(data);
//         });
//     });

// ### Response Data Types

// As the transport does not have access to the HTTP headers of the server
// response, it is not as simple to make use of the automatic content type
// detection provided by jQuery as with regular XHR. If you can't set the
// expected response data type (for example because it may vary depending on
// the outcome of processing by the server), you will need to employ a
// workaround on the server side: Send back an HTML document containing just a
// `<textarea>` element with a `data-type` attribute that specifies the MIME
// type, and put the actual payload in the textarea:

//     <textarea data-type="application/json">
//       {"ok": true, "message": "Thanks so much"}
//     </textarea>

// The iframe transport plugin will detect this and pass the value of the
// `data-type` attribute on to jQuery as if it was the "Content-Type" response
// header, thereby enabling the same kind of conversions that jQuery applies
// to regular responses. For the example above you should get a Javascript
// object as the `data` parameter of the `complete` callback, with the
// properties `ok: true` and `message: "Thanks so much"`.

// ### Handling Server Errors

// Another problem with using an `iframe` for file uploads is that it is
// impossible for the javascript code to determine the HTTP status code of the
// servers response. Effectively, all of the calls you make will look like they
// are getting successful responses, and thus invoke the `done()` or
// `complete()` callbacks. You can only communicate problems using the content
// of the response payload. For example, consider using a JSON response such as
// the following to indicate a problem with an uploaded file:

//     <textarea data-type="application/json">
//       {"ok": false, "message": "Please only upload reasonably sized files."}
//     </textarea>

// ### Compatibility

// This plugin has primarily been tested on Safari 5 (or later), Firefox 4 (or
// later), and Internet Explorer (all the way back to version 6). While I
// haven't found any issues with it so far, I'm fairly sure it still doesn't
// work around all the quirks in all different browsers. But the code is still
// pretty simple overall, so you should be able to fix it and contribute a
// patch :)

// ## Annotated Source

(function($, undefined) {
  "use strict";

  // Register a prefilter that checks whether the `iframe` option is set, and
  // switches to the "iframe" data type if it is `true`.
  $.ajaxPrefilter(function(options, origOptions, jqXHR) {
    if (options.iframe) {
      options.originalURL = options.url;
      return "iframe";
    }
  });

  // Register a transport for the "iframe" data type. It will only activate
  // when the "files" option has been set to a non-empty list of enabled file
  // inputs.
  $.ajaxTransport("iframe", function(options, origOptions, jqXHR) {
    var form = null,
        iframe = null,
        name = "iframe-" + $.now(),
        files = $(options.files).filter(":file:enabled"),
        markers = null,
        accepts = null;

    // This function gets called after a successful submission or an abortion
    // and should revert all changes made to the page to enable the
    // submission via this transport.
    function cleanUp() {
      files.each(function(i, file) {
        var $file = $(file);
        $file.data("clone").replaceWith($file);
      });
      form.remove();
      iframe.one("load", function() { iframe.remove(); });
      iframe.attr("src", "javascript:false;");
    }

    // Remove "iframe" from the data types list so that further processing is
    // based on the content type returned by the server, without attempting an
    // (unsupported) conversion from "iframe" to the actual type.
    options.dataTypes.shift();

    // Use the data from the original AJAX options, as it doesn't seem to be 
    // copied over since jQuery 1.7.
    // See https://github.com/cmlenz/jquery-iframe-transport/issues/6
    options.data = origOptions.data;

    if (files.length) {
      form = $("<form enctype='multipart/form-data' method='post'></form>").
        hide().attr({action: options.originalURL, target: name});

      // If there is any additional data specified via the `data` option,
      // we add it as hidden fields to the form. This (currently) requires
      // the `processData` option to be set to false so that the data doesn't
      // get serialized to a string.
      if (typeof(options.data) === "string" && options.data.length > 0) {
        $.error("data must not be serialized");
      }
      $.each(options.data || {}, function(name, value) {
        if ($.isPlainObject(value)) {
          name = value.name;
          value = value.value;
        }
        $("<input type='hidden' />").attr({name:  name, value: value}).
          appendTo(form);
      });

      // Add a hidden `X-Requested-With` field with the value `IFrame` to the
      // field, to help server-side code to determine that the upload happened
      // through this transport.
      $("<input type='hidden' value='IFrame' name='X-Requested-With' />").
        appendTo(form);

      // Borrowed straight from the JQuery source.
      // Provides a way of specifying the accepted data type similar to the
      // HTTP "Accept" header
      if (options.dataTypes[0] && options.accepts[options.dataTypes[0]]) {
        accepts = options.accepts[options.dataTypes[0]] +
                  (options.dataTypes[0] !== "*" ? ", */*; q=0.01" : "");
      } else {
        accepts = options.accepts["*"];
      }
      $("<input type='hidden' name='X-HTTP-Accept'>").
        attr("value", accepts).appendTo(form);

      // Move the file fields into the hidden form, but first remember their
      // original locations in the document by replacing them with disabled
      // clones. This should also avoid introducing unwanted changes to the
      // page layout during submission.
      markers = files.after(function(idx) {
        var $this = $(this),
            $clone = $this.clone().prop("disabled", true);
        $this.data("clone", $clone);
        return $clone;
      }).next();
      files.appendTo(form);

      return {

        // The `send` function is called by jQuery when the request should be
        // sent.
        send: function(headers, completeCallback) {
          iframe = $("<iframe src='javascript:false;' name='" + name +
            "' id='" + name + "' style='display:none'></iframe>");

          // The first load event gets fired after the iframe has been injected
          // into the DOM, and is used to prepare the actual submission.
          iframe.one("load", function() {

            // The second load event gets fired when the response to the form
            // submission is received. The implementation detects whether the
            // actual payload is embedded in a `<textarea>` element, and
            // prepares the required conversions to be made in that case.
            iframe.one("load", function() {
              var doc = this.contentWindow ? this.contentWindow.document :
                (this.contentDocument ? this.contentDocument : this.document),
                root = doc.documentElement ? doc.documentElement : doc.body,
                textarea = root.getElementsByTagName("textarea")[0],
                type = textarea && textarea.getAttribute("data-type") || null,
                status = textarea && textarea.getAttribute("data-status") || 200,
                statusText = textarea && textarea.getAttribute("data-statusText") || "OK",
                content = {
                  html: root.innerHTML,
                  text: type ?
                    textarea.value :
                    root ? (root.textContent || root.innerText) : null
                };
              cleanUp();
              completeCallback(status, statusText, content, type ?
                ("Content-Type: " + type) :
                null);
            });

            // Now that the load handler has been set up, submit the form.
            form[0].submit();
          });

          // After everything has been set up correctly, the form and iframe
          // get injected into the DOM so that the submission can be
          // initiated.
          $("body").append(form, iframe);
        },

        // The `abort` function is called by jQuery when the request should be
        // aborted.
        abort: function() {
          if (iframe !== null) {
            iframe.unbind("load").attr("src", "javascript:false;");
            cleanUp();
          }
        }

      };
    }
  });

})(jQuery);

/*
 * jQuery File Upload Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global define, require, window, document, location, Blob, FormData */

;(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery-ui/ui/widget'
        ], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(
            require('jquery'),
            require('./vendor/jquery.ui.widget')
        );
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Detect file input support, based on
    // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
    $.support.fileInput = !(new RegExp(
        // Handle devices which give false positives for the feature detection:
        '(Android (1\\.[0156]|2\\.[01]))' +
            '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' +
            '|(w(eb)?OSBrowser)|(webOS)' +
            '|(Kindle/(1\\.0|2\\.[05]|3\\.0))'
    ).test(window.navigator.userAgent) ||
        // Feature detection for all other devices:
        $('<input type="file"/>').prop('disabled'));

    // The FileReader API is not actually used, but works as feature detection,
    // as some Safari versions (5?) support XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads.
    // window.XMLHttpRequestUpload is not available on IE10, so we check for
    // window.ProgressEvent instead to detect XHR2 file upload capability:
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // Detect support for Blob slicing (required for chunked uploads):
    $.support.blobSlice = window.Blob && (Blob.prototype.slice ||
        Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

    // Helper function to create drag handlers for dragover/dragenter/dragleave:
    function getDragHandler(type) {
        var isDragOver = type === 'dragover';
        return function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var dataTransfer = e.dataTransfer;
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 &&
                    this._trigger(
                        type,
                        $.Event(type, {delegatedEvent: e})
                    ) !== false) {
                e.preventDefault();
                if (isDragOver) {
                    dataTransfer.dropEffect = 'copy';
                }
            }
        };
    }

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default undefined.
            // Set to a DOM node or jQuery object to enable file pasting:
            pasteZone: undefined,
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // The following option limits the number of files uploaded with one
            // XHR request to keep the request size under or equal to the defined
            // limit in bytes:
            limitMultiFileUploadSize: undefined,
            // Multipart file uploads add a number of bytes to each uploaded file,
            // therefore the following option adds an overhead for each file used
            // in the limitMultiFileUploadSize configuration:
            limitMultiFileUploadSizeOverhead: 512,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,
            // By default, uploads are started automatically when adding files:
            autoUpload: true,

            // Error and info messages:
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },

            // Translation function, gets the message key to be translated
            // and an object with context specific data as arguments:
            i18n: function (message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function (key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uploads, else
            // once for each file selection.
            //
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows you to override plugin options as well as define ajax settings.
            //
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            //
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }
                if (data.autoUpload || (data.autoUpload !== false &&
                        $(this).fileupload('option', 'autoUpload'))) {
                    data.process().done(function () {
                        data.submit();
                    });
                }
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false,
            timeout: 0
        },

        // A list of options that require reinitializing event listeners and/or
        // special initialization code:
        _specialOptions: [
            'fileInput',
            'dropZone',
            'pasteZone',
            'multipart',
            'forceIframeTransport'
        ],

        _blobSlice: $.support.blobSlice && function () {
            var slice = this.slice || this.webkitSlice || this.mozSlice;
            return slice.apply(this, arguments);
        },

        _BitrateTimer: function () {
            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if ($.type(options.formData) === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _initProgressObject: function (obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },

        _initResponseObject: function (obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(
                    e.loaded / e.total * (data.chunkSize || data._progress.total)
                ) + (data.uploadedBytes || 0);
                // Add the difference from the previously loaded state
                // to the global loaded counter:
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(
                    now,
                    this._progress.loaded,
                    data.bitrateInterval
                );
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger(
                    'progress',
                    $.Event('progress', {delegatedEvent: e}),
                    data
                );
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger(
                    'progressall',
                    $.Event('progressall', {delegatedEvent: e}),
                    this._progress
                );
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _isInstanceOf: function (type, obj) {
            // Cross-frame instanceof check
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },

        _initXHRData: function (options) {
            var that = this,
                formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = $.type(options.paramName) === 'array' ?
                    options.paramName[0] : options.paramName;
            options.headers = $.extend({}, options.headers);
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.uploadName || file.name) + '"';
            }
            if (!multipart) {
                options.contentType = file.type || 'application/octet-stream';
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: ($.type(options.paramName) === 'array' &&
                                    options.paramName[index]) || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(
                            paramName,
                            options.blob,
                            file.uploadName || file.name
                        );
                    } else {
                        $.each(options.files, function (index, file) {
                            // This check allows the tests to run with
                            // dummy objects:
                            if (that._isInstanceOf('File', file) ||
                                    that._isInstanceOf('Blob', file)) {
                                formData.append(
                                    ($.type(options.paramName) === 'array' &&
                                        options.paramName[index]) || paramName,
                                    file,
                                    file.uploadName || file.name
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && targetHost && targetHost !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },

        _getParamName: function (options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type ||
                ($.type(options.form.prop('method')) === 'string' &&
                    options.form.prop('method')) || ''
                ).toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function (deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Adds convenience methods to the data callback argument:
        _addConvenienceMethods: function (e, data) {
            var that = this,
                getPromise = function (args) {
                    return $.Deferred().resolveWith(that, args).promise();
                };
            data.process = function (resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue =
                        (this._processQueue || getPromise([this])).then(
                            function () {
                                if (data.errorThrown) {
                                    return $.Deferred()
                                        .rejectWith(that, [data]).promise();
                                }
                                return getPromise(arguments);
                            }
                        ).then(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise([this]);
            };
            data.submit = function () {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR =
                        (that._trigger(
                            'submit',
                            $.Event('submit', {delegatedEvent: e}),
                            this
                        ) !== false) && that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function () {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                this.errorThrown = 'abort';
                that._trigger('fail', null, this);
                return that._getXHRPromise(false);
            };
            data.state = function () {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.processing = function () {
                return !this.jqXHR && this._processQueue && that
                    ._getDeferredState(this._processQueue) === 'pending';
            };
            data.progress = function () {
                return this._progress;
            };
            data.response = function () {
                return this._response;
            };
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function (jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 &&
                    parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            options.uploadedBytes = options.uploadedBytes || 0;
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes,
                mcs = options.maxChunkSize || fs,
                slice = this._blobSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || ($.type(mcs) === 'function' ? mcs(options) : mcs) < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // The chunk upload method:
            upload = function () {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(
                    file,
                    ub,
                    ub + ($.type(mcs) === 'function' ? mcs(o) : mcs),
                    file.type
                );
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
                        that._getXHRPromise(false, o.context))
                    .done(function (result, textStatus, jqXHR) {
                        ub = that._getUploadedBytes(jqXHR) ||
                            (ub + o.chunkSize);
                        // Create a progress event if no final progress event
                        // with loaded equaling total has been triggered
                        // for this chunk:
                        if (currentLoaded + o.chunkSize - o._progress.loaded) {
                            that._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: ub - o.uploadedBytes,
                                total: ub - o.uploadedBytes
                            }), o);
                        }
                        options.uploadedBytes = o.uploadedBytes = ub;
                        o.result = result;
                        o.textStatus = textStatus;
                        o.jqXHR = jqXHR;
                        that._trigger('chunkdone', null, o);
                        that._trigger('chunkalways', null, o);
                        if (ub < fs) {
                            // File upload not yet complete,
                            // continue with the next chunk:
                            upload();
                        } else {
                            dfd.resolveWith(
                                o.context,
                                [result, textStatus, jqXHR]
                            );
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        o.jqXHR = jqXHR;
                        o.textStatus = textStatus;
                        o.errorThrown = errorThrown;
                        that._trigger('chunkfail', null, o);
                        that._trigger('chunkalways', null, o);
                        dfd.rejectWith(
                            o.context,
                            [jqXHR, textStatus, errorThrown]
                        );
                    });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
                // Reset the global progress values:
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            // Make sure the container objects for the .response() and
            // .progress() methods on the data object are available
            // and reset to their initial state:
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            // Initialize the global progress values:
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                // Create a progress event if no final progress event
                // with loaded equaling total has been triggered:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._trigger('always', null, options);
        },

        _onSend: function (e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function () {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        ((aborted || that._trigger(
                            'send',
                            $.Event('send', {delegatedEvent: e}),
                            options
                        ) === false) &&
                        that._getXHRPromise(false, options.context, aborted)) ||
                        that._chunkedUpload(options) || $.ajax(options)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        that._sending -= 1;
                        that._active -= 1;
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                        if (that._active === 0) {
                            // The stop callback is triggered when all uploads have
                            // been completed, equivalent to the global ajaxStop event:
                            that._trigger('stop');
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.then(send);
                } else {
                    this._sequence = this._sequence.then(send, send);
                    pipe = this._sequence;
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                files = data.files,
                filesLength = files.length,
                limit = options.limitMultiFileUploads,
                limitSize = options.limitMultiFileUploadSize,
                overhead = options.limitMultiFileUploadSizeOverhead,
                batchSize = 0,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i,
                j = 0;
            if (!filesLength) {
                return false;
            }
            if (limitSize && files[0].size === undefined) {
                limitSize = undefined;
            }
            if (!(options.singleFileUploads || limit || limitSize) ||
                    !this._isXHRUpload(options)) {
                fileSet = [files];
                paramNameSet = [paramName];
            } else if (!(options.singleFileUploads || limitSize) && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i += limit) {
                    fileSet.push(files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else if (!options.singleFileUploads && limitSize) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i = i + 1) {
                    batchSize += files[i].size + overhead;
                    if (i + 1 === filesLength ||
                            ((batchSize + files[i + 1].size + overhead) > limitSize) ||
                            (limit && i + 1 - j >= limit)) {
                        fileSet.push(files.slice(j, i + 1));
                        paramNameSlice = paramName.slice(j, i + 1);
                        if (!paramNameSlice.length) {
                            paramNameSlice = paramName;
                        }
                        paramNameSet.push(paramNameSlice);
                        j = i + 1;
                        batchSize = 0;
                    }
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = files;
            $.each(fileSet || files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger(
                    'add',
                    $.Event('add', {delegatedEvent: e}),
                    newData
                );
                return result;
            });
            return result;
        },

        _replaceFileInput: function (data) {
            var input = data.fileInput,
                inputClone = input.clone(true),
                restoreFocus = input.is(document.activeElement);
            // Add a reference for the new cloned file input to the data argument:
            data.fileInputClone = inputClone;
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // If the fileInput had focus before it was detached,
            // restore focus to the inputClone.
            if (restoreFocus) {
                inputClone.focus();
            }
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function (entry, path) {
            var that = this,
                dfd = $.Deferred(),
                entries = [],
                dirReader,
                errorHandler = function (e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    // Since $.when returns immediately if one
                    // Deferred is rejected, we use resolve instead.
                    // This allows valid files and invalid items
                    // to be returned together in one set:
                    dfd.resolve([e]);
                },
                successHandler = function (entries) {
                    that._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).done(function (files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                },
                readEntries = function () {
                    dirReader.readEntries(function (results) {
                        if (!results.length) {
                            successHandler(entries);
                        } else {
                            entries = entries.concat(results);
                            readEntries();
                        }
                    }, errorHandler);
                };
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                readEntries();
            } else {
                // Return an empy list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function (entries, path) {
            var that = this;
            return $.when.apply(
                $,
                $.map(entries, function (entry) {
                    return that._handleFileTreeEntry(entry, path);
                })
            ).then(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _getDroppedFiles: function (dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry ||
                    items[0].getAsEntry)) {
                return this._handleFileTreeEntries(
                    $.map(items, function (item) {
                        var entry;
                        if (item.webkitGetAsEntry) {
                            entry = item.webkitGetAsEntry();
                            if (entry) {
                                // Workaround for Chrome bug #149735:
                                entry._file = item.getAsFile();
                            }
                            return entry;
                        }
                        return item.getAsEntry();
                    })
                );
            }
            return $.Deferred().resolve(
                $.makeArray(dataTransfer.files)
            ).promise();
        },

        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') ||
                    fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function (fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).then(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _onChange: function (e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data);
                }
                if (that._trigger(
                        'change',
                        $.Event('change', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function (e) {
            var items = e.originalEvent && e.originalEvent.clipboardData &&
                    e.originalEvent.clipboardData.items,
                data = {files: []};
            if (items && items.length) {
                $.each(items, function (index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger(
                        'paste',
                        $.Event('paste', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    this._onAdd(e, data);
                }
            }
        },

        _onDrop: function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var that = this,
                dataTransfer = e.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function (files) {
                    data.files = files;
                    if (that._trigger(
                            'drop',
                            $.Event('drop', {delegatedEvent: e}),
                            data
                        ) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },

        _onDragOver: getDragHandler('dragover'),

        _onDragEnter: getDragHandler('dragenter'),

        _onDragLeave: getDragHandler('dragleave'),

        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    // event.preventDefault() on dragenter is required for IE10+:
                    dragenter: this._onDragEnter,
                    // dragleave is not required, but added for completeness:
                    dragleave: this._onDragLeave
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            if ($.support.fileInput) {
                this._on(this.options.fileInput, {
                    change: this._onChange
                });
            }
        },

        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _destroy: function () {
            this._destroyEventHandlers();
        },

        _setOption: function (key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ?
                        this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _getRegExp: function (str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },

        _isRegExpOption: function (key, value) {
            return key !== 'url' && $.type(value) === 'string' &&
                /^\/.*\/[igm]{0,3}$/.test(value);
        },

        _initDataAttributes: function () {
            var that = this,
                options = this.options,
                data = this.element.data();
            // Initialize options set via HTML5 data-attributes:
            $.each(
                this.element[0].attributes,
                function (index, attr) {
                    var key = attr.name.toLowerCase(),
                        value;
                    if (/^data-/.test(key)) {
                        // Convert hyphen-ated key to camelCase:
                        key = key.slice(5).replace(/-[a-z]/g, function (str) {
                            return str.charAt(1).toUpperCase();
                        });
                        value = data[key];
                        if (that._isRegExpOption(key, value)) {
                            value = that._getRegExp(value);
                        }
                        options[key] = value;
                    }
                }
            );
        },

        _create: function () {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },

        // This method is exposed to the widget API and allows to query
        // the number of active uploads:
        active: function () {
            return this._active;
        },

        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function () {
            return this._progress;
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(
                        function (files) {
                            if (aborted) {
                                return;
                            }
                            if (!files.length) {
                                dfd.reject();
                                return;
                            }
                            data.files = files;
                            jqXHR = that._onSend(null, data);
                            jqXHR.then(
                                function (result, textStatus, jqXHR) {
                                    dfd.resolve(result, textStatus, jqXHR);
                                },
                                function (jqXHR, textStatus, errorThrown) {
                                    dfd.reject(jqXHR, textStatus, errorThrown);
                                }
                            );
                        }
                    );
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));

/*!
 * Bootstrap Colorpicker v2.5.2
 * https://itsjavi.com/bootstrap-colorpicker/
 *
 * Originally written by (c) 2012 Stefan Petre
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function(jq) {
      return (factory(jq));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else if (jQuery && !jQuery.fn.colorpicker) {
    factory(jQuery);
  }
}(this, function($) {
  'use strict';
  /**
   * Color manipulation helper class
   *
   * @param {Object|String} [val]
   * @param {Object} [predefinedColors]
   * @param {String|null} [fallbackColor]
   * @param {String|null} [fallbackFormat]
   * @param {Boolean} [hexNumberSignPrefix]
   * @constructor
   */
  var Color = function(
    val, predefinedColors, fallbackColor, fallbackFormat, hexNumberSignPrefix) {
    this.fallbackValue = fallbackColor ?
      (
        fallbackColor && (typeof fallbackColor.h !== 'undefined') ?
        fallbackColor :
        this.value = {
          h: 0,
          s: 0,
          b: 0,
          a: 1
        }
      ) :
      null;

    this.fallbackFormat = fallbackFormat ? fallbackFormat : 'rgba';

    this.hexNumberSignPrefix = hexNumberSignPrefix === true;

    this.value = this.fallbackValue;

    this.origFormat = null; // original string format

    this.predefinedColors = predefinedColors ? predefinedColors : {};

    // We don't want to share aliases across instances so we extend new object
    this.colors = $.extend({}, Color.webColors, this.predefinedColors);

    if (val) {
      if (typeof val.h !== 'undefined') {
        this.value = val;
      } else {
        this.setColor(String(val));
      }
    }

    if (!this.value) {
      // Initial value is always black if no arguments are passed or val is empty
      this.value = {
        h: 0,
        s: 0,
        b: 0,
        a: 1
      };
    }
  };

  Color.webColors = { // 140 predefined colors from the HTML Colors spec
    "aliceblue": "f0f8ff",
    "antiquewhite": "faebd7",
    "aqua": "00ffff",
    "aquamarine": "7fffd4",
    "azure": "f0ffff",
    "beige": "f5f5dc",
    "bisque": "ffe4c4",
    "black": "000000",
    "blanchedalmond": "ffebcd",
    "blue": "0000ff",
    "blueviolet": "8a2be2",
    "brown": "a52a2a",
    "burlywood": "deb887",
    "cadetblue": "5f9ea0",
    "chartreuse": "7fff00",
    "chocolate": "d2691e",
    "coral": "ff7f50",
    "cornflowerblue": "6495ed",
    "cornsilk": "fff8dc",
    "crimson": "dc143c",
    "cyan": "00ffff",
    "darkblue": "00008b",
    "darkcyan": "008b8b",
    "darkgoldenrod": "b8860b",
    "darkgray": "a9a9a9",
    "darkgreen": "006400",
    "darkkhaki": "bdb76b",
    "darkmagenta": "8b008b",
    "darkolivegreen": "556b2f",
    "darkorange": "ff8c00",
    "darkorchid": "9932cc",
    "darkred": "8b0000",
    "darksalmon": "e9967a",
    "darkseagreen": "8fbc8f",
    "darkslateblue": "483d8b",
    "darkslategray": "2f4f4f",
    "darkturquoise": "00ced1",
    "darkviolet": "9400d3",
    "deeppink": "ff1493",
    "deepskyblue": "00bfff",
    "dimgray": "696969",
    "dodgerblue": "1e90ff",
    "firebrick": "b22222",
    "floralwhite": "fffaf0",
    "forestgreen": "228b22",
    "fuchsia": "ff00ff",
    "gainsboro": "dcdcdc",
    "ghostwhite": "f8f8ff",
    "gold": "ffd700",
    "goldenrod": "daa520",
    "gray": "808080",
    "green": "008000",
    "greenyellow": "adff2f",
    "honeydew": "f0fff0",
    "hotpink": "ff69b4",
    "indianred": "cd5c5c",
    "indigo": "4b0082",
    "ivory": "fffff0",
    "khaki": "f0e68c",
    "lavender": "e6e6fa",
    "lavenderblush": "fff0f5",
    "lawngreen": "7cfc00",
    "lemonchiffon": "fffacd",
    "lightblue": "add8e6",
    "lightcoral": "f08080",
    "lightcyan": "e0ffff",
    "lightgoldenrodyellow": "fafad2",
    "lightgrey": "d3d3d3",
    "lightgreen": "90ee90",
    "lightpink": "ffb6c1",
    "lightsalmon": "ffa07a",
    "lightseagreen": "20b2aa",
    "lightskyblue": "87cefa",
    "lightslategray": "778899",
    "lightsteelblue": "b0c4de",
    "lightyellow": "ffffe0",
    "lime": "00ff00",
    "limegreen": "32cd32",
    "linen": "faf0e6",
    "magenta": "ff00ff",
    "maroon": "800000",
    "mediumaquamarine": "66cdaa",
    "mediumblue": "0000cd",
    "mediumorchid": "ba55d3",
    "mediumpurple": "9370d8",
    "mediumseagreen": "3cb371",
    "mediumslateblue": "7b68ee",
    "mediumspringgreen": "00fa9a",
    "mediumturquoise": "48d1cc",
    "mediumvioletred": "c71585",
    "midnightblue": "191970",
    "mintcream": "f5fffa",
    "mistyrose": "ffe4e1",
    "moccasin": "ffe4b5",
    "navajowhite": "ffdead",
    "navy": "000080",
    "oldlace": "fdf5e6",
    "olive": "808000",
    "olivedrab": "6b8e23",
    "orange": "ffa500",
    "orangered": "ff4500",
    "orchid": "da70d6",
    "palegoldenrod": "eee8aa",
    "palegreen": "98fb98",
    "paleturquoise": "afeeee",
    "palevioletred": "d87093",
    "papayawhip": "ffefd5",
    "peachpuff": "ffdab9",
    "peru": "cd853f",
    "pink": "ffc0cb",
    "plum": "dda0dd",
    "powderblue": "b0e0e6",
    "purple": "800080",
    "red": "ff0000",
    "rosybrown": "bc8f8f",
    "royalblue": "4169e1",
    "saddlebrown": "8b4513",
    "salmon": "fa8072",
    "sandybrown": "f4a460",
    "seagreen": "2e8b57",
    "seashell": "fff5ee",
    "sienna": "a0522d",
    "silver": "c0c0c0",
    "skyblue": "87ceeb",
    "slateblue": "6a5acd",
    "slategray": "708090",
    "snow": "fffafa",
    "springgreen": "00ff7f",
    "steelblue": "4682b4",
    "tan": "d2b48c",
    "teal": "008080",
    "thistle": "d8bfd8",
    "tomato": "ff6347",
    "turquoise": "40e0d0",
    "violet": "ee82ee",
    "wheat": "f5deb3",
    "white": "ffffff",
    "whitesmoke": "f5f5f5",
    "yellow": "ffff00",
    "yellowgreen": "9acd32",
    "transparent": "transparent"
  };

  Color.prototype = {
    constructor: Color,
    colors: {}, // merged web and predefined colors
    predefinedColors: {},
    /**
     * @return {Object}
     */
    getValue: function() {
      return this.value;
    },
    /**
     * @param {Object} val
     */
    setValue: function(val) {
      this.value = val;
    },
    _sanitizeNumber: function(val) {
      if (typeof val === 'number') {
        return val;
      }
      if (isNaN(val) || (val === null) || (val === '') || (val === undefined)) {
        return 1;
      }
      if (val === '') {
        return 0;
      }
      if (typeof val.toLowerCase !== 'undefined') {
        if (val.match(/^\./)) {
          val = "0" + val;
        }
        return Math.ceil(parseFloat(val) * 100) / 100;
      }
      return 1;
    },
    isTransparent: function(strVal) {
      if (!strVal || !(typeof strVal === 'string' || strVal instanceof String)) {
        return false;
      }
      strVal = strVal.toLowerCase().trim();
      return (strVal === 'transparent') || (strVal.match(/#?00000000/)) || (strVal.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/));
    },
    rgbaIsTransparent: function(rgba) {
      return ((rgba.r === 0) && (rgba.g === 0) && (rgba.b === 0) && (rgba.a === 0));
    },
    // parse a string to HSB
    /**
     * @protected
     * @param {String} strVal
     * @returns {boolean} Returns true if it could be parsed, false otherwise
     */
    setColor: function(strVal) {
      strVal = strVal.toLowerCase().trim();
      if (strVal) {
        if (this.isTransparent(strVal)) {
          this.value = {
            h: 0,
            s: 0,
            b: 0,
            a: 0
          };
          return true;
        } else {
          var parsedColor = this.parse(strVal);
          if (parsedColor) {
            this.value = this.value = {
              h: parsedColor.h,
              s: parsedColor.s,
              b: parsedColor.b,
              a: parsedColor.a
            };
            if (!this.origFormat) {
              this.origFormat = parsedColor.format;
            }
          } else if (this.fallbackValue) {
            // if parser fails, defaults to fallbackValue if defined, otherwise the value won't be changed
            this.value = this.fallbackValue;
          }
        }
      }
      return false;
    },
    setHue: function(h) {
      this.value.h = 1 - h;
    },
    setSaturation: function(s) {
      this.value.s = s;
    },
    setBrightness: function(b) {
      this.value.b = 1 - b;
    },
    setAlpha: function(a) {
      this.value.a = Math.round((parseInt((1 - a) * 100, 10) / 100) * 100) / 100;
    },
    toRGB: function(h, s, b, a) {
      if (arguments.length === 0) {
        h = this.value.h;
        s = this.value.s;
        b = this.value.b;
        a = this.value.a;
      }

      h *= 360;
      var R, G, B, X, C;
      h = (h % 360) / 60;
      C = b * s;
      X = C * (1 - Math.abs(h % 2 - 1));
      R = G = B = b - C;

      h = ~~h;
      R += [C, X, 0, 0, X, C][h];
      G += [X, C, C, X, 0, 0][h];
      B += [0, 0, X, C, C, X][h];

      return {
        r: Math.round(R * 255),
        g: Math.round(G * 255),
        b: Math.round(B * 255),
        a: a
      };
    },
    toHex: function(ignoreFormat, h, s, b, a) {
      if (arguments.length <= 1) {
        h = this.value.h;
        s = this.value.s;
        b = this.value.b;
        a = this.value.a;
      }

      var prefix = '#';
      var rgb = this.toRGB(h, s, b, a);

      if (this.rgbaIsTransparent(rgb)) {
        return 'transparent';
      }

      if (!ignoreFormat) {
        prefix = (this.hexNumberSignPrefix ? '#' : '');
      }

      var hexStr = prefix + (
          (1 << 24) +
          (parseInt(rgb.r) << 16) +
          (parseInt(rgb.g) << 8) +
          parseInt(rgb.b))
        .toString(16)
        .slice(1);

      return hexStr;
    },
    toHSL: function(h, s, b, a) {
      if (arguments.length === 0) {
        h = this.value.h;
        s = this.value.s;
        b = this.value.b;
        a = this.value.a;
      }

      var H = h,
        L = (2 - s) * b,
        S = s * b;
      if (L > 0 && L <= 1) {
        S /= L;
      } else {
        S /= 2 - L;
      }
      L /= 2;
      if (S > 1) {
        S = 1;
      }
      return {
        h: isNaN(H) ? 0 : H,
        s: isNaN(S) ? 0 : S,
        l: isNaN(L) ? 0 : L,
        a: isNaN(a) ? 0 : a
      };
    },
    toAlias: function(r, g, b, a) {
      var c, rgb = (arguments.length === 0) ? this.toHex(true) : this.toHex(true, r, g, b, a);

      // support predef. colors in non-hex format too, as defined in the alias itself
      var original = this.origFormat === 'alias' ? rgb : this.toString(false, this.origFormat);

      for (var alias in this.colors) {
        c = this.colors[alias].toLowerCase().trim();
        if ((c === rgb) || (c === original)) {
          return alias;
        }
      }
      return false;
    },
    RGBtoHSB: function(r, g, b, a) {
      r /= 255;
      g /= 255;
      b /= 255;

      var H, S, V, C;
      V = Math.max(r, g, b);
      C = V - Math.min(r, g, b);
      H = (C === 0 ? null :
        V === r ? (g - b) / C :
        V === g ? (b - r) / C + 2 :
        (r - g) / C + 4
      );
      H = ((H + 360) % 6) * 60 / 360;
      S = C === 0 ? 0 : C / V;
      return {
        h: this._sanitizeNumber(H),
        s: S,
        b: V,
        a: this._sanitizeNumber(a)
      };
    },
    HueToRGB: function(p, q, h) {
      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
      if ((h * 6) < 1) {
        return p + (q - p) * h * 6;
      } else if ((h * 2) < 1) {
        return q;
      } else if ((h * 3) < 2) {
        return p + (q - p) * ((2 / 3) - h) * 6;
      } else {
        return p;
      }
    },
    HSLtoRGB: function(h, s, l, a) {
      if (s < 0) {
        s = 0;
      }
      var q;
      if (l <= 0.5) {
        q = l * (1 + s);
      } else {
        q = l + s - (l * s);
      }

      var p = 2 * l - q;

      var tr = h + (1 / 3);
      var tg = h;
      var tb = h - (1 / 3);

      var r = Math.round(this.HueToRGB(p, q, tr) * 255);
      var g = Math.round(this.HueToRGB(p, q, tg) * 255);
      var b = Math.round(this.HueToRGB(p, q, tb) * 255);
      return [r, g, b, this._sanitizeNumber(a)];
    },
    /**
     * @param {String} strVal
     * @returns {Object} Object containing h,s,b,a,format properties or FALSE if failed to parse
     */
    parse: function(strVal) {
      if (arguments.length === 0) {
        return false;
      }

      var that = this,
        result = false,
        isAlias = (typeof this.colors[strVal] !== 'undefined'),
        values, format;

      if (isAlias) {
        strVal = this.colors[strVal].toLowerCase().trim();
      }

      $.each(this.stringParsers, function(i, parser) {
        var match = parser.re.exec(strVal);
        values = match && parser.parse.apply(that, [match]);
        if (values) {
          result = {};
          format = (isAlias ? 'alias' : (parser.format ? parser.format : that.getValidFallbackFormat()));
          if (format.match(/hsla?/)) {
            result = that.RGBtoHSB.apply(that, that.HSLtoRGB.apply(that, values));
          } else {
            result = that.RGBtoHSB.apply(that, values);
          }
          if (result instanceof Object) {
            result.format = format;
          }
          return false; // stop iterating
        }
        return true;
      });
      return result;
    },
    getValidFallbackFormat: function() {
      var formats = [
        'rgba', 'rgb', 'hex', 'hsla', 'hsl'
      ];
      if (this.origFormat && (formats.indexOf(this.origFormat) !== -1)) {
        return this.origFormat;
      }
      if (this.fallbackFormat && (formats.indexOf(this.fallbackFormat) !== -1)) {
        return this.fallbackFormat;
      }

      return 'rgba'; // By default, return a format that will not lose the alpha info
    },
    /**
     *
     * @param {string} [format] (default: rgba)
     * @param {boolean} [translateAlias] Return real color for pre-defined (non-standard) aliases (default: false)
     * @param {boolean} [forceRawValue] Forces hashtag prefix when getting hex color (default: false)
     * @returns {String}
     */
    toString: function(forceRawValue, format, translateAlias) {
      format = format || this.origFormat || this.fallbackFormat;
      translateAlias = translateAlias || false;

      var c = false;

      switch (format) {
        case 'rgb':
          {
            c = this.toRGB();
            if (this.rgbaIsTransparent(c)) {
              return 'transparent';
            }
            return 'rgb(' + c.r + ',' + c.g + ',' + c.b + ')';
          }
          break;
        case 'rgba':
          {
            c = this.toRGB();
            return 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + c.a + ')';
          }
          break;
        case 'hsl':
          {
            c = this.toHSL();
            return 'hsl(' + Math.round(c.h * 360) + ',' + Math.round(c.s * 100) + '%,' + Math.round(c.l * 100) + '%)';
          }
          break;
        case 'hsla':
          {
            c = this.toHSL();
            return 'hsla(' + Math.round(c.h * 360) + ',' + Math.round(c.s * 100) + '%,' + Math.round(c.l * 100) + '%,' + c.a + ')';
          }
          break;
        case 'hex':
          {
            return this.toHex(forceRawValue);
          }
          break;
        case 'alias':
          {
            c = this.toAlias();

            if (c === false) {
              return this.toString(forceRawValue, this.getValidFallbackFormat());
            }

            if (translateAlias && !(c in Color.webColors) && (c in this.predefinedColors)) {
              return this.predefinedColors[c];
            }

            return c;
          }
        default:
          {
            return c;
          }
          break;
      }
    },
    // a set of RE's that can match strings and generate color tuples.
    // from John Resig color plugin
    // https://github.com/jquery/jquery-color/
    stringParsers: [{
      re: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,
      format: 'rgb',
      parse: function(execResult) {
        return [
          execResult[1],
          execResult[2],
          execResult[3],
          1
        ];
      }
    }, {
      re: /rgb\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
      format: 'rgb',
      parse: function(execResult) {
        return [
          2.55 * execResult[1],
          2.55 * execResult[2],
          2.55 * execResult[3],
          1
        ];
      }
    }, {
      re: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
      format: 'rgba',
      parse: function(execResult) {
        return [
          execResult[1],
          execResult[2],
          execResult[3],
          execResult[4]
        ];
      }
    }, {
      re: /rgba\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
      format: 'rgba',
      parse: function(execResult) {
        return [
          2.55 * execResult[1],
          2.55 * execResult[2],
          2.55 * execResult[3],
          execResult[4]
        ];
      }
    }, {
      re: /hsl\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
      format: 'hsl',
      parse: function(execResult) {
        return [
          execResult[1] / 360,
          execResult[2] / 100,
          execResult[3] / 100,
          execResult[4]
        ];
      }
    }, {
      re: /hsla\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
      format: 'hsla',
      parse: function(execResult) {
        return [
          execResult[1] / 360,
          execResult[2] / 100,
          execResult[3] / 100,
          execResult[4]
        ];
      }
    }, {
      re: /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
      format: 'hex',
      parse: function(execResult) {
        return [
          parseInt(execResult[1], 16),
          parseInt(execResult[2], 16),
          parseInt(execResult[3], 16),
          1
        ];
      }
    }, {
      re: /#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
      format: 'hex',
      parse: function(execResult) {
        return [
          parseInt(execResult[1] + execResult[1], 16),
          parseInt(execResult[2] + execResult[2], 16),
          parseInt(execResult[3] + execResult[3], 16),
          1
        ];
      }
    }],
    colorNameToHex: function(name) {
      if (typeof this.colors[name.toLowerCase()] !== 'undefined') {
        return this.colors[name.toLowerCase()];
      }
      return false;
    }
  };

  /*
   * Default plugin options
   */
  var defaults = {
    horizontal: false, // horizontal mode layout ?
    inline: false, //forces to show the colorpicker as an inline element
    color: false, //forces a color
    format: false, //forces a format
    input: 'input', // children input selector
    container: false, // container selector
    component: '.add-on, .input-group-addon', // children component selector
    fallbackColor: false, // fallback color value. null = keeps current color.
    fallbackFormat: 'hex', // fallback color format
    hexNumberSignPrefix: true, // put a '#' (number sign) before hex strings
    sliders: {
      saturation: {
        maxLeft: 100,
        maxTop: 100,
        callLeft: 'setSaturation',
        callTop: 'setBrightness'
      },
      hue: {
        maxLeft: 0,
        maxTop: 100,
        callLeft: false,
        callTop: 'setHue'
      },
      alpha: {
        maxLeft: 0,
        maxTop: 100,
        callLeft: false,
        callTop: 'setAlpha'
      }
    },
    slidersHorz: {
      saturation: {
        maxLeft: 100,
        maxTop: 100,
        callLeft: 'setSaturation',
        callTop: 'setBrightness'
      },
      hue: {
        maxLeft: 100,
        maxTop: 0,
        callLeft: 'setHue',
        callTop: false
      },
      alpha: {
        maxLeft: 100,
        maxTop: 0,
        callLeft: 'setAlpha',
        callTop: false
      }
    },
    template: '<div class="colorpicker dropdown-menu">' +
      '<div class="colorpicker-saturation"><i><b></b></i></div>' +
      '<div class="colorpicker-hue"><i></i></div>' +
      '<div class="colorpicker-alpha"><i></i></div>' +
      '<div class="colorpicker-color"><div /></div>' +
      '<div class="colorpicker-selectors"></div>' +
      '</div>',
    align: 'right',
    customClass: null, // custom class added to the colorpicker element
    colorSelectors: null // custom color aliases
  };

  /**
   * Colorpicker component class
   *
   * @param {Object|String} element
   * @param {Object} options
   * @constructor
   */
  var Colorpicker = function(element, options) {
    this.element = $(element).addClass('colorpicker-element');
    this.options = $.extend(true, {}, defaults, this.element.data(), options);
    this.component = this.options.component;
    this.component = (this.component !== false) ? this.element.find(this.component) : false;
    if (this.component && (this.component.length === 0)) {
      this.component = false;
    }
    this.container = (this.options.container === true) ? this.element : this.options.container;
    this.container = (this.container !== false) ? $(this.container) : false;

    // Is the element an input? Should we search inside for any input?
    this.input = this.element.is('input') ? this.element : (this.options.input ?
      this.element.find(this.options.input) : false);
    if (this.input && (this.input.length === 0)) {
      this.input = false;
    }
    // Set HSB color
    this.color = this.createColor(this.options.color !== false ? this.options.color : this.getValue());

    this.format = this.options.format !== false ? this.options.format : this.color.origFormat;

    if (this.options.color !== false) {
      this.updateInput(this.color);
      this.updateData(this.color);
    }

    this.disabled = false;

    // Setup picker
    var $picker = this.picker = $(this.options.template);
    if (this.options.customClass) {
      $picker.addClass(this.options.customClass);
    }
    if (this.options.inline) {
      $picker.addClass('colorpicker-inline colorpicker-visible');
    } else {
      $picker.addClass('colorpicker-hidden');
    }
    if (this.options.horizontal) {
      $picker.addClass('colorpicker-horizontal');
    }
    if (
      (['rgba', 'hsla', 'alias'].indexOf(this.format) !== -1) ||
      this.options.format === false ||
      this.getValue() === 'transparent'
    ) {
      $picker.addClass('colorpicker-with-alpha');
    }
    if (this.options.align === 'right') {
      $picker.addClass('colorpicker-right');
    }
    if (this.options.inline === true) {
      $picker.addClass('colorpicker-no-arrow');
    }
    if (this.options.colorSelectors) {
      var colorpicker = this,
        selectorsContainer = colorpicker.picker.find('.colorpicker-selectors');

      if (selectorsContainer.length > 0) {
        $.each(this.options.colorSelectors, function(name, color) {
          var $btn = $('<i />')
            .addClass('colorpicker-selectors-color')
            .css('background-color', color)
            .data('class', name).data('alias', name);

          $btn.on('mousedown.colorpicker touchstart.colorpicker', function(event) {
            event.preventDefault();
            colorpicker.setValue(
              colorpicker.format === 'alias' ? $(this).data('alias') : $(this).css('background-color')
            );
          });
          selectorsContainer.append($btn);
        });
        selectorsContainer.show().addClass('colorpicker-visible');
      }
    }

    // Prevent closing the colorpicker when clicking on itself
    $picker.on('mousedown.colorpicker touchstart.colorpicker', $.proxy(function(e) {
      if (e.target === e.currentTarget) {
        e.preventDefault();
      }
    }, this));

    // Bind click/tap events on the sliders
    $picker.find('.colorpicker-saturation, .colorpicker-hue, .colorpicker-alpha')
      .on('mousedown.colorpicker touchstart.colorpicker', $.proxy(this.mousedown, this));

    $picker.appendTo(this.container ? this.container : $('body'));

    // Bind other events
    if (this.input !== false) {
      this.input.on({
        'keyup.colorpicker': $.proxy(this.keyup, this)
      });
      this.input.on({
        'change.colorpicker': $.proxy(this.change, this)
      });
      if (this.component === false) {
        this.element.on({
          'focus.colorpicker': $.proxy(this.show, this)
        });
      }
      if (this.options.inline === false) {
        this.element.on({
          'focusout.colorpicker': $.proxy(this.hide, this)
        });
      }
    }

    if (this.component !== false) {
      this.component.on({
        'click.colorpicker': $.proxy(this.show, this)
      });
    }

    if ((this.input === false) && (this.component === false)) {
      this.element.on({
        'click.colorpicker': $.proxy(this.show, this)
      });
    }

    // for HTML5 input[type='color']
    if ((this.input !== false) && (this.component !== false) && (this.input.attr('type') === 'color')) {

      this.input.on({
        'click.colorpicker': $.proxy(this.show, this),
        'focus.colorpicker': $.proxy(this.show, this)
      });
    }
    this.update();

    $($.proxy(function() {
      this.element.trigger('create');
    }, this));
  };

  Colorpicker.Color = Color;

  Colorpicker.prototype = {
    constructor: Colorpicker,
    destroy: function() {
      this.picker.remove();
      this.element.removeData('colorpicker', 'color').off('.colorpicker');
      if (this.input !== false) {
        this.input.off('.colorpicker');
      }
      if (this.component !== false) {
        this.component.off('.colorpicker');
      }
      this.element.removeClass('colorpicker-element');
      this.element.trigger({
        type: 'destroy'
      });
    },
    reposition: function() {
      if (this.options.inline !== false || this.options.container) {
        return false;
      }
      var type = this.container && this.container[0] !== window.document.body ? 'position' : 'offset';
      var element = this.component || this.element;
      var offset = element[type]();
      if (this.options.align === 'right') {
        offset.left -= this.picker.outerWidth() - element.outerWidth();
      }
      this.picker.css({
        top: offset.top + element.outerHeight(),
        left: offset.left
      });
    },
    show: function(e) {
      if (this.isDisabled()) {
        // Don't show the widget if it's disabled (the input)
        return;
      }
      this.picker.addClass('colorpicker-visible').removeClass('colorpicker-hidden');
      this.reposition();
      $(window).on('resize.colorpicker', $.proxy(this.reposition, this));
      if (e && (!this.hasInput() || this.input.attr('type') === 'color')) {
        if (e.stopPropagation && e.preventDefault) {
          e.stopPropagation();
          e.preventDefault();
        }
      }
      if ((this.component || !this.input) && (this.options.inline === false)) {
        $(window.document).on({
          'mousedown.colorpicker': $.proxy(this.hide, this)
        });
      }
      this.element.trigger({
        type: 'showPicker',
        color: this.color
      });
    },
    hide: function(e) {
      if ((typeof e !== 'undefined') && e.target) {
        // Prevent hide if triggered by an event and an element inside the colorpicker has been clicked/touched
        if (
          $(e.currentTarget).parents('.colorpicker').length > 0 ||
          $(e.target).parents('.colorpicker').length > 0
        ) {
          return false;
        }
      }
      this.picker.addClass('colorpicker-hidden').removeClass('colorpicker-visible');
      $(window).off('resize.colorpicker', this.reposition);
      $(window.document).off({
        'mousedown.colorpicker': this.hide
      });
      this.update();
      this.element.trigger({
        type: 'hidePicker',
        color: this.color
      });
    },
    updateData: function(val) {
      val = val || this.color.toString(false, this.format);
      this.element.data('color', val);
      return val;
    },
    updateInput: function(val) {
      val = val || this.color.toString(false, this.format);
      if (this.input !== false) {
        this.input.prop('value', val);
        this.input.trigger('change');
      }
      return val;
    },
    updatePicker: function(val) {
      if (typeof val !== 'undefined') {
        this.color = this.createColor(val);
      }
      var sl = (this.options.horizontal === false) ? this.options.sliders : this.options.slidersHorz;
      var icns = this.picker.find('i');
      if (icns.length === 0) {
        return;
      }
      if (this.options.horizontal === false) {
        sl = this.options.sliders;
        icns.eq(1).css('top', sl.hue.maxTop * (1 - this.color.value.h)).end()
          .eq(2).css('top', sl.alpha.maxTop * (1 - this.color.value.a));
      } else {
        sl = this.options.slidersHorz;
        icns.eq(1).css('left', sl.hue.maxLeft * (1 - this.color.value.h)).end()
          .eq(2).css('left', sl.alpha.maxLeft * (1 - this.color.value.a));
      }
      icns.eq(0).css({
        'top': sl.saturation.maxTop - this.color.value.b * sl.saturation.maxTop,
        'left': this.color.value.s * sl.saturation.maxLeft
      });

      this.picker.find('.colorpicker-saturation')
        .css('backgroundColor', this.color.toHex(true, this.color.value.h, 1, 1, 1));

      this.picker.find('.colorpicker-alpha')
        .css('backgroundColor', this.color.toHex(true));

      this.picker.find('.colorpicker-color, .colorpicker-color div')
        .css('backgroundColor', this.color.toString(true, this.format));

      return val;
    },
    updateComponent: function(val) {
      var color;

      if (typeof val !== 'undefined') {
        color = this.createColor(val);
      } else {
        color = this.color;
      }

      if (this.component !== false) {
        var icn = this.component.find('i').eq(0);
        if (icn.length > 0) {
          icn.css({
            'backgroundColor': color.toString(true, this.format)
          });
        } else {
          this.component.css({
            'backgroundColor': color.toString(true, this.format)
          });
        }
      }

      return color.toString(false, this.format);
    },
    update: function(force) {
      var val;
      if ((this.getValue(false) !== false) || (force === true)) {
        // Update input/data only if the current value is not empty
        val = this.updateComponent();
        this.updateInput(val);
        this.updateData(val);
        this.updatePicker(); // only update picker if value is not empty
      }
      return val;

    },
    setValue: function(val) { // set color manually
      this.color = this.createColor(val);
      this.update(true);
      this.element.trigger({
        type: 'changeColor',
        color: this.color,
        value: val
      });
    },
    /**
     * Creates a new color using the instance options
     * @protected
     * @param {String} val
     * @returns {Color}
     */
    createColor: function(val) {
      return new Color(
        val ? val : null,
        this.options.colorSelectors,
        this.options.fallbackColor ? this.options.fallbackColor : this.color,
        this.options.fallbackFormat,
        this.options.hexNumberSignPrefix
      );
    },
    getValue: function(defaultValue) {
      defaultValue = (typeof defaultValue === 'undefined') ? this.options.fallbackColor : defaultValue;
      var val;
      if (this.hasInput()) {
        val = this.input.val();
      } else {
        val = this.element.data('color');
      }
      if ((val === undefined) || (val === '') || (val === null)) {
        // if not defined or empty, return default
        val = defaultValue;
      }
      return val;
    },
    hasInput: function() {
      return (this.input !== false);
    },
    isDisabled: function() {
      return this.disabled;
    },
    disable: function() {
      if (this.hasInput()) {
        this.input.prop('disabled', true);
      }
      this.disabled = true;
      this.element.trigger({
        type: 'disable',
        color: this.color,
        value: this.getValue()
      });
      return true;
    },
    enable: function() {
      if (this.hasInput()) {
        this.input.prop('disabled', false);
      }
      this.disabled = false;
      this.element.trigger({
        type: 'enable',
        color: this.color,
        value: this.getValue()
      });
      return true;
    },
    currentSlider: null,
    mousePointer: {
      left: 0,
      top: 0
    },
    mousedown: function(e) {
      if (!e.pageX && !e.pageY && e.originalEvent && e.originalEvent.touches) {
        e.pageX = e.originalEvent.touches[0].pageX;
        e.pageY = e.originalEvent.touches[0].pageY;
      }
      e.stopPropagation();
      e.preventDefault();

      var target = $(e.target);

      //detect the slider and set the limits and callbacks
      var zone = target.closest('div');
      var sl = this.options.horizontal ? this.options.slidersHorz : this.options.sliders;
      if (!zone.is('.colorpicker')) {
        if (zone.is('.colorpicker-saturation')) {
          this.currentSlider = $.extend({}, sl.saturation);
        } else if (zone.is('.colorpicker-hue')) {
          this.currentSlider = $.extend({}, sl.hue);
        } else if (zone.is('.colorpicker-alpha')) {
          this.currentSlider = $.extend({}, sl.alpha);
        } else {
          return false;
        }
        var offset = zone.offset();
        //reference to guide's style
        this.currentSlider.guide = zone.find('i')[0].style;
        this.currentSlider.left = e.pageX - offset.left;
        this.currentSlider.top = e.pageY - offset.top;
        this.mousePointer = {
          left: e.pageX,
          top: e.pageY
        };
        //trigger mousemove to move the guide to the current position
        $(window.document).on({
          'mousemove.colorpicker': $.proxy(this.mousemove, this),
          'touchmove.colorpicker': $.proxy(this.mousemove, this),
          'mouseup.colorpicker': $.proxy(this.mouseup, this),
          'touchend.colorpicker': $.proxy(this.mouseup, this)
        }).trigger('mousemove');
      }
      return false;
    },
    mousemove: function(e) {
      if (!e.pageX && !e.pageY && e.originalEvent && e.originalEvent.touches) {
        e.pageX = e.originalEvent.touches[0].pageX;
        e.pageY = e.originalEvent.touches[0].pageY;
      }
      e.stopPropagation();
      e.preventDefault();
      var left = Math.max(
        0,
        Math.min(
          this.currentSlider.maxLeft,
          this.currentSlider.left + ((e.pageX || this.mousePointer.left) - this.mousePointer.left)
        )
      );
      var top = Math.max(
        0,
        Math.min(
          this.currentSlider.maxTop,
          this.currentSlider.top + ((e.pageY || this.mousePointer.top) - this.mousePointer.top)
        )
      );
      this.currentSlider.guide.left = left + 'px';
      this.currentSlider.guide.top = top + 'px';
      if (this.currentSlider.callLeft) {
        this.color[this.currentSlider.callLeft].call(this.color, left / this.currentSlider.maxLeft);
      }
      if (this.currentSlider.callTop) {
        this.color[this.currentSlider.callTop].call(this.color, top / this.currentSlider.maxTop);
      }
      // Change format dynamically
      // Only occurs if user choose the dynamic format by
      // setting option format to false
      if (
        this.options.format === false &&
        (this.currentSlider.callTop === 'setAlpha' ||
          this.currentSlider.callLeft === 'setAlpha')
      ) {

        // Converting from hex / rgb to rgba
        if (this.color.value.a !== 1) {
          this.format = 'rgba';
          this.color.origFormat = 'rgba';
        }

        // Converting from rgba to hex
        else {
          this.format = 'hex';
          this.color.origFormat = 'hex';
        }
      }
      this.update(true);

      this.element.trigger({
        type: 'changeColor',
        color: this.color
      });
      return false;
    },
    mouseup: function(e) {
      e.stopPropagation();
      e.preventDefault();
      $(window.document).off({
        'mousemove.colorpicker': this.mousemove,
        'touchmove.colorpicker': this.mousemove,
        'mouseup.colorpicker': this.mouseup,
        'touchend.colorpicker': this.mouseup
      });
      return false;
    },
    change: function(e) {
      this.keyup(e);
    },
    keyup: function(e) {
      if ((e.keyCode === 38)) {
        if (this.color.value.a < 1) {
          this.color.value.a = Math.round((this.color.value.a + 0.01) * 100) / 100;
        }
        this.update(true);
      } else if ((e.keyCode === 40)) {
        if (this.color.value.a > 0) {
          this.color.value.a = Math.round((this.color.value.a - 0.01) * 100) / 100;
        }
        this.update(true);
      } else {
        this.color = this.createColor(this.input.val());
        // Change format dynamically
        // Only occurs if user choose the dynamic format by
        // setting option format to false
        if (this.color.origFormat && this.options.format === false) {
          this.format = this.color.origFormat;
        }
        if (this.getValue(false) !== false) {
          this.updateData();
          this.updateComponent();
          this.updatePicker();
        }
      }
      this.element.trigger({
        type: 'changeColor',
        color: this.color,
        value: this.input.val()
      });
    }
  };

  $.colorpicker = Colorpicker;

  $.fn.colorpicker = function(option) {
    var apiArgs = Array.prototype.slice.call(arguments, 1),
      isSingleElement = (this.length === 1),
      returnValue = null;

    var $jq = this.each(function() {
      var $this = $(this),
        inst = $this.data('colorpicker'),
        options = ((typeof option === 'object') ? option : {});

      if (!inst) {
        inst = new Colorpicker(this, options);
        $this.data('colorpicker', inst);
      }

      if (typeof option === 'string') {
        if ($.isFunction(inst[option])) {
          returnValue = inst[option].apply(inst, apiArgs);
        } else { // its a property ?
          if (apiArgs.length) {
            // set property
            inst[option] = apiArgs[0];
          }
          returnValue = inst[option];
        }
      } else {
        returnValue = $this;
      }
    });
    return isSingleElement ? returnValue : $jq;
  };

  $.fn.colorpicker.constructor = Colorpicker;

}));

/*!
 * Datepicker for Bootstrap v1.8.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

(function(factory){
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($, undefined){
	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function isUTCEquals(date1, date2) {
		return (
			date1.getUTCFullYear() === date2.getUTCFullYear() &&
			date1.getUTCMonth() === date2.getUTCMonth() &&
			date1.getUTCDate() === date2.getUTCDate()
		);
	}
	function alias(method, deprecationMsg){
		return function(){
			if (deprecationMsg !== undefined) {
				$.fn.datepicker.deprecated(deprecationMsg);
			}

			return this[method].apply(this, arguments);
		};
	}
	function isValidDate(d) {
		return d && !isNaN(d.getTime());
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
          // Use date arithmetic to allow dates with different times to match
          if (0 <= this[i].valueOf() - val && this[i].valueOf() - val < 1000*60*60*24)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.length = 0;
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		$.data(element, 'datepicker', this);
		this._process_options(options);

		this.dates = new DateArray();
		this.viewDate = this.o.defaultViewDate;
		this.focusDate = null;

		this.element = $(element);
		this.isInput = this.element.is('input');
		this.inputField = this.isInput ? this.element : this.element.find('input');
		this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		if (this.component && this.component.length === 0)
			this.component = false;
		this.isInline = !this.component && this.element.is('div');

		this.picker = $(DPGlobal.template);

		// Checking templates and inserting
		if (this._check_template(this.o.templates.leftArrow)) {
			this.picker.find('.prev').html(this.o.templates.leftArrow);
		}

		if (this._check_template(this.o.templates.rightArrow)) {
			this.picker.find('.next').html(this.o.templates.rightArrow);
		}

		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		if (this.o.calendarWeeks) {
			this.picker.find('.datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear')
				.attr('colspan', function(i, val){
					return Number(val) + 1;
				});
		}

		this._process_options({
			startDate: this._o.startDate,
			endDate: this._o.endDate,
			daysOfWeekDisabled: this.o.daysOfWeekDisabled,
			daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
			datesDisabled: this.o.datesDisabled
		});

		this._allow_update = false;
		this.setViewMode(this.o.startView);
		this._allow_update = true;

		this.fillDow();
		this.fillMonths();

		this.update();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_resolveViewName: function(view){
			$.each(DPGlobal.viewModes, function(i, viewMode){
				if (view === i || $.inArray(view, viewMode.names) !== -1){
					view = i;
					return false;
				}
			});

			return view;
		},

		_resolveDaysOfWeek: function(daysOfWeek){
			if (!$.isArray(daysOfWeek))
				daysOfWeek = daysOfWeek.split(/[,\s]*/);
			return $.map(daysOfWeek, Number);
		},

		_check_template: function(tmp){
			try {
				// If empty
				if (tmp === undefined || tmp === "") {
					return false;
				}
				// If no html, everything ok
				if ((tmp.match(/[<>]/g) || []).length <= 0) {
					return true;
				}
				// Checking if html is fine
				var jDom = $(tmp);
				return jDom.length > 0;
			}
			catch (ex) {
				return false;
			}
		},

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			// Retrieve view index from any aliases
			o.startView = this._resolveViewName(o.startView);
			o.minViewMode = this._resolveViewName(o.minViewMode);
			o.maxViewMode = this._resolveViewName(o.maxViewMode);

			// Check view is between min and max
			o.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, o.startView));

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = (o.weekStart + 6) % 7;

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = this._resolveDaysOfWeek(o.daysOfWeekDisabled||[]);
			o.daysOfWeekHighlighted = this._resolveDaysOfWeek(o.daysOfWeekHighlighted||[]);

			o.datesDisabled = o.datesDisabled||[];
			if (!$.isArray(o.datesDisabled)) {
				o.datesDisabled = o.datesDisabled.split(',');
			}
			o.datesDisabled = $.map(o.datesDisabled, function(d){
				return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return /^auto|left|right|top|bottom$/.test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return /^left|right$/.test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return /^top|bottom$/.test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
			if (o.defaultViewDate instanceof Date || typeof o.defaultViewDate === 'string') {
				o.defaultViewDate = DPGlobal.parseDate(o.defaultViewDate, format, o.language, o.assumeNearbyYear);
			} else if (o.defaultViewDate) {
				var year = o.defaultViewDate.year || new Date().getFullYear();
				var month = o.defaultViewDate.month || 0;
				var day = o.defaultViewDate.day || 1;
				o.defaultViewDate = UTCDate(year, month, day);
			} else {
				o.defaultViewDate = UTCToday();
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				} else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				} else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
            var events = {
                keyup: $.proxy(function(e){
                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                        this.update();
                }, this),
                keydown: $.proxy(this.keydown, this),
                paste: $.proxy(this.paste, this)
            };

            if (this.o.showOnFocus === true) {
                events.focus = $.proxy(this.show, this);
            }

            if (this.isInput) { // single input
                this._events = [
                    [this.element, events]
                ];
            }
            // component: input + button
            else if (this.component && this.inputField.length) {
                this._events = [
                    // For components that are not readonly, allow keyboard nav
                    [this.inputField, events],
                    [this.component, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			if (this.o.immediateUpdates) {
				// Trigger input updates immediately on changed year/month
				this._events.push([this.element, {
					'changeYear changeMonth': $.proxy(function(e){
						this.update(e.date);
					}, this)
				}]);
			}

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[this.picker, '.prev, .next', {
					click: $.proxy(this.navArrowsClick, this)
				}],
				[this.picker, '.day:not(.disabled)', {
					click: $.proxy(this.dayCellClick, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					'mousedown touchstart': $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length ||
							this.isInline
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				viewMode: this.viewMode,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					} else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (this.inputField.prop('disabled') || (this.inputField.prop('readonly') && this.o.enableOnReadonly === false))
				return;
			if (!this.isInline)
				this.picker.appendTo(this.o.container);
			this.place();
			this.picker.show();
			this._attachSecondaryEvents();
			this._trigger('show');
			if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
				$(this.element).blur();
			}
			return this;
		},

		hide: function(){
			if (this.isInline || !this.picker.is(':visible'))
				return this;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.setViewMode(this.o.startView);

			if (this.o.forceParse && this.inputField.val())
				this.setValue();
			this._trigger('hide');
			return this;
		},

		destroy: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
			return this;
		},

		paste: function(e){
			var dateString;
			if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types
				&& $.inArray('text/plain', e.originalEvent.clipboardData.types) !== -1) {
				dateString = e.originalEvent.clipboardData.getData('text/plain');
			} else if (window.clipboardData) {
				dateString = window.clipboardData.getData('Text');
			} else {
				return;
			}
			this.setDate(dateString);
			this.update();
			e.preventDefault();
		},

		_utc_to_local: function(utc){
			if (!utc) {
				return utc;
			}

			var local = new Date(utc.getTime() + (utc.getTimezoneOffset() * 60000));

			if (local.getTimezoneOffset() !== utc.getTimezoneOffset()) {
				local = new Date(utc.getTime() + (local.getTimezoneOffset() * 60000));
			}

			return local;
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && UTCDate(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate());
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			var selected_date = this.dates.get(-1);
			if (selected_date !== undefined) {
				return new Date(selected_date);
			} else {
				return null;
			}
		},

		clearDates: function(){
			this.inputField.val('');
			this.update();
			this._trigger('changeDate');

			if (this.o.autoclose) {
				this.hide();
			}
		},

		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.setDates.apply(this, $.map(args, this._utc_to_local));
			return this;
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),
		remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			this.inputField.val(formatted);
			return this;
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		getStartDate: function(){
			return this.o.startDate;
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		getEndDate: function(){
			return this.o.endDate;
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			return this;
		},

		setDaysOfWeekHighlighted: function(daysOfWeekHighlighted){
			this._process_options({daysOfWeekHighlighted: daysOfWeekHighlighted});
			this.update();
			return this;
		},

		setDatesDisabled: function(datesDisabled){
			this._process_options({datesDisabled: datesDisabled});
			this.update();
			return this;
		},

		place: function(){
			if (this.isInline)
				return this;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				container = $(this.o.container),
				windowWidth = container.width(),
				scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),
				appendOffset = container.offset();

			var parentsZindex = [0];
			this.element.parents().each(function(){
				var itemZIndex = $(this).css('z-index');
				if (itemZIndex !== 'auto' && Number(itemZIndex) !== 0) parentsZindex.push(Number(itemZIndex));
			});
			var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left - appendOffset.left;
			var top = offset.top - appendOffset.top;

			if (this.o.container !== 'body') {
				top += scrollTop;
			}

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				if (offset.left < 0) {
					// component is outside the window on the left side. Move it into visible range
					this.picker.addClass('datepicker-orient-left');
					left -= offset.left - visualPadding;
				} else if (left + calendarWidth > windowWidth) {
					// the calendar passes the widow right edge. Align it to component right side
					this.picker.addClass('datepicker-orient-right');
					left += width - calendarWidth;
				} else {
					if (this.o.rtl) {
						// Default to right
						this.picker.addClass('datepicker-orient-right');
					} else {
						// Default to left
						this.picker.addClass('datepicker-orient-left');
					}
				}
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + top - calendarHeight;
				yorient = top_overflow < 0 ? 'bottom' : 'top';
			}

			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));
			else
				top += height;

			if (this.o.rtl) {
				var right = windowWidth - (left + width);
				this.picker.css({
					top: top,
					right: right,
					zIndex: zIndex
				});
			} else {
				this.picker.css({
					top: top,
					left: left,
					zIndex: zIndex
				});
			}
			return this;
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return this;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			} else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.inputField.val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					!this.dateWithinRange(date) ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.o.updateViewDate) {
				if (this.dates.length)
					this.viewDate = new Date(this.dates.get(-1));
				else if (this.viewDate < this.o.startDate)
					this.viewDate = new Date(this.o.startDate);
				else if (this.viewDate > this.o.endDate)
					this.viewDate = new Date(this.o.endDate);
				else
					this.viewDate = this.o.defaultViewDate;
			}

			if (fromArgs){
				// setting date by clicking
				this.setValue();
				this.element.change();
			}
			else if (this.dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates) && fromArgs) {
					this._trigger('changeDate');
					this.element.change();
				}
			}
			if (!this.dates.length && oldDates.length) {
				this._trigger('clearDate');
				this.element.change();
			}

			this.fill();
			return this;
		},

		fillDow: function(){
      if (this.o.showWeekDays) {
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				html += '<th class="cw">&#160;</th>';
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow';
        if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) !== -1)
          html += ' disabled';
        html += '">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
      }
		},

		fillMonths: function(){
      var localDate = this._utc_to_local(this.viewDate);
			var html = '';
			var focused;
			for (var i = 0; i < 12; i++){
				focused = localDate && localDate.getMonth() === i ? ' focused' : '';
				html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i] + '</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = UTCToday();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			} else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with UTC today, not local today
			if (this.o.todayHighlight && isUTCEquals(date, today)) {
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (!this.dateWithinRange(date)){
				cls.push('disabled');
			}
			if (this.dateIsDisabled(date)){
				cls.push('disabled', 'disabled-date');
			}
			if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1){
				cls.push('highlighted');
			}

			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
				if (date.valueOf() === this.range[0]){
          cls.push('range-start');
        }
        if (date.valueOf() === this.range[this.range.length-1]){
          cls.push('range-end');
        }
			}
			return cls;
		},

		_fill_yearsView: function(selector, cssClass, factor, year, startYear, endYear, beforeFn){
			var html = '';
			var step = factor / 10;
			var view = this.picker.find(selector);
			var startVal = Math.floor(year / factor) * factor;
			var endVal = startVal + step * 9;
			var focusedVal = Math.floor(this.viewDate.getFullYear() / step) * step;
			var selected = $.map(this.dates, function(d){
				return Math.floor(d.getUTCFullYear() / step) * step;
			});

			var classes, tooltip, before;
			for (var currVal = startVal - step; currVal <= endVal + step; currVal += step) {
				classes = [cssClass];
				tooltip = null;

				if (currVal === startVal - step) {
					classes.push('old');
				} else if (currVal === endVal + step) {
					classes.push('new');
				}
				if ($.inArray(currVal, selected) !== -1) {
					classes.push('active');
				}
				if (currVal < startYear || currVal > endYear) {
					classes.push('disabled');
				}
				if (currVal === focusedVal) {
				  classes.push('focused');
        }

				if (beforeFn !== $.noop) {
					before = beforeFn(new Date(currVal, 0, 1));
					if (before === undefined) {
						before = {};
					} else if (typeof before === 'boolean') {
						before = {enabled: before};
					} else if (typeof before === 'string') {
						before = {classes: before};
					}
					if (before.enabled === false) {
						classes.push('disabled');
					}
					if (before.classes) {
						classes = classes.concat(before.classes.split(/\s+/));
					}
					if (before.tooltip) {
						tooltip = before.tooltip;
					}
				}

				html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + currVal + '</span>';
			}

			view.find('.datepicker-switch').text(startVal + '-' + endVal);
			view.find('td').html(html);
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
				tooltip,
				before;
			if (isNaN(year) || isNaN(month))
				return;
			this.picker.find('.datepicker-days .datepicker-switch')
						.text(DPGlobal.formatDate(d, titleFormat, this.o.language));
			this.picker.find('tfoot .today')
						.text(todaytxt)
						.css('display', this.o.todayBtn === true || this.o.todayBtn === 'linked' ? 'table-cell' : 'none');
			this.picker.find('tfoot .clear')
						.text(cleartxt)
						.css('display', this.o.clearBtn === true ? 'table-cell' : 'none');
			this.picker.find('thead .datepicker-title')
						.text(this.o.title)
						.css('display', typeof this.o.title === 'string' && this.o.title !== '' ? 'table-cell' : 'none');
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month, 0),
				day = prevMonth.getUTCDate();
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			if (prevMonth.getUTCFullYear() < 100){
        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
      }
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var weekDay, clsName;
			while (prevMonth.valueOf() < nextMonth){
				weekDay = prevMonth.getUTCDay();
				if (weekDay === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - weekDay - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek = (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');
					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				var content = prevMonth.getUTCDate();

				if (this.o.beforeShowDay !== $.noop){
					before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof before === 'boolean')
						before = {enabled: before};
					else if (typeof before === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
					if (before.content)
						content = before.content;
				}

				//Check if uniqueSort exists (supported by jquery >=1.12 and >=2.2)
				//Fallback to unique function for older jquery versions
				if ($.isFunction($.uniqueSort)) {
					clsName = $.uniqueSort(clsName);
				} else {
					clsName = $.unique(clsName);
				}

				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + ' data-date="' + prevMonth.getTime().toString() + '">' + content + '</td>');
				tooltip = null;
				if (weekDay === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
			}
			this.picker.find('.datepicker-days tbody').html(html.join(''));

			var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';
			var months = this.picker.find('.datepicker-months')
						.find('.datepicker-switch')
							.text(this.o.maxViewMode < 2 ? monthsTitle : year)
							.end()
						.find('tbody span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			if (this.o.beforeShowMonth !== $.noop){
				var that = this;
				$.each(months, function(i, month){
          var moDate = new Date(year, i, 1);
          var before = that.o.beforeShowMonth(moDate);
					if (before === undefined)
						before = {};
					else if (typeof before === 'boolean')
						before = {enabled: before};
					else if (typeof before === 'string')
						before = {classes: before};
					if (before.enabled === false && !$(month).hasClass('disabled'))
					    $(month).addClass('disabled');
					if (before.classes)
					    $(month).addClass(before.classes);
					if (before.tooltip)
					    $(month).prop('title', before.tooltip);
				});
			}

			// Generating decade/years picker
			this._fill_yearsView(
				'.datepicker-years',
				'year',
				10,
				year,
				startYear,
				endYear,
				this.o.beforeShowYear
			);

			// Generating century/decades picker
			this._fill_yearsView(
				'.datepicker-decades',
				'decade',
				100,
				year,
				startYear,
				endYear,
				this.o.beforeShowDecade
			);

			// Generating millennium/centuries picker
			this._fill_yearsView(
				'.datepicker-centuries',
				'century',
				1000,
				year,
				startYear,
				endYear,
				this.o.beforeShowCentury
			);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				prevIsDisabled,
				nextIsDisabled,
				factor = 1;
			switch (this.viewMode){
				case 4:
					factor *= 10;
					/* falls through */
				case 3:
					factor *= 10;
					/* falls through */
				case 2:
					factor *= 10;
					/* falls through */
				case 1:
					prevIsDisabled = Math.floor(year / factor) * factor < startYear;
					nextIsDisabled = Math.floor(year / factor) * factor + factor > endYear;
					break;
				case 0:
					prevIsDisabled = year <= startYear && month < startMonth;
					nextIsDisabled = year >= endYear && month > endMonth;
					break;
			}

			this.picker.find('.prev').toggleClass('disabled', prevIsDisabled);
			this.picker.find('.next').toggleClass('disabled', nextIsDisabled);
		},

		click: function(e){
			e.preventDefault();
			e.stopPropagation();

			var target, dir, day, year, month;
			target = $(e.target);

			// Clicked on the switch
			if (target.hasClass('datepicker-switch') && this.viewMode !== this.o.maxViewMode){
				this.setViewMode(this.viewMode + 1);
			}

			// Clicked on today button
			if (target.hasClass('today') && !target.hasClass('day')){
				this.setViewMode(0);
				this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
			}

			// Clicked on clear button
			if (target.hasClass('clear')){
				this.clearDates();
			}

			if (!target.hasClass('disabled')){
				// Clicked on a month, year, decade, century
				if (target.hasClass('month')
						|| target.hasClass('year')
						|| target.hasClass('decade')
						|| target.hasClass('century')) {
					this.viewDate.setUTCDate(1);

					day = 1;
					if (this.viewMode === 1){
						month = target.parent().find('span').index(target);
						year = this.viewDate.getUTCFullYear();
						this.viewDate.setUTCMonth(month);
					} else {
						month = 0;
						year = Number(target.text());
						this.viewDate.setUTCFullYear(year);
					}

					this._trigger(DPGlobal.viewModes[this.viewMode - 1].e, this.viewDate);

					if (this.viewMode === this.o.minViewMode){
						this._setDate(UTCDate(year, month, day));
					} else {
						this.setViewMode(this.viewMode - 1);
						this.fill();
					}
				}
			}

			if (this.picker.is(':visible') && this._focused_from){
				this._focused_from.focus();
			}
			delete this._focused_from;
		},

		dayCellClick: function(e){
			var $target = $(e.currentTarget);
			var timestamp = $target.data('date');
			var date = new Date(timestamp);

			if (this.o.updateViewDate) {
				if (date.getUTCFullYear() !== this.viewDate.getUTCFullYear()) {
					this._trigger('changeYear', this.viewDate);
				}

				if (date.getUTCMonth() !== this.viewDate.getUTCMonth()) {
					this._trigger('changeMonth', this.viewDate);
				}
			}
			this._setDate(date);
		},

		// Clicked on prev or next
		navArrowsClick: function(e){
			var $target = $(e.currentTarget);
			var dir = $target.hasClass('prev') ? -1 : 1;
			if (this.viewMode !== 0){
				dir *= DPGlobal.viewModes[this.viewMode].navStep * 12;
			}
			this.viewDate = this.moveMonth(this.viewDate, dir);
			this._trigger(DPGlobal.viewModes[this.viewMode].e, this.viewDate);
			this.fill();
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}

			if (ix !== -1){
				if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive){
					this.dates.remove(ix);
				}
			} else if (this.o.multidate === false) {
				this.dates.clear();
				this.dates.push(date);
			}
			else {
				this.dates.push(date);
			}

			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if ((!which && this.o.updateViewDate) || which === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			if (!which || which !== 'view') {
				this._trigger('changeDate');
			}
			this.inputField.trigger('change');
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveDay: function(date, dir){
			var newDate = new Date(date);
			newDate.setUTCDate(date.getUTCDate() + dir);

			return newDate;
		},

		moveWeek: function(date, dir){
			return this.moveDay(date, dir * 7);
		},

		moveMonth: function(date, dir){
			if (!isValidDate(date))
				return this.o.defaultViewDate;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		moveAvailableDate: function(date, dir, fn){
			do {
				date = this[fn](date, dir);

				if (!this.dateWithinRange(date))
					return false;

				fn = 'moveDay';
			}
			while (this.dateIsDisabled(date));

			return date;
		},

		weekOfDateIsDisabled: function(date){
			return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
		},

		dateIsDisabled: function(date){
			return (
				this.weekOfDateIsDisabled(date) ||
				$.grep(this.o.datesDisabled, function(d){
					return isUTCEquals(date, d);
				}).length > 0
			);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (!this.picker.is(':visible')){
				if (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker
					this.show();
					e.stopPropagation();
        }
				return;
			}
			var dateChanged = false,
				dir, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					e.stopPropagation();
					break;
				case 37: // left
				case 38: // up
				case 39: // right
				case 40: // down
					if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)
						break;
					dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;
          if (this.viewMode === 0) {
  					if (e.ctrlKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');

  						if (newViewDate)
  							this._trigger('changeYear', this.viewDate);
  					} else if (e.shiftKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');

  						if (newViewDate)
  							this._trigger('changeMonth', this.viewDate);
  					} else if (e.keyCode === 37 || e.keyCode === 39){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
  					} else if (!this.weekOfDateIsDisabled(focusDate)){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
  					}
          } else if (this.viewMode === 1) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
          } else if (this.viewMode === 2) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
          }
					if (newViewDate){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 13: // enter
					if (!this.o.forceParse)
						break;
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					if (this.o.keyboardNavigation) {
						this._toggle_multidate(focusDate);
						dateChanged = true;
					}
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						e.stopPropagation();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				this.inputField.trigger('change');
			}
		},

		setViewMode: function(viewMode){
			this.viewMode = viewMode;
			this.picker
				.children('div')
				.hide()
				.filter('.datepicker-' + DPGlobal.viewModes[this.viewMode].clsName)
					.show();
			this.updateNavArrows();
      this._trigger('changeViewMode', new Date(this.viewDate));
		}
	};

	var DateRangePicker = function(element, options){
		$.data(element, 'datepicker', this);
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		this.keepEmptyValues = options.keepEmptyValues;
		delete options.keepEmptyValues;

		datepickerPlugin.call($(this.inputs), options)
			.on('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $.data(i, 'datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		clearDates: function(){
			$.each(this.pickers, function(i, p){
				p.clearDates();
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $.data(e.target, 'datepicker');

			if (dp === undefined) {
				return;
			}

			var new_date = dp.getUTCDate(),
				keep_empty_values = this.keepEmptyValues,
				i = $.inArray(e.target, this.inputs),
				j = i - 1,
				k = i + 1,
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate() && (p === dp || !keep_empty_values))
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[j]){
				// Date being moved earlier/left
				while (j >= 0 && new_date < this.dates[j]){
					this.pickers[j--].setUTCDate(new_date);
				}
			} else if (new_date > this.dates[k]){
				// Date being moved later/right
				while (k < l && new_date > this.dates[k]){
					this.pickers[k++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		destroy: function(){
			$.map(this.pickers, function(p){ p.destroy(); });
			$(this.inputs).off('changeDate', this.dateUpdated);
			delete this.element.data().datepicker;
		},
		remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead')
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	var datepickerPlugin = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.hasClass('input-daterange') || opts.inputs){
					$.extend(opts, {
						inputs: opts.inputs || $this.find('input').toArray()
					});
					data = new DateRangePicker(this, opts);
				}
				else {
					data = new Datepicker(this, opts);
				}
				$this.data('datepicker', data);
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
			}
		});

		if (
			internal_return === undefined ||
			internal_return instanceof Datepicker ||
			internal_return instanceof DateRangePicker
		)
			return this;

		if (this.length > 1)
			throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');
		else
			return internal_return;
	};
	$.fn.datepicker = datepickerPlugin;

	var defaults = $.fn.datepicker.defaults = {
		assumeNearbyYear: false,
		autoclose: false,
		beforeShowDay: $.noop,
		beforeShowMonth: $.noop,
		beforeShowYear: $.noop,
		beforeShowDecade: $.noop,
		beforeShowCentury: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		toggleActive: false,
		daysOfWeekDisabled: [],
		daysOfWeekHighlighted: [],
		datesDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keepEmptyValues: false,
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		maxViewMode: 4,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		updateViewDate: true,
		weekStart: 0,
		disableTouchKeyboard: false,
		enableOnReadonly: true,
		showOnFocus: true,
		zIndexOffset: 10,
		container: 'body',
		immediateUpdates: false,
		title: '',
		templates: {
			leftArrow: '&#x00AB;',
			rightArrow: '&#x00BB;'
		},
    showWeekDays: true
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear",
			titleFormat: "MM yyyy"
		}
	};

	var DPGlobal = {
		viewModes: [
			{
				names: ['days', 'month'],
				clsName: 'days',
				e: 'changeMonth'
			},
			{
				names: ['months', 'year'],
				clsName: 'months',
				e: 'changeYear',
				navStep: 1
			},
			{
				names: ['years', 'decade'],
				clsName: 'years',
				e: 'changeDecade',
				navStep: 10
			},
			{
				names: ['decades', 'century'],
				clsName: 'decades',
				e: 'changeCentury',
				navStep: 100
			},
			{
				names: ['centuries', 'millennium'],
				clsName: 'centuries',
				e: 'changeMillennium',
				navStep: 1000
			}
		],
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')
                return format;
            // IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language, assumeNearby){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toValue)
				return format.toValue(date, format, language);
			var fn_map = {
					d: 'moveDay',
					m: 'moveMonth',
					w: 'moveWeek',
					y: 'moveYear'
				},
				dateAliases = {
					yesterday: '-1d',
					today: '+0d',
					tomorrow: '+1d'
				},
				parts, part, dir, i, fn;
			if (date in dateAliases){
				date = dateAliases[date];
			}
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(date)){
				parts = date.match(/([\-+]\d+)([dmwy])/gi);
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = parts[i].match(/([\-+]\d+)([dmwy])/i);
					dir = Number(part[1]);
					fn = fn_map[part[2].toLowerCase()];
					date = Datepicker.prototype[fn](date, dir);
				}
				return Datepicker.prototype._zero_utc_time(date);
			}

			parts = date && date.match(this.nonpunctuation) || [];

			function applyNearbyYear(year, threshold){
				if (threshold === true)
					threshold = 10;

				// if year is 2 digits or less, than the user most likely is trying to get a recent century
				if (year < 100){
					year += 2000;
					// if the new year is more than threshold years in advance, use last century
					if (year > ((new Date()).getFullYear()+threshold)){
						year -= 100;
					}
				}

				return year;
			}

			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['yy'] = setters_map['yyyy'];
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCToday();
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m.toLowerCase() === p.toLowerCase();
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toDisplay)
                return format.toDisplay(date, format, language);
            var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
			              '<tr>'+
			                '<th colspan="7" class="datepicker-title"></th>'+
			              '</tr>'+
							'<tr>'+
								'<th class="prev">'+defaults.templates.leftArrow+'</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">'+defaults.templates.rightArrow+'</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-decades">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-centuries">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};

	/* DATEPICKER VERSION
	 * =================== */
	$.fn.datepicker.version = '1.8.0';

	$.fn.datepicker.deprecated = function(msg){
		var console = window.console;
		if (console && console.warn) {
			console.warn('DEPRECATED: ' + msg);
		}
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			datepickerPlugin.call($this, 'show');
		}
	);
	$(function(){
		datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
	});

}));

/*!
 * iCheck v1.0.2, http://git.io/arlzeA
 * ===================================
 * Powerful jQuery and Zepto plugin for checkboxes and radio buttons customization
 *
 * (c) 2013 Damir Sultanov, http://fronteed.com
 * MIT Licensed
 */

(function($) {

  // Cached vars
  var _iCheck = 'iCheck',
    _iCheckHelper = _iCheck + '-helper',
    _checkbox = 'checkbox',
    _radio = 'radio',
    _checked = 'checked',
    _unchecked = 'un' + _checked,
    _disabled = 'disabled',
    _determinate = 'determinate',
    _indeterminate = 'in' + _determinate,
    _update = 'update',
    _type = 'type',
    _click = 'click',
    _touch = 'touchbegin.i touchend.i',
    _add = 'addClass',
    _remove = 'removeClass',
    _callback = 'trigger',
    _label = 'label',
    _cursor = 'cursor',
    _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);

  // Plugin init
  $.fn[_iCheck] = function(options, fire) {

    // Walker
    var handle = 'input[type="' + _checkbox + '"], input[type="' + _radio + '"]',
      stack = $(),
      walker = function(object) {
        object.each(function() {
          var self = $(this);

          if (self.is(handle)) {
            stack = stack.add(self);
          } else {
            stack = stack.add(self.find(handle));
          }
        });
      };

    // Check if we should operate with some method
    if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(options)) {

      // Normalize method's name
      options = options.toLowerCase();

      // Find checkboxes and radio buttons
      walker(this);

      return stack.each(function() {
        var self = $(this);

        if (options == 'destroy') {
          tidy(self, 'ifDestroyed');
        } else {
          operate(self, true, options);
        }

        // Fire method's callback
        if ($.isFunction(fire)) {
          fire();
        }
      });

    // Customization
    } else if (typeof options == 'object' || !options) {

      // Check if any options were passed
      var settings = $.extend({
          checkedClass: _checked,
          disabledClass: _disabled,
          indeterminateClass: _indeterminate,
          labelHover: true
        }, options),

        selector = settings.handle,
        hoverClass = settings.hoverClass || 'hover',
        focusClass = settings.focusClass || 'focus',
        activeClass = settings.activeClass || 'active',
        labelHover = !!settings.labelHover,
        labelHoverClass = settings.labelHoverClass || 'hover',

        // Setup clickable area
        area = ('' + settings.increaseArea).replace('%', '') | 0;

      // Selector limit
      if (selector == _checkbox || selector == _radio) {
        handle = 'input[type="' + selector + '"]';
      }

      // Clickable area limit
      if (area < -50) {
        area = -50;
      }

      // Walk around the selector
      walker(this);

      return stack.each(function() {
        var self = $(this);

        // If already customized
        tidy(self);

        var node = this,
          id = node.id,

          // Layer styles
          offset = -area + '%',
          size = 100 + (area * 2) + '%',
          layer = {
            position: 'absolute',
            top: offset,
            left: offset,
            display: 'block',
            width: size,
            height: size,
            margin: 0,
            padding: 0,
            background: '#fff',
            border: 0,
            opacity: 0
          },

          // Choose how to hide input
          hide = _mobile ? {
            position: 'absolute',
            visibility: 'hidden'
          } : area ? layer : {
            position: 'absolute',
            opacity: 0
          },

          // Get proper class
          className = node[_type] == _checkbox ? settings.checkboxClass || 'i' + _checkbox : settings.radioClass || 'i' + _radio,

          // Find assigned labels
          label = $(_label + '[for="' + id + '"]').add(self.closest(_label)),

          // Check ARIA option
          aria = !!settings.aria,

          // Set ARIA placeholder
          ariaID = _iCheck + '-' + Math.random().toString(36).substr(2,6),

          // Parent & helper
          parent = '<div class="' + className + '" ' + (aria ? 'role="' + node[_type] + '" ' : ''),
          helper;

        // Set ARIA "labelledby"
        if (aria) {
          label.each(function() {
            parent += 'aria-labelledby="';

            if (this.id) {
              parent += this.id;
            } else {
              this.id = ariaID;
              parent += ariaID;
            }

            parent += '"';
          });
        }

        // Wrap input
        parent = self.wrap(parent + '/>')[_callback]('ifCreated').parent().append(settings.insert);

        // Layer addition
        helper = $('<ins class="' + _iCheckHelper + '"/>').css(layer).appendTo(parent);

        // Finalize customization
        self.data(_iCheck, {o: settings, s: self.attr('style')}).css(hide);
        !!settings.inheritClass && parent[_add](node.className || '');
        !!settings.inheritID && id && parent.attr('id', _iCheck + '-' + id);
        parent.css('position') == 'static' && parent.css('position', 'relative');
        operate(self, true, _update);

        // Label events
        if (label.length) {
          label.on(_click + '.i mouseover.i mouseout.i ' + _touch, function(event) {
            var type = event[_type],
              item = $(this);

            // Do nothing if input is disabled
            if (!node[_disabled]) {

              // Click
              if (type == _click) {
                if ($(event.target).is('a')) {
                  return;
                }
                operate(self, false, true);

              // Hover state
              } else if (labelHover) {

                // mouseout|touchend
                if (/ut|nd/.test(type)) {
                  parent[_remove](hoverClass);
                  item[_remove](labelHoverClass);
                } else {
                  parent[_add](hoverClass);
                  item[_add](labelHoverClass);
                }
              }

              if (_mobile) {
                event.stopPropagation();
              } else {
                return false;
              }
            }
          });
        }

        // Input events
        self.on(_click + '.i focus.i blur.i keyup.i keydown.i keypress.i', function(event) {
          var type = event[_type],
            key = event.keyCode;

          // Click
          if (type == _click) {
            return false;

          // Keydown
          } else if (type == 'keydown' && key == 32) {
            if (!(node[_type] == _radio && node[_checked])) {
              if (node[_checked]) {
                off(self, _checked);
              } else {
                on(self, _checked);
              }
            }

            return false;

          // Keyup
          } else if (type == 'keyup' && node[_type] == _radio) {
            !node[_checked] && on(self, _checked);

          // Focus/blur
          } else if (/us|ur/.test(type)) {
            parent[type == 'blur' ? _remove : _add](focusClass);
          }
        });

        // Helper events
        helper.on(_click + ' mousedown mouseup mouseover mouseout ' + _touch, function(event) {
          var type = event[_type],

            // mousedown|mouseup
            toggle = /wn|up/.test(type) ? activeClass : hoverClass;

          // Do nothing if input is disabled
          if (!node[_disabled]) {

            // Click
            if (type == _click) {
              operate(self, false, true);

            // Active and hover states
            } else {

              // State is on
              if (/wn|er|in/.test(type)) {

                // mousedown|mouseover|touchbegin
                parent[_add](toggle);

              // State is off
              } else {
                parent[_remove](toggle + ' ' + activeClass);
              }

              // Label hover
              if (label.length && labelHover && toggle == hoverClass) {

                // mouseout|touchend
                label[/ut|nd/.test(type) ? _remove : _add](labelHoverClass);
              }
            }

            if (_mobile) {
              event.stopPropagation();
            } else {
              return false;
            }
          }
        });
      });
    } else {
      return this;
    }
  };

  // Do something with inputs
  function operate(input, direct, method) {
    var node = input[0],
      state = /er/.test(method) ? _indeterminate : /bl/.test(method) ? _disabled : _checked,
      active = method == _update ? {
        checked: node[_checked],
        disabled: node[_disabled],
        indeterminate: input.attr(_indeterminate) == 'true' || input.attr(_determinate) == 'false'
      } : node[state];

    // Check, disable or indeterminate
    if (/^(ch|di|in)/.test(method) && !active) {
      on(input, state);

    // Uncheck, enable or determinate
    } else if (/^(un|en|de)/.test(method) && active) {
      off(input, state);

    // Update
    } else if (method == _update) {

      // Handle states
      for (var each in active) {
        if (active[each]) {
          on(input, each, true);
        } else {
          off(input, each, true);
        }
      }

    } else if (!direct || method == 'toggle') {

      // Helper or label was clicked
      if (!direct) {
        input[_callback]('ifClicked');
      }

      // Toggle checked state
      if (active) {
        if (node[_type] !== _radio) {
          off(input, state);
        }
      } else {
        on(input, state);
      }
    }
  }

  // Add checked, disabled or indeterminate state
  function on(input, state, keep) {
    var node = input[0],
      parent = input.parent(),
      checked = state == _checked,
      indeterminate = state == _indeterminate,
      disabled = state == _disabled,
      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',
      regular = option(input, callback + capitalize(node[_type])),
      specific = option(input, state + capitalize(node[_type]));

    // Prevent unnecessary actions
    if (node[state] !== true) {

      // Toggle assigned radio buttons
      if (!keep && state == _checked && node[_type] == _radio && node.name) {
        var form = input.closest('form'),
          inputs = 'input[name="' + node.name + '"]';

        inputs = form.length ? form.find(inputs) : $(inputs);

        inputs.each(function() {
          if (this !== node && $(this).data(_iCheck)) {
            off($(this), state);
          }
        });
      }

      // Indeterminate state
      if (indeterminate) {

        // Add indeterminate state
        node[state] = true;

        // Remove checked state
        if (node[_checked]) {
          off(input, _checked, 'force');
        }

      // Checked or disabled state
      } else {

        // Add checked or disabled state
        if (!keep) {
          node[state] = true;
        }

        // Remove indeterminate state
        if (checked && node[_indeterminate]) {
          off(input, _indeterminate, false);
        }
      }

      // Trigger callbacks
      callbacks(input, checked, state, keep);
    }

    // Add proper cursor
    if (node[_disabled] && !!option(input, _cursor, true)) {
      parent.find('.' + _iCheckHelper).css(_cursor, 'default');
    }

    // Add state class
    parent[_add](specific || option(input, state) || '');

    // Set ARIA attribute
    if (!!parent.attr('role') && !indeterminate) {
      parent.attr('aria-' + (disabled ? _disabled : _checked), 'true');
    }

    // Remove regular state class
    parent[_remove](regular || option(input, callback) || '');
  }

  // Remove checked, disabled or indeterminate state
  function off(input, state, keep) {
    var node = input[0],
      parent = input.parent(),
      checked = state == _checked,
      indeterminate = state == _indeterminate,
      disabled = state == _disabled,
      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',
      regular = option(input, callback + capitalize(node[_type])),
      specific = option(input, state + capitalize(node[_type]));

    // Prevent unnecessary actions
    if (node[state] !== false) {

      // Toggle state
      if (indeterminate || !keep || keep == 'force') {
        node[state] = false;
      }

      // Trigger callbacks
      callbacks(input, checked, callback, keep);
    }

    // Add proper cursor
    if (!node[_disabled] && !!option(input, _cursor, true)) {
      parent.find('.' + _iCheckHelper).css(_cursor, 'pointer');
    }

    // Remove state class
    parent[_remove](specific || option(input, state) || '');

    // Set ARIA attribute
    if (!!parent.attr('role') && !indeterminate) {
      parent.attr('aria-' + (disabled ? _disabled : _checked), 'false');
    }

    // Add regular state class
    parent[_add](regular || option(input, callback) || '');
  }

  // Remove all traces
  function tidy(input, callback) {
    if (input.data(_iCheck)) {

      // Remove everything except input
      input.parent().html(input.attr('style', input.data(_iCheck).s || ''));

      // Callback
      if (callback) {
        input[_callback](callback);
      }

      // Unbind events
      input.off('.i').unwrap();
      $(_label + '[for="' + input[0].id + '"]').add(input.closest(_label)).off('.i');
    }
  }

  // Get some option
  function option(input, state, regular) {
    if (input.data(_iCheck)) {
      return input.data(_iCheck).o[state + (regular ? '' : 'Class')];
    }
  }

  // Capitalize some string
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Executable handlers
  function callbacks(input, checked, callback, keep) {
    if (!keep) {
      if (checked) {
        input[_callback]('ifToggled');
      }

      input[_callback]('ifChanged')[_callback]('if' + capitalize(callback));
    }
  }
})(window.jQuery || window.Zepto);

/*!
 * Lightbox for Bootstrap by @ashleydw
 * https://github.com/ashleydw/lightbox
 *
 * License: https://github.com/ashleydw/lightbox/blob/master/LICENSE
 */
+function ($) {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Lightbox = (function ($) {

	var NAME = 'ekkoLightbox';
	var JQUERY_NO_CONFLICT = $.fn[NAME];

	var Default = {
		title: '',
		footer: '',
		maxWidth: 9999,
		maxHeight: 9999,
		showArrows: true, //display the left / right arrows or not
		wrapping: true, //if true, gallery loops infinitely
		type: null, //force the lightbox into image / youtube mode. if null, or not image|youtube|vimeo; detect it
		alwaysShowClose: false, //always show the close button, even if there is no title
		loadingMessage: '<div class="ekko-lightbox-loader"><div><div></div><div></div></div></div>', // http://tobiasahlin.com/spinkit/
		leftArrow: '<span>&#10094;</span>',
		rightArrow: '<span>&#10095;</span>',
		strings: {
			close: 'Close',
			fail: 'Failed to load image:',
			type: 'Could not detect remote target type. Force the type using data-type'
		},
		doc: document, // if in an iframe can specify top.document
		onShow: function onShow() {},
		onShown: function onShown() {},
		onHide: function onHide() {},
		onHidden: function onHidden() {},
		onNavigate: function onNavigate() {},
		onContentLoaded: function onContentLoaded() {}
	};

	var Lightbox = (function () {
		_createClass(Lightbox, null, [{
			key: 'Default',

			/**
       Class properties:
   	 _$element: null -> the <a> element currently being displayed
    _$modal: The bootstrap modal generated
       _$modalDialog: The .modal-dialog
       _$modalContent: The .modal-content
       _$modalBody: The .modal-body
       _$modalHeader: The .modal-header
       _$modalFooter: The .modal-footer
    _$lightboxContainerOne: Container of the first lightbox element
    _$lightboxContainerTwo: Container of the second lightbox element
    _$lightboxBody: First element in the container
    _$modalArrows: The overlayed arrows container
   	 _$galleryItems: Other <a>'s available for this gallery
    _galleryName: Name of the current data('gallery') showing
    _galleryIndex: The current index of the _$galleryItems being shown
   	 _config: {} the options for the modal
    _modalId: unique id for the current lightbox
    _padding / _border: CSS properties for the modal container; these are used to calculate the available space for the content
   	 */

			get: function get() {
				return Default;
			}
		}]);

		function Lightbox($element, config) {
			var _this = this;

			_classCallCheck(this, Lightbox);

			this._config = $.extend({}, Default, config);
			this._$modalArrows = null;
			this._galleryIndex = 0;
			this._galleryName = null;
			this._padding = null;
			this._border = null;
			this._titleIsShown = false;
			this._footerIsShown = false;
			this._wantedWidth = 0;
			this._wantedHeight = 0;
			this._touchstartX = 0;
			this._touchendX = 0;

			this._modalId = 'ekkoLightbox-' + Math.floor(Math.random() * 1000 + 1);
			this._$element = $element instanceof jQuery ? $element : $($element);

			this._isBootstrap3 = $.fn.modal.Constructor.VERSION[0] == 3;

			var h4 = '<h4 class="modal-title">' + (this._config.title || "&nbsp;") + '</h4>';
			var btn = '<button type="button" class="close" data-dismiss="modal" aria-label="' + this._config.strings.close + '"><span aria-hidden="true">&times;</span></button>';

			var header = '<div class="modal-header' + (this._config.title || this._config.alwaysShowClose ? '' : ' hide') + '">' + (this._isBootstrap3 ? btn + h4 : h4 + btn) + '</div>';
			var footer = '<div class="modal-footer' + (this._config.footer ? '' : ' hide') + '">' + (this._config.footer || "&nbsp;") + '</div>';
			var body = '<div class="modal-body"><div class="ekko-lightbox-container"><div class="ekko-lightbox-item fade in show"></div><div class="ekko-lightbox-item fade"></div></div></div>';
			var dialog = '<div class="modal-dialog" role="document"><div class="modal-content">' + header + body + footer + '</div></div>';
			$(this._config.doc.body).append('<div id="' + this._modalId + '" class="ekko-lightbox modal fade" tabindex="-1" tabindex="-1" role="dialog" aria-hidden="true">' + dialog + '</div>');

			this._$modal = $('#' + this._modalId, this._config.doc);
			this._$modalDialog = this._$modal.find('.modal-dialog').first();
			this._$modalContent = this._$modal.find('.modal-content').first();
			this._$modalBody = this._$modal.find('.modal-body').first();
			this._$modalHeader = this._$modal.find('.modal-header').first();
			this._$modalFooter = this._$modal.find('.modal-footer').first();

			this._$lightboxContainer = this._$modalBody.find('.ekko-lightbox-container').first();
			this._$lightboxBodyOne = this._$lightboxContainer.find('> div:first-child').first();
			this._$lightboxBodyTwo = this._$lightboxContainer.find('> div:last-child').first();

			this._border = this._calculateBorders();
			this._padding = this._calculatePadding();

			this._galleryName = this._$element.data('gallery');
			if (this._galleryName) {
				this._$galleryItems = $(document.body).find('*[data-gallery="' + this._galleryName + '"]');
				this._galleryIndex = this._$galleryItems.index(this._$element);
				$(document).on('keydown.ekkoLightbox', this._navigationalBinder.bind(this));

				// add the directional arrows to the modal
				if (this._config.showArrows && this._$galleryItems.length > 1) {
					this._$lightboxContainer.append('<div class="ekko-lightbox-nav-overlay"><a href="#">' + this._config.leftArrow + '</a><a href="#">' + this._config.rightArrow + '</a></div>');
					this._$modalArrows = this._$lightboxContainer.find('div.ekko-lightbox-nav-overlay').first();
					this._$lightboxContainer.on('click', 'a:first-child', function (event) {
						event.preventDefault();
						return _this.navigateLeft();
					});
					this._$lightboxContainer.on('click', 'a:last-child', function (event) {
						event.preventDefault();
						return _this.navigateRight();
					});
					this.updateNavigation();
				}
			}

			this._$modal.on('show.bs.modal', this._config.onShow.bind(this)).on('shown.bs.modal', function () {
				_this._toggleLoading(true);
				_this._handle();
				return _this._config.onShown.call(_this);
			}).on('hide.bs.modal', this._config.onHide.bind(this)).on('hidden.bs.modal', function () {
				if (_this._galleryName) {
					$(document).off('keydown.ekkoLightbox');
					$(window).off('resize.ekkoLightbox');
				}
				_this._$modal.remove();
				return _this._config.onHidden.call(_this);
			}).modal(this._config);

			$(window).on('resize.ekkoLightbox', function () {
				_this._resize(_this._wantedWidth, _this._wantedHeight);
			});
			this._$lightboxContainer.on('touchstart', function () {
				_this._touchstartX = event.changedTouches[0].screenX;
			}).on('touchend', function () {
				_this._touchendX = event.changedTouches[0].screenX;
				_this._swipeGesure();
			});
		}

		_createClass(Lightbox, [{
			key: 'element',
			value: function element() {
				return this._$element;
			}
		}, {
			key: 'modal',
			value: function modal() {
				return this._$modal;
			}
		}, {
			key: 'navigateTo',
			value: function navigateTo(index) {

				if (index < 0 || index > this._$galleryItems.length - 1) return this;

				this._galleryIndex = index;

				this.updateNavigation();

				this._$element = $(this._$galleryItems.get(this._galleryIndex));
				this._handle();
			}
		}, {
			key: 'navigateLeft',
			value: function navigateLeft() {

				if (!this._$galleryItems) return;

				if (this._$galleryItems.length === 1) return;

				if (this._galleryIndex === 0) {
					if (this._config.wrapping) this._galleryIndex = this._$galleryItems.length - 1;else return;
				} else //circular
					this._galleryIndex--;

				this._config.onNavigate.call(this, 'left', this._galleryIndex);
				return this.navigateTo(this._galleryIndex);
			}
		}, {
			key: 'navigateRight',
			value: function navigateRight() {

				if (!this._$galleryItems) return;

				if (this._$galleryItems.length === 1) return;

				if (this._galleryIndex === this._$galleryItems.length - 1) {
					if (this._config.wrapping) this._galleryIndex = 0;else return;
				} else //circular
					this._galleryIndex++;

				this._config.onNavigate.call(this, 'right', this._galleryIndex);
				return this.navigateTo(this._galleryIndex);
			}
		}, {
			key: 'updateNavigation',
			value: function updateNavigation() {
				if (!this._config.wrapping) {
					var $nav = this._$lightboxContainer.find('div.ekko-lightbox-nav-overlay');
					if (this._galleryIndex === 0) $nav.find('a:first-child').addClass('disabled');else $nav.find('a:first-child').removeClass('disabled');

					if (this._galleryIndex === this._$galleryItems.length - 1) $nav.find('a:last-child').addClass('disabled');else $nav.find('a:last-child').removeClass('disabled');
				}
			}
		}, {
			key: 'close',
			value: function close() {
				return this._$modal.modal('hide');
			}

			// helper private methods
		}, {
			key: '_navigationalBinder',
			value: function _navigationalBinder(event) {
				event = event || window.event;
				if (event.keyCode === 39) return this.navigateRight();
				if (event.keyCode === 37) return this.navigateLeft();
			}

			// type detection private methods
		}, {
			key: '_detectRemoteType',
			value: function _detectRemoteType(src, type) {

				type = type || false;

				if (!type && this._isImage(src)) type = 'image';
				if (!type && this._getYoutubeId(src)) type = 'youtube';
				if (!type && this._getVimeoId(src)) type = 'vimeo';
				if (!type && this._getInstagramId(src)) type = 'instagram';

				if (!type || ['image', 'youtube', 'vimeo', 'instagram', 'video', 'url'].indexOf(type) < 0) type = 'url';

				return type;
			}
		}, {
			key: '_isImage',
			value: function _isImage(string) {
				return string && string.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
			}
		}, {
			key: '_containerToUse',
			value: function _containerToUse() {
				var _this2 = this;

				// if currently showing an image, fade it out and remove
				var $toUse = this._$lightboxBodyTwo;
				var $current = this._$lightboxBodyOne;

				if (this._$lightboxBodyTwo.hasClass('in')) {
					$toUse = this._$lightboxBodyOne;
					$current = this._$lightboxBodyTwo;
				}

				$current.removeClass('in show');
				setTimeout(function () {
					if (!_this2._$lightboxBodyTwo.hasClass('in')) _this2._$lightboxBodyTwo.empty();
					if (!_this2._$lightboxBodyOne.hasClass('in')) _this2._$lightboxBodyOne.empty();
				}, 500);

				$toUse.addClass('in show');
				return $toUse;
			}
		}, {
			key: '_handle',
			value: function _handle() {

				var $toUse = this._containerToUse();
				this._updateTitleAndFooter();

				var currentRemote = this._$element.attr('data-remote') || this._$element.attr('href');
				var currentType = this._detectRemoteType(currentRemote, this._$element.attr('data-type') || false);

				if (['image', 'youtube', 'vimeo', 'instagram', 'video', 'url'].indexOf(currentType) < 0) return this._error(this._config.strings.type);

				switch (currentType) {
					case 'image':
						this._preloadImage(currentRemote, $toUse);
						this._preloadImageByIndex(this._galleryIndex, 3);
						break;
					case 'youtube':
						this._showYoutubeVideo(currentRemote, $toUse);
						break;
					case 'vimeo':
						this._showVimeoVideo(this._getVimeoId(currentRemote), $toUse);
						break;
					case 'instagram':
						this._showInstagramVideo(this._getInstagramId(currentRemote), $toUse);
						break;
					case 'video':
						this._showHtml5Video(currentRemote, $toUse);
						break;
					default:
						// url
						this._loadRemoteContent(currentRemote, $toUse);
						break;
				}

				return this;
			}
		}, {
			key: '_getYoutubeId',
			value: function _getYoutubeId(string) {
				if (!string) return false;
				var matches = string.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
				return matches && matches[2].length === 11 ? matches[2] : false;
			}
		}, {
			key: '_getVimeoId',
			value: function _getVimeoId(string) {
				return string && string.indexOf('vimeo') > 0 ? string : false;
			}
		}, {
			key: '_getInstagramId',
			value: function _getInstagramId(string) {
				return string && string.indexOf('instagram') > 0 ? string : false;
			}

			// layout private methods
		}, {
			key: '_toggleLoading',
			value: function _toggleLoading(show) {
				show = show || false;
				if (show) {
					this._$modalDialog.css('display', 'none');
					this._$modal.removeClass('in show');
					$('.modal-backdrop').append(this._config.loadingMessage);
				} else {
					this._$modalDialog.css('display', 'block');
					this._$modal.addClass('in show');
					$('.modal-backdrop').find('.ekko-lightbox-loader').remove();
				}
				return this;
			}
		}, {
			key: '_calculateBorders',
			value: function _calculateBorders() {
				return {
					top: this._totalCssByAttribute('border-top-width'),
					right: this._totalCssByAttribute('border-right-width'),
					bottom: this._totalCssByAttribute('border-bottom-width'),
					left: this._totalCssByAttribute('border-left-width')
				};
			}
		}, {
			key: '_calculatePadding',
			value: function _calculatePadding() {
				return {
					top: this._totalCssByAttribute('padding-top'),
					right: this._totalCssByAttribute('padding-right'),
					bottom: this._totalCssByAttribute('padding-bottom'),
					left: this._totalCssByAttribute('padding-left')
				};
			}
		}, {
			key: '_totalCssByAttribute',
			value: function _totalCssByAttribute(attribute) {
				return parseInt(this._$modalDialog.css(attribute), 10) + parseInt(this._$modalContent.css(attribute), 10) + parseInt(this._$modalBody.css(attribute), 10);
			}
		}, {
			key: '_updateTitleAndFooter',
			value: function _updateTitleAndFooter() {
				var title = this._$element.data('title') || "";
				var caption = this._$element.data('footer') || "";

				this._titleIsShown = false;
				if (title || this._config.alwaysShowClose) {
					this._titleIsShown = true;
					this._$modalHeader.css('display', '').find('.modal-title').html(title || "&nbsp;");
				} else this._$modalHeader.css('display', 'none');

				this._footerIsShown = false;
				if (caption) {
					this._footerIsShown = true;
					this._$modalFooter.css('display', '').html(caption);
				} else this._$modalFooter.css('display', 'none');

				return this;
			}
		}, {
			key: '_showYoutubeVideo',
			value: function _showYoutubeVideo(remote, $containerForElement) {
				var id = this._getYoutubeId(remote);
				var query = remote.indexOf('&') > 0 ? remote.substr(remote.indexOf('&')) : '';
				var width = this._$element.data('width') || 560;
				var height = this._$element.data('height') || width / (560 / 315);
				return this._showVideoIframe('//www.youtube.com/embed/' + id + '?badge=0&autoplay=1&html5=1' + query, width, height, $containerForElement);
			}
		}, {
			key: '_showVimeoVideo',
			value: function _showVimeoVideo(id, $containerForElement) {
				var width = this._$element.data('width') || 500;
				var height = this._$element.data('height') || width / (560 / 315);
				return this._showVideoIframe(id + '?autoplay=1', width, height, $containerForElement);
			}
		}, {
			key: '_showInstagramVideo',
			value: function _showInstagramVideo(id, $containerForElement) {
				// instagram load their content into iframe's so this can be put straight into the element
				var width = this._$element.data('width') || 612;
				var height = width + 80;
				id = id.substr(-1) !== '/' ? id + '/' : id; // ensure id has trailing slash
				$containerForElement.html('<iframe width="' + width + '" height="' + height + '" src="' + id + 'embed/" frameborder="0" allowfullscreen></iframe>');
				this._resize(width, height);
				this._config.onContentLoaded.call(this);
				if (this._$modalArrows) //hide the arrows when showing video
					this._$modalArrows.css('display', 'none');
				this._toggleLoading(false);
				return this;
			}
		}, {
			key: '_showVideoIframe',
			value: function _showVideoIframe(url, width, height, $containerForElement) {
				// should be used for videos only. for remote content use loadRemoteContent (data-type=url)
				height = height || width; // default to square
				$containerForElement.html('<div class="embed-responsive embed-responsive-16by9"><iframe width="' + width + '" height="' + height + '" src="' + url + '" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe></div>');
				this._resize(width, height);
				this._config.onContentLoaded.call(this);
				if (this._$modalArrows) this._$modalArrows.css('display', 'none'); //hide the arrows when showing video
				this._toggleLoading(false);
				return this;
			}
		}, {
			key: '_showHtml5Video',
			value: function _showHtml5Video(url, $containerForElement) {
				// should be used for videos only. for remote content use loadRemoteContent (data-type=url)
				var width = this._$element.data('width') || 560;
				var height = this._$element.data('height') || width / (560 / 315);
				$containerForElement.html('<div class="embed-responsive embed-responsive-16by9"><video width="' + width + '" height="' + height + '" src="' + url + '" preload="auto" autoplay controls class="embed-responsive-item"></video></div>');
				this._resize(width, height);
				this._config.onContentLoaded.call(this);
				if (this._$modalArrows) this._$modalArrows.css('display', 'none'); //hide the arrows when showing video
				this._toggleLoading(false);
				return this;
			}
		}, {
			key: '_loadRemoteContent',
			value: function _loadRemoteContent(url, $containerForElement) {
				var _this3 = this;

				var width = this._$element.data('width') || 560;
				var height = this._$element.data('height') || 560;

				var disableExternalCheck = this._$element.data('disableExternalCheck') || false;
				this._toggleLoading(false);

				// external urls are loading into an iframe
				// local ajax can be loaded into the container itself
				if (!disableExternalCheck && !this._isExternal(url)) {
					$containerForElement.load(url, $.proxy(function () {
						return _this3._$element.trigger('loaded.bs.modal');l;
					}));
				} else {
					$containerForElement.html('<iframe src="' + url + '" frameborder="0" allowfullscreen></iframe>');
					this._config.onContentLoaded.call(this);
				}

				if (this._$modalArrows) //hide the arrows when remote content
					this._$modalArrows.css('display', 'none');

				this._resize(width, height);
				return this;
			}
		}, {
			key: '_isExternal',
			value: function _isExternal(url) {
				var match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
				if (typeof match[1] === "string" && match[1].length > 0 && match[1].toLowerCase() !== location.protocol) return true;

				if (typeof match[2] === "string" && match[2].length > 0 && match[2].replace(new RegExp(':(' + ({
					"http:": 80,
					"https:": 443
				})[location.protocol] + ')?$'), "") !== location.host) return true;

				return false;
			}
		}, {
			key: '_error',
			value: function _error(message) {
				console.error(message);
				this._containerToUse().html(message);
				this._resize(300, 300);
				return this;
			}
		}, {
			key: '_preloadImageByIndex',
			value: function _preloadImageByIndex(startIndex, numberOfTimes) {

				if (!this._$galleryItems) return;

				var next = $(this._$galleryItems.get(startIndex), false);
				if (typeof next == 'undefined') return;

				var src = next.attr('data-remote') || next.attr('href');
				if (next.attr('data-type') === 'image' || this._isImage(src)) this._preloadImage(src, false);

				if (numberOfTimes > 0) return this._preloadImageByIndex(startIndex + 1, numberOfTimes - 1);
			}
		}, {
			key: '_preloadImage',
			value: function _preloadImage(src, $containerForImage) {
				var _this4 = this;

				$containerForImage = $containerForImage || false;

				var img = new Image();
				if ($containerForImage) {
					(function () {

						// if loading takes > 200ms show a loader
						var loadingTimeout = setTimeout(function () {
							$containerForImage.append(_this4._config.loadingMessage);
						}, 200);

						img.onload = function () {
							if (loadingTimeout) clearTimeout(loadingTimeout);
							loadingTimeout = null;
							var image = $('<img />');
							image.attr('src', img.src);
							image.addClass('img-fluid');

							// backward compatibility for bootstrap v3
							image.css('width', '100%');

							$containerForImage.html(image);
							if (_this4._$modalArrows) _this4._$modalArrows.css('display', ''); // remove display to default to css property

							_this4._resize(img.width, img.height);
							_this4._toggleLoading(false);
							return _this4._config.onContentLoaded.call(_this4);
						};
						img.onerror = function () {
							_this4._toggleLoading(false);
							return _this4._error(_this4._config.strings.fail + ('  ' + src));
						};
					})();
				}

				img.src = src;
				return img;
			}
		}, {
			key: '_swipeGesure',
			value: function _swipeGesure() {
				if (this._touchendX < this._touchstartX) {
					return this.navigateRight();
				}
				if (this._touchendX > this._touchstartX) {
					return this.navigateLeft();
				}
			}
		}, {
			key: '_resize',
			value: function _resize(width, height) {

				height = height || width;
				this._wantedWidth = width;
				this._wantedHeight = height;

				var imageAspecRatio = width / height;

				// if width > the available space, scale down the expected width and height
				var widthBorderAndPadding = this._padding.left + this._padding.right + this._border.left + this._border.right;

				// force 10px margin if window size > 575px
				var addMargin = this._config.doc.body.clientWidth > 575 ? 20 : 0;
				var discountMargin = this._config.doc.body.clientWidth > 575 ? 0 : 20;

				var maxWidth = Math.min(width + widthBorderAndPadding, this._config.doc.body.clientWidth - addMargin, this._config.maxWidth);

				if (width + widthBorderAndPadding > maxWidth) {
					height = (maxWidth - widthBorderAndPadding - discountMargin) / imageAspecRatio;
					width = maxWidth;
				} else width = width + widthBorderAndPadding;

				var headerHeight = 0,
				    footerHeight = 0;

				// as the resize is performed the modal is show, the calculate might fail
				// if so, default to the default sizes
				if (this._footerIsShown) footerHeight = this._$modalFooter.outerHeight(true) || 55;

				if (this._titleIsShown) headerHeight = this._$modalHeader.outerHeight(true) || 67;

				var borderPadding = this._padding.top + this._padding.bottom + this._border.bottom + this._border.top;

				//calculated each time as resizing the window can cause them to change due to Bootstraps fluid margins
				var margins = parseFloat(this._$modalDialog.css('margin-top')) + parseFloat(this._$modalDialog.css('margin-bottom'));

				var maxHeight = Math.min(height, $(window).height() - borderPadding - margins - headerHeight - footerHeight, this._config.maxHeight - borderPadding - headerHeight - footerHeight);

				if (height > maxHeight) {
					// if height > the available height, scale down the width
					width = Math.ceil(maxHeight * imageAspecRatio) + widthBorderAndPadding;
				}

				this._$lightboxContainer.css('height', maxHeight);
				this._$modalDialog.css('flex', 1).css('maxWidth', width);

				var modal = this._$modal.data('bs.modal');
				if (modal) {
					// v4 method is mistakenly protected
					try {
						modal._handleUpdate();
					} catch (Exception) {
						modal.handleUpdate();
					}
				}
				return this;
			}
		}], [{
			key: '_jQueryInterface',
			value: function _jQueryInterface(config) {
				var _this5 = this;

				config = config || {};
				return this.each(function () {
					var $this = $(_this5);
					var _config = $.extend({}, Lightbox.Default, $this.data(), typeof config === 'object' && config);

					new Lightbox(_this5, _config);
				});
			}
		}]);

		return Lightbox;
	})();

	$.fn[NAME] = Lightbox._jQueryInterface;
	$.fn[NAME].Constructor = Lightbox;
	$.fn[NAME].noConflict = function () {
		$.fn[NAME] = JQUERY_NO_CONFLICT;
		return Lightbox._jQueryInterface;
	};

	return Lightbox;
})(jQuery);
//# sourceMappingURL=ekko-lightbox.js.map

}(jQuery);

/*! AdminLTE app.js
 * ================
 * Main JS application file for AdminLTE v2. This file
 * should be included in all pages. It controls some layout
 * options and implements exclusive AdminLTE plugins.
 *
 * @Author  Almsaeed Studio
 * @Support <http://www.almsaeedstudio.com>
 * @Email   <support@almsaeedstudio.com>
 * @version 2.3.0
 * @license MIT <http://opensource.org/licenses/MIT>
 */

//Make sure jQuery has been loaded before app.js
if (typeof jQuery === "undefined") {
  throw new Error("AdminLTE requires jQuery");
}


/* AdminLTE
 *
 * @type Object
 * @description $.AdminLTE is the main object for the template's app.
 *              It's used for implementing functions and options related
 *              to the template. Keeping everything wrapped in an object
 *              prevents conflict with other plugins and is a better
 *              way to organize our code.
 */
$.AdminLTE = {};

/* --------------------
 * - AdminLTE Options -
 * --------------------
 * Modify these options to suit your implementation
 */
$.AdminLTE.options = {
  //Add slimscroll to navbar menus
  //This requires you to load the slimscroll plugin
  //in every page before app.js
  navbarMenuSlimscroll: true,
  navbarMenuSlimscrollWidth: "3px", //The width of the scroll bar
  navbarMenuHeight: "200px", //The height of the inner menu
  //General animation speed for JS animated elements such as box collapse/expand and
  //sidebar treeview slide up/down. This options accepts an integer as milliseconds,
  //'fast', 'normal', or 'slow'
  animationSpeed: 500,
  //Sidebar push menu toggle button selector
  sidebarToggleSelector: "[data-toggle='offcanvas']",
  //Activate sidebar push menu
  sidebarPushMenu: true,
  //Activate sidebar slimscroll if the fixed layout is set (requires SlimScroll Plugin)
  sidebarSlimScroll: true,
  //Enable sidebar expand on hover effect for sidebar mini
  //This option is forced to true if both the fixed layout and sidebar mini
  //are used together
  sidebarExpandOnHover: false,
  //BoxRefresh Plugin
  enableBoxRefresh: true,
  //Bootstrap.js tooltip
  enableBSToppltip: true,
  BSTooltipSelector: "[data-toggle='tooltip']",
  //Enable Fast Click. Fastclick.js creates a more
  //native touch experience with touch devices. If you
  //choose to enable the plugin, make sure you load the script
  //before AdminLTE's app.js
  enableFastclick: false,
  //Control Sidebar Options
  enableControlSidebar: true,
  controlSidebarOptions: {
    //Which button should trigger the open/close event
    toggleBtnSelector: "[data-toggle='control-sidebar']",
    //The sidebar selector
    selector: ".control-sidebar",
    //Enable slide over content
    slide: true
  },
  //Box Widget Plugin. Enable this plugin
  //to allow boxes to be collapsed and/or removed
  enableBoxWidget: true,
  //Box Widget plugin options
  boxWidgetOptions: {
    boxWidgetIcons: {
      //Collapse icon
      collapse: 'fa-minus',
      //Open icon
      open: 'fa-plus',
      //Remove icon
      remove: 'fa-times'
    },
    boxWidgetSelectors: {
      //Remove button selector
      remove: '[data-widget="remove"]',
      //Collapse button selector
      collapse: '[data-widget="collapse"]'
    }
  },
  //Direct Chat plugin options
  directChat: {
    //Enable direct chat by default
    enable: true,
    //The button to open and close the chat contacts pane
    contactToggleSelector: '[data-widget="chat-pane-toggle"]'
  },
  //Define the set of colors to use globally around the website
  colors: {
    lightBlue: "#3c8dbc",
    red: "#f56954",
    green: "#00a65a",
    aqua: "#00c0ef",
    yellow: "#f39c12",
    blue: "#0073b7",
    navy: "#001F3F",
    teal: "#39CCCC",
    olive: "#3D9970",
    lime: "#01FF70",
    orange: "#FF851B",
    fuchsia: "#F012BE",
    purple: "#8E24AA",
    maroon: "#D81B60",
    black: "#222222",
    gray: "#d2d6de"
  },
  //The standard screen sizes that bootstrap uses.
  //If you change these in the variables.less file, change
  //them here too.
  screenSizes: {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200
  }
};

/* ------------------
 * - Implementation -
 * ------------------
 * The next block of code implements AdminLTE's
 * functions and plugins as specified by the
 * options above.
 */
$(function () {
  "use strict";

  //Fix for IE page transitions
  $("body").removeClass("hold-transition");

  //Extend options if external options exist
  if (typeof AdminLTEOptions !== "undefined") {
    $.extend(true,
            $.AdminLTE.options,
            AdminLTEOptions);
  }

  //Easy access to options
  var o = $.AdminLTE.options;

  //Set up the object
  _init();

  //Activate the layout maker
  $.AdminLTE.layout.activate();

  //Enable sidebar tree view controls
  $.AdminLTE.tree('.sidebar');

  //Enable control sidebar
  if (o.enableControlSidebar) {
    $.AdminLTE.controlSidebar.activate();
  }

  //Add slimscroll to navbar dropdown
  if (o.navbarMenuSlimscroll && typeof $.fn.slimscroll != 'undefined') {
    $(".navbar .menu").slimscroll({
      height: o.navbarMenuHeight,
      alwaysVisible: false,
      size: o.navbarMenuSlimscrollWidth
    }).css("width", "100%");
  }

  //Activate sidebar push menu
  if (o.sidebarPushMenu) {
    $.AdminLTE.pushMenu.activate(o.sidebarToggleSelector);
  }

  //Activate Bootstrap tooltip
  if (o.enableBSToppltip) {
      $.widget.bridge('uitooltip', $.ui.tooltip);
    $('body').tooltip({
      selector: o.BSTooltipSelector
    });

  }

  //Activate box widget
  if (o.enableBoxWidget) {
    $.AdminLTE.boxWidget.activate();
  }

  //Activate fast click
  if (o.enableFastclick && typeof FastClick != 'undefined') {
    FastClick.attach(document.body);
  }

  //Activate direct chat widget
  if (o.directChat.enable) {
    $(document).on('click', o.directChat.contactToggleSelector, function () {
      var box = $(this).parents('.direct-chat').first();
      box.toggleClass('direct-chat-contacts-open');
    });
  }

  /*
   * INITIALIZE BUTTON TOGGLE
   * ------------------------
   */
  $('.btn-group[data-toggle="btn-toggle"]').each(function () {
    var group = $(this);
    $(this).find(".btn").on('click', function (e) {
      group.find(".btn.active").removeClass("active");
      $(this).addClass("active");
      e.preventDefault();
    });

  });
});

/* ----------------------------------
 * - Initialize the AdminLTE Object -
 * ----------------------------------
 * All AdminLTE functions are implemented below.
 */
function _init() {
  'use strict';
  /* Layout
   * ======
   * Fixes the layout height in case min-height fails.
   *
   * @type Object
   * @usage $.AdminLTE.layout.activate()
   *        $.AdminLTE.layout.fix()
   *        $.AdminLTE.layout.fixSidebar()
   */
  $.AdminLTE.layout = {
    activate: function () {
      var _this = this;
      _this.fix();
      _this.fixSidebar();
      $(window, ".wrapper").resize(function () {
        _this.fix();
        _this.fixSidebar();
      });
    },
    fix: function () {
      //Get window height and the wrapper height
      var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
      var window_height = $(window).height();
      var sidebar_height = $(".sidebar").height();
      //Set the min-height of the content and sidebar based on the
      //the height of the document.
      if ($("body").hasClass("fixed")) {
        $(".content-wrapper, .right-side").css('min-height', window_height - $('.main-footer').outerHeight());
      } else {
        var postSetWidth;
        if (window_height >= sidebar_height) {
          $(".content-wrapper, .right-side").css('min-height', window_height - neg);
          postSetWidth = window_height - neg;
        } else {
          $(".content-wrapper, .right-side").css('min-height', sidebar_height);
          postSetWidth = sidebar_height;
        }

        //Fix for the control sidebar height
        var controlSidebar = $($.AdminLTE.options.controlSidebarOptions.selector);
        if (typeof controlSidebar !== "undefined") {
          if (controlSidebar.height() > postSetWidth)
            $(".content-wrapper, .right-side").css('min-height', controlSidebar.height());
        }

      }
    },
    fixSidebar: function () {
      //Make sure the body tag has the .fixed class
      if (!$("body").hasClass("fixed")) {
        if (typeof $.fn.slimScroll != 'undefined') {
          $(".sidebar").slimScroll({destroy: true}).height("auto");
        }
        return;
      } else if (typeof $.fn.slimScroll == 'undefined' && window.console) {
        window.console.error("Error: the fixed layout requires the slimscroll plugin!");
      }
      //Enable slimscroll for fixed layout
      if ($.AdminLTE.options.sidebarSlimScroll) {
        if (typeof $.fn.slimScroll != 'undefined') {
          //Destroy if it exists
          $(".sidebar").slimScroll({destroy: true}).height("auto");
          //Add slimscroll
          $(".sidebar").slimscroll({
            height: ($(window).height() - $(".main-header").height()) + "px",
            color: "rgba(0,0,0,0.2)",
            size: "3px"
          });
        }
      }
    }
  };

  /* PushMenu()
   * ==========
   * Adds the push menu functionality to the sidebar.
   *
   * @type Function
   * @usage: $.AdminLTE.pushMenu("[data-toggle='offcanvas']")
   */
  $.AdminLTE.pushMenu = {
    activate: function (toggleBtn) {
      //Get the screen sizes
      var screenSizes = $.AdminLTE.options.screenSizes;

      //Enable sidebar toggle
      $(toggleBtn).on('click', function (e) {
        e.preventDefault();

        //Enable sidebar push menu
        if ($(window).width() > (screenSizes.sm - 1)) {
          if ($("body").hasClass('sidebar-collapse')) {
            $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
          } else {
            $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
          }
        }
        //Handle sidebar push menu for small screens
        else {
          if ($("body").hasClass('sidebar-open')) {
            $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
          } else {
            $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
          }
        }
      });

      $(".content-wrapper").click(function () {
        //Enable hide menu when clicking on the content-wrapper on small screens
        if ($(window).width() <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
          $("body").removeClass('sidebar-open');
        }
      });

      //Enable expand on hover for sidebar mini
      if ($.AdminLTE.options.sidebarExpandOnHover
              || ($('body').hasClass('fixed')
                      && $('body').hasClass('sidebar-mini'))) {
        this.expandOnHover();
      }
    },
    expandOnHover: function () {
      var _this = this;
      var screenWidth = $.AdminLTE.options.screenSizes.sm - 1;
      //Expand sidebar on hover
      $('.main-sidebar').hover(function () {
        if ($('body').hasClass('sidebar-mini')
                && $("body").hasClass('sidebar-collapse')
                && $(window).width() > screenWidth) {
          _this.expand();
        }
      }, function () {
        if ($('body').hasClass('sidebar-mini')
                && $('body').hasClass('sidebar-expanded-on-hover')
                && $(window).width() > screenWidth) {
          _this.collapse();
        }
      });
    },
    expand: function () {
      $("body").removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover');
    },
    collapse: function () {
      if ($('body').hasClass('sidebar-expanded-on-hover')) {
        $('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse');
      }
    }
  };

  /* Tree()
   * ======
   * Converts the sidebar into a multilevel
   * tree view menu.
   *
   * @type Function
   * @Usage: $.AdminLTE.tree('.sidebar')
   */
  $.AdminLTE.tree = function (menu) {
    var _this = this;
    var animationSpeed = $.AdminLTE.options.animationSpeed;
    $(document).on('click', menu + ' li a', function (e) {
      //Get the clicked link and the next element
      var $this = $(this);
      var checkElement = $this.next();

      //Check if the next element is a menu and is visible
      if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {
        //Close the menu
        checkElement.slideUp(animationSpeed, function () {
          checkElement.removeClass('menu-open');
          //Fix the layout in case the sidebar stretches over the height of the window
          //_this.layout.fix();
        });
        checkElement.parent("li").removeClass("active");
      }
      //If the menu is not visible
      else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
        //Get the parent menu
        var parent = $this.parents('ul').first();
        //Close all open menus within the parent
        var ul = parent.find('ul:visible').slideUp(animationSpeed);
        //Remove the menu-open class from the parent
        ul.removeClass('menu-open');
        //Get the parent li
        var parent_li = $this.parent("li");

        //Open the target menu and add the menu-open class
        checkElement.slideDown(animationSpeed, function () {
          //Add the class active to the parent li
          checkElement.addClass('menu-open');
          parent.find('li.active').removeClass('active');
          parent_li.addClass('active');
          //Fix the layout in case the sidebar stretches over the height of the window
          _this.layout.fix();
        });
      }
      //if this isn't a link, prevent the page from being redirected
      if (checkElement.is('.treeview-menu')) {
        e.preventDefault();
      }
    });
  };

  /* ControlSidebar
   * ==============
   * Adds functionality to the right sidebar
   *
   * @type Object
   * @usage $.AdminLTE.controlSidebar.activate(options)
   */
  $.AdminLTE.controlSidebar = {
    //instantiate the object
    activate: function () {
      //Get the object
      var _this = this;
      //Update options
      var o = $.AdminLTE.options.controlSidebarOptions;
      //Get the sidebar
      var sidebar = $(o.selector);
      //The toggle button
      var btn = $(o.toggleBtnSelector);

      //Listen to the click event
      btn.on('click', function (e) {
        e.preventDefault();
        //If the sidebar is not open
        if (!sidebar.hasClass('control-sidebar-open')
                && !$('body').hasClass('control-sidebar-open')) {
          //Open the sidebar
          _this.open(sidebar, o.slide);
        } else {
          _this.close(sidebar, o.slide);
        }
      });

      //If the body has a boxed layout, fix the sidebar bg position
      var bg = $(".control-sidebar-bg");
      _this._fix(bg);

      //If the body has a fixed layout, make the control sidebar fixed
      if ($('body').hasClass('fixed')) {
        _this._fixForFixed(sidebar);
      } else {
        //If the content height is less than the sidebar's height, force max height
        if ($('.content-wrapper, .right-side').height() < sidebar.height()) {
          _this._fixForContent(sidebar);
        }
      }
    },
    //Open the control sidebar
    open: function (sidebar, slide) {
      //Slide over content
      if (slide) {
        sidebar.addClass('control-sidebar-open');
      } else {
        //Push the content by adding the open class to the body instead
        //of the sidebar itself
        $('body').addClass('control-sidebar-open');
      }
    },
    //Close the control sidebar
    close: function (sidebar, slide) {
      if (slide) {
        sidebar.removeClass('control-sidebar-open');
      } else {
        $('body').removeClass('control-sidebar-open');
      }
    },
    _fix: function (sidebar) {
      var _this = this;
      if ($("body").hasClass('layout-boxed')) {
        sidebar.css('position', 'absolute');
        sidebar.height($(".wrapper").height());
        $(window).resize(function () {
          _this._fix(sidebar);
        });
      } else {
        sidebar.css({
          'position': 'fixed',
          'height': 'auto'
        });
      }
    },
    _fixForFixed: function (sidebar) {
      sidebar.css({
        'position': 'fixed',
        'max-height': '100%',
        'overflow': 'auto',
        'padding-bottom': '50px'
      });
    },
    _fixForContent: function (sidebar) {
      $(".content-wrapper, .right-side").css('min-height', sidebar.height());
    }
  };

  /* BoxWidget
   * =========
   * BoxWidget is a plugin to handle collapsing and
   * removing boxes from the screen.
   *
   * @type Object
   * @usage $.AdminLTE.boxWidget.activate()
   *        Set all your options in the main $.AdminLTE.options object
   */
  $.AdminLTE.boxWidget = {
    selectors: $.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,
    icons: $.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,
    animationSpeed: $.AdminLTE.options.animationSpeed,
    activate: function (_box) {
      var _this = this;
      if (!_box) {
        _box = document; // activate all boxes per default
      }
      //Listen for collapse event triggers
      $(_box).on('click', _this.selectors.collapse, function (e) {
        e.preventDefault();
        _this.collapse($(this));
      });

      //Listen for remove event triggers
      $(_box).on('click', _this.selectors.remove, function (e) {
        e.preventDefault();
        _this.remove($(this));
      });
    },
    collapse: function (element) {
      var _this = this;
      //Find the box parent
      var box = element.parents(".box").first();
      //Find the body and the footer
      var box_content = box.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");
      if (!box.hasClass("collapsed-box")) {
        //Convert minus into plus
        element.children(":first")
                .removeClass(_this.icons.collapse)
                .addClass(_this.icons.open);
        //Hide the content
        box_content.slideUp(_this.animationSpeed, function () {
          box.addClass("collapsed-box");
        });
      } else {
        //Convert plus into minus
        element.children(":first")
                .removeClass(_this.icons.open)
                .addClass(_this.icons.collapse);
        //Show the content
        box_content.slideDown(_this.animationSpeed, function () {
          box.removeClass("collapsed-box");
        });
      }
    },
    remove: function (element) {
      //Find the box parent
      var box = element.parents(".box").first();
      box.slideUp(this.animationSpeed);
    }
  };
}

/* ------------------
 * - Custom Plugins -
 * ------------------
 * All custom plugins are defined below.
 */

/*
 * BOX REFRESH BUTTON
 * ------------------
 * This is a custom plugin to use with the component BOX. It allows you to add
 * a refresh button to the box. It converts the box's state to a loading state.
 *
 * @type plugin
 * @usage $("#box-widget").boxRefresh( options );
 */
(function ($) {

  "use strict";

  $.fn.boxRefresh = function (options) {

    // Render options
    var settings = $.extend({
      //Refresh button selector
      trigger: ".refresh-btn",
      //File source to be loaded (e.g: ajax/src.php)
      source: "",
      //Callbacks
      onLoadStart: function (box) {
        return box;
      }, //Right after the button has been clicked
      onLoadDone: function (box) {
        return box;
      } //When the source has been loaded

    }, options);

    //The overlay
    var overlay = $('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');

    return this.each(function () {
      //if a source is specified
      if (settings.source === "") {
        if (window.console) {
          window.console.log("Please specify a source first - boxRefresh()");
        }
        return;
      }
      //the box
      var box = $(this);
      //the button
      var rBtn = box.find(settings.trigger).first();

      //On trigger click
      rBtn.on('click', function (e) {
        e.preventDefault();
        //Add loading overlay
        start(box);

        //Perform ajax call
        box.find(".box-body").load(settings.source, function () {
          done(box);
        });
      });
    });

    function start(box) {
      //Add overlay and loading img
      box.append(overlay);

      settings.onLoadStart.call(box);
    }

    function done(box) {
      //Remove overlay and loading img
      box.find(overlay).remove();

      settings.onLoadDone.call(box);
    }

  };

})(jQuery);

/*
 * EXPLICIT BOX ACTIVATION
 * -----------------------
 * This is a custom plugin to use with the component BOX. It allows you to activate
 * a box inserted in the DOM after the app.js was loaded.
 *
 * @type plugin
 * @usage $("#box-widget").activateBox();
 */
(function ($) {

  'use strict';

  $.fn.activateBox = function () {
    $.AdminLTE.boxWidget.activate(this);
  };

})(jQuery);


/**
 * Module containing core application logic.
 * @param  {jQuery} $        Insulated jQuery object
 * @param  {JSON} settings Insulated `window.snipeit.settings` object.
 * @return {IIFE}          Immediately invoked. Returns self.
 */

var lineOptions = {

        legend: {
            position: "bottom"
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }]
        }

};

var pieOptions = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,
    //String - The colour of each segment stroke
    segmentStrokeColor: "#fff",
    //Number - The width of each segment stroke
    segmentStrokeWidth: 1,
    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50, // This is 0 for Pie charts
    //Number - Amount of animation steps
    animationSteps: 100,
    //String - Animation easing effect
    animationEasing: "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
    //Boolean - whether to make the chart responsive to window resizing
    responsive: true,
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: false,

    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li>" +
    "<i class='fa fa-circle-o' style='color: <%=segments[i].fillColor%>'></i>" +
    "<%if(segments[i].label){%><%=segments[i].label%><%}%> foo</li><%}%></ul>",
    //String - A tooltip template
    tooltipTemplate: "<%=value %> <%=label%> "
};

//-----------------
//- END PIE CHART -
//-----------------

var baseUrl = $('meta[name="baseUrl"]').attr('content');

(function($, settings) {
    var Components = {};
    Components.modals = {};

    // confirm delete modal
    Components.modals.confirmDelete = function() {
        var $el = $('table');

        var events = {
            'click': function(evnt) {
                var $context = $(this);
                var $dataConfirmModal = $('#dataConfirmModal');
                var href = $context.attr('href');
                var message = $context.attr('data-content');
                var title = $context.attr('data-title');

                $('#myModalLabel').text(title);
                $dataConfirmModal.find('.modal-body').text(message);
                $('#deleteForm').attr('action', href);
                $dataConfirmModal.modal({
                    show: true
                });
                return false;
            }
        };

        var render = function() {
            $el.on('click', '.delete-asset', events['click']);
        };

        return {
            render: render
        };
    };


    /**
     * Application start point
     * Component definition stays out of load event, execution only happens.
     */
    $(function() {
        new Components.modals.confirmDelete().render();
    });
}(jQuery, window.snipeit.settings));





$(document).ready(function () {

    /*
    * Slideout help menu
    */
     $('.slideout-menu-toggle').on('click', function(event){
        event.preventDefault();
        // create menu variables
        var slideoutMenu = $('.slideout-menu');
        var slideoutMenuWidth = $('.slideout-menu').width();

        // toggle open class
        slideoutMenu.toggleClass("open");

        // slide menu
        if (slideoutMenu.hasClass("open")) {
         slideoutMenu.show();
            slideoutMenu.animate({
                right: "0px"
            });
        } else {
            slideoutMenu.animate({
                right: -slideoutMenuWidth
            }, "-350px");
         slideoutMenu.fadeOut();
        }
     });

     /*
     * iCheck checkbox plugin
     */

     $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
         checkboxClass: 'icheckbox_minimal-blue',
         radioClass: 'iradio_minimal-blue'
     });


     /*
     * Select2
     */

     var iOS = /iPhone|iPad|iPod/.test(navigator.userAgent)  && !window.MSStream;
     if(!iOS)
     {
        // Vue collision: Avoid overriding a vue select2 instance
        // by checking to see if the item has already been select2'd.
        $('select.select2:not(".select2-hidden-accessible")').each(function (i,obj) {
            {
                $(obj).select2();
            }
        });
     }
     $('.datepicker').datepicker();

    var datepicker = $.fn.datepicker.noConflict(); // return $.fn.datepicker to previously assigned value
    $.fn.bootstrapDP = datepicker;
    $('.datepicker').datepicker();


    // Crazy select2 rich dropdowns with images!
    $('.js-data-ajax').each( function (i,item) {
        var link = $(item);
        var endpoint = link.data("endpoint");
        var select = link.data("select");

        link.select2({

            /**
             * Adds an empty placeholder, allowing every select2 instance to be cleared.
             * This placeholder can be overridden with the "data-placeholder" attribute.
             */
            placeholder: '',
            allowClear: true,
            
            ajax: {

                // the baseUrl includes a trailing slash
                url: baseUrl + 'api/v1/' + endpoint + '/selectlist',
                dataType: 'json',
                delay: 250,
                headers: {
                    "X-Requested-With": 'XMLHttpRequest',
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content')
                },
                data: function (params) {
                    var data = {
                        search: params.term,
                        page: params.page || 1,
                        assetStatusType: link.data("asset-status-type"),
                    };
                    return data;
                },
                processResults: function (data, params) {

                    params.page = params.page || 1;

                    var answer =  {
                        results: data.items,
                        pagination: {
                            more: "true" //(params.page  < data.page_count)
                        }
                    };

                    return answer;
                },
                cache: true
            },
            escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
            templateResult: formatDatalist,
            templateSelection: formatDataSelection
        });

    });

    function formatDatalist (datalist) {
        var loading_markup = '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Loading...';
        if (datalist.loading) {
            return loading_markup;
        }

        var markup = "<div class='clearfix'>" ;
        markup +="<div class='pull-left' style='padding-right: 10px;'>";
        if (datalist.image) {
            markup += "<div style='width: 30px;'><img src='" + datalist.image + "' style='max-height: 20px; max-width: 30px;'></div>";
        } else {
            markup += "<div style='height: 20px; width: 30px;'></div>";
        }

        markup += "</div><div>" + datalist.text + "</div>";
        markup += "</div>";
        return markup;
    }

    function formatDataSelection (datalist) {
        // This a heinous workaround for a known bug in Select2.
        // Without this, the rich selectlists are vulnerable to XSS.
        // Many thanks to @uberbrady for this fix. It ain't pretty,
        // but it resolves the issue until Select2 addresses it on their end.
        //
        // Bug was reported in 2016 :{
        // https://github.com/select2/select2/issues/4587

        return datalist.text.replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // This handles the radio button selectors for the checkout-to-foo options
    // on asset checkout and also on asset edit
    $(function() {
        $('input[name=checkout_to_type]').on("change",function () {
            var assignto_type = $('input[name=checkout_to_type]:checked').val();
            var userid = $('#assigned_user option:selected').val();

            if (assignto_type == 'asset') {
                $('#current_assets_box').fadeOut();
                $('#assigned_asset').show();
                $('#assigned_user').hide();
                $('#assigned_location').hide();
                $('.notification-callout').fadeOut();

            } else if (assignto_type == 'location') {
                $('#current_assets_box').fadeOut();
                $('#assigned_asset').hide();
                $('#assigned_user').hide();
                $('#assigned_location').show();
                $('.notification-callout').fadeOut();
            } else  {

                $('#assigned_asset').hide();
                $('#assigned_user').show();
                $('#assigned_location').hide();
                if (userid) {
                    $('#current_assets_box').fadeIn();
                }
                $('.notification-callout').fadeIn();

            }
        });
    });


    // ------------------------------------------------
    // Deep linking for Bootstrap tabs
    // ------------------------------------------------
    var taburl = document.location.toString();

    // Allow full page URL to activate a tab's ID
    // ------------------------------------------------
    // This allows linking to a tab on page load via the address bar.
    // So a URL such as, http://snipe-it.local/hardware/2/#my_tab will
    // cause the tab on that page with an ID of “my_tab” to be active.
    if (taburl.match('#') ) {
        $('.nav-tabs a[href="#'+taburl.split('#')[1]+'"]').tab('show');
    }

    // Allow internal page links to activate a tab's ID.
    // ------------------------------------------------
    // This allows you to link to a tab from anywhere on the page
    // including from within another tab. Also note that internal page
    // links either inside or out of the tabs need to include data-toggle="tab"
    // Ex: <a href="#my_tab" data-toggle="tab">Click me</a>
    $('a[data-toggle="tab"]').click(function (e) {
        var href = $(this).attr("href");
        history.pushState(null, null, href);
        e.preventDefault();
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
    });

    // ------------------------------------------------
    // End Deep Linking for Bootstrap tabs
    // ------------------------------------------------



    // Image preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreview').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    function formatBytes(bytes) {
        if(bytes < 1024) return bytes + " Bytes";
        else if(bytes < 1048576) return(bytes / 1024).toFixed(2) + " KB";
        else if(bytes < 1073741824) return(bytes / 1048576).toFixed(2) + " MB";
        else return(bytes / 1073741824).toFixed(2) + " GB";
    };

     // File size validation
    $('#uploadFile').bind('change', function() {
        $('#upload-file-status').removeClass('text-success').removeClass('text-danger');
        $('.goodfile').remove();
        $('.badfile').remove();
        $('.badfile').remove();
        $('.previewSize').hide();
        $('#upload-file-info').html('');

        var max_size = $('#uploadFile').data('maxsize');
        var total_size = 0;

        for (var i = 0; i < this.files.length; i++) {
            total_size += this.files[i].size;
            $('#upload-file-info').append('<span class="label label-default">' + this.files[i].name + ' (' + formatBytes(this.files[i].size) + ')</span> ');
        }

        if (total_size > max_size) {
            $('#upload-file-status').addClass('text-danger').removeClass('help-block').prepend('<i class="badfile fa fa-times"></i> ').append('<span class="previewSize"> Upload is ' + formatBytes(total_size) + '.</span>');
        } else {
            $('#upload-file-status').addClass('text-success').removeClass('help-block').prepend('<i class="goodfile fa fa-check"></i> ');
            readURL(this);
            $('#imagePreview').fadeIn();
        }


    });










});

/* 
 * 
 * Snipe-IT Universal Modal support
 * 
 * Enables modal dialogs to create sub-resources throughout Snipe-IT
 * 
 */

 /* 
 HOW TO USE

 Create a Button looking like this:

 <a href='{{ route('modal.user') }}' data-toggle="modal"  data-target="#createModal" data-select='assigned_to' class="btn btn-sm btn-default">New</a>

 If you don't have access to Blade commands (like {{ and }}, etc), you can hard-code a URL as the 'href'

 data-toggle="modal" - required for Bootstrap Modals
 data-target="#createModal" - fixed ID for the modal, do not change
 data-select="assigned_to" - What is the *ID* of the select-dropdown that you're going to be adding to, if the modal-create was a success? Be on the lookout for duplicate ID's, it will confuse this library!
 class="btn btn-sm btn-default" - makes it look button-ey, feel free to change :)
 
 If you want to pass additional variables to the modal (In the Category Create one, for example, you can pass category_id), you can encode them as URL variables in the href
 
 */

$(function () {


  //handle modal-add-interstitial calls
  var model, select;

  if($('#createModal').length == 0) {
    $('body').append('<div class="modal fade" id="createModal"></div><!-- /.modal -->');
  }

  $('#createModal').on("show.bs.modal", function (event) {
      var link = $(event.relatedTarget);
      model = link.data("dependency");
      select = link.data("select");
      $('#createModal').load(link.attr('href'),function () {
        //do we need to re-select2 this, after load? Probably.
        $('#createModal').find('select.select2').select2();
        // Initialize the ajaxy select2 with images.
        // This is a copy/paste of the code from snipeit.js, would be great to only have this in one place.
        $('.js-data-ajax').each( function (i,item) {
            var link = $(item);
            var endpoint = link.data("endpoint");
            var select = link.data("select");

            link.select2({
                ajax: {

                    // the baseUrl includes a trailing slash
                    url: baseUrl + 'api/v1/' + endpoint + '/selectlist',
                    dataType: 'json',
                    delay: 250,
                    headers: {
                        "X-Requested-With": 'XMLHttpRequest',
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content')
                    },
                    data: function (params) {
                        var data = {
                            search: params.term,
                            page: params.page || 1,
                            assetStatusType: link.data("asset-status-type"),
                        };
                        return data;
                    },
                    processResults: function (data, params) {

                        params.page = params.page || 1;

                        var answer =  {
                            results: data.items,
                            pagination: {
                                more: "true" //(params.page  < data.page_count)
                            }
                        };

                        return answer;
                    },
                    cache: true
                },
                escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
                templateResult: formatDatalist,
                templateSelection: formatDataSelection
            });
        });
      });

  });

 

  $('#createModal').on('click','#modal-save', function () {
    $.ajax({
        type: 'POST',
        url: $('.modal-body form').attr('action'),
        headers: {
            "X-Requested-With": 'XMLHttpRequest',
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content')
        },

        data: $('.modal-body form').serialize(),
        success: function (result) {

            if(result.status == "error") {
                var error_message="";
                for(var field in result.messages) {
                    error_message += "<li>Problem(s) with field <i><strong>" + field + "</strong></i>: " + result.messages[field];

                }
                $('#modal_error_msg').html(error_message).show();
                return false;
            }
            var id = result.payload.id;
            var name = result.payload.name || (result.payload.first_name + " " + result.payload.last_name);
            if(!id || !name) {
                console.error("Could not find resulting name or ID from modal-create. Name: "+name+", id: "+id);
                return false;
            }
            $('#createModal').modal('hide');
            $('#createModal').html("");

            // "select" is the original drop-down menu that someone
            // clicked 'add' on to add a new 'thing'
            // this code adds the newly created object to that select
            var selector = document.getElementById(select);

            if(!selector) {
                return false;
            }

            selector.options[selector.length] = new Option(name, id);
            selector.selectedIndex = selector.length - 1;
            $(selector).trigger("change");
            if(window.fetchCustomFields) {
                fetchCustomFields();
            }

        },
        error: function (result) {
            msg = result.responseJSON.messages || result.responseJSON.error;
            $('#modal_error_msg').html("Server Error: "+msg).show();
        }



    });
  });
});

function formatDatalist (datalist) {
    var loading_markup = '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Loading...';
    if (datalist.loading) {
        return loading_markup;
    }

    var markup = "<div class='clearfix'>" ;
    markup +="<div class='pull-left' style='padding-right: 10px;'>";
    if (datalist.image) {
        markup += "<div style='width: 30px;'><img src='" + datalist.image + "' style='max-height: 20px; max-width: 30px;'></div>";
    } else {
        markup += "<div style='height: 20px; width: 30px;'></div>";
    }

    markup += "</div><div>" + datalist.text + "</div>";
    markup += "</div>";
    return markup;
}

function formatDataSelection (datalist) {
    return datalist.text.replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
