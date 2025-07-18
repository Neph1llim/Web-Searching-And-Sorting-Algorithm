console.log('Hello World');
let array = [];
//let input = document.getElementById("numbers").value;
let input = 10;

// HTML Functions
function nav(){
    //change the size of nav bar on click

}

// General Functions
function GenerateNumbers(array, input){
    for(let i = 0; i < input; i++){
        array[i] = Math.floor(Math.random() * 100) + 1;
    }
}

function DisplayArray(array, size){
    for(let i = 0; i < size; i++){
        console.log(array[i]);
    }
}

GenerateNumbers(array, input);
DisplayArray(array, input);
BubbleSort(array, input);

// Sorting Functions
function BubbleSort(array, size){
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size - i; j++){
            if(array[j] >= array[j + 1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

