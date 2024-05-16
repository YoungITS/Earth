'use strict'

const sky = document.querySelector('[data-sky]');
const quantity = sky.dataset.sky ? +sky.dataset.sky : 100;

if(sky){
   setStars();
   window.addEventListener('resize', setStars);

   function setStars(){
    const skySize = {
        width: sky.offsetWidth,
        height: sky.offsetHeight,
    }

    const TOTAL_STARS = getStarsQuantity(skySize);
    let starTemplate = '';

    for (let star = 0; star < TOTAL_STARS; star++) {
        const starPos = getStarPos(skySize);
        const starStyle = `
        position: absolute;
        top: ${starPos.top}px;
        left: ${starPos.left}px;
        `;
        const starClass = `star star--type-${Math.floor(Math.random() * 3)}`;
        starTemplate += `<div style="${starStyle}" class="${starClass}"></div>`
    }

    sky.innerHTML = starTemplate
   }
   function getStarsQuantity(skySize) {
    const qH = skySize.width / 100 * (quantity / 2);
    const qV = skySize.height / 100 * (quantity / 2);
    return qH + qV;
   }
   function getStarPos(skySize) {
    return {
        top: Math.floor(Math.random() * skySize.height),
        left: Math.floor(Math.random() * skySize.width),
    }
   }
}