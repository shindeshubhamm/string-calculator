import { add } from "../src/calculator";

describe("Calculator", () => {
    test("should return 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });

    test("should return the sum of any number of comma separated numbers", () => {
        expect(add("1,2")).toBe(3);
        expect(add("1,2,3")).toBe(6);
        expect(add("1,2,3,4,5")).toBe(15);
    });

    test("should return the sum of any number of comma separated numbers with new lines", () => {
        expect(add("1\n2,3")).toBe(6);
        expect(add("1\n2,3\n4,5")).toBe(15);
    });

    test("should support custom delimiters specified at the beginning of the string", () => {
        expect(add("//;\n1;2")).toBe(3);
        expect(add("//|\n1|2|3")).toBe(6);
        expect(add("//@\n1@2@3@4@5")).toBe(15);
    });

    test("should support existing delimiters with custom delimiters", () => {
        expect(add("1,2\n3")).toBe(6);
        expect(add("1\n2,3\n4,5")).toBe(15);
        expect(add("//;\n1;2\n3;4,5")).toBe(15);
    });

    test("should support delimiters of any length", () => {
        expect(add("//***\n1***2***3")).toBe(6);
        expect(add("//abc\n1abc2abc3")).toBe(6);
        expect(add("//abcdef\n1abcdef3")).toBe(4);
    });

    test("should throw an exception for negative numbers", () => {
        expect(() => add("-1,2")).toThrow("negative numbers not allowed -1");
        expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
        expect(() => add("//;\n1;-2;-3;4;-5")).toThrow("negative numbers not allowed -2,-3,-5");
    });
});
