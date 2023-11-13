const formTransaction = document.getElementById("form-transaction");
const balanceShowed = document.getElementById("balance");
const history = document.getElementById("history");

const incomeShowed = document.getElementById("showed-income");
const expenseShowed = document.getElementById("showed-expense");

let income = 0;
let expense = 0;
let balance = income + expense;

const historyBalance = [];

const thousands = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const showBalance = () => {
  if (historyBalance.length > 0) {
    let tmpHistory = "";
    let tmpExpense = 0;
    let tmpIncome = 0;

    historyBalance.forEach((el) => {
      let isIncome = true;
      if (el.amount < 0) {
        tmpExpense += el.amount;
        isIncome = false;
      } else {
        tmpIncome += el.amount;
      }

      tmpHistory += `
      <div class="flex justify-between h-8 items-center text-xl md:text-2xl">
      <h5 class="font-thin">${el.detail}</h5>
      <p class="border-r-4 border-${isIncome ? "green" : "red"}-600 px-2 h-full">${el.amount}</p>
      </div>`;
    });

    income = tmpIncome;
    expense = tmpExpense;

    balance = income + expense;
    history.innerHTML = tmpHistory;
  }

  balanceShowed.innerHTML = `Rp ${thousands(balance)}`;
  incomeShowed.innerHTML = `+Rp ${thousands(income)}`;
  expenseShowed.innerHTML = `-Rp ${thousands(expense - 2 * expense)}`;
};

showBalance();

formTransaction.addEventListener("submit", (e) => {
  e.preventDefault();

  let detail = formTransaction.elements.detail.value;
  let amount = formTransaction.elements.amount.value;

  historyBalance.push({ detail, amount: Number(amount) });
  showBalance();

  formTransaction.reset();
});
