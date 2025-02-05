const hourHand=document.querySelector('.hours-hand');
const minuteHand=document.querySelector('.minutes-hand');
const secondHand=document.querySelector('.seconds-hand');
function setClock(){
    const now=new Date();
    const seconds=now.getSeconds();
    const minutes=now.getMinutes();
    const hours=now.getHours();
    console.log(hours,minutes,seconds);
    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = (minutes / 60) *360 + (seconds/60)*6;
    const hourDeg = (hours % 12 /12 )*360 +(minutes/60 )*30;
    console.log(hourDeg,minuteDeg,secondDeg);
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform= `rotate(${minuteDeg}deg)`;
    hourHand.style.transform= `rotate(${hourDeg}deg)`;

}
setInterval(setClock,1000);
