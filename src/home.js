import restaurantImage from './images/restaurant.jpg';

function loadHomepage() {
  const content = document.querySelector('#content');
  content.textContent = '';
  const img = document.createElement('img');
  img.src = restaurantImage;
  img.alt = 'Interior view of an empty fancy looking restaurant';
  content.appendChild(img);
  const headline = document.createElement('h1');
  headline.textContent = 'Elevate your palate with our culinary expertise';
  content.appendChild(headline);
  const paragraph = document.createElement('p');
  paragraph.textContent =
    "Come to Informal Jim's for all your laid-back needs. Whether you need to catch the game or meet up with friends after work, Informal Jim's has you covered. Grab a seat, get a drink and have a bite; good times included.";
  content.appendChild(paragraph);
}

export { loadHomepage };
