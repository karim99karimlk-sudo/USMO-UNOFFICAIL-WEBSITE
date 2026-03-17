// Toggle mobile menu
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Dropdown behavior (works on desktop hover & mobile click)
    document.querySelectorAll('.dropdown').forEach(drop => {
      const btn = drop.querySelector('.dropdown-toggle');

      // Desktop: open on hover
      drop.addEventListener('mouseenter', () => {
        if (window.innerWidth > 800) drop.classList.add('open');
      });
      drop.addEventListener('mouseleave', () => {
        if (window.innerWidth > 800) drop.classList.remove('open');
      });

      // Toggle on click (mobile / keyboard)
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = drop.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    });

    // Close dropdown/menu when clicking outside
    document.addEventListener('click', (e) => {
      const path = e.composedPath ? e.composedPath() : (e.path || []);
      // close mobile nav if click outside and it's open
      if (!path.includes(mainNav) && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded','false');
      }
      // close any open dropdowns if click outside
      document.querySelectorAll('.dropdown.open').forEach(d => {
        if (!path.includes(d)) {
          d.classList.remove('open');
          const btn = d.querySelector('.dropdown-toggle');
          if (btn) btn.setAttribute('aria-expanded','false');
        }
      });
    });

    // keyboard accessibility: close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded','false');
        document.querySelectorAll('.dropdown.open').forEach(d => {
          d.classList.remove('open');
          const btn = d.querySelector('.dropdown-toggle');
          if (btn) btn.setAttribute('aria-expanded','false');
        });
      }
    });