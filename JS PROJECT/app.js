let balanceAmount = 0;
let totalIncome = 0;
let totalExpense = 0;
const balanceElement = document.getElementById('balanceAmount');
const totalIncomeElement = document.getElementById('totalIncome');
const totalExpenseElement = document.getElementById('totalExpense');
const transactionList = document.getElementById('transactionList');

// Event Listener for Adding Transaction
document.getElementById('addTransactionBtn').addEventListener('click', function () {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('transactionType').value;

    if (description && !isNaN(amount)) {
        addTransaction(description, amount, type);
    } else {
        alert('Please provide valid inputs.');
    }
});

// Function to Add a New Transaction
function addTransaction(description, amount, type) {
    const transactionItem = document.createElement('div');
    transactionItem.classList.add('transaction-item');
    transactionItem.classList.add(type); // Adds 'income' or 'expense' class

    // Add transaction details to the item
    transactionItem.innerHTML = `
        <span>${description}</span>
        <span>Rs ${amount.toFixed(2)}</span>
    `;
    transactionList.appendChild(transactionItem);

    // Update balance and summary
    if (type === 'income') {
        totalIncome += amount;
        balanceAmount += amount;
    } else {
        totalExpense += amount;
        balanceAmount -= amount;
    }

    updateDisplay();
}

// Function to Update the Balance and Summaries
function updateDisplay() {
    balanceElement.textContent = balanceAmount.toFixed(2);
    totalIncomeElement.textContent = totalIncome.toFixed(2);
    totalExpenseElement.textContent = totalExpense.toFixed(2);
}
