// Вы должны разделить данный массив на два массива.
// Если в нем нечетное количество элементов,
// то в первом массиве должно быть больше элементов.
// Если в нем нет элементов,
// то должны быть возвращены два пустых массива.
const splitList = (arr) => {
    const arraySpliter = Math.ceil(arr.length / 2);
return [
    arr.slice(0, arraySpliter),
    arr.slice(arraySpliter, arr.length)
]
};

console.log(splitList([1,2,3,4,5]))


//Необходимо определить, все ли элементы массива равны.

const allTheSame = (array) => 
    array.reduce (
        (acc,value,index)=>
            array[index-1] 
            ? array[index-1] == value 
            : acc , false
    )

console.log(allTheSame([1,1,1]));

// Вам надо проверить, что 2 данные строки изометричны.
// Это значит что символ из одной строки может стать в соответствие символам из другой строки.
// Один символ одной строки может соответствовать только одному символу другой строки.
// Два или более символа одной строки могут соответствовать одному символу другой строки, но не наоборот.

const getChiper = (str) =>
str.split('').reduce((
    prev, value, index, array)=>
    array[index-1] == value
    ? [...prev.slice (0,prev.lenght-1), 2]
    : [...prev, 1], []).join('')

    const isometricString = (str, str1) => getChiper(str) == getChiper(str1);
    
    console.log(isometricString('аввмгг', 'бсснрр'))