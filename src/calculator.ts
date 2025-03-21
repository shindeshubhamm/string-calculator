export const add = (numbers: string): number => {
    if (numbers === "") {
        return 0;
    }

    const numbersArray = numbers.split(",").map(parseFloat);
    return numbersArray.reduce((sum, number) => sum + number, 0);
};
