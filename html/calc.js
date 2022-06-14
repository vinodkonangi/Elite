function bindData(data) {
    let resultValue = document.getElementById('txtResult').value;;

    if (data === 'delete') {
        let newValue = resultValue.substring(0, resultValue.length - 1);
        document.getElementById('txtResult').value = newValue;
    } else {
        document.getElementById('txtResult').value += data;
    }
}

function clearResult() {
    document.getElementById('txtResult').value = "";
}

function Equals() {
    let resultValue = document.getElementById('txtResult').value;
    // document.getElementById('txtResult').value = eval(resultValue);
    let operand1 = '';
    let operand2 = '';
    let operator = '';
    let isAfterOperator = false;


    // 11+22-3*5
    for (const c of resultValue) {

        if (isNaN(c) === false && isAfterOperator === false) {
            operand1 += c;
        } else if (isNaN(c) === false && isAfterOperator === true) {
            operand2 += c;
        }
        else {
            if (operand1 !== '' && operand2 !== '' && operator !== '') {
                operand1 = Evaluate(operand1, operator, operand2);
                document.getElementById('txtResult').value = operand1;
            }
            operator = c;
            isAfterOperator = true;
        }
    }
    operand1 = Evaluate(operand1, operator, operand2);
    document.getElementById('txtResult').value = operand1;
}

function Evaluate(o1, operator, o2) {
    switch (operator) {
        case '+':
            return parseInt(o1) + parseInt(o2);
        case '-':
            return parseInt(o1) - parseInt(o2);
        case '*':
            return parseInt(o1) * parseInt(o2);
    }
}

