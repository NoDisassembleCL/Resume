let setOnePos = -((window.innerHeight * 0.96) / 4);
let setTwoPos = 0;
const slideSetOne = document.querySelectorAll(".slide.set-one");
const slideSetTwo = document.querySelectorAll(".slide.set-two");

window.addEventListener("wheel", WindowScrolling);

function WindowScrolling(evt) {
	if (evt.deltaY > 0 && setOnePos < 0) {
		setOnePos++;
		setTwoPos--;

		for (let block of slideSetOne) {
			block.style.top = setOnePos + "px";
		}

		for (let block of slideSetTwo) {
			block.style.top = setTwoPos + "px";
		}
	}
	if (evt.deltaY < 0 && setTwoPos < 0) {
		setOnePos--;
		setTwoPos++;

		for (let block of slideSetOne) {
			block.style.top = setOnePos + "px";
		}

		for (let block of slideSetTwo) {
			block.style.top = setTwoPos + "px";
		}
	}
}