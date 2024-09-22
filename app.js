let expenses = [];
let total = 0;
count=3;
function addExpense() {
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    const category = document.getElementById('expense-category').value;

    if (name === '' || isNaN(amount)) {
        alert('Please fill in all fields');
        return;
    }

    const expense = {
        name,
        amount,
        category,
    };

    expenses.push(expense);
    total += amount;

    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';

    updateExpenseList();
    updateTotal();
}

function updateExpenseList() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    expenses.forEach((expense, index) => {
        const expenseItem = document.createElement('div');
        expenseItem.className = 'expense-item';
        expenseItem.innerHTML = `
            <span>${expense.name} - ${expense.category} - $${expense.amount}</span>
            <button onclick="removeExpense(${index})">Delete</button>
        `;

        expenseList.appendChild(expenseItem);
    });
}

function removeExpense(index) {
    total -= expenses[index].amount;
    expenses.splice(index, 1);

    updateExpenseList();
    updateTotal();
}

function updateTotal() {
    document.getElementById('total-expense').textContent = `$${total}`;
}
let expenses = [];
let total = 0;
count=3;
function addExpense() {
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    const category = document.getElementById('expense-category').value;

    if (name === '' || isNaN(amount)) {
        alert('Please fill in all fields');
        return;
    }

    const expense = {
        name,
        amount,
        category,
    };

    expenses.push(expense);
    total += amount;

    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';

    updateExpenseList();
    updateTotal();
}

function updateExpenseList() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    expenses.forEach((expense, index) => {
        const expenseItem = document.createElement('div');
        expenseItem.className = 'expense-item';
        expenseItem.innerHTML = `
            <span>${expense.name} - ${expense.category} - $${expense.amount}</span>
            <button onclick="removeExpense(${index})">Delete</button>
        `;

        expenseList.appendChild(expenseItem);
    });
}

function removeExpense(index) {
    total -= expenses[index].amount;
    expenses.splice(index, 1);

    updateExpenseList();
    updateTotal();
}

function updateTotal() {
    document.getElementById('total-expense').textContent = `$${total}`;
}
