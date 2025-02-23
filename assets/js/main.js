(function() {
  "use strict";

  const selectBody = document.querySelector('body');
  const selectHeader = document.querySelector('#header');
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  const scrollTop = document.querySelector('.scroll-top');
  const preloader = document.querySelector('#preloader');

  function toggleScrolled() {
    if (!selectHeader.classList.contains('scroll-up-sticky') && 
        !selectHeader.classList.contains('sticky-top') && 
        !selectHeader.classList.contains('fixed-top')) return;

    selectBody.classList.toggle('scrolled', window.scrollY > 100);
  }

  function mobileNavToggle() {
    console.log('Tombol nav mobile diklik');
    selectBody.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  function initScrollTop() {
    if (scrollTop) {
      scrollTop.classList.toggle('active', window.scrollY > 100);
    }
  }

  function initAOS() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  function initIsotope(isotopeItem) {
    const layout = isotopeItem.getAttribute('data-layout') || 'masonry';
    const filter = isotopeItem.getAttribute('data-default-filter') || '*';
    const sort = isotopeItem.getAttribute('data-sort') || 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(filters => {
        filters.addEventListener('click', function() {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({ filter: this.getAttribute('data-filter') });
          if (typeof initAOS === 'function') initAOS();
        });
      });
    });
  }

  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(swiperElement => {
      const config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());
      new Swiper(swiperElement, config);
    });
  }

  function navmenuScrollspy() {
    const navmenulinks = document.querySelectorAll('.navmenu a');
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      const section = document.querySelector(navmenulink.hash);
      if (!section) return;

      const position = window.scrollY + 200;
      navmenulink.classList.toggle('active', position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight));
    });
  }

  document.addEventListener('scroll', () => {
    toggleScrolled();
    initScrollTop();
    navmenuScrollspy();
  });

  window.addEventListener('load', () => {
    toggleScrolled();
    initScrollTop();
    initAOS();
    initSwiper();
    if (preloader) preloader.remove();
  });

  mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (selectBody.classList.contains('mobile-nav-active')) {
        mobileNavToggle();
      }
    });
  });

})();
