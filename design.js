const addExpenseButton = document.getElementById('add-expense');
const expensesList = document.getElementById('expenses');
const totalAmountDisplay = document.getElementById('total-amount');

let totalAmount = 0;

addExpenseButton.addEventListener('click', function() {
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
    const expenseCategory = document.getElementById('expense-category').value;

    if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0) {
        const expenseItem = document.createElement('li');
        expenseItem.textContent = `${expenseName} - ${expenseCategory} - $${expenseAmount.toFixed(2)}`;
        expensesList.appendChild(expenseItem);

        totalAmount += expenseAmount;
        totalAmountDisplay.textContent = totalAmount.toFixed(2);

        // Clear input fields
        document.getElementById('expense-name').value = '';
        document.getElementById('expense-amount').value = '';
        document.getElementById('expense-category').value = 'food';
    } else {
        alert('Please enter valid expense details.');
    }
});
