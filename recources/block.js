document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });

  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 123 || event.which === 123) {
      event.preventDefault();
    }
  });

  const form = document.querySelector('.windowinsupport');
  setTimeout(() => {
    form.classList.remove('hidden');
    form.classList.add('fade-in');
  }, 11000);

  const btn = document.getElementById('sendBtn')
  const inpt = document.getElementById('mail')
  const inpt2 = document.getElementById('namei')
  const inpt3 = document.getElementById('problem')

  btn.addEventListener("click", function() {
    if (inpt.value && inpt2.value && inpt3.value) {
      setTimeout(function() {
        alert('Ваша вопрос был успешно отправлен, ожидайте ответа в течении часа!');
        inpt.value = ""
        inpt2.value = ""
        inpt3.value = ""
      }, 1500);
    } else {
      alert('Заполните все поля формы!');
    }
  });

