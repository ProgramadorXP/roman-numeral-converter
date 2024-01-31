//Assigning of variables in JavaScript
const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const numerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX', 
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
};

//FUNCTION TO CONVERT NUMBER TO ROMAN
const convertNumberToRoman = (number) => {
    /*FUNCION QUE SE ENCARGARA DE HACER TODA LA
    LOGICA DEL PROGRAMA*/
    /*let valor = "";
    let count = 0;
    if(numerals[number]) {
        return result(numerals[number], true);
    } else {
        while(count < number) {
            if(parseInt(Object.keys(numerals)[count]) < number) {
                valor += Object.values(numerals)[count]; 
            } else {
                console.log('')
            }   
        }
        return result(numerals[number], true);
    }*/
    //DEVUELVE EL VALOR NUMERICO DE LA LLAVE
    console.log(Object.keys(numerals)[0]);
};
//Showing errors in base to the number given in Input
const inputText = () => {
    if(number.value === "") {
        return result('Please enter a valid number.', false);
    } else if (number.value <= 0) {
        return result('Please enter a number greater than or equal to 1.', false);
    } else if (number.value > 3999) {
        return result('Please enter a number less than or equal to 3999.', false)
    } else {
        output.classList.add('hidden');
        return convertNumberToRoman(parseInt(number.value));
    }
};
//FUNCTION THAT INSERT THE MESSAGE IN DOM
const result = (text, type) => {
    if(type) {
        output.style.border = "3px solid #fff";
        output.style.backgroundColor = "#54545f";
        output.innerHTML = `
        <p class="output__text">${text}</p>
    `;
        output.classList.remove('hidden');
        number.value = "";
    } else {
        output.style.border = "3px solid rgb(138, 2, 2)";
        output.style.backgroundColor = "rgb(248, 134, 134)";
        output.innerHTML = `
        <p class="output__text error">${text}</p>
        `;
        output.classList.remove('hidden');
    }
};
//FUNCTION THAT EXECUTE THE BUTTON 
handleButton = (e) => {
    e.preventDefault();
    inputText();
};
convertBtn.addEventListener('click', handleButton);
