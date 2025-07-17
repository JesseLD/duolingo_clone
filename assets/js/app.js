const flagContainer = document.querySelector('.flags-container');

const flags = [
  { name: 'Inglês', code: 'us' },
  { name: 'Espanhol', code: 'es' },
  { name: 'Francês', code: 'fr' },
  { name: 'Alemão', code: 'de' },
  { name: 'Italiano', code: 'it' },
];

function createFlagElement(flag) {
  const flagElement = `
  <span class="flag">
      <img src="assets/img/flags/${flag.code}.svg" alt="${flag.name}">
      <span>${flag.name}</span>
    </span>`;
  return flagElement;
}

flags.forEach(flag => {
  const flagElement = createFlagElement(flag);
  flagContainer.innerHTML += flagElement;
});