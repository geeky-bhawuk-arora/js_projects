const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(weight) || weight < 0 || weight === '') {
    results.innerHTML = `Invalid Weight Input ! ${weight}`;
  } else if (isNaN(height) || height < 0 || height === '') {
    results.innerHTML = `Invalid Height Input ! ${height}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;
  }
});
