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
  

  function startCounting(element) {
    const targetValue = +element.getAttribute("data-value");
    const numberElement = element.querySelector(".count-number");
  
    if (element.getAttribute("data-counting") === "true") return; 
    element.setAttribute("data-counting", "true");
  
    let count = 0;
    const duration = 2000; 
    const increment = Math.ceil(targetValue / (duration / 20)); 
  
    const interval = setInterval(() => {
      count += increment;
      if (count >= targetValue) {
        numberElement.textContent = targetValue.toLocaleString();
        clearInterval(interval);
        element.setAttribute("data-counting", "false");
      } else {
        numberElement.textContent = count.toLocaleString();
      }
    }, 20); 
  }
  