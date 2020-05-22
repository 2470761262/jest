let util = jest.fn(()=>{
    console.log(1111111111);
    return 'good';
});
util.prototype.a = jest.fn(()=>{
    console.log(222222222222);
    return 'good';
});
util.prototype.b = jest.fn();

export default util;