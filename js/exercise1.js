import {getNestedArrayWithRandomNumbers} from "./random-array.js";
//Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
// 1) загальний прибуток кожного масиву за тиждень;
// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
// 3) загальний прибуток за робочі дні
// 4) загальний прибуток за вихідні дні
// 5) максимальний прибуток за середу
// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
// 7) відсортувати кожен тиждень за зростанням
// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).


const SHOPS_PROFIT_ARRAY = getNestedArrayWithRandomNumbers(7, 7, 10, 2000, 7);
const SHOPS_PROFIT_ARRAY_BY_HEIGHT = getNestedArrayWithRandomNumbers(7, 7, 10, 2000, 7);
const SHOPS_PROFIT_ARRAY_BY_MAX_PROFIT = getNestedArrayWithRandomNumbers(7, 7, 10, 2000, 7);
const SHOPS_PROFIT_ARRAY_BY_MAX_SUM = getNestedArrayWithRandomNumbers(7, 7, 10, 2000, 7);

const getTotalProfitPerWeek = userArray => {
    let totalProfitPerWeek = [];
    for (let arrayRow of userArray) {
        let sum = 0;
        for (let arrayCol of arrayRow) {
            sum += arrayCol
        }
        totalProfitPerWeek.push(sum);
    }
    return totalProfitPerWeek;
}

const getTotalProfitPerEveryDay = userArray => {
    let totalProfitPerEveryDay = [];
    for (let arrayRow = 0; arrayRow < userArray[0].length; arrayRow++) {
        let profitPerDay = 0;
        for (let arrayCol of userArray) {
            profitPerDay += arrayCol[arrayRow];
        }
        totalProfitPerEveryDay.push(profitPerDay);
    }
    return totalProfitPerEveryDay
}

const getTotalProfitPerWorkdays = userArray => {
    let totalProfitPerWorkdays = [];
    for (let arrayRow of userArray) {
        let sum = 0;
        for (let arrayCol = 0; arrayCol < arrayRow.length - 2; arrayCol++) {
            sum += arrayRow[arrayCol];
        }
        totalProfitPerWorkdays.push(sum);
    }
    return totalProfitPerWorkdays;
}
const getTotalProfitPerWeekends = userArray => {
    let totalProfitPerWorkdays = [];
    for (let arrayRow of userArray) {
        let sum = 0;
        for (let arrayCol = arrayRow.length - 1; arrayCol >= arrayRow.length - 2; arrayCol--) {
            sum += arrayRow[arrayCol];
        }
        totalProfitPerWorkdays.push(sum);
    }
    return totalProfitPerWorkdays;
}


const getMaxProfitForWednesday = userArray => {
    let maxValue = -Infinity;
    for (let arrayRow of userArray) {
        if (arrayRow[2] > maxValue) maxValue = arrayRow[2];
    }
    return maxValue;
}
const getAllProfitMoreThan200 = userArray => {
    let resultArray = [];
    for (let arrayRow of userArray) {
        for (let arrayCol of arrayRow) {
            if (arrayCol > 200) resultArray.push(arrayCol);
        }
    }
    return resultArray;
}

const getSortedProfitByHeight = userArray => {
    for (const el of userArray) {
        el.sort((a, b) => a - b);
    }
    return userArray;
}

const getSortedByMaxProfit = (userArray) => {
    userArray.sort((a, b) => Math.max(...a) > Math.max(...b) ? -1 : 1);
    return userArray;
}

const getSortedByMaxSum = (userArray) => {
    userArray.sort((a, b) => {
        const sumA = a.reduce((acc, val) => acc + val, 0);
        const sumB = b.reduce((acc, val) => acc + val, 0);
        return sumB - sumA;
    })
    return userArray;
}




//Web render
const PROFIT_PER_WEEK = getTotalProfitPerWeek(SHOPS_PROFIT_ARRAY);
const PROFIT_PER_EVERY_DAY = getTotalProfitPerEveryDay(SHOPS_PROFIT_ARRAY);
const PROFIT_PER_WORKDAYS = getTotalProfitPerWorkdays(SHOPS_PROFIT_ARRAY);
const PROFIT_PER_WEEKENDS = getTotalProfitPerWeekends(SHOPS_PROFIT_ARRAY);
const MAX_PROFIT_PER_WEDNESDAY = getMaxProfitForWednesday(SHOPS_PROFIT_ARRAY);
const PROFITS_MORE_THAN_200 = getAllProfitMoreThan200(SHOPS_PROFIT_ARRAY);
const PROFIT_SORTED_BY_HEIGHT = getSortedProfitByHeight(SHOPS_PROFIT_ARRAY_BY_HEIGHT);
const SORTED_BY_MAX_PROFIT = getSortedByMaxProfit(SHOPS_PROFIT_ARRAY_BY_MAX_PROFIT);
const SORTED_BY_MAX_SUM = getSortedByMaxSum(SHOPS_PROFIT_ARRAY_BY_MAX_SUM);

const PROFIT_PER_WEEK_SECTION = document.querySelector('.array-section__1');
PROFIT_PER_WEEK_SECTION.innerHTML += `Nested array sum 4: ${ PROFIT_PER_WEEK }`;
const PROFIT_PER_EVERY_DAY_SECTION = document.querySelector('.array-section__2');
PROFIT_PER_EVERY_DAY_SECTION.innerHTML += `Nested array sum 4: ${ PROFIT_PER_EVERY_DAY }`;
const PROFIT_PER_WORKDAYS_SECTION = document.querySelector('.array-section__3');
PROFIT_PER_WORKDAYS_SECTION.innerHTML += `Nested array sum 4: ${ PROFIT_PER_WORKDAYS }`;
const PROFIT_PER_WEEKENDS_SECTION = document.querySelector('.array-section__4');
PROFIT_PER_WEEKENDS_SECTION.innerHTML += `Nested array sum 4: ${ PROFIT_PER_WEEKENDS }`;
const MAX_PROFIT_PER_WEDNESDAY_SECTION = document.querySelector('.array-section__5');
MAX_PROFIT_PER_WEDNESDAY_SECTION.innerHTML += `Nested array sum 4: ${ MAX_PROFIT_PER_WEDNESDAY }`;
const PROFITS_MORE_THAN_200_SECTION = document.querySelector('.array-section__6');
PROFITS_MORE_THAN_200_SECTION.innerHTML += `Nested array sum 4: ${ PROFITS_MORE_THAN_200 }`;
const PROFIT_SORTED_BY_HEIGHT_SECTION = document.querySelector('.array-section__7');
PROFIT_SORTED_BY_HEIGHT_SECTION.innerHTML += `Nested array sum 4: ${ PROFIT_SORTED_BY_HEIGHT.join(' |||| ') }`;
const SORTED_BY_MAX_PROFIT_SECTION = document.querySelector('.array-section__8');
SORTED_BY_MAX_PROFIT_SECTION.innerHTML += `Nested array sum 4: ${ SORTED_BY_MAX_PROFIT.join(' |||| ') }`;
const SORTED_BY_MAX_SUM_SECTION = document.querySelector('.array-section__9');
SORTED_BY_MAX_SUM_SECTION.innerHTML += `Nested array sum 4: ${ SORTED_BY_MAX_SUM.join(' |||| ') }`;