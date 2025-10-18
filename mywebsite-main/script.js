// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
  }
});

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Typewriter effect
const typewriterElement = document.getElementById('typewriter');
const words = ['consultant', 'builder', 'scout', 'researcher', 'creator', 'birdwatcher'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeWriter() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    // Delete character
    typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 100;
  } else {
    // Type character
    typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 150;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    // Word is complete, wait before deleting
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    // Word is deleted, move to next word
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 500;
  }

  setTimeout(typeWriter, typingSpeed);
}

// Start the typewriter effect
typeWriter();

// Footer typewriter effect
const footerTypewriterElement = document.getElementById('footer-typewriter');
const footerWords = ['Concept', 'Execution', 'Impact'];
let footerWordIndex = 0;
let footerCharIndex = 0;
let footerIsDeleting = false;
let footerTypingSpeed = 200;

function footerTypeWriter() {
  const currentWord = footerWords[footerWordIndex];
  
  if (footerIsDeleting) {
    // Delete character
    footerTypewriterElement.textContent = currentWord.substring(0, footerCharIndex - 1);
    footerCharIndex--;
    footerTypingSpeed = 100;
  } else {
    // Type character
    footerTypewriterElement.textContent = currentWord.substring(0, footerCharIndex + 1);
    footerCharIndex++;
    footerTypingSpeed = 200;
  }

  if (!footerIsDeleting && footerCharIndex === currentWord.length) {
    // Word is complete, wait before deleting
    footerTypingSpeed = 2000;
    footerIsDeleting = true;
  } else if (footerIsDeleting && footerCharIndex === 0) {
    // Word is deleted, move to next word
    footerIsDeleting = false;
    footerWordIndex = (footerWordIndex + 1) % footerWords.length;
    footerTypingSpeed = 500;
  }

  setTimeout(footerTypeWriter, footerTypingSpeed);
}

// Start the footer typewriter effect
footerTypeWriter();
