function dropdownButtonClicked(no) {
    let x = document.querySelector(`.content${no}`)
    let y = document.querySelector(`.dropButton${no}`)

    if (y.innerHTML == 'v') {
        y.innerHTML = '^'
        x.classList.remove('hidden')
    } else if (y.innerHTML == '^') {
        y.innerHTML = 'v'
        x.classList.add('hidden');
    }
}

function dropdownItemClicked(no1, no2) {
    document.querySelector(`.content${no1}`).classList.add('hidden');
    document.querySelector(`.dropButton${no1}`).innerHTML = 'v';
    document.querySelector(`.item${no1}`).innerHTML = document.querySelector(`.drop${no1}Choice${no2}`).innerHTML
}

function convert() {
    let temp = document.querySelector('.js-temperatureInput').value;
    let fromUnit = document.querySelector('.item1').innerHTML
    let toUnit = document.querySelector('.item2').innerHTML

    if (fromUnit == toUnit) {
        document.querySelector('.js-temperatureOutput').innerHTML = `The temperature remains same which is ${temp} ${fromUnit}`;
    } else if (fromUnit == 'Celsius' && toUnit == 'Fahrenheit') {
        document.querySelector('.js-temperatureOutput').innerHTML = `${temp} ${fromUnit} is ${(temp * 9 / 5) + 32} ${toUnit}`;
    } else if (fromUnit == 'Celsius' && toUnit == 'Kelvin') {
        document.querySelector('.js-temperatureOutput').innerHTML = `${temp} ${fromUnit} is ${temp + 273.15} ${toUnit}`;
    } else if (fromUnit == 'Fahrenheit' && toUnit == 'Celsius') {
        document.querySelector('.js-temperatureOutput').innerHTML = `${temp} ${fromUnit} is ${(temp - 32) * 5 / 9} ${toUnit}`;
    } else if (fromUnit == 'Fahrenheit' && toUnit == 'Kelvin') {
        document.querySelector('.js-temperatureOutput').innerHTML = `${temp} ${fromUnit} is ${((temp - 32) * 5 / 9) + 273.15} ${toUnit}`;
    } else if (fromUnit == 'Kelvin' && toUnit == 'Celsius') {
        document.querySelector('.js-temperatureOutput').innerHTML = `${temp} ${fromUnit} is ${temp - 273.15} ${toUnit}`;
    } else if (fromUnit == 'Kelvin' && toUnit == 'Fahrenheit') {
        document.querySelector('.js-temperatureOutput').innerHTML = `${temp} ${fromUnit} is ${((temp - 273.15) * 9 / 5) + 32} ${toUnit}`;
    } else {
        document.querySelector('.js-temperatureOutput').innerHTML = 'Invalid Input';
    }
}