// 1st Choice
fieldValidate('income');
fieldValidate('food');
fieldValidate('rent');
fieldValidate('clothes');
fieldValidate('others');
fieldValidate('save');


document.getElementById('calculate-btn').addEventListener('click', (e)=> {
    const incomeFieldElement = document.getElementById('income');
    const incomeFieldValue = parseFloat(incomeFieldElement.value);

    const foodFieldElement = document.getElementById('food');
    const foodFieldValue = parseFloat(foodFieldElement.value);

    const rentFieldElement = document.getElementById('rent');
    const rentFieldValue = parseFloat(rentFieldElement.value);

    const clothFieldElement = document.getElementById('clothes');
    const clothFieldValue = parseFloat(clothFieldElement.value);

    const othersFieldElement = document.getElementById('others');
    const othersFieldValue = parseFloat(othersFieldElement.value);

    const totalExpenseElement = document.getElementById('total-expenses');
    const balanceAfterExpense = document.getElementById('balance');


    // validation and calculation 

    if(isNaN(incomeFieldValue) || incomeFieldValue < 0){
        alert('Please provide actual positive income amount');
    } else if(isNaN(foodFieldValue) || foodFieldValue < 0){
        alert('Please provide actual positive food amount');
    } else if(isNaN(rentFieldValue) || rentFieldValue < 0){
        alert('Please provide actual positive rent amount');
    } else if(isNaN(clothFieldValue) || clothFieldValue < 0){
        alert('Please provide actual positive cloth amount');
    } else if(isNaN(othersFieldValue) || othersFieldValue < 0){
        alert('Please provide actual positive others amount');
    } else{
        const totalExpense = foodFieldValue + rentFieldValue + clothFieldValue + othersFieldValue;
        const balance = incomeFieldValue - totalExpense;
        
        if(totalExpense > incomeFieldValue){
            alert('Total Expenses cannot not bigger than your income!!');
            totalExpenseElement.innerText = 0;
            balanceAfterExpense.innerText = 0;
        } else{
            totalExpenseElement.innerText = totalExpense;
            balanceAfterExpense.innerText = balance;
        }      
    }
});

document.getElementById('save-btn').addEventListener('click',(e)=>{
    const incomeFieldElement = document.getElementById('income');
    const incomeFieldValue = parseFloat(incomeFieldElement.value);

    const saveFieldElement = document.getElementById('save');
    const saveFieldValue = saveFieldElement.value;

    const totalExpenseElement = document.getElementById('total-expenses');
    const totalExpenseElementInnerText = parseFloat(totalExpenseElement.innerText);

    const balanceAfterExpense = document.getElementById('balance');
    const balanceAfterExpenseInnerText = parseFloat(balanceAfterExpense.innerText);

    const savedElement = document.getElementById('saving-amount');
    const remainingBalanceElement = document.getElementById('remain');

    // validation and Calculation part

    if(isNaN(saveFieldValue) || saveFieldValue < 0){
        alert('Please Provide a positive number !');
    } else if(isNaN(totalExpenseElementInnerText) && isNaN(balanceAfterExpenseInnerText)){
        alert('There wast an error an expense and balance Element');
    } else{
        const CalculationSavingAmount = incomeFieldValue * (saveFieldValue / 100);
        if(CalculationSavingAmount > balanceAfterExpenseInnerText){
            alert('Saving is not possible because your total Expenses is more than your saving');
            savedElement.innerText = 0;
            remainingBalanceElement.innerText = balanceAfterExpenseInnerText;
        }else{
            const remainingBalance = balanceAfterExpenseInnerText - CalculationSavingAmount;

            savedElement.innerText = CalculationSavingAmount;
            remainingBalanceElement.innerText = remainingBalance;
        }
    }
})


// 2nd Choice

// document.getElementById('calculate-btn').addEventListener('click', function(){

//     innerText('balance', calculateBalance());
// })

// document.getElementById('save-btn').addEventListener('click',function(){
//     const saveField = inputField('save');
//     const calculateSaving = saveField * 0.01;
//     const incomeField = inputField('income');
//     const savingAmount = calculateSaving * incomeField;
//     innerText('saving-amount', savingAmount);
    
//     const remainingAmount =calculateBalance() - savingAmount;
//     if(remainingAmount < 0){
//         alert('If you want to save, Earn MORE!')
//         return;
//     }
//     innerText('remain', remainingAmount);
    
// })

// all field self validation