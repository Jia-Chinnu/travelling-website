(function() {
    const navbar = document.querySelector('.header .navbar');
    const searchForm = document.querySelector('.search-form');
    const form = document.getElementById('contact-form');
    const sendBtn = document.getElementById('send-btn');
  
    document.querySelector('#menu-btn').onclick = () => {
      navbar.classList.add('active');
    }
  
    document.querySelector('#nav-close').onclick = () => {
      navbar.classList.remove('active');
    }
  
    document.querySelector('#search-btn').onclick = () => {
      searchForm.classList.add('active');
    }
  
    document.querySelector('#close-search').onclick = () => {
      searchForm.classList.remove('active');
    }
  
    window.onscroll = () => {
      navbar.classList.remove('active');
      if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
      } else {
        document.querySelector('.header').classList.remove('active');
      }
    };
  
    window.onload = () => {
      if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
      } else {
        document.querySelector('.header').classList.remove('active');
      }
    };}
  
)  