// TABs GLAZING
function glazing() {
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
}
export {glazing};