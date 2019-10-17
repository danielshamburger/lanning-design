/**
 * General "window behavior"
 */

const closeButtons = document.getElementsByClassName("close-window");
const openLinks = document.getElementsByClassName("open-link");

Array.from(closeButtons).forEach(function(element) {
	element.addEventListener('click', function(event) {
		document.getElementById(this.dataset.close).style.display = 'none';
	});
  });

  Array.from(openLinks).forEach(function(element) {
	element.addEventListener('click', function(event) {
		event.preventDefault();
		for (let item of guiWindows) {
			// console.log(item);
			if ( item.classList.contains("active-window") ) {
				item.classList.remove("active-window");
			}
		  }
		let activeWindow = document.getElementById(this.dataset.open);
		activeWindow.style.display = 'block';
		activeWindow.classList.add('active-window');
	});
  });

let position = { x: 0, y: 0 };
const guiWindows = document.getElementsByClassName("movable-box");

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
