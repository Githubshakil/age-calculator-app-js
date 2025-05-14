let userInput = document.getElementById('date')// Get the input element/ Log the value of the input element;

userInput.max = new Date().toISOString().split('T')[0];// Set the max attribute to today's date
let result = document.getElementById('result')






function calculateAge(){                       // Function to calculate age
    let birthDate = new Date(userInput.value);      // Get the value of the input element and convert it to a Date object

    let d1 = birthDate.getDate();
    let m1 =birthDate.getMonth();         
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth();
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3=y2 -y1; // Calculate the difference in years

    if(m2 >= m1){
        m3 = m2 - m1; // Calculate the difference in months
    }else{
        y3--;
        m3 = 12 + m2 -m1; // Calculate the difference in months
    }

    if(d3 >= d1){
        d3 = d2 - d1; // Calculate the difference in days
    }else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if(m3 < 0 ){
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days Old `;
    
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}


        
        