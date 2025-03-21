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
    console.log(`Result: ${add(input)}`);
});
