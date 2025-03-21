import * as readline from "readline";

import { add } from "./calculator";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter Calculator Input: ", (answer) => {
    console.log(add(answer));
    rl.close();
});
