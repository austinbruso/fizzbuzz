//  get values from the user. We need to get the fizz and buzz value;

function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // parse for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // check that the numbers are integers
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        // Call fizzy
        let fbArray = fizzBuzzB(fizzValue, buzzValue);
        // Call display
        displayData(fbArray);
    } else {
        alert("Put in a number.....");
    }
}

function fizzBuzz(fValue, bValue) {
    let returnArray = [];

    // Loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
         if (i % fValue == 0 && i % bValue == 0) {
             returnArray.push("Fizz Buzz");
         } else if (i % fValue == 0){
            returnArray.push("Fizz");
         } else if (i % bValue == 0){
            returnArray.push("Buzz");
         } else {
            returnArray.push(i);
         }
    }

    return returnArray;
}


function fizzBuzzB(fizzValue, buzzValue) {
    let returnArray = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i < 100; i++) {
        
        Fizz = i % fizzValue == 0;
        Buzz = i % buzzValue == 0;

        switch(true) {
            case Fizz && Buzz: {
                returnArray.push("FizzBuzz");;
                break;
            }

            case Fizz: {
                returnArray.push("Fizz");
                break;
            }

            case Buzz: {
                returnArray.push("Buzz");
                break;
            }
            default: {
                returnArray.push(i);
                break;
            }
        }
    }
    
    return returnArray;
}

function fizzBuzzC(fizzValue, buzzValue) {
    let returnArray = [];

    for (let i = 1; index <= 100; i++) {
        let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '') || i );  
    }
    return returnArray
}

// Loop over the array and create a tablerow for each item
function displayData(fbArray){

    // get the table body element from the page
    let tableBody = document.getElementById("results");

    // get the template row
    let templateRow = document.getElementById("fbTemplate");

    // clear table first
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];
        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index+1];
        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index+2];
        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index+3];
        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index+4];

        tableBody.appendChild(tableRow);

    }


}