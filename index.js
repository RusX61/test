
// for(let i=0; i< borrowers.length; i+=1){
//     if (i==0){
//         totalPercent = basicPercent - discounts[0];
//         console.log(borrowers[i] + ' : ' + totalPercent + '%');
//     } else if (i==1){
//         totalPercent = basicPercent - discounts[1];
//         console.log(borrowers[i] + ' : ' +totalPercent + '%');
//     } else if (i==2) {console.log(borrowers[i] + ' : ' + basicPercent + '%')
//     } else if (i==3){
//         totalPercent = basicPercent - discounts[2];
//         console.log(borrowers[i] + ' : ' + totalPercent + '%');
//     }
// }


// for(let i=0; i< borrowers.length; i+=1){
//     if(i<3){
//     totalPercent = basicPercent - discounts[i];
//     console.log(borrowers[i] + ' : ' + totalPercent + '%');
//     }else console.log(borrowers[i] + ' : ' + basicPercent + '%');
// }

submitButton.onclick = function() {
    let weight = document.getElementById("userWeight").value;
    let height = document.getElementById('userHeight').value;
    let age = document.getElementById('userAge').value;
    let gender = document.querySelector('input[name = "gender"]:checked').value;
    let result ;
    if (gender = male){
        result = (height - 100)*1.15;
    } else result = (height - 110)*1.15;
    alert(result);
}