let position = { x: 0, y: 0 }

const guiWindows = document.getElementsByClassName('movable-box')

interact('.movable-box')
    .draggable({
      listeners: {
        start (event) {
          position.x = event.rect.left
          position.y = event.rect.top - 73 // height of header
          // console.log(document.getElementsByClassName('window'))
          for (let item of guiWindows) {
            // console.log(item);
            item.classList.remove('active-window')
          } 
          // document.getElementsByClassName('window').item()
          event.target.classList.add('active-window')
        },
        move (event) {
          position.x += event.dx
          position.y += event.dy

          event.target.style.left =
            `${position.x}px`

            event.target.style.top =
              `${position.y}px`
        },
        },
      allowFrom: '.drag-handle',
      modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent'
          })
      ]
  });
