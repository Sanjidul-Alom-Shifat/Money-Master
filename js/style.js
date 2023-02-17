// 1st choice
function fieldValidate(fieldId){
    const fieldElement = document.getElementById(fieldId);
    fieldElement.value = '';
    fieldElement.style.color = 'black';
    document.getElementById(fieldId).addEventListener('keyup',(e)=>{
        if(isNaN(e.target.value) || e.target.value < 0 ){
            alert('Enter a Positive Number !!!')
            e.target.value = '';
        }
    });
}



// 2nd Choice

// function inputField(elementId){
//     const inputFieldStringId = document.getElementById(elementId);
//     const inputFieldString = inputFieldStringId.value;
//     const inputField = parseFloat(inputFieldString);
//     if(inputFieldStringId.value < 0 || isNaN(inputFieldStringId.value)){
//         return alert('Please provide a valid number.')
//     }
//     return inputField;
// }

// function innerText(elementId, value){
//     const inputTextId = document.getElementById(elementId);
//     inputTextId.innerText = value;
// }

// function calculateBalance(){
//     const incomeField = inputField('income');
//     const foodField = inputField('food');
//     const rentField = inputField('rent');
//     const clothesField = inputField('clothes');
//     const othersField = inputField('others');

//     const calculateTotalExpenses = foodField + rentField + clothesField + othersField;
//     if(calculateTotalExpenses > incomeField){
//         return alert('Cut your coat according to your clothes.')
//     }
//     innerText('total-expensive', calculateTotalExpenses);

//     const calculateBalance = incomeField - calculateTotalExpenses;
//     return calculateBalance;
    
// }
