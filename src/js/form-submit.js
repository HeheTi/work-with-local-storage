import storage from '../services/localStorage.js';
import { renderAll, renderItem } from './markup.js';

const refs = {
  form: document.querySelector('.add-member'),
};
const ALL_MEMBERS = 'all-members-info';
const MEMBER_INFO_KEY = 'member-info';

let members = storage.get(ALL_MEMBERS) ?? [];
if (members.length >= 1) {
  renderAll(members);
}

const onSubmitForm = e => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const member = {};

  for (const [name, value] of formData.entries()) {
    if (!value) {
      alert('all form fields must be filled');
      return;
    }
    if (name === 'games') {
      member[name] = [...(member[name] || []), value];
      continue;
    }
    member[name] = value;
  }
  member.consent = !!formData.get('consent');

  members = [...members, member];

  storage.save(ALL_MEMBERS, members);

  renderItem(member);

  storage.remove(MEMBER_INFO_KEY);
  e.currentTarget.reset();
};

refs.form.addEventListener('submit', onSubmitForm);
