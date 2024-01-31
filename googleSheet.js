const scriptURL = 'https://script.google.com/macros/s/AKfycbyy2ndA23j40U3bSUHXW53PEd1qUjkt_CTVMz8Zb5HWcs9hOZHSitcaK53kn05xH-Chcg/exec'

const form = document.forms['form-control']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})