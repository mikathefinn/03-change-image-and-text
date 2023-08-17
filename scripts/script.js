const myImage = document.getElementById('personImage');
const section = document.getElementById('section');
const text = document.getElementsByTagName('h1')[0];

myImage.addEventListener('mouseover', () => {
  section.style.backgroundColor = 'rgb(64,65,79)';
  text.textContent = 'But dogs are way better';
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/person.jpeg') {
    myImage.setAttribute('src', 'images/dog3.jpeg');
  }
});

myImage.addEventListener('mouseout', () => {
  section.style.backgroundColor = '';
  text.textContent = '';
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/dog3.jpeg') {
    myImage.setAttribute('src', 'images/person.jpeg');
  }
});
