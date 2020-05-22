/**
 * 使用jest模拟类 当它去模拟uitl发现是一个类
 * 会模拟util下的方法
 * 因为uitl里的方法可能会很复杂，但是我们并不关心，只是需要它有执行过
 * 或者我们直接返回参数跳过里面的执行过程，可以节约执行时间
 * 直接使用mock代理uitl是自动模拟的
 * 如果里面的有些模拟需要自己定义
 * 则到__mocks__文件里定义对应的文件来模拟
//  */
jest.mock('../js/util');
import util from '../js/util';

function mockutil(){
    const a = new util();
    a.a();
    a.b();
}

test('测试 class的mock',()=>{
    mockutil();
    const b = new util();
    expect(util).toBeCalled();
    expect(util.mock.instances[0].a).toBeCalled();
    const aresult = b.a();
    console.log(aresult,"aresult");
    expect(aresult).toBe('good');
})


// jest.mock('../api/demo'); // 使用jest模拟demo,当执行测试用例时，就会去__mocks__文件下去找demo.js
// import { fetchData } from '../api/demo' // 通过jest模拟demo之后，再通过import引入fetchData
// // 这里引的fetchData是我们模拟的fetchData
// test('fetchData 测试', () => {
// 	return fetchData().then(data => {
// 		expect(eval(data)).toEqual('123')
// 	})
// })