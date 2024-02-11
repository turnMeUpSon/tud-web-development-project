// Array to store positions with quantity and price
let positions = [];


// Function to add a new position input field to the positions container
function addPosition() {
  // Get the positions container element  
  const positionsContainer = document.getElementById('positions-container');

  // Create a new div element for the position
  const positionDiv = document.createElement('div');
  positionDiv.className = 'position';

  // Create input fields for quantity and price
  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.placeholder = 'Quantity';

  const priceInput = document.createElement('input');
  priceInput.type = 'number';
  priceInput.placeholder = 'Price per Share';

  // Append input fields to the position div
  positionDiv.appendChild(quantityInput);
  positionDiv.appendChild(priceInput);

  // Append the position div to the positions container
  positionsContainer.appendChild(positionDiv);
}


//Function to calculate the average cost of all positions
function calculateAverage() {
  // Get the positions container element
  const positionsContainer = document.getElementById('positions-container');

  // Get all position divs within the positions container
  const positionDivs = positionsContainer.getElementsByClassName('position');

  // Convert the HTMLCollection to an array of objects with quantity and price
  positions = Array.from(positionDivs).map((positionDiv) => {
    const quantity = Number(positionDiv.querySelector('input:nth-child(1)').value);
    const price = Number(positionDiv.querySelector('input:nth-child(2)').value);

    return { quantity, price };
  });

  // Calculate total quantity and total cost of all positions
  const totalQuantity = positions.reduce((total, position) => total + position.quantity, 0);
  const totalCost = positions.reduce((total, position) => total + position.quantity * position.price, 0);

  // Calculate the average cost
  const averageCost = totalCost / totalQuantity;

  // Display the average cost on the webpage
  displayAverage(averageCost);
}


// Function to display the average cost on the webpage
function displayAverage(averageCost) {
  // Get the element where the average cost will be displayed
  const averageCostElement = document.getElementById('average-cost');

  // Update the text content of the element with the calculated average cost
  averageCostElement.textContent = `Average Cost: $${averageCost.toFixed(2)}`;
}
