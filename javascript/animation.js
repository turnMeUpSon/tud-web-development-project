const canvas = document.getElementById('stockAnimationCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size to match the viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define stock image
const stockImage = new Image();
stockImage.src = '/images/image1.jpg';  // Provide the path to your stock icon image

// Define initial position
let x = 50;
let y = 50;

function animate() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw stock image at current position
  ctx.drawImage(stockImage, x, y, 50, 50);  // Adjust size as needed

  // Update position for next frame
  x += 1;
  y = 50 + 30 * Math.sin(x / 30);  // Add a sinusoidal motion for a dynamic effect

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Start the animation
animate();
