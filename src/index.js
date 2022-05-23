import generateJoke from './generateJoke';
import './styles/main.scss';
import baseball from './assets/baseball.svg';

const laughImg = document.getElementById('laughImg');
laughImg.src = baseball;

console.log('Hello World');
console.log(generateJoke());
