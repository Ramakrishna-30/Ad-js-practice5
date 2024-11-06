class ExpenseTracker {
    constructor() {
      this.expenses = JSON.parse(localStorage.getItem('expenses')) || [];
      this.render();
    }
  
    addExpense(description, amount) {
      if (!description || isNaN(amount)) {
        alert("Please provide valid description and amount.");
        return;
      }
  
      this.expenses.push({ description, amount: Number(amount) });
      this.save();
      this.render();
    }
  
    deleteExpense(index) {
      this.expenses.splice(index, 1);
      this.save();
      this.render();
    }
  
    save() {
      localStorage.setItem('expenses', JSON.stringify(this.expenses));
    }
  
    render() {
      const list = document.getElementById('expense-list');
      list.innerHTML = '';
      let total = 0;
  
      this.expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${expense.description} - $${expense.amount} <button onclick="tracker.deleteExpense(${index})">Delete</button>`;
        list.appendChild(li);
        total += expense.amount;
      });
  
      document.getElementById('total-amount').textContent = total;
    }
  }
  
  const tracker = new ExpenseTracker();
  
  function addExpense() {
    const description = document.getElementById('expense-description').value.trim();
    const amount = document.getElementById('expense-amount').value;
    tracker.addExpense(description, amount);
  }
  