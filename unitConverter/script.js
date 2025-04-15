let input = document.getElementById('inputbox');
    let select = document.getElementById('unittype');
    let convert = document.querySelector('#convertbtn');
    let mode = document.getElementById("darkModeBtn")
    mode.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    })
    convert.addEventListener("click", () => {
        let inputvalue = parseFloat(input.value);
        if (select.value == 'Celsius') {
            input.value = ((inputvalue * 9 / 5) + 32).toFixed(2);
        }
        else if (select.value == 'fahrenheit') {
            input.value = ((inputvalue - 32) * 5 / 9).toFixed(2);
        }
        else if (select.value == 'Feet') {
            input.value = (inputvalue * 12).toFixed(2);
        }
        else if (select.value == 'inches') {
            input.value = (inputvalue / 12).toFixed(2);
        }
        else if (select.value === 'kilometers') {
            input.value = (inputvalue * 0.621371).toFixed(2);
        }
        else if (select.value === 'miles') {
            input.value = (inputvalue / 0.621371).toFixed(2);
        }
        setTimeout(() => {
            input.value = "";
        }, 2000);
    })