(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const ol="180",rf=0,jl=1,of=2,Bu=1,ku=2,hi=3,Kn=0,$t=1,ct=2,mi=0,Cs=1,on=2,Kl=3,Jl=4,af=5,Xi=100,cf=101,lf=102,hf=103,uf=104,df=200,ff=201,pf=202,mf=203,ac=204,cc=205,gf=206,_f=207,xf=208,vf=209,Mf=210,yf=211,wf=212,Sf=213,bf=214,lc=0,hc=1,uc=2,Ns=3,dc=4,fc=5,pc=6,mc=7,al=0,Tf=1,Ef=2,Pi=0,zu=1,Hu=2,Vu=3,cl=4,Gu=5,Wu=6,Xu=7,$l="attached",Af="detached",Yu=300,Us=301,Fs=302,gc=303,_c=304,sa=306,Li=1e3,Wn=1001,Ko=1002,Zt=1003,qu=1004,mr=1005,sn=1006,Bo=1007,Xn=1008,Jn=1009,ju=1010,Ku=1011,Ir=1012,ll=1013,Ki=1014,Ln=1015,qn=1016,hl=1017,ul=1018,Lr=1020,Ju=35902,$u=35899,Zu=1021,Qu=1022,Mn=1023,Dr=1026,Nr=1027,dl=1028,fl=1029,ed=1030,pl=1031,ml=1033,ko=33776,zo=33777,Ho=33778,Vo=33779,xc=35840,vc=35841,Mc=35842,yc=35843,wc=36196,Sc=37492,bc=37496,Tc=37808,Ec=37809,Ac=37810,Rc=37811,Cc=37812,Pc=37813,Ic=37814,Lc=37815,Dc=37816,Nc=37817,Uc=37818,Fc=37819,Oc=37820,Bc=37821,kc=36492,zc=36494,Hc=36495,Vc=36283,Gc=36284,Wc=36285,Xc=36286,Ur=2300,Fr=2301,ga=2302,Zl=2400,Ql=2401,eh=2402,Rf=2500,Cf=0,td=1,Yc=2,Pf=3200,If=3201,gl=0,Lf=1,ui="",yt="srgb",Qt="srgb-linear",Jo="linear",mt="srgb",rs=7680,th=519,Df=512,Nf=513,Uf=514,nd=515,Ff=516,Of=517,Bf=518,kf=519,qc=35044,nh="300 es",Yn=2e3,$o=2001;class js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ih=1234567;const vr=Math.PI/180,Os=180/Math.PI;function wn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[s&255]+Gt[s>>8&255]+Gt[s>>16&255]+Gt[s>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function st(s,e,t){return Math.max(e,Math.min(t,s))}function _l(s,e){return(s%e+e)%e}function zf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Hf(s,e,t){return s!==e?(t-s)/(e-s):0}function Mr(s,e,t){return(1-t)*s+t*e}function Vf(s,e,t,n){return Mr(s,e,1-Math.exp(-t*n))}function Gf(s,e=1){return e-Math.abs(_l(s,e*2)-e)}function Wf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Xf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Yf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function qf(s,e){return s+Math.random()*(e-s)}function jf(s){return s*(.5-Math.random())}function Kf(s){s!==void 0&&(ih=s);let e=ih+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jf(s){return s*vr}function $f(s){return s*Os}function Zf(s){return(s&s-1)===0&&s!==0}function Qf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ep(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function tp(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function gt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const kt={DEG2RAD:vr,RAD2DEG:Os,generateUUID:wn,clamp:st,euclideanModulo:_l,mapLinear:zf,inverseLerp:Hf,lerp:Mr,damp:Vf,pingpong:Gf,smoothstep:Wf,smootherstep:Xf,randInt:Yf,randFloat:qf,randFloatSpread:jf,seededRandom:Kf,degToRad:Jf,radToDeg:$f,isPowerOfTwo:Zf,ceilPowerOfTwo:Qf,floorPowerOfTwo:ep,setQuaternionFromProperEuler:tp,normalize:gt,denormalize:Pn};class Z{constructor(e=0,t=0){Z.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Di{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const b=Math.sqrt(M),S=Math.atan2(b,p*y);m=Math.sin(m*S)/b,a=Math.sin(a*S)/b}const x=a*y;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new P,sh=new Di;class nt{constructor(e,t,n,i,r,o,a,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],M=i[4],x=i[7],b=i[2],S=i[5],E=i[8];return r[0]=o*_+a*y+l*b,r[3]=o*m+a*M+l*S,r[6]=o*p+a*x+l*E,r[1]=c*_+h*y+u*b,r[4]=c*m+h*M+u*S,r[7]=c*p+h*x+u*E,r[2]=d*_+f*y+g*b,r[5]=d*m+f*M+g*S,r[8]=d*p+f*x+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xa.makeScale(e,t)),this}rotate(e){return this.premultiply(xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new nt;function id(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function np(){const s=Or("canvas");return s.style.display="block",s}const rh={};function Br(s){s in rh||(rh[s]=!0,console.warn(s))}function ip(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const oh=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sp(){const s={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(i.r=Ps(i.r),i.g=Ps(i.g),i.b=Ps(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ui?Jo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Qt]:{primaries:e,whitePoint:n,transfer:Jo,toXYZ:oh,fromXYZ:ah,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:oh,fromXYZ:ah,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),s}const at=sp();function gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let os;class rp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{os===void 0&&(os=Or("canvas")),os.width=e.width,os.height=e.height;const i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=os}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let op=0;class xl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(va(i[o].image)):r.push(va(i[o]))}else r=va(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function va(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ap=0;const Ma=new P;class Ut extends js{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=Wn,i=Wn,r=sn,o=Xn,a=Mn,l=Jn,c=Ut.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=wn(),this.name="",this.source=new xl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ma).x}get height(){return this.source.getSize(Ma).y}get depth(){return this.source.getSize(Ma).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Yu;Ut.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(f+1)/2,b=(p+1)/2,S=(h+d)/4,E=(u+_)/4,A=(g+m)/4;return M>x&&M>b?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=S/n,r=E/n):x>b?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=S/i,r=A/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=E/r,i=A/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cp extends js{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Ut(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new xl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends cp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sd extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lp extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),to.subVectors(this.max,tr),as.subVectors(e.a,tr),cs.subVectors(e.b,tr),ls.subVectors(e.c,tr),vi.subVectors(cs,as),Mi.subVectors(ls,cs),Fi.subVectors(as,ls);let t=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-Fi.z,Fi.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,Fi.z,0,-Fi.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-Fi.y,Fi.x,0];return!ya(t,as,cs,ls,to)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,as,cs,ls,to))?!1:(no.crossVectors(vi,Mi),t=[no.x,no.y,no.z],ya(t,as,cs,ls,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ni=[new P,new P,new P,new P,new P,new P,new P,new P],bn=new P,eo=new Un,as=new P,cs=new P,ls=new P,vi=new P,Mi=new P,Fi=new P,tr=new P,to=new P,no=new P,Oi=new P;function ya(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Oi.fromArray(s,r);const a=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const hp=new Un,nr=new P,wa=new P;class Zn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);const t=nr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(nr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(wa)),this.expandByPoint(nr.copy(e.center).sub(wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ii=new P,Sa=new P,io=new P,yi=new P,ba=new P,so=new P,Ta=new P;class Wr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sa.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(Sa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(io),a=yi.dot(this.direction),l=-yi.dot(io),c=yi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Sa).addScaledVector(io,d),f}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const n=ii.dot(this.direction),i=ii.dot(ii)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,i,r){ba.subVectors(t,e),so.subVectors(n,e),Ta.crossVectors(ba,so);let o=this.direction.dot(Ta),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(so.crossVectors(yi,so));if(l<0)return null;const c=a*this.direction.dot(ba.cross(yi));if(c<0||l+c>o)return null;const h=-a*yi.dot(Ta);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(up,e,dp)}lookAt(e,t,n){const i=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),wi.crossVectors(n,ln),wi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),wi.crossVectors(n,ln)),wi.normalize(),ro.crossVectors(ln,wi),i[0]=wi.x,i[4]=ro.x,i[8]=ln.x,i[1]=wi.y,i[5]=ro.y,i[9]=ln.y,i[2]=wi.z,i[6]=ro.z,i[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],M=n[7],x=n[11],b=n[15],S=i[0],E=i[4],A=i[8],w=i[12],v=i[1],C=i[5],L=i[9],F=i[13],B=i[2],U=i[6],O=i[10],Y=i[14],z=i[3],q=i[7],ue=i[11],Se=i[15];return r[0]=o*S+a*v+l*B+c*z,r[4]=o*E+a*C+l*U+c*q,r[8]=o*A+a*L+l*O+c*ue,r[12]=o*w+a*F+l*Y+c*Se,r[1]=h*S+u*v+d*B+f*z,r[5]=h*E+u*C+d*U+f*q,r[9]=h*A+u*L+d*O+f*ue,r[13]=h*w+u*F+d*Y+f*Se,r[2]=g*S+_*v+m*B+p*z,r[6]=g*E+_*C+m*U+p*q,r[10]=g*A+_*L+m*O+p*ue,r[14]=g*w+_*F+m*Y+p*Se,r[3]=y*S+M*v+x*B+b*z,r[7]=y*E+M*C+x*U+b*q,r[11]=y*A+M*L+x*O+b*ue,r[15]=y*w+M*F+x*Y+b*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,M=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,b=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,S=t*y+n*M+i*x+r*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=y*E,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*E,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*E,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*E,e[4]=M*E,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*E,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*E,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*E,e[8]=x*E,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*E,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*E,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*E,e[12]=b*E,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*E,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,y=l*c,M=l*h,x=l*u,b=n.x,S=n.y,E=n.z;return i[0]=(1-(_+p))*b,i[1]=(f+x)*b,i[2]=(g-M)*b,i[3]=0,i[4]=(f-x)*S,i[5]=(1-(d+p))*S,i[6]=(m+y)*S,i[7]=0,i[8]=(g+M)*E,i[9]=(m-y)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=hs.set(i[0],i[1],i[2]).length();const o=hs.set(i[4],i[5],i[6]).length(),a=hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Tn.copy(this);const c=1/r,h=1/o,u=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,t.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Yn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Yn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===$o)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Yn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Yn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===$o)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hs=new P,Tn=new Ge,up=new P(0,0,0),dp=new P(1,1,1),wi=new P,ro=new P,ln=new P,ch=new Ge,lh=new Di;class Fn{constructor(e=0,t=0,n=0,i=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ch,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lh.setFromEuler(this),this.setFromQuaternion(lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class vl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fp=0;const hh=new P,us=new Di,si=new Ge,oo=new P,ir=new P,pp=new P,mp=new Di,uh=new P(1,0,0),dh=new P(0,1,0),fh=new P(0,0,1),ph={type:"added"},gp={type:"removed"},ds={type:"childadded",child:null},Ea={type:"childremoved",child:null};class pt extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new P,t=new Fn,n=new Di,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new nt}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(uh,e)}rotateY(e){return this.rotateOnAxis(dh,e)}rotateZ(e){return this.rotateOnAxis(fh,e)}translateOnAxis(e,t){return hh.copy(e).applyQuaternion(this.quaternion),this.position.add(hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uh,e)}translateY(e){return this.translateOnAxis(dh,e)}translateZ(e){return this.translateOnAxis(fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oo.copy(e):oo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(ir,oo,this.up):si.lookAt(oo,ir,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),us.setFromRotationMatrix(si),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ph),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gp),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ph),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,pp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new P(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new P,ri=new P,Aa=new P,oi=new P,fs=new P,ps=new P,mh=new P,Ra=new P,Ca=new P,Pa=new P,Ia=new lt,La=new lt,Da=new lt;class vn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),En.subVectors(e,t),i.cross(En);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){En.subVectors(i,t),ri.subVectors(n,t),Aa.subVectors(e,t);const o=En.dot(En),a=En.dot(ri),l=En.dot(Aa),c=ri.dot(ri),h=ri.dot(Aa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ia.setScalar(0),La.setScalar(0),Da.setScalar(0),Ia.fromBufferAttribute(e,t),La.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ia,r.x),o.addScaledVector(La,r.y),o.addScaledVector(Da,r.z),o}static isFrontFacing(e,t,n,i){return En.subVectors(n,t),ri.subVectors(e,t),En.cross(ri).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),En.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;fs.subVectors(i,n),ps.subVectors(r,n),Ra.subVectors(e,n);const l=fs.dot(Ra),c=ps.dot(Ra);if(l<=0&&c<=0)return t.copy(n);Ca.subVectors(e,i);const h=fs.dot(Ca),u=ps.dot(Ca);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(fs,o);Pa.subVectors(e,r);const f=fs.dot(Pa),g=ps.dot(Pa);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ps,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return mh.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(mh,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(fs,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Na(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class _e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=_l(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Na(o,r,e+1/3),this.g=Na(o,r,e),this.b=Na(o,r,e-1/3)}return at.colorSpaceToWorking(this,i),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=rd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return at.workingToColorSpace(Wt.copy(this),e),Math.round(st(Wt.r*255,0,255))*65536+Math.round(st(Wt.g*255,0,255))*256+Math.round(st(Wt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Wt.copy(this),t);const n=Wt.r,i=Wt.g,r=Wt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=yt){at.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,i=Wt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(ao);const n=Mr(Si.h,ao.h,t),i=Mr(Si.s,ao.s,t),r=Mr(Si.l,ao.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new _e;_e.NAMES=rd;let _p=0;class rn extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=Cs,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=cc,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ac&&(n.blendSrc=this.blendSrc),this.blendDst!==cc&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==th&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vt extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new P,co=new Z;let xp=0;class Lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qc&&(e.usage=this.usage),e}}class od extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ad extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ve extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vp=0;const mn=new Ge,Ua=new pt,ms=new P,hn=new Un,sr=new Un,Bt=new P;class dt extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(id(e)?ad:od)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ve(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(hn.min,sr.min),hn.expandByPoint(Bt),Bt.addVectors(hn.max,sr.max),hn.expandByPoint(Bt)):(hn.expandByPoint(sr.min),hn.expandByPoint(sr.max))}hn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Bt.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(e,c),Bt.add(ms)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new P,l[A]=new P;const c=new P,h=new P,u=new P,d=new Z,f=new Z,g=new Z,_=new P,m=new P;function p(A,w,v){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[A].add(_),a[w].add(_),a[v].add(_),l[A].add(m),l[w].add(m),l[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let A=0,w=y.length;A<w;++A){const v=y[A],C=v.start,L=v.count;for(let F=C,B=C+L;F<B;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const M=new P,x=new P,b=new P,S=new P;function E(A){b.fromBufferAttribute(i,A),S.copy(b);const w=a[A];M.copy(w),M.sub(b.multiplyScalar(b.dot(w))).normalize(),x.crossVectors(S,w);const C=x.dot(l[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,C)}for(let A=0,w=y.length;A<w;++A){const v=y[A],C=v.start,L=v.count;for(let F=C,B=C+L;F<B;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Lt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gh=new Ge,Bi=new Wr,lo=new Zn,_h=new P,ho=new P,uo=new P,fo=new P,Fa=new P,po=new P,xh=new P,mo=new P;class D extends pt{constructor(e=new dt,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Fa.fromBufferAttribute(u,e),o?po.addScaledVector(Fa,h):po.addScaledVector(Fa.sub(t),h))}t.add(po)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),Bi.copy(e.ray).recast(e.near),!(lo.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(lo,_h)===null||Bi.origin.distanceToSquared(_h)>(e.far-e.near)**2))&&(gh.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(gh),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,b=M;x<b;x+=3){const S=a.getX(x),E=a.getX(x+1),A=a.getX(x+2);i=go(this,p,e,n,c,h,u,S,E,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);i=go(this,o,e,n,c,h,u,y,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,b=M;x<b;x+=3){const S=x,E=x+1,A=x+2;i=go(this,p,e,n,c,h,u,S,E,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,M=m+1,x=m+2;i=go(this,o,e,n,c,h,u,y,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Mp(s,e,t,n,i,r,o,a){let l;if(e.side===$t?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Kn,a),l===null)return null;mo.copy(a),mo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(mo);return c<t.near||c>t.far?null:{distance:c,point:mo.clone(),object:s}}function go(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ho),s.getVertexPosition(l,uo),s.getVertexPosition(c,fo);const h=Mp(s,e,t,n,ho,uo,fo,xh);if(h){const u=new P;vn.getBarycoord(xh,ho,uo,fo,u),i&&(h.uv=vn.getInterpolatedAttribute(i,a,l,c,u,new Z)),r&&(h.uv1=vn.getInterpolatedAttribute(r,a,l,c,u,new Z)),o&&(h.normal=vn.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};vn.getNormal(ho,uo,fo,d.normal),h.face=d,h.barycoord=u}return h}class se extends dt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(u,2));function g(_,m,p,y,M,x,b,S,E,A,w){const v=x/E,C=b/A,L=x/2,F=b/2,B=S/2,U=E+1,O=A+1;let Y=0,z=0;const q=new P;for(let ue=0;ue<O;ue++){const Se=ue*C-F;for(let G=0;G<U;G++){const J=G*v-L;q[_]=J*y,q[m]=Se*M,q[p]=B,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=S>0?1:-1,h.push(q.x,q.y,q.z),u.push(G/E),u.push(1-ue/A),Y+=1}}for(let ue=0;ue<A;ue++)for(let Se=0;Se<E;Se++){const G=d+Se+U*ue,J=d+Se+U*(ue+1),le=d+(Se+1)+U*(ue+1),ae=d+(Se+1)+U*ue;l.push(G,J,ae),l.push(J,le,ae),z+=6}a.addGroup(f,z,w),f+=z,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new se(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Jt(s){const e={};for(let t=0;t<s.length;t++){const n=Bs(s[t]);for(const i in n)e[i]=n[i]}return e}function yp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function cd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Ji={clone:Bs,merge:Jt};var wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qt extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wp,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=yp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ld extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new P,vh=new Z,Mh=new Z;class Yt extends ld{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,vh,Mh),t.subVectors(Mh,vh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gs=-90,_s=1;class bp extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yt(gs,_s,e,t);i.layers=this.layers,this.add(i);const r=new Yt(gs,_s,e,t);r.layers=this.layers,this.add(r);const o=new Yt(gs,_s,e,t);o.layers=this.layers,this.add(o);const a=new Yt(gs,_s,e,t);a.layers=this.layers,this.add(a);const l=new Yt(gs,_s,e,t);l.layers=this.layers,this.add(l);const c=new Yt(gs,_s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$o)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hd extends Ut{constructor(e=[],t=Us,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tp extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new hd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new se(5,5,5),r=new qt({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:mi});r.uniforms.tEquirect.value=t;const o=new D(i,r),a=t.minFilter;return t.minFilter===Xn&&(t.minFilter=sn),new bp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class qe extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ep={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ep)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ml{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(e),this.density=t}clone(){return new Ml(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ud extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qc,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new P;class kr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Sn extends rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xs;const rr=new P,vs=new P,Ms=new P,ys=new Z,or=new Z,fd=new Ge,_o=new P,ar=new P,xo=new P,yh=new Z,Ba=new Z,wh=new Z;class On extends pt{constructor(e=new Sn){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new dd(t,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new kr(n,3,0,!1)),xs.setAttribute("uv",new kr(n,2,3,!1))}this.geometry=xs,this.material=e,this.center=new Z(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),fd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-Ms.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;vo(_o.set(-.5,-.5,0),Ms,o,vs,i,r),vo(ar.set(.5,-.5,0),Ms,o,vs,i,r),vo(xo.set(.5,.5,0),Ms,o,vs,i,r),yh.set(0,0),Ba.set(1,0),wh.set(1,1);let a=e.ray.intersectTriangle(_o,ar,xo,!1,rr);if(a===null&&(vo(ar.set(-.5,.5,0),Ms,o,vs,i,r),Ba.set(0,1),a=e.ray.intersectTriangle(_o,xo,ar,!1,rr),a===null))return;const l=e.ray.origin.distanceTo(rr);l<e.near||l>e.far||t.push({distance:l,point:rr.clone(),uv:vn.getInterpolation(rr,_o,ar,xo,yh,Ba,wh,new Z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function vo(s,e,t,n,i,r){ys.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(or.x=r*ys.x-i*ys.y,or.y=i*ys.x+r*ys.y):or.copy(ys),s.copy(e),s.x+=or.x,s.y+=or.y,s.applyMatrix4(fd)}const Sh=new P,bh=new lt,Th=new lt,Ap=new P,Eh=new Ge,Mo=new P,ka=new Zn,Ah=new Ge,za=new Wr;class Rp extends D{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$l,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Un),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mo),this.boundingBox.expandByPoint(Mo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mo),this.boundingSphere.expandByPoint(Mo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ka.copy(this.boundingSphere),ka.applyMatrix4(i),e.ray.intersectsSphere(ka)!==!1&&(Ah.copy(i).invert(),za.copy(e.ray).applyMatrix4(Ah),!(this.boundingBox!==null&&za.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,za)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$l?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Af?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;bh.fromBufferAttribute(i.attributes.skinIndex,e),Th.fromBufferAttribute(i.attributes.skinWeight,e),Sh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Th.getComponent(r);if(o!==0){const a=bh.getComponent(r);Eh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ap.copy(Sh).applyMatrix4(Eh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class pd extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class md extends Ut{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Zt,h=Zt,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rh=new Ge,Cp=new Ge;class yl{constructor(e=[],t=[]){this.uuid=wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Cp;Rh.multiplyMatrices(a,t[r]),Rh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new yl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new md(t,e,e,Mn,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new pd),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class jc extends Lt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ws=new Ge,Ch=new Ge,yo=[],Ph=new Un,Pp=new Ge,cr=new D,lr=new Zn;class Ht extends D{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Pp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),Ph.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(Ph)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),lr.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),e.ray.intersectsSphere(lr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ws),Ch.multiplyMatrices(n,ws),cr.matrixWorld=Ch,cr.raycast(e,yo);for(let o=0,a=yo.length;o<a;o++){const l=yo[o];l.instanceId=r,l.object=this,t.push(l)}yo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new md(new Float32Array(i*this.count),i,this.count,dl,Ln));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ha=new P,Ip=new P,Lp=new nt;class Ri{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ha.subVectors(n,t).cross(Ip.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ha),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lp.getNormalMatrix(e),i=this.coplanarPoint(Ha).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Zn,Dp=new Z(.5,.5),wo=new P;class wl{constructor(e=new Ri,t=new Ri,n=new Ri,i=new Ri,r=new Ri,o=new Ri){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],M=r[13],x=r[14],b=r[15];if(i[0].setComponents(c-o,f-h,p-g,b-y).normalize(),i[1].setComponents(c+o,f+h,p+g,b+y).normalize(),i[2].setComponents(c+a,f+u,p+_,b+M).normalize(),i[3].setComponents(c-a,f-u,p-_,b-M).normalize(),n)i[4].setComponents(l,d,m,x).normalize(),i[5].setComponents(c-l,f-d,p-m,b-x).normalize();else if(i[4].setComponents(c-l,f-d,p-m,b-x).normalize(),t===Yn)i[5].setComponents(c+l,f+d,p+m,b+x).normalize();else if(t===$o)i[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);const t=Dp.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(wo.x=i.normal.x>0?e.max.x:e.min.x,wo.y=i.normal.y>0?e.max.y:e.min.y,wo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yr extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zo=new P,Qo=new P,Ih=new Ge,hr=new Wr,So=new Zn,Va=new P,Lh=new P;class Sl extends pt{constructor(e=new dt,t=new yr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Zo.fromBufferAttribute(t,i-1),Qo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Zo.distanceTo(Qo);e.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(i),So.radius+=r,e.ray.intersectsSphere(So)===!1)return;Ih.copy(i).invert(),hr.copy(e.ray).applyMatrix4(Ih);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),y=h.getX(_+1),M=bo(this,e,hr,l,p,y,_);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=bo(this,e,hr,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=bo(this,e,hr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=bo(this,e,hr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function bo(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Zo.fromBufferAttribute(a,i),Qo.fromBufferAttribute(a,r),t.distanceSqToSegment(Zo,Qo,Va,Lh)>n)return;Va.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Va);if(!(c<e.near||c>e.far))return{distance:c,point:Lh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Dh=new P,Nh=new P;class Kc extends Sl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Dh.fromBufferAttribute(t,i),Nh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Dh.distanceTo(Nh);e.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Np extends Sl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Es extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Uh=new Ge,Jc=new Wr,To=new Zn,Eo=new P;class Go extends pt{constructor(e=new dt,t=new Es){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(i),To.radius+=r,e.ray.intersectsSphere(To)===!1)return;Uh.copy(i).invert(),Jc.copy(e.ray).applyMatrix4(Uh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Eo.fromBufferAttribute(u,m),Fh(Eo,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Eo.fromBufferAttribute(u,g),Fh(Eo,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fh(s,e,t,n,i,r,o){const a=Jc.distanceSqToPoint(s);if(a<t){const l=new P;Jc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ai extends Ut{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gd extends Ut{constructor(e,t,n=Ki,i,r,o,a=Zt,l=Zt,c,h=Dr,u=1){if(h!==Dr&&h!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _d extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bl extends dt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,_=i+1,m=new P,p=new P;for(let y=0;y<=g;y++){let M=0,x=0,b=0,S=0;if(y<=n){const w=y/n,v=w*Math.PI/2;x=-h-e*Math.cos(v),b=e*Math.sin(v),S=-e*Math.cos(v),M=w*u}else if(y<=n+r){const w=(y-n)/r;x=-h+w*t,b=e,S=0,M=u+w*d}else{const w=(y-n-r)/n,v=w*Math.PI/2;x=h+e*Math.sin(v),b=e*Math.cos(v),S=e*Math.sin(v),M=u+d+w*u}const E=Math.max(0,Math.min(1,M/f));let A=0;y===0?A=.5/i:y===g&&(A=-.5/i);for(let w=0;w<=i;w++){const v=w/i,C=v*Math.PI*2,L=Math.sin(C),F=Math.cos(C);p.x=-b*F,p.y=x,p.z=b*L,a.push(p.x,p.y,p.z),m.set(-b*F,S,b*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(v+A,E)}if(y>0){const w=(y-1)*_;for(let v=0;v<i;v++){const C=w+v,L=w+v+1,F=y*_+v,B=y*_+v+1;o.push(C,L,F),o.push(L,B,F)}}}this.setIndex(o),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ra extends dt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new P,h=new Z;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ve(o,3)),this.setAttribute("normal",new Ve(a,3)),this.setAttribute("uv",new Ve(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class je extends dt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(d,3)),this.setAttribute("uv",new Ve(f,2));function y(){const x=new P,b=new P;let S=0;const E=(t-e)/n;for(let A=0;A<=r;A++){const w=[],v=A/r,C=v*(t-e)+e;for(let L=0;L<=i;L++){const F=L/i,B=F*l+a,U=Math.sin(B),O=Math.cos(B);b.x=C*U,b.y=-v*n+m,b.z=C*O,u.push(b.x,b.y,b.z),x.set(U,E,O).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-v),w.push(g++)}_.push(w)}for(let A=0;A<i;A++)for(let w=0;w<r;w++){const v=_[w][A],C=_[w+1][A],L=_[w+1][A+1],F=_[w][A+1];(e>0||w!==0)&&(h.push(v,C,F),S+=3),(t>0||w!==r-1)&&(h.push(C,L,F),S+=3)}c.addGroup(p,S,0),p+=S}function M(x){const b=g,S=new Z,E=new P;let A=0;const w=x===!0?e:t,v=x===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;const C=g;for(let L=0;L<=i;L++){const B=L/i*l+a,U=Math.cos(B),O=Math.sin(B);E.x=w*O,E.y=m*v,E.z=w*U,u.push(E.x,E.y,E.z),d.push(0,v,0),S.x=U*.5+.5,S.y=O*.5*v+.5,f.push(S.x,S.y),g++}for(let L=0;L<i;L++){const F=b+L,B=C+L;x===!0?h.push(B,B+1,F):h.push(B+1,B,F),A+=3}c.addGroup(p,A,x===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new je(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jn extends je{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new jn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xr extends dt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Ve(r,3)),this.setAttribute("normal",new Ve(r.slice(),3)),this.setAttribute("uv",new Ve(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new P,x=new P,b=new P;for(let S=0;S<t.length;S+=3)f(t[S+0],M),f(t[S+1],x),f(t[S+2],b),l(M,x,b,y)}function l(y,M,x,b){const S=b+1,E=[];for(let A=0;A<=S;A++){E[A]=[];const w=y.clone().lerp(x,A/S),v=M.clone().lerp(x,A/S),C=S-A;for(let L=0;L<=C;L++)L===0&&A===S?E[A][L]=w:E[A][L]=w.clone().lerp(v,L/C)}for(let A=0;A<S;A++)for(let w=0;w<2*(S-A)-1;w++){const v=Math.floor(w/2);w%2===0?(d(E[A][v+1]),d(E[A+1][v]),d(E[A][v])):(d(E[A][v+1]),d(E[A+1][v+1]),d(E[A+1][v]))}}function c(y){const M=new P;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(y),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){const y=new P;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const x=m(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;o.push(x,1-b)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const M=o[y+0],x=o[y+2],b=o[y+4],S=Math.max(M,x,b),E=Math.min(M,x,b);S>.9&&E<.1&&(M<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,M){const x=y*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function g(){const y=new P,M=new P,x=new P,b=new P,S=new Z,E=new Z,A=new Z;for(let w=0,v=0;w<r.length;w+=9,v+=6){y.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),S.set(o[v+0],o[v+1]),E.set(o[v+2],o[v+3]),A.set(o[v+4],o[v+5]),b.copy(y).add(M).add(x).divideScalar(3);const C=m(b);_(S,v+0,y,C),_(E,v+2,M,C),_(A,v+4,x,C)}}function _(y,M,x,b){b<0&&y.x===1&&(o[M]=y.x-1),x.x===0&&x.z===0&&(o[M]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.vertices,e.indices,e.radius,e.details)}}class Is extends Xr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Is(e.radius,e.detail)}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Z:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,i=[],r=[],o=[],a=new P,l=new Ge;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(st(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(st(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Tl extends Qn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Z){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Up extends Tl{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function El(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Ao=new P,Ga=new El,Wa=new El,Xa=new El;class ks extends Qn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Ao.subVectors(i[0],i[1]).add(i[0]),c=Ao);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ao.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ao),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ga.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Wa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Xa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ga.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Wa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Xa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ga.calc(l),Wa.calc(l),Xa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Oh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Fp(s,e){const t=1-s;return t*t*e}function Op(s,e){return 2*(1-s)*s*e}function Bp(s,e){return s*s*e}function wr(s,e,t,n){return Fp(s,e)+Op(s,t)+Bp(s,n)}function kp(s,e){const t=1-s;return t*t*t*e}function zp(s,e){const t=1-s;return 3*t*t*s*e}function Hp(s,e){return 3*(1-s)*s*s*e}function Vp(s,e){return s*s*s*e}function Sr(s,e,t,n,i){return kp(s,e)+zp(s,t)+Hp(s,n)+Vp(s,i)}class xd extends Qn{constructor(e=new Z,t=new Z,n=new Z,i=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Z){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(e,i.x,r.x,o.x,a.x),Sr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gp extends Qn{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(e,i.x,r.x,o.x,a.x),Sr(e,i.y,r.y,o.y,a.y),Sr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vd extends Qn{constructor(e=new Z,t=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wp extends Qn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Md extends Qn{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(wr(e,i.x,r.x,o.x),wr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yd extends Qn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(wr(e,i.x,r.x,o.x),wr(e,i.y,r.y,o.y),wr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wd extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Oh(a,l.x,c.x,h.x,u.x),Oh(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Z().fromArray(i))}return this}}var ea=Object.freeze({__proto__:null,ArcCurve:Up,CatmullRomCurve3:ks,CubicBezierCurve:xd,CubicBezierCurve3:Gp,EllipseCurve:Tl,LineCurve:vd,LineCurve3:Wp,QuadraticBezierCurve:Md,QuadraticBezierCurve3:yd,SplineCurve:wd});class Xp extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ea[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ea[i.type]().fromJSON(i))}return this}}class Bh extends Xp{constructor(e){super(),this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new vd(this.currentPoint.clone(),new Z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Md(this.currentPoint.clone(),new Z(e,t),new Z(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new xd(this.currentPoint.clone(),new Z(e,t),new Z(n,i),new Z(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new wd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Tl(e,t,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ts extends Bh{constructor(e){super(e),this.uuid=wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Bh().fromJSON(i))}return this}}function Yp(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Sd(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=$p(s,e,r,t)),s.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){const f=s[d],g=s[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return zr(r,o,t,a,l,c,0),o}function Sd(s,e,t,n,i){let r;if(i===cm(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=kh(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=kh(o/n|0,s[o],s[o+1],r);return r&&zs(r,r.next)&&(Vr(r),r=r.next),r}function $i(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(zs(t,t.next)||It(t.prev,t,t.next)===0)){if(Vr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&nm(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?jp(s,n,i,r):qp(s)){e.push(l.i,s.i,c.i),Vr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Kp($i(s),e),zr(s,e,t,n,i,r,2)):o===2&&Jp(s,e,t,n,i,r):zr($i(s),e,t,n,i,r,1);break}}}function qp(s){const e=s.prev,t=s,n=s.next;if(It(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&gr(i,a,r,l,o,c,g.x,g.y)&&It(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jp(s,e,t,n){const i=s.prev,r=s,o=s.next;if(It(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),_=Math.max(a,l,c),m=Math.max(h,u,d),p=$c(f,g,e,t,n),y=$c(_,m,e,t,n);let M=s.prevZ,x=s.nextZ;for(;M&&M.z>=p&&x&&x.z<=y;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&gr(a,h,l,u,c,d,M.x,M.y)&&It(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&gr(a,h,l,u,c,d,x.x,x.y)&&It(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&gr(a,h,l,u,c,d,M.x,M.y)&&It(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&gr(a,h,l,u,c,d,x.x,x.y)&&It(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Kp(s,e){let t=s;do{const n=t.prev,i=t.next.next;!zs(n,i)&&Td(n,t,t.next,i)&&Hr(n,i)&&Hr(i,n)&&(e.push(n.i,t.i,i.i),Vr(t),Vr(t.next),t=s=i),t=t.next}while(t!==s);return $i(t)}function Jp(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rm(o,a)){let l=Ed(o,a);o=$i(o,o.next),l=$i(l,l.next),zr(o,e,t,n,i,r,0),zr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function $p(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Sd(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(sm(c))}i.sort(Zp);for(let r=0;r<i.length;r++)t=Qp(i[r],t);return t}function Zp(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Qp(s,e){const t=em(s,e);if(!t)return e;const n=Ed(t,s);return $i(n,n.next),$i(t,t.next)}function em(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(zs(s,t))return t;do{if(zs(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&bd(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);Hr(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&tm(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function tm(s,e){return It(s.prev,s,e.prev)<0&&It(e.next,s,s.next)<0}function nm(s,e,t,n){let i=s;do i.z===0&&(i.z=$c(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,im(i)}function im(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function $c(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function sm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function bd(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function gr(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&bd(s,e,t,n,i,r,o,a)}function rm(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!om(s,e)&&(Hr(s,e)&&Hr(e,s)&&am(s,e)&&(It(s.prev,s,e.prev)||It(s,e.prev,e))||zs(s,e)&&It(s.prev,s,s.next)>0&&It(e.prev,e,e.next)>0)}function It(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function zs(s,e){return s.x===e.x&&s.y===e.y}function Td(s,e,t,n){const i=Co(It(s,e,t)),r=Co(It(s,e,n)),o=Co(It(t,n,s)),a=Co(It(t,n,e));return!!(i!==r&&o!==a||i===0&&Ro(s,t,e)||r===0&&Ro(s,n,e)||o===0&&Ro(t,s,n)||a===0&&Ro(t,e,n))}function Ro(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Co(s){return s>0?1:s<0?-1:0}function om(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Td(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Hr(s,e){return It(s.prev,s,s.next)<0?It(s,e,s.next)>=0&&It(s,s.prev,e)>=0:It(s,e,s.prev)<0||It(s,s.next,e)<0}function am(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Ed(s,e){const t=Zc(s.i,s.x,s.y),n=Zc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function kh(s,e,t,n){const i=Zc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Vr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Zc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cm(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class lm{static triangulate(e,t,n=2){return Yp(e,t,n)}}class di{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return di.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];zh(e),Hh(n,e);let o=e.length;t.forEach(zh);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Hh(n,t[l]);const a=lm.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function zh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Hh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Yr extends dt{constructor(e=new ts([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ve(i,3)),this.setAttribute("uv",new Ve(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:hm;let M,x=!1,b,S,E,A;p&&(M=p.getSpacedPoints(h),x=!0,d=!1,b=p.computeFrenetFrames(h,!1),S=new P,E=new P,A=new P),d||(m=0,f=0,g=0,_=0);const w=a.extractPoints(c);let v=w.shape;const C=w.holes;if(!di.isClockWise(v)){v=v.reverse();for(let he=0,ce=C.length;he<ce;he++){const re=C[he];di.isClockWise(re)&&(C[he]=re.reverse())}}function F(he){const re=10000000000000001e-36;let oe=he[0];for(let Te=1;Te<=he.length;Te++){const me=Te%he.length,te=he[me],Ze=te.x-oe.x,Je=te.y-oe.y,I=Ze*Ze+Je*Je,T=Math.max(Math.abs(te.x),Math.abs(te.y),Math.abs(oe.x),Math.abs(oe.y)),X=re*T*T;if(I<=X){he.splice(me,1),Te--;continue}oe=te}}F(v),C.forEach(F);const B=C.length,U=v;for(let he=0;he<B;he++){const ce=C[he];v=v.concat(ce)}function O(he,ce,re){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(ce,re)}const Y=v.length;function z(he,ce,re){let oe,Te,me;const te=he.x-ce.x,Ze=he.y-ce.y,Je=re.x-he.x,I=re.y-he.y,T=te*te+Ze*Ze,X=te*I-Ze*Je;if(Math.abs(X)>Number.EPSILON){const Q=Math.sqrt(T),ie=Math.sqrt(Je*Je+I*I),ee=ce.x-Ze/Q,Be=ce.y+te/Q,be=re.x-I/ie,Re=re.y+Je/ie,Ue=((be-ee)*I-(Re-Be)*Je)/(te*I-Ze*Je);oe=ee+te*Ue-he.x,Te=Be+Ze*Ue-he.y;const ve=oe*oe+Te*Te;if(ve<=2)return new Z(oe,Te);me=Math.sqrt(ve/2)}else{let Q=!1;te>Number.EPSILON?Je>Number.EPSILON&&(Q=!0):te<-Number.EPSILON?Je<-Number.EPSILON&&(Q=!0):Math.sign(Ze)===Math.sign(I)&&(Q=!0),Q?(oe=-Ze,Te=te,me=Math.sqrt(T)):(oe=te,Te=Ze,me=Math.sqrt(T/2))}return new Z(oe/me,Te/me)}const q=[];for(let he=0,ce=U.length,re=ce-1,oe=he+1;he<ce;he++,re++,oe++)re===ce&&(re=0),oe===ce&&(oe=0),q[he]=z(U[he],U[re],U[oe]);const ue=[];let Se,G=q.concat();for(let he=0,ce=B;he<ce;he++){const re=C[he];Se=[];for(let oe=0,Te=re.length,me=Te-1,te=oe+1;oe<Te;oe++,me++,te++)me===Te&&(me=0),te===Te&&(te=0),Se[oe]=z(re[oe],re[me],re[te]);ue.push(Se),G=G.concat(Se)}let J;if(m===0)J=di.triangulateShape(U,C);else{const he=[],ce=[];for(let re=0;re<m;re++){const oe=re/m,Te=f*Math.cos(oe*Math.PI/2),me=g*Math.sin(oe*Math.PI/2)+_;for(let te=0,Ze=U.length;te<Ze;te++){const Je=O(U[te],q[te],me);Ee(Je.x,Je.y,-Te),oe===0&&he.push(Je)}for(let te=0,Ze=B;te<Ze;te++){const Je=C[te];Se=ue[te];const I=[];for(let T=0,X=Je.length;T<X;T++){const Q=O(Je[T],Se[T],me);Ee(Q.x,Q.y,-Te),oe===0&&I.push(Q)}oe===0&&ce.push(I)}}J=di.triangulateShape(he,ce)}const le=J.length,ae=g+_;for(let he=0;he<Y;he++){const ce=d?O(v[he],G[he],ae):v[he];x?(E.copy(b.normals[0]).multiplyScalar(ce.x),S.copy(b.binormals[0]).multiplyScalar(ce.y),A.copy(M[0]).add(E).add(S),Ee(A.x,A.y,A.z)):Ee(ce.x,ce.y,0)}for(let he=1;he<=h;he++)for(let ce=0;ce<Y;ce++){const re=d?O(v[ce],G[ce],ae):v[ce];x?(E.copy(b.normals[he]).multiplyScalar(re.x),S.copy(b.binormals[he]).multiplyScalar(re.y),A.copy(M[he]).add(E).add(S),Ee(A.x,A.y,A.z)):Ee(re.x,re.y,u/h*he)}for(let he=m-1;he>=0;he--){const ce=he/m,re=f*Math.cos(ce*Math.PI/2),oe=g*Math.sin(ce*Math.PI/2)+_;for(let Te=0,me=U.length;Te<me;Te++){const te=O(U[Te],q[Te],oe);Ee(te.x,te.y,u+re)}for(let Te=0,me=C.length;Te<me;Te++){const te=C[Te];Se=ue[Te];for(let Ze=0,Je=te.length;Ze<Je;Ze++){const I=O(te[Ze],Se[Ze],oe);x?Ee(I.x,I.y+M[h-1].y,M[h-1].x+re):Ee(I.x,I.y,u+re)}}}H(),j();function H(){const he=i.length/3;if(d){let ce=0,re=Y*ce;for(let oe=0;oe<le;oe++){const Te=J[oe];ye(Te[2]+re,Te[1]+re,Te[0]+re)}ce=h+m*2,re=Y*ce;for(let oe=0;oe<le;oe++){const Te=J[oe];ye(Te[0]+re,Te[1]+re,Te[2]+re)}}else{for(let ce=0;ce<le;ce++){const re=J[ce];ye(re[2],re[1],re[0])}for(let ce=0;ce<le;ce++){const re=J[ce];ye(re[0]+Y*h,re[1]+Y*h,re[2]+Y*h)}}n.addGroup(he,i.length/3-he,0)}function j(){const he=i.length/3;let ce=0;ge(U,ce),ce+=U.length;for(let re=0,oe=C.length;re<oe;re++){const Te=C[re];ge(Te,ce),ce+=Te.length}n.addGroup(he,i.length/3-he,1)}function ge(he,ce){let re=he.length;for(;--re>=0;){const oe=re;let Te=re-1;Te<0&&(Te=he.length-1);for(let me=0,te=h+m*2;me<te;me++){const Ze=Y*me,Je=Y*(me+1),I=ce+oe+Ze,T=ce+Te+Ze,X=ce+Te+Je,Q=ce+oe+Je;Oe(I,T,X,Q)}}}function Ee(he,ce,re){l.push(he),l.push(ce),l.push(re)}function ye(he,ce,re){et(he),et(ce),et(re);const oe=i.length/3,Te=y.generateTopUV(n,i,oe-3,oe-2,oe-1);N(Te[0]),N(Te[1]),N(Te[2])}function Oe(he,ce,re,oe){et(he),et(ce),et(oe),et(ce),et(re),et(oe);const Te=i.length/3,me=y.generateSideWallUV(n,i,Te-6,Te-3,Te-2,Te-1);N(me[0]),N(me[1]),N(me[3]),N(me[1]),N(me[2]),N(me[3])}function et(he){i.push(l[he*3+0]),i.push(l[he*3+1]),i.push(l[he*3+2])}function N(he){r.push(he.x),r.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return um(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ea[i.type]().fromJSON(i)),new Yr(n,e.options)}}const hm={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Z(r,o),new Z(a,l),new Z(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Z(o,1-l),new Z(c,1-u),new Z(d,1-g),new Z(_,1-p)]:[new Z(a,1-l),new Z(h,1-u),new Z(f,1-g),new Z(m,1-p)]}};function um(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Al extends Xr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Al(e.radius,e.detail)}}class qr extends dt{constructor(e=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=st(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,u=new P,d=new Z,f=new P,g=new P,_=new P;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=t;y++){const M=n+y*h*i,x=Math.sin(M),b=Math.cos(M);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*x,u.y=e[S].y,u.z=e[S].x*b,o.push(u.x,u.y,u.z),d.x=y/t,d.y=S/(e.length-1),a.push(d.x,d.y);const E=l[3*S+0]*x,A=l[3*S+1],w=l[3*S+0]*b;c.push(E,A,w)}}for(let y=0;y<t;y++)for(let M=0;M<e.length-1;M++){const x=M+y*e.length,b=x,S=x+e.length,E=x+e.length+1,A=x+1;r.push(b,S,A),r.push(E,A,S)}this.setIndex(r),this.setAttribute("position",new Ve(o,3)),this.setAttribute("uv",new Ve(a,2)),this.setAttribute("normal",new Ve(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.points,e.segments,e.phiStart,e.phiLength)}}class oa extends Xr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oa(e.radius,e.detail)}}class ft extends dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-o;for(let M=0;M<c;M++){const x=M*u-r;g.push(x,-y,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const M=y+c*p,x=y+c*(p+1),b=y+1+c*(p+1),S=y+1+c*p;f.push(M,x,S),f.push(x,b,S)}this.setIndex(f),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.width,e.height,e.widthSegments,e.heightSegments)}}class jr extends dt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new P,g=new Z;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,M=y,x=y+n+1,b=y+n+2,S=y+1;a.push(M,x,S),a.push(x,b,S)}}this.setIndex(a),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class aa extends dt{constructor(e=new ts([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ve(i,3)),this.setAttribute("normal",new Ve(r,3)),this.setAttribute("uv",new Ve(o,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;di.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];di.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=di.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){const y=_[m],M=y[0]+u,x=y[1]+u,b=y[2]+u;n.push(M,x,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return dm(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new aa(n,e.curveSegments)}}function dm(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Et extends dt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],M=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const S=b/t;u.x=-e*Math.cos(i+S*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(i+S*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(S+x,1-M),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const M=h[p][y+1],x=h[p][y],b=h[p+1][y],S=h[p+1][y+1];(p!==0||o>0)&&f.push(M,x,S),(p!==n-1||l<Math.PI)&&f.push(x,b,S)}this.setIndex(f),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ii extends dt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Hs extends dt{constructor(e=new yd(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,l=new P,c=new Z;let h=new P;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(d,3)),this.setAttribute("uv",new Ve(f,2));function _(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),y(),p()}function m(M){h=e.getPointAt(M/t,h);const x=o.normals[M],b=o.binormals[M];for(let S=0;S<=i;S++){const E=S/i*Math.PI*2,A=Math.sin(E),w=-Math.cos(E);l.x=w*x.x+A*b.x,l.y=w*x.y+A*b.y,l.z=w*x.z+A*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=t;M++)for(let x=1;x<=i;x++){const b=(i+1)*(M-1)+(x-1),S=(i+1)*M+(x-1),E=(i+1)*M+x,A=(i+1)*(M-1)+x;g.push(b,S,A),g.push(S,E,A)}}function y(){for(let M=0;M<=t;M++)for(let x=0;x<=i;x++)c.x=M/t,c.y=x/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Hs(new ea[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class fm extends qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pe extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ei extends pe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pm extends rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _e(16777215),this.specular=new _e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mm extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gm extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Po(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function _m(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function xm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Vh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Ad(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Kr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vm extends Kr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zl,endingEnd:Zl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ql:r=e,a=2*t-n;break;case eh:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ql:o=e,l=2*n-t;break;case eh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+y*o[c+b]+M*o[l+b]+x*o[u+b];return r}}class Mm extends Kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class ym extends Kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Po(t,this.TimeBufferType),this.values=Po(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Po(e.times,Array),values:Po(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ym(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ur:t=this.InterpolantFactoryMethodDiscrete;break;case Fr:t=this.InterpolantFactoryMethodLinear;break;case ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return Fr;case this.InterpolantFactoryMethodSmooth:return ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&_m(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ga,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Fr;class Ks extends Bn{constructor(e,t,n){super(e,t,n)}}Ks.prototype.ValueTypeName="bool";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Ur;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Rd extends Bn{constructor(e,t,n,i){super(e,t,n,i)}}Rd.prototype.ValueTypeName="color";class Vs extends Bn{constructor(e,t,n,i){super(e,t,n,i)}}Vs.prototype.ValueTypeName="number";class wm extends Kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Di.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Gs extends Bn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new wm(this.times,this.values,this.getValueSize(),e)}}Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends Bn{constructor(e,t,n){super(e,t,n)}}Js.prototype.ValueTypeName="string";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Ur;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends Bn{constructor(e,t,n,i){super(e,t,n,i)}}Ws.prototype.ValueTypeName="vector";class Sm{constructor(e="",t=-1,n=[],i=Rf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=wn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Tm(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Bn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=xm(l);l=Vh(l,1,h),c=Vh(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Vs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Ad(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const M=d[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}i.push(new Vs(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Ws,f+".position",d,"pos",i),n(Gs,f+".quaternion",d,"rot",i),n(Ws,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function bm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vs;case"vector":case"vector2":case"vector3":case"vector4":return Ws;case"color":return Rd;case"quaternion":return Gs;case"bool":case"boolean":return Ks;case"string":return Js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Tm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=bm(s.type);if(s.times===void 0){const t=[],n=[];Ad(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const fi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Em{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Am=new Em;class ns{constructor(e){this.manager=e!==void 0?e:Am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ns.DEFAULT_MATERIAL_NAME="__DEFAULT";const ci={};class Rm extends Error{constructor(e,t){super(e),this.response=t}}class Rl extends ns{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=fi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ci[e]!==void 0){ci[e].push({onLoad:t,onProgress:n,onError:i});return}ci[e]=[],ci[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ci[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:M,value:x})=>{if(M)p.close();else{_+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let S=0,E=h.length;S<E;S++){const A=h[S];A.onProgress&&A.onProgress(b)}p.enqueue(x),y()}},M=>{p.error(M)})}}});return new Response(m)}else throw new Rm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{fi.add(`file:${e}`,c);const h=ci[e];delete ci[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ci[e];if(h===void 0)throw this.manager.itemError(e),c;delete ci[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ss=new WeakMap;class Cm extends ns{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=fi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ss.get(o);u===void 0&&(u=[],Ss.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=Or("img");function l(){h(),t&&t(this);const u=Ss.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Ss.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),fi.remove(`image:${e}`);const d=Ss.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Ss.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),fi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Cl extends ns{constructor(e){super(e)}load(e,t,n,i){const r=new Ut,o=new Cm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ca extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Pm extends ca{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ya=new Ge,Gh=new P,Wh=new P;class Pl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gh),Wh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wh),t.updateMatrixWorld(),Ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Im extends Pl{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Os*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Lm extends ca{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Im}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xh=new Ge,ur=new P,qa=new P;class Dm extends Pl{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ur.setFromMatrixPosition(e.matrixWorld),n.position.copy(ur),qa.copy(n.position),qa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qa),n.updateMatrixWorld(),i.makeTranslation(-ur.x,-ur.y,-ur.z),Xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xh,n.coordinateSystem,n.reversedDepth)}}class Cn extends ca{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class la extends ld{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Nm extends Pl{constructor(){super(new la(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Il extends ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Nm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class br{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ja=new WeakMap;class Um extends ns{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=fi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(ja.has(o)===!0)i&&i(ja.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return fi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ja.set(l,c),fi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});fi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Fm extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Om{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ll="\\[\\]\\.:\\/",Bm=new RegExp("["+Ll+"]","g"),Dl="[^"+Ll+"]",km="[^"+Ll.replace("\\.","")+"]",zm=/((?:WC+[\/:])*)/.source.replace("WC",Dl),Hm=/(WCOD+)?/.source.replace("WCOD",km),Vm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dl),Gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dl),Wm=new RegExp("^"+zm+Hm+Vm+Gm+"$"),Xm=["material","materials","bones","map"];class Ym{constructor(e,t,n){const i=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class _t{constructor(e,t,n){this.path=t,this.parsedPath=n||_t.parseTrackName(t),this.node=_t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new _t.Composite(e,t,n):new _t(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bm,"")}static parseTrackName(e){const t=Wm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Xm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=_t.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_t.Composite=Ym;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Yh=new Ge;class qm{constructor(e,t,n=0,i=1/0){this.ray=new Wr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new vl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yh),this}intersectObject(e,t=!0,n=[]){return Qc(e,this,n,t),n.sort(qh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Qc(e[i],this,n,t);return n.sort(qh),n}}function qh(s,e){return s.distance-e.distance}function Qc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Qc(r[o],e,t,!0)}}function jh(s,e,t,n){const i=jm(n);switch(t){case Zu:return s*e;case dl:return s*e/i.components*i.byteLength;case fl:return s*e/i.components*i.byteLength;case ed:return s*e*2/i.components*i.byteLength;case pl:return s*e*2/i.components*i.byteLength;case Qu:return s*e*3/i.components*i.byteLength;case Mn:return s*e*4/i.components*i.byteLength;case ml:return s*e*4/i.components*i.byteLength;case ko:case zo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ho:case Vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vc:case yc:return Math.max(s,16)*Math.max(e,8)/4;case xc:case Mc:return Math.max(s,8)*Math.max(e,8)/2;case wc:case Sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case kc:case zc:case Hc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Vc:case Gc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wc:case Xc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jm(s){switch(s){case Jn:case ju:return{byteLength:1,components:1};case Ir:case Ku:case qn:return{byteLength:2,components:1};case hl:case ul:return{byteLength:2,components:4};case Ki:case ll:case Ln:return{byteLength:4,components:1};case Ju:case $u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);function Cd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Km(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$m=`#ifdef USE_ALPHAHASH
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
#endif`,Zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n0=`#ifdef USE_AOMAP
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
#endif`,i0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s0=`#ifdef USE_BATCHING
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
#endif`,r0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,l0=`#ifdef USE_IRIDESCENCE
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
#endif`,h0=`#ifdef USE_BUMPMAP
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
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,v0=`#define PI 3.141592653589793
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
} // validated`,M0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y0=`vec3 transformedNormal = objectNormal;
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
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E0="gl_FragColor = linearToOutputTexel( gl_FragColor );",A0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O0=`#ifdef USE_GRADIENTMAP
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
}`,B0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H0=`uniform bool receiveShadow;
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
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,G0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q0=`PhysicalMaterial material;
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
#endif`,j0=`struct PhysicalMaterial {
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
}`,K0=`
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
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
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rg=`#if defined( USE_POINTS_UV )
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
#endif`,og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`#ifdef USE_MORPHTARGETS
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
#endif`,dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xg=`#ifdef USE_NORMALMAP
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
#endif`,vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ng=`float getShadowMask() {
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
}`,Ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Wg=`#ifdef USE_TRANSMISSION
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jg=`uniform sampler2D t2D;
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`#include <common>
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
}`,n_=`#if DEPTH_PACKING == 3200
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
}`,i_=`#define DISTANCE
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
}`,s_=`#define DISTANCE
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`uniform float scale;
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
}`,c_=`uniform vec3 diffuse;
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
}`,l_=`#include <common>
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
}`,h_=`uniform vec3 diffuse;
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
}`,u_=`#define LAMBERT
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
}`,d_=`#define LAMBERT
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
}`,f_=`#define MATCAP
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
}`,p_=`#define MATCAP
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
}`,m_=`#define NORMAL
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
}`,g_=`#define NORMAL
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
}`,__=`#define PHONG
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
}`,x_=`#define PHONG
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
}`,v_=`#define STANDARD
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
}`,M_=`#define STANDARD
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
}`,y_=`#define TOON
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
}`,w_=`#define TOON
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
}`,S_=`uniform float size;
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
}`,b_=`uniform vec3 diffuse;
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
}`,T_=`#include <common>
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
}`,E_=`uniform vec3 color;
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
}`,A_=`uniform float rotation;
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
}`,R_=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Jm,alphahash_pars_fragment:$m,alphamap_fragment:Zm,alphamap_pars_fragment:Qm,alphatest_fragment:e0,alphatest_pars_fragment:t0,aomap_fragment:n0,aomap_pars_fragment:i0,batching_pars_vertex:s0,batching_vertex:r0,begin_vertex:o0,beginnormal_vertex:a0,bsdfs:c0,iridescence_fragment:l0,bumpmap_pars_fragment:h0,clipping_planes_fragment:u0,clipping_planes_pars_fragment:d0,clipping_planes_pars_vertex:f0,clipping_planes_vertex:p0,color_fragment:m0,color_pars_fragment:g0,color_pars_vertex:_0,color_vertex:x0,common:v0,cube_uv_reflection_fragment:M0,defaultnormal_vertex:y0,displacementmap_pars_vertex:w0,displacementmap_vertex:S0,emissivemap_fragment:b0,emissivemap_pars_fragment:T0,colorspace_fragment:E0,colorspace_pars_fragment:A0,envmap_fragment:R0,envmap_common_pars_fragment:C0,envmap_pars_fragment:P0,envmap_pars_vertex:I0,envmap_physical_pars_fragment:V0,envmap_vertex:L0,fog_vertex:D0,fog_pars_vertex:N0,fog_fragment:U0,fog_pars_fragment:F0,gradientmap_pars_fragment:O0,lightmap_pars_fragment:B0,lights_lambert_fragment:k0,lights_lambert_pars_fragment:z0,lights_pars_begin:H0,lights_toon_fragment:G0,lights_toon_pars_fragment:W0,lights_phong_fragment:X0,lights_phong_pars_fragment:Y0,lights_physical_fragment:q0,lights_physical_pars_fragment:j0,lights_fragment_begin:K0,lights_fragment_maps:J0,lights_fragment_end:$0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:Q0,logdepthbuf_pars_vertex:eg,logdepthbuf_vertex:tg,map_fragment:ng,map_pars_fragment:ig,map_particle_fragment:sg,map_particle_pars_fragment:rg,metalnessmap_fragment:og,metalnessmap_pars_fragment:ag,morphinstance_vertex:cg,morphcolor_vertex:lg,morphnormal_vertex:hg,morphtarget_pars_vertex:ug,morphtarget_vertex:dg,normal_fragment_begin:fg,normal_fragment_maps:pg,normal_pars_fragment:mg,normal_pars_vertex:gg,normal_vertex:_g,normalmap_pars_fragment:xg,clearcoat_normal_fragment_begin:vg,clearcoat_normal_fragment_maps:Mg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:wg,opaque_fragment:Sg,packing:bg,premultiplied_alpha_fragment:Tg,project_vertex:Eg,dithering_fragment:Ag,dithering_pars_fragment:Rg,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Pg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Lg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Ng,skinbase_vertex:Ug,skinning_pars_vertex:Fg,skinning_vertex:Og,skinnormal_vertex:Bg,specularmap_fragment:kg,specularmap_pars_fragment:zg,tonemapping_fragment:Hg,tonemapping_pars_fragment:Vg,transmission_fragment:Gg,transmission_pars_fragment:Wg,uv_pars_fragment:Xg,uv_pars_vertex:Yg,uv_vertex:qg,worldpos_vertex:jg,background_vert:Kg,background_frag:Jg,backgroundCube_vert:$g,backgroundCube_frag:Zg,cube_vert:Qg,cube_frag:e_,depth_vert:t_,depth_frag:n_,distanceRGBA_vert:i_,distanceRGBA_frag:s_,equirect_vert:r_,equirect_frag:o_,linedashed_vert:a_,linedashed_frag:c_,meshbasic_vert:l_,meshbasic_frag:h_,meshlambert_vert:u_,meshlambert_frag:d_,meshmatcap_vert:f_,meshmatcap_frag:p_,meshnormal_vert:m_,meshnormal_frag:g_,meshphong_vert:__,meshphong_frag:x_,meshphysical_vert:v_,meshphysical_frag:M_,meshtoon_vert:y_,meshtoon_frag:w_,points_vert:S_,points_frag:b_,shadow_vert:T_,shadow_frag:E_,sprite_vert:A_,sprite_frag:R_},Ie={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Hn={basic:{uniforms:Jt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Jt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new _e(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Jt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Jt([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Jt([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new _e(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Jt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Jt([Ie.points,Ie.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Jt([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Jt([Ie.common,Ie.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Jt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Jt([Ie.sprite,Ie.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Jt([Ie.common,Ie.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Jt([Ie.lights,Ie.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Hn.physical={uniforms:Jt([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Io={r:0,b:0,g:0},zi=new Fn,C_=new Ge;function P_(s,e,t,n,i,r,o){const a=new _e(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const b=g(M);b===null?p(a,l):b&&b.isColor&&(p(b,1),x=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,x){const b=g(x);b&&(b.isCubeTexture||b.mapping===sa)?(h===void 0&&(h=new D(new se(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:Bs(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),zi.copy(x.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(C_.makeRotationFromEuler(zi)),h.material.toneMapped=at.getTransfer(b.colorSpace)!==mt,(u!==b||d!==b.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new D(new ft(2,2),new qt({name:"BackgroundMaterial",uniforms:Bs(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=at.getTransfer(b.colorSpace)!==mt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(Io,cd(s)),n.buffers.color.setClear(Io.r,Io.g,Io.b,x,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m,dispose:y}}function I_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(v,C,L,F,B){let U=!1;const O=u(F,L,C);r!==O&&(r=O,c(r.object)),U=f(v,F,L,B),U&&g(v,F,L,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,x(v,C,L,F),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,C,L){const F=L.wireframe===!0;let B=n[v.id];B===void 0&&(B={},n[v.id]=B);let U=B[C.id];U===void 0&&(U={},B[C.id]=U);let O=U[F];return O===void 0&&(O=d(l()),U[F]=O),O}function d(v){const C=[],L=[],F=[];for(let B=0;B<t;B++)C[B]=0,L[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:F,object:v,attributes:{},index:null}}function f(v,C,L,F){const B=r.attributes,U=C.attributes;let O=0;const Y=L.getAttributes();for(const z in Y)if(Y[z].location>=0){const ue=B[z];let Se=U[z];if(Se===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(Se=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(Se=v.instanceColor)),ue===void 0||ue.attribute!==Se||Se&&ue.data!==Se.data)return!0;O++}return r.attributesNum!==O||r.index!==F}function g(v,C,L,F){const B={},U=C.attributes;let O=0;const Y=L.getAttributes();for(const z in Y)if(Y[z].location>=0){let ue=U[z];ue===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor));const Se={};Se.attribute=ue,ue&&ue.data&&(Se.data=ue.data),B[z]=Se,O++}r.attributes=B,r.attributesNum=O,r.index=F}function _(){const v=r.newAttributes;for(let C=0,L=v.length;C<L;C++)v[C]=0}function m(v){p(v,0)}function p(v,C){const L=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;L[v]=1,F[v]===0&&(s.enableVertexAttribArray(v),F[v]=1),B[v]!==C&&(s.vertexAttribDivisor(v,C),B[v]=C)}function y(){const v=r.newAttributes,C=r.enabledAttributes;for(let L=0,F=C.length;L<F;L++)C[L]!==v[L]&&(s.disableVertexAttribArray(L),C[L]=0)}function M(v,C,L,F,B,U,O){O===!0?s.vertexAttribIPointer(v,C,L,B,U):s.vertexAttribPointer(v,C,L,F,B,U)}function x(v,C,L,F){_();const B=F.attributes,U=L.getAttributes(),O=C.defaultAttributeValues;for(const Y in U){const z=U[Y];if(z.location>=0){let q=B[Y];if(q===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(q=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(q=v.instanceColor)),q!==void 0){const ue=q.normalized,Se=q.itemSize,G=e.get(q);if(G===void 0)continue;const J=G.buffer,le=G.type,ae=G.bytesPerElement,H=le===s.INT||le===s.UNSIGNED_INT||q.gpuType===ll;if(q.isInterleavedBufferAttribute){const j=q.data,ge=j.stride,Ee=q.offset;if(j.isInstancedInterleavedBuffer){for(let ye=0;ye<z.locationSize;ye++)p(z.location+ye,j.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ye=0;ye<z.locationSize;ye++)m(z.location+ye);s.bindBuffer(s.ARRAY_BUFFER,J);for(let ye=0;ye<z.locationSize;ye++)M(z.location+ye,Se/z.locationSize,le,ue,ge*ae,(Ee+Se/z.locationSize*ye)*ae,H)}else{if(q.isInstancedBufferAttribute){for(let j=0;j<z.locationSize;j++)p(z.location+j,q.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let j=0;j<z.locationSize;j++)m(z.location+j);s.bindBuffer(s.ARRAY_BUFFER,J);for(let j=0;j<z.locationSize;j++)M(z.location+j,Se/z.locationSize,le,ue,Se*ae,Se/z.locationSize*j*ae,H)}}else if(O!==void 0){const ue=O[Y];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(z.location,ue);break;case 3:s.vertexAttrib3fv(z.location,ue);break;case 4:s.vertexAttrib4fv(z.location,ue);break;default:s.vertexAttrib1fv(z.location,ue)}}}}y()}function b(){A();for(const v in n){const C=n[v];for(const L in C){const F=C[L];for(const B in F)h(F[B].object),delete F[B];delete C[L]}delete n[v]}}function S(v){if(n[v.id]===void 0)return;const C=n[v.id];for(const L in C){const F=C[L];for(const B in F)h(F[B].object),delete F[B];delete C[L]}delete n[v.id]}function E(v){for(const C in n){const L=n[C];if(L[v.id]===void 0)continue;const F=L[v.id];for(const B in F)h(F[B].object),delete F[B];delete L[v.id]}}function A(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function L_(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function D_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Mn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Jn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ln&&!A)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:b,maxSamples:S}}function N_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ri,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,M=y*4;let x=p.clippingState||null;l.value=x,x=h(g,d,M,f);for(let b=0;b!==M;++b)x[b]=t[b];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==_;++M,x+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function U_(s){let e=new WeakMap;function t(o,a){return a===gc?o.mapping=Us:a===_c&&(o.mapping=Fs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===gc||a===_c)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Tp(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const As=4,Kh=[.125,.215,.35,.446,.526,.582],Yi=20,Ka=new la,Jh=new _e;let Ja=null,$a=0,Za=0,Qa=!1;const Wi=(1+Math.sqrt(5))/2,bs=1/Wi,$h=[new P(-Wi,bs,0),new P(Wi,bs,0),new P(-bs,0,Wi),new P(bs,0,Wi),new P(0,Wi,-bs),new P(0,Wi,bs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],F_=new P;class el{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=F_}=r;Ja=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ja,$a,Za),this._renderer.xr.enabled=Qa,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ja=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:qn,format:Mn,colorSpace:Qt,depthBuffer:!1},i=Zh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O_(r)),this._blurMaterial=B_(r,e,t)}return i}_compileMaterial(e){const t=new D(this._lodPlanes[0],e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,n,i,r){const l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Jh),u.toneMapping=Pi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const _=new Vt({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),m=new D(new se,_);let p=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,p=!0):(_.color.copy(Jh),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const b=this._cubeSize;Lo(i,x*b,M>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Us||e.mapping===Fs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new D(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Lo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ka)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$h[(i-r-1)%$h.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new D(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Yi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Yi;m>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);const p=[];let y=0;for(let E=0;E<Yi;++E){const A=E/_,w=Math.exp(-A*A/2);p.push(w),E===0?y+=w:E<m&&(y+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const x=this._sizeLods[i],b=3*x*(i>M-As?i-M+As:0),S=4*(this._cubeSize-x);Lo(t,b,S,3*x,2*x),l.setRenderTarget(t),l.render(u,Ka)}}function O_(s){const e=[],t=[],n=[];let i=s;const r=s-As+1+Kh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-As?l=Kh[o-s+As-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),M=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let S=0;S<f;S++){const E=S%3*2/3-1,A=S>2?0:-1,w=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];y.set(w,_*g*S),M.set(d,m*g*S);const v=[S,S,S,S,S,S];x.set(v,p*g*S)}const b=new dt;b.setAttribute("position",new Lt(y,_)),b.setAttribute("uv",new Lt(M,m)),b.setAttribute("faceIndex",new Lt(x,p)),e.push(b),i>As&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zh(s,e,t){const n=new dn(s,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function B_(s,e,t){const n=new Float32Array(Yi),i=new P(0,1,0);return new qt({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Qh(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function eu(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Nl(){return`

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
	`}function k_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===gc||l===_c,h=l===Us||l===Fs;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new el(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new el(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function z_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Br("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function H_(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let M=0,x=y.length;M<x;M+=3){const b=y[M+0],S=y[M+1],E=y[M+2];d.push(b,S,S,E,E,b)}}else if(g!==void 0){const y=g.array;_=g.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const b=M+0,S=M+1,E=M+2;d.push(b,S,S,E,E,b)}}else return;const m=new(id(d)?ad:od)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function V_(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function G_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function W_(s,e,t){const n=new WeakMap,i=new lt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let v=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let b=a.attributes.position.count*x,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const E=new Float32Array(b*S*4*u),A=new sd(E,b,S,u);A.type=Ln,A.needsUpdate=!0;const w=x*4;for(let C=0;C<u;C++){const L=p[C],F=y[C],B=M[C],U=b*S*4*C;for(let O=0;O<L.count;O++){const Y=O*w;g===!0&&(i.fromBufferAttribute(L,O),E[U+Y+0]=i.x,E[U+Y+1]=i.y,E[U+Y+2]=i.z,E[U+Y+3]=0),_===!0&&(i.fromBufferAttribute(F,O),E[U+Y+4]=i.x,E[U+Y+5]=i.y,E[U+Y+6]=i.z,E[U+Y+7]=0),m===!0&&(i.fromBufferAttribute(B,O),E[U+Y+8]=i.x,E[U+Y+9]=i.y,E[U+Y+10]=i.z,E[U+Y+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new Z(b,S)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function X_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Pd=new Ut,tu=new gd(1,1),Id=new sd,Ld=new lp,Dd=new hd,nu=[],iu=[],su=new Float32Array(16),ru=new Float32Array(9),ou=new Float32Array(4);function $s(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=nu[i];if(r===void 0&&(r=new Float32Array(i),nu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ha(s,e){let t=iu[e];t===void 0&&(t=new Int32Array(e),iu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Y_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function q_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Ot(t,e)}}function j_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Ot(t,e)}}function K_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Ot(t,e)}}function J_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;ou.set(n),s.uniformMatrix2fv(this.addr,!1,ou),Ot(t,n)}}function $_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;ru.set(n),s.uniformMatrix3fv(this.addr,!1,ru),Ot(t,n)}}function Z_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;su.set(n),s.uniformMatrix4fv(this.addr,!1,su),Ot(t,n)}}function Q_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ex(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Ot(t,e)}}function tx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Ot(t,e)}}function nx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Ot(t,e)}}function ix(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Ot(t,e)}}function rx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Ot(t,e)}}function ox(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Ot(t,e)}}function ax(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(tu.compareFunction=nd,r=tu):r=Pd,t.setTexture2D(e||r,i)}function cx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ld,i)}function lx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Dd,i)}function hx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Id,i)}function ux(s){switch(s){case 5126:return Y_;case 35664:return q_;case 35665:return j_;case 35666:return K_;case 35674:return J_;case 35675:return $_;case 35676:return Z_;case 5124:case 35670:return Q_;case 35667:case 35671:return ex;case 35668:case 35672:return tx;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return sx;case 36295:return rx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return hx}}function dx(s,e){s.uniform1fv(this.addr,e)}function fx(s,e){const t=$s(e,this.size,2);s.uniform2fv(this.addr,t)}function px(s,e){const t=$s(e,this.size,3);s.uniform3fv(this.addr,t)}function mx(s,e){const t=$s(e,this.size,4);s.uniform4fv(this.addr,t)}function gx(s,e){const t=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _x(s,e){const t=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function xx(s,e){const t=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function vx(s,e){s.uniform1iv(this.addr,e)}function Mx(s,e){s.uniform2iv(this.addr,e)}function yx(s,e){s.uniform3iv(this.addr,e)}function wx(s,e){s.uniform4iv(this.addr,e)}function Sx(s,e){s.uniform1uiv(this.addr,e)}function bx(s,e){s.uniform2uiv(this.addr,e)}function Tx(s,e){s.uniform3uiv(this.addr,e)}function Ex(s,e){s.uniform4uiv(this.addr,e)}function Ax(s,e,t){const n=this.cache,i=e.length,r=ha(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Pd,r[o])}function Rx(s,e,t){const n=this.cache,i=e.length,r=ha(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ld,r[o])}function Cx(s,e,t){const n=this.cache,i=e.length,r=ha(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Dd,r[o])}function Px(s,e,t){const n=this.cache,i=e.length,r=ha(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Id,r[o])}function Ix(s){switch(s){case 5126:return dx;case 35664:return fx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return _x;case 35676:return xx;case 5124:case 35670:return vx;case 35667:case 35671:return Mx;case 35668:case 35672:return yx;case 35669:case 35673:return wx;case 5125:return Sx;case 36294:return bx;case 36295:return Tx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}class Lx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ux(t.type)}}class Dx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ix(t.type)}}class Nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ec=/(\w+)(\])?(\[|\.)?/g;function au(s,e){s.seq.push(e),s.map[e.id]=e}function Ux(s,e,t){const n=s.name,i=n.length;for(ec.lastIndex=0;;){const r=ec.exec(n),o=ec.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){au(t,c===void 0?new Lx(a,s,e):new Dx(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Nx(a),au(t,u)),t=u}}}class Wo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Ux(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function cu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Fx=37297;let Ox=0;function Bx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const lu=new nt;function kx(s){at._getMatrix(lu,at.workingColorSpace,s);const e=`mat3( ${lu.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(s)){case Jo:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function hu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Bx(s.getShaderSource(e),a)}else return r}function zx(s,e){const t=kx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Hx(s,e){let t;switch(e){case zu:t="Linear";break;case Hu:t="Reinhard";break;case Vu:t="Cineon";break;case cl:t="ACESFilmic";break;case Wu:t="AgX";break;case Xu:t="Neutral";break;case Gu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Do=new P;function Vx(){at.getLuminanceCoefficients(Do);const s=Do.x.toFixed(4),e=Do.y.toFixed(4),t=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function Wx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function _r(s){return s!==""}function uu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function du(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(s){return s.replace(Yx,jx)}const qx=new Map;function jx(s,e){let t=it[e];if(t===void 0){const n=qx.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return tl(t)}const Kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(s){return s.replace(Kx,Jx)}function Jx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function pu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $x(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Bu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function Zx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Us:case Fs:e="ENVMAP_TYPE_CUBE";break;case sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qx(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Fs&&(e="ENVMAP_MODE_REFRACTION"),e}function ev(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case al:e="ENVMAP_BLENDING_MULTIPLY";break;case Tf:e="ENVMAP_BLENDING_MIX";break;case Ef:e="ENVMAP_BLENDING_ADD";break}return e}function tv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function nv(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=$x(t),c=Zx(t),h=Qx(t),u=ev(t),d=tv(t),f=Gx(t),g=Wx(r),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),p.length>0&&(p+=`
`)):(m=[pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),p=[pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?it.tonemapping_pars_fragment:"",t.toneMapping!==Pi?Hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,zx("linearToOutputTexel",t.outputColorSpace),Vx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),o=tl(o),o=uu(o,t),o=du(o,t),a=tl(a),a=uu(a,t),a=du(a,t),o=fu(o),a=fu(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+o,x=y+p+a,b=cu(i,i.VERTEX_SHADER,M),S=cu(i,i.FRAGMENT_SHADER,x);i.attachShader(_,b),i.attachShader(_,S),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(C){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(b)||"",B=i.getShaderInfoLog(S)||"",U=L.trim(),O=F.trim(),Y=B.trim();let z=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,S);else{const ue=hu(i,b,"vertex"),Se=hu(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+ue+`
`+Se)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||Y==="")&&(q=!1);q&&(C.diagnostics={runnable:z,programLog:U,vertexShader:{log:O,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(b),i.deleteShader(S),A=new Wo(i,_),w=Xx(i,_)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Fx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ox++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=S,this}let iv=0;class sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rv(e),t.set(e,n)),n}}class rv{constructor(e){this.id=iv++,this.code=e,this.usedTimes=0}}function ov(s,e,t,n,i,r,o){const a=new vl,l=new sv,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,v,C,L,F){const B=L.fog,U=F.geometry,O=w.isMeshStandardMaterial?L.environment:null,Y=(w.isMeshStandardMaterial?t:e).get(w.envMap||O),z=Y&&Y.mapping===sa?Y.image.height:null,q=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const ue=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Se=ue!==void 0?ue.length:0;let G=0;U.morphAttributes.position!==void 0&&(G=1),U.morphAttributes.normal!==void 0&&(G=2),U.morphAttributes.color!==void 0&&(G=3);let J,le,ae,H;if(q){const $e=Hn[q];J=$e.vertexShader,le=$e.fragmentShader}else J=w.vertexShader,le=w.fragmentShader,l.update(w),ae=l.getVertexShaderID(w),H=l.getFragmentShaderID(w);const j=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),Ee=F.isInstancedMesh===!0,ye=F.isBatchedMesh===!0,Oe=!!w.map,et=!!w.matcap,N=!!Y,he=!!w.aoMap,ce=!!w.lightMap,re=!!w.bumpMap,oe=!!w.normalMap,Te=!!w.displacementMap,me=!!w.emissiveMap,te=!!w.metalnessMap,Ze=!!w.roughnessMap,Je=w.anisotropy>0,I=w.clearcoat>0,T=w.dispersion>0,X=w.iridescence>0,Q=w.sheen>0,ie=w.transmission>0,ee=Je&&!!w.anisotropyMap,Be=I&&!!w.clearcoatMap,be=I&&!!w.clearcoatNormalMap,Re=I&&!!w.clearcoatRoughnessMap,Ue=X&&!!w.iridescenceMap,ve=X&&!!w.iridescenceThicknessMap,Le=Q&&!!w.sheenColorMap,Ce=Q&&!!w.sheenRoughnessMap,ze=!!w.specularMap,Pe=!!w.specularColorMap,We=!!w.specularIntensityMap,k=ie&&!!w.transmissionMap,Me=ie&&!!w.thicknessMap,fe=!!w.gradientMap,Ne=!!w.alphaMap,xe=w.alphaTest>0,de=!!w.alphaHash,Ae=!!w.extensions;let He=Pi;w.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(He=s.toneMapping);const tt={shaderID:q,shaderType:w.type,shaderName:w.name,vertexShader:J,fragmentShader:le,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:H,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ye,batchingColor:ye&&F._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&F.instanceColor!==null,instancingMorph:Ee&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Qt,alphaToCoverage:!!w.alphaToCoverage,map:Oe,matcap:et,envMap:N,envMapMode:N&&Y.mapping,envMapCubeUVHeight:z,aoMap:he,lightMap:ce,bumpMap:re,normalMap:oe,displacementMap:d&&Te,emissiveMap:me,normalMapObjectSpace:oe&&w.normalMapType===Lf,normalMapTangentSpace:oe&&w.normalMapType===gl,metalnessMap:te,roughnessMap:Ze,anisotropy:Je,anisotropyMap:ee,clearcoat:I,clearcoatMap:Be,clearcoatNormalMap:be,clearcoatRoughnessMap:Re,dispersion:T,iridescence:X,iridescenceMap:Ue,iridescenceThicknessMap:ve,sheen:Q,sheenColorMap:Le,sheenRoughnessMap:Ce,specularMap:ze,specularColorMap:Pe,specularIntensityMap:We,transmission:ie,transmissionMap:k,thicknessMap:Me,gradientMap:fe,opaque:w.transparent===!1&&w.blending===Cs&&w.alphaToCoverage===!1,alphaMap:Ne,alphaTest:xe,alphaHash:de,combine:w.combine,mapUv:Oe&&_(w.map.channel),aoMapUv:he&&_(w.aoMap.channel),lightMapUv:ce&&_(w.lightMap.channel),bumpMapUv:re&&_(w.bumpMap.channel),normalMapUv:oe&&_(w.normalMap.channel),displacementMapUv:Te&&_(w.displacementMap.channel),emissiveMapUv:me&&_(w.emissiveMap.channel),metalnessMapUv:te&&_(w.metalnessMap.channel),roughnessMapUv:Ze&&_(w.roughnessMap.channel),anisotropyMapUv:ee&&_(w.anisotropyMap.channel),clearcoatMapUv:Be&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(w.sheenRoughnessMap.channel),specularMapUv:ze&&_(w.specularMap.channel),specularColorMapUv:Pe&&_(w.specularColorMap.channel),specularIntensityMapUv:We&&_(w.specularIntensityMap.channel),transmissionMapUv:k&&_(w.transmissionMap.channel),thicknessMapUv:Me&&_(w.thicknessMap.channel),alphaMapUv:Ne&&_(w.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(oe||Je),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!U.attributes.uv&&(Oe||Ne),fog:!!B,useFog:w.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:F.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:G,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:He,decodeVideoTexture:Oe&&w.map.isVideoTexture===!0&&at.getTransfer(w.map.colorSpace)===mt,decodeVideoTextureEmissive:me&&w.emissiveMap.isVideoTexture===!0&&at.getTransfer(w.emissiveMap.colorSpace)===mt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ct,flipSided:w.side===$t,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ae&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&w.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function p(w){const v=[];if(w.shaderID?v.push(w.shaderID):(v.push(w.customVertexShaderID),v.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)v.push(C),v.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(y(v,w),M(v,w),v.push(s.outputColorSpace)),v.push(w.customProgramCacheKey),v.join()}function y(w,v){w.push(v.precision),w.push(v.outputColorSpace),w.push(v.envMapMode),w.push(v.envMapCubeUVHeight),w.push(v.mapUv),w.push(v.alphaMapUv),w.push(v.lightMapUv),w.push(v.aoMapUv),w.push(v.bumpMapUv),w.push(v.normalMapUv),w.push(v.displacementMapUv),w.push(v.emissiveMapUv),w.push(v.metalnessMapUv),w.push(v.roughnessMapUv),w.push(v.anisotropyMapUv),w.push(v.clearcoatMapUv),w.push(v.clearcoatNormalMapUv),w.push(v.clearcoatRoughnessMapUv),w.push(v.iridescenceMapUv),w.push(v.iridescenceThicknessMapUv),w.push(v.sheenColorMapUv),w.push(v.sheenRoughnessMapUv),w.push(v.specularMapUv),w.push(v.specularColorMapUv),w.push(v.specularIntensityMapUv),w.push(v.transmissionMapUv),w.push(v.thicknessMapUv),w.push(v.combine),w.push(v.fogExp2),w.push(v.sizeAttenuation),w.push(v.morphTargetsCount),w.push(v.morphAttributeCount),w.push(v.numDirLights),w.push(v.numPointLights),w.push(v.numSpotLights),w.push(v.numSpotLightMaps),w.push(v.numHemiLights),w.push(v.numRectAreaLights),w.push(v.numDirLightShadows),w.push(v.numPointLightShadows),w.push(v.numSpotLightShadows),w.push(v.numSpotLightShadowsWithMaps),w.push(v.numLightProbes),w.push(v.shadowMapType),w.push(v.toneMapping),w.push(v.numClippingPlanes),w.push(v.numClipIntersection),w.push(v.depthPacking)}function M(w,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const v=g[w.type];let C;if(v){const L=Hn[v];C=Ji.clone(L.uniforms)}else C=w.uniforms;return C}function b(w,v){let C;for(let L=0,F=h.length;L<F;L++){const B=h[L];if(B.cacheKey===v){C=B,++C.usedTimes;break}}return C===void 0&&(C=new nv(s,v,w,r),h.push(C)),C}function S(w){if(--w.usedTimes===0){const v=h.indexOf(w);h[v]=h[h.length-1],h.pop(),w.destroy()}}function E(w){l.remove(w)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:A}}function av(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function cv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function mu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function gu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||cv),n.length>1&&n.sort(d||mu),i.length>1&&i.sort(d||mu)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function lv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new gu,s.set(n,[o])):i>=r.length?(o=new gu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function hv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new _e};break;case"SpotLight":t={position:new P,direction:new P,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function uv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let dv=0;function fv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function pv(s){const e=new hv,t=uv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new Ge,o=new Ge;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,M=0,x=0,b=0,S=0,E=0;c.sort(fv);for(let w=0,v=c.length;w<v;w++){const C=c[w],L=C.color,F=C.intensity,B=C.distance,U=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=L.r*F,u+=L.g*F,d+=L.b*F;else if(C.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(C.sh.coefficients[O],F);E++}else if(C.isDirectionalLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,z=t.get(C);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=C.shadow.matrix,y++}n.directional[f]=O,f++}else if(C.isSpotLight){const O=e.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(L).multiplyScalar(F),O.distance=B,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,n.spot[_]=O;const Y=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,Y.updateMatrices(C),C.castShadow&&S++),n.spotLightMatrix[_]=Y.matrix,C.castShadow){const z=t.get(C);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=U,x++}_++}else if(C.isRectAreaLight){const O=e.get(C);O.color.copy(L).multiplyScalar(F),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=O,m++}else if(C.isPointLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){const Y=C.shadow,z=t.get(C);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=O,g++}else if(C.isHemisphereLight){const O=e.get(C);O.skyColor.copy(C.color).multiplyScalar(F),O.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[p]=O,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==M||A.numSpotShadows!==x||A.numSpotMaps!==b||A.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+b-S,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,A.directionalLength=f,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=M,A.numSpotShadows=x,A.numSpotMaps=b,A.numLightProbes=E,n.version=dv++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function _u(s){const e=new pv(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mv(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new _u(s),e.set(i,[a])):r>=o.length?(a=new _u(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
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
}`;function xv(s,e,t){let n=new wl;const i=new Z,r=new Z,o=new lt,a=new mm({depthPacking:If}),l=new gm,c={},h=t.maxTextureSize,u={[Kn]:$t,[$t]:Kn,[ct]:ct},d=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:gv,fragmentShader:_v}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new dt;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new D(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bu;let p=this.type;this.render=function(S,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const w=s.getRenderTarget(),v=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),L=s.state;L.setBlending(mi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=p!==hi&&this.type===hi,B=p===hi&&this.type!==hi;for(let U=0,O=S.length;U<O;U++){const Y=S[U],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const q=z.getFrameExtents();if(i.multiply(q),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/q.x),i.x=r.x*q.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/q.y),i.y=r.y*q.y,z.mapSize.y=r.y)),z.map===null||F===!0||B===!0){const Se=this.type!==hi?{minFilter:Zt,magFilter:Zt}:{};z.map!==null&&z.map.dispose(),z.map=new dn(i.x,i.y,Se),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const ue=z.getViewportCount();for(let Se=0;Se<ue;Se++){const G=z.getViewport(Se);o.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),L.viewport(o),z.updateMatrices(Y,Se),n=z.getFrustum(),x(E,A,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===hi&&y(z,A),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,v,C)};function y(S,E){const A=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new dn(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(E,null,A,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(E,null,A,f,_,null)}function M(S,E,A,w){let v=null;const C=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)v=C;else if(v=A.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const L=v.uuid,F=E.uuid;let B=c[L];B===void 0&&(B={},c[L]=B);let U=B[F];U===void 0&&(U=v.clone(),B[F]=U,E.addEventListener("dispose",b)),v=U}if(v.visible=E.visible,v.wireframe=E.wireframe,w===hi?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:u[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=s.properties.get(v);L.light=A}return v}function x(S,E,A,w,v){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===hi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const F=e.update(S),B=S.material;if(Array.isArray(B)){const U=F.groups;for(let O=0,Y=U.length;O<Y;O++){const z=U[O],q=B[z.materialIndex];if(q&&q.visible){const ue=M(S,q,w,v);S.onBeforeShadow(s,S,E,A,F,ue,z),s.renderBufferDirect(A,null,F,ue,S,z),S.onAfterShadow(s,S,E,A,F,ue,z)}}}else if(B.visible){const U=M(S,B,w,v);S.onBeforeShadow(s,S,E,A,F,U,null),s.renderBufferDirect(A,null,F,U,S,null),S.onAfterShadow(s,S,E,A,F,U,null)}}const L=S.children;for(let F=0,B=L.length;F<B;F++)x(L[F],E,A,w,v)}function b(S){S.target.removeEventListener("dispose",b);for(const A in c){const w=c[A],v=S.target.uuid;v in w&&(w[v].dispose(),delete w[v])}}}const vv={[lc]:hc,[uc]:pc,[dc]:mc,[Ns]:fc,[hc]:lc,[pc]:uc,[mc]:dc,[fc]:Ns};function Mv(s,e){function t(){let k=!1;const Me=new lt;let fe=null;const Ne=new lt(0,0,0,0);return{setMask:function(xe){fe!==xe&&!k&&(s.colorMask(xe,xe,xe,xe),fe=xe)},setLocked:function(xe){k=xe},setClear:function(xe,de,Ae,He,tt){tt===!0&&(xe*=He,de*=He,Ae*=He),Me.set(xe,de,Ae,He),Ne.equals(Me)===!1&&(s.clearColor(xe,de,Ae,He),Ne.copy(Me))},reset:function(){k=!1,fe=null,Ne.set(-1,0,0,0)}}}function n(){let k=!1,Me=!1,fe=null,Ne=null,xe=null;return{setReversed:function(de){if(Me!==de){const Ae=e.get("EXT_clip_control");de?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Me=de;const He=xe;xe=null,this.setClear(He)}},getReversed:function(){return Me},setTest:function(de){de?j(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(de){fe!==de&&!k&&(s.depthMask(de),fe=de)},setFunc:function(de){if(Me&&(de=vv[de]),Ne!==de){switch(de){case lc:s.depthFunc(s.NEVER);break;case hc:s.depthFunc(s.ALWAYS);break;case uc:s.depthFunc(s.LESS);break;case Ns:s.depthFunc(s.LEQUAL);break;case dc:s.depthFunc(s.EQUAL);break;case fc:s.depthFunc(s.GEQUAL);break;case pc:s.depthFunc(s.GREATER);break;case mc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=de}},setLocked:function(de){k=de},setClear:function(de){xe!==de&&(Me&&(de=1-de),s.clearDepth(de),xe=de)},reset:function(){k=!1,fe=null,Ne=null,xe=null,Me=!1}}}function i(){let k=!1,Me=null,fe=null,Ne=null,xe=null,de=null,Ae=null,He=null,tt=null;return{setTest:function($e){k||($e?j(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function($e){Me!==$e&&!k&&(s.stencilMask($e),Me=$e)},setFunc:function($e,vt,en){(fe!==$e||Ne!==vt||xe!==en)&&(s.stencilFunc($e,vt,en),fe=$e,Ne=vt,xe=en)},setOp:function($e,vt,en){(de!==$e||Ae!==vt||He!==en)&&(s.stencilOp($e,vt,en),de=$e,Ae=vt,He=en)},setLocked:function($e){k=$e},setClear:function($e){tt!==$e&&(s.clearStencil($e),tt=$e)},reset:function(){k=!1,Me=null,fe=null,Ne=null,xe=null,de=null,Ae=null,He=null,tt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,M=null,x=null,b=null,S=null,E=new _e(0,0,0),A=0,w=!1,v=null,C=null,L=null,F=null,B=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Y=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=Y>=2);let q=null,ue={};const Se=s.getParameter(s.SCISSOR_BOX),G=s.getParameter(s.VIEWPORT),J=new lt().fromArray(Se),le=new lt().fromArray(G);function ae(k,Me,fe,Ne){const xe=new Uint8Array(4),de=s.createTexture();s.bindTexture(k,de),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ae=0;Ae<fe;Ae++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(Me+Ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return de}const H={};H[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),H[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),H[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(s.DEPTH_TEST),o.setFunc(Ns),re(!1),oe(jl),j(s.CULL_FACE),he(mi);function j(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function ge(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function Ee(k,Me){return u[k]!==Me?(s.bindFramebuffer(k,Me),u[k]=Me,k===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Me),k===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function ye(k,Me){let fe=f,Ne=!1;if(k){fe=d.get(Me),fe===void 0&&(fe=[],d.set(Me,fe));const xe=k.textures;if(fe.length!==xe.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let de=0,Ae=xe.length;de<Ae;de++)fe[de]=s.COLOR_ATTACHMENT0+de;fe.length=xe.length,Ne=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,Ne=!0);Ne&&s.drawBuffers(fe)}function Oe(k){return g!==k?(s.useProgram(k),g=k,!0):!1}const et={[Xi]:s.FUNC_ADD,[cf]:s.FUNC_SUBTRACT,[lf]:s.FUNC_REVERSE_SUBTRACT};et[hf]=s.MIN,et[uf]=s.MAX;const N={[df]:s.ZERO,[ff]:s.ONE,[pf]:s.SRC_COLOR,[ac]:s.SRC_ALPHA,[Mf]:s.SRC_ALPHA_SATURATE,[xf]:s.DST_COLOR,[gf]:s.DST_ALPHA,[mf]:s.ONE_MINUS_SRC_COLOR,[cc]:s.ONE_MINUS_SRC_ALPHA,[vf]:s.ONE_MINUS_DST_COLOR,[_f]:s.ONE_MINUS_DST_ALPHA,[yf]:s.CONSTANT_COLOR,[wf]:s.ONE_MINUS_CONSTANT_COLOR,[Sf]:s.CONSTANT_ALPHA,[bf]:s.ONE_MINUS_CONSTANT_ALPHA};function he(k,Me,fe,Ne,xe,de,Ae,He,tt,$e){if(k===mi){_===!0&&(ge(s.BLEND),_=!1);return}if(_===!1&&(j(s.BLEND),_=!0),k!==af){if(k!==m||$e!==w){if((p!==Xi||x!==Xi)&&(s.blendEquation(s.FUNC_ADD),p=Xi,x=Xi),$e)switch(k){case Cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case on:s.blendFunc(s.ONE,s.ONE);break;case Kl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case on:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Kl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,M=null,b=null,S=null,E.set(0,0,0),A=0,m=k,w=$e}return}xe=xe||Me,de=de||fe,Ae=Ae||Ne,(Me!==p||xe!==x)&&(s.blendEquationSeparate(et[Me],et[xe]),p=Me,x=xe),(fe!==y||Ne!==M||de!==b||Ae!==S)&&(s.blendFuncSeparate(N[fe],N[Ne],N[de],N[Ae]),y=fe,M=Ne,b=de,S=Ae),(He.equals(E)===!1||tt!==A)&&(s.blendColor(He.r,He.g,He.b,tt),E.copy(He),A=tt),m=k,w=!1}function ce(k,Me){k.side===ct?ge(s.CULL_FACE):j(s.CULL_FACE);let fe=k.side===$t;Me&&(fe=!fe),re(fe),k.blending===Cs&&k.transparent===!1?he(mi):he(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const Ne=k.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),me(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function re(k){v!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),v=k)}function oe(k){k!==rf?(j(s.CULL_FACE),k!==C&&(k===jl?s.cullFace(s.BACK):k===of?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),C=k}function Te(k){k!==L&&(O&&s.lineWidth(k),L=k)}function me(k,Me,fe){k?(j(s.POLYGON_OFFSET_FILL),(F!==Me||B!==fe)&&(s.polygonOffset(Me,fe),F=Me,B=fe)):ge(s.POLYGON_OFFSET_FILL)}function te(k){k?j(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function Ze(k){k===void 0&&(k=s.TEXTURE0+U-1),q!==k&&(s.activeTexture(k),q=k)}function Je(k,Me,fe){fe===void 0&&(q===null?fe=s.TEXTURE0+U-1:fe=q);let Ne=ue[fe];Ne===void 0&&(Ne={type:void 0,texture:void 0},ue[fe]=Ne),(Ne.type!==k||Ne.texture!==Me)&&(q!==fe&&(s.activeTexture(fe),q=fe),s.bindTexture(k,Me||H[k]),Ne.type=k,Ne.texture=Me)}function I(){const k=ue[q];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function X(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Be(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(k){J.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),J.copy(k))}function Ce(k){le.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),le.copy(k))}function ze(k,Me){let fe=c.get(Me);fe===void 0&&(fe=new WeakMap,c.set(Me,fe));let Ne=fe.get(k);Ne===void 0&&(Ne=s.getUniformBlockIndex(Me,k.name),fe.set(k,Ne))}function Pe(k,Me){const Ne=c.get(Me).get(k);l.get(Me)!==Ne&&(s.uniformBlockBinding(Me,Ne,k.__bindingPointIndex),l.set(Me,Ne))}function We(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},q=null,ue={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,M=null,x=null,b=null,S=null,E=new _e(0,0,0),A=0,w=!1,v=null,C=null,L=null,F=null,B=null,J.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ge,bindFramebuffer:Ee,drawBuffers:ye,useProgram:Oe,setBlending:he,setMaterial:ce,setFlipSided:re,setCullFace:oe,setLineWidth:Te,setPolygonOffset:me,setScissorTest:te,activeTexture:Ze,bindTexture:Je,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:X,texImage2D:Ue,texImage3D:ve,updateUBOMapping:ze,uniformBlockBinding:Pe,texStorage2D:be,texStorage3D:Re,texSubImage2D:Q,texSubImage3D:ie,compressedTexSubImage2D:ee,compressedTexSubImage3D:Be,scissor:Le,viewport:Ce,reset:We}}function yv(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Z,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return f?new OffscreenCanvas(I,T):Or("canvas")}function _(I,T,X){let Q=1;const ie=Je(I);if((ie.width>X||ie.height>X)&&(Q=X/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ee=Math.floor(Q*ie.width),Be=Math.floor(Q*ie.height);u===void 0&&(u=g(ee,Be));const be=T?g(ee,Be):u;return be.width=ee,be.height=Be,be.getContext("2d").drawImage(I,0,0,ee,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ee+"x"+Be+")."),be}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){s.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(I,T,X,Q,ie=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ee=T;if(T===s.RED&&(X===s.FLOAT&&(ee=s.R32F),X===s.HALF_FLOAT&&(ee=s.R16F),X===s.UNSIGNED_BYTE&&(ee=s.R8)),T===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(ee=s.R8UI),X===s.UNSIGNED_SHORT&&(ee=s.R16UI),X===s.UNSIGNED_INT&&(ee=s.R32UI),X===s.BYTE&&(ee=s.R8I),X===s.SHORT&&(ee=s.R16I),X===s.INT&&(ee=s.R32I)),T===s.RG&&(X===s.FLOAT&&(ee=s.RG32F),X===s.HALF_FLOAT&&(ee=s.RG16F),X===s.UNSIGNED_BYTE&&(ee=s.RG8)),T===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(ee=s.RG8UI),X===s.UNSIGNED_SHORT&&(ee=s.RG16UI),X===s.UNSIGNED_INT&&(ee=s.RG32UI),X===s.BYTE&&(ee=s.RG8I),X===s.SHORT&&(ee=s.RG16I),X===s.INT&&(ee=s.RG32I)),T===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(ee=s.RGB8UI),X===s.UNSIGNED_SHORT&&(ee=s.RGB16UI),X===s.UNSIGNED_INT&&(ee=s.RGB32UI),X===s.BYTE&&(ee=s.RGB8I),X===s.SHORT&&(ee=s.RGB16I),X===s.INT&&(ee=s.RGB32I)),T===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(ee=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(ee=s.RGBA16UI),X===s.UNSIGNED_INT&&(ee=s.RGBA32UI),X===s.BYTE&&(ee=s.RGBA8I),X===s.SHORT&&(ee=s.RGBA16I),X===s.INT&&(ee=s.RGBA32I)),T===s.RGB&&(X===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(ee=s.R11F_G11F_B10F)),T===s.RGBA){const Be=ie?Jo:at.getTransfer(Q);X===s.FLOAT&&(ee=s.RGBA32F),X===s.HALF_FLOAT&&(ee=s.RGBA16F),X===s.UNSIGNED_BYTE&&(ee=Be===mt?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(I,T){let X;return I?T===null||T===Ki||T===Lr?X=s.DEPTH24_STENCIL8:T===Ln?X=s.DEPTH32F_STENCIL8:T===Ir&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ki||T===Lr?X=s.DEPTH_COMPONENT24:T===Ln?X=s.DEPTH_COMPONENT32F:T===Ir&&(X=s.DEPTH_COMPONENT16),X}function b(I,T){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Zt&&I.minFilter!==sn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function S(I){const T=I.target;T.removeEventListener("dispose",S),A(T),T.isVideoTexture&&h.delete(T)}function E(I){const T=I.target;T.removeEventListener("dispose",E),v(T)}function A(I){const T=n.get(I);if(T.__webglInit===void 0)return;const X=I.source,Q=d.get(X);if(Q){const ie=Q[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(I),Object.keys(Q).length===0&&d.delete(X)}n.remove(I)}function w(I){const T=n.get(I);s.deleteTexture(T.__webglTexture);const X=I.source,Q=d.get(X);delete Q[T.__cacheKey],o.memory.textures--}function v(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let ie=0;ie<T.__webglFramebuffer[Q].length;ie++)s.deleteFramebuffer(T.__webglFramebuffer[Q][ie]);else s.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)s.deleteFramebuffer(T.__webglFramebuffer[Q]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const X=I.textures;for(let Q=0,ie=X.length;Q<ie;Q++){const ee=n.get(X[Q]);ee.__webglTexture&&(s.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(X[Q])}n.remove(I)}let C=0;function L(){C=0}function F(){const I=C;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),C+=1,I}function B(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function U(I,T){const X=n.get(I);if(I.isVideoTexture&&te(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){const Q=I.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(X,I,T);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+T)}function O(I,T){const X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){H(X,I,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+T)}function Y(I,T){const X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){H(X,I,T);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+T)}function z(I,T){const X=n.get(I);if(I.version>0&&X.__version!==I.version){j(X,I,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+T)}const q={[Li]:s.REPEAT,[Wn]:s.CLAMP_TO_EDGE,[Ko]:s.MIRRORED_REPEAT},ue={[Zt]:s.NEAREST,[qu]:s.NEAREST_MIPMAP_NEAREST,[mr]:s.NEAREST_MIPMAP_LINEAR,[sn]:s.LINEAR,[Bo]:s.LINEAR_MIPMAP_NEAREST,[Xn]:s.LINEAR_MIPMAP_LINEAR},Se={[Df]:s.NEVER,[kf]:s.ALWAYS,[Nf]:s.LESS,[nd]:s.LEQUAL,[Uf]:s.EQUAL,[Bf]:s.GEQUAL,[Ff]:s.GREATER,[Of]:s.NOTEQUAL};function G(I,T){if(T.type===Ln&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===sn||T.magFilter===Bo||T.magFilter===mr||T.magFilter===Xn||T.minFilter===sn||T.minFilter===Bo||T.minFilter===mr||T.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,q[T.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,q[T.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,q[T.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ue[T.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ue[T.minFilter]),T.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Zt||T.minFilter!==mr&&T.minFilter!==Xn||T.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function J(I,T){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",S));const Q=T.source;let ie=d.get(Q);ie===void 0&&(ie={},d.set(Q,ie));const ee=B(T);if(ee!==I.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ie[ee].usedTimes++;const Be=ie[I.__cacheKey];Be!==void 0&&(ie[I.__cacheKey].usedTimes--,Be.usedTimes===0&&w(T)),I.__cacheKey=ee,I.__webglTexture=ie[ee].texture}return X}function le(I,T,X){return Math.floor(Math.floor(I/X)/T)}function ae(I,T,X,Q){const ee=I.updateRanges;if(ee.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,X,Q,T.data);else{ee.sort((ve,Le)=>ve.start-Le.start);let Be=0;for(let ve=1;ve<ee.length;ve++){const Le=ee[Be],Ce=ee[ve],ze=Le.start+Le.count,Pe=le(Ce.start,T.width,4),We=le(Le.start,T.width,4);Ce.start<=ze+1&&Pe===We&&le(Ce.start+Ce.count-1,T.width,4)===Pe?Le.count=Math.max(Le.count,Ce.start+Ce.count-Le.start):(++Be,ee[Be]=Ce)}ee.length=Be+1;const be=s.getParameter(s.UNPACK_ROW_LENGTH),Re=s.getParameter(s.UNPACK_SKIP_PIXELS),Ue=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let ve=0,Le=ee.length;ve<Le;ve++){const Ce=ee[ve],ze=Math.floor(Ce.start/4),Pe=Math.ceil(Ce.count/4),We=ze%T.width,k=Math.floor(ze/T.width),Me=Pe,fe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,We),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),t.texSubImage2D(s.TEXTURE_2D,0,We,k,Me,fe,X,Q,T.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,be),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Re),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ue)}}function H(I,T,X){let Q=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=s.TEXTURE_3D);const ie=J(I,T),ee=T.source;t.bindTexture(Q,I.__webglTexture,s.TEXTURE0+X);const Be=n.get(ee);if(ee.version!==Be.__version||ie===!0){t.activeTexture(s.TEXTURE0+X);const be=at.getPrimaries(at.workingColorSpace),Re=T.colorSpace===ui?null:at.getPrimaries(T.colorSpace),Ue=T.colorSpace===ui||be===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ve=_(T.image,!1,i.maxTextureSize);ve=Ze(T,ve);const Le=r.convert(T.format,T.colorSpace),Ce=r.convert(T.type);let ze=M(T.internalFormat,Le,Ce,T.colorSpace,T.isVideoTexture);G(Q,T);let Pe;const We=T.mipmaps,k=T.isVideoTexture!==!0,Me=Be.__version===void 0||ie===!0,fe=ee.dataReady,Ne=b(T,ve);if(T.isDepthTexture)ze=x(T.format===Nr,T.type),Me&&(k?t.texStorage2D(s.TEXTURE_2D,1,ze,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,ze,ve.width,ve.height,0,Le,Ce,null));else if(T.isDataTexture)if(We.length>0){k&&Me&&t.texStorage2D(s.TEXTURE_2D,Ne,ze,We[0].width,We[0].height);for(let xe=0,de=We.length;xe<de;xe++)Pe=We[xe],k?fe&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,Le,Ce,Pe.data):t.texImage2D(s.TEXTURE_2D,xe,ze,Pe.width,Pe.height,0,Le,Ce,Pe.data);T.generateMipmaps=!1}else k?(Me&&t.texStorage2D(s.TEXTURE_2D,Ne,ze,ve.width,ve.height),fe&&ae(T,ve,Le,Ce)):t.texImage2D(s.TEXTURE_2D,0,ze,ve.width,ve.height,0,Le,Ce,ve.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,ze,We[0].width,We[0].height,ve.depth);for(let xe=0,de=We.length;xe<de;xe++)if(Pe=We[xe],T.format!==Mn)if(Le!==null)if(k){if(fe)if(T.layerUpdates.size>0){const Ae=jh(Pe.width,Pe.height,T.format,T.type);for(const He of T.layerUpdates){const tt=Pe.data.subarray(He*Ae/Pe.data.BYTES_PER_ELEMENT,(He+1)*Ae/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,He,Pe.width,Pe.height,1,Le,tt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Pe.width,Pe.height,ve.depth,Le,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,ze,Pe.width,Pe.height,ve.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?fe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Pe.width,Pe.height,ve.depth,Le,Ce,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,ze,Pe.width,Pe.height,ve.depth,0,Le,Ce,Pe.data)}else{k&&Me&&t.texStorage2D(s.TEXTURE_2D,Ne,ze,We[0].width,We[0].height);for(let xe=0,de=We.length;xe<de;xe++)Pe=We[xe],T.format!==Mn?Le!==null?k?fe&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,Le,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,ze,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?fe&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,Le,Ce,Pe.data):t.texImage2D(s.TEXTURE_2D,xe,ze,Pe.width,Pe.height,0,Le,Ce,Pe.data)}else if(T.isDataArrayTexture)if(k){if(Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,ze,ve.width,ve.height,ve.depth),fe)if(T.layerUpdates.size>0){const xe=jh(ve.width,ve.height,T.format,T.type);for(const de of T.layerUpdates){const Ae=ve.data.subarray(de*xe/ve.data.BYTES_PER_ELEMENT,(de+1)*xe/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,ve.width,ve.height,1,Le,Ce,Ae)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Le,Ce,ve.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ze,ve.width,ve.height,ve.depth,0,Le,Ce,ve.data);else if(T.isData3DTexture)k?(Me&&t.texStorage3D(s.TEXTURE_3D,Ne,ze,ve.width,ve.height,ve.depth),fe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Le,Ce,ve.data)):t.texImage3D(s.TEXTURE_3D,0,ze,ve.width,ve.height,ve.depth,0,Le,Ce,ve.data);else if(T.isFramebufferTexture){if(Me)if(k)t.texStorage2D(s.TEXTURE_2D,Ne,ze,ve.width,ve.height);else{let xe=ve.width,de=ve.height;for(let Ae=0;Ae<Ne;Ae++)t.texImage2D(s.TEXTURE_2D,Ae,ze,xe,de,0,Le,Ce,null),xe>>=1,de>>=1}}else if(We.length>0){if(k&&Me){const xe=Je(We[0]);t.texStorage2D(s.TEXTURE_2D,Ne,ze,xe.width,xe.height)}for(let xe=0,de=We.length;xe<de;xe++)Pe=We[xe],k?fe&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Le,Ce,Pe):t.texImage2D(s.TEXTURE_2D,xe,ze,Le,Ce,Pe);T.generateMipmaps=!1}else if(k){if(Me){const xe=Je(ve);t.texStorage2D(s.TEXTURE_2D,Ne,ze,xe.width,xe.height)}fe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Le,Ce,ve)}else t.texImage2D(s.TEXTURE_2D,0,ze,Le,Ce,ve);m(T)&&p(Q),Be.__version=ee.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function j(I,T,X){if(T.image.length!==6)return;const Q=J(I,T),ie=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+X);const ee=n.get(ie);if(ie.version!==ee.__version||Q===!0){t.activeTexture(s.TEXTURE0+X);const Be=at.getPrimaries(at.workingColorSpace),be=T.colorSpace===ui?null:at.getPrimaries(T.colorSpace),Re=T.colorSpace===ui||Be===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ue=T.isCompressedTexture||T.image[0].isCompressedTexture,ve=T.image[0]&&T.image[0].isDataTexture,Le=[];for(let de=0;de<6;de++)!Ue&&!ve?Le[de]=_(T.image[de],!0,i.maxCubemapSize):Le[de]=ve?T.image[de].image:T.image[de],Le[de]=Ze(T,Le[de]);const Ce=Le[0],ze=r.convert(T.format,T.colorSpace),Pe=r.convert(T.type),We=M(T.internalFormat,ze,Pe,T.colorSpace),k=T.isVideoTexture!==!0,Me=ee.__version===void 0||Q===!0,fe=ie.dataReady;let Ne=b(T,Ce);G(s.TEXTURE_CUBE_MAP,T);let xe;if(Ue){k&&Me&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,We,Ce.width,Ce.height);for(let de=0;de<6;de++){xe=Le[de].mipmaps;for(let Ae=0;Ae<xe.length;Ae++){const He=xe[Ae];T.format!==Mn?ze!==null?k?fe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae,0,0,He.width,He.height,ze,He.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae,We,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae,0,0,He.width,He.height,ze,Pe,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae,We,He.width,He.height,0,ze,Pe,He.data)}}}else{if(xe=T.mipmaps,k&&Me){xe.length>0&&Ne++;const de=Je(Le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,We,de.width,de.height)}for(let de=0;de<6;de++)if(ve){k?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Le[de].width,Le[de].height,ze,Pe,Le[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,We,Le[de].width,Le[de].height,0,ze,Pe,Le[de].data);for(let Ae=0;Ae<xe.length;Ae++){const tt=xe[Ae].image[de].image;k?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae+1,0,0,tt.width,tt.height,ze,Pe,tt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae+1,We,tt.width,tt.height,0,ze,Pe,tt.data)}}else{k?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ze,Pe,Le[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,We,ze,Pe,Le[de]);for(let Ae=0;Ae<xe.length;Ae++){const He=xe[Ae];k?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae+1,0,0,ze,Pe,He.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae+1,We,ze,Pe,He.image[de])}}}m(T)&&p(s.TEXTURE_CUBE_MAP),ee.__version=ie.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ge(I,T,X,Q,ie,ee){const Be=r.convert(X.format,X.colorSpace),be=r.convert(X.type),Re=M(X.internalFormat,Be,be,X.colorSpace),Ue=n.get(T),ve=n.get(X);if(ve.__renderTarget=T,!Ue.__hasExternalTextures){const Le=Math.max(1,T.width>>ee),Ce=Math.max(1,T.height>>ee);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,ee,Re,Le,Ce,T.depth,0,Be,be,null):t.texImage2D(ie,ee,Re,Le,Ce,0,Be,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),me(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,ie,ve.__webglTexture,0,Te(T)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,ie,ve.__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ee(I,T,X){if(s.bindRenderbuffer(s.RENDERBUFFER,I),T.depthBuffer){const Q=T.depthTexture,ie=Q&&Q.isDepthTexture?Q.type:null,ee=x(T.stencilBuffer,ie),Be=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=Te(T);me(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,ee,T.width,T.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,ee,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ee,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Be,s.RENDERBUFFER,I)}else{const Q=T.textures;for(let ie=0;ie<Q.length;ie++){const ee=Q[ie],Be=r.convert(ee.format,ee.colorSpace),be=r.convert(ee.type),Re=M(ee.internalFormat,Be,be,ee.colorSpace),Ue=Te(T);X&&me(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,Re,T.width,T.height):me(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue,Re,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Re,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(T.depthTexture);Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),U(T.depthTexture,0);const ie=Q.__webglTexture,ee=Te(T);if(T.depthTexture.format===Dr)me(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(T.depthTexture.format===Nr)me(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Oe(I){const T=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const Q=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const ie=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",ie)};Q.addEventListener("dispose",ie),T.__depthDisposeCallback=ie}T.__boundDepthTexture=Q}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const Q=I.texture.mipmaps;Q&&Q.length>0?ye(T.__webglFramebuffer[0],I):ye(T.__webglFramebuffer,I)}else if(X){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=s.createRenderbuffer(),Ee(T.__webglDepthbuffer[Q],I,!1);else{const ie=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=T.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,ee)}}else{const Q=I.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Ee(T.__webglDepthbuffer,I,!1);else{const ie=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,ee)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function et(I,T,X){const Q=n.get(I);T!==void 0&&ge(Q.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Oe(I)}function N(I){const T=I.texture,X=n.get(I),Q=n.get(T);I.addEventListener("dispose",E);const ie=I.textures,ee=I.isWebGLCubeRenderTarget===!0,Be=ie.length>1;if(Be||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=T.version,o.memory.textures++),ee){X.__webglFramebuffer=[];for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[be]=[];for(let Re=0;Re<T.mipmaps.length;Re++)X.__webglFramebuffer[be][Re]=s.createFramebuffer()}else X.__webglFramebuffer[be]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let be=0;be<T.mipmaps.length;be++)X.__webglFramebuffer[be]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Be)for(let be=0,Re=ie.length;be<Re;be++){const Ue=n.get(ie[be]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&me(I)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let be=0;be<ie.length;be++){const Re=ie[be];X.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[be]);const Ue=r.convert(Re.format,Re.colorSpace),ve=r.convert(Re.type),Le=M(Re.internalFormat,Ue,ve,Re.colorSpace,I.isXRRenderTarget===!0),Ce=Te(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,Le,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,X.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Ee(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),G(s.TEXTURE_CUBE_MAP,T);for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)ge(X.__webglFramebuffer[be][Re],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re);else ge(X.__webglFramebuffer[be],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);m(T)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let be=0,Re=ie.length;be<Re;be++){const Ue=ie[be],ve=n.get(Ue);let Le=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Le=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Le,ve.__webglTexture),G(Le,Ue),ge(X.__webglFramebuffer,I,Ue,s.COLOR_ATTACHMENT0+be,Le,0),m(Ue)&&p(Le)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,Q.__webglTexture),G(be,T),T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)ge(X.__webglFramebuffer[Re],I,T,s.COLOR_ATTACHMENT0,be,Re);else ge(X.__webglFramebuffer,I,T,s.COLOR_ATTACHMENT0,be,0);m(T)&&p(be),t.unbindTexture()}I.depthBuffer&&Oe(I)}function he(I){const T=I.textures;for(let X=0,Q=T.length;X<Q;X++){const ie=T[X];if(m(ie)){const ee=y(I),Be=n.get(ie).__webglTexture;t.bindTexture(ee,Be),p(ee),t.unbindTexture()}}}const ce=[],re=[];function oe(I){if(I.samples>0){if(me(I)===!1){const T=I.textures,X=I.width,Q=I.height;let ie=s.COLOR_BUFFER_BIT;const ee=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=n.get(I),be=T.length>1;if(be)for(let Ue=0;Ue<T.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const Re=I.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Ue]);const ve=n.get(T[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ve,0)}s.blitFramebuffer(0,0,X,Q,0,0,X,Q,ie,s.NEAREST),l===!0&&(ce.length=0,re.length=0,ce.push(s.COLOR_ATTACHMENT0+Ue),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ce.push(ee),re.push(ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,re)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Ue=0;Ue<T.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Ue]);const ve=n.get(T[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ve,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const T=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Te(I){return Math.min(i.maxSamples,I.samples)}function me(I){const T=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function te(I){const T=o.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function Ze(I,T){const X=I.colorSpace,Q=I.format,ie=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==Qt&&X!==ui&&(at.getTransfer(X)===mt?(Q!==Mn||ie!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}function Je(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=U,this.setTexture2DArray=O,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=et,this.setupRenderTarget=N,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=me}function wv(s,e){function t(n,i=ui){let r;const o=at.getTransfer(i);if(n===Jn)return s.UNSIGNED_BYTE;if(n===hl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ul)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ju)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$u)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ju)return s.BYTE;if(n===Ku)return s.SHORT;if(n===Ir)return s.UNSIGNED_SHORT;if(n===ll)return s.INT;if(n===Ki)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===qn)return s.HALF_FLOAT;if(n===Zu)return s.ALPHA;if(n===Qu)return s.RGB;if(n===Mn)return s.RGBA;if(n===Dr)return s.DEPTH_COMPONENT;if(n===Nr)return s.DEPTH_STENCIL;if(n===dl)return s.RED;if(n===fl)return s.RED_INTEGER;if(n===ed)return s.RG;if(n===pl)return s.RG_INTEGER;if(n===ml)return s.RGBA_INTEGER;if(n===ko||n===zo||n===Ho||n===Vo)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xc||n===vc||n===Mc||n===yc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wc||n===Sc||n===bc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wc||n===Sc)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tc||n===Ec||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ec)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ac)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ic)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kc||n===zc||n===Hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===kc)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vc||n===Gc||n===Wc||n===Xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Lr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bv=`
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

}`;class Tv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new _d(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qt({vertexShader:Sv,fragmentShader:bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new D(new ft(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ev extends js{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Tv,p={},y=t.getContextAttributes();let M=null,x=null;const b=[],S=[],E=new Z;let A=null;const w=new Yt;w.viewport=new lt;const v=new Yt;v.viewport=new lt;const C=[w,v],L=new Fm;let F=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=b[H];return j===void 0&&(j=new Oa,b[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=b[H];return j===void 0&&(j=new Oa,b[H]=j),j.getGripSpace()},this.getHand=function(H){let j=b[H];return j===void 0&&(j=new Oa,b[H]=j),j.getHandSpace()};function U(H){const j=S.indexOf(H.inputSource);if(j===-1)return;const ge=b[j];ge!==void 0&&(ge.update(H.inputSource,H.frame,c||o),ge.dispatchEvent({type:H.type,data:H.inputSource}))}function O(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",Y);for(let H=0;H<b.length;H++){const j=S[H];j!==null&&(S[H]=null,b[H].disconnect(j))}F=null,B=null,m.reset();for(const H in p)delete p[H];e.setRenderTarget(M),f=null,d=null,u=null,i=null,x=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",O),i.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ee=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=y.stencil?Nr:Dr,Ee=y.stencil?Lr:Ki);const Oe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Oe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new dn(d.textureWidth,d.textureHeight,{format:Mn,type:Jn,depthTexture:new gd(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ge={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new dn(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(H){for(let j=0;j<H.removed.length;j++){const ge=H.removed[j],Ee=S.indexOf(ge);Ee>=0&&(S[Ee]=null,b[Ee].disconnect(ge))}for(let j=0;j<H.added.length;j++){const ge=H.added[j];let Ee=S.indexOf(ge);if(Ee===-1){for(let Oe=0;Oe<b.length;Oe++)if(Oe>=S.length){S.push(ge),Ee=Oe;break}else if(S[Oe]===null){S[Oe]=ge,Ee=Oe;break}if(Ee===-1)break}const ye=b[Ee];ye&&ye.connect(ge)}}const z=new P,q=new P;function ue(H,j,ge){z.setFromMatrixPosition(j.matrixWorld),q.setFromMatrixPosition(ge.matrixWorld);const Ee=z.distanceTo(q),ye=j.projectionMatrix.elements,Oe=ge.projectionMatrix.elements,et=ye[14]/(ye[10]-1),N=ye[14]/(ye[10]+1),he=(ye[9]+1)/ye[5],ce=(ye[9]-1)/ye[5],re=(ye[8]-1)/ye[0],oe=(Oe[8]+1)/Oe[0],Te=et*re,me=et*oe,te=Ee/(-re+oe),Ze=te*-re;if(j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ze),H.translateZ(te),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ye[10]===-1)H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Je=et+te,I=N+te,T=Te-Ze,X=me+(Ee-Ze),Q=he*N/I*Je,ie=ce*N/I*Je;H.projectionMatrix.makePerspective(T,X,Q,ie,Je,I),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Se(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let j=H.near,ge=H.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),L.near=v.near=w.near=j,L.far=v.far=w.far=ge,(F!==L.near||B!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,B=L.far),L.layers.mask=H.layers.mask|6,w.layers.mask=L.layers.mask&3,v.layers.mask=L.layers.mask&5;const Ee=H.parent,ye=L.cameras;Se(L,Ee);for(let Oe=0;Oe<ye.length;Oe++)Se(ye[Oe],Ee);ye.length===2?ue(L,w,v):L.projectionMatrix.copy(w.projectionMatrix),G(H,L,Ee)};function G(H,j,ge){ge===null?H.matrix.copy(j.matrixWorld):(H.matrix.copy(ge.matrixWorld),H.matrix.invert(),H.matrix.multiply(j.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Os*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(H){return p[H]};let J=null;function le(H,j){if(h=j.getViewerPose(c||o),g=j,h!==null){const ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ee=!1;ge.length!==L.cameras.length&&(L.cameras.length=0,Ee=!0);for(let N=0;N<ge.length;N++){const he=ge[N];let ce=null;if(f!==null)ce=f.getViewport(he);else{const oe=u.getViewSubImage(d,he);ce=oe.viewport,N===0&&(e.setRenderTargetTextures(x,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(x))}let re=C[N];re===void 0&&(re=new Yt,re.layers.enable(N),re.viewport=new lt,C[N]=re),re.matrix.fromArray(he.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(he.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ce.x,ce.y,ce.width,ce.height),N===0&&(L.matrix.copy(re.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ee===!0&&L.cameras.push(re)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const N=u.getDepthInformation(ge[0]);N&&N.isValid&&N.texture&&m.init(N,i.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let N=0;N<ge.length;N++){const he=ge[N].camera;if(he){let ce=p[he];ce||(ce=new _d,p[he]=ce);const re=u.getCameraImage(he);ce.sourceTexture=re}}}}for(let ge=0;ge<b.length;ge++){const Ee=S[ge],ye=b[ge];Ee!==null&&ye!==void 0&&ye.update(Ee,j,c||o)}J&&J(H,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const ae=new Cd;ae.setAnimationLoop(le),this.setAnimationLoop=function(H){J=H},this.dispose=function(){}}}const Hi=new Fn,Av=new Ge;function Rv(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,x=y.envMapRotation;M&&(m.envMap.value=M,Hi.copy(x),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Av.makeRotationFromEuler(Hi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cv(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const x=M.program;n.uniformBlockBinding(y,x)}function c(y,M){let x=i[y.id];x===void 0&&(g(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(y,b);const S=e.render.frame;r[y.id]!==S&&(d(y),r[y.id]=S)}function h(y){const M=u();y.__bindingPointIndex=M;const x=s.createBuffer(),b=y.__size,S=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,b,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=i[y.id],x=y.uniforms,b=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let S=0,E=x.length;S<E;S++){const A=Array.isArray(x[S])?x[S]:[x[S]];for(let w=0,v=A.length;w<v;w++){const C=A[w];if(f(C,S,w,b)===!0){const L=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let U=0;U<F.length;U++){const O=F[U],Y=_(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,L+B,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):(O.toArray(C.__data,B),B+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,M,x,b){const S=y.value,E=M+"_"+x;if(b[E]===void 0)return typeof S=="number"||typeof S=="boolean"?b[E]=S:b[E]=S.clone(),!0;{const A=b[E];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return b[E]=S,!0}else if(A.equals(S)===!1)return A.copy(S),!0}return!1}function g(y){const M=y.uniforms;let x=0;const b=16;for(let E=0,A=M.length;E<A;E++){const w=Array.isArray(M[E])?M[E]:[M[E]];for(let v=0,C=w.length;v<C;v++){const L=w[v],F=Array.isArray(L.value)?L.value:[L.value];for(let B=0,U=F.length;B<U;B++){const O=F[B],Y=_(O),z=x%b,q=z%Y.boundary,ue=z+q;x+=q,ue!==0&&b-ue<Y.storage&&(x+=b-ue),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=Y.storage}}}const S=x%b;return S>0&&(x+=b-S),y.__size=x,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Pv{constructor(e={}){const{canvas:t=np(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let b=!1;this._outputColorSpace=yt;let S=0,E=0,A=null,w=-1,v=null;const C=new lt,L=new lt;let F=null;const B=new _e(0);let U=0,O=t.width,Y=t.height,z=1,q=null,ue=null;const Se=new lt(0,0,O,Y),G=new lt(0,0,O,Y);let J=!1;const le=new wl;let ae=!1,H=!1;const j=new Ge,ge=new P,Ee=new lt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function et(){return A===null?z:1}let N=n;function he(R,V){return t.getContext(R,V)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ol}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",xe,!1),N===null){const V="webgl2";if(N=he(V,R),N===null)throw he(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ce,re,oe,Te,me,te,Ze,Je,I,T,X,Q,ie,ee,Be,be,Re,Ue,ve,Le,Ce,ze,Pe,We;function k(){ce=new z_(N),ce.init(),ze=new wv(N,ce),re=new D_(N,ce,e,ze),oe=new Mv(N,ce),re.reversedDepthBuffer&&d&&oe.buffers.depth.setReversed(!0),Te=new G_(N),me=new av,te=new yv(N,ce,oe,me,re,ze,Te),Ze=new U_(x),Je=new k_(x),I=new Km(N),Pe=new I_(N,I),T=new H_(N,I,Te,Pe),X=new X_(N,T,I,Te),ve=new W_(N,re,te),be=new N_(me),Q=new ov(x,Ze,Je,ce,re,Pe,be),ie=new Rv(x,me),ee=new lv,Be=new mv(ce),Ue=new P_(x,Ze,Je,oe,X,f,l),Re=new xv(x,X,re),We=new Cv(N,Te,re,oe),Le=new L_(N,ce,Te),Ce=new V_(N,ce,Te),Te.programs=Q.programs,x.capabilities=re,x.extensions=ce,x.properties=me,x.renderLists=ee,x.shadowMap=Re,x.state=oe,x.info=Te}k();const Me=new Ev(x,N);this.xr=Me,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(O,Y,!1))},this.getSize=function(R){return R.set(O,Y)},this.setSize=function(R,V,K=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,Y=V,t.width=Math.floor(R*z),t.height=Math.floor(V*z),K===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(O*z,Y*z).floor()},this.setDrawingBufferSize=function(R,V,K){O=R,Y=V,z=K,t.width=Math.floor(R*K),t.height=Math.floor(V*K),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(Se)},this.setViewport=function(R,V,K,$){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,V,K,$),oe.viewport(C.copy(Se).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(G)},this.setScissor=function(R,V,K,$){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,V,K,$),oe.scissor(L.copy(G).multiplyScalar(z).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(R){oe.setScissorTest(J=R)},this.setOpaqueSort=function(R){q=R},this.setTransparentSort=function(R){ue=R},this.getClearColor=function(R){return R.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,K=!0){let $=0;if(R){let W=!1;if(A!==null){const we=A.texture.format;W=we===ml||we===pl||we===fl}if(W){const we=A.texture.type,De=we===Jn||we===Ki||we===Ir||we===Lr||we===hl||we===ul,ke=Ue.getClearColor(),Fe=Ue.getClearAlpha(),Ke=ke.r,Qe=ke.g,Xe=ke.b;De?(g[0]=Ke,g[1]=Qe,g[2]=Xe,g[3]=Fe,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Ke,_[1]=Qe,_[2]=Xe,_[3]=Fe,N.clearBufferiv(N.COLOR,0,_))}else $|=N.COLOR_BUFFER_BIT}V&&($|=N.DEPTH_BUFFER_BIT),K&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ue.dispose(),ee.dispose(),Be.dispose(),me.dispose(),Ze.dispose(),Je.dispose(),X.dispose(),Pe.dispose(),We.dispose(),Q.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",en),Me.removeEventListener("sessionend",Vl),Ni.stop()};function fe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=Te.autoReset,V=Re.enabled,K=Re.autoUpdate,$=Re.needsUpdate,W=Re.type;k(),Te.autoReset=R,Re.enabled=V,Re.autoUpdate=K,Re.needsUpdate=$,Re.type=W}function xe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function de(R){const V=R.target;V.removeEventListener("dispose",de),Ae(V)}function Ae(R){He(R),me.remove(R)}function He(R){const V=me.get(R).programs;V!==void 0&&(V.forEach(function(K){Q.releaseProgram(K)}),R.isShaderMaterial&&Q.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,K,$,W,we){V===null&&(V=ye);const De=W.isMesh&&W.matrixWorld.determinant()<0,ke=Zd(R,V,K,$,W);oe.setMaterial($,De);let Fe=K.index,Ke=1;if($.wireframe===!0){if(Fe=T.getWireframeAttribute(K),Fe===void 0)return;Ke=2}const Qe=K.drawRange,Xe=K.attributes.position;let ot=Qe.start*Ke,Mt=(Qe.start+Qe.count)*Ke;we!==null&&(ot=Math.max(ot,we.start*Ke),Mt=Math.min(Mt,(we.start+we.count)*Ke)),Fe!==null?(ot=Math.max(ot,0),Mt=Math.min(Mt,Fe.count)):Xe!=null&&(ot=Math.max(ot,0),Mt=Math.min(Mt,Xe.count));const Dt=Mt-ot;if(Dt<0||Dt===1/0)return;Pe.setup(W,$,ke,K,Fe);let Tt,wt=Le;if(Fe!==null&&(Tt=I.get(Fe),wt=Ce,wt.setIndex(Tt)),W.isMesh)$.wireframe===!0?(oe.setLineWidth($.wireframeLinewidth*et()),wt.setMode(N.LINES)):wt.setMode(N.TRIANGLES);else if(W.isLine){let Ye=$.linewidth;Ye===void 0&&(Ye=1),oe.setLineWidth(Ye*et()),W.isLineSegments?wt.setMode(N.LINES):W.isLineLoop?wt.setMode(N.LINE_LOOP):wt.setMode(N.LINE_STRIP)}else W.isPoints?wt.setMode(N.POINTS):W.isSprite&&wt.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))wt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ye=W._multiDrawStarts,At=W._multiDrawCounts,ht=W._multiDrawCount,an=Fe?I.get(Fe).bytesPerElement:1,ss=me.get($).currentProgram.getUniforms();for(let cn=0;cn<ht;cn++)ss.setValue(N,"_gl_DrawID",cn),wt.render(Ye[cn]/an,At[cn])}else if(W.isInstancedMesh)wt.renderInstances(ot,Dt,W.count);else if(K.isInstancedBufferGeometry){const Ye=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,At=Math.min(K.instanceCount,Ye);wt.renderInstances(ot,Dt,At)}else wt.render(ot,Dt)};function tt(R,V,K){R.transparent===!0&&R.side===ct&&R.forceSinglePass===!1?(R.side=$t,R.needsUpdate=!0,Qr(R,V,K),R.side=Kn,R.needsUpdate=!0,Qr(R,V,K),R.side=ct):Qr(R,V,K)}this.compile=function(R,V,K=null){K===null&&(K=R),p=Be.get(K),p.init(V),M.push(p),K.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),R!==K&&R.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const $=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const we=W.material;if(we)if(Array.isArray(we))for(let De=0;De<we.length;De++){const ke=we[De];tt(ke,K,W),$.add(ke)}else tt(we,K,W),$.add(we)}),p=M.pop(),$},this.compileAsync=function(R,V,K=null){const $=this.compile(R,V,K);return new Promise(W=>{function we(){if($.forEach(function(De){me.get(De).currentProgram.isReady()&&$.delete(De)}),$.size===0){W(R);return}setTimeout(we,10)}ce.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let $e=null;function vt(R){$e&&$e(R)}function en(){Ni.stop()}function Vl(){Ni.start()}const Ni=new Cd;Ni.setAnimationLoop(vt),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(R){$e=R,Me.setAnimationLoop(R),R===null?Ni.stop():Ni.start()},Me.addEventListener("sessionstart",en),Me.addEventListener("sessionend",Vl),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(V),V=Me.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,V,A),p=Be.get(R,M.length),p.init(V),M.push(p),j.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),le.setFromProjectionMatrix(j,Yn,V.reversedDepth),H=this.localClippingEnabled,ae=be.init(this.clippingPlanes,H),m=ee.get(R,y.length),m.init(),y.push(m),Me.enabled===!0&&Me.isPresenting===!0){const we=x.xr.getDepthSensingMesh();we!==null&&pa(we,V,-1/0,x.sortObjects)}pa(R,V,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(q,ue),Oe=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,Oe&&Ue.addToRenderList(m,R),this.info.render.frame++,ae===!0&&be.beginShadows();const K=p.state.shadowsArray;Re.render(K,R,V),ae===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,W=m.transmissive;if(p.setupLights(),V.isArrayCamera){const we=V.cameras;if(W.length>0)for(let De=0,ke=we.length;De<ke;De++){const Fe=we[De];Wl($,W,R,Fe)}Oe&&Ue.render(R);for(let De=0,ke=we.length;De<ke;De++){const Fe=we[De];Gl(m,R,Fe,Fe.viewport)}}else W.length>0&&Wl($,W,R,V),Oe&&Ue.render(R),Gl(m,R,V);A!==null&&E===0&&(te.updateMultisampleRenderTarget(A),te.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(x,R,V),Pe.resetDefaultState(),w=-1,v=null,M.pop(),M.length>0?(p=M[M.length-1],ae===!0&&be.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function pa(R,V,K,$){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||le.intersectsSprite(R)){$&&Ee.setFromMatrixPosition(R.matrixWorld).applyMatrix4(j);const De=X.update(R),ke=R.material;ke.visible&&m.push(R,De,ke,K,Ee.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||le.intersectsObject(R))){const De=X.update(R),ke=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ee.copy(R.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ee.copy(De.boundingSphere.center)),Ee.applyMatrix4(R.matrixWorld).applyMatrix4(j)),Array.isArray(ke)){const Fe=De.groups;for(let Ke=0,Qe=Fe.length;Ke<Qe;Ke++){const Xe=Fe[Ke],ot=ke[Xe.materialIndex];ot&&ot.visible&&m.push(R,De,ot,K,Ee.z,Xe)}}else ke.visible&&m.push(R,De,ke,K,Ee.z,null)}}const we=R.children;for(let De=0,ke=we.length;De<ke;De++)pa(we[De],V,K,$)}function Gl(R,V,K,$){const W=R.opaque,we=R.transmissive,De=R.transparent;p.setupLightsView(K),ae===!0&&be.setGlobalState(x.clippingPlanes,K),$&&oe.viewport(C.copy($)),W.length>0&&Zr(W,V,K),we.length>0&&Zr(we,V,K),De.length>0&&Zr(De,V,K),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Wl(R,V,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new dn(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?qn:Jn,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const we=p.state.transmissionRenderTarget[$.id],De=$.viewport||C;we.setSize(De.z*x.transmissionResolutionScale,De.w*x.transmissionResolutionScale);const ke=x.getRenderTarget(),Fe=x.getActiveCubeFace(),Ke=x.getActiveMipmapLevel();x.setRenderTarget(we),x.getClearColor(B),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear(),Oe&&Ue.render(K);const Qe=x.toneMapping;x.toneMapping=Pi;const Xe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),ae===!0&&be.setGlobalState(x.clippingPlanes,$),Zr(R,K,$),te.updateMultisampleRenderTarget(we),te.updateRenderTargetMipmap(we),ce.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Mt=0,Dt=V.length;Mt<Dt;Mt++){const Tt=V[Mt],wt=Tt.object,Ye=Tt.geometry,At=Tt.material,ht=Tt.group;if(At.side===ct&&wt.layers.test($.layers)){const an=At.side;At.side=$t,At.needsUpdate=!0,Xl(wt,K,$,Ye,At,ht),At.side=an,At.needsUpdate=!0,ot=!0}}ot===!0&&(te.updateMultisampleRenderTarget(we),te.updateRenderTargetMipmap(we))}x.setRenderTarget(ke,Fe,Ke),x.setClearColor(B,U),Xe!==void 0&&($.viewport=Xe),x.toneMapping=Qe}function Zr(R,V,K){const $=V.isScene===!0?V.overrideMaterial:null;for(let W=0,we=R.length;W<we;W++){const De=R[W],ke=De.object,Fe=De.geometry,Ke=De.group;let Qe=De.material;Qe.allowOverride===!0&&$!==null&&(Qe=$),ke.layers.test(K.layers)&&Xl(ke,V,K,Fe,Qe,Ke)}}function Xl(R,V,K,$,W,we){R.onBeforeRender(x,V,K,$,W,we),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(x,V,K,$,R,we),W.transparent===!0&&W.side===ct&&W.forceSinglePass===!1?(W.side=$t,W.needsUpdate=!0,x.renderBufferDirect(K,V,$,W,R,we),W.side=Kn,W.needsUpdate=!0,x.renderBufferDirect(K,V,$,W,R,we),W.side=ct):x.renderBufferDirect(K,V,$,W,R,we),R.onAfterRender(x,V,K,$,W,we)}function Qr(R,V,K){V.isScene!==!0&&(V=ye);const $=me.get(R),W=p.state.lights,we=p.state.shadowsArray,De=W.state.version,ke=Q.getParameters(R,W.state,we,V,K),Fe=Q.getProgramCacheKey(ke);let Ke=$.programs;$.environment=R.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(R.isMeshStandardMaterial?Je:Ze).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Ke===void 0&&(R.addEventListener("dispose",de),Ke=new Map,$.programs=Ke);let Qe=Ke.get(Fe);if(Qe!==void 0){if($.currentProgram===Qe&&$.lightsStateVersion===De)return ql(R,ke),Qe}else ke.uniforms=Q.getUniforms(R),R.onBeforeCompile(ke,x),Qe=Q.acquireProgram(ke,Fe),Ke.set(Fe,Qe),$.uniforms=ke.uniforms;const Xe=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=be.uniform),ql(R,ke),$.needsLights=ef(R),$.lightsStateVersion=De,$.needsLights&&(Xe.ambientLightColor.value=W.state.ambient,Xe.lightProbe.value=W.state.probe,Xe.directionalLights.value=W.state.directional,Xe.directionalLightShadows.value=W.state.directionalShadow,Xe.spotLights.value=W.state.spot,Xe.spotLightShadows.value=W.state.spotShadow,Xe.rectAreaLights.value=W.state.rectArea,Xe.ltc_1.value=W.state.rectAreaLTC1,Xe.ltc_2.value=W.state.rectAreaLTC2,Xe.pointLights.value=W.state.point,Xe.pointLightShadows.value=W.state.pointShadow,Xe.hemisphereLights.value=W.state.hemi,Xe.directionalShadowMap.value=W.state.directionalShadowMap,Xe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Xe.spotShadowMap.value=W.state.spotShadowMap,Xe.spotLightMatrix.value=W.state.spotLightMatrix,Xe.spotLightMap.value=W.state.spotLightMap,Xe.pointShadowMap.value=W.state.pointShadowMap,Xe.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=Qe,$.uniformsList=null,Qe}function Yl(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Wo.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function ql(R,V){const K=me.get(R);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function Zd(R,V,K,$,W){V.isScene!==!0&&(V=ye),te.resetTextureUnits();const we=V.fog,De=$.isMeshStandardMaterial?V.environment:null,ke=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Qt,Fe=($.isMeshStandardMaterial?Je:Ze).get($.envMap||De),Ke=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Qe=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Xe=!!K.morphAttributes.position,ot=!!K.morphAttributes.normal,Mt=!!K.morphAttributes.color;let Dt=Pi;$.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Dt=x.toneMapping);const Tt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,wt=Tt!==void 0?Tt.length:0,Ye=me.get($),At=p.state.lights;if(ae===!0&&(H===!0||R!==v)){const jt=R===v&&$.id===w;be.setState($,R,jt)}let ht=!1;$.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==At.state.version||Ye.outputColorSpace!==ke||W.isBatchedMesh&&Ye.batching===!1||!W.isBatchedMesh&&Ye.batching===!0||W.isBatchedMesh&&Ye.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ye.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ye.instancing===!1||!W.isInstancedMesh&&Ye.instancing===!0||W.isSkinnedMesh&&Ye.skinning===!1||!W.isSkinnedMesh&&Ye.skinning===!0||W.isInstancedMesh&&Ye.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ye.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ye.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ye.instancingMorph===!1&&W.morphTexture!==null||Ye.envMap!==Fe||$.fog===!0&&Ye.fog!==we||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==be.numPlanes||Ye.numIntersection!==be.numIntersection)||Ye.vertexAlphas!==Ke||Ye.vertexTangents!==Qe||Ye.morphTargets!==Xe||Ye.morphNormals!==ot||Ye.morphColors!==Mt||Ye.toneMapping!==Dt||Ye.morphTargetsCount!==wt)&&(ht=!0):(ht=!0,Ye.__version=$.version);let an=Ye.currentProgram;ht===!0&&(an=Qr($,V,W));let ss=!1,cn=!1,er=!1;const Rt=an.getUniforms(),fn=Ye.uniforms;if(oe.useProgram(an.program)&&(ss=!0,cn=!0,er=!0),$.id!==w&&(w=$.id,cn=!0),ss||v!==R){oe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Rt.setValue(N,"projectionMatrix",R.projectionMatrix),Rt.setValue(N,"viewMatrix",R.matrixWorldInverse);const tn=Rt.map.cameraPosition;tn!==void 0&&tn.setValue(N,ge.setFromMatrixPosition(R.matrixWorld)),re.logarithmicDepthBuffer&&Rt.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Rt.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),v!==R&&(v=R,cn=!0,er=!0)}if(W.isSkinnedMesh){Rt.setOptional(N,W,"bindMatrix"),Rt.setOptional(N,W,"bindMatrixInverse");const jt=W.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Rt.setValue(N,"boneTexture",jt.boneTexture,te))}W.isBatchedMesh&&(Rt.setOptional(N,W,"batchingTexture"),Rt.setValue(N,"batchingTexture",W._matricesTexture,te),Rt.setOptional(N,W,"batchingIdTexture"),Rt.setValue(N,"batchingIdTexture",W._indirectTexture,te),Rt.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&Rt.setValue(N,"batchingColorTexture",W._colorsTexture,te));const pn=K.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ve.update(W,K,an),(cn||Ye.receiveShadow!==W.receiveShadow)&&(Ye.receiveShadow=W.receiveShadow,Rt.setValue(N,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(fn.envMap.value=Fe,fn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(fn.envMapIntensity.value=V.environmentIntensity),cn&&(Rt.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&Qd(fn,er),we&&$.fog===!0&&ie.refreshFogUniforms(fn,we),ie.refreshMaterialUniforms(fn,$,z,Y,p.state.transmissionRenderTarget[R.id]),Wo.upload(N,Yl(Ye),fn,te)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Wo.upload(N,Yl(Ye),fn,te),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Rt.setValue(N,"center",W.center),Rt.setValue(N,"modelViewMatrix",W.modelViewMatrix),Rt.setValue(N,"normalMatrix",W.normalMatrix),Rt.setValue(N,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const jt=$.uniformsGroups;for(let tn=0,ma=jt.length;tn<ma;tn++){const Ui=jt[tn];We.update(Ui,an),We.bind(Ui,an)}}return an}function Qd(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function ef(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,V,K){const $=me.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),me.get(R.texture).__webglTexture=V,me.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){const K=me.get(R);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0};const tf=N.createFramebuffer();this.setRenderTarget=function(R,V=0,K=0){A=R,S=V,E=K;let $=!0,W=null,we=!1,De=!1;if(R){const Fe=me.get(R);if(Fe.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(N.FRAMEBUFFER,null),$=!1;else if(Fe.__webglFramebuffer===void 0)te.setupRenderTarget(R);else if(Fe.__hasExternalTextures)te.rebindTextures(R,me.get(R.texture).__webglTexture,me.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xe=R.depthTexture;if(Fe.__boundDepthTexture!==Xe){if(Xe!==null&&me.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(R)}}const Ke=R.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(De=!0);const Qe=me.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qe[V])?W=Qe[V][K]:W=Qe[V],we=!0):R.samples>0&&te.useMultisampledRTT(R)===!1?W=me.get(R).__webglMultisampledFramebuffer:Array.isArray(Qe)?W=Qe[K]:W=Qe,C.copy(R.viewport),L.copy(R.scissor),F=R.scissorTest}else C.copy(Se).multiplyScalar(z).floor(),L.copy(G).multiplyScalar(z).floor(),F=J;if(K!==0&&(W=tf),oe.bindFramebuffer(N.FRAMEBUFFER,W)&&$&&oe.drawBuffers(R,W),oe.viewport(C),oe.scissor(L),oe.setScissorTest(F),we){const Fe=me.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Fe.__webglTexture,K)}else if(De){const Fe=V;for(let Ke=0;Ke<R.textures.length;Ke++){const Qe=me.get(R.textures[Ke]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ke,Qe.__webglTexture,K,Fe)}}else if(R!==null&&K!==0){const Fe=me.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Fe.__webglTexture,K)}w=-1},this.readRenderTargetPixels=function(R,V,K,$,W,we,De,ke=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){oe.bindFramebuffer(N.FRAMEBUFFER,Fe);try{const Ke=R.textures[ke],Qe=Ke.format,Xe=Ke.type;if(!re.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-$&&K>=0&&K<=R.height-W&&(R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ke),N.readPixels(V,K,$,W,ze.convert(Qe),ze.convert(Xe),we))}finally{const Ke=A!==null?me.get(A).__webglFramebuffer:null;oe.bindFramebuffer(N.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(R,V,K,$,W,we,De,ke=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe)if(V>=0&&V<=R.width-$&&K>=0&&K<=R.height-W){oe.bindFramebuffer(N.FRAMEBUFFER,Fe);const Ke=R.textures[ke],Qe=Ke.format,Xe=Ke.type;if(!re.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ot),N.bufferData(N.PIXEL_PACK_BUFFER,we.byteLength,N.STREAM_READ),R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ke),N.readPixels(V,K,$,W,ze.convert(Qe),ze.convert(Xe),0);const Mt=A!==null?me.get(A).__webglFramebuffer:null;oe.bindFramebuffer(N.FRAMEBUFFER,Mt);const Dt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ip(N,Dt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ot),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,we),N.deleteBuffer(ot),N.deleteSync(Dt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,K=0){const $=Math.pow(2,-K),W=Math.floor(R.image.width*$),we=Math.floor(R.image.height*$),De=V!==null?V.x:0,ke=V!==null?V.y:0;te.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,De,ke,W,we),oe.unbindTexture()};const nf=N.createFramebuffer(),sf=N.createFramebuffer();this.copyTextureToTexture=function(R,V,K=null,$=null,W=0,we=null){we===null&&(W!==0?(Br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=W,W=0):we=0);let De,ke,Fe,Ke,Qe,Xe,ot,Mt,Dt;const Tt=R.isCompressedTexture?R.mipmaps[we]:R.image;if(K!==null)De=K.max.x-K.min.x,ke=K.max.y-K.min.y,Fe=K.isBox3?K.max.z-K.min.z:1,Ke=K.min.x,Qe=K.min.y,Xe=K.isBox3?K.min.z:0;else{const pn=Math.pow(2,-W);De=Math.floor(Tt.width*pn),ke=Math.floor(Tt.height*pn),R.isDataArrayTexture?Fe=Tt.depth:R.isData3DTexture?Fe=Math.floor(Tt.depth*pn):Fe=1,Ke=0,Qe=0,Xe=0}$!==null?(ot=$.x,Mt=$.y,Dt=$.z):(ot=0,Mt=0,Dt=0);const wt=ze.convert(V.format),Ye=ze.convert(V.type);let At;V.isData3DTexture?(te.setTexture3D(V,0),At=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(te.setTexture2DArray(V,0),At=N.TEXTURE_2D_ARRAY):(te.setTexture2D(V,0),At=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);const ht=N.getParameter(N.UNPACK_ROW_LENGTH),an=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ss=N.getParameter(N.UNPACK_SKIP_PIXELS),cn=N.getParameter(N.UNPACK_SKIP_ROWS),er=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Tt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Tt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ke),N.pixelStorei(N.UNPACK_SKIP_ROWS,Qe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Xe);const Rt=R.isDataArrayTexture||R.isData3DTexture,fn=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){const pn=me.get(R),jt=me.get(V),tn=me.get(pn.__renderTarget),ma=me.get(jt.__renderTarget);oe.bindFramebuffer(N.READ_FRAMEBUFFER,tn.__webglFramebuffer),oe.bindFramebuffer(N.DRAW_FRAMEBUFFER,ma.__webglFramebuffer);for(let Ui=0;Ui<Fe;Ui++)Rt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,me.get(R).__webglTexture,W,Xe+Ui),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,me.get(V).__webglTexture,we,Dt+Ui)),N.blitFramebuffer(Ke,Qe,De,ke,ot,Mt,De,ke,N.DEPTH_BUFFER_BIT,N.NEAREST);oe.bindFramebuffer(N.READ_FRAMEBUFFER,null),oe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||R.isRenderTargetTexture||me.has(R)){const pn=me.get(R),jt=me.get(V);oe.bindFramebuffer(N.READ_FRAMEBUFFER,nf),oe.bindFramebuffer(N.DRAW_FRAMEBUFFER,sf);for(let tn=0;tn<Fe;tn++)Rt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,pn.__webglTexture,W,Xe+tn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pn.__webglTexture,W),fn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,jt.__webglTexture,we,Dt+tn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,jt.__webglTexture,we),W!==0?N.blitFramebuffer(Ke,Qe,De,ke,ot,Mt,De,ke,N.COLOR_BUFFER_BIT,N.NEAREST):fn?N.copyTexSubImage3D(At,we,ot,Mt,Dt+tn,Ke,Qe,De,ke):N.copyTexSubImage2D(At,we,ot,Mt,Ke,Qe,De,ke);oe.bindFramebuffer(N.READ_FRAMEBUFFER,null),oe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else fn?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(At,we,ot,Mt,Dt,De,ke,Fe,wt,Ye,Tt.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(At,we,ot,Mt,Dt,De,ke,Fe,wt,Tt.data):N.texSubImage3D(At,we,ot,Mt,Dt,De,ke,Fe,wt,Ye,Tt):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,we,ot,Mt,De,ke,wt,Ye,Tt.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,we,ot,Mt,Tt.width,Tt.height,wt,Tt.data):N.texSubImage2D(N.TEXTURE_2D,we,ot,Mt,De,ke,wt,Ye,Tt);N.pixelStorei(N.UNPACK_ROW_LENGTH,ht),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,an),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ss),N.pixelStorei(N.UNPACK_SKIP_ROWS,cn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,er),we===0&&V.generateMipmaps&&N.generateMipmap(At),oe.unbindTexture()},this.initRenderTarget=function(R){me.get(R).__webglFramebuffer===void 0&&te.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?te.setTextureCube(R,0):R.isData3DTexture?te.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?te.setTexture2DArray(R,0):te.setTexture2D(R,0),oe.unbindTexture()},this.resetState=function(){S=0,E=0,A=null,oe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const Xo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Zs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Iv=new la(-1,1,1,-1,0,1);class Lv extends dt{constructor(){super(),this.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ve([0,2,0,0,2,0],2))}}const Dv=new Lv;class Ul{constructor(e){this._mesh=new D(Dv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Iv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Nv extends Zs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ji.clone(e.uniforms),this.material=new qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ul(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class xu extends Zs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Uv extends Zs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Fv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Z);this._width=n.width,this._height=n.height,t=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nv(Xo),this.copyPass.material.blending=mi,this.clock=new Om}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}xu!==void 0&&(o instanceof xu?n=!0:o instanceof Uv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ov extends Zs{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _e}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Bv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Xs extends Zs{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Z(e.x,e.y):new Z(256,256),this.clearColor=new _e(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(r,o,{type:qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new dn(r,o,{type:qn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new dn(r,o,{type:qn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=Bv;this.highPassUniforms=Ji.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Z(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ji.clone(Xo.uniforms),this.blendMaterial=new qt({uniforms:this.copyUniforms,vertexShader:Xo.vertexShader,fragmentShader:Xo.fragmentShader,blending:on,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new _e,this._oldClearAlpha=1,this._basic=new Vt,this._fsQuad=new Ul(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Z(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Xs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Xs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new qt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Z(.5,.5)},direction:{value:new Z(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new qt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Xs.BlurDirectionX=new Z(1,0);Xs.BlurDirectionY=new Z(0,1);const No={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class kv extends Zs{constructor(){super(),this.uniforms=Ji.clone(No.uniforms),this.material=new fm({name:No.name,uniforms:this.uniforms,vertexShader:No.vertexShader,fragmentShader:No.fragmentShader}),this._fsQuad=new Ul(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===cl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Wu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Gu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const qi=[{id:"discovery-01",type:"discovery",chapterNumber:"01",name:"THE LANTERN GATE",title:"Just keep <em>walking.</em>",date:"Garden Discovery · 01",description:"There are a few little things I wanted to show you.",interactLabel:"Light the lantern",location:{x:-1.4,z:16},interactionRadius:3.4,assetReference:"lantern-gate",ambientEffect:"lantern-flare",isUnlocked:!0,isPrivate:!1,sortOrder:1},{id:"discovery-02",type:"discovery",chapterNumber:"02",name:"THE FIREFLY POND",title:"Our random chats <em>make me smile.</em>",date:"Garden Discovery · 02",description:"Even the ones that make absolutely no sense ✿",interactLabel:"Follow the firefly",location:{x:-4.2,z:-2},interactionRadius:3.6,assetReference:"firefly-pond",ambientEffect:"firefly-swirl",isUnlocked:!0,isPrivate:!1,sortOrder:2},{id:"discovery-03",type:"discovery",chapterNumber:"03",name:"A LITTLE SURPRISE",title:"Still can't believe you enjoy <em>horror movies.</em>",date:"Garden Discovery · 03",description:"I'd be the first one hiding behind a pillow.",interactLabel:"Say hello to the little spirit",location:{x:2.2,z:-12},interactionRadius:3.4,assetReference:"shy-spirit",ambientEffect:"spirit-wave",isUnlocked:!0,isPrivate:!1,sortOrder:3},{id:"discovery-04",type:"discovery",chapterNumber:"04",name:"THE BLOSSOM GROVE",title:"I'm really glad <em>we met.</em>",date:"Garden Discovery · 04",description:"Thanks for being you, Hirushi :)",interactLabel:"Open the blossom",location:{x:0,z:-30},interactionRadius:3.6,assetReference:"blossom-shrine",ambientEffect:"blossom-bloom",isUnlocked:!0,isPrivate:!1,sortOrder:4}],zv=[{id:"memory-01",type:"memory",code:"MEMORY 01",title:"That Headband",date:"Early days at university",theme:null,description:"I noticed you during the first few days of uni. I remember that headband too 😂. I thought you were cute and kind of my type, even though I didn't know you at all. Just a little crush back then.",interactLabel:"Look at the headband stand",location:{x:1.9,z:18.5},category:"beginning",interactionRadius:3.1,assetReference:"headband-stand",photo:null,photoCaption:"Optional slot for a campus or first-day photograph.",ambientEffect:"morning-petals",isUnlocked:!0,isPrivate:!1,sortOrder:1},{id:"memory-02",type:"memory",code:"MEMORY 02",title:"The Assignment Photo",date:"July 27, 2026",theme:null,description:"Then we ended up in the same sustainability assignment group. We even took that group photo together. The funny thing is, we barely spoke. I think our eyes met maybe three or four times, and that was about it. I still had that tiny crush, though 😂.",interactLabel:"Inspect the assignment photo stand",location:{x:-2.2,z:11.2},category:"university",interactionRadius:3.1,assetReference:"photo-stand",photo:null,photoCaption:"Group assignment photograph (July 27, 2026) — attach image file or URL when ready.",ambientEffect:"warm-shimmer",isUnlocked:!0,isPrivate:!1,sortOrder:2},{id:"memory-03",type:"memory",code:"MEMORY 03",title:"After Exams",date:"After the exams",theme:null,description:"After exams, we finally had a little conversation. Mostly just talking about the exams and random uni stuff. Nothing special happened, but after that I started noticing you more whenever I saw you around campus. Somehow I kept finding you cuter 😂.",interactLabel:"Sit by the post-exam seats",location:{x:2.3,z:6.2},category:"university",interactionRadius:3.1,assetReference:"after-exams-seats",photo:null,photoCaption:null,ambientEffect:"drifting-petals",isUnlocked:!0,isPrivate:!1,sortOrder:3},{id:"memory-04",type:"memory",code:"MEMORY 04",title:"The First Text (and Chocolate)",date:"Early October 2026",theme:null,description:"Eventually I got your number from the sustainability group and decided to text you. That first “Hi” took more courage than it should have 😂. Not long after, I came to see you with a chocolate. It was my first time giving chocolate to a crush. I stayed for maybe a minute, gave it to you awkwardly, and escaped.",interactLabel:"Look at the phone & chocolate",location:{x:-2.3,z:1.8},category:"keepsake",interactionRadius:3.1,assetReference:"first-text-chocolate",photo:null,photoCaption:null,ambientEffect:"breeze-swirl",isUnlocked:!0,isPrivate:!1,sortOrder:4},{id:"memory-05",type:"memory",code:"MEMORY 05",title:"The Cupcake Wrapper",date:"October 15, 2026",theme:null,description:"On your birthday I brought you a little chocolate, and you gave cupcakes to me and my friends. There was even some chocolate cake. I was ridiculously happy that day. I actually kept the cupcake wrapper afterward. I've never really done that before, but I just didn't want to forget that day.",interactLabel:"Look at the cupcake wrapper & table",location:{x:2.3,z:-4.5},category:"keepsake",interactionRadius:3.1,assetReference:"cupcake-wrapper-table",photo:null,photoCaption:"Optional slot for a photo of the birthday cupcake or saved wrapper.",ambientEffect:"gentle-glow",isUnlocked:!0,isPrivate:!1,sortOrder:5},{id:"memory-06",type:"memory",code:"MEMORY 06",title:"At the Student Centre",date:"Later in October 2026",theme:null,description:"The next time we sat together at the Student Centre, you weren't feeling well because of your wheeze. Your friends went off for a while, so we got to talk about random things. I remember you covering your mouth with a handkerchief most of the time. I couldn't tell whether you were shy or just feeling sick 😅. Either way, it was nice to finally sit and talk with you properly.",personalNoteHint:"Optional private note slot (kept out of the public bundle by default).",interactLabel:"Sit at the Student Centre table",location:{x:-2.4,z:-8.5},category:"friendship",interactionRadius:3.1,assetReference:"student-centre-table",photo:null,photoCaption:null,ambientEffect:"lantern-spark",isUnlocked:!0,isPrivate:!1,sortOrder:6},{id:"memory-07",type:"memory",code:"MEMORY 07",title:"The Organ",date:"October 2026",theme:null,description:"Somewhere along the way I found out you could play the organ and that you were in the church choir. I didn't know that about you before, so naturally I got curious. It was nice finding out things about you beyond our usual random chats.",interactLabel:"Inspect the choir organ",location:{x:2.4,z:-15.8},category:"milestone",interactionRadius:3.1,assetReference:"choir-organ",photo:null,photoCaption:null,ambientEffect:"pulse-ring",isUnlocked:!0,isPrivate:!1,sortOrder:7},{id:"memory-08",type:"memory",code:"MEMORY 08",title:"The Seat Behind You",date:"November 12, 2026",theme:null,description:"You teased me by saying you hadn't come to uni, and I actually believed you 😭. After somehow missing each other most of the day, I ended up sitting behind you in the last lecture. You asked, “Ai oya mage pitipasse inne hamadama? 😒” and I was like, “Dawas dekai hitiye” 😂. You also helped me find Panadol when I had a headache. Then came that little goodbye wave. Not a bad ending after all.",interactLabel:"Look at the two lecture rows",location:{x:-2.3,z:-20.2},category:"university",interactionRadius:3.1,assetReference:"lecture-rows",photo:null,photoCaption:null,ambientEffect:"drifting-petals",isUnlocked:!0,isPrivate:!1,sortOrder:8},{id:"memory-09",type:"memory",code:"MEMORY 09",title:"The Library Key Disaster",date:"November 13, 2026",theme:null,description:"We went to the library to work on our web project, and somehow the day became complete chaos. Your friends wrote “Hirushi × Menaka” on the whiteboard, you offered us space in the next study room, and then my friend broke the key 💀. We even had our first tiny phone call that day. After all the key drama, there was iced coffee, and that short walk out of the library talking about Tunnel was a nice ending.",interactLabel:"Explore the library study room",location:{x:2.3,z:-24.8},category:"university",interactionRadius:3.2,assetReference:"library-study-room",photo:null,photoCaption:null,ambientEffect:"lantern-spark",isUnlocked:!0,isPrivate:!1,sortOrder:9},{id:"memory-10",type:"memory",code:"MEMORY 10",title:"IT Movie Night",date:"November 13–14, 2026",theme:null,description:"Later that night you reminded me that IT was on TV. I found a way to watch it on my laptop too, so we ended up watching from different places and texting about it. You kept saying I'd get scared and wouldn't even last until midnight 😂. Honestly, all that teasing was more memorable than the movie.",interactLabel:"Visit the midnight movie spaces",location:{x:0,z:-35},category:"evening",interactionRadius:3.5,assetReference:"it-movie-night",photo:null,photoCaption:null,ambientEffect:"cinema-flicker",isUnlocked:!0,isPrivate:!1,sortOrder:10}];function Fl(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new dt;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=vu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=vu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function vu(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Lt(o,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Mu(s,e){if(e===Cf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Yc||e===td){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Yc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}const St={blossomDeep:"#D98DA9",blossomMid:"#F1B3C8",blossomPale:"#F6D6DD",warmIvory:"#F2E5C9",amberCore:"#F5C987",lanternGlow:"#FFD9A0"},Ys={uTime:{value:0},uWindAmp:{value:1}};function is(s=78){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Hv(s){const e=new Cl,t=Math.min(8,s.capabilities.getMaxAnisotropy()||4);function n(Ae,{srgb:He=!0,repeat:tt=[1,1],clamp:$e=!1}={}){const vt=e.load(`./assets/textures/${Ae}`);return vt.colorSpace=He?yt:ui,vt.wrapS=$e?Wn:Li,vt.wrapT=$e?Wn:Li,vt.repeat.set(tt[0],tt[1]),vt.anisotropy=t,vt.generateMipmaps=!0,vt.minFilter=Xn,vt.magFilter=sn,vt}function i(Ae,{heightStart:He=0,amp:tt=.06,speed:$e=1.6}={}){Ae.onBeforeCompile=vt=>{vt.uniforms.uTime=Ys.uTime,vt.uniforms.uWindAmp=Ys.uWindAmp,vt.vertexShader=`uniform float uTime;
uniform float uWindAmp;
`+vt.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
          float wFactor = max(0.0, uv.y - ${He.toFixed(2)});
          vec4 wp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            wp = instanceMatrix * wp;
          #endif
          float phase = wp.x * 0.45 + wp.z * 0.38;
          transformed.x += sin(uTime * ${$e.toFixed(2)} + phase) * ${tt.toFixed(3)} * wFactor * uWindAmp;
          transformed.z += cos(uTime * ${($e*.83).toFixed(2)} + phase * 1.3) * ${(tt*.7).toFixed(3)} * wFactor * uWindAmp;`)}}const r=n("bark_albedo.webp",{repeat:[1,3]}),o=n("bark_normal.webp",{srgb:!1,repeat:[1,3]}),a=n("bark_roughness.webp",{srgb:!1,repeat:[1,3]}),l=n("stone_albedo.webp",{repeat:[1.5,1.5]}),c=n("stone_normal.webp",{srgb:!1,repeat:[1.5,1.5]}),h=n("stone_roughness.webp",{srgb:!1,repeat:[1.5,1.5]}),u=n("wood_albedo.webp",{repeat:[1.5,1.5]}),d=n("wood_normal.webp",{srgb:!1,repeat:[1.5,1.5]}),f=n("roof_tile_albedo.webp",{repeat:[3,2]}),g=n("roof_tile_normal.webp",{srgb:!1,repeat:[3,2]}),_=n("terrain_grass_albedo.webp",{repeat:[26,26]}),m=n("terrain_soil_albedo.webp",{repeat:[26,26]}),p=n("terrain_normal.webp",{srgb:!1,repeat:[26,26]}),y=n("blossom_cluster.webp",{clamp:!0}),M=n("grass_wildflower_card.webp",{clamp:!0}),x=n("shrub_foliage.webp",{clamp:!0}),b=n("waterlily_pad.webp",{clamp:!0}),S=n("shoji_paper.webp",{clamp:!0}),E=n("linen_cloth.webp",{repeat:[1,1]}),A=n("water_normal.webp",{srgb:!1,repeat:[4,4]}),w=n("sky_twilight.webp",{clamp:!0}),v=n("memory_photo_art.webp",{clamp:!0}),C=n("cinema_screen_art.webp",{clamp:!0}),L=n("welcome_sign_art.webp",{clamp:!0}),F=new pe({map:r,normalMap:o,normalScale:new Z(1.35,1.35),roughnessMap:a,roughness:.92,metalness:.02}),B=new pe({map:l,normalMap:c,normalScale:new Z(1.15,1.15),roughnessMap:h,roughness:.88,metalness:.04}),U=new pe({color:"#918d8a",map:l,normalMap:c,normalScale:new Z(1.2,1.2),roughnessMap:h,roughness:.9,metalness:.04}),O=new pe({color:"#c8b2a2",map:u,normalMap:d,normalScale:new Z(1,1),roughness:.84,metalness:.03}),Y=new pe({color:"#7a6056",map:u,normalMap:d,normalScale:new Z(1,1),roughness:.88,metalness:.03}),z=new pe({map:f,normalMap:g,normalScale:new Z(1.25,1.25),roughness:.72,metalness:.08}),q=new pe({map:S,emissiveMap:S,emissive:new _e("#ffb969"),emissiveIntensity:1.55,roughness:.5}),ue=new pe({map:y,alphaTest:.36,side:ct,roughness:.86,metalness:0,emissive:new _e("#8c4f67"),emissiveIntensity:.32});i(ue,{heightStart:.15,amp:.05,speed:1.4});const Se=new pe({map:M,alphaTest:.36,side:ct,roughness:.88,metalness:0});i(Se,{heightStart:.08,amp:.07,speed:1.9});const G=new pe({map:x,alphaTest:.36,side:ct,roughness:.84,metalness:0});i(G,{heightStart:.12,amp:.04,speed:1.5});const J=new pe({vertexColors:!0,side:ct,roughness:.76,metalness:.02});i(J,{heightStart:.04,amp:.068,speed:1.85});const le=new pe({map:b,alphaTest:.4,side:ct,roughness:.65,metalness:.05}),ae=new pe({map:E,roughness:.92,side:ct}),H=new pe({color:"#ece2d4",roughness:.34,metalness:.05}),j=new pe({color:"#323740",roughness:.45,metalness:.65}),ge=new pe({color:"#d8b275",roughness:.35,metalness:.82}),Ee=new pe({color:"#e5eef5",roughness:.1,metalness:.12,envMapIntensity:1.5,transparent:!0,opacity:.46}),ye=document.createElement("canvas");ye.width=ye.height=128;const Oe=ye.getContext("2d"),et=Oe.createRadialGradient(64,64,0,64,64,64);et.addColorStop(0,"rgba(255, 240, 200, 1)"),et.addColorStop(.18,"rgba(255, 214, 150, 0.65)"),et.addColorStop(.5,"rgba(255, 185, 115, 0.14)"),et.addColorStop(1,"rgba(255, 185, 115, 0)"),Oe.fillStyle=et,Oe.fillRect(0,0,128,128);const N=new ai(ye);N.colorSpace=yt;const he=document.createElement("canvas");he.width=he.height=64;const ce=he.getContext("2d"),re=ce.createRadialGradient(32,32,2,32,32,31);re.addColorStop(0,"rgba(18, 22, 34, 0.55)"),re.addColorStop(.55,"rgba(18, 22, 34, 0.22)"),re.addColorStop(1,"rgba(18, 22, 34, 0)"),ce.fillStyle=re,ce.fillRect(0,0,64,64);const oe=new ai(he),Te=new Vt({map:oe,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),me=document.createElement("canvas");me.width=512,me.height=384;const te=me.getContext("2d"),Ze=te.createLinearGradient(0,0,0,384);Ze.addColorStop(0,"#f6efe4"),Ze.addColorStop(1,"#e7dccb"),te.fillStyle=Ze,te.fillRect(0,0,512,384),te.strokeStyle="#9a826b",te.lineWidth=4,te.strokeRect(24,24,464,336),te.strokeStyle="#c5ad93",te.lineWidth=2,te.setLineDash([8,6]),te.strokeRect(42,42,428,300),te.setLineDash([]),te.fillStyle="#6f5542";for(const[Ae,He,tt,$e]of[[36,36,1,1],[476,36,-1,1],[36,348,1,-1],[476,348,-1,-1]])te.beginPath(),te.moveTo(Ae,He),te.lineTo(Ae+tt*28,He),te.lineTo(Ae,He+$e*28),te.closePath(),te.fill();te.save(),te.translate(256,142),te.fillStyle="rgba(105, 138, 102, 0.18)",te.beginPath(),te.arc(0,0,54,0,Math.PI*2),te.fill(),te.strokeStyle="#5c7f59",te.lineWidth=4,te.fillStyle="#7ea37a",te.beginPath(),te.moveTo(0,34),te.bezierCurveTo(-36,18,-38,-24,0,-40),te.bezierCurveTo(38,-24,36,18,0,34),te.fill(),te.stroke(),te.beginPath(),te.moveTo(0,36),te.lineTo(0,-28),te.stroke(),te.restore(),te.fillStyle="#4e3c30",te.textAlign="center",te.font='600 18px "Plus Jakarta Sans", sans-serif',te.fillText("JULY 27, 2026 · UNIVERSITY",256,232),te.font='italic 600 28px "Cormorant Garamond", Georgia, serif',te.fillText("Sustainability Group Photo",256,268),te.fillStyle="#7d6858",te.font='500 15px "Plus Jakarta Sans", sans-serif',te.fillText("[ Reserved for Real Group Photograph ]",256,304);const Je=new ai(me);Je.colorSpace=yt;const I=document.createElement("canvas");I.width=256,I.height=340;const T=I.getContext("2d");T.fillStyle="#f8f3ea",T.fillRect(0,0,256,340),T.fillStyle="#3d4c63",T.fillRect(20,22,140,10),T.fillStyle="#7b8ba1",T.fillRect(20,40,95,6),T.strokeStyle="#c4baa8",T.lineWidth=2,T.strokeRect(18,16,220,308);for(let Ae=68;Ae<300;Ae+=18)T.strokeStyle="rgba(130, 148, 170, 0.45)",T.beginPath(),T.moveTo(28,Ae),T.lineTo(226,Ae),T.stroke(),Ae%36===0&&(T.fillStyle="rgba(70, 82, 98, 0.65)",T.fillRect(32,Ae-9,110+Ae*13%65,4));T.strokeStyle="#c45b5b",T.lineWidth=3,T.strokeRect(184,24,42,32),T.beginPath(),T.moveTo(193,40),T.lineTo(202,48),T.lineTo(218,30),T.stroke();const X=new ai(I);X.colorSpace=yt;const Q=document.createElement("canvas");Q.width=256,Q.height=512;const ie=Q.getContext("2d"),ee=ie.createLinearGradient(0,0,0,512);ee.addColorStop(0,"#1d2438"),ee.addColorStop(.5,"#2b334d"),ee.addColorStop(1,"#3b2d44"),ie.fillStyle=ee,ie.fillRect(0,0,256,512),ie.fillStyle="rgba(255, 246, 235, 0.9)",ie.textAlign="center",ie.font='300 54px "Plus Jakarta Sans", sans-serif',ie.fillText("18:42",128,128),ie.fillStyle="rgba(34, 28, 44, 0.92)",ie.strokeStyle="#e8b878",ie.lineWidth=4,ie.beginPath(),ie.roundRect(22,200,212,92,18),ie.fill(),ie.stroke(),ie.fillStyle="#e8b878",ie.textAlign="left",ie.font='700 16px "Plus Jakarta Sans", sans-serif',ie.fillText("NEW MESSAGE",42,234),ie.fillStyle="#fff5e6",ie.font='700 30px "Plus Jakarta Sans", sans-serif',ie.fillText("“Hi”",42,272);const Be=new ai(Q);Be.colorSpace=yt;const be=document.createElement("canvas");be.width=512,be.height=340;const Re=be.getContext("2d");Re.fillStyle="#f7f0e2",Re.fillRect(0,0,512,340);const Ue=Re.createLinearGradient(236,0,276,0);Ue.addColorStop(0,"rgba(90,70,50,0)"),Ue.addColorStop(.5,"rgba(90,70,50,0.28)"),Ue.addColorStop(1,"rgba(90,70,50,0)"),Re.fillStyle=Ue,Re.fillRect(236,0,40,340),Re.strokeStyle="#5c4d3d",Re.fillStyle="#3b2f25";for(const Ae of[28,278]){Re.fillRect(Ae+45,24,110,7);for(let He=0;He<4;He++){const tt=58+He*66;Re.lineWidth=1.5;for(let $e=0;$e<5;$e++)Re.beginPath(),Re.moveTo(Ae,tt+$e*7),Re.lineTo(Ae+204,tt+$e*7),Re.stroke();for(let $e=0;$e<7;$e++){const vt=Ae+18+$e*26,en=tt+($e*11+He*7)%4*7;Re.beginPath(),Re.ellipse(vt,en,5,3.8,-.3,0,Math.PI*2),Re.fill(),Re.lineWidth=2,Re.beginPath(),Re.moveTo(vt+4,en),Re.lineTo(vt+4,en-20),Re.stroke()}}}const ve=new ai(be);ve.colorSpace=yt;const Le=document.createElement("canvas");Le.width=512,Le.height=320;const Ce=Le.getContext("2d");Ce.fillStyle="#f7f9fc",Ce.fillRect(0,0,512,320),Ce.strokeStyle="rgba(70, 105, 155, 0.35)",Ce.lineWidth=3,Ce.strokeRect(28,36,130,90),Ce.beginPath(),Ce.moveTo(28,60),Ce.lineTo(158,60),Ce.stroke(),Ce.strokeRect(40,72,46,40),Ce.strokeRect(96,72,50,40),Ce.save(),Ce.translate(275,165),Ce.rotate(-.04),Ce.fillStyle="#24477a",Ce.textAlign="center",Ce.font='700 42px "Comic Sans MS", "Segoe Print", "Plus Jakarta Sans", cursive, sans-serif',Ce.fillText("Hirushi × Menaka",0,0),Ce.strokeStyle="#c84b6b",Ce.lineWidth=5,Ce.lineCap="round",Ce.beginPath(),Ce.moveTo(-165,22),Ce.quadraticCurveTo(0,34,168,16),Ce.stroke(),Ce.restore(),Ce.fillStyle="#53687e",Ce.font='600 16px "Plus Jakarta Sans", sans-serif',Ce.fillText("Web Project · Study Room 02",32,282);const ze=new ai(Le);ze.colorSpace=yt;const Pe=document.createElement("canvas");Pe.width=256,Pe.height=160;const We=Pe.getContext("2d");We.fillStyle="#1b2230",We.fillRect(0,0,256,160),We.fillStyle="#273144",We.fillRect(0,0,56,160),We.fillStyle="#f2ede4",We.fillRect(68,16,172,128),We.fillStyle="#6b94b8",We.fillRect(76,24,156,26),We.fillStyle="#d8b4a0",We.fillRect(76,58,74,68),We.fillStyle="#9bb89e",We.fillRect(158,58,74,68);const k=new ai(Pe);k.colorSpace=yt;const Me=document.createElement("canvas");Me.width=512,Me.height=320;const fe=Me.getContext("2d"),Ne=fe.createLinearGradient(0,0,0,320);Ne.addColorStop(0,"#0d101d"),Ne.addColorStop(.58,"#1a1b2f"),Ne.addColorStop(1,"#261824"),fe.fillStyle=Ne,fe.fillRect(0,0,512,320);const xe=fe.createRadialGradient(256,220,8,256,220,145);xe.addColorStop(0,"rgba(235, 92, 75, 0.52)"),xe.addColorStop(.5,"rgba(245, 162, 92, 0.22)"),xe.addColorStop(1,"rgba(20, 18, 30, 0)"),fe.fillStyle=xe,fe.fillRect(0,120,512,200),fe.strokeStyle="rgba(185, 205, 235, 0.22)",fe.lineWidth=1.5;for(let Ae=0;Ae<42;Ae++){const He=Ae*47%500,tt=Ae*29%240;fe.beginPath(),fe.moveTo(He,tt),fe.lineTo(He-8,tt+26),fe.stroke()}fe.save(),fe.translate(256,208),fe.fillStyle="#f2c14e",fe.beginPath(),fe.moveTo(-48,0),fe.lineTo(48,0),fe.lineTo(32,20),fe.lineTo(-32,20),fe.closePath(),fe.fill(),fe.fillStyle="#ffd972",fe.beginPath(),fe.moveTo(0,-34),fe.lineTo(24,0),fe.lineTo(-24,0),fe.closePath(),fe.fill(),fe.restore();const de=new ai(Me);return de.colorSpace=yt,{textures:{grassTex:_,soilTex:m,terrainNormal:p,waterNormal:A,skyTex:w,photoArtTex:v,cinemaArtTex:C,welcomeSignTex:L,glowTex:N,blossomTex:y,assignmentPlaceholderTex:Je,examSheetTex:X,phoneLockTex:Be,sheetMusicTex:ve,whiteboardTex:ze,webProjectScreenTex:k,movieScreenTex:de},materials:{barkMat:F,stoneMat:B,stoneDarkMat:U,woodMat:O,woodDarkMat:Y,roofTileMat:z,shojiMat:q,blossomCardMat:ue,grassCardMat:Se,shrubCardMat:G,foliage3DMat:J,lilyPadMat:le,linenMat:ae,ceramicMat:H,darkMetalMat:j,brassMat:ge,glassMat:Ee,contactShadowMat:Te}}}function Jr(s,e,t=.8,n=.015){const i=new D(new ft(t*2,t*2),e);return i.rotation.x=-Math.PI/2,i.position.y=n,s.add(i),i}function Zi(s,e=[]){const t=new Set(e);s.updateMatrixWorld(!0);const n=s.matrixWorld.clone().invert(),i=new Map,r=[];s.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||Array.isArray(o.material))return;let a=o;for(;a&&a!==s;){if(t.has(a))return;a=a.parent}if(t.has(o))return;const l=new Ge().multiplyMatrices(n,o.matrixWorld);let c=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();const h=!!o.material.vertexColors;for(const d of Object.keys(c.attributes))d!=="position"&&d!=="normal"&&d!=="uv"&&!(h&&d==="color")&&c.deleteAttribute(d);if(c.attributes.normal||c.computeVertexNormals(),!c.attributes.uv){const d=c.attributes.position.count;c.setAttribute("uv",new Lt(new Float32Array(d*2),2))}c.clearGroups(),c.applyMatrix4(l);const u=i.get(o.material)||{geos:[],castShadow:!1,receiveShadow:!1};u.geos.push(c),u.castShadow=u.castShadow||o.castShadow,u.receiveShadow=u.receiveShadow||o.receiveShadow,i.set(o.material,u),r.push(o)});for(const o of r)o.parent?.remove(o);for(const[o,a]of i.entries()){if(!a.geos.length)continue;const l=Fl(a.geos,!1);if(a.geos.forEach(h=>h.dispose()),!l)continue;const c=new D(l,o);c.castShadow=a.castShadow,c.receiveShadow=a.receiveShadow,s.add(c)}}function zt(s){return Math.sin(s*.13)*1.75}function Ci(s,e){const t=(s+10.6)/6,n=(e+2.2)/8,i=Math.atan2(n,t),r=1+Math.sin(i*2+.6)*.11+Math.cos(i*3-.4)*.07;return Math.hypot(t,n)/r*6}function xt(s,e){const t=Ci(s,e);if(t<6.4)return-.82*(1-kt.smoothstep(t,1.2,6.2));const n=Math.abs(s-zt(e)),i=Math.hypot(s+4.2,e+14.2),r=kt.smoothstep(n,1.9,6.8),o=kt.smoothstep(i,3.6,7.2),a=Math.sin(s*.12+.4)*Math.cos(e*.1)*.55+Math.sin((s-e)*.065)*.35,l=Math.max(0,Math.abs(s)-15.5),c=Math.max(0,-40-e),h=Math.min(2.6,l*l*.0055+c*c*.0045);return Math.max(-.04,a*r*o+h)}function Vv(s,e=.65){const t=new ts,n=6+Math.floor(s()*3);for(let a=0;a<n;a++){const l=a/n*Math.PI*2,c=e*(.76+s()*.36),h=Math.cos(l)*c,u=Math.sin(l)*c*(.78+s()*.32);a===0?t.moveTo(h,u):t.lineTo(h,u)}t.closePath();const i=new Yr(t,{depth:.09,bevelEnabled:!0,bevelThickness:.03,bevelSize:.035,bevelSegments:2,curveSegments:1});i.rotateX(-Math.PI/2);const r=i.attributes.position,o=i.attributes.uv;for(let a=0;a<r.count;a++)o.setXY(a,r.getX(a)*.7+.5,r.getZ(a)*.7+.5);return i.computeVertexNormals(),i}function Gv(s,e=2){const t=new Al(1,e),n=t.attributes.position,i=new P,r=s()*10,o=s()*10;for(let a=0;a<n.count;a++){i.fromBufferAttribute(n,a);const l=Math.sin(i.x*2.6+r)*Math.cos(i.y*2.3+o)*.16+Math.sin(i.z*3.8-r)*.09;i.multiplyScalar(1+l),i.y<-.25&&(i.y=-.25+(i.y+.25)*.35),i.y>.55&&(i.y=.55+(i.y-.55)*.55),n.setXYZ(a,i.x,i.y,i.z)}return t.computeVertexNormals(),t}function nl({baseW:s=.045,height:e=.45,bend:t=.14,yaw:n=0,lean:i=.05,ox:r=0,oz:o=0,segs:a=3,colBase:l,colTip:c}){const h=[],u=[],d=[],f=Math.cos(n),g=Math.sin(n);for(let m=0;m<=a;m++){const p=m/a,y=s*(1-p*.92),M=p*e,x=i*p+t*p*p,b=l.clone().lerp(c,p);for(const S of[-1,1]){const E=S*y,A=x,w=r+E*f-A*g,v=o+E*g+A*f;h.push(w,M,v),u.push(b.r,b.g,b.b)}if(m<a){const S=m*2;d.push(S,S+1,S+2,S+1,S+3,S+2)}}const _=new dt;return _.setAttribute("position",new Ve(h,3)),_.setAttribute("color",new Ve(u,3)),_.setIndex(d),_.computeVertexNormals(),_}function Nd(s){const e=s.reduce((l,c)=>l+c.attributes.position.count,0),t=new Float32Array(e*3),n=new Float32Array(e*3),i=new Float32Array(e*3),r=[];let o=0;for(const l of s){const c=l.attributes.position;l.attributes.normal||l.computeVertexNormals();const h=l.attributes.normal,u=l.attributes.color;t.set(c.array,o*3),n.set(h.array,o*3),u&&i.set(u.array,o*3);const d=l.index;if(d)for(let f=0;f<d.count;f++)r.push(d.getX(f)+o);else for(let f=0;f<c.count;f++)r.push(f+o);o+=c.count,l.dispose()}const a=new dt;return a.setAttribute("position",new Ve(t,3)),a.setAttribute("normal",new Ve(n,3)),a.setAttribute("color",new Ve(i,3)),a.setIndex(r),a}function Wv(s){const e=[],t=new _e("#425937"),n=new _e("#86a66c");for(let i=0;i<8;i++){const r=i/8*Math.PI*2+(s()-.5)*.45,o=.04+s()*.14;e.push(nl({baseW:.036+s()*.016,height:.36+s()*.24,bend:.1+s()*.14,yaw:r,lean:.04+s()*.08,ox:Math.cos(r)*o,oz:Math.sin(r)*o,segs:2,colBase:t,colTip:n}))}return Nd(e)}function Xv(s){const e=[],t=new _e("#3b5946"),n=new _e("#7ca382"),i=new _e("#f4c4d8"),r=new _e("#a33860");for(let a=0;a<8;a++){const l=a/8*Math.PI*2+(s()-.5)*.35,c=.03+s()*.12;e.push(nl({baseW:.028+s()*.01,height:.22+s()*.14,bend:.1+s()*.1,yaw:l,lean:.05+s()*.06,ox:Math.cos(l)*c,oz:Math.sin(l)*c,segs:1,colBase:t,colTip:n}))}const o=4;for(let a=0;a<o;a++){const l=a/o*Math.PI*2+s()*.5,c=.08+s()*.11,h=.32+s()*.16,u=Math.cos(l)*c,d=Math.sin(l)*c;e.push(nl({baseW:.011,height:h,bend:c*.5,yaw:l,lean:c*.4,ox:u*.25,oz:d*.25,segs:1,colBase:t,colTip:n}));const f=c*.9,g=Math.cos(l),_=Math.sin(l),m=u*.25-f*_,p=d*.25+f*g,y=h+.01,M=[],x=[],b=[],S=5;for(let A=0;A<S;A++){const w=A/S*Math.PI*2+a*.4,v=.01,C=.056+A%2*.008,L=.026,F=Math.cos(w),B=Math.sin(w),U=m+F*v,O=p+B*v,Y=m+F*C-B*L,z=p+B*C+F*L,q=m+F*C+B*L,ue=p+B*C-F*L,Se=y+.014,G=A*3;M.push(U,y,O,Y,Se,z,q,Se,ue),x.push(r.r,r.g,r.b,i.r,i.g,i.b,i.r,i.g,i.b),b.push(G,G+1,G+2)}const E=new dt;E.setAttribute("position",new Ve(M,3)),E.setAttribute("color",new Ve(x,3)),E.setIndex(b),E.computeVertexNormals(),e.push(E)}return Nd(e)}function Yv(s=.85,e=.75){const t=new ft(s,e,1,2);t.translate(0,e*.5,0);const n=t.clone();n.rotateY(Math.PI/3);const i=t.clone();return i.rotateY(-Math.PI/3),qv([t,n,i])}function qv(s){const e=s.reduce((l,c)=>l+c.attributes.position.count,0),t=new Float32Array(e*3),n=new Float32Array(e*3),i=new Float32Array(e*2),r=[];let o=0;for(const l of s){const c=l.attributes.position,h=l.attributes.normal,u=l.attributes.uv;t.set(c.array,o*3),n.set(h.array,o*3),i.set(u.array,o*2);const d=l.index;if(d)for(let f=0;f<d.count;f++)r.push(d.getX(f)+o);else for(let f=0;f<c.count;f++)r.push(f+o);o+=c.count}const a=new dt;return a.setAttribute("position",new Lt(t,3)),a.setAttribute("normal",new Lt(n,3)),a.setAttribute("uv",new Lt(i,2)),a.setIndex(r),a}function jv(s,e,t=[]){const n=is(1047),{textures:i,materials:r}=e,o=new pt,a=new ft(140,140,136,136);a.rotateX(-Math.PI/2);const l=a.attributes.position,c=new Float32Array(l.count*3),h=new Float32Array(l.count),u=new _e("#829674"),d=new _e("#6a825c"),f=new _e("#66564a"),g=new _e("#5a5449"),_=new _e;for(let G=0;G<l.count;G++){const J=l.getX(G),le=l.getZ(G),ae=xt(J,le);l.setY(G,ae);const H=Math.abs(J-zt(le)),j=Ci(J,le),ge=1-kt.smoothstep(H,.85,2.3),Ee=1-kt.smoothstep(j,5.2,6.9),ye=1-kt.smoothstep(Math.hypot(J+4.2,le+14.2),2.5,4.4),Oe=Math.min(1,Math.max(ge*.92,Ee,ye*.75));h[G]=Oe;const et=Math.sin(J*.25)*Math.cos(le*.22)*.5+.5;if(_.lerpColors(d,u,et),Oe>.01){const N=j<6.4?g:f;_.lerp(N,Oe)}c[G*3]=_.r,c[G*3+1]=_.g,c[G*3+2]=_.b}a.setAttribute("color",new Lt(c,3)),a.setAttribute("aSoilMix",new Lt(h,1)),a.computeVertexNormals();const m=new pe({map:i.grassTex,normalMap:i.terrainNormal,normalScale:new Z(.9,.9),vertexColors:!0,roughness:.94,metalness:.02});m.onBeforeCompile=G=>{G.uniforms.uSoilTex={value:i.soilTex},G.vertexShader=`attribute float aSoilMix;
varying float vSoilMix;
`+G.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSoilMix = aSoilMix;`),G.fragmentShader=`uniform sampler2D uSoilTex;
varying float vSoilMix;
`+G.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
          vec4 grassSample = texture2D( map, vMapUv );
          vec4 soilSample = texture2D( uSoilTex, vMapUv );
          diffuseColor *= mix( grassSample, soilSample, clamp(vSoilMix, 0.0, 1.0) );
        #endif`)};const p=new D(a,m);p.receiveShadow=!0,s.add(p);const y=Array.from({length:6},()=>Vv(n,.62)),M=new qe;s.add(M);for(let G=23.2;G>-35.8;G-=1.05){const J=zt(G),le=Math.floor(G*10)%2===0?[-.62,.58]:[-.75,.02,.72];for(const ae of le){const H=J+ae+(n()-.5)*.22,j=G+(n()-.5)*.24,ge=xt(H,j);if(ge<-.02)continue;const Ee=y[Math.floor(n()*y.length)],ye=new D(Ee,n()>.38?r.stoneMat:r.stoneDarkMat);ye.position.set(H,ge-.025,j),ye.rotation.set((n()-.5)*.05,n()*Math.PI*2,(n()-.5)*.05);const Oe=.76+n()*.34;ye.scale.set(Oe*(.9+n()*.25),.9+n()*.35,Oe*(.85+n()*.3)),ye.castShadow=!0,ye.receiveShadow=!0,M.add(ye)}}Zi(M);const x=Array.from({length:4},()=>Gv(n,2)),b=x.map(()=>[]),S=(G,J,le=2)=>t.some(ae=>Math.hypot(G-ae.x,J-ae.z)<le);for(let G=0;G<42;G++){const J=G/42*Math.PI*2+(n()-.5)*.1,le=5.45+(n()-.5)*.75,ae=-10.6+Math.cos(J)*le*(1+Math.sin(J*2+.6)*.11),H=-2.2+Math.sin(J)*le*1.32*(1+Math.cos(J*3-.4)*.07);if(Math.abs(ae-zt(H))<2.2||S(ae,H,1.8))continue;const j=xt(ae,H),ge=.45+n()*.78,Ee=.32+n()*.48,ye=.45+n()*.82;b[G%4].push({x:ae,y:j+Ee*.2,z:H,rx:(n()-.5)*.25,ry:n()*Math.PI*2,rz:(n()-.5)*.25,sx:ge,sy:Ee,sz:ye})}for(let G=0;G<56;G++){const J=22.5-n()*58,le=G%2===0?-1:1,ae=zt(J)+le*(2.6+n()*11.5);if(Ci(ae,J)<6.4||Math.hypot(ae+4.2,J+14.2)<3.9||S(ae,J,1.9))continue;const H=xt(ae,J),j=.4+n()*.95,ge=.28+n()*.55,Ee=.4+n()*.95;b[G%4].push({x:ae,y:H+ge*.18,z:J,rx:(n()-.5)*.3,ry:n()*Math.PI*2,rz:(n()-.5)*.3,sx:j,sy:ge,sz:Ee})}b.forEach((G,J)=>{if(!G.length)return;const le=new Ht(x[J],r.stoneMat,G.length);le.castShadow=!0,le.receiveShadow=!0,G.forEach((ae,H)=>{o.position.set(ae.x,ae.y,ae.z),o.rotation.set(ae.rx,ae.ry,ae.rz),o.scale.set(ae.sx,ae.sy,ae.sz),o.updateMatrix(),le.setMatrixAt(H,o.matrix);const j=.78+n()*.28;le.setColorAt(H,new _e(j,j*.99,j*.97))}),s.add(le)});const E=[],A=[];for(let G=0;G<920;G++){const J=24-n()*61,le=n()>.5?1:-1,ae=n()<.65?1.48+n()*2.4:3.2+n()*11.5,H=zt(J)+le*ae;if(Ci(H,J)<5.3||Math.hypot(H+4.2,J+14.2)<3.4||S(H,J,1.15))continue;const j=xt(H,J),ge={x:H,y:j-.025,z:J,s:.72+n()*.58,rot:n()*Math.PI*2,tint:.82+n()*.28};ae<3.4&&G%4===0?A.push(ge):E.push(ge)}for(let G=0;G<220;G++){const J=n()*Math.PI*2,le=5.42+n()*1.38,ae=-10.6+Math.cos(J)*le*(1+Math.sin(J*2+.6)*.11),H=-2.2+Math.sin(J)*le*1.32*(1+Math.cos(J*3-.4)*.07);if(Math.abs(ae-zt(H))<1.35)continue;const j=xt(ae,H),ge={x:ae,y:j-.03,z:H,s:.78+n()*.65,rot:n()*Math.PI*2,tint:.85+n()*.24};G%3===0?A.push(ge):E.push(ge)}const w=Wv(n),v=new Ht(w,r.foliage3DMat,E.length);v.receiveShadow=!1,E.forEach((G,J)=>{o.position.set(G.x,G.y,G.z),o.rotation.set(0,G.rot,0),o.scale.set(G.s,G.s*(.85+n()*.35),G.s),o.updateMatrix(),v.setMatrixAt(J,o.matrix),v.setColorAt(J,new _e(G.tint,G.tint*1.03,G.tint*.94))}),s.add(v);const C=Xv(n),L=new Ht(C,r.foliage3DMat,A.length);L.receiveShadow=!1,A.forEach((G,J)=>{o.position.set(G.x,G.y,G.z),o.rotation.set(0,G.rot,0),o.scale.set(G.s*1.05,G.s*(.9+n()*.3),G.s*1.05),o.updateMatrix(),L.setMatrixAt(J,o.matrix),L.setColorAt(J,new _e(G.tint,G.tint*.98,G.tint))}),s.add(L);const F=[];for(let G=0;G<210;G++){const J=23.5-n()*59,le=n()>.5?1:-1,ae=zt(J)+le*(2.25+n()*9.5);if(Ci(ae,J)<5.7||Math.hypot(ae+4.2,J+14.2)<3.8||S(ae,J,1.55))continue;const H=xt(ae,J);F.push({x:ae,y:H-.04,z:J,s:.8+n()*.85,rot:n()*Math.PI*2})}const B=Yv(1.18,.94),U=new Ht(B,r.shrubCardMat,F.length);U.castShadow=!0,U.receiveShadow=!0,F.forEach((G,J)=>{o.position.set(G.x,G.y,G.z),o.rotation.set(0,G.rot,0),o.scale.set(G.s,G.s*(.85+n()*.25),G.s),o.updateMatrix(),U.setMatrixAt(J,o.matrix);const le=.84+n()*.24;U.setColorAt(J,new _e(le,le*.97,le))}),s.add(U);const O=460,Y=new ft(.11,.08);Y.rotateX(-Math.PI/2);const z=new pe({color:St.blossomMid,roughness:.78,side:ct}),q=new Ht(Y,z,O);for(let G=0;G<O;G++){const J=23.5-n()*59,le=zt(J)+(n()-.5)*4.8,ae=xt(le,J);ae<-.02?o.scale.setScalar(.001):(o.position.set(le,ae+.032+n()*.015,J),o.rotation.set((n()-.5)*.2,n()*Math.PI*2,(n()-.5)*.2),o.scale.set(.75+n()*.85,1,.75+n()*.85)),o.updateMatrix(),q.setMatrixAt(G,o.matrix);const H=new _e().lerpColors(new _e(St.blossomDeep),new _e(St.blossomPale),n());q.setColorAt(G,H)}s.add(q);function ue(G){const J=new qe,le=new je(.055,.068,.92,7),ae=new je(.035,.038,1,6);for(let H=0;H<G.length;H++){const[j,ge]=G[H],Ee=xt(j,ge),ye=new D(le,r.woodDarkMat);if(ye.position.set(j,Ee+.42,ge),ye.rotation.z=(n()-.5)*.05,ye.castShadow=!0,ye.receiveShadow=!0,J.add(ye),H<G.length-1){const[Oe,et]=G[H+1],N=xt(Oe,et),he=new P(j,Ee,ge),ce=new P(Oe,N,et),re=ce.clone().sub(he),oe=re.length();for(const Te of[.38,.68]){const me=new D(ae,r.woodMat);me.scale.set(1,oe,1),me.position.copy(he).add(ce).multiplyScalar(.5),me.position.y+=Te,me.quaternion.setFromUnitVectors(new P(0,1,0),re.clone().normalize()),me.castShadow=!0,J.add(me)}}}Zi(J),s.add(J)}ue([[-5.6,22.8],[-4.3,21.6],[-3.1,20.2],[-2.5,18.8]]),ue([[5.8,22.4],[5.2,20.6],[4.9,18.8]]),ue([[-16.5,-14.5],[-14.2,-16],[-11.8,-17.3],[-9.5,-18.2]]);const Se=["#696987","#555d78","#434f69"];for(let G=0;G<3;G++){const J=56+G*18,le=72,ae=new ts,H=180;ae.moveTo(-H,-6);for(let et=0;et<=le;et++){const N=et/le,he=-H+N*H*2,ce=6.5+G*4.2+Math.sin(N*Math.PI*(5+G*2)+G*1.7)*(3.8+G*1.4)+Math.cos(N*Math.PI*(11+G*3))*1.9;ae.lineTo(he,Math.max(1.5,ce))}ae.lineTo(H,-6),ae.closePath();const j=new aa(ae),ge=new Vt({color:Se[G],fog:!0,side:ct}),Ee=new D(j,ge);Ee.position.set(0,-1.5,-J),s.add(Ee);const ye=Ee.clone();ye.rotation.y=Math.PI*.48,ye.position.set(-J*.92,-1.5,-6),s.add(ye);const Oe=Ee.clone();Oe.rotation.y=-Math.PI*.48,Oe.position.set(J*.92,-1.5,-6),s.add(Oe)}return{grassInst:v,dianthusInst:L,shrubInst:U}}function Uo(s,e,t,n,i,r=.04){const o=new ks(s),a=o.computeFrenetFrames(e,!1),l=[],c=[],h=[],u=[],d=new P,f=new P;for(let m=0;m<=e;m++){const p=m/e,y=o.getPointAt(p),M=a.normals[m],x=a.binormals[m],b=kt.lerp(n,i,Math.pow(p,.85));for(let S=0;S<=t;S++){const E=S/t,A=E*Math.PI*2,w=1+Math.sin(A*5+p*4)*r*(1-p*.6),v=b*w,C=Math.cos(A),L=Math.sin(A);f.set(0,0,0).addScaledVector(M,C).addScaledVector(x,L).normalize(),d.copy(y).addScaledVector(f,v),l.push(d.x,d.y,d.z),c.push(f.x,f.y,f.z),h.push(E*2,p*3)}}const g=t+1;for(let m=0;m<e;m++)for(let p=0;p<t;p++){const y=m*g+p,M=(m+1)*g+p,x=(m+1)*g+(p+1),b=m*g+(p+1);u.push(y,M,b),u.push(M,x,b)}const _=new dt;return _.setAttribute("position",new Ve(l,3)),_.setAttribute("normal",new Ve(c,3)),_.setAttribute("uv",new Ve(h,2)),_.setIndex(u),_}function yu(){const s=[],e=[[0,0,0],[.24,Math.PI/3,.16],[-.22,-Math.PI/3,-.14]];for(const[n,i,r]of e){const o=new ft(1.45,1.35);o.rotateX(n),o.rotateY(i),o.rotateZ(r),s.push(o)}const t=Fl(s,!1);return s.forEach(n=>n.dispose()),t}function Kv(s,e){const t=is(512),{materials:n}=e,i=[],r=[],o=[];function a(A,w,v=1,C=0,L=0,F=!1){const B=xt(A,w);i.push({x:A,z:w,r:.62*v});const U=(F?.5:.36)*v,O=(F?3.85:3.45)*v,Y=new P(A,B-.18,w),z=new P(A+C*.25,B+O*.36,w+L*.25),q=new P(A+C*.72+(t()-.5)*.35*v,B+O*.74,w+L*.72+(t()-.5)*.3*v),ue=new P(A+C,B+O,w+L),Se=Uo([Y,z,q,ue],10,F?9:7,U,U*.42,.1);r.push(Se.toNonIndexed());const G=F?5:4;for(let le=0;le<G;le++){const ae=le/G*Math.PI*2+t()*.5,H=(.75+t()*.55)*v,j=new P(A+Math.cos(ae)*U*.45,B+.65*v,w+Math.sin(ae)*U*.45),ge=new P(A+Math.cos(ae)*H*.65,B+.18*v,w+Math.sin(ae)*H*.65),Ee=new P(A+Math.cos(ae)*H,B-.16,w+Math.sin(ae)*H);r.push(Uo([j,ge,Ee],5,5,U*.42,U*.12,.06).toNonIndexed())}const J=F?7:5;for(let le=0;le<J;le++){const ae=le/J*Math.PI*2+t()*.55,H=(2.1+t()*1.45)*v,j=le%2===0?q.clone():ue.clone(),ge=new P(j.x+Math.cos(ae)*H*.52,j.y+(.65+t()*.55)*v,j.z+Math.sin(ae)*H*.52),Ee=new P(j.x+Math.cos(ae)*H,j.y+(1.05+t()*1.05)*v,j.z+Math.sin(ae)*H),ye=Uo([j,ge,Ee],7,6,U*.34,U*.1,.05);r.push(ye.toNonIndexed());for(let Oe=-1;Oe<=1;Oe+=2){const et=ae+Oe*(.48+t()*.25),N=(.95+t()*.7)*v,he=ge.clone().lerp(Ee,.55),ce=new P(he.x+Math.cos(et)*N,he.y+(.42+t()*.55)*v,he.z+Math.sin(et)*N);r.push(Uo([he,ce],4,5,U*.16,U*.05,.02).toNonIndexed());const re=F?6:5;for(let oe=0;oe<re;oe++){const Te=oe<3?ce:Ee;o.push({x:Te.x+(t()-.5)*1.35*v,y:Te.y+(t()-.35)*.9*v,z:Te.z+(t()-.5)*1.35*v,s:(1.05+t()*.85)*v,tone:t(),rotY:t()*Math.PI*2,tilt:(t()-.5)*.35})}}}for(let le=0;le<(F?10:7);le++)o.push({x:ue.x+(t()-.5)*2.2*v,y:ue.y+(.7+t()*1.4)*v,z:ue.z+(t()-.5)*2.2*v,s:(1.2+t()*.85)*v,tone:t(),rotY:t()*Math.PI*2,tilt:(t()-.5)*.3})}a(-5.1,17.8,1.24,1.35,-.3,!0),a(5.4,16,1.22,-1.15,-.2,!0);const l=[[-5.8,11.2,1.05,.55,.1],[6.6,10.4,1.08,-.6,-.2],[6.5,3.8,1.12,-.65,.1],[-4.9,5.2,1.02,.45,.2],[6.7,-3.2,1.15,-.55,0],[-16.8,3.8,1.2,.8,-.4],[-17.4,-5.2,1.25,1.1,.2],[-12.5,-12.6,1.18,.6,.5],[6.8,-10.5,1.12,-.6,.1],[-9.2,-19.2,1.16,.8,.2],[6.6,-18.4,1.1,-.55,-.2],[-6.4,-25.8,1.18,.5,.2],[6.4,-26.2,1.15,-.55,.1],[-3.8,-33.6,1.35,.7,-.2],[4.8,-34,1.32,-.7,-.2],[-11.5,14.5,1.15,.2,0],[11.2,12.8,1.2,-.3,0],[12,-1.5,1.25,-.4,0],[11.8,-16,1.22,-.2,0],[-14.5,-26.5,1.28,.3,0],[11.5,-31.5,1.3,-.3,0]];for(const[A,w,v,C,L]of l)Ci(A,w)<6.5||Math.hypot(A+4.2,w+14.2)<3.8||a(A,w,v,C,L,!1);const c=Fl(r,!1);r.forEach(A=>A.dispose());const h=new D(c,n.barkMat);h.castShadow=!0,h.receiveShadow=!0,s.add(h);const u=yu(),d=new Ht(u,n.blossomCardMat,o.length);d.castShadow=!0,d.receiveShadow=!1;const f=new pt,g=new _e("#d07c9c"),_=new _e(St.blossomMid),m=new _e(St.blossomPale),p=new _e("#f7dce0"),y=new _e;o.forEach((A,w)=>{f.position.set(A.x,A.y,A.z),f.rotation.set(A.tilt,A.rotY,A.tilt*.6),f.scale.set(A.s,A.s*.88,A.s),f.updateMatrix(),d.setMatrixAt(w,f.matrix),A.tone<.3?y.lerpColors(g,_,A.tone/.3):A.tone<.72?y.lerpColors(_,m,(A.tone-.3)/.42):y.lerpColors(m,p,(A.tone-.72)/.28),d.setColorAt(w,y)}),s.add(d);const M=[[-22,-38,1.65],[-12,-45,1.75],[11,-45,1.7],[22,-40,1.75],[-24,-18,1.6],[22,-14,1.65],[-23,8,1.55],[21,6,1.6]],x=yu(),b=new Ht(x,n.blossomCardMat,M.length*5),S=new je(.14,.42,4.4,7),E=new Ht(S,n.barkMat,M.length);return M.forEach(([A,w,v],C)=>{const L=xt(A,w);f.position.set(A,L+1.45*v,w),f.rotation.set(0,t()*3,0),f.scale.setScalar(v),f.updateMatrix(),E.setMatrixAt(C,f.matrix);for(let F=0;F<5;F++){const B=F/5*Math.PI*2,U=F===0?0:.95*v;f.position.set(A+Math.cos(B)*U,L+(3.1+F%2*.65)*v,w+Math.sin(B)*U),f.rotation.set(0,F*1.1,0),f.scale.setScalar(v*1.95),f.updateMatrix(),b.setMatrixAt(C*5+F,f.matrix),b.setColorAt(C*5+F,new _e("#df9fb8"))}}),s.add(E),s.add(b),{colliders:i,blossomInst:d}}function ta(s,e,t=4,n=4,i=.24){const r=new jn(s,e,t,n,!1),o=r.attributes.position;for(let a=0;a<o.count;a++){const l=o.getX(a),c=o.getY(a),h=o.getZ(a),u=Math.hypot(l,h)/Math.max(.001,s),d=-Math.sin(u*Math.PI*.65)*e*.14+Math.pow(u,2.2)*e*i;o.setXYZ(a,l*(1+u*.08),c+d,h*(1+u*.08))}return r.computeVertexNormals(),r}function wu(s,e,t,n,{scale:i=1,hasLight:r=!1,lightIntensity:o=2.6,lightDist:a=7.5,yOverride:l=null}={}){const{textures:c,materials:h}=e,u=l!==null?l:xt(t,n),d=new qe;d.position.set(t,u,n),d.scale.setScalar(i),s.add(d);const f=new D(new se(.68,.16,.68),h.stoneMat);f.position.y=.08,f.castShadow=f.receiveShadow=!0,d.add(f);const g=new D(new se(.46,.08,.46),h.stoneDarkMat);g.position.y=.19,g.castShadow=g.receiveShadow=!0,d.add(g);const _=new D(new se(.18,.56,.18),h.woodDarkMat);_.position.y=.51,_.castShadow=_.receiveShadow=!0,d.add(_);const m=new D(new se(.56,.07,.56),h.woodMat);m.position.y=.81,m.castShadow=m.receiveShadow=!0,d.add(m);const p=new D(new se(.38,.48,.38),h.shojiMat);p.position.y=1.08,d.add(p);for(const E of[-1,1])for(const A of[-1,1]){const w=new D(new se(.045,.52,.045),h.woodDarkMat);w.position.set(E*.2,1.08,A*.2),w.castShadow=!0,d.add(w)}for(const E of[.96,1.19]){const A=new D(new se(.42,.024,.42),h.woodDarkMat);A.position.y=E,d.add(A)}for(const E of[0,Math.PI/2]){const A=new D(new se(.022,.48,.41),h.woodDarkMat);A.position.y=1.08,A.rotation.y=E,d.add(A)}const y=new D(new se(.64,.045,.64),h.woodDarkMat);y.position.y=1.35,y.castShadow=!0,d.add(y);const M=new D(ta(.56,.3,4,4,.28),h.roofTileMat);M.position.y=1.52,M.rotation.y=Math.PI/4,M.castShadow=!0,d.add(M);const x=new D(new Et(.055,10,8),h.brassMat);x.position.y=1.67,d.add(x),Jr(d,h.contactShadowMat,.62,.015);const b=new On(new Sn({map:c.glowTex,transparent:!0,opacity:.55,depthWrite:!1,blending:on}));b.position.set(0,1.08,0),b.scale.set(1.55,1.55,1.55),d.add(b);let S=null;return r&&(S=new Cn(St.amberCore,o,a,1.8),S.position.set(0,1.12,0),d.add(S)),{group:d,light:S,halo:b}}function Jv(s,e,t,n){const{textures:i,materials:r}=e,o=xt(t,n),a=new qe;a.position.set(t,o,n),s.add(a);const l=new D(new Is(.85,1),r.stoneDarkMat);l.scale.set(1.4,.45,1.3),l.position.y=.15,l.castShadow=l.receiveShadow=!0,a.add(l);for(let _=0;_<3;_++){const m=_/3*Math.PI*2,p=new D(new je(.08,.13,.42,6),r.stoneMat);p.position.set(Math.cos(m)*.25,.52,Math.sin(m)*.25),p.rotation.z=-Math.cos(m)*.22,p.rotation.x=Math.sin(m)*.22,p.castShadow=!0,a.add(p)}const c=new D(new je(.42,.36,.1,6),r.stoneMat);c.position.y=.74,c.castShadow=!0,a.add(c);const h=new D(new je(.22,.22,.34,6),r.shojiMat);h.position.y=.96,a.add(h);for(let _=0;_<6;_++){const m=_/6*Math.PI*2,p=new D(new se(.055,.36,.055),r.stoneDarkMat);p.position.set(Math.cos(m)*.23,.96,Math.sin(m)*.23),a.add(p)}const u=new D(ta(.7,.36,6,4,.22),r.stoneMat);u.position.y=1.29,u.castShadow=!0,a.add(u);const d=new D(new Et(.08,8,8),r.stoneDarkMat);d.position.y=1.48,a.add(d);const f=new Cn(St.amberCore,3.2,9,1.8);f.position.set(0,.98,0),a.add(f);const g=new On(new Sn({map:i.glowTex,transparent:!0,opacity:.52,depthWrite:!1,blending:on}));return g.position.set(0,.98,0),g.scale.set(1.8,1.8,1.8),a.add(g),{group:a,light:f}}function $v(s,e,t=-4.2,n=-14.2){const{textures:i,materials:r}=e,o=xt(t,n),a=new qe;a.position.set(t,o,n),a.rotation.y=.24,s.add(a);const l=3.8,c=3.6,h=new D(new se(l+.45,.36,c+.45),r.stoneDarkMat);h.position.y=.18,h.castShadow=h.receiveShadow=!0,a.add(h);const u=new D(new se(l+.15,.08,c+.15),r.woodMat);u.position.y=.38,u.receiveShadow=!0,a.add(u);for(let w=0;w<3;w++){const v=new D(new se(1.65-w*.12,.12,.36),w%2===0?r.stoneMat:r.stoneDarkMat);v.position.set(0,.06+w*.11,c*.5+.62-w*.26),v.castShadow=v.receiveShadow=!0,a.add(v)}const d=[[-l*.44,-c*.44],[l*.44,-c*.44],[-l*.44,c*.44],[l*.44,c*.44]];for(const[w,v]of d){const C=new D(new je(.14,.17,.1,8),r.stoneMat);C.position.set(w,.44,v),a.add(C);const L=new D(new je(.1,.115,2.55,8),r.woodDarkMat);L.position.set(w,1.72,v),L.castShadow=L.receiveShadow=!0,a.add(L)}for(const w of[-c*.44,c*.44]){const v=new D(new se(l*.96,.14,.14),r.woodDarkMat);v.position.set(0,2.94,w),v.castShadow=!0,a.add(v)}for(const w of[-l*.44,l*.44]){const v=new D(new se(.14,.14,c*.96),r.woodDarkMat);v.position.set(w,2.94,0),v.castShadow=!0,a.add(v);const C=new D(new se(.08,.06,c*.88),r.woodMat);C.position.set(w,1.05,0),a.add(C);const L=new D(new se(.08,.06,c*.88),r.woodMat);L.position.set(w,.56,0),a.add(L);for(let F=-3;F<=3;F++){const B=new D(new se(.045,.48,.045),r.woodDarkMat);B.position.set(w,.8,F*.36),a.add(B)}}const f=new D(new se(l*.88,.06,.08),r.woodMat);f.position.set(0,1.05,-c*.44),a.add(f);for(let w=-3;w<=3;w++){const v=new D(new se(.045,.52,.045),r.woodDarkMat);v.position.set(w*.38,.78,-c*.44),a.add(v)}const g=new D(ta(3.52,.96,4,5,.32),r.roofTileMat);g.position.y=3.46,g.rotation.y=Math.PI/4,g.scale.set(1.06,1,1.02),g.castShadow=g.receiveShadow=!0,a.add(g);const _=new D(ta(2.18,.84,4,5,.34),r.roofTileMat);_.position.y=4.04,_.rotation.y=Math.PI/4,_.castShadow=!0,a.add(_);const m=new D(new Et(.12,10,10),r.brassMat);m.position.y=4.46,a.add(m);const p=new D(new se(l+.55,.08,c+.55),r.woodDarkMat);p.position.y=3.01,a.add(p);const y=new pe({color:"#efe1d1",roughness:.9,transparent:!0,opacity:.82,side:ct});for(const w of[-1,1]){const v=w>0?-.35:-Math.PI*1.05,C=new D(new je(.13,.21,2.28,12,1,!0,v,Math.PI*1.4),y);C.position.set(w*(l*.44),1.68,c*.44),a.add(C)}const M=new D(new se(1.65,.07,.52),r.woodMat);M.position.set(0,.78,-.75),M.castShadow=!0,a.add(M);for(const w of[-.68,.68]){const v=new D(new se(.08,.36,.44),r.woodDarkMat);v.position.set(w,.58,-.75),a.add(v)}const x=new D(new se(1.1,.06,.65),r.woodMat);x.position.set(0,.82,.15),x.castShadow=!0,a.add(x);const b=new D(new Et(.1,10,8),r.ceramicMat);b.scale.set(1,.78,1),b.position.set(-.18,.92,.15),a.add(b);const S=[],E=[[-l*.36,c*.42],[l*.36,c*.42],[-l*.36,-c*.38],[l*.36,-c*.38]];for(const[w,v]of E){const C=new D(new je(.012,.012,.38,6),r.darkMetalMat);C.position.set(w,2.75,v),a.add(C);const L=new D(new se(.22,.28,.22),r.shojiMat);L.position.set(w,2.48,v),a.add(L);const F=new D(new jn(.22,.12,4),r.woodDarkMat);F.position.set(w,2.66,v),F.rotation.y=Math.PI/4,a.add(F);const B=new On(new Sn({map:i.glowTex,transparent:!0,opacity:.55,depthWrite:!1,blending:on}));B.position.set(w,2.48,v),B.scale.set(1.25,1.25,1.25),a.add(B)}const A=new Cn("#ffbe70",7.5,13,1.6);return A.position.set(0,2.35,.2),a.add(A),S.push(A),Jr(a,r.contactShadowMat,3.2,.02),Zi(a),{group:a,lights:S,collider:{x:t,z:n,r:2.3}}}function Zv(s,e){const t=is(909),n=[],i=[],r=new qe;s.add(r);const o=wu(r,e,-1.4,16,{scale:1.22,hasLight:!0,lightIntensity:6.5,lightDist:10.5});n.push(o.light),[[zt(11.5)+2.1,11.5,!0],[zt(5.5)-2.2,5.5,!1],[zt(.5)+2.15,.5,!0],[-5.1,1.4,!0],[zt(-6)+2.2,-6,!1],[zt(-11.5)-2.35,-11.5,!0],[zt(-18.5)+2.2,-18.5,!1],[zt(-24)-2.2,-24,!0],[-2.4,-29.2,!1],[2.4,-29.2,!1]].forEach(([c,h,u],d)=>{const f=wu(r,e,c,h,{scale:.86+t()*.14,hasLight:u,lightIntensity:3.4,lightDist:8.5});f.light&&(d%2===0?n.push(f.light):i.push(f.light))});const l=Jv(r,e,-14.6,-7.2);return n.push(l.light),Zi(r),{gate:o,primaryLights:n,secondaryLights:i}}class Qv extends D{constructor(e,t={}){super(e),this.isWater=!0;const n=this,i=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new P(.70707,.70707,0),u=new _e(t.sunColor!==void 0?t.sunColor:16777215),d=new _e(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new P(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,_=t.side!==void 0?t.side:Kn,m=t.fog!==void 0?t.fog:!1,p=new Ri,y=new P,M=new P,x=new P,b=new Ge,S=new P(0,0,-1),E=new lt,A=new P,w=new P,v=new lt,C=new Ge,L=new Yt,F=new dn(i,r),B={name:"MirrorShader",uniforms:Ji.merge([Ie.fog,Ie.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ge},sunColor:{value:new _e(8355711)},sunDirection:{value:new P(.70707,.70707,0)},eye:{value:new P},waterColor:{value:new _e(5592405)}}]),vertexShader:`
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
				}`},U=new qt({name:B.name,uniforms:Ji.clone(B.uniforms),vertexShader:B.vertexShader,fragmentShader:B.fragmentShader,lights:!0,side:_,fog:m});U.uniforms.mirrorSampler.value=F.texture,U.uniforms.textureMatrix.value=C,U.uniforms.alpha.value=a,U.uniforms.time.value=l,U.uniforms.normalSampler.value=c,U.uniforms.sunColor.value=u,U.uniforms.waterColor.value=d,U.uniforms.sunDirection.value=h,U.uniforms.distortionScale.value=g,U.uniforms.eye.value=f,n.material=U,n.onBeforeRender=function(O,Y,z){if(M.setFromMatrixPosition(n.matrixWorld),x.setFromMatrixPosition(z.matrixWorld),b.extractRotation(n.matrixWorld),y.set(0,0,1),y.applyMatrix4(b),A.subVectors(M,x),A.dot(y)>0)return;A.reflect(y).negate(),A.add(M),b.extractRotation(z.matrixWorld),S.set(0,0,-1),S.applyMatrix4(b),S.add(x),w.subVectors(M,S),w.reflect(y).negate(),w.add(M),L.position.copy(A),L.up.set(0,1,0),L.up.applyMatrix4(b),L.up.reflect(y),L.lookAt(w),L.far=z.far,L.updateMatrixWorld(),L.projectionMatrix.copy(z.projectionMatrix),C.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),C.multiply(L.projectionMatrix),C.multiply(L.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(y,M),p.applyMatrix4(L.matrixWorldInverse),E.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const q=L.projectionMatrix;v.x=(Math.sign(E.x)+q.elements[8])/q.elements[0],v.y=(Math.sign(E.y)+q.elements[9])/q.elements[5],v.z=-1,v.w=(1+q.elements[10])/q.elements[14],E.multiplyScalar(2/E.dot(v)),q.elements[2]=E.x,q.elements[6]=E.y,q.elements[10]=E.z+1-o,q.elements[14]=E.w,f.setFromMatrixPosition(z.matrixWorld);const ue=O.getRenderTarget(),Se=O.xr.enabled,G=O.shadowMap.autoUpdate;n.visible=!1,O.xr.enabled=!1,O.shadowMap.autoUpdate=!1,O.setRenderTarget(F),O.state.buffers.depth.setMask(!0),O.autoClear===!1&&O.clear(),O.render(Y,L),n.visible=!0,O.xr.enabled=Se,O.shadowMap.autoUpdate=G,O.setRenderTarget(ue);const J=z.viewport;J!==void 0&&O.state.viewport(J)}}}function eM(s,e=1){const t=new qe,n=new pe({color:"#f5c7d7",emissive:"#592d3e",emissiveIntensity:.12,roughness:.55,side:ct}),i=new pe({color:"#fae3eb",roughness:.5,side:ct}),r=new pe({color:"#f5c987",emissive:"#f5c987",emissiveIntensity:.35,roughness:.5}),o=new Et(.11,8,6);o.scale(.48,.22,1),o.translate(0,.02,.09);for(let l=0;l<2;l++){const c=l===0?8:6,h=l===0?-.25:-.62,u=l===0?1:.76;for(let d=0;d<c;d++){const f=new D(o,l===0?n:i);f.rotation.y=d/c*Math.PI*2+l*.3,f.rotation.x=h,f.scale.setScalar(u),t.add(f)}}const a=new D(new Et(.045,8,6),r);return a.position.y=.04,t.add(a),t.scale.setScalar(e),Zi(t),t}function tM(s,e){const{materials:t}=e,n=new qe;n.position.set(-10.4,-.1,-7.8),n.rotation.y=.28,s.add(n);const i=4.2,r=16;for(let o=0;o<r;o++){const a=o/(r-1),l=(a-.5)*i,c=Math.sin(a*Math.PI)*.48,h=Math.cos(a*Math.PI)*.34,u=new D(new se(.24,.055,1.38),t.woodMat);u.position.set(l,c,0),u.rotation.z=h,u.castShadow=u.receiveShadow=!0,n.add(u)}for(const o of[-.66,.66]){const a=[];for(let d=0;d<=8;d++){const f=d/8;a.push(new P((f-.5)*i,Math.sin(f*Math.PI)*.48-.04,o))}const l=new ks(a),c=new D(new Hs(l,16,.055,6,!1),t.woodDarkMat);c.castShadow=!0,n.add(c);const h=a.map(d=>new P(d.x,d.y+.58,d.z)),u=new D(new Hs(new ks(h),16,.036,6,!1),t.woodMat);u.castShadow=!0,n.add(u);for(const d of[0,2,4,6,8]){const f=a[d],g=new D(new se(.075,.68,.075),t.woodDarkMat);g.position.set(f.x,f.y+.3,f.z),g.castShadow=!0,n.add(g)}}return Zi(n),n}function nM(s,e,t){const n=is(2026),{textures:i,materials:r}=e,o=new qe;s.add(o);const a=-.18,l=new ft(14.8,18.8),c=new Qv(l,{textureWidth:384,textureHeight:384,waterNormals:i.waterNormal,sunDirection:t.clone().normalize(),sunColor:new _e("#f7c994"),waterColor:new _e("#233a49"),distortionScale:1.35,fog:!0});c.rotation.x=-Math.PI/2,c.position.set(-10.6,a,-2.2),c.material.uniforms.size&&(c.material.uniforms.size.value=3.4),o.add(c);const h=new D(l,new pe({color:"#2c4a5c",normalMap:i.waterNormal,normalScale:new Z(.45,.45),roughness:.14,metalness:.68,envMapIntensity:1.4}));h.rotation.x=-Math.PI/2,h.position.set(-10.6,a,-2.2),h.visible=!1,o.add(h);const u=new ft(.56,.56);u.rotateX(-Math.PI/2);const d=[[-8.4,.4,1.05],[-8.9,-.3,.85],[-7.8,-1.6,1.15],[-9.6,-2.9,.92],[-11.8,-1.2,1.1],[-12.6,1.4,.88],[-9.2,2.6,1.02],[-7.6,1.8,.78],[-11.3,-4.4,1],[-13,-3.5,.94]],f=new Ht(u,r.lilyPadMat,d.length),g=new pt;d.forEach(([L,F,B],U)=>{if(g.position.set(L,a+.014,F),g.rotation.set(0,n()*Math.PI*2,0),g.scale.setScalar(B),g.updateMatrix(),f.setMatrixAt(U,g.matrix),U%2===0){const O=eM(e,.78+n()*.28);O.position.set(L+.08,a+.018,F+.04),o.add(O)}}),o.add(f);const _=new ft(.09,.07);_.rotateX(-Math.PI/2);const m=new Ht(_,new pe({color:St.blossomMid,roughness:.65}),64);for(let L=0;L<64;L++){const F=n()*Math.PI*2,B=1+n()*3.9,U=-10.6+Math.cos(F)*B,O=-2.2+Math.sin(F)*B*1.25;g.position.set(U,a+.015,O),g.rotation.set(0,n()*Math.PI*2,0),g.scale.setScalar(.85+n()*.75),g.updateMatrix(),m.setMatrixAt(L,g.matrix)}o.add(m);const p=12,y=new jr(.18,.215,24);y.rotateX(-Math.PI/2);const M=new Vt({color:"#f5dbe5",transparent:!0,opacity:.28,depthWrite:!1}),x=new Ht(y,M,p),b=[];for(let L=0;L<p;L++){const F=n()*Math.PI*2,B=.8+n()*3.6;b.push({x:-10.6+Math.cos(F)*B,z:-2.2+Math.sin(F)*B*1.25,phase:n(),speed:.22+n()*.14,maxScale:1.5+n()*1.4})}o.add(x);const S=new jn(.028,1.05,4);S.translate(0,.52,0);const E=new pe({color:"#536c49",roughness:.85}),A=new je(.032,.032,.16,7),w=new pe({color:"#4d3228",roughness:.92}),v=[],C=[];for(let L=0;L<18;L++){const F=L/18*Math.PI*2+(n()-.5)*.18,B=5.1+(n()-.5)*.45,U=-10.6+Math.cos(F)*B*(1+Math.sin(F*2+.6)*.11),O=-2.2+Math.sin(F)*B*1.32*(1+Math.cos(F*3-.4)*.07);if(U>-5.5&&Math.abs(O+2)<2.2)continue;const Y=Math.max(a-.08,xt(U,O)),z=5+Math.floor(n()*5);for(let q=0;q<z;q++){const ue=U+(n()-.5)*.42,Se=O+(n()-.5)*.42,G=.75+n()*.6,J=(n()-.5)*.22,le=(n()-.5)*.22;g.position.set(ue,Y-.04,Se),g.rotation.set(J,n()*Math.PI,le),g.scale.set(1,G,1),g.updateMatrix(),v.push(g.matrix.clone()),q<2&&n()>.3&&(g.position.set(ue+Math.sin(le)*G*.45,Y+G*.86,Se+Math.sin(J)*G*.45),g.rotation.set(J,0,le),g.scale.setScalar(1),g.updateMatrix(),C.push(g.matrix.clone()))}}if(v.length){const L=new Ht(S,E,v.length);v.forEach((F,B)=>L.setMatrixAt(B,F)),L.castShadow=!0,o.add(L)}if(C.length){const L=new Ht(A,w,C.length);C.forEach((F,B)=>L.setMatrixAt(B,F)),o.add(L)}return tM(s,e),{waterReflective:c,waterFallback:h,setReflectiveEnabled(L){c.visible=L,h.visible=!L},update(L,F){c.visible&&c.material.uniforms.time&&(c.material.uniforms.time.value+=L*.38),h.visible&&(i.waterNormal.offset.x=F*.015%1,i.waterNormal.offset.y=F*.011%1),b.forEach((B,U)=>{const Y=.25+(F*B.speed+B.phase)%1*B.maxScale;g.position.set(B.x,a+.016,B.z),g.rotation.set(0,0,0),g.scale.set(Y,1,Y),g.updateMatrix(),x.setMatrixAt(U,g.matrix)}),x.instanceMatrix.needsUpdate=!0}}}function Ti(s,e,t,n=.014,i=.005,r=!1){const o=r?e:t,a=r?t:e,l=Math.max(.003,s*.5-i),c=Math.max(.003,o*.5-i),h=Math.min(n,l*.85,c*.85),u=new ts;u.moveTo(-l+h,-c),u.lineTo(l-h,-c),u.quadraticCurveTo(l,-c,l,-c+h),u.lineTo(l,c-h),u.quadraticCurveTo(l,c,l-h,c),u.lineTo(-l+h,c),u.quadraticCurveTo(-l,c,-l,c-h),u.lineTo(-l,-c+h),u.quadraticCurveTo(-l,-c,-l+h,-c);const d=Math.max(.002,a-i*2),f=new Yr(u,{depth:d,bevelEnabled:!0,bevelThickness:i,bevelSize:i,bevelSegments:1,curveSegments:2});return r||f.rotateX(Math.PI/2),f.center(),f}function iM(s=.068,e=.098,t=.09,n=20){const i=n*2,r=new je(e,s,t,i,2,!0),o=r.attributes.position,a=new Float32Array(o.count*3),l=new _e("#f4d6c4"),c=new _e("#c77b5e"),h=new _e;for(let u=0;u<o.count;u++){const d=o.getX(u),f=o.getY(u),g=o.getZ(u),_=Math.atan2(g,d),m=(f+t*.5)/t,p=Math.sin(_*n),y=(.002+m*.0068)*p,M=Math.hypot(d,g),x=M>1e-4?(M+y)/M:1,b=m>.7?Math.sin(_*3+.5)*.003*m:0;o.setXYZ(u,d*x,f+b,g*x),h.lerpColors(c,l,p*.5+.5),a[u*3]=h.r,a[u*3+1]=h.g,a[u*3+2]=h.b}return r.setAttribute("color",new Lt(a,3)),r.computeVertexNormals(),r}function tc(s,e,t=.008){const n=new ft(s,e,14,14);n.rotateX(-Math.PI/2);const i=n.attributes.position;for(let r=0;r<i.count;r++){const o=i.getX(r),a=i.getZ(r),l=o/(s*.5),c=a/(e*.5),h=Math.sin(l*Math.PI*1.4+.3)*Math.cos(c*Math.PI*1.1)*t+Math.cos((l+c)*2.5)*t*.45,u=Math.max(0,l*l+c*c-1.1)*-.008;i.setY(r,h+u)}return n.computeVertexNormals(),n}function Su(s=.42,e=.22,t=.03,n=.045){const i=new se(s,e,t,10,2,1),r=i.attributes.position;for(let o=0;o<r.count;o++){const l=r.getX(o)/(s*.5);r.setZ(o,r.getZ(o)+(1-l*l)*-n)}return i.computeVertexNormals(),i}function sM(s="#e8dfd1",e="#4f3021"){const t=new qe,n=new pe({color:s,roughness:.32}),i=new D(new qr([new Z(0,0),new Z(.036,0),new Z(.041,.04),new Z(.044,.086),new Z(.039,.086),new Z(.036,.072),new Z(0,.072)],16),n);i.castShadow=!0,t.add(i);const r=new D(new Ii(.024,.006,8,14,Math.PI),n);r.rotation.z=-Math.PI/2,r.position.set(.039,.046,0),t.add(r);const o=new D(new ra(.038,14),new pe({color:e,roughness:.16,metalness:.1}));return o.rotation.x=-Math.PI/2,o.position.y=.076,t.add(o),t}function rM(s,e=1){const{textures:t,materials:n}=s,i=new qe,r=new D(new je(.22,.15,.025,20),n.ceramicMat);r.position.y=.012,r.castShadow=r.receiveShadow=!0,i.add(r);const o=new D(new je(.088,.066,.105,18),new pe({color:"#c48668",roughness:.88}));o.position.y=.072,o.castShadow=!0,i.add(o);const a=new D(new Et(.088,14,10,0,Math.PI*2,0,Math.PI*.55),new pe({color:"#a87454",roughness:.88}));a.position.y=.11,i.add(a);const l=new pe({color:"#f6e8e4",roughness:.58}),c=new D(new Ii(.056,.028,10,18),l);c.rotation.x=Math.PI/2,c.position.y=.145,i.add(c);const h=new D(new Ii(.036,.023,10,16),l);h.rotation.x=Math.PI/2,h.position.y=.178,i.add(h);const u=new D(new jn(.036,.055,12),l);u.position.y=.21,i.add(u);const d=new D(new Et(.022,8,6),new pe({color:St.blossomMid,roughness:.5}));d.scale.set(1.2,.45,1),d.position.set(.032,.19,.025),i.add(d);const f=new D(new je(.008,.009,.085,8),new pe({color:"#f7efe1",roughness:.5}));f.position.y=.255,i.add(f);const g=new D(new Et(.015,8,8),new pe({color:"#fff4d2",emissive:"#ffb24f",emissiveIntensity:2.2,roughness:.2}));g.scale.set(.75,1.45,.75),g.position.y=.308,i.add(g);const _=new On(new Sn({map:t.glowTex,transparent:!0,opacity:.5,depthWrite:!1,blending:on}));return _.position.y=.308,_.scale.set(.32,.32,.32),i.add(_),i.scale.setScalar(e),{group:i,flame:g,halo:_}}function oM(s,e=1){const{materials:t}=s,n=new qe,i=new D(new qr([new Z(0,0),new Z(.06,0),new Z(.095,.08),new Z(.082,.18),new Z(.042,.25),new Z(.052,.28)],14),t.ceramicMat);i.castShadow=!0,n.add(i);const r=new pe({color:"#55704a",roughness:.85}),o=new pe({color:"#f7efe3",roughness:.65}),a=new pe({color:St.blossomPale,roughness:.65});for(let l=0;l<11;l++){const c=l/11*Math.PI*2,h=.16+l%3*.11,u=new D(new je(.004,.005,.23,5),r);u.position.set(Math.cos(c)*.026,.31,Math.sin(c)*.026),u.rotation.set(Math.sin(c)*h,0,-Math.cos(c)*h),n.add(u);const d=new qe;d.position.set(Math.cos(c)*(.055+l%3*.022),.41+l%3*.026,Math.sin(c)*(.055+l%3*.022));for(let f=0;f<3;f++){const g=f/3*Math.PI*2+l,_=new D(new oa(.011,0),l%3===0?a:o);_.position.set(Math.cos(g)*.014,(f-1)*.01,Math.sin(g)*.014),d.add(_)}n.add(d)}return n.scale.setScalar(e),n}function aM(s,e=.46,t=.36,n=null){const{textures:i,materials:r}=s,o=new qe,a=new D(new se(e,t,.045),r.woodMat);a.castShadow=!0,o.add(a);for(const h of[-1,1])for(const u of[-1,1]){const d=new D(new se(.055,.055,.048),r.brassMat);d.position.set(h*(e*.5-.022),u*(t*.5-.022),.002),o.add(d)}const l=new D(new ft(e-.068,t-.068),new pe({map:n||i.assignmentPlaceholderTex||i.photoArtTex,roughness:.42}));l.position.z=.025,o.add(l);const c=new D(new se(.04,t*.82,.03),r.woodDarkMat);return c.position.set(0,-.02,-.1),c.rotation.x=.48,o.add(c),o}function Vi(s){const{textures:e,materials:t}=s,n=new qe,i=new D(new se(.18,.03,.18),t.woodDarkMat);i.position.y=.015,n.add(i);const r=new D(new se(.12,.18,.12),t.shojiMat);r.position.y=.12,n.add(r);for(const l of[-1,1])for(const c of[-1,1]){const h=new D(new se(.018,.2,.018),t.woodDarkMat);h.position.set(l*.066,.12,c*.066),n.add(h)}const o=new D(new jn(.14,.08,4),t.woodDarkMat);o.position.y=.25,o.rotation.y=Math.PI/4,n.add(o);const a=new On(new Sn({map:e.glowTex,transparent:!0,opacity:.45,depthWrite:!1,blending:on}));return a.position.y=.13,a.scale.set(.55,.55,.55),n.add(a),n}function cM(s,e,t){const n=is(t.sortOrder*137+31),{textures:i,materials:r}=e,{x:o,z:a}=t.location,l=xt(o,a),c=new qe;c.position.set(o,l,a),s.add(c);const h=new D(new je(.88,.96,.06,9),r.stoneDarkMat);h.position.y=.025,h.receiveShadow=!0,c.add(h),Jr(c,r.contactShadowMat,1.15,.015);const u={};switch(t.assetReference){case"headband-stand":case"welcome-sign":{c.rotation.y=-.28;const d=new D(new se(.76,.08,.56),r.woodDarkMat);d.position.set(0,.08,0),d.castShadow=d.receiveShadow=!0,c.add(d);for(const z of[-.28,.28])for(const q of[-.18,.18]){const ue=new D(new se(.065,.66,.065),r.woodDarkMat);ue.position.set(z,.41,q),ue.castShadow=!0,c.add(ue)}const f=new D(new se(.84,.055,.62),r.woodMat);f.position.set(0,.74,0),f.castShadow=f.receiveShadow=!0,c.add(f);const g=new D(new se(.52,.016,.42),r.linenMat);g.position.set(-.04,.775,.02),c.add(g);const _=new D(new je(.14,.17,.035,16),r.woodDarkMat);_.position.set(-.04,.798,.02),c.add(_);const m=new D(new je(.028,.036,.22,12),r.woodDarkMat);m.position.set(-.04,.91,.02),c.add(m);const p=new D(new je(.085,.085,.24,16),new pe({color:"#ede3d5",roughness:.78}));p.rotation.x=Math.PI/2,p.position.set(-.04,1.02,.02),p.castShadow=!0,c.add(p);for(const z of[-.125,.125]){const q=new D(new je(.09,.09,.018,16),r.woodMat);q.rotation.x=Math.PI/2,q.position.set(-.04,1.02,.02+z),c.add(q)}const y=new qe;y.position.set(-.04,1.03,.03),c.add(y);const M=new pe({color:"#d87a96",roughness:.36,metalness:.08}),x=new pe({color:"#f7dce5",roughness:.45}),b=new D(new Ii(.145,.022,14,28,Math.PI*1.28),M);b.rotation.z=-Math.PI*.14,b.castShadow=!0,y.add(b);const S=new D(new Ii(.146,.01,10,24,Math.PI*1.24),x);S.rotation.z=-Math.PI*.12,S.position.z=.012,y.add(S);const E=new qe;E.position.set(.105,.105,.018),E.rotation.z=-.58,y.add(E);for(const z of[-1,1]){const q=new D(new jn(.036,.068,10),x);q.rotation.z=z*(Math.PI/2),q.scale.set(1,1,.52),q.position.x=z*.032,E.add(q)}const A=new D(new Et(.016,10,8),new pe({color:"#fff8ef",roughness:.2,metalness:.15}));E.add(A);const w=[new P(-.46,.02,-.26),new P(-.52,.65,-.22),new P(-.36,1.32,-.12),new P(-.02,1.66,.04),new P(.32,1.72,.12)],v=new Hs(new ks(w),14,.055,7,!1),C=new D(v,r.barkMat);C.castShadow=!0,c.add(C);const L=[new P(-.36,1.32,-.12),new P(-.18,1.54,.24),new P(.12,1.58,.34)],F=new D(new Hs(new ks(L),8,.032,6,!1),r.barkMat);c.add(F);const B=new pe({color:St.blossomPale,roughness:.7}),U=new pe({color:St.blossomMid,roughness:.68});[[-.26,1.56,-.06,.56],[.02,1.68,.04,.64],[.3,1.68,.12,.54],[-.14,1.54,.24,.52],[.14,1.58,.3,.5]].forEach(([z,q,ue,Se],G)=>{for(let J=0;J<3;J++){const le=new D(new ft(Se,Se*.85),r.blossomCardMat);le.position.set(z,q,ue),le.rotation.set((J-1)*.32+G*.15,J/3*Math.PI+G*.7,(J%2?1:-1)*.18),c.add(le)}for(let J=0;J<4;J++){const le=J/4*Math.PI*2+G,ae=new D(new oa(.028,0),(J+G)%2?U:B);ae.position.set(z+Math.cos(le)*.14,q-.04+J%2*.05,ue+Math.sin(le)*.14),c.add(ae)}});for(let z=0;z<7;z++){const q=new D(new Et(.018,6,5),z%2?U:B);q.scale.set(1.3,.25,.85),q.position.set(-.22+z*.07,.785,-.14+z*3%5*.065),q.rotation.y=z*1.1,c.add(q)}const Y=Vi(e);Y.position.set(.26,.768,-.14),c.add(Y);break}case"photo-stand":{c.rotation.y=.25;const d=new qe;c.add(d);for(const w of[-.28,.28]){const v=new D(new se(.058,1.44,.058),r.woodDarkMat);v.position.set(w,.71,.08),v.rotation.x=-.14,v.rotation.z=w>0?.1:-.1,v.castShadow=!0,d.add(v)}const f=new D(new se(.052,1.36,.052),r.woodDarkMat);f.position.set(0,.66,-.24),f.rotation.x=.36,f.castShadow=!0,d.add(f);const g=new D(new se(.06,.96,.045),r.woodDarkMat);g.position.set(0,1.02,.02),g.rotation.x=-.14,d.add(g);const _=new D(new se(.82,.055,.2),r.woodMat);_.position.set(0,.78,.1),_.castShadow=!0,d.add(_);const m=aM(e,.72,.54,i.assignmentPlaceholderTex);m.position.set(0,1.08,.09),m.rotation.x=-.14,d.add(m);const p=new D(new je(.24,.27,.42,12),r.woodDarkMat);p.position.set(.42,.23,.28),p.castShadow=p.receiveShadow=!0,c.add(p);const y=new D(new se(.24,.018,.32),r.woodMat);y.position.set(.38,.45,.28),y.rotation.y=-.28,c.add(y);const M=new D(new ft(.2,.27),new pe({map:i.examSheetTex,roughness:.65}));M.rotation.x=-Math.PI/2,M.rotation.z=-.28,M.position.set(.38,.461,.28),c.add(M);const x=new D(new se(.08,.02,.03),r.brassMat);x.position.set(.34,.466,.15),x.rotation.y=-.28,c.add(x);const b=new D(new je(.075,.055,.11,12),new pe({color:"#b5674a",roughness:.78}));b.position.set(-.34,.835,.12),d.add(b);const S=new pe({color:"#689662",roughness:.6}),E=new D(new je(.008,.01,.11,6),S);E.position.set(-.34,.92,.12),d.add(E);for(const w of[-1,1]){const v=new D(new Et(.035,8,6),S);v.scale.set(1.4,.32,.75),v.position.set(-.34+w*.038,.96,.12),v.rotation.z=-w*.35,d.add(v)}const A=oM(e,.62);A.position.set(-.38,.05,.34),c.add(A);break}case"after-exams-seats":case"cupcake-table":{c.rotation.y=-.22;for(const M of[-1,1]){const x=new qe;x.position.set(M*.52,.04,.06),x.rotation.y=M<0?.42:-.42,c.add(x);for(const b of[-.21,.21])for(const S of[-.18,.18]){const E=new D(new se(.048,.44,.048),r.darkMetalMat);E.position.set(b,.22,S),E.castShadow=!0,x.add(E)}for(let b=-1;b<=1;b++){const S=new D(new se(.48,.038,.115),r.woodMat);S.position.set(0,.44,b*.125),S.castShadow=S.receiveShadow=!0,x.add(S)}for(const b of[-.2,.2]){const S=new D(new se(.042,.46,.042),r.darkMetalMat);S.position.set(b,.66,-.18),S.rotation.x=-.12,x.add(S)}for(const b of[.64,.8]){const S=new D(new se(.48,.085,.032),r.woodMat);S.position.set(0,b,-.19),S.rotation.x=-.12,S.castShadow=!0,x.add(S)}}const d=.52,f=new D(new se(.62,.048,.48),r.woodMat);f.position.set(0,d,-.06),f.castShadow=f.receiveShadow=!0,c.add(f);for(const M of[-.25,.25])for(const x of[-.18,.18]){const b=new D(new se(.05,d-.02,.05),r.woodDarkMat);b.position.set(M,(d-.02)*.5,-.06+x),b.castShadow=!0,c.add(b)}["#3d5a78","#8c584c","#5b7861"].forEach((M,x)=>{const b=new D(new se(.24-x*.012,.04,.175),new pe({color:M,roughness:.8}));b.position.set(-.14,d+.044+x*.04,-.12),b.rotation.y=.18-x*.15,b.castShadow=!0,c.add(b)});const _=new D(new se(.22,.014,.28),r.woodDarkMat);_.position.set(.14,d+.031,-.02),_.rotation.y=-.24,c.add(_);const m=new D(new ft(.19,.25),new pe({map:i.examSheetTex,roughness:.65}));m.rotation.x=-Math.PI/2,m.rotation.z=-.24,m.position.set(.14,d+.04,-.02),c.add(m);const p=new D(new ft(.19,.25),new pe({map:i.examSheetTex,roughness:.7}));p.rotation.x=-Math.PI/2,p.rotation.z=.08,p.position.set(.11,d+.028,.02),c.add(p);for(const[M,x,b,S]of[[.24,.04,.45,"#2b476e"],[.03,.11,-.35,"#8c3b4a"]]){const E=new D(new je(.007,.006,.15,6),new pe({color:S,roughness:.35}));E.rotation.set(0,b,Math.PI/2),E.position.set(M,d+.042,x),c.add(E)}const y=Vi(e);y.position.set(-.22,d+.024,.1),c.add(y);break}case"first-text-chocolate":case"two-seats":{c.rotation.y=.24;const d=.64;for(let O=-1;O<=1;O++){const Y=new D(new se(.96,.052,.2),r.woodMat);Y.position.set(0,d,O*.21),Y.castShadow=Y.receiveShadow=!0,c.add(Y)}for(const O of[-.38,.38])for(const Y of[-.22,.22]){const z=new D(new se(.07,d-.02,.07),r.woodDarkMat);z.position.set(O,(d-.02)*.5,Y),z.castShadow=!0,c.add(z)}const f=new D(new se(.66,.014,.42),r.linenMat);f.position.set(0,d+.03,.02),c.add(f);const g=new D(new se(.18,.05,.14),r.woodDarkMat);g.position.set(-.17,d+.058,.02),g.rotation.y=.22,c.add(g);const _=new qe;_.position.set(-.17,d+.145,.03),_.rotation.y=.22,_.rotation.x=-.58,c.add(_);const m=new D(Ti(.16,.31,.02,.022,.004,!0),new pe({color:"#242b38",roughness:.28,metalness:.62}));m.castShadow=!0,_.add(m);const p=new D(Ti(.048,.052,.008,.01,.002,!0),r.darkMetalMat);p.position.set(-.042,.11,-.012),_.add(p);const y=new pe({map:i.phoneLockTex,emissiveMap:i.phoneLockTex,emissive:new _e("#ffdfb8"),emissiveIntensity:.45,roughness:.22}),M=new D(new ft(.142,.285),y);M.position.z=.012,_.add(M);const x=new On(new Sn({map:i.glowTex,color:"#ffd6a5",transparent:!0,opacity:.38,depthWrite:!1,blending:on}));x.position.set(0,0,.05),x.scale.set(.45,.45,.45),_.add(x);const b=new D(new jr(.14,.165,28),new Vt({color:"#ffd6a0",transparent:!0,opacity:.5,side:ct}));b.position.set(-.17,d+.042,.03),b.rotation.x=-Math.PI/2,c.add(b);const S=new Cn("#ffd29d",.9,3.2,1.8);S.position.set(-.17,d+.32,.14),c.add(S);const E=new qe;E.position.set(.15,d+.058,.05),E.rotation.y=-.26,c.add(E);const A=new pe({color:"#5c2b47",roughness:.45,metalness:.12}),w=new pe({color:"#e3ba66",roughness:.3,metalness:.68}),v=new pe({color:"#3b2116",roughness:.52}),C=new D(new se(.22,.038,.16),A);C.castShadow=!0,E.add(C);const L=new D(new se(.205,.034,.09),w);L.position.set(0,.001,-.075),E.add(L);const F=new D(new se(.19,.032,.075),v);F.position.set(0,.004,-.115),E.add(F);for(const O of[-.06,0,.06])for(const Y of[-.13,-.095]){const z=new D(new se(.05,.012,.028),v);z.position.set(O,.022,Y),E.add(z)}const B=new D(new se(.226,.042,.032),w);B.position.set(0,0,.01),E.add(B);for(const O of[-1,1]){const Y=new D(new jn(.028,.055,8),w);Y.rotation.z=O*(Math.PI/2),Y.position.set(O*.028,.03,.01),E.add(Y)}const U=Vi(e);U.position.set(.32,d+.025,-.16),c.add(U),u.firstTextPhone={screen:M,screenMat:y,halo:x,ring:b,light:S,location:t.location};break}case"cupcake-wrapper-table":case"lecture-desk":{c.rotation.y=-.24;const d=.66;for(let z=-1;z<=1;z++){const q=new D(new se(1.16,.055,.22),r.woodMat);q.position.set(0,d,z*.23),q.castShadow=q.receiveShadow=!0,c.add(q)}for(const z of[-.46,.46])for(const q of[-.26,.26]){const ue=new D(new se(.082,d-.02,.082),r.woodDarkMat);ue.position.set(z,(d-.02)*.5,q),ue.castShadow=!0,c.add(ue)}const f=new D(new se(.88,.012,.54),r.linenMat);f.position.set(0,d+.032,.02),f.receiveShadow=!0,c.add(f);const g=new qe;g.position.set(.04,d+.04,.15),c.add(g);const _=new D(new se(.24,.008,.22),new pe({color:"#f7efe4",roughness:.85}));_.rotation.y=.18,g.add(_);const m=new pe({vertexColors:!0,roughness:.84,side:ct}),p=new pe({color:"#f2dfd0",roughness:.86,side:ct}),y=new D(new je(.068,.068,.005,22),p);y.position.y=.007,g.add(y);const M=new D(iM(.068,.102,.092,24),m);M.position.y=.052,M.castShadow=M.receiveShadow=!0,g.add(M);const x=new pe({color:"#7a4d32",roughness:.9});for(const[z,q,ue]of[[-.02,.01,.012],[.022,-.015,.01],[.005,.024,.009]]){const Se=new D(new Is(ue,0),x);Se.position.set(z,.013,q),g.add(Se)}const b=rM(e,.98);b.group.position.set(-.24,d+.038,-.05),c.add(b.group);const S=new qe;S.position.set(.29,d+.038,.02),S.rotation.y=-.35,c.add(S);const E=new D(new je(.18,.13,.022,18),r.ceramicMat);E.position.y=.011,E.castShadow=E.receiveShadow=!0,S.add(E);const A=new pe({color:"#45281a",roughness:.78}),w=new pe({color:"#29150c",roughness:.38}),v=new pe({color:"#b58363",roughness:.65}),C=new D(new je(.12,.12,.095,3,1,!1,0,Math.PI*.55),A);C.position.set(0,.068,.02),C.castShadow=!0,S.add(C);for(const z of[.048,.082]){const q=new D(new se(.14,.012,.095),v);q.position.set(.01,z,.01),S.add(q)}const L=new D(new se(.145,.016,.1),w);L.position.set(.01,.118,.01),S.add(L);const F=new qe;F.position.set(-.28,d+.052,.17),F.rotation.y=.32,c.add(F);const B=new D(new se(.16,.028,.1),new pe({color:"#6b304b",roughness:.45}));B.castShadow=!0,F.add(B);const U=new D(new se(.164,.032,.024),new pe({color:"#e3ba66",roughness:.32,metalness:.6}));F.add(U);const O=Vi(e);O.position.set(.38,d+.032,-.17),c.add(O);const Y=new Cn("#ffbe70",1.15,3.8,1.8);Y.position.set(.15,d+.32,.05),c.add(Y),u.cupcake=b;break}case"student-centre-table":case"study-desk":{c.rotation.y=.2;const d=.66,f=new D(new je(.28,.32,.04,16),r.darkMetalMat);f.position.y=.04,c.add(f);const g=new D(new je(.055,.065,d-.04,12),r.darkMetalMat);g.position.y=d*.5,g.castShadow=!0,c.add(g);const _=new D(new je(.52,.52,.048,22),r.woodMat);_.position.y=d,_.castShadow=_.receiveShadow=!0,c.add(_);for(const[A,w]of[[-1,.48],[1,-.48]]){const v=new qe;v.position.set(A*.56,.03,.14),v.rotation.y=w,c.add(v);for(const F of[-.18,.18])for(const B of[-.17,.17]){const U=new D(new je(.022,.018,.44,8),r.darkMetalMat);U.position.set(F,.22,B),U.castShadow=!0,v.add(U)}const C=new D(Ti(.42,.046,.4,.035,.008),r.woodMat);C.position.set(0,.44,0),C.castShadow=!0,v.add(C);const L=new D(Su(.42,.24,.034,.045),r.woodMat);L.position.set(0,.68,-.19),L.rotation.x=-.1,L.castShadow=!0,v.add(L);for(const F of[-.16,.16]){const B=new D(new je(.016,.016,.34,8),r.darkMetalMat);B.position.set(F,.58,-.18),B.rotation.x=-.1,v.add(B)}}const m=new qe;m.position.set(-.1,d+.029,.12),m.rotation.y=.28,c.add(m);const p=new pe({color:"#f8eff3",roughness:.86,side:ct}),y=new pe({color:"#d89ab0",roughness:.82,side:ct}),M=new D(tc(.24,.22,.005),y);M.castShadow=!0,m.add(M);const x=new D(tc(.226,.206,.007),p);x.position.set(0,.004,0),x.castShadow=!0,m.add(x);const b=new D(tc(.195,.165,.008),p);b.position.set(.012,.012,-.012),b.rotation.y=.14,m.add(b);const S=new D(new je(.016,.018,.19,10,1,!1,0,Math.PI),p);S.rotation.z=Math.PI/2,S.rotation.y=.1,S.position.set(.006,.016,.055),m.add(S);for(const[A,w,v,C]of[[.18,.08,"#e8dfd1",-.4],[-.18,-.14,"#d9c5b4",2.4]]){const L=sM(v);L.position.set(A,d+.024,w),L.rotation.y=C,c.add(L)}const E=Vi(e);E.position.set(.14,d+.024,-.18),c.add(E);break}case"choir-organ":case"ringing-phone":{c.rotation.y=-.26;const d=1.06,f=.76;for(const U of[-.48,.48]){const O=new D(new se(.065,.82,.46),r.woodDarkMat);O.position.set(U,.43,-.06),O.castShadow=O.receiveShadow=!0,c.add(O);const Y=new D(new se(.09,.05,.58),r.woodDarkMat);Y.position.set(U,.045,-.04),c.add(Y)}const g=new D(new se(d-.06,.68,.04),r.woodMat);g.position.set(0,.42,-.22),g.castShadow=!0,c.add(g);for(let U=-4;U<=4;U++){const O=new D(new se(.042,.022,.24),r.woodMat);O.position.set(U*.075,.055,-.06),c.add(O)}const _=new D(new se(d,.09,.48),r.woodDarkMat);_.position.set(0,f,-.05),_.castShadow=_.receiveShadow=!0,c.add(_);const m=new D(new se(d,.08,.24),r.woodMat);m.position.set(0,f+.08,-.17),m.castShadow=!0,c.add(m);for(let U=-5;U<=5;U++){const O=new D(new se(.042,.018,.03),U%3===0?new pe({color:"#c45b5b",roughness:.4}):r.ceramicMat);O.position.set(U*.068,f+.09,-.05),O.rotation.x=.35,c.add(O)}const p=new pe({color:"#faf6ed",roughness:.25}),y=new pe({color:"#1e1d22",roughness:.28,metalness:.2}),M=21,x=.041,b=-.8200000000000001*.5;for(let U=0;U<M;U++){const O=new D(new se(.036,.026,.175),p);O.position.set(b+U*x,f+.052,.095),O.castShadow=!0,c.add(O);const Y=U%7;if(U<M-1&&(Y===0||Y===1||Y===3||Y===4||Y===5)){const z=new D(new se(.022,.034,.105),y);z.position.set(b+(U+.5)*x,f+.07,.062),z.castShadow=!0,c.add(z)}}const S=new D(new se(.56,.32,.022),r.woodDarkMat);S.position.set(0,f+.26,-.17),S.rotation.x=-.24,S.castShadow=!0,c.add(S);const E=new D(new ft(.46,.27),new pe({map:i.sheetMusicTex,roughness:.55}));E.position.set(0,f+.26,-.155),E.rotation.x=-.24,c.add(E);const A=new D(new se(.2,.026,.15),new pe({color:"#6b2737",roughness:.65}));A.position.set(.36,f+.132,-.16),A.rotation.y=-.22,c.add(A);const w=new D(new se(.012,.006,.065),r.brassMat);w.position.set(.36,f+.146,-.16),w.rotation.y=-.22,c.add(w);const v=new D(new se(.042,.006,.012),r.brassMat);v.position.set(.36,f+.146,-.17),v.rotation.y=-.22,c.add(v);const C=new D(new se(.58,.024,.042),r.brassMat);C.position.set(0,f+.115,-.145),C.rotation.x=-.24,c.add(C);for(let U=-3;U<=3;U++){if(Math.abs(U)<=1)continue;const O=new D(new je(.014,.014,.26-Math.abs(U)*.025,10),r.brassMat);O.position.set(U*.095,f+.25,-.24),c.add(O)}const L=new D(Ti(.68,.048,.28,.022,.006),r.woodMat);L.position.set(0,.46,.36),L.castShadow=L.receiveShadow=!0,c.add(L);for(const U of[-.28,.28]){const O=new D(new se(.05,.44,.24),r.woodDarkMat);O.position.set(U,.23,.36),O.castShadow=!0,c.add(O)}const F=new Cn("#ffd294",1.4,3.6,1.8);F.position.set(0,f+.44,.08),c.add(F);const B=Vi(e);B.position.set(-.38,f+.115,-.17),c.add(B);break}case"lecture-rows":case"iced-coffee-bench":{c.rotation.y=.22,h.scale.set(1.25,1,1.32);const d=new D(new se(1.12,.11,.68),r.woodDarkMat);d.position.set(0,.085,.36),d.receiveShadow=!0,c.add(d);const f=(S,E,A=0)=>{const w=new qe;w.position.set(0,E,S),c.add(w);const v=new D(Ti(.86,.045,.38,.018,.006),r.woodMat);v.position.set(0,.66,-.12),v.castShadow=v.receiveShadow=!0,w.add(v);const C=new D(new se(.82,.26,.025),r.woodDarkMat);C.position.set(0,.51,-.28),w.add(C);for(const U of[-.38,.38]){const O=new D(new se(.045,.64,.34),r.darkMetalMat);O.position.set(U,.32,-.12),O.castShadow=!0,w.add(O)}const L=new qe;L.position.set(0,0,.18),L.rotation.y=A,w.add(L);for(const U of[-.17,.17])for(const O of[-.15,.15]){const Y=new D(new je(.018,.016,.42,8),r.darkMetalMat);Y.position.set(U,.21,O),L.add(Y)}const F=new D(Ti(.4,.042,.36,.032,.007),r.woodMat);F.position.set(0,.42,0),F.castShadow=!0,L.add(F);const B=new D(Su(.4,.22,.032,-.04),r.woodMat);B.position.set(0,.62,.16),B.rotation.x=.08,B.castShadow=!0,L.add(B);for(const U of[-.15,.15]){const O=new D(new je(.015,.015,.28,8),r.darkMetalMat);O.position.set(U,.52,.16),L.add(O)}return w},g=f(-.34,.04,-.26),_=new D(new ft(.22,.26),new pe({map:i.examSheetTex,roughness:.65}));_.rotation.x=-Math.PI/2,_.rotation.z=.12,_.position.set(-.08,.686,-.12),g.add(_);const m=f(.36,.14,.05),p=new D(new se(.18,.014,.23),r.ceramicMat);p.position.set(-.18,.69,-.11),p.rotation.z=.03,m.add(p);const y=new D(new se(.18,.014,.23),new pe({map:i.examSheetTex,roughness:.65}));y.position.set(0,.69,-.11),y.rotation.z=-.03,m.add(y);const M=new D(new je(.007,.005,.15,6),r.brassMat);M.rotation.set(0,.4,Math.PI/2),M.position.set(.06,.702,-.05),m.add(M);const x=new D(new se(.11,.008,.065),new pe({color:"#d7e2e8",metalness:.65,roughness:.32}));x.position.set(.24,.688,-.1),x.rotation.y=.24,m.add(x);for(const S of[-.025,.025])for(const E of[-.014,.014]){const A=new D(new bl(.008,.01,4,8),r.ceramicMat);A.rotation.z=Math.PI/2,A.position.set(.24+S,.695,-.1+E),m.add(A)}const b=Vi(e);b.position.set(-.34,.685,-.14),g.add(b);break}case"library-study-room":case"mini-cinema":{c.rotation.y=-.18,h.scale.set(1.38,1,1.32);const d=.68,f=new D(new se(.92,.05,.56),r.woodMat);f.position.set(-.08,d,.14),f.castShadow=f.receiveShadow=!0,c.add(f);for(const J of[-.46,.3]){const le=new D(new se(.06,d-.02,.46),r.woodDarkMat);le.position.set(J,(d-.02)*.5,.14),le.castShadow=!0,c.add(le)}for(const[J,le,ae]of[[-.28,.12,.14],[.06,.1,-.12]]){const H=new qe;H.position.set(J,d+.026,le),H.rotation.y=ae,c.add(H);const j=new D(Ti(.28,.016,.2,.014,.004),r.darkMetalMat);H.add(j);const ge=new D(new se(.23,.004,.095),new pe({color:"#1b1f28",roughness:.5}));ge.position.set(0,.008,-.02),H.add(ge);const Ee=new D(new se(.075,.003,.048),new pe({color:"#3b4252",roughness:.4}));Ee.position.set(0,.008,.06),H.add(Ee);const ye=new D(Ti(.28,.19,.014,.012,.004,!0),r.darkMetalMat);ye.position.set(0,.095,-.095),ye.rotation.x=-.22,H.add(ye);const Oe=new D(new ft(.255,.165),new pe({map:i.webProjectScreenTex,emissiveMap:i.webProjectScreenTex,emissive:new _e("#ffffff"),emissiveIntensity:.55,roughness:.25}));Oe.position.set(0,.095,-.086),Oe.rotation.x=-.22,H.add(Oe)}const g=new D(new se(.085,.014,.16),new pe({color:"#232a38",roughness:.3,metalness:.5}));g.position.set(-.09,d+.033,.29),g.rotation.y=.35,c.add(g);const _=new D(new ft(.074,.14),new pe({color:"#b8f2d0",emissive:"#6ad99b",emissiveIntensity:.9,roughness:.2}));_.rotation.x=-Math.PI/2,_.rotation.z=.35,_.position.set(-.09,d+.041,.29),c.add(_);const m=new qe;m.position.set(.26,d+.025,.24),c.add(m);const p=new D(new je(.056,.042,.13,14),new pe({color:"#8f5e42",roughness:.25}));p.position.y=.065,m.add(p);const y=new D(new je(.058,.055,.036,14),new pe({color:"#ead8c5",roughness:.35}));y.position.y=.12,m.add(y);const M=new D(new Et(.058,12,8,0,Math.PI*2,0,Math.PI*.5),r.glassMat);M.position.y=.136,m.add(M);const x=new D(new je(.007,.007,.14,6),new pe({color:St.blossomMid,roughness:.4}));x.position.set(.015,.18,0),x.rotation.z=-.22,m.add(x);const b=new qe;b.position.set(-.34,.04,-.34),b.rotation.y=.22,c.add(b);for(const J of[-.46,.46]){const le=new D(new se(.048,1.42,.048),r.darkMetalMat);le.position.set(J,.71,0),le.castShadow=!0,b.add(le);const ae=new D(new se(.06,.04,.38),r.darkMetalMat);ae.position.set(J,.02,0),b.add(ae)}const S=new D(new se(.96,.62,.04),r.woodDarkMat);S.position.set(0,1.06,0),S.castShadow=!0,b.add(S);const E=new D(new ft(.88,.54),new pe({map:i.whiteboardTex,roughness:.28}));E.position.set(0,1.06,.022),b.add(E);const A=new D(new se(.88,.025,.06),r.darkMetalMat);A.position.set(0,.74,.035),b.add(A);const w=new qe;w.position.set(.58,.04,-.12),w.rotation.y=-.38,c.add(w);for(const J of[-.28,.28]){const le=new D(new se(.065,1.48,.09),r.woodDarkMat);le.position.set(J,.74,0),le.castShadow=!0,w.add(le)}const v=new D(new se(.66,.07,.1),r.woodDarkMat);v.position.set(0,1.48,0),w.add(v);const C=new D(new se(.48,1.4,.048),r.woodMat);C.position.set(-.02,.72,.02),C.rotation.y=.18,C.castShadow=!0,w.add(C);const L=new D(new se(.26,.58,.054),r.glassMat);L.position.set(-.02,.98,.02),L.rotation.y=.18,w.add(L);const F=new D(new se(.045,.14,.06),r.brassMat);F.position.set(.16,.74,.06),w.add(F);const B=new D(new se(.018,.012,.055),r.brassMat);B.position.set(.16,.71,.095),w.add(B);const U=new D(new se(.32,.42,.28),r.woodDarkMat);U.position.set(.18,.21,.28),U.castShadow=U.receiveShadow=!0,w.add(U);const O=new D(new se(.26,.016,.22),r.linenMat);O.position.set(.18,.428,.28),w.add(O);const Y=new D(new Ii(.042,.008,10,20),r.brassMat);Y.rotation.x=Math.PI/2,Y.position.set(.12,.442,.27),w.add(Y);const z=new D(new se(.055,.012,.032),new pe({color:"#c84b5b",roughness:.45}));z.position.set(.065,.442,.29),z.rotation.y=-.35,w.add(z);const q=new D(new se(.065,.012,.022),r.brassMat);q.position.set(.18,.442,.26),q.rotation.y=.22,w.add(q);const ue=new qe;ue.position.set(.245,.442,.305),ue.rotation.y=-.48,w.add(ue);const Se=new D(new se(.064,.012,.02),r.brassMat);ue.add(Se);for(const[J,le]of[[-.014,.016],[.004,.012],[.02,.018]]){const ae=new D(new se(.012,.012,.018),r.brassMat);ae.position.set(J,0,le),ue.add(ae)}const G=new Cn("#ffd298",1.6,4.2,1.8);G.position.set(.1,1.25,.25),c.add(G);break}case"it-movie-night":case"unfinished-arch":{h.scale.set(1.52,1,1.32);for(let le=-2;le<=2;le++){const ae=new D(new Is(.085,1),r.stoneMat);ae.position.set(0,.065,le*.22),ae.scale.set(1.1,.55,1.3),c.add(ae)}const d=new qe;d.position.set(0,.1,.36),d.rotation.y=.25,c.add(d);const f=new pe({color:"#f2c14e",emissive:"#d99b26",emissiveIntensity:.25,roughness:.55,side:ct}),g=new ts;g.moveTo(-.08,.032),g.lineTo(.08,.032),g.lineTo(.052,0),g.lineTo(-.052,0),g.closePath();const _=new D(new Yr(g,{depth:.052,bevelEnabled:!0,bevelThickness:.004,bevelSize:.003,bevelSegments:1}),f);_.position.set(0,0,-.026),d.add(_);const m=new D(new jn(.044,.068,3),f);m.position.y=.056,m.scale.set(1.2,1,.45),d.add(m);const p=new qe;p.position.set(-.68,.04,0),p.rotation.y=.22,c.add(p);const y=new D(new je(.54,.54,.016,20),new pe({color:"#63536e",roughness:.9}));y.position.y=.01,p.add(y);const M=new D(new se(.68,.32,.26),r.woodDarkMat);M.position.set(0,.18,-.22),M.castShadow=M.receiveShadow=!0,p.add(M);const x=new D(new se(.64,.4,.035),r.darkMetalMat);x.position.set(0,.58,-.22),x.castShadow=!0,p.add(x);const b=new pe({map:i.movieScreenTex,emissiveMap:i.movieScreenTex,emissive:new _e("#ffbfa0"),emissiveIntensity:.95,roughness:.25}),S=new D(new ft(.59,.35),b);S.position.set(0,.58,-.198),p.add(S);const E=new D(new je(.22,.24,.09,16),new pe({color:"#c87e99",roughness:.85}));E.position.set(-.04,.055,.24),E.castShadow=!0,p.add(E);const A=new D(new se(.08,.015,.15),r.darkMetalMat);A.position.set(.22,.03,.22),A.rotation.y=-.35,p.add(A);const w=new D(new ft(.068,.13),new pe({map:i.phoneLockTex,emissiveMap:i.phoneLockTex,emissive:new _e("#ffdcb0"),emissiveIntensity:1.1}));w.rotation.x=-Math.PI/2,w.rotation.z=-.35,w.position.set(.22,.039,.22),p.add(w);const v=new qe;v.position.set(.68,.04,0),v.rotation.y=-.22,c.add(v);const C=new D(new je(.54,.54,.016,20),new pe({color:"#4d5d75",roughness:.9}));C.position.y=.01,v.add(C);const L=new D(new se(.58,.28,.32),r.woodMat);L.position.set(0,.16,-.18),L.castShadow=L.receiveShadow=!0,v.add(L);const F=new D(new se(.34,.018,.24),r.darkMetalMat);F.position.set(0,.31,-.16),v.add(F);const B=new D(new se(.34,.23,.016),r.darkMetalMat);B.position.set(0,.425,-.27),B.rotation.x=-.18,B.castShadow=!0,v.add(B);const U=new D(new ft(.31,.195),b);U.position.set(0,.425,-.258),U.rotation.x=-.18,v.add(U);const O=new D(new je(.22,.24,.09,16),new pe({color:"#6e789c",roughness:.85}));O.position.set(.04,.055,.24),O.castShadow=!0,v.add(O);const Y=new D(new se(.08,.015,.15),r.darkMetalMat);Y.position.set(-.22,.03,.22),Y.rotation.y=.35,v.add(Y);const z=new D(new ft(.068,.13),new pe({map:i.phoneLockTex,emissiveMap:i.phoneLockTex,emissive:new _e("#ffdcb0"),emissiveIntensity:1.1}));z.rotation.x=-Math.PI/2,z.rotation.z=.35,z.position.set(-.22,.039,.22),v.add(z);const q=new qe;c.add(q);const ue=[],Se=7;for(let le=0;le<Se;le++){const ae=le/(Se-1),H=kt.lerp(-.46,.46,ae),j=.16+Math.sin(ae*Math.PI)*.42,ge=.22+Math.sin(ae*Math.PI)*.08,Ee=new D(new Et(.024,10,8),new pe({color:"#ffebd2",emissive:"#ffbe78",emissiveIntensity:1.8,roughness:.2}));Ee.position.set(H,j,ge),q.add(Ee),ue.push({mesh:Ee,baseY:j,phase:ae*Math.PI*2})}const G=new Cn("#ff8f70",1.6,4.2,1.8);G.position.set(-.65,.72,.1),c.add(G);const J=new Cn("#9ab8ff",1.3,4.2,1.8);J.position.set(.65,.68,.1),c.add(J),u.movieNight={moteGroup:q,motes:ue,nightGlowLeft:G,nightGlowRight:J};break}}for(let d=0;d<4;d++){const f=d/4*Math.PI*2+n()*.8,g=.92+n()*.2,_=new D(new Is(.14+n()*.08,1),r.stoneMat);_.position.set(Math.cos(f)*g,.04,Math.sin(f)*g),_.scale.set(1.2,.55,1.1),c.add(_)}return Zi(c,[u.cupcake?.flame,u.firstTextPhone?.screen,u.firstTextPhone?.ring,u.movieNight?.moteGroup].filter(Boolean)),{group:c,animated:u}}function lM(s,e,t=2.2,n=-12){const{textures:i,materials:r}=e,o=xt(t,n),a=new qe;a.position.set(t,o+.82,n),s.add(a);const l=[new Z(0,.56),new Z(.18,.52),new Z(.28,.36),new Z(.3,.14),new Z(.35,-.14),new Z(.42,-.34),new Z(.45,-.44)],c=new qr(l,28),h=c.attributes.position;for(let y=0;y<h.count;y++){const M=h.getX(y),x=h.getY(y),b=h.getZ(y);if(x<.15){const S=Math.atan2(b,M),E=(.15-x)/.6,A=Math.sin(S*7)*.055*E,w=Math.cos(S*7)*.04*E;h.setXYZ(y,M*(1+A),x+w,b*(1+A))}}c.computeVertexNormals();const u=new pe({color:"#f7f3eb",emissive:"#9db4cc",emissiveIntensity:.24,roughness:.52}),d=new D(c,u);d.castShadow=!0,a.add(d);const f=new pe({color:"#242934",roughness:.25}),g=new Vt({color:"#eb9eb5",transparent:!0,opacity:.6}),_=[];for(const y of[-.1,.1]){const M=new D(new Et(.042,10,8),f);M.scale.set(.85,1.2,.65),M.position.set(y,.28,.27),a.add(M),_.push(M);const x=new D(new ra(.036,10),g);x.position.set(y*1.55,.21,.265),a.add(x)}const m=new D(new ft(.95,.95),r.contactShadowMat);m.rotation.x=-Math.PI/2,m.position.set(t,o+.02,n),s.add(m);const p=new On(new Sn({map:i.glowTex,transparent:!0,opacity:.34,depthWrite:!1,blending:on}));return p.scale.set(1.35,1.35,1.35),a.add(p),{ghost:a,ghostEyes:_,baseY:o}}function hM(s,e,t=0,n=-30){const{textures:i,materials:r}=e,o=xt(t,n),a=new qe;a.position.set(t,o,n),s.add(a);const l=new D(new je(1.15,1.32,.22,10),r.stoneDarkMat);l.position.y=.11,l.castShadow=l.receiveShadow=!0,a.add(l);const c=new D(new je(.75,.55,.32,12),r.stoneMat);c.position.y=.38,c.castShadow=c.receiveShadow=!0,a.add(c);const h=new qe;h.position.y=.62,a.add(h);const u=[],d=new pe({color:St.blossomPale,emissive:"#6e3d52",emissiveIntensity:.18,roughness:.58});for(let m=0;m<8;m++){const p=new qe;p.rotation.y=m/8*Math.PI*2,h.add(p);const y=new D(new Et(.42,14,10),d);y.scale.set(.56,1.25,.26),y.position.set(0,.32,.24),y.rotation.x=-.32,y.castShadow=!0,p.add(y),u.push(y)}const f=new D(new Et(.18,16,12),new pe({color:St.warmIvory,emissive:St.amberCore,emissiveIntensity:1.4,roughness:.25}));f.position.y=.32,h.add(f);const g=new On(new Sn({map:i.glowTex,transparent:!0,opacity:.55,depthWrite:!1,blending:on}));g.position.y=.32,g.scale.set(1.75,1.75,1.75),h.add(g);const _=new Cn(St.lanternGlow,3.8,9,1.8);return _.position.set(0,.95,0),a.add(_),Jr(a,r.contactShadowMat,1.5,.018),{bloomPetals:u,coreOrb:f}}function uM(s,e){const{textures:t,materials:n}=e,i=new qe;i.position.set(0,xt(0,21.5),21.5),s.add(i);const r=new D(new Et(.19,18,14),new pe({color:St.warmIvory,emissive:St.amberCore,emissiveIntensity:.72,roughness:.32}));r.scale.set(1,1.18,1),r.position.y=.55,r.castShadow=!0,i.add(r);const o=new ts;o.moveTo(0,0),o.bezierCurveTo(.18,.16,.36,.12,.34,-.04),o.bezierCurveTo(.32,-.18,.12,-.22,0,-.06);const a=new aa(o,10);a.rotateX(-Math.PI/2);const l=new pe({color:St.blossomPale,emissive:St.blossomMid,emissiveIntensity:.25,transparent:!0,opacity:.78,roughness:.3,side:ct}),c=[];for(const u of[-1,1]){const d=new D(a,l);d.position.set(u*.12,.62,-.02),u<0&&(d.scale.x=-1),i.add(d),c.push(d)}Jr(i,n.contactShadowMat,.38,.02);const h=new On(new Sn({map:t.glowTex,transparent:!0,opacity:.42,depthWrite:!1,blending:on}));return h.position.y=.55,h.scale.set(1.05,1.05,1.05),i.add(h),{player:i,body:r,wings:c,aura:h}}class dM extends ns{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _M(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new IM(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=br.extractUrlBase(e);o=br.resolveURL(c,this.path)}else o=br.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Rl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ud){try{o[rt.KHR_BINARY_GLTF]=new LM(e)}catch(u){i&&i(u);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new XM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case rt.KHR_MATERIALS_UNLIT:o[u]=new mM;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[u]=new DM(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[u]=new NM;break;case rt.KHR_MESH_QUANTIZATION:o[u]=new UM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function fM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pM{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new _e(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Qt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Il(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Cn(h),c.distance=u;break;case"spot":c=new Lm(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),zn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class mM{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return Vt}extendParams(e,t,n){const i=[];e.color=new _e(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(i)}}class gM{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class _M{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Z(a,a)}return Promise.all(r)}}class xM{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class vM{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class MM{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class yM{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class wM{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(a[0],a[1],a[2],Qt),Promise.all(r)}}class SM{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class bM{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,yt)),Promise.all(r)}}class TM{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class EM{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class AM{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class RM{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class CM{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class PM{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class IM{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==_n.TRIANGLES&&c.mode!==_n.TRIANGLE_STRIP&&c.mode!==_n.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new Ge,m=new P,p=new Di,y=new P(1,1,1),M=new Ht(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),M.setMatrixAt(x,_.compose(m,p,y));for(const x in l)if(x==="_COLOR_0"){const b=l[x];M.instanceColor=new jc(b.array,b.itemSize,b.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);pt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Ud="glTF",dr=12,bu={JSON:1313821514,BIN:5130562};class LM{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,dr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ud)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-dr,r=new DataView(e,dr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===bu.JSON){const c=new Uint8Array(e,dr+o,a);this.content=n.decode(c)}else if(l===bu.BIN){const c=dr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class DM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=il[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=il[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ls[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},a,c,Qt,d)})})}}class NM{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class UM{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}}class Fd extends Kr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,y=1-m,M=p-d+u;for(let x=0;x!==a;x++){const b=o[_+x+a],S=o[_+x+l]*h,E=o[g+x+a],A=o[g+x]*h;r[x]=y*b+M*S+m*E+p*A}return r}}const FM=new Di;class OM extends Fd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return FM.fromArray(r).normalize().toArray(r),r}}const _n={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ls={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tu={9728:Zt,9729:sn,9984:qu,9985:Bo,9986:mr,9987:Xn},Eu={33071:Wn,33648:Ko,10497:Li},nc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},il={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},BM={CUBICSPLINE:void 0,LINEAR:Fr,STEP:Ur},ic={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new pe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),s.DefaultMaterial}function Gi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function HM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function VM(s){let e;const t=s.extensions&&s.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sc(t.attributes):e=s.indices+":"+sc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+sc(s.targets[n]);return e}function sc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function sl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function GM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const WM=new Ge;class XM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Cl(this.options.manager):this.textureLoader=new Um(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Rl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Gi(r,a,i),zn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(br.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=nc[i.type],a=Ls[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Lt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=nc[i.type],c=Ls[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(y);M||(_=new c(a,p*f,i.count*f/h),M=new dd(_,f/h),t.cache.add(y,M)),m=new kr(M,l,d%f/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new Lt(_,l,g);if(i.sparse!==void 0){const p=nc.SCALAR,y=Ls[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,b=new y(o[1],M,i.sparse.count*p),S=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new Lt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,A=b.length;E<A;E++){const w=b[E];if(m.setX(w,S[E*l]),l>=2&&m.setY(w,S[E*l+1]),l>=3&&m.setZ(w,S[E*l+2]),l>=4&&m.setW(w,S[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Tu[d.magFilter]||sn,h.minFilter=Tu[d.minFilter]||Xn,h.wrapS=Eu[d.wrapS]||Li,h.wrapT=Eu[d.wrapT]||Li,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Zt&&h.minFilter!==sn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ut(_);m.needsUpdate=!0,d(m)}),t.load(br.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),zn(u,o),u.userData.mimeType=o.mimeType||GM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Es,rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new yr,rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return pe}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){const u=i[rt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new _e(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Qt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,yt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ct);const h=r.alphaMode||ic.OPAQUE;if(h===ic.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ic.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Vt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Z(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Vt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Vt){const u=r.emissiveFactor;a.emissive=new _e().setRGB(u[0],u[1],u[2],Qt)}return r.emissiveTexture!==void 0&&o!==Vt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,yt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),zn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Gi(i,u,r),u})}createUniqueName(e){const t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Au(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=VM(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Au(new dt,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?kM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const y=c[f];if(m.mode===_n.TRIANGLES||m.mode===_n.TRIANGLE_STRIP||m.mode===_n.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Rp(_,y):new D(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===_n.TRIANGLE_STRIP?p.geometry=Mu(p.geometry,td):m.mode===_n.TRIANGLE_FAN&&(p.geometry=Mu(p.geometry,Yc));else if(m.mode===_n.LINES)p=new Kc(_,y);else if(m.mode===_n.LINE_STRIP)p=new Sl(_,y);else if(m.mode===_n.LINE_LOOP)p=new Np(_,y);else if(m.mode===_n.POINTS)p=new Go(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&HM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),zn(p,r),m.extensions&&Gi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Gi(i,u[0],r),u[0];const d=new qe;r.extensions&&Gi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(kt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new la(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Ge;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new yl(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let M=0,x=d.length;M<x;M++){const b=d[M],S=f[M],E=g[M],A=_[M],w=m[M];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const v=n._createAnimationTracks(b,S,E,A,w);if(v)for(let C=0;C<v.length;C++)p.push(v[C])}const y=new Sm(r,void 0,p);return zn(y,i),y})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,WM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new pd:c.length>1?h=new qe:c.length===1?h=c[0]:h=new pt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),zn(h,r),r.extensions&&Gi(n,h,r),r.matrix!==void 0){const u=new Ge;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new qe;n.name&&(r.name=i.createUniqueName(n.name)),zn(r,n),n.extensions&&Gi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof rn||d instanceof Ut)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Ei[r.path]===Ei.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ei[r.path]){case Ei.weights:c=Vs;break;case Ei.rotation:c=Gs;break;case Ei.translation:case Ei.scale:c=Ws;break;default:n.itemSize===1?c=Vs:c=Ws;break}const h=i.interpolation!==void 0?BM[i.interpolation]:Fr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Ei[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=sl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Gs?OM:Fd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function YM(s,e,t){const n=e.attributes,i=new Un;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const h=sl(Ls[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,l=new P;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=sl(Ls[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Zn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Au(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=il[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return at.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),zn(s,e),YM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?zM(s,e.targets,t):s})}const qM=/^[og]\s*(.+)?/,jM=/^mtllib /,KM=/^usemtl /,JM=/^usemap /,Ru=/\s+/,Cu=new P,rc=new P,Pu=new P,Iu=new P,gn=new P,Fo=new _e;function $M(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,r=this.object.geometry.normals;Cu.fromArray(i,e),rc.fromArray(i,t),Pu.fromArray(i,n),gn.subVectors(Pu,rc),Iu.subVectors(Cu,rc),gn.cross(Iu),gn.normalize(),r.push(gn.x,gn.y,gn.z),r.push(gn.x,gn.y,gn.z),r.push(gn.x,gn.y,gn.z)},addColor:function(e,t,n){const i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,o,a,l,c){const h=this.vertices.length;let u=this.parseVertexIndex(e,h),d=this.parseVertexIndex(t,h),f=this.parseVertexIndex(n,h);if(this.addVertex(u,d,f),this.addColor(u,d,f),a!==void 0&&a!==""){const g=this.normals.length;u=this.parseNormalIndex(a,g),d=this.parseNormalIndex(l,g),f=this.parseNormalIndex(c,g),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(i!==void 0&&i!==""){const g=this.uvs.length;u=this.parseUVIndex(i,g),d=this.parseUVIndex(r,g),f=this.parseUVIndex(o,g),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return s.startObject("",!1),s}class ZM extends ns{constructor(e){super(e),this.materials=null}load(e,t,n,i){const r=this,o=new Rl(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new $M;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const u=c.split(Ru);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(Fo.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),yt),t.colors.push(Fo.r,Fo.g,Fo.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const d=c.slice(1).trim().split(Ru),f=[];for(let _=0,m=d.length;_<m;_++){const p=d[_];if(p.length>0){const y=p.split("/");f.push(y)}}const g=f[0];for(let _=1,m=f.length-1;_<m;_++){const p=f[_],y=f[_+1];t.addFace(g[0],p[0],y[0],g[1],p[1],y[1],g[2],p[2],y[2])}}else if(h==="l"){const u=c.substring(1).trim().split(" ");let d=[];const f=[];if(c.indexOf("/")===-1)d=u;else for(let g=0,_=u.length;g<_;g++){const m=u[g].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&f.push(m[1])}t.addLineGeometry(d,f)}else if(h==="p"){const d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((i=qM.exec(c))!==null){const u=(" "+i[0].slice(1).trim()).slice(1);t.startObject(u)}else if(KM.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(jM.test(c))t.materialLibraries.push(c.substring(7).trim());else if(JM.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=c.split(" "),i.length>1){const d=i[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new qe;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],h=c.geometry,u=c.materials,d=h.type==="Line",f=h.type==="Points";let g=!1;if(h.vertices.length===0)continue;const _=new dt;_.setAttribute("position",new Ve(h.vertices,3)),h.normals.length>0&&_.setAttribute("normal",new Ve(h.normals,3)),h.colors.length>0&&(g=!0,_.setAttribute("color",new Ve(h.colors,3))),h.hasUVIndices===!0&&_.setAttribute("uv",new Ve(h.uvs,2));const m=[];for(let y=0,M=u.length;y<M;y++){const x=u[y],b=x.name+"_"+x.smooth+"_"+g;let S=t.materials[b];if(this.materials!==null){if(S=this.materials.create(x.name),d&&S&&!(S instanceof yr)){const E=new yr;rn.prototype.copy.call(E,S),E.color.copy(S.color),S=E}else if(f&&S&&!(S instanceof Es)){const E=new Es({size:10,sizeAttenuation:!1});rn.prototype.copy.call(E,S),E.color.copy(S.color),E.map=S.map,S=E}}S===void 0&&(d?S=new yr:f?S=new Es({size:1,sizeAttenuation:!1}):S=new pm,S.name=x.name,S.flatShading=!x.smooth,S.vertexColors=g,t.materials[b]=S),m.push(S)}let p;if(m.length>1){for(let y=0,M=u.length;y<M;y++){const x=u[y];_.addGroup(x.groupStart,x.groupCount,y)}d?p=new Kc(_,m):f?p=new Go(_,m):p=new D(_,m)}else d?p=new Kc(_,m[0]):f?p=new Go(_,m[0]):p=new D(_,m[0]);p.name=c.name,r.add(p)}else if(t.vertices.length>0){const a=new Es({size:1,sizeAttenuation:!1}),l=new dt;l.setAttribute("position",new Ve(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new Ve(t.colors,3)),a.vertexColors=!0);const c=new Go(l,a);r.add(c)}return r}}function Lu(s,e=.035,t=1){const n=`foliage-wind-${e.toFixed(3)}-${t.toFixed(1)}`;s.customProgramCacheKey=()=>n,s.onBeforeCompile=i=>{i.uniforms.uTime=Ys.uTime,i.uniforms.uWindAmp=Ys.uWindAmp,i.vertexShader=`uniform float uTime;
uniform float uWindAmp;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
         float h = clamp(position.y / ${t.toFixed(3)}, 0.0, 1.0);
         #ifdef USE_INSTANCING
           vec4 wRef = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
           float wp = wRef.x * 0.65 + wRef.z * 0.55;
         #else
           float wp = position.x * 0.65 + position.z * 0.55;
         #endif
         transformed.x += sin(uTime * 1.45 + wp) * ${e.toFixed(4)} * h * uWindAmp;
         transformed.z += cos(uTime * 1.15 + wp * 1.2) * ${(e*.65).toFixed(4)} * h * uWindAmp;`)}}function Du(s){s.updateMatrixWorld(!0);const e=[];return s.traverse(t=>{t.isMesh&&e.push({mesh:t,geometry:t.geometry,material:t.material,localMatrix:t.matrixWorld.clone(),name:t.name||""})}),e}async function QM(s,e=[]){const t=is(7717),n=new pt,i=(a,l,c=1.6)=>e.some(h=>Math.hypot(a-h.x,l-h.z)<c),r=async()=>{const l=(await new dM().loadAsync("./assets/models/blue_flower.glb")).scene;l.updateMatrixWorld(!0);const c=new Un().setFromObject(l),h=c.getSize(new P),u=c.getCenter(new P),d=.64/Math.max(.001,h.y),f=new Ge().makeScale(d,d,d).multiply(new Ge().makeTranslation(-u.x,-c.min.y,-u.z)),g=Du(l);if(!g.length)return;const _=[];for(let y=0;y<44;y++){const M=t()*Math.PI*2,x=5.38+t()*1.15,b=-10.6+Math.cos(M)*x*(1+Math.sin(M*2+.6)*.11),S=-2.2+Math.sin(M)*x*1.32*(1+Math.cos(M*3-.4)*.07);Math.abs(b-zt(S))<1.35||i(b,S,1.45)||_.push({x:b,y:xt(b,S)-.02,z:S,s:.78+t()*.55,ry:t()*Math.PI*2})}for(let y=0;y<56;y++){const M=22.8-t()*58,x=t()>.5?1:-1,b=1.52+t()*2.15,S=zt(M)+x*b;Ci(S,M)<5.35||Math.hypot(S+4.2,M+14.2)<3.5||i(S,M,1.35)||_.push({x:S,y:xt(S,M)-.02,z:M,s:.72+t()*.52,ry:t()*Math.PI*2})}const m=new Ge,p=new Ge;g.forEach(y=>{const M=Array.isArray(y.material)?y.material:[y.material];M.forEach(b=>{b.alphaTest=.36,b.transparent=!1,b.side=ct,b.roughness=.68,(b.name||"").toLowerCase().includes("flower")&&(b.emissive=new _e("#4a7cc7"),b.emissiveIntensity=.35),Lu(b,.045,Math.max(.2,h.y))});const x=new Ht(y.geometry,M.length===1?M[0]:M,_.length);x.castShadow=!1,x.receiveShadow=!1,p.multiplyMatrices(f,y.localMatrix),_.forEach((b,S)=>{n.position.set(b.x,b.y,b.z),n.rotation.set((t()-.5)*.08,b.ry,(t()-.5)*.08),n.scale.setScalar(b.s),n.updateMatrix(),m.multiplyMatrices(n.matrix,p),x.setMatrixAt(S,m)}),s.add(x)})},o=async()=>{const a=new Cl,[l,c,h,u]=await Promise.all([a.loadAsync("./assets/models/sakura_leaves.webp"),a.loadAsync("./assets/models/sakura_trunk.webp"),a.loadAsync("./assets/models/sakura_petals.webp"),new ZM().loadAsync("./assets/models/sakura_tree.obj")]);[l,c,h].forEach(A=>{A.colorSpace=yt});const d=new pe({map:l,alphaTest:.36,transparent:!1,side:ct,roughness:.82,emissive:new _e("#4a2033"),emissiveIntensity:.16});Lu(d,.42,44);const f=new pe({map:c,color:"#6b4d41",roughness:.92}),g=new pe({map:h,alphaTest:.32,transparent:!1,side:ct,roughness:.72,emissive:new _e("#663047"),emissiveIntensity:.15});u.traverse(A=>{A.isMesh&&(A.name.includes("Leaves")?A.material=d:A.name.includes("Trunk")?A.material=f:A.material=g)}),u.updateMatrixWorld(!0);const _=new Un().setFromObject(u),m=_.getSize(new P),p=_.getCenter(new P),y=5.4/Math.max(.001,m.y),M=new Ge().makeScale(y,y,y).multiply(new Ge().makeTranslation(-p.x,-_.min.y,-p.z)),x=[[-6.8,13.8,1.02,.4],[-15.6,-1.6,1.12,2.7],[7.8,-8.5,1,4.1]],b=Du(u),S=new Ge,E=new Ge;b.forEach(A=>{const w=new Ht(A.geometry,A.material,x.length);w.castShadow=A.name.includes("Trunk"),w.receiveShadow=!1,E.multiplyMatrices(M,A.localMatrix),x.forEach(([v,C,L,F],B)=>{const U=xt(v,C)-.08;n.position.set(v,U,C),n.rotation.set(0,F,0),n.scale.setScalar(L),n.updateMatrix(),S.multiplyMatrices(n.matrix,E),w.setMatrixAt(B,S)}),s.add(w)})};await Promise.allSettled([r(),o()])}const ne=s=>document.getElementById(s),Qs=innerWidth<720||matchMedia("(pointer: coarse)").matches,un=matchMedia("(prefers-reduced-motion: reduce)").matches;let ut;try{ut=new Pv({antialias:!0,powerPreference:"high-performance"})}catch{throw ne("entry").innerHTML='<div class="entry-card"><h1>A little place</h1><p>This garden needs WebGL. Please open it in a recent Chrome, Safari, Firefox, or Edge browser.</p></div>',new Error("WebGL unavailable")}ut.setSize(innerWidth,innerHeight);ut.setPixelRatio(Math.min(devicePixelRatio,Qs?1.35:1.75));ut.shadowMap.enabled=!0;ut.shadowMap.type=ku;ut.shadowMap.autoUpdate=!1;ut.toneMapping=cl;ut.toneMappingExposure=1.05;ut.info.autoReset=!1;ne("world").append(ut.domElement);const bt=new ud;bt.background=new _e("#475773");bt.fog=new Ml("#696682",.0145);const nn=new Yt(Qs?58:48,innerWidth/innerHeight,.1,220),ti=Hv(ut),{textures:Ol}=ti,Od=new Vt({map:Ol.skyTex,side:$t,fog:!1}),Bd=new D(new Et(125,36,20),Od);Bd.rotation.y=Math.PI*.62;bt.add(Bd);const kd=new el(ut),zd=new ud;zd.add(new D(new Et(20,24,16),Od.clone()));const ey=kd.fromScene(zd,.04);bt.environment=ey.texture;bt.environmentIntensity=.62;kd.dispose();const Bl=new D(new Et(2.3,28,20),new Vt({color:"#fff3db",fog:!1}));Bl.position.set(18,22,-62);bt.add(Bl);const kl=new On(new Sn({map:Ol.glowTex,transparent:!0,opacity:.42,depthWrite:!1,blending:on,fog:!1}));kl.position.copy(Bl.position);kl.scale.set(13,13,13);bt.add(kl);const ty=new Pm("#d6b4c8","#3c3633",.95);bt.add(ty);const Dn=new Il("#f7c68d",2.15);Dn.position.set(-28,21,-18);Dn.castShadow=!0;Dn.shadow.mapSize.set(1536,1536);Object.assign(Dn.shadow.camera,{left:-34,right:34,top:42,bottom:-44,near:2,far:105});Dn.shadow.bias=-4e-4;Dn.shadow.normalBias=.025;bt.add(Dn);const Hd=new Il("#6d87b0",.65);Hd.position.set(24,16,26);bt.add(Hd);const qs=zv.filter(s=>!s.isPrivate&&s.isUnlocked!==!1).sort((s,e)=>s.sortOrder-e.sortOrder),$n=[...qi.map((s,e)=>({...s,nodeIndex:e})),...qs.map((s,e)=>({...s,nodeIndex:qi.length+e}))],Vd=$n.map(s=>s.location);jv(bt,ti,Vd);const{colliders:Gd}=Kv(bt,ti),ny=$v(bt,ti,-4.2,-14.2);Gd.push(ny.collider);const Tr=Zv(bt,ti),Yo=nM(bt,ti,Dn.position),Ai={},Wd=[];qs.forEach((s,e)=>{const t=cM(bt,ti,s);Object.assign(Ai,t.animated),Wd.push({nodeIdx:qi.length+e,group:t.group})});QM(bt,Vd).catch(s=>{console.warn("Optional 3D models skipped:",s)});const{player:Ct,body:Nu,wings:iy,aura:sy}=uM(bt,ti),{ghost:fr,ghostEyes:ry,baseY:oy}=lM(bt,ti,2.2,-12),{bloomPetals:ay,coreOrb:cy}=hM(bt,ti,0,-30),Gr=[];$n.forEach(s=>{const e=xt(s.location.x,s.location.z)+.032,t=s.type==="memory",n=new D(new jr(t?.56:.72,t?.62:.78,36),new Vt({color:t?St.blossomMid:St.lanternGlow,transparent:!0,opacity:.48,side:ct}));n.position.set(s.location.x,e,s.location.z),n.rotation.x=-Math.PI/2,bt.add(n),Gr.push(n)});const Rn=is(303),Er=[];for(let s=0;s<32;s++){const e=s<12,t=e?-10.4+(Rn()-.5)*8.5:(Rn()-.5)*20,n=e?-2.2+(Rn()-.5)*10.5:21-Rn()*56,i=Math.max(.2,xt(t,n))+.45+Rn()*1.7,r=new On(new Sn({map:Ol.glowTex,transparent:!0,opacity:.62,depthWrite:!1,blending:on}));r.position.set(t,i,n);const o=.24+Rn()*.34;r.scale.set(o,o,o),bt.add(r),Er.push({o:r,x:t,y:i,z:n,phase:Rn()*6.28,baseScale:o})}const Ar=Qs?75:145,ly=new ft(.085,.065),hy=new pe({color:St.blossomPale,roughness:.65,side:ct}),pi=new Ht(ly,hy,Ar),uy=Array.from({length:Ar},()=>({x:(Rn()-.5)*20,y:Rn()*7.5,z:22-Rn()*58,p:Rn()*6.28}));bt.add(pi);un&&(pi.count=0);const na=22,Ds=new Ht(new Et(.036,6,4),new Vt({color:St.lanternGlow}),na);Ds.count=0;bt.add(Ds);let Ts=0;const qo=new P;function dy(s,e,t){un||(qo.set(s,e+.6,t),Ts=1.5,Ds.count=na)}const fy=new dn(innerWidth,innerHeight,{type:qn}),Qi=new Fv(ut,fy),py=new Ov(bt,nn),Rr=new Xs(new Z(innerWidth,innerHeight),.24,.42,.88),my=new kv;Qi.addPass(py);Qi.addPass(Rr);Qi.addPass(my);const ia=["low","medium","high"];let Cr=Qs?1:2,jo=!0;function Xd(s){s==="low"?(ut.setPixelRatio(1),ut.shadowMap.enabled=!1,Dn.castShadow=!1,jo=!1,Yo.setReflectiveEnabled(!1),pi.count=un?0:Math.floor(Ar*.35),Tr.secondaryLights.forEach(e=>e.visible=!1),Er.forEach((e,t)=>e.o.visible=t%3===0)):s==="medium"?(ut.setPixelRatio(Math.min(devicePixelRatio,1.25)),ut.shadowMap.enabled=!0,Dn.castShadow=!0,jo=!0,Rr.strength=.2,Yo.setReflectiveEnabled(!0),pi.count=un?0:Math.floor(Ar*.68),Tr.secondaryLights.forEach((e,t)=>e.visible=t%2===0),Er.forEach((e,t)=>e.o.visible=t%2===0)):(ut.setPixelRatio(Math.min(devicePixelRatio,Qs?1.4:1.75)),ut.shadowMap.enabled=!0,Dn.castShadow=!0,jo=!0,Rr.strength=.24,Yo.setReflectiveEnabled(!0),pi.count=un?0:Ar,Tr.secondaryLights.forEach(e=>e.visible=!0),Er.forEach(e=>e.o.visible=!0)),Qi.setSize(innerWidth,innerHeight),Qi.setPixelRatio(ut.getPixelRatio()),Rr.setSize(innerWidth,innerHeight),ut.shadowMap.needsUpdate=!0,ne("qualityButton").textContent=`quality: ${s}`}Xd(ia[Cr]);ne("qualityButton").onclick=()=>{Cr=(Cr+1)%ia.length,Xd(ia[Cr])};let es=!1,Vn=!0,In=-1,Gn=null,An=0,rl=0,xr=0;const Yd="hir_garden_progress_v1",xi=new Set,Nn=new Set,zl=new Map;function gy(){try{const s=localStorage.getItem(Yd);if(!s)return;const e=JSON.parse(s);e.discoveries?.forEach(t=>xi.add(t)),e.memories?.forEach(t=>Nn.add(t))}catch{}}function qd(){try{localStorage.setItem(Yd,JSON.stringify({discoveries:[...xi],memories:[...Nn]}))}catch{}}gy();$n.forEach((s,e)=>{(s.type==="discovery"?xi.has(s.id):Nn.has(s.id))&&Gr[e]&&Gr[e].material.color.set("#c8e9b9")});let Pt,pr;function ua(){if(Vn&&(Pt??=new(window.AudioContext||window.webkitAudioContext),Pt.state==="suspended"&&Pt.resume(),!pr)){const s=Pt.sampleRate*2,e=Pt.createBuffer(1,s,Pt.sampleRate),t=e.getChannelData(0);let n=0,i=0,r=0;for(let l=0;l<s;l++){const c=Math.random()*2-1;n=.997*n+c*.029,i=.985*i+c*.032,r=.95*r+c*.048,t[l]=(n+i+r)*.12}const o=Pt.createBufferSource();o.buffer=e,o.loop=!0;const a=Pt.createBiquadFilter();a.type="lowpass",a.frequency.value=380,pr=Pt.createGain(),pr.gain.value=.055,o.connect(a),a.connect(pr),pr.connect(Pt.destination),o.start()}}function jd(s){Vn&&(ua(),s.forEach((e,t)=>{const n=Pt.createOscillator(),i=Pt.createGain(),r=Pt.currentTime+t*.14;n.type="sine",n.frequency.value=e,i.gain.setValueAtTime(1e-4,r),i.gain.exponentialRampToValueAtTime(.038,r+.03),i.gain.exponentialRampToValueAtTime(1e-4,r+1.4),n.connect(i),i.connect(Pt.destination),n.start(r),n.stop(r+1.5)}))}function _y(s){Vn&&(ua(),s.forEach((e,t)=>{const n=Pt.createOscillator(),i=Pt.createOscillator(),r=Pt.createBiquadFilter(),o=Pt.createGain(),a=Pt.currentTime+t*.08;n.type="triangle",i.type="sine",n.frequency.value=e,i.frequency.value=e*2,r.type="lowpass",r.frequency.value=1100,o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(.032,a+.14),o.gain.exponentialRampToValueAtTime(1e-4,a+2.2),n.connect(r),i.connect(r),r.connect(o),o.connect(Pt.destination),n.start(a),i.start(a),n.stop(a+2.3),i.stop(a+2.3)}))}function Hl(){ne("count").textContent=`${xi.size} / ${qi.length} discoveries · ${Nn.size} / ${qs.length} memories`,ne("journalCount").textContent=`${Nn.size}/${qs.length}`,xy()}function xy(){const s=ne("mapDiscoveries");s.innerHTML="",qi.forEach((n,i)=>{const r=document.createElement("button");r.type="button",r.className="map-item"+(xi.has(n.id)?" visited":""),r.innerHTML=`<span>${n.chapterNumber} · ${n.name}</span><span class="status-dot">${xi.has(n.id)?"✿":"○"}</span>`,r.onclick=()=>oc(i),s.appendChild(r)});const e=ne("mapMemories");e.innerHTML="",qs.forEach((n,i)=>{const r=qi.length+i,o=document.createElement("button");o.type="button",o.className="map-item"+(Nn.has(n.id)?" visited":""),o.innerHTML=`<span>${String(i+1).padStart(2,"0")} · ${n.title}</span><span class="status-dot">${Nn.has(n.id)?"✿":"○"}</span>`,o.onclick=()=>oc(r),e.appendChild(o)});const t=ne("journalList");t.innerHTML="",qs.forEach((n,i)=>{const r=Nn.has(n.id),o=document.createElement("button");o.type="button",o.className="journal-item"+(r?" visited":""),o.innerHTML=`<span><strong>${n.code}</strong> · ${n.title}<br><small style="margin:2px 0 0;opacity:.7">${n.date}</small></span><span class="status-dot">${r?"View →":"Walk to"}</span>`,o.onclick=()=>{ne("journal").hidden=!0,ne("journalButton").setAttribute("aria-expanded","false"),oc(qi.length+i,r)},t.appendChild(o)})}function oc(s,e=!1){const t=$n[s];if(!t)return;const n=t.location.z+1.45;Ct.position.set(t.location.x,xt(t.location.x,n),n),An=0,$r(),ne("map").hidden=!0,ne("journal").hidden=!0,ne("mapButton").setAttribute("aria-expanded","false"),ne("journalButton").setAttribute("aria-expanded","false"),Xt.clear(),e&&(In=s,fa())}let ji=null;function da(s){const e=ne("focusWhiteboard"),t=ne("focusBrokenKey"),n=ne("focusOverview");e?.classList.toggle("active",s==="whiteboard"),t?.classList.toggle("active",s==="key"),n?.classList.toggle("active",s==="overview"),s==="whiteboard"?(ne("message").classList.add("inspecting-detail"),ji={pos:[1.85,1.38,-24.08],look:[1.88,1.15,-25.18]}):s==="key"?(ne("message").classList.add("inspecting-detail"),ji={pos:[2.72,.92,-24.05],look:[2.98,.56,-24.68]}):(ne("message").classList.remove("inspecting-detail"),ji=null)}ne("focusWhiteboard")?.addEventListener("click",()=>da("whiteboard"));ne("focusBrokenKey")?.addEventListener("click",()=>da("key"));ne("focusOverview")?.addEventListener("click",()=>da("overview"));function $r(){ne("message").hidden=!0,ne("message").classList.remove("inspecting-detail"),ji=null,Gn=null,Xt.clear()}function Kd(s,e){if(Gn=s,da("overview"),ne("sceneFocusBar")&&(ne("sceneFocusBar").hidden=s.id!=="memory-09"),s.type==="discovery")xi.add(s.id),ne("chapter").textContent=`${s.chapterNumber} / ${s.name}`,ne("memoryDate").textContent="",ne("themeLine").hidden=!0,ne("title").innerHTML=s.title,ne("copy").textContent=s.description,ne("photoContainer").hidden=!0,ne("photoPlaceholder").hidden=!0,ne("closeMessage").textContent=s.id==="discovery-04"?"one tiny surprise ✿":"keep exploring →",s.id==="discovery-01"&&Tr.gate.light&&(Tr.gate.light.intensity=12),s.id==="discovery-03"&&(xr=2),s.id==="discovery-04"&&(rl=1);else{Nn.add(s.id),ne("chapter").textContent=`${s.code} · MEMORY TRAIL`,ne("memoryDate").textContent=s.date||"",s.theme?(ne("themeLine").textContent=s.theme,ne("themeLine").hidden=!1):ne("themeLine").hidden=!0,ne("title").textContent=s.title,ne("copy").textContent=s.description,ne("closeMessage").textContent="keep walking →";const t=zl.get(s.id)||s.photo;t?(ne("memoryPhoto").src=t,ne("photoContainer").hidden=!1,ne("photoPlaceholder").hidden=!0):s.photoCaption?(ne("photoContainer").hidden=!0,ne("photoCaptionText").textContent=s.photoCaption,ne("photoPlaceholder").hidden=!1):(ne("photoContainer").hidden=!0,ne("photoPlaceholder").hidden=!0)}Gr[e].material.color.set("#c8e9b9"),dy(s.location.x,xt(s.location.x,s.location.z),s.location.z),qd(),Hl(),ne("message").hidden=!1,ne("closeMessage").focus(),s.id==="memory-07"?_y([261.63,329.63,392,523.25]):jd([392+e%6*45,523.25,659.25]),Xt.clear()}function fa(){In<0||!ne("message").hidden||ne("note").open||Kd($n[In],In)}ne("photoInput").onchange=s=>{const e=s.target.files?.[0];if(!e||!Gn)return;const t=new FileReader;t.onload=()=>{zl.set(Gn.id,t.result),ne("memoryPhoto").src=t.result,ne("photoContainer").hidden=!1,ne("photoPlaceholder").hidden=!0},t.readAsDataURL(e)};ne("openLightbox").onclick=()=>{if(!Gn)return;const s=zl.get(Gn.id)||Gn.photo;s&&(ne("lightboxImg").src=s,ne("lightboxCaption").textContent=`${Gn.title} (${Gn.date||""})`,ne("lightbox").showModal())};ne("closeLightbox").onclick=()=>ne("lightbox").close();ne("begin").onclick=()=>{es=!0,document.body.classList.add("playing"),ne("entry").classList.add("leaving"),setTimeout(()=>ne("entry").hidden=!0,950),Vn&&ua(),jd([392,523.25,659.25])};ne("sound").onclick=()=>{Vn=!Vn,ne("sound").textContent=Vn?"♪ sound on":"♪ sound off",ne("sound").setAttribute("aria-pressed",String(Vn)),Vn&&es?ua():Pt?.suspend()};ne("mapButton").onclick=()=>{const s=ne("map").hidden;ne("map").hidden=!s,ne("journal").hidden=!0,ne("mapButton").setAttribute("aria-expanded",String(s)),ne("journalButton").setAttribute("aria-expanded","false")};ne("closeMap").onclick=()=>{ne("map").hidden=!0,ne("mapButton").setAttribute("aria-expanded","false")};ne("journalButton").onclick=()=>{const s=ne("journal").hidden;ne("journal").hidden=!s,ne("map").hidden=!0,ne("journalButton").setAttribute("aria-expanded",String(s)),ne("mapButton").setAttribute("aria-expanded","false")};ne("closeJournal").onclick=()=>{ne("journal").hidden=!0,ne("journalButton").setAttribute("aria-expanded","false")};ne("home").onclick=ne("reset").onclick=()=>{Ct.position.set(0,xt(0,21.5),21.5),An=0,$r(),ne("map").hidden=!0,ne("journal").hidden=!0,ne("place").textContent="THE LANTERN GATE",Xt.clear()};ne("closeMessage").onclick=()=>{Gn?.id==="discovery-04"?(ne("note").showModal(),ne("closeNote").focus()):$r()};ne("closeNote").onclick=()=>{ne("note").close(),$r()};ne("interact").onclick=fa;const Xt=new Set,yn={x:0,y:0},kn={x:0,z:0};let xn=null,Uu=performance.now();addEventListener("keydown",s=>{s.target.tagName==="BUTTON"&&[" ","Enter"].includes(s.key)||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(s.key)&&s.preventDefault(),Xt.add(s.code),s.code==="KeyE"&&!s.repeat&&fa(),s.code==="Escape"&&($r(),ne("map").hidden=!0,ne("journal").hidden=!0),s.code==="KeyM"&&!s.repeat&&ne("mapButton").click(),s.code==="KeyJ"&&!s.repeat&&ne("journalButton").click())});addEventListener("keyup",s=>Xt.delete(s.code));addEventListener("blur",()=>{Xt.clear(),yn.x=yn.y=0});const Fu=new qm,Ou=new Z;ut.domElement.addEventListener("pointerdown",s=>{if(!ne("map").hidden||!ne("journal").hidden){ne("map").hidden=!0,ne("journal").hidden=!0,ne("mapButton").setAttribute("aria-expanded","false"),ne("journalButton").setAttribute("aria-expanded","false");return}xn={id:s.pointerId,x:s.clientX,startX:s.clientX,startY:s.clientY},ut.domElement.setPointerCapture(s.pointerId)});ut.domElement.addEventListener("pointermove",s=>{xn&&xn.id===s.pointerId&&(An-=(s.clientX-xn.x)*.005,xn.x=s.clientX)});ut.domElement.addEventListener("pointerup",s=>{if(!xn||xn.id!==s.pointerId){xn=null;return}const e=Math.hypot(s.clientX-xn.startX,s.clientY-xn.startY);if(xn=null,e<6&&es&&ne("message").hidden&&!ne("note").open&&ne("map").hidden&&ne("journal").hidden){Ou.set(s.clientX/innerWidth*2-1,-(s.clientY/innerHeight)*2+1),Fu.setFromCamera(Ou,nn);for(const t of Wd)if(Fu.intersectObject(t.group,!0).length>0){const n=$n[t.nodeIdx];if(Math.hypot(n.location.x-Ct.position.x,n.location.z-Ct.position.z)<=(n.interactionRadius||3.2)+1.4){Kd(n,t.nodeIdx);return}}In>=0&&fa()}});ut.domElement.addEventListener("pointercancel",()=>xn=null);ne("resetProgress")?.addEventListener("click",()=>{xi.clear(),Nn.clear(),qd(),Gr.forEach((s,e)=>{const t=$n[e]?.type==="memory";s.material.color.set(t?St.blossomMid:St.lanternGlow)}),Hl()});const _i=ne("joystick");function Jd(s){const e=_i.getBoundingClientRect(),t=(s.clientX-e.left-e.width/2)/34,n=(s.clientY-e.top-e.height/2)/34,i=Math.max(1,Math.hypot(t,n));yn.x=t/i,yn.y=n/i,_i.firstElementChild.style.transform=`translate(${yn.x*30}px,${yn.y*30}px)`}_i.onpointerdown=s=>{_i.setPointerCapture(s.pointerId),Jd(s)};_i.onpointermove=s=>{_i.hasPointerCapture(s.pointerId)&&Jd(s)};_i.onpointerup=_i.onpointercancel=()=>{yn.x=yn.y=0,_i.firstElementChild.style.transform="none"};document.addEventListener("visibilitychange",()=>{Xt.clear(),yn.x=yn.y=0,document.hidden?Pt?.suspend():es&&Vn&&Pt?.resume()});Hl();const Oo=new P,Rs=new P;nn.position.set(0,2.05,25.8);Rs.set(0,1.55,11);nn.lookAt(Rs);let Pr=null;const li=new pt;function $d(s){requestAnimationFrame($d);const e=Math.max(.001,Math.min((s-Uu)/1e3,.05));if(Uu=s,document.hidden)return;const t=s/1e3;if(ut.info.reset(),Ys.uTime.value=t,Ys.uWindAmp.value=un?0:1,es&&ne("message").hidden&&!ne("note").open&&ne("map").hidden&&ne("journal").hidden){let o=Number(Xt.has("KeyD")||Xt.has("ArrowRight"))-Number(Xt.has("KeyA")||Xt.has("ArrowLeft"))+yn.x,a=Number(Xt.has("KeyS")||Xt.has("ArrowDown"))-Number(Xt.has("KeyW")||Xt.has("ArrowUp"))+yn.y;const l=Math.max(1,Math.hypot(o,a));o/=l,a/=l;const c=(o*Math.cos(An)+a*Math.sin(An))*3.8,h=(-o*Math.sin(An)+a*Math.cos(An))*3.8,u=1-Math.exp(-e*10);kn.x=kt.lerp(kn.x,c,u),kn.z=kt.lerp(kn.z,h,u);const d=kt.clamp(Ct.position.x+kn.x*e,-16,16),f=kt.clamp(Ct.position.z+kn.z*e,-37.5,24);Gd.some(_=>Math.hypot(d-_.x,f-_.z)<_.r+.28)||Ci(d,f)<5.35||(Ct.position.x=d,Ct.position.z=f,Ct.position.y=xt(d,f)),Math.hypot(kn.x,kn.z)>.18&&(Ct.rotation.y=Math.atan2(kn.x,kn.z))}In=-1;let n=3.6;if($n.forEach((o,a)=>{const l=o.interactionRadius||3.2,c=Math.hypot(o.location.x-Ct.position.x,o.location.z-Ct.position.z);c<Math.min(n,l)&&(n=c,In=a)}),ne("interact").hidden=!es||In<0||!ne("message").hidden||ne("note").open,In>=0){const o=$n[In];ne("interact").textContent=`${o.interactLabel}${Qs?"":" · E"}`,ne("place").textContent=o.type==="memory"?`${o.code} · ${o.title.toUpperCase()}`:o.name}if(Pr)nn.position.set(...Pr.pos),nn.lookAt(...Pr.look);else if(ji){Oo.set(...ji.pos);const o=new P(...ji.look);nn.position.lerp(Oo,un?1:1-Math.exp(-e*6.5)),Rs.lerp(o,un?1:1-Math.exp(-e*6.5)),nn.lookAt(Rs)}else Oo.set(Ct.position.x+Math.sin(An)*4.4,Ct.position.y+1.92,Ct.position.z+Math.cos(An)*4.4),nn.position.lerp(Oo,un?1:1-Math.exp(-e*5.2)),Rs.set(Ct.position.x-Math.sin(An)*3.8,Ct.position.y+1.38,Ct.position.z-Math.cos(An)*3.8),nn.lookAt(Rs);Nu.position.y=.55+(un?0:Math.sin(t*3)*.055),sy.position.y=Nu.position.y,iy.forEach((o,a)=>o.rotation.z=un?0:Math.sin(t*16)*(a?1:-1)*.3);const i=Math.hypot(Ct.position.x-fr.position.x,Ct.position.z-fr.position.z);xr>0&&(xr=Math.max(0,xr-e)),fr.position.y=oy+.78+(un?0:Math.sin(t*2)*.11),fr.rotation.y=Math.sin(t*.6)*.28,fr.rotation.z=i<3.6||xr>0?-.16:0;const r=Math.sin(t*1.7)>.96?.14:1;if(ry.forEach(o=>o.scale.y=r),Yo.update(e,t),Ai.cupcake){const o=1+Math.sin(t*9.5)*.12;Ai.cupcake.flame.scale.set(.75,1.45*o,.75),Ai.cupcake.halo.scale.setScalar(.3+Math.sin(t*8)*.04)}if(Ai.firstTextPhone){const o=Ai.firstTextPhone,a=Math.hypot(Ct.position.x-o.location.x,Ct.position.z-o.location.z),l=a<4.2?1:.22,c=.85+Math.sin(t*4.5)*.2;o.screenMat.emissiveIntensity=kt.lerp(o.screenMat.emissiveIntensity,l*.78*c,e*5),o.halo.material.opacity=kt.lerp(o.halo.material.opacity,l*.38*c,e*5),o.light.intensity=kt.lerp(o.light.intensity,l*1.55*c,e*5);const h=1+Math.sin(t*3.8)*(a<4.2?.18:.05);o.ring.scale.set(h,h,1)}if(Ai.movieNight&&Ai.movieNight.motes.forEach((a,l)=>{const c=.5+.5*Math.sin(t*3.2-a.phase);a.mesh.position.y=a.baseY+Math.sin(t*2.4+l)*.025,a.mesh.scale.setScalar(.68+c*.55)}),Er.forEach(o=>{if(!o.o.visible)return;o.o.position.x=o.x+Math.sin(t*.5+o.phase)*.55,o.o.position.y=o.y+Math.sin(t*1.05+o.phase)*.2;const a=o.baseScale*(.85+Math.sin(t*2.2+o.phase)*.2);o.o.scale.setScalar(a)}),!un&&pi.count>0){for(let o=0;o<pi.count;o++){const a=uy[o];a.y-=e*.32,a.y<0&&(a.y=7.5),li.position.set(a.x+Math.sin(t*.45+a.p)*.85,a.y,a.z),li.rotation.set(t*.5+a.p,t*.3,t*.65),li.scale.setScalar(1),li.updateMatrix(),pi.setMatrixAt(o,li.matrix)}pi.instanceMatrix.needsUpdate=!0}if(Ts>0){Ts=Math.max(0,Ts-e);const o=1-Ts/1.5;for(let a=0;a<na;a++){const l=a/na*Math.PI*2,c=o*1.5;li.position.set(qo.x+Math.cos(l)*c,qo.y+Math.sin(o*Math.PI)*1+a%3*.14,qo.z+Math.sin(l)*c),li.scale.setScalar(Math.max(.01,(1-o)*1.1)),li.updateMatrix(),Ds.setMatrixAt(a,li.matrix)}Ds.instanceMatrix.needsUpdate=!0,Ts===0&&(Ds.count=0)}ay.forEach(o=>{o.rotation.x=kt.lerp(o.rotation.x,rl?-1.2:-.32,e*2),o.position.z=kt.lerp(o.position.z,rl?.5:.24,e*2)}),cy.position.y=.32+Math.sin(t*1.8)*.04,jo?Qi.render():ut.render(bt,nn)}requestAnimationFrame($d);addEventListener("resize",()=>{nn.aspect=innerWidth/innerHeight,nn.updateProjectionMatrix(),ut.setSize(innerWidth,innerHeight),Qi.setSize(innerWidth,innerHeight),Rr.setSize(innerWidth,innerHeight)});window.setGardenView=(s,e)=>{if(!s){Pr=null;return}Pr={pos:s,look:e}};window.gardenState=()=>{let s=0,e=0,t=0,n=0,i=0;return bt.traverse(r=>{if(r.isInstancedMesh){e++;const o=r.geometry.index;i+=(o?o.count:r.geometry.attributes.position.count)/3*r.count}else if(r.isMesh){s++,r.geometry.groups&&r.geometry.groups.length>1&&n++;const o=r.geometry.index;i+=(o?o.count:r.geometry.attributes.position.count)/3}else r.isSprite&&t++}),{started:es,quality:ia[Cr],position:Ct.position.toArray(),cameraPos:nn.position.toArray(),nearest:In,discoveriesFound:xi.size,memoriesFound:Nn.size,totalStations:$n.length,drawCalls:ut.info.render.calls,triangles:ut.info.render.triangles,sceneObjects:{meshes:s,instanced:e,sprites:t,groupsMulti:n,totalTris:Math.round(i)}}};
