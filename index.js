const slideSetOne = document.querySelectorAll(".slide.set-one");
const slideSetTwo = document.querySelectorAll(".slide.set-two");

// Initial set of block positions
let setOnePos = -((window.innerHeight * 0.96) / 4);
let setTwoPos = 0;

window.addEventListener("wheel", WindowScrolling);

function WindowScrolling(evt) {
	if (evt.deltaY > 0 && setOnePos < 0) {
		setOnePos++;
		setTwoPos--;
	}
	else if (evt.deltaY < 0 && setTwoPos < 0) {
		setOnePos--;
		setTwoPos++;
	}
	else {
		return;
	}

	MoveBlocks(setOnePos, slideSetOne);
	MoveBlocks(setTwoPos, slideSetTwo);
}

function MoveBlocks( newPos, slideSet ) {
	for (let block of slideSet) {
		block.style.top = newPos + "px";
	}
}
