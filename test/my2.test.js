import my2 from '../js/my2';


let counter = null;

beforeAll(() => {
    console.log("beforeAll");
})

//如果是异步的beforeEach 和afterEach 基本和之前的异步expect处理异步函数的方式一样
//1. 异步的callback 使用done
//2. 直接return Promise
//3. 使用async + await 
// beforeEach((done) => {
//     setTimeout(() => {
//         console.log("每一个测试用例都会执行此钩子函数");
//         counter = new my2.Counter();
//         done();
//     }, 100)
// })
// beforeEach(() => {
//     return new Promise((r, s) => {
//         setTimeout(() => {
//             console.log("每一个测试用例都会执行此钩子函数");
//             counter = new my2.Counter();
//             r();
//         }, 100)
//     })
// })
// 每一个测试用例之前都会执行此钩子函数
beforeEach(() => {
    console.log("每一个测试用例都会执行此钩子函数");
    counter = new my2.Counter();
})
// 每一个测试用例之后都会执行此钩子函数
afterEach(() => { })
afterAll(() => {
    console.log("afterAll");
})

//如果一个文件用例过多可以给它们分组如果不想分文件的话
//每一个describe 都可以拥有自己的beforeAll,beforeEach,afterEach,afterAll
//describe是可以互相嵌套的，类似块级作用域，自己没有作用域会去寻找上级的钩子函数,同级是不会被影响的
describe('Counter 的测试代码 测试增加的方法', () => {
    //test.only 将会忽略其他没有only的测试用例
    //用例过多的时候会被干扰，添加only可以针对性的写测试用例
    test.only('测试 Counter 中的 addOne方法', () => {
        console.log("addOne方法 测试用例");
        counter.addOne()
        expect(counter.number).toBe(1);
    })
})

describe('Counter 的测试代码 测试减法的方法', () => {
    test('测试 Counter 中的 minuseOne方法', () => {
        console.log("minuseOne方法 测试用例");
        counter.minuseOne()
        expect(counter.number).toBe(-1);
    })
})

