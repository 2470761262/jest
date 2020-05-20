import math from '../js/math';
//const math = require('../js/math');
test("测试加法 3+7", () => {
    expect(math.add(3, 7)).toBe(10);
})
test("测试减法 3+3", () => {
    expect(math.minus(3, 3)).toBe(0);
})
test("测试乘法 3*3", () => {
    expect(math.multi(3, 3)).toBe(9);
})