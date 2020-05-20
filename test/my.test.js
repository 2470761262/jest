test("测试 toBe", () => {
    expect(10).toBe(10);
})

test("测试toEqual", () => {
    const a = { one: 1 };
    expect(a).toEqual({ one: 1 });
})

test("测试toBeNull", () => {
    expect(null).toBeNull();
})

test("测试toBeUndefined", () => {
    expect(undefined).toBeUndefined();
})

// test("测试toBeDefined", () => {
//     expect(undefined).toBeDefined();
// })

test("测试toBeTruthy", () => {
    //任何可以为true的
    expect(true).toBeTruthy();
})

test("测试toBeFalsy", () => {
    // false or 0 or ‘’
    expect(false).toBeFalsy();
})

test("测试not 匹配器 取反", () => {
    // false or 0 or ‘’
    expect(true).not.toBeFalsy();
})
//toBeGreaterThanOrEqual
test("测试 toBeGreaterThan A数字比给定数字B大", () => {
    expect(10).toBeGreaterThan(5);
})
//toBeLessThanOrEqual
test("测试 toBeLessThan A数字比给定数字B小", () => {
    expect(10).toBeLessThan(15);
})

test("测试 浮点数 toBeCloseTo", () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
})

//Array Set
test("测试 数组是否包含 toContain", () => {
    //toBeMatch 可以传入正则
    expect([1, 5, 'sorry']).toContain('sorry');
})


//这个方法抛出一个异常
const throwNewError = () => {
    throw new Error('this new scope Error')
}
test("测试 异常匹配 toThrow", () => {
    //toBeMatch 可以传入正则
    //toThrow 可以传入message 指定和报错的信息要相同 
    expect(throwNewError).toThrow();
})

