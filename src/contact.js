import './contact.css';

const contacts = [
  {
    name: 'Captain Jim',
    title: 'Captain',
    phone: '555-555-5550',
    email: 'captainjim@argh.com',
  },
  {
    name: 'First Mate Jimbo',
    title: 'First Mate',
    phone: '555-555-5551',
    email: 'firstmatejimbo@argh.com',
  },
  {
    name: 'Poop Deckhand Jimmy Bob',
    title: 'Poop Deckhand',
    phone: '555-555-5552',
    email: 'poopdeckjimmybob@argh.com',
  },
];

function loadContacts() {
  const content = document.querySelector('#content');
  content.textContent = '';
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('contact');
  for (const contact of contacts) {
    const div = document.createElement('div');
    div.classList.add('contact-item');
    const h3 = document.createElement('h3');
    h3.classList.add('contact-name');
    h3.textContent = contact.name;
    const p1 = document.createElement('p');
    p1.classList.add('contact-title');
    p1.textContent = contact.title;
    const p2 = document.createElement('p');
    p2.classList.add('contact-phone');
    p2.textContent = contact.phone;
    const p3 = document.createElement('p');
    p3.classList.add('contact-email');
    p3.textContent = contact.email;
    div.appendChild(h3);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    mainDiv.appendChild(div);
  }
  content.appendChild(mainDiv);
}

export { loadContacts };
