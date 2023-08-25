const Factorial = require('./Factorial');

test(" factorial of 0" , () => {
    const result = Factorial(0);
    expect(result).toBe(1);
});

test(" factorial of 1" , () => {
    const result = Factorial(1);
    expect(result).toBe(1);
});

test("factorial of 5" , () => {
    const result = Factorial(5);
    expect(result).toBe(120);
});

test("factorial of 10" , () => {
    const result = Factorial(10);
    expect(result).toBe(3628800);
});



