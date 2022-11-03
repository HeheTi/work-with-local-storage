import storage from '../services/localStorage.js';

const refs = {
  form: document.querySelector('.add-member'),
};

const MEMBER_INFO_KEY = 'member-info';

let savedDate = storage.get(MEMBER_INFO_KEY) ?? {};

const keys = Object.keys(savedDate);

if (keys.length) {
  for (const key of keys) {
    const input = refs.form.elements[key];
    const value = savedDate[key];

    if (input[0]?.name === 'games') {
      for (const i of input) {
        if (!value.includes(i.value)) {
          continue;
        }
        i.checked = true;
      }

      continue;
    }

    if (input.type === 'checkbox') {
      input.checked = value;
      continue;
    }
    input.value = value;
  }
}

const onInputForm = e => {
  const { name, value, checked, type } = e.target;

  savedDate = {
    ...savedDate,
    [name]:
      name === 'consent'
        ? checked
        : name === 'games'
        ? checked
          ? [...new Set([...(savedDate[name] ?? []), value])]
          : savedDate[name].filter(el => el !== value)
        : value,
  };

  storage.save(MEMBER_INFO_KEY, savedDate);
};

refs.form.addEventListener('input', onInputForm);
