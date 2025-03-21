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
});
