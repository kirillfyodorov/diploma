//PRIMARY FORM
function form() {
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
}
export {form};