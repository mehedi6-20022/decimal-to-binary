


const binaryNumber = document.getElementById('binary');

const Btn = document.getElementById('submit');

Btn.addEventListener('click', function () {
    const inputBtn = document.getElementById('input-btn').value;
    if (inputBtn === ''){
        alert('Please input a number');
    } else if (inputBtn <= 0){
        alert('please input a positive number');
    } else {
        binaryNumber.style.visibility = 'visible';
    }
    const result = Number(inputBtn).toString(2);
        binaryNumber.innerText = result;
});

