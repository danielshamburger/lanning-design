let position = { x: 0, y: 0 };

const guiWindows = document.getElementsByClassName("movable-box");

/**
 * General "window behavior"
 */

const closeButtons = document.getElementsByClassName("close-window");

function closeWindow() {
	document.getElementById(this.dataset.close).style.display = 'none';
}

Array.from(closeButtons).forEach(function(element) {
	element.addEventListener('click', closeWindow);
  });

interact(".movable-box").draggable({
  listeners: {
    start(event) {
      position.x = event.rect.left;
      position.y = event.rect.top - 50; // height of header
      for (let item of guiWindows) {
		// console.log(item);
		if ( item.classList.contains("active-window") ) {
			item.classList.remove("active-window");
		}
      }
      event.target.classList.add("active-window");
    },
    move(event) {
      position.x += event.dx;
      position.y += event.dy;

      event.target.style.left = `${position.x}px`;

      event.target.style.top = `${position.y}px`;
    }
  },
  allowFrom: ".drag-handle",
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: "parent"
    })
  ]
});
