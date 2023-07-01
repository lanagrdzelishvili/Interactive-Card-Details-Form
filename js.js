const input_name = document.querySelector('#card-name-input')
const card_name = document.querySelector('#card-name')
const defaultModeText = "JANE APPLASEED"
const wrong_card_name = document.querySelector('.wrong-card-name')

input_name.addEventListener('input', () => {
  let enteredName = input_name.value
  let cleanValue = enteredName.replace(/[^a-zA-Zა-ჰ\s]/g, '')
  input_name.value = cleanValue

  if (enteredName !== cleanValue) {
    wrong_card_name.style.display = 'flex'
  } else {
    wrong_card_name.style.display = 'none'
  }

  card_name.textContent = cleanValue || defaultModeText
  input_name.style.borderColor = enteredName ? 'green' : 'initial'
})


const input_number = document.querySelector('#card-number-input')
const card_number = document.querySelector('#card-number')
const defaultModeTextNum = '0000 0000 0000 0000'
const wrong_number = document.querySelector('#wrong-number')

input_number.addEventListener('input', () => {
    let enteredNumber = input_number.value
    let cleanValue = enteredNumber.replace(/[^0-9]/g, '')
    cleanValue = cleanValue.replace(/(\d{4}(?!\s))/g, '$1 ')
    input_number.value = cleanValue.trim()

    if (enteredNumber.replace(/\s/g, '') !== cleanValue.replace(/\s/g, '')) {
        wrong_number.style.display = 'flex'
      } else {
        wrong_number.style.display = 'none'
      }

    card_number.innerHTML = cleanValue || defaultModeTextNum
    input_number.style.borderColor = enteredNumber ? 'green' : 'initial'
})
