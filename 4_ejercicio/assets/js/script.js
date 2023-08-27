let globalColor = ''; 

const divs = document.querySelectorAll('.mydivs');

divs.forEach(div => {
  div.addEventListener('click', (event) => {
    div.style.backgroundColor = 'black';
  });
});


document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'a':
      globalColor = 'pink';
      break;
    case 's':
      globalColor = 'orange';
      break;
    case 'd':
      globalColor = 'cyan';
      break;
    case 'q':
      createNewDiv('purple');
      break;
    case 'w':
      createNewDiv('gray');
      break;
    case 'e':
      createNewDiv('brown');
      break;
  }

  if (globalColor) {
    document.getElementById('key').style.backgroundColor = globalColor;
  }
});


function createNewDiv(color) {
  const newDiv = document.createElement('div');
  newDiv.className = "mydivs"
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);
}