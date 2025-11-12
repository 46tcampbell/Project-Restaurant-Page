import './styles.css';
import { loadHomepage } from './home.js';
import { loadMenu } from './menu.js';
import { loadContacts } from './contact.js';

const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', loadHomepage);
const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', loadMenu);
const contactBtn = document.querySelector('#contact');
contactBtn.addEventListener('click', loadContacts);

loadHomepage();
