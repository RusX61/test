function sum(a,b){
    let result = a+b;
    console.log(result);
}
sum(4,66);

function x(a,b) {
    return a * b;
}
const result = x(9,7);
console.log(result);

function alrt(){
    alert ('Сказано же было не нажимать,долбоеб!')
}

const button = document.querySelector('button');
button.addEventListener ('click', alrt);
button.addEventListener ('click', sum);