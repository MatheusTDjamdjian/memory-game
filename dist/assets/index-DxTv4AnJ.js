(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();function d(o=1){return`
      <img class="arrow_down" data-currentPlayer= "${o}" src="/memory-game/img/IconArrowDown.png" alt="ícone de uma seta para baixo">
    `}function s(o){return`
      <p class="player_name">${o}</p>
    `}function i(o=0){return`
    <ol class="player_score" data-points = "${o}">
        <li class="pointer">Um</li>
        <li class="pointer">Dois</li>
        <li class="pointer">Três</li>
    </ol>
    `}function u(o="vs"){return`
      <span class="vs_player">${o}</span>
    `}function m(){return`
      <header class="score_board">
        ${d(2)}
        ${s("Player1")}
        ${i(2)}
        ${u()}
        ${i(3)}
        ${s("Player2 ")}
      </header>
    `}function l(o="cara-feliz",a="Cara Feliz"){return`
    <article class="card_game">
      <img src="/memory-game/img/${o}.png" alt="${a}">
    </article>
    `}function f(o,a){return window.cardFrontBack={},window.cardFrontBack.handleClick=c=>{const e=c.target.closest(".card_front_back");console.log(e),e.classList.toggle("-active")},`
      <article class="card_front_back" onClick="cardFrontBack.handleClick(event)">
        <div class="card -front">
            ${l()}
        </div>
        <div class="card -back">
            ${l(o,a)}
        </div>
      </article>
    `}const p=[{icon:"javascript",altIcon:"Logo do JavaScript"},{icon:"javascript",altIcon:"Logo do JavaScript"},{icon:"css",altIcon:"Logo do CSS"},{icon:"css",altIcon:"Logo do CSS"},{icon:"html",altIcon:"Logo do HTML"},{icon:"html",altIcon:"Logo do HTML"}];function g(o){const a=r=>{r.forEach(t=>t.classList.remove("-active"))},c=()=>{const r=document.querySelector(".arrow_down"),t=r.getAttribute("data-currentplayer");r.setAttribute("data-currentplayer",t==1?2:1)};return window.BoardGame={},window.BoardGame.handleClick=()=>{const t=document.querySelector(".board_game").querySelectorAll(".card_front_back.-active");t.length===2&&setTimeout(()=>{a(t),c()},1e3)},`
    <section class="board_game" onClick="BoardGame.handleClick()">
      ${p.map(r=>f(r.icon,r.altIcon)).join("")}
    </section>
    `}const $=document.querySelector("#root");$.insertAdjacentHTML("beforeend",` 
    ${m()}
    ${g()}
    `);
