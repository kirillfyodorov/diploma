window.addEventListener('DOMContentLoaded', function() {
	
	'use strict';

//POPUPs
	let modal = document.querySelectorAll('.modal'),
		close = document.querySelectorAll('.close'),
		popupEngineerBtn = document.querySelector('.popup_engineer_btn'),
		callbackHeader = document.querySelectorAll('.phone_link')[0],
		callbackFeedback = document.querySelectorAll('.phone_link')[1],
		popup = document.querySelector('.popup'),
		engineerPopup = document.querySelector('.popup_engineer'),
		calc = document.querySelectorAll('.calc'),
		popupCalc = document.querySelector('.popup_calc'),
		calcProfile = document.querySelector('.popup_calc_profile'),
		calcEnd = document.querySelector('.popup_calc_end'),
		closePopup = document.querySelectorAll('.popup_close')[0],
		closeEngineerPopup = document.querySelectorAll('.popup_close')[1],
		popupCalcClose = document.querySelector('.popup_calc_close'),
		before = document.querySelector;

//show popup
	let showEngineerPopup = event => {
		engineerPopup.style.display = 'block';
		document.body.style.overflow = 'hidden';
	};
	popupEngineerBtn.addEventListener('click', showEngineerPopup);


	let showPopup = event => {
		popup.style.display = 'block';
		document.body.style.overflow = 'hidden';
	};
	callbackHeader.addEventListener('click', showPopup);
	callbackFeedback.addEventListener('click', showPopup);

//close popup 
	let closePopups = event => {
		engineerPopup.style.display = 'none';
		popup.style.display = 'none';
		document.body.style.overflow = '';
		if (event.target.matches('div.popup_engineer')) {
            engineerPopup.style.display = 'none';
        };
        if (event.target.matches('div.popup')) {
            popup.style.display = 'none';
        };
	};
	closePopup.addEventListener('click', closePopups);
	closeEngineerPopup.addEventListener('click', closePopups);

//popup via 60s
	let laterPopup = event => {};
		setTimeout(showPopup, 60000);	

// TABs GLAZING
	let glazingTabSwitch = document.querySelector('.glazing_slider'),
		glazingTab = document.querySelectorAll('.glazing_block'),
		glazingTabContent = document.querySelectorAll('.glazing_content');

	let hideGlazingTab = a => {
		for (let i = a; i < glazingTabContent.length; i++) {
			glazingTabContent[i].style.display = "none";
		}
	};
	hideGlazingTab(1);

	let showGlazingTab = b => {
		glazingTabContent[b].style.display = "block";
	};

	glazingTabSwitch.addEventListener('click', event => {
		let target = event.target;
		if (target && target.classList.contains('glazing_block')) {
			for (let i = 0; i < glazingTab.length; i++) {
				if (target == glazingTab[i]) {
					hideGlazingTab(0);
					showGlazingTab(i);
					break;
				}
			}
		}
	});

//GLAZING CALCULATOR
	let glazingPriceBtn = document.querySelectorAll('.glazing_price_btn'),
		iconsBox = document.querySelector('.balcon_icons'),
		icons = document.querySelectorAll('.balcon_icon'),
		balconImg = document.querySelectorAll('.balcon_img'),
		profile = document.querySelectorAll('.popup_calc_button'),
		end = document.querySelectorAll('.popup_calc_profile_button'),
		width = document.getElementById('width'),
		height = document.getElementById('height');

//окно калькулятора
	glazingPriceBtn.forEach(function(item) {
    	item.addEventListener('click', function() {
      		popupCalc.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	});

//закрыть окна калькуляторов
	close.forEach(function(item) {
    	item.addEventListener('click', function() {
			for (let i = 0; i < close.length; i++) {
		    	calc[i].style.display = 'none';
				document.body.style.overflow = '';
			}	
		});
	});
	
//переключение м/у иконками
	let currentImg = a => {
		for (let i = a; i < balconImg.length; i++) {
			balconImg[i].style.display = "none";
		}
	};
	currentImg(1);
	
	let showImg = b => {
		balconImg[b].style.display = "block";
	};

	iconsBox.addEventListener('click', event => {
		let target = event.target;
		if (target && target.classList.contains('balcon_icon')) {
			for (let i = 0; i < icons.length; i++) {
				if (target == icons[i]) {
					icons[i].classList.add('do_image_more');
					currentImg(0); 
					showImg(i);
					break;
				} else {
					icons[i].classList.remove('do_image_more');
				}
			}
		}
	});

//input
	function replaceCalcInput() {
		this.value = this.value.replace (/[^0-9]/g, '');
	}
	width.oninput = replaceCalcInput;
	height.oninput = replaceCalcInput;

//переход на мод. окно profile
	profile.forEach(function(item) {
    	item.addEventListener('click', function() {
      		popupCalc.style.display = 'none';
			calcProfile.style.display = 'block';
		});
	});	

//checkbox 
	

//переход на мод. окно end
	end.forEach(function(item) {
    	item.addEventListener('click', function() {
      		calcProfile.style.display = 'none';
			calcEnd.style.display = 'block';
		});
	});


//TABs DECORATION
	let decorSwitch = document.querySelector('.decoration_slider'),
		decor = document.querySelectorAll('.decoration_link'),
		decorContent = document.querySelectorAll('.link_content');

	let hideDecor = a => {
		for (let i = a; i < decor.length; i++) {
			decor[i].classList.remove('after_click');
			decor[i].classList.add('no_click');
			decorContent[i].style.display = "none";
		}
	};
	hideDecor(1);

	let showDecor = b => {
		if (decor[b].classList.contains('no_click')) {
			decor[b].classList.remove('no_click');
			decor[b].classList.add('after_click');
			decorContent[b].style.display = "block";
		}
	};

	decorSwitch.addEventListener('click', event => {
		let target = event.target;
		if (target && target.classList.contains('decoration_link')) {
			for (let i = 0; i < decor.length; i++) {
				if (target == decor[i]) {
					hideDecor(0);
					showDecor(i);
					break;
				}
			}
		}
	});

//GALLERRY
	let imageBox = document.querySelectorAll('.img-box'),
		bigImg = document.querySelectorAll('.big-img'),
    	overlay = document.querySelector('.overlay'),
    	image = document.createElement('img');

    overlay.appendChild(image);
    image.className = 'image-box';

    bigImg.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            overlay.style.display = 'block';
            image.style.display = 'block';
            image.src = this.href;
            document.body.style.overflow = 'hidden';
        });
    });

    overlay.addEventListener('click', function(event){
        if(event.target.className != 'image-box') {
            this.style.display = 'none';
            image.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

//FORM
	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с Вами свяжемся!',
		failure: 'Видимо что-то случилось...'
	};

	let form = document.querySelectorAll('.form'),
		formInput = document.getElementsByTagName('input'),
		userName = document.querySelectorAll('.user_name'),
        userPhone = document.querySelectorAll('.user_phone'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

	function replaceFormInput() {
		this.value = this.value.replace (/[^0-9]/g, '');
	}
	userPhone.oninput = replaceFormInput;

	form.forEach(function(elem) {
		elem.addEventListener('submit', function(event) {
			event.preventDefault();
			elem.appendChild(statusMessage);

		let formData = new FormData(elem);

		let request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader ('Content-type', 'application/json; charset=utf-8');

		let obj = {};
		
		formData.forEach( function(value, key) {
			obj[key] = value;
		});

		let json = JSON.stringify(obj);

			request.send(json);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4 && request.status == 200) {
					statusMessage.innerHTML = message.success;
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}

			for (let i = 0; i < formInput.length; i++) {
				formInput[i].value = '';
			}
		});
	});

//TIMER
	let deadline = '2019-01-16';

	let getTimeRemaining = endtime => {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			hours = Math.floor((t / (1000 * 60 * 60)) % 24),
			minutes = Math.floor(( t / 1000 / 60) % 60),
			seconds = Math.floor((t / 1000) % 60);

			return {
				'total': t,
				'days': days,
				'hours' : hours,
				'minutes' : minutes,
				'seconds' : seconds
			};
	};

	let setClock = (id, endtime) => {
		let timer = document.getElementById(id),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endtime);
			days.textContent = ('0' + t.days).slice(-2);
			hours.textContent = ('0' + t.hours).slice(-2);
			minutes.textContent = ('0' + t.minutes).slice(-2);
			seconds.textContent = ('0' + t.seconds).slice(-2);
			
			if (t.total <= 0) {
				clearInterval(timeInterval);
				days.textContent = ('00');
				hours.textContent = ('00');
				minutes.textContent = ('00');
				seconds.textContent = ('00');
			}
		}
	};
	setClock('timer', deadline);
});