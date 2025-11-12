import './menu.css';

const menuItems = [
  {
    name: 'Cannonball Meatballs',
    description:
      'Hearty meatballs served with a savory sauce for dipping, like marinara.',
    price: '$8',
  },
  {
    name: "Dead Man's Fingers",
    description:
      'A playful name for a long, thin food item. Historically, it referred to a dish with a long, finger-like appearance, and today can be used for items like fish fingers or a type of sausage.',
    price: '$9',
  },
  {
    name: 'Fish and Chips',
    description:
      'A classic and hearty meal that fits the "catch of the day" theme.',
    price: '$15',
  },
  {
    name: 'Walk the Chicken Planks',
    description:
      'A fun name for chicken tenders or strips served on a platter.',
    price: '$12',
  },
  {
    name: 'Scurvy Dogs',
    description:
      'A type of sausage or hot dog that can be served on a bun or "plank".',
    price: '$10',
  },
  {
    name: 'Salmagundi',
    description:
      'A genuine pirate dish described as a "salad" or a random assortment of meat, fish, vegetables, and fruits.',
    price: '$13',
  },
  {
    name: 'Treasure Chest Cornbread',
    description:
      'A loaf of cornbread shaped or carved to look like a treasure chest, perhaps with a filling of gold-colored cheese or sweet corn.',
    price: '$8',
  },
];

function loadMenu() {
  const content = document.querySelector('#content');
  content.textContent = '';
  for (const item of menuItems) {
    const div = document.createElement('div');
    div.classList.add('menu-item');
    const h3 = document.createElement('h3');
    h3.classList.add('item-name');
    h3.textContent = item.name;
    const p1 = document.createElement('p');
    p1.classList.add('item-description');
    p1.textContent = item.description;
    const p2 = document.createElement('p');
    p2.classList.add('item-price');
    p2.textContent = item.price;
    div.appendChild(h3);
    div.appendChild(p1);
    div.appendChild(p2);
    content.appendChild(div);
  }
}

export { loadMenu };
