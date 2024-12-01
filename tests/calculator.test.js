import calc from './../src/modules/calculator';
import math from './../src/modules/mathUtils';

describe("Calculator", () => {
    test("add() should return a sum", () => {
        expect(calc.add(2, 1)).toBe(3);
    })

    test("subtract() should return a difference", () => {
        expect(calc.subtract(7, 11)).toBe(-4);
        expect(calc.subtract(11, 7)).toBe(4);
    })

    test("multiply() should return a product", () => {
        expect(calc.multiply(7, 11)).toBe(77);
        expect(calc.multiply(11, 7)).toBe(77);
    })

    test("divide() should return a result", () => {
        expect(calc.divide(1, 5)).toBe(0.2);
        expect(calc.divide(5, 1)).toBe(5);
    })

    test("divide() by zero is undefined", () => {
        //expects a nested function that throws the error
        expect(() => calc.divide(2, 0)).toThrow(Error);
    })

    test("negative results are as expected", () => {
        expect(calc.multiply(7, 11)).toBe(77);
        expect(calc.multiply(-11, 7)).toBe(-77);
        expect(calc.multiply(7, -11)).toBe(-77);
        expect(calc.multiply(-11, -7)).toBe(77);
    })
})

describe("Math Utils", () => {
    //alias of test()
    it("returns correct factorial", () => {
        expect(math.factorial(4)).toBe(24);
    })

    it("returns base case of factorial", () => {
        expect(math.factorial(0)).toBe(1);
    })

    
})