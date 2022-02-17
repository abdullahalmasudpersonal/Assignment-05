// handle calculation button
document.getElementById('calculate-button').addEventListener('click', function () {
    //get the monthly income
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    const monthlyIncomeInput = parseFloat(incomeInputText);
    //console.log('income',monthlyIncomeInput);

    // get monthly Food expenses
    const foodExpensesInput = document.getElementById('food-expenses');
    const foodExpensesInputText = foodExpensesInput.value;
    const monthlyFoodExpensesInput = parseFloat(foodExpensesInputText);
    //console.log('food',monthlyFoodExpensesInput);

    // get monthly rent expenses
    const rentExpensesInput = document.getElementById('rent-expenses');
    const rentExpensesInputText = rentExpensesInput.value;
    const monthlyRentExpensesInput = parseFloat(rentExpensesInputText);
    //console.log('rent', monthlyRentExpensesInput);

    //get monthly colthes expenses
    const clothesExpensesInput = document.getElementById('clothes-expenses');
    const clothesExpensesInputText = clothesExpensesInput.value;
    const monthlyClothesExpensesInput = parseFloat(clothesExpensesInputText);
    //console.log('clothes', monthlyClothesExpensesInput);


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
    //get the monthly income
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    const monthlyIncomeInput = parseFloat(incomeInputText);

    //get the save amount parsent
    const saveInput = document.getElementById('save-input');
    const saveAmountText = saveInput.value;
    const saveAmount = parseFloat(saveAmountText);
    const saveAmountParsent = (monthlyIncomeInput/100) * saveAmount;
    

})
