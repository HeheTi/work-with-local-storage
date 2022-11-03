function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  list: document.querySelector('.list-members'),
};

const markupItem = ({
  age,
  consent,
  data,
  email,
  games,
  name,
  nickname,
  platform,
}) =>
  `<li class="item" style="background-color: ${getRandomHexColor()}">
<p>Name: <span> ${name} </span></p>
<p>Nickname: <span>${nickname} </span></p>
<p>Age: <span>${age} </span></p>
<p>email: <span> ${email}</span></p>
<p>Consent to mailing: <span> ${consent}</span></p>
<p>Lovely game: <span>${games.join(', ')} </span></p>
<p>Main game platform: <span>${platform} </span></p>
<p>Registration time: <span>${data} </span></p>
</li>`;

const markupAll = items => items.map(markupItem).join('');

const renderAll = items => (refs.list.innerHTML = markupAll(items));

const renderItem = item =>
  refs.list.insertAdjacentHTML('beforeend', markupItem(item));

export { renderAll, renderItem };
