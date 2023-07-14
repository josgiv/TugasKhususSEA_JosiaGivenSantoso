// Global Variables
const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
const movie = JSON.parse(localStorage.getItem("selectedMovie"));

// Calculate total price
function calculateTotalPrice() {
  return movie.ticketPrice * selectedSeats.length;
}

// Set total price input value
function setTotalPrice() {
  const totalPriceInput = document.getElementById("totalPrice");
  const totalPrice = calculateTotalPrice();

  totalPriceInput.value = totalPrice;
}

// Handle payment form submission
function handlePaymentFormSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");

  const name = nameInput.value;
  const age = ageInput.value;

  // Check age
  if (age < movie.ageRating) {
    alert("Dibawah Umur");
    return;
  }

  // Perform payment logic here
  const totalPrice = calculateTotalPrice();
  const transaction = {
    movie: movie,
    seats: selectedSeats,
    totalPrice: totalPrice
  };

  // Save transaction to localStorage or send to server

  // Redirect to transaction history page
  window.location.href = "transaction.html";
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  setTotalPrice();

  const paymentForm = document.getElementById("paymentForm");
  paymentForm.addEventListener("submit", handlePaymentFormSubmit);
});
