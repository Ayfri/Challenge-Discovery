const button = document.querySelector('button');
const eyeLeft = document.getElementById('eye-left');
button.addEventListener('click', () => {
	if (eyeLeft.classList.contains('eye-closed')) {
		button.textContent = 'Click to close the left eye';
		eyeLeft.style.backgroundColor = 'red';
	} else {
		button.textContent = 'Click to open the left eye';
		eyeLeft.style.backgroundColor = 'black';
	}

	eyeLeft.classList.toggle('eye-closed');
});

const speakButton = document.getElementById('speak-button');
const torso = document.getElementById('torso');
speakButton.addEventListener('click', () => {
	const div = document.createElement('div');
	div.textContent = 'Hello there!';
	div.className = 'words';
	torso.append(div);
});
