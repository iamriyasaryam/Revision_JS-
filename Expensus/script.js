const form = document.querySelector("#expense-form")

let expenseName = document.querySelector("#expense_name")
let expenseAmount = document.querySelector("#expense_amount")

form.addEventListener("submit", (event) => {
      event.preventDefault();
     
      console.log(expenseName.value);
      console.log(expenseAmount.value);
      console.log(typeof(expenseAmount));

      const amount = Number(expenseAmount.value)
      console.log(amount);
      console.log(typeof(amount));
      
      
      
});

