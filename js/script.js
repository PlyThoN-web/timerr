const timer = document.querySelector('.countdown')
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');

let countMin = 0
let countSec = 0

const inner = () => {
	minutes.innerHTML = (0 + String(countMin)).slice(-2)
	seconds.innerHTML = (0 + String(countSec)).slice(-2)
}
inner()

const countDown = () => {
	let timeInTimer = countMin + countSec
	const timeInterval = setTimeout(countDown, 1000)
	if (timeInTimer <= 0) {
		clearInterval(timeInterval)
		timer.style.display = 'none'
		message.innerHTML = '<p>I am done...</p>'
	}
	if (countSec > 0) countSec--
	else {
		countSec = 59
		countMin--
	}
	inner()
}

plus.onclick = () => {
	if (countSec < 59) ++countSec
	else{
		countSec = 0
		++countMin
	}
	inner()
};

minus.onclick = () => {
	if (countMin <= 0 && countSec===0){
  		countSec = 0;
    	countMin = 0;
    	return;
    }
	if (countSec > 0) --countSec
	else{
		countSec = 59
		--countMin
	}
	inner() 
};

start.onclick = () => {
	countDown()
};