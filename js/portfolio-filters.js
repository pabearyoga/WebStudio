const filterBtn = document.querySelector('.filters');

filterBtn.addEventListener('click', onFilterBtnClick);

function onFilterBtnClick(event) {
  if (event.target.textContent === 'Все') {
    document.querySelector('.web-1').style.display = 'block';
    document.querySelector('.web-2').style.display = 'block';
    document.querySelector('.design-1').style.display = 'block';
    document.querySelector('.design-2').style.display = 'block';
    document.querySelector('.app-1').style.display = 'block';
    document.querySelector('.app-2').style.display = 'block';
    document.querySelector('.app-3').style.display = 'block';
    document.querySelector('.marketing-1').style.display = 'block';
    document.querySelector('.marketing-2').style.display = 'block';
  }

  if (event.target.textContent === 'Веб-сайты') {
    document.querySelector('.web-1').style.display = 'block';
    document.querySelector('.web-2').style.display = 'block';
    document.querySelector('.design-1').style.display = 'block';
    document.querySelector('.design-2').style.display = 'block';
    document.querySelector('.app-1').style.display = 'block';
    document.querySelector('.app-2').style.display = 'block';
    document.querySelector('.app-3').style.display = 'block';
    document.querySelector('.marketing-1').style.display = 'block';
    document.querySelector('.marketing-2').style.display = 'block';

    document.querySelector('.design-1').style.display = 'none';
    document.querySelector('.design-2').style.display = 'none';
    document.querySelector('.app-1').style.display = 'none';
    document.querySelector('.app-2').style.display = 'none';
    document.querySelector('.app-3').style.display = 'none';
    document.querySelector('.marketing-1').style.display = 'none';
    document.querySelector('.marketing-2').style.display = 'none';
  }

  if (event.target.textContent === 'Приложения') {
    document.querySelector('.web-1').style.display = 'block';
    document.querySelector('.web-2').style.display = 'block';
    document.querySelector('.design-1').style.display = 'block';
    document.querySelector('.design-2').style.display = 'block';
    document.querySelector('.app-1').style.display = 'block';
    document.querySelector('.app-2').style.display = 'block';
    document.querySelector('.app-3').style.display = 'block';
    document.querySelector('.marketing-1').style.display = 'block';
    document.querySelector('.marketing-2').style.display = 'block';

    document.querySelector('.design-1').style.display = 'none';
    document.querySelector('.design-2').style.display = 'none';
    document.querySelector('.web-1').style.display = 'none';
    document.querySelector('.web-2').style.display = 'none';
    document.querySelector('.marketing-1').style.display = 'none';
    document.querySelector('.marketing-2').style.display = 'none';
  }

  if (event.target.textContent === 'Дизайн') {
    document.querySelector('.web-1').style.display = 'block';
    document.querySelector('.web-2').style.display = 'block';
    document.querySelector('.design-1').style.display = 'block';
    document.querySelector('.design-2').style.display = 'block';
    document.querySelector('.app-1').style.display = 'block';
    document.querySelector('.app-2').style.display = 'block';
    document.querySelector('.app-3').style.display = 'block';
    document.querySelector('.marketing-1').style.display = 'block';
    document.querySelector('.marketing-2').style.display = 'block';

    document.querySelector('.web-1').style.display = 'none';
    document.querySelector('.web-2').style.display = 'none';
    document.querySelector('.marketing-1').style.display = 'none';
    document.querySelector('.marketing-2').style.display = 'none';
    document.querySelector('.app-1').style.display = 'none';
    document.querySelector('.app-2').style.display = 'none';
    document.querySelector('.app-3').style.display = 'none';
  }

  if (event.target.textContent === 'Маркетинг') {
    document.querySelector('.web-1').style.display = 'block';
    document.querySelector('.web-2').style.display = 'block';
    document.querySelector('.design-1').style.display = 'block';
    document.querySelector('.design-2').style.display = 'block';
    document.querySelector('.app-1').style.display = 'block';
    document.querySelector('.app-2').style.display = 'block';
    document.querySelector('.app-3').style.display = 'block';
    document.querySelector('.marketing-1').style.display = 'block';
    document.querySelector('.marketing-2').style.display = 'block';

    document.querySelector('.design-1').style.display = 'none';
    document.querySelector('.design-2').style.display = 'none';
    document.querySelector('.app-1').style.display = 'none';
    document.querySelector('.app-2').style.display = 'none';
    document.querySelector('.app-3').style.display = 'none';
    document.querySelector('.web-1').style.display = 'none';
    document.querySelector('.web-2').style.display = 'none';
  }
}

// is-hidden
