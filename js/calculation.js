// handle calculation button
document.getElementById('calculate-button').addEventListener('click', function () {
    //get the monthly income
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    const monthlyIncomeInput = parseFloat(incomeInputText);

    // get monthly Food expenses
    const foodExpensesInput = document.getElementById('food-expenses');
    const foodExpensesInputText = foodExpensesInput.value;
    const monthlyFoodExpensesInput = parseFloat(foodExpensesInputText);

    // get monthly rent expenses
    const rentExpensesInput = document.getElementById('rent-expenses');
    const rentExpensesInputText = rentExpensesInput.value;
    const monthlyRentExpensesInput = parseFloat(rentExpensesInputText);

    //get monthly colthes expenses
    const clothesExpensesInput = document.getElementById('clothes-expenses');
    const clothesExpensesInputText = clothesExpensesInput.value;
    const monthlyClothesExpensesInput = parseFloat(clothesExpensesInputText);

    // total monthly expenses
    const totalExpenses = document.getElementById('total-expeses');
    const oldExpensesText = totalExpenses.innerText;
    const oldExpensesAmount = parseFloat(oldExpensesText);
    const totalExpensesAmount = oldExpensesAmount + monthlyFoodExpensesInput + monthlyRentExpensesInput + monthlyClothesExpensesInput;
    totalExpenses.innerText = totalExpensesAmount;

    // update balance
    const balance = document.getElementById('balance');
    const oldBalanceText = balance.innerText;
    const oldBalance = parseFloat(oldBalanceText);
    const newBalance = monthlyIncomeInput - totalExpensesAmount;
    const totalNewBalance = oldBalance + newBalance;
    balance.innerText = totalNewBalance;

    // clear deposit input field
    incomeInput.value = '';
    foodExpensesInput.value = '';
    rentExpensesInput.value = '';
    clothesExpensesInput.value = '';
})

// handle save button
document.getElementById('save-button').addEventListener('click', function () {
    // get the total experses 
    const totalExpenses = document.getElementById('total-expeses');
    const totalExpensesText = totalExpenses.innerText;
    const oldTotalExpenses = parseFloat(totalExpensesText);

    // get the total balance 
    const expensesAfterBalance = document.getElementById('balance');
    const expensesAfterBalanceText = expensesAfterBalance.innerText;
    const oldExpenceAfterBalance = parseFloat(expensesAfterBalanceText);

    // get the total monthly salary
    const totalMonthlySalary = oldTotalExpenses + oldExpenceAfterBalance;

    //get the save amount parsent
    const saveInput = document.getElementById('save-input');
    const saveAmountText = saveInput.value;
    const saveAmount = parseFloat(saveAmountText);

    // get the save amount 
    const savingAmount = document.getElementById('saving-amount');
    const oldSavingInputText = savingAmount.innerText;
    const oldSavingAmount = parseFloat(oldSavingInputText);
    const saveAmountParsent = (totalMonthlySalary / 100) * saveAmount;
    const newSavingAmount = oldSavingAmount + saveAmountParsent;
    savingAmount.innerText = newSavingAmount;

    // get remaing balance
    const newRemaingBalance = oldExpenceAfterBalance - newSavingAmount;

    const remaingBalance = document.getElementById('remaing-balance');
    const oldRemaingBalanceText = remaingBalance.innerText;
    const oldRemaingBalance = parseFloat(oldRemaingBalanceText);
    const leatestRemaingBalance = newRemaingBalance + oldRemaingBalance;
    remaingBalance.innerText = leatestRemaingBalance;

    // clear deposit input field
    saveInput.value = '';

})
