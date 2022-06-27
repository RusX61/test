//1. Напишите скрипт, который считает количество секунд в часе,сутках,месяце.
const secInMinute = 60;
const secInHour = secInMinute * 60;
const secInDay = secInHour * 24;
const secInWeek = secInDay * 7;
console.log("Секунд в одном часе = " + secInHour);
console.log("Секунд в одних  сутках = " + secInDay);
console.log("Секунд в одной неделе = " + secInWeek);

// 2. В переменной month лежит какое-то число из интервала от 1 до 12. Определить в какое время года попадает выбранный месяц.

let month = 11;
if (month === 12 || month === 1 || month === 2){
    console.log("Сейчас Зима");
}else if (month === 3 || month === 4 || month === 5){
    console.log("Сейчас Весна");
} else if (month === 6 || month === 7 || month === 8){
    console.log("Сейчас Лето");
}else if (month === 9 || month === 10 || month === 11){
 console.log("Сейчас Осень");
} else console.log("Введено неверное значение. Введите начение от 1 до 12.");

// 3. Дан объект с ключами "Минск","Москва", "Киев" и элементами "Белорусь", "Россия", "Украина".С помощью цикла for вывести на экран строки, формата "Минск - это Белорусь".
let capitals = {
    "Минск":"Белорусь",
    "Москва":"Россия",
    "Киев":"Украина"
}
for (key in capitals){
    console.log(key + " это - " + capitals[key]);
}

// 4. Сделать функцию,которая принимает параметром число от 1 до 7, а  возвращает день недели на русском языке.

function showDayOfWeek(numberOfDay){

    if (numberOfDay==1){
        console.log("Понедельник");
    }else if (numberOfDay==2){
        console.log("Вторник");
    }else if (numberOfDay==3){
        console.log("Среда");
    }else if (numberOfDay==4){
        console.log("Четверг");
    }else if (numberOfDay==5){
        console.log("Пятница");
    }else if (numberOfDay==6){
        console.log("Суббота");
    }else if (numberOfDay==7){
        console.log("Воскресенье");
    } else console.log("Вы ввели не верное значение. Введите начение от 1 до 7.");
}

showDayOfWeek(3);