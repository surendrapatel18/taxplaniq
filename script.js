const toggleOpen = document.querySelector('.toggle-open');
const toggleClose = document.querySelector('.toggle-close');
const mobileMenu = document.querySelector('.mobile-menu');

toggleOpen.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    toggleOpen.classList.add('hidden');
    toggleClose.classList.remove('hidden');
});

toggleClose.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    toggleClose.classList.add('hidden');
    toggleOpen.classList.remove('hidden');
});

// Close the mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');


mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        toggleClose.classList.add('hidden');
        toggleOpen.classList.remove('hidden');
    });
});


document.getElementById("year").textContent = new Date().getFullYear();

function toggleVideo(videoUrl) {
    const videoModal = document.getElementById('videoModal');
    const videoIframe = videoModal.querySelector('iframe');
  
   
    videoIframe.src = videoUrl;
  
   
    videoModal.classList.remove('video-hidden');
  }
  
  function closeVideo() {
    const videoModal = document.getElementById('videoModal');
    const videoIframe = videoModal.querySelector('iframe');
  
    
    videoModal.classList.add('video-hidden');
    videoIframe.src = ''; 
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count-text-col');

    const animateCounter = (element) => {
        const countNumber = element.querySelector('.count-number');
        const targetValue = parseInt(element.getAttribute('data-value'), 10);
        let currentValue = 0;
        let increment = Math.ceil(targetValue / 100); // Adjust speed here


        const updateCounter = () => {
            currentValue += increment;
            if (currentValue > targetValue) currentValue = targetValue;
            countNumber.textContent = currentValue;

            if (currentValue < targetValue) {
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach((counter) => observer.observe(counter));
});

  