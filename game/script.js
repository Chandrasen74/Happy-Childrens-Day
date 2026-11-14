/*
 * Copyright (c) 2026 Chandrasen. All rights reserved.
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use is prohibited.
 */

var audio = document.querySelector('.audio');
var animaleName = document.querySelector('.animaleName');

function animaleSound(element){
    var sound = element.getAttribute('data-sound');
    audio.src = sound;
    audio.play();

    var name = element.getAttribute('data-text');
    animaleName.innerHTML = name;

    element.style.background = '#eaf6fb';
    $(element).siblings().css('background','none');
}