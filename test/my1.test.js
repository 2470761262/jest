//模拟异步请求
function asyncGetDataDemo () {
    return new Promise((r, s) => {
        setTimeout(() => {
            r({ good: 5, sorry: true, children: { hello: true } })
        }, 1500)
    })
}

test("测试 异步函数", () => {
    //toBeMatch 可以传入正则
    //toThrow 可以传入message 指定和报错的信息要相同
    //如果异步函数不是Promise的 需要执行test函数传递的done参数来告诉测试用例什么时候结束的
    //如果是Pirmise返回的异步函数 则直接返回Promise即可不用执行done函数
    return asyncGetDataDemo().then((e) => {
        expect(e).toEqual({ good: 5, sorry: true, children: { hello: true } });
        // done();
    })
})

test("测试 异步函数", () => {
    // expect.assertions 代表之后的测试语法至少执行一次
    expect.assertions(1);
    return asyncGetDataDemo().then((e) => {
        expect(e).toEqual({ good: 5, sorry: true, children: { hello: true } });
        // done();
    })
})
// 也可以适应写法3 async await
test("测试 异步函数 2写法", () => {
    //toMatchObject 目标object里包含传入的object即可
    //resolves 
    //rejects
    return expect(asyncGetDataDemo()).resolves.toMatchObject({
        children: { hello: true }
    })
})