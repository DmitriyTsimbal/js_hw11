import {getNestedArrayWithRandomNumbers} from "./random-array.js";
//Знайти суми елементів у вказаній області
//5) Суму парних рядків
// 6) Суму непарних стовпців
// 7) У парних рядках – непарні стовпці, у непарних – парні.


const NESTED_ARRAY = getNestedArrayWithRandomNumbers(3, 6, 1, 100, 4)

const getSumOfNestedArray = (userArray) => {
    const NESTED_ARRAY_SUM = [];
    for (let arrayRow of userArray) {
        let arraySum = 0;
        for (let arrayCol of arrayRow) {
            arraySum += arrayCol;
        }
        NESTED_ARRAY_SUM.push(arraySum)
    }
    return NESTED_ARRAY_SUM;
}



const getSumOfPairRows = (userArray) => {
    let sum = 0;
    for (let rowNumber = 0; rowNumber < userArray.length; rowNumber++){
        if (rowNumber % 2 === 0){
            for (let col of userArray[rowNumber]) {
                sum += col
            }
        }
    }
    return sum;
}

const getSumOfNonPairCols = (userArray) => {
    let sum = 0;
    for (let row of userArray) {
        for (let colNumber = 0; colNumber < row.length; colNumber++) {
                if (colNumber % 2 !== 0){
                    sum += row[colNumber]
                }
            }
    }
    return sum;
}

const getSumOfPairAndNotPairCols = (userArray) => { //У парних рядках – непарні стовпці, у непарних – парні.
  let [sumPairRows, sumNotPairRows] = [0,0];
  for (let rowNumber = 0; rowNumber < userArray.length; rowNumber++){
      for (let colNumber = 0; colNumber < userArray[rowNumber].length; colNumber++){
          if (rowNumber % 2 === 0 &&  colNumber % 2 !== 0)
              sumPairRows += userArray[rowNumber][colNumber]
           else if (rowNumber % 2 !== 0 && colNumber % 2 === 0) sumNotPairRows += userArray[rowNumber][colNumber]
      }
  }
  return [sumPairRows, sumNotPairRows];
}



//Web render

const [SUM_OF_FIRST_NESTED_ARRAY,SUM_OF_SECOND_NESTED_ARRAY,SUM_OF_THIRD_NESTED_ARRAY,SUM_OF_FOURTH_NESTED_ARRAY] = getSumOfNestedArray(NESTED_ARRAY);

const PAIRED_ROWS_SUM = getSumOfPairRows(NESTED_ARRAY);

const NON_PAIRED_COLS_SUM = getSumOfNonPairCols(NESTED_ARRAY);

const [PAIRED_ROWS_NON_PAIRED_COLS_SUM, NON_PAIRED_ROWS_PAIRED_COLS_SUM] = getSumOfPairAndNotPairCols(NESTED_ARRAY)

const ARRAY_SECTION = document.querySelector('.array-section');
ARRAY_SECTION.innerHTML += `Array: ${NESTED_ARRAY.join(' |||| ')}`;
const ARRAY_SECTION_SUM1 = document.querySelector('.array-section__sum1');
ARRAY_SECTION_SUM1.innerHTML += `Nested array sum 1: ${SUM_OF_FIRST_NESTED_ARRAY}`;

const ARRAY_SECTION_SUM2 = document.querySelector('.array-section__sum2');
ARRAY_SECTION_SUM2.innerHTML += `Nested array sum 2: ${SUM_OF_SECOND_NESTED_ARRAY}`;

const ARRAY_SECTION_SUM3 = document.querySelector('.array-section__sum3');
ARRAY_SECTION_SUM3.innerHTML += `Nested array sum 3: ${SUM_OF_THIRD_NESTED_ARRAY}`;

const ARRAY_SECTION_SUM4 = document.querySelector('.array-section__sum4');
ARRAY_SECTION_SUM4.innerHTML += `Nested array sum 4: ${SUM_OF_FOURTH_NESTED_ARRAY}`;

const PAIRED_ROWS_SUM_SECTION = document.querySelector('.array-section__sum5');
PAIRED_ROWS_SUM_SECTION.innerHTML += `Nested array sum 4: ${PAIRED_ROWS_SUM}`;

const NON_PAIRED_COLS_SUM_SECTION = document.querySelector('.array-section__sum6');
NON_PAIRED_COLS_SUM_SECTION.innerHTML += `Nested array sum 4: ${NON_PAIRED_COLS_SUM}`;

const PAIRED_ROWS_NON_PAIRED_COLS_SUM_SECTION = document.querySelector('.array-section__sum7');
PAIRED_ROWS_NON_PAIRED_COLS_SUM_SECTION.innerHTML += `Nested array sum 4: ${PAIRED_ROWS_NON_PAIRED_COLS_SUM}`;

const NON_PAIRED_ROWS_PAIRED_COLS_SUM_SECTION = document.querySelector('.array-section__sum8');
NON_PAIRED_ROWS_PAIRED_COLS_SUM_SECTION.innerHTML += `Nested array sum 4: ${NON_PAIRED_ROWS_PAIRED_COLS_SUM}`;

