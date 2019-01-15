import {popup} from './modules/popup.js';
import {glazing} from './modules/glazing.js';
import {calc} from './modules/calc.js';
import {decor} from './modules/decor.js';
import {gallery} from './modules/gallery.js';
import {form} from './modules/form.js';
import {timer} from './modules/timer.js';

window.addEventListener('DOMContentLoaded', function() {
	popup();
	glazing();
	calc();
	decor();
	gallery();
	form();
	timer();
});

