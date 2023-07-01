const input_name = document.querySelector('#card-name-input');
const card_name = document.querySelector('#card-name');
const defaultModeText = "JANE APPLASEED";
const wrong_card_name = document.querySelector('.wrong-card-name');

input_name.addEventListener('input', () => {
  let enteredName = input_name.value;
  let cleanValue = enteredName.replace(/[^a-zA-Z\s]/g, '');
  input_name.value = cleanValue;

  if (enteredName !== cleanValue) {
    wrong_card_name.style.display = 'flex';
  } else {
    wrong_card_name.style.display = 'none';
  }

  card_name.textContent = cleanValue || defaultModeText;
  input_name.style.borderColor = enteredName ? 'green' : 'initial';
});



const input_number = document.querySelector('#card-number-input')
const card_number = document.querySelector('#card-number')
const defaultModeTextNum = '0000 0000 0000 0000'

input_number.addEventListener('input', function(){
    let enteredNumber = input_number.value
    card_number.innerHTML = enteredNumber || defaultModeTextNum
    input_number.style.borderColor = 'green'
})