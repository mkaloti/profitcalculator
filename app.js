// Listen for submit
document.getElementById("l-form").addEventListener("submit", function (e) {
  // Hide results
  document.getElementById("results").style.display = "none";

  // Show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  // UI Vars
  document.getElementById("loading").style.display = "none";
  document.getElementById("results").style.display = "block";
  const amount = document.querySelector("#amount"),
    expense = document.querySelector("#expense"),
    result = document.querySelector("#result"),
    total = parseFloat(amount.value),
    expenses = parseFloat(expense.value);

  if (isFinite(total)) {
    result.value = (total - expenses).toFixed(2);
  } else {
    showError("Please, Add a finite amount");
  }

  function showError(msg) {
    document.getElementById("loading").style.display = "none";
    document.getElementById("results").style.display = "none";
    const card = document.querySelector(".card"),
      heading = document.querySelector(".heading");

    const div = document.createElement("div");
    div.className = "alert alert-danger";
    div.textContent = "Please, enter a finite number";
    card.insertBefore(div, heading);
    setTimeout(clearError, 2000);
  }

  function clearError() {
    document.querySelector(".alert").remove();
  }
}
