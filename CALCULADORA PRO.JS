let getFirstNumber;
let getSecondNumber = '';
let getUserName = '';
let getOperationList = [];


getUserName = prompt('Introduce tu nombre: ')
alert(`¡Bienvenido a la CODER Calculadora, ${getUserName.toUpperCase()}!`);


const getCalculator = () =>{
    getFirstNumber = parseFloat(prompt('Ingrese el primer número:  '));
    if (isNaN(getFirstNumber) || getFirstNumber === '') {
        alert('Por favor, introduce un número válido');
        getCalculator();
        return;
    };
    getOperationList.push(getFirstNumber);
    
    
    getSecondNumber = prompt('Ingrese otro número o pulse "INTRO" para calcular SÓLO la raiz cuadrada del primer número:  ');
    if (getSecondNumber === '') {
        getSquareRoot();
        return;
    };
    
    getSecondNumber = parseFloat(getSecondNumber);
    if (isNaN(getSecondNumber)) {
        alert('Por favor, introduce un número válido');
        getCalculator();
        return;
    };
    getOperationList.push(getSecondNumber);

    
    alert('Recalculando operaciones... ¡Imprimiendo soluciones!')
    
    console.log('                  🧮   CALCULADORA   🧮                       ');
    console.log('- - - - - - - - - - - -  - -');
    getSum();
    console.log('- - - - - - - - - - - -  - -');
    getRest();
    console.log('- - - - - - - - - - - -  - -');
    getMultiplier();
    console.log('- - - - - - - - - - - -  - -');
    getDivision();
    console.log('- - - - - - - - - - - -  - -');
    
    getAnotherOperation();
};


const getSquareRoot = () => {
    let doTheSquareRoot = Math.sqrt(getFirstNumber);
    console.log('                  🧮   CALCULADORA   🧮                       ');
    console.log('- - - - - - - - - - - -  - -');
    console.log(`La RAIZ CUADRADA del número introducido es: ${doTheSquareRoot.toFixed(3)}`);
    console.log(`Lista: ${getOperationList.join('|')}`);
    getAnotherOperation();
};


const getSum = () => {
    let getSumOperation = getFirstNumber + getSecondNumber;
    console.log(`La suma es: ${getSumOperation.toFixed(3)}`);
    console.log(`Lista: ${getOperationList.join('|')}`);
    let totalSum = 0;
    for (let number of getOperationList) {
        totalSum += parseFloat(number);
    };
    console.log(`TOTAL Introducidos: ${totalSum.toFixed(3)}`);
};


const getRest = () => {
    let getRestOperation = getFirstNumber - getSecondNumber;
    console.log(`La resta es: ${getRestOperation.toFixed(3)}`);
    console.log(`Lista: ${getOperationList.join('|')}`);
    let totalRest = 0;
    for (let number of getOperationList) {
        totalRest -= parseFloat(number);
    };
    console.log(`TOTAL Introducidos: ${totalRest.toFixed(3)}`);
};


const getMultiplier = () => {
    let getMultiplierOperation = getFirstNumber * getSecondNumber;
    console.log(`La multiplicación es: ${getMultiplierOperation.toFixed(3)}`);
    console.log(`Lista: ${getOperationList.join('|')}`);
    let totalMultiplication = 0;
    for (let number of getOperationList) {
        totalMultiplication *= parseFloat(number);
    };
    console.log(`TOTAL Introducidos: ${totalMultiplication.toFixed(3)}`);
};


const getDivision = () => {
    let getDivisionOperation = getFirstNumber / getSecondNumber;
    console.log(`La división es: ${getDivisionOperation.toFixed(3)}`);
    console.log(`Lista: ${getOperationList.join('|')}`);
    let totalDivision = 0;
    for (let number of getOperationList) {
        totalDivision /= parseFloat(number);
    };
    console.log(`TOTAL Introducidos: ${totalDivision.toFixed(3)}`);
};


const getAnotherOperation = () => {
    let isAnotherOperation = confirm('Pulse ACEPTAR para más operaciones o CANCELAR para salir')
    if (isAnotherOperation === true) {
        getCalculator();
    } else {
        isExit();
    };
};


const isExit = () => {
    alert(`¡Hasta la próxima, ${getUserName.toUpperCase()}! 👋`);
};



getCalculator();