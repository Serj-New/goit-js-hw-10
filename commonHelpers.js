import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as h}from"./assets/vendor-77e16229.js";const a=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]");o.addEventListener("click",b);let i=null;o.setAttribute("disabled","true");const n={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]>Date.now()?(i=t[0],o.removeAttribute("disabled")):(h.error({title:"Error",message:"Please choose a date in the future",titleColor:"white",titleSize:"16px",messageColor:"white",messageSize:"16px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}),o.setAttribute("disabled","true"))}};m(a,y);function b(){a.setAttribute("disabled","true");const t=setInterval(()=>{const s=i.getTime()-Date.now();if(s>=0){const e=f(s);n.days.textContent=r(e.days),n.hours.textContent=r(e.hours),n.minutes.textContent=r(e.minutes),n.seconds.textContent=r(e.seconds),o.setAttribute("disabled","true")}else clearInterval(t),a.removeAttribute("disabled")},1e3)}function r(t){return String(t).padStart(2,"0")}function f(t){const u=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:c,seconds:l}}
//# sourceMappingURL=commonHelpers.js.map
