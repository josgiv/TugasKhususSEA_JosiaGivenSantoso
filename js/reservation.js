// Global Variables
let selectedSeats = [];
let takenSeats = []; // Array to store seats from transaction history

// Generate seat buttons
function generateSeatButtons() {
  const seatSelection = document.getElementById("seatSelection");

  for (let i = 1; i <= 64; i++) {
    const seatButton = document.createElement("button");
    seatButton.classList.add("btn", "btn-secondary", "m-1");
    seatButton.textContent = i;
    seatButton.disabled = takenSeats.includes(i);

    seatButton.addEventListener("click", function () {
      toggleSeatSelection(i);
    });

    seatSelection.appendChild(seatButton);
  }
}

// Toggle seat selection
function toggleSeatSelection(seatNumber) {
  const index = selectedSeats.indexOf(seatNumber);

  if (index > -1) {
    selectedSeats.splice(index, 1);
  } else {
    if (selectedSeats.length < 6) {
      selectedSeats.push(seatNumber);
    }
  }

  updateSeatButtons();
}

// Update seat buttons
function updateSeatButtons() {
  const seatButtons = document.querySelectorAll("#seatSelection button");

  seatButtons.forEach(seatButton => {
    const seatNumber = parseInt(seatButton.textContent);
    const isSelected = selectedSeats.includes(seatNumber);

    seatButton.classList.toggle("btn-primary", isSelected);
    seatButton.classList.toggle("btn-secondary", !isSelected);
  });
}

// Handle order ticket button click
function handleOrderTicketButtonClick() {
  if (selectedSeats.length === 0) {
    alert("Please select at least one seat.");
  } else if (selectedSeats.length > 6) {
    alert("You can select a maximum of 6 seats.");
  } else {
    // Redirect to payment page
    window.location.href = "payment.html";
  }
}

// Simulated transaction history data
const transactionHistory = [
  { seatNumber: 10 },
  { seatNumber: 25 },
  { seatNumber: 30 },
  { seatNumber: 48 },
];

// Get taken seats from transaction history
takenSeats = transactionHistory.map(transaction => transaction.seatNumber);

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  generateSeatButtons();

  const orderTicketBtn = document.getElementById("orderTicketBtn");
  orderTicketBtn.addEventListener("click", handleOrderTicketButtonClick);
});
