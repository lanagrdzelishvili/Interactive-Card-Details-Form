const input_name = document.querySelector('#card-name-input')
const card_name = document.querySelector('#card-name')
const defaultModeText = "JANE APPLASEED"
const wrong_card_name = document.querySelector('.wrong-card-name')

input_name.addEventListener('input', () => {
  let enteredName = input_name.value
  let cleanValue = enteredName.replace(/[^a-zA-Zა-ჰ\s]/g, '')
  input_name.value = cleanValue

  if (enteredName === '') {
    wrong_card_name.style.display = 'flex';
    input_name.style.borderColor = 'red';
  } else {
    wrong_card_name.style.display = 'none';
    input_name.style.borderColor = 'initial';
  }

  card_name.textContent = cleanValue || defaultModeText
})


const input_number = document.querySelector('#card-number-input');
const card_number = document.querySelector('#card-number');
const defaultModeTextNum = '0000 0000 0000 0000';
const wrong_number = document.querySelector('#wrong-number');

input_number.addEventListener('input', () => {
  let enteredNumber = input_number.value;
  let cleanValue = enteredNumber.replace(/[^0-9]/g, '');
  let formattedValue = cleanValue.replace(/(\d{4}(?!\s))/g, '$1 ');

  input_number.value = formattedValue.trim();

  if (cleanValue.length !== 16) {
    wrong_number.style.display = 'flex';
    input_number.style.borderColor = 'red';
  } else {
    wrong_number.style.display = 'none';
    input_number.style.borderColor = 'initial';
  }

  cleanValue = cleanValue.padEnd(16, '0');
  formattedValue = cleanValue.replace(/(\d{4})/g, '$1 ');

  card_number.textContent = formattedValue || defaultModeTextNum;
});



const month_input = document.querySelector('#month-input')
const month = document.querySelector('#month')
const defaultModemonth = '00'
const wrong_month = document.querySelector('.wrong-month')

month_input.addEventListener('input', () => {
  let enteredMonth = month_input.value
  let cleanValue = enteredMonth.replace(/\D/g, '').slice(0, 2)
  
  if(cleanValue > 12 || enteredMonth !== cleanValue) {
    cleanValue = ''
    wrong_month.style.display = 'flex'
    month_input.style.borderColor = 'red'
  }
  else {
    wrong_month.style.display = 'none'
    month_input.style.borderColor = 'initial'
  }

  month_input.value = cleanValue
  month.innerHTML = cleanValue.padStart(2, '0') || defaultModemonth
})


const year_input = document.querySelector('#year-input')
const year = document.querySelector('#year')
const defaultModeYear = '00'
const wrong_year = document.querySelector('.wrong-year')

year_input.addEventListener('input', () => {
  let enteredYear = year_input.value
  let cleanValue = enteredYear.replace(/\D/g, '').slice(0, 4)

  const isValidYear = cleanValue >= 2019 && cleanValue <= 2023
  year_input.value = cleanValue

  if(isValidYear) {
    wrong_year.style.display = 'none'
    year_input.style.borderColor = 'initial'
  } else {
    wrong_year.style.display = 'flex'
    year_input.style.borderColor = 'red'
  }

  year.innerHTML = isValidYear ? cleanValue : defaultModeYear
});


const cvc_input = document.querySelector('#cvc')
const cvc = document.querySelector('#cvc-card')
const defaultModeCvc = '000'
const wrong_cvc = document.querySelector('.wrong-cvc')

cvc_input.addEventListener('input', () => {
  let enteredCvc = cvc_input.value
  let cleanValue = enteredCvc.replace(/\D/g, '').slice(0, 3)

  const isValidCvc = cleanValue.length === 3
  cvc_input.value = cleanValue

  if(isValidCvc) {
    wrong_cvc.style.display = 'none'
    cvc_input.style.borderColor = 'initial'
  } else {
    wrong_cvc.style.display = 'flex'
    cvc_input.style.borderColor = 'red'
  }
  cvc.textContent = cleanValue.padEnd(3, '0') || defaultModeCvc
})

const button = document.querySelector('#btn')
const button_continue = document.querySelector('#btn-continue')
const second_container = document.querySelector('.second-container')
const thank_div = document.querySelector('#thank')


button.addEventListener('click', () => {
  const isCardNameValid = input_name.value
  const isCardNumberValid = input_number.value
  const isMonthValid = month_input.value
  const isYearValid = year_input.value
  const isCvcValid = cvc_input.value

  if (isCardNameValid && isCardNumberValid && isMonthValid && isYearValid && isCvcValid) {
    second_container.style.display = 'none';
    thank_div.style.display = 'block';
  }
});

button_continue.addEventListener('click', () => {
  window.location.reload();
})



button.addEventListener('click', () => {
  const inputs = [
    { element: input_name, errorElement: wrong_card_name },
    { element: input_number, errorElement: wrong_number },
    { element: month_input, errorElement: wrong_month },
    { element: year_input, errorElement: wrong_year },
    { element: cvc_input, errorElement: wrong_cvc }
  ];

  let allInputsValid = true;

  inputs.forEach(input => {
    const { element, errorElement } = input;
    const isValid = element.value.trim() !== '';

    if (isValid) {
      errorElement.style.display = 'none';
      element.style.borderColor = 'initial';
    } else {
      errorElement.style.display = 'flex';
      element.style.borderColor = 'red';
      allInputsValid = false;
    }
  });

  if (allInputsValid) {
    second_container.style.display = 'none';
    thank_div.style.display = 'block';
  }
});
