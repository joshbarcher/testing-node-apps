import calculator from './../src/modules/calculator.js';

test('Testing add()!', ()  => {
    expect(calculator.add(7, 6)).toBe(13);
})

test('Testing subtract()!', ()  => {
    expect(calculator.subtract(7, 6)).toBe(1);
})