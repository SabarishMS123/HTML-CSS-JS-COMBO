
document.addEventListener('DOMContentLoaded', function() {
  
  const loading = document.createElement('div');
  loading.className = 'loading';
  loading.innerHTML = '<div class="loading-animation"></div>';
  document.body.appendChild(loading);

  
  window.addEventListener('load', function() {
      setTimeout(function() {
          loading.classList.add('hidden');
          setTimeout(function() {
              loading.remove();
          }, 500);
      }, 1000);
  });

  
  const hamburger = document.querySelector('.hamburger-menu');
  const mobileNav = document.querySelector('.mobile-nav');

  hamburger.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
  });

  
  const navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          mobileNav.classList.remove('active');
      });
  });

  
  const nodes = document.querySelectorAll('.node');
  nodes.forEach(node => {
      node.addEventListener('mouseover', function() {
          this.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(1.1)`;
      });
      
      node.addEventListener('mouseout', function() {
          this.style.transform = '';
      });
      
      
      node.addEventListener('touchstart', function(e) {
          e.preventDefault();
          this.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(1.1)`;
          setTimeout(() => {
              this.style.transform = '';
          }, 1000);
      });
  });

  
  const centerNode = document.querySelector('.center-node');
  if (centerNode) {
      centerNode.addEventListener('click', function() {
          this.style.animation = 'rotate 1s linear';
          setTimeout(() => {
              this.style.animation = '';
          }, 1000);
      });
  }

  
  const scrollTopButton = document.createElement('div');
  scrollTopButton.className = 'scroll-top';
  scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(scrollTopButton);

  
  window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
          scrollTopButton.classList.add('active');
      } else {
          scrollTopButton.classList.remove('active');
      }
  });

  
  scrollTopButton.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', function() {
      let current = '';
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop - 150;
          const sectionHeight = section.clientHeight;
          
          if (window.pageYOffset >= sectionTop) {
              current = section.getAttribute('id');
          }
      });
      
      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === current) {
              link.classList.add('active');
          }
      });
  });

  
  const skillBoxes = document.querySelectorAll('.skill-box');
  
  skillBoxes.forEach(box => {
      box.addEventListener('mouseenter', function() {
          const proficiency = this.getAttribute('data-proficiency');
          this.style.setProperty('--skill-level', proficiency);
      });
  });

  
  window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      
      document.querySelectorAll('.home, .about, .education, .skills, .projects, .contact').forEach(section => {
          const speed = 0.5;
          section.style.backgroundPositionY = `${scrollPosition * speed}px`;
      });
  });

  
  function typeEffect() {
      const nameElement = document.getElementById('name');
      const text = nameElement.innerText;
      nameElement.innerHTML = '';
      nameElement.style.visibility = 'visible';
      
      let i = 0;
      const typing = setInterval(function() {
          if (i < text.length) {
              nameElement.innerHTML += text.charAt(i);
              i++;
          } else {
              clearInterval(typing);
              
              
              setTimeout(function() {
                  const deleting = setInterval(function() {
                      if (nameElement.innerHTML.length > 0) {
                          nameElement.innerHTML = nameElement.innerHTML.substring(0, nameElement.innerHTML.length - 1);
                      } else {
                          clearInterval(deleting);
                          
                          setTimeout(typeEffect, 500);
                      }
                  }, 100);
              }, 2000);
          }
      }, 150);
  }

  
  typeEffect();

  
  const contactForm = document.querySelector('.contact-form form');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          
          const nameInput = this.querySelector('input[name="name"]');
          const emailInput = this.querySelector('input[name="email"]');
          const messageInput = this.querySelector('textarea[name="message"]');
          
          let isValid = true;
          
          if (nameInput.value.trim() === '') {
              nameInput.style.borderColor = 'red';
              isValid = false;
          } else {
              nameInput.style.borderColor = '';
          }
          
          if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
              emailInput.style.borderColor = 'red';
              isValid = false;
          } else {
              emailInput.style.borderColor = '';
          }
          
          if (messageInput.value.trim() === '') {
              messageInput.style.borderColor = 'red';
              isValid = false;
          } else {
              messageInput.style.borderColor = '';
          }
          
          if (!isValid) {
              e.preventDefault();
          }
      });
  }

  
  function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  
  const projectBoxes = document.querySelectorAll('.project-box');
  
  projectBoxes.forEach(box => {
      box.addEventListener('mousemove', function(e) {
          const boxRect = box.getBoundingClientRect();
          const x = e.clientX - boxRect.left;
          const y = e.clientY - boxRect.top;
          
          const centerX = boxRect.width / 2;
          const centerY = boxRect.height / 2;
          
          const angleX = (y - centerY) / 20;
          const angleY = (centerX - x) / 20;
          
          box.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
      });
      
      box.addEventListener('mouseleave', function() {
          box.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      });
  });

  
  function getRandomColor() {
      const colors = ['#39FF14', '#ff00ff', '#00ffff', '#ffff00', '#ff6347'];
      return colors[Math.floor(Math.random() * colors.length)];
  }

  
  const footer = document.querySelector('.footer');
  const socialIcons = document.createElement('div');
  socialIcons.className = 'social-icons';
  socialIcons.innerHTML = `
      <a href="https:
      <a href="https:
      <a href="https:
      <a href="https:
  `;
  footer.insertBefore(socialIcons, footer.firstChild);
});



