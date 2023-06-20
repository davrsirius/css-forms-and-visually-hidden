const elSelectElement = document.querySelector('.select');
const elInputElement = document.querySelector('.input');

elSelectElement.addEventListener('change', function(){
  if (elSelectElement.value === 'Boshqa'){
    elInputElement.disabled = false;
  }


  else {
    elInputElement.value = '';

    elInputElement.disabled = true;
  }

});