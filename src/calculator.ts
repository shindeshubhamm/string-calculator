export const add = (numbers: string): number => {
    if (numbers === "") {
        return 0;
    }

    let delimiter = /[\n,]/;

    // custom delimiter
    if (numbers.startsWith("//")) {
        const firstNewLine = numbers.indexOf("\n");
        const customDelimiter = numbers.substring(2, firstNewLine);
        delimiter = new RegExp(`[\n,${customDelimiter}]`);
        numbers = numbers.substring(firstNewLine + 1);
    }

    const numbersArray = numbers.split(delimiter).map(Number);

    // check for negative numbers
    const negativeNumbers = numbersArray.filter((n) => n < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
    }

    return numbersArray.reduce((sum, number) => sum + number, 0);
};