document.addEventListener('DOMContentLoaded', function() {
  
  const contactForm = document.querySelector('.contact-form form');
  
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          
          
          
          
          const overlay = document.createElement('div');
          overlay.className = 'submission-overlay';
          
          
          const content = document.createElement('div');
          content.className = 'overlay-content';
          
          
          const checkmark = document.createElement('div');
          checkmark.className = 'checkmark';
          checkmark.innerHTML = '<i class="fas fa-check-circle"></i>';
          
          
          const message = document.createElement('div');
          message.className = 'success-message';
          message.innerText = 'Form submitted successfully!';
          
          
          content.appendChild(checkmark);
          content.appendChild(message);
          overlay.appendChild(content);
          document.body.appendChild(overlay);
          
          
          const style = document.createElement('style');
          style.textContent = `
              .submission-overlay {
                  position: fixed;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background-color: rgba(0, 0, 0, 0.7);
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  z-index: 9999;
                  animation: fadeIn 0.3s ease-in-out;
              }
              
              .overlay-content {
                  text-align: center;
                  padding: 40px;
                  background-color: rgba(0, 0, 0, 0.8);
                  border-radius: 10px;
                  box-shadow: 0 0 30px rgba(57, 255, 20, 0.5);
                  animation: scaleIn 0.5s ease-in-out;
              }
              
              .checkmark {
                  font-size: 80px;
                  color: #4CAF50;
                  margin-bottom: 20px;
                  animation: pulse 2s infinite;
              }
              
              .success-message {
                  font-size: 24px;
                  color: #ffffff;
                  font-weight: bold;
              }
              
              @keyframes fadeIn {
                  from { opacity: 0; }
                  to { opacity: 1; }
              }
              
              @keyframes scaleIn {
                  from { transform: scale(0.8); opacity: 0; }
                  to { transform: scale(1); opacity: 1; }
              }
              
              @keyframes pulse {
                  0% { transform: scale(1); }
                  50% { transform: scale(1.1); text-shadow: 0 0 30px rgba(76, 175, 80, 0.8); }
                  100% { transform: scale(1); }
              }
          `;
          document.head.appendChild(style);
          
          
          
          
      });
  }
  
  
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (hamburgerMenu) {
      hamburgerMenu.addEventListener('click', function() {
          mobileNav.classList.toggle('active');
      });
  }
});


function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  
  window.addEventListener('resize', setVH);
  setVH();