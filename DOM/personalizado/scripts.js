const btnChange = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const main = document.getElementsByTagName('main')[0];
const div = document.getElementsByTagName('div')[0];
const footer = document.getElementsByTagName('footer')[0];
const darkModeClass = 'dark-mode';

btnChange.addEventListener('click', changeMode);

function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
   btnChange.classList.toggle(darkModeClass);
   h1.classList.toggle(darkModeClass);
   body.classList.toggle(darkModeClass);
   footer.classList.toggle(darkModeClass);
   main.classList.toggle(darkModeClass);
   div.classList.toggle(darkModeClass);
}

function changeText(){
  const lightMode = 'Light Mode';
  const darkMode = 'Dark Mode';

  if(body.classList.contains(darkModeClass)){
    btnChange.innerHTML = lightMode;
    h1.innerHTML = darkMode + ' ON';
    return;
  }

  btnChange.innerHTML = darkMode;
  h1.innerHTML = lightMode + ' ON';
}
