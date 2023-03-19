export const getNestedArrayWithRandomNumbers = (minArrayLength, maxArrayLength, minArrayValue, maxArrayValue, numNestedArrays) => {
    const nestedArray = [];
    for (let i = 0; i < numNestedArrays; i++) {
        const randomNumbersArray = new Array(Math.floor(Math.random() * (maxArrayLength-minArrayLength+1))+minArrayLength);
        for (let j = 0; j < randomNumbersArray.length; j++) {
            randomNumbersArray[j] = Math.floor(Math.random() * (maxArrayValue-minArrayValue+1))+minArrayValue;
        }
        nestedArray.push(randomNumbersArray);
    }
    return nestedArray;
}