import * as calculator from "../src/calculator";

// mock readline module
jest.mock("readline", () => ({
    createInterface: jest.fn().mockReturnValue({
        question: jest.fn((query: string, callback: (answer: string) => void) => {
            callback("1,2"); // mock input from the user's stdin
        }),
        close: jest.fn(),
    }),
}));

describe("index.ts tests", () => {
    it("should call add and print the result for given input", () => {
        // console.log mock
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

        // calculator's add function mock
        const addSpy = jest.spyOn(calculator, "add");

        require("../src/index");

        expect(addSpy).toHaveBeenCalledWith("1,2");
        expect(logSpy).toHaveBeenCalledWith(addSpy.mock.results[0].value);

        addSpy.mockRestore();
        logSpy.mockRestore();
    });
});
