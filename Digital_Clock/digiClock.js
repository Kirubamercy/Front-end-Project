setInterval(() =>{

const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");
const ampm=document.getElementById("ampm");

const hh=document.getElementById("hh");
const mm=document.getElementById("mm");
const ss=document.getElementById("ss");

const doth=document.querySelector(".h-dot");
const dotm=document.querySelector(".m-dot");
const dots=document.querySelector(".s-dot");

let h=new Date().getHours();
let m=new Date().getMinutes();
let s=new Date().getSeconds();

let ap= h>=12 ? 'pm' : 'am';

if(h>12){
    h=h-12;
}
 
h= h<10 ? `0` +h : h;
m= m<10 ? '0' +m : m;
s= s<10 ? '0' +s : s;

hours.innerHTML=h + 'Hours';
minutes.innerHTML=m + 'Minutes';
seconds.innerHTML=s + 'Seconds';
ampm.innerHTML=ap;

hh.style.strokeDashoffset=440 - (440*h )/12;
mm.style.strokeDashoffset=440 -(440*m) /60;
ss.style.strokeDashoffset=440 -(440*s) /60;

doth.style.transform=`rotate(${h * 30}deg)`;
dotm.style.transform= `rotate(${m * 6}deg)`;
dots.style.transform=`rotate(${s * 6}deg)`;
},1000);