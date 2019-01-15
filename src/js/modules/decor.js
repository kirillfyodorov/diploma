//TABs DECORATION
function decor() {
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
}
export {decor};