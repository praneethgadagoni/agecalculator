document.getElementById('calculatorForm').addEventListener('submit', function(event)
 {
    event.preventDefault();
   
    const day = parseInt(document.getElementById('inputDay').value);
    const month = parseInt(document.getElementById('inputMonth').value);
    const year = parseInt(document.getElementById('inputYear').value);
    const errorMessage = document.getElementById('errorMessage');
    const ageOutput = document.getElementById('ageOutput');
    const calculatedAge = document.getElementById('calculatedAge');
   
    errorMessage.textContent = '';
    ageOutput.style.display = 'none';
 
    if (!day || !month || !year) {
        errorMessage.textContent = 'Please fill out all fields.';
        return;
    }
 
    if (day < 1 || day > 31) {
        errorMessage.textContent = 'Day must be between 1 and 31.';
        return;
    }
 
    if (month < 1 || month > 12) {
        errorMessage.textContent = 'Month must be between 1 and 12.';
        return;
    }
 
    const present = new Date();
    const birthDate = new Date(year, month - 1, day);
 
    if (birthDate > present) {
        errorMessage.textContent = 'Note:Date cannot be in the future.';
        return;
    }
 
    if (birthDate.getDate() !== day || birthDate.getMonth() + 1 !== month || birthDate.getFullYear() !== year) {
        errorMessage.textContent = 'Please Enter Valid Date.';
        return;
    }
 
    let Years = present.getFullYear() - birthDate.getFullYear();
    let Months = present.getMonth() - birthDate.getMonth();
    let Days = present.getDate() - birthDate.getDate();
 
    if (Days < 0) 
        {
        Months--;
        Days = Days+ new Date(present.getFullYear(), present.getMonth(), 0).getDate();  
       }
 
    if (Months < 0) 
        {
        Years--;
        Months = Months+ 12;
       }
 
    ageOutput.style.display = 'block';
    calculatedAge.textContent = `${Years} Years , ${Months} Months, ${Days} Days`;
});
