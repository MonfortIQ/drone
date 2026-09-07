// Theme Toggle (Dark/Light)
function setTheme(theme) {
  const themeIcons = document.querySelectorAll('.theme-icon, #themeIcon');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcons.forEach(icon => {
      icon.classList.remove('bi-moon', 'bi-moon-stars');
      icon.classList.add('bi-sun');
    });
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    themeIcons.forEach(icon => {
      icon.classList.remove('bi-sun');
      icon.classList.add('bi-moon-stars');
    });
    localStorage.setItem('theme', 'light');
  }
}

// Check local storage on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setTheme('dark');
}

document.querySelectorAll('.theme-toggle-btn, #themeToggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const isDark = document.body.classList.contains('dark-mode');
    setTheme(isDark ? 'light' : 'dark');
  });
});


// RTL Toggle
function setRTL(isRtl) {
  if (isRtl) {
    document.body.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
    localStorage.setItem('rtl', 'true');
  } else {
    document.body.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
    localStorage.setItem('rtl', 'false');
  }
}

const savedRtl = localStorage.getItem('rtl');
if (savedRtl === 'true') {
  setRTL(true);
}

document.querySelectorAll('.rtl-toggle-btn, #rtlToggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const isRtl = document.body.getAttribute('dir') === 'rtl';
    setRTL(!isRtl);
  });
});

// Set Active Nav Link Automatically
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.navbar-custom .nav-link, .navbar-custom .dropdown-item');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath && (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html'))) {
      link.classList.add('active');
      
      // If it's a dropdown item, also highlight the parent dropdown toggle
      const parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        const toggle = parentDropdown.querySelector('.dropdown-toggle');
        if (toggle) toggle.classList.add('active');
      }
    }
  });
});
