import generateJoke from './generateJoke';
import './styles/main.scss';
import baseball from './assets/baseball.svg';

const laughImg = document.getElementById('laughImg');
laughImg.src = baseball;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();
