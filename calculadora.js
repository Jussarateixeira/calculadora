let getedResult = false;
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('input[type=button]');

buttons.forEach((myButton) => {

    myButton.onclick = () => {

        if (myButton.value == 'AC') {
            display.value = '';
        } else if (myButton.value == 'DE') {
            let myValue = display.value;
            display.value = myValue.toString().slice(0, -1);
        } else if (myButton.value == '=' && display.value == '') {
            alert('Você não digitou nenhum número!');
        } else if (myButton.value == '=') {
            display.value = eval(display.value);
        } else {
            display.value += myButton.value;
        }
        if (myButton.value == '=') {
           getedResult = true; 
        }
        else if(myButton.value != '=' && getedResult == true && myButton.value != ' '){
            display.value = myButton.value;
            getedResult = false;
        }
    }


})

