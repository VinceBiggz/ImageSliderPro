const track = document.querySelector('.carousel-track');
const images = Array.from(track.querySelectorAll('img'));
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const dotsContainer = document.querySelector('.carousel-dots');
let currentImageIndex = 0;
let autoSlideInterval; // For the automatic sliding feature

// Function to create navigation dots
function createDots() {
  images.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.classList.add('carousel-dot');
    dot.addEventListener('click', () => {
      currentImageIndex = idx;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  });
  updateDots();
}

// Function to update the active dot
function updateDots() {
  const dots = dotsContainer.querySelectorAll('.carousel-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentImageIndex);
  });
}

// Function to update the carousel (move track and update dots)
function updateCarousel() {
  track.style.transform = `translateX(-${currentImageIndex * 100}%)`;
  updateDots();
}

// Event listeners for button clicks
prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateCarousel();
});

// Start the automatic sliding (adjust interval as needed)
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextButton.click(); // Simulate clicking the next button
  }, 3000); // Slide every 3 seconds
}
//Stop Autosliding
function stopAutoSlide(){
  clearInterval(autoSlideInterval)
}


createDots();
startAutoSlide(); 

track.addEventListener("mouseover",()=>{
  stopAutoSlide()
})
track.addEventListener("mouseout",()=>{
  startAutoSlide()
})

