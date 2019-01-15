window.addEventListener('DOMContentLoaded', function() {
	
	'use strict';

//POPUPs
	let popupEngineerBtn = document.querySelector('.popup_engineer_btn'),
		popupEngineer = document.querySelector('.popup_engineer'),
		closePopupEngineer = document.querySelectorAll('.popup_close')[1],
		popup = document.querySelector('.popup'),
		closePopup = document.querySelectorAll('.popup_close')[0],
		callbackHeader = document.querySelectorAll('.phone_link')[0],
		callbackFeedback = document.querySelectorAll('.phone_link')[1],
		calc = document.querySelectorAll('.calc'),
		close = document.querySelectorAll('.close'),
		popupCalc = document.querySelector('.popup_calc'),
		popupCalcBtn = document.querySelectorAll('.popup_calc_button'),
		popupCalcClose = document.querySelector('.popup_calc_close'),
		calcProfile = document.querySelector('.popup_calc_profile'),
		calcProfileBtn = document.querySelectorAll('.popup_calc_profile_button'),
		calcEnd = document.querySelector('.popup_calc_end'),
		overlay = document.querySelector('.overlay');

//show popup
	let showEngineerPopup = event => {
		popupEngineer.style.display = 'block';
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
	popupEngineer.addEventListener('click', function() {
		if (event.target && event.target.matches('strong')) {
			popupEngineer.style.display = 'none';
			document.body.style.overflow = '';
		} else if (event.target && event.target.matches('div.popup_engineer')) {
            popupEngineer.style.display = 'none';
            document.body.style.overflow = '';
        }
	});

	popup.addEventListener('click', function() {
		if (event.target && event.target.matches('strong')) {
			popup.style.display = 'none';
			document.body.style.overflow = '';
		} else if (event.target && event.target.matches('div.popup')) {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        }
	});
  
//popup via 60s
	let laterPopup = event => {};
		setTimeout(showPopup, 60000);	

// TABs GLAZING
	let glazingTabSwitch = document.querySelector('.glazing_slider'),
		glazingTab = document.querySelectorAll('.glazing_block'),
		glazingTabLink = document.querySelectorAll('.glazing_tab'),
		glazingImg = document.querySelectorAll('.glazing_img'),
		glazingTabContent = document.querySelectorAll('.glazing_content');


	let hideGlazingTab = a => {
		for (let i = a; i < glazingTabContent.length; i++) {
			glazingTabContent[i].style.display = "none";
		}
	};
	hideGlazingTab(1);

	let showGlazingTab = b => {
		glazingTabContent[b].style.display = "flex";
	};

	glazingTabSwitch.addEventListener('click', event => {
		let target = event.target;
		for (let i = 0; i < glazingTab.length; i++) {
			if (target == glazingTab[i] || target == glazingTabLink[i] || target == glazingImg[i]) {
				hideGlazingTab(0);
				showGlazingTab(i);
				glazingTab[i].classList.add('animated');
      			break;
			}	    	
		}
	});

//GLAZING CALCULATOR
	let glazingPriceBtn = document.querySelectorAll('.glazing_price_btn'),
		iconsBox = document.querySelector('.balcon_icons'),
		icons = document.querySelectorAll('.balcon_icon'),
		balconImg = document.querySelectorAll('.balcon_img'),
		width = document.getElementById('width'),
		height = document.getElementById('height'),
		selectGlazing = document.getElementById('view_type'),
		checkCold = document.querySelectorAll('.checkbox')[0],
		checkWarm = document.querySelectorAll('.checkbox')[1],
		balconType,
		calcForm = document.querySelector('.calc_form'),
		calcFormInput = document.getElementsByClassName('form_input'),
		calcUserName = document.querySelectorAll('.user_name')[9],
        calcUserPhone = document.querySelectorAll('.user_phone')[7],
        sendCalcBtn = document.querySelectorAll('.btn-block')[8],
		calcData = new FormData();

//окно "форма и размеры"
	glazingPriceBtn.forEach(function(item) {
    	item.addEventListener('click', function() {
      		popupCalc.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	});

//закрыть окна калькуляторов
	close.forEach(function(item) {
    	item.addEventListener('click', function() {
    		width.value = '';
    		height.value = '';
    		checkCold.checked = false;
    		checkWarm.checked = false;
    		calcUserName.value = '';
        	calcUserPhone.value = '';
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

//выбор типа окна
	iconsBox.addEventListener('click', function(event) {
	    if (event.target.classList.contains('type1_img')) {
	        balconType = 'тип 1';
	    } else if (event.target.classList.contains('type2_img')) {
	        balconType = 'тип 2';
	    } else if (event.target.classList.contains('type3_img')) {
	        balconType = 'тип 3';
	    } else if (event.target.classList.contains('type4_img')) {
	        balconType = 'тип 4';
		}
	});

//input
	function replaceCalcInput() {
		this.value = this.value.replace (/[^0-9]/g, '');
	}
	width.oninput = replaceCalcInput;
	height.oninput = replaceCalcInput;

//переход на мод. окно profile + форма-ширина
	popupCalcBtn.forEach(function(item) {
    	item.addEventListener('click', function() {
      		popupCalc.style.display = 'none';
			calcProfile.style.display = 'block';
			calcData.append('Форма балкона', balconType);
			calcData.append('Ширина', width.value);
	    	calcData.append('Высота', height.value);
		});
	});	

//тип остекления
	selectGlazing.addEventListener('change', function(){
    	calcData.append('Тип остекления', selectGlazing.options[selectGlazing.selectedIndex].innerHTML);
 	});

//checkbox 
	checkCold.addEventListener("click", function() {
    	checkWarm.checked = false;
  	});

  	checkWarm.addEventListener("click", function() {
    	checkCold.checked = false;
  	});

//переход на мод. окно end + выбор профиля
	calcProfileBtn.forEach(function(item) {
    	item.addEventListener('click', function() {
      		calcProfile.style.display = 'none';
			calcEnd.style.display = 'block';
			if (checkCold.checked === true) {
	        	calcData.append('Профиль остекления', 'холодное');
	    	} else if (checkWarm.checked === true) {
	         	calcData.append('Профиль остекления', 'теплое');
			}
		});
	});

//имя-телефон
	sendCalcBtn.addEventListener('click', function() {
		calcData.append('Имя', calcUserName.value);
		calcData.append('Телефон', calcUserPhone.value);
	});

//calcForm
	let calcMessage = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с Вами свяжемся!',
		failure: 'Видимо что-то случилось...'
	};

	let statusCalcMessage = document.createElement('div');

	statusCalcMessage.classList.add('status');

	calcUserPhone.addEventListener('input', function(event) {
		this.value = this.value.replace (/[^0-9]/g, '');
	});

	function sendCalcForm(elem) {
        elem.addEventListener('submit', function(event) {
			event.preventDefault();
			elem.appendChild(statusCalcMessage);

		let request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader ('Content-type', 'application/json; charset=utf-8');

		let obj = {};
		
		calcData.forEach( function(value, key) {
			obj[key] = value;
		});

		let json = JSON.stringify(obj);

			request.send(json);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusCalcMessage.innerHTML = calcMessage.loading;
				} else if (request.readyState === 4 && request.status == 200) {
					statusCalcMessage.innerHTML = calcMessage.success;
				} else {
					statusCalcMessage.innerHTML = calcMessage.failure;
				}
			};

			for (let i = 0; i < calcFormInput.length; i++) {
				calcFormInput[i].value = '';
			}
		});	
	}
	sendCalcForm(calcForm);

//TABs DECORATION
	let decorSwitch = document.querySelector('.decoration_slider'),
		decorItem = document.querySelectorAll('.decoration_item'),
		decor = document.querySelectorAll('.decoration_link'),
		decorContent = document.querySelectorAll('.link_content'),
		decorLink = document.querySelectorAll('.decor_link');

	let hideDecor = a => {
		for (let i = a; i < decorContent.length; i++) {
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
			decorContent[b].style.display = "flex";
		}
	};

	decorSwitch.addEventListener('click', event => {
		let target = event.target;
		for (let i = 0; i < decor.length; i++) {
			if (target == decor[i] || target == decorLink[i]) {
				hideDecor(0);
				showDecor(i);
				break;
			}
		}
	});

//GALLERRY
	let imageBox = document.querySelectorAll('.img-box'),
		bigImg = document.querySelectorAll('.big-img'),
		overlayDiv = document.createElement('div'),
    	image = document.createElement('img');

    overlay.appendChild(overlayDiv);
    overlayDiv.appendChild(image);
    overlayDiv.className = 'box';
    image.className = 'image-box';

    bigImg.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            overlay.style.display = 'block';
            overlayDiv.style.display = 'block';
			overlayDiv.classList.add('animated');
			overlayDiv.classList.add('zoomIn');
            image.style.display = 'block';
            image.src = this.href;
            document.body.style.overflow = 'hidden';   
        });
    });

    overlay.addEventListener('click', function(event){
        if(event.target.className != 'image-box' || event.target.className != 'box') {
            this.style.display = 'none';
            overlayDiv.style.display = 'none';
            //image.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

//PRIMARY FORM
	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с Вами свяжемся!',
		failure: 'Видимо что-то случилось...'
	};

	let primaryForm = document.querySelectorAll('.primary_form'),
		formInput = document.getElementsByTagName('input'),
		userPhone = document.querySelectorAll('.primary_form_phone'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

	userPhone.forEach(function(elem) {
		elem.addEventListener('input', function(event) {
			this.value = this.value.replace (/[^0-9]/g, '');
		});
	});

	primaryForm.forEach(function(elem) {
        elem.addEventListener('submit', function(event) {
			event.preventDefault();
			elem.appendChild(statusMessage);

		let formData = new FormData(elem);

		let request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader ('Content-type', 'application/json; charset=utf-8');

		let obj = {};
		
		formData.forEach(function(value, key) {
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
			};

			for (let i = 0; i < formInput.length; i++) {
				formInput[i].value = '';
			}
		});
	});

//TIMER
	let deadline = '2019-01-17';

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