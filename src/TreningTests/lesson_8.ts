// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    return nums.reduce((acc, n) => acc + n)

}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a === b && b === c) {
        return "10"
    } else if (a === b || b === c || c === a) {
        return "01"
    } else if (a + b > c && a + c > b && b + c > a) {
        return "11"
    } else return "00"

}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    let str = number.toString()
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        sum += +str[i]
    }
    return sum
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let sump = arr[0]
    let sumn = 0
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sump += arr[i];
        } else {
            sumn += arr[i];
        }
    }
    return sump > sumn
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    return array.filter(n => n > 0 && n % 2 === 0).map(n => n * n)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    if (N === 0) {
        return 0
    } else {
        return (N * (N + 1)) / 2
    }
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    const result: number[] = [];
 
    let remainingSum = amountOfMoney;

    for (const currentBanknote of banknotes) {
        const banknotesCount = Math.floor(remainingSum / currentBanknote);
        remainingSum -= banknotesCount * currentBanknote;
        result.push(...Array(banknotesCount).fill(currentBanknote));
    }

    return result;
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
}