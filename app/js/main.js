const items = document.querySelectorAll('.accordion__item-trigger');

const accordion = () => {
  items.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentNode;

      if (parent.classList.contains('accordion__item-active')) {
        parent.classList.remove('accordion__item-active');
      } else {
        document
          .querySelectorAll('.accordion__item')
          .forEach(child => child.classList.remove('accordion__item-active'));
        parent.classList.add('accordion__item-active');
      }
    });
  });
};

accordion();

function tabs(
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = 'flex'
) {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);
  function hideTabContent() {
    content.forEach(item => {
      item.style.display = 'none';
    });
    tab.forEach(item => {
      item.classList.remove(activeClass);
    });
  }
  function showTabContent(i = 0) {
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
  }
  hideTabContent();
  showTabContent();
  header.addEventListener('click', e => {
    const target = e.target;
    if (
      target.classList.contains(tabSelector.replace(/\./, '')) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ''))
    ) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
tabs('.tabs__header', '.tabs__header-item', '.tabs__content-item', 'active');

const swiper = () => {
  if ($('.slider')) {
    new Swiper('.slider', {
      observer: true,
      observeParents: true,
      spaceBetween: 24,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      //   // Responsive breakpoints
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
      },
    });
  }
};

swiper();
