"use strict";function insertAtCursor(e,t){var a,s,n,i=e.scrollTop,o=document.documentElement.scrollTop;document.selection?(e.focus(),(a=document.selection.createRange()).text=t,a.select()):e.selectionStart||"0"==e.selectionStart?(s=e.selectionStart,n=e.selectionEnd,e.value=e.value.substring(0,s)+t+e.value.substring(n,e.value.length),e.focus(),e.selectionStart=s+t.length,e.selectionEnd=s+t.length):(e.value+=t,e.focus()),e.scrollTop=i,document.documentElement.scrollTop=o}var _createClass=function(){function s(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,a){return t&&s(e.prototype,t),a&&s(e,a),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(){var e=(_createClass(i,[{key:"init",value:function(e){var a=this;this.area=e.target,this.packages=Object.keys(this.odata);for(var t='\n            <div class="OwO-logo"><span>'+e.logo+'</span></div>\n            <div class="OwO-body" style="width: '+e.width+'">',s=0;s<this.packages.length;s++){t+='\n                <ul class="OwO-items OwO-items-'+this.odata[this.packages[s]].type+'" style="max-height: '+(parseInt(e.maxHeight)-53)+'px;">';for(var n=this.odata[this.packages[s]].type,i=this.odata[this.packages[s]].container,o=0;o<i.length;o++){var l=CUTEEN_SETTING.STATIC_PATH+"/Func/OwO/"+i[o].icon;t+="image"==n?'<li class="OwO-item" data-id="'+i[o].data+'"><img class="emoji" data-src="'+l+'"></li>':'<li class="OwO-item" data-id="not-given"><img class="emoji" data-src="'+l+'"></li>'}t+="\n                </ul>"}t+='\n                <div class="OwO-bar">\n                    <ul class="OwO-packages">';for(var c=0;c<this.packages.length;c++)t+="\n                        <li><span>"+this.packages[c]+"</span></li>";t+="\n                    </ul>\n                </div>\n            </div>\n            ",this.container.innerHTML=t,this.logo=this.container.getElementsByClassName("OwO-logo")[0],this.logo.addEventListener("click",function(){a.toggle()}),this.container.getElementsByClassName("OwO-body")[0].addEventListener("click",function(e){var t=null;e.target.classList.contains("OwO-item")?t=e.target:e.target.parentNode.classList.contains("OwO-item")&&(t=e.target.parentNode),t&&(a.area.selectionEnd,a.area.value,"not-given"==t.dataset.id?insertAtCursor(a.area," "+t.innerHTML+" "):insertAtCursor(a.area," "+t.dataset.id+" "),a.area.focus(),a.toggle())}),this.packagesEle=this.container.getElementsByClassName("OwO-packages")[0];for(var r=0;r<this.packagesEle.children.length;r++)!function(e){var t;t=e,a.packagesEle.children[e].addEventListener("click",function(){a.tab(t)})}(r);this.tab(0)}},{key:"toggle",value:function(){this.container.classList.contains("OwO-open")?this.container.classList.remove("OwO-open"):this.container.classList.add("OwO-open")}},{key:"tab",value:function(e){var t=this.container.getElementsByClassName("OwO-items-show")[0];if(t&&t.classList.remove("OwO-items-show"),this.container.getElementsByClassName("OwO-items")[e].classList.add("OwO-items-show"),!this.container.getElementsByClassName("OwO-items")[e].classList.contains("OwO-image-items-load")&&this.container.getElementsByClassName("OwO-items")[e].classList.contains("OwO-items-image")){this.container.getElementsByClassName("OwO-items")[e].classList.add("OwO-image-items-load");for(var a=this.container.getElementsByClassName("OwO-items")[e].getElementsByTagName("img"),s=0;s<a.length;s++)a[s].setAttribute("src",a[s].dataset.src)}var n=this.container.getElementsByClassName("OwO-package-active")[0];n&&n.classList.remove("OwO-package-active"),this.packagesEle.getElementsByTagName("li")[e].classList.add("OwO-package-active")}}]),i);function i(e){var t=this;_classCallCheck(this,i);var a={logo:"OwO",container:document.getElementsByClassName("OwO")[0],target:document.getElementsByTagName("textarea")[0],position:"down",width:"100%",maxHeight:"250px",api:"https://api.anotherhome.net/OwO/OwO.json"};for(var s in a)a.hasOwnProperty(s)&&!e.hasOwnProperty(s)&&(e[s]=a[s]);this.container=e.container,this.target=e.target,"up"===e.position&&this.container.classList.add("OwO-up");var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&(200<=n.status&&n.status<300||304===n.status?(t.odata=JSON.parse(n.responseText),t.init(e)):console.log("OwO data request was unsuccessful: "+n.status))},n.open("get",e.api,!0),n.send(null)}"undefined"!=typeof module&&void 0!==module.exports?module.exports=e:window.OwO=e}();