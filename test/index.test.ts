import * as calculator from "../src/calculator";

// mock readline module
jest.mock("readline", () => ({
    createInterface: jest.fn().mockReturnValue({
        on: jest.fn().mockImplementation((event: string, listener: (answer: string) => void) => {
            if (event === "line") {
                listener("1\n2,3"); // mock input from the user's stdin
            }
            if (event === "close") {
                listener(""); // mock ctrl+d to end the input
            }
        }),
    }),
}));

describe("index.ts tests", () => {
    it("should call `add` and print the result for given input", () => {
        // console.log mock
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

        // calculator's add function mock
        const addSpy = jest.spyOn(calculator, "add");

        require("../src/index");

        expect(addSpy).toHaveBeenCalledWith("1\n2,3");
        expect(logSpy).toHaveBeenCalledWith(`Result: ${addSpy.mock.results[0].value}`);

        addSpy.mockRestore();
        logSpy.mockRestore();
    });
});
