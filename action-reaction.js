const button = document.querySelector('button');
const eyeLeft = document.getElementById('eye-left');
button.addEventListener('click', () => {
	if (button.classList.contains('eye-closed')) {
		button.textContent = 'Click to close the left eye';
		eyeLeft.style.backgroundColor = 'red';
	} else {
		button.textContent = 'Click to open the left eye';
		eyeLeft.style.backgroundColor = 'black';
	}

	eyeLeft.classList.toggle('eye-closed');
});
