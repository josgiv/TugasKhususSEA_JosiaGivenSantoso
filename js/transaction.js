// Simulated transaction history data
const transactionHistory = [
    {
      title: "Movie 1",
      description: "Description of Movie 1",
      price: 10000,
      seatNumber: 10
    },
    {
      title: "Movie 2",
      description: "Description of Movie 2",
      price: 10000,
      seatNumber: 25
    },
    {
      title: "Movie 3",
      description: "Description of Movie 3",
      price: 10000,
      seatNumber: 30
    },
    {
      title: "Movie 4",
      description: "Description of Movie 4",
      price: 10000,
      seatNumber: 48
    }
  ];
  
  // Generate transaction history list
  function generateTransactionHistoryList() {
    const transactionList = document.getElementById("transactionList");
  
    transactionHistory.forEach(transaction => {
      const transactionCard = document.createElement("div");
      transactionCard.classList.add("card", "mb-3");
      transactionCard.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${transaction.title}</h5>
          <p class="card-text">${transaction.description}</p>
          <p class="card-text">Price: ${transaction.price}</p>
          <p class="card-text">Seat Number: ${transaction.seatNumber}</p>
        </div>
      `;
      transactionList.appendChild(transactionCard);
    });
  }
  
  // Initialize the page
  document.addEventListener("DOMContentLoaded", function () {
    generateTransactionHistoryList();
  });
  