const percentBtns = document.querySelector('.btns-container');
percentBtns.addEventListener('click', calcPercents)
const numberOfPeople = document.querySelector('.people-input')
numberOfPeople.addEventListener('click', peopleCount)

const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', resetCalc);

const bill = document.querySelector('.bill-input');
let currentBtn;

let isTouched = false;

document.onclick = () => {

    if (isTouched == true) {
        if (numberOfPeople != document.activeElement) {
            if (numberOfPeople.value < 0 || numberOfPeople.value == '') {
                document.querySelector('.not-zero').style.display = 'block'
                document.querySelector('.sign-people').style.border = '1px solid red'
            } else {
                document.querySelector('.not-zero').style.display = 'none'
                document.querySelector('.sign-people').style.border = 'none'
                isTouched = false;
            }
        }
    }
}

function calcPercents(e) {
    currentBtn = e.target;
    currentBtn.style.backgroundColor = 'hsl(172, 67%, 45%)';

    resetBtn.classList.remove('disabled')

    const people = Number(numberOfPeople.value);
    const billValue = Number(bill.value);

    if (people > 0) {
        const percent = e.target.textContent.slice(0, -1);
        const tipAmount = (billValue * (percent / 100)) / people;
        const total = (billValue + (tipAmount * people)) / people;

        document.querySelector('.tip-amount').textContent = tipAmount.toFixed(2);
        document.querySelector('.total-price').textContent = total.toFixed(2);
    }



}

function peopleCount(e) {
    isTouched = true;
}

function resetCalc() {
    resetBtn.classList.add('disabled');
    numberOfPeople.value = '';
    bill.value = '';
    document.querySelector('.tip-amount').textContent = '0.00';
    document.querySelector('.total-price').textContent = '0.00';
    currentBtn.style.backgroundColor = 'hsl(183, 100%, 15%)';
}