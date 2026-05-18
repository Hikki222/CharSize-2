    // Scroll effect
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Search open/close
    const searchWrapper = document.getElementById('searchWrapper');
    const searchInput = document.getElementById('searchInput');

    searchWrapper.addEventListener('click', () => {
      searchWrapper.classList.add('open');
      searchInput.focus();
    });

    searchInput.addEventListener('blur', () => {
      if (!searchInput.value) {
        searchWrapper.classList.remove('open');
      }
    });

    // Nav active
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });

    // Burger
    const burgerBtn = document.getElementById('burgerBtn');
    burgerBtn.addEventListener('click', () => {
      const nav = document.querySelector('nav');
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });