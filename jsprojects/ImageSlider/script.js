const images = [
    "https://picsum.photos/id/237/400/250",
    "https://picsum.photos/id/238/400/250",
    "https://picsum.photos/id/239/400/250",
    "https://picsum.photos/id/240/400/250"
  ];
  
  let currentIndex = 0;
  const sliderImage = document.getElementById('slider-image');
  
  function showImage(index) {
    sliderImage.style.opacity = 0;
    setTimeout(() => {
      sliderImage.src = images[index];
      sliderImage.style.opacity = 1;
    }, 200);
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  // Initialize
  showImage(currentIndex);
  