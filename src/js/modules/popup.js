//POPUPs
function popup() {
	let popupEngineerBtn = document.querySelector('.popup_engineer_btn'),
		popupEngineer = document.querySelector('.popup_engineer'),
		closePopupEngineer = document.querySelectorAll('.popup_close')[1],
		popup = document.querySelector('.popup'),
		closePopup = document.querySelectorAll('.popup_close')[0],
		callbackHeader = document.querySelectorAll('.phone_link')[0],
		callbackFeedback = document.querySelectorAll('.phone_link')[1],
		calc = document.querySelectorAll('.calc'),
		popupCalcClose = document.querySelector('.popup_calc_close'),
		calcProfile = document.querySelector('.popup_calc_profile'),
		calcEnd = document.querySelector('.popup_calc_end'),
		overlay = document.querySelector('.overlay');

//show popup
	let showEngineerPopup = event => {
		popupEngineer.style.display = 'block';
		document.body.style.overflow = 'hidden';
	};
	popupEngineerBtn.addEventListener('click', showEngineerPopup);


	let showPopup = event => {
		event.preventDefault();
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
}
export {popup};