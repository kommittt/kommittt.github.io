// Make the DIV element draggable:
dragElement(document.getElementById("notepad"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("notepadheader")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("notepadheader").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    // Correct right-edge constraint
    const notepadWidth = elmnt.offsetWidth;
    const maxLeft = window.innerWidth - notepadWidth;
    const newLeft = Math.max(0, Math.min(elmnt.offsetLeft - pos1, maxLeft));
    
    elmnt.style.left = newLeft + "px";
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
}

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

  $(window).resize(function() {

    if ($(this).width() < 400) {
  
      $('.notepad').hide();
  
    } else {
  
      $('.notepad').show();
  
      }
  
  });

}

function closeNotepad() {
  document.getElementById('notepad').style.display = 'none';
  document.getElementById('textchangescript').style.display = 'none';

  window.location = loc;
}

