(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dl="152",Yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ea=0,Ta=1,hh=100,ch=204,uh=205,dh=3,fl=300,Aa=1e3,ls=1001,Ca=1002,fh=1006,ph=1008,mh=1009,gh=1023,xh=3e3,ir=3001,nr="",ze="srgb",ua="srgb-linear",pl="display-p3",sr=7680,_h=519,La=35044;let Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}};const ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rr=Math.PI/180,Da=180/Math.PI;function ts(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ae[o&255]+ae[o>>8&255]+ae[o>>16&255]+ae[o>>24&255]+"-"+ae[t&255]+ae[t>>8&255]+"-"+ae[t>>16&15|64]+ae[t>>24&255]+"-"+ae[e&63|128]+ae[e>>8&255]+"-"+ae[e>>16&255]+ae[e>>24&255]+ae[i&255]+ae[i>>8&255]+ae[i>>16&255]+ae[i>>24&255]).toLowerCase()}function fe(o,t,e){return Math.max(t,Math.min(e,o))}function yh(o,t){return(o%t+t)%t}function ar(o,t,e){return(1-e)*o+e*t}function hs(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Se(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}let Xt=class ml{constructor(t=0,e=0){ml.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ji=class gl{constructor(){gl.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,n,s,a,r,h,l){const c=this.elements;return c[0]=t,c[1]=n,c[2]=r,c[3]=e,c[4]=s,c[5]=h,c[6]=i,c[7]=a,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],r=i[3],h=i[6],l=i[1],c=i[4],u=i[7],d=i[2],f=i[5],g=i[8],m=n[0],p=n[3],x=n[6],b=n[1],M=n[4],w=n[7],y=n[2],T=n[5],L=n[8];return s[0]=a*m+r*b+h*y,s[3]=a*p+r*M+h*T,s[6]=a*x+r*w+h*L,s[1]=l*m+c*b+u*y,s[4]=l*p+c*M+u*T,s[7]=l*x+c*w+u*L,s[2]=d*m+f*b+g*y,s[5]=d*p+f*M+g*T,s[8]=d*x+f*w+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],h=t[6],l=t[7],c=t[8];return e*a*c-e*r*l-i*s*c+i*r*h+n*s*l-n*a*h}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],h=t[6],l=t[7],c=t[8],u=c*a-r*l,d=r*h-c*s,f=l*s-a*h,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=u*m,t[1]=(n*l-c*i)*m,t[2]=(r*i-n*a)*m,t[3]=d*m,t[4]=(c*e-n*h)*m,t[5]=(n*s-r*e)*m,t[6]=f*m,t[7]=(i*h-l*e)*m,t[8]=(a*e-i*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,r){const h=Math.cos(s),l=Math.sin(s);return this.set(i*h,i*l,-i*(h*a+l*r)+a+t,-n*l,n*h,-n*(-l*a+h*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(or.makeScale(t,e)),this}rotate(t){return this.premultiply(or.makeRotation(-t)),this}translate(t,e){return this.premultiply(or.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};const or=new ji;function Mh(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Pa(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}const Ra={};function lr(o){o in Ra||(Ra[o]=!0,console.warn(o))}function Sn(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function hr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const vh=new ji().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),bh=new ji().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Sh(o){return o.convertSRGBToLinear().applyMatrix3(bh)}function wh(o){return o.applyMatrix3(vh).convertLinearToSRGB()}const Eh={[ua]:o=>o,[ze]:o=>o.convertSRGBToLinear(),[pl]:Sh},Th={[ua]:o=>o,[ze]:o=>o.convertLinearToSRGB(),[pl]:wh},Oe={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return ua},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;const i=Eh[t],n=Th[e];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return n(i(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}};let Ji,Ah=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=Pa("canvas")),Ji.width=t.width,Ji.height=t.height;const i=Ji.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Sn(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Sn(e[i]/255)*255):e[i]=Sn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ch=class{constructor(t=null){this.isSource=!0,this.uuid=ts(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,r=n.length;a<r;a++)n[a].isDataTexture?s.push(cr(n[a].image)):s.push(cr(n[a]))}else s=cr(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function cr(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ah.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lh=0,da=class Ws extends Qn{constructor(t=Ws.DEFAULT_IMAGE,e=Ws.DEFAULT_MAPPING,i=ls,n=ls,s=fh,a=ph,r=gh,h=mh,l=Ws.DEFAULT_ANISOTROPY,c=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=ts(),this.name="",this.source=new Ch(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=h,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ji,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===ir?ze:nr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Aa:t.x=t.x-Math.floor(t.x);break;case ls:t.x=t.x<0?0:1;break;case Ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Aa:t.y=t.y-Math.floor(t.y);break;case ls:t.y=t.y<0?0:1;break;case Ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?ir:xh}set encoding(t){lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ir?ze:nr}};da.DEFAULT_IMAGE=null;da.DEFAULT_MAPPING=fl;da.DEFAULT_ANISOTROPY=1;let Ii=class xl{constructor(t=0,e=0,i=0,n=1){xl.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const h=t.elements,l=h[0],c=h[4],u=h[8],d=h[1],f=h[5],g=h[9],m=h[2],p=h[6],x=h[10];if(Math.abs(c-d)<.01&&Math.abs(u-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+m)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,w=(f+1)/2,y=(x+1)/2,T=(c+d)/4,L=(u+m)/4,_=(g+p)/4;return M>w&&M>y?M<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(M),n=T/i,s=L/i):w>y?w<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(w),i=T/n,s=_/n):y<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(y),i=L/s,n=_/s),this.set(i,n,s,e),this}let b=Math.sqrt((p-g)*(p-g)+(u-m)*(u-m)+(d-c)*(d-c));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-m)/b,this.z=(d-c)/b,this.w=Math.acos((l+f+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wi=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,r){let h=i[n+0],l=i[n+1],c=i[n+2],u=i[n+3];const d=s[a+0],f=s[a+1],g=s[a+2],m=s[a+3];if(r===0){t[e+0]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u;return}if(r===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=m;return}if(u!==m||h!==d||l!==f||c!==g){let p=1-r;const x=h*d+l*f+c*g+u*m,b=x>=0?1:-1,M=1-x*x;if(M>Number.EPSILON){const y=Math.sqrt(M),T=Math.atan2(y,x*b);p=Math.sin(p*T)/y,r=Math.sin(r*T)/y}const w=r*b;if(h=h*p+d*w,l=l*p+f*w,c=c*p+g*w,u=u*p+m*w,p===1-r){const y=1/Math.sqrt(h*h+l*l+c*c+u*u);h*=y,l*=y,c*=y,u*=y}}t[e]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){const r=i[n],h=i[n+1],l=i[n+2],c=i[n+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=r*g+c*u+h*f-l*d,t[e+1]=h*g+c*d+l*u-r*f,t[e+2]=l*g+c*f+r*d-h*u,t[e+3]=c*g-r*u-h*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,n=t._y,s=t._z,a=t._order,r=Math.cos,h=Math.sin,l=r(i/2),c=r(n/2),u=r(s/2),d=h(i/2),f=h(n/2),g=h(s/2);switch(a){case"XYZ":this._x=d*c*u+l*f*g,this._y=l*f*u-d*c*g,this._z=l*c*g+d*f*u,this._w=l*c*u-d*f*g;break;case"YXZ":this._x=d*c*u+l*f*g,this._y=l*f*u-d*c*g,this._z=l*c*g-d*f*u,this._w=l*c*u+d*f*g;break;case"ZXY":this._x=d*c*u-l*f*g,this._y=l*f*u+d*c*g,this._z=l*c*g+d*f*u,this._w=l*c*u-d*f*g;break;case"ZYX":this._x=d*c*u-l*f*g,this._y=l*f*u+d*c*g,this._z=l*c*g-d*f*u,this._w=l*c*u+d*f*g;break;case"YZX":this._x=d*c*u+l*f*g,this._y=l*f*u+d*c*g,this._z=l*c*g-d*f*u,this._w=l*c*u-d*f*g;break;case"XZY":this._x=d*c*u-l*f*g,this._y=l*f*u-d*c*g,this._z=l*c*g+d*f*u,this._w=l*c*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],r=e[5],h=e[9],l=e[2],c=e[6],u=e[10],d=i+r+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-h)*f,this._y=(s-l)*f,this._z=(a-n)*f}else if(i>r&&i>u){const f=2*Math.sqrt(1+i-r-u);this._w=(c-h)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+l)/f}else if(r>u){const f=2*Math.sqrt(1+r-i-u);this._w=(s-l)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(h+c)/f}else{const f=2*Math.sqrt(1+u-i-r);this._w=(a-n)/f,this._x=(s+l)/f,this._y=(h+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,r=e._x,h=e._y,l=e._z,c=e._w;return this._x=i*c+a*r+n*l-s*h,this._y=n*c+a*h+s*r-i*l,this._z=s*c+a*l+i*h-n*r,this._w=a*c-i*r-n*h-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,a=this._w;let r=a*t._w+i*t._x+n*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const h=1-r*r;if(h<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(h),c=Math.atan2(l,r),u=Math.sin((1-e)*c)/l,d=Math.sin(e*c)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class _l{constructor(t=0,e=0,i=0){_l.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(za.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(za.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,r=t.z,h=t.w,l=h*e+a*n-r*i,c=h*i+r*e-s*n,u=h*n+s*i-a*e,d=-s*e-a*i-r*n;return this.x=l*h+d*-s+c*-r-u*-a,this.y=c*h+d*-a+u*-s-l*-r,this.z=u*h+d*-r+l*-a-c*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,r=e.y,h=e.z;return this.x=n*h-s*r,this.y=s*a-i*h,this.z=i*r-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ur.copy(this).projectOnVector(t),this.sub(ur)}reflect(t){return this.sub(ur.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const ur=new Y,za=new Wi;let es=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Ki.copy(t.boundingBox),Ki.applyMatrix4(t.matrixWorld),this.union(Ki);else{const n=t.geometry;if(n!==void 0)if(e&&n.attributes!==void 0&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,r=s.count;a<r;a++)Qe.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Qe)}else n.boundingBox===null&&n.computeBoundingBox(),Ki.copy(n.boundingBox),Ki.applyMatrix4(t.matrixWorld),this.union(Ki)}const i=t.children;for(let n=0,s=i.length;n<s;n++)this.expandByObject(i[n],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(In),cs.subVectors(this.max,In),Qi.subVectors(t.a,In),tn.subVectors(t.b,In),en.subVectors(t.c,In),ci.subVectors(tn,Qi),ui.subVectors(en,tn),Li.subVectors(Qi,en);let e=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Li.z,Li.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Li.z,0,-Li.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Li.y,Li.x,0];return!dr(e,Qi,tn,en,cs)||(e=[1,0,0,0,1,0,0,0,1],!dr(e,Qi,tn,en,cs))?!1:(us.crossVectors(ci,ui),e=[us.x,us.y,us.z],dr(e,Qi,tn,en,cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ke),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};const Ke=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Qe=new Y,Ki=new es,Qi=new Y,tn=new Y,en=new Y,ci=new Y,ui=new Y,Li=new Y,In=new Y,cs=new Y,us=new Y,Di=new Y;function dr(o,t,e,i,n){for(let s=0,a=o.length-3;s<=a;s+=3){Di.fromArray(o,s);const r=n.x*Math.abs(Di.x)+n.y*Math.abs(Di.y)+n.z*Math.abs(Di.z),h=t.dot(Di),l=e.dot(Di),c=i.dot(Di);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>r)return!1}return!0}const Dh=new es,Nn=new Y,fr=new Y;let js=class{constructor(t=new Y,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Dh.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nn.subVectors(t,this.center);const e=Nn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Nn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nn.copy(t.center).add(fr)),this.expandByPoint(Nn.copy(t.center).sub(fr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const ti=new Y,pr=new Y,ds=new Y,di=new Y,mr=new Y,fs=new Y,gr=new Y;let yl=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){pr.copy(t).add(e).multiplyScalar(.5),ds.copy(e).sub(t).normalize(),di.copy(this.origin).sub(pr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ds),r=di.dot(this.direction),h=-di.dot(ds),l=di.lengthSq(),c=Math.abs(1-a*a);let u,d,f,g;if(c>0)if(u=a*h-r,d=a*r-h,g=s*c,u>=0)if(d>=-g)if(d<=g){const m=1/c;u*=m,d*=m,f=u*(u+a*d+2*r)+d*(a*u+d+2*h)+l}else d=s,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*h)+l;else d=-s,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*h)+l;else d<=-g?(u=Math.max(0,-(-a*s+r)),d=u>0?-s:Math.min(Math.max(-s,-h),s),f=-u*u+d*(d+2*h)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-h),s),f=d*(d+2*h)+l):(u=Math.max(0,-(a*s+r)),d=u>0?s:Math.min(Math.max(-s,-h),s),f=-u*u+d*(d+2*h)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(pr).addScaledVector(ds,d),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const i=ti.dot(this.direction),n=ti.dot(ti)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),r=i-a,h=i+a;return h<0?null:r<0?this.at(h,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,r,h;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,n=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,n=(t.min.x-d.x)*l),c>=0?(s=(t.min.y-d.y)*c,a=(t.max.y-d.y)*c):(s=(t.max.y-d.y)*c,a=(t.min.y-d.y)*c),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(r=(t.min.z-d.z)*u,h=(t.max.z-d.z)*u):(r=(t.max.z-d.z)*u,h=(t.min.z-d.z)*u),i>h||r>n)||((r>i||i!==i)&&(i=r),(h<n||n!==n)&&(n=h),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,i,n,s){mr.subVectors(e,t),fs.subVectors(i,t),gr.crossVectors(mr,fs);let a=this.direction.dot(gr),r;if(a>0){if(n)return null;r=1}else if(a<0)r=-1,a=-a;else return null;di.subVectors(this.origin,t);const h=r*this.direction.dot(fs.crossVectors(di,fs));if(h<0)return null;const l=r*this.direction.dot(mr.cross(di));if(l<0||h+l>a)return null;const c=-r*di.dot(gr);return c<0?null:this.at(c/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pe=class ia{constructor(){ia.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,n,s,a,r,h,l,c,u,d,f,g,m,p){const x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=n,x[1]=s,x[5]=a,x[9]=r,x[13]=h,x[2]=l,x[6]=c,x[10]=u,x[14]=d,x[3]=f,x[7]=g,x[11]=m,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ia().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/nn.setFromMatrixColumn(t,0).length(),s=1/nn.setFromMatrixColumn(t,1).length(),a=1/nn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),r=Math.sin(i),h=Math.cos(n),l=Math.sin(n),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*c,f=a*u,g=r*c,m=r*u;e[0]=h*c,e[4]=-h*u,e[8]=l,e[1]=f+g*l,e[5]=d-m*l,e[9]=-r*h,e[2]=m-d*l,e[6]=g+f*l,e[10]=a*h}else if(t.order==="YXZ"){const d=h*c,f=h*u,g=l*c,m=l*u;e[0]=d+m*r,e[4]=g*r-f,e[8]=a*l,e[1]=a*u,e[5]=a*c,e[9]=-r,e[2]=f*r-g,e[6]=m+d*r,e[10]=a*h}else if(t.order==="ZXY"){const d=h*c,f=h*u,g=l*c,m=l*u;e[0]=d-m*r,e[4]=-a*u,e[8]=g+f*r,e[1]=f+g*r,e[5]=a*c,e[9]=m-d*r,e[2]=-a*l,e[6]=r,e[10]=a*h}else if(t.order==="ZYX"){const d=a*c,f=a*u,g=r*c,m=r*u;e[0]=h*c,e[4]=g*l-f,e[8]=d*l+m,e[1]=h*u,e[5]=m*l+d,e[9]=f*l-g,e[2]=-l,e[6]=r*h,e[10]=a*h}else if(t.order==="YZX"){const d=a*h,f=a*l,g=r*h,m=r*l;e[0]=h*c,e[4]=m-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*c,e[9]=-r*c,e[2]=-l*c,e[6]=f*u+g,e[10]=d-m*u}else if(t.order==="XZY"){const d=a*h,f=a*l,g=r*h,m=r*l;e[0]=h*c,e[4]=-u,e[8]=l*c,e[1]=d*u+m,e[5]=a*c,e[9]=f*u-g,e[2]=g*u-f,e[6]=r*c,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ph,t,Rh)}lookAt(t,e,i){const n=this.elements;return we.subVectors(t,e),we.lengthSq()===0&&(we.z=1),we.normalize(),fi.crossVectors(i,we),fi.lengthSq()===0&&(Math.abs(i.z)===1?we.x+=1e-4:we.z+=1e-4,we.normalize(),fi.crossVectors(i,we)),fi.normalize(),ps.crossVectors(we,fi),n[0]=fi.x,n[4]=ps.x,n[8]=we.x,n[1]=fi.y,n[5]=ps.y,n[9]=we.y,n[2]=fi.z,n[6]=ps.z,n[10]=we.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],r=i[4],h=i[8],l=i[12],c=i[1],u=i[5],d=i[9],f=i[13],g=i[2],m=i[6],p=i[10],x=i[14],b=i[3],M=i[7],w=i[11],y=i[15],T=n[0],L=n[4],_=n[8],A=n[12],D=n[1],k=n[5],J=n[9],R=n[13],z=n[2],B=n[6],Z=n[10],K=n[14],H=n[3],nt=n[7],Q=n[11],U=n[15];return s[0]=a*T+r*D+h*z+l*H,s[4]=a*L+r*k+h*B+l*nt,s[8]=a*_+r*J+h*Z+l*Q,s[12]=a*A+r*R+h*K+l*U,s[1]=c*T+u*D+d*z+f*H,s[5]=c*L+u*k+d*B+f*nt,s[9]=c*_+u*J+d*Z+f*Q,s[13]=c*A+u*R+d*K+f*U,s[2]=g*T+m*D+p*z+x*H,s[6]=g*L+m*k+p*B+x*nt,s[10]=g*_+m*J+p*Z+x*Q,s[14]=g*A+m*R+p*K+x*U,s[3]=b*T+M*D+w*z+y*H,s[7]=b*L+M*k+w*B+y*nt,s[11]=b*_+M*J+w*Z+y*Q,s[15]=b*A+M*R+w*K+y*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],r=t[5],h=t[9],l=t[13],c=t[2],u=t[6],d=t[10],f=t[14],g=t[3],m=t[7],p=t[11],x=t[15];return g*(+s*h*u-n*l*u-s*r*d+i*l*d+n*r*f-i*h*f)+m*(+e*h*f-e*l*d+s*a*d-n*a*f+n*l*c-s*h*c)+p*(+e*l*u-e*r*f-s*a*u+i*a*f+s*r*c-i*l*c)+x*(-n*r*c-e*h*u+e*r*d+n*a*u-i*a*d+i*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],h=t[6],l=t[7],c=t[8],u=t[9],d=t[10],f=t[11],g=t[12],m=t[13],p=t[14],x=t[15],b=u*p*l-m*d*l+m*h*f-r*p*f-u*h*x+r*d*x,M=g*d*l-c*p*l-g*h*f+a*p*f+c*h*x-a*d*x,w=c*m*l-g*u*l+g*r*f-a*m*f-c*r*x+a*u*x,y=g*u*h-c*m*h-g*r*d+a*m*d+c*r*p-a*u*p,T=e*b+i*M+n*w+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return t[0]=b*L,t[1]=(m*d*s-u*p*s-m*n*f+i*p*f+u*n*x-i*d*x)*L,t[2]=(r*p*s-m*h*s+m*n*l-i*p*l-r*n*x+i*h*x)*L,t[3]=(u*h*s-r*d*s-u*n*l+i*d*l+r*n*f-i*h*f)*L,t[4]=M*L,t[5]=(c*p*s-g*d*s+g*n*f-e*p*f-c*n*x+e*d*x)*L,t[6]=(g*h*s-a*p*s-g*n*l+e*p*l+a*n*x-e*h*x)*L,t[7]=(a*d*s-c*h*s+c*n*l-e*d*l-a*n*f+e*h*f)*L,t[8]=w*L,t[9]=(g*u*s-c*m*s-g*i*f+e*m*f+c*i*x-e*u*x)*L,t[10]=(a*m*s-g*r*s+g*i*l-e*m*l-a*i*x+e*r*x)*L,t[11]=(c*r*s-a*u*s-c*i*l+e*u*l+a*i*f-e*r*f)*L,t[12]=y*L,t[13]=(c*m*n-g*u*n+g*i*d-e*m*d-c*i*p+e*u*p)*L,t[14]=(g*r*n-a*m*n-g*i*h+e*m*h+a*i*p-e*r*p)*L,t[15]=(a*u*n-c*r*n+c*i*h-e*u*h-a*i*d+e*r*d)*L,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,r=t.y,h=t.z,l=s*a,c=s*r;return this.set(l*a+i,l*r-n*h,l*h+n*r,0,l*r+n*h,c*r+i,c*h-n*a,0,l*h-n*r,c*h+n*a,s*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,r=e._z,h=e._w,l=s+s,c=a+a,u=r+r,d=s*l,f=s*c,g=s*u,m=a*c,p=a*u,x=r*u,b=h*l,M=h*c,w=h*u,y=i.x,T=i.y,L=i.z;return n[0]=(1-(m+x))*y,n[1]=(f+w)*y,n[2]=(g-M)*y,n[3]=0,n[4]=(f-w)*T,n[5]=(1-(d+x))*T,n[6]=(p+b)*T,n[7]=0,n[8]=(g+M)*L,n[9]=(p-b)*L,n[10]=(1-(d+m))*L,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=nn.set(n[0],n[1],n[2]).length();const a=nn.set(n[4],n[5],n[6]).length(),r=nn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Be.copy(this);const l=1/s,c=1/a,u=1/r;return Be.elements[0]*=l,Be.elements[1]*=l,Be.elements[2]*=l,Be.elements[4]*=c,Be.elements[5]*=c,Be.elements[6]*=c,Be.elements[8]*=u,Be.elements[9]*=u,Be.elements[10]*=u,e.setFromRotationMatrix(Be),i.x=s,i.y=a,i.z=r,this}makePerspective(t,e,i,n,s,a){const r=this.elements,h=2*s/(e-t),l=2*s/(i-n),c=(e+t)/(e-t),u=(i+n)/(i-n),d=-(a+s)/(a-s),f=-2*a*s/(a-s);return r[0]=h,r[4]=0,r[8]=c,r[12]=0,r[1]=0,r[5]=l,r[9]=u,r[13]=0,r[2]=0,r[6]=0,r[10]=d,r[14]=f,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,i,n,s,a){const r=this.elements,h=1/(e-t),l=1/(i-n),c=1/(a-s),u=(e+t)*h,d=(i+n)*l,f=(a+s)*c;return r[0]=2*h,r[4]=0,r[8]=0,r[12]=-u,r[1]=0,r[5]=2*l,r[9]=0,r[13]=-d,r[2]=0,r[6]=0,r[10]=-2*c,r[14]=-f,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};const nn=new Y,Be=new pe,Ph=new Y(0,0,0),Rh=new Y(1,1,1),fi=new Y,ps=new Y,we=new Y,Fa=new pe,Ia=new Wi;let Ml=class vl{constructor(t=0,e=0,i=0,n=vl.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],r=n[8],h=n[1],l=n[5],c=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(fe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fa,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ia.setFromEuler(this),this.setFromQuaternion(Ia,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ml.DEFAULT_ORDER="XYZ";let zh=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Fh=0;const Na=new Y,sn=new Wi,ei=new pe,ms=new Y,On=new Y,Ih=new Y,Nh=new Wi,Oa=new Y(1,0,0),Ba=new Y(0,1,0),Ua=new Y(0,0,1),Oh={type:"added"},ka={type:"removed"};let qe=class Hs extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hs.DEFAULT_UP.clone();const t=new Y,e=new Ml,i=new Wi,n=new Y(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new pe},normalMatrix:{value:new ji}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Hs.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Hs.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return sn.setFromAxisAngle(t,e),this.quaternion.multiply(sn),this}rotateOnWorldAxis(t,e){return sn.setFromAxisAngle(t,e),this.quaternion.premultiply(sn),this}rotateX(t){return this.rotateOnAxis(Oa,t)}rotateY(t){return this.rotateOnAxis(Ba,t)}rotateZ(t){return this.rotateOnAxis(Ua,t)}translateOnAxis(t,e){return Na.copy(t).applyQuaternion(this.quaternion),this.position.add(Na.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oa,t)}translateY(t){return this.translateOnAxis(Ba,t)}translateZ(t){return this.translateOnAxis(Ua,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ms.copy(t):ms.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),On.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(On,ms,this.up):ei.lookAt(ms,On,this.up),this.quaternion.setFromRotationMatrix(ei),n&&(ei.extractRotation(n.matrixWorld),sn.setFromRotationMatrix(ei),this.quaternion.premultiply(sn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Oh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ka)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ka)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectsByProperty(t,e);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(On,t,Ih),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(On,Nh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++){const r=n[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(r,h){return r[h.uuid]===void 0&&(r[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const h=r.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const u=h[l];s(t.shapes,u)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let h=0,l=this.material.length;h<l;h++)r.push(s(t.materials,this.material[h]));n.material=r}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){const h=this.animations[r];n.animations.push(s(t.animations,h))}}if(e){const r=a(t.geometries),h=a(t.materials),l=a(t.textures),c=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);r.length>0&&(i.geometries=r),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(r){const h=[];for(const l in r){const c=r[l];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}};qe.DEFAULT_UP=new Y(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let Bh=0,bl=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Ta,this.side=Ea,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ch,this.blendDst=uh,this.blendEquation=hh,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=dh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ta&&(i.blending=this.blending),this.side!==Ea&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const r in s){const h=s[r];delete h.metadata,a.push(h)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const Sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ue={h:0,s:0,l:0},gs={h:0,s:0,l:0};function xr(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}let vi=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,Oe.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Oe.workingColorSpace){if(t=yh(t,1),e=fe(e,0,1),i=fe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=xr(a,s,t+1/3),this.g=xr(a,s,t),this.b=xr(a,s,t-1/3)}return Oe.toWorkingColorSpace(this,n),this}setStyle(t,e=ze){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],r=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const i=Sl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Oe.fromWorkingColorSpace(oe.copy(this),t),Math.round(fe(oe.r*255,0,255))*65536+Math.round(fe(oe.g*255,0,255))*256+Math.round(fe(oe.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Oe.workingColorSpace){Oe.fromWorkingColorSpace(oe.copy(this),e);const i=oe.r,n=oe.g,s=oe.b,a=Math.max(i,n,s),r=Math.min(i,n,s);let h,l;const c=(r+a)/2;if(r===a)h=0,l=0;else{const u=a-r;switch(l=c<=.5?u/(a+r):u/(2-a-r),a){case i:h=(n-s)/u+(n<s?6:0);break;case n:h=(s-i)/u+2;break;case s:h=(i-n)/u+4;break}h/=6}return t.h=h,t.s=l,t.l=c,t}getRGB(t,e=Oe.workingColorSpace){return Oe.fromWorkingColorSpace(oe.copy(this),e),t.r=oe.r,t.g=oe.g,t.b=oe.b,t}getStyle(t=ze){Oe.fromWorkingColorSpace(oe.copy(this),t);const e=oe.r,i=oe.g,n=oe.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ue),Ue.h+=t,Ue.s+=e,Ue.l+=i,this.setHSL(Ue.h,Ue.s,Ue.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ue),t.getHSL(gs);const i=ar(Ue.h,gs.h,e),n=ar(Ue.s,gs.s,e),s=ar(Ue.l,gs.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const oe=new vi;vi.NAMES=Sl;const Ht=new Y,xs=new Xt;let wn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=La,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xs.fromBufferAttribute(this,e),xs.applyMatrix3(t),this.setXY(e,xs.x,xs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ht.fromBufferAttribute(this,e),Ht.applyMatrix3(t),this.setXYZ(e,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ht.fromBufferAttribute(this,e),Ht.applyMatrix4(t),this.setXYZ(e,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ht.fromBufferAttribute(this,e),Ht.applyNormalMatrix(t),this.setXYZ(e,Ht.x,Ht.y,Ht.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ht.fromBufferAttribute(this,e),Ht.transformDirection(t),this.setXYZ(e,Ht.x,Ht.y,Ht.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==La&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}},Uh=class extends wn{constructor(t,e,i){super(new Uint16Array(t),e,i)}},kh=class extends wn{constructor(t,e,i){super(new Uint32Array(t),e,i)}},An=class extends wn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Gh=0;const Pe=new pe,_r=new qe,rn=new Y,Ee=new es,Bn=new es,ee=new Y;let Ys=class wl extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mh(t)?kh:Uh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ji().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pe.makeRotationFromQuaternion(t),this.applyMatrix4(Pe),this}rotateX(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this}rotateY(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this}rotateZ(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this}translate(t,e,i){return Pe.makeTranslation(t,e,i),this.applyMatrix4(Pe),this}scale(t,e,i){return Pe.makeScale(t,e,i),this.applyMatrix4(Pe),this}lookAt(t){return _r.lookAt(t),_r.updateMatrix(),this.applyMatrix4(_r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rn).negate(),this.translate(rn.x,rn.y,rn.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new An(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];Ee.setFromBufferAttribute(s),this.morphTargetsRelative?(ee.addVectors(this.boundingBox.min,Ee.min),this.boundingBox.expandByPoint(ee),ee.addVectors(this.boundingBox.max,Ee.max),this.boundingBox.expandByPoint(ee)):(this.boundingBox.expandByPoint(Ee.min),this.boundingBox.expandByPoint(Ee.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(t){const i=this.boundingSphere.center;if(Ee.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const r=e[s];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(ee.addVectors(Ee.min,Bn.min),Ee.expandByPoint(ee),ee.addVectors(Ee.max,Bn.max),Ee.expandByPoint(ee)):(Ee.expandByPoint(Bn.min),Ee.expandByPoint(Bn.max))}Ee.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)ee.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(ee));if(e)for(let s=0,a=e.length;s<a;s++){const r=e[s],h=this.morphTargetsRelative;for(let l=0,c=r.count;l<c;l++)ee.fromBufferAttribute(r,l),h&&(rn.fromBufferAttribute(t,l),ee.add(rn)),n=Math.max(n,i.distanceToSquared(ee))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,s=e.normal.array,a=e.uv.array,r=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*r),4));const h=this.getAttribute("tangent").array,l=[],c=[];for(let D=0;D<r;D++)l[D]=new Y,c[D]=new Y;const u=new Y,d=new Y,f=new Y,g=new Xt,m=new Xt,p=new Xt,x=new Y,b=new Y;function M(D,k,J){u.fromArray(n,D*3),d.fromArray(n,k*3),f.fromArray(n,J*3),g.fromArray(a,D*2),m.fromArray(a,k*2),p.fromArray(a,J*2),d.sub(u),f.sub(u),m.sub(g),p.sub(g);const R=1/(m.x*p.y-p.x*m.y);isFinite(R)&&(x.copy(d).multiplyScalar(p.y).addScaledVector(f,-m.y).multiplyScalar(R),b.copy(f).multiplyScalar(m.x).addScaledVector(d,-p.x).multiplyScalar(R),l[D].add(x),l[k].add(x),l[J].add(x),c[D].add(b),c[k].add(b),c[J].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let D=0,k=w.length;D<k;++D){const J=w[D],R=J.start,z=J.count;for(let B=R,Z=R+z;B<Z;B+=3)M(i[B+0],i[B+1],i[B+2])}const y=new Y,T=new Y,L=new Y,_=new Y;function A(D){L.fromArray(s,D*3),_.copy(L);const k=l[D];y.copy(k),y.sub(L.multiplyScalar(L.dot(k))).normalize(),T.crossVectors(_,k);const R=T.dot(c[D])<0?-1:1;h[D*4]=y.x,h[D*4+1]=y.y,h[D*4+2]=y.z,h[D*4+3]=R}for(let D=0,k=w.length;D<k;++D){const J=w[D],R=J.start,z=J.count;for(let B=R,Z=R+z;B<Z;B+=3)A(i[B+0]),A(i[B+1]),A(i[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new Y,s=new Y,a=new Y,r=new Y,h=new Y,l=new Y,c=new Y,u=new Y;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),m=t.getX(d+1),p=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),a.fromBufferAttribute(e,p),c.subVectors(a,s),u.subVectors(n,s),c.cross(u),r.fromBufferAttribute(i,g),h.fromBufferAttribute(i,m),l.fromBufferAttribute(i,p),r.add(c),h.add(c),l.add(c),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(m,h.x,h.y,h.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),c.subVectors(a,s),u.subVectors(n,s),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ee.fromBufferAttribute(t,e),ee.normalize(),t.setXYZ(e,ee.x,ee.y,ee.z)}toNonIndexed(){function t(r,h){const l=r.array,c=r.itemSize,u=r.normalized,d=new l.constructor(h.length*c);let f=0,g=0;for(let m=0,p=h.length;m<p;m++){r.isInterleavedBufferAttribute?f=h[m]*r.data.stride+r.offset:f=h[m]*c;for(let x=0;x<c;x++)d[g++]=l[f++]}return new wn(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new wl,i=this.index.array,n=this.attributes;for(const r in n){const h=n[r],l=t(h,i);e.setAttribute(r,l)}const s=this.morphAttributes;for(const r in s){const h=[],l=s[r];for(let c=0,u=l.length;c<u;c++){const d=l[c],f=t(d,i);h.push(f)}e.morphAttributes[r]=h}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,h=a.length;r<h;r++){const l=a[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const h in i){const l=i[h];t.data.attributes[h]=l.toJSON(t.data)}const n={};let s=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];c.push(f.toJSON(t.data))}c.length>0&&(n[h]=c,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const l in n){const c=n[l];this.setAttribute(l,c.clone(e))}const s=t.morphAttributes;for(const l in s){const c=[],u=s[l];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},El=class extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vh=class extends El{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Da*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(rr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/h,e-=a.offsetY*i/l,n*=a.width/h,i*=a.height/l}const r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};const yr=new Y,Wh=new Y,Hh=new ji;let an=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=yr.subVectors(i,e).cross(Wh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(yr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Hh.getNormalMatrix(t),n=this.coplanarPoint(yr).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Pi=new js,_s=new Y;let qh=class{constructor(t=new an,e=new an,i=new an,n=new an,s=new an,a=new an){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(n),r[4].copy(s),r[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,n=i[0],s=i[1],a=i[2],r=i[3],h=i[4],l=i[5],c=i[6],u=i[7],d=i[8],f=i[9],g=i[10],m=i[11],p=i[12],x=i[13],b=i[14],M=i[15];return e[0].setComponents(r-n,u-h,m-d,M-p).normalize(),e[1].setComponents(r+n,u+h,m+d,M+p).normalize(),e[2].setComponents(r+s,u+l,m+f,M+x).normalize(),e[3].setComponents(r-s,u-l,m-f,M-x).normalize(),e[4].setComponents(r-a,u-c,m-g,M-b).normalize(),e[5].setComponents(r+a,u+c,m+g,M+b).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(_s.x=n.normal.x>0?t.max.x:t.min.x,_s.y=n.normal.y>0?t.max.y:t.min.y,_s.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(_s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xh=class extends El{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,r=n+e,h=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,r-=c*this.view.offsetY,h=r-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};class $h extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Tl extends bl{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vi(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ga=new Y,Va=new Y,Wa=new pe,Mr=new yl,ys=new js;class jh extends qe{constructor(t=new Ys,e=new Tl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Ga.fromBufferAttribute(e,n-1),Va.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Ga.distanceTo(Va);t.setAttribute("lineDistance",new An(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(n),ys.radius+=s,t.ray.intersectsSphere(ys)===!1)return;Wa.copy(n).invert(),Mr.copy(t.ray).applyMatrix4(Wa);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=r*r,l=new Y,c=new Y,u=new Y,d=new Y,f=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const x=Math.max(0,a.start),b=Math.min(g.count,a.start+a.count);for(let M=x,w=b-1;M<w;M+=f){const y=g.getX(M),T=g.getX(M+1);if(l.fromBufferAttribute(p,y),c.fromBufferAttribute(p,T),Mr.distanceSqToSegment(l,c,d,u)>h)continue;d.applyMatrix4(this.matrixWorld);const _=t.ray.origin.distanceTo(d);_<t.near||_>t.far||e.push({distance:_,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,a.start),b=Math.min(p.count,a.start+a.count);for(let M=x,w=b-1;M<w;M+=f){if(l.fromBufferAttribute(p,M),c.fromBufferAttribute(p,M+1),Mr.distanceSqToSegment(l,c,d,u)>h)continue;d.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}const Ha=new Y,qa=new Y;class Yh extends jh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Ha.fromBufferAttribute(e,n),qa.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Ha.distanceTo(qa);t.setAttribute("lineDistance",new An(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Al extends bl{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vi(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xa=new pe,na=new yl,Ms=new js,vs=new Y;class Zh extends qe{constructor(t=new Ys,e=new Al){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(n),Ms.radius+=s,t.ray.intersectsSphere(Ms)===!1)return;Xa.copy(n).invert(),na.copy(t.ray).applyMatrix4(Xa);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=r*r,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,m=f;g<m;g++){const p=l.getX(g);vs.fromBufferAttribute(u,p),$a(vs,p,h,n,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,m=f;g<m;g++)vs.fromBufferAttribute(u,g),$a(vs,g,h,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function $a(o,t,e,i,n,s,a){const r=na.distanceSqToPoint(o);if(r<e){const h=new Y;na.closestPointToPoint(o,h),h.applyMatrix4(i);const l=n.ray.origin.distanceTo(h);if(l<n.near||l>n.far)return;s.push({distance:l,distanceToRay:Math.sqrt(r),point:h,index:t,face:null,object:a})}}class fa extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vi(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const vr=new pe,ja=new Y,Ya=new Y;class Cl{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qh,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Ii(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ja.setFromMatrixPosition(t.matrixWorld),e.position.copy(ja),Ya.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ya),e.updateMatrixWorld(),vr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Za=new pe,Un=new Y,br=new Y;class Jh extends Cl{constructor(){super(new Vh(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xt(4,2),this._viewportCount=6,this._viewports=[new Ii(2,1,1,1),new Ii(0,1,1,1),new Ii(3,1,1,1),new Ii(1,1,1,1),new Ii(3,0,1,1),new Ii(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Un.setFromMatrixPosition(t.matrixWorld),i.position.copy(Un),br.copy(i.position),br.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(br),i.updateMatrixWorld(),n.makeTranslation(-Un.x,-Un.y,-Un.z),Za.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za)}}class Kh extends fa{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Jh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Qh extends Cl{constructor(){super(new Xh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tc extends fa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new Qh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ec extends fa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ja{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ic extends Yh{constructor(t=10,e=10,i=4473924,n=8947848){i=new vi(i),n=new vi(n);const s=e/2,a=t/e,r=t/2,h=[],l=[];for(let d=0,f=0,g=-r;d<=e;d++,g+=a){h.push(-r,0,g,r,0,g),h.push(g,0,-r,g,0,r);const m=d===s?i:n;m.toArray(l,f),f+=3,m.toArray(l,f),f+=3,m.toArray(l,f),f+=3,m.toArray(l,f),f+=3}const c=new Ys;c.setAttribute("position",new An(h,3)),c.setAttribute("color",new An(l,3));const u=new Tl({vertexColors:!0,toneMapped:!1});super(c,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);const Ka={type:"change"},Sr={type:"start"},Qa={type:"end"};class nc extends Qn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",ye),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ye),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ka),i.update(),s=n.NONE},this.update=function(){const C=new Y,$=new Wi().setFromUnitVectors(t.up,new Y(0,1,0)),O=$.clone().invert(),ht=new Y,pt=new Wi,ut=2*Math.PI;return function(){const mt=i.object.position;C.copy(mt).sub(i.target),C.applyQuaternion($),r.setFromVector3(C),i.autoRotate&&s===n.NONE&&A(L()),i.enableDamping?(r.theta+=h.theta*i.dampingFactor,r.phi+=h.phi*i.dampingFactor):(r.theta+=h.theta,r.phi+=h.phi);let bt=i.minAzimuthAngle,Ct=i.maxAzimuthAngle;return isFinite(bt)&&isFinite(Ct)&&(bt<-Math.PI?bt+=ut:bt>Math.PI&&(bt-=ut),Ct<-Math.PI?Ct+=ut:Ct>Math.PI&&(Ct-=ut),bt<=Ct?r.theta=Math.max(bt,Math.min(Ct,r.theta)):r.theta=r.theta>(bt+Ct)/2?Math.max(bt,r.theta):Math.min(Ct,r.theta)),r.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=l,r.radius=Math.max(i.minDistance,Math.min(i.maxDistance,r.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),C.setFromSpherical(r),C.applyQuaternion(O),mt.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(h.theta*=1-i.dampingFactor,h.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(h.set(0,0,0),c.set(0,0,0)),l=1,u||ht.distanceToSquared(i.object.position)>a||8*(1-pt.dot(i.object.quaternion))>a?(i.dispatchEvent(Ka),ht.copy(i.object.position),pt.copy(i.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",v),i.domElement.removeEventListener("pointerdown",Jt),i.domElement.removeEventListener("pointercancel",kt),i.domElement.removeEventListener("wheel",Ft),i.domElement.removeEventListener("pointermove",$t),i.domElement.removeEventListener("pointerup",kt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ye),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=n.NONE;const a=1e-6,r=new Ja,h=new Ja;let l=1;const c=new Y;let u=!1;const d=new Xt,f=new Xt,g=new Xt,m=new Xt,p=new Xt,x=new Xt,b=new Xt,M=new Xt,w=new Xt,y=[],T={};function L(){return 2*Math.PI/60/60*i.autoRotateSpeed}function _(){return Math.pow(.95,i.zoomSpeed)}function A(C){h.theta-=C}function D(C){h.phi-=C}const k=function(){const C=new Y;return function(O,ht){C.setFromMatrixColumn(ht,0),C.multiplyScalar(-O),c.add(C)}}(),J=function(){const C=new Y;return function(O,ht){i.screenSpacePanning===!0?C.setFromMatrixColumn(ht,1):(C.setFromMatrixColumn(ht,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(O),c.add(C)}}(),R=function(){const C=new Y;return function(O,ht){const pt=i.domElement;if(i.object.isPerspectiveCamera){const ut=i.object.position;C.copy(ut).sub(i.target);let xt=C.length();xt*=Math.tan(i.object.fov/2*Math.PI/180),k(2*O*xt/pt.clientHeight,i.object.matrix),J(2*ht*xt/pt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(k(O*(i.object.right-i.object.left)/i.object.zoom/pt.clientWidth,i.object.matrix),J(ht*(i.object.top-i.object.bottom)/i.object.zoom/pt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function z(C){i.object.isPerspectiveCamera?l/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function B(C){i.object.isPerspectiveCamera?l*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(C){d.set(C.clientX,C.clientY)}function K(C){b.set(C.clientX,C.clientY)}function H(C){m.set(C.clientX,C.clientY)}function nt(C){f.set(C.clientX,C.clientY),g.subVectors(f,d).multiplyScalar(i.rotateSpeed);const $=i.domElement;A(2*Math.PI*g.x/$.clientHeight),D(2*Math.PI*g.y/$.clientHeight),d.copy(f),i.update()}function Q(C){M.set(C.clientX,C.clientY),w.subVectors(M,b),w.y>0?z(_()):w.y<0&&B(_()),b.copy(M),i.update()}function U(C){p.set(C.clientX,C.clientY),x.subVectors(p,m).multiplyScalar(i.panSpeed),R(x.x,x.y),m.copy(p),i.update()}function q(C){C.deltaY<0?B(_()):C.deltaY>0&&z(_()),i.update()}function et(C){let $=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):R(0,i.keyPanSpeed),$=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):R(0,-i.keyPanSpeed),$=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?A(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):R(i.keyPanSpeed,0),$=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?A(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):R(-i.keyPanSpeed,0),$=!0;break}$&&(C.preventDefault(),i.update())}function st(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const C=.5*(y[0].pageX+y[1].pageX),$=.5*(y[0].pageY+y[1].pageY);d.set(C,$)}}function ot(){if(y.length===1)m.set(y[0].pageX,y[0].pageY);else{const C=.5*(y[0].pageX+y[1].pageX),$=.5*(y[0].pageY+y[1].pageY);m.set(C,$)}}function X(){const C=y[0].pageX-y[1].pageX,$=y[0].pageY-y[1].pageY,O=Math.sqrt(C*C+$*$);b.set(0,O)}function At(){i.enableZoom&&X(),i.enablePan&&ot()}function ft(){i.enableZoom&&X(),i.enableRotate&&st()}function yt(C){if(y.length==1)f.set(C.pageX,C.pageY);else{const O=lt(C),ht=.5*(C.pageX+O.x),pt=.5*(C.pageY+O.y);f.set(ht,pt)}g.subVectors(f,d).multiplyScalar(i.rotateSpeed);const $=i.domElement;A(2*Math.PI*g.x/$.clientHeight),D(2*Math.PI*g.y/$.clientHeight),d.copy(f)}function dt(C){if(y.length===1)p.set(C.pageX,C.pageY);else{const $=lt(C),O=.5*(C.pageX+$.x),ht=.5*(C.pageY+$.y);p.set(O,ht)}x.subVectors(p,m).multiplyScalar(i.panSpeed),R(x.x,x.y),m.copy(p)}function zt(C){const $=lt(C),O=C.pageX-$.x,ht=C.pageY-$.y,pt=Math.sqrt(O*O+ht*ht);M.set(0,pt),w.set(0,Math.pow(M.y/b.y,i.zoomSpeed)),z(w.y),b.copy(M)}function St(C){i.enableZoom&&zt(C),i.enablePan&&dt(C)}function Mt(C){i.enableZoom&&zt(C),i.enableRotate&&yt(C)}function Jt(C){i.enabled!==!1&&(y.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",$t),i.domElement.addEventListener("pointerup",kt)),G(C),C.pointerType==="touch"?Me(C):me(C))}function $t(C){i.enabled!==!1&&(C.pointerType==="touch"?E(C):Gt(C))}function kt(C){it(C),y.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",$t),i.domElement.removeEventListener("pointerup",kt)),i.dispatchEvent(Qa),s=n.NONE}function me(C){let $;switch(C.button){case 0:$=i.mouseButtons.LEFT;break;case 1:$=i.mouseButtons.MIDDLE;break;case 2:$=i.mouseButtons.RIGHT;break;default:$=-1}switch($){case Yi.DOLLY:if(i.enableZoom===!1)return;K(C),s=n.DOLLY;break;case Yi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;H(C),s=n.PAN}else{if(i.enableRotate===!1)return;Z(C),s=n.ROTATE}break;case Yi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;Z(C),s=n.ROTATE}else{if(i.enablePan===!1)return;H(C),s=n.PAN}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(Sr)}function Gt(C){switch(s){case n.ROTATE:if(i.enableRotate===!1)return;nt(C);break;case n.DOLLY:if(i.enableZoom===!1)return;Q(C);break;case n.PAN:if(i.enablePan===!1)return;U(C);break}}function Ft(C){i.enabled===!1||i.enableZoom===!1||s!==n.NONE||(C.preventDefault(),i.dispatchEvent(Sr),q(C),i.dispatchEvent(Qa))}function ye(C){i.enabled===!1||i.enablePan===!1||et(C)}function Me(C){switch(rt(C),y.length){case 1:switch(i.touches.ONE){case Zi.ROTATE:if(i.enableRotate===!1)return;st(),s=n.TOUCH_ROTATE;break;case Zi.PAN:if(i.enablePan===!1)return;ot(),s=n.TOUCH_PAN;break;default:s=n.NONE}break;case 2:switch(i.touches.TWO){case Zi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;At(),s=n.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ft(),s=n.TOUCH_DOLLY_ROTATE;break;default:s=n.NONE}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(Sr)}function E(C){switch(rt(C),s){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;yt(C),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;dt(C),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;St(C),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Mt(C),i.update();break;default:s=n.NONE}}function v(C){i.enabled!==!1&&C.preventDefault()}function G(C){y.push(C)}function it(C){delete T[C.pointerId];for(let $=0;$<y.length;$++)if(y[$].pointerId==C.pointerId){y.splice($,1);return}}function rt(C){let $=T[C.pointerId];$===void 0&&($=new Xt,T[C.pointerId]=$),$.set(C.pageX,C.pageY)}function lt(C){const $=C.pointerId===y[0].pointerId?y[1]:y[0];return T[$.pointerId]}i.domElement.addEventListener("contextmenu",v),i.domElement.addEventListener("pointerdown",Jt),i.domElement.addEventListener("pointercancel",kt),i.domElement.addEventListener("wheel",Ft,{passive:!1}),this.update()}}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pa="148",sc=0,to=1,rc=2,Ll=1,ac=2,$n=3,bi=0,Ie=1,ma=2,bs=3,yi=0,En=1,eo=2,io=3,no=4,oc=5,vn=100,lc=101,hc=102,so=103,ro=104,cc=200,uc=201,dc=202,fc=203,Dl=204,Pl=205,pc=206,mc=207,gc=208,xc=209,_c=210,yc=0,Mc=1,vc=2,sa=3,bc=4,Sc=5,wc=6,Ec=7,Rl=0,Tc=1,Ac=2,hi=0,Cc=1,Lc=2,Dc=3,Pc=4,Rc=5,zl=300,Cn=301,Ln=302,$s=303,ra=304,Zs=306,aa=1e3,We=1001,oa=1002,de=1003,ao=1004,wr=1005,ge=1006,zc=1007,Yn=1008,Hi=1009,Fc=1010,Ic=1011,Fl=1012,Nc=1013,Ui=1014,ki=1015,Zn=1016,Oc=1017,Bc=1018,Tn=1020,Uc=1021,kc=1022,He=1023,Gc=1024,Vc=1025,Gi=1026,Dn=1027,Wc=1028,Hc=1029,qc=1030,Xc=1031,$c=1033,Er=33776,Tr=33777,Ar=33778,Cr=33779,oo=35840,lo=35841,ho=35842,co=35843,jc=36196,uo=37492,fo=37496,po=37808,mo=37809,go=37810,xo=37811,_o=37812,yo=37813,Mo=37814,vo=37815,bo=37816,So=37817,wo=37818,Eo=37819,To=37820,Ao=37821,Co=36492,qi=3e3,Bt=3001,Yc=3200,Zc=3201,Il=0,Jc=1,Xe="srgb",Jn="srgb-linear",Lr=7680,Kc=519,Lo=35044,Do="300 es",la=1035;class Rn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}const le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dr=Math.PI/180,Po=180/Math.PI;function is(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(le[o&255]+le[o>>8&255]+le[o>>16&255]+le[o>>24&255]+"-"+le[t&255]+le[t>>8&255]+"-"+le[t>>16&15|64]+le[t>>24&255]+"-"+le[e&63|128]+le[e>>8&255]+"-"+le[e>>16&255]+le[e>>24&255]+le[i&255]+le[i>>8&255]+le[i>>16&255]+le[i>>24&255]).toLowerCase()}function xe(o,t,e){return Math.max(t,Math.min(e,o))}function Qc(o,t){return(o%t+t)%t}function Pr(o,t,e){return(1-e)*o+e*t}function Ro(o){return(o&o-1)===0&&o!==0}function ha(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Ss(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Te(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,n,s,a,r,h,l){const c=this.elements;return c[0]=t,c[1]=n,c[2]=r,c[3]=e,c[4]=s,c[5]=h,c[6]=i,c[7]=a,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],r=i[3],h=i[6],l=i[1],c=i[4],u=i[7],d=i[2],f=i[5],g=i[8],m=n[0],p=n[3],x=n[6],b=n[1],M=n[4],w=n[7],y=n[2],T=n[5],L=n[8];return s[0]=a*m+r*b+h*y,s[3]=a*p+r*M+h*T,s[6]=a*x+r*w+h*L,s[1]=l*m+c*b+u*y,s[4]=l*p+c*M+u*T,s[7]=l*x+c*w+u*L,s[2]=d*m+f*b+g*y,s[5]=d*p+f*M+g*T,s[8]=d*x+f*w+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],h=t[6],l=t[7],c=t[8];return e*a*c-e*r*l-i*s*c+i*r*h+n*s*l-n*a*h}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],h=t[6],l=t[7],c=t[8],u=c*a-r*l,d=r*h-c*s,f=l*s-a*h,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=u*m,t[1]=(n*l-c*i)*m,t[2]=(r*i-n*a)*m,t[3]=d*m,t[4]=(c*e-n*h)*m,t[5]=(n*s-r*e)*m,t[6]=f*m,t[7]=(i*h-l*e)*m,t[8]=(a*e-i*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,r){const h=Math.cos(s),l=Math.sin(s);return this.set(i*h,i*l,-i*(h*a+l*r)+a+t,-n*l,n*h,-n*(-l*a+h*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Rr.makeScale(t,e)),this}rotate(t){return this.premultiply(Rr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Rr.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rr=new Le;function Nl(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Kn(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Vi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function qs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const zr={[Xe]:{[Jn]:Vi},[Jn]:{[Xe]:qs}},ce={legacyMode:!0,get workingColorSpace(){return Jn},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if(zr[t]&&zr[t][e]!==void 0){const i=zr[t][e];return o.r=i(o.r),o.g=i(o.g),o.b=i(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},Ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jt={r:0,g:0,b:0},ke={h:0,s:0,l:0},ws={h:0,s:0,l:0};function Fr(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function Es(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}class Nt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=ce.workingColorSpace){if(t=Qc(t,1),e=xe(e,0,1),i=xe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Fr(a,s,t+1/3),this.g=Fr(a,s,t),this.b=Fr(a,s,t-1/3)}return ce.toWorkingColorSpace(this,n),this}setStyle(t,e=Xe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],r=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ce.toWorkingColorSpace(this,e),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ce.toWorkingColorSpace(this,e),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const h=parseFloat(s[1])/360,l=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(h,l,c,e)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ce.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ce.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Xe){const i=Ol[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return ce.fromWorkingColorSpace(Es(this,jt),t),xe(jt.r*255,0,255)<<16^xe(jt.g*255,0,255)<<8^xe(jt.b*255,0,255)<<0}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(Es(this,jt),e);const i=jt.r,n=jt.g,s=jt.b,a=Math.max(i,n,s),r=Math.min(i,n,s);let h,l;const c=(r+a)/2;if(r===a)h=0,l=0;else{const u=a-r;switch(l=c<=.5?u/(a+r):u/(2-a-r),a){case i:h=(n-s)/u+(n<s?6:0);break;case n:h=(s-i)/u+2;break;case s:h=(i-n)/u+4;break}h/=6}return t.h=h,t.s=l,t.l=c,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(Es(this,jt),e),t.r=jt.r,t.g=jt.g,t.b=jt.b,t}getStyle(t=Xe){return ce.fromWorkingColorSpace(Es(this,jt),t),t!==Xe?`color(${t} ${jt.r} ${jt.g} ${jt.b})`:`rgb(${jt.r*255|0},${jt.g*255|0},${jt.b*255|0})`}offsetHSL(t,e,i){return this.getHSL(ke),ke.h+=t,ke.s+=e,ke.l+=i,this.setHSL(ke.h,ke.s,ke.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ke),t.getHSL(ws);const i=Pr(ke.h,ws.h,e),n=Pr(ke.s,ws.s,e),s=Pr(ke.l,ws.l,e);return this.setHSL(i,n,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Nt.NAMES=Ol;let on;class Bl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{on===void 0&&(on=Kn("canvas")),on.width=t.width,on.height=t.height;const i=on.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=on}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Kn("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Vi(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vi(e[i]/255)*255):e[i]=Vi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Ul{constructor(t=null){this.isSource=!0,this.uuid=is(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,r=n.length;a<r;a++)n[a].isDataTexture?s.push(Ir(n[a].image)):s.push(Ir(n[a]))}else s=Ir(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ir(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Bl.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tu=0;class _e extends Rn{constructor(t=_e.DEFAULT_IMAGE,e=_e.DEFAULT_MAPPING,i=We,n=We,s=ge,a=Yn,r=He,h=Hi,l=_e.DEFAULT_ANISOTROPY,c=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=is(),this.name="",this.source=new Ul(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=h,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case aa:t.x=t.x-Math.floor(t.x);break;case We:t.x=t.x<0?0:1;break;case oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case aa:t.y=t.y-Math.floor(t.y);break;case We:t.y=t.y<0?0:1;break;case oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}_e.DEFAULT_IMAGE=null;_e.DEFAULT_MAPPING=zl;_e.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,i=0,n=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const h=t.elements,l=h[0],c=h[4],u=h[8],d=h[1],f=h[5],g=h[9],m=h[2],p=h[6],x=h[10];if(Math.abs(c-d)<.01&&Math.abs(u-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+m)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,w=(f+1)/2,y=(x+1)/2,T=(c+d)/4,L=(u+m)/4,_=(g+p)/4;return M>w&&M>y?M<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(M),n=T/i,s=L/i):w>y?w<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(w),i=T/n,s=_/n):y<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(y),i=L/s,n=_/s),this.set(i,n,s,e),this}let b=Math.sqrt((p-g)*(p-g)+(u-m)*(u-m)+(d-c)*(d-c));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-m)/b,this.z=(d-c)/b,this.w=Math.acos((l+f+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xi extends Rn{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const n={width:t,height:e,depth:1};this.texture=new _e(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ge,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ul(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kl extends _e{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=de,this.minFilter=de,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eu extends _e{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=de,this.minFilter=de,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,r){let h=i[n+0],l=i[n+1],c=i[n+2],u=i[n+3];const d=s[a+0],f=s[a+1],g=s[a+2],m=s[a+3];if(r===0){t[e+0]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u;return}if(r===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=m;return}if(u!==m||h!==d||l!==f||c!==g){let p=1-r;const x=h*d+l*f+c*g+u*m,b=x>=0?1:-1,M=1-x*x;if(M>Number.EPSILON){const y=Math.sqrt(M),T=Math.atan2(y,x*b);p=Math.sin(p*T)/y,r=Math.sin(r*T)/y}const w=r*b;if(h=h*p+d*w,l=l*p+f*w,c=c*p+g*w,u=u*p+m*w,p===1-r){const y=1/Math.sqrt(h*h+l*l+c*c+u*u);h*=y,l*=y,c*=y,u*=y}}t[e]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){const r=i[n],h=i[n+1],l=i[n+2],c=i[n+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=r*g+c*u+h*f-l*d,t[e+1]=h*g+c*d+l*u-r*f,t[e+2]=l*g+c*f+r*d-h*u,t[e+3]=c*g-r*u-h*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,n=t._y,s=t._z,a=t._order,r=Math.cos,h=Math.sin,l=r(i/2),c=r(n/2),u=r(s/2),d=h(i/2),f=h(n/2),g=h(s/2);switch(a){case"XYZ":this._x=d*c*u+l*f*g,this._y=l*f*u-d*c*g,this._z=l*c*g+d*f*u,this._w=l*c*u-d*f*g;break;case"YXZ":this._x=d*c*u+l*f*g,this._y=l*f*u-d*c*g,this._z=l*c*g-d*f*u,this._w=l*c*u+d*f*g;break;case"ZXY":this._x=d*c*u-l*f*g,this._y=l*f*u+d*c*g,this._z=l*c*g+d*f*u,this._w=l*c*u-d*f*g;break;case"ZYX":this._x=d*c*u-l*f*g,this._y=l*f*u+d*c*g,this._z=l*c*g-d*f*u,this._w=l*c*u+d*f*g;break;case"YZX":this._x=d*c*u+l*f*g,this._y=l*f*u+d*c*g,this._z=l*c*g-d*f*u,this._w=l*c*u-d*f*g;break;case"XZY":this._x=d*c*u-l*f*g,this._y=l*f*u-d*c*g,this._z=l*c*g+d*f*u,this._w=l*c*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],r=e[5],h=e[9],l=e[2],c=e[6],u=e[10],d=i+r+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-h)*f,this._y=(s-l)*f,this._z=(a-n)*f}else if(i>r&&i>u){const f=2*Math.sqrt(1+i-r-u);this._w=(c-h)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+l)/f}else if(r>u){const f=2*Math.sqrt(1+r-i-u);this._w=(s-l)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(h+c)/f}else{const f=2*Math.sqrt(1+u-i-r);this._w=(a-n)/f,this._x=(s+l)/f,this._y=(h+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,r=e._x,h=e._y,l=e._z,c=e._w;return this._x=i*c+a*r+n*l-s*h,this._y=n*c+a*h+s*r-i*l,this._z=s*c+a*l+i*h-n*r,this._w=a*c-i*r-n*h-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,a=this._w;let r=a*t._w+i*t._x+n*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const h=1-r*r;if(h<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(h),c=Math.atan2(l,r),u=Math.sin((1-e)*c)/l,d=Math.sin(e*c)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,r=t.z,h=t.w,l=h*e+a*n-r*i,c=h*i+r*e-s*n,u=h*n+s*i-a*e,d=-s*e-a*i-r*n;return this.x=l*h+d*-s+c*-r-u*-a,this.y=c*h+d*-a+u*-s-l*-r,this.z=u*h+d*-r+l*-a-c*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,r=e.y,h=e.z;return this.x=n*h-s*r,this.y=s*a-i*h,this.z=i*r-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Nr.copy(this).projectOnVector(t),this.sub(Nr)}reflect(t){return this.sub(Nr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nr=new N,zo=new ns;class ss{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,r=-1/0;for(let h=0,l=t.length;h<l;h+=3){const c=t[h],u=t[h+1],d=t[h+2];c<e&&(e=c),u<i&&(i=u),d<n&&(n=d),c>s&&(s=c),u>a&&(a=u),d>r&&(r=d)}return this.min.set(e,i,n),this.max.set(s,a,r),this}setFromBufferAttribute(t){let e=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,r=-1/0;for(let h=0,l=t.count;h<l;h++){const c=t.getX(h),u=t.getY(h),d=t.getZ(h);c<e&&(e=c),u<i&&(i=u),d<n&&(n=d),c>s&&(s=c),u>a&&(a=u),d>r&&(r=d)}return this.min.set(e,i,n),this.max.set(s,a,r),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,r=s.count;a<r;a++)Ri.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Ri)}else i.boundingBox===null&&i.computeBoundingBox(),Or.copy(i.boundingBox),Or.applyMatrix4(t.matrixWorld),this.union(Or);const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(kn),Ts.subVectors(this.max,kn),ln.subVectors(t.a,kn),hn.subVectors(t.b,kn),cn.subVectors(t.c,kn),pi.subVectors(hn,ln),mi.subVectors(cn,hn),zi.subVectors(ln,cn);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-zi.z,zi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,zi.z,0,-zi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-zi.y,zi.x,0];return!Br(e,ln,hn,cn,Ts)||(e=[1,0,0,0,1,0,0,0,1],!Br(e,ln,hn,cn,Ts))?!1:(As.crossVectors(pi,mi),e=[As.x,As.y,As.z],Br(e,ln,hn,cn,Ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Ri.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ii=[new N,new N,new N,new N,new N,new N,new N,new N],Ri=new N,Or=new ss,ln=new N,hn=new N,cn=new N,pi=new N,mi=new N,zi=new N,kn=new N,Ts=new N,As=new N,Fi=new N;function Br(o,t,e,i,n){for(let s=0,a=o.length-3;s<=a;s+=3){Fi.fromArray(o,s);const r=n.x*Math.abs(Fi.x)+n.y*Math.abs(Fi.y)+n.z*Math.abs(Fi.z),h=t.dot(Fi),l=e.dot(Fi),c=i.dot(Fi);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>r)return!1}return!0}const iu=new ss,Gn=new N,Ur=new N;class ga{constructor(t=new N,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):iu.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gn.subVectors(t,this.center);const e=Gn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Gn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ur.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gn.copy(t.center).add(Ur)),this.expandByPoint(Gn.copy(t.center).sub(Ur))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new N,kr=new N,Cs=new N,gi=new N,Gr=new N,Ls=new N,Vr=new N;class nu{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.direction).multiplyScalar(e).add(this.origin),ni.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){kr.copy(t).add(e).multiplyScalar(.5),Cs.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(kr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Cs),r=gi.dot(this.direction),h=-gi.dot(Cs),l=gi.lengthSq(),c=Math.abs(1-a*a);let u,d,f,g;if(c>0)if(u=a*h-r,d=a*r-h,g=s*c,u>=0)if(d>=-g)if(d<=g){const m=1/c;u*=m,d*=m,f=u*(u+a*d+2*r)+d*(a*u+d+2*h)+l}else d=s,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*h)+l;else d=-s,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*h)+l;else d<=-g?(u=Math.max(0,-(-a*s+r)),d=u>0?-s:Math.min(Math.max(-s,-h),s),f=-u*u+d*(d+2*h)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-h),s),f=d*(d+2*h)+l):(u=Math.max(0,-(a*s+r)),d=u>0?s:Math.min(Math.max(-s,-h),s),f=-u*u+d*(d+2*h)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*h)+l;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),n&&n.copy(Cs).multiplyScalar(d).add(kr),f}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const i=ni.dot(this.direction),n=ni.dot(ni)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),r=i-a,h=i+a;return r<0&&h<0?null:r<0?this.at(h,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,r,h;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,n=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,n=(t.min.x-d.x)*l),c>=0?(s=(t.min.y-d.y)*c,a=(t.max.y-d.y)*c):(s=(t.max.y-d.y)*c,a=(t.min.y-d.y)*c),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(r=(t.min.z-d.z)*u,h=(t.max.z-d.z)*u):(r=(t.max.z-d.z)*u,h=(t.min.z-d.z)*u),i>h||r>n)||((r>i||i!==i)&&(i=r),(h<n||n!==n)&&(n=h),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,i,n,s){Gr.subVectors(e,t),Ls.subVectors(i,t),Vr.crossVectors(Gr,Ls);let a=this.direction.dot(Vr),r;if(a>0){if(n)return null;r=1}else if(a<0)r=-1,a=-a;else return null;gi.subVectors(this.origin,t);const h=r*this.direction.dot(Ls.crossVectors(gi,Ls));if(h<0)return null;const l=r*this.direction.dot(Gr.cross(gi));if(l<0||h+l>a)return null;const c=-r*gi.dot(Vr);return c<0?null:this.at(c/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,n,s,a,r,h,l,c,u,d,f,g,m,p){const x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=n,x[1]=s,x[5]=a,x[9]=r,x[13]=h,x[2]=l,x[6]=c,x[10]=u,x[14]=d,x[3]=f,x[7]=g,x[11]=m,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/un.setFromMatrixColumn(t,0).length(),s=1/un.setFromMatrixColumn(t,1).length(),a=1/un.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),r=Math.sin(i),h=Math.cos(n),l=Math.sin(n),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*c,f=a*u,g=r*c,m=r*u;e[0]=h*c,e[4]=-h*u,e[8]=l,e[1]=f+g*l,e[5]=d-m*l,e[9]=-r*h,e[2]=m-d*l,e[6]=g+f*l,e[10]=a*h}else if(t.order==="YXZ"){const d=h*c,f=h*u,g=l*c,m=l*u;e[0]=d+m*r,e[4]=g*r-f,e[8]=a*l,e[1]=a*u,e[5]=a*c,e[9]=-r,e[2]=f*r-g,e[6]=m+d*r,e[10]=a*h}else if(t.order==="ZXY"){const d=h*c,f=h*u,g=l*c,m=l*u;e[0]=d-m*r,e[4]=-a*u,e[8]=g+f*r,e[1]=f+g*r,e[5]=a*c,e[9]=m-d*r,e[2]=-a*l,e[6]=r,e[10]=a*h}else if(t.order==="ZYX"){const d=a*c,f=a*u,g=r*c,m=r*u;e[0]=h*c,e[4]=g*l-f,e[8]=d*l+m,e[1]=h*u,e[5]=m*l+d,e[9]=f*l-g,e[2]=-l,e[6]=r*h,e[10]=a*h}else if(t.order==="YZX"){const d=a*h,f=a*l,g=r*h,m=r*l;e[0]=h*c,e[4]=m-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*c,e[9]=-r*c,e[2]=-l*c,e[6]=f*u+g,e[10]=d-m*u}else if(t.order==="XZY"){const d=a*h,f=a*l,g=r*h,m=r*l;e[0]=h*c,e[4]=-u,e[8]=l*c,e[1]=d*u+m,e[5]=a*c,e[9]=f*u-g,e[2]=g*u-f,e[6]=r*c,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(su,t,ru)}lookAt(t,e,i){const n=this.elements;return Ae.subVectors(t,e),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),xi.crossVectors(i,Ae),xi.lengthSq()===0&&(Math.abs(i.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),xi.crossVectors(i,Ae)),xi.normalize(),Ds.crossVectors(Ae,xi),n[0]=xi.x,n[4]=Ds.x,n[8]=Ae.x,n[1]=xi.y,n[5]=Ds.y,n[9]=Ae.y,n[2]=xi.z,n[6]=Ds.z,n[10]=Ae.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],r=i[4],h=i[8],l=i[12],c=i[1],u=i[5],d=i[9],f=i[13],g=i[2],m=i[6],p=i[10],x=i[14],b=i[3],M=i[7],w=i[11],y=i[15],T=n[0],L=n[4],_=n[8],A=n[12],D=n[1],k=n[5],J=n[9],R=n[13],z=n[2],B=n[6],Z=n[10],K=n[14],H=n[3],nt=n[7],Q=n[11],U=n[15];return s[0]=a*T+r*D+h*z+l*H,s[4]=a*L+r*k+h*B+l*nt,s[8]=a*_+r*J+h*Z+l*Q,s[12]=a*A+r*R+h*K+l*U,s[1]=c*T+u*D+d*z+f*H,s[5]=c*L+u*k+d*B+f*nt,s[9]=c*_+u*J+d*Z+f*Q,s[13]=c*A+u*R+d*K+f*U,s[2]=g*T+m*D+p*z+x*H,s[6]=g*L+m*k+p*B+x*nt,s[10]=g*_+m*J+p*Z+x*Q,s[14]=g*A+m*R+p*K+x*U,s[3]=b*T+M*D+w*z+y*H,s[7]=b*L+M*k+w*B+y*nt,s[11]=b*_+M*J+w*Z+y*Q,s[15]=b*A+M*R+w*K+y*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],r=t[5],h=t[9],l=t[13],c=t[2],u=t[6],d=t[10],f=t[14],g=t[3],m=t[7],p=t[11],x=t[15];return g*(+s*h*u-n*l*u-s*r*d+i*l*d+n*r*f-i*h*f)+m*(+e*h*f-e*l*d+s*a*d-n*a*f+n*l*c-s*h*c)+p*(+e*l*u-e*r*f-s*a*u+i*a*f+s*r*c-i*l*c)+x*(-n*r*c-e*h*u+e*r*d+n*a*u-i*a*d+i*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],r=t[5],h=t[6],l=t[7],c=t[8],u=t[9],d=t[10],f=t[11],g=t[12],m=t[13],p=t[14],x=t[15],b=u*p*l-m*d*l+m*h*f-r*p*f-u*h*x+r*d*x,M=g*d*l-c*p*l-g*h*f+a*p*f+c*h*x-a*d*x,w=c*m*l-g*u*l+g*r*f-a*m*f-c*r*x+a*u*x,y=g*u*h-c*m*h-g*r*d+a*m*d+c*r*p-a*u*p,T=e*b+i*M+n*w+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return t[0]=b*L,t[1]=(m*d*s-u*p*s-m*n*f+i*p*f+u*n*x-i*d*x)*L,t[2]=(r*p*s-m*h*s+m*n*l-i*p*l-r*n*x+i*h*x)*L,t[3]=(u*h*s-r*d*s-u*n*l+i*d*l+r*n*f-i*h*f)*L,t[4]=M*L,t[5]=(c*p*s-g*d*s+g*n*f-e*p*f-c*n*x+e*d*x)*L,t[6]=(g*h*s-a*p*s-g*n*l+e*p*l+a*n*x-e*h*x)*L,t[7]=(a*d*s-c*h*s+c*n*l-e*d*l-a*n*f+e*h*f)*L,t[8]=w*L,t[9]=(g*u*s-c*m*s-g*i*f+e*m*f+c*i*x-e*u*x)*L,t[10]=(a*m*s-g*r*s+g*i*l-e*m*l-a*i*x+e*r*x)*L,t[11]=(c*r*s-a*u*s-c*i*l+e*u*l+a*i*f-e*r*f)*L,t[12]=y*L,t[13]=(c*m*n-g*u*n+g*i*d-e*m*d-c*i*p+e*u*p)*L,t[14]=(g*r*n-a*m*n-g*i*h+e*m*h+a*i*p-e*r*p)*L,t[15]=(a*u*n-c*r*n+c*i*h-e*u*h-a*i*d+e*r*d)*L,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,r=t.y,h=t.z,l=s*a,c=s*r;return this.set(l*a+i,l*r-n*h,l*h+n*r,0,l*r+n*h,c*r+i,c*h-n*a,0,l*h-n*r,c*h+n*a,s*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,r=e._z,h=e._w,l=s+s,c=a+a,u=r+r,d=s*l,f=s*c,g=s*u,m=a*c,p=a*u,x=r*u,b=h*l,M=h*c,w=h*u,y=i.x,T=i.y,L=i.z;return n[0]=(1-(m+x))*y,n[1]=(f+w)*y,n[2]=(g-M)*y,n[3]=0,n[4]=(f-w)*T,n[5]=(1-(d+x))*T,n[6]=(p+b)*T,n[7]=0,n[8]=(g+M)*L,n[9]=(p-b)*L,n[10]=(1-(d+m))*L,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=un.set(n[0],n[1],n[2]).length();const a=un.set(n[4],n[5],n[6]).length(),r=un.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ge.copy(this);const l=1/s,c=1/a,u=1/r;return Ge.elements[0]*=l,Ge.elements[1]*=l,Ge.elements[2]*=l,Ge.elements[4]*=c,Ge.elements[5]*=c,Ge.elements[6]*=c,Ge.elements[8]*=u,Ge.elements[9]*=u,Ge.elements[10]*=u,e.setFromRotationMatrix(Ge),i.x=s,i.y=a,i.z=r,this}makePerspective(t,e,i,n,s,a){const r=this.elements,h=2*s/(e-t),l=2*s/(i-n),c=(e+t)/(e-t),u=(i+n)/(i-n),d=-(a+s)/(a-s),f=-2*a*s/(a-s);return r[0]=h,r[4]=0,r[8]=c,r[12]=0,r[1]=0,r[5]=l,r[9]=u,r[13]=0,r[2]=0,r[6]=0,r[10]=d,r[14]=f,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,i,n,s,a){const r=this.elements,h=1/(e-t),l=1/(i-n),c=1/(a-s),u=(e+t)*h,d=(i+n)*l,f=(a+s)*c;return r[0]=2*h,r[4]=0,r[8]=0,r[12]=-u,r[1]=0,r[5]=2*l,r[9]=0,r[13]=-d,r[2]=0,r[6]=0,r[10]=-2*c,r[14]=-f,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const un=new N,Ge=new se,su=new N(0,0,0),ru=new N(1,1,1),xi=new N,Ds=new N,Ae=new N,Fo=new se,Io=new ns;class rs{constructor(t=0,e=0,i=0,n=rs.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],r=n[8],h=n[1],l=n[5],c=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(xe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Io.setFromEuler(this),this.setFromQuaternion(Io,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}rs.DefaultOrder="XYZ";rs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Gl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let au=0;const No=new N,dn=new ns,si=new se,Ps=new N,Vn=new N,ou=new N,lu=new ns,Oo=new N(1,0,0),Bo=new N(0,1,0),Uo=new N(0,0,1),hu={type:"added"},ko={type:"removed"};class Ne extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DefaultUp.clone();const t=new N,e=new rs,i=new ns,n=new N(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new se},normalMatrix:{value:new Le}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Ne.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ne.DefaultMatrixWorldAutoUpdate,this.layers=new Gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return dn.setFromAxisAngle(t,e),this.quaternion.multiply(dn),this}rotateOnWorldAxis(t,e){return dn.setFromAxisAngle(t,e),this.quaternion.premultiply(dn),this}rotateX(t){return this.rotateOnAxis(Oo,t)}rotateY(t){return this.rotateOnAxis(Bo,t)}rotateZ(t){return this.rotateOnAxis(Uo,t)}translateOnAxis(t,e){return No.copy(t).applyQuaternion(this.quaternion),this.position.add(No.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oo,t)}translateY(t){return this.translateOnAxis(Bo,t)}translateZ(t){return this.translateOnAxis(Uo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ps.copy(t):Ps.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Vn,Ps,this.up):si.lookAt(Ps,Vn,this.up),this.quaternion.setFromRotationMatrix(si),n&&(si.extractRotation(n.matrixWorld),dn.setFromRotationMatrix(si),this.quaternion.premultiply(dn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(hu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ko)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ko)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectsByProperty(t,e);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vn,t,ou),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vn,lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++){const r=n[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(r,h){return r[h.uuid]===void 0&&(r[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const h=r.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const u=h[l];s(t.shapes,u)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let h=0,l=this.material.length;h<l;h++)r.push(s(t.materials,this.material[h]));n.material=r}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){const h=this.animations[r];n.animations.push(s(t.animations,h))}}if(e){const r=a(t.geometries),h=a(t.materials),l=a(t.textures),c=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);r.length>0&&(i.geometries=r),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(r){const h=[];for(const l in r){const c=r[l];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Ne.DefaultUp=new N(0,1,0);Ne.DefaultMatrixAutoUpdate=!0;Ne.DefaultMatrixWorldAutoUpdate=!0;const Ve=new N,ri=new N,Wr=new N,ai=new N,fn=new N,pn=new N,Go=new N,Hr=new N,qr=new N,Xr=new N;class oi{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ve.subVectors(t,e),n.cross(Ve);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ve.subVectors(n,e),ri.subVectors(i,e),Wr.subVectors(t,e);const a=Ve.dot(Ve),r=Ve.dot(ri),h=Ve.dot(Wr),l=ri.dot(ri),c=ri.dot(Wr),u=a*l-r*r;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(l*h-r*c)*d,g=(a*c-r*h)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,ai),ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getUV(t,e,i,n,s,a,r,h){return this.getBarycoord(t,e,i,n,ai),h.set(0,0),h.addScaledVector(s,ai.x),h.addScaledVector(a,ai.y),h.addScaledVector(r,ai.z),h}static isFrontFacing(t,e,i,n){return Ve.subVectors(i,e),ri.subVectors(t,e),Ve.cross(ri).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ve.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Ve.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return oi.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return oi.getUV(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,r;fn.subVectors(n,i),pn.subVectors(s,i),Hr.subVectors(t,i);const h=fn.dot(Hr),l=pn.dot(Hr);if(h<=0&&l<=0)return e.copy(i);qr.subVectors(t,n);const c=fn.dot(qr),u=pn.dot(qr);if(c>=0&&u<=c)return e.copy(n);const d=h*u-c*l;if(d<=0&&h>=0&&c<=0)return a=h/(h-c),e.copy(i).addScaledVector(fn,a);Xr.subVectors(t,s);const f=fn.dot(Xr),g=pn.dot(Xr);if(g>=0&&f<=g)return e.copy(s);const m=f*l-h*g;if(m<=0&&l>=0&&g<=0)return r=l/(l-g),e.copy(i).addScaledVector(pn,r);const p=c*g-f*u;if(p<=0&&u-c>=0&&f-g>=0)return Go.subVectors(s,n),r=(u-c)/(u-c+(f-g)),e.copy(n).addScaledVector(Go,r);const x=1/(p+m+d);return a=m*x,r=d*x,e.copy(i).addScaledVector(fn,a).addScaledVector(pn,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let cu=0;class as extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=is(),this.name="",this.type="Material",this.blending=En,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Dl,this.blendDst=Pl,this.blendEquation=vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==En&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const r in s){const h=s[r];delete h.metadata,a.push(h)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Vl extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qt=new N,Rs=new Ot;class je{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Lo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Rs.fromBufferAttribute(this,e),Rs.applyMatrix3(t),this.setXY(e,Rs.x,Rs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)qt.fromBufferAttribute(this,e),qt.applyMatrix3(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)qt.fromBufferAttribute(this,e),qt.applyMatrix4(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qt.fromBufferAttribute(this,e),qt.applyNormalMatrix(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qt.fromBufferAttribute(this,e),qt.transformDirection(t),this.setXYZ(e,qt.x,qt.y,qt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Wl extends je{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Hl extends je{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ye extends je{constructor(t,e,i){super(new Float32Array(t),e,i)}}let uu=0;const Re=new se,$r=new Ne,mn=new N,Ce=new ss,Wn=new ss,ie=new N;class wi extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nl(t)?Hl:Wl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Le().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Re.makeRotationFromQuaternion(t),this.applyMatrix4(Re),this}rotateX(t){return Re.makeRotationX(t),this.applyMatrix4(Re),this}rotateY(t){return Re.makeRotationY(t),this.applyMatrix4(Re),this}rotateZ(t){return Re.makeRotationZ(t),this.applyMatrix4(Re),this}translate(t,e,i){return Re.makeTranslation(t,e,i),this.applyMatrix4(Re),this}scale(t,e,i){return Re.makeScale(t,e,i),this.applyMatrix4(Re),this}lookAt(t){return $r.lookAt(t),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mn).negate(),this.translate(mn.x,mn.y,mn.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];Ce.setFromBufferAttribute(s),this.morphTargetsRelative?(ie.addVectors(this.boundingBox.min,Ce.min),this.boundingBox.expandByPoint(ie),ie.addVectors(this.boundingBox.max,Ce.max),this.boundingBox.expandByPoint(ie)):(this.boundingBox.expandByPoint(Ce.min),this.boundingBox.expandByPoint(Ce.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(Ce.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const r=e[s];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(ie.addVectors(Ce.min,Wn.min),Ce.expandByPoint(ie),ie.addVectors(Ce.max,Wn.max),Ce.expandByPoint(ie)):(Ce.expandByPoint(Wn.min),Ce.expandByPoint(Wn.max))}Ce.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)ie.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(ie));if(e)for(let s=0,a=e.length;s<a;s++){const r=e[s],h=this.morphTargetsRelative;for(let l=0,c=r.count;l<c;l++)ie.fromBufferAttribute(r,l),h&&(mn.fromBufferAttribute(t,l),ie.add(mn)),n=Math.max(n,i.distanceToSquared(ie))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,s=e.normal.array,a=e.uv.array,r=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*r),4));const h=this.getAttribute("tangent").array,l=[],c=[];for(let D=0;D<r;D++)l[D]=new N,c[D]=new N;const u=new N,d=new N,f=new N,g=new Ot,m=new Ot,p=new Ot,x=new N,b=new N;function M(D,k,J){u.fromArray(n,D*3),d.fromArray(n,k*3),f.fromArray(n,J*3),g.fromArray(a,D*2),m.fromArray(a,k*2),p.fromArray(a,J*2),d.sub(u),f.sub(u),m.sub(g),p.sub(g);const R=1/(m.x*p.y-p.x*m.y);isFinite(R)&&(x.copy(d).multiplyScalar(p.y).addScaledVector(f,-m.y).multiplyScalar(R),b.copy(f).multiplyScalar(m.x).addScaledVector(d,-p.x).multiplyScalar(R),l[D].add(x),l[k].add(x),l[J].add(x),c[D].add(b),c[k].add(b),c[J].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let D=0,k=w.length;D<k;++D){const J=w[D],R=J.start,z=J.count;for(let B=R,Z=R+z;B<Z;B+=3)M(i[B+0],i[B+1],i[B+2])}const y=new N,T=new N,L=new N,_=new N;function A(D){L.fromArray(s,D*3),_.copy(L);const k=l[D];y.copy(k),y.sub(L.multiplyScalar(L.dot(k))).normalize(),T.crossVectors(_,k);const R=T.dot(c[D])<0?-1:1;h[D*4]=y.x,h[D*4+1]=y.y,h[D*4+2]=y.z,h[D*4+3]=R}for(let D=0,k=w.length;D<k;++D){const J=w[D],R=J.start,z=J.count;for(let B=R,Z=R+z;B<Z;B+=3)A(i[B+0]),A(i[B+1]),A(i[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new N,s=new N,a=new N,r=new N,h=new N,l=new N,c=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),m=t.getX(d+1),p=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),a.fromBufferAttribute(e,p),c.subVectors(a,s),u.subVectors(n,s),c.cross(u),r.fromBufferAttribute(i,g),h.fromBufferAttribute(i,m),l.fromBufferAttribute(i,p),r.add(c),h.add(c),l.add(c),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(m,h.x,h.y,h.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),c.subVectors(a,s),u.subVectors(n,s),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ie.fromBufferAttribute(t,e),ie.normalize(),t.setXYZ(e,ie.x,ie.y,ie.z)}toNonIndexed(){function t(r,h){const l=r.array,c=r.itemSize,u=r.normalized,d=new l.constructor(h.length*c);let f=0,g=0;for(let m=0,p=h.length;m<p;m++){r.isInterleavedBufferAttribute?f=h[m]*r.data.stride+r.offset:f=h[m]*c;for(let x=0;x<c;x++)d[g++]=l[f++]}return new je(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new wi,i=this.index.array,n=this.attributes;for(const r in n){const h=n[r],l=t(h,i);e.setAttribute(r,l)}const s=this.morphAttributes;for(const r in s){const h=[],l=s[r];for(let c=0,u=l.length;c<u;c++){const d=l[c],f=t(d,i);h.push(f)}e.morphAttributes[r]=h}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,h=a.length;r<h;r++){const l=a[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const h in i){const l=i[h];t.data.attributes[h]=l.toJSON(t.data)}const n={};let s=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];c.push(f.toJSON(t.data))}c.length>0&&(n[h]=c,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const l in n){const c=n[l];this.setAttribute(l,c.clone(e))}const s=t.morphAttributes;for(const l in s){const c=[],u=s[l];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vo=new se,gn=new nu,jr=new ga,Hn=new N,qn=new N,Xn=new N,Yr=new N,zs=new N,Fs=new Ot,Is=new Ot,Ns=new Ot,Zr=new N,Os=new N;class li extends Ne{constructor(t=new wi,e=new Vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const r=this.morphTargetInfluences;if(s&&r){zs.set(0,0,0);for(let h=0,l=s.length;h<l;h++){const c=r[h],u=s[h];c!==0&&(Yr.fromBufferAttribute(u,t),a?zs.addScaledVector(Yr,c):zs.addScaledVector(Yr.sub(e),c))}e.add(zs)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(s),t.ray.intersectsSphere(jr)===!1)||(Vo.copy(s).invert(),gn.copy(t.ray).applyMatrix4(Vo),i.boundingBox!==null&&gn.intersectsBox(i.boundingBox)===!1))return;let a;const r=i.index,h=i.attributes.position,l=i.attributes.uv,c=i.attributes.uv2,u=i.groups,d=i.drawRange;if(r!==null)if(Array.isArray(n))for(let f=0,g=u.length;f<g;f++){const m=u[f],p=n[m.materialIndex],x=Math.max(m.start,d.start),b=Math.min(r.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,w=b;M<w;M+=3){const y=r.getX(M),T=r.getX(M+1),L=r.getX(M+2);a=Bs(this,p,t,gn,l,c,y,T,L),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const f=Math.max(0,d.start),g=Math.min(r.count,d.start+d.count);for(let m=f,p=g;m<p;m+=3){const x=r.getX(m),b=r.getX(m+1),M=r.getX(m+2);a=Bs(this,n,t,gn,l,c,x,b,M),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}else if(h!==void 0)if(Array.isArray(n))for(let f=0,g=u.length;f<g;f++){const m=u[f],p=n[m.materialIndex],x=Math.max(m.start,d.start),b=Math.min(h.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,w=b;M<w;M+=3){const y=M,T=M+1,L=M+2;a=Bs(this,p,t,gn,l,c,y,T,L),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const f=Math.max(0,d.start),g=Math.min(h.count,d.start+d.count);for(let m=f,p=g;m<p;m+=3){const x=m,b=m+1,M=m+2;a=Bs(this,n,t,gn,l,c,x,b,M),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}}}function du(o,t,e,i,n,s,a,r){let h;if(t.side===Ie?h=i.intersectTriangle(a,s,n,!0,r):h=i.intersectTriangle(n,s,a,t.side===bi,r),h===null)return null;Os.copy(r),Os.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(Os);return l<e.near||l>e.far?null:{distance:l,point:Os.clone(),object:o}}function Bs(o,t,e,i,n,s,a,r,h){o.getVertexPosition(a,Hn),o.getVertexPosition(r,qn),o.getVertexPosition(h,Xn);const l=du(o,t,e,i,Hn,qn,Xn,Zr);if(l){n&&(Fs.fromBufferAttribute(n,a),Is.fromBufferAttribute(n,r),Ns.fromBufferAttribute(n,h),l.uv=oi.getUV(Zr,Hn,qn,Xn,Fs,Is,Ns,new Ot)),s&&(Fs.fromBufferAttribute(s,a),Is.fromBufferAttribute(s,r),Ns.fromBufferAttribute(s,h),l.uv2=oi.getUV(Zr,Hn,qn,Xn,Fs,Is,Ns,new Ot));const c={a,b:r,c:h,normal:new N,materialIndex:0};oi.getNormal(Hn,qn,Xn,c.normal),l.face=c}return l}class os extends wi{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const r=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const h=[],l=[],c=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(h),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(u,2));function g(m,p,x,b,M,w,y,T,L,_,A){const D=w/L,k=y/_,J=w/2,R=y/2,z=T/2,B=L+1,Z=_+1;let K=0,H=0;const nt=new N;for(let Q=0;Q<Z;Q++){const U=Q*k-R;for(let q=0;q<B;q++){const et=q*D-J;nt[m]=et*b,nt[p]=U*M,nt[x]=z,l.push(nt.x,nt.y,nt.z),nt[m]=0,nt[p]=0,nt[x]=T>0?1:-1,c.push(nt.x,nt.y,nt.z),u.push(q/L),u.push(1-Q/_),K+=1}}for(let Q=0;Q<_;Q++)for(let U=0;U<L;U++){const q=d+U+B*Q,et=d+U+B*(Q+1),st=d+(U+1)+B*(Q+1),ot=d+(U+1)+B*Q;h.push(q,et,ot),h.push(et,st,ot),H+=6}r.addGroup(f,H,A),f+=H,d+=K}}static fromJSON(t){return new os(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pn(o){const t={};for(const e in o){t[e]={};for(const i in o[e]){const n=o[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ue(o){const t={};for(let e=0;e<o.length;e++){const i=Pn(o[e]);for(const n in i)t[n]=i[n]}return t}function fu(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function ql(o){return o.getRenderTarget()===null&&o.outputEncoding===Bt?Xe:Jn}const pu={clone:Pn,merge:ue};var mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mu,this.fragmentShader=gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pn(t.uniforms),this.uniformsGroups=fu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Xl extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fe extends Xl{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Po*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Dr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/h,e-=a.offsetY*i/l,n*=a.width/h,i*=a.height/l}const r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xn=-90,_n=1;class xu extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new Fe(xn,_n,t,e);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const s=new Fe(xn,_n,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Fe(xn,_n,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const r=new Fe(xn,_n,t,e);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(0,-1,0),this.add(r);const h=new Fe(xn,_n,t,e);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,1),this.add(h);const l=new Fe(xn,_n,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,s,a,r,h,l]=this.children,c=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=hi,t.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,n),t.setRenderTarget(i,1),t.render(e,s),t.setRenderTarget(i,2),t.render(e,a),t.setRenderTarget(i,3),t.render(e,r),t.setRenderTarget(i,4),t.render(e,h),i.texture.generateMipmaps=f,t.setRenderTarget(i,5),t.render(e,l),t.setRenderTarget(c),t.toneMapping=u,t.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class $l extends _e{constructor(t,e,i,n,s,a,r,h,l,c){t=t!==void 0?t:[],e=e!==void 0?e:Cn,super(t,e,i,n,s,a,r,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _u extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new $l(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new os(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:Pn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ie,blending:yi});s.uniforms.tEquirect.value=e;const a=new li(n,s),r=e.minFilter;return e.minFilter===Yn&&(e.minFilter=ge),new xu(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}const Jr=new N,yu=new N,Mu=new Le;class Ni{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Jr.subVectors(i,e).cross(yu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const i=t.delta(Jr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(i).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Mu.getNormalMatrix(t),n=this.coplanarPoint(Jr).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yn=new ga,Us=new N;class jl{constructor(t=new Ni,e=new Ni,i=new Ni,n=new Ni,s=new Ni,a=new Ni){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(n),r[4].copy(s),r[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,n=i[0],s=i[1],a=i[2],r=i[3],h=i[4],l=i[5],c=i[6],u=i[7],d=i[8],f=i[9],g=i[10],m=i[11],p=i[12],x=i[13],b=i[14],M=i[15];return e[0].setComponents(r-n,u-h,m-d,M-p).normalize(),e[1].setComponents(r+n,u+h,m+d,M+p).normalize(),e[2].setComponents(r+s,u+l,m+f,M+x).normalize(),e[3].setComponents(r-s,u-l,m-f,M-x).normalize(),e[4].setComponents(r-a,u-c,m-g,M-b).normalize(),e[5].setComponents(r+a,u+c,m+g,M+b).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(yn)}intersectsSprite(t){return yn.center.set(0,0,0),yn.radius=.7071067811865476,yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Us.x=n.normal.x>0?t.max.x:t.min.x,Us.y=n.normal.y>0?t.max.y:t.min.y,Us.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yl(){let o=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=o.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=o.requestAnimationFrame(n),t=!0)},stop:function(){o.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function vu(o,t){const e=t.isWebGL2,i=new WeakMap;function n(l,c){const u=l.array,d=l.usage,f=o.createBuffer();o.bindBuffer(c,f),o.bufferData(c,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,c,u){const d=c.array,f=c.updateRange;o.bindBuffer(u,l),f.count===-1?o.bufferSubData(u,0,d):(e?o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),c.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=i.get(l);c&&(o.deleteBuffer(c.buffer),i.delete(l))}function h(l,c){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u===void 0?i.set(l,n(l,c)):u.version<l.version&&(s(u.buffer,l,c),u.version=l.version)}return{get:a,remove:r,update:h}}class xa extends wi{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,r=Math.floor(i),h=Math.floor(n),l=r+1,c=h+1,u=t/r,d=e/h,f=[],g=[],m=[],p=[];for(let x=0;x<c;x++){const b=x*d-a;for(let M=0;M<l;M++){const w=M*u-s;g.push(w,-b,0),m.push(0,0,1),p.push(M/r),p.push(1-x/h)}}for(let x=0;x<h;x++)for(let b=0;b<r;b++){const M=b+l*x,w=b+l*(x+1),y=b+1+l*(x+1),T=b+1+l*x;f.push(M,w,T),f.push(w,y,T)}this.setIndex(f),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(m,3)),this.setAttribute("uv",new Ye(p,2))}static fromJSON(t){return new xa(t.width,t.height,t.widthSegments,t.heightSegments)}}var bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Eu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cu="vec3 transformed = vec3( position );",Lu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Du=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Pu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ru=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Vu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ju="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ku=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ad=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ud=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,xd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_d=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ed=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Nd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tf=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ef=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,nf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,af=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,of=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,df=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ff=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,pf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,mf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,gf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,xf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,_f=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,yf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Af=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Df=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,If=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Qf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wt={alphamap_fragment:bu,alphamap_pars_fragment:Su,alphatest_fragment:wu,alphatest_pars_fragment:Eu,aomap_fragment:Tu,aomap_pars_fragment:Au,begin_vertex:Cu,beginnormal_vertex:Lu,bsdfs:Du,iridescence_fragment:Pu,bumpmap_pars_fragment:Ru,clipping_planes_fragment:zu,clipping_planes_pars_fragment:Fu,clipping_planes_pars_vertex:Iu,clipping_planes_vertex:Nu,color_fragment:Ou,color_pars_fragment:Bu,color_pars_vertex:Uu,color_vertex:ku,common:Gu,cube_uv_reflection_fragment:Vu,defaultnormal_vertex:Wu,displacementmap_pars_vertex:Hu,displacementmap_vertex:qu,emissivemap_fragment:Xu,emissivemap_pars_fragment:$u,encodings_fragment:ju,encodings_pars_fragment:Yu,envmap_fragment:Zu,envmap_common_pars_fragment:Ju,envmap_pars_fragment:Ku,envmap_pars_vertex:Qu,envmap_physical_pars_fragment:ud,envmap_vertex:td,fog_vertex:ed,fog_pars_vertex:id,fog_fragment:nd,fog_pars_fragment:sd,gradientmap_pars_fragment:rd,lightmap_fragment:ad,lightmap_pars_fragment:od,lights_lambert_fragment:ld,lights_lambert_pars_fragment:hd,lights_pars_begin:cd,lights_toon_fragment:dd,lights_toon_pars_fragment:fd,lights_phong_fragment:pd,lights_phong_pars_fragment:md,lights_physical_fragment:gd,lights_physical_pars_fragment:xd,lights_fragment_begin:_d,lights_fragment_maps:yd,lights_fragment_end:Md,logdepthbuf_fragment:vd,logdepthbuf_pars_fragment:bd,logdepthbuf_pars_vertex:Sd,logdepthbuf_vertex:wd,map_fragment:Ed,map_pars_fragment:Td,map_particle_fragment:Ad,map_particle_pars_fragment:Cd,metalnessmap_fragment:Ld,metalnessmap_pars_fragment:Dd,morphcolor_vertex:Pd,morphnormal_vertex:Rd,morphtarget_pars_vertex:zd,morphtarget_vertex:Fd,normal_fragment_begin:Id,normal_fragment_maps:Nd,normal_pars_fragment:Od,normal_pars_vertex:Bd,normal_vertex:Ud,normalmap_pars_fragment:kd,clearcoat_normal_fragment_begin:Gd,clearcoat_normal_fragment_maps:Vd,clearcoat_pars_fragment:Wd,iridescence_pars_fragment:Hd,output_fragment:qd,packing:Xd,premultiplied_alpha_fragment:$d,project_vertex:jd,dithering_fragment:Yd,dithering_pars_fragment:Zd,roughnessmap_fragment:Jd,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:Qd,shadowmap_pars_vertex:tf,shadowmap_vertex:ef,shadowmask_pars_fragment:nf,skinbase_vertex:sf,skinning_pars_vertex:rf,skinning_vertex:af,skinnormal_vertex:of,specularmap_fragment:lf,specularmap_pars_fragment:hf,tonemapping_fragment:cf,tonemapping_pars_fragment:uf,transmission_fragment:df,transmission_pars_fragment:ff,uv_pars_fragment:pf,uv_pars_vertex:mf,uv_vertex:gf,uv2_pars_fragment:xf,uv2_pars_vertex:_f,uv2_vertex:yf,worldpos_vertex:Mf,background_vert:vf,background_frag:bf,backgroundCube_vert:Sf,backgroundCube_frag:wf,cube_vert:Ef,cube_frag:Tf,depth_vert:Af,depth_frag:Cf,distanceRGBA_vert:Lf,distanceRGBA_frag:Df,equirect_vert:Pf,equirect_frag:Rf,linedashed_vert:zf,linedashed_frag:Ff,meshbasic_vert:If,meshbasic_frag:Nf,meshlambert_vert:Of,meshlambert_frag:Bf,meshmatcap_vert:Uf,meshmatcap_frag:kf,meshnormal_vert:Gf,meshnormal_frag:Vf,meshphong_vert:Wf,meshphong_frag:Hf,meshphysical_vert:qf,meshphysical_frag:Xf,meshtoon_vert:$f,meshtoon_frag:jf,points_vert:Yf,points_frag:Zf,shadow_vert:Jf,shadow_frag:Kf,sprite_vert:Qf,sprite_frag:tp},at={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Le},uv2Transform:{value:new Le},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Le}}},$e={basic:{uniforms:ue([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:ue([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Nt(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:ue([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:ue([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:ue([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Nt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:ue([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:ue([at.points,at.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:ue([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:ue([at.common,at.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:ue([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:ue([at.sprite,at.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:ue([at.common,at.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:ue([at.lights,at.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};$e.physical={uniforms:ue([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const ks={r:0,b:0,g:0};function ep(o,t,e,i,n,s,a){const r=new Nt(0);let h=s===!0?0:1,l,c,u=null,d=0,f=null;function g(p,x){let b=!1,M=x.isScene===!0?x.background:null;M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M));const w=o.xr,y=w.getSession&&w.getSession();y&&y.environmentBlendMode==="additive"&&(M=null),M===null?m(r,h):M&&M.isColor&&(m(M,1),b=!0),(o.autoClear||b)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Zs)?(c===void 0&&(c=new li(new os(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Pn($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,L,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=M.encoding!==Bt,(u!==M||d!==M.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new li(new xa(2,2),new $i({name:"BackgroundMaterial",uniforms:Pn($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=M.encoding!==Bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==o.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=o.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function m(p,x){p.getRGB(ks,ql(o)),i.buffers.color.setClear(ks.r,ks.g,ks.b,x,a)}return{getClearColor:function(){return r},setClearColor:function(p,x=1){r.set(p),h=x,m(r,h)},getClearAlpha:function(){return h},setClearAlpha:function(p){h=p,m(r,h)},render:g}}function ip(o,t,e,i){const n=o.getParameter(34921),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,r={},h=p(null);let l=h,c=!1;function u(z,B,Z,K,H){let nt=!1;if(a){const Q=m(K,Z,B);l!==Q&&(l=Q,f(l.object)),nt=x(z,K,Z,H),nt&&b(z,K,Z,H)}else{const Q=B.wireframe===!0;(l.geometry!==K.id||l.program!==Z.id||l.wireframe!==Q)&&(l.geometry=K.id,l.program=Z.id,l.wireframe=Q,nt=!0)}H!==null&&e.update(H,34963),(nt||c)&&(c=!1,_(z,B,Z,K),H!==null&&o.bindBuffer(34963,e.get(H).buffer))}function d(){return i.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(z){return i.isWebGL2?o.bindVertexArray(z):s.bindVertexArrayOES(z)}function g(z){return i.isWebGL2?o.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function m(z,B,Z){const K=Z.wireframe===!0;let H=r[z.id];H===void 0&&(H={},r[z.id]=H);let nt=H[B.id];nt===void 0&&(nt={},H[B.id]=nt);let Q=nt[K];return Q===void 0&&(Q=p(d()),nt[K]=Q),Q}function p(z){const B=[],Z=[],K=[];for(let H=0;H<n;H++)B[H]=0,Z[H]=0,K[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:K,object:z,attributes:{},index:null}}function x(z,B,Z,K){const H=l.attributes,nt=B.attributes;let Q=0;const U=Z.getAttributes();for(const q in U)if(U[q].location>=0){const st=H[q];let ot=nt[q];if(ot===void 0&&(q==="instanceMatrix"&&z.instanceMatrix&&(ot=z.instanceMatrix),q==="instanceColor"&&z.instanceColor&&(ot=z.instanceColor)),st===void 0||st.attribute!==ot||ot&&st.data!==ot.data)return!0;Q++}return l.attributesNum!==Q||l.index!==K}function b(z,B,Z,K){const H={},nt=B.attributes;let Q=0;const U=Z.getAttributes();for(const q in U)if(U[q].location>=0){let st=nt[q];st===void 0&&(q==="instanceMatrix"&&z.instanceMatrix&&(st=z.instanceMatrix),q==="instanceColor"&&z.instanceColor&&(st=z.instanceColor));const ot={};ot.attribute=st,st&&st.data&&(ot.data=st.data),H[q]=ot,Q++}l.attributes=H,l.attributesNum=Q,l.index=K}function M(){const z=l.newAttributes;for(let B=0,Z=z.length;B<Z;B++)z[B]=0}function w(z){y(z,0)}function y(z,B){const Z=l.newAttributes,K=l.enabledAttributes,H=l.attributeDivisors;Z[z]=1,K[z]===0&&(o.enableVertexAttribArray(z),K[z]=1),H[z]!==B&&((i.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,B),H[z]=B)}function T(){const z=l.newAttributes,B=l.enabledAttributes;for(let Z=0,K=B.length;Z<K;Z++)B[Z]!==z[Z]&&(o.disableVertexAttribArray(Z),B[Z]=0)}function L(z,B,Z,K,H,nt){i.isWebGL2===!0&&(Z===5124||Z===5125)?o.vertexAttribIPointer(z,B,Z,H,nt):o.vertexAttribPointer(z,B,Z,K,H,nt)}function _(z,B,Z,K){if(i.isWebGL2===!1&&(z.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const H=K.attributes,nt=Z.getAttributes(),Q=B.defaultAttributeValues;for(const U in nt){const q=nt[U];if(q.location>=0){let et=H[U];if(et===void 0&&(U==="instanceMatrix"&&z.instanceMatrix&&(et=z.instanceMatrix),U==="instanceColor"&&z.instanceColor&&(et=z.instanceColor)),et!==void 0){const st=et.normalized,ot=et.itemSize,X=e.get(et);if(X===void 0)continue;const At=X.buffer,ft=X.type,yt=X.bytesPerElement;if(et.isInterleavedBufferAttribute){const dt=et.data,zt=dt.stride,St=et.offset;if(dt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<q.locationSize;Mt++)y(q.location+Mt,dt.meshPerAttribute);z.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Mt=0;Mt<q.locationSize;Mt++)w(q.location+Mt);o.bindBuffer(34962,At);for(let Mt=0;Mt<q.locationSize;Mt++)L(q.location+Mt,ot/q.locationSize,ft,st,zt*yt,(St+ot/q.locationSize*Mt)*yt)}else{if(et.isInstancedBufferAttribute){for(let dt=0;dt<q.locationSize;dt++)y(q.location+dt,et.meshPerAttribute);z.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let dt=0;dt<q.locationSize;dt++)w(q.location+dt);o.bindBuffer(34962,At);for(let dt=0;dt<q.locationSize;dt++)L(q.location+dt,ot/q.locationSize,ft,st,ot*yt,ot/q.locationSize*dt*yt)}}else if(Q!==void 0){const st=Q[U];if(st!==void 0)switch(st.length){case 2:o.vertexAttrib2fv(q.location,st);break;case 3:o.vertexAttrib3fv(q.location,st);break;case 4:o.vertexAttrib4fv(q.location,st);break;default:o.vertexAttrib1fv(q.location,st)}}}}T()}function A(){J();for(const z in r){const B=r[z];for(const Z in B){const K=B[Z];for(const H in K)g(K[H].object),delete K[H];delete B[Z]}delete r[z]}}function D(z){if(r[z.id]===void 0)return;const B=r[z.id];for(const Z in B){const K=B[Z];for(const H in K)g(K[H].object),delete K[H];delete B[Z]}delete r[z.id]}function k(z){for(const B in r){const Z=r[B];if(Z[z.id]===void 0)continue;const K=Z[z.id];for(const H in K)g(K[H].object),delete K[H];delete Z[z.id]}}function J(){R(),c=!0,l!==h&&(l=h,f(l.object))}function R(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:u,reset:J,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:k,initAttributes:M,enableAttribute:w,disableUnusedAttributes:T}}function np(o,t,e,i){const n=i.isWebGL2;let s;function a(l){s=l}function r(l,c){o.drawArrays(s,l,c),e.update(c,s,1)}function h(l,c,u){if(u===0)return;let d,f;if(n)d=o,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,l,c,u),e.update(c,s,u)}this.setMode=a,this.render=r,this.renderInstances=h}function sp(o,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");i=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let r=e.precision!==void 0?e.precision:"highp";const h=s(r);h!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",h,"instead."),r=h);const l=a||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,u=o.getParameter(34930),d=o.getParameter(35660),f=o.getParameter(3379),g=o.getParameter(34076),m=o.getParameter(34921),p=o.getParameter(36347),x=o.getParameter(36348),b=o.getParameter(36349),M=d>0,w=a||t.has("OES_texture_float"),y=M&&w,T=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:y,maxSamples:T}}function rp(o){const t=this;let e=null,i=0,n=!1,s=!1;const a=new Ni,r=new Le,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const g=u.length!==0||d||i!==0||n;return n=d,e=c(u,f,0),i=u.length,g},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,l()},this.setState=function(u,d,f){const g=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,x=o.get(u);if(!n||g===null||g.length===0||s&&!p)s?c(null):l();else{const b=s?0:i,M=b*4;let w=x.clippingState||null;h.value=w,w=c(g,d,M,f);for(let y=0;y!==M;++y)w[y]=e[y];x.clippingState=w,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=b}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,d,f,g){const m=u!==null?u.length:0;let p=null;if(m!==0){if(p=h.value,g!==!0||p===null){const x=f+m*4,b=d.matrixWorldInverse;r.getNormalMatrix(b),(p===null||p.length<x)&&(p=new Float32Array(x));for(let M=0,w=f;M!==m;++M,w+=4)a.copy(u[M]).applyMatrix4(b,r),a.normal.toArray(p,w),p[w+3]=a.constant}h.value=p,h.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,p}}function ap(o){let t=new WeakMap;function e(a,r){return r===$s?a.mapping=Cn:r===ra&&(a.mapping=Ln),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const r=a.mapping;if(r===$s||r===ra)if(t.has(a)){const h=t.get(a).texture;return e(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const l=new _u(h.height/2);return l.fromEquirectangularTexture(o,a),t.set(a,l),a.addEventListener("dispose",n),e(l.texture,a.mapping)}else return null}}return a}function n(a){const r=a.target;r.removeEventListener("dispose",n);const h=t.get(r);h!==void 0&&(t.delete(r),h.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class op extends Xl{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,r=n+e,h=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,r-=c*this.view.offsetY,h=r-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const bn=4,Wo=[.125,.215,.35,.446,.526,.582],Bi=20,Kr=new op,Ho=new Nt;let Qr=null;const Oi=(1+Math.sqrt(5))/2,Mn=1/Oi,qo=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Oi,Mn),new N(0,Oi,-Mn),new N(Mn,0,Oi),new N(-Mn,0,Oi),new N(Oi,Mn,0),new N(-Oi,Mn,0)];class Xo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Qr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qr),t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cn||t.mapping===Ln?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qr=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ge,minFilter:ge,generateMipmaps:!1,type:Zn,format:He,encoding:qi,depthBuffer:!1},n=$o(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$o(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(s)),this._blurMaterial=hp(s,t,e)}return n}_compileMaterial(t){const e=new li(this._lodPlanes[0],t);this._renderer.compile(e,Kr)}_sceneToCubeUV(t,e,i,n){const r=new Fe(90,1,e,i),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(Ho),c.toneMapping=hi,c.autoClear=!1;const f=new Vl({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new li(new os,f);let m=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,m=!0):(f.color.copy(Ho),m=!0);for(let x=0;x<6;x++){const b=x%3;b===0?(r.up.set(0,h[x],0),r.lookAt(l[x],0,0)):b===1?(r.up.set(0,0,h[x]),r.lookAt(0,l[x],0)):(r.up.set(0,h[x],0),r.lookAt(0,0,l[x]));const M=this._cubeSize;Gs(n,b*M,x>2?M:0,M,M),c.setRenderTarget(n),m&&c.render(g,r),c.render(t,r)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Cn||t.mapping===Ln;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jo());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new li(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;const h=this._cubeSize;Gs(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(a,Kr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=qo[(n-1)%qo.length];this._blur(t,n-1,n,s,a)}e.autoClear=i}_blur(t,e,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,r){const h=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new li(this._lodPlanes[n],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Bi-1),m=s/g,p=isFinite(s)?1+Math.floor(c*m):Bi;p>Bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bi}`);const x=[];let b=0;for(let L=0;L<Bi;++L){const _=L/m,A=Math.exp(-_*_/2);x.push(A),L===0?b+=A:L<p&&(b+=2*A)}for(let L=0;L<x.length;L++)x[L]=x[L]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=x,d.latitudinal.value=a==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const w=this._sizeLods[n],y=3*w*(n>M-bn?n-M+bn:0),T=4*(this._cubeSize-w);Gs(e,y,T,3*w,2*w),h.setRenderTarget(e),h.render(u,Kr)}}function lp(o){const t=[],e=[],i=[];let n=o;const s=o-bn+1+Wo.length;for(let a=0;a<s;a++){const r=Math.pow(2,n);e.push(r);let h=1/r;a>o-bn?h=Wo[a-o+bn-1]:a===0&&(h=0),i.push(h);const l=1/(r-2),c=-l,u=1+l,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,g=6,m=3,p=2,x=1,b=new Float32Array(m*g*f),M=new Float32Array(p*g*f),w=new Float32Array(x*g*f);for(let T=0;T<f;T++){const L=T%3*2/3-1,_=T>2?0:-1,A=[L,_,0,L+2/3,_,0,L+2/3,_+1,0,L,_,0,L+2/3,_+1,0,L,_+1,0];b.set(A,m*g*T),M.set(d,p*g*T);const D=[T,T,T,T,T,T];w.set(D,x*g*T)}const y=new wi;y.setAttribute("position",new je(b,m)),y.setAttribute("uv",new je(M,p)),y.setAttribute("faceIndex",new je(w,x)),t.push(y),n>bn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function $o(o,t,e){const i=new Xi(o,t,e);return i.texture.mapping=Zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gs(o,t,e,i,n){o.viewport.set(t,e,i,n),o.scissor.set(t,e,i,n)}function hp(o,t,e){const i=new Float32Array(Bi),n=new N(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function jo(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Yo(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function _a(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cp(o){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){const h=r.mapping,l=h===$s||h===ra,c=h===Cn||h===Ln;if(l||c)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let u=t.get(r);return e===null&&(e=new Xo(o)),u=l?e.fromEquirectangular(r,u):e.fromCubemap(r,u),t.set(r,u),u.texture}else{if(t.has(r))return t.get(r).texture;{const u=r.image;if(l&&u&&u.height>0||c&&u&&n(u)){e===null&&(e=new Xo(o));const d=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,d),r.addEventListener("dispose",s),d.texture}else return null}}}return r}function n(r){let h=0;const l=6;for(let c=0;c<l;c++)r[c]!==void 0&&h++;return h===l}function s(r){const h=r.target;h.removeEventListener("dispose",s);const l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function up(o){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=o.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function dp(o,t,e,i){const n={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete n[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function r(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function h(u){const d=u.attributes;for(const g in d)t.update(d[g],34962);const f=u.morphAttributes;for(const g in f){const m=f[g];for(let p=0,x=m.length;p<x;p++)t.update(m[p],34962)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let m=0;if(f!==null){const b=f.array;m=f.version;for(let M=0,w=b.length;M<w;M+=3){const y=b[M+0],T=b[M+1],L=b[M+2];d.push(y,T,T,L,L,y)}}else{const b=g.array;m=g.version;for(let M=0,w=b.length/3-1;M<w;M+=3){const y=M+0,T=M+1,L=M+2;d.push(y,T,T,L,L,y)}}const p=new(Nl(d)?Hl:Wl)(d,1);p.version=m;const x=s.get(u);x&&t.remove(x),s.set(u,p)}function c(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:r,update:h,getWireframeAttribute:c}}function fp(o,t,e,i){const n=i.isWebGL2;let s;function a(d){s=d}let r,h;function l(d){r=d.type,h=d.bytesPerElement}function c(d,f){o.drawElements(s,f,r,d*h),e.update(f,s,1)}function u(d,f,g){if(g===0)return;let m,p;if(n)m=o,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,f,r,d*h,g),e.update(f,s,g)}this.setMode=a,this.setIndex=l,this.render=c,this.renderInstances=u}function pp(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,r){switch(e.calls++,a){case 4:e.triangles+=r*(s/3);break;case 1:e.lines+=r*(s/2);break;case 3:e.lines+=r*(s-1);break;case 2:e.lines+=r*s;break;case 0:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function mp(o,t){return o[0]-t[0]}function gp(o,t){return Math.abs(t[1])-Math.abs(o[1])}function xp(o,t,e){const i={},n=new Float32Array(8),s=new WeakMap,a=new ne,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function h(l,c,u,d){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=m!==void 0?m.length:0;let x=s.get(c);if(x===void 0||x.count!==p){let Z=function(){z.dispose(),s.delete(c),c.removeEventListener("dispose",Z)};var g=Z;x!==void 0&&x.texture.dispose();const w=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,L=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let D=0;w===!0&&(D=1),y===!0&&(D=2),T===!0&&(D=3);let k=c.attributes.position.count*D,J=1;k>t.maxTextureSize&&(J=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const R=new Float32Array(k*J*4*p),z=new kl(R,k,J,p);z.type=ki,z.needsUpdate=!0;const B=D*4;for(let K=0;K<p;K++){const H=L[K],nt=_[K],Q=A[K],U=k*J*4*K;for(let q=0;q<H.count;q++){const et=q*B;w===!0&&(a.fromBufferAttribute(H,q),R[U+et+0]=a.x,R[U+et+1]=a.y,R[U+et+2]=a.z,R[U+et+3]=0),y===!0&&(a.fromBufferAttribute(nt,q),R[U+et+4]=a.x,R[U+et+5]=a.y,R[U+et+6]=a.z,R[U+et+7]=0),T===!0&&(a.fromBufferAttribute(Q,q),R[U+et+8]=a.x,R[U+et+9]=a.y,R[U+et+10]=a.z,R[U+et+11]=Q.itemSize===4?a.w:1)}}x={count:p,texture:z,size:new Ot(k,J)},s.set(c,x),c.addEventListener("dispose",Z)}let b=0;for(let w=0;w<f.length;w++)b+=f[w];const M=c.morphTargetsRelative?1:1-b;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",f),d.getUniforms().setValue(o,"morphTargetsTexture",x.texture,e),d.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}else{const m=f===void 0?0:f.length;let p=i[c.id];if(p===void 0||p.length!==m){p=[];for(let y=0;y<m;y++)p[y]=[y,0];i[c.id]=p}for(let y=0;y<m;y++){const T=p[y];T[0]=y,T[1]=f[y]}p.sort(gp);for(let y=0;y<8;y++)y<m&&p[y][1]?(r[y][0]=p[y][0],r[y][1]=p[y][1]):(r[y][0]=Number.MAX_SAFE_INTEGER,r[y][1]=0);r.sort(mp);const x=c.morphAttributes.position,b=c.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const T=r[y],L=T[0],_=T[1];L!==Number.MAX_SAFE_INTEGER&&_?(x&&c.getAttribute("morphTarget"+y)!==x[L]&&c.setAttribute("morphTarget"+y,x[L]),b&&c.getAttribute("morphNormal"+y)!==b[L]&&c.setAttribute("morphNormal"+y,b[L]),n[y]=_,M+=_):(x&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),b&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),n[y]=0)}const w=c.morphTargetsRelative?1:1-M;d.getUniforms().setValue(o,"morphTargetBaseInfluence",w),d.getUniforms().setValue(o,"morphTargetInfluences",n)}}return{update:h}}function _p(o,t,e,i){let n=new WeakMap;function s(h){const l=i.render.frame,c=h.geometry,u=t.get(h,c);return n.get(u)!==l&&(t.update(u),n.set(u,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",r)===!1&&h.addEventListener("dispose",r),e.update(h.instanceMatrix,34962),h.instanceColor!==null&&e.update(h.instanceColor,34962)),u}function a(){n=new WeakMap}function r(h){const l=h.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const Zl=new _e,Jl=new kl,Kl=new eu,Ql=new $l,Zo=[],Jo=[],Ko=new Float32Array(16),Qo=new Float32Array(9),tl=new Float32Array(4);function zn(o,t,e){const i=o[0];if(i<=0||i>0)return o;const n=t*e;let s=Zo[n];if(s===void 0&&(s=new Float32Array(n),Zo[n]=s),t!==0){i.toArray(s,0);for(let a=1,r=0;a!==t;++a)r+=e,o[a].toArray(s,r)}return s}function Yt(o,t){if(o.length!==t.length)return!1;for(let e=0,i=o.length;e<i;e++)if(o[e]!==t[e])return!1;return!0}function Zt(o,t){for(let e=0,i=t.length;e<i;e++)o[e]=t[e]}function Js(o,t){let e=Jo[t];e===void 0&&(e=new Int32Array(t),Jo[t]=e);for(let i=0;i!==t;++i)e[i]=o.allocateTextureUnit();return e}function yp(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Mp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Yt(e,t))return;o.uniform2fv(this.addr,t),Zt(e,t)}}function vp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Yt(e,t))return;o.uniform3fv(this.addr,t),Zt(e,t)}}function bp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Yt(e,t))return;o.uniform4fv(this.addr,t),Zt(e,t)}}function Sp(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Yt(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Zt(e,t)}else{if(Yt(e,i))return;tl.set(i),o.uniformMatrix2fv(this.addr,!1,tl),Zt(e,i)}}function wp(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Yt(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Zt(e,t)}else{if(Yt(e,i))return;Qo.set(i),o.uniformMatrix3fv(this.addr,!1,Qo),Zt(e,i)}}function Ep(o,t){const e=this.cache,i=t.elements;if(i===void 0){if(Yt(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Zt(e,t)}else{if(Yt(e,i))return;Ko.set(i),o.uniformMatrix4fv(this.addr,!1,Ko),Zt(e,i)}}function Tp(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function Ap(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Yt(e,t))return;o.uniform2iv(this.addr,t),Zt(e,t)}}function Cp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Yt(e,t))return;o.uniform3iv(this.addr,t),Zt(e,t)}}function Lp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Yt(e,t))return;o.uniform4iv(this.addr,t),Zt(e,t)}}function Dp(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function Pp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Yt(e,t))return;o.uniform2uiv(this.addr,t),Zt(e,t)}}function Rp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Yt(e,t))return;o.uniform3uiv(this.addr,t),Zt(e,t)}}function zp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Yt(e,t))return;o.uniform4uiv(this.addr,t),Zt(e,t)}}function Fp(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture2D(t||Zl,n)}function Ip(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Kl,n)}function Np(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Ql,n)}function Op(o,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Jl,n)}function Bp(o){switch(o){case 5126:return yp;case 35664:return Mp;case 35665:return vp;case 35666:return bp;case 35674:return Sp;case 35675:return wp;case 35676:return Ep;case 5124:case 35670:return Tp;case 35667:case 35671:return Ap;case 35668:case 35672:return Cp;case 35669:case 35673:return Lp;case 5125:return Dp;case 36294:return Pp;case 36295:return Rp;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Op}}function Up(o,t){o.uniform1fv(this.addr,t)}function kp(o,t){const e=zn(t,this.size,2);o.uniform2fv(this.addr,e)}function Gp(o,t){const e=zn(t,this.size,3);o.uniform3fv(this.addr,e)}function Vp(o,t){const e=zn(t,this.size,4);o.uniform4fv(this.addr,e)}function Wp(o,t){const e=zn(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Hp(o,t){const e=zn(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function qp(o,t){const e=zn(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Xp(o,t){o.uniform1iv(this.addr,t)}function $p(o,t){o.uniform2iv(this.addr,t)}function jp(o,t){o.uniform3iv(this.addr,t)}function Yp(o,t){o.uniform4iv(this.addr,t)}function Zp(o,t){o.uniform1uiv(this.addr,t)}function Jp(o,t){o.uniform2uiv(this.addr,t)}function Kp(o,t){o.uniform3uiv(this.addr,t)}function Qp(o,t){o.uniform4uiv(this.addr,t)}function tm(o,t,e){const i=this.cache,n=t.length,s=Js(e,n);Yt(i,s)||(o.uniform1iv(this.addr,s),Zt(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Zl,s[a])}function em(o,t,e){const i=this.cache,n=t.length,s=Js(e,n);Yt(i,s)||(o.uniform1iv(this.addr,s),Zt(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Kl,s[a])}function im(o,t,e){const i=this.cache,n=t.length,s=Js(e,n);Yt(i,s)||(o.uniform1iv(this.addr,s),Zt(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Ql,s[a])}function nm(o,t,e){const i=this.cache,n=t.length,s=Js(e,n);Yt(i,s)||(o.uniform1iv(this.addr,s),Zt(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Jl,s[a])}function sm(o){switch(o){case 5126:return Up;case 35664:return kp;case 35665:return Gp;case 35666:return Vp;case 35674:return Wp;case 35675:return Hp;case 35676:return qp;case 5124:case 35670:return Xp;case 35667:case 35671:return $p;case 35668:case 35672:return jp;case 35669:case 35673:return Yp;case 5125:return Zp;case 36294:return Jp;case 36295:return Kp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return nm}}class rm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=Bp(e.type)}}class am{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=sm(e.type)}}class om{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const r=n[s];r.setValue(t,e[r.id],i)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function el(o,t){o.seq.push(t),o.map[t.id]=t}function lm(o,t,e){const i=o.name,n=i.length;for(ta.lastIndex=0;;){const s=ta.exec(i),a=ta.lastIndex;let r=s[1];const h=s[2]==="]",l=s[3];if(h&&(r=r|0),l===void 0||l==="["&&a+2===n){el(e,l===void 0?new rm(r,o,t):new am(r,o,t));break}else{let u=e.map[r];u===void 0&&(u=new om(r),el(e,u)),e=u}}}class Xs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,35718);for(let n=0;n<i;++n){const s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);lm(s,a,this)}}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const r=e[s],h=i[r.id];h.needsUpdate!==!1&&r.setValue(t,h.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function il(o,t,e){const i=o.createShader(t);return o.shaderSource(i,e),o.compileShader(i),i}let hm=0;function cm(o,t){const e=o.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){const r=a+1;i.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return i.join(`
`)}function um(o){switch(o){case qi:return["Linear","( value )"];case Bt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function nl(o,t,e){const i=o.getShaderParameter(t,35713),n=o.getShaderInfoLog(t).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+cm(o.getShaderSource(t),a)}else return n}function dm(o,t){const e=um(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function fm(o,t){let e;switch(t){case Cc:e="Linear";break;case Lc:e="Reinhard";break;case Dc:e="OptimizedCineon";break;case Pc:e="ACESFilmic";break;case Rc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function pm(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(jn).join(`
`)}function mm(o){const t=[];for(const e in o){const i=o[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function gm(o,t){const e={},i=o.getProgramParameter(t,35721);for(let n=0;n<i;n++){const s=o.getActiveAttrib(t,n),a=s.name;let r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),e[a]={type:s.type,location:o.getAttribLocation(t,a),locationSize:r}}return e}function jn(o){return o!==""}function sl(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rl(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ca(o){return o.replace(xm,_m)}function _m(o,t){const e=wt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return ca(e)}const ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(o){return o.replace(ym,Mm)}function Mm(o,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function ol(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vm(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ll?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ac?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function bm(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Cn:case Ln:t="ENVMAP_TYPE_CUBE";break;case Zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Sm(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ln:t="ENVMAP_MODE_REFRACTION";break}return t}function wm(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Rl:t="ENVMAP_BLENDING_MULTIPLY";break;case Tc:t="ENVMAP_BLENDING_MIX";break;case Ac:t="ENVMAP_BLENDING_ADD";break}return t}function Em(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Tm(o,t,e,i){const n=o.getContext(),s=e.defines;let a=e.vertexShader,r=e.fragmentShader;const h=vm(e),l=bm(e),c=Sm(e),u=wm(e),d=Em(e),f=e.isWebGL2?"":pm(e),g=mm(s),m=n.createProgram();let p,x,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(jn).join(`
`),p.length>0&&(p+=`
`),x=[f,g].filter(jn).join(`
`),x.length>0&&(x+=`
`)):(p=[ol(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jn).join(`
`),x=[f,ol(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?wt.tonemapping_pars_fragment:"",e.toneMapping!==hi?fm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",wt.encodings_pars_fragment,dm("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jn).join(`
`)),a=ca(a),a=sl(a,e),a=rl(a,e),r=ca(r),r=sl(r,e),r=rl(r,e),a=al(a),r=al(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",e.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=b+p+a,w=b+x+r,y=il(n,35633,M),T=il(n,35632,w);if(n.attachShader(m,y),n.attachShader(m,T),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),o.debug.checkShaderErrors){const A=n.getProgramInfoLog(m).trim(),D=n.getShaderInfoLog(y).trim(),k=n.getShaderInfoLog(T).trim();let J=!0,R=!0;if(n.getProgramParameter(m,35714)===!1){J=!1;const z=nl(n,y,"vertex"),B=nl(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,35715)+`

Program Info Log: `+A+`
`+z+`
`+B)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(D===""||k==="")&&(R=!1);R&&(this.diagnostics={runnable:J,programLog:A,vertexShader:{log:D,prefix:p},fragmentShader:{log:k,prefix:x}})}n.deleteShader(y),n.deleteShader(T);let L;this.getUniforms=function(){return L===void 0&&(L=new Xs(n,m)),L};let _;return this.getAttributes=function(){return _===void 0&&(_=gm(n,m)),_},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=hm++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=T,this}let Am=0;class Cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Lm(t),e.set(t,i)),i}}class Lm{constructor(t){this.id=Am++,this.code=t,this.usedTimes=0}}function Dm(o,t,e,i,n,s,a){const r=new Gl,h=new Cm,l=[],c=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_,A,D,k,J){const R=k.fog,z=J.geometry,B=_.isMeshStandardMaterial?k.environment:null,Z=(_.isMeshStandardMaterial?e:t).get(_.envMap||B),K=Z&&Z.mapping===Zs?Z.image.height:null,H=g[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const nt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Q=nt!==void 0?nt.length:0;let U=0;z.morphAttributes.position!==void 0&&(U=1),z.morphAttributes.normal!==void 0&&(U=2),z.morphAttributes.color!==void 0&&(U=3);let q,et,st,ot;if(H){const zt=$e[H];q=zt.vertexShader,et=zt.fragmentShader}else q=_.vertexShader,et=_.fragmentShader,h.update(_),st=h.getVertexShaderID(_),ot=h.getFragmentShaderID(_);const X=o.getRenderTarget(),At=_.alphaTest>0,ft=_.clearcoat>0,yt=_.iridescence>0;return{isWebGL2:c,shaderID:H,shaderName:_.type,vertexShader:q,fragmentShader:et,defines:_.defines,customVertexShaderID:st,customFragmentShaderID:ot,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:d,outputEncoding:X===null?o.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:qi,map:!!_.map,matcap:!!_.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:K,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Jc,tangentSpaceNormalMap:_.normalMapType===Il,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Bt,clearcoat:ft,clearcoatMap:ft&&!!_.clearcoatMap,clearcoatRoughnessMap:ft&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:ft&&!!_.clearcoatNormalMap,iridescence:yt,iridescenceMap:yt&&!!_.iridescenceMap,iridescenceThicknessMap:yt&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===En,alphaMap:!!_.alphaMap,alphaTest:At,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!z.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!R,useFog:_.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:U,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:o.shadowMap.enabled&&D.length>0,shadowMapType:o.shadowMap.type,toneMapping:_.toneMapped?o.toneMapping:hi,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ma,flipSided:_.side===Ie,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)A.push(D),A.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(x(A,_),b(A,_),A.push(o.outputEncoding)),A.push(_.customProgramCacheKey),A.join()}function x(_,A){_.push(A.precision),_.push(A.outputEncoding),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.combine),_.push(A.vertexUvs),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function b(_,A){r.disableAll(),A.isWebGL2&&r.enable(0),A.supportsVertexTextures&&r.enable(1),A.instancing&&r.enable(2),A.instancingColor&&r.enable(3),A.map&&r.enable(4),A.matcap&&r.enable(5),A.envMap&&r.enable(6),A.lightMap&&r.enable(7),A.aoMap&&r.enable(8),A.emissiveMap&&r.enable(9),A.bumpMap&&r.enable(10),A.normalMap&&r.enable(11),A.objectSpaceNormalMap&&r.enable(12),A.tangentSpaceNormalMap&&r.enable(13),A.clearcoat&&r.enable(14),A.clearcoatMap&&r.enable(15),A.clearcoatRoughnessMap&&r.enable(16),A.clearcoatNormalMap&&r.enable(17),A.iridescence&&r.enable(18),A.iridescenceMap&&r.enable(19),A.iridescenceThicknessMap&&r.enable(20),A.displacementMap&&r.enable(21),A.specularMap&&r.enable(22),A.roughnessMap&&r.enable(23),A.metalnessMap&&r.enable(24),A.gradientMap&&r.enable(25),A.alphaMap&&r.enable(26),A.alphaTest&&r.enable(27),A.vertexColors&&r.enable(28),A.vertexAlphas&&r.enable(29),A.vertexUvs&&r.enable(30),A.vertexTangents&&r.enable(31),A.uvsVertexOnly&&r.enable(32),_.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.skinning&&r.enable(4),A.morphTargets&&r.enable(5),A.morphNormals&&r.enable(6),A.morphColors&&r.enable(7),A.premultipliedAlpha&&r.enable(8),A.shadowMapEnabled&&r.enable(9),A.physicallyCorrectLights&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.specularIntensityMap&&r.enable(15),A.specularColorMap&&r.enable(16),A.transmission&&r.enable(17),A.transmissionMap&&r.enable(18),A.thicknessMap&&r.enable(19),A.sheen&&r.enable(20),A.sheenColorMap&&r.enable(21),A.sheenRoughnessMap&&r.enable(22),A.decodeVideoTexture&&r.enable(23),A.opaque&&r.enable(24),_.push(r.mask)}function M(_){const A=g[_.type];let D;if(A){const k=$e[A];D=pu.clone(k.uniforms)}else D=_.uniforms;return D}function w(_,A){let D;for(let k=0,J=l.length;k<J;k++){const R=l[k];if(R.cacheKey===A){D=R,++D.usedTimes;break}}return D===void 0&&(D=new Tm(o,A,_,s),l.push(D)),D}function y(_){if(--_.usedTimes===0){const A=l.indexOf(_);l[A]=l[l.length-1],l.pop(),_.destroy()}}function T(_){h.remove(_)}function L(){h.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:w,releaseProgram:y,releaseShaderCache:T,programs:l,dispose:L}}function Pm(){let o=new WeakMap;function t(s){let a=o.get(s);return a===void 0&&(a={},o.set(s,a)),a}function e(s){o.delete(s)}function i(s,a,r){o.get(s)[a]=r}function n(){o=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function Rm(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function ll(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function hl(){const o=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,g,m,p){let x=o[t];return x===void 0?(x={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},o[t]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=f,x.groupOrder=g,x.renderOrder=u.renderOrder,x.z=m,x.group=p),t++,x}function r(u,d,f,g,m,p){const x=a(u,d,f,g,m,p);f.transmission>0?i.push(x):f.transparent===!0?n.push(x):e.push(x)}function h(u,d,f,g,m,p){const x=a(u,d,f,g,m,p);f.transmission>0?i.unshift(x):f.transparent===!0?n.unshift(x):e.unshift(x)}function l(u,d){e.length>1&&e.sort(u||Rm),i.length>1&&i.sort(d||ll),n.length>1&&n.sort(d||ll)}function c(){for(let u=t,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:r,unshift:h,finish:c,sort:l}}function zm(){let o=new WeakMap;function t(i,n){const s=o.get(i);let a;return s===void 0?(a=new hl,o.set(i,[a])):n>=s.length?(a=new hl,s.push(a)):a=s[n],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function Fm(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Nt};break;case"SpotLight":e={position:new N,direction:new N,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new N,halfWidth:new N,halfHeight:new N};break}return o[t.id]=e,e}}}function Im(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Nm=0;function Om(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Bm(o,t){const e=new Fm,i=Im(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,a=new se,r=new se;function h(c,u){let d=0,f=0,g=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let m=0,p=0,x=0,b=0,M=0,w=0,y=0,T=0,L=0,_=0;c.sort(Om);const A=u!==!0?Math.PI:1;for(let k=0,J=c.length;k<J;k++){const R=c[k],z=R.color,B=R.intensity,Z=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=z.r*B*A,f+=z.g*B*A,g+=z.b*B*A;else if(R.isLightProbe)for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],B);else if(R.isDirectionalLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity*A),R.castShadow){const nt=R.shadow,Q=i.get(R);Q.shadowBias=nt.bias,Q.shadowNormalBias=nt.normalBias,Q.shadowRadius=nt.radius,Q.shadowMapSize=nt.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=R.shadow.matrix,w++}n.directional[m]=H,m++}else if(R.isSpotLight){const H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(z).multiplyScalar(B*A),H.distance=Z,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[x]=H;const nt=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,nt.updateMatrices(R),R.castShadow&&_++),n.spotLightMatrix[x]=nt.matrix,R.castShadow){const Q=i.get(R);Q.shadowBias=nt.bias,Q.shadowNormalBias=nt.normalBias,Q.shadowRadius=nt.radius,Q.shadowMapSize=nt.mapSize,n.spotShadow[x]=Q,n.spotShadowMap[x]=K,T++}x++}else if(R.isRectAreaLight){const H=e.get(R);H.color.copy(z).multiplyScalar(B),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[b]=H,b++}else if(R.isPointLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity*A),H.distance=R.distance,H.decay=R.decay,R.castShadow){const nt=R.shadow,Q=i.get(R);Q.shadowBias=nt.bias,Q.shadowNormalBias=nt.normalBias,Q.shadowRadius=nt.radius,Q.shadowMapSize=nt.mapSize,Q.shadowCameraNear=nt.camera.near,Q.shadowCameraFar=nt.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=R.shadow.matrix,y++}n.point[p]=H,p++}else if(R.isHemisphereLight){const H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(B*A),H.groundColor.copy(R.groundColor).multiplyScalar(B*A),n.hemi[M]=H,M++}}b>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=g;const D=n.hash;(D.directionalLength!==m||D.pointLength!==p||D.spotLength!==x||D.rectAreaLength!==b||D.hemiLength!==M||D.numDirectionalShadows!==w||D.numPointShadows!==y||D.numSpotShadows!==T||D.numSpotMaps!==L)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=b,n.point.length=p,n.hemi.length=M,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=T+L-_,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=_,D.directionalLength=m,D.pointLength=p,D.spotLength=x,D.rectAreaLength=b,D.hemiLength=M,D.numDirectionalShadows=w,D.numPointShadows=y,D.numSpotShadows=T,D.numSpotMaps=L,n.version=Nm++)}function l(c,u){let d=0,f=0,g=0,m=0,p=0;const x=u.matrixWorldInverse;for(let b=0,M=c.length;b<M;b++){const w=c[b];if(w.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(x),d++}else if(w.isSpotLight){const y=n.spot[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(x),g++}else if(w.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(x),r.identity(),a.copy(w.matrixWorld),a.premultiply(x),r.extractRotation(a),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),m++}else if(w.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(x),f++}else if(w.isHemisphereLight){const y=n.hemi[p];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(x),p++}}}return{setup:h,setupView:l,state:n}}function cl(o,t){const e=new Bm(o,t),i=[],n=[];function s(){i.length=0,n.length=0}function a(u){i.push(u)}function r(u){n.push(u)}function h(u){e.setup(i,u)}function l(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:h,setupLightsView:l,pushLight:a,pushShadow:r}}function Um(o,t){let e=new WeakMap;function i(s,a=0){const r=e.get(s);let h;return r===void 0?(h=new cl(o,t),e.set(s,[h])):a>=r.length?(h=new cl(o,t),r.push(h)):h=r[a],h}function n(){e=new WeakMap}return{get:i,dispose:n}}class km extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gm extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hm(o,t,e){let i=new jl;const n=new Ot,s=new Ot,a=new ne,r=new km({depthPacking:Zc}),h=new Gm,l={},c=e.maxTextureSize,u={0:Ie,1:bi,2:ma},d=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:Vm,fragmentShader:Wm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new wi;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new li(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ll,this.render=function(w,y,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const L=o.getRenderTarget(),_=o.getActiveCubeFace(),A=o.getActiveMipmapLevel(),D=o.state;D.setBlending(yi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let k=0,J=w.length;k<J;k++){const R=w[k],z=R.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);const B=z.getFrameExtents();if(n.multiply(B),s.copy(z.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/B.x),n.x=s.x*B.x,z.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/B.y),n.y=s.y*B.y,z.mapSize.y=s.y)),z.map===null){const K=this.type!==$n?{minFilter:de,magFilter:de}:{};z.map=new Xi(n.x,n.y,K),z.map.texture.name=R.name+".shadowMap",z.camera.updateProjectionMatrix()}o.setRenderTarget(z.map),o.clear();const Z=z.getViewportCount();for(let K=0;K<Z;K++){const H=z.getViewport(K);a.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),D.viewport(a),z.updateMatrices(R,K),i=z.getFrustum(),M(y,T,z.camera,R,this.type)}z.isPointLightShadow!==!0&&this.type===$n&&x(z,T),z.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(L,_,A)};function x(w,y){const T=t.update(m);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xi(n.x,n.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,o.setRenderTarget(w.mapPass),o.clear(),o.renderBufferDirect(y,null,T,d,m,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,o.setRenderTarget(w.map),o.clear(),o.renderBufferDirect(y,null,T,f,m,null)}function b(w,y,T,L,_,A){let D=null;const k=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)D=k;else if(D=T.isPointLight===!0?h:r,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const J=D.uuid,R=y.uuid;let z=l[J];z===void 0&&(z={},l[J]=z);let B=z[R];B===void 0&&(B=D.clone(),z[R]=B),D=B}return D.visible=y.visible,D.wireframe=y.wireframe,A===$n?D.side=y.shadowSide!==null?y.shadowSide:y.side:D.side=y.shadowSide!==null?y.shadowSide:u[y.side],D.alphaMap=y.alphaMap,D.alphaTest=y.alphaTest,D.map=y.map,D.clipShadows=y.clipShadows,D.clippingPlanes=y.clippingPlanes,D.clipIntersection=y.clipIntersection,D.displacementMap=y.displacementMap,D.displacementScale=y.displacementScale,D.displacementBias=y.displacementBias,D.wireframeLinewidth=y.wireframeLinewidth,D.linewidth=y.linewidth,T.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(T.matrixWorld),D.nearDistance=L,D.farDistance=_),D}function M(w,y,T,L,_){if(w.visible===!1)return;if(w.layers.test(y.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===$n)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const k=t.update(w),J=w.material;if(Array.isArray(J)){const R=k.groups;for(let z=0,B=R.length;z<B;z++){const Z=R[z],K=J[Z.materialIndex];if(K&&K.visible){const H=b(w,K,L,T.near,T.far,_);o.renderBufferDirect(T,null,k,H,w,Z)}}}else if(J.visible){const R=b(w,J,L,T.near,T.far,_);o.renderBufferDirect(T,null,k,R,w,null)}}const D=w.children;for(let k=0,J=D.length;k<J;k++)M(D[k],y,T,L,_)}}function qm(o,t,e){const i=e.isWebGL2;function n(){let P=!1;const V=new ne;let tt=null;const ct=new ne(0,0,0,0);return{setMask:function(gt){tt!==gt&&!P&&(o.colorMask(gt,gt,gt,gt),tt=gt)},setLocked:function(gt){P=gt},setClear:function(gt,It,Qt,re,Ei){Ei===!0&&(gt*=re,It*=re,Qt*=re),V.set(gt,It,Qt,re),ct.equals(V)===!1&&(o.clearColor(gt,It,Qt,re),ct.copy(V))},reset:function(){P=!1,tt=null,ct.set(-1,0,0,0)}}}function s(){let P=!1,V=null,tt=null,ct=null;return{setTest:function(gt){gt?At(2929):ft(2929)},setMask:function(gt){V!==gt&&!P&&(o.depthMask(gt),V=gt)},setFunc:function(gt){if(tt!==gt){switch(gt){case yc:o.depthFunc(512);break;case Mc:o.depthFunc(519);break;case vc:o.depthFunc(513);break;case sa:o.depthFunc(515);break;case bc:o.depthFunc(514);break;case Sc:o.depthFunc(518);break;case wc:o.depthFunc(516);break;case Ec:o.depthFunc(517);break;default:o.depthFunc(515)}tt=gt}},setLocked:function(gt){P=gt},setClear:function(gt){ct!==gt&&(o.clearDepth(gt),ct=gt)},reset:function(){P=!1,V=null,tt=null,ct=null}}}function a(){let P=!1,V=null,tt=null,ct=null,gt=null,It=null,Qt=null,re=null,Ei=null;return{setTest:function(Ut){P||(Ut?At(2960):ft(2960))},setMask:function(Ut){V!==Ut&&!P&&(o.stencilMask(Ut),V=Ut)},setFunc:function(Ut,Ze,De){(tt!==Ut||ct!==Ze||gt!==De)&&(o.stencilFunc(Ut,Ze,De),tt=Ut,ct=Ze,gt=De)},setOp:function(Ut,Ze,De){(It!==Ut||Qt!==Ze||re!==De)&&(o.stencilOp(Ut,Ze,De),It=Ut,Qt=Ze,re=De)},setLocked:function(Ut){P=Ut},setClear:function(Ut){Ei!==Ut&&(o.clearStencil(Ut),Ei=Ut)},reset:function(){P=!1,V=null,tt=null,ct=null,gt=null,It=null,Qt=null,re=null,Ei=null}}}const r=new n,h=new s,l=new a,c=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,m=[],p=null,x=!1,b=null,M=null,w=null,y=null,T=null,L=null,_=null,A=!1,D=null,k=null,J=null,R=null,z=null;const B=o.getParameter(35661);let Z=!1,K=0;const H=o.getParameter(7938);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),Z=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Z=K>=2);let nt=null,Q={};const U=o.getParameter(3088),q=o.getParameter(2978),et=new ne().fromArray(U),st=new ne().fromArray(q);function ot(P,V,tt){const ct=new Uint8Array(4),gt=o.createTexture();o.bindTexture(P,gt),o.texParameteri(P,10241,9728),o.texParameteri(P,10240,9728);for(let It=0;It<tt;It++)o.texImage2D(V+It,0,6408,1,1,0,6408,5121,ct);return gt}const X={};X[3553]=ot(3553,3553,1),X[34067]=ot(34067,34069,6),r.setClear(0,0,0,1),h.setClear(1),l.setClear(0),At(2929),h.setFunc(sa),kt(!1),me(to),At(2884),Jt(yi);function At(P){d[P]!==!0&&(o.enable(P),d[P]=!0)}function ft(P){d[P]!==!1&&(o.disable(P),d[P]=!1)}function yt(P,V){return f[P]!==V?(o.bindFramebuffer(P,V),f[P]=V,i&&(P===36009&&(f[36160]=V),P===36160&&(f[36009]=V)),!0):!1}function dt(P,V){let tt=m,ct=!1;if(P)if(tt=g.get(V),tt===void 0&&(tt=[],g.set(V,tt)),P.isWebGLMultipleRenderTargets){const gt=P.texture;if(tt.length!==gt.length||tt[0]!==36064){for(let It=0,Qt=gt.length;It<Qt;It++)tt[It]=36064+It;tt.length=gt.length,ct=!0}}else tt[0]!==36064&&(tt[0]=36064,ct=!0);else tt[0]!==1029&&(tt[0]=1029,ct=!0);ct&&(e.isWebGL2?o.drawBuffers(tt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(tt))}function zt(P){return p!==P?(o.useProgram(P),p=P,!0):!1}const St={[vn]:32774,[lc]:32778,[hc]:32779};if(i)St[so]=32775,St[ro]=32776;else{const P=t.get("EXT_blend_minmax");P!==null&&(St[so]=P.MIN_EXT,St[ro]=P.MAX_EXT)}const Mt={[cc]:0,[uc]:1,[dc]:768,[Dl]:770,[_c]:776,[gc]:774,[pc]:772,[fc]:769,[Pl]:771,[xc]:775,[mc]:773};function Jt(P,V,tt,ct,gt,It,Qt,re){if(P===yi){x===!0&&(ft(3042),x=!1);return}if(x===!1&&(At(3042),x=!0),P!==oc){if(P!==b||re!==A){if((M!==vn||T!==vn)&&(o.blendEquation(32774),M=vn,T=vn),re)switch(P){case En:o.blendFuncSeparate(1,771,1,771);break;case eo:o.blendFunc(1,1);break;case io:o.blendFuncSeparate(0,769,0,1);break;case no:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case En:o.blendFuncSeparate(770,771,1,771);break;case eo:o.blendFunc(770,1);break;case io:o.blendFuncSeparate(0,769,0,1);break;case no:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,y=null,L=null,_=null,b=P,A=re}return}gt=gt||V,It=It||tt,Qt=Qt||ct,(V!==M||gt!==T)&&(o.blendEquationSeparate(St[V],St[gt]),M=V,T=gt),(tt!==w||ct!==y||It!==L||Qt!==_)&&(o.blendFuncSeparate(Mt[tt],Mt[ct],Mt[It],Mt[Qt]),w=tt,y=ct,L=It,_=Qt),b=P,A=!1}function $t(P,V){P.side===ma?ft(2884):At(2884);let tt=P.side===Ie;V&&(tt=!tt),kt(tt),P.blending===En&&P.transparent===!1?Jt(yi):Jt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),h.setFunc(P.depthFunc),h.setTest(P.depthTest),h.setMask(P.depthWrite),r.setMask(P.colorWrite);const ct=P.stencilWrite;l.setTest(ct),ct&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ft(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?At(32926):ft(32926)}function kt(P){D!==P&&(P?o.frontFace(2304):o.frontFace(2305),D=P)}function me(P){P!==sc?(At(2884),P!==k&&(P===to?o.cullFace(1029):P===rc?o.cullFace(1028):o.cullFace(1032))):ft(2884),k=P}function Gt(P){P!==J&&(Z&&o.lineWidth(P),J=P)}function Ft(P,V,tt){P?(At(32823),(R!==V||z!==tt)&&(o.polygonOffset(V,tt),R=V,z=tt)):ft(32823)}function ye(P){P?At(3089):ft(3089)}function Me(P){P===void 0&&(P=33984+B-1),nt!==P&&(o.activeTexture(P),nt=P)}function E(P,V,tt){tt===void 0&&(nt===null?tt=33984+B-1:tt=nt);let ct=Q[tt];ct===void 0&&(ct={type:void 0,texture:void 0},Q[tt]=ct),(ct.type!==P||ct.texture!==V)&&(nt!==tt&&(o.activeTexture(tt),nt=tt),o.bindTexture(P,V||X[P]),ct.type=P,ct.texture=V)}function v(){const P=Q[nt];P!==void 0&&P.type!==void 0&&(o.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function G(){try{o.compressedTexImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{o.compressedTexImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{o.texSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(){try{o.texSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function C(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function O(){try{o.texStorage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{o.texStorage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{o.texImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{o.texImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(P){et.equals(P)===!1&&(o.scissor(P.x,P.y,P.z,P.w),et.copy(P))}function mt(P){st.equals(P)===!1&&(o.viewport(P.x,P.y,P.z,P.w),st.copy(P))}function bt(P,V){let tt=u.get(V);tt===void 0&&(tt=new WeakMap,u.set(V,tt));let ct=tt.get(P);ct===void 0&&(ct=o.getUniformBlockIndex(V,P.name),tt.set(P,ct))}function Ct(P,V){const ct=u.get(V).get(P);c.get(V)!==ct&&(o.uniformBlockBinding(V,ct,P.__bindingPointIndex),c.set(V,ct))}function Kt(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),i===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},nt=null,Q={},f={},g=new WeakMap,m=[],p=null,x=!1,b=null,M=null,w=null,y=null,T=null,L=null,_=null,A=!1,D=null,k=null,J=null,R=null,z=null,et.set(0,0,o.canvas.width,o.canvas.height),st.set(0,0,o.canvas.width,o.canvas.height),r.reset(),h.reset(),l.reset()}return{buffers:{color:r,depth:h,stencil:l},enable:At,disable:ft,bindFramebuffer:yt,drawBuffers:dt,useProgram:zt,setBlending:Jt,setMaterial:$t,setFlipSided:kt,setCullFace:me,setLineWidth:Gt,setPolygonOffset:Ft,setScissorTest:ye,activeTexture:Me,bindTexture:E,unbindTexture:v,compressedTexImage2D:G,compressedTexImage3D:it,texImage2D:pt,texImage3D:ut,updateUBOMapping:bt,uniformBlockBinding:Ct,texStorage2D:O,texStorage3D:ht,texSubImage2D:rt,texSubImage3D:lt,compressedTexSubImage2D:C,compressedTexSubImage3D:$,scissor:xt,viewport:mt,reset:Kt}}function Xm(o,t,e,i,n,s,a){const r=n.isWebGL2,h=n.maxTextures,l=n.maxCubemapSize,c=n.maxTextureSize,u=n.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,v){return x?new OffscreenCanvas(E,v):Kn("canvas")}function M(E,v,G,it){let rt=1;if((E.width>it||E.height>it)&&(rt=it/Math.max(E.width,E.height)),rt<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const lt=v?ha:Math.floor,C=lt(rt*E.width),$=lt(rt*E.height);m===void 0&&(m=b(C,$));const O=G?b(C,$):m;return O.width=C,O.height=$,O.getContext("2d").drawImage(E,0,0,C,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+C+"x"+$+")."),O}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function w(E){return Ro(E.width)&&Ro(E.height)}function y(E){return r?!1:E.wrapS!==We||E.wrapT!==We||E.minFilter!==de&&E.minFilter!==ge}function T(E,v){return E.generateMipmaps&&v&&E.minFilter!==de&&E.minFilter!==ge}function L(E){o.generateMipmap(E)}function _(E,v,G,it,rt=!1){if(r===!1)return v;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let lt=v;return v===6403&&(G===5126&&(lt=33326),G===5131&&(lt=33325),G===5121&&(lt=33321)),v===33319&&(G===5126&&(lt=33328),G===5131&&(lt=33327),G===5121&&(lt=33323)),v===6408&&(G===5126&&(lt=34836),G===5131&&(lt=34842),G===5121&&(lt=it===Bt&&rt===!1?35907:32856),G===32819&&(lt=32854),G===32820&&(lt=32855)),(lt===33325||lt===33326||lt===33327||lt===33328||lt===34842||lt===34836)&&t.get("EXT_color_buffer_float"),lt}function A(E,v,G){return T(E,G)===!0||E.isFramebufferTexture&&E.minFilter!==de&&E.minFilter!==ge?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function D(E){return E===de||E===ao||E===wr?9728:9729}function k(E){const v=E.target;v.removeEventListener("dispose",k),R(v),v.isVideoTexture&&g.delete(v)}function J(E){const v=E.target;v.removeEventListener("dispose",J),B(v)}function R(E){const v=i.get(E);if(v.__webglInit===void 0)return;const G=E.source,it=p.get(G);if(it){const rt=it[v.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&z(E),Object.keys(it).length===0&&p.delete(G)}i.remove(E)}function z(E){const v=i.get(E);o.deleteTexture(v.__webglTexture);const G=E.source,it=p.get(G);delete it[v.__cacheKey],a.memory.textures--}function B(E){const v=E.texture,G=i.get(E),it=i.get(v);if(it.__webglTexture!==void 0&&(o.deleteTexture(it.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++)o.deleteFramebuffer(G.__webglFramebuffer[rt]),G.__webglDepthbuffer&&o.deleteRenderbuffer(G.__webglDepthbuffer[rt]);else{if(o.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&o.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&o.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let rt=0;rt<G.__webglColorRenderbuffer.length;rt++)G.__webglColorRenderbuffer[rt]&&o.deleteRenderbuffer(G.__webglColorRenderbuffer[rt]);G.__webglDepthRenderbuffer&&o.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let rt=0,lt=v.length;rt<lt;rt++){const C=i.get(v[rt]);C.__webglTexture&&(o.deleteTexture(C.__webglTexture),a.memory.textures--),i.remove(v[rt])}i.remove(v),i.remove(E)}let Z=0;function K(){Z=0}function H(){const E=Z;return E>=h&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+h),Z+=1,E}function nt(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.encoding),v.join()}function Q(E,v){const G=i.get(E);if(E.isVideoTexture&&ye(E),E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){const it=E.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(G,E,v);return}}e.bindTexture(3553,G.__webglTexture,33984+v)}function U(E,v){const G=i.get(E);if(E.version>0&&G.__version!==E.version){ft(G,E,v);return}e.bindTexture(35866,G.__webglTexture,33984+v)}function q(E,v){const G=i.get(E);if(E.version>0&&G.__version!==E.version){ft(G,E,v);return}e.bindTexture(32879,G.__webglTexture,33984+v)}function et(E,v){const G=i.get(E);if(E.version>0&&G.__version!==E.version){yt(G,E,v);return}e.bindTexture(34067,G.__webglTexture,33984+v)}const st={[aa]:10497,[We]:33071,[oa]:33648},ot={[de]:9728,[ao]:9984,[wr]:9986,[ge]:9729,[zc]:9985,[Yn]:9987};function X(E,v,G){if(G?(o.texParameteri(E,10242,st[v.wrapS]),o.texParameteri(E,10243,st[v.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,st[v.wrapR]),o.texParameteri(E,10240,ot[v.magFilter]),o.texParameteri(E,10241,ot[v.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(v.wrapS!==We||v.wrapT!==We)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,D(v.magFilter)),o.texParameteri(E,10241,D(v.minFilter)),v.minFilter!==de&&v.minFilter!==ge&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===de||v.minFilter!==wr&&v.minFilter!==Yn||v.type===ki&&t.has("OES_texture_float_linear")===!1||r===!1&&v.type===Zn&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(o.texParameterf(E,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function At(E,v){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",k));const it=v.source;let rt=p.get(it);rt===void 0&&(rt={},p.set(it,rt));const lt=nt(v);if(lt!==E.__cacheKey){rt[lt]===void 0&&(rt[lt]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,G=!0),rt[lt].usedTimes++;const C=rt[E.__cacheKey];C!==void 0&&(rt[E.__cacheKey].usedTimes--,C.usedTimes===0&&z(v)),E.__cacheKey=lt,E.__webglTexture=rt[lt].texture}return G}function ft(E,v,G){let it=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(it=35866),v.isData3DTexture&&(it=32879);const rt=At(E,v),lt=v.source;e.bindTexture(it,E.__webglTexture,33984+G);const C=i.get(lt);if(lt.version!==C.__version||rt===!0){e.activeTexture(33984+G),o.pixelStorei(37440,v.flipY),o.pixelStorei(37441,v.premultiplyAlpha),o.pixelStorei(3317,v.unpackAlignment),o.pixelStorei(37443,0);const $=y(v)&&w(v.image)===!1;let O=M(v.image,$,!1,c);O=Me(v,O);const ht=w(O)||r,pt=s.convert(v.format,v.encoding);let ut=s.convert(v.type),xt=_(v.internalFormat,pt,ut,v.encoding,v.isVideoTexture);X(it,v,ht);let mt;const bt=v.mipmaps,Ct=r&&v.isVideoTexture!==!0,Kt=C.__version===void 0||rt===!0,P=A(v,O,ht);if(v.isDepthTexture)xt=6402,r?v.type===ki?xt=36012:v.type===Ui?xt=33190:v.type===Tn?xt=35056:xt=33189:v.type===ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Gi&&xt===6402&&v.type!==Fl&&v.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Ui,ut=s.convert(v.type)),v.format===Dn&&xt===6402&&(xt=34041,v.type!==Tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Tn,ut=s.convert(v.type))),Kt&&(Ct?e.texStorage2D(3553,1,xt,O.width,O.height):e.texImage2D(3553,0,xt,O.width,O.height,0,pt,ut,null));else if(v.isDataTexture)if(bt.length>0&&ht){Ct&&Kt&&e.texStorage2D(3553,P,xt,bt[0].width,bt[0].height);for(let V=0,tt=bt.length;V<tt;V++)mt=bt[V],Ct?e.texSubImage2D(3553,V,0,0,mt.width,mt.height,pt,ut,mt.data):e.texImage2D(3553,V,xt,mt.width,mt.height,0,pt,ut,mt.data);v.generateMipmaps=!1}else Ct?(Kt&&e.texStorage2D(3553,P,xt,O.width,O.height),e.texSubImage2D(3553,0,0,0,O.width,O.height,pt,ut,O.data)):e.texImage2D(3553,0,xt,O.width,O.height,0,pt,ut,O.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ct&&Kt&&e.texStorage3D(35866,P,xt,bt[0].width,bt[0].height,O.depth);for(let V=0,tt=bt.length;V<tt;V++)mt=bt[V],v.format!==He?pt!==null?Ct?e.compressedTexSubImage3D(35866,V,0,0,0,mt.width,mt.height,O.depth,pt,mt.data,0,0):e.compressedTexImage3D(35866,V,xt,mt.width,mt.height,O.depth,0,mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?e.texSubImage3D(35866,V,0,0,0,mt.width,mt.height,O.depth,pt,ut,mt.data):e.texImage3D(35866,V,xt,mt.width,mt.height,O.depth,0,pt,ut,mt.data)}else{Ct&&Kt&&e.texStorage2D(3553,P,xt,bt[0].width,bt[0].height);for(let V=0,tt=bt.length;V<tt;V++)mt=bt[V],v.format!==He?pt!==null?Ct?e.compressedTexSubImage2D(3553,V,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(3553,V,xt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?e.texSubImage2D(3553,V,0,0,mt.width,mt.height,pt,ut,mt.data):e.texImage2D(3553,V,xt,mt.width,mt.height,0,pt,ut,mt.data)}else if(v.isDataArrayTexture)Ct?(Kt&&e.texStorage3D(35866,P,xt,O.width,O.height,O.depth),e.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,pt,ut,O.data)):e.texImage3D(35866,0,xt,O.width,O.height,O.depth,0,pt,ut,O.data);else if(v.isData3DTexture)Ct?(Kt&&e.texStorage3D(32879,P,xt,O.width,O.height,O.depth),e.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,pt,ut,O.data)):e.texImage3D(32879,0,xt,O.width,O.height,O.depth,0,pt,ut,O.data);else if(v.isFramebufferTexture){if(Kt)if(Ct)e.texStorage2D(3553,P,xt,O.width,O.height);else{let V=O.width,tt=O.height;for(let ct=0;ct<P;ct++)e.texImage2D(3553,ct,xt,V,tt,0,pt,ut,null),V>>=1,tt>>=1}}else if(bt.length>0&&ht){Ct&&Kt&&e.texStorage2D(3553,P,xt,bt[0].width,bt[0].height);for(let V=0,tt=bt.length;V<tt;V++)mt=bt[V],Ct?e.texSubImage2D(3553,V,0,0,pt,ut,mt):e.texImage2D(3553,V,xt,pt,ut,mt);v.generateMipmaps=!1}else Ct?(Kt&&e.texStorage2D(3553,P,xt,O.width,O.height),e.texSubImage2D(3553,0,0,0,pt,ut,O)):e.texImage2D(3553,0,xt,pt,ut,O);T(v,ht)&&L(it),C.__version=lt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function yt(E,v,G){if(v.image.length!==6)return;const it=At(E,v),rt=v.source;e.bindTexture(34067,E.__webglTexture,33984+G);const lt=i.get(rt);if(rt.version!==lt.__version||it===!0){e.activeTexture(33984+G),o.pixelStorei(37440,v.flipY),o.pixelStorei(37441,v.premultiplyAlpha),o.pixelStorei(3317,v.unpackAlignment),o.pixelStorei(37443,0);const C=v.isCompressedTexture||v.image[0].isCompressedTexture,$=v.image[0]&&v.image[0].isDataTexture,O=[];for(let V=0;V<6;V++)!C&&!$?O[V]=M(v.image[V],!1,!0,l):O[V]=$?v.image[V].image:v.image[V],O[V]=Me(v,O[V]);const ht=O[0],pt=w(ht)||r,ut=s.convert(v.format,v.encoding),xt=s.convert(v.type),mt=_(v.internalFormat,ut,xt,v.encoding),bt=r&&v.isVideoTexture!==!0,Ct=lt.__version===void 0||it===!0;let Kt=A(v,ht,pt);X(34067,v,pt);let P;if(C){bt&&Ct&&e.texStorage2D(34067,Kt,mt,ht.width,ht.height);for(let V=0;V<6;V++){P=O[V].mipmaps;for(let tt=0;tt<P.length;tt++){const ct=P[tt];v.format!==He?ut!==null?bt?e.compressedTexSubImage2D(34069+V,tt,0,0,ct.width,ct.height,ut,ct.data):e.compressedTexImage2D(34069+V,tt,mt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):bt?e.texSubImage2D(34069+V,tt,0,0,ct.width,ct.height,ut,xt,ct.data):e.texImage2D(34069+V,tt,mt,ct.width,ct.height,0,ut,xt,ct.data)}}}else{P=v.mipmaps,bt&&Ct&&(P.length>0&&Kt++,e.texStorage2D(34067,Kt,mt,O[0].width,O[0].height));for(let V=0;V<6;V++)if($){bt?e.texSubImage2D(34069+V,0,0,0,O[V].width,O[V].height,ut,xt,O[V].data):e.texImage2D(34069+V,0,mt,O[V].width,O[V].height,0,ut,xt,O[V].data);for(let tt=0;tt<P.length;tt++){const gt=P[tt].image[V].image;bt?e.texSubImage2D(34069+V,tt+1,0,0,gt.width,gt.height,ut,xt,gt.data):e.texImage2D(34069+V,tt+1,mt,gt.width,gt.height,0,ut,xt,gt.data)}}else{bt?e.texSubImage2D(34069+V,0,0,0,ut,xt,O[V]):e.texImage2D(34069+V,0,mt,ut,xt,O[V]);for(let tt=0;tt<P.length;tt++){const ct=P[tt];bt?e.texSubImage2D(34069+V,tt+1,0,0,ut,xt,ct.image[V]):e.texImage2D(34069+V,tt+1,mt,ut,xt,ct.image[V])}}}T(v,pt)&&L(34067),lt.__version=rt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function dt(E,v,G,it,rt){const lt=s.convert(G.format,G.encoding),C=s.convert(G.type),$=_(G.internalFormat,lt,C,G.encoding);i.get(v).__hasExternalTextures||(rt===32879||rt===35866?e.texImage3D(rt,0,$,v.width,v.height,v.depth,0,lt,C,null):e.texImage2D(rt,0,$,v.width,v.height,0,lt,C,null)),e.bindFramebuffer(36160,E),Ft(v)?d.framebufferTexture2DMultisampleEXT(36160,it,rt,i.get(G).__webglTexture,0,Gt(v)):(rt===3553||rt>=34069&&rt<=34074)&&o.framebufferTexture2D(36160,it,rt,i.get(G).__webglTexture,0),e.bindFramebuffer(36160,null)}function zt(E,v,G){if(o.bindRenderbuffer(36161,E),v.depthBuffer&&!v.stencilBuffer){let it=33189;if(G||Ft(v)){const rt=v.depthTexture;rt&&rt.isDepthTexture&&(rt.type===ki?it=36012:rt.type===Ui&&(it=33190));const lt=Gt(v);Ft(v)?d.renderbufferStorageMultisampleEXT(36161,lt,it,v.width,v.height):o.renderbufferStorageMultisample(36161,lt,it,v.width,v.height)}else o.renderbufferStorage(36161,it,v.width,v.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(v.depthBuffer&&v.stencilBuffer){const it=Gt(v);G&&Ft(v)===!1?o.renderbufferStorageMultisample(36161,it,35056,v.width,v.height):Ft(v)?d.renderbufferStorageMultisampleEXT(36161,it,35056,v.width,v.height):o.renderbufferStorage(36161,34041,v.width,v.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{const it=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let rt=0;rt<it.length;rt++){const lt=it[rt],C=s.convert(lt.format,lt.encoding),$=s.convert(lt.type),O=_(lt.internalFormat,C,$,lt.encoding),ht=Gt(v);G&&Ft(v)===!1?o.renderbufferStorageMultisample(36161,ht,O,v.width,v.height):Ft(v)?d.renderbufferStorageMultisampleEXT(36161,ht,O,v.width,v.height):o.renderbufferStorage(36161,O,v.width,v.height)}}o.bindRenderbuffer(36161,null)}function St(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q(v.depthTexture,0);const it=i.get(v.depthTexture).__webglTexture,rt=Gt(v);if(v.depthTexture.format===Gi)Ft(v)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,it,0,rt):o.framebufferTexture2D(36160,36096,3553,it,0);else if(v.depthTexture.format===Dn)Ft(v)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,it,0,rt):o.framebufferTexture2D(36160,33306,3553,it,0);else throw new Error("Unknown depthTexture format")}function Mt(E){const v=i.get(E),G=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");St(v.__webglFramebuffer,E)}else if(G){v.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(36160,v.__webglFramebuffer[it]),v.__webglDepthbuffer[it]=o.createRenderbuffer(),zt(v.__webglDepthbuffer[it],E,!1)}else e.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=o.createRenderbuffer(),zt(v.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function Jt(E,v,G){const it=i.get(E);v!==void 0&&dt(it.__webglFramebuffer,E,E.texture,36064,3553),G!==void 0&&Mt(E)}function $t(E){const v=E.texture,G=i.get(E),it=i.get(v);E.addEventListener("dispose",J),E.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=o.createTexture()),it.__version=v.version,a.memory.textures++);const rt=E.isWebGLCubeRenderTarget===!0,lt=E.isWebGLMultipleRenderTargets===!0,C=w(E)||r;if(rt){G.__webglFramebuffer=[];for(let $=0;$<6;$++)G.__webglFramebuffer[$]=o.createFramebuffer()}else{if(G.__webglFramebuffer=o.createFramebuffer(),lt)if(n.drawBuffers){const $=E.texture;for(let O=0,ht=$.length;O<ht;O++){const pt=i.get($[O]);pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&E.samples>0&&Ft(E)===!1){const $=lt?v:[v];G.__webglMultisampledFramebuffer=o.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let O=0;O<$.length;O++){const ht=$[O];G.__webglColorRenderbuffer[O]=o.createRenderbuffer(),o.bindRenderbuffer(36161,G.__webglColorRenderbuffer[O]);const pt=s.convert(ht.format,ht.encoding),ut=s.convert(ht.type),xt=_(ht.internalFormat,pt,ut,ht.encoding,E.isXRRenderTarget===!0),mt=Gt(E);o.renderbufferStorageMultisample(36161,mt,xt,E.width,E.height),o.framebufferRenderbuffer(36160,36064+O,36161,G.__webglColorRenderbuffer[O])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=o.createRenderbuffer(),zt(G.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(rt){e.bindTexture(34067,it.__webglTexture),X(34067,v,C);for(let $=0;$<6;$++)dt(G.__webglFramebuffer[$],E,v,36064,34069+$);T(v,C)&&L(34067),e.unbindTexture()}else if(lt){const $=E.texture;for(let O=0,ht=$.length;O<ht;O++){const pt=$[O],ut=i.get(pt);e.bindTexture(3553,ut.__webglTexture),X(3553,pt,C),dt(G.__webglFramebuffer,E,pt,36064+O,3553),T(pt,C)&&L(3553)}e.unbindTexture()}else{let $=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(r?$=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture($,it.__webglTexture),X($,v,C),dt(G.__webglFramebuffer,E,v,36064,$),T(v,C)&&L($),e.unbindTexture()}E.depthBuffer&&Mt(E)}function kt(E){const v=w(E)||r,G=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let it=0,rt=G.length;it<rt;it++){const lt=G[it];if(T(lt,v)){const C=E.isWebGLCubeRenderTarget?34067:3553,$=i.get(lt).__webglTexture;e.bindTexture(C,$),L(C),e.unbindTexture()}}}function me(E){if(r&&E.samples>0&&Ft(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],G=E.width,it=E.height;let rt=16384;const lt=[],C=E.stencilBuffer?33306:36096,$=i.get(E),O=E.isWebGLMultipleRenderTargets===!0;if(O)for(let ht=0;ht<v.length;ht++)e.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ht,36161,null),e.bindFramebuffer(36160,$.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ht,3553,null,0);e.bindFramebuffer(36008,$.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,$.__webglFramebuffer);for(let ht=0;ht<v.length;ht++){lt.push(36064+ht),E.depthBuffer&&lt.push(C);const pt=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(pt===!1&&(E.depthBuffer&&(rt|=256),E.stencilBuffer&&(rt|=1024)),O&&o.framebufferRenderbuffer(36008,36064,36161,$.__webglColorRenderbuffer[ht]),pt===!0&&(o.invalidateFramebuffer(36008,[C]),o.invalidateFramebuffer(36009,[C])),O){const ut=i.get(v[ht]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ut,0)}o.blitFramebuffer(0,0,G,it,0,0,G,it,rt,9728),f&&o.invalidateFramebuffer(36008,lt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),O)for(let ht=0;ht<v.length;ht++){e.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ht,36161,$.__webglColorRenderbuffer[ht]);const pt=i.get(v[ht]).__webglTexture;e.bindFramebuffer(36160,$.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ht,3553,pt,0)}e.bindFramebuffer(36009,$.__webglMultisampledFramebuffer)}}function Gt(E){return Math.min(u,E.samples)}function Ft(E){const v=i.get(E);return r&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ye(E){const v=a.render.frame;g.get(E)!==v&&(g.set(E,v),E.update())}function Me(E,v){const G=E.encoding,it=E.format,rt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===la||G!==qi&&(G===Bt?r===!1?t.has("EXT_sRGB")===!0&&it===He?(E.format=la,E.minFilter=ge,E.generateMipmaps=!1):v=Bl.sRGBToLinear(v):(it!==He||rt!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),v}this.allocateTextureUnit=H,this.resetTextureUnits=K,this.setTexture2D=Q,this.setTexture2DArray=U,this.setTexture3D=q,this.setTextureCube=et,this.rebindTextures=Jt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Ft}function $m(o,t,e){const i=e.isWebGL2;function n(s,a=null){let r;if(s===Hi)return 5121;if(s===Oc)return 32819;if(s===Bc)return 32820;if(s===Fc)return 5120;if(s===Ic)return 5122;if(s===Fl)return 5123;if(s===Nc)return 5124;if(s===Ui)return 5125;if(s===ki)return 5126;if(s===Zn)return i?5131:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===Uc)return 6406;if(s===He)return 6408;if(s===Gc)return 6409;if(s===Vc)return 6410;if(s===Gi)return 6402;if(s===Dn)return 34041;if(s===kc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===la)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===Wc)return 6403;if(s===Hc)return 36244;if(s===qc)return 33319;if(s===Xc)return 33320;if(s===$c)return 36249;if(s===Er||s===Tr||s===Ar||s===Cr)if(a===Bt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===oo||s===lo||s===ho||s===co)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jc)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===uo||s===fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===uo)return a===Bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===fo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===po||s===mo||s===go||s===xo||s===_o||s===yo||s===Mo||s===vo||s===bo||s===So||s===wo||s===Eo||s===To||s===Ao)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===po)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===go)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_o)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===So)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Eo)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===To)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ao)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Co)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===Co)return a===Bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Tn?i?34042:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:n}}class jm extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Vs extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ym={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const r=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const m of t.hand.values()){const p=e.getJointPose(m,i),x=this._getHandJoint(l,m);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));r!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Ym)))}return r!==null&&(r.visible=n!==null),h!==null&&(h.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Vs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Zm extends _e{constructor(t,e,i,n,s,a,r,h,l,c){if(c=c!==void 0?c:Gi,c!==Gi&&c!==Dn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Gi&&(i=Ui),i===void 0&&c===Dn&&(i=Tn),super(null,n,s,a,r,h,c,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:de,this.minFilter=h!==void 0?h:de,this.flipY=!1,this.generateMipmaps=!1}}class Jm extends Rn{constructor(t,e){super();const i=this;let n=null,s=1,a=null,r="local-floor",h=null,l=null,c=null,u=null,d=null,f=null;const g=e.getContextAttributes();let m=null,p=null;const x=[],b=[],M=new Set,w=new Map,y=new Fe;y.layers.enable(1),y.viewport=new ne;const T=new Fe;T.layers.enable(2),T.viewport=new ne;const L=[y,T],_=new jm;_.layers.enable(1),_.layers.enable(2);let A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let q=x[U];return q===void 0&&(q=new ea,x[U]=q),q.getTargetRaySpace()},this.getControllerGrip=function(U){let q=x[U];return q===void 0&&(q=new ea,x[U]=q),q.getGripSpace()},this.getHand=function(U){let q=x[U];return q===void 0&&(q=new ea,x[U]=q),q.getHandSpace()};function k(U){const q=b.indexOf(U.inputSource);if(q===-1)return;const et=x[q];et!==void 0&&et.dispatchEvent({type:U.type,data:U.inputSource})}function J(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",J),n.removeEventListener("inputsourceschange",R);for(let U=0;U<x.length;U++){const q=b[U];q!==null&&(b[U]=null,x[U].disconnect(q))}A=null,D=null,t.setRenderTarget(m),d=null,u=null,c=null,n=null,p=null,Q.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){r=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(U){h=U},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(U){if(n=U,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",J),n.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await e.makeXRCompatible(),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const q={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,e,q),n.updateRenderState({baseLayer:d}),p=new Xi(d.framebufferWidth,d.framebufferHeight,{format:He,type:Hi,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let q=null,et=null,st=null;g.depth&&(st=g.stencil?35056:33190,q=g.stencil?Dn:Gi,et=g.stencil?Tn:Ui);const ot={colorFormat:32856,depthFormat:st,scaleFactor:s};c=new XRWebGLBinding(n,e),u=c.createProjectionLayer(ot),n.updateRenderState({layers:[u]}),p=new Xi(u.textureWidth,u.textureHeight,{format:He,type:Hi,depthTexture:new Zm(u.textureWidth,u.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const X=t.properties.get(p);X.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),h=null,a=await n.requestReferenceSpace(r),Q.setContext(n),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function R(U){for(let q=0;q<U.removed.length;q++){const et=U.removed[q],st=b.indexOf(et);st>=0&&(b[st]=null,x[st].disconnect(et))}for(let q=0;q<U.added.length;q++){const et=U.added[q];let st=b.indexOf(et);if(st===-1){for(let X=0;X<x.length;X++)if(X>=b.length){b.push(et),st=X;break}else if(b[X]===null){b[X]=et,st=X;break}if(st===-1)break}const ot=x[st];ot&&ot.connect(et)}}const z=new N,B=new N;function Z(U,q,et){z.setFromMatrixPosition(q.matrixWorld),B.setFromMatrixPosition(et.matrixWorld);const st=z.distanceTo(B),ot=q.projectionMatrix.elements,X=et.projectionMatrix.elements,At=ot[14]/(ot[10]-1),ft=ot[14]/(ot[10]+1),yt=(ot[9]+1)/ot[5],dt=(ot[9]-1)/ot[5],zt=(ot[8]-1)/ot[0],St=(X[8]+1)/X[0],Mt=At*zt,Jt=At*St,$t=st/(-zt+St),kt=$t*-zt;q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(kt),U.translateZ($t),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const me=At+$t,Gt=ft+$t,Ft=Mt-kt,ye=Jt+(st-kt),Me=yt*ft/Gt*me,E=dt*ft/Gt*me;U.projectionMatrix.makePerspective(Ft,ye,Me,E,me,Gt)}function K(U,q){q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(n===null)return;_.near=T.near=y.near=U.near,_.far=T.far=y.far=U.far,(A!==_.near||D!==_.far)&&(n.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,D=_.far);const q=U.parent,et=_.cameras;K(_,q);for(let ot=0;ot<et.length;ot++)K(et[ot],q);_.matrixWorld.decompose(_.position,_.quaternion,_.scale),U.matrix.copy(_.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const st=U.children;for(let ot=0,X=st.length;ot<X;ot++)st[ot].updateMatrixWorld(!0);et.length===2?Z(_,y,T):_.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return _},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(U){u!==null&&(u.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)},this.getPlanes=function(){return M};let H=null;function nt(U,q){if(l=q.getViewerPose(h||a),f=q,l!==null){const et=l.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let st=!1;et.length!==_.cameras.length&&(_.cameras.length=0,st=!0);for(let ot=0;ot<et.length;ot++){const X=et[ot];let At=null;if(d!==null)At=d.getViewport(X);else{const yt=c.getViewSubImage(u,X);At=yt.viewport,ot===0&&(t.setRenderTargetTextures(p,yt.colorTexture,u.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(p))}let ft=L[ot];ft===void 0&&(ft=new Fe,ft.layers.enable(ot),ft.viewport=new ne,L[ot]=ft),ft.matrix.fromArray(X.transform.matrix),ft.projectionMatrix.fromArray(X.projectionMatrix),ft.viewport.set(At.x,At.y,At.width,At.height),ot===0&&_.matrix.copy(ft.matrix),st===!0&&_.cameras.push(ft)}}for(let et=0;et<x.length;et++){const st=b[et],ot=x[et];st!==null&&ot!==void 0&&ot.update(st,q,h||a)}if(H&&H(U,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let et=null;for(const st of M)q.detectedPlanes.has(st)||(et===null&&(et=[]),et.push(st));if(et!==null)for(const st of et)M.delete(st),w.delete(st),i.dispatchEvent({type:"planeremoved",data:st});for(const st of q.detectedPlanes)if(!M.has(st))M.add(st),w.set(st,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:st});else{const ot=w.get(st);st.lastChangedTime>ot&&(w.set(st,st.lastChangedTime),i.dispatchEvent({type:"planechanged",data:st}))}}f=null}const Q=new Yl;Q.setAnimationLoop(nt),this.setAnimationLoop=function(U){H=U},this.dispose=function(){}}}function Km(o,t){function e(m,p){p.color.getRGB(m.fogColor.value,ql(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(m,p):p.isMeshToonMaterial?(n(m,p),c(m,p)):p.isMeshPhongMaterial?(n(m,p),l(m,p)):p.isMeshStandardMaterial?(n(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(n(m,p),f(m,p)):p.isMeshDepthMaterial?n(m,p):p.isMeshDistanceMaterial?(n(m,p),g(m,p)):p.isMeshNormalMaterial?n(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?r(m,p,x,b):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Ie&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Ie&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const w=o.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*w}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix));let M;p.aoMap?M=p.aoMap:p.lightMap&&(M=p.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uv2Transform.value.copy(M.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function r(m,p,x,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=b*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M;p.map?M=p.map:p.alphaMap&&(M=p.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix))}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ie&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function Qm(o,t,e,i){let n={},s={},a=[];const r=e.isWebGL2?o.getParameter(35375):0;function h(b,M){const w=M.program;i.uniformBlockBinding(b,w)}function l(b,M){let w=n[b.id];w===void 0&&(g(b),w=c(b),n[b.id]=w,b.addEventListener("dispose",p));const y=M.program;i.updateUBOMapping(b,y);const T=t.render.frame;s[b.id]!==T&&(d(b),s[b.id]=T)}function c(b){const M=u();b.__bindingPointIndex=M;const w=o.createBuffer(),y=b.__size,T=b.usage;return o.bindBuffer(35345,w),o.bufferData(35345,y,T),o.bindBuffer(35345,null),o.bindBufferBase(35345,M,w),w}function u(){for(let b=0;b<r;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=n[b.id],w=b.uniforms,y=b.__cache;o.bindBuffer(35345,M);for(let T=0,L=w.length;T<L;T++){const _=w[T];if(f(_,T,y)===!0){const A=_.__offset,D=Array.isArray(_.value)?_.value:[_.value];let k=0;for(let J=0;J<D.length;J++){const R=D[J],z=m(R);typeof R=="number"?(_.__data[0]=R,o.bufferSubData(35345,A+k,_.__data)):R.isMatrix3?(_.__data[0]=R.elements[0],_.__data[1]=R.elements[1],_.__data[2]=R.elements[2],_.__data[3]=R.elements[0],_.__data[4]=R.elements[3],_.__data[5]=R.elements[4],_.__data[6]=R.elements[5],_.__data[7]=R.elements[0],_.__data[8]=R.elements[6],_.__data[9]=R.elements[7],_.__data[10]=R.elements[8],_.__data[11]=R.elements[0]):(R.toArray(_.__data,k),k+=z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,A,_.__data)}}o.bindBuffer(35345,null)}function f(b,M,w){const y=b.value;if(w[M]===void 0){if(typeof y=="number")w[M]=y;else{const T=Array.isArray(y)?y:[y],L=[];for(let _=0;_<T.length;_++)L.push(T[_].clone());w[M]=L}return!0}else if(typeof y=="number"){if(w[M]!==y)return w[M]=y,!0}else{const T=Array.isArray(w[M])?w[M]:[w[M]],L=Array.isArray(y)?y:[y];for(let _=0;_<T.length;_++){const A=T[_];if(A.equals(L[_])===!1)return A.copy(L[_]),!0}}return!1}function g(b){const M=b.uniforms;let w=0;const y=16;let T=0;for(let L=0,_=M.length;L<_;L++){const A=M[L],D={boundary:0,storage:0},k=Array.isArray(A.value)?A.value:[A.value];for(let J=0,R=k.length;J<R;J++){const z=k[J],B=m(z);D.boundary+=B.boundary,D.storage+=B.storage}if(A.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=w,L>0){T=w%y;const J=y-T;T!==0&&J-D.boundary<0&&(w+=y-T,A.__offset=w)}w+=D.storage}return T=w%y,T>0&&(w+=y-T),b.__size=w,b.__cache={},this}function m(b){const M={boundary:0,storage:0};return typeof b=="number"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function p(b){const M=b.target;M.removeEventListener("dispose",p);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),o.deleteBuffer(n[M.id]),delete n[M.id],delete s[M.id]}function x(){for(const b in n)o.deleteBuffer(n[b]);a=[],n={},s={}}return{bind:h,update:l,dispose:x}}function tg(){const o=Kn("canvas");return o.style.display="block",o}function th(o={}){this.isWebGLRenderer=!0;const t=o.canvas!==void 0?o.canvas:tg(),e=o.context!==void 0?o.context:null,i=o.depth!==void 0?o.depth:!0,n=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,r=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,h=o.powerPreference!==void 0?o.powerPreference:"default",l=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let c;e!==null?c=e.getContextAttributes().alpha:c=o.alpha!==void 0?o.alpha:!1;let u=null,d=null;const f=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=qi,this.physicallyCorrectLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;const m=this;let p=!1,x=0,b=0,M=null,w=-1,y=null;const T=new ne,L=new ne;let _=null,A=t.width,D=t.height,k=1,J=null,R=null;const z=new ne(0,0,A,D),B=new ne(0,0,A,D);let Z=!1;const K=new jl;let H=!1,nt=!1,Q=null;const U=new se,q=new Ot,et=new N,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return M===null?k:1}let X=e;function At(S,I){for(let W=0;W<S.length;W++){const F=S[W],j=t.getContext(F,I);if(j!==null)return j}return null}try{const S={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:r,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pa}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",bt,!1),X===null){const I=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&I.shift(),X=At(I,S),X===null)throw At(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ft,yt,dt,zt,St,Mt,Jt,$t,kt,me,Gt,Ft,ye,Me,E,v,G,it,rt,lt,C,$,O,ht;function pt(){ft=new up(X),yt=new sp(X,ft,o),ft.init(yt),$=new $m(X,ft,yt),dt=new qm(X,ft,yt),zt=new pp,St=new Pm,Mt=new Xm(X,ft,dt,St,yt,$,zt),Jt=new ap(m),$t=new cp(m),kt=new vu(X,yt),O=new ip(X,ft,kt,yt),me=new dp(X,kt,zt,O),Gt=new _p(X,me,kt,zt),rt=new xp(X,yt,Mt),v=new rp(St),Ft=new Dm(m,Jt,$t,ft,yt,O,v),ye=new Km(m,St),Me=new zm,E=new Um(ft,yt),it=new ep(m,Jt,$t,dt,Gt,c,a),G=new Hm(m,Gt,yt),ht=new Qm(X,zt,yt,dt),lt=new np(X,ft,zt,yt),C=new fp(X,ft,zt,yt),zt.programs=Ft.programs,m.capabilities=yt,m.extensions=ft,m.properties=St,m.renderLists=Me,m.shadowMap=G,m.state=dt,m.info=zt}pt();const ut=new Jm(m,X);this.xr=ut,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const S=ft.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ft.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(A,D,!1))},this.getSize=function(S){return S.set(A,D)},this.setSize=function(S,I,W){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=S,D=I,t.width=Math.floor(S*k),t.height=Math.floor(I*k),W!==!1&&(t.style.width=S+"px",t.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(A*k,D*k).floor()},this.setDrawingBufferSize=function(S,I,W){A=S,D=I,k=W,t.width=Math.floor(S*W),t.height=Math.floor(I*W),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(z)},this.setViewport=function(S,I,W,F){S.isVector4?z.set(S.x,S.y,S.z,S.w):z.set(S,I,W,F),dt.viewport(T.copy(z).multiplyScalar(k).floor())},this.getScissor=function(S){return S.copy(B)},this.setScissor=function(S,I,W,F){S.isVector4?B.set(S.x,S.y,S.z,S.w):B.set(S,I,W,F),dt.scissor(L.copy(B).multiplyScalar(k).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(S){dt.setScissorTest(Z=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){R=S},this.getClearColor=function(S){return S.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(S=!0,I=!0,W=!0){let F=0;S&&(F|=16384),I&&(F|=256),W&&(F|=1024),X.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",bt,!1),Me.dispose(),E.dispose(),St.dispose(),Jt.dispose(),$t.dispose(),Gt.dispose(),O.dispose(),ht.dispose(),Ft.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",ct),ut.removeEventListener("sessionend",gt),Q&&(Q.dispose(),Q=null),It.stop()};function xt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const S=zt.autoReset,I=G.enabled,W=G.autoUpdate,F=G.needsUpdate,j=G.type;pt(),zt.autoReset=S,G.enabled=I,G.autoUpdate=W,G.needsUpdate=F,G.type=j}function bt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ct(S){const I=S.target;I.removeEventListener("dispose",Ct),Kt(I)}function Kt(S){P(S),St.remove(S)}function P(S){const I=St.get(S).programs;I!==void 0&&(I.forEach(function(W){Ft.releaseProgram(W)}),S.isShaderMaterial&&Ft.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,W,F,j,_t){I===null&&(I=st);const vt=j.isMesh&&j.matrixWorld.determinant()<0,Et=rh(S,I,W,F,j);dt.setMaterial(F,vt);let Tt=W.index,Rt=1;F.wireframe===!0&&(Tt=me.getWireframeAttribute(W),Rt=2);const Lt=W.drawRange,Dt=W.attributes.position;let Vt=Lt.start*Rt,ve=(Lt.start+Lt.count)*Rt;_t!==null&&(Vt=Math.max(Vt,_t.start*Rt),ve=Math.min(ve,(_t.start+_t.count)*Rt)),Tt!==null?(Vt=Math.max(Vt,0),ve=Math.min(ve,Tt.count)):Dt!=null&&(Vt=Math.max(Vt,0),ve=Math.min(ve,Dt.count));const Je=ve-Vt;if(Je<0||Je===1/0)return;O.setup(j,F,Et,W,Tt);let Ti,Wt=lt;if(Tt!==null&&(Ti=kt.get(Tt),Wt=C,Wt.setIndex(Ti)),j.isMesh)F.wireframe===!0?(dt.setLineWidth(F.wireframeLinewidth*ot()),Wt.setMode(1)):Wt.setMode(4);else if(j.isLine){let Pt=F.linewidth;Pt===void 0&&(Pt=1),dt.setLineWidth(Pt*ot()),j.isLineSegments?Wt.setMode(1):j.isLineLoop?Wt.setMode(2):Wt.setMode(3)}else j.isPoints?Wt.setMode(0):j.isSprite&&Wt.setMode(4);if(j.isInstancedMesh)Wt.renderInstances(Vt,Je,j.count);else if(W.isInstancedBufferGeometry){const Pt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ks=Math.min(W.instanceCount,Pt);Wt.renderInstances(Vt,Je,Ks)}else Wt.render(Vt,Je)},this.compile=function(S,I){function W(F,j,_t){F.transparent===!0&&F.side===bs?(F.side=Ie,F.needsUpdate=!0,De(F,j,_t),F.side=bi,F.needsUpdate=!0,De(F,j,_t),F.side=bs):De(F,j,_t)}d=E.get(S),d.init(),g.push(d),S.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights(m.physicallyCorrectLights),S.traverse(function(F){const j=F.material;if(j)if(Array.isArray(j))for(let _t=0;_t<j.length;_t++){const vt=j[_t];W(vt,S,F)}else W(j,S,F)}),g.pop(),d=null};let V=null;function tt(S){V&&V(S)}function ct(){It.stop()}function gt(){It.start()}const It=new Yl;It.setAnimationLoop(tt),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(S){V=S,ut.setAnimationLoop(S),S===null?It.stop():It.start()},ut.addEventListener("sessionstart",ct),ut.addEventListener("sessionend",gt),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(I),I=ut.getCamera()),S.isScene===!0&&S.onBeforeRender(m,S,I,M),d=E.get(S,g.length),d.init(),g.push(d),U.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),K.setFromProjectionMatrix(U),nt=this.localClippingEnabled,H=v.init(this.clippingPlanes,nt,I),u=Me.get(S,f.length),u.init(),f.push(u),Qt(S,I,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(J,R),H===!0&&v.beginShadows();const W=d.state.shadowsArray;if(G.render(W,S,I),H===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(u,S),d.setupLights(m.physicallyCorrectLights),I.isArrayCamera){const F=I.cameras;for(let j=0,_t=F.length;j<_t;j++){const vt=F[j];re(u,S,vt,vt.viewport)}}else re(u,S,I);M!==null&&(Mt.updateMultisampleRenderTarget(M),Mt.updateRenderTargetMipmap(M)),S.isScene===!0&&S.onAfterRender(m,S,I),O.resetDefaultState(),w=-1,y=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function Qt(S,I,W,F){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){F&&et.setFromMatrixPosition(S.matrixWorld).applyMatrix4(U);const vt=Gt.update(S),Et=S.material;Et.visible&&u.push(S,vt,Et,W,et.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==zt.render.frame&&(S.skeleton.update(),S.skeleton.frame=zt.render.frame),!S.frustumCulled||K.intersectsObject(S))){F&&et.setFromMatrixPosition(S.matrixWorld).applyMatrix4(U);const vt=Gt.update(S),Et=S.material;if(Array.isArray(Et)){const Tt=vt.groups;for(let Rt=0,Lt=Tt.length;Rt<Lt;Rt++){const Dt=Tt[Rt],Vt=Et[Dt.materialIndex];Vt&&Vt.visible&&u.push(S,vt,Vt,W,et.z,Dt)}}else Et.visible&&u.push(S,vt,Et,W,et.z,null)}}const _t=S.children;for(let vt=0,Et=_t.length;vt<Et;vt++)Qt(_t[vt],I,W,F)}function re(S,I,W,F){const j=S.opaque,_t=S.transmissive,vt=S.transparent;d.setupLightsView(W),_t.length>0&&Ei(j,I,W),F&&dt.viewport(T.copy(F)),j.length>0&&Ut(j,I,W),_t.length>0&&Ut(_t,I,W),vt.length>0&&Ut(vt,I,W),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Ei(S,I,W){const F=yt.isWebGL2;Q===null&&(Q=new Xi(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")?Zn:Hi,minFilter:Yn,samples:F&&s===!0?4:0})),m.getDrawingBufferSize(q),F?Q.setSize(q.x,q.y):Q.setSize(ha(q.x),ha(q.y));const j=m.getRenderTarget();m.setRenderTarget(Q),m.clear();const _t=m.toneMapping;m.toneMapping=hi,Ut(S,I,W),m.toneMapping=_t,Mt.updateMultisampleRenderTarget(Q),Mt.updateRenderTargetMipmap(Q),m.setRenderTarget(j)}function Ut(S,I,W){const F=I.isScene===!0?I.overrideMaterial:null;for(let j=0,_t=S.length;j<_t;j++){const vt=S[j],Et=vt.object,Tt=vt.geometry,Rt=F===null?vt.material:F,Lt=vt.group;Et.layers.test(W.layers)&&Ze(Et,I,W,Tt,Rt,Lt)}}function Ze(S,I,W,F,j,_t){S.onBeforeRender(m,I,W,F,j,_t),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),j.onBeforeRender(m,I,W,F,S,_t),j.transparent===!0&&j.side===bs?(j.side=Ie,j.needsUpdate=!0,m.renderBufferDirect(W,I,F,j,S,_t),j.side=bi,j.needsUpdate=!0,m.renderBufferDirect(W,I,F,j,S,_t),j.side=bs):m.renderBufferDirect(W,I,F,j,S,_t),S.onAfterRender(m,I,W,F,j,_t)}function De(S,I,W){I.isScene!==!0&&(I=st);const F=St.get(S),j=d.state.lights,_t=d.state.shadowsArray,vt=j.state.version,Et=Ft.getParameters(S,j.state,_t,I,W),Tt=Ft.getProgramCacheKey(Et);let Rt=F.programs;F.environment=S.isMeshStandardMaterial?I.environment:null,F.fog=I.fog,F.envMap=(S.isMeshStandardMaterial?$t:Jt).get(S.envMap||F.environment),Rt===void 0&&(S.addEventListener("dispose",Ct),Rt=new Map,F.programs=Rt);let Lt=Rt.get(Tt);if(Lt!==void 0){if(F.currentProgram===Lt&&F.lightsStateVersion===vt)return ba(S,Et),Lt}else Et.uniforms=Ft.getUniforms(S),S.onBuild(W,Et,m),S.onBeforeCompile(Et,m),Lt=Ft.acquireProgram(Et,Tt),Rt.set(Tt,Lt),F.uniforms=Et.uniforms;const Dt=F.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Dt.clippingPlanes=v.uniform),ba(S,Et),F.needsLights=oh(S),F.lightsStateVersion=vt,F.needsLights&&(Dt.ambientLightColor.value=j.state.ambient,Dt.lightProbe.value=j.state.probe,Dt.directionalLights.value=j.state.directional,Dt.directionalLightShadows.value=j.state.directionalShadow,Dt.spotLights.value=j.state.spot,Dt.spotLightShadows.value=j.state.spotShadow,Dt.rectAreaLights.value=j.state.rectArea,Dt.ltc_1.value=j.state.rectAreaLTC1,Dt.ltc_2.value=j.state.rectAreaLTC2,Dt.pointLights.value=j.state.point,Dt.pointLightShadows.value=j.state.pointShadow,Dt.hemisphereLights.value=j.state.hemi,Dt.directionalShadowMap.value=j.state.directionalShadowMap,Dt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Dt.spotShadowMap.value=j.state.spotShadowMap,Dt.spotLightMatrix.value=j.state.spotLightMatrix,Dt.spotLightMap.value=j.state.spotLightMap,Dt.pointShadowMap.value=j.state.pointShadowMap,Dt.pointShadowMatrix.value=j.state.pointShadowMatrix);const Vt=Lt.getUniforms(),ve=Xs.seqWithValue(Vt.seq,Dt);return F.currentProgram=Lt,F.uniformsList=ve,Lt}function ba(S,I){const W=St.get(S);W.outputEncoding=I.outputEncoding,W.instancing=I.instancing,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function rh(S,I,W,F,j){I.isScene!==!0&&(I=st),Mt.resetTextureUnits();const _t=I.fog,vt=F.isMeshStandardMaterial?I.environment:null,Et=M===null?m.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:qi,Tt=(F.isMeshStandardMaterial?$t:Jt).get(F.envMap||vt),Rt=F.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Lt=!!F.normalMap&&!!W.attributes.tangent,Dt=!!W.morphAttributes.position,Vt=!!W.morphAttributes.normal,ve=!!W.morphAttributes.color,Je=F.toneMapped?m.toneMapping:hi,Ti=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Wt=Ti!==void 0?Ti.length:0,Pt=St.get(F),Ks=d.state.lights;if(H===!0&&(nt===!0||S!==y)){const be=S===y&&F.id===w;v.setState(F,S,be)}let te=!1;F.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ks.state.version||Pt.outputEncoding!==Et||j.isInstancedMesh&&Pt.instancing===!1||!j.isInstancedMesh&&Pt.instancing===!0||j.isSkinnedMesh&&Pt.skinning===!1||!j.isSkinnedMesh&&Pt.skinning===!0||Pt.envMap!==Tt||F.fog===!0&&Pt.fog!==_t||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==v.numPlanes||Pt.numIntersection!==v.numIntersection)||Pt.vertexAlphas!==Rt||Pt.vertexTangents!==Lt||Pt.morphTargets!==Dt||Pt.morphNormals!==Vt||Pt.morphColors!==ve||Pt.toneMapping!==Je||yt.isWebGL2===!0&&Pt.morphTargetsCount!==Wt)&&(te=!0):(te=!0,Pt.__version=F.version);let Ai=Pt.currentProgram;te===!0&&(Ai=De(F,I,j));let Sa=!1,Fn=!1,Qs=!1;const he=Ai.getUniforms(),Ci=Pt.uniforms;if(dt.useProgram(Ai.program)&&(Sa=!0,Fn=!0,Qs=!0),F.id!==w&&(w=F.id,Fn=!0),Sa||y!==S){if(he.setValue(X,"projectionMatrix",S.projectionMatrix),yt.logarithmicDepthBuffer&&he.setValue(X,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),y!==S&&(y=S,Fn=!0,Qs=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const be=he.map.cameraPosition;be!==void 0&&be.setValue(X,et.setFromMatrixPosition(S.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&he.setValue(X,"isOrthographic",S.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||j.isSkinnedMesh)&&he.setValue(X,"viewMatrix",S.matrixWorldInverse)}if(j.isSkinnedMesh){he.setOptional(X,j,"bindMatrix"),he.setOptional(X,j,"bindMatrixInverse");const be=j.skeleton;be&&(yt.floatVertexTextures?(be.boneTexture===null&&be.computeBoneTexture(),he.setValue(X,"boneTexture",be.boneTexture,Mt),he.setValue(X,"boneTextureSize",be.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const tr=W.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0&&yt.isWebGL2===!0)&&rt.update(j,W,F,Ai),(Fn||Pt.receiveShadow!==j.receiveShadow)&&(Pt.receiveShadow=j.receiveShadow,he.setValue(X,"receiveShadow",j.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Ci.envMap.value=Tt,Ci.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),Fn&&(he.setValue(X,"toneMappingExposure",m.toneMappingExposure),Pt.needsLights&&ah(Ci,Qs),_t&&F.fog===!0&&ye.refreshFogUniforms(Ci,_t),ye.refreshMaterialUniforms(Ci,F,k,D,Q),Xs.upload(X,Pt.uniformsList,Ci,Mt)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Xs.upload(X,Pt.uniformsList,Ci,Mt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&he.setValue(X,"center",j.center),he.setValue(X,"modelViewMatrix",j.modelViewMatrix),he.setValue(X,"normalMatrix",j.normalMatrix),he.setValue(X,"modelMatrix",j.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const be=F.uniformsGroups;for(let er=0,lh=be.length;er<lh;er++)if(yt.isWebGL2){const wa=be[er];ht.update(wa,Ai),ht.bind(wa,Ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ai}function ah(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function oh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(S,I,W){St.get(S.texture).__webglTexture=I,St.get(S.depthTexture).__webglTexture=W;const F=St.get(S);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=W===void 0,F.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,I){const W=St.get(S);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,W=0){M=S,x=I,b=W;let F=!0,j=null,_t=!1,vt=!1;if(S){const Tt=St.get(S);Tt.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(36160,null),F=!1):Tt.__webglFramebuffer===void 0?Mt.setupRenderTarget(S):Tt.__hasExternalTextures&&Mt.rebindTextures(S,St.get(S.texture).__webglTexture,St.get(S.depthTexture).__webglTexture);const Rt=S.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(vt=!0);const Lt=St.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(j=Lt[I],_t=!0):yt.isWebGL2&&S.samples>0&&Mt.useMultisampledRTT(S)===!1?j=St.get(S).__webglMultisampledFramebuffer:j=Lt,T.copy(S.viewport),L.copy(S.scissor),_=S.scissorTest}else T.copy(z).multiplyScalar(k).floor(),L.copy(B).multiplyScalar(k).floor(),_=Z;if(dt.bindFramebuffer(36160,j)&&yt.drawBuffers&&F&&dt.drawBuffers(S,j),dt.viewport(T),dt.scissor(L),dt.setScissorTest(_),_t){const Tt=St.get(S.texture);X.framebufferTexture2D(36160,36064,34069+I,Tt.__webglTexture,W)}else if(vt){const Tt=St.get(S.texture),Rt=I||0;X.framebufferTextureLayer(36160,36064,Tt.__webglTexture,W||0,Rt)}w=-1},this.readRenderTargetPixels=function(S,I,W,F,j,_t,vt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=St.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(Et=Et[vt]),Et){dt.bindFramebuffer(36160,Et);try{const Tt=S.texture,Rt=Tt.format,Lt=Tt.type;if(Rt!==He&&$.convert(Rt)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Dt=Lt===Zn&&(ft.has("EXT_color_buffer_half_float")||yt.isWebGL2&&ft.has("EXT_color_buffer_float"));if(Lt!==Hi&&$.convert(Lt)!==X.getParameter(35738)&&!(Lt===ki&&(yt.isWebGL2||ft.has("OES_texture_float")||ft.has("WEBGL_color_buffer_float")))&&!Dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-F&&W>=0&&W<=S.height-j&&X.readPixels(I,W,F,j,$.convert(Rt),$.convert(Lt),_t)}finally{const Tt=M!==null?St.get(M).__webglFramebuffer:null;dt.bindFramebuffer(36160,Tt)}}},this.copyFramebufferToTexture=function(S,I,W=0){const F=Math.pow(2,-W),j=Math.floor(I.image.width*F),_t=Math.floor(I.image.height*F);Mt.setTexture2D(I,0),X.copyTexSubImage2D(3553,W,0,0,S.x,S.y,j,_t),dt.unbindTexture()},this.copyTextureToTexture=function(S,I,W,F=0){const j=I.image.width,_t=I.image.height,vt=$.convert(W.format),Et=$.convert(W.type);Mt.setTexture2D(W,0),X.pixelStorei(37440,W.flipY),X.pixelStorei(37441,W.premultiplyAlpha),X.pixelStorei(3317,W.unpackAlignment),I.isDataTexture?X.texSubImage2D(3553,F,S.x,S.y,j,_t,vt,Et,I.image.data):I.isCompressedTexture?X.compressedTexSubImage2D(3553,F,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,vt,I.mipmaps[0].data):X.texSubImage2D(3553,F,S.x,S.y,vt,Et,I.image),F===0&&W.generateMipmaps&&X.generateMipmap(3553),dt.unbindTexture()},this.copyTextureToTexture3D=function(S,I,W,F,j=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=S.max.x-S.min.x+1,vt=S.max.y-S.min.y+1,Et=S.max.z-S.min.z+1,Tt=$.convert(F.format),Rt=$.convert(F.type);let Lt;if(F.isData3DTexture)Mt.setTexture3D(F,0),Lt=32879;else if(F.isDataArrayTexture)Mt.setTexture2DArray(F,0),Lt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,F.flipY),X.pixelStorei(37441,F.premultiplyAlpha),X.pixelStorei(3317,F.unpackAlignment);const Dt=X.getParameter(3314),Vt=X.getParameter(32878),ve=X.getParameter(3316),Je=X.getParameter(3315),Ti=X.getParameter(32877),Wt=W.isCompressedTexture?W.mipmaps[0]:W.image;X.pixelStorei(3314,Wt.width),X.pixelStorei(32878,Wt.height),X.pixelStorei(3316,S.min.x),X.pixelStorei(3315,S.min.y),X.pixelStorei(32877,S.min.z),W.isDataTexture||W.isData3DTexture?X.texSubImage3D(Lt,j,I.x,I.y,I.z,_t,vt,Et,Tt,Rt,Wt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Lt,j,I.x,I.y,I.z,_t,vt,Et,Tt,Wt.data)):X.texSubImage3D(Lt,j,I.x,I.y,I.z,_t,vt,Et,Tt,Rt,Wt),X.pixelStorei(3314,Dt),X.pixelStorei(32878,Vt),X.pixelStorei(3316,ve),X.pixelStorei(3315,Je),X.pixelStorei(32877,Ti),j===0&&F.generateMipmaps&&X.generateMipmap(Lt),dt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Mt.setTextureCube(S,0):S.isData3DTexture?Mt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Mt.setTexture2DArray(S,0):Mt.setTexture2D(S,0),dt.unbindTexture()},this.resetState=function(){x=0,b=0,M=null,dt.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class eg extends th{}eg.prototype.isWebGL1Renderer=!0;class ya extends wi{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const h=Math.min(a+r,Math.PI);let l=0;const c=[],u=new N,d=new N,f=[],g=[],m=[],p=[];for(let x=0;x<=i;x++){const b=[],M=x/i;let w=0;x==0&&a==0?w=.5/e:x==i&&h==Math.PI&&(w=-.5/e);for(let y=0;y<=e;y++){const T=y/e;u.x=-t*Math.cos(n+T*s)*Math.sin(a+M*r),u.y=t*Math.cos(a+M*r),u.z=t*Math.sin(n+T*s)*Math.sin(a+M*r),g.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),p.push(T+w,1-M),b.push(l++)}c.push(b)}for(let x=0;x<i;x++)for(let b=0;b<e;b++){const M=c[x][b+1],w=c[x][b],y=c[x+1][b],T=c[x+1][b+1];(x!==0||a>0)&&f.push(M,w,T),(x!==i-1||h<Math.PI)&&f.push(w,y,T)}this.setIndex(f),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(m,3)),this.setAttribute("uv",new Ye(p,2))}static fromJSON(t){return new ya(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class eh extends as{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ig extends eh{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Nt(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const ul={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class ih{constructor(t,e,i){const n=this;let s=!1,a=0,r=0,h;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){r++,s===!1&&n.onStart!==void 0&&n.onStart(c,a,r),s=!0},this.itemEnd=function(c){a++,n.onProgress!==void 0&&n.onProgress(c,a,r),a===r&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return h?h(c):c},this.setURLModifier=function(c){return h=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){const u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null}}}const ng=new ih;class nh{constructor(t){this.manager=t!==void 0?t:ng,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class sg extends nh{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=ul.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const r=Kn("img");function h(){c(),ul.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){c(),n&&n(u),s.manager.itemError(t),s.manager.itemEnd(t)}function c(){r.removeEventListener("load",h,!1),r.removeEventListener("error",l,!1)}return r.addEventListener("load",h,!1),r.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),s.manager.itemStart(t),r.src=t,r}}class rg extends nh{constructor(t){super(t)}load(t,e,i,n){const s=new _e,a=new sg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(r){s.image=r,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pa);function ag(o){const{radius:t=3,segments:e=256,textures:i={},materialOptions:n={},oblateness:s=0,initialRotation:a={x:0,y:0,z:0},loadingManager:r=new ih}=o;return console.log(o),{create:(l,c,u)=>{c&&(r.onProgress=(b,M,w)=>{const y=M/w*100;c(Math.round(y))}),u&&(r.onLoad=u),r.onError=b=>{console.error("Error loading texture:",b)};const d=new rg(r),f={};let g=!1;Object.entries(i).forEach(([b,M])=>{console.log(`Loading texture "${b}" from path:`,M);try{const w=d.load(M,y=>console.log(`Texture "${b}" loaded successfully`),void 0,y=>{console.error(`Error loading texture "${b}":`,y),g=!0});w.minFilter=ge,w.magFilter=ge,b==="normalMap"&&(w.mapping=$s),f[b]=w}catch(w){console.error(`Exception while setting up texture "${b}":`,w),g=!0}});const m=new ya(t,e,e,0,Math.PI*2,0,Math.PI);s>0&&m.scale(1,1-s,1);let p;g?(console.warn("Using fallback material due to texture loading issues"),p=new eh({color:n.color||new Nt(7368816),roughness:n.roughness||1,metalness:n.metalness||.2,flatShading:n.flatShading||!1})):p=new ig({...f,...n});const x=new li(m,p);return x.rotation.x=a.x||0,x.rotation.y=a.y||0,x.rotation.z=a.z||0,l&&l.add(x),x},radius:t,defaultMaterialOptions:n}}const og=new URL("/assets/colorMap-446c8bca.jpg",self.location).href,lg=new URL("/assets/normalMap-8b777665.jpg",self.location).href,hg=ag({radius:3,segments:256,oblateness:.0012,textures:{map:og,normalMap:lg},materialOptions:{normalScale:new Ot(3.05,3.05),roughness:1,metalness:0,reflectivity:.05,clearcoat:0,color:new Nt(7368816),aoMapIntensity:1.2,lightMapIntensity:1,envMapIntensity:.05,side:bi,transparent:!1,flatShading:!1,bumpScale:.2},initialRotation:{y:-1*Math.PI/2}});function cg(o,t,e){const i=new th({antialias:!0});return i.setSize(t||window.innerWidth,e||window.innerHeight),i.setPixelRatio(window.devicePixelRatio),o.appendChild(i.domElement),i}function ug(o){const t=new Fe(75,o||window.innerWidth/window.innerHeight,.1,1e3);return t.position.z=6,t}const dg=document.getElementById("canvas-container"),fg=document.getElementById("loading"),pg=document.getElementById("progress-bar"),Mi=new $h;Mi.background=new vi(0);const Si=ug();Si.position.z=10;const Ma=cg(dg),va=new nc(Si,Ma.domElement);va.enableDamping=!0;va.dampingFactor=.05;const mg=new ic(20,20);Mi.add(mg);gg();xg();let _i=null;try{_i=hg.create(Mi,o=>{pg.style.width=`${o}%`,console.log(`Loading: ${o}%`)},()=>{fg.style.display="none",console.log("Moon loaded successfully!"),console.log("Moon object:",_i),console.log("Moon position:",_i.position),console.log("Moon material:",_i.material),_i.position.set(0,0,0)})}catch(o){console.error("Error creating Moon:",o)}function sh(){requestAnimationFrame(sh),va.update(),Ma.render(Mi,Si)}window.addEventListener("resize",()=>{Si.aspect=window.innerWidth/window.innerHeight,Si.updateProjectionMatrix(),Ma.setSize(window.innerWidth,window.innerHeight)});window.addEventListener("keydown",o=>{o.key==="d"&&(console.log("Camera position:",Si.position),_i&&console.log("Moon material textures:",{map:_i.material.map?"Loaded":"Missing",normalMap:_i.material.normalMap?"Loaded":"Missing"}))});sh();function gg(){const o=new Ys,t=new Al({color:16777215,size:.05}),e=[];for(let n=0;n<5e3;n++){const s=(Math.random()-.5)*2e3,a=(Math.random()-.5)*2e3,r=(Math.random()-.5)*2e3;e.push(s,a,r)}o.setAttribute("position",new An(e,3));const i=new Zh(o,t);Mi.add(i)}function xg(){const o=new tc(16777215,1.5);o.position.set(10,5,15),Mi.add(o);const t=new ec(16777215,.8);Mi.add(t);const e=new Kh(16777215,1);Si.add(e),Mi.add(Si)}
//# sourceMappingURL=index-073324ae.js.map
