(()=>{"use strict";var e={660:(e,a,n)=>{var o=n(719),d={},c={};o.forEach((function(e){d[e.name.toLowerCase()]=e.code,c[e.code.toLowerCase()]=e.name})),a.oY=function(e){return c[e.toLowerCase()]},a.ez=function(){return o.map((function(e){return e.code}))}},719:e=>{e.exports=JSON.parse('[{"code":"AD","name":"Andorra"},{"code":"AE","name":"United Arab Emirates"},{"code":"AF","name":"Afghanistan"},{"code":"AG","name":"Antigua and Barbuda"},{"code":"AI","name":"Anguilla"},{"code":"AL","name":"Albania"},{"code":"AM","name":"Armenia"},{"code":"AO","name":"Angola"},{"code":"AQ","name":"Antarctica"},{"code":"AR","name":"Argentina"},{"code":"AS","name":"American Samoa"},{"code":"AT","name":"Austria"},{"code":"AU","name":"Australia"},{"code":"AW","name":"Aruba"},{"code":"AX","name":"Åland Islands"},{"code":"AZ","name":"Azerbaijan"},{"code":"BA","name":"Bosnia and Herzegovina"},{"code":"BB","name":"Barbados"},{"code":"BD","name":"Bangladesh"},{"code":"BE","name":"Belgium"},{"code":"BF","name":"Burkina Faso"},{"code":"BG","name":"Bulgaria"},{"code":"BH","name":"Bahrain"},{"code":"BI","name":"Burundi"},{"code":"BJ","name":"Benin"},{"code":"BL","name":"Saint Barthélemy"},{"code":"BM","name":"Bermuda"},{"code":"BN","name":"Brunei Darussalam"},{"code":"BO","name":"Bolivia, Plurinational State of"},{"code":"BQ","name":"Bonaire, Sint Eustatius and Saba"},{"code":"BR","name":"Brazil"},{"code":"BS","name":"Bahamas"},{"code":"BT","name":"Bhutan"},{"code":"BV","name":"Bouvet Island"},{"code":"BW","name":"Botswana"},{"code":"BY","name":"Belarus"},{"code":"BZ","name":"Belize"},{"code":"CA","name":"Canada"},{"code":"CC","name":"Cocos (Keeling) Islands"},{"code":"CD","name":"Congo, Democratic Republic of the"},{"code":"CF","name":"Central African Republic"},{"code":"CG","name":"Congo"},{"code":"CH","name":"Switzerland"},{"code":"CI","name":"Côte d\'Ivoire"},{"code":"CK","name":"Cook Islands"},{"code":"CL","name":"Chile"},{"code":"CM","name":"Cameroon"},{"code":"CN","name":"China"},{"code":"CO","name":"Colombia"},{"code":"CR","name":"Costa Rica"},{"code":"CU","name":"Cuba"},{"code":"CV","name":"Cabo Verde"},{"code":"CW","name":"Curaçao"},{"code":"CX","name":"Christmas Island"},{"code":"CY","name":"Cyprus"},{"code":"CZ","name":"Czechia"},{"code":"DE","name":"Germany"},{"code":"DJ","name":"Djibouti"},{"code":"DK","name":"Denmark"},{"code":"DM","name":"Dominica"},{"code":"DO","name":"Dominican Republic"},{"code":"DZ","name":"Algeria"},{"code":"EC","name":"Ecuador"},{"code":"EE","name":"Estonia"},{"code":"EG","name":"Egypt"},{"code":"EH","name":"Western Sahara"},{"code":"ER","name":"Eritrea"},{"code":"ES","name":"Spain"},{"code":"ET","name":"Ethiopia"},{"code":"FI","name":"Finland"},{"code":"FJ","name":"Fiji"},{"code":"FK","name":"Falkland Islands (Malvinas)"},{"code":"FM","name":"Micronesia, Federated States of"},{"code":"FO","name":"Faroe Islands"},{"code":"FR","name":"France"},{"code":"GA","name":"Gabon"},{"code":"GB","name":"United Kingdom of Great Britain and Northern Ireland"},{"code":"GD","name":"Grenada"},{"code":"GE","name":"Georgia"},{"code":"GF","name":"French Guiana"},{"code":"GG","name":"Guernsey"},{"code":"GH","name":"Ghana"},{"code":"GI","name":"Gibraltar"},{"code":"GL","name":"Greenland"},{"code":"GM","name":"Gambia"},{"code":"GN","name":"Guinea"},{"code":"GP","name":"Guadeloupe"},{"code":"GQ","name":"Equatorial Guinea"},{"code":"GR","name":"Greece"},{"code":"GS","name":"South Georgia and the South Sandwich Islands"},{"code":"GT","name":"Guatemala"},{"code":"GU","name":"Guam"},{"code":"GW","name":"Guinea-Bissau"},{"code":"GY","name":"Guyana"},{"code":"HK","name":"Hong Kong"},{"code":"HM","name":"Heard Island and McDonald Islands"},{"code":"HN","name":"Honduras"},{"code":"HR","name":"Croatia"},{"code":"HT","name":"Haiti"},{"code":"HU","name":"Hungary"},{"code":"ID","name":"Indonesia"},{"code":"IE","name":"Ireland"},{"code":"IL","name":"Israel"},{"code":"IM","name":"Isle of Man"},{"code":"IN","name":"India"},{"code":"IO","name":"British Indian Ocean Territory"},{"code":"IQ","name":"Iraq"},{"code":"IR","name":"Iran, Islamic Republic of"},{"code":"IS","name":"Iceland"},{"code":"IT","name":"Italy"},{"code":"JE","name":"Jersey"},{"code":"JM","name":"Jamaica"},{"code":"JO","name":"Jordan"},{"code":"JP","name":"Japan"},{"code":"KE","name":"Kenya"},{"code":"KG","name":"Kyrgyzstan"},{"code":"KH","name":"Cambodia"},{"code":"KI","name":"Kiribati"},{"code":"KM","name":"Comoros"},{"code":"KN","name":"Saint Kitts and Nevis"},{"code":"KP","name":"Korea, Democratic People\'s Republic of"},{"code":"KR","name":"Korea, Republic of"},{"code":"KW","name":"Kuwait"},{"code":"KY","name":"Cayman Islands"},{"code":"KZ","name":"Kazakhstan"},{"code":"LA","name":"Lao People\'s Democratic Republic"},{"code":"LB","name":"Lebanon"},{"code":"LC","name":"Saint Lucia"},{"code":"LI","name":"Liechtenstein"},{"code":"LK","name":"Sri Lanka"},{"code":"LR","name":"Liberia"},{"code":"LS","name":"Lesotho"},{"code":"LT","name":"Lithuania"},{"code":"LU","name":"Luxembourg"},{"code":"LV","name":"Latvia"},{"code":"LY","name":"Libya"},{"code":"MA","name":"Morocco"},{"code":"MC","name":"Monaco"},{"code":"MD","name":"Moldova, Republic of"},{"code":"ME","name":"Montenegro"},{"code":"MF","name":"Saint Martin, (French part)"},{"code":"MG","name":"Madagascar"},{"code":"MH","name":"Marshall Islands"},{"code":"MK","name":"North Macedonia"},{"code":"ML","name":"Mali"},{"code":"MM","name":"Myanmar"},{"code":"MN","name":"Mongolia"},{"code":"MO","name":"Macao"},{"code":"MP","name":"Northern Mariana Islands"},{"code":"MQ","name":"Martinique"},{"code":"MR","name":"Mauritania"},{"code":"MS","name":"Montserrat"},{"code":"MT","name":"Malta"},{"code":"MU","name":"Mauritius"},{"code":"MV","name":"Maldives"},{"code":"MW","name":"Malawi"},{"code":"MX","name":"Mexico"},{"code":"MY","name":"Malaysia"},{"code":"MZ","name":"Mozambique"},{"code":"NA","name":"Namibia"},{"code":"NC","name":"New Caledonia"},{"code":"NE","name":"Niger"},{"code":"NF","name":"Norfolk Island"},{"code":"NG","name":"Nigeria"},{"code":"NI","name":"Nicaragua"},{"code":"NL","name":"Netherlands"},{"code":"NO","name":"Norway"},{"code":"NP","name":"Nepal"},{"code":"NR","name":"Nauru"},{"code":"NU","name":"Niue"},{"code":"NZ","name":"New Zealand"},{"code":"OM","name":"Oman"},{"code":"PA","name":"Panama"},{"code":"PE","name":"Peru"},{"code":"PF","name":"French Polynesia"},{"code":"PG","name":"Papua New Guinea"},{"code":"PH","name":"Philippines"},{"code":"PK","name":"Pakistan"},{"code":"PL","name":"Poland"},{"code":"PM","name":"Saint Pierre and Miquelon"},{"code":"PN","name":"Pitcairn"},{"code":"PR","name":"Puerto Rico"},{"code":"PS","name":"Palestine, State of"},{"code":"PT","name":"Portugal"},{"code":"PW","name":"Palau"},{"code":"PY","name":"Paraguay"},{"code":"QA","name":"Qatar"},{"code":"RE","name":"Réunion"},{"code":"RO","name":"Romania"},{"code":"RS","name":"Serbia"},{"code":"RU","name":"Russian Federation"},{"code":"RW","name":"Rwanda"},{"code":"SA","name":"Saudi Arabia"},{"code":"SB","name":"Solomon Islands"},{"code":"SC","name":"Seychelles"},{"code":"SD","name":"Sudan"},{"code":"SE","name":"Sweden"},{"code":"SG","name":"Singapore"},{"code":"SH","name":"Saint Helena, Ascension and Tristan da Cunha"},{"code":"SI","name":"Slovenia"},{"code":"SJ","name":"Svalbard and Jan Mayen"},{"code":"SK","name":"Slovakia"},{"code":"SL","name":"Sierra Leone"},{"code":"SM","name":"San Marino"},{"code":"SN","name":"Senegal"},{"code":"SO","name":"Somalia"},{"code":"SR","name":"Suriname"},{"code":"SS","name":"South Sudan"},{"code":"ST","name":"Sao Tome and Principe"},{"code":"SV","name":"El Salvador"},{"code":"SX","name":"Sint Maarten, (Dutch part)"},{"code":"SY","name":"Syrian Arab Republic"},{"code":"SZ","name":"Eswatini"},{"code":"TC","name":"Turks and Caicos Islands"},{"code":"TD","name":"Chad"},{"code":"TF","name":"French Southern Territories"},{"code":"TG","name":"Togo"},{"code":"TH","name":"Thailand"},{"code":"TJ","name":"Tajikistan"},{"code":"TK","name":"Tokelau"},{"code":"TL","name":"Timor-Leste"},{"code":"TM","name":"Turkmenistan"},{"code":"TN","name":"Tunisia"},{"code":"TO","name":"Tonga"},{"code":"TR","name":"Turkey"},{"code":"TT","name":"Trinidad and Tobago"},{"code":"TV","name":"Tuvalu"},{"code":"TW","name":"Taiwan, Province of China"},{"code":"TZ","name":"Tanzania, United Republic of"},{"code":"UA","name":"Ukraine"},{"code":"UG","name":"Uganda"},{"code":"UM","name":"United States Minor Outlying Islands"},{"code":"US","name":"United States of America"},{"code":"UY","name":"Uruguay"},{"code":"UZ","name":"Uzbekistan"},{"code":"VA","name":"Holy See"},{"code":"VC","name":"Saint Vincent and the Grenadines"},{"code":"VE","name":"Venezuela, Bolivarian Republic of"},{"code":"VG","name":"Virgin Islands, British"},{"code":"VI","name":"Virgin Islands, U.S."},{"code":"VN","name":"Viet Nam"},{"code":"VU","name":"Vanuatu"},{"code":"WF","name":"Wallis and Futuna"},{"code":"WS","name":"Samoa"},{"code":"YE","name":"Yemen"},{"code":"YT","name":"Mayotte"},{"code":"ZA","name":"South Africa"},{"code":"ZM","name":"Zambia"},{"code":"ZW","name":"Zimbabwe"}]')},99:(e,a,n)=>{n.d(a,{Z:()=>c});var o=n(645),d=n.n(o)()((function(e){return e[1]}));d.push([e.id,'body{font-family:"Nunito",sans-serif;text-align:center;background-color:#e3e3e3}#lpr table{border-collapse:collapse;width:100%}#lpr table th,#lpr table td{padding:1rem}#lpr table th:not(:last-child),#lpr table td:not(:last-child){border-right:1px solid #aaa}#lpr .regex{background-color:#faa;padding:.2rem .5rem;margin:.5rem;display:inline-block}#lpr .plate{border:1px solid #333;background-color:#fff;border-radius:4px;padding:.2rem .5rem;margin:.5rem;display:inline-block}',""]);const c=d},645:e=>{e.exports=function(e){var a=[];return a.toString=function(){return this.map((function(a){var n=e(a);return a[2]?"@media ".concat(a[2]," {").concat(n,"}"):n})).join("")},a.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var d={};if(o)for(var c=0;c<this.length;c++){var r=this[c][0];null!=r&&(d[r]=!0)}for(var i=0;i<e.length;i++){var t=[].concat(e[i]);o&&d[t[0]]||(n&&(t[2]?t[2]="".concat(n," and ").concat(t[2]):t[2]=n),a.push(t))}},a}},379:(e,a,n)=>{var o,d=function(){var e={};return function(a){if(void 0===e[a]){var n=document.querySelector(a);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[a]=n}return e[a]}}(),c=[];function r(e){for(var a=-1,n=0;n<c.length;n++)if(c[n].identifier===e){a=n;break}return a}function i(e,a){for(var n={},o=[],d=0;d<e.length;d++){var i=e[d],t=a.base?i[0]+a.base:i[0],m=n[t]||0,l="".concat(t," ").concat(m);n[t]=m+1;var s=r(l),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(c[s].references++,c[s].updater(u)):c.push({identifier:l,updater:S(u,a),references:1}),o.push(l)}return o}function t(e){var a=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var c=n.nc;c&&(o.nonce=c)}if(Object.keys(o).forEach((function(e){a.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(a);else{var r=d(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(a)}return a}var m,l=(m=[],function(e,a){return m[e]=a,m.filter(Boolean).join("\n")});function s(e,a,n,o){var d=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(a,d);else{var c=document.createTextNode(d),r=e.childNodes;r[a]&&e.removeChild(r[a]),r.length?e.insertBefore(c,r[a]):e.appendChild(c)}}function u(e,a,n){var o=n.css,d=n.media,c=n.sourceMap;if(d?e.setAttribute("media",d):e.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,f=0;function S(e,a){var n,o,d;if(a.singleton){var c=f++;n=p||(p=t(a)),o=s.bind(null,n,c,!1),d=s.bind(null,n,c,!0)}else n=t(a),o=u.bind(null,n,a),d=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;o(e=a)}else d()}}e.exports=function(e,a){(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=i(e=e||[],a);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var d=r(n[o]);c[d].references--}for(var t=i(e,a),m=0;m<n.length;m++){var l=r(n[m]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}n=t}}}}},a={};function n(o){if(a[o])return a[o].exports;var d=a[o]={id:o,exports:{}};return e[o](d,d.exports,n),d.exports}n.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return n.d(a,{a}),a},n.d=(e,a)=>{for(var o in a)n.o(a,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})},n.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e=n(660),a=n(379),o=n.n(a),d=n(99);o()(d.Z,{insert:"head",singleton:!1}),d.Z.locals;const c=(0,e.ez)().reduce(((e,a)=>(e[a]=a,e)),{}),r={[c.BE]:c.BE,[c.FR]:c.FR,[c.LU]:c.LU},i="CURRENT",t={[r.BE]:{code:r.BE,name:(0,e.oY)(r.BE),list:[{regex:/^\d-[A-Z]{3}-\d{3}$/,example:"1-ABC-003",type:i},{regex:/^[A-Z]{3}-\d{3}$/,example:"KAZ-813",type:"OLD"}]},[r.FR]:{code:r.FR,name:(0,e.oY)(r.FR),list:[{regex:/^[A-Z]{2}-\d{3}-[A-Z]{2}$/,example:"AA-123-AA",type:i},{regex:/^W-\d{3}-[A-Z]{2}$/,example:"W-573-HJ",type:"PROFESSIONAL"},{regex:/^\d{1,4}\s?[A-Z]{2,3}\s?(\d{2}|2A|2B)$/,example:"1023 AC 45",type:"OLD"}]},[r.LU]:{code:r.LU,name:(0,e.oY)(r.LU),list:[{regex:/^[A-Z]{2}\s?\d{4}$/,example:"KS 9412",type:i}]}},m=(e,a)=>{const n=document.getElementById(e);if(!n)throw new Error("tableId is null of is not present in the DOM!");const o=document.getElementById(a)?.innerHTML;if(!o)throw new Error("templateId is null of is not present in the DOM!");n.innerHTML+=Object.values(t).map((e=>o.replace("{{code}}",e.code).replace("{{name}}",e.name).replace("{{regex}}",e.list.map((e=>`<div>\n                <span class="regex">${e.regex}</span>\n                <span class="plate">${e.example}</span>\n              </div>`)).join("")))).join("")};(()=>{const e=document?.currentScript?.getAttribute("table-id");e&&m(e,e+"-template")})(),window.fillTable=m})()})();