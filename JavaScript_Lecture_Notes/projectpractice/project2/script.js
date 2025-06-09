

    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const results = document.querySelector('#results');
        if (height === '' || height < 0 || isNaN(height)) {
            results.appendChild(document.createTextNode('Kindly enter a valid height!'))
        }
        if (weight === '' || weight < 0 || isNaN(weight)) {
            results.appendChild(document.createTextNode('Kindly enter a valid weight!'))
        }
        else {
            const bmi = (weight / ((height * height) / 1000)).toFixed(2)
            //show results
            if (bmi < 18.6) {
                results.innerHTML = `<span>BMI: ${bmi}. You are underweight!</span>`
            }

            else if (bmi >= 18.6 && bmi < 24.9) {
                results.innerHTML = `<span>BMI: ${bmi}. You have normal BMI!</span>`
            }

            else {
                results.innerHTML = `<span>BMI: ${bmi}. You are overweight!</span>`
            }



        }
    });
