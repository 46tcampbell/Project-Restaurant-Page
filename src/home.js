import restaurantImage from './images/pirate.jpg';
import './home.css';

function loadHomepage() {
  const content = document.querySelector('#content');
  content.textContent = '';
  const div = document.createElement('div');
  div.classList.add('home-item');
  const h1 = document.createElement('h1');
  h1.textContent = "Captain Jim's Hideaway";
  div.appendChild(h1);
  const img = document.createElement('img');
  img.src = restaurantImage;
  img.alt = 'Picture of Captain Jim summoning his next patrons';
  div.appendChild(img);
  const headline = document.createElement('h2');
  headline.textContent = "Take your taste buds on a Seven Sea's Adventure";
  div.appendChild(headline);
  const paragraph = document.createElement('p');
  paragraph.textContent =
    "Come to Captain Jim's Hideaway for all your pirate needs. Whether you need help catching the catch of the day or just need a little rum (we here it's always gone at other places), Captain Jim's Hideway has you covered. Grab a seat, get a drink and have a bite; ARRRGGGHHH.";
  div.appendChild(paragraph);
  content.appendChild(div);
}

export { loadHomepage };
