window.addEventListener('DOMContentLoaded', () => {
		
    let tab = require('../parts/tab.js');
    let timer = require('../parts/timer.js');
    let slider = require('../parts/slider.js');
    let scroll = require('../parts/scroll.js');
    let modal = require('../parts/modal.js');
    let calc = require('../parts/calc.js');
    let ajax = require('../parts/ajax.js');
    let ajax2 = require('../parts/ajax2.js');
    
    tab();
    timer();
    slider();
    scroll();
    modal();
    calc();
    ajax();
    ajax2();
});
