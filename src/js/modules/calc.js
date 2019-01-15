//GLAZING CALCULATOR
function calc() {
	let close = document.querySelectorAll('.close'),
		popupCalc = document.querySelector('.popup_calc'),
		popupCalcBtn = document.querySelectorAll('.popup_calc_button'),
		calcProfileBtn = document.querySelectorAll('.popup_calc_profile_button'),
		glazingPriceBtn = document.querySelectorAll('.glazing_price_btn'),
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
}
export {calc};