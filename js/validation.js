export const inputValidation = (message, minValue = Number.NEGATIVE_INFINITY, maxValue = Number.POSITIVE_INFINITY) => {
    let input;
    while (true){
        input = prompt(message);
        if(input === null){
            return null;
        }

        const parsedInput = parseInt(input);

        if (!isNaN(parsedInput) && parsedInput >= minValue && parsedInput <= maxValue){
            return parsedInput;
        }
        alert(`Invalid input: ${input}. Input must be a number between ${minValue} and ${maxValue}.`)
    }
}


