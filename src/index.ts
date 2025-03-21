import * as readline from "readline";

import { add } from "./calculator";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = "";

console.log("Enter Calculator Input (press Ctrl+D when done):");

rl.on("line", (line) => {
    input += line + "\n";
});

rl.on("close", () => {
    input = input.trim();
    try {
        const result = add(input);
        console.log(`Result: ${result}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("An unknown error occurred");
        }
        process.exit(1);
    }
});
