document.addEventListener('DOMContentLoaded', () => {
    
    const navLinks = document.querySelectorAll('.nav-list a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
                    behavior: 'smooth'
                });

               
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-list a');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

   
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
                    behavior: 'smooth'
                });

                
                if (mobileNav && mobileNav.style.display === 'block') {
                    mobileNav.style.display = 'none';
                }
            }
        });
    });

    
    if (hamburgerMenu && mobileNav) {
        hamburgerMenu.addEventListener('click', () => {
            mobileNav.style.display = (mobileNav.style.display === 'block') ? 'none' : 'block';
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const skillBoxes = document.querySelectorAll('.skill-box');

    skillBoxes.forEach(box => {
        const proficiency = box.dataset.proficiency;
        const percentage = parseInt(proficiency);
        const progressElement = document.createElement('div');
        progressElement.classList.add('skill-circle-progress');
        const backgroundElement = document.createElement('div');
        backgroundElement.classList.add('skill-circle-background');
        const circleElement = document.createElement('div');
        circleElement.classList.add('skill-circle');
        circleElement.appendChild(backgroundElement);
        circleElement.appendChild(progressElement);
        box.appendChild(circleElement);

        const percentageText = document.createElement('span');
        percentageText.classList.add('skill-percentage');
        percentageText.textContent = proficiency;
        box.appendChild(percentageText);

        box.addEventListener('mouseover', () => {
            const rotation = (percentage / 100) * 360;
            progressElement.style.transform = `rotate(${rotation - 90}deg)`;
        });

        box.addEventListener('mouseout', () => {
            progressElement.style.transform = `rotate(-90deg)`;
        });
    });

   
});