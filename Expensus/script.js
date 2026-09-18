const form = document.querySelector("#expense-form")

let expenseName = document.querySelector("#expense_name")
let expenseAmount = document.querySelector("#expense_amount")
let expenseList = document.querySelector(".expense-list")

const expenses = [];

form.addEventListener("submit", (event) => {
      event.preventDefault();
     
      let name = expenseName.value;
      const amount = Number(expenseAmount.value)
      
       if (name === "") {
            console.log("Expense name is required");
            return;
      }

      if (!Number.isFinite(amount) || amount <= 0) {
            console.log("Enter a valid amount");
            return;
      }

      const expense = {
            name: name,
            amount: amount,
            date : new Date()
      };

      expenses.push(expense)
      renderExpenses();
      form.reset();
      
      

      
      
});

function renderExpenses() {
      expenseList.innerHTML = "";
      expenses.forEach(
            function(expense) {
             const expenseItem = document.createElement("div");

             expenseItem.innerHTML = `
             <h3>${expense.name}</h3>
             <p>₹${expense.amount}</p>
            `;

            expenseList.appendChild(expenseItem);

            }
      );
}

