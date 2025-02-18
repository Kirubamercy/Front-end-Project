const balance=document.getElementById('balance');
const income=document.getElementById('income');
const expense=document.getElementById('expense');
const text=document.getElementById('text');
const amount=document.getElementById('amount');
const addTransaction=document.getElementById('add-transaction');
const list=document.getElementById('list');

let transactions=JSON.parse(localStorage.getItem('transactions')) || []
 
function updateValues(){
    const amounts=transactions.map(t => t.amount);
    const total=amounts.reduce((acc,item) => acc + item,0).toFixed(2);
    balance.textContent=`Rs. ${total}`;
    const incomeTotal=amounts.filter(i => i > 0).reduce((acc,item) => acc+item, 0).toFixed(2);
    income.textContent=`Rs. ${incomeTotal}`;
    const expenseTotal=(amounts.filter(i => i < 0).reduce((acc,item) => acc+item, 0) * -1).toFixed(2);
    expense.textContent=`Rs. ${expenseTotal}`;
}

function updateLocalStorage(){
  localStorage.setItem('transactions',JSON.stringify(transactions));
}
function updateUI(){
  list.innerHTML = '';
  transactions.forEach(addTransactionDOM);
  updateValues();
}
function addTransactionDOM(transaction){
  let tr=document.createElement('tr');
  tr.innerHTML=`
    <td>${transaction.date}</td>
    <td>${transaction.text}</td>
    <td class="amount ${transaction.amount > 0 ? 'expense' : ''}" >Rs. ${transaction.amount.toFixed(2)}</td>
    <td><button onclick=removeTransaction(${transaction.id})>X</button></td>
  `;
  list.appendChild(tr);
}

function removeTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  updateLocalStorage();
  updateUI();
}

addTransaction.addEventListener('click',()=>{
  const textValue=text.value.trim();
  const amountValue=parseFloat(amount.value);

  if(!textValue || isNaN(amountValue)){
    alert("Pleade enter value description and amount");
    return;
  }

  const transaction={
    id: Date.now(),
    text:textValue,
    amount:amountValue,
    date:new Date().toISOString().split('T')[0]
  };
  transactions.push(transaction);
  updateLocalStorage();
  updateUI();
  text.value='';
  amount.value='';
});

function init(){
  updateUI();
}
 init();
