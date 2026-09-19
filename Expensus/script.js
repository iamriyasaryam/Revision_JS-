const form = document.querySelector("#expense-form")

let expenseName = document.querySelector("#expense_name")
let expenseAmount = document.querySelector("#expense_amount")
let expenseList = document.querySelector(".expense-list")

let expenses = [];
let editingId = null;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = expenseName.value;
    const amount = Number(expenseAmount.value);

    if (name === "") {
        console.log("Expense name is required");
        return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
        console.log("Enter a valid amount");
        return;
    }

    const expense = {
        id: Date.now(),
        name: name,
        amount: amount,
        date: new Date()
    };

    if (editingId !== null) {
        const existingExpense = expenses.find(function(expense) {
            return expense.id === editingId;
        });

        existingExpense.name = name;
        existingExpense.amount = amount;

        editingId = null;
        form.reset();
        renderExpenses();

        return;
    }

    expenses.push(expense);
    form.reset();
    renderExpenses();
});

function renderExpenses() {
      expenseList.innerHTML = "";
      expenses.forEach(
            function (expense) {
                  const expenseItem = document.createElement("div");

                  expenseItem.innerHTML = `
             
             <h3>${expense.name}</h3>
             <p>₹${expense.amount}</p>
             <p>${expense.date.toLocaleDateString()}</p>
             <button class="edit-btn" data-id="${expense.id}">Edit</button>
             <button class="del-btn" data-id="${expense.id}">Delete Button</button>`;

                  expenseList.appendChild(expenseItem);

                  const editButton = expenseItem.querySelector(".edit-btn")
                  const deleteButton = expenseItem.querySelector(".del-btn");

                  editButton.addEventListener("click", function() {
                        const id = Number(editButton.dataset.id);
                        editingId = id;
                        const expense = expenses.find(function(expense) {
                              return expense.id === id;
                        });
                          expenseName.value = expense.name;
                          expenseAmount.value = expense.amount; 
                  })

                  deleteButton.addEventListener("click", function () {
                        const id = Number(deleteButton.dataset.id);
                        expenses = expenses.filter(function(expense) {
                              return expense.id !== id;
                        });
                        renderExpenses();
                  }
                  );
            }
      );
}


