//Сравнения
const comparisonInt = 5>4;
console.log(comparisonInt);

const comparisonStr = "2" > "12";
console.log(comparisonStr);

const comparisonUndefinedNull = undefined == null;
console.log(comparisonUndefinedNull);

const comparisonUndefinedNullBulean = undefined === null;
console.log(comparisonUndefinedNullBulean);

const comparisonNullStr = null == "\n0\n";
console.log(comparisonNullStr);

const comparisonNullStrBulean = null === +"\n0\n";
console.log(comparisonNullStrBulean);

//Условия
let timesOfDay="ночь";
let wife=true;
if (timesOfDay=="утро" & wife==true){
        result="Поебись и позавтракай";
    }else if (timesOfDay=="утро" & wife==false){
        result="Подрочи и позавтракай";
    }else if (timesOfDay=="день"){
        result="Потрень и пообедай";
    } else if (timesOfDay=="вечер"){
        result="Поужинай и отдохни";
    } else result="Спи!";
console.log(result);
