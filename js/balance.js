// Handle top up form submission
function handleTopUpFormSubmit(event) {
  event.preventDefault();

  const topUpAmountInput = document.getElementById("topUpAmount");
  const topUpAmount = parseInt(topUpAmountInput.value);

  // Perform top up logic here
  console.log("Top Up Amount:", topUpAmount);

  // Reset top up amount input
  topUpAmountInput.value = "";
}

// Handle withdraw form submission
function handleWithdrawFormSubmit(event) {
  event.preventDefault();

  const withdrawAmountInput = document.getElementById("withdrawAmount");
  const withdrawAmount = parseInt(withdrawAmountInput.value);

  // Check minimum withdraw amount
  if (withdrawAmount < 500000) {
    alert("Minimum withdrawal amount is 500000.");
    return;
  }

  // Perform withdraw logic here
  console.log("Withdraw Amount:", withdrawAmount);

  // Reset withdraw amount input
  withdrawAmountInput.value = "";
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  const topUpForm = document.getElementById("topUpForm");
  const withdrawForm = document.getElementById("withdrawForm");

  topUpForm.addEventListener("submit", handleTopUpFormSubmit);
  withdrawForm.addEventListener("submit", handleWithdrawFormSubmit);
});
