const balls = document.getElementsByClassName('ball');
document.onmousemove = (event) => {
  const xPos = (event.clientX * 100) / window.innerWidth + '%';
  const yPos = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++)
   {
    balls[i].style.left = xPos;
    balls[i].style.top = yPos;
    balls[i].transform = 'translate(-' + xPos + ',-' + yPos + ')';
  }
};
