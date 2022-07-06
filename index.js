submitButton.onclick = function() {
    let weight = document.getElementById("userWeight").value;
    let height = document.getElementById('userHeight').value;
    let age = document.getElementById('userAge').value;
    let gender = document.querySelector('input[name = "gender"]:checked').value;
    let imt = weight/((height/100)**2);
    let result;
    if (gender == 'male') {
        result = (height - 100);;
    } else result = (height - 110);

    if(age < 30){
        result=result-((result/100)*11);
    }else if (age > 50){
        result=result+((result/100)*6);
    }

    alert(result + "Индекс Массы вашего тела =" + imt);
}