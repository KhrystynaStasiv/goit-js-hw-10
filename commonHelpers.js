/* empty css                      */import{f,i as m}from"./assets/vendor-77e16229.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const o={startBtn:document.querySelector("[data-start]"),datePicker:document.querySelector("#datetime-picker"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};o.startBtn.disabled=!0;let i,d;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(r){console.log(r[0]),i=r[0],i<new Date?(m.show({title:"Error",message:"Please choose a date in the future",titleColor:"#fff",titleSize:"16px",position:"topRight",backgroundColor:"#ef4040",progressBarColor:"#B51B1B"}),o.startBtn.disabled=!0):(i=r[0],o.startBtn.disabled=!1)}};f("#datetime-picker",p);o.startBtn.addEventListener("click",()=>{d=setInterval(()=>{const r=i-Date.now();if(r>0){const n=h(r);o.days.textContent=n.days.toString().padStart(2,0),o.hours.textContent=n.hours.toString().padStart(2,0),o.minutes.textContent=n.minutes.toString().padStart(2,0),o.seconds.textContent=n.seconds.toString().padStart(2,0)}else clearInterval(d);o.datePicker.disabled=!0,o.startBtn.disabled=!0},1e3)});function h(r){const t=Math.floor(r/864e5),s=Math.floor(r%864e5/36e5),u=Math.floor(r%864e5%36e5/6e4),l=Math.floor(r%864e5%36e5%6e4/1e3);return{days:t,hours:s,minutes:u,seconds:l}}
//# sourceMappingURL=commonHelpers.js.map
