(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const $a="180",rh=0,Dc=1,oh=2,ql=1,Jl=2,Xn=3,ti=0,Xe=1,ve=2,Kn=0,is=1,Je=2,Uc=3,Nc=4,ah=5,yi=100,ch=101,lh=102,uh=103,hh=104,dh=200,fh=201,ph=202,mh=203,ia=204,sa=205,gh=206,_h=207,vh=208,xh=209,Mh=210,yh=211,wh=212,Sh=213,bh=214,ra=0,oa=1,aa=2,cs=3,ca=4,la=5,ua=6,ha=7,Zl=0,Eh=1,Th=2,ui=0,$l=1,Kl=2,jl=3,Ka=4,Ql=5,tu=6,eu=7,nu=300,ls=301,us=302,da=303,fa=304,uo=306,Ks=1e3,Jn=1001,pa=1002,en=1003,Ah=1004,_r=1005,xn=1006,Mo=1007,li=1008,Un=1009,iu=1010,su=1011,js=1012,ja=1013,Ai=1014,Pn=1015,In=1016,Qa=1017,tc=1018,Qs=1020,ru=35902,ou=35899,au=1021,cu=1022,Mn=1023,tr=1026,er=1027,ec=1028,nc=1029,lu=1030,ic=1031,sc=1033,qr=33776,Jr=33777,Zr=33778,$r=33779,ma=35840,ga=35841,_a=35842,va=35843,xa=36196,Ma=37492,ya=37496,wa=37808,Sa=37809,ba=37810,Ea=37811,Ta=37812,Aa=37813,Ca=37814,Ra=37815,Pa=37816,La=37817,Ia=37818,Da=37819,Ua=37820,Na=37821,Fa=36492,Oa=36494,Ba=36495,za=36283,ka=36284,Ha=36285,Ga=36286,Ch=3200,Rh=3201,uu=0,Ph=1,Yn="",Ce="srgb",hs="srgb-linear",no="linear",ue="srgb",Ni=7680,Fc=519,Lh=512,Ih=513,Dh=514,hu=515,Uh=516,Nh=517,Fh=518,Oh=519,Va=35044,Oc="300 es",Ln=2e3,io=2001;class xs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bc=1234567;const Hs=Math.PI/180,nr=180/Math.PI;function Dn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function rc(i,t){return(i%t+t)%t}function Bh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function zh(i,t,e){return i!==t?(e-i)/(t-i):0}function Gs(i,t,e){return(1-e)*i+e*t}function kh(i,t,e,n){return Gs(i,t,1-Math.exp(-e*n))}function Hh(i,t=1){return t-Math.abs(rc(i,t*2)-t)}function Gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Vh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Wh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Xh(i,t){return i+Math.random()*(t-i)}function Yh(i){return i*(.5-Math.random())}function qh(i){i!==void 0&&(Bc=i);let t=Bc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jh(i){return i*Hs}function Zh(i){return i*nr}function $h(i){return(i&i-1)===0&&i!==0}function Kh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qh(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ne={DEG2RAD:Hs,RAD2DEG:nr,generateUUID:Dn,clamp:ne,euclideanModulo:rc,mapLinear:Bh,inverseLerp:zh,lerp:Gs,damp:kh,pingpong:Hh,smoothstep:Gh,smootherstep:Vh,randInt:Wh,randFloat:Xh,randFloatSpread:Yh,seededRandom:qh,degToRad:Jh,radToDeg:Zh,isPowerOfTwo:$h,ceilPowerOfTwo:Kh,floorPowerOfTwo:jh,setQuaternionFromProperEuler:Qh,normalize:he,denormalize:_n};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(f!==x||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*x,w=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const E=Math.sqrt(y),b=Math.atan2(E,p*w);m=Math.sin(m*b)/E,a=Math.sin(a*b)/E}const M=a*w;if(l=l*m+h*M,c=c*m+d*M,u=u*m+g*M,f=f*m+x*M,m===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yo.copy(this).projectOnVector(t),this.sub(yo)}reflect(t){return this.sub(yo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yo=new L,zc=new lr;class te{constructor(t,e,n,s,r,o,a,l,c){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],w=s[1],y=s[4],M=s[7],E=s[2],b=s[5],A=s[8];return r[0]=o*x+a*w+l*E,r[3]=o*m+a*y+l*b,r[6]=o*p+a*M+l*A,r[1]=c*x+u*w+f*E,r[4]=c*m+u*y+f*b,r[7]=c*p+u*M+f*A,r[2]=h*x+d*w+g*E,r[5]=h*m+d*y+g*b,r[8]=h*p+d*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(s*c-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=h*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wo.makeScale(t,e)),this}rotate(t){return this.premultiply(wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wo=new te;function du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function td(){const i=ir("canvas");return i.style.display="block",i}const kc={};function sr(i){i in kc||(kc[i]=!0,console.warn(i))}function ed(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Hc=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gc=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nd(){const i={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ue&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?no:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return sr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return sr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hs]:{primaries:t,whitePoint:n,transfer:no,toXYZ:Hc,fromXYZ:Gc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:Hc,fromXYZ:Gc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}const re=nd();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fi;class id{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fi===void 0&&(Fi=ir("canvas")),Fi.width=t.width,Fi.height=t.height;const s=Fi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Fi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sd=0;class oc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(So(s[o].image)):r.push(So(s[o]))}else r=So(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function So(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?id.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rd=0;const bo=new L;class Fe extends xs{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=Jn,s=Jn,r=xn,o=li,a=Mn,l=Un,c=Fe.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Dn(),this.name="",this.source=new oc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bo).x}get height(){return this.source.getSize(bo).y}get depth(){return this.source.getSize(bo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ks:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ks:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=nu;Fe.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(d+1)/2,E=(p+1)/2,b=(u+h)/4,A=(f+x)/4,T=(g+m)/4;return y>M&&y>E?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=b/n,r=A/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=T/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=A/r,s=T/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(f-x)/w,this.z=(h-u)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class od extends xs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Fe(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new oc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nn extends od{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fu extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ad extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(t.matrixWorld),this.union(vr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),xr.subVectors(this.max,Ts),Oi.subVectors(t.a,Ts),Bi.subVectors(t.b,Ts),zi.subVectors(t.c,Ts),ei.subVectors(Bi,Oi),ni.subVectors(zi,Bi),fi.subVectors(Oi,zi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-fi.z,fi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,fi.z,0,-fi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-fi.y,fi.x,0];return!Eo(e,Oi,Bi,zi,xr)||(e=[1,0,0,0,1,0,0,0,1],!Eo(e,Oi,Bi,zi,xr))?!1:(Mr.crossVectors(ei,ni),e=[Mr.x,Mr.y,Mr.z],Eo(e,Oi,Bi,zi,xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bn=[new L,new L,new L,new L,new L,new L,new L,new L],hn=new L,vr=new Di,Oi=new L,Bi=new L,zi=new L,ei=new L,ni=new L,fi=new L,Ts=new L,xr=new L,Mr=new L,pi=new L;function Eo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pi.fromArray(i,r);const a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=t.dot(pi),c=e.dot(pi),u=n.dot(pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const cd=new Di,As=new L,To=new L;class ur{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);const e=As.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(As,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(To.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(To)),this.expandByPoint(As.copy(t.center).sub(To))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const zn=new L,Ao=new L,yr=new L,ii=new L,Co=new L,wr=new L,Ro=new L;class ld{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ao.copy(t).add(e).multiplyScalar(.5),yr.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(Ao);const r=t.distanceTo(e)*.5,o=-this.direction.dot(yr),a=ii.dot(this.direction),l=-ii.dot(yr),c=ii.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ao).addScaledVector(yr,h),d}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,r){Co.subVectors(e,t),wr.subVectors(n,t),Ro.crossVectors(Co,wr);let o=this.direction.dot(Ro),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);const l=a*this.direction.dot(wr.crossVectors(ii,wr));if(l<0)return null;const c=a*this.direction.dot(Co.cross(ii));if(c<0||l+c>o)return null;const u=-a*ii.dot(Ro);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,r,o,a,l,c,u,f,h,d,g,x,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,x,m)}set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),o=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,x=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-x*c,e[9]=-a*l,e[2]=x-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,x=c*f;e[0]=h+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=x+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,x=c*f;e[0]=h-x*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,x=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+x,e[1]=l*f,e[5]=x*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-x*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+x,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ud,t,hd)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),si.crossVectors(n,je),si.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),si.crossVectors(n,je)),si.normalize(),Sr.crossVectors(je,si),s[0]=si.x,s[4]=Sr.x,s[8]=je.x,s[1]=si.y,s[5]=Sr.y,s[9]=je.y,s[2]=si.z,s[6]=Sr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],w=n[3],y=n[7],M=n[11],E=n[15],b=s[0],A=s[4],T=s[8],_=s[12],v=s[1],P=s[5],D=s[9],O=s[13],B=s[2],F=s[6],k=s[10],J=s[14],H=s[3],N=s[7],V=s[11],it=s[15];return r[0]=o*b+a*v+l*B+c*H,r[4]=o*A+a*P+l*F+c*N,r[8]=o*T+a*D+l*k+c*V,r[12]=o*_+a*O+l*J+c*it,r[1]=u*b+f*v+h*B+d*H,r[5]=u*A+f*P+h*F+d*N,r[9]=u*T+f*D+h*k+d*V,r[13]=u*_+f*O+h*J+d*it,r[2]=g*b+x*v+m*B+p*H,r[6]=g*A+x*P+m*F+p*N,r[10]=g*T+x*D+m*k+p*V,r[14]=g*_+x*O+m*J+p*it,r[3]=w*b+y*v+M*B+E*H,r[7]=w*A+y*P+M*F+E*N,r[11]=w*T+y*D+M*k+E*V,r[15]=w*_+y*O+M*J+E*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*f-s*c*f-r*a*h+n*c*h+s*a*d-n*l*d)+x*(+e*l*d-e*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+m*(+e*c*f-e*a*d-r*o*f+n*o*d+r*a*u-n*c*u)+p*(-s*a*u-e*l*f+e*a*h+s*o*f-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],w=f*m*c-x*h*c+x*l*d-a*m*d-f*l*p+a*h*p,y=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,M=u*x*c-g*f*c+g*a*d-o*x*d-u*a*p+o*f*p,E=g*f*l-u*x*l-g*a*h+o*x*h+u*a*m-o*f*m,b=e*w+n*y+s*M+r*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=w*A,t[1]=(x*h*r-f*m*r-x*s*d+n*m*d+f*s*p-n*h*p)*A,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*A,t[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*d-n*l*d)*A,t[4]=y*A,t[5]=(u*m*r-g*h*r+g*s*d-e*m*d-u*s*p+e*h*p)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*A,t[7]=(o*h*r-u*l*r+u*s*c-e*h*c-o*s*d+e*l*d)*A,t[8]=M*A,t[9]=(g*f*r-u*x*r-g*n*d+e*x*d+u*n*p-e*f*p)*A,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*p+e*a*p)*A,t[11]=(u*a*r-o*f*r-u*n*c+e*f*c+o*n*d-e*a*d)*A,t[12]=E*A,t[13]=(u*x*s-g*f*s+g*n*h-e*x*h-u*n*m+e*f*m)*A,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*A,t[15]=(o*f*s-u*a*s+u*n*l-e*f*l-o*n*h+e*a*h)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,x=o*u,m=o*f,p=a*f,w=l*c,y=l*u,M=l*f,E=n.x,b=n.y,A=n.z;return s[0]=(1-(x+p))*E,s[1]=(d+M)*E,s[2]=(g-y)*E,s[3]=0,s[4]=(d-M)*b,s[5]=(1-(h+p))*b,s[6]=(m+w)*b,s[7]=0,s[8]=(g+y)*A,s[9]=(m-w)*A,s[10]=(1-(h+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const o=ki.set(s[4],s[5],s[6]).length(),a=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],dn.copy(this);const c=1/r,u=1/o,f=1/a;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=f,dn.elements[9]*=f,dn.elements[10]*=f,e.setFromRotationMatrix(dn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ln,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Ln)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===io)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ln,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Ln)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===io)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ki=new L,dn=new ce,ud=new L(0,0,0),hd=new L(1,1,1),si=new L,Sr=new L,je=new L,Vc=new ce,Wc=new lr;class Nn{constructor(t=0,e=0,n=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class pu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dd=0;const Xc=new L,Hi=new lr,kn=new ce,br=new L,Cs=new L,fd=new L,pd=new lr,Yc=new L(1,0,0),qc=new L(0,1,0),Jc=new L(0,0,1),Zc={type:"added"},md={type:"removed"},Gi={type:"childadded",child:null},Po={type:"childremoved",child:null};class Te extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new L,e=new Nn,n=new lr,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new te}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis(qc,t)}rotateZ(t){return this.rotateOnAxis(Jc,t)}translateOnAxis(t,e){return Xc.copy(t).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis(qc,t)}translateZ(t){return this.translateOnAxis(Jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?br.copy(t):br.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Cs,br,this.up):kn.lookAt(br,Cs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(kn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(md),Po.child=t,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new L(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new L,Hn=new L,Lo=new L,Gn=new L,Vi=new L,Wi=new L,$c=new L,Io=new L,Do=new L,Uo=new L,No=new le,Fo=new le,Oo=new le;class cn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fn.subVectors(t,e),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fn.subVectors(s,e),Hn.subVectors(n,e),Lo.subVectors(t,e);const o=fn.dot(fn),a=fn.dot(Hn),l=fn.dot(Lo),c=Hn.dot(Hn),u=Hn.dot(Lo),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return No.setScalar(0),Fo.setScalar(0),Oo.setScalar(0),No.fromBufferAttribute(t,e),Fo.fromBufferAttribute(t,n),Oo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(No,r.x),o.addScaledVector(Fo,r.y),o.addScaledVector(Oo,r.z),o}static isFrontFacing(t,e,n,s){return fn.subVectors(n,e),Hn.subVectors(t,e),fn.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),fn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Vi.subVectors(s,n),Wi.subVectors(r,n),Io.subVectors(t,n);const l=Vi.dot(Io),c=Wi.dot(Io);if(l<=0&&c<=0)return e.copy(n);Do.subVectors(t,s);const u=Vi.dot(Do),f=Wi.dot(Do);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Vi,o);Uo.subVectors(t,r);const d=Vi.dot(Uo),g=Wi.dot(Uo);if(g>=0&&d<=g)return e.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Wi,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return $c.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector($c,a);const p=1/(m+x+h);return o=x*p,a=h*p,e.copy(n).addScaledVector(Vi,o).addScaledVector(Wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Bo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=rc(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Bo(o,r,t+1/3),this.g=Bo(o,r,t),this.b=Bo(o,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const n=mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return re.workingToColorSpace(Be.copy(this),t),Math.round(ne(Be.r*255,0,255))*65536+Math.round(ne(Be.g*255,0,255))*256+Math.round(ne(Be.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,r=Be.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ce){re.workingToColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Er);const n=Gs(ri.h,Er.h,e),s=Gs(ri.s,Er.s,e),r=Gs(ri.l,Er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Lt;Lt.NAMES=mu;let gd=0;class Ms extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=is,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ia,this.blendDst=sa,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ia&&(n.blendSrc=this.blendSrc),this.blendDst!==sa&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wn extends Ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new L,Tr=new nt;let _d=0;class Pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_d++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Va,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(t),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Va&&(t.usage=this.usage),t}}class gu extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _u extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let vd=0;const an=new ce,zo=new Te,Xi=new L,Qe=new Di,Rs=new Di,De=new L;class be extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?_u:gu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return zo.lookAt(t),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ur);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(Qe.min,Rs.min),Qe.expandByPoint(De),De.addVectors(Qe.max,Rs.max),Qe.expandByPoint(De)):(Qe.expandByPoint(Rs.min),Qe.expandByPoint(Rs.max))}Qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)De.fromBufferAttribute(a,c),l&&(Xi.fromBufferAttribute(t,c),De.add(Xi)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new L,l[T]=new L;const c=new L,u=new L,f=new L,h=new nt,d=new nt,g=new nt,x=new L,m=new L;function p(T,_,v){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,_),f.fromBufferAttribute(n,v),h.fromBufferAttribute(r,T),d.fromBufferAttribute(r,_),g.fromBufferAttribute(r,v),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),a[T].add(x),a[_].add(x),a[v].add(x),l[T].add(m),l[_].add(m),l[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let T=0,_=w.length;T<_;++T){const v=w[T],P=v.start,D=v.count;for(let O=P,B=P+D;O<B;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new L,M=new L,E=new L,b=new L;function A(T){E.fromBufferAttribute(s,T),b.copy(E);const _=a[T];y.copy(_),y.sub(E.multiplyScalar(E.dot(_))).normalize(),M.crossVectors(b,_);const P=M.dot(l[T])<0?-1:1;o.setXYZW(T,y.x,y.y,y.z,P)}for(let T=0,_=w.length;T<_;++T){const v=w[T],P=v.start,D=v.count;for(let O=P,B=P+D;O<B;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,f=new L;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Pe(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kc=new ce,mi=new ld,Ar=new ur,jc=new L,Cr=new L,Rr=new L,Pr=new L,ko=new L,Lr=new L,Qc=new L,Ir=new L;class I extends Te{constructor(t=new be,e=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(ko.fromBufferAttribute(f,t),o?Lr.addScaledVector(ko,u):Lr.addScaledVector(ko.sub(e),u))}e.add(Lr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(Ar.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Ar,jc)===null||mi.origin.distanceToSquared(jc)>(t.far-t.near)**2))&&(Kc.copy(r).invert(),mi.copy(t.ray).applyMatrix4(Kc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,E=y;M<E;M+=3){const b=a.getX(M),A=a.getX(M+1),T=a.getX(M+2);s=Dr(this,p,t,n,c,u,f,b,A,T),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const w=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=Dr(this,o,t,n,c,u,f,w,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,E=y;M<E;M+=3){const b=M,A=M+1,T=M+2;s=Dr(this,p,t,n,c,u,f,b,A,T),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const w=m,y=m+1,M=m+2;s=Dr(this,o,t,n,c,u,f,w,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function xd(i,t,e,n,s,r,o,a){let l;if(t.side===Xe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ti,a),l===null)return null;Ir.copy(a),Ir.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ir);return c<e.near||c>e.far?null:{distance:c,point:Ir.clone(),object:i}}function Dr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Cr),i.getVertexPosition(l,Rr),i.getVertexPosition(c,Pr);const u=xd(i,t,e,n,Cr,Rr,Pr,Qc);if(u){const f=new L;cn.getBarycoord(Qc,Cr,Rr,Pr,f),s&&(u.uv=cn.getInterpolatedAttribute(s,a,l,c,f,new nt)),r&&(u.uv1=cn.getInterpolatedAttribute(r,a,l,c,f,new nt)),o&&(u.normal=cn.getInterpolatedAttribute(o,a,l,c,f,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new L,materialIndex:0};cn.getNormal(Cr,Rr,Pr,h.normal),u.face=h,u.barycoord=f}return u}class tt extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function g(x,m,p,w,y,M,E,b,A,T,_){const v=M/A,P=E/T,D=M/2,O=E/2,B=b/2,F=A+1,k=T+1;let J=0,H=0;const N=new L;for(let V=0;V<k;V++){const it=V*P-O;for(let lt=0;lt<F;lt++){const ut=lt*v-D;N[x]=ut*w,N[m]=it*y,N[p]=B,c.push(N.x,N.y,N.z),N[x]=0,N[m]=0,N[p]=b>0?1:-1,u.push(N.x,N.y,N.z),f.push(lt/A),f.push(1-V/T),J+=1}}for(let V=0;V<T;V++)for(let it=0;it<A;it++){const lt=h+it+F*V,ut=h+it+F*(V+1),mt=h+(it+1)+F*(V+1),Tt=h+(it+1)+F*V;l.push(lt,ut,Tt),l.push(ut,mt,Tt),H+=6}a.addGroup(d,H,_),d+=H,h+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ds(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=ds(i[e]);for(const s in n)t[s]=n[s]}return t}function Md(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Ci={clone:ds,merge:We};var yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class He extends Ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yd,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=Md(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xu extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new L,tl=new nt,el=new nt;class qe extends xu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,tl,el),e.subVectors(el,tl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yi=-90,qi=1;class Sd extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qe(Yi,qi,t,e);s.layers=this.layers,this.add(s);const r=new qe(Yi,qi,t,e);r.layers=this.layers,this.add(r);const o=new qe(Yi,qi,t,e);o.layers=this.layers,this.add(o);const a=new qe(Yi,qi,t,e);a.layers=this.layers,this.add(a);const l=new qe(Yi,qi,t,e);l.layers=this.layers,this.add(l);const c=new qe(Yi,qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===io)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Mu extends Fe{constructor(t=[],e=ls,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bd extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tt(5,5,5),r=new He({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Kn});r.uniforms.tEquirect.value=e;const o=new I(s,r),a=e.minFilter;return e.minFilter===li&&(e.minFilter=xn),new Sd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class $t extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ed={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ed)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ac{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=e}clone(){return new ac(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yu extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Td{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Va,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ve=new L;class so{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new so(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class un extends Ms{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ji;const Ps=new L,Zi=new L,$i=new L,Ki=new nt,Ls=new nt,wu=new ce,Ur=new L,Is=new L,Nr=new L,nl=new nt,Go=new nt,il=new nt;class Sn extends Te{constructor(t=new un){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Td(e,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new so(n,3,0,!1)),Ji.setAttribute("uv",new so(n,2,3,!1))}this.geometry=Ji,this.material=t,this.center=new nt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zi.setFromMatrixScale(this.matrixWorld),wu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zi.multiplyScalar(-$i.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Fr(Ur.set(-.5,-.5,0),$i,o,Zi,s,r),Fr(Is.set(.5,-.5,0),$i,o,Zi,s,r),Fr(Nr.set(.5,.5,0),$i,o,Zi,s,r),nl.set(0,0),Go.set(1,0),il.set(1,1);let a=t.ray.intersectTriangle(Ur,Is,Nr,!1,Ps);if(a===null&&(Fr(Is.set(-.5,.5,0),$i,o,Zi,s,r),Go.set(0,1),a=t.ray.intersectTriangle(Ur,Nr,Is,!1,Ps),a===null))return;const l=t.ray.origin.distanceTo(Ps);l<t.near||l>t.far||e.push({distance:l,point:Ps.clone(),uv:cn.getInterpolation(Ps,Ur,Is,Nr,nl,Go,il,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Fr(i,t,e,n,s,r){Ki.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ls.x=r*Ki.x-s*Ki.y,Ls.y=s*Ki.x+r*Ki.y):Ls.copy(Ki),i.copy(t),i.x+=Ls.x,i.y+=Ls.y,i.applyMatrix4(wu)}class Ad extends Fe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=en,u=en,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl extends Pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ji=new ce,rl=new ce,Or=[],ol=new Di,Cd=new ce,Ds=new I,Us=new ur;class tn extends I{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),ol.copy(t.boundingBox).applyMatrix4(ji),this.boundingBox.union(ol)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ur),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),Us.copy(t.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(n),t.ray.intersectsSphere(Us)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ji),rl.multiplyMatrices(n,ji),Ds.matrixWorld=rl,Ds.raycast(t,Or);for(let o=0,a=Or.length;o<a;o++){const l=Or[o];l.instanceId=r,l.object=this,e.push(l)}Or.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new sl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ad(new Float32Array(s*this.count),s,this.count,ec,Pn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Vo=new L,Rd=new L,Pd=new te;class ci{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Vo.subVectors(n,e).cross(Rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pd.getNormalMatrix(t),s=this.coplanarPoint(Vo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new ur,Ld=new nt(.5,.5),Br=new L;class cc{constructor(t=new ci,e=new ci,n=new ci,s=new ci,r=new ci,o=new ci){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],w=r[12],y=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-o,d-u,p-g,E-w).normalize(),s[1].setComponents(c+o,d+u,p+g,E+w).normalize(),s[2].setComponents(c+a,d+f,p+x,E+y).normalize(),s[3].setComponents(c-a,d-f,p-x,E-y).normalize(),n)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,d-h,p-m,E-M).normalize();else if(s[4].setComponents(c-l,d-h,p-m,E-M).normalize(),e===Ln)s[5].setComponents(c+l,d+h,p+m,E+M).normalize();else if(e===io)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){gi.center.set(0,0,0);const e=Ld.distanceTo(t.center);return gi.radius=.7071067811865476+e,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Br.x=s.normal.x>0?t.max.x:t.min.x,Br.y=s.normal.y>0?t.max.y:t.min.y,Br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vn extends Fe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Su extends Fe{constructor(t,e,n=Ai,s,r,o,a=en,l=en,c,u=tr,f=1){if(u!==tr&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new oc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class bu extends Fe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class lc extends be{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],u=e/2,f=Math.PI/2*t,h=e,d=2*f+h,g=n*2+r,x=s+1,m=new L,p=new L;for(let w=0;w<=g;w++){let y=0,M=0,E=0,b=0;if(w<=n){const _=w/n,v=_*Math.PI/2;M=-u-t*Math.cos(v),E=t*Math.sin(v),b=-t*Math.cos(v),y=_*f}else if(w<=n+r){const _=(w-n)/r;M=-u+_*e,E=t,b=0,y=f+_*h}else{const _=(w-n-r)/n,v=_*Math.PI/2;M=u+t*Math.sin(v),E=t*Math.cos(v),b=t*Math.sin(v),y=f+h+_*f}const A=Math.max(0,Math.min(1,y/d));let T=0;w===0?T=.5/s:w===g&&(T=-.5/s);for(let _=0;_<=s;_++){const v=_/s,P=v*Math.PI*2,D=Math.sin(P),O=Math.cos(P);p.x=-E*O,p.y=M,p.z=E*D,a.push(p.x,p.y,p.z),m.set(-E*O,b,E*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(v+T,A)}if(w>0){const _=(w-1)*x;for(let v=0;v<s;v++){const P=_+v,D=_+v+1,O=w*x+v,B=w*x+v+1;o.push(P,D,O),o.push(D,B,O)}}}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lc(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class uc extends be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new L,u=new nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qt extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const x=[],m=n/2;let p=0;w(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function w(){const M=new L,E=new L;let b=0;const A=(e-t)/n;for(let T=0;T<=r;T++){const _=[],v=T/r,P=v*(e-t)+t;for(let D=0;D<=s;D++){const O=D/s,B=O*l+a,F=Math.sin(B),k=Math.cos(B);E.x=P*F,E.y=-v*n+m,E.z=P*k,f.push(E.x,E.y,E.z),M.set(F,A,k).normalize(),h.push(M.x,M.y,M.z),d.push(O,1-v),_.push(g++)}x.push(_)}for(let T=0;T<s;T++)for(let _=0;_<r;_++){const v=x[_][T],P=x[_+1][T],D=x[_+1][T+1],O=x[_][T+1];(t>0||_!==0)&&(u.push(v,P,O),b+=3),(e>0||_!==r-1)&&(u.push(P,D,O),b+=3)}c.addGroup(p,b,0),p+=b}function y(M){const E=g,b=new nt,A=new L;let T=0;const _=M===!0?t:e,v=M===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,m*v,0),h.push(0,v,0),d.push(.5,.5),g++;const P=g;for(let D=0;D<=s;D++){const B=D/s*l+a,F=Math.cos(B),k=Math.sin(B);A.x=_*k,A.y=m*v,A.z=_*F,f.push(A.x,A.y,A.z),h.push(0,v,0),b.x=F*.5+.5,b.y=k*.5*v+.5,d.push(b.x,b.y),g++}for(let D=0;D<s;D++){const O=E+D,B=P+D;M===!0?u.push(B,B+1,O):u.push(B+1,B,O),T+=3}c.addGroup(p,T,M===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sn extends qt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new sn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hr extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const y=new L,M=new L,E=new L;for(let b=0;b<e.length;b+=3)d(e[b+0],y),d(e[b+1],M),d(e[b+2],E),l(y,M,E,w)}function l(w,y,M,E){const b=E+1,A=[];for(let T=0;T<=b;T++){A[T]=[];const _=w.clone().lerp(M,T/b),v=y.clone().lerp(M,T/b),P=b-T;for(let D=0;D<=P;D++)D===0&&T===b?A[T][D]=_:A[T][D]=_.clone().lerp(v,D/P)}for(let T=0;T<b;T++)for(let _=0;_<2*(b-T)-1;_++){const v=Math.floor(_/2);_%2===0?(h(A[T][v+1]),h(A[T+1][v]),h(A[T][v])):(h(A[T][v+1]),h(A[T+1][v+1]),h(A[T+1][v]))}}function c(w){const y=new L;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(w),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function u(){const w=new L;for(let y=0;y<r.length;y+=3){w.x=r[y+0],w.y=r[y+1],w.z=r[y+2];const M=m(w)/2/Math.PI+.5,E=p(w)/Math.PI+.5;o.push(M,1-E)}g(),f()}function f(){for(let w=0;w<o.length;w+=6){const y=o[w+0],M=o[w+2],E=o[w+4],b=Math.max(y,M,E),A=Math.min(y,M,E);b>.9&&A<.1&&(y<.2&&(o[w+0]+=1),M<.2&&(o[w+2]+=1),E<.2&&(o[w+4]+=1))}}function h(w){r.push(w.x,w.y,w.z)}function d(w,y){const M=w*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function g(){const w=new L,y=new L,M=new L,E=new L,b=new nt,A=new nt,T=new nt;for(let _=0,v=0;_<r.length;_+=9,v+=6){w.set(r[_+0],r[_+1],r[_+2]),y.set(r[_+3],r[_+4],r[_+5]),M.set(r[_+6],r[_+7],r[_+8]),b.set(o[v+0],o[v+1]),A.set(o[v+2],o[v+3]),T.set(o[v+4],o[v+5]),E.copy(w).add(y).add(M).divideScalar(3);const P=m(E);x(b,v+0,w,P),x(A,v+2,y,P),x(T,v+4,M,P)}}function x(w,y,M,E){E<0&&w.x===1&&(o[y]=w.x-1),M.x===0&&M.z===0&&(o[y]=E/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.vertices,t.indices,t.radius,t.details)}}class rs extends hr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rs(t.radius,t.detail)}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new nt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,s=[],r=[],o=[],a=new L,l=new ce;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ne(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ne(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hc extends Fn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Id extends hc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function dc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const zr=new L,Wo=new dc,Xo=new dc,Yo=new dc;class fs extends Fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(zr.subVectors(s[0],s[1]).add(s[0]),c=zr);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(zr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=zr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Wo.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,x,m),Xo.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,x,m),Yo.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Wo.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Xo.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Yo.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Wo.calc(l),Xo.calc(l),Yo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function al(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Dd(i,t){const e=1-i;return e*e*t}function Ud(i,t){return 2*(1-i)*i*t}function Nd(i,t){return i*i*t}function Vs(i,t,e,n){return Dd(i,t)+Ud(i,e)+Nd(i,n)}function Fd(i,t){const e=1-i;return e*e*e*t}function Od(i,t){const e=1-i;return 3*e*e*i*t}function Bd(i,t){return 3*(1-i)*i*i*t}function zd(i,t){return i*i*i*t}function Ws(i,t,e,n,s){return Fd(i,t)+Od(i,e)+Bd(i,n)+zd(i,s)}class Eu extends Fn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ws(t,s.x,r.x,o.x,a.x),Ws(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kd extends Fn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ws(t,s.x,r.x,o.x,a.x),Ws(t,s.y,r.y,o.y,a.y),Ws(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tu extends Fn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hd extends Fn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Au extends Fn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vs(t,s.x,r.x,o.x),Vs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cu extends Fn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vs(t,s.x,r.x,o.x),Vs(t,s.y,r.y,o.y),Vs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ru extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(al(a,l.x,c.x,u.x,f.x),al(a,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var ro=Object.freeze({__proto__:null,ArcCurve:Id,CatmullRomCurve3:fs,CubicBezierCurve:Eu,CubicBezierCurve3:kd,EllipseCurve:hc,LineCurve:Tu,LineCurve3:Hd,QuadraticBezierCurve:Au,QuadraticBezierCurve3:Cu,SplineCurve:Ru});class Gd extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ro[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ro[s.type]().fromJSON(s))}return this}}class cl extends Gd{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Tu(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Au(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Eu(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ru(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new hc(t,e,n,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class dr extends cl{constructor(t){super(t),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new cl().fromJSON(s))}return this}}function Vd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Pu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Jd(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let u=-1/0,f=-1/0;for(let h=e;h<s;h+=e){const d=i[h],g=i[h+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>f&&(f=g)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return rr(r,o,e,a,l,c,0),o}function Pu(i,t,e,n,s){let r;if(s===of(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=ll(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=ll(o/n|0,i[o],i[o+1],r);return r&&ps(r,r.next)&&(ar(r),r=r.next),r}function Ri(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ps(e,e.next)||Se(e.prev,e,e.next)===0)){if(ar(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function rr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Qd(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Xd(i,n,s,r):Wd(i)){t.push(l.i,i.i,c.i),ar(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Yd(Ri(i),t),rr(i,t,e,n,s,r,2)):o===2&&qd(i,t,e,n,s,r):rr(Ri(i),t,e,n,s,r,1);break}}}function Wd(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),f=Math.min(a,l,c),h=Math.max(s,r,o),d=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Bs(s,a,r,l,o,c,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xd(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,l,c),g=Math.min(u,f,h),x=Math.max(a,l,c),m=Math.max(u,f,h),p=Wa(d,g,t,e,n),w=Wa(x,m,t,e,n);let y=i.prevZ,M=i.nextZ;for(;y&&y.z>=p&&M&&M.z<=w;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Bs(a,u,l,f,c,h,y.x,y.y)&&Se(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Bs(a,u,l,f,c,h,M.x,M.y)&&Se(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Bs(a,u,l,f,c,h,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=w;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Bs(a,u,l,f,c,h,M.x,M.y)&&Se(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Yd(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ps(n,s)&&Iu(n,e,e.next,s)&&or(n,s)&&or(s,n)&&(t.push(n.i,e.i,s.i),ar(e),ar(e.next),e=i=s),e=e.next}while(e!==i);return Ri(e)}function qd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nf(o,a)){let l=Du(o,a);o=Ri(o,o.next),l=Ri(l,l.next),rr(o,t,e,n,s,r,0),rr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Jd(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Pu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ef(c))}s.sort(Zd);for(let r=0;r<s.length;r++)e=$d(s[r],e);return e}function Zd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function $d(i,t){const e=Kd(i,t);if(!e)return t;const n=Du(e,i);return Ri(n,n.next),Ri(e,e.next)}function Kd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(ps(i,e))return e;do{if(ps(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Lu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);or(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&jd(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function jd(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function Qd(i,t,e,n){let s=i;do s.z===0&&(s.z=Wa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,tf(s)}function tf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Wa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ef(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Lu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Bs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Lu(i,t,e,n,s,r,o,a)}function nf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!sf(i,t)&&(or(i,t)&&or(t,i)&&rf(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||ps(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ps(i,t){return i.x===t.x&&i.y===t.y}function Iu(i,t,e,n){const s=Hr(Se(i,t,e)),r=Hr(Se(i,t,n)),o=Hr(Se(e,n,i)),a=Hr(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&kr(i,e,t)||r===0&&kr(i,n,t)||o===0&&kr(e,i,n)||a===0&&kr(e,t,n))}function kr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Hr(i){return i>0?1:i<0?-1:0}function sf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Iu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function or(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function rf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Du(i,t){const e=Xa(i.i,i.x,i.y),n=Xa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ll(i,t,e,n){const s=Xa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ar(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xa(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function of(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class af{static triangulate(t,e,n=2){return Vd(t,e,n)}}class Zn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Zn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ul(t),hl(n,t);let o=t.length;e.forEach(ul);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,hl(n,e[l]);const a=af.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function ul(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function hl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class fc extends be{constructor(t=new dr([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:cf;let y,M=!1,E,b,A,T;p&&(y=p.getSpacedPoints(u),M=!0,h=!1,E=p.computeFrenetFrames(u,!1),b=new L,A=new L,T=new L),h||(m=0,d=0,g=0,x=0);const _=a.extractPoints(c);let v=_.shape;const P=_.holes;if(!Zn.isClockWise(v)){v=v.reverse();for(let ht=0,at=P.length;ht<at;ht++){const st=P[ht];Zn.isClockWise(st)&&(P[ht]=st.reverse())}}function O(ht){const st=10000000000000001e-36;let rt=ht[0];for(let yt=1;yt<=ht.length;yt++){const Z=yt%ht.length,St=ht[Z],Zt=St.x-rt.x,Wt=St.y-rt.y,R=Zt*Zt+Wt*Wt,S=Math.max(Math.abs(St.x),Math.abs(St.y),Math.abs(rt.x),Math.abs(rt.y)),X=st*S*S;if(R<=X){ht.splice(Z,1),yt--;continue}rt=St}}O(v),P.forEach(O);const B=P.length,F=v;for(let ht=0;ht<B;ht++){const at=P[ht];v=v.concat(at)}function k(ht,at,st){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(at,st)}const J=v.length;function H(ht,at,st){let rt,yt,Z;const St=ht.x-at.x,Zt=ht.y-at.y,Wt=st.x-ht.x,R=st.y-ht.y,S=St*St+Zt*Zt,X=St*R-Zt*Wt;if(Math.abs(X)>Number.EPSILON){const Y=Math.sqrt(S),dt=Math.sqrt(Wt*Wt+R*R),et=at.x-Zt/Y,Nt=at.y+St/Y,ft=st.x-R/dt,Dt=st.y+Wt/dt,Ft=((ft-et)*R-(Dt-Nt)*Wt)/(St*R-Zt*Wt);rt=et+St*Ft-ht.x,yt=Nt+Zt*Ft-ht.y;const _t=rt*rt+yt*yt;if(_t<=2)return new nt(rt,yt);Z=Math.sqrt(_t/2)}else{let Y=!1;St>Number.EPSILON?Wt>Number.EPSILON&&(Y=!0):St<-Number.EPSILON?Wt<-Number.EPSILON&&(Y=!0):Math.sign(Zt)===Math.sign(R)&&(Y=!0),Y?(rt=-Zt,yt=St,Z=Math.sqrt(S)):(rt=St,yt=Zt,Z=Math.sqrt(S/2))}return new nt(rt/Z,yt/Z)}const N=[];for(let ht=0,at=F.length,st=at-1,rt=ht+1;ht<at;ht++,st++,rt++)st===at&&(st=0),rt===at&&(rt=0),N[ht]=H(F[ht],F[st],F[rt]);const V=[];let it,lt=N.concat();for(let ht=0,at=B;ht<at;ht++){const st=P[ht];it=[];for(let rt=0,yt=st.length,Z=yt-1,St=rt+1;rt<yt;rt++,Z++,St++)Z===yt&&(Z=0),St===yt&&(St=0),it[rt]=H(st[rt],st[Z],st[St]);V.push(it),lt=lt.concat(it)}let ut;if(m===0)ut=Zn.triangulateShape(F,P);else{const ht=[],at=[];for(let st=0;st<m;st++){const rt=st/m,yt=d*Math.cos(rt*Math.PI/2),Z=g*Math.sin(rt*Math.PI/2)+x;for(let St=0,Zt=F.length;St<Zt;St++){const Wt=k(F[St],N[St],Z);Et(Wt.x,Wt.y,-yt),rt===0&&ht.push(Wt)}for(let St=0,Zt=B;St<Zt;St++){const Wt=P[St];it=V[St];const R=[];for(let S=0,X=Wt.length;S<X;S++){const Y=k(Wt[S],it[S],Z);Et(Y.x,Y.y,-yt),rt===0&&R.push(Y)}rt===0&&at.push(R)}}ut=Zn.triangulateShape(ht,at)}const mt=ut.length,Tt=g+x;for(let ht=0;ht<J;ht++){const at=h?k(v[ht],lt[ht],Tt):v[ht];M?(A.copy(E.normals[0]).multiplyScalar(at.x),b.copy(E.binormals[0]).multiplyScalar(at.y),T.copy(y[0]).add(A).add(b),Et(T.x,T.y,T.z)):Et(at.x,at.y,0)}for(let ht=1;ht<=u;ht++)for(let at=0;at<J;at++){const st=h?k(v[at],lt[at],Tt):v[at];M?(A.copy(E.normals[ht]).multiplyScalar(st.x),b.copy(E.binormals[ht]).multiplyScalar(st.y),T.copy(y[ht]).add(A).add(b),Et(T.x,T.y,T.z)):Et(st.x,st.y,f/u*ht)}for(let ht=m-1;ht>=0;ht--){const at=ht/m,st=d*Math.cos(at*Math.PI/2),rt=g*Math.sin(at*Math.PI/2)+x;for(let yt=0,Z=F.length;yt<Z;yt++){const St=k(F[yt],N[yt],rt);Et(St.x,St.y,f+st)}for(let yt=0,Z=P.length;yt<Z;yt++){const St=P[yt];it=V[yt];for(let Zt=0,Wt=St.length;Zt<Wt;Zt++){const R=k(St[Zt],it[Zt],rt);M?Et(R.x,R.y+y[u-1].y,y[u-1].x+st):Et(R.x,R.y,f+st)}}}q(),j();function q(){const ht=s.length/3;if(h){let at=0,st=J*at;for(let rt=0;rt<mt;rt++){const yt=ut[rt];Rt(yt[2]+st,yt[1]+st,yt[0]+st)}at=u+m*2,st=J*at;for(let rt=0;rt<mt;rt++){const yt=ut[rt];Rt(yt[0]+st,yt[1]+st,yt[2]+st)}}else{for(let at=0;at<mt;at++){const st=ut[at];Rt(st[2],st[1],st[0])}for(let at=0;at<mt;at++){const st=ut[at];Rt(st[0]+J*u,st[1]+J*u,st[2]+J*u)}}n.addGroup(ht,s.length/3-ht,0)}function j(){const ht=s.length/3;let at=0;xt(F,at),at+=F.length;for(let st=0,rt=P.length;st<rt;st++){const yt=P[st];xt(yt,at),at+=yt.length}n.addGroup(ht,s.length/3-ht,1)}function xt(ht,at){let st=ht.length;for(;--st>=0;){const rt=st;let yt=st-1;yt<0&&(yt=ht.length-1);for(let Z=0,St=u+m*2;Z<St;Z++){const Zt=J*Z,Wt=J*(Z+1),R=at+rt+Zt,S=at+yt+Zt,X=at+yt+Wt,Y=at+rt+Wt;Ht(R,S,X,Y)}}}function Et(ht,at,st){l.push(ht),l.push(at),l.push(st)}function Rt(ht,at,st){ie(ht),ie(at),ie(st);const rt=s.length/3,yt=w.generateTopUV(n,s,rt-3,rt-2,rt-1);U(yt[0]),U(yt[1]),U(yt[2])}function Ht(ht,at,st,rt){ie(ht),ie(at),ie(rt),ie(at),ie(st),ie(rt);const yt=s.length/3,Z=w.generateSideWallUV(n,s,yt-6,yt-3,yt-2,yt-1);U(Z[0]),U(Z[1]),U(Z[3]),U(Z[1]),U(Z[2]),U(Z[3])}function ie(ht){s.push(l[ht*3+0]),s.push(l[ht*3+1]),s.push(l[ht*3+2])}function U(ht){r.push(ht.x),r.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return lf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ro[s.type]().fromJSON(s)),new fc(n,t.options)}}const cf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new nt(r,o),new nt(a,l),new nt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new nt(o,1-l),new nt(c,1-f),new nt(h,1-g),new nt(x,1-p)]:[new nt(a,1-l),new nt(u,1-f),new nt(d,1-g),new nt(m,1-p)]}};function lf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class pc extends hr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new pc(t.radius,t.detail)}}class ho extends be{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ne(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,f=new L,h=new nt,d=new L,g=new L,x=new L;let m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let w=0;w<=e;w++){const y=n+w*u*s,M=Math.sin(y),E=Math.cos(y);for(let b=0;b<=t.length-1;b++){f.x=t[b].x*M,f.y=t[b].y,f.z=t[b].x*E,o.push(f.x,f.y,f.z),h.x=w/e,h.y=b/(t.length-1),a.push(h.x,h.y);const A=l[3*b+0]*M,T=l[3*b+1],_=l[3*b+0]*E;c.push(A,T,_)}}for(let w=0;w<e;w++)for(let y=0;y<t.length-1;y++){const M=y+w*t.length,E=M,b=M+t.length,A=M+t.length+1,T=M+1;r.push(E,b,T),r.push(A,T,b)}this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("uv",new Qt(a,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.points,t.segments,t.phiStart,t.phiLength)}}class fo extends hr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fo(t.radius,t.detail)}}class de extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const w=p*h-o;for(let y=0;y<c;y++){const M=y*f-r;g.push(M,-w,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const y=w+c*p,M=w+c*(p+1),E=w+1+c*(p+1),b=w+1+c*p;d.push(y,M,b),d.push(M,E,b)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.width,t.height,t.widthSegments,t.heightSegments)}}class po extends be{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let f=t;const h=(e-t)/s,d=new L,g=new nt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=r+m/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const w=p+m,y=w,M=w+n+1,E=w+n+2,b=w+1;a.push(y,M,b),a.push(M,E,b)}}this.setIndex(a),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class mo extends be{constructor(t=new dr([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(o,2));function c(u){const f=s.length/3,h=u.extractPoints(e);let d=h.shape;const g=h.holes;Zn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const w=g[m];Zn.isClockWise(w)===!0&&(g[m]=w.reverse())}const x=Zn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const w=g[m];d=d.concat(w)}for(let m=0,p=d.length;m<p;m++){const w=d[m];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let m=0,p=x.length;m<p;m++){const w=x[m],y=w[0]+f,M=w[1]+f,E=w[2]+f;n.push(y,M,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return uf(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new mo(n,t.curveSegments)}}function uf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Me extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new L,h=new L,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const w=[],y=p/n;let M=0;p===0&&o===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let E=0;E<=e;E++){const b=E/e;f.x=-t*Math.cos(s+b*r)*Math.sin(o+y*a),f.y=t*Math.cos(o+y*a),f.z=t*Math.sin(s+b*r)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(b+M,1-y),w.push(c++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const y=u[p][w+1],M=u[p][w],E=u[p+1][w],b=u[p+1][w+1];(p!==0||o>0)&&d.push(y,M,b),(p!==n-1||l<Math.PI)&&d.push(M,E,b)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ei extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new L,f=new L,h=new L;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*r,m=d/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,w=(s+1)*d+g;o.push(x,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ms extends be{constructor(t=new Cu(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new nt;let u=new L;const f=[],h=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function x(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),w(),p()}function m(y){u=t.getPointAt(y/e,u);const M=o.normals[y],E=o.binormals[y];for(let b=0;b<=s;b++){const A=b/s*Math.PI*2,T=Math.sin(A),_=-Math.cos(A);l.x=_*M.x+T*E.x,l.y=_*M.y+T*E.y,l.z=_*M.z+T*E.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let M=1;M<=s;M++){const E=(s+1)*(y-1)+(M-1),b=(s+1)*y+(M-1),A=(s+1)*y+M,T=(s+1)*(y-1)+M;g.push(E,b,T),g.push(b,A,T)}}function w(){for(let y=0;y<=e;y++)for(let M=0;M<=s;M++)c.x=y/e,c.y=M/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ms(new ro[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class hf extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gt extends Ms{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uu,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class df extends Ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ff extends Ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class pf{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const mf=new pf;class mc{constructor(t){this.manager=t!==void 0?t:mf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}mc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qi=new WeakMap;class gf extends mc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=qo.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let f=Qi.get(o);f===void 0&&(f=[],Qi.set(o,f)),f.push({onLoad:e,onError:s})}return o}const a=ir("img");function l(){u(),e&&e(this);const f=Qi.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}Qi.delete(this),r.manager.itemEnd(t)}function c(f){u(),s&&s(f),qo.remove(`image:${t}`);const h=Qi.get(this)||[];for(let d=0;d<h.length;d++){const g=h[d];g.onError&&g.onError(f)}Qi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),qo.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class _f extends mc{constructor(t){super(t)}load(t,e,n,s){const r=new Fe,o=new gf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class gc extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class vf extends gc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Jo=new ce,dl=new L,fl=new L;class Uu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cc,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dl.setFromMatrixPosition(t.matrixWorld),e.position.copy(dl),fl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fl),e.updateMatrixWorld(),Jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const pl=new ce,Ns=new L,Zo=new L;class xf extends Uu{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ns.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ns),Zo.copy(n.position),Zo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Zo),n.updateMatrixWorld(),s.makeTranslation(-Ns.x,-Ns.y,-Ns.z),pl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl,n.coordinateSystem,n.reversedDepth)}}class Tn extends gc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class _c extends xu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Mf extends Uu{constructor(){super(new _c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nu extends gc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Mf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yf extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class wf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ml(i,t,e,n){const s=Sf(n);switch(e){case au:return i*t;case ec:return i*t/s.components*s.byteLength;case nc:return i*t/s.components*s.byteLength;case lu:return i*t*2/s.components*s.byteLength;case ic:return i*t*2/s.components*s.byteLength;case cu:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case sc:return i*t*4/s.components*s.byteLength;case qr:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:case va:return Math.max(i,16)*Math.max(t,8)/4;case ma:case _a:return Math.max(i,8)*Math.max(t,8)/2;case xa:case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fa:case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*16;case za:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ha:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sf(i){switch(i){case Un:case iu:return{byteLength:1,components:1};case js:case su:case In:return{byteLength:2,components:1};case Qa:case tc:return{byteLength:2,components:4};case Ai:case ja:case Pn:return{byteLength:4,components:1};case ru:case ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);function Fu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function bf(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const x=f[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,If=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Df=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Of=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bf=`#ifdef USE_IRIDESCENCE
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
#endif`,zf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jf=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,$f=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ip=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dp=`#ifdef USE_GRADIENTMAP
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
}`,fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,_p=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,bp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Up=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,lm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xm=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Em=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Lm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Im=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Dm=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Vm=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,qm=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Zm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Km=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:Ef,alphahash_pars_fragment:Tf,alphamap_fragment:Af,alphamap_pars_fragment:Cf,alphatest_fragment:Rf,alphatest_pars_fragment:Pf,aomap_fragment:Lf,aomap_pars_fragment:If,batching_pars_vertex:Df,batching_vertex:Uf,begin_vertex:Nf,beginnormal_vertex:Ff,bsdfs:Of,iridescence_fragment:Bf,bumpmap_pars_fragment:zf,clipping_planes_fragment:kf,clipping_planes_pars_fragment:Hf,clipping_planes_pars_vertex:Gf,clipping_planes_vertex:Vf,color_fragment:Wf,color_pars_fragment:Xf,color_pars_vertex:Yf,color_vertex:qf,common:Jf,cube_uv_reflection_fragment:Zf,defaultnormal_vertex:$f,displacementmap_pars_vertex:Kf,displacementmap_vertex:jf,emissivemap_fragment:Qf,emissivemap_pars_fragment:tp,colorspace_fragment:ep,colorspace_pars_fragment:np,envmap_fragment:ip,envmap_common_pars_fragment:sp,envmap_pars_fragment:rp,envmap_pars_vertex:op,envmap_physical_pars_fragment:_p,envmap_vertex:ap,fog_vertex:cp,fog_pars_vertex:lp,fog_fragment:up,fog_pars_fragment:hp,gradientmap_pars_fragment:dp,lightmap_pars_fragment:fp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:vp,lights_toon_pars_fragment:xp,lights_phong_fragment:Mp,lights_phong_pars_fragment:yp,lights_physical_fragment:wp,lights_physical_pars_fragment:Sp,lights_fragment_begin:bp,lights_fragment_maps:Ep,lights_fragment_end:Tp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Pp,map_fragment:Lp,map_pars_fragment:Ip,map_particle_fragment:Dp,map_particle_pars_fragment:Up,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Op,morphcolor_vertex:Bp,morphnormal_vertex:zp,morphtarget_pars_vertex:kp,morphtarget_vertex:Hp,normal_fragment_begin:Gp,normal_fragment_maps:Vp,normal_pars_fragment:Wp,normal_pars_vertex:Xp,normal_vertex:Yp,normalmap_pars_fragment:qp,clearcoat_normal_fragment_begin:Jp,clearcoat_normal_fragment_maps:Zp,clearcoat_pars_fragment:$p,iridescence_pars_fragment:Kp,opaque_fragment:jp,packing:Qp,premultiplied_alpha_fragment:tm,project_vertex:em,dithering_fragment:nm,dithering_pars_fragment:im,roughnessmap_fragment:sm,roughnessmap_pars_fragment:rm,shadowmap_pars_fragment:om,shadowmap_pars_vertex:am,shadowmap_vertex:cm,shadowmask_pars_fragment:lm,skinbase_vertex:um,skinning_pars_vertex:hm,skinning_vertex:dm,skinnormal_vertex:fm,specularmap_fragment:pm,specularmap_pars_fragment:mm,tonemapping_fragment:gm,tonemapping_pars_fragment:_m,transmission_fragment:vm,transmission_pars_fragment:xm,uv_pars_fragment:Mm,uv_pars_vertex:ym,uv_vertex:wm,worldpos_vertex:Sm,background_vert:bm,background_frag:Em,backgroundCube_vert:Tm,backgroundCube_frag:Am,cube_vert:Cm,cube_frag:Rm,depth_vert:Pm,depth_frag:Lm,distanceRGBA_vert:Im,distanceRGBA_frag:Dm,equirect_vert:Um,equirect_frag:Nm,linedashed_vert:Fm,linedashed_frag:Om,meshbasic_vert:Bm,meshbasic_frag:zm,meshlambert_vert:km,meshlambert_frag:Hm,meshmatcap_vert:Gm,meshmatcap_frag:Vm,meshnormal_vert:Wm,meshnormal_frag:Xm,meshphong_vert:Ym,meshphong_frag:qm,meshphysical_vert:Jm,meshphysical_frag:Zm,meshtoon_vert:$m,meshtoon_frag:Km,points_vert:jm,points_frag:Qm,shadow_vert:t0,shadow_frag:e0,sprite_vert:n0,sprite_frag:i0},At={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},An={basic:{uniforms:We([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:We([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:We([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:We([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:We([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:We([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:We([At.points,At.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:We([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:We([At.common,At.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:We([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:We([At.sprite,At.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:We([At.common,At.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:We([At.lights,At.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};An.physical={uniforms:We([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Gr={r:0,b:0,g:0},_i=new Nn,s0=new ce;function r0(i,t,e,n,s,r,o){const a=new Lt(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function x(y){let M=!1;const E=g(y);E===null?p(a,l):E&&E.isColor&&(p(E,1),M=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,M){const E=g(M);E&&(E.isCubeTexture||E.mapping===uo)?(u===void 0&&(u=new I(new tt(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:ds(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),_i.copy(M.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(s0.makeRotationFromEuler(_i)),u.material.toneMapped=re.getTransfer(E.colorSpace)!==ue,(f!==E||h!==E.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new I(new de(2,2),new He({name:"BackgroundMaterial",uniforms:ds(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=re.getTransfer(E.colorSpace)!==ue,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,M){y.getRGB(Gr,vu(i)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,M,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:m,dispose:w}}function o0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(v,P,D,O,B){let F=!1;const k=f(O,D,P);r!==k&&(r=k,c(r.object)),F=d(v,O,D,B),F&&g(v,O,D,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,M(v,P,D,O),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function f(v,P,D){const O=D.wireframe===!0;let B=n[v.id];B===void 0&&(B={},n[v.id]=B);let F=B[P.id];F===void 0&&(F={},B[P.id]=F);let k=F[O];return k===void 0&&(k=h(l()),F[O]=k),k}function h(v){const P=[],D=[],O=[];for(let B=0;B<e;B++)P[B]=0,D[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:O,object:v,attributes:{},index:null}}function d(v,P,D,O){const B=r.attributes,F=P.attributes;let k=0;const J=D.getAttributes();for(const H in J)if(J[H].location>=0){const V=B[H];let it=F[H];if(it===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),V===void 0||V.attribute!==it||it&&V.data!==it.data)return!0;k++}return r.attributesNum!==k||r.index!==O}function g(v,P,D,O){const B={},F=P.attributes;let k=0;const J=D.getAttributes();for(const H in J)if(J[H].location>=0){let V=F[H];V===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(V=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(V=v.instanceColor));const it={};it.attribute=V,V&&V.data&&(it.data=V.data),B[H]=it,k++}r.attributes=B,r.attributesNum=k,r.index=O}function x(){const v=r.newAttributes;for(let P=0,D=v.length;P<D;P++)v[P]=0}function m(v){p(v,0)}function p(v,P){const D=r.newAttributes,O=r.enabledAttributes,B=r.attributeDivisors;D[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),B[v]!==P&&(i.vertexAttribDivisor(v,P),B[v]=P)}function w(){const v=r.newAttributes,P=r.enabledAttributes;for(let D=0,O=P.length;D<O;D++)P[D]!==v[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function y(v,P,D,O,B,F,k){k===!0?i.vertexAttribIPointer(v,P,D,B,F):i.vertexAttribPointer(v,P,D,O,B,F)}function M(v,P,D,O){x();const B=O.attributes,F=D.getAttributes(),k=P.defaultAttributeValues;for(const J in F){const H=F[J];if(H.location>=0){let N=B[J];if(N===void 0&&(J==="instanceMatrix"&&v.instanceMatrix&&(N=v.instanceMatrix),J==="instanceColor"&&v.instanceColor&&(N=v.instanceColor)),N!==void 0){const V=N.normalized,it=N.itemSize,lt=t.get(N);if(lt===void 0)continue;const ut=lt.buffer,mt=lt.type,Tt=lt.bytesPerElement,q=mt===i.INT||mt===i.UNSIGNED_INT||N.gpuType===ja;if(N.isInterleavedBufferAttribute){const j=N.data,xt=j.stride,Et=N.offset;if(j.isInstancedInterleavedBuffer){for(let Rt=0;Rt<H.locationSize;Rt++)p(H.location+Rt,j.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Rt=0;Rt<H.locationSize;Rt++)m(H.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let Rt=0;Rt<H.locationSize;Rt++)y(H.location+Rt,it/H.locationSize,mt,V,xt*Tt,(Et+it/H.locationSize*Rt)*Tt,q)}else{if(N.isInstancedBufferAttribute){for(let j=0;j<H.locationSize;j++)p(H.location+j,N.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let j=0;j<H.locationSize;j++)m(H.location+j);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let j=0;j<H.locationSize;j++)y(H.location+j,it/H.locationSize,mt,V,it*Tt,it/H.locationSize*j*Tt,q)}}else if(k!==void 0){const V=k[J];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(H.location,V);break;case 3:i.vertexAttrib3fv(H.location,V);break;case 4:i.vertexAttrib4fv(H.location,V);break;default:i.vertexAttrib1fv(H.location,V)}}}}w()}function E(){T();for(const v in n){const P=n[v];for(const D in P){const O=P[D];for(const B in O)u(O[B].object),delete O[B];delete P[D]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const D in P){const O=P[D];for(const B in O)u(O[B].object),delete O[B];delete P[D]}delete n[v.id]}function A(v){for(const P in n){const D=n[P];if(D[v.id]===void 0)continue;const O=D[v.id];for(const B in O)u(O[B].object),delete O[B];delete D[v.id]}}function T(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:_,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function a0(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*h[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function c0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Mn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===In&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Un&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pn&&!T)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:E,maxSamples:b}}function l0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ci,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const w=r?0:n,y=w*4;let M=p.clippingState||null;l.value=M,M=u(g,h,y,d);for(let E=0;E!==y;++E)M[E]=e[E];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,M=d;y!==x;++y,M+=4)o.copy(f[y]).applyMatrix4(w,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function u0(i){let t=new WeakMap;function e(o,a){return a===da?o.mapping=ls:a===fa&&(o.mapping=us),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===da||a===fa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ns=4,gl=[.125,.215,.35,.446,.526,.582],wi=20,$o=new _c,_l=new Lt;let Ko=null,jo=0,Qo=0,ta=!1;const Mi=(1+Math.sqrt(5))/2,ts=1/Mi,vl=[new L(-Mi,ts,0),new L(Mi,ts,0),new L(-ts,0,Mi),new L(ts,0,Mi),new L(0,Mi,-ts),new L(0,Mi,ts),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],h0=new L;class Ya{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=h0}=r;Ko=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ko,jo,Qo),this._renderer.xr.enabled=ta,t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ko=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:In,format:Mn,colorSpace:hs,depthBuffer:!1},s=xl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d0(r)),this._blurMaterial=f0(r,t,e)}return s}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,$o)}_sceneToCubeUV(t,e,n,s,r){const l=new qe(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(_l),f.toneMapping=ui,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const x=new wn({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),m=new I(new tt,x);let p=!1;const w=t.background;w?w.isColor&&(x.color.copy(w),t.background=null,p=!0):(x.color.copy(_l),p=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const E=this._cubeSize;Vr(s,M*E,y>2?E:0,E,E),f.setRenderTarget(s),p&&f.render(m,l),f.render(t,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=h,t.background=w}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ls||t.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new I(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Vr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,$o)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vl[(s-r-1)%vl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new I(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*wi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):wi;m>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const p=[];let w=0;for(let A=0;A<wi;++A){const T=A/x,_=Math.exp(-T*T/2);p.push(_),A===0?w+=_:A<m&&(w+=2*_)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const M=this._sizeLods[s],E=3*M*(s>y-ns?s-y+ns:0),b=4*(this._cubeSize-M);Vr(e,E,b,3*M,2*M),l.setRenderTarget(e),l.render(f,$o)}}function d0(i){const t=[],e=[],n=[];let s=i;const r=i-ns+1+gl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ns?l=gl[o-i+ns-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*d),y=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let b=0;b<d;b++){const A=b%3*2/3-1,T=b>2?0:-1,_=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];w.set(_,x*g*b),y.set(h,m*g*b);const v=[b,b,b,b,b,b];M.set(v,p*g*b)}const E=new be;E.setAttribute("position",new Pe(w,x)),E.setAttribute("uv",new Pe(y,m)),E.setAttribute("faceIndex",new Pe(M,p)),t.push(E),s>ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xl(i,t,e){const n=new nn(i,t,e);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function f0(i,t,e){const n=new Float32Array(wi),s=new L(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Ml(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function yl(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function vc(){return`

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
	`}function p0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===da||l===fa,u=l===ls||l===us;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Ya(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Ya(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function m0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&sr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function g0(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let x=0;if(d!==null){const w=d.array;x=d.version;for(let y=0,M=w.length;y<M;y+=3){const E=w[y+0],b=w[y+1],A=w[y+2];h.push(E,b,b,A,A,E)}}else if(g!==void 0){const w=g.array;x=g.version;for(let y=0,M=w.length/3-1;y<M;y+=3){const E=y+0,b=y+1,A=y+2;h.push(E,b,b,A,A,E)}}else return;const m=new(du(h)?_u:gu)(h,1);m.version=x;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function _0(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,h*o,g),e.update(d,n,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function f(h,d,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=d[w]*x[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function v0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function x0(i,t,e){const n=new WeakMap,s=new le;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let v=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let E=a.attributes.position.count*M,b=1;E>t.maxTextureSize&&(b=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const A=new Float32Array(E*b*4*f),T=new fu(A,E,b,f);T.type=Pn,T.needsUpdate=!0;const _=M*4;for(let P=0;P<f;P++){const D=p[P],O=w[P],B=y[P],F=E*b*4*P;for(let k=0;k<D.count;k++){const J=k*_;g===!0&&(s.fromBufferAttribute(D,k),A[F+J+0]=s.x,A[F+J+1]=s.y,A[F+J+2]=s.z,A[F+J+3]=0),x===!0&&(s.fromBufferAttribute(O,k),A[F+J+4]=s.x,A[F+J+5]=s.y,A[F+J+6]=s.z,A[F+J+7]=0),m===!0&&(s.fromBufferAttribute(B,k),A[F+J+8]=s.x,A[F+J+9]=s.y,A[F+J+10]=s.z,A[F+J+11]=B.itemSize===4?s.w:1)}}h={count:f,texture:T,size:new nt(E,b)},n.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function M0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Ou=new Fe,wl=new Su(1,1),Bu=new fu,zu=new ad,ku=new Mu,Sl=[],bl=[],El=new Float32Array(16),Tl=new Float32Array(9),Al=new Float32Array(4);function ys(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Sl[s];if(r===void 0&&(r=new Float32Array(s),Sl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function go(i,t){let e=bl[t];e===void 0&&(e=new Int32Array(t),bl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function y0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function w0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function E0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;Al.set(n),i.uniformMatrix2fv(this.addr,!1,Al),Ie(e,n)}}function T0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;Tl.set(n),i.uniformMatrix3fv(this.addr,!1,Tl),Ie(e,n)}}function A0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;El.set(n),i.uniformMatrix4fv(this.addr,!1,El),Ie(e,n)}}function C0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function I0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function F0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wl.compareFunction=hu,r=wl):r=Ou,e.setTexture2D(t||r,s)}function O0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zu,s)}function B0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ku,s)}function z0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bu,s)}function k0(i){switch(i){case 5126:return y0;case 35664:return w0;case 35665:return S0;case 35666:return b0;case 35674:return E0;case 35675:return T0;case 35676:return A0;case 5124:case 35670:return C0;case 35667:case 35671:return R0;case 35668:case 35672:return P0;case 35669:case 35673:return L0;case 5125:return I0;case 36294:return D0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}function H0(i,t){i.uniform1fv(this.addr,t)}function G0(i,t){const e=ys(t,this.size,2);i.uniform2fv(this.addr,e)}function V0(i,t){const e=ys(t,this.size,3);i.uniform3fv(this.addr,e)}function W0(i,t){const e=ys(t,this.size,4);i.uniform4fv(this.addr,e)}function X0(i,t){const e=ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Y0(i,t){const e=ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function q0(i,t){const e=ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function J0(i,t){i.uniform1iv(this.addr,t)}function Z0(i,t){i.uniform2iv(this.addr,t)}function $0(i,t){i.uniform3iv(this.addr,t)}function K0(i,t){i.uniform4iv(this.addr,t)}function j0(i,t){i.uniform1uiv(this.addr,t)}function Q0(i,t){i.uniform2uiv(this.addr,t)}function tg(i,t){i.uniform3uiv(this.addr,t)}function eg(i,t){i.uniform4uiv(this.addr,t)}function ng(i,t,e){const n=this.cache,s=t.length,r=go(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ou,r[o])}function ig(i,t,e){const n=this.cache,s=t.length,r=go(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zu,r[o])}function sg(i,t,e){const n=this.cache,s=t.length,r=go(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ku,r[o])}function rg(i,t,e){const n=this.cache,s=t.length,r=go(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bu,r[o])}function og(i){switch(i){case 5126:return H0;case 35664:return G0;case 35665:return V0;case 35666:return W0;case 35674:return X0;case 35675:return Y0;case 35676:return q0;case 5124:case 35670:return J0;case 35667:case 35671:return Z0;case 35668:case 35672:return $0;case 35669:case 35673:return K0;case 5125:return j0;case 36294:return Q0;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}class ag{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=k0(e.type)}}class cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=og(e.type)}}class lg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function Cl(i,t){i.seq.push(t),i.map[t.id]=t}function ug(i,t,e){const n=i.name,s=n.length;for(ea.lastIndex=0;;){const r=ea.exec(n),o=ea.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cl(e,c===void 0?new ag(a,i,t):new cg(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new lg(a),Cl(e,f)),e=f}}}class Kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ug(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Rl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const hg=37297;let dg=0;function fg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Pl=new te;function pg(i){re._getMatrix(Pl,re.workingColorSpace,i);const t=`mat3( ${Pl.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case no:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ll(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+fg(i.getShaderSource(t),a)}else return r}function mg(i,t){const e=pg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gg(i,t){let e;switch(t){case $l:e="Linear";break;case Kl:e="Reinhard";break;case jl:e="Cineon";break;case Ka:e="ACESFilmic";break;case tu:e="AgX";break;case eu:e="Neutral";break;case Ql:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Wr=new L;function _g(){re.getLuminanceCoefficients(Wr);const i=Wr.x.toFixed(4),t=Wr.y.toFixed(4),e=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function xg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function zs(i){return i!==""}function Il(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(i){return i.replace(yg,Sg)}const wg=new Map;function Sg(i,t){let e=ee[t];if(e===void 0){const n=wg.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qa(e)}const bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(i){return i.replace(bg,Eg)}function Eg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ql?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ag(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case us:t="ENVMAP_TYPE_CUBE";break;case uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===us&&(t="ENVMAP_MODE_REFRACTION"),t}function Rg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zl:t="ENVMAP_BLENDING_MULTIPLY";break;case Eh:t="ENVMAP_BLENDING_MIX";break;case Th:t="ENVMAP_BLENDING_ADD";break}return t}function Pg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Lg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Tg(e),c=Ag(e),u=Cg(e),f=Rg(e),h=Pg(e),d=vg(e),g=xg(r),x=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),p.length>0&&(p+=`
`)):(m=[Nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),p=[Nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?ee.tonemapping_pars_fragment:"",e.toneMapping!==ui?gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,mg("linearToOutputTexel",e.outputColorSpace),_g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),o=qa(o),o=Il(o,e),o=Dl(o,e),a=qa(a),a=Il(a,e),a=Dl(a,e),o=Ul(o),a=Ul(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=w+m+o,M=w+p+a,E=Rl(s,s.VERTEX_SHADER,y),b=Rl(s,s.FRAGMENT_SHADER,M);s.attachShader(x,E),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(E)||"",B=s.getShaderInfoLog(b)||"",F=D.trim(),k=O.trim(),J=B.trim();let H=!0,N=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,b);else{const V=Ll(s,E,"vertex"),it=Ll(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+V+`
`+it)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||J==="")&&(N=!1);N&&(P.diagnostics={runnable:H,programLog:F,vertexShader:{log:k,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(E),s.deleteShader(b),T=new Kr(s,x),_=Mg(s,x)}let T;this.getUniforms=function(){return T===void 0&&A(this),T};let _;this.getAttributes=function(){return _===void 0&&A(this),_};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,hg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=b,this}let Ig=0;class Dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ug(t),e.set(t,n)),n}}class Ug{constructor(t){this.id=Ig++,this.code=t,this.usedTimes=0}}function Ng(i,t,e,n,s,r,o){const a=new pu,l=new Dg,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,v,P,D,O){const B=D.fog,F=O.geometry,k=_.isMeshStandardMaterial?D.environment:null,J=(_.isMeshStandardMaterial?e:t).get(_.envMap||k),H=J&&J.mapping===uo?J.image.height:null,N=g[_.type];_.precision!==null&&(d=s.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const V=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,it=V!==void 0?V.length:0;let lt=0;F.morphAttributes.position!==void 0&&(lt=1),F.morphAttributes.normal!==void 0&&(lt=2),F.morphAttributes.color!==void 0&&(lt=3);let ut,mt,Tt,q;if(N){const Xt=An[N];ut=Xt.vertexShader,mt=Xt.fragmentShader}else ut=_.vertexShader,mt=_.fragmentShader,l.update(_),Tt=l.getVertexShaderID(_),q=l.getFragmentShaderID(_);const j=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Et=O.isInstancedMesh===!0,Rt=O.isBatchedMesh===!0,Ht=!!_.map,ie=!!_.matcap,U=!!J,ht=!!_.aoMap,at=!!_.lightMap,st=!!_.bumpMap,rt=!!_.normalMap,yt=!!_.displacementMap,Z=!!_.emissiveMap,St=!!_.metalnessMap,Zt=!!_.roughnessMap,Wt=_.anisotropy>0,R=_.clearcoat>0,S=_.dispersion>0,X=_.iridescence>0,Y=_.sheen>0,dt=_.transmission>0,et=Wt&&!!_.anisotropyMap,Nt=R&&!!_.clearcoatMap,ft=R&&!!_.clearcoatNormalMap,Dt=R&&!!_.clearcoatRoughnessMap,Ft=X&&!!_.iridescenceMap,_t=X&&!!_.iridescenceThicknessMap,pt=Y&&!!_.sheenColorMap,Gt=Y&&!!_.sheenRoughnessMap,Ot=!!_.specularMap,wt=!!_.specularColorMap,Kt=!!_.specularIntensityMap,z=dt&&!!_.transmissionMap,ot=dt&&!!_.thicknessMap,bt=!!_.gradientMap,It=!!_.alphaMap,vt=_.alphaTest>0,Q=!!_.alphaHash,Ct=!!_.extensions;let zt=ui;_.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(zt=i.toneMapping);const jt={shaderID:N,shaderType:_.type,shaderName:_.name,vertexShader:ut,fragmentShader:mt,defines:_.defines,customVertexShaderID:Tt,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Rt,batchingColor:Rt&&O._colorsTexture!==null,instancing:Et,instancingColor:Et&&O.instanceColor!==null,instancingMorph:Et&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:hs,alphaToCoverage:!!_.alphaToCoverage,map:Ht,matcap:ie,envMap:U,envMapMode:U&&J.mapping,envMapCubeUVHeight:H,aoMap:ht,lightMap:at,bumpMap:st,normalMap:rt,displacementMap:h&&yt,emissiveMap:Z,normalMapObjectSpace:rt&&_.normalMapType===Ph,normalMapTangentSpace:rt&&_.normalMapType===uu,metalnessMap:St,roughnessMap:Zt,anisotropy:Wt,anisotropyMap:et,clearcoat:R,clearcoatMap:Nt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Dt,dispersion:S,iridescence:X,iridescenceMap:Ft,iridescenceThicknessMap:_t,sheen:Y,sheenColorMap:pt,sheenRoughnessMap:Gt,specularMap:Ot,specularColorMap:wt,specularIntensityMap:Kt,transmission:dt,transmissionMap:z,thicknessMap:ot,gradientMap:bt,opaque:_.transparent===!1&&_.blending===is&&_.alphaToCoverage===!1,alphaMap:It,alphaTest:vt,alphaHash:Q,combine:_.combine,mapUv:Ht&&x(_.map.channel),aoMapUv:ht&&x(_.aoMap.channel),lightMapUv:at&&x(_.lightMap.channel),bumpMapUv:st&&x(_.bumpMap.channel),normalMapUv:rt&&x(_.normalMap.channel),displacementMapUv:yt&&x(_.displacementMap.channel),emissiveMapUv:Z&&x(_.emissiveMap.channel),metalnessMapUv:St&&x(_.metalnessMap.channel),roughnessMapUv:Zt&&x(_.roughnessMap.channel),anisotropyMapUv:et&&x(_.anisotropyMap.channel),clearcoatMapUv:Nt&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ft&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&x(_.sheenRoughnessMap.channel),specularMapUv:Ot&&x(_.specularMap.channel),specularColorMapUv:wt&&x(_.specularColorMap.channel),specularIntensityMapUv:Kt&&x(_.specularIntensityMap.channel),transmissionMapUv:z&&x(_.transmissionMap.channel),thicknessMapUv:ot&&x(_.thicknessMap.channel),alphaMapUv:It&&x(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(rt||Wt),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(Ht||It),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xt,skinning:O.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:lt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:Ht&&_.map.isVideoTexture===!0&&re.getTransfer(_.map.colorSpace)===ue,decodeVideoTextureEmissive:Z&&_.emissiveMap.isVideoTexture===!0&&re.getTransfer(_.emissiveMap.colorSpace)===ue,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ve,flipSided:_.side===Xe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ct&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&_.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function p(_){const v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)v.push(P),v.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(w(v,_),y(v,_),v.push(i.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function w(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function y(_,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),_.push(a.mask)}function M(_){const v=g[_.type];let P;if(v){const D=An[v];P=Ci.clone(D.uniforms)}else P=_.uniforms;return P}function E(_,v){let P;for(let D=0,O=u.length;D<O;D++){const B=u[D];if(B.cacheKey===v){P=B,++P.usedTimes;break}}return P===void 0&&(P=new Lg(i,v,_,r),u.push(P)),P}function b(_){if(--_.usedTimes===0){const v=u.indexOf(_);u[v]=u[u.length-1],u.pop(),_.destroy()}}function A(_){l.remove(_)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:E,releaseProgram:b,releaseShaderCache:A,programs:u,dispose:T}}function Fg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Og(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ol(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,h,d,g,x,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),t++,p}function a(f,h,d,g,x,m){const p=o(f,h,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(f,h,d,g,x,m){const p=o(f,h,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||Og),n.length>1&&n.sort(h||Fl),s.length>1&&s.sort(h||Fl)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Bg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ol,i.set(n,[o])):s>=r.length?(o=new Ol,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function zg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Lt};break;case"SpotLight":e={position:new L,direction:new L,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function kg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Hg=0;function Gg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vg(i){const t=new zg,e=kg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new ce,o=new ce;function a(c){let u=0,f=0,h=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,w=0,y=0,M=0,E=0,b=0,A=0;c.sort(Gg);for(let _=0,v=c.length;_<v;_++){const P=c[_],D=P.color,O=P.intensity,B=P.distance,F=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=D.r*O,f+=D.g*O,h+=D.b*O;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],O);A++}else if(P.isDirectionalLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,H=e.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=F,n.directionalShadowMatrix[d]=P.shadow.matrix,w++}n.directional[d]=k,d++}else if(P.isSpotLight){const k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(D).multiplyScalar(O),k.distance=B,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[x]=k;const J=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,J.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[x]=J.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=F,M++}x++}else if(P.isRectAreaLight){const k=t.get(P);k.color.copy(D).multiplyScalar(O),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const J=P.shadow,H=e.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=k,g++}else if(P.isHemisphereLight){const k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(O),k.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const T=n.hash;(T.directionalLength!==d||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==w||T.numPointShadows!==y||T.numSpotShadows!==M||T.numSpotMaps!==E||T.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+E-b,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,T.directionalLength=d,T.pointLength=g,T.spotLength=x,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=w,T.numPointShadows=y,T.numSpotShadows=M,T.numSpotMaps=E,T.numLightProbes=A,n.version=Hg++)}function l(c,u){let f=0,h=0,d=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const y=c[p];if(y.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(y.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Bl(i){const t=new Vg(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Wg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Bl(i),t.set(s,[a])):r>=o.length?(a=new Bl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
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
}`;function qg(i,t,e){let n=new cc;const s=new nt,r=new nt,o=new le,a=new df({depthPacking:Rh}),l=new ff,c={},u=e.maxTextureSize,f={[ti]:Xe,[Xe]:ti,[ve]:ve},h=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Xg,fragmentShader:Yg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new be;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new I(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let p=this.type;this.render=function(b,A,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const _=i.getRenderTarget(),v=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Kn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=p!==Xn&&this.type===Xn,B=p===Xn&&this.type!==Xn;for(let F=0,k=b.length;F<k;F++){const J=b[F],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const N=H.getFrameExtents();if(s.multiply(N),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/N.x),s.x=r.x*N.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/N.y),s.y=r.y*N.y,H.mapSize.y=r.y)),H.map===null||O===!0||B===!0){const it=this.type!==Xn?{minFilter:en,magFilter:en}:{};H.map!==null&&H.map.dispose(),H.map=new nn(s.x,s.y,it),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const V=H.getViewportCount();for(let it=0;it<V;it++){const lt=H.getViewport(it);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),D.viewport(o),H.updateMatrices(J,it),n=H.getFrustum(),M(A,T,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===Xn&&w(H,T),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,v,P)};function w(b,A){const T=t.update(x);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new nn(s.x,s.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,T,h,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,T,d,x,null)}function y(b,A,T,_){let v=null;const P=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)v=P;else if(v=T.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=v.uuid,O=A.uuid;let B=c[D];B===void 0&&(B={},c[D]=B);let F=B[O];F===void 0&&(F=v.clone(),B[O]=F,A.addEventListener("dispose",E)),v=F}if(v.visible=A.visible,v.wireframe=A.wireframe,_===Xn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:f[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,T.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const D=i.properties.get(v);D.light=T}return v}function M(b,A,T,_,v){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===Xn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const O=t.update(b),B=b.material;if(Array.isArray(B)){const F=O.groups;for(let k=0,J=F.length;k<J;k++){const H=F[k],N=B[H.materialIndex];if(N&&N.visible){const V=y(b,N,_,v);b.onBeforeShadow(i,b,A,T,O,V,H),i.renderBufferDirect(T,null,O,V,b,H),b.onAfterShadow(i,b,A,T,O,V,H)}}}else if(B.visible){const F=y(b,B,_,v);b.onBeforeShadow(i,b,A,T,O,F,null),i.renderBufferDirect(T,null,O,F,b,null),b.onAfterShadow(i,b,A,T,O,F,null)}}const D=b.children;for(let O=0,B=D.length;O<B;O++)M(D[O],A,T,_,v)}function E(b){b.target.removeEventListener("dispose",E);for(const T in c){const _=c[T],v=b.target.uuid;v in _&&(_[v].dispose(),delete _[v])}}}const Jg={[ra]:oa,[aa]:ua,[ca]:ha,[cs]:la,[oa]:ra,[ua]:aa,[ha]:ca,[la]:cs};function Zg(i,t){function e(){let z=!1;const ot=new le;let bt=null;const It=new le(0,0,0,0);return{setMask:function(vt){bt!==vt&&!z&&(i.colorMask(vt,vt,vt,vt),bt=vt)},setLocked:function(vt){z=vt},setClear:function(vt,Q,Ct,zt,jt){jt===!0&&(vt*=zt,Q*=zt,Ct*=zt),ot.set(vt,Q,Ct,zt),It.equals(ot)===!1&&(i.clearColor(vt,Q,Ct,zt),It.copy(ot))},reset:function(){z=!1,bt=null,It.set(-1,0,0,0)}}}function n(){let z=!1,ot=!1,bt=null,It=null,vt=null;return{setReversed:function(Q){if(ot!==Q){const Ct=t.get("EXT_clip_control");Q?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),ot=Q;const zt=vt;vt=null,this.setClear(zt)}},getReversed:function(){return ot},setTest:function(Q){Q?j(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(Q){bt!==Q&&!z&&(i.depthMask(Q),bt=Q)},setFunc:function(Q){if(ot&&(Q=Jg[Q]),It!==Q){switch(Q){case ra:i.depthFunc(i.NEVER);break;case oa:i.depthFunc(i.ALWAYS);break;case aa:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case ca:i.depthFunc(i.EQUAL);break;case la:i.depthFunc(i.GEQUAL);break;case ua:i.depthFunc(i.GREATER);break;case ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=Q}},setLocked:function(Q){z=Q},setClear:function(Q){vt!==Q&&(ot&&(Q=1-Q),i.clearDepth(Q),vt=Q)},reset:function(){z=!1,bt=null,It=null,vt=null,ot=!1}}}function s(){let z=!1,ot=null,bt=null,It=null,vt=null,Q=null,Ct=null,zt=null,jt=null;return{setTest:function(Xt){z||(Xt?j(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(Xt){ot!==Xt&&!z&&(i.stencilMask(Xt),ot=Xt)},setFunc:function(Xt,Ze,bn){(bt!==Xt||It!==Ze||vt!==bn)&&(i.stencilFunc(Xt,Ze,bn),bt=Xt,It=Ze,vt=bn)},setOp:function(Xt,Ze,bn){(Q!==Xt||Ct!==Ze||zt!==bn)&&(i.stencilOp(Xt,Ze,bn),Q=Xt,Ct=Ze,zt=bn)},setLocked:function(Xt){z=Xt},setClear:function(Xt){jt!==Xt&&(i.clearStencil(Xt),jt=Xt)},reset:function(){z=!1,ot=null,bt=null,It=null,vt=null,Q=null,Ct=null,zt=null,jt=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,x=!1,m=null,p=null,w=null,y=null,M=null,E=null,b=null,A=new Lt(0,0,0),T=0,_=!1,v=null,P=null,D=null,O=null,B=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,J=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=J>=2);let N=null,V={};const it=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),ut=new le().fromArray(it),mt=new le().fromArray(lt);function Tt(z,ot,bt,It){const vt=new Uint8Array(4),Q=i.createTexture();i.bindTexture(z,Q),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<bt;Ct++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(ot+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return Q}const q={};q[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(cs),st(!1),rt(Dc),j(i.CULL_FACE),ht(Kn);function j(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function xt(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function Et(z,ot){return f[z]!==ot?(i.bindFramebuffer(z,ot),f[z]=ot,z===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ot),z===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Rt(z,ot){let bt=d,It=!1;if(z){bt=h.get(ot),bt===void 0&&(bt=[],h.set(ot,bt));const vt=z.textures;if(bt.length!==vt.length||bt[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Ct=vt.length;Q<Ct;Q++)bt[Q]=i.COLOR_ATTACHMENT0+Q;bt.length=vt.length,It=!0}}else bt[0]!==i.BACK&&(bt[0]=i.BACK,It=!0);It&&i.drawBuffers(bt)}function Ht(z){return g!==z?(i.useProgram(z),g=z,!0):!1}const ie={[yi]:i.FUNC_ADD,[ch]:i.FUNC_SUBTRACT,[lh]:i.FUNC_REVERSE_SUBTRACT};ie[uh]=i.MIN,ie[hh]=i.MAX;const U={[dh]:i.ZERO,[fh]:i.ONE,[ph]:i.SRC_COLOR,[ia]:i.SRC_ALPHA,[Mh]:i.SRC_ALPHA_SATURATE,[vh]:i.DST_COLOR,[gh]:i.DST_ALPHA,[mh]:i.ONE_MINUS_SRC_COLOR,[sa]:i.ONE_MINUS_SRC_ALPHA,[xh]:i.ONE_MINUS_DST_COLOR,[_h]:i.ONE_MINUS_DST_ALPHA,[yh]:i.CONSTANT_COLOR,[wh]:i.ONE_MINUS_CONSTANT_COLOR,[Sh]:i.CONSTANT_ALPHA,[bh]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(z,ot,bt,It,vt,Q,Ct,zt,jt,Xt){if(z===Kn){x===!0&&(xt(i.BLEND),x=!1);return}if(x===!1&&(j(i.BLEND),x=!0),z!==ah){if(z!==m||Xt!==_){if((p!==yi||M!==yi)&&(i.blendEquation(i.FUNC_ADD),p=yi,M=yi),Xt)switch(z){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Je:i.blendFunc(i.ONE,i.ONE);break;case Uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Je:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}w=null,y=null,E=null,b=null,A.set(0,0,0),T=0,m=z,_=Xt}return}vt=vt||ot,Q=Q||bt,Ct=Ct||It,(ot!==p||vt!==M)&&(i.blendEquationSeparate(ie[ot],ie[vt]),p=ot,M=vt),(bt!==w||It!==y||Q!==E||Ct!==b)&&(i.blendFuncSeparate(U[bt],U[It],U[Q],U[Ct]),w=bt,y=It,E=Q,b=Ct),(zt.equals(A)===!1||jt!==T)&&(i.blendColor(zt.r,zt.g,zt.b,jt),A.copy(zt),T=jt),m=z,_=!1}function at(z,ot){z.side===ve?xt(i.CULL_FACE):j(i.CULL_FACE);let bt=z.side===Xe;ot&&(bt=!bt),st(bt),z.blending===is&&z.transparent===!1?ht(Kn):ht(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const It=z.stencilWrite;a.setTest(It),It&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Z(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(z){v!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),v=z)}function rt(z){z!==rh?(j(i.CULL_FACE),z!==P&&(z===Dc?i.cullFace(i.BACK):z===oh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),P=z}function yt(z){z!==D&&(k&&i.lineWidth(z),D=z)}function Z(z,ot,bt){z?(j(i.POLYGON_OFFSET_FILL),(O!==ot||B!==bt)&&(i.polygonOffset(ot,bt),O=ot,B=bt)):xt(i.POLYGON_OFFSET_FILL)}function St(z){z?j(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Zt(z){z===void 0&&(z=i.TEXTURE0+F-1),N!==z&&(i.activeTexture(z),N=z)}function Wt(z,ot,bt){bt===void 0&&(N===null?bt=i.TEXTURE0+F-1:bt=N);let It=V[bt];It===void 0&&(It={type:void 0,texture:void 0},V[bt]=It),(It.type!==z||It.texture!==ot)&&(N!==bt&&(i.activeTexture(bt),N=bt),i.bindTexture(z,ot||q[z]),It.type=z,It.texture=ot)}function R(){const z=V[N];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Nt(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Dt(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ft(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(z){ut.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ut.copy(z))}function Gt(z){mt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),mt.copy(z))}function Ot(z,ot){let bt=c.get(ot);bt===void 0&&(bt=new WeakMap,c.set(ot,bt));let It=bt.get(z);It===void 0&&(It=i.getUniformBlockIndex(ot,z.name),bt.set(z,It))}function wt(z,ot){const It=c.get(ot).get(z);l.get(ot)!==It&&(i.uniformBlockBinding(ot,It,z.__bindingPointIndex),l.set(ot,It))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},N=null,V={},f={},h=new WeakMap,d=[],g=null,x=!1,m=null,p=null,w=null,y=null,M=null,E=null,b=null,A=new Lt(0,0,0),T=0,_=!1,v=null,P=null,D=null,O=null,B=null,ut.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:xt,bindFramebuffer:Et,drawBuffers:Rt,useProgram:Ht,setBlending:ht,setMaterial:at,setFlipSided:st,setCullFace:rt,setLineWidth:yt,setPolygonOffset:Z,setScissorTest:St,activeTexture:Zt,bindTexture:Wt,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:X,texImage2D:Ft,texImage3D:_t,updateUBOMapping:Ot,uniformBlockBinding:wt,texStorage2D:ft,texStorage3D:Dt,texSubImage2D:Y,texSubImage3D:dt,compressedTexSubImage2D:et,compressedTexSubImage3D:Nt,scissor:pt,viewport:Gt,reset:Kt}}function $g(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return d?new OffscreenCanvas(R,S):ir("canvas")}function x(R,S,X){let Y=1;const dt=Wt(R);if((dt.width>X||dt.height>X)&&(Y=X/Math.max(dt.width,dt.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const et=Math.floor(Y*dt.width),Nt=Math.floor(Y*dt.height);f===void 0&&(f=g(et,Nt));const ft=S?g(et,Nt):f;return ft.width=et,ft.height=Nt,ft.getContext("2d").drawImage(R,0,0,et,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+et+"x"+Nt+")."),ft}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,S,X,Y,dt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let et=S;if(S===i.RED&&(X===i.FLOAT&&(et=i.R32F),X===i.HALF_FLOAT&&(et=i.R16F),X===i.UNSIGNED_BYTE&&(et=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.R8UI),X===i.UNSIGNED_SHORT&&(et=i.R16UI),X===i.UNSIGNED_INT&&(et=i.R32UI),X===i.BYTE&&(et=i.R8I),X===i.SHORT&&(et=i.R16I),X===i.INT&&(et=i.R32I)),S===i.RG&&(X===i.FLOAT&&(et=i.RG32F),X===i.HALF_FLOAT&&(et=i.RG16F),X===i.UNSIGNED_BYTE&&(et=i.RG8)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RG8UI),X===i.UNSIGNED_SHORT&&(et=i.RG16UI),X===i.UNSIGNED_INT&&(et=i.RG32UI),X===i.BYTE&&(et=i.RG8I),X===i.SHORT&&(et=i.RG16I),X===i.INT&&(et=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGB8UI),X===i.UNSIGNED_SHORT&&(et=i.RGB16UI),X===i.UNSIGNED_INT&&(et=i.RGB32UI),X===i.BYTE&&(et=i.RGB8I),X===i.SHORT&&(et=i.RGB16I),X===i.INT&&(et=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),X===i.UNSIGNED_INT&&(et=i.RGBA32UI),X===i.BYTE&&(et=i.RGBA8I),X===i.SHORT&&(et=i.RGBA16I),X===i.INT&&(et=i.RGBA32I)),S===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),S===i.RGBA){const Nt=dt?no:re.getTransfer(Y);X===i.FLOAT&&(et=i.RGBA32F),X===i.HALF_FLOAT&&(et=i.RGBA16F),X===i.UNSIGNED_BYTE&&(et=Nt===ue?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function M(R,S){let X;return R?S===null||S===Ai||S===Qs?X=i.DEPTH24_STENCIL8:S===Pn?X=i.DEPTH32F_STENCIL8:S===js&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ai||S===Qs?X=i.DEPTH_COMPONENT24:S===Pn?X=i.DEPTH_COMPONENT32F:S===js&&(X=i.DEPTH_COMPONENT16),X}function E(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==en&&R.minFilter!==xn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function b(R){const S=R.target;S.removeEventListener("dispose",b),T(S),S.isVideoTexture&&u.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),v(S)}function T(R){const S=n.get(R);if(S.__webglInit===void 0)return;const X=R.source,Y=h.get(X);if(Y){const dt=Y[S.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&_(R),Object.keys(Y).length===0&&h.delete(X)}n.remove(R)}function _(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const X=R.source,Y=h.get(X);delete Y[S.__cacheKey],o.memory.textures--}function v(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let dt=0;dt<S.__webglFramebuffer[Y].length;dt++)i.deleteFramebuffer(S.__webglFramebuffer[Y][dt]);else i.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)i.deleteFramebuffer(S.__webglFramebuffer[Y]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const X=R.textures;for(let Y=0,dt=X.length;Y<dt;Y++){const et=n.get(X[Y]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(X[Y])}n.remove(R)}let P=0;function D(){P=0}function O(){const R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function B(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function F(R,S){const X=n.get(R);if(R.isVideoTexture&&St(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(X,R,S);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function k(R,S){const X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){q(X,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function J(R,S){const X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){q(X,R,S);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function H(R,S){const X=n.get(R);if(R.version>0&&X.__version!==R.version){j(X,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}const N={[Ks]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},V={[en]:i.NEAREST,[Ah]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Mo]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},it={[Lh]:i.NEVER,[Oh]:i.ALWAYS,[Ih]:i.LESS,[hu]:i.LEQUAL,[Dh]:i.EQUAL,[Fh]:i.GEQUAL,[Uh]:i.GREATER,[Nh]:i.NOTEQUAL};function lt(R,S){if(S.type===Pn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===xn||S.magFilter===Mo||S.magFilter===_r||S.magFilter===li||S.minFilter===xn||S.minFilter===Mo||S.minFilter===_r||S.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,N[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,N[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,N[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,V[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,V[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,it[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===en||S.minFilter!==_r&&S.minFilter!==li||S.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ut(R,S){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",b));const Y=S.source;let dt=h.get(Y);dt===void 0&&(dt={},h.set(Y,dt));const et=B(S);if(et!==R.__cacheKey){dt[et]===void 0&&(dt[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),dt[et].usedTimes++;const Nt=dt[R.__cacheKey];Nt!==void 0&&(dt[R.__cacheKey].usedTimes--,Nt.usedTimes===0&&_(S)),R.__cacheKey=et,R.__webglTexture=dt[et].texture}return X}function mt(R,S,X){return Math.floor(Math.floor(R/X)/S)}function Tt(R,S,X,Y){const et=R.updateRanges;if(et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,X,Y,S.data);else{et.sort((_t,pt)=>_t.start-pt.start);let Nt=0;for(let _t=1;_t<et.length;_t++){const pt=et[Nt],Gt=et[_t],Ot=pt.start+pt.count,wt=mt(Gt.start,S.width,4),Kt=mt(pt.start,S.width,4);Gt.start<=Ot+1&&wt===Kt&&mt(Gt.start+Gt.count-1,S.width,4)===wt?pt.count=Math.max(pt.count,Gt.start+Gt.count-pt.start):(++Nt,et[Nt]=Gt)}et.length=Nt+1;const ft=i.getParameter(i.UNPACK_ROW_LENGTH),Dt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ft=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let _t=0,pt=et.length;_t<pt;_t++){const Gt=et[_t],Ot=Math.floor(Gt.start/4),wt=Math.ceil(Gt.count/4),Kt=Ot%S.width,z=Math.floor(Ot/S.width),ot=wt,bt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Kt,z,ot,bt,X,Y,S.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Dt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ft)}}function q(R,S,X){let Y=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=i.TEXTURE_3D);const dt=ut(R,S),et=S.source;e.bindTexture(Y,R.__webglTexture,i.TEXTURE0+X);const Nt=n.get(et);if(et.version!==Nt.__version||dt===!0){e.activeTexture(i.TEXTURE0+X);const ft=re.getPrimaries(re.workingColorSpace),Dt=S.colorSpace===Yn?null:re.getPrimaries(S.colorSpace),Ft=S.colorSpace===Yn||ft===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let _t=x(S.image,!1,s.maxTextureSize);_t=Zt(S,_t);const pt=r.convert(S.format,S.colorSpace),Gt=r.convert(S.type);let Ot=y(S.internalFormat,pt,Gt,S.colorSpace,S.isVideoTexture);lt(Y,S);let wt;const Kt=S.mipmaps,z=S.isVideoTexture!==!0,ot=Nt.__version===void 0||dt===!0,bt=et.dataReady,It=E(S,_t);if(S.isDepthTexture)Ot=M(S.format===er,S.type),ot&&(z?e.texStorage2D(i.TEXTURE_2D,1,Ot,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,Ot,_t.width,_t.height,0,pt,Gt,null));else if(S.isDataTexture)if(Kt.length>0){z&&ot&&e.texStorage2D(i.TEXTURE_2D,It,Ot,Kt[0].width,Kt[0].height);for(let vt=0,Q=Kt.length;vt<Q;vt++)wt=Kt[vt],z?bt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,wt.width,wt.height,pt,Gt,wt.data):e.texImage2D(i.TEXTURE_2D,vt,Ot,wt.width,wt.height,0,pt,Gt,wt.data);S.generateMipmaps=!1}else z?(ot&&e.texStorage2D(i.TEXTURE_2D,It,Ot,_t.width,_t.height),bt&&Tt(S,_t,pt,Gt)):e.texImage2D(i.TEXTURE_2D,0,Ot,_t.width,_t.height,0,pt,Gt,_t.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){z&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ot,Kt[0].width,Kt[0].height,_t.depth);for(let vt=0,Q=Kt.length;vt<Q;vt++)if(wt=Kt[vt],S.format!==Mn)if(pt!==null)if(z){if(bt)if(S.layerUpdates.size>0){const Ct=ml(wt.width,wt.height,S.format,S.type);for(const zt of S.layerUpdates){const jt=wt.data.subarray(zt*Ct/wt.data.BYTES_PER_ELEMENT,(zt+1)*Ct/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,zt,wt.width,wt.height,1,pt,jt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,wt.width,wt.height,_t.depth,pt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,Ot,wt.width,wt.height,_t.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,wt.width,wt.height,_t.depth,pt,Gt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,Ot,wt.width,wt.height,_t.depth,0,pt,Gt,wt.data)}else{z&&ot&&e.texStorage2D(i.TEXTURE_2D,It,Ot,Kt[0].width,Kt[0].height);for(let vt=0,Q=Kt.length;vt<Q;vt++)wt=Kt[vt],S.format!==Mn?pt!==null?z?bt&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,wt.width,wt.height,pt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,Ot,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?bt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,wt.width,wt.height,pt,Gt,wt.data):e.texImage2D(i.TEXTURE_2D,vt,Ot,wt.width,wt.height,0,pt,Gt,wt.data)}else if(S.isDataArrayTexture)if(z){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ot,_t.width,_t.height,_t.depth),bt)if(S.layerUpdates.size>0){const vt=ml(_t.width,_t.height,S.format,S.type);for(const Q of S.layerUpdates){const Ct=_t.data.subarray(Q*vt/_t.data.BYTES_PER_ELEMENT,(Q+1)*vt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,_t.width,_t.height,1,pt,Gt,Ct)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,pt,Gt,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,_t.width,_t.height,_t.depth,0,pt,Gt,_t.data);else if(S.isData3DTexture)z?(ot&&e.texStorage3D(i.TEXTURE_3D,It,Ot,_t.width,_t.height,_t.depth),bt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,pt,Gt,_t.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,_t.width,_t.height,_t.depth,0,pt,Gt,_t.data);else if(S.isFramebufferTexture){if(ot)if(z)e.texStorage2D(i.TEXTURE_2D,It,Ot,_t.width,_t.height);else{let vt=_t.width,Q=_t.height;for(let Ct=0;Ct<It;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,Ot,vt,Q,0,pt,Gt,null),vt>>=1,Q>>=1}}else if(Kt.length>0){if(z&&ot){const vt=Wt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,It,Ot,vt.width,vt.height)}for(let vt=0,Q=Kt.length;vt<Q;vt++)wt=Kt[vt],z?bt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,pt,Gt,wt):e.texImage2D(i.TEXTURE_2D,vt,Ot,pt,Gt,wt);S.generateMipmaps=!1}else if(z){if(ot){const vt=Wt(_t);e.texStorage2D(i.TEXTURE_2D,It,Ot,vt.width,vt.height)}bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Gt,_t)}else e.texImage2D(i.TEXTURE_2D,0,Ot,pt,Gt,_t);m(S)&&p(Y),Nt.__version=et.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function j(R,S,X){if(S.image.length!==6)return;const Y=ut(R,S),dt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+X);const et=n.get(dt);if(dt.version!==et.__version||Y===!0){e.activeTexture(i.TEXTURE0+X);const Nt=re.getPrimaries(re.workingColorSpace),ft=S.colorSpace===Yn?null:re.getPrimaries(S.colorSpace),Dt=S.colorSpace===Yn||Nt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const Ft=S.isCompressedTexture||S.image[0].isCompressedTexture,_t=S.image[0]&&S.image[0].isDataTexture,pt=[];for(let Q=0;Q<6;Q++)!Ft&&!_t?pt[Q]=x(S.image[Q],!0,s.maxCubemapSize):pt[Q]=_t?S.image[Q].image:S.image[Q],pt[Q]=Zt(S,pt[Q]);const Gt=pt[0],Ot=r.convert(S.format,S.colorSpace),wt=r.convert(S.type),Kt=y(S.internalFormat,Ot,wt,S.colorSpace),z=S.isVideoTexture!==!0,ot=et.__version===void 0||Y===!0,bt=dt.dataReady;let It=E(S,Gt);lt(i.TEXTURE_CUBE_MAP,S);let vt;if(Ft){z&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Kt,Gt.width,Gt.height);for(let Q=0;Q<6;Q++){vt=pt[Q].mipmaps;for(let Ct=0;Ct<vt.length;Ct++){const zt=vt[Ct];S.format!==Mn?Ot!==null?z?bt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct,0,0,zt.width,zt.height,Ot,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct,Kt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct,0,0,zt.width,zt.height,Ot,wt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct,Kt,zt.width,zt.height,0,Ot,wt,zt.data)}}}else{if(vt=S.mipmaps,z&&ot){vt.length>0&&It++;const Q=Wt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,Kt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(_t){z?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,pt[Q].width,pt[Q].height,Ot,wt,pt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,pt[Q].width,pt[Q].height,0,Ot,wt,pt[Q].data);for(let Ct=0;Ct<vt.length;Ct++){const jt=vt[Ct].image[Q].image;z?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct+1,0,0,jt.width,jt.height,Ot,wt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct+1,Kt,jt.width,jt.height,0,Ot,wt,jt.data)}}else{z?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ot,wt,pt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,Ot,wt,pt[Q]);for(let Ct=0;Ct<vt.length;Ct++){const zt=vt[Ct];z?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct+1,0,0,Ot,wt,zt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct+1,Kt,Ot,wt,zt.image[Q])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),et.__version=dt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function xt(R,S,X,Y,dt,et){const Nt=r.convert(X.format,X.colorSpace),ft=r.convert(X.type),Dt=y(X.internalFormat,Nt,ft,X.colorSpace),Ft=n.get(S),_t=n.get(X);if(_t.__renderTarget=S,!Ft.__hasExternalTextures){const pt=Math.max(1,S.width>>et),Gt=Math.max(1,S.height>>et);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,et,Dt,pt,Gt,S.depth,0,Nt,ft,null):e.texImage2D(dt,et,Dt,pt,Gt,0,Nt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Z(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,dt,_t.__webglTexture,0,yt(S)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,dt,_t.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(R,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const Y=S.depthTexture,dt=Y&&Y.isDepthTexture?Y.type:null,et=M(S.stencilBuffer,dt),Nt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=yt(S);Z(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,et,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,et,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,et,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,R)}else{const Y=S.textures;for(let dt=0;dt<Y.length;dt++){const et=Y[dt],Nt=r.convert(et.format,et.colorSpace),ft=r.convert(et.type),Dt=y(et.internalFormat,Nt,ft,et.colorSpace),Ft=yt(S);X&&Z(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Dt,S.width,S.height):Z(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,Dt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);const dt=Y.__webglTexture,et=yt(S);if(S.depthTexture.format===tr)Z(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0);else if(S.depthTexture.format===er)Z(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function Ht(R){const S=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const dt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",dt)};Y.addEventListener("dispose",dt),S.__depthDisposeCallback=dt}S.__boundDepthTexture=Y}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const Y=R.texture.mipmaps;Y&&Y.length>0?Rt(S.__webglFramebuffer[0],R):Rt(S.__webglFramebuffer,R)}else if(X){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=i.createRenderbuffer(),Et(S.__webglDepthbuffer[Y],R,!1);else{const dt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,et)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Et(S.__webglDepthbuffer,R,!1);else{const dt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(R,S,X){const Y=n.get(R);S!==void 0&&xt(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Ht(R)}function U(R){const S=R.texture,X=n.get(R),Y=n.get(S);R.addEventListener("dispose",A);const dt=R.textures,et=R.isWebGLCubeRenderTarget===!0,Nt=dt.length>1;if(Nt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=S.version,o.memory.textures++),et){X.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[ft]=[];for(let Dt=0;Dt<S.mipmaps.length;Dt++)X.__webglFramebuffer[ft][Dt]=i.createFramebuffer()}else X.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let ft=0;ft<S.mipmaps.length;ft++)X.__webglFramebuffer[ft]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let ft=0,Dt=dt.length;ft<Dt;ft++){const Ft=n.get(dt[ft]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Z(R)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ft=0;ft<dt.length;ft++){const Dt=dt[ft];X.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ft]);const Ft=r.convert(Dt.format,Dt.colorSpace),_t=r.convert(Dt.type),pt=y(Dt.internalFormat,Ft,_t,Dt.colorSpace,R.isXRRenderTarget===!0),Gt=yt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,pt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,X.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),lt(i.TEXTURE_CUBE_MAP,S);for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0)for(let Dt=0;Dt<S.mipmaps.length;Dt++)xt(X.__webglFramebuffer[ft][Dt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt);else xt(X.__webglFramebuffer[ft],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let ft=0,Dt=dt.length;ft<Dt;ft++){const Ft=dt[ft],_t=n.get(Ft);let pt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,_t.__webglTexture),lt(pt,Ft),xt(X.__webglFramebuffer,R,Ft,i.COLOR_ATTACHMENT0+ft,pt,0),m(Ft)&&p(pt)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Y.__webglTexture),lt(ft,S),S.mipmaps&&S.mipmaps.length>0)for(let Dt=0;Dt<S.mipmaps.length;Dt++)xt(X.__webglFramebuffer[Dt],R,S,i.COLOR_ATTACHMENT0,ft,Dt);else xt(X.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,ft,0);m(S)&&p(ft),e.unbindTexture()}R.depthBuffer&&Ht(R)}function ht(R){const S=R.textures;for(let X=0,Y=S.length;X<Y;X++){const dt=S[X];if(m(dt)){const et=w(R),Nt=n.get(dt).__webglTexture;e.bindTexture(et,Nt),p(et),e.unbindTexture()}}}const at=[],st=[];function rt(R){if(R.samples>0){if(Z(R)===!1){const S=R.textures,X=R.width,Y=R.height;let dt=i.COLOR_BUFFER_BIT;const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(R),ft=S.length>1;if(ft)for(let Ft=0;Ft<S.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const Dt=R.texture.mipmaps;Dt&&Dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ft=0;Ft<S.length;Ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ft]);const _t=n.get(S[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_t,0)}i.blitFramebuffer(0,0,X,Y,0,0,X,Y,dt,i.NEAREST),l===!0&&(at.length=0,st.length=0,at.push(i.COLOR_ATTACHMENT0+Ft),R.depthBuffer&&R.resolveDepthBuffer===!1&&(at.push(et),st.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,st)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Ft=0;Ft<S.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ft]);const _t=n.get(S[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,_t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function yt(R){return Math.min(s.maxSamples,R.samples)}function Z(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function St(R){const S=o.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function Zt(R,S){const X=R.colorSpace,Y=R.format,dt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==hs&&X!==Yn&&(re.getTransfer(X)===ue?(Y!==Mn||dt!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function Wt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=ie,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Z}function Kg(i,t){function e(n,s=Yn){let r;const o=re.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===Qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ru)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ou)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===iu)return i.BYTE;if(n===su)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===ja)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===In)return i.HALF_FLOAT;if(n===au)return i.ALPHA;if(n===cu)return i.RGB;if(n===Mn)return i.RGBA;if(n===tr)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===ec)return i.RED;if(n===nc)return i.RED_INTEGER;if(n===lu)return i.RG;if(n===ic)return i.RG_INTEGER;if(n===sc)return i.RGBA_INTEGER;if(n===qr||n===Jr||n===Zr||n===$r)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===_a||n===va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===Ma||n===ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===Ma)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ya)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wa||n===Sa||n===ba||n===Ea||n===Ta||n===Aa||n===Ca||n===Ra||n===Pa||n===La||n===Ia||n===Da||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ta)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ca)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===La)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fa||n===Oa||n===Ba)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fa)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===ka||n===Ha||n===Ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class t_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new bu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new He({vertexShader:jg,fragmentShader:Qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new de(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e_ extends xs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const x=typeof XRWebGLBinding<"u",m=new t_,p={},w=e.getContextAttributes();let y=null,M=null;const E=[],b=[],A=new nt;let T=null;const _=new qe;_.viewport=new le;const v=new qe;v.viewport=new le;const P=[_,v],D=new yf;let O=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=E[q];return j===void 0&&(j=new Ho,E[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=E[q];return j===void 0&&(j=new Ho,E[q]=j),j.getGripSpace()},this.getHand=function(q){let j=E[q];return j===void 0&&(j=new Ho,E[q]=j),j.getHandSpace()};function F(q){const j=b.indexOf(q.inputSource);if(j===-1)return;const xt=E[j];xt!==void 0&&(xt.update(q.inputSource,q.frame,c||o),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",J);for(let q=0;q<E.length;q++){const j=b[q];j!==null&&(b[q]=null,E[q].disconnect(j))}O=null,B=null,m.reset();for(const q in p)delete p[q];t.setRenderTarget(y),d=null,h=null,f=null,s=null,M=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",k),s.addEventListener("inputsourceschange",J),w.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Et=null,Rt=null;w.depth&&(Rt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=w.stencil?er:tr,Et=w.stencil?Qs:Ai);const Ht={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ht),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new nn(h.textureWidth,h.textureHeight,{format:Mn,type:Un,depthTexture:new Su(h.textureWidth,h.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const xt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new nn(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Tt.setContext(s),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(q){for(let j=0;j<q.removed.length;j++){const xt=q.removed[j],Et=b.indexOf(xt);Et>=0&&(b[Et]=null,E[Et].disconnect(xt))}for(let j=0;j<q.added.length;j++){const xt=q.added[j];let Et=b.indexOf(xt);if(Et===-1){for(let Ht=0;Ht<E.length;Ht++)if(Ht>=b.length){b.push(xt),Et=Ht;break}else if(b[Ht]===null){b[Ht]=xt,Et=Ht;break}if(Et===-1)break}const Rt=E[Et];Rt&&Rt.connect(xt)}}const H=new L,N=new L;function V(q,j,xt){H.setFromMatrixPosition(j.matrixWorld),N.setFromMatrixPosition(xt.matrixWorld);const Et=H.distanceTo(N),Rt=j.projectionMatrix.elements,Ht=xt.projectionMatrix.elements,ie=Rt[14]/(Rt[10]-1),U=Rt[14]/(Rt[10]+1),ht=(Rt[9]+1)/Rt[5],at=(Rt[9]-1)/Rt[5],st=(Rt[8]-1)/Rt[0],rt=(Ht[8]+1)/Ht[0],yt=ie*st,Z=ie*rt,St=Et/(-st+rt),Zt=St*-st;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Zt),q.translateZ(St),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Wt=ie+St,R=U+St,S=yt-Zt,X=Z+(Et-Zt),Y=ht*U/R*Wt,dt=at*U/R*Wt;q.projectionMatrix.makePerspective(S,X,Y,dt,Wt,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,xt=q.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),D.near=v.near=_.near=j,D.far=v.far=_.far=xt,(O!==D.near||B!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,B=D.far),D.layers.mask=q.layers.mask|6,_.layers.mask=D.layers.mask&3,v.layers.mask=D.layers.mask&5;const Et=q.parent,Rt=D.cameras;it(D,Et);for(let Ht=0;Ht<Rt.length;Ht++)it(Rt[Ht],Et);Rt.length===2?V(D,_,v):D.projectionMatrix.copy(_.projectionMatrix),lt(q,D,Et)};function lt(q,j,xt){xt===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=nr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(q){return p[q]};let ut=null;function mt(q,j){if(u=j.getViewerPose(c||o),g=j,u!==null){const xt=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Et=!1;xt.length!==D.cameras.length&&(D.cameras.length=0,Et=!0);for(let U=0;U<xt.length;U++){const ht=xt[U];let at=null;if(d!==null)at=d.getViewport(ht);else{const rt=f.getViewSubImage(h,ht);at=rt.viewport,U===0&&(t.setRenderTargetTextures(M,rt.colorTexture,rt.depthStencilTexture),t.setRenderTarget(M))}let st=P[U];st===void 0&&(st=new qe,st.layers.enable(U),st.viewport=new le,P[U]=st),st.matrix.fromArray(ht.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(ht.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(at.x,at.y,at.width,at.height),U===0&&(D.matrix.copy(st.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Et===!0&&D.cameras.push(st)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const U=f.getDepthInformation(xt[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(Rt&&Rt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let U=0;U<xt.length;U++){const ht=xt[U].camera;if(ht){let at=p[ht];at||(at=new bu,p[ht]=at);const st=f.getCameraImage(ht);at.sourceTexture=st}}}}for(let xt=0;xt<E.length;xt++){const Et=b[xt],Rt=E[xt];Et!==null&&Rt!==void 0&&Rt.update(Et,j,c||o)}ut&&ut(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Tt=new Fu;Tt.setAnimationLoop(mt),this.setAnimationLoop=function(q){ut=q},this.dispose=function(){}}}const vi=new Nn,n_=new ce;function i_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),y=w.envMap,M=w.envMapRotation;y&&(m.envMap.value=y,vi.copy(M),vi.x*=-1,vi.y*=-1,vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(n_.makeRotationFromEuler(vi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function s_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,y){const M=y.program;n.uniformBlockBinding(w,M)}function c(w,y){let M=s[w.id];M===void 0&&(g(w),M=u(w),s[w.id]=M,w.addEventListener("dispose",m));const E=y.program;n.updateUBOMapping(w,E);const b=t.render.frame;r[w.id]!==b&&(h(w),r[w.id]=b)}function u(w){const y=f();w.__bindingPointIndex=y;const M=i.createBuffer(),E=w.__size,b=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,E,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const y=s[w.id],M=w.uniforms,E=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,A=M.length;b<A;b++){const T=Array.isArray(M[b])?M[b]:[M[b]];for(let _=0,v=T.length;_<v;_++){const P=T[_];if(d(P,b,_,E)===!0){const D=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let B=0;for(let F=0;F<O.length;F++){const k=O[F],J=x(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,D+B,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,B),B+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(w,y,M,E){const b=w.value,A=y+"_"+M;if(E[A]===void 0)return typeof b=="number"||typeof b=="boolean"?E[A]=b:E[A]=b.clone(),!0;{const T=E[A];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return E[A]=b,!0}else if(T.equals(b)===!1)return T.copy(b),!0}return!1}function g(w){const y=w.uniforms;let M=0;const E=16;for(let A=0,T=y.length;A<T;A++){const _=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,P=_.length;v<P;v++){const D=_[v],O=Array.isArray(D.value)?D.value:[D.value];for(let B=0,F=O.length;B<F;B++){const k=O[B],J=x(k),H=M%E,N=H%J.boundary,V=H+N;M+=N,V!==0&&E-V<J.storage&&(M+=E-V),D.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=J.storage}}}const b=M%E;return b>0&&(M+=E-b),w.__size=M,w.__cache={},this}function x(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function m(w){const y=w.target;y.removeEventListener("dispose",m);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class r_{constructor(t={}){const{canvas:e=td(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const w=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let E=!1;this._outputColorSpace=Ce;let b=0,A=0,T=null,_=-1,v=null;const P=new le,D=new le;let O=null;const B=new Lt(0);let F=0,k=e.width,J=e.height,H=1,N=null,V=null;const it=new le(0,0,k,J),lt=new le(0,0,k,J);let ut=!1;const mt=new cc;let Tt=!1,q=!1;const j=new ce,xt=new L,Et=new le,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function ie(){return T===null?H:1}let U=n;function ht(C,G){return e.getContext(C,G)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$a}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",vt,!1),U===null){const G="webgl2";if(U=ht(G,C),U===null)throw ht(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let at,st,rt,yt,Z,St,Zt,Wt,R,S,X,Y,dt,et,Nt,ft,Dt,Ft,_t,pt,Gt,Ot,wt,Kt;function z(){at=new m0(U),at.init(),Ot=new Kg(U,at),st=new c0(U,at,t,Ot),rt=new Zg(U,at),st.reversedDepthBuffer&&h&&rt.buffers.depth.setReversed(!0),yt=new v0(U),Z=new Fg,St=new $g(U,at,rt,Z,st,Ot,yt),Zt=new u0(M),Wt=new p0(M),R=new bf(U),wt=new o0(U,R),S=new g0(U,R,yt,wt),X=new M0(U,S,R,yt),_t=new x0(U,st,St),ft=new l0(Z),Y=new Ng(M,Zt,Wt,at,st,wt,ft),dt=new i_(M,Z),et=new Bg,Nt=new Wg(at),Ft=new r0(M,Zt,Wt,rt,X,d,l),Dt=new qg(M,X,st),Kt=new s_(U,yt,st,rt),pt=new a0(U,at,yt),Gt=new _0(U,at,yt),yt.programs=Y.programs,M.capabilities=st,M.extensions=at,M.properties=Z,M.renderLists=et,M.shadowMap=Dt,M.state=rt,M.info=yt}z();const ot=new e_(M,U);this.xr=ot,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=at.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=at.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(k,J,!1))},this.getSize=function(C){return C.set(k,J)},this.setSize=function(C,G,$=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,J=G,e.width=Math.floor(C*H),e.height=Math.floor(G*H),$===!0&&(e.style.width=C+"px",e.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(k*H,J*H).floor()},this.setDrawingBufferSize=function(C,G,$){k=C,J=G,H=$,e.width=Math.floor(C*$),e.height=Math.floor(G*$),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(it)},this.setViewport=function(C,G,$,K){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,G,$,K),rt.viewport(P.copy(it).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(lt)},this.setScissor=function(C,G,$,K){C.isVector4?lt.set(C.x,C.y,C.z,C.w):lt.set(C,G,$,K),rt.scissor(D.copy(lt).multiplyScalar(H).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(C){rt.setScissorTest(ut=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){V=C},this.getClearColor=function(C){return C.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,$=!0){let K=0;if(C){let W=!1;if(T!==null){const Mt=T.texture.format;W=Mt===sc||Mt===ic||Mt===nc}if(W){const Mt=T.texture.type,Pt=Mt===Un||Mt===Ai||Mt===js||Mt===Qs||Mt===Qa||Mt===tc,Bt=Ft.getClearColor(),Ut=Ft.getClearAlpha(),Yt=Bt.r,Jt=Bt.g,kt=Bt.b;Pt?(g[0]=Yt,g[1]=Jt,g[2]=kt,g[3]=Ut,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=Yt,x[1]=Jt,x[2]=kt,x[3]=Ut,U.clearBufferiv(U.COLOR,0,x))}else K|=U.COLOR_BUFFER_BIT}G&&(K|=U.DEPTH_BUFFER_BIT),$&&(K|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Ft.dispose(),et.dispose(),Nt.dispose(),Z.dispose(),Zt.dispose(),Wt.dispose(),X.dispose(),wt.dispose(),Kt.dispose(),Y.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",bn),ot.removeEventListener("sessionend",Ac),hi.stop()};function bt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=yt.autoReset,G=Dt.enabled,$=Dt.autoUpdate,K=Dt.needsUpdate,W=Dt.type;z(),yt.autoReset=C,Dt.enabled=G,Dt.autoUpdate=$,Dt.needsUpdate=K,Dt.type=W}function vt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Q(C){const G=C.target;G.removeEventListener("dispose",Q),Ct(G)}function Ct(C){zt(C),Z.remove(C)}function zt(C){const G=Z.get(C).programs;G!==void 0&&(G.forEach(function($){Y.releaseProgram($)}),C.isShaderMaterial&&Y.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,$,K,W,Mt){G===null&&(G=Rt);const Pt=W.isMesh&&W.matrixWorld.determinant()<0,Bt=Qu(C,G,$,K,W);rt.setMaterial(K,Pt);let Ut=$.index,Yt=1;if(K.wireframe===!0){if(Ut=S.getWireframeAttribute($),Ut===void 0)return;Yt=2}const Jt=$.drawRange,kt=$.attributes.position;let se=Jt.start*Yt,fe=(Jt.start+Jt.count)*Yt;Mt!==null&&(se=Math.max(se,Mt.start*Yt),fe=Math.min(fe,(Mt.start+Mt.count)*Yt)),Ut!==null?(se=Math.max(se,0),fe=Math.min(fe,Ut.count)):kt!=null&&(se=Math.max(se,0),fe=Math.min(fe,kt.count));const Ee=fe-se;if(Ee<0||Ee===1/0)return;wt.setup(W,K,Bt,$,Ut);let _e,pe=pt;if(Ut!==null&&(_e=R.get(Ut),pe=Gt,pe.setIndex(_e)),W.isMesh)K.wireframe===!0?(rt.setLineWidth(K.wireframeLinewidth*ie()),pe.setMode(U.LINES)):pe.setMode(U.TRIANGLES);else if(W.isLine){let Vt=K.linewidth;Vt===void 0&&(Vt=1),rt.setLineWidth(Vt*ie()),W.isLineSegments?pe.setMode(U.LINES):W.isLineLoop?pe.setMode(U.LINE_LOOP):pe.setMode(U.LINE_STRIP)}else W.isPoints?pe.setMode(U.POINTS):W.isSprite&&pe.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)sr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))pe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Vt=W._multiDrawStarts,ye=W._multiDrawCounts,oe=W._multiDrawCount,$e=Ut?R.get(Ut).bytesPerElement:1,Ui=Z.get(K).currentProgram.getUniforms();for(let Ke=0;Ke<oe;Ke++)Ui.setValue(U,"_gl_DrawID",Ke),pe.render(Vt[Ke]/$e,ye[Ke])}else if(W.isInstancedMesh)pe.renderInstances(se,Ee,W.count);else if($.isInstancedBufferGeometry){const Vt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ye=Math.min($.instanceCount,Vt);pe.renderInstances(se,Ee,ye)}else pe.render(se,Ee)};function jt(C,G,$){C.transparent===!0&&C.side===ve&&C.forceSinglePass===!1?(C.side=Xe,C.needsUpdate=!0,gr(C,G,$),C.side=ti,C.needsUpdate=!0,gr(C,G,$),C.side=ve):gr(C,G,$)}this.compile=function(C,G,$=null){$===null&&($=C),p=Nt.get($),p.init(G),y.push(p),$.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),C!==$&&C.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const K=new Set;return C.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Mt=W.material;if(Mt)if(Array.isArray(Mt))for(let Pt=0;Pt<Mt.length;Pt++){const Bt=Mt[Pt];jt(Bt,$,W),K.add(Bt)}else jt(Mt,$,W),K.add(Mt)}),p=y.pop(),K},this.compileAsync=function(C,G,$=null){const K=this.compile(C,G,$);return new Promise(W=>{function Mt(){if(K.forEach(function(Pt){Z.get(Pt).currentProgram.isReady()&&K.delete(Pt)}),K.size===0){W(C);return}setTimeout(Mt,10)}at.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Xt=null;function Ze(C){Xt&&Xt(C)}function bn(){hi.stop()}function Ac(){hi.start()}const hi=new Fu;hi.setAnimationLoop(Ze),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(C){Xt=C,ot.setAnimationLoop(C),C===null?hi.stop():hi.start()},ot.addEventListener("sessionstart",bn),ot.addEventListener("sessionend",Ac),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(G),G=ot.getCamera()),C.isScene===!0&&C.onBeforeRender(M,C,G,T),p=Nt.get(C,y.length),p.init(G),y.push(p),j.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),mt.setFromProjectionMatrix(j,Ln,G.reversedDepth),q=this.localClippingEnabled,Tt=ft.init(this.clippingPlanes,q),m=et.get(C,w.length),m.init(),w.push(m),ot.enabled===!0&&ot.isPresenting===!0){const Mt=M.xr.getDepthSensingMesh();Mt!==null&&vo(Mt,G,-1/0,M.sortObjects)}vo(C,G,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(N,V),Ht=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ht&&Ft.addToRenderList(m,C),this.info.render.frame++,Tt===!0&&ft.beginShadows();const $=p.state.shadowsArray;Dt.render($,C,G),Tt===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,W=m.transmissive;if(p.setupLights(),G.isArrayCamera){const Mt=G.cameras;if(W.length>0)for(let Pt=0,Bt=Mt.length;Pt<Bt;Pt++){const Ut=Mt[Pt];Rc(K,W,C,Ut)}Ht&&Ft.render(C);for(let Pt=0,Bt=Mt.length;Pt<Bt;Pt++){const Ut=Mt[Pt];Cc(m,C,Ut,Ut.viewport)}}else W.length>0&&Rc(K,W,C,G),Ht&&Ft.render(C),Cc(m,C,G);T!==null&&A===0&&(St.updateMultisampleRenderTarget(T),St.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(M,C,G),wt.resetDefaultState(),_=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],Tt===!0&&ft.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function vo(C,G,$,K){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||mt.intersectsSprite(C)){K&&Et.setFromMatrixPosition(C.matrixWorld).applyMatrix4(j);const Pt=X.update(C),Bt=C.material;Bt.visible&&m.push(C,Pt,Bt,$,Et.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||mt.intersectsObject(C))){const Pt=X.update(C),Bt=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Et.copy(C.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Et.copy(Pt.boundingSphere.center)),Et.applyMatrix4(C.matrixWorld).applyMatrix4(j)),Array.isArray(Bt)){const Ut=Pt.groups;for(let Yt=0,Jt=Ut.length;Yt<Jt;Yt++){const kt=Ut[Yt],se=Bt[kt.materialIndex];se&&se.visible&&m.push(C,Pt,se,$,Et.z,kt)}}else Bt.visible&&m.push(C,Pt,Bt,$,Et.z,null)}}const Mt=C.children;for(let Pt=0,Bt=Mt.length;Pt<Bt;Pt++)vo(Mt[Pt],G,$,K)}function Cc(C,G,$,K){const W=C.opaque,Mt=C.transmissive,Pt=C.transparent;p.setupLightsView($),Tt===!0&&ft.setGlobalState(M.clippingPlanes,$),K&&rt.viewport(P.copy(K)),W.length>0&&mr(W,G,$),Mt.length>0&&mr(Mt,G,$),Pt.length>0&&mr(Pt,G,$),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Rc(C,G,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new nn(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?In:Un,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const Mt=p.state.transmissionRenderTarget[K.id],Pt=K.viewport||P;Mt.setSize(Pt.z*M.transmissionResolutionScale,Pt.w*M.transmissionResolutionScale);const Bt=M.getRenderTarget(),Ut=M.getActiveCubeFace(),Yt=M.getActiveMipmapLevel();M.setRenderTarget(Mt),M.getClearColor(B),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear(),Ht&&Ft.render($);const Jt=M.toneMapping;M.toneMapping=ui;const kt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),Tt===!0&&ft.setGlobalState(M.clippingPlanes,K),mr(C,$,K),St.updateMultisampleRenderTarget(Mt),St.updateRenderTargetMipmap(Mt),at.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let fe=0,Ee=G.length;fe<Ee;fe++){const _e=G[fe],pe=_e.object,Vt=_e.geometry,ye=_e.material,oe=_e.group;if(ye.side===ve&&pe.layers.test(K.layers)){const $e=ye.side;ye.side=Xe,ye.needsUpdate=!0,Pc(pe,$,K,Vt,ye,oe),ye.side=$e,ye.needsUpdate=!0,se=!0}}se===!0&&(St.updateMultisampleRenderTarget(Mt),St.updateRenderTargetMipmap(Mt))}M.setRenderTarget(Bt,Ut,Yt),M.setClearColor(B,F),kt!==void 0&&(K.viewport=kt),M.toneMapping=Jt}function mr(C,G,$){const K=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Mt=C.length;W<Mt;W++){const Pt=C[W],Bt=Pt.object,Ut=Pt.geometry,Yt=Pt.group;let Jt=Pt.material;Jt.allowOverride===!0&&K!==null&&(Jt=K),Bt.layers.test($.layers)&&Pc(Bt,G,$,Ut,Jt,Yt)}}function Pc(C,G,$,K,W,Mt){C.onBeforeRender(M,G,$,K,W,Mt),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(M,G,$,K,C,Mt),W.transparent===!0&&W.side===ve&&W.forceSinglePass===!1?(W.side=Xe,W.needsUpdate=!0,M.renderBufferDirect($,G,K,W,C,Mt),W.side=ti,W.needsUpdate=!0,M.renderBufferDirect($,G,K,W,C,Mt),W.side=ve):M.renderBufferDirect($,G,K,W,C,Mt),C.onAfterRender(M,G,$,K,W,Mt)}function gr(C,G,$){G.isScene!==!0&&(G=Rt);const K=Z.get(C),W=p.state.lights,Mt=p.state.shadowsArray,Pt=W.state.version,Bt=Y.getParameters(C,W.state,Mt,G,$),Ut=Y.getProgramCacheKey(Bt);let Yt=K.programs;K.environment=C.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(C.isMeshStandardMaterial?Wt:Zt).get(C.envMap||K.environment),K.envMapRotation=K.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Yt===void 0&&(C.addEventListener("dispose",Q),Yt=new Map,K.programs=Yt);let Jt=Yt.get(Ut);if(Jt!==void 0){if(K.currentProgram===Jt&&K.lightsStateVersion===Pt)return Ic(C,Bt),Jt}else Bt.uniforms=Y.getUniforms(C),C.onBeforeCompile(Bt,M),Jt=Y.acquireProgram(Bt,Ut),Yt.set(Ut,Jt),K.uniforms=Bt.uniforms;const kt=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(kt.clippingPlanes=ft.uniform),Ic(C,Bt),K.needsLights=eh(C),K.lightsStateVersion=Pt,K.needsLights&&(kt.ambientLightColor.value=W.state.ambient,kt.lightProbe.value=W.state.probe,kt.directionalLights.value=W.state.directional,kt.directionalLightShadows.value=W.state.directionalShadow,kt.spotLights.value=W.state.spot,kt.spotLightShadows.value=W.state.spotShadow,kt.rectAreaLights.value=W.state.rectArea,kt.ltc_1.value=W.state.rectAreaLTC1,kt.ltc_2.value=W.state.rectAreaLTC2,kt.pointLights.value=W.state.point,kt.pointLightShadows.value=W.state.pointShadow,kt.hemisphereLights.value=W.state.hemi,kt.directionalShadowMap.value=W.state.directionalShadowMap,kt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,kt.spotShadowMap.value=W.state.spotShadowMap,kt.spotLightMatrix.value=W.state.spotLightMatrix,kt.spotLightMap.value=W.state.spotLightMap,kt.pointShadowMap.value=W.state.pointShadowMap,kt.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=Jt,K.uniformsList=null,Jt}function Lc(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=Kr.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Ic(C,G){const $=Z.get(C);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function Qu(C,G,$,K,W){G.isScene!==!0&&(G=Rt),St.resetTextureUnits();const Mt=G.fog,Pt=K.isMeshStandardMaterial?G.environment:null,Bt=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:hs,Ut=(K.isMeshStandardMaterial?Wt:Zt).get(K.envMap||Pt),Yt=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Jt=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),kt=!!$.morphAttributes.position,se=!!$.morphAttributes.normal,fe=!!$.morphAttributes.color;let Ee=ui;K.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ee=M.toneMapping);const _e=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,pe=_e!==void 0?_e.length:0,Vt=Z.get(K),ye=p.state.lights;if(Tt===!0&&(q===!0||C!==v)){const Ge=C===v&&K.id===_;ft.setState(K,C,Ge)}let oe=!1;K.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ye.state.version||Vt.outputColorSpace!==Bt||W.isBatchedMesh&&Vt.batching===!1||!W.isBatchedMesh&&Vt.batching===!0||W.isBatchedMesh&&Vt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Vt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Vt.instancing===!1||!W.isInstancedMesh&&Vt.instancing===!0||W.isSkinnedMesh&&Vt.skinning===!1||!W.isSkinnedMesh&&Vt.skinning===!0||W.isInstancedMesh&&Vt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Vt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Vt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Vt.instancingMorph===!1&&W.morphTexture!==null||Vt.envMap!==Ut||K.fog===!0&&Vt.fog!==Mt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==ft.numPlanes||Vt.numIntersection!==ft.numIntersection)||Vt.vertexAlphas!==Yt||Vt.vertexTangents!==Jt||Vt.morphTargets!==kt||Vt.morphNormals!==se||Vt.morphColors!==fe||Vt.toneMapping!==Ee||Vt.morphTargetsCount!==pe)&&(oe=!0):(oe=!0,Vt.__version=K.version);let $e=Vt.currentProgram;oe===!0&&($e=gr(K,G,W));let Ui=!1,Ke=!1,Es=!1;const we=$e.getUniforms(),rn=Vt.uniforms;if(rt.useProgram($e.program)&&(Ui=!0,Ke=!0,Es=!0),K.id!==_&&(_=K.id,Ke=!0),Ui||v!==C){rt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),we.setValue(U,"projectionMatrix",C.projectionMatrix),we.setValue(U,"viewMatrix",C.matrixWorldInverse);const Ye=we.map.cameraPosition;Ye!==void 0&&Ye.setValue(U,xt.setFromMatrixPosition(C.matrixWorld)),st.logarithmicDepthBuffer&&we.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&we.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),v!==C&&(v=C,Ke=!0,Es=!0)}if(W.isSkinnedMesh){we.setOptional(U,W,"bindMatrix"),we.setOptional(U,W,"bindMatrixInverse");const Ge=W.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),we.setValue(U,"boneTexture",Ge.boneTexture,St))}W.isBatchedMesh&&(we.setOptional(U,W,"batchingTexture"),we.setValue(U,"batchingTexture",W._matricesTexture,St),we.setOptional(U,W,"batchingIdTexture"),we.setValue(U,"batchingIdTexture",W._indirectTexture,St),we.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&we.setValue(U,"batchingColorTexture",W._colorsTexture,St));const on=$.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&_t.update(W,$,$e),(Ke||Vt.receiveShadow!==W.receiveShadow)&&(Vt.receiveShadow=W.receiveShadow,we.setValue(U,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(rn.envMap.value=Ut,rn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(rn.envMapIntensity.value=G.environmentIntensity),Ke&&(we.setValue(U,"toneMappingExposure",M.toneMappingExposure),Vt.needsLights&&th(rn,Es),Mt&&K.fog===!0&&dt.refreshFogUniforms(rn,Mt),dt.refreshMaterialUniforms(rn,K,H,J,p.state.transmissionRenderTarget[C.id]),Kr.upload(U,Lc(Vt),rn,St)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Kr.upload(U,Lc(Vt),rn,St),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&we.setValue(U,"center",W.center),we.setValue(U,"modelViewMatrix",W.modelViewMatrix),we.setValue(U,"normalMatrix",W.normalMatrix),we.setValue(U,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ge=K.uniformsGroups;for(let Ye=0,xo=Ge.length;Ye<xo;Ye++){const di=Ge[Ye];Kt.update(di,$e),Kt.bind(di,$e)}}return $e}function th(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function eh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,G,$){const K=Z.get(C);K.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Z.get(C.texture).__webglTexture=G,Z.get(C.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:$,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){const $=Z.get(C);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0};const nh=U.createFramebuffer();this.setRenderTarget=function(C,G=0,$=0){T=C,b=G,A=$;let K=!0,W=null,Mt=!1,Pt=!1;if(C){const Ut=Z.get(C);if(Ut.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(U.FRAMEBUFFER,null),K=!1;else if(Ut.__webglFramebuffer===void 0)St.setupRenderTarget(C);else if(Ut.__hasExternalTextures)St.rebindTextures(C,Z.get(C.texture).__webglTexture,Z.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const kt=C.depthTexture;if(Ut.__boundDepthTexture!==kt){if(kt!==null&&Z.has(kt)&&(C.width!==kt.image.width||C.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");St.setupDepthRenderbuffer(C)}}const Yt=C.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Pt=!0);const Jt=Z.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Jt[G])?W=Jt[G][$]:W=Jt[G],Mt=!0):C.samples>0&&St.useMultisampledRTT(C)===!1?W=Z.get(C).__webglMultisampledFramebuffer:Array.isArray(Jt)?W=Jt[$]:W=Jt,P.copy(C.viewport),D.copy(C.scissor),O=C.scissorTest}else P.copy(it).multiplyScalar(H).floor(),D.copy(lt).multiplyScalar(H).floor(),O=ut;if($!==0&&(W=nh),rt.bindFramebuffer(U.FRAMEBUFFER,W)&&K&&rt.drawBuffers(C,W),rt.viewport(P),rt.scissor(D),rt.setScissorTest(O),Mt){const Ut=Z.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ut.__webglTexture,$)}else if(Pt){const Ut=G;for(let Yt=0;Yt<C.textures.length;Yt++){const Jt=Z.get(C.textures[Yt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Yt,Jt.__webglTexture,$,Ut)}}else if(C!==null&&$!==0){const Ut=Z.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ut.__webglTexture,$)}_=-1},this.readRenderTargetPixels=function(C,G,$,K,W,Mt,Pt,Bt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ut=Ut[Pt]),Ut){rt.bindFramebuffer(U.FRAMEBUFFER,Ut);try{const Yt=C.textures[Bt],Jt=Yt.format,kt=Yt.type;if(!st.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-K&&$>=0&&$<=C.height-W&&(C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Bt),U.readPixels(G,$,K,W,Ot.convert(Jt),Ot.convert(kt),Mt))}finally{const Yt=T!==null?Z.get(T).__webglFramebuffer:null;rt.bindFramebuffer(U.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(C,G,$,K,W,Mt,Pt,Bt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ut=Ut[Pt]),Ut)if(G>=0&&G<=C.width-K&&$>=0&&$<=C.height-W){rt.bindFramebuffer(U.FRAMEBUFFER,Ut);const Yt=C.textures[Bt],Jt=Yt.format,kt=Yt.type;if(!st.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,se),U.bufferData(U.PIXEL_PACK_BUFFER,Mt.byteLength,U.STREAM_READ),C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Bt),U.readPixels(G,$,K,W,Ot.convert(Jt),Ot.convert(kt),0);const fe=T!==null?Z.get(T).__webglFramebuffer:null;rt.bindFramebuffer(U.FRAMEBUFFER,fe);const Ee=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ed(U,Ee,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,se),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Mt),U.deleteBuffer(se),U.deleteSync(Ee),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,$=0){const K=Math.pow(2,-$),W=Math.floor(C.image.width*K),Mt=Math.floor(C.image.height*K),Pt=G!==null?G.x:0,Bt=G!==null?G.y:0;St.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,Pt,Bt,W,Mt),rt.unbindTexture()};const ih=U.createFramebuffer(),sh=U.createFramebuffer();this.copyTextureToTexture=function(C,G,$=null,K=null,W=0,Mt=null){Mt===null&&(W!==0?(sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=W,W=0):Mt=0);let Pt,Bt,Ut,Yt,Jt,kt,se,fe,Ee;const _e=C.isCompressedTexture?C.mipmaps[Mt]:C.image;if($!==null)Pt=$.max.x-$.min.x,Bt=$.max.y-$.min.y,Ut=$.isBox3?$.max.z-$.min.z:1,Yt=$.min.x,Jt=$.min.y,kt=$.isBox3?$.min.z:0;else{const on=Math.pow(2,-W);Pt=Math.floor(_e.width*on),Bt=Math.floor(_e.height*on),C.isDataArrayTexture?Ut=_e.depth:C.isData3DTexture?Ut=Math.floor(_e.depth*on):Ut=1,Yt=0,Jt=0,kt=0}K!==null?(se=K.x,fe=K.y,Ee=K.z):(se=0,fe=0,Ee=0);const pe=Ot.convert(G.format),Vt=Ot.convert(G.type);let ye;G.isData3DTexture?(St.setTexture3D(G,0),ye=U.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(St.setTexture2DArray(G,0),ye=U.TEXTURE_2D_ARRAY):(St.setTexture2D(G,0),ye=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const oe=U.getParameter(U.UNPACK_ROW_LENGTH),$e=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ui=U.getParameter(U.UNPACK_SKIP_PIXELS),Ke=U.getParameter(U.UNPACK_SKIP_ROWS),Es=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Yt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Jt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,kt);const we=C.isDataArrayTexture||C.isData3DTexture,rn=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){const on=Z.get(C),Ge=Z.get(G),Ye=Z.get(on.__renderTarget),xo=Z.get(Ge.__renderTarget);rt.bindFramebuffer(U.READ_FRAMEBUFFER,Ye.__webglFramebuffer),rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,xo.__webglFramebuffer);for(let di=0;di<Ut;di++)we&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Z.get(C).__webglTexture,W,kt+di),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Z.get(G).__webglTexture,Mt,Ee+di)),U.blitFramebuffer(Yt,Jt,Pt,Bt,se,fe,Pt,Bt,U.DEPTH_BUFFER_BIT,U.NEAREST);rt.bindFramebuffer(U.READ_FRAMEBUFFER,null),rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||C.isRenderTargetTexture||Z.has(C)){const on=Z.get(C),Ge=Z.get(G);rt.bindFramebuffer(U.READ_FRAMEBUFFER,ih),rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,sh);for(let Ye=0;Ye<Ut;Ye++)we?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,on.__webglTexture,W,kt+Ye):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,on.__webglTexture,W),rn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ge.__webglTexture,Mt,Ee+Ye):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ge.__webglTexture,Mt),W!==0?U.blitFramebuffer(Yt,Jt,Pt,Bt,se,fe,Pt,Bt,U.COLOR_BUFFER_BIT,U.NEAREST):rn?U.copyTexSubImage3D(ye,Mt,se,fe,Ee+Ye,Yt,Jt,Pt,Bt):U.copyTexSubImage2D(ye,Mt,se,fe,Yt,Jt,Pt,Bt);rt.bindFramebuffer(U.READ_FRAMEBUFFER,null),rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else rn?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(ye,Mt,se,fe,Ee,Pt,Bt,Ut,pe,Vt,_e.data):G.isCompressedArrayTexture?U.compressedTexSubImage3D(ye,Mt,se,fe,Ee,Pt,Bt,Ut,pe,_e.data):U.texSubImage3D(ye,Mt,se,fe,Ee,Pt,Bt,Ut,pe,Vt,_e):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Mt,se,fe,Pt,Bt,pe,Vt,_e.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Mt,se,fe,_e.width,_e.height,pe,_e.data):U.texSubImage2D(U.TEXTURE_2D,Mt,se,fe,Pt,Bt,pe,Vt,_e);U.pixelStorei(U.UNPACK_ROW_LENGTH,oe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,$e),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ui),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ke),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Es),Mt===0&&G.generateMipmaps&&U.generateMipmap(ye),rt.unbindTexture()},this.initRenderTarget=function(C){Z.get(C).__webglFramebuffer===void 0&&St.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?St.setTextureCube(C,0):C.isData3DTexture?St.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?St.setTexture2DArray(C,0):St.setTexture2D(C,0),rt.unbindTexture()},this.resetState=function(){b=0,A=0,T=null,rt.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const jr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ws{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const o_=new _c(-1,1,1,-1,0,1);class a_ extends be{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}}const c_=new a_;class xc{constructor(t){this._mesh=new I(c_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,o_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class l_ extends ws{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof He?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ci.clone(t.uniforms),this.material=new He({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new xc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class zl extends ws{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class u_ extends ws{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class h_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:In}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new l_(jr),this.copyPass.material.blending=Kn,this.clock=new wf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zl!==void 0&&(o instanceof zl?n=!0:o instanceof u_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class d_ extends ws{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Lt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const f_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Lt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class gs extends ws{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new Lt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(r,o,{type:In}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new nn(r,o,{type:In});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new nn(r,o,{type:In});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),o=Math.round(o/2)}const a=f_;this.highPassUniforms=Ci.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new He({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ci.clone(jr.uniforms),this.blendMaterial=new He({uniforms:this.copyUniforms,vertexShader:jr.vertexShader,fragmentShader:jr.fragmentShader,blending:Je,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Lt,this._oldClearAlpha=1,this._basic=new wn,this._fsQuad=new xc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=gs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=gs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new He({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new He({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}gs.BlurDirectionX=new nt(1,0);gs.BlurDirectionY=new nt(0,1);const Xr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class p_ extends ws{constructor(){super(),this.uniforms=Ci.clone(Xr.uniforms),this.material=new hf({name:Xr.name,uniforms:this.uniforms,vertexShader:Xr.vertexShader,fragmentShader:Xr.fragmentShader}),this._fsQuad=new xc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},re.getTransfer(this._outputColorSpace)===ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$l?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ka?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===tu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===eu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ql&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const os=[{id:"discovery-01",type:"discovery",chapterNumber:"01",name:"THE LANTERN GATE",title:"Just keep <em>walking.</em>",date:"Garden Discovery · 01",description:"There are a few little things I wanted to show you.",interactLabel:"Light the lantern",location:{x:-1.4,z:16},interactionRadius:3.4,assetReference:"lantern-gate",ambientEffect:"lantern-flare",isUnlocked:!0,isPrivate:!1,sortOrder:1},{id:"discovery-02",type:"discovery",chapterNumber:"02",name:"THE FIREFLY POND",title:"Our random chats <em>make me smile.</em>",date:"Garden Discovery · 02",description:"Even the ones that make absolutely no sense ✿",interactLabel:"Follow the firefly",location:{x:-4.2,z:-2},interactionRadius:3.6,assetReference:"firefly-pond",ambientEffect:"firefly-swirl",isUnlocked:!0,isPrivate:!1,sortOrder:2},{id:"discovery-03",type:"discovery",chapterNumber:"03",name:"A LITTLE SURPRISE",title:"Still can't believe you enjoy <em>horror movies.</em>",date:"Garden Discovery · 03",description:"I'd be the first one hiding behind a pillow.",interactLabel:"Say hello to the little spirit",location:{x:2.2,z:-12},interactionRadius:3.4,assetReference:"shy-spirit",ambientEffect:"spirit-wave",isUnlocked:!0,isPrivate:!1,sortOrder:3},{id:"discovery-04",type:"discovery",chapterNumber:"04",name:"THE BLOSSOM GROVE",title:"I'm really glad <em>we met.</em>",date:"Garden Discovery · 04",description:"Thanks for being you, Hirushi :)",interactLabel:"Open the blossom",location:{x:0,z:-30},interactionRadius:3.6,assetReference:"blossom-shrine",ambientEffect:"blossom-bloom",isUnlocked:!0,isPrivate:!1,sortOrder:4}],m_=[{id:"memory-01",type:"memory",code:"MEMORY 01",title:"That Headband",date:"Early days at university",theme:null,description:"I noticed you during the first few days of uni. I remember that headband too 😂. I thought you were cute and kind of my type, even though I didn't know you at all. Just a little crush back then.",interactLabel:"Look at the headband stand",location:{x:1.9,z:18.5},category:"beginning",interactionRadius:3.1,assetReference:"headband-stand",photo:null,photoCaption:"Optional slot for a campus or first-day photograph.",ambientEffect:"morning-petals",isUnlocked:!0,isPrivate:!1,sortOrder:1},{id:"memory-02",type:"memory",code:"MEMORY 02",title:"The Assignment Photo",date:"July 27, 2026",theme:null,description:"Then we ended up in the same sustainability assignment group. We even took that group photo together. The funny thing is, we barely spoke. I think our eyes met maybe three or four times, and that was about it. I still had that tiny crush, though 😂.",interactLabel:"Inspect the assignment photo stand",location:{x:-2.2,z:11.2},category:"university",interactionRadius:3.1,assetReference:"photo-stand",photo:null,photoCaption:"Group assignment photograph (July 27, 2026) — attach image file or URL when ready.",ambientEffect:"warm-shimmer",isUnlocked:!0,isPrivate:!1,sortOrder:2},{id:"memory-03",type:"memory",code:"MEMORY 03",title:"After Exams",date:"After the exams",theme:null,description:"After exams, we finally had a little conversation. Mostly just talking about the exams and random uni stuff. Nothing special happened, but after that I started noticing you more whenever I saw you around campus. Somehow I kept finding you cuter 😂.",interactLabel:"Sit by the post-exam seats",location:{x:2.3,z:6.2},category:"university",interactionRadius:3.1,assetReference:"after-exams-seats",photo:null,photoCaption:null,ambientEffect:"drifting-petals",isUnlocked:!0,isPrivate:!1,sortOrder:3},{id:"memory-04",type:"memory",code:"MEMORY 04",title:"The First Text (and Chocolate)",date:"Early October 2026",theme:null,description:"Eventually I got your number from the sustainability group and decided to text you. That first “Hi” took more courage than it should have 😂. Not long after, I came to see you with a chocolate. It was my first time giving chocolate to a crush. I stayed for maybe a minute, gave it to you awkwardly, and escaped.",interactLabel:"Look at the phone & chocolate",location:{x:-2.3,z:1.8},category:"keepsake",interactionRadius:3.1,assetReference:"first-text-chocolate",photo:null,photoCaption:null,ambientEffect:"breeze-swirl",isUnlocked:!0,isPrivate:!1,sortOrder:4},{id:"memory-05",type:"memory",code:"MEMORY 05",title:"The Cupcake Wrapper",date:"October 15, 2026",theme:null,description:"On your birthday I brought you a little chocolate, and you gave cupcakes to me and my friends. There was even some chocolate cake. I was ridiculously happy that day. I actually kept the cupcake wrapper afterward. I've never really done that before, but I just didn't want to forget that day.",interactLabel:"Look at the cupcake wrapper & table",location:{x:2.3,z:-4.5},category:"keepsake",interactionRadius:3.1,assetReference:"cupcake-wrapper-table",photo:null,photoCaption:"Optional slot for a photo of the birthday cupcake or saved wrapper.",ambientEffect:"gentle-glow",isUnlocked:!0,isPrivate:!1,sortOrder:5},{id:"memory-06",type:"memory",code:"MEMORY 06",title:"At the Student Centre",date:"Later in October 2026",theme:null,description:"The next time we sat together at the Student Centre, you weren't feeling well because of your wheeze. Your friends went off for a while, so we got to talk about random things. I remember you covering your mouth with a handkerchief most of the time. I couldn't tell whether you were shy or just feeling sick 😅. Either way, it was nice to finally sit and talk with you properly.",personalNoteHint:"Optional private note slot (kept out of the public bundle by default).",interactLabel:"Sit at the Student Centre table",location:{x:-2.4,z:-8.5},category:"friendship",interactionRadius:3.1,assetReference:"student-centre-table",photo:null,photoCaption:null,ambientEffect:"lantern-spark",isUnlocked:!0,isPrivate:!1,sortOrder:6},{id:"memory-07",type:"memory",code:"MEMORY 07",title:"The Organ",date:"October 2026",theme:null,description:"Somewhere along the way I found out you could play the organ and that you were in the church choir. I didn't know that about you before, so naturally I got curious. It was nice finding out things about you beyond our usual random chats.",interactLabel:"Inspect the choir organ",location:{x:2.4,z:-15.8},category:"milestone",interactionRadius:3.1,assetReference:"choir-organ",photo:null,photoCaption:null,ambientEffect:"pulse-ring",isUnlocked:!0,isPrivate:!1,sortOrder:7},{id:"memory-08",type:"memory",code:"MEMORY 08",title:"The Seat Behind You",date:"November 12, 2026",theme:null,description:"You teased me by saying you hadn't come to uni, and I actually believed you 😭. After somehow missing each other most of the day, I ended up sitting behind you in the last lecture. You asked, “Ai oya mage pitipasse inne hamadama? 😒” and I was like, “Dawas dekai hitiye” 😂. You also helped me find Panadol when I had a headache. Then came that little goodbye wave. Not a bad ending after all.",interactLabel:"Look at the two lecture rows",location:{x:-2.3,z:-20.2},category:"university",interactionRadius:3.1,assetReference:"lecture-rows",photo:null,photoCaption:null,ambientEffect:"drifting-petals",isUnlocked:!0,isPrivate:!1,sortOrder:8},{id:"memory-09",type:"memory",code:"MEMORY 09",title:"The Library Key Disaster",date:"November 13, 2026",theme:null,description:"We went to the library to work on our web project, and somehow the day became complete chaos. Your friends wrote “Hirushi × Menaka” on the whiteboard, you offered us space in the next study room, and then my friend broke the key 💀. We even had our first tiny phone call that day. After all the key drama, there was iced coffee, and that short walk out of the library talking about Tunnel was a nice ending.",interactLabel:"Explore the library study room",location:{x:2.3,z:-24.8},category:"university",interactionRadius:3.2,assetReference:"library-study-room",photo:null,photoCaption:null,ambientEffect:"lantern-spark",isUnlocked:!0,isPrivate:!1,sortOrder:9},{id:"memory-10",type:"memory",code:"MEMORY 10",title:"IT Movie Night",date:"November 13–14, 2026",theme:null,description:"Later that night you reminded me that IT was on TV. I found a way to watch it on my laptop too, so we ended up watching from different places and texting about it. You kept saying I'd get scared and wouldn't even last until midnight 😂. Honestly, all that teasing was more memorable than the movie.",interactLabel:"Visit the midnight movie spaces",location:{x:0,z:-35},category:"evening",interactionRadius:3.5,assetReference:"it-movie-night",photo:null,photoCaption:null,ambientEffect:"cinema-flicker",isUnlocked:!0,isPrivate:!1,sortOrder:10}];function Mc(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new be;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const f=[];for(let h=0;h<i.length;++h){const d=i[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(const u in r){const f=kl(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][h]);const g=kl(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function kl(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new Pe(o,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const f=l/e;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<e;g++){const x=u.getComponent(h,g);a.setComponent(h+f,g,x)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const xe={blossomDeep:"#D98DA9",blossomMid:"#F1B3C8",blossomPale:"#F6D6DD",warmIvory:"#F2E5C9",amberCore:"#F5C987",lanternGlow:"#FFD9A0"},oo={uTime:{value:0},uWindAmp:{value:1}};function Ss(i=78){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function g_(i){const t=new _f,e=Math.min(8,i.capabilities.getMaxAnisotropy()||4);function n(Q,{srgb:Ct=!0,repeat:zt=[1,1],clamp:jt=!1}={}){const Xt=t.load(`./assets/textures/${Q}`);return Xt.colorSpace=Ct?Ce:Yn,Xt.wrapS=jt?Jn:Ks,Xt.wrapT=jt?Jn:Ks,Xt.repeat.set(zt[0],zt[1]),Xt.anisotropy=e,Xt.generateMipmaps=!0,Xt.minFilter=li,Xt.magFilter=xn,Xt}function s(Q,{heightStart:Ct=0,amp:zt=.06,speed:jt=1.6}={}){Q.onBeforeCompile=Xt=>{Xt.uniforms.uTime=oo.uTime,Xt.uniforms.uWindAmp=oo.uWindAmp,Xt.vertexShader=`uniform float uTime;
uniform float uWindAmp;
`+Xt.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
          float wFactor = max(0.0, uv.y - ${Ct.toFixed(2)});
          vec4 wp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            wp = instanceMatrix * wp;
          #endif
          float phase = wp.x * 0.45 + wp.z * 0.38;
          transformed.x += sin(uTime * ${jt.toFixed(2)} + phase) * ${zt.toFixed(3)} * wFactor * uWindAmp;
          transformed.z += cos(uTime * ${(jt*.83).toFixed(2)} + phase * 1.3) * ${(zt*.7).toFixed(3)} * wFactor * uWindAmp;`)}}const r=n("bark_albedo.webp",{repeat:[1,3]}),o=n("bark_normal.webp",{srgb:!1,repeat:[1,3]}),a=n("bark_roughness.webp",{srgb:!1,repeat:[1,3]}),l=n("stone_albedo.webp",{repeat:[1.5,1.5]}),c=n("stone_normal.webp",{srgb:!1,repeat:[1.5,1.5]}),u=n("stone_roughness.webp",{srgb:!1,repeat:[1.5,1.5]}),f=n("wood_albedo.webp",{repeat:[1.5,1.5]}),h=n("wood_normal.webp",{srgb:!1,repeat:[1.5,1.5]}),d=n("roof_tile_albedo.webp",{repeat:[3,2]}),g=n("roof_tile_normal.webp",{srgb:!1,repeat:[3,2]}),x=n("terrain_grass_albedo.webp",{repeat:[26,26]}),m=n("terrain_soil_albedo.webp",{repeat:[26,26]}),p=n("terrain_normal.webp",{srgb:!1,repeat:[26,26]}),w=n("blossom_cluster.webp",{clamp:!0}),y=n("grass_wildflower_card.webp",{clamp:!0}),M=n("shrub_foliage.webp",{clamp:!0}),E=n("waterlily_pad.webp",{clamp:!0}),b=n("shoji_paper.webp",{clamp:!0}),A=n("linen_cloth.webp",{repeat:[1,1]}),T=n("water_normal.webp",{srgb:!1,repeat:[4,4]}),_=n("sky_twilight.webp",{clamp:!0}),v=n("memory_photo_art.webp",{clamp:!0}),P=n("cinema_screen_art.webp",{clamp:!0}),D=n("welcome_sign_art.webp",{clamp:!0}),O=new gt({map:r,normalMap:o,normalScale:new nt(1.35,1.35),roughnessMap:a,roughness:.92,metalness:.02}),B=new gt({map:l,normalMap:c,normalScale:new nt(1.15,1.15),roughnessMap:u,roughness:.88,metalness:.04}),F=new gt({color:"#918d8a",map:l,normalMap:c,normalScale:new nt(1.2,1.2),roughnessMap:u,roughness:.9,metalness:.04}),k=new gt({color:"#c8b2a2",map:f,normalMap:h,normalScale:new nt(1,1),roughness:.84,metalness:.03}),J=new gt({color:"#7a6056",map:f,normalMap:h,normalScale:new nt(1,1),roughness:.88,metalness:.03}),H=new gt({map:d,normalMap:g,normalScale:new nt(1.25,1.25),roughness:.72,metalness:.08}),N=new gt({map:b,emissiveMap:b,emissive:new Lt("#ffb969"),emissiveIntensity:1.55,roughness:.5}),V=new gt({map:w,alphaTest:.36,side:ve,roughness:.86,metalness:0,emissive:new Lt("#8c4f67"),emissiveIntensity:.32});s(V,{heightStart:.15,amp:.05,speed:1.4});const it=new gt({map:y,alphaTest:.36,side:ve,roughness:.88,metalness:0});s(it,{heightStart:.08,amp:.07,speed:1.9});const lt=new gt({map:M,alphaTest:.36,side:ve,roughness:.84,metalness:0});s(lt,{heightStart:.12,amp:.04,speed:1.5});const ut=new gt({map:E,alphaTest:.4,side:ve,roughness:.65,metalness:.05}),mt=new gt({map:A,roughness:.92,side:ve}),Tt=new gt({color:"#ece2d4",roughness:.34,metalness:.05}),q=new gt({color:"#323740",roughness:.45,metalness:.65}),j=new gt({color:"#d8b275",roughness:.35,metalness:.82}),xt=new gt({color:"#e5eef5",roughness:.1,metalness:.12,envMapIntensity:1.5,transparent:!0,opacity:.46}),Et=document.createElement("canvas");Et.width=Et.height=128;const Rt=Et.getContext("2d"),Ht=Rt.createRadialGradient(64,64,0,64,64,64);Ht.addColorStop(0,"rgba(255, 240, 200, 1)"),Ht.addColorStop(.18,"rgba(255, 214, 150, 0.65)"),Ht.addColorStop(.5,"rgba(255, 185, 115, 0.14)"),Ht.addColorStop(1,"rgba(255, 185, 115, 0)"),Rt.fillStyle=Ht,Rt.fillRect(0,0,128,128);const ie=new Vn(Et);ie.colorSpace=Ce;const U=document.createElement("canvas");U.width=U.height=64;const ht=U.getContext("2d"),at=ht.createRadialGradient(32,32,2,32,32,31);at.addColorStop(0,"rgba(18, 22, 34, 0.55)"),at.addColorStop(.55,"rgba(18, 22, 34, 0.22)"),at.addColorStop(1,"rgba(18, 22, 34, 0)"),ht.fillStyle=at,ht.fillRect(0,0,64,64);const st=new Vn(U),rt=new wn({map:st,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),yt=document.createElement("canvas");yt.width=512,yt.height=384;const Z=yt.getContext("2d"),St=Z.createLinearGradient(0,0,0,384);St.addColorStop(0,"#f6efe4"),St.addColorStop(1,"#e7dccb"),Z.fillStyle=St,Z.fillRect(0,0,512,384),Z.strokeStyle="#9a826b",Z.lineWidth=4,Z.strokeRect(24,24,464,336),Z.strokeStyle="#c5ad93",Z.lineWidth=2,Z.setLineDash([8,6]),Z.strokeRect(42,42,428,300),Z.setLineDash([]),Z.fillStyle="#6f5542";for(const[Q,Ct,zt,jt]of[[36,36,1,1],[476,36,-1,1],[36,348,1,-1],[476,348,-1,-1]])Z.beginPath(),Z.moveTo(Q,Ct),Z.lineTo(Q+zt*28,Ct),Z.lineTo(Q,Ct+jt*28),Z.closePath(),Z.fill();Z.save(),Z.translate(256,142),Z.fillStyle="rgba(105, 138, 102, 0.18)",Z.beginPath(),Z.arc(0,0,54,0,Math.PI*2),Z.fill(),Z.strokeStyle="#5c7f59",Z.lineWidth=4,Z.fillStyle="#7ea37a",Z.beginPath(),Z.moveTo(0,34),Z.bezierCurveTo(-36,18,-38,-24,0,-40),Z.bezierCurveTo(38,-24,36,18,0,34),Z.fill(),Z.stroke(),Z.beginPath(),Z.moveTo(0,36),Z.lineTo(0,-28),Z.stroke(),Z.restore(),Z.fillStyle="#4e3c30",Z.textAlign="center",Z.font='600 18px "Plus Jakarta Sans", sans-serif',Z.fillText("JULY 27, 2026 · UNIVERSITY",256,232),Z.font='italic 600 28px "Cormorant Garamond", Georgia, serif',Z.fillText("Sustainability Group Photo",256,268),Z.fillStyle="#7d6858",Z.font='500 15px "Plus Jakarta Sans", sans-serif',Z.fillText("[ Reserved for Real Group Photograph ]",256,304);const Zt=new Vn(yt);Zt.colorSpace=Ce;const Wt=document.createElement("canvas");Wt.width=256,Wt.height=340;const R=Wt.getContext("2d");R.fillStyle="#f8f3ea",R.fillRect(0,0,256,340),R.fillStyle="#3d4c63",R.fillRect(20,22,140,10),R.fillStyle="#7b8ba1",R.fillRect(20,40,95,6),R.strokeStyle="#c4baa8",R.lineWidth=2,R.strokeRect(18,16,220,308);for(let Q=68;Q<300;Q+=18)R.strokeStyle="rgba(130, 148, 170, 0.45)",R.beginPath(),R.moveTo(28,Q),R.lineTo(226,Q),R.stroke(),Q%36===0&&(R.fillStyle="rgba(70, 82, 98, 0.65)",R.fillRect(32,Q-9,110+Q*13%65,4));R.strokeStyle="#c45b5b",R.lineWidth=3,R.strokeRect(184,24,42,32),R.beginPath(),R.moveTo(193,40),R.lineTo(202,48),R.lineTo(218,30),R.stroke();const S=new Vn(Wt);S.colorSpace=Ce;const X=document.createElement("canvas");X.width=256,X.height=512;const Y=X.getContext("2d"),dt=Y.createLinearGradient(0,0,0,512);dt.addColorStop(0,"#1d2438"),dt.addColorStop(.5,"#2b334d"),dt.addColorStop(1,"#3b2d44"),Y.fillStyle=dt,Y.fillRect(0,0,256,512),Y.fillStyle="rgba(255, 246, 235, 0.9)",Y.textAlign="center",Y.font='300 54px "Plus Jakarta Sans", sans-serif',Y.fillText("18:42",128,128),Y.fillStyle="rgba(34, 28, 44, 0.92)",Y.strokeStyle="#e8b878",Y.lineWidth=4,Y.beginPath(),Y.roundRect(22,200,212,92,18),Y.fill(),Y.stroke(),Y.fillStyle="#e8b878",Y.textAlign="left",Y.font='700 16px "Plus Jakarta Sans", sans-serif',Y.fillText("NEW MESSAGE",42,234),Y.fillStyle="#fff5e6",Y.font='700 30px "Plus Jakarta Sans", sans-serif',Y.fillText("“Hi”",42,272);const et=new Vn(X);et.colorSpace=Ce;const Nt=document.createElement("canvas");Nt.width=512,Nt.height=340;const ft=Nt.getContext("2d");ft.fillStyle="#f7f0e2",ft.fillRect(0,0,512,340);const Dt=ft.createLinearGradient(236,0,276,0);Dt.addColorStop(0,"rgba(90,70,50,0)"),Dt.addColorStop(.5,"rgba(90,70,50,0.28)"),Dt.addColorStop(1,"rgba(90,70,50,0)"),ft.fillStyle=Dt,ft.fillRect(236,0,40,340),ft.strokeStyle="#5c4d3d",ft.fillStyle="#3b2f25";for(const Q of[28,278]){ft.fillRect(Q+45,24,110,7);for(let Ct=0;Ct<4;Ct++){const zt=58+Ct*66;ft.lineWidth=1.5;for(let jt=0;jt<5;jt++)ft.beginPath(),ft.moveTo(Q,zt+jt*7),ft.lineTo(Q+204,zt+jt*7),ft.stroke();for(let jt=0;jt<7;jt++){const Xt=Q+18+jt*26,Ze=zt+(jt*11+Ct*7)%4*7;ft.beginPath(),ft.ellipse(Xt,Ze,5,3.8,-.3,0,Math.PI*2),ft.fill(),ft.lineWidth=2,ft.beginPath(),ft.moveTo(Xt+4,Ze),ft.lineTo(Xt+4,Ze-20),ft.stroke()}}}const Ft=new Vn(Nt);Ft.colorSpace=Ce;const _t=document.createElement("canvas");_t.width=512,_t.height=320;const pt=_t.getContext("2d");pt.fillStyle="#f7f9fc",pt.fillRect(0,0,512,320),pt.strokeStyle="rgba(70, 105, 155, 0.35)",pt.lineWidth=3,pt.strokeRect(28,36,130,90),pt.beginPath(),pt.moveTo(28,60),pt.lineTo(158,60),pt.stroke(),pt.strokeRect(40,72,46,40),pt.strokeRect(96,72,50,40),pt.save(),pt.translate(275,165),pt.rotate(-.04),pt.fillStyle="#24477a",pt.textAlign="center",pt.font='700 42px "Comic Sans MS", "Segoe Print", "Plus Jakarta Sans", cursive, sans-serif',pt.fillText("Hirushi × Menaka",0,0),pt.strokeStyle="#c84b6b",pt.lineWidth=5,pt.lineCap="round",pt.beginPath(),pt.moveTo(-165,22),pt.quadraticCurveTo(0,34,168,16),pt.stroke(),pt.restore(),pt.fillStyle="#53687e",pt.font='600 16px "Plus Jakarta Sans", sans-serif',pt.fillText("Web Project · Study Room 02",32,282);const Gt=new Vn(_t);Gt.colorSpace=Ce;const Ot=document.createElement("canvas");Ot.width=256,Ot.height=160;const wt=Ot.getContext("2d");wt.fillStyle="#1b2230",wt.fillRect(0,0,256,160),wt.fillStyle="#273144",wt.fillRect(0,0,56,160),wt.fillStyle="#f2ede4",wt.fillRect(68,16,172,128),wt.fillStyle="#6b94b8",wt.fillRect(76,24,156,26),wt.fillStyle="#d8b4a0",wt.fillRect(76,58,74,68),wt.fillStyle="#9bb89e",wt.fillRect(158,58,74,68);const Kt=new Vn(Ot);Kt.colorSpace=Ce;const z=document.createElement("canvas");z.width=512,z.height=320;const ot=z.getContext("2d"),bt=ot.createLinearGradient(0,0,0,320);bt.addColorStop(0,"#0d101d"),bt.addColorStop(.58,"#1a1b2f"),bt.addColorStop(1,"#261824"),ot.fillStyle=bt,ot.fillRect(0,0,512,320);const It=ot.createRadialGradient(256,220,8,256,220,145);It.addColorStop(0,"rgba(235, 92, 75, 0.52)"),It.addColorStop(.5,"rgba(245, 162, 92, 0.22)"),It.addColorStop(1,"rgba(20, 18, 30, 0)"),ot.fillStyle=It,ot.fillRect(0,120,512,200),ot.strokeStyle="rgba(185, 205, 235, 0.22)",ot.lineWidth=1.5;for(let Q=0;Q<42;Q++){const Ct=Q*47%500,zt=Q*29%240;ot.beginPath(),ot.moveTo(Ct,zt),ot.lineTo(Ct-8,zt+26),ot.stroke()}ot.save(),ot.translate(256,208),ot.fillStyle="#f2c14e",ot.beginPath(),ot.moveTo(-48,0),ot.lineTo(48,0),ot.lineTo(32,20),ot.lineTo(-32,20),ot.closePath(),ot.fill(),ot.fillStyle="#ffd972",ot.beginPath(),ot.moveTo(0,-34),ot.lineTo(24,0),ot.lineTo(-24,0),ot.closePath(),ot.fill(),ot.restore();const vt=new Vn(z);return vt.colorSpace=Ce,{textures:{grassTex:x,soilTex:m,terrainNormal:p,waterNormal:T,skyTex:_,photoArtTex:v,cinemaArtTex:P,welcomeSignTex:D,glowTex:ie,blossomTex:w,assignmentPlaceholderTex:Zt,examSheetTex:S,phoneLockTex:et,sheetMusicTex:Ft,whiteboardTex:Gt,webProjectScreenTex:Kt,movieScreenTex:vt},materials:{barkMat:O,stoneMat:B,stoneDarkMat:F,woodMat:k,woodDarkMat:J,roofTileMat:H,shojiMat:N,blossomCardMat:V,grassCardMat:it,shrubCardMat:lt,lilyPadMat:ut,linenMat:mt,ceramicMat:Tt,darkMetalMat:q,brassMat:j,glassMat:xt,contactShadowMat:rt}}}function fr(i,t,e=.8,n=.015){const s=new I(new de(e*2,e*2),t);return s.rotation.x=-Math.PI/2,s.position.y=n,i.add(s),s}function Pi(i,t=[]){const e=new Set(t);i.updateMatrixWorld(!0);const n=i.matrixWorld.clone().invert(),s=new Map,r=[];i.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||Array.isArray(o.material))return;let a=o;for(;a&&a!==i;){if(e.has(a))return;a=a.parent}if(e.has(o))return;const l=new ce().multiplyMatrices(n,o.matrixWorld);let c=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();for(const f of Object.keys(c.attributes))f!=="position"&&f!=="normal"&&f!=="uv"&&c.deleteAttribute(f);if(c.attributes.normal||c.computeVertexNormals(),!c.attributes.uv){const f=c.attributes.position.count;c.setAttribute("uv",new Pe(new Float32Array(f*2),2))}c.clearGroups(),c.applyMatrix4(l);const u=s.get(o.material)||{geos:[],castShadow:!1,receiveShadow:!1};u.geos.push(c),u.castShadow=u.castShadow||o.castShadow,u.receiveShadow=u.receiveShadow||o.receiveShadow,s.set(o.material,u),r.push(o)});for(const o of r)o.parent?.remove(o);for(const[o,a]of s.entries()){if(!a.geos.length)continue;const l=Mc(a.geos,!1);if(a.geos.forEach(u=>u.dispose()),!l)continue;const c=new I(l,o);c.castShadow=a.castShadow,c.receiveShadow=a.receiveShadow,i.add(c)}}function ze(i){return Math.sin(i*.13)*1.75}function Si(i,t){const e=(i+10.6)/6,n=(t+2.2)/8,s=Math.atan2(n,e),r=1+Math.sin(s*2+.6)*.11+Math.cos(s*3-.4)*.07;return Math.hypot(e,n)/r*6}function me(i,t){const e=Si(i,t);if(e<6.4)return-.82*(1-Ne.smoothstep(e,1.2,6.2));const n=Math.abs(i-ze(t)),s=Math.hypot(i+4.2,t+14.2),r=Ne.smoothstep(n,1.9,6.8),o=Ne.smoothstep(s,3.6,7.2),a=Math.sin(i*.12+.4)*Math.cos(t*.1)*.55+Math.sin((i-t)*.065)*.35,l=Math.max(0,Math.abs(i)-15.5),c=Math.max(0,-40-t),u=Math.min(2.6,l*l*.0055+c*c*.0045);return Math.max(-.04,a*r*o+u)}function __(i,t=.65){const e=new dr,n=6+Math.floor(i()*3);for(let a=0;a<n;a++){const l=a/n*Math.PI*2,c=t*(.76+i()*.36),u=Math.cos(l)*c,f=Math.sin(l)*c*(.78+i()*.32);a===0?e.moveTo(u,f):e.lineTo(u,f)}e.closePath();const s=new fc(e,{depth:.09,bevelEnabled:!0,bevelThickness:.03,bevelSize:.035,bevelSegments:2,curveSegments:1});s.rotateX(-Math.PI/2);const r=s.attributes.position,o=s.attributes.uv;for(let a=0;a<r.count;a++)o.setXY(a,r.getX(a)*.7+.5,r.getZ(a)*.7+.5);return s.computeVertexNormals(),s}function v_(i,t=2){const e=new pc(1,t),n=e.attributes.position,s=new L,r=i()*10,o=i()*10;for(let a=0;a<n.count;a++){s.fromBufferAttribute(n,a);const l=Math.sin(s.x*2.6+r)*Math.cos(s.y*2.3+o)*.16+Math.sin(s.z*3.8-r)*.09;s.multiplyScalar(1+l),s.y<-.25&&(s.y=-.25+(s.y+.25)*.35),s.y>.55&&(s.y=.55+(s.y-.55)*.55),n.setXYZ(a,s.x,s.y,s.z)}return e.computeVertexNormals(),e}function Hl(i=.85,t=.75){const e=new de(i,t,1,2);e.translate(0,t*.5,0);const n=e.clone();n.rotateY(Math.PI/3);const s=e.clone();return s.rotateY(-Math.PI/3),x_([e,n,s])}function x_(i){const t=i.reduce((l,c)=>l+c.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*2),r=[];let o=0;for(const l of i){const c=l.attributes.position,u=l.attributes.normal,f=l.attributes.uv;e.set(c.array,o*3),n.set(u.array,o*3),s.set(f.array,o*2);const h=l.index;if(h)for(let d=0;d<h.count;d++)r.push(h.getX(d)+o);else for(let d=0;d<c.count;d++)r.push(d+o);o+=c.count}const a=new be;return a.setAttribute("position",new Pe(e,3)),a.setAttribute("normal",new Pe(n,3)),a.setAttribute("uv",new Pe(s,2)),a.setIndex(r),a}function M_(i,t,e=[]){const n=Ss(1047),{textures:s,materials:r}=t,o=new Te,a=new de(140,140,136,136);a.rotateX(-Math.PI/2);const l=a.attributes.position,c=new Float32Array(l.count*3),u=new Float32Array(l.count),f=new Lt("#829674"),h=new Lt("#6a825c"),d=new Lt("#66564a"),g=new Lt("#5a5449"),x=new Lt;for(let N=0;N<l.count;N++){const V=l.getX(N),it=l.getZ(N),lt=me(V,it);l.setY(N,lt);const ut=Math.abs(V-ze(it)),mt=Si(V,it),Tt=1-Ne.smoothstep(ut,.85,2.3),q=1-Ne.smoothstep(mt,5.2,6.9),j=1-Ne.smoothstep(Math.hypot(V+4.2,it+14.2),2.5,4.4),xt=Math.min(1,Math.max(Tt*.92,q,j*.75));u[N]=xt;const Et=Math.sin(V*.25)*Math.cos(it*.22)*.5+.5;if(x.lerpColors(h,f,Et),xt>.01){const Rt=mt<6.4?g:d;x.lerp(Rt,xt)}c[N*3]=x.r,c[N*3+1]=x.g,c[N*3+2]=x.b}a.setAttribute("color",new Pe(c,3)),a.setAttribute("aSoilMix",new Pe(u,1)),a.computeVertexNormals();const m=new gt({map:s.grassTex,normalMap:s.terrainNormal,normalScale:new nt(.9,.9),vertexColors:!0,roughness:.94,metalness:.02});m.onBeforeCompile=N=>{N.uniforms.uSoilTex={value:s.soilTex},N.vertexShader=`attribute float aSoilMix;
varying float vSoilMix;
`+N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSoilMix = aSoilMix;`),N.fragmentShader=`uniform sampler2D uSoilTex;
varying float vSoilMix;
`+N.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
          vec4 grassSample = texture2D( map, vMapUv );
          vec4 soilSample = texture2D( uSoilTex, vMapUv );
          diffuseColor *= mix( grassSample, soilSample, clamp(vSoilMix, 0.0, 1.0) );
        #endif`)};const p=new I(a,m);p.receiveShadow=!0,i.add(p);const w=Array.from({length:6},()=>__(n,.62)),y=new $t;i.add(y);for(let N=23.2;N>-35.8;N-=1.05){const V=ze(N),it=Math.floor(N*10)%2===0?[-.62,.58]:[-.75,.02,.72];for(const lt of it){const ut=V+lt+(n()-.5)*.22,mt=N+(n()-.5)*.24,Tt=me(ut,mt);if(Tt<-.02)continue;const q=w[Math.floor(n()*w.length)],j=new I(q,n()>.38?r.stoneMat:r.stoneDarkMat);j.position.set(ut,Tt-.025,mt),j.rotation.set((n()-.5)*.05,n()*Math.PI*2,(n()-.5)*.05);const xt=.76+n()*.34;j.scale.set(xt*(.9+n()*.25),.9+n()*.35,xt*(.85+n()*.3)),j.castShadow=!0,j.receiveShadow=!0,y.add(j)}}Pi(y);const M=Array.from({length:4},()=>v_(n,2)),E=M.map(()=>[]),b=(N,V,it=2)=>e.some(lt=>Math.hypot(N-lt.x,V-lt.z)<it);for(let N=0;N<42;N++){const V=N/42*Math.PI*2+(n()-.5)*.1,it=5.45+(n()-.5)*.75,lt=-10.6+Math.cos(V)*it*(1+Math.sin(V*2+.6)*.11),ut=-2.2+Math.sin(V)*it*1.32*(1+Math.cos(V*3-.4)*.07);if(Math.abs(lt-ze(ut))<2.2||b(lt,ut,1.8))continue;const mt=me(lt,ut),Tt=.45+n()*.78,q=.32+n()*.48,j=.45+n()*.82;E[N%4].push({x:lt,y:mt+q*.2,z:ut,rx:(n()-.5)*.25,ry:n()*Math.PI*2,rz:(n()-.5)*.25,sx:Tt,sy:q,sz:j})}for(let N=0;N<56;N++){const V=22.5-n()*58,it=N%2===0?-1:1,lt=ze(V)+it*(2.6+n()*11.5);if(Si(lt,V)<6.4||Math.hypot(lt+4.2,V+14.2)<3.9||b(lt,V,1.9))continue;const ut=me(lt,V),mt=.4+n()*.95,Tt=.28+n()*.55,q=.4+n()*.95;E[N%4].push({x:lt,y:ut+Tt*.18,z:V,rx:(n()-.5)*.3,ry:n()*Math.PI*2,rz:(n()-.5)*.3,sx:mt,sy:Tt,sz:q})}E.forEach((N,V)=>{if(!N.length)return;const it=new tn(M[V],r.stoneMat,N.length);it.castShadow=!0,it.receiveShadow=!0,N.forEach((lt,ut)=>{o.position.set(lt.x,lt.y,lt.z),o.rotation.set(lt.rx,lt.ry,lt.rz),o.scale.set(lt.sx,lt.sy,lt.sz),o.updateMatrix(),it.setMatrixAt(ut,o.matrix);const mt=.78+n()*.28;it.setColorAt(ut,new Lt(mt,mt*.99,mt*.97))}),i.add(it)});const A=[];for(let N=0;N<1650;N++){const V=24-n()*61,it=n()>.5?1:-1,lt=n()<.65?1.48+n()*2.4:3.2+n()*11.5,ut=ze(V)+it*lt;if(Si(ut,V)<5.3||Math.hypot(ut+4.2,V+14.2)<3.4||b(ut,V,1.15))continue;const mt=me(ut,V);A.push({x:ut,y:mt-.03,z:V,s:.52+n()*.52,rot:n()*Math.PI*2,tint:.8+n()*.3})}for(let N=0;N<340;N++){const V=n()*Math.PI*2,it=5.45+n()*1.45,lt=-10.6+Math.cos(V)*it*(1+Math.sin(V*2+.6)*.11),ut=-2.2+Math.sin(V)*it*1.32*(1+Math.cos(V*3-.4)*.07);if(Math.abs(lt-ze(ut))<1.35)continue;const mt=me(lt,ut);A.push({x:lt,y:mt-.04,z:ut,s:.78+n()*.8,rot:n()*Math.PI*2,tint:.82+n()*.28})}const T=Hl(.75,.64),_=new tn(T,r.grassCardMat,A.length);_.receiveShadow=!0,A.forEach((N,V)=>{o.position.set(N.x,N.y,N.z),o.rotation.set(0,N.rot,0),o.scale.set(N.s,N.s*(.85+n()*.35),N.s),o.updateMatrix(),_.setMatrixAt(V,o.matrix),_.setColorAt(V,new Lt(N.tint,N.tint*1.02,N.tint*.94))}),i.add(_);const v=[];for(let N=0;N<210;N++){const V=23.5-n()*59,it=n()>.5?1:-1,lt=ze(V)+it*(2.25+n()*9.5);if(Si(lt,V)<5.7||Math.hypot(lt+4.2,V+14.2)<3.8||b(lt,V,1.55))continue;const ut=me(lt,V);v.push({x:lt,y:ut-.04,z:V,s:.8+n()*.85,rot:n()*Math.PI*2})}const P=Hl(1.15,.92),D=new tn(P,r.shrubCardMat,v.length);D.castShadow=!0,D.receiveShadow=!0,v.forEach((N,V)=>{o.position.set(N.x,N.y,N.z),o.rotation.set(0,N.rot,0),o.scale.set(N.s,N.s*(.85+n()*.25),N.s),o.updateMatrix(),D.setMatrixAt(V,o.matrix);const it=.82+n()*.26;D.setColorAt(V,new Lt(it,it*.97,it))}),i.add(D);const O=460,B=new de(.11,.08);B.rotateX(-Math.PI/2);const F=new gt({color:xe.blossomMid,roughness:.78,side:ve}),k=new tn(B,F,O);for(let N=0;N<O;N++){const V=23.5-n()*59,it=ze(V)+(n()-.5)*4.8,lt=me(it,V);lt<-.02?o.scale.setScalar(.001):(o.position.set(it,lt+.032+n()*.015,V),o.rotation.set((n()-.5)*.2,n()*Math.PI*2,(n()-.5)*.2),o.scale.set(.75+n()*.85,1,.75+n()*.85)),o.updateMatrix(),k.setMatrixAt(N,o.matrix);const ut=new Lt().lerpColors(new Lt(xe.blossomDeep),new Lt(xe.blossomPale),n());k.setColorAt(N,ut)}i.add(k);function J(N){const V=new $t,it=new qt(.055,.068,.92,7),lt=new qt(.035,.038,1,6);for(let ut=0;ut<N.length;ut++){const[mt,Tt]=N[ut],q=me(mt,Tt),j=new I(it,r.woodDarkMat);if(j.position.set(mt,q+.42,Tt),j.rotation.z=(n()-.5)*.05,j.castShadow=!0,j.receiveShadow=!0,V.add(j),ut<N.length-1){const[xt,Et]=N[ut+1],Rt=me(xt,Et),Ht=new L(mt,q,Tt),ie=new L(xt,Rt,Et),U=ie.clone().sub(Ht),ht=U.length();for(const at of[.38,.68]){const st=new I(lt,r.woodMat);st.scale.set(1,ht,1),st.position.copy(Ht).add(ie).multiplyScalar(.5),st.position.y+=at,st.quaternion.setFromUnitVectors(new L(0,1,0),U.clone().normalize()),st.castShadow=!0,V.add(st)}}}Pi(V),i.add(V)}J([[-5.6,22.8],[-4.3,21.6],[-3.1,20.2],[-2.5,18.8]]),J([[5.8,22.4],[5.2,20.6],[4.9,18.8]]),J([[-16.5,-14.5],[-14.2,-16],[-11.8,-17.3],[-9.5,-18.2]]);const H=["#696987","#555d78","#434f69"];for(let N=0;N<3;N++){const V=56+N*18,it=72,lt=new dr,ut=180;lt.moveTo(-ut,-6);for(let Et=0;Et<=it;Et++){const Rt=Et/it,Ht=-ut+Rt*ut*2,ie=6.5+N*4.2+Math.sin(Rt*Math.PI*(5+N*2)+N*1.7)*(3.8+N*1.4)+Math.cos(Rt*Math.PI*(11+N*3))*1.9;lt.lineTo(Ht,Math.max(1.5,ie))}lt.lineTo(ut,-6),lt.closePath();const mt=new mo(lt),Tt=new wn({color:H[N],fog:!0,side:ve}),q=new I(mt,Tt);q.position.set(0,-1.5,-V),i.add(q);const j=q.clone();j.rotation.y=Math.PI*.48,j.position.set(-V*.92,-1.5,-6),i.add(j);const xt=q.clone();xt.rotation.y=-Math.PI*.48,xt.position.set(V*.92,-1.5,-6),i.add(xt)}return{grassInst:_,shrubInst:D}}function Yr(i,t,e,n,s,r=.04){const o=new fs(i),a=o.computeFrenetFrames(t,!1),l=[],c=[],u=[],f=[],h=new L,d=new L;for(let m=0;m<=t;m++){const p=m/t,w=o.getPointAt(p),y=a.normals[m],M=a.binormals[m],E=Ne.lerp(n,s,Math.pow(p,.85));for(let b=0;b<=e;b++){const A=b/e,T=A*Math.PI*2,_=1+Math.sin(T*5+p*4)*r*(1-p*.6),v=E*_,P=Math.cos(T),D=Math.sin(T);d.set(0,0,0).addScaledVector(y,P).addScaledVector(M,D).normalize(),h.copy(w).addScaledVector(d,v),l.push(h.x,h.y,h.z),c.push(d.x,d.y,d.z),u.push(A*2,p*3)}}const g=e+1;for(let m=0;m<t;m++)for(let p=0;p<e;p++){const w=m*g+p,y=(m+1)*g+p,M=(m+1)*g+(p+1),E=m*g+(p+1);f.push(w,y,E),f.push(y,M,E)}const x=new be;return x.setAttribute("position",new Qt(l,3)),x.setAttribute("normal",new Qt(c,3)),x.setAttribute("uv",new Qt(u,2)),x.setIndex(f),x}function Gl(){const i=[],t=[[0,0,0],[.24,Math.PI/3,.16],[-.22,-Math.PI/3,-.14]];for(const[n,s,r]of t){const o=new de(1.45,1.35);o.rotateX(n),o.rotateY(s),o.rotateZ(r),i.push(o)}const e=Mc(i,!1);return i.forEach(n=>n.dispose()),e}function y_(i,t){const e=Ss(512),{materials:n}=t,s=[],r=[],o=[];function a(T,_,v=1,P=0,D=0,O=!1){const B=me(T,_);s.push({x:T,z:_,r:.62*v});const F=(O?.5:.36)*v,k=(O?3.85:3.45)*v,J=new L(T,B-.18,_),H=new L(T+P*.25,B+k*.36,_+D*.25),N=new L(T+P*.72+(e()-.5)*.35*v,B+k*.74,_+D*.72+(e()-.5)*.3*v),V=new L(T+P,B+k,_+D),it=Yr([J,H,N,V],10,O?9:7,F,F*.42,.1);r.push(it.toNonIndexed());const lt=O?5:4;for(let mt=0;mt<lt;mt++){const Tt=mt/lt*Math.PI*2+e()*.5,q=(.75+e()*.55)*v,j=new L(T+Math.cos(Tt)*F*.45,B+.65*v,_+Math.sin(Tt)*F*.45),xt=new L(T+Math.cos(Tt)*q*.65,B+.18*v,_+Math.sin(Tt)*q*.65),Et=new L(T+Math.cos(Tt)*q,B-.16,_+Math.sin(Tt)*q);r.push(Yr([j,xt,Et],5,5,F*.42,F*.12,.06).toNonIndexed())}const ut=O?7:5;for(let mt=0;mt<ut;mt++){const Tt=mt/ut*Math.PI*2+e()*.55,q=(2.1+e()*1.45)*v,j=mt%2===0?N.clone():V.clone(),xt=new L(j.x+Math.cos(Tt)*q*.52,j.y+(.65+e()*.55)*v,j.z+Math.sin(Tt)*q*.52),Et=new L(j.x+Math.cos(Tt)*q,j.y+(1.05+e()*1.05)*v,j.z+Math.sin(Tt)*q),Rt=Yr([j,xt,Et],7,6,F*.34,F*.1,.05);r.push(Rt.toNonIndexed());for(let Ht=-1;Ht<=1;Ht+=2){const ie=Tt+Ht*(.48+e()*.25),U=(.95+e()*.7)*v,ht=xt.clone().lerp(Et,.55),at=new L(ht.x+Math.cos(ie)*U,ht.y+(.42+e()*.55)*v,ht.z+Math.sin(ie)*U);r.push(Yr([ht,at],4,5,F*.16,F*.05,.02).toNonIndexed());const st=O?6:5;for(let rt=0;rt<st;rt++){const yt=rt<3?at:Et;o.push({x:yt.x+(e()-.5)*1.35*v,y:yt.y+(e()-.35)*.9*v,z:yt.z+(e()-.5)*1.35*v,s:(1.05+e()*.85)*v,tone:e(),rotY:e()*Math.PI*2,tilt:(e()-.5)*.35})}}}for(let mt=0;mt<(O?10:7);mt++)o.push({x:V.x+(e()-.5)*2.2*v,y:V.y+(.7+e()*1.4)*v,z:V.z+(e()-.5)*2.2*v,s:(1.2+e()*.85)*v,tone:e(),rotY:e()*Math.PI*2,tilt:(e()-.5)*.3})}a(-5.1,17.8,1.24,1.35,-.3,!0),a(5.4,16,1.22,-1.15,-.2,!0);const l=[[-5.8,11.2,1.05,.55,.1],[6.6,10.4,1.08,-.6,-.2],[6.5,3.8,1.12,-.65,.1],[-4.9,5.2,1.02,.45,.2],[6.7,-3.2,1.15,-.55,0],[-16.8,3.8,1.2,.8,-.4],[-17.4,-5.2,1.25,1.1,.2],[-12.5,-12.6,1.18,.6,.5],[6.8,-10.5,1.12,-.6,.1],[-9.2,-19.2,1.16,.8,.2],[6.6,-18.4,1.1,-.55,-.2],[-6.4,-25.8,1.18,.5,.2],[6.4,-26.2,1.15,-.55,.1],[-3.8,-33.6,1.35,.7,-.2],[4.8,-34,1.32,-.7,-.2],[-11.5,14.5,1.15,.2,0],[11.2,12.8,1.2,-.3,0],[12,-1.5,1.25,-.4,0],[11.8,-16,1.22,-.2,0],[-14.5,-26.5,1.28,.3,0],[11.5,-31.5,1.3,-.3,0]];for(const[T,_,v,P,D]of l)Si(T,_)<6.5||Math.hypot(T+4.2,_+14.2)<3.8||a(T,_,v,P,D,!1);const c=Mc(r,!1);r.forEach(T=>T.dispose());const u=new I(c,n.barkMat);u.castShadow=!0,u.receiveShadow=!0,i.add(u);const f=Gl(),h=new tn(f,n.blossomCardMat,o.length);h.castShadow=!0,h.receiveShadow=!1;const d=new Te,g=new Lt("#d07c9c"),x=new Lt(xe.blossomMid),m=new Lt(xe.blossomPale),p=new Lt("#f7dce0"),w=new Lt;o.forEach((T,_)=>{d.position.set(T.x,T.y,T.z),d.rotation.set(T.tilt,T.rotY,T.tilt*.6),d.scale.set(T.s,T.s*.88,T.s),d.updateMatrix(),h.setMatrixAt(_,d.matrix),T.tone<.3?w.lerpColors(g,x,T.tone/.3):T.tone<.72?w.lerpColors(x,m,(T.tone-.3)/.42):w.lerpColors(m,p,(T.tone-.72)/.28),h.setColorAt(_,w)}),i.add(h);const y=[[-22,-38,1.65],[-12,-45,1.75],[11,-45,1.7],[22,-40,1.75],[-24,-18,1.6],[22,-14,1.65],[-23,8,1.55],[21,6,1.6]],M=Gl(),E=new tn(M,n.blossomCardMat,y.length*5),b=new qt(.14,.42,4.4,7),A=new tn(b,n.barkMat,y.length);return y.forEach(([T,_,v],P)=>{const D=me(T,_);d.position.set(T,D+1.45*v,_),d.rotation.set(0,e()*3,0),d.scale.setScalar(v),d.updateMatrix(),A.setMatrixAt(P,d.matrix);for(let O=0;O<5;O++){const B=O/5*Math.PI*2,F=O===0?0:.95*v;d.position.set(T+Math.cos(B)*F,D+(3.1+O%2*.65)*v,_+Math.sin(B)*F),d.rotation.set(0,O*1.1,0),d.scale.setScalar(v*1.95),d.updateMatrix(),E.setMatrixAt(P*5+O,d.matrix),E.setColorAt(P*5+O,new Lt("#df9fb8"))}}),i.add(A),i.add(E),{colliders:s,blossomInst:h}}function Vl(i,t,e,n,{scale:s=1,hasLight:r=!1,lightIntensity:o=2.6,lightDist:a=7.5,yOverride:l=null}={}){const{textures:c,materials:u}=t,f=l!==null?l:me(e,n),h=new $t;h.position.set(e,f,n),h.scale.setScalar(s),i.add(h);const d=new I(new tt(.68,.16,.68),u.stoneMat);d.position.y=.08,d.castShadow=d.receiveShadow=!0,h.add(d);const g=new I(new tt(.46,.08,.46),u.stoneDarkMat);g.position.y=.19,g.castShadow=g.receiveShadow=!0,h.add(g);const x=new I(new tt(.18,.56,.18),u.woodDarkMat);x.position.y=.51,x.castShadow=x.receiveShadow=!0,h.add(x);const m=new I(new tt(.56,.07,.56),u.woodMat);m.position.y=.81,m.castShadow=m.receiveShadow=!0,h.add(m);const p=new I(new tt(.38,.48,.38),u.shojiMat);p.position.y=1.08,h.add(p);for(const A of[-1,1])for(const T of[-1,1]){const _=new I(new tt(.045,.52,.045),u.woodDarkMat);_.position.set(A*.2,1.08,T*.2),_.castShadow=!0,h.add(_)}for(const A of[.96,1.19]){const T=new I(new tt(.42,.024,.42),u.woodDarkMat);T.position.y=A,h.add(T)}for(const A of[0,Math.PI/2]){const T=new I(new tt(.022,.48,.41),u.woodDarkMat);T.position.y=1.08,T.rotation.y=A,h.add(T)}const w=new I(new tt(.66,.05,.66),u.woodDarkMat);w.position.y=1.35,w.castShadow=!0,h.add(w);const y=new I(new sn(.54,.28,4),u.roofTileMat);y.position.y=1.51,y.rotation.y=Math.PI/4,y.castShadow=!0,h.add(y);const M=new I(new Me(.055,8,8),u.woodMat);M.position.y=1.66,h.add(M),fr(h,u.contactShadowMat,.62,.015);const E=new Sn(new un({map:c.glowTex,transparent:!0,opacity:.55,depthWrite:!1,blending:Je}));E.position.set(0,1.08,0),E.scale.set(1.55,1.55,1.55),h.add(E);let b=null;return r&&(b=new Tn(xe.amberCore,o,a,1.8),b.position.set(0,1.12,0),h.add(b)),{group:h,light:b,halo:E}}function w_(i,t,e,n){const{textures:s,materials:r}=t,o=me(e,n),a=new $t;a.position.set(e,o,n),i.add(a);const l=new I(new rs(.85,1),r.stoneDarkMat);l.scale.set(1.4,.45,1.3),l.position.y=.15,l.castShadow=l.receiveShadow=!0,a.add(l);for(let x=0;x<3;x++){const m=x/3*Math.PI*2,p=new I(new qt(.08,.13,.42,6),r.stoneMat);p.position.set(Math.cos(m)*.25,.52,Math.sin(m)*.25),p.rotation.z=-Math.cos(m)*.22,p.rotation.x=Math.sin(m)*.22,p.castShadow=!0,a.add(p)}const c=new I(new qt(.42,.36,.1,6),r.stoneMat);c.position.y=.74,c.castShadow=!0,a.add(c);const u=new I(new qt(.22,.22,.34,6),r.shojiMat);u.position.y=.96,a.add(u);for(let x=0;x<6;x++){const m=x/6*Math.PI*2,p=new I(new tt(.055,.36,.055),r.stoneDarkMat);p.position.set(Math.cos(m)*.23,.96,Math.sin(m)*.23),a.add(p)}const f=new I(new sn(.68,.34,6),r.stoneMat);f.position.y=1.28,f.castShadow=!0,a.add(f);const h=new I(new Me(.08,8,8),r.stoneDarkMat);h.position.y=1.48,a.add(h);const d=new Tn(xe.amberCore,3.2,9,1.8);d.position.set(0,.98,0),a.add(d);const g=new Sn(new un({map:s.glowTex,transparent:!0,opacity:.52,depthWrite:!1,blending:Je}));return g.position.set(0,.98,0),g.scale.set(1.8,1.8,1.8),a.add(g),{group:a,light:d}}function S_(i,t,e=-4.2,n=-14.2){const{textures:s,materials:r}=t,o=me(e,n),a=new $t;a.position.set(e,o,n),a.rotation.y=.24,i.add(a);const l=3.8,c=3.6,u=new I(new tt(l+.45,.36,c+.45),r.stoneDarkMat);u.position.y=.18,u.castShadow=u.receiveShadow=!0,a.add(u);const f=new I(new tt(l+.15,.08,c+.15),r.woodMat);f.position.y=.38,f.receiveShadow=!0,a.add(f);for(let _=0;_<3;_++){const v=new I(new tt(1.65-_*.12,.12,.36),_%2===0?r.stoneMat:r.stoneDarkMat);v.position.set(0,.06+_*.11,c*.5+.62-_*.26),v.castShadow=v.receiveShadow=!0,a.add(v)}const h=[[-l*.44,-c*.44],[l*.44,-c*.44],[-l*.44,c*.44],[l*.44,c*.44]];for(const[_,v]of h){const P=new I(new qt(.14,.17,.1,8),r.stoneMat);P.position.set(_,.44,v),a.add(P);const D=new I(new qt(.1,.115,2.55,8),r.woodDarkMat);D.position.set(_,1.72,v),D.castShadow=D.receiveShadow=!0,a.add(D)}for(const _ of[-c*.44,c*.44]){const v=new I(new tt(l*.96,.14,.14),r.woodDarkMat);v.position.set(0,2.94,_),v.castShadow=!0,a.add(v)}for(const _ of[-l*.44,l*.44]){const v=new I(new tt(.14,.14,c*.96),r.woodDarkMat);v.position.set(_,2.94,0),v.castShadow=!0,a.add(v);const P=new I(new tt(.08,.06,c*.88),r.woodMat);P.position.set(_,1.05,0),a.add(P);const D=new I(new tt(.08,.06,c*.88),r.woodMat);D.position.set(_,.56,0),a.add(D);for(let O=-3;O<=3;O++){const B=new I(new tt(.045,.48,.045),r.woodDarkMat);B.position.set(_,.8,O*.36),a.add(B)}}const d=new I(new tt(l*.88,.06,.08),r.woodMat);d.position.set(0,1.05,-c*.44),a.add(d);for(let _=-3;_<=3;_++){const v=new I(new tt(.045,.52,.045),r.woodDarkMat);v.position.set(_*.38,.78,-c*.44),a.add(v)}const g=new I(new sn(3.45,.95,4),r.roofTileMat);g.position.y=3.45,g.rotation.y=Math.PI/4,g.scale.set(1.06,1,1.02),g.castShadow=g.receiveShadow=!0,a.add(g);const x=new I(new sn(2.15,.82,4),r.roofTileMat);x.position.y=4.02,x.rotation.y=Math.PI/4,x.castShadow=!0,a.add(x);const m=new I(new Me(.12,10,10),r.brassMat);m.position.y=4.46,a.add(m);const p=new I(new tt(l+.55,.08,c+.55),r.woodDarkMat);p.position.y=3.01,a.add(p);const w=new gt({color:"#efe1d1",roughness:.9,transparent:!0,opacity:.82,side:ve});for(const _ of[-1,1]){const v=_>0?-.35:-Math.PI*1.05,P=new I(new qt(.13,.21,2.28,12,1,!0,v,Math.PI*1.4),w);P.position.set(_*(l*.44),1.68,c*.44),a.add(P)}const y=new I(new tt(1.65,.07,.52),r.woodMat);y.position.set(0,.78,-.75),y.castShadow=!0,a.add(y);for(const _ of[-.68,.68]){const v=new I(new tt(.08,.36,.44),r.woodDarkMat);v.position.set(_,.58,-.75),a.add(v)}const M=new I(new tt(1.1,.06,.65),r.woodMat);M.position.set(0,.82,.15),M.castShadow=!0,a.add(M);const E=new I(new Me(.1,10,8),r.ceramicMat);E.scale.set(1,.78,1),E.position.set(-.18,.92,.15),a.add(E);const b=[],A=[[-l*.36,c*.42],[l*.36,c*.42],[-l*.36,-c*.38],[l*.36,-c*.38]];for(const[_,v]of A){const P=new I(new qt(.012,.012,.38,6),r.darkMetalMat);P.position.set(_,2.75,v),a.add(P);const D=new I(new tt(.22,.28,.22),r.shojiMat);D.position.set(_,2.48,v),a.add(D);const O=new I(new sn(.22,.12,4),r.woodDarkMat);O.position.set(_,2.66,v),O.rotation.y=Math.PI/4,a.add(O);const B=new Sn(new un({map:s.glowTex,transparent:!0,opacity:.55,depthWrite:!1,blending:Je}));B.position.set(_,2.48,v),B.scale.set(1.25,1.25,1.25),a.add(B)}const T=new Tn("#ffbe70",7.5,13,1.6);return T.position.set(0,2.35,.2),a.add(T),b.push(T),fr(a,r.contactShadowMat,3.2,.02),Pi(a),{group:a,lights:b,collider:{x:e,z:n,r:2.3}}}function b_(i,t){const e=Ss(909),n=[],s=[],r=new $t;i.add(r);const o=Vl(r,t,-1.4,16,{scale:1.22,hasLight:!0,lightIntensity:6.5,lightDist:10.5});n.push(o.light),[[ze(11.5)+2.1,11.5,!0],[ze(5.5)-2.2,5.5,!1],[ze(.5)+2.15,.5,!0],[-5.1,1.4,!0],[ze(-6)+2.2,-6,!1],[ze(-11.5)-2.35,-11.5,!0],[ze(-18.5)+2.2,-18.5,!1],[ze(-24)-2.2,-24,!0],[-2.4,-29.2,!1],[2.4,-29.2,!1]].forEach(([c,u,f],h)=>{const d=Vl(r,t,c,u,{scale:.86+e()*.14,hasLight:f,lightIntensity:3.4,lightDist:8.5});d.light&&(h%2===0?n.push(d.light):s.push(d.light))});const l=w_(r,t,-14.6,-7.2);return n.push(l.light),Pi(r),{gate:o,primaryLights:n,secondaryLights:s}}class E_ extends I{constructor(t,e={}){super(t),this.isWater=!0;const n=this,s=e.textureWidth!==void 0?e.textureWidth:512,r=e.textureHeight!==void 0?e.textureHeight:512,o=e.clipBias!==void 0?e.clipBias:0,a=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,u=e.sunDirection!==void 0?e.sunDirection:new L(.70707,.70707,0),f=new Lt(e.sunColor!==void 0?e.sunColor:16777215),h=new Lt(e.waterColor!==void 0?e.waterColor:8355711),d=e.eye!==void 0?e.eye:new L(0,0,0),g=e.distortionScale!==void 0?e.distortionScale:20,x=e.side!==void 0?e.side:ti,m=e.fog!==void 0?e.fog:!1,p=new ci,w=new L,y=new L,M=new L,E=new ce,b=new L(0,0,-1),A=new le,T=new L,_=new L,v=new le,P=new ce,D=new qe,O=new nn(s,r),B={name:"MirrorShader",uniforms:Ci.merge([At.fog,At.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new ce},sunColor:{value:new Lt(8355711)},sunDirection:{value:new L(.70707,.70707,0)},eye:{value:new L},waterColor:{value:new Lt(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},F=new He({name:B.name,uniforms:Ci.clone(B.uniforms),vertexShader:B.vertexShader,fragmentShader:B.fragmentShader,lights:!0,side:x,fog:m});F.uniforms.mirrorSampler.value=O.texture,F.uniforms.textureMatrix.value=P,F.uniforms.alpha.value=a,F.uniforms.time.value=l,F.uniforms.normalSampler.value=c,F.uniforms.sunColor.value=f,F.uniforms.waterColor.value=h,F.uniforms.sunDirection.value=u,F.uniforms.distortionScale.value=g,F.uniforms.eye.value=d,n.material=F,n.onBeforeRender=function(k,J,H){if(y.setFromMatrixPosition(n.matrixWorld),M.setFromMatrixPosition(H.matrixWorld),E.extractRotation(n.matrixWorld),w.set(0,0,1),w.applyMatrix4(E),T.subVectors(y,M),T.dot(w)>0)return;T.reflect(w).negate(),T.add(y),E.extractRotation(H.matrixWorld),b.set(0,0,-1),b.applyMatrix4(E),b.add(M),_.subVectors(y,b),_.reflect(w).negate(),_.add(y),D.position.copy(T),D.up.set(0,1,0),D.up.applyMatrix4(E),D.up.reflect(w),D.lookAt(_),D.far=H.far,D.updateMatrixWorld(),D.projectionMatrix.copy(H.projectionMatrix),P.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),P.multiply(D.projectionMatrix),P.multiply(D.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(w,y),p.applyMatrix4(D.matrixWorldInverse),A.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const N=D.projectionMatrix;v.x=(Math.sign(A.x)+N.elements[8])/N.elements[0],v.y=(Math.sign(A.y)+N.elements[9])/N.elements[5],v.z=-1,v.w=(1+N.elements[10])/N.elements[14],A.multiplyScalar(2/A.dot(v)),N.elements[2]=A.x,N.elements[6]=A.y,N.elements[10]=A.z+1-o,N.elements[14]=A.w,d.setFromMatrixPosition(H.matrixWorld);const V=k.getRenderTarget(),it=k.xr.enabled,lt=k.shadowMap.autoUpdate;n.visible=!1,k.xr.enabled=!1,k.shadowMap.autoUpdate=!1,k.setRenderTarget(O),k.state.buffers.depth.setMask(!0),k.autoClear===!1&&k.clear(),k.render(J,D),n.visible=!0,k.xr.enabled=it,k.shadowMap.autoUpdate=lt,k.setRenderTarget(V);const ut=H.viewport;ut!==void 0&&k.state.viewport(ut)}}}function T_(i,t=1){const e=new $t,n=new gt({color:"#f5c7d7",emissive:"#592d3e",emissiveIntensity:.12,roughness:.55,side:ve}),s=new gt({color:"#fae3eb",roughness:.5,side:ve}),r=new gt({color:"#f5c987",emissive:"#f5c987",emissiveIntensity:.35,roughness:.5}),o=new Me(.11,8,6);o.scale(.48,.22,1),o.translate(0,.02,.09);for(let l=0;l<2;l++){const c=l===0?8:6,u=l===0?-.25:-.62,f=l===0?1:.76;for(let h=0;h<c;h++){const d=new I(o,l===0?n:s);d.rotation.y=h/c*Math.PI*2+l*.3,d.rotation.x=u,d.scale.setScalar(f),e.add(d)}}const a=new I(new Me(.045,8,6),r);return a.position.y=.04,e.add(a),e.scale.setScalar(t),Pi(e),e}function A_(i,t){const{materials:e}=t,n=new $t;n.position.set(-10.4,-.1,-7.8),n.rotation.y=.28,i.add(n);const s=4.2,r=16;for(let o=0;o<r;o++){const a=o/(r-1),l=(a-.5)*s,c=Math.sin(a*Math.PI)*.48,u=Math.cos(a*Math.PI)*.34,f=new I(new tt(.24,.055,1.38),e.woodMat);f.position.set(l,c,0),f.rotation.z=u,f.castShadow=f.receiveShadow=!0,n.add(f)}for(const o of[-.66,.66]){const a=[];for(let h=0;h<=8;h++){const d=h/8;a.push(new L((d-.5)*s,Math.sin(d*Math.PI)*.48-.04,o))}const l=new fs(a),c=new I(new ms(l,16,.055,6,!1),e.woodDarkMat);c.castShadow=!0,n.add(c);const u=a.map(h=>new L(h.x,h.y+.58,h.z)),f=new I(new ms(new fs(u),16,.036,6,!1),e.woodMat);f.castShadow=!0,n.add(f);for(const h of[0,2,4,6,8]){const d=a[h],g=new I(new tt(.075,.68,.075),e.woodDarkMat);g.position.set(d.x,d.y+.3,d.z),g.castShadow=!0,n.add(g)}}return Pi(n),n}function C_(i,t,e){const n=Ss(2026),{textures:s,materials:r}=t,o=new $t;i.add(o);const a=-.18,l=new de(14.8,18.8),c=new E_(l,{textureWidth:384,textureHeight:384,waterNormals:s.waterNormal,sunDirection:e.clone().normalize(),sunColor:new Lt("#f7c994"),waterColor:new Lt("#233a49"),distortionScale:1.35,fog:!0});c.rotation.x=-Math.PI/2,c.position.set(-10.6,a,-2.2),c.material.uniforms.size&&(c.material.uniforms.size.value=3.4),o.add(c);const u=new I(l,new gt({color:"#2c4a5c",normalMap:s.waterNormal,normalScale:new nt(.45,.45),roughness:.14,metalness:.68,envMapIntensity:1.4}));u.rotation.x=-Math.PI/2,u.position.set(-10.6,a,-2.2),u.visible=!1,o.add(u);const f=new de(.56,.56);f.rotateX(-Math.PI/2);const h=[[-8.4,.4,1.05],[-8.9,-.3,.85],[-7.8,-1.6,1.15],[-9.6,-2.9,.92],[-11.8,-1.2,1.1],[-12.6,1.4,.88],[-9.2,2.6,1.02],[-7.6,1.8,.78],[-11.3,-4.4,1],[-13,-3.5,.94]],d=new tn(f,r.lilyPadMat,h.length),g=new Te;h.forEach(([A,T,_],v)=>{if(g.position.set(A,a+.014,T),g.rotation.set(0,n()*Math.PI*2,0),g.scale.setScalar(_),g.updateMatrix(),d.setMatrixAt(v,g.matrix),v%2===0){const P=T_(t,.78+n()*.28);P.position.set(A+.08,a+.018,T+.04),o.add(P)}}),o.add(d);const x=new de(.09,.07);x.rotateX(-Math.PI/2);const m=new tn(x,new gt({color:xe.blossomMid,roughness:.65}),64);for(let A=0;A<64;A++){const T=n()*Math.PI*2,_=1+n()*3.9,v=-10.6+Math.cos(T)*_,P=-2.2+Math.sin(T)*_*1.25;g.position.set(v,a+.015,P),g.rotation.set(0,n()*Math.PI*2,0),g.scale.setScalar(.85+n()*.75),g.updateMatrix(),m.setMatrixAt(A,g.matrix)}o.add(m);const p=new sn(.028,1.05,4);p.translate(0,.52,0);const w=new gt({color:"#536c49",roughness:.85}),y=new qt(.032,.032,.16,7),M=new gt({color:"#4d3228",roughness:.92}),E=[],b=[];for(let A=0;A<18;A++){const T=A/18*Math.PI*2+(n()-.5)*.18,_=5.1+(n()-.5)*.45,v=-10.6+Math.cos(T)*_*(1+Math.sin(T*2+.6)*.11),P=-2.2+Math.sin(T)*_*1.32*(1+Math.cos(T*3-.4)*.07);if(v>-5.5&&Math.abs(P+2)<2.2)continue;const D=Math.max(a-.08,me(v,P)),O=5+Math.floor(n()*5);for(let B=0;B<O;B++){const F=v+(n()-.5)*.42,k=P+(n()-.5)*.42,J=.75+n()*.6,H=(n()-.5)*.22,N=(n()-.5)*.22;g.position.set(F,D-.04,k),g.rotation.set(H,n()*Math.PI,N),g.scale.set(1,J,1),g.updateMatrix(),E.push(g.matrix.clone()),B<2&&n()>.3&&(g.position.set(F+Math.sin(N)*J*.45,D+J*.86,k+Math.sin(H)*J*.45),g.rotation.set(H,0,N),g.scale.setScalar(1),g.updateMatrix(),b.push(g.matrix.clone()))}}if(E.length){const A=new tn(p,w,E.length);E.forEach((T,_)=>A.setMatrixAt(_,T)),A.castShadow=!0,o.add(A)}if(b.length){const A=new tn(y,M,b.length);b.forEach((T,_)=>A.setMatrixAt(_,T)),o.add(A)}return A_(i,t),{waterReflective:c,waterFallback:u,setReflectiveEnabled(A){c.visible=A,u.visible=!A},update(A,T){c.visible&&c.material.uniforms.time&&(c.material.uniforms.time.value+=A*.38),u.visible&&(s.waterNormal.offset.x=T*.015%1,s.waterNormal.offset.y=T*.011%1)}}}function R_(i,t=1){const{textures:e,materials:n}=i,s=new $t,r=new I(new qt(.22,.15,.025,20),n.ceramicMat);r.position.y=.012,r.castShadow=r.receiveShadow=!0,s.add(r);const o=new I(new qt(.088,.066,.105,18),new gt({color:"#c48668",roughness:.88}));o.position.y=.072,o.castShadow=!0,s.add(o);const a=new I(new Me(.088,14,10,0,Math.PI*2,0,Math.PI*.55),new gt({color:"#a87454",roughness:.88}));a.position.y=.11,s.add(a);const l=new gt({color:"#f6e8e4",roughness:.58}),c=new I(new Ei(.056,.028,10,18),l);c.rotation.x=Math.PI/2,c.position.y=.145,s.add(c);const u=new I(new Ei(.036,.023,10,16),l);u.rotation.x=Math.PI/2,u.position.y=.178,s.add(u);const f=new I(new sn(.036,.055,12),l);f.position.y=.21,s.add(f);const h=new I(new Me(.022,8,6),new gt({color:xe.blossomMid,roughness:.5}));h.scale.set(1.2,.45,1),h.position.set(.032,.19,.025),s.add(h);const d=new I(new qt(.008,.009,.085,8),new gt({color:"#f7efe1",roughness:.5}));d.position.y=.255,s.add(d);const g=new I(new Me(.015,8,8),new gt({color:"#fff4d2",emissive:"#ffb24f",emissiveIntensity:2.2,roughness:.2}));g.scale.set(.75,1.45,.75),g.position.y=.308,s.add(g);const x=new Sn(new un({map:e.glowTex,transparent:!0,opacity:.5,depthWrite:!1,blending:Je}));return x.position.y=.308,x.scale.set(.32,.32,.32),s.add(x),s.scale.setScalar(t),{group:s,flame:g,halo:x}}function P_(i,t=1){const{materials:e}=i,n=new $t,s=new I(new ho([new nt(0,0),new nt(.06,0),new nt(.095,.08),new nt(.082,.18),new nt(.042,.25),new nt(.052,.28)],14),e.ceramicMat);s.castShadow=!0,n.add(s);const r=new gt({color:"#55704a",roughness:.85}),o=new gt({color:"#f7efe3",roughness:.65}),a=new gt({color:xe.blossomPale,roughness:.65});for(let l=0;l<11;l++){const c=l/11*Math.PI*2,u=.16+l%3*.11,f=new I(new qt(.004,.005,.23,5),r);f.position.set(Math.cos(c)*.026,.31,Math.sin(c)*.026),f.rotation.set(Math.sin(c)*u,0,-Math.cos(c)*u),n.add(f);const h=new $t;h.position.set(Math.cos(c)*(.055+l%3*.022),.41+l%3*.026,Math.sin(c)*(.055+l%3*.022));for(let d=0;d<3;d++){const g=d/3*Math.PI*2+l,x=new I(new fo(.011,0),l%3===0?a:o);x.position.set(Math.cos(g)*.014,(d-1)*.01,Math.sin(g)*.014),h.add(x)}n.add(h)}return n.scale.setScalar(t),n}function L_(i,t=.46,e=.36,n=null){const{textures:s,materials:r}=i,o=new $t,a=new I(new tt(t,e,.045),r.woodMat);a.castShadow=!0,o.add(a);for(const u of[-1,1])for(const f of[-1,1]){const h=new I(new tt(.055,.055,.048),r.brassMat);h.position.set(u*(t*.5-.022),f*(e*.5-.022),.002),o.add(h)}const l=new I(new de(t-.068,e-.068),new gt({map:n||s.assignmentPlaceholderTex||s.photoArtTex,roughness:.42}));l.position.z=.025,o.add(l);const c=new I(new tt(.04,e*.82,.03),r.woodDarkMat);return c.position.set(0,-.02,-.1),c.rotation.x=.48,o.add(c),o}function xi(i){const{textures:t,materials:e}=i,n=new $t,s=new I(new tt(.18,.03,.18),e.woodDarkMat);s.position.y=.015,n.add(s);const r=new I(new tt(.12,.18,.12),e.shojiMat);r.position.y=.12,n.add(r);for(const l of[-1,1])for(const c of[-1,1]){const u=new I(new tt(.018,.2,.018),e.woodDarkMat);u.position.set(l*.066,.12,c*.066),n.add(u)}const o=new I(new sn(.14,.08,4),e.woodDarkMat);o.position.y=.25,o.rotation.y=Math.PI/4,n.add(o);const a=new Sn(new un({map:t.glowTex,transparent:!0,opacity:.45,depthWrite:!1,blending:Je}));return a.position.y=.13,a.scale.set(.55,.55,.55),n.add(a),n}function I_(i,t,e){const n=Ss(e.sortOrder*137+31),{textures:s,materials:r}=t,{x:o,z:a}=e.location,l=me(o,a),c=new $t;c.position.set(o,l,a),i.add(c);const u=new I(new qt(.88,.96,.06,9),r.stoneDarkMat);u.position.y=.025,u.receiveShadow=!0,c.add(u),fr(c,r.contactShadowMat,1.15,.015);const f={};switch(e.assetReference){case"headband-stand":case"welcome-sign":{c.rotation.y=-.28;const h=new I(new tt(.76,.08,.56),r.woodDarkMat);h.position.set(0,.08,0),h.castShadow=h.receiveShadow=!0,c.add(h);for(const H of[-.28,.28])for(const N of[-.18,.18]){const V=new I(new tt(.065,.66,.065),r.woodDarkMat);V.position.set(H,.41,N),V.castShadow=!0,c.add(V)}const d=new I(new tt(.84,.055,.62),r.woodMat);d.position.set(0,.74,0),d.castShadow=d.receiveShadow=!0,c.add(d);const g=new I(new tt(.52,.016,.42),r.linenMat);g.position.set(-.04,.775,.02),c.add(g);const x=new I(new qt(.14,.17,.035,16),r.woodDarkMat);x.position.set(-.04,.798,.02),c.add(x);const m=new I(new qt(.028,.036,.22,12),r.woodDarkMat);m.position.set(-.04,.91,.02),c.add(m);const p=new I(new qt(.085,.085,.24,16),new gt({color:"#ede3d5",roughness:.78}));p.rotation.x=Math.PI/2,p.position.set(-.04,1.02,.02),p.castShadow=!0,c.add(p);for(const H of[-.125,.125]){const N=new I(new qt(.09,.09,.018,16),r.woodMat);N.rotation.x=Math.PI/2,N.position.set(-.04,1.02,.02+H),c.add(N)}const w=new $t;w.position.set(-.04,1.03,.03),c.add(w);const y=new gt({color:"#d87a96",roughness:.36,metalness:.08}),M=new gt({color:"#f7dce5",roughness:.45}),E=new I(new Ei(.145,.022,14,28,Math.PI*1.28),y);E.rotation.z=-Math.PI*.14,E.castShadow=!0,w.add(E);const b=new I(new Ei(.146,.01,10,24,Math.PI*1.24),M);b.rotation.z=-Math.PI*.12,b.position.z=.012,w.add(b);const A=new $t;A.position.set(.105,.105,.018),A.rotation.z=-.58,w.add(A);for(const H of[-1,1]){const N=new I(new sn(.036,.068,10),M);N.rotation.z=H*(Math.PI/2),N.scale.set(1,1,.52),N.position.x=H*.032,A.add(N)}const T=new I(new Me(.016,10,8),new gt({color:"#fff8ef",roughness:.2,metalness:.15}));A.add(T);const _=[new L(-.46,.02,-.26),new L(-.52,.65,-.22),new L(-.36,1.32,-.12),new L(-.02,1.66,.04),new L(.32,1.72,.12)],v=new ms(new fs(_),14,.055,7,!1),P=new I(v,r.barkMat);P.castShadow=!0,c.add(P);const D=[new L(-.36,1.32,-.12),new L(-.18,1.54,.24),new L(.12,1.58,.34)],O=new I(new ms(new fs(D),8,.032,6,!1),r.barkMat);c.add(O);const B=new gt({color:xe.blossomPale,roughness:.7}),F=new gt({color:xe.blossomMid,roughness:.68});[[-.26,1.56,-.06,.56],[.02,1.68,.04,.64],[.3,1.68,.12,.54],[-.14,1.54,.24,.52],[.14,1.58,.3,.5]].forEach(([H,N,V,it],lt)=>{for(let ut=0;ut<3;ut++){const mt=new I(new de(it,it*.85),r.blossomCardMat);mt.position.set(H,N,V),mt.rotation.set((ut-1)*.32+lt*.15,ut/3*Math.PI+lt*.7,(ut%2?1:-1)*.18),c.add(mt)}for(let ut=0;ut<4;ut++){const mt=ut/4*Math.PI*2+lt,Tt=new I(new fo(.028,0),(ut+lt)%2?F:B);Tt.position.set(H+Math.cos(mt)*.14,N-.04+ut%2*.05,V+Math.sin(mt)*.14),c.add(Tt)}});for(let H=0;H<7;H++){const N=new I(new Me(.018,6,5),H%2?F:B);N.scale.set(1.3,.25,.85),N.position.set(-.22+H*.07,.785,-.14+H*3%5*.065),N.rotation.y=H*1.1,c.add(N)}const J=xi(t);J.position.set(.26,.768,-.14),c.add(J);break}case"photo-stand":{c.rotation.y=.25;const h=new $t;c.add(h);for(const _ of[-.28,.28]){const v=new I(new tt(.058,1.44,.058),r.woodDarkMat);v.position.set(_,.71,.08),v.rotation.x=-.14,v.rotation.z=_>0?.1:-.1,v.castShadow=!0,h.add(v)}const d=new I(new tt(.052,1.36,.052),r.woodDarkMat);d.position.set(0,.66,-.24),d.rotation.x=.36,d.castShadow=!0,h.add(d);const g=new I(new tt(.06,.96,.045),r.woodDarkMat);g.position.set(0,1.02,.02),g.rotation.x=-.14,h.add(g);const x=new I(new tt(.82,.055,.2),r.woodMat);x.position.set(0,.78,.1),x.castShadow=!0,h.add(x);const m=L_(t,.72,.54,s.assignmentPlaceholderTex);m.position.set(0,1.08,.09),m.rotation.x=-.14,h.add(m);const p=new I(new qt(.24,.27,.42,12),r.woodDarkMat);p.position.set(.42,.23,.28),p.castShadow=p.receiveShadow=!0,c.add(p);const w=new I(new tt(.24,.018,.32),r.woodMat);w.position.set(.38,.45,.28),w.rotation.y=-.28,c.add(w);const y=new I(new de(.2,.27),new gt({map:s.examSheetTex,roughness:.65}));y.rotation.x=-Math.PI/2,y.rotation.z=-.28,y.position.set(.38,.461,.28),c.add(y);const M=new I(new tt(.08,.02,.03),r.brassMat);M.position.set(.34,.466,.15),M.rotation.y=-.28,c.add(M);const E=new I(new qt(.075,.055,.11,12),new gt({color:"#b5674a",roughness:.78}));E.position.set(-.34,.835,.12),h.add(E);const b=new gt({color:"#689662",roughness:.6}),A=new I(new qt(.008,.01,.11,6),b);A.position.set(-.34,.92,.12),h.add(A);for(const _ of[-1,1]){const v=new I(new Me(.035,8,6),b);v.scale.set(1.4,.32,.75),v.position.set(-.34+_*.038,.96,.12),v.rotation.z=-_*.35,h.add(v)}const T=P_(t,.62);T.position.set(-.38,.05,.34),c.add(T);break}case"after-exams-seats":case"cupcake-table":{c.rotation.y=-.22;for(const y of[-1,1]){const M=new $t;M.position.set(y*.52,.04,.06),M.rotation.y=y<0?.42:-.42,c.add(M);for(const E of[-.21,.21])for(const b of[-.18,.18]){const A=new I(new tt(.048,.44,.048),r.darkMetalMat);A.position.set(E,.22,b),A.castShadow=!0,M.add(A)}for(let E=-1;E<=1;E++){const b=new I(new tt(.48,.038,.115),r.woodMat);b.position.set(0,.44,E*.125),b.castShadow=b.receiveShadow=!0,M.add(b)}for(const E of[-.2,.2]){const b=new I(new tt(.042,.46,.042),r.darkMetalMat);b.position.set(E,.66,-.18),b.rotation.x=-.12,M.add(b)}for(const E of[.64,.8]){const b=new I(new tt(.48,.085,.032),r.woodMat);b.position.set(0,E,-.19),b.rotation.x=-.12,b.castShadow=!0,M.add(b)}}const h=.52,d=new I(new tt(.62,.048,.48),r.woodMat);d.position.set(0,h,-.06),d.castShadow=d.receiveShadow=!0,c.add(d);for(const y of[-.25,.25])for(const M of[-.18,.18]){const E=new I(new tt(.05,h-.02,.05),r.woodDarkMat);E.position.set(y,(h-.02)*.5,-.06+M),E.castShadow=!0,c.add(E)}["#3d5a78","#8c584c","#5b7861"].forEach((y,M)=>{const E=new I(new tt(.24-M*.012,.04,.175),new gt({color:y,roughness:.8}));E.position.set(-.14,h+.044+M*.04,-.12),E.rotation.y=.18-M*.15,E.castShadow=!0,c.add(E)});const x=new I(new tt(.22,.014,.28),r.woodDarkMat);x.position.set(.14,h+.031,-.02),x.rotation.y=-.24,c.add(x);const m=new I(new de(.19,.25),new gt({map:s.examSheetTex,roughness:.65}));m.rotation.x=-Math.PI/2,m.rotation.z=-.24,m.position.set(.14,h+.04,-.02),c.add(m);const p=new I(new de(.19,.25),new gt({map:s.examSheetTex,roughness:.7}));p.rotation.x=-Math.PI/2,p.rotation.z=.08,p.position.set(.11,h+.028,.02),c.add(p);for(const[y,M,E,b]of[[.24,.04,.45,"#2b476e"],[.03,.11,-.35,"#8c3b4a"]]){const A=new I(new qt(.007,.006,.15,6),new gt({color:b,roughness:.35}));A.rotation.set(0,E,Math.PI/2),A.position.set(y,h+.042,M),c.add(A)}const w=xi(t);w.position.set(-.22,h+.024,.1),c.add(w);break}case"first-text-chocolate":case"two-seats":{c.rotation.y=.24;const h=.64;for(let F=-1;F<=1;F++){const k=new I(new tt(.96,.052,.2),r.woodMat);k.position.set(0,h,F*.21),k.castShadow=k.receiveShadow=!0,c.add(k)}for(const F of[-.38,.38])for(const k of[-.22,.22]){const J=new I(new tt(.07,h-.02,.07),r.woodDarkMat);J.position.set(F,(h-.02)*.5,k),J.castShadow=!0,c.add(J)}const d=new I(new tt(.66,.014,.42),r.linenMat);d.position.set(0,h+.03,.02),c.add(d);const g=new I(new tt(.18,.05,.14),r.woodDarkMat);g.position.set(-.17,h+.058,.02),g.rotation.y=.22,c.add(g);const x=new $t;x.position.set(-.17,h+.145,.03),x.rotation.y=.22,x.rotation.x=-.58,c.add(x);const m=new I(new tt(.16,.31,.02),new gt({color:"#242b38",roughness:.3,metalness:.55}));m.castShadow=!0,x.add(m);const p=new gt({map:s.phoneLockTex,emissiveMap:s.phoneLockTex,emissive:new Lt("#ffdfb8"),emissiveIntensity:.45,roughness:.22}),w=new I(new de(.142,.285),p);w.position.z=.012,x.add(w);const y=new Sn(new un({map:s.glowTex,color:"#ffd6a5",transparent:!0,opacity:.38,depthWrite:!1,blending:Je}));y.position.set(0,0,.05),y.scale.set(.45,.45,.45),x.add(y);const M=new I(new po(.14,.165,28),new wn({color:"#ffd6a0",transparent:!0,opacity:.5,side:ve}));M.position.set(-.17,h+.042,.03),M.rotation.x=-Math.PI/2,c.add(M);const E=new Tn("#ffd29d",.9,3.2,1.8);E.position.set(-.17,h+.32,.14),c.add(E);const b=new $t;b.position.set(.15,h+.058,.05),b.rotation.y=-.26,c.add(b);const A=new gt({color:"#5c2b47",roughness:.45,metalness:.12}),T=new gt({color:"#e3ba66",roughness:.3,metalness:.68}),_=new gt({color:"#3b2116",roughness:.52}),v=new I(new tt(.22,.038,.16),A);v.castShadow=!0,b.add(v);const P=new I(new tt(.205,.034,.09),T);P.position.set(0,.001,-.075),b.add(P);const D=new I(new tt(.19,.032,.075),_);D.position.set(0,.004,-.115),b.add(D);for(const F of[-.06,0,.06])for(const k of[-.13,-.095]){const J=new I(new tt(.05,.012,.028),_);J.position.set(F,.022,k),b.add(J)}const O=new I(new tt(.226,.042,.032),T);O.position.set(0,0,.01),b.add(O);for(const F of[-1,1]){const k=new I(new sn(.028,.055,8),T);k.rotation.z=F*(Math.PI/2),k.position.set(F*.028,.03,.01),b.add(k)}const B=xi(t);B.position.set(.32,h+.025,-.16),c.add(B),f.firstTextPhone={screen:w,screenMat:p,halo:y,ring:M,light:E,location:e.location};break}case"cupcake-wrapper-table":case"lecture-desk":{c.rotation.y=-.24;const h=.66;for(let H=-1;H<=1;H++){const N=new I(new tt(1.16,.055,.22),r.woodMat);N.position.set(0,h,H*.23),N.castShadow=N.receiveShadow=!0,c.add(N)}for(const H of[-.46,.46])for(const N of[-.26,.26]){const V=new I(new tt(.082,h-.02,.082),r.woodDarkMat);V.position.set(H,(h-.02)*.5,N),V.castShadow=!0,c.add(V)}const d=new I(new tt(.88,.012,.54),r.linenMat);d.position.set(0,h+.032,.02),d.receiveShadow=!0,c.add(d);const g=new $t;g.position.set(.04,h+.04,.15),c.add(g);const x=new I(new tt(.24,.008,.22),new gt({color:"#f7efe4",roughness:.85}));x.rotation.y=.18,g.add(x);const m=new gt({color:"#d99578",roughness:.82,side:ve}),p=new gt({color:"#ecd2be",roughness:.85,side:ve}),w=new I(new qt(.068,.068,.006,18),p);w.position.y=.008,g.add(w);const y=20;for(let H=0;H<y;H++){const N=H/y*Math.PI*2,V=new I(new tt(.032,.088,.005),H%2===0?m:p),it=.084;V.position.set(Math.cos(N)*it,.044,Math.sin(N)*it),V.rotation.order="YXZ",V.rotation.y=-N+Math.PI/2,V.rotation.x=.36,V.castShadow=!0,g.add(V)}const M=new gt({color:"#7a4d32",roughness:.9});for(const[H,N,V]of[[-.02,.01,.012],[.022,-.015,.01],[.005,.024,.009]]){const it=new I(new rs(V,0),M);it.position.set(H,.014,N),g.add(it)}const E=R_(t,.98);E.group.position.set(-.24,h+.038,-.05),c.add(E.group);const b=new $t;b.position.set(.29,h+.038,.02),b.rotation.y=-.35,c.add(b);const A=new I(new qt(.18,.13,.022,18),r.ceramicMat);A.position.y=.011,A.castShadow=A.receiveShadow=!0,b.add(A);const T=new gt({color:"#45281a",roughness:.78}),_=new gt({color:"#29150c",roughness:.38}),v=new gt({color:"#b58363",roughness:.65}),P=new I(new qt(.12,.12,.095,3,1,!1,0,Math.PI*.55),T);P.position.set(0,.068,.02),P.castShadow=!0,b.add(P);for(const H of[.048,.082]){const N=new I(new tt(.14,.012,.095),v);N.position.set(.01,H,.01),b.add(N)}const D=new I(new tt(.145,.016,.1),_);D.position.set(.01,.118,.01),b.add(D);const O=new $t;O.position.set(-.28,h+.052,.17),O.rotation.y=.32,c.add(O);const B=new I(new tt(.16,.028,.1),new gt({color:"#6b304b",roughness:.45}));B.castShadow=!0,O.add(B);const F=new I(new tt(.164,.032,.024),new gt({color:"#e3ba66",roughness:.32,metalness:.6}));O.add(F);const k=xi(t);k.position.set(.38,h+.032,-.17),c.add(k);const J=new Tn("#ffbe70",1.15,3.8,1.8);J.position.set(.15,h+.32,.05),c.add(J),f.cupcake=E;break}case"student-centre-table":case"study-desk":{c.rotation.y=.2;const h=.66,d=new I(new qt(.28,.32,.04,16),r.darkMetalMat);d.position.y=.04,c.add(d);const g=new I(new qt(.055,.065,h-.04,12),r.darkMetalMat);g.position.y=h*.5,g.castShadow=!0,c.add(g);const x=new I(new qt(.52,.52,.048,22),r.woodMat);x.position.y=h,x.castShadow=x.receiveShadow=!0,c.add(x);for(const[T,_]of[[-1,.48],[1,-.48]]){const v=new $t;v.position.set(T*.56,.03,.14),v.rotation.y=_,c.add(v);for(const O of[-.18,.18])for(const B of[-.17,.17]){const F=new I(new qt(.022,.018,.44,8),r.darkMetalMat);F.position.set(O,.22,B),F.castShadow=!0,v.add(F)}const P=new I(new tt(.42,.045,.4),r.woodMat);P.position.set(0,.44,0),P.castShadow=!0,v.add(P);const D=new I(new tt(.42,.24,.035),r.woodMat);D.position.set(0,.68,-.19),D.rotation.x=-.1,D.castShadow=!0,v.add(D);for(const O of[-.16,.16]){const B=new I(new qt(.016,.016,.34,8),r.darkMetalMat);B.position.set(O,.58,-.18),B.rotation.x=-.1,v.add(B)}}const m=new $t;m.position.set(-.1,h+.028,.12),m.rotation.y=.28,c.add(m);const p=new gt({color:"#f6ecf0",roughness:.82}),w=new gt({color:"#d89ab0",roughness:.78}),y=new I(new tt(.24,.012,.22),p);y.castShadow=!0,m.add(y);const M=new I(new tt(.248,.008,.228),w);M.position.y=-.002,m.add(M);const E=new I(new tt(.21,.012,.18),p);E.position.set(.012,.011,-.01),E.rotation.y=.16,m.add(E);const b=new I(new qt(.022,.022,.2,10,1,!1,0,Math.PI),p);b.rotation.z=Math.PI/2,b.rotation.y=.12,b.position.set(0,.016,.04),m.add(b);for(const[T,_,v]of[[.18,.08,"#e8dfd1"],[-.18,-.14,"#d9c5b4"]]){const P=new I(new qt(.045,.038,.085,14),new gt({color:v,roughness:.35}));P.position.set(T,h+.066,_),P.castShadow=!0,c.add(P)}const A=xi(t);A.position.set(.14,h+.024,-.18),c.add(A);break}case"choir-organ":case"ringing-phone":{c.rotation.y=-.26;const h=1.06,d=.76;for(const B of[-.48,.48]){const F=new I(new tt(.065,.82,.46),r.woodDarkMat);F.position.set(B,.43,-.06),F.castShadow=F.receiveShadow=!0,c.add(F);const k=new I(new tt(.09,.05,.58),r.woodDarkMat);k.position.set(B,.045,-.04),c.add(k)}const g=new I(new tt(h-.06,.68,.04),r.woodMat);g.position.set(0,.42,-.22),g.castShadow=!0,c.add(g);for(let B=-4;B<=4;B++){const F=new I(new tt(.042,.022,.24),r.woodMat);F.position.set(B*.075,.055,-.06),c.add(F)}const x=new I(new tt(h,.09,.48),r.woodDarkMat);x.position.set(0,d,-.05),x.castShadow=x.receiveShadow=!0,c.add(x);const m=new I(new tt(h,.08,.24),r.woodMat);m.position.set(0,d+.08,-.17),m.castShadow=!0,c.add(m);for(let B=-5;B<=5;B++){const F=new I(new tt(.042,.018,.03),B%3===0?new gt({color:"#c45b5b",roughness:.4}):r.ceramicMat);F.position.set(B*.068,d+.09,-.05),F.rotation.x=.35,c.add(F)}const p=new gt({color:"#faf6ed",roughness:.25}),w=new gt({color:"#1e1d22",roughness:.28,metalness:.2}),y=21,M=.041,E=-.8200000000000001*.5;for(let B=0;B<y;B++){const F=new I(new tt(.036,.026,.175),p);F.position.set(E+B*M,d+.052,.095),F.castShadow=!0,c.add(F);const k=B%7;if(B<y-1&&(k===0||k===1||k===3||k===4||k===5)){const J=new I(new tt(.022,.034,.105),w);J.position.set(E+(B+.5)*M,d+.07,.062),J.castShadow=!0,c.add(J)}}const b=new I(new tt(.56,.32,.022),r.woodDarkMat);b.position.set(0,d+.26,-.17),b.rotation.x=-.24,b.castShadow=!0,c.add(b);const A=new I(new de(.46,.27),new gt({map:s.sheetMusicTex,roughness:.55}));A.position.set(0,d+.26,-.155),A.rotation.x=-.24,c.add(A);const T=new I(new tt(.2,.026,.15),new gt({color:"#6b2737",roughness:.65}));T.position.set(.36,d+.132,-.16),T.rotation.y=-.22,c.add(T);const _=new I(new tt(.012,.006,.065),r.brassMat);_.position.set(.36,d+.146,-.16),_.rotation.y=-.22,c.add(_);const v=new I(new tt(.042,.006,.012),r.brassMat);v.position.set(.36,d+.146,-.17),v.rotation.y=-.22,c.add(v);const P=new I(new tt(.68,.045,.28),r.woodMat);P.position.set(0,.46,.36),P.castShadow=P.receiveShadow=!0,c.add(P);for(const B of[-.28,.28]){const F=new I(new tt(.05,.44,.24),r.woodDarkMat);F.position.set(B,.23,.36),F.castShadow=!0,c.add(F)}const D=new Tn("#ffd294",1.4,3.6,1.8);D.position.set(0,d+.44,.08),c.add(D);const O=xi(t);O.position.set(-.38,d+.115,-.17),c.add(O);break}case"lecture-rows":case"iced-coffee-bench":{c.rotation.y=.22,u.scale.set(1.25,1,1.32);const h=new I(new tt(1.12,.11,.68),r.woodDarkMat);h.position.set(0,.085,.36),h.receiveShadow=!0,c.add(h);const d=(b,A,T=0)=>{const _=new $t;_.position.set(0,A,b),c.add(_);const v=new I(new tt(.86,.045,.38),r.woodMat);v.position.set(0,.66,-.12),v.castShadow=v.receiveShadow=!0,_.add(v);const P=new I(new tt(.82,.26,.025),r.woodDarkMat);P.position.set(0,.51,-.28),_.add(P);for(const F of[-.38,.38]){const k=new I(new tt(.045,.64,.34),r.darkMetalMat);k.position.set(F,.32,-.12),k.castShadow=!0,_.add(k)}const D=new $t;D.position.set(0,0,.18),D.rotation.y=T,_.add(D);for(const F of[-.17,.17])for(const k of[-.15,.15]){const J=new I(new qt(.018,.016,.42,8),r.darkMetalMat);J.position.set(F,.21,k),D.add(J)}const O=new I(new tt(.4,.04,.36),r.woodMat);O.position.set(0,.42,0),O.castShadow=!0,D.add(O);const B=new I(new tt(.4,.22,.032),r.woodMat);B.position.set(0,.62,.16),B.rotation.x=.08,B.castShadow=!0,D.add(B);for(const F of[-.15,.15]){const k=new I(new qt(.015,.015,.28,8),r.darkMetalMat);k.position.set(F,.52,.16),D.add(k)}return _},g=d(-.34,.04,-.26),x=new I(new de(.22,.26),new gt({map:s.examSheetTex,roughness:.65}));x.rotation.x=-Math.PI/2,x.rotation.z=.12,x.position.set(-.08,.686,-.12),g.add(x);const m=d(.36,.14,.05),p=new I(new tt(.18,.014,.23),r.ceramicMat);p.position.set(-.18,.69,-.11),p.rotation.z=.03,m.add(p);const w=new I(new tt(.18,.014,.23),new gt({map:s.examSheetTex,roughness:.65}));w.position.set(0,.69,-.11),w.rotation.z=-.03,m.add(w);const y=new I(new qt(.007,.005,.15,6),r.brassMat);y.rotation.set(0,.4,Math.PI/2),y.position.set(.06,.702,-.05),m.add(y);const M=new I(new tt(.11,.008,.065),new gt({color:"#d7e2e8",metalness:.65,roughness:.32}));M.position.set(.24,.688,-.1),M.rotation.y=.24,m.add(M);for(const b of[-.025,.025])for(const A of[-.014,.014]){const T=new I(new lc(.008,.01,4,8),r.ceramicMat);T.rotation.z=Math.PI/2,T.position.set(.24+b,.695,-.1+A),m.add(T)}const E=xi(t);E.position.set(-.34,.685,-.14),g.add(E);break}case"library-study-room":case"mini-cinema":{c.rotation.y=-.18,u.scale.set(1.38,1,1.32);const h=.68,d=new I(new tt(.92,.05,.56),r.woodMat);d.position.set(-.08,h,.14),d.castShadow=d.receiveShadow=!0,c.add(d);for(const ut of[-.46,.3]){const mt=new I(new tt(.06,h-.02,.46),r.woodDarkMat);mt.position.set(ut,(h-.02)*.5,.14),mt.castShadow=!0,c.add(mt)}for(const[ut,mt,Tt]of[[-.28,.12,.14],[.06,.1,-.12]]){const q=new $t;q.position.set(ut,h+.026,mt),q.rotation.y=Tt,c.add(q);const j=new I(new tt(.28,.015,.2),r.darkMetalMat);q.add(j);const xt=new I(new tt(.28,.19,.014),r.darkMetalMat);xt.position.set(0,.095,-.095),xt.rotation.x=-.22,q.add(xt);const Et=new I(new de(.255,.165),new gt({map:s.webProjectScreenTex,emissiveMap:s.webProjectScreenTex,emissive:new Lt("#ffffff"),emissiveIntensity:.55,roughness:.25}));Et.position.set(0,.095,-.086),Et.rotation.x=-.22,q.add(Et)}const g=new I(new tt(.085,.014,.16),new gt({color:"#232a38",roughness:.3,metalness:.5}));g.position.set(-.09,h+.033,.29),g.rotation.y=.35,c.add(g);const x=new I(new de(.074,.14),new gt({color:"#b8f2d0",emissive:"#6ad99b",emissiveIntensity:.9,roughness:.2}));x.rotation.x=-Math.PI/2,x.rotation.z=.35,x.position.set(-.09,h+.041,.29),c.add(x);const m=new $t;m.position.set(.26,h+.025,.24),c.add(m);const p=new I(new qt(.056,.042,.13,14),new gt({color:"#8f5e42",roughness:.25}));p.position.y=.065,m.add(p);const w=new I(new qt(.058,.055,.036,14),new gt({color:"#ead8c5",roughness:.35}));w.position.y=.12,m.add(w);const y=new I(new Me(.058,12,8,0,Math.PI*2,0,Math.PI*.5),r.glassMat);y.position.y=.136,m.add(y);const M=new I(new qt(.007,.007,.14,6),new gt({color:xe.blossomMid,roughness:.4}));M.position.set(.015,.18,0),M.rotation.z=-.22,m.add(M);const E=new $t;E.position.set(-.34,.04,-.34),E.rotation.y=.22,c.add(E);for(const ut of[-.46,.46]){const mt=new I(new tt(.048,1.42,.048),r.darkMetalMat);mt.position.set(ut,.71,0),mt.castShadow=!0,E.add(mt);const Tt=new I(new tt(.06,.04,.38),r.darkMetalMat);Tt.position.set(ut,.02,0),E.add(Tt)}const b=new I(new tt(.96,.62,.04),r.woodDarkMat);b.position.set(0,1.06,0),b.castShadow=!0,E.add(b);const A=new I(new de(.88,.54),new gt({map:s.whiteboardTex,roughness:.28}));A.position.set(0,1.06,.022),E.add(A);const T=new I(new tt(.88,.025,.06),r.darkMetalMat);T.position.set(0,.74,.035),E.add(T);const _=new $t;_.position.set(.58,.04,-.12),_.rotation.y=-.38,c.add(_);for(const ut of[-.28,.28]){const mt=new I(new tt(.065,1.48,.09),r.woodDarkMat);mt.position.set(ut,.74,0),mt.castShadow=!0,_.add(mt)}const v=new I(new tt(.66,.07,.1),r.woodDarkMat);v.position.set(0,1.48,0),_.add(v);const P=new I(new tt(.48,1.4,.048),r.woodMat);P.position.set(-.02,.72,.02),P.rotation.y=.18,P.castShadow=!0,_.add(P);const D=new I(new tt(.26,.58,.054),r.glassMat);D.position.set(-.02,.98,.02),D.rotation.y=.18,_.add(D);const O=new I(new tt(.045,.14,.06),r.brassMat);O.position.set(.16,.74,.06),_.add(O);const B=new I(new tt(.018,.012,.055),r.brassMat);B.position.set(.16,.71,.095),_.add(B);const F=new I(new tt(.32,.42,.28),r.woodDarkMat);F.position.set(.18,.21,.28),F.castShadow=F.receiveShadow=!0,_.add(F);const k=new I(new tt(.26,.016,.22),r.linenMat);k.position.set(.18,.428,.28),_.add(k);const J=new I(new Ei(.042,.008,10,20),r.brassMat);J.rotation.x=Math.PI/2,J.position.set(.12,.442,.27),_.add(J);const H=new I(new tt(.055,.012,.032),new gt({color:"#c84b5b",roughness:.45}));H.position.set(.065,.442,.29),H.rotation.y=-.35,_.add(H);const N=new I(new tt(.065,.012,.022),r.brassMat);N.position.set(.18,.442,.26),N.rotation.y=.22,_.add(N);const V=new $t;V.position.set(.245,.442,.305),V.rotation.y=-.48,_.add(V);const it=new I(new tt(.064,.012,.02),r.brassMat);V.add(it);for(const[ut,mt]of[[-.014,.016],[.004,.012],[.02,.018]]){const Tt=new I(new tt(.012,.012,.018),r.brassMat);Tt.position.set(ut,0,mt),V.add(Tt)}const lt=new Tn("#ffd298",1.6,4.2,1.8);lt.position.set(.1,1.25,.25),c.add(lt);break}case"it-movie-night":case"unfinished-arch":{u.scale.set(1.52,1,1.32);for(let ut=-2;ut<=2;ut++){const mt=new I(new rs(.085,1),r.stoneMat);mt.position.set(0,.065,ut*.22),mt.scale.set(1.1,.55,1.3),c.add(mt)}const h=new $t;h.position.set(0,.11,.36),h.rotation.y=.25,c.add(h);const d=new gt({color:"#f2c14e",emissive:"#d99b26",emissiveIntensity:.25,roughness:.55}),g=new I(new tt(.14,.032,.065),d);h.add(g);const x=new I(new sn(.045,.075,4),d);x.position.y=.05,x.rotation.y=Math.PI/4,h.add(x);const m=new $t;m.position.set(-.68,.04,0),m.rotation.y=.22,c.add(m);const p=new I(new qt(.54,.54,.016,20),new gt({color:"#63536e",roughness:.9}));p.position.y=.01,m.add(p);const w=new I(new tt(.68,.32,.26),r.woodDarkMat);w.position.set(0,.18,-.22),w.castShadow=w.receiveShadow=!0,m.add(w);const y=new I(new tt(.64,.4,.035),r.darkMetalMat);y.position.set(0,.58,-.22),y.castShadow=!0,m.add(y);const M=new gt({map:s.movieScreenTex,emissiveMap:s.movieScreenTex,emissive:new Lt("#ffbfa0"),emissiveIntensity:.95,roughness:.25}),E=new I(new de(.59,.35),M);E.position.set(0,.58,-.198),m.add(E);const b=new I(new qt(.22,.24,.09,16),new gt({color:"#c87e99",roughness:.85}));b.position.set(-.04,.055,.24),b.castShadow=!0,m.add(b);const A=new I(new tt(.08,.015,.15),r.darkMetalMat);A.position.set(.22,.03,.22),A.rotation.y=-.35,m.add(A);const T=new I(new de(.068,.13),new gt({map:s.phoneLockTex,emissiveMap:s.phoneLockTex,emissive:new Lt("#ffdcb0"),emissiveIntensity:1.1}));T.rotation.x=-Math.PI/2,T.rotation.z=-.35,T.position.set(.22,.039,.22),m.add(T);const _=new $t;_.position.set(.68,.04,0),_.rotation.y=-.22,c.add(_);const v=new I(new qt(.54,.54,.016,20),new gt({color:"#4d5d75",roughness:.9}));v.position.y=.01,_.add(v);const P=new I(new tt(.58,.28,.32),r.woodMat);P.position.set(0,.16,-.18),P.castShadow=P.receiveShadow=!0,_.add(P);const D=new I(new tt(.34,.018,.24),r.darkMetalMat);D.position.set(0,.31,-.16),_.add(D);const O=new I(new tt(.34,.23,.016),r.darkMetalMat);O.position.set(0,.425,-.27),O.rotation.x=-.18,O.castShadow=!0,_.add(O);const B=new I(new de(.31,.195),M);B.position.set(0,.425,-.258),B.rotation.x=-.18,_.add(B);const F=new I(new qt(.22,.24,.09,16),new gt({color:"#6e789c",roughness:.85}));F.position.set(.04,.055,.24),F.castShadow=!0,_.add(F);const k=new I(new tt(.08,.015,.15),r.darkMetalMat);k.position.set(-.22,.03,.22),k.rotation.y=.35,_.add(k);const J=new I(new de(.068,.13),new gt({map:s.phoneLockTex,emissiveMap:s.phoneLockTex,emissive:new Lt("#ffdcb0"),emissiveIntensity:1.1}));J.rotation.x=-Math.PI/2,J.rotation.z=.35,J.position.set(-.22,.039,.22),_.add(J);const H=new $t;c.add(H);const N=[],V=7;for(let ut=0;ut<V;ut++){const mt=ut/(V-1),Tt=Ne.lerp(-.46,.46,mt),q=.16+Math.sin(mt*Math.PI)*.42,j=.22+Math.sin(mt*Math.PI)*.08,xt=new I(new Me(.024,10,8),new gt({color:"#ffebd2",emissive:"#ffbe78",emissiveIntensity:1.8,roughness:.2}));xt.position.set(Tt,q,j),H.add(xt),N.push({mesh:xt,baseY:q,phase:mt*Math.PI*2})}const it=new Tn("#ff8f70",1.6,4.2,1.8);it.position.set(-.65,.72,.1),c.add(it);const lt=new Tn("#9ab8ff",1.3,4.2,1.8);lt.position.set(.65,.68,.1),c.add(lt),f.movieNight={moteGroup:H,motes:N,nightGlowLeft:it,nightGlowRight:lt};break}}for(let h=0;h<4;h++){const d=h/4*Math.PI*2+n()*.8,g=.92+n()*.2,x=new I(new rs(.14+n()*.08,1),r.stoneMat);x.position.set(Math.cos(d)*g,.04,Math.sin(d)*g),x.scale.set(1.2,.55,1.1),c.add(x)}return Pi(c,[f.cupcake?.flame,f.firstTextPhone?.screen,f.firstTextPhone?.ring,f.movieNight?.moteGroup].filter(Boolean)),{group:c,animated:f}}function D_(i,t,e=2.2,n=-12){const{textures:s,materials:r}=t,o=me(e,n),a=new $t;a.position.set(e,o+.82,n),i.add(a);const l=[new nt(0,.56),new nt(.18,.52),new nt(.28,.36),new nt(.3,.14),new nt(.35,-.14),new nt(.42,-.34),new nt(.45,-.44)],c=new ho(l,28),u=c.attributes.position;for(let w=0;w<u.count;w++){const y=u.getX(w),M=u.getY(w),E=u.getZ(w);if(M<.15){const b=Math.atan2(E,y),A=(.15-M)/.6,T=Math.sin(b*7)*.055*A,_=Math.cos(b*7)*.04*A;u.setXYZ(w,y*(1+T),M+_,E*(1+T))}}c.computeVertexNormals();const f=new gt({color:"#f7f3eb",emissive:"#9db4cc",emissiveIntensity:.24,roughness:.52}),h=new I(c,f);h.castShadow=!0,a.add(h);const d=new gt({color:"#242934",roughness:.25}),g=new wn({color:"#eb9eb5",transparent:!0,opacity:.6}),x=[];for(const w of[-.1,.1]){const y=new I(new Me(.042,10,8),d);y.scale.set(.85,1.2,.65),y.position.set(w,.28,.27),a.add(y),x.push(y);const M=new I(new uc(.036,10),g);M.position.set(w*1.55,.21,.265),a.add(M)}const m=new I(new de(.95,.95),r.contactShadowMat);m.rotation.x=-Math.PI/2,m.position.set(e,o+.02,n),i.add(m);const p=new Sn(new un({map:s.glowTex,transparent:!0,opacity:.34,depthWrite:!1,blending:Je}));return p.scale.set(1.35,1.35,1.35),a.add(p),{ghost:a,ghostEyes:x,baseY:o}}function U_(i,t,e=0,n=-30){const{textures:s,materials:r}=t,o=me(e,n),a=new $t;a.position.set(e,o,n),i.add(a);const l=new I(new qt(1.15,1.32,.22,10),r.stoneDarkMat);l.position.y=.11,l.castShadow=l.receiveShadow=!0,a.add(l);const c=new I(new qt(.75,.55,.32,12),r.stoneMat);c.position.y=.38,c.castShadow=c.receiveShadow=!0,a.add(c);const u=new $t;u.position.y=.62,a.add(u);const f=[],h=new gt({color:xe.blossomPale,emissive:"#6e3d52",emissiveIntensity:.18,roughness:.58});for(let m=0;m<8;m++){const p=new $t;p.rotation.y=m/8*Math.PI*2,u.add(p);const w=new I(new Me(.42,14,10),h);w.scale.set(.56,1.25,.26),w.position.set(0,.32,.24),w.rotation.x=-.32,w.castShadow=!0,p.add(w),f.push(w)}const d=new I(new Me(.18,16,12),new gt({color:xe.warmIvory,emissive:xe.amberCore,emissiveIntensity:1.4,roughness:.25}));d.position.y=.32,u.add(d);const g=new Sn(new un({map:s.glowTex,transparent:!0,opacity:.55,depthWrite:!1,blending:Je}));g.position.y=.32,g.scale.set(1.75,1.75,1.75),u.add(g);const x=new Tn(xe.lanternGlow,3.8,9,1.8);return x.position.set(0,.95,0),a.add(x),fr(a,r.contactShadowMat,1.5,.018),{bloomPetals:f,coreOrb:d}}function N_(i,t){const{textures:e,materials:n}=t,s=new $t;s.position.set(0,me(0,21.5),21.5),i.add(s);const r=new I(new Me(.19,18,14),new gt({color:xe.warmIvory,emissive:xe.amberCore,emissiveIntensity:.72,roughness:.32}));r.scale.set(1,1.18,1),r.position.y=.55,r.castShadow=!0,s.add(r);const o=new dr;o.moveTo(0,0),o.bezierCurveTo(.18,.16,.36,.12,.34,-.04),o.bezierCurveTo(.32,-.18,.12,-.22,0,-.06);const a=new mo(o,10);a.rotateX(-Math.PI/2);const l=new gt({color:xe.blossomPale,emissive:xe.blossomMid,emissiveIntensity:.25,transparent:!0,opacity:.78,roughness:.3,side:ve}),c=[];for(const f of[-1,1]){const h=new I(a,l);h.position.set(f*.12,.62,-.02),f<0&&(h.scale.x=-1),s.add(h),c.push(h)}fr(s,n.contactShadowMat,.38,.02);const u=new Sn(new un({map:e.glowTex,transparent:!0,opacity:.42,depthWrite:!1,blending:Je}));return u.position.y=.55,u.scale.set(1.05,1.05,1.05),s.add(u),{player:s,body:r,wings:c,aura:u}}const ct=i=>document.getElementById(i),bs=innerWidth<720,gn=matchMedia("(prefers-reduced-motion: reduce)").matches;let ae;try{ae=new r_({antialias:!0,powerPreference:"high-performance"})}catch{throw ct("entry").innerHTML='<div class="entry-card"><h1>A little place</h1><p>This garden needs WebGL. Please open it in a recent Chrome, Safari, Firefox, or Edge browser.</p></div>',new Error("WebGL unavailable")}ae.setSize(innerWidth,innerHeight);ae.setPixelRatio(Math.min(devicePixelRatio,bs?1.35:1.75));ae.shadowMap.enabled=!0;ae.shadowMap.type=Jl;ae.shadowMap.autoUpdate=!1;ae.toneMapping=Ka;ae.toneMappingExposure=1.05;ae.info.autoReset=!1;ct("world").append(ae.domElement);const ge=new yu;ge.background=new Lt("#475773");ge.fog=new ac("#696682",.0145);const vn=new qe(bs?58:48,innerWidth/innerHeight,.1,220),On=g_(ae),{textures:yc}=On,Hu=new wn({map:yc.skyTex,side:Xe,fog:!1}),Gu=new I(new Me(125,36,20),Hu);Gu.rotation.y=Math.PI*.62;ge.add(Gu);const Vu=new Ya(ae),Wu=new yu;Wu.add(new I(new Me(20,24,16),Hu.clone()));const F_=Vu.fromScene(Wu,.04);ge.environment=F_.texture;ge.environmentIntensity=.62;Vu.dispose();const wc=new I(new Me(2.3,28,20),new wn({color:"#fff3db",fog:!1}));wc.position.set(18,22,-62);ge.add(wc);const Sc=new Sn(new un({map:yc.glowTex,transparent:!0,opacity:.42,depthWrite:!1,blending:Je,fog:!1}));Sc.position.copy(wc.position);Sc.scale.set(13,13,13);ge.add(Sc);const O_=new vf("#d6b4c8","#3c3633",.95);ge.add(O_);const yn=new Nu("#f7c68d",2.15);yn.position.set(-28,21,-18);yn.castShadow=!0;yn.shadow.mapSize.set(1536,1536);Object.assign(yn.shadow.camera,{left:-34,right:34,top:42,bottom:-44,near:2,far:105});yn.shadow.bias=-4e-4;yn.shadow.normalBias=.025;ge.add(yn);const Xu=new Nu("#6d87b0",.65);Xu.position.set(24,16,26);ge.add(Xu);const _s=m_.filter(i=>!i.isPrivate&&i.isUnlocked!==!1).sort((i,t)=>i.sortOrder-t.sortOrder),Li=[...os.map((i,t)=>({...i,nodeIndex:t})),..._s.map((i,t)=>({...i,nodeIndex:os.length+t}))],B_=Li.map(i=>i.location);M_(ge,On,B_);const{colliders:Yu}=y_(ge,On),z_=S_(ge,On,-4.2,-14.2);Yu.push(z_.collider);const Xs=b_(ge,On),Qr=C_(ge,On,yn.position),ai={};_s.forEach(i=>{const t=I_(ge,On,i);Object.assign(ai,t.animated)});const{player:Ae,body:Wl,wings:k_,aura:H_}=N_(ge,On),{ghost:Fs,ghostEyes:G_,baseY:V_}=D_(ge,On,2.2,-12),{bloomPetals:W_,coreOrb:X_}=U_(ge,On,0,-30),qu=[];Li.forEach(i=>{const t=me(i.location.x,i.location.z)+.032,e=i.type==="memory",n=new I(new po(e?.56:.72,e?.62:.78,36),new wn({color:e?xe.blossomMid:xe.lanternGlow,transparent:!0,opacity:.48,side:ve}));n.position.set(i.location.x,t,i.location.z),n.rotation.x=-Math.PI/2,ge.add(n),qu.push(n)});const mn=Ss(303),Ys=[];for(let i=0;i<32;i++){const t=i<12,e=t?-10.4+(mn()-.5)*8.5:(mn()-.5)*20,n=t?-2.2+(mn()-.5)*10.5:21-mn()*56,s=Math.max(.2,me(e,n))+.45+mn()*1.7,r=new Sn(new un({map:yc.glowTex,transparent:!0,opacity:.62,depthWrite:!1,blending:Je}));r.position.set(e,s,n);const o=.24+mn()*.34;r.scale.set(o,o,o),ge.add(r),Ys.push({o:r,x:e,y:s,z:n,phase:mn()*6.28,baseScale:o})}const qs=bs?75:145,Y_=new de(.085,.065),q_=new gt({color:xe.blossomPale,roughness:.65,side:ve}),$n=new tn(Y_,q_,qs),J_=Array.from({length:qs},()=>({x:(mn()-.5)*20,y:mn()*7.5,z:22-mn()*58,p:mn()*6.28}));ge.add($n);gn&&($n.count=0);const ao=22,as=new tn(new Me(.036,6,4),new wn({color:xe.lanternGlow}),ao);as.count=0;ge.add(as);let es=0;const to=new L;function Z_(i,t,e){gn||(to.set(i,t+.6,e),es=1.5,as.count=ao)}const $_=new nn(innerWidth,innerHeight,{type:In}),Ii=new h_(ae,$_),K_=new d_(ge,vn),Js=new gs(new nt(innerWidth,innerHeight),.24,.42,.88),j_=new p_;Ii.addPass(K_);Ii.addPass(Js);Ii.addPass(j_);const co=["low","medium","high"];let Zs=bs?1:2,eo=!0;function Ju(i){i==="low"?(ae.setPixelRatio(1),ae.shadowMap.enabled=!1,yn.castShadow=!1,eo=!1,Qr.setReflectiveEnabled(!1),$n.count=gn?0:Math.floor(qs*.35),Xs.secondaryLights.forEach(t=>t.visible=!1),Ys.forEach((t,e)=>t.o.visible=e%3===0)):i==="medium"?(ae.setPixelRatio(Math.min(devicePixelRatio,1.25)),ae.shadowMap.enabled=!0,yn.castShadow=!0,eo=!0,Js.strength=.2,Qr.setReflectiveEnabled(!0),$n.count=gn?0:Math.floor(qs*.68),Xs.secondaryLights.forEach((t,e)=>t.visible=e%2===0),Ys.forEach((t,e)=>t.o.visible=e%2===0)):(ae.setPixelRatio(Math.min(devicePixelRatio,bs?1.4:1.75)),ae.shadowMap.enabled=!0,yn.castShadow=!0,eo=!0,Js.strength=.24,Qr.setReflectiveEnabled(!0),$n.count=gn?0:qs,Xs.secondaryLights.forEach(t=>t.visible=!0),Ys.forEach(t=>t.o.visible=!0)),Ii.setSize(innerWidth,innerHeight),Ii.setPixelRatio(ae.getPixelRatio()),Js.setSize(innerWidth,innerHeight),ae.shadowMap.needsUpdate=!0,ct("qualityButton").textContent=`quality: ${i}`}Ju(co[Zs]);ct("qualityButton").onclick=()=>{Zs=(Zs+1)%co.length,Ju(co[Zs])};let vs=!1,qn=!0,Cn=-1,Rn=null,pn=0,Ja=0,ks=0;const cr=new Set,Ti=new Set,bc=new Map;let Ue,Os;function Ec(){if(qn&&(Ue??=new(window.AudioContext||window.webkitAudioContext),Ue.state==="suspended"&&Ue.resume(),!Os)){const i=Ue.sampleRate*2,t=Ue.createBuffer(1,i,Ue.sampleRate),e=t.getChannelData(0);let n=0,s=0,r=0;for(let l=0;l<i;l++){const c=Math.random()*2-1;n=.997*n+c*.029,s=.985*s+c*.032,r=.95*r+c*.048,e[l]=(n+s+r)*.12}const o=Ue.createBufferSource();o.buffer=t,o.loop=!0;const a=Ue.createBiquadFilter();a.type="lowpass",a.frequency.value=380,Os=Ue.createGain(),Os.gain.value=.055,o.connect(a),a.connect(Os),Os.connect(Ue.destination),o.start()}}function Zu(i){qn&&(Ec(),i.forEach((t,e)=>{const n=Ue.createOscillator(),s=Ue.createGain(),r=Ue.currentTime+e*.14;n.type="sine",n.frequency.value=t,s.gain.setValueAtTime(1e-4,r),s.gain.exponentialRampToValueAtTime(.038,r+.03),s.gain.exponentialRampToValueAtTime(1e-4,r+1.4),n.connect(s),s.connect(Ue.destination),n.start(r),n.stop(r+1.5)}))}function $u(){ct("count").textContent=`${cr.size} / ${os.length} discoveries · ${Ti.size} / ${_s.length} memories`,ct("journalCount").textContent=`${Ti.size}/${_s.length}`,Q_()}function Q_(){const i=ct("mapDiscoveries");i.innerHTML="",os.forEach((n,s)=>{const r=document.createElement("button");r.type="button",r.className="map-item"+(cr.has(n.id)?" visited":""),r.innerHTML=`<span>${n.chapterNumber} · ${n.name}</span><span class="status-dot">${cr.has(n.id)?"✿":"○"}</span>`,r.onclick=()=>na(s),i.appendChild(r)});const t=ct("mapMemories");t.innerHTML="",_s.forEach((n,s)=>{const r=os.length+s,o=document.createElement("button");o.type="button",o.className="map-item"+(Ti.has(n.id)?" visited":""),o.innerHTML=`<span>${String(s+1).padStart(2,"0")} · ${n.title}</span><span class="status-dot">${Ti.has(n.id)?"✿":"○"}</span>`,o.onclick=()=>na(r),t.appendChild(o)});const e=ct("journalList");e.innerHTML="",_s.forEach((n,s)=>{const r=Ti.has(n.id),o=document.createElement("button");o.type="button",o.className="journal-item"+(r?" visited":""),o.innerHTML=`<span><strong>${n.code}</strong> · ${n.title}<br><small style="margin:2px 0 0;opacity:.7">${n.date}</small></span><span class="status-dot">${r?"View →":"Walk to"}</span>`,o.onclick=()=>{ct("journal").hidden=!0,ct("journalButton").setAttribute("aria-expanded","false"),na(os.length+s,r)},e.appendChild(o)})}function na(i,t=!1){const e=Li[i];if(!e)return;const n=e.location.z+1.45;Ae.position.set(e.location.x,me(e.location.x,n),n),pn=0,pr(),ct("map").hidden=!0,ct("journal").hidden=!0,ct("mapButton").setAttribute("aria-expanded","false"),ct("journalButton").setAttribute("aria-expanded","false"),ke.clear(),t&&(Cn=i,Tc())}let $s=null;function _o(i){const t=ct("focusWhiteboard"),e=ct("focusBrokenKey"),n=ct("focusOverview");t?.classList.toggle("active",i==="whiteboard"),e?.classList.toggle("active",i==="key"),n?.classList.toggle("active",i==="overview"),i==="whiteboard"?(ct("message").classList.add("inspecting-detail"),$s={pos:[1.85,1.38,-24.08],look:[1.88,1.15,-25.18]}):i==="key"?(ct("message").classList.add("inspecting-detail"),$s={pos:[2.72,.92,-24.05],look:[2.98,.56,-24.68]}):(ct("message").classList.remove("inspecting-detail"),$s=null)}ct("focusWhiteboard")?.addEventListener("click",()=>_o("whiteboard"));ct("focusBrokenKey")?.addEventListener("click",()=>_o("key"));ct("focusOverview")?.addEventListener("click",()=>_o("overview"));function pr(){ct("message").hidden=!0,ct("message").classList.remove("inspecting-detail"),$s=null,Rn=null,ke.clear()}function tv(i,t){if(Rn=i,_o("overview"),ct("sceneFocusBar")&&(ct("sceneFocusBar").hidden=i.id!=="memory-09"),i.type==="discovery")cr.add(i.id),ct("chapter").textContent=`${i.chapterNumber} / ${i.name}`,ct("memoryDate").textContent="",ct("themeLine").hidden=!0,ct("title").innerHTML=i.title,ct("copy").textContent=i.description,ct("photoContainer").hidden=!0,ct("photoPlaceholder").hidden=!0,ct("closeMessage").textContent=i.id==="discovery-04"?"one tiny surprise ✿":"keep exploring →",i.id==="discovery-01"&&Xs.gate.light&&(Xs.gate.light.intensity=12),i.id==="discovery-03"&&(ks=2),i.id==="discovery-04"&&(Ja=1);else{Ti.add(i.id),ct("chapter").textContent=`${i.code} · MEMORY TRAIL`,ct("memoryDate").textContent=i.date||"",i.theme?(ct("themeLine").textContent=i.theme,ct("themeLine").hidden=!1):ct("themeLine").hidden=!0,ct("title").textContent=i.title,ct("copy").textContent=i.description,ct("closeMessage").textContent="keep walking →";const e=bc.get(i.id)||i.photo;e?(ct("memoryPhoto").src=e,ct("photoContainer").hidden=!1,ct("photoPlaceholder").hidden=!0):i.photoCaption?(ct("photoContainer").hidden=!0,ct("photoCaptionText").textContent=i.photoCaption,ct("photoPlaceholder").hidden=!1):(ct("photoContainer").hidden=!0,ct("photoPlaceholder").hidden=!0)}qu[t].material.color.set("#c8e9b9"),Z_(i.location.x,me(i.location.x,i.location.z),i.location.z),$u(),ct("message").hidden=!1,ct("closeMessage").focus(),Zu([392+t%6*45,523.25,659.25]),ke.clear()}function Tc(){Cn<0||!ct("message").hidden||ct("note").open||tv(Li[Cn],Cn)}ct("photoInput").onchange=i=>{const t=i.target.files?.[0];if(!t||!Rn)return;const e=new FileReader;e.onload=()=>{bc.set(Rn.id,e.result),ct("memoryPhoto").src=e.result,ct("photoContainer").hidden=!1,ct("photoPlaceholder").hidden=!0},e.readAsDataURL(t)};ct("openLightbox").onclick=()=>{if(!Rn)return;const i=bc.get(Rn.id)||Rn.photo;i&&(ct("lightboxImg").src=i,ct("lightboxCaption").textContent=`${Rn.title} (${Rn.date||""})`,ct("lightbox").showModal())};ct("closeLightbox").onclick=()=>ct("lightbox").close();ct("begin").onclick=()=>{vs=!0,document.body.classList.add("playing"),ct("entry").classList.add("leaving"),setTimeout(()=>ct("entry").hidden=!0,950),qn&&Ec(),Zu([392,523.25,659.25])};ct("sound").onclick=()=>{qn=!qn,ct("sound").textContent=qn?"♪ sound on":"♪ sound off",ct("sound").setAttribute("aria-pressed",String(qn)),qn&&vs?Ec():Ue?.suspend()};ct("mapButton").onclick=()=>{const i=ct("map").hidden;ct("map").hidden=!i,ct("journal").hidden=!0,ct("mapButton").setAttribute("aria-expanded",String(i)),ct("journalButton").setAttribute("aria-expanded","false")};ct("closeMap").onclick=()=>{ct("map").hidden=!0,ct("mapButton").setAttribute("aria-expanded","false")};ct("journalButton").onclick=()=>{const i=ct("journal").hidden;ct("journal").hidden=!i,ct("map").hidden=!0,ct("journalButton").setAttribute("aria-expanded",String(i)),ct("mapButton").setAttribute("aria-expanded","false")};ct("closeJournal").onclick=()=>{ct("journal").hidden=!0,ct("journalButton").setAttribute("aria-expanded","false")};ct("home").onclick=ct("reset").onclick=()=>{Ae.position.set(0,me(0,21.5),21.5),pn=0,pr(),ct("map").hidden=!0,ct("journal").hidden=!0,ct("place").textContent="THE LANTERN GATE",ke.clear()};ct("closeMessage").onclick=()=>{Rn?.id==="discovery-04"?(ct("note").showModal(),ct("closeNote").focus()):pr()};ct("closeNote").onclick=()=>{ct("note").close(),pr()};ct("interact").onclick=Tc;const ke=new Set,ln={x:0,y:0},En={x:0,z:0};let bi=null,Xl=performance.now();addEventListener("keydown",i=>{i.target.tagName==="BUTTON"&&[" ","Enter"].includes(i.key)||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(i.key)&&i.preventDefault(),ke.add(i.code),i.code==="KeyE"&&!i.repeat&&Tc(),i.code==="Escape"&&(pr(),ct("map").hidden=!0,ct("journal").hidden=!0),i.code==="KeyM"&&!i.repeat&&ct("mapButton").click(),i.code==="KeyJ"&&!i.repeat&&ct("journalButton").click())});addEventListener("keyup",i=>ke.delete(i.code));addEventListener("blur",()=>{ke.clear(),ln.x=ln.y=0});ae.domElement.addEventListener("pointerdown",i=>{bi={id:i.pointerId,x:i.clientX},ae.domElement.setPointerCapture(i.pointerId)});ae.domElement.addEventListener("pointermove",i=>{bi&&bi.id===i.pointerId&&(pn-=(i.clientX-bi.x)*.005,bi.x=i.clientX)});ae.domElement.addEventListener("pointerup",()=>bi=null);ae.domElement.addEventListener("pointercancel",()=>bi=null);const Qn=ct("joystick");function Ku(i){const t=Qn.getBoundingClientRect(),e=(i.clientX-t.left-t.width/2)/34,n=(i.clientY-t.top-t.height/2)/34,s=Math.max(1,Math.hypot(e,n));ln.x=e/s,ln.y=n/s,Qn.firstElementChild.style.transform=`translate(${ln.x*30}px,${ln.y*30}px)`}Qn.onpointerdown=i=>{Qn.setPointerCapture(i.pointerId),Ku(i)};Qn.onpointermove=i=>{Qn.hasPointerCapture(i.pointerId)&&Ku(i)};Qn.onpointerup=Qn.onpointercancel=()=>{ln.x=ln.y=0,Qn.firstElementChild.style.transform="none"};document.addEventListener("visibilitychange",()=>{ke.clear(),ln.x=ln.y=0,document.hidden?Ue?.suspend():vs&&qn&&Ue?.resume()});$u();const Yl=new L,lo=new L;vn.position.set(0,2.05,25.8);lo.set(0,1.55,11);vn.lookAt(lo);let Za=null;const Wn=new Te;function ju(i){requestAnimationFrame(ju);const t=Math.max(.001,Math.min((i-Xl)/1e3,.05));if(Xl=i,document.hidden)return;const e=i/1e3;if(ae.info.reset(),oo.uTime.value=e,oo.uWindAmp.value=gn?0:1,vs&&ct("message").hidden&&!ct("note").open&&ct("map").hidden&&ct("journal").hidden){let a=Number(ke.has("KeyD")||ke.has("ArrowRight"))-Number(ke.has("KeyA")||ke.has("ArrowLeft"))+ln.x,l=Number(ke.has("KeyS")||ke.has("ArrowDown"))-Number(ke.has("KeyW")||ke.has("ArrowUp"))+ln.y;const c=Math.max(1,Math.hypot(a,l));a/=c,l/=c;const u=(a*Math.cos(pn)+l*Math.sin(pn))*3.8,f=(-a*Math.sin(pn)+l*Math.cos(pn))*3.8,h=1-Math.exp(-t*10);En.x=Ne.lerp(En.x,u,h),En.z=Ne.lerp(En.z,f,h);const d=Ne.clamp(Ae.position.x+En.x*t,-16,16),g=Ne.clamp(Ae.position.z+En.z*t,-37.5,24);Yu.some(m=>Math.hypot(d-m.x,g-m.z)<m.r+.28)||Si(d,g)<5.35||(Ae.position.x=d,Ae.position.z=g,Ae.position.y=me(d,g)),Math.hypot(En.x,En.z)>.18&&(Ae.rotation.y=Math.atan2(En.x,En.z))}Cn=-1;let n=3.6;if(Li.forEach((a,l)=>{const c=a.interactionRadius||3.2,u=Math.hypot(a.location.x-Ae.position.x,a.location.z-Ae.position.z);u<Math.min(n,c)&&(n=u,Cn=l)}),ct("interact").hidden=!vs||Cn<0||!ct("message").hidden||ct("note").open,Cn>=0){const a=Li[Cn];ct("interact").textContent=`${a.interactLabel}${bs?"":" · E"}`,ct("place").textContent=a.type==="memory"?`${a.code} · ${a.title.toUpperCase()}`:a.name}const s=Za||$s;s?(vn.position.set(...s.pos),vn.lookAt(...s.look)):(Yl.set(Ae.position.x+Math.sin(pn)*4.4,Ae.position.y+1.92,Ae.position.z+Math.cos(pn)*4.4),vn.position.lerp(Yl,gn?1:1-Math.exp(-t*5.2)),lo.set(Ae.position.x-Math.sin(pn)*3.8,Ae.position.y+1.38,Ae.position.z-Math.cos(pn)*3.8),vn.lookAt(lo)),Wl.position.y=.55+(gn?0:Math.sin(e*3)*.055),H_.position.y=Wl.position.y,k_.forEach((a,l)=>a.rotation.z=gn?0:Math.sin(e*16)*(l?1:-1)*.3);const r=Math.hypot(Ae.position.x-Fs.position.x,Ae.position.z-Fs.position.z);ks>0&&(ks=Math.max(0,ks-t)),Fs.position.y=V_+.78+(gn?0:Math.sin(e*2)*.11),Fs.rotation.y=Math.sin(e*.6)*.28,Fs.rotation.z=r<3.6||ks>0?-.16:0;const o=Math.sin(e*1.7)>.96?.14:1;if(G_.forEach(a=>a.scale.y=o),Qr.update(t,e),ai.cupcake){const a=1+Math.sin(e*9.5)*.12;ai.cupcake.flame.scale.set(.75,1.45*a,.75),ai.cupcake.halo.scale.setScalar(.3+Math.sin(e*8)*.04)}if(ai.firstTextPhone){const a=ai.firstTextPhone,l=Math.hypot(Ae.position.x-a.location.x,Ae.position.z-a.location.z),c=l<4.2?1:.22,u=.85+Math.sin(e*4.5)*.2;a.screenMat.emissiveIntensity=Ne.lerp(a.screenMat.emissiveIntensity,c*.78*u,t*5),a.halo.material.opacity=Ne.lerp(a.halo.material.opacity,c*.38*u,t*5),a.light.intensity=Ne.lerp(a.light.intensity,c*1.55*u,t*5);const f=1+Math.sin(e*3.8)*(l<4.2?.18:.05);a.ring.scale.set(f,f,1)}if(ai.movieNight&&ai.movieNight.motes.forEach((l,c)=>{const u=.5+.5*Math.sin(e*3.2-l.phase);l.mesh.position.y=l.baseY+Math.sin(e*2.4+c)*.025,l.mesh.scale.setScalar(.68+u*.55)}),Ys.forEach(a=>{if(!a.o.visible)return;a.o.position.x=a.x+Math.sin(e*.5+a.phase)*.55,a.o.position.y=a.y+Math.sin(e*1.05+a.phase)*.2;const l=a.baseScale*(.85+Math.sin(e*2.2+a.phase)*.2);a.o.scale.setScalar(l)}),!gn&&$n.count>0){for(let a=0;a<$n.count;a++){const l=J_[a];l.y-=t*.32,l.y<0&&(l.y=7.5),Wn.position.set(l.x+Math.sin(e*.45+l.p)*.85,l.y,l.z),Wn.rotation.set(e*.5+l.p,e*.3,e*.65),Wn.scale.setScalar(1),Wn.updateMatrix(),$n.setMatrixAt(a,Wn.matrix)}$n.instanceMatrix.needsUpdate=!0}if(es>0){es=Math.max(0,es-t);const a=1-es/1.5;for(let l=0;l<ao;l++){const c=l/ao*Math.PI*2,u=a*1.5;Wn.position.set(to.x+Math.cos(c)*u,to.y+Math.sin(a*Math.PI)*1+l%3*.14,to.z+Math.sin(c)*u),Wn.scale.setScalar(Math.max(.01,(1-a)*1.1)),Wn.updateMatrix(),as.setMatrixAt(l,Wn.matrix)}as.instanceMatrix.needsUpdate=!0,es===0&&(as.count=0)}W_.forEach(a=>{a.rotation.x=Ne.lerp(a.rotation.x,Ja?-1.2:-.32,t*2),a.position.z=Ne.lerp(a.position.z,Ja?.5:.24,t*2)}),X_.position.y=.32+Math.sin(e*1.8)*.04,eo?Ii.render():ae.render(ge,vn)}requestAnimationFrame(ju);addEventListener("resize",()=>{vn.aspect=innerWidth/innerHeight,vn.updateProjectionMatrix(),ae.setSize(innerWidth,innerHeight),Ii.setSize(innerWidth,innerHeight),Js.setSize(innerWidth,innerHeight)});window.setGardenView=(i,t)=>{if(!i){Za=null;return}Za={pos:i,look:t}};window.gardenState=()=>{let i=0,t=0,e=0,n=0,s=0;return ge.traverse(r=>{if(r.isInstancedMesh){t++;const o=r.geometry.index;s+=(o?o.count:r.geometry.attributes.position.count)/3*r.count}else if(r.isMesh){i++,r.geometry.groups&&r.geometry.groups.length>1&&n++;const o=r.geometry.index;s+=(o?o.count:r.geometry.attributes.position.count)/3}else r.isSprite&&e++}),{started:vs,quality:co[Zs],position:Ae.position.toArray(),cameraPos:vn.position.toArray(),nearest:Cn,discoveriesFound:cr.size,memoriesFound:Ti.size,totalStations:Li.length,drawCalls:ae.info.render.calls,triangles:ae.info.render.triangles,sceneObjects:{meshes:i,instanced:t,sprites:e,groupsMulti:n,totalTris:Math.round(s)}}};
