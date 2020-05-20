import { runCallBack } from '../js/my3';

test('测试 callback  run ', () => {
    //判断一个函数是否有被执行 第一种
    // let Flag = false;
    // const callback = () => {
    //     Flag = true;
    // }
    // runCallBack(callback)
    // expect(Flag).toBe(true)

    //---------------------------

    //使用jest的mock来判断一个方法是否有没有被调用
    const func = jest.fn();
    runCallBack(func)
    //toBeCalled判断一个函数是否有被调用，需要是mock创建的函数
    //自己定义的不行
    /**
     *  func里有个mock属性 里面有各种说明 
     *  calls : 代表被执行几次，里面包含了每次执行时给传递的参数列表
     *  invocationCallOrder代表执行的顺序
     *  results
     */
    expect(func).toBeCalled()
})