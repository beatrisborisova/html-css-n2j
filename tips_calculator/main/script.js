const percentBtns = document.querySelector('.btns-container');
percentBtns.addEventListener('click', percentsBtnsFunc);
const numberOfPeople = document.querySelector('.people-input')
numberOfPeople.addEventListener('click', peopleCount)

const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', resetCalc);

const bill = document.querySelector('.bill-input');
const customBtn = document.querySelector('input[placeholder = "Custom"]');
customBtn.addEventListener('change', customBtnFunc);

let currentBtn;
let percent;

let isTouched = false;
let isCustomPercentSet = false;

document.onclick = () => {

    checkForMissingFields();

    if (isTouched == true) {
        if (numberOfPeople != document.activeElement) {
            if (!Number.isInteger(Number(numberOfPeople.value)) || numberOfPeople.value <= 0 || numberOfPeople.value == '') {
                if (!Number.isInteger(Number(numberOfPeople.value))) {
                    document.querySelector('.not-zero').textContent = 'Must be a whole number'
                }
                document.querySelector('.not-zero').style.display = 'block'
                document.querySelector('.sign-people').style.border = '2px solid red'
            } else {
                document.querySelector('.not-zero').textContent = 'Can\'t be zero'
                document.querySelector('.not-zero').style.display = 'none'
                document.querySelector('.sign-people').style.border = '2px solid transparent'
                isTouched = false;
            }
        }
    }
}

function customBtnFunc(e) {

    currentBtn.style.backgroundColor = 'hsl(189, 41%, 97%)';
    currentBtn.style.border = '2px solid hsl(172, 67%, 45%)';
    currentBtn.style.color = 'hsl(183, 100%, 15%)';

    if (e && e != undefined) {

        currentBtn = e.target;

        percent = e.target.value;
        if (percent) {
            isCustomPercentSet = true;
        }
    }

    if (isCustomPercentSet) {
        checkForMissingFields();
    }

    return;

}

function percentsBtnsFunc(e) {

    if (e.target.tagName == 'INPUT') {
        currentBtn = e.target;

        if (currentBtn == customBtn) {
            customBtnFunc();

        } else {
            currentBtn.style.backgroundColor = 'hsl(172, 67%, 45%)';
            currentBtn.style.border = 'none';
            percent = e.target.value.slice(0, -1);

            checkForMissingFields();
        }
    }

}

function checkForMissingFields() {
    if (numberOfPeople.value == '' || bill.value == '' || !currentBtn) {
        console.log('missing');
    } else {
        resetBtn.classList.remove('disabled')
        calcPercents();
    }
}

function calcPercents() {

    const people = Number(numberOfPeople.value);
    const billValue = Number(bill.value);

    if (people > 0) {

        const tipAmount = (billValue * (percent / 100)) / people;
        const total = (billValue + (tipAmount * people)) / people;

        document.querySelector('.tip-amount').textContent = tipAmount.toFixed(2);
        document.querySelector('.total-price').textContent = total.toFixed(2);
    }

    return
}

function peopleCount() {
    isTouched = true;
}

function resetCalc() {
    resetBtn.classList.add('disabled');
    numberOfPeople.value = '';
    bill.value = '';
    customBtn.value = ''
    document.querySelector('.tip-amount').textContent = '0.00';
    document.querySelector('.total-price').textContent = '0.00';
    currentBtn.style.backgroundColor = 'hsl(183, 100%, 15%)';
}